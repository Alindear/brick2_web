"use strict";

import store from './store'

// Unpkg imports
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;

const TOKEN_ABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    }
]
const BRICK_ENS_ABI = [
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "_list",
                "type": "address[]"
            }
        ],
        "name": "addWhiteList",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_from",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "node",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "holder",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_years",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "ref",
                "type": "address"
            }
        ],
        "name": "buyWithBrick",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "node",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "holder",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_years",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "ref",
                "type": "address"
            }
        ],
        "name": "buyWithEth",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "node",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "holder",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_years",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "ref",
                "type": "address"
            }
        ],
        "name": "buyWithUsdt",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_rate",
                "type": "uint256"
            }
        ],
        "name": "changePayment",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "cpsDrawBrick",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "addr",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "node",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "expired_time",
                "type": "uint256"
            }
        ],
        "name": "Deposit",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32[]",
                "name": "nodes",
                "type": "bytes32[]"
            },
            {
                "internalType": "address[]",
                "name": "owners",
                "type": "address[]"
            },
            {
                "internalType": "address[]",
                "name": "_holders",
                "type": "address[]"
            },
            {
                "internalType": "uint256",
                "name": "_years",
                "type": "uint256"
            }
        ],
        "name": "freeBuy",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "totalPrice",
                "type": "uint256"
            }
        ],
        "name": "promotionFee",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "totalPrice",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            }
        ],
        "name": "promotionFeeToken",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "_list",
                "type": "address[]"
            }
        ],
        "name": "removeWhiteList",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newAddr",
                "type": "address"
            }
        ],
        "name": "setIPrice",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "node",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "setOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amountOut",
                "type": "uint256"
            }
        ],
        "name": "withdrawBNB",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amountOut",
                "type": "uint256"
            }
        ],
        "name": "withdrawToken",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    },
    {
        "inputs": [],
        "name": "_brickAddr",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "holder",
                "type": "address"
            }
        ],
        "name": "_getNodesLen",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "_price",
        "outputs": [
            {
                "internalType": "contract IPrice",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "_tokenIds",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "_usdtAddr",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "bunnyIds",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "bunnyIdToTokenIds",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "getBunnyId",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256[]",
                "name": "_tokenArray",
                "type": "uint256[]"
            }
        ],
        "name": "getBunnyIdsByTokenIds",
        "outputs": [
            {
                "internalType": "bytes32[]",
                "name": "",
                "type": "bytes32[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_addr",
                "type": "address"
            }
        ],
        "name": "getCpsFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "node",
                "type": "bytes32"
            }
        ],
        "name": "getHolder",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "node",
                "type": "bytes32"
            }
        ],
        "name": "getNode",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "bytes32",
                        "name": "name",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bool",
                        "name": "selected",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "register_time",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "expired_time",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct BNSBase.NodeInfo",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "holder",
                "type": "address"
            }
        ],
        "name": "getNodes",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "bytes32",
                        "name": "name",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bool",
                        "name": "selected",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "register_time",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "expired_time",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct BNSBase.NodeInfo[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "node",
                "type": "bytes32"
            }
        ],
        "name": "getOwner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "node",
                "type": "bytes32"
            }
        ],
        "name": "getRecord",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "holder",
                        "type": "address"
                    },
                    {
                        "components": [
                            {
                                "internalType": "bytes32",
                                "name": "name",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "bool",
                                "name": "selected",
                                "type": "bool"
                            },
                            {
                                "internalType": "uint256",
                                "name": "register_time",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "expired_time",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct BNSBase.NodeInfo",
                        "name": "info",
                        "type": "tuple"
                    }
                ],
                "internalType": "struct BNSBase.Record",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_addr",
                "type": "address"
            }
        ],
        "name": "getWhiteList",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "knowNodes",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "marketAddr",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "node",
                "type": "bytes32"
            }
        ],
        "name": "recordExists",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "tokenByIndex",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]
