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
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
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
        "inputs": [],
        "name": "contractOwner",
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
                "internalType": "struct ENSRegistry.NodeInfo",
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
                "internalType": "struct ENSRegistry.NodeInfo[]",
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
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "holders",
        "outputs": [
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
    }, {
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
                        "internalType": "struct ENSRegistry.NodeInfo",
                        "name": "info",
                        "type": "tuple"
                    }
                ],
                "internalType": "struct ENSRegistry.Record",
                "name": "",
                "type": "tuple"
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

const BRICK_ENS_ADDRESS = "0xbeBa869a5B3F752658CD3a89046Fa3Ae30BC54a9"
const PRICE_ADDRESS = "0x3c55B43195Bad23F834c92b5104dc76863EE787c"
const brickAddr = '0xc4893fEa8547Fb1A4D860518285AF6655424645f';
const usdtAddr = '0x55d398326f99059fF775485246999027B3197955';

// Web3modal instance
let web3Modal

// Chosen wallet provider given by the dialog window
let provider;


// Address of the selected account
let selectedAccount;

let web3;

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
        alert("请链接钱包");
        // alert(
        //     store.state.i18n[
        //         store.state.language
        //     ].please_connect_wallet
        // )
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
        alert("请链接钱包");
        // alert(
        //     store.state.i18n[
        //         store.state.language
        //     ].please_connect_wallet
        // )
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
        alert("请链接钱包");
        // alert(
        //     store.state.i18n[
        //         store.state.language
        //     ].please_connect_wallet
        // )
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
        alert("请链接钱包");
        // alert(
        //     store.state.i18n[
        //         store.state.language
        //     ].please_connect_wallet
        // )
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
        alert("年份最少选择1年");
        // alert(
        //     store.state.i18n[
        //         store.state.language
        //     ].at_least_1_year
        // )
        return false;
    }
    return true;
}


export async function getAllNodes() {
    await checkAndLoadFromLast();
    console.log("getAllNodes selectedAccount：" + selectedAccount)
    if (selectedAccount == null || selectedAccount == "") {
        alert("请链接钱包");
        // alert(
        //     store.state.i18n[
        //         store.state.language
        //     ].please_connect_wallet
        // )
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

export async function buyWithEth(name, callback, loadingTrue, loadingFalse, _years, amount) {
    await checkAndLoadFromLast();
    if (selectedAccount == null || selectedAccount == "") {
        alert("请链接钱包");
        // alert(
        //     store.state.i18n[
        //         store.state.language
        //     ].please_connect_wallet
        // )
        return;
    }
    if (!await checkYear(_years)) return;
    var checked = await checkBNBbalance(amount);
    if (checked == null) return;
    loadingTrue()

    var byte32Name = web3.utils.padLeft(web3.utils.utf8ToHex(name), 64);
    let _value = parseInt(bnbPrice * _years) + 100000000000000;
    console.log("buyWithEth node:", byte32Name, " value:", _value);

    brickEnsContract.methods.buyWithEth(byte32Name, selectedAccount, selectedAccount, _years).send({ from: selectedAccount, value: _value }).then(result => {
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
        alert("请链接钱包");
        // alert(
        //     store.state.i18n[
        //         store.state.language
        //     ].please_connect_wallet
        // )
        return;
    }
    if (!await checkYear(_years)) return;
    var checked = await checkUSDTbalance(amount);
    if (checked == null) return;
    loadingTrue()

    var byte32Name = web3.utils.padLeft(web3.utils.utf8ToHex(name), 64);

    console.log("buyWithUsdt years:", _years, " name:", byte32Name);

    brickEnsContract.methods.buyWithUsdt(byte32Name, selectedAccount, selectedAccount, _years).send({ from: selectedAccount }).then(result => {
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
        alert("请链接钱包");
        // alert(
        //     store.state.i18n[
        //         store.state.language
        //     ].please_connect_wallet
        // )
        return;
    }
    if (!await checkYear(_years)) return;
    var checked = await checkBrickbalance(amount);
    if (checked == null) return;
    loadingTrue()

    var byte32Name = web3.utils.padLeft(web3.utils.utf8ToHex(name), 64);
    console.log("buyWithBrick years:", _years, " name:", byte32Name);
    brickEnsContract.methods.buyWithBrick(byte32Name, selectedAccount, selectedAccount, _years).send({ from: selectedAccount }).then(result => {
        loadingFalse()
        callback();
    }).catch((err) => {
        loadingFalse()
        console.log(err)
    });
}

export async function getPrice(name) {
    await checkAndLoadFromLast();
    if (selectedAccount == null || selectedAccount == "") {
        alert("请链接钱包");
        // alert(
        //     store.state.i18n[
        //         store.state.language
        //     ].please_connect_wallet
        // )
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
            alert("存在非法字符[❤]️，请替换再查询");
            // alert(
            //     store.state.i18n[
            //         store.state.language
            //     ].illegal_love_exists
            // );
            return false;
        }
    }
    if (parseInt(lengthFromPrice) !== Array.from(name).length) {
        alert("存在非法字符，请替换再查询");
        // alert(
        //     store.state.i18n[
        //         store.state.language
        //     ].illegal_exists
        // );

        return false;
    }
    return true;
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
    priceContract = new web3.eth.Contract(PRICE_ABI, PRICE_ADDRESS)

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
        alert("请链接钱包");
        // alert(
        //     store.state.i18n[
        //         store.state.language
        //     ].please_connect_wallet
        // )
        return null;
    }
    var balance = await web3.eth.getBalance(selectedAccount);
    console.log(balance);
    console.log(amount);
    if (balance < amount) {
        alert("钱包BNB余额不足");
        // alert(
        //     store.state.i18n[
        //         store.state.language
        //     ].BNB_wallet
        // )
        return null;
    }
    return "1";
}

export async function checkUSDTbalance(amount) {
    await checkAndLoadFromLast();
    if (selectedAccount == null || selectedAccount === "") {
        alert("请链接钱包");
        // alert(
        //     store.state.i18n[
        //         store.state.language
        //     ].please_connect_wallet
        // )
        return null;
    }
    var balance = await usdtContract.methods.balanceOf(selectedAccount).call();
    console.log(balance);
    console.log(amount);
    if (balance < amount) {
        alert("钱包USDT余额不足");
        // alert(
        //     store.state.i18n[
        //         store.state.language
        //     ].USDT_wallet
        // )
        return null;
    }
    return "1";
}

export async function checkBrickbalance(amount) {
    await checkAndLoadFromLast();
    if (selectedAccount == null || selectedAccount === "") {
        alert("请链接钱包");
        // alert(
        //     store.state.i18n[
        //         store.state.language
        //     ].please_connect_wallet
        // )
        return null;
    }
    var balance = await brickContract.methods.balanceOf(selectedAccount).call();
    console.log(balance);
    console.log(amount);
    if (balance < amount) {
        alert("钱包BRICK余额不足");
        // alert(
        //     store.state.i18n[
        //         store.state.language
        //     ].BRICK_wallet
        // )
        return null;
    }
    return "1";
}


/**
 * Main entry point.
 */

