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
            </div>
        </div>
    </div>
</template>

<script>
import anglesign from 'img/角标.png';
import menu from 'img/菜单.png';
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
			language: false,
			isconnect: false,
			anglesign,
			menu,
			closemenu,
			logoPng,
			selectedAccount: '',
			menuFlag: true,
		};
	},

	mounted() {
		console.log('this.$route', this.$route.fullPath);
		// this.onConnect();
	},

	methods: {
		// 链接钱包
		async onConnect() {
			let _this = this;
			await connectWallet(function () {
				_this.selectedAccount = currentAddr;
				_this.isconnect = true;
			});

			//await allowancedUSDT();
		},
		//断开连接
		async disConnect() {
			let _this = this;
			await disconnectWallet(function () {
				_this.selectedAccount = '';
				_this.isconnect = false;
			});

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
		}
	}
}
</style>