const PRICE_ABI = [
    {
        "inputs": [],
        "name": "brickAddr",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "name",
                "type": "bytes32"
            }
        ],
        "name": "getBnbPrice",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "usdtAmount",
                "type": "uint256"
            }
        ],
        "name": "getBnbPriceFromUsdt",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "name",
                "type": "bytes32"
            }
        ],
        "name": "getBrickPrice",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "usdtAmount",
                "type": "uint256"
            }
        ],
        "name": "getBrickPriceFromUsdt",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "name",
                "type": "bytes32"
            }
        ],
        "name": "getPrice",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "name",
                "type": "bytes32"
            }
        ],
        "name": "getUsdtPrice",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "name",
                "type": "bytes32"
            }
        ],
        "name": "length",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "routerAddr",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "usdtAddr",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "wbnbAddr",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]
const LOTTERY_ABI =[
    {
        "inputs": [
            {
                "internalType": "uint64",
                "name": "subscriptionId",
                "type": "uint64"
            },
            {
                "internalType": "uint256",
                "name": "_dayNum",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "have",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "want",
                "type": "address"
            }
        ],
        "name": "OnlyCoordinatorCanFulfill",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "_bns",
        "outputs": [
            {
                "internalType": "contract BNSRegistry",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "checkAlready",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "checkEnable",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "closLottery",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "cycles",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "dayNum",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "dayNum",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getMyLottery",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getMyRealLottery",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32[]",
                "name": "_lotteryPool",
                "type": "bytes32[]"
            },
            {
                "internalType": "uint256",
                "name": "_startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_dayNum",
                "type": "uint256"
            }
        ],
        "name": "openLottery",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "randomLottery",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "requestId",
                "type": "uint256"
            },
            {
                "internalType": "uint256[]",
                "name": "randomWords",
                "type": "uint256[]"
            }
        ],
        "name": "rawFulfillRandomWords",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "requestRandomWords",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "s_randomWords",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "s_requestId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_bnsAddr",
                "type": "address"
            }
        ],
        "name": "setBns",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_dayNum",
                "type": "uint256"
            }
        ],
        "name": "setDayNum",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint32",
                "name": "_start",
                "type": "uint32"
            }
        ],
        "name": "setNumWords",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_start",
                "type": "uint256"
            }
        ],
        "name": "setStartTime",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256[]",
                "name": "randomWords",
                "type": "uint256[]"
            }
        ],
        "name": "setfulfillRandomWords",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];


// const BRICK_ENS_ADDRESS = "0x2630BC31c906F31db511ACB089602a7D941Cd1B6"
const PRICE_ADDRESS = "0x544a564D666e5fED69b0f7F481c92A8862139B26" // TODO ceshi
const BRICK_ENS_ADDRESS =  "0xdA79595F6bFF81321B136017E638CA847340919f" // TODO ceshi
const LOTTERY_ADDRESS = "0x1C94cc0c1457EdFD0A2CB56dDc0a41aCC193FBEd" // TODO ceshi
// const PRICE_ADDRESS = "0x3c55B43195Bad23F834c92b5104dc76863EE787c"

const brickAddr = '0xc4893fEa8547Fb1A4D860518285AF6655424645f';
const usdtAddr = '0x55d398326f99059fF775485246999027B3197955';
// const usdtAddr =  '0xD99D1c33F9fC3444f8101754aBC46c52416550D1'; // TODO 测试

// Web3modal instance
let web3Modal

// Chosen wallet provider given by the dialog window
let provider;


// Address of the selected account
export let selectedAccount;

let web3;

let lotteryContract;
let brickEnsContract;
let usdtContract;
let brickContract;
let priceContract;

export var usdtPrice;
export var bnbPrice;
export var brickPrice;


/**
 * Setup the orchestra
 */
