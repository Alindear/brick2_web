// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;
//pragma abicoder v2;

import "./ERC20.sol";
import "./SafeTransfer.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.7/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.7/contracts/utils/Counters.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.7/contracts/access/Ownable.sol";

interface IPancakeRouter{
    function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts);
    function getAmountsIn(uint amountOut, address[] calldata path) external view returns (uint[] memory amounts);
}

interface IPrice {
    function getUsdtPrice(bytes32 name) view external returns(uint256) ;
    function getBnbPrice(bytes32 name) view external returns(uint256) ;
    function getBrickPrice(bytes32 name) view external returns(uint256) ;
    function getPrice(bytes32 name) view external returns(uint256, uint256 ,uint256) ;
}




contract Price {
    address public routerAddr = 0xD99D1c33F9fC3444f8101754aBC46c52416550D1;

    //address of token
    address public brickAddr = 0xc4893fEa8547Fb1A4D860518285AF6655424645f;
    address public usdtAddr = 0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684;

    address public wbnbAddr = 0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd;

    uint256 _oneusdt = 1e18; //pre years.

    function getUsdtPrice(bytes32 name) view  public returns(uint256){
        uint256 result;
        (result,,) = getPrice(name);

        return result;
    }

    function getBnbPrice(bytes32 name) view  public returns(uint256){
        uint256 result;
        (,result,) = getPrice(name);

        return result;
    }

    function getBrickPrice(bytes32 name) view  public returns(uint256){
        uint256 result;
        (,,result) = getPrice(name);

        return result;
    }

    function getPrice(bytes32 name) view  public returns(uint256, uint256 ,uint256){
        uint256 usdtPrice;
        uint len = length(name);
        if(len <= 3){
            usdtPrice =  200 * _oneusdt;
        }else if(len <= 4){
            usdtPrice =  80 * _oneusdt;
        }else if(len <= 5){
            usdtPrice =  30 * _oneusdt;
        }else {
            usdtPrice =  10 * _oneusdt;
        }

        uint256 bnbPrice = getBnbPriceFromUsdt(usdtPrice);
        //uint256 brickPrice = getBrickPriceFromUsdt(usdtPrice);

        return (usdtPrice,bnbPrice,0);

    }

    function getBnbPriceFromUsdt(uint256 usdtAmount)  view public returns(uint256){
        address[] memory path = new address[](2);
        path[0] = usdtAddr;
        path[1] = wbnbAddr;
        uint[] memory amounts = IPancakeRouter(routerAddr).getAmountsOut(usdtAmount,path);

        return amounts[1];
    }

    function getBrickPriceFromUsdt(uint256 usdtAmount)  view public returns(uint256){
        address[] memory path = new address[](3);
        path[0] = usdtAddr;
        path[1] = wbnbAddr;
        path[2] = brickAddr;
        uint[] memory amounts = IPancakeRouter(routerAddr).getAmountsOut(usdtAmount,path);

        return amounts[2];
    }


    function length(bytes32 string_rep) pure public returns (uint length1) {
        uint i=0;
        uint flag=0;
        while (i<string_rep.length)
        {
            if(string_rep[i]==0 && flag==0){
                i+=1;
                continue;
            }
            flag = 1;
            if (string_rep[i]>>7==0)
                i+=1;
            else if (string_rep[i]>>4==bytes1(uint8(0xE)))
                i+=3;
            else if (string_rep[i]>=bytes2(0xF601) && string_rep[i]>=bytes2(0xF64F))
                i+=4;
            else
            //For safety
                i+=1;
            length1++;
        }
    }

}



