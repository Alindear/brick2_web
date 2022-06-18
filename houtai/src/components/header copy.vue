<template>
    <div class="header_app">
        <div
            class="menu_content"
            :style="{'z-index': !menuFlag ? 1 : 0}"
        >
            <div class="top_title">
                <div class="top_left">
                    <img
                        :src="logoPng"
                        alt=""
                    >
                </div>
                <div class="top_right">
                    <el-button
                        v-if="!isconnect"
                        @click="onConnect"
                    >链接钱包</el-button>
                    <el-button
                        v-if="isconnect"
                        @click="disConnect"
                    >
                        {{(selectedAccount && selectedAccount.length > 8) ? (selectedAccount.slice(0,4) + '..' + selectedAccount.slice(-4)) : selectedAccount}}
                    </el-button>
                    <img
                        v-if="menuFlag"
                        :src="menu"
                        alt=""
                        @click="openMenu"
                    >
                    <img
                        v-if="!menuFlag"
                        :src="closemenu"
                        alt=""
                        @click="closeMenu"
                    >
                </div>
            </div>
            <div
                class="back_menu"
                v-if="!menuFlag"
                @click="menuFlag = !menuFlag"
            >
                <img
                    src=""
                    alt=""
                >
            </div>

            <transition
                enter-active-class="animate_bounceIn"
                leave-active-class="animate_bounceOut"
            >
                <div
                    class="menu_list"
                    v-if="!menuFlag"
                >
                    <p @click="goRouter('index')">首页</p>
                    <div class="list_border"></div>
                    <p @click="goRouter('ido')">IDO</p>
                    <div class="list_border"></div>
                    <p @click="goRouter('medal')">以太勋章</p>
                    <div class="list_border"></div>
                    <p @click="goRouter('bonuspool')">奖金池</p>
                    <div class="list_border"></div>
                    <p> <a href='http://etdao.info/airdropgames'>闯关夺宝</a></p>
                    <div class="list_border"></div>
                    <p @click="goRouter('clickcoin')">一键发币</p>
                    <div class="list_border"></div>
                    <p @click="goRouter('privatesale')">ido启动板</p>
                    <div class="switch_lang">
                        <el-switch
                            v-model="language"
                            active-color="#6f6f6f"
                            inactive-color="#6f6f6f"
                            active-text="EN"
                            inactive-text="中文"
                        >
                        </el-switch>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import anglesign from 'img/角标.png';