export function init() {

    console.log("Initializing example");
    console.log("WalletConnectProvider is", WalletConnectProvider);
    console.log("Fortmatic is", Fortmatic);
    console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);

    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                // Mikko's test key - don't copy as your mileage may vary
                infuraId: "8043bb2cf99347b1bfadfb233c5325c0",
            }
        },

        fortmatic: {
            package: Fortmatic,
            options: {
                // Mikko's TESTNET api key
                key: "pk_test_391E26A3B43A3350"
            }
        }
    };

    web3Modal = new Web3Modal({
        cacheProvider: true, // optional
        providerOptions, // required
        disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    });

    console.log("Web3Modal instance is", web3Modal);
}

export async function approve(token, loadingFuncT, loadingFuncF, callback) {
    await checkAndLoadFromLast();
    if (selectedAccount == null || selectedAccount == "") {
        // alert("请链接钱包");
        alert(
                store.state.i18n[
                        store.state.language
                        ].please_connect_wallet
        )
        return null;
    }

    // loading
    loadingFuncT()

    let _allowance = await allowance(token);
    if (_allowance > "9000000000000000000000000000000") {
        callback()
        return;
    }

    if (token == "USDT") {
        usdtContract.methods.approve(BRICK_ENS_ADDRESS, "90000000000000000000000000000000000").send({ from: selectedAccount }).then(result => {
            callback();
        }).catch((err) => {
            console.log(err)
            loadingFuncF()
        });
    } else if (token == "BRICK") {
        brickContract.methods.approve(BRICK_ENS_ADDRESS, "90000000000000000000000000000000000").send({ from: selectedAccount }).then(result => {
            callback();
        }).catch((err) => {
            console.log(err)
            loadingFuncF()
        });
    }
}

export async function allowance(token) {
    await checkAndLoadFromLast();
    if (selectedAccount == null || selectedAccount == "") {
        // alert("请链接钱包");
        alert(
                store.state.i18n[
                        store.state.language
                        ].please_connect_wallet
        )
        return null;
    }

    let contract;
    if (token == "USDT") {
        contract = usdtContract
    } else if (token == "BRICK") {
        contract = brickContract
    }
    return await contract.methods.allowance(selectedAccount, BRICK_ENS_ADDRESS).call();
}

export async function isExist(searchText) {
    await checkAndLoadFromLast();
    if (selectedAccount == null || selectedAccount == "") {
        // alert("请链接钱包");
        alert(
                store.state.i18n[
                        store.state.language
                        ].please_connect_wallet
        )
        return null;
    }

    if (searchText == null || searchText == "") {
        return null;
    }

    let byte32Name = web3.utils.padLeft(web3.utils.utf8ToHex(searchText), 64);
    console.log(searchText);
    console.log(byte32Name);
    console.log(web3.utils.utf8ToHex(searchText));
    return await brickEnsContract.methods.recordExists(byte32Name).call()
}

export async function getNode(name) {
    await checkAndLoadFromLast();
    if (selectedAccount == null || selectedAccount == "") {
        // alert("请链接钱包");
        alert(
                store.state.i18n[
                        store.state.language
                        ].please_connect_wallet
        )
        return null;
    }

    var byte32Name = web3.utils.padLeft(web3.utils.utf8ToHex(name), 64);


    return await brickEnsContract.methods.getRecord(byte32Name).call()
}

async function checkAndLoadFromLast() {
    if (selectedAccount == null && localStorage.getItem('STATUS') != null) {
        await fetchAccountData();
        selectedAccount = localStorage.getItem('STATUS');
    }
}

async function checkYear(year) {
    if (year != null && year < 1) {
        // alert("年份最少选择1年");
        alert(
                store.state.i18n[
                        store.state.language
                        ].at_least_1_year
        )
        return false;
    }
    return true;
}


