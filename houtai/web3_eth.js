var presaleAddr = '0x4CB246b4200029515E6A01635537D5F954470fE2';
var usdtAddr = '0x55d398326f99059fF775485246999027B3197955';

var presaleAbi = [
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
		"inputs": [],
		"name": "_referUSDT",
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
		"name": "_tokenAddr",
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
				"name": "addr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amountOut",
				"type": "uint256"
			}
		],
		"name": "airdrop",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_refer",
				"type": "address"
			}
		],
		"name": "buyETD",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimETD",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "cliamed",
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
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "paidedUsdt",
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
				"name": "",
				"type": "address"
			}
		],
		"name": "referCounter",
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
				"name": "",
				"type": "address"
			}
		],
		"name": "referRewards",
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
				"name": "",
				"type": "address"
			}
		],
		"name": "referrals",
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
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "salePrice",
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
				"internalType": "uint8",
				"name": "tag",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "set",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalUser",
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
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "unpaided",
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
				"name": "addr",
				"type": "address"
			}
		],
		"name": "updateTokenAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "usdtTotalPaided",
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
		"name": "withdrawAllETH",
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
		"name": "withdrawUSDT",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]
var tokenAbi =
	[
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

var presaleContract;
var usdtContract;

//addr
export var currentAddr;
export var allowancedUsdtAmount;

//my data
export var myUnpaidedETD = 0;
export var myPaidedUSDT = 0;
export var myReferCount = 0;
export var myreferReward = 0;

//sys data
export var totalUser = 0;
export var usdtTotalPaided = 0;
//********************************presale**********************************
export function buy(ref, callback){
	if(web3 == null || usdtContract ==null){
		alert("请链接钱包!");
		return ;
	}

	console.log('buying ');
	if(!ref){
		ref = currentAddr
	}

	console.log("buy refer:",ref) 

	presaleContract.methods.buyETD(ref).send({from:currentAddr}).then(result => {
		if(callback !=null){
			callback(result);
		}
	}).catch((err) => {
		console.log(err)
	});
}

export function claim(callback){
	if(web3 == null || usdtContract ==null){
		alert("请链接钱包!");
		return ;
	}

    console.log('claiming ');
    presaleContract.methods.claimETD().send({from:currentAddr}).then(result => {
        callback(result);
    }).catch((err) => {
        console.log(err)
    });
}

function getSystemInfo(){
	// console.log("totalUser:",totalUser);
	// console.log("totalUsdtPaided:",usdtTotalPaided);

	getTotalUserCount()
	getTotalPaidedUsdt()
}

function getTotalUserCount(){
	presaleContract.methods.totalUser().call().then(result => {
		totalUser = result;
	}).catch((err) => {
		console.log(err)
	});
}

function getTotalPaidedUsdt(){
	presaleContract.methods.usdtTotalPaided().call().then(result => {
		usdtTotalPaided = result;
	}).catch((err) => {
		console.log(err)
	});
}

function getMyInfo(){
	// console.log("myUnpaidedETD:",myUnpaidedETD);
	// console.log("myPaidedUSDT:",myPaidedUSDT);
	// console.log("myReferCount:",myReferCount);
	// console.log("myreferReward:",myreferReward);

	getUnpaided();
	getPaidedUsdt();
	getReferReward();
	getReferCount();
}

function getUnpaided(){
        presaleContract.methods.unpaided(currentAddr).call().then(result => {
			myUnpaidedETD = result;
        }).catch((err) => {
            console.log(err)
        });
}

function getPaidedUsdt(){
	presaleContract.methods.paidedUsdt(currentAddr).call().then(result => {
		 	myPaidedUSDT = result;
        }).catch((err) => {
            console.log(err)
        });
}

function getReferReward(){
	presaleContract.methods.referRewards(currentAddr).call().then(result => {
			myreferReward = result;
        }).catch((err) => {
            console.log(err)
        });
}

function getReferCount(){
	presaleContract.methods.referCounter(currentAddr).call().then(result => {
			myReferCount = result;
        }).catch((err) => {
            console.log(err)
        });
}


//***********************************usdt*****************************************
export async function approveUSDT(callback) {
	if(web3 == null || usdtContract ==null){
		alert("请链接钱包!");
		return ;
	}

	usdtContract.methods.approve(presaleAddr, "1000000000000000000000").send({ from: currentAddr }).then(result => {
        console.log("approved");
		allowancedUsdtAmount = "1000";
		if(callback != null) {
			callback()
		};
    }).catch((err) => {
        console.log(err)
    });
}

export async function allowancedUSDT() {
	if(web3 == null || usdtContract ==null){
		alert("请链接钱包!");
		return 0;
	}

	allowancedUSDT = await usdtContract.methods.allowance(currentAddr,presaleAddr).call();
	allowancedUSDT =  web3.utils.fromWei(allowancedUSDT);
    return allowancedUSDT;
}

export function totalUSDTBalance(callback){
        usdtContract.methods.balanceOf(currentAddr).call().then(result => {
            var amt = web3.utils.fromWei(result)
            // console.log("balance" + amt)
        callback(amt);
                usrBal=amt;
        }).catch((err) => {
        console.log(err)
        });
}

export function userUSDTBalance(callback){
    usdtContract.methods.balanceOf(currentAddr).call().then(result => {
			  var amt = web3.utils.fromWei(result)
				// console.log("balance" + amt)
        callback(amt);
				usrBal=amt;
    }).catch((err) => {
        console.log(err)
    });
}

//********************************load wallet *************************

export async  function connectWallet(callback){
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            await ethereum.enable() // Request access
            //tokenContract = await new web3.eth.Contract(tokenAbi, tokenAddr)
            usdtContract = await new web3.eth.Contract(tokenAbi, usdtAddr)
            presaleContract =  await new web3.eth.Contract(presaleAbi, presaleAddr)

            let accounts = await web3.eth.getAccounts()
            currentAddr = accounts[0]
            console.log("connected account:",currentAddr);
            //document.getElementById('address').textContent = "0x..." + currentAddr.substring(38, 42);
        } catch (error) {
            // User denied account access...
            console.error(error)
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        //tokenContract = await new web3.eth.Contract(tokenAbi, tokenAddr)
        usdtContract = await new web3.eth.Contract(tokenAbi, usdtAddr)
        presaleContract =  await new web3.eth.Contract(presaleAbi, presaleAddr)

        let accounts = await web3.eth.getAccounts()
        currentAddr = accounts[0]
        console.log("connected account:",currentAddr);
        //document.getElementById('address').textContent = "0x..." + currentAddr.substring(38, 42);
    }

	if(callback!=null){
		callback();
	}

	setInterval(function(){
		getMyInfo();
		getSystemInfo();
	}, 1000*3)
}