abstract contract BNSBase  is ERC721Enumerable,Ownable{

    event Deposit(address addr, bytes32 node, uint256 expired_time);

    IPrice public _price;

    struct Record {
        address owner;
        address holder;
        NodeInfo info;
    }

    struct NodeInfo {
        bytes32 name;
        bool selected;
        uint256 register_time;
        uint256 expired_time;
    }

    uint256 secondsOfYears = 86400 * 365;

    bytes32[] public knowNodes;
    address internal contractOwner;
    mapping (bytes32 => Record) internal records; // 域名和记录持有人对应关系
    mapping (address => NodeInfo[]) internal holders; // 用户和域名对应关系

    address public _brickAddr = 0xc4893fEa8547Fb1A4D860518285AF6655424645f;
    address public _usdtAddr = 0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684;

    address public marketAddr = 0xBea2e7455FB7C7F835E4C3AB1B09352d35Ba5a4e;
    mapping (address => bool) internal whitelist; // 用户和域名对应关系


    using Counters for Counters.Counter;

    // Used for generating the tokenId of new NFT minted
    Counters.Counter public _tokenIds;

    // Map the bunnyId for each tokenId
    mapping(uint256 => bytes32) public bunnyIds;
    mapping(bytes32 => uint256) public bunnyIdToTokenIds;
    mapping(address => address) referrals; //用户->邀请人，可以为0x0
    mapping(address => uint256) refFatherFee;
    mapping(address => uint256) refFatherFeeBrick;
    mapping(address => uint256) refFatherFeeUsdt;
    uint256 PAY_AMOUNT_RATE = 50; //

    function changePayment(uint256 _rate) external ownerOnly{
        PAY_AMOUNT_RATE = _rate;
    }

    /**
     * @dev Mint NFTs.
     */
    function mint(
        address _to,
        string memory _tokenURI,
        bytes32 _bunnyId
    ) internal returns (uint256) {
        uint256 tokenId = _tokenIds.current();
        _tokenIds.increment();
        bunnyIds[tokenId] = _bunnyId;
        bunnyIdToTokenIds[_bunnyId] = tokenId;
        _mint(_to, tokenId);
        _setTokenURI(tokenId, _tokenURI);
        return tokenId;
    }

    function _setBeforeTransfer(bytes32 node, address owner, address holder) internal  {
        // 1. 将旧用户的holder更新
        for(uint i=0;i<holders[records[node].holder].length;i++){
            if(holders[records[node].holder][i].name==node){
                holders[holder].push(holders[records[node].holder][i]);
                for (uint j = i; j < holders[records[node].holder].length-1; j++) {
                    holders[records[node].holder][j] = holders[records[node].holder][j+1];
                }
                holders[records[node].holder].pop();
            }
        }
        // 2. record也替换为新的
        records[node].holder = holder;
        records[node].owner = owner;
        NodeInfo memory nodeInfo = NodeInfo({
        name: node,
        selected: false,
        register_time: block.timestamp,
        expired_time: records[node].info.expired_time
        });
        records[node].info = nodeInfo;

        emit Deposit(holder,node,records[node].info.expired_time);
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
    internal virtual override
    {
        if(from!=address(0)) {
            _setBeforeTransfer(bunnyIds[tokenId],to,to);
        }
        super._beforeTokenTransfer(from, to, tokenId);
    }

    /**
     * @dev Destroys `tokenId`.
     * The approval is cleared when the token is burned.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     *
     * Emits a {Transfer} event.
     */
    function burn(address _from, uint256 _tokenId) external {
        require((msg.sender == _from) || isApprovedForAll(_from, msg.sender), "nft: illegal request");
        require(ownerOf(_tokenId) == _from, "from is not owner");
        _burn(_tokenId);
    }

    function getBunnyId(uint256 _tokenId) public view returns (bytes32) {
        return bunnyIds[_tokenId];
    }

    function getBunnyIdsByTokenIds(uint256[] memory _tokenArray) external view returns (bytes32[] memory) {
        bytes32[] memory result = new bytes32[](_tokenArray.length);
        for (uint256 i = 0; i < _tokenArray.length; i++) {
            result[i] = getBunnyId(_tokenArray[i]);
        }
        return result;
    }

    // ERC721URIStorage
    using Strings for uint256;

    // Optional mapping for token URIs
    mapping(uint256 => string) private _tokenURIs;

    /**
     * @dev See {IERC721Metadata-tokenURI}.
     */
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721URIStorage: URI query for nonexistent token");

        string memory _tokenURI = _tokenURIs[tokenId];
        string memory base = _baseURI();

        // If there is no base URI, return the token URI.
        if (bytes(base).length == 0) {
            return _tokenURI;
        }
        // If both are set, concatenate the baseURI and tokenURI (via abi.encodePacked).
        if (bytes(_tokenURI).length > 0) {
            return string(abi.encodePacked(base, _tokenURI));
        }

        return super.tokenURI(tokenId);
    }

    /**
     * @dev Sets `_tokenURI` as the tokenURI of `tokenId`.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     */
    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual {
        require(_exists(tokenId), "ERC721URIStorage: URI set of nonexistent token");
        _tokenURIs[tokenId] = _tokenURI;
    }

    // Permits modifications only by the owner of the specified node.
    modifier authorised(bytes32 node) {
        address _owner = records[node].owner;
        require(_owner == msg.sender || contractOwner == msg.sender);
        _;
    }

    modifier ownerOnly() {
        require(contractOwner == msg.sender);
        _;
    }


    function _getNodesLen(address holder) public view returns (uint) {
        uint len=0;
        for(uint i = 0; i < holders[holder].length; i++) {
            if(holders[holder][i].expired_time >= block.timestamp){
                len++;
            }
        }
        return len;
    }


    function recordExists(bytes32 node) public view returns (bool) {
        if(records[node].owner == address(0x0)) return false;
        if(records[node].info.expired_time < block.timestamp) return false;
        return true;
    }

    function _setOwner(bytes32 node, address owner) internal virtual {
        records[node].owner = owner;
    }

    function _setHolder(bytes32 node, address holder) internal virtual {
        records[node].holder = holder;
    }
    function _setInfo(bytes32 node, NodeInfo  memory nodeInfo) internal {
        records[node].info = nodeInfo;
    }


    function setIPrice(address newAddr) public payable  ownerOnly{
        _price = IPrice(newAddr);
    }
}

