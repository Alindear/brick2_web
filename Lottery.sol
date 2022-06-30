// SPDX-License-Identifier: MIT
// An example of a consumer contract that relies on a subscription for funding.
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";

interface BNSRegistry{
    function freeBuy(bytes32[] memory nodes, address[] memory owners, address[] memory _holders,uint256 _years) external;
}
contract Lottery is VRFConsumerBaseV2 {
    VRFCoordinatorV2Interface COORDINATOR;

    uint64 s_subscriptionId;
    address vrfCoordinator = 0xc587d9053cd1118f25F645F9E08BB98c9712A4EE;
    bytes32 keyHash = 0x114f3da0a805b6a67d6e9cd2ec746f7028f1b7376365af575cfea3550dd1aa04;
    BNSRegistry public _bns = BNSRegistry(0x2630BC31c906F31db511ACB089602a7D941Cd1B6);
    uint32 callbackGasLimit = 100000;
    uint16 requestConfirmations = 3;
    uint32 numWords =  2;
    uint256[] public s_randomWords;
    uint256 public s_requestId;
    address s_owner;

    struct Cycle {
        bytes32[] lotteryPool; // 奖池
        address[]  holders; // 中奖名单
        mapping(address=>bytes32) holderLottery; // 中奖映射
        mapping(bytes32=>address) lotteryHolder; // 中奖反向映射
        mapping(address=>bool) palyers; // 本次已参与人员,周期清理
        uint256 startTime; // 起始shijian
        uint256 dayNum; // 一次循环的天数
    }

    uint256 public dayNum; // 全局配置：一次循环的天数
    Cycle[] public cycles; // 历史记录
    uint256 index=0; // 当前周期的下标
    uint256 rangeRate = 10; // 抽奖范围为奖池的10倍


    function setDayNum(uint256 _dayNum) public onlyOwner{
        dayNum = _dayNum;
        cycles[index].dayNum = _dayNum;
    }
    function setStartTime(uint256 _start) public onlyOwner{
        cycles[index].startTime = _start;
    }

    function setNumWords(uint32 _start) public onlyOwner{
        numWords = _start;
    }

    function initCycle(uint256 _startTime,bool init,uint256 _dayNum,bytes32[] memory _lotteryPool) internal{
        cycles.push();
        if(!init) index++;
        cycles[index].startTime  = _startTime;
        cycles[index].dayNum  = _dayNum;
        cycles[index].lotteryPool  = _lotteryPool;
    }

    constructor(uint64 subscriptionId,uint256 _dayNum) VRFConsumerBaseV2(vrfCoordinator) {
        initCycle(block.timestamp,true,_dayNum,new bytes32[](0));
        COORDINATOR = VRFCoordinatorV2Interface(vrfCoordinator);
        s_owner = msg.sender;
        s_subscriptionId = subscriptionId;
    }

    function requestRandomWords() public onlyOwner {
        s_requestId = COORDINATOR.requestRandomWords(
            keyHash,
            s_subscriptionId,
            requestConfirmations,
            callbackGasLimit,
            numWords
        );
    }

    function fulfillRandomWords(
        uint256, /* requestId */
        uint256[] memory randomWords
    ) internal override {
        s_randomWords = randomWords;
    }

    function setfulfillRandomWords(
        uint256, /* requestId */
        uint256[] memory randomWords
    ) public {
        s_randomWords = randomWords;
    }

    modifier onlyOwner() {
        require(msg.sender == s_owner);
        _;
    }


    function randomLottery() public{
        // 0. 校验用户是否已参与
        require(!cycles[index].palyers[msg.sender],"address already lottery");
        // 1. 校验时间是否已经过期,提前一小时关闭奖池
        require(checkEnable(),"lottery is ending");
        // 2. 拿到random seek,加上当前时间进行range*奖池大小取余数
        uint256 lottertRange =cycles[index].lotteryPool.length + rangeRate;
        uint256 myIndex= (s_randomWords[block.timestamp%numWords]+block.timestamp)%lottertRange;
        if(myIndex<cycles[index].lotteryPool.length
            && cycles[index].lotteryHolder[cycles[index].lotteryPool[myIndex]]==address(0x0) ){
            cycles[index].lotteryHolder[cycles[index].lotteryPool[myIndex]] = msg.sender;
            cycles[index].holderLottery[msg.sender] = cycles[index].lotteryPool[myIndex];
            cycles[index].holders.push(msg.sender);
        }
        // 3. 设置其他项
        cycles[index].palyers[msg.sender] = true;
    }

    function getMyLottery() public view returns (bytes32) {
        if(checkEnable()) return 0;
        return cycles[index].holderLottery[msg.sender];
    }

    function getMyRealLottery() public view returns (bytes32) {
        return cycles[index].holderLottery[msg.sender];
    }

    function getHolders() public view returns (address[] memory){
        return getHolders2(index);
    }

    function getHolders2(uint256 _index) public view returns (address[] memory){
        return cycles[_index].holders;
    }

    function getLotteryPool() public view returns (bytes32[] memory){
        return getLotteryPool2(index);
    }

    function getLotteryPool2(uint256 _index) public view returns (bytes32[] memory){
        return cycles[_index].lotteryPool;
    }

    function checkAlready() public view returns (bool) {
        return cycles[index].palyers[msg.sender];
    }


    function checkEnable() public view returns (bool) {
        return block.timestamp < (cycles[index].startTime+cycles[index].dayNum*86400-3600);
    }
    // TODO 临时替换奖池的方法

    function openLottery(bytes32[] memory _lotteryPool,uint256 _startTime,uint256 _dayNum) public onlyOwner{
        require(!checkEnable(),"not end");
        requestRandomWords();
        initCycle(_startTime,false,_dayNum,_lotteryPool);
    }

    function closLottery() public onlyOwner{
        // TODO 1. 关闭cycle
        require(!checkEnable(),"not end");
        // 2. 分发奖池nft
        if(cycles[index].holders.length==0) return;
        bytes32[] memory nodes = new bytes32[](cycles[index].holders.length);
        for(uint i=0;i<cycles[index].holders.length;i++){
            nodes[i] = cycles[index].holderLottery[cycles[index].holders[i]];
        }

        _bns.freeBuy(nodes,cycles[index].holders,cycles[index].holders,1);
    }

    function setBns(address _bnsAddr) public onlyOwner{
        _bns = BNSRegistry(_bnsAddr);
    }



}