export async function getAllNodes() {
    await checkAndLoadFromLast();
    console.log("getAllNodes selectedAccount：" + selectedAccount)
    if (selectedAccount == null || selectedAccount == "") {
        // alert("请链接钱包");
        alert(
                store.state.i18n[
                        store.state.language
                        ].please_connect_wallet
        )
        return;
    }

    let nodes = await brickEnsContract.methods.getNodes(selectedAccount).call()

    var result = new Array();
    for (let i in nodes) {
        console.log("name", nodes[i][0]);
        console.log("expire", nodes[i][3]);
        var obj = new Object();
        obj["ensName"] = web3.utils.hexToUtf8(nodes[i][0]);
        obj["endTime"] = formatTime(nodes[i][3]);

        result.push(obj)
    }

    return result
}

function getRef() {
    var ref;
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (pair[0] == 'ref') {
            ref = pair[1];
        }
    }
    if (!web3.utils.isAddress(ref)) {
        ref = selectedAccount;
    }
    console.log("ref"+ref);
    return ref;
}

export async function buyWithEth(name, callback, loadingTrue, loadingFalse, _years, amount) {
    await checkAndLoadFromLast();
    if (selectedAccount == null || selectedAccount == "") {
        // alert("请链接钱包");
        alert(
                store.state.i18n[
                        store.state.language
                        ].please_connect_wallet
        )
        return;
    }
    if (!await checkYear(_years)) return;
    var checked = await checkBNBbalance(amount);
    if (checked == null) return;
    loadingTrue()

    var byte32Name = web3.utils.padLeft(web3.utils.utf8ToHex(name), 64);
     let _value = parseInt(bnbPrice * _years) + 100000000000000;
    console.log("buyWithEth node:", byte32Name, " value:", _value);

    brickEnsContract.methods.buyWithEth(byte32Name, selectedAccount, selectedAccount, _years,getRef()).send({ from: selectedAccount, value: _value }).then(result => {
        loadingFalse()
        callback();
    }).catch((err) => {
        loadingFalse()
        console.log(err)
    });
}

export async function buyWithUsdt(name, callback, loadingTrue, loadingFalse, _years, amount) {
    await checkAndLoadFromLast();
    if (localStorage.getItem('STATUS') != null) {
        selectedAccount = localStorage.getItem('STATUS');
    }
    if (selectedAccount == null || selectedAccount == "") {
        // alert("请链接钱包");
        alert(
                store.state.i18n[
                        store.state.language
                        ].please_connect_wallet
        )
        return;
    }
    if (!await checkYear(_years)) return;
    var checked = await checkUSDTbalance(amount);
    if (checked == null) return;
    loadingTrue()

    var byte32Name = web3.utils.padLeft(web3.utils.utf8ToHex(name), 64);

    console.log("buyWithUsdt years:", _years, " name:", byte32Name);

    brickEnsContract.methods.buyWithUsdt(byte32Name, selectedAccount, selectedAccount, _years,getRef()).send({ from: selectedAccount }).then(result => {
        loadingFalse()
        callback();
    }).catch((err) => {
        loadingFalse()
        console.log(err)
    });
}

export async function buyWithBrick(name, callback, loadingTrue, loadingFalse, _years, amount) {
    await checkAndLoadFromLast();
    if (selectedAccount == null || selectedAccount == "") {
        // alert("请链接钱包");
        alert(
                store.state.i18n[
                        store.state.language
                        ].please_connect_wallet
        )
        return;
    }
    if (!await checkYear(_years)) return;
    var checked = await checkBrickbalance(amount);
    if (checked == null) return;
    loadingTrue()

    var byte32Name = web3.utils.padLeft(web3.utils.utf8ToHex(name), 64);
    console.log("buyWithBrick years:", _years, " name:", byte32Name);
    brickEnsContract.methods.buyWithBrick(byte32Name, selectedAccount, selectedAccount, _years,getRef()).send({ from: selectedAccount }).then(result => {
        loadingFalse()
        callback();
    }).catch((err) => {
        loadingFalse()
        console.log(err)
    });
}