/**
 * The BNS registry contract.
 */
contract BNSRegistry is BNSBase{
    bytes32 public template=bytes32(0x000000000000000000000000000000000000000000000000000000002e627363);
    uint256 public superPreRegistrationTime = 0;
    uint256 public preRegistrationTime = 0;
    uint256 public publicRegistrationTime = 0;

    mapping(address => bool) public t2;
    mapping(address => bool) public t3;
    address[] public t1Nfts;

    function isT1(address _addr) public view returns (uint256) {
        uint256 _num = 0;
        for(uint i=0;i<t1Nfts.length;i++){
            _num = _num + ERC721Enumerable(t1Nfts[i]).balanceOf(_addr);
        }
        return _num;
    }

    function addT23(address[] memory _t2,address[] memory _t3) public ownerOnly {
        for(uint i = 0; i < _t2.length; i++) {
            t2[_t2[i]] = true;
        }
        for(uint i = 0; i < _t3.length; i++) {
            t3[_t3[i]] = true;
        }
    }

    function removeT23(address[] memory _t2,address[] memory _t3) public ownerOnly {
        for(uint i = 0; i < _t2.length; i++) {
            t2[_t2[i]] = false;
        }
        for(uint i = 0; i < _t3.length; i++) {
            t3[_t3[i]] = false;
        }
    }

    function isT2(address _addr) public view returns (bool) {
        return t2[_addr];
    }

    function isT3(address _addr) public view returns (bool) {
        return t3[_addr];
    }


    function setRegistrationTime(uint256 _superPreRegistrationTime,uint256 _preRegistrationTime, uint256 _publicRegistrationTime) public ownerOnly {
        superPreRegistrationTime = _superPreRegistrationTime;
        preRegistrationTime = _preRegistrationTime;
        publicRegistrationTime = _publicRegistrationTime;
    }

    function _setRef(address ref, address owner) internal virtual {
        referrals[owner] = ref;
    }
    /**
     * @dev Constructs a new BNS registrar.
     */
    constructor() ERC721("BNS NFT", "BNSNFT") {
        contractOwner = msg.sender;
        whitelist[msg.sender]=true;
        whitelist[marketAddr]=true;
        _price = IPrice(address(new Price()));
        // TODO t1Nfts add nft
    }

    receive() external payable {}

    function withdrawBNB(uint256 amountOut) public payable  ownerOnly{
        TransferHelper.safeTransferETH(msg.sender, amountOut);
    }

    function withdrawToken(address token,uint256 amountOut) public payable  ownerOnly{
        TransferHelper.safeTransfer(token, msg.sender, amountOut);
    }

    // recordExists已经保证了不会传入过期node
    function getNode(bytes32 node) public view returns (NodeInfo memory) {
        return getRecord(node).info;
    }

    function getRecord(bytes32 node) public view returns (Record memory) {
        if(records[node].info.expired_time >= block.timestamp) return records[node];
        return records[0x0];
    }

    function checkByte32(bytes32 _n) public view{
        for(uint i = 28; i < _n.length; i ++) {
            require(_n[i] == template[i],"ens not the .bsc");
        }
    }


    function getNodes(address holder) public view returns (NodeInfo[] memory) {
        uint len = _getNodesLen(holder);
        NodeInfo[] memory nodes= new NodeInfo[](len);
        uint j=0;
        for(uint i = 0; i < holders[holder].length; i++) {
            if(holders[holder][i].expired_time >= block.timestamp){
                nodes[j]=holders[holder][i];
                j++;
            }
        }
        return nodes;
    }
    function buyWithEth(bytes32 node, address owner, address holder,uint256 _years,address ref) public payable{
        checkPreRegister(owner);
        uint256 totalPrice = _price.getBnbPrice(node) * _years;
        require(msg.value >= totalPrice ,"under price");
        _setRef(ref, owner);
        promotionFee(msg.sender,totalPrice);
        setRecord(node,owner,holder,_years);
    }

    function buyWithUsdt(bytes32 node, address owner, address holder, uint256 _years,address ref) public payable{
        checkPreRegister(owner);
        uint256 totalPrice = _price.getUsdtPrice(node) * _years;
        uint256 allowance =  IERC20(_usdtAddr).allowance(msg.sender, address(this));

        require(allowance >= totalPrice ,"insufficient allowance");

        _setRef(ref, owner);
        promotionFeeToken(msg.sender,totalPrice,_usdtAddr);
        setRecord(node,owner,holder,_years);
    }

    function checkPreRegister(address _owner) public view{
        if(block.timestamp>=publicRegistrationTime) return;
        if(block.timestamp<publicRegistrationTime && block.timestamp>=preRegistrationTime){
            uint256 _num = getNodes(_owner).length;
            if( _num< isT1(_owner)) return;
            if(isT2(_owner) && _num<1) return;
            if(isT3(_owner) && _num<5) return;
        }else if(block.timestamp >= superPreRegistrationTime){
            if(isT3(_owner) && getNodes(_owner).length<5) return;
        }
        require(false ,"not register time");
    }

    function promotionFeeToken(address _owner,uint256 totalPrice,address tokenAddress) public payable{
        //0.001 to father refer is exist
        address fatherAddr = referrals[_owner];
        uint256 fatherFee = fatherAddr != address(0) ? totalPrice/PAY_AMOUNT_RATE : 0;
        //the left to market.
        uint256 marketFee = totalPrice - fatherFee;
        //transfer
        if(fatherFee > 0){
            if(tokenAddress==_usdtAddr){
                refFatherFeeUsdt[fatherAddr] = refFatherFeeUsdt[fatherAddr]+fatherFee;
            }
            TransferHelper.safeTransferFrom(tokenAddress, msg.sender, address(this), fatherFee);
        }
        TransferHelper.safeTransferFrom(tokenAddress, msg.sender, marketAddr, marketFee);
    }

    function promotionFee(address _owner,uint256 totalPrice) public payable{
        //0.001 to father refer is exist
        address fatherAddr = referrals[_owner];
        uint256 fatherFee = fatherAddr != address(0) ? totalPrice/PAY_AMOUNT_RATE : 0;
        //the left to market.
        uint256 marketFee = totalPrice - fatherFee;
        //transfer
        if(fatherFee > 0){
            // 记录费用
            refFatherFee[fatherAddr] = refFatherFee[fatherAddr]+fatherFee;
            TransferHelper.safeTransferETH(address(this), fatherFee);
        }
        TransferHelper.safeTransferETH(marketAddr, marketFee);
    }

    function cpsDrawBrick() public payable{
        uint256 bnbprice = refFatherFee[msg.sender];
        uint256 usdtprice = refFatherFeeUsdt[msg.sender];
        require(bnbprice>0||usdtprice>0,"no fee can draw");
        if(bnbprice>0){
            TransferHelper.safeTransferETH(msg.sender, bnbprice);
        }
        if(usdtprice>0){
            TransferHelper.safeTransfer(_usdtAddr, msg.sender, usdtprice);
        }
        refFatherFee[msg.sender]=0;
        refFatherFeeUsdt[msg.sender]=0;
    }

    function getCpsFee(address _addr) public view returns (uint256,uint256,uint256) {
        return (refFatherFee[_addr],0,refFatherFeeUsdt[_addr]);
    }

    function setHolderNodeExpiredTime(bytes32 node, address owner,uint256 expired_time) internal{
        for(uint i=0;i<holders[owner].length;i++){
            if(holders[owner][i].name==node){
                holders[owner][i].expired_time = expired_time;
            }
        }
    }
    function setRecord(bytes32 node, address owner, address holder ,uint256 _years) internal  {
        checkByte32(node);
        if(recordExists(node)){
            require(records[node].owner==msg.sender, 'domain name already exists');
            records[node].info.expired_time =  records[node].info.expired_time + _years * secondsOfYears;
            setHolderNodeExpiredTime(node,owner,records[node].info.expired_time);
            emit Deposit(holder,node,records[node].info.expired_time);
        }else{
            _setOwner(node, owner);
            _setHolder(node, holder);

            knowNodes.push(node);

            NodeInfo memory nodeInfo = NodeInfo({
            name: node,
            selected: false,
            register_time: block.timestamp,
            expired_time: (block.timestamp + _years * secondsOfYears)
            });
            _setInfo(node, nodeInfo);

            holders[holder].push(nodeInfo);
            emit Deposit(holder,node,records[node].info.expired_time);
            mint(holder,string(abi.encodePacked(node,'156.247.14.128:8089/','.jpeg')),node);
        }
    }

    function setOwner(bytes32 node, address owner) public authorised(node) {
        _setOwner(node, owner);
    }

    function freeBuy(bytes32[] memory nodes, address[] memory owners, address[] memory _holders,uint256 _years) public{
        require(whitelist[msg.sender], 'only whiteList can free');
        require(nodes.length==owners.length, 'nodes/owners length');
        require(_holders.length==owners.length, 'holders/owners length');
        for(uint i = 0; i < nodes.length; i++) {
            freeSetRecord(nodes[i],owners[i],_holders[i],_years);
        }
    }



    function freeSetRecord(bytes32 node, address owner, address holder ,uint256 _years) internal  {
        checkByte32(node);
        if(recordExists(node)){
            records[node].info.expired_time =  block.timestamp + _years * secondsOfYears;
            setHolderNodeExpiredTime(node,owner,records[node].info.expired_time);
            if(records[node].holder==holder){
                return;
            }
            // 3. nft修改为新的,调用nft的transfer
            uint256 tokenId = bunnyIdToTokenIds[node];
            _approve(owner, tokenId);
            _transfer(msg.sender,owner,tokenId);
        }else{
            _setOwner(node, owner);
            _setHolder(node, holder);

            knowNodes.push(node);

            NodeInfo memory nodeInfo = NodeInfo({
            name: node,
            selected: false,
            register_time: block.timestamp,
            expired_time: (block.timestamp + _years * secondsOfYears)
            });

            holders[holder].push(nodeInfo);
            mint(holder,string(abi.encodePacked('156.247.14.128:8089/',node,'.jpeg')),node);
            _setInfo(node, nodeInfo); // TODO ???
            emit Deposit(holder,node,records[node].info.expired_time);
        }
    }

    function addWhiteList(address[] memory _list) public ownerOnly {
        for(uint i = 0; i < _list.length; i++) {
            whitelist[_list[i]] = true;
        }
    }

    function removeWhiteList(address[] memory _list) public ownerOnly {
        for(uint i = 0; i < _list.length; i++) {
            whitelist[_list[i]] = false;
        }
    }

    function getWhiteList(address _addr) public view returns (bool) {
        return whitelist[_addr];
    }

    function getOwner(bytes32 node) public view returns (address) {
        address addr = records[node].owner;
        if (addr == address(this)) {
            return address(0x0);
        }
        return addr;
    }

    function getHolder(bytes32 node) external view returns (address) {
        address addr = records[node].holder;
        if (addr == address(this)) {
            return address(0x0);
        }
        return addr;
    }


    // TODO set selected
    function setSelected(address holder,bytes32 _node) public ownerOnly {
        for(uint i = 0; i < holders[holder].length; i++) {
            if(holders[holder][i].name == _node){
                holders[holder][i].selected = true;
            }else{
                holders[holder][i].selected =false;
            }
        }
    }
}