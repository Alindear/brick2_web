<template>
    <div class="header_web">
        <div class="header_pc">
            <img
                :src="logoPng"
                alt=""
            >
            <div class="title_right">
                <div
                    class="menu_top"
                    v-if="$route.fullPath == '/index'"
                >
                    <span @click="goRouter('/brick/myens')">我的域名</span>
                    <span @click="goRouter('/brick/documentdesc')">文档说明</span>
                    <span @click="goRouter('/brick/contactus')">联系社区</span>
                    <span @click="goRouter('/brick/searchEns')">11111</span>
                    <span @click="goRouter('/brick/step')">222222</span>

                </div>

                <div
                    v-if="!isconnect"
                    class="on_connect"
                >
                    <span class="connect_text">链接钱包（只读状态）</span>
                    <el-button @click="onConnect">连接</el-button>
                </div>
                <div
                    v-if="isconnect"
                    class="dis_connect"
                >
                    <span class="connect_text">0x88…4ds3</span>
                    <span class="connect_main">
                        <span class="coin_main"></span>
                        <span>Main 网络</span>
                    </span>
                    <el-button @click="disConnect">断开连接</el-button>
                </div>
                <div
                    class="secrch_title"
                    v-if="$route.fullPath !== '/index'"
                >
									<el-button class="search_border" @click="showSearchBtn(true)">
										<img
												:src="searchPng"
												alt=""
											>
											<span>搜索</span>
									</el-button>
                </div>
            </div>
        </div>
				<div v-if="showSearchContainer">
					<div class="search_container">
						<p class="search_text">搜索</p>
						<el-input v-model="searchText"></el-input>
            <span class="his_text" v-for="(his, i) in histroys" :key="i" @click="goDetail(his)">{{ his }}</span>
					</div>
					<div class="mask_dialog" @click="showSearchBtn(false)"></div>
				</div>
			
    </div>
</template>

<script>
import anglesign from 'img/角标.png';
import menu from 'img/菜单.png';
import searchPng from 'img/icon/编组.png';
import closemenu from 'img/关闭菜单.png';
import logoPng from 'img/首页/BNS_logo@2x.png';
import 'houtai/web3.min.js';
import {
	connectWallet,
	disconnectWallet,
	currentAddr,
	alert,
} from 'houtai/web3_eth.js';

export default {
	props: ['type'],
	data() {
		return {
			searchText:'',
			language: false,
			isconnect: false,
			anglesign,
			menu,
			closemenu,
			logoPng,
			searchPng,
			selectedAccount: '',
			menuFlag: true,
			showSearchContainer: false,
			
			histroys:['888888','neko是只猫咪','neko是只猫咪','neko是只猫咪'],
		};
	},

	mounted() {
		console.log('this.$route', this.$route.fullPath);
		// this.onConnect();
    this.showHotSearch()
		
	},


	methods: {
		onSearch(value) {
      this.addHotSearch(value) //调用添加搜索的方法
      this.goDetail(value) //跳转页面
    },
		showHotSearch() {
      var items = localStorage.getItem('api-hot-search') // 从本地获取
      if (items) {
        items = JSON.parse(items)
        this.histroys = items
      }
    },
    addHotSearch(keyword) { 
      keyword = String(keyword)
      var items = this.histroys //historys是在data中定义的一个数组
      if (items.indexOf(keyword) == -1) { //如果historys中没有，现在搜索的值
        // if (items.length >= 5) { // 控制historys这个数组的长度不超过5
        //   items.pop() 
        // }
        items.unshift(keyword) //往数组的前面加上该值
      }
      localStorage.setItem('api-hot-search', JSON.stringify(items)) //存到本地
    },
		// 点击查询 打开查询面板
		showSearchBtn(flag){
			this.showSearchContainer = flag
		},
		// 链接钱包
		async onConnect() {
			// console.log('连接');
			// if (this.$route.fullPath === '/index') {
			// 	this.isconnect = true;
			// 	this.$emit('changeStatus', this.isconnect);
			// }
			let _this = this;
			await connectWallet(function () {
				_this.selectedAccount = currentAddr;
				_this.isconnect = true;
			});
			if (this.$route.fullPath === '/index') {
				console.log('this.isconnect', this.isconnect);
				this.$emit('changeStatus', this.isconnect);
			}

			//await allowancedUSDT();
		},
		//断开连接
		async disConnect() {
			let _this = this;
			await disconnectWallet(function () {
				_this.selectedAccount = '';
				_this.isconnect = false;
			});
			if (this.$route.fullPath === '/index') {
				console.log('this.isconnect', this.isconnect);
				this.$emit('changeStatus', this.isconnect);
			}
			alert('断开连接');
		},

		//打开菜单
		openMenu() {
			console.log('打开菜单');
			this.menuFlag = false;
		},
		//关闭菜单
		closeMenu() {
			console.log('关闭菜单');
			this.menuFlag = true;
		},
		//跳转路由
		goRouter(type) {
			this.$router.push({
				path: type,
			});
		},
	},
};
</script>