import menu from 'img/菜单.png';
import closemenu from 'img/关闭菜单.png';
import logoPng from 'img/logo.jpg';
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
		// console.log('type', this.type);
		this.onConnect();
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
.header_app {
	height: 100%;
	widows: 100%;
	.back_menu {
		width: 100%;
		height: 100%;
		position: fixed;
		right: 0;
		top: 0;
		background-color: rgba(113, 115, 139, 0.4117647059);
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(10px);
		z-index: 999;
	}
	.top_title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 1.25rem;
		width: 7.5rem;
		padding: 0 0.39rem;
		box-sizing: border-box;
		padding: 0 0.39rem;
		.el-button {
			height: 0.8rem;
			background: rgba(91, 0, 118, 0.37);
			border: 1px solid #710685;
			border-radius: 39.5px;
			// font-family: webfont;
			font-family: PangMenZhengDao;
			font-size: 0.32rem;
			color: #ffffff;
			letter-spacing: 0.56px;
		}
		img {
			vertical-align: middle;
			height: 0.53rem;
		}
		.top_left {
			display: flex;
			align-items: center;
			img {
				// width: 0.73rem;
				// height: 0.73rem;
				height: 0.54rem;
			}
		}
		.top_right {
			display: flex;
			justify-content: center;
			align-items: center;
			.el-button {
				margin: 0.17rem 0.16rem 0.28rem 0;
			}
			img {
				margin: 0.3rem 0.07rem 0.42rem 0;
			}
		}
	}
	.menu_content {
		width: 7.5rem;
		// width: 3.5rem;
		// height: 13.34rem;
		position: relative;
		z-index: 1;
		.animate_bounceIn {
			animation-name: bounceIn;
			animation-duration: 1s;
		}
		.animate_bounceOut {
			animation-name: bounceOut;
			animation-duration: 1s;
		}
		.menu_list {
			// height: 6rem;
			position: fixed;
			right: 0.1rem;
			top: 0.5rem;
			z-index: 9999;
			background-color: rgba(0, 0, 0, 0.52);
			color: #000;
			border-radius: 0.2rem;
			padding: 0.7rem 0.2rem;
			border-radius: 0.2rem;
			box-sizing: border-box;
			a {
				text-decoration: none;
				color: inherit;
			}

			/* 状态一: 未被访问过的链接 */
			a:link {
				text-decoration: none;
				color: inherit;
			}

			/* 状态二: 已经访问过的链接 */
			a:visited {
				text-decoration: none;
				color: inherit;
			}

			/* 状态三: 鼠标划过(停留)的链接(默认红色) */
			a:hover {
				text-decoration: none;
				color: inherit;
			}
			/* 状态四: 被点击的链接 */
			a:active {
				text-decoration: none;
				color: inherit;
			}
			p {
				// height: 0.5rem;
				margin: 0;
				height: 0.64rem;
				line-height: 0.64rem;
				font-family: PangMenZhengDao;
				// font-size: 0.64rem;
				font-size: 0.5rem;
				// font-size: 0.32rem;
				color: #ffffff;
				letter-spacing: 0.096rem;
				margin: 0.32rem;
			}
			.list_border {
				// width: 6.86rem;
				height: 1px;
				opacity: 0.4;
				background: #999999;
				margin: auto;
			}
			.switch_lang {
				margin-left: 0.32rem;
				/* switch按钮样式 */
				/deep/.el-switch__label {
					position: absolute;
					display: none;
					color: #000000 !important;
				}
				/*打开时文字位置设置*/
				/deep/.el-switch__label--right {
					z-index: 1;
					margin: 0;
				}
				/* 调整打开时文字的显示位子 */
				/deep/.el-switch__label--right span {
					margin-left: 1.2rem;
					font-family: PangMenZhengDao;
					font-size: 0.32rem;
					color: #000000;
					letter-spacing: 0.0056rem;
					margin-top: -0.05rem;
				}
				/*关闭时文字位置设置*/
				/deep/.el-switch__label--left {
					z-index: 1;
				}
				/* 调整关闭时文字的显示位子 */
				/deep/.el-switch__label--left span {
					// height: 0.32rem;
					// width: 0.61rem;
					height: 0.92rem;
					line-height: 0.92rem;
					margin-left: 0.175rem;
					font-family: PangMenZhengDao;
					font-size: 0.32rem;
					color: #000000;
					letter-spacing: 0.0056rem;
					// margin-top: -0.05rem;
				}
				/*显示文字*/
				/deep/.el-switch__label.is-active {
					display: block;
					height: 0.92rem;
					line-height: 0.92rem;
				}
				/* 调整按钮的宽度 */
				/deep/.el-switch .el-switch__core,
				.el-switch .el-switch__label {
					width: 1.87rem !important;
					height: 0.92rem;
					border-radius: 0.46rem;
				}
				/deep/.el-switch.is-checked
					.el-switch__core::after {
					left: 100%;
					margin-left: -0.92rem;
				}
				/deep/.el-switch__core:after {
					content: '';
					position: absolute;
					// top: 1px;
					// left: 1px;
					top: 0px;
					left: 0px;
					border-radius: 100%;
					-webkit-transition: all 0.3s;
					transition: all 0.3s;
					width: 0.92rem;
					height: 0.92rem;
					background-color: #fff;
				}
			}
		}
	}

	@media only screen and (min-width: 749px) {
		.back_menu {
			width: 100%;
			height: 100%;
			position: fixed;
			right: 0;
			top: 0;
			background-color: rgba(113, 115, 139, 0.4117647059);
			-webkit-backdrop-filter: blur(5px);
			backdrop-filter: blur(10px);
			z-index: 999;
		}
		.top_title {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			height: 1.25rem;
			width: 7.5rem;
			padding: 0 0.39rem;
			box-sizing: border-box;
			padding: 0 0.39rem;
			.el-button {
				height: 0.8rem;
				background: rgba(91, 0, 118, 0.37);
				border: 1px solid #710685;
				border-radius: 39.5px;
				// font-family: webfont;
				font-family: PangMenZhengDao;
				font-size: 0.32rem;
				color: #ffffff;
				letter-spacing: 0.56px;
			}
			img {
				vertical-align: middle;
				height: 0.53rem;
			}
			.top_left {
				display: flex;
				align-items: center;
				img {
					// width: 0.73rem;
					height: 0.54rem;
				}
			}
			.top_right {
				display: flex;
				justify-content: center;
				align-items: center;
				.el-button {
					margin: 0.17rem 0.16rem 0.28rem 0;
				}
				img {
					margin: 0.3rem 0.07rem 0.42rem 0;
				}
			}
		}
		.menu_content {
			width: 7.5rem;
			// height: 13.34rem;
			position: relative;
			z-index: 1;
			.animate_bounceIn {
				animation-name: bounceIn;
				animation-duration: 1s;
			}
			.animate_bounceOut {
				animation-name: bounceOut;
				animation-duration: 1s;
			}
			.menu_list {
				position: fixed;
				right: 0.1rem;
				top: 0.5rem;
				z-index: 9999;
				background-color: rgba(0, 0, 0, 0.52);
				color: #000;
				border-radius: 0.2rem;
				padding: 0.5rem 0.2rem;
				border-radius: 0.2rem;
				box-sizing: border-box;
				a {
					text-decoration: none;
					color: inherit;
				}

				/* 状态一: 未被访问过的链接 */
				a:link {
					text-decoration: none;
					color: inherit;
				}

				/* 状态二: 已经访问过的链接 */
				a:visited {
					text-decoration: none;
					color: inherit;
				}

				/* 状态三: 鼠标划过(停留)的链接(默认红色) */
				a:hover {
					text-decoration: none;
					color: inherit;
				}
				/* 状态四: 被点击的链接 */
				a:active {
					text-decoration: none;
					color: inherit;
				}
				p {
					margin: 0;
					height: 0.7rem;
					line-height: 0.7rem;
					font-family: PangMenZhengDao;
					font-size: 0.24rem;
					color: #ffffff;
					letter-spacing: 0.096rem;
				}
				.list_border {
					// width: 6.86rem;
					height: 1px;
					opacity: 0.4;
					background: #999999;
					margin: auto;
				}

				.switch_lang {
					margin-left: 0;
					height: 0.52rem;
					line-height: 0.52rem;
					/* switch按钮样式 */
					/deep/.el-switch__label {
						position: absolute;
						display: none;
						color: #000000 !important;
					}
					/*打开时文字位置设置*/
					/deep/.el-switch__label--right {
						z-index: 1;
						margin: 0;
					}
					/* 调整打开时文字的显示位子 */
					/deep/.el-switch__label--right span {
						height: 0.52rem;
						line-height: 0.52rem;
						margin-left: 1.45rem;
						font-family: PangMenZhengDao;
						font-size: 0.24rem;
						color: #000000;
						letter-spacing: 0.0056rem;
						// margin-top: -0.05rem;
					}
					/*关闭时文字位置设置*/
					/deep/.el-switch__label--left {
						z-index: 1;
					}
					/* 调整关闭时文字的显示位子 */
					/deep/.el-switch__label--left span {
						height: 0.52rem;
						line-height: 0.52rem;
						margin-left: 0.05rem;
						font-family: PangMenZhengDao;
						font-size: 0.24rem;
						color: #000000;
						letter-spacing: 0.0056rem;
						// margin-top: -0.05rem;
					}
					/*显示文字*/
					/deep/.el-switch__label.is-active {
						display: block;
						height: 0.52rem;
						line-height: 0.52rem;
					}
					/* 调整按钮的宽度 */
					/deep/.el-switch .el-switch__core,
					.el-switch .el-switch__label {
						width: 1.87rem !important;
						// height: 0.92rem;
						height: 0.52rem;
						border-radius: 0.46rem;
					}
					/deep/.el-switch.is-checked
						.el-switch__core::after {
						left: 100%;
						margin-left: -0.5rem;
					}
					/deep/.el-switch__core:after {
						content: '';
						position: absolute;
						top: 0px;
						left: 0px;
						border-radius: 100%;
						-webkit-transition: all 0.3s;
						transition: all 0.3s;
						width: 0.52rem;
						height: 0.52rem;
						background-color: #fff;
					}
				}
			}
		}
	}
}
</style>