export async function disconnectWallet(callback){
    //window.web3.currentProvider.close()
    window.web3 = null;
    usdtContract =  null;
    presaleContract =  null;
    currentAddr =  null;

	if(callback!=null){
		callback();
	}
}

export function getInterval(start, end) {
	// 两个日期对象，相差的毫秒数
	var interval = end - start;
	// 求 相差的天数/小时数/分钟数/秒数
	var day, hour, minute, second;

	// 两个日期对象，相差的秒数
	// interval = interval / 1000;
	interval /= 1000;

	day = parseInt(interval / 60 / 60 / 24);
	hour = parseInt(interval / 60 / 60 % 24);
	minute = parseInt(interval / 60 % 60);
	second = parseInt(interval % 60);

	return {
		day: day,
		hour: hour,
		minute: minute,
		second: second
	}
}

/**
 * 
 * 重写Alert样式
 * 无操作 3秒自动关闭
 */
 
 window.alert = alert;
 export function alert(data){
		 var a = document.createElement("div"),
		 		 btn = document.createElement("div"),
				 p = document.createElement("p"),
				 textNode = document.createTextNode(data ? data : ""),
				 btnText = document.createTextNode("提示");
		 // 控制样式
	
		 css(a, {
				 'font-family': 'PingFangSC-Regular',
				 'font-weight': '400',
				 'letter-spacing': '0.007rem',
				 'border-radius': '0.24rem',
				 "position" : "fixed",
				 "left" : "0",
				 "right" : "0",
				 "top" : "40%",
				 "width" : "7.02rem",
				 "background-color" : "rgba(255,127,0,0.08)",
				 "font-size" : "0.28rem",
				//  'margin' : '0rem 0.24rem 0.32rem 0.24rem',
				 'margin' : '0 auto 0.24rem',
				 'min-height' : '2rem',
				 'color' : '#E46D02',
				 'padding-left':'0.24rem',
				 'text-align': 'center',
		 });
		 css(btn, {
				 'margin': '0.32rem 0 0.16rem',
				 'height':'0.48rem',
				 'line-height': '0.48rem',
				 'font-size': '0.34rem',
				 'color' : '#FC861D',
				 'font-family': 'PingFangSC-Semibold',
				 'font-weight': '600',
				 'text-align': 'center',
		 });
		// 内部结构套入
		btn.appendChild(btnText);
		 p.appendChild(textNode);
		 a.appendChild(btn);
		 a.appendChild(p);
		// 整体显示到页面内
		 document.getElementsByTagName("body")[0].appendChild(a);
		// 确定绑定点击事件删除标签
		 btn.onclick = function() {
				 a.parentNode.removeChild(a);
		 }
		//不操作1秒自动关闭
		 window.setTimeout(function() {
				a.parentNode.removeChild(a);
			},1000)
 };

 function css(targetObj, cssObj) {
		 var str = targetObj.getAttribute("style") ? targetObj.getAttribute("style") : "";
		 for(var i in cssObj) {
				 str += i + ":" + cssObj[i] + ";";
		 }
		 targetObj.style.cssText = str;
 }


//*************tools**************************************/
export function copyToClipboard(text){
	var temp = document.createElement("input");
	document.body.appendChild(temp);
	temp.setAttribute("value", text);		
	temp.select();

	document.execCommand("copy");
	document.body.removeChild(temp);
}


//*****************************load */

//connect to wallet && create contract instance.
window.addEventListener('load', async function () {
    //connectWallet();
})