<style lang="less" scoped>
.header_web {
	// height: 100%;
	width: 100%;
	height: 1rem;
	background-color: #ffffff;
	.header_pc {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: 0.16rem;
		padding: 0.26rem 1.6rem;
		img {
			width: 0.5115rem;
			height: 0.48rem;
			vertical-align: middle;
		}
		.title_right {
			display: flex;
			flex-direction: row;
			height: 0.48rem;
			line-height: 0.48rem;
			.on_connect {
				display: flex;
				flex-direction: row;
			}
			.dis_connect {
				display: flex;
				flex-direction: row;
				.connect_main {
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					color: #000000;
					margin-right: 0.32rem;
					.coin_main {
						width: 0.04rem;
						height: 0.04rem;
						background: #21dc3f;
						border-radius: 50%;
						margin-right: 0.04rem;
					}
				}
				.el-button {
					color: #ffffff;
				}
			}
			.connect_text {
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: #999999;
				margin-right: 0.16rem;
			}
			.el-button {
				width: 1.36rem;
				height: 0.48rem;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				font-size: 0.16rem;
				color: #000000;
				background-image: linear-gradient(
					-60deg,
					#6af0e9 0%,
					#edafff 100%
				);
				border-radius: 0.0533rem;
			}
			.menu_top {
				span {
					width: 0.64rem;
					height: 0.48rem;
					line-height: 0.48rem;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					font-size: 0.16rem;
					color: #000000;
					margin-right: 0.32rem;
				}
			}
			

			.secrch_title {
				display: flex;
				flex-direction: row;
				align-items: center;
				padding: 0;
				.search_border {
					padding: 0 0.12rem;
					width:0.92rem;
					height: 0.48rem;
					line-height: 0.48rem;
					border-radius: 0.24rem;
					font-family: PingFangSC-Semibold;
					font-weight: 600;
					font-size: 0.16rem;
					color: #999999;
					letter-spacing: 0;
					background-image: linear-gradient(
						to right,
						#e5b3fd,
						#7de7ec
					);
					-webkit-background-clip: text;
					color: transparent;
					display: flex;
					flex-direction: row;
					// align-items: center;
				}
				img {
					height: 0.22rem;
					width: 0.2rem;
					margin-right: 0.1rem;
					vertical-align: middle;
				}
				span {
					width: 0.32rem;
					height: 0.22rem;
					margin: auto;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					font-size: 0.16rem;
					background-image: linear-gradient(
						to right,
						#e5b3fd,
						#7de7ec
					);
					-webkit-background-clip: text;
					color: transparent;
				}
			}
		}
	}
	.mask_dialog{
		width: 100%;
		height: calc( 100% - 1rem );
		opacity: 0.7;
		background-color: #000000;
		// bottom: 0;
		// left: 0;
		// position: fixed;
		position: absolute;
		z-index: 1;
	}
	.search_container{
		width: 16.00rem;
		height: 4.10rem;
		background: #FFFFFF;
		// background: #000000;
		border-radius: 0 0 .32rem .32rem;
		z-index: 999;
		position: absolute;
		margin: 0 1.6rem;
		padding: 0 1rem;
		box-sizing: border-box;
		.search_text{
			height: 0.40rem;
			font-family: PingFangSC-Semibold;
			font-weight: 600;
			font-size: 0.28rem;
			color: #000000;
			letter-spacing: 0;
		}
		.el-input{
			width: 14.00rem;
			height: 0.96rem;
			border-radius: 0.32rem;
		}
		.his_text{
			// width: 0.84rem;
			height: 0.58rem;
			background: #F1F1F1;
			width: 48rem;
			height: .22rem;
			font-family: PingFangSC-Semibold;
			font-weight: 600;
			font-size: .16rem;
			color: #999999;
			letter-spacing: 0;
		}
	}
}
</style>