export async function drawMine() {
    await checkAndLoadFromLast();
    if (selectedAccount == null || selectedAccount == "") {
        // alert("请链接钱包");
        alert(
                store.state.i18n[
                        store.state.language
                        ].please_connect_wallet
        )
        return;
    }
    if(store.state.cpsFee[0]<=0 && store.state.cpsFee[1]<=0 && store.state.cpsFee[2]<=0){
        alert("余额不足，无法提取");
        return;
    }
    brickEnsContract.methods.cpsDrawBrick().send({ from: selectedAccount }).then(result => {
        alert("提取成功！")
        getCpsFee();
    }).catch((err) => {
        alert("提取失败，请查看交易")
    });
}

async function getCpsFee() {
    var fees = await brickEnsContract.methods.getCpsFee(selectedAccount).call();
    console.log("getFees: ", fees);

    // bnbCps = fees[0];
    // brickCps = fees[1];
    // usdtCps = fees[2];
    store.state.cpsFee =fees;
    console.log(store)
    return fees;
}
export async function getPrice(name) {
    await checkAndLoadFromLast();
    if (selectedAccount == null || selectedAccount == "") {
        // alert("请链接钱包");
        alert(
                store.state.i18n[
                        store.state.language
                        ].please_connect_wallet
        )
        return;
    }

    var byte32Name = web3.utils.padLeft(web3.utils.utf8ToHex(name), 64);
    console.log("getPrice: ", byte32Name);
    var prices = await priceContract.methods.getPrice(byte32Name).call();
    console.log("getPrice: ", prices);

    usdtPrice = prices[0];
    bnbPrice = prices[1];
    brickPrice = prices[2];

    return prices;
}

export async function checkEachLength(name) {
    var byte32Name = web3.utils.padLeft(web3.utils.utf8ToHex(name), 64);
    var lengthFromPrice = await priceContract.methods.length(byte32Name).call();

    for (let char of name) {
        if (char === "❤") {
            // alert("存在非法字符[❤]️，请替换再查询");
            alert(
                    store.state.i18n[
                            store.state.language
                            ].illegal_love_exists
            );
            return false;
        }
    }
    if (parseInt(lengthFromPrice) !== Array.from(name).length) {
        // alert("存在非法字符，请替换再查询");
        alert(
                store.state.i18n[
                        store.state.language
                        ].illegal_exists
        );

        return false;
    }
    return true;
}

export async function checkAlready() {
    var alreay = await lotteryContract.methods.checkAlready().call();
    console.log("checkAlready: ", alreay);
    return alreay;
}

export async function checkEnable() {
    var enable = await lotteryContract.methods.checkEnable().call();
    console.log("checkEnable: ", enable);
    return enable;
}


export async function randomLottery(_func) {
    lotteryContract.methods.randomLottery().send({ from: selectedAccount }).then(result => {
        //alert("参与成功，请等待开奖！")
        _func();
    }).catch((err) => {
        alert("参与失败，请查看交易失败原因")
    });
}

/**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async function fetchAccountData() {

    // Get a Web3 instance for the wallet
    if (provider == null && web3Modal.cachedProvider) {
        console.log("cached provider");
        provider = await web3Modal.connect();
    }
    web3 = new Web3(provider);

    brickEnsContract = new web3.eth.Contract(BRICK_ENS_ABI, BRICK_ENS_ADDRESS);
    usdtContract = new web3.eth.Contract(TOKEN_ABI, usdtAddr);
    brickContract = new web3.eth.Contract(TOKEN_ABI, brickAddr);
    priceContract = new web3.eth.Contract(PRICE_ABI, PRICE_ADDRESS);
    lotteryContract = new web3.eth.Contract(LOTTERY_ABI, LOTTERY_ADDRESS);

    //brickEnsContract.methods.totalSupply().send(xxx);
    console.log("Web3 instance is", web3);

    // Get connected chain id from Ethereum node
    const chainId = await web3.eth.getChainId();
    // Load chain information over an HTTP API
    const chainData = evmChains.getChain(chainId);
    // document.querySelector("#network-name").textContent = chainData.name;

    // Get list of accounts of the connected wallet
    const accounts = await web3.eth.getAccounts();

    // MetaMask does not give you all accounts, only the selected account
    console.log("Got accounts", accounts);
    selectedAccount = accounts[0];
    console.log('selectedAccount', selectedAccount)

    await getCpsFee();
}

async function refreshAccountData() {
    await fetchAccountData(provider);
}


/**
 * Connect wallet button pressed.
 */
export async function onConnect(vuecom) {

    console.log("Opening a dialog", web3Modal);
    try {
        provider = await web3Modal.connect();
    } catch (e) {
        console.log("Could not get a wallet connection", e);
        return false
    }

    // //回调  切换 连接 -- 断开连接
    // if (flag == 'link') {
    //     type = !type
    // }

    // Subscribe to accounts change
    console.log("vuecom")
    console.log(vuecom);
    provider.on("accountsChanged", (accounts) => {
        console.log(vuecom.selectedAccount);
        vuecom.selectedAccount = accounts[0];
        console.log(vuecom.selectedAccount);
        fetchAccountData();
    });

    // Subscribe to chainId change
    provider.on("chainChanged", (chainId) => {
        fetchAccountData();
    });

    // Subscribe to networkId change
    provider.on("networkChanged", (networkId) => {
        fetchAccountData();
    });

    await refreshAccountData();
    return true
}

/**
 * Disconnect wallet button pressed.
 */
export async function onDisconnect() {

    console.log("Killing the wallet connection", provider);
    if (provider == null) return
    // TODO: Which providers have close method?
    if (provider.close) {
        await provider.close();

        await web3Modal.clearCachedProvider();
        provider = null;
    }

    selectedAccount = null;
}


export function getAccount() {
    return selectedAccount
}

function formatTime(timestamp) {
    var date = new Date(timestamp * 1000); // 增加8小时
    return date.toLocaleDateString();
}

export async function checkBNBbalance(amount) {
    await checkAndLoadFromLast();
    if (selectedAccount == null || selectedAccount === "") {
        // alert("请链接钱包");
        alert(
                store.state.i18n[
                        store.state.language
                        ].please_connect_wallet
        )
        return null;
    }
    var balance = await web3.eth.getBalance(selectedAccount);
    console.log(balance);
    console.log(amount);
    if (balance < amount) {
        // alert("钱包BNB余额不足");
        alert(
                store.state.i18n[
                        store.state.language
                        ].BNB_wallet
        )
        return null;
    }
    return "1";
}

export async function checkUSDTbalance(amount) {
    await checkAndLoadFromLast();
    if (selectedAccount == null || selectedAccount === "") {
        // alert("请链接钱包");
        alert(
                store.state.i18n[
                        store.state.language
                        ].please_connect_wallet
        )
        return null;
    }
    var balance = await usdtContract.methods.balanceOf(selectedAccount).call();
    console.log(balance);
    console.log(amount);
    if (balance < amount) {
        // alert("钱包USDT余额不足");
        alert(
                store.state.i18n[
                        store.state.language
                        ].USDT_wallet
        )
        return null;
    }
    return "1";
}

export async function checkBrickbalance(amount) {
    await checkAndLoadFromLast();
    if (selectedAccount == null || selectedAccount === "") {
        // alert("请链接钱包");
        alert(
                store.state.i18n[
                        store.state.language
                        ].please_connect_wallet
        )
        return null;
    }
    var balance = await brickContract.methods.balanceOf(selectedAccount).call();
    console.log(balance);
    console.log(amount);
    if (balance < amount) {
        // alert("钱包BRICK余额不足");
        alert(
                store.state.i18n[
                        store.state.language
                        ].BRICK_wallet
        )
        return null;
    }
    return "1";
}


/**
 * Main entry point.
 */

