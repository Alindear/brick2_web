<template>
    <div class="search_main">
        <div class="search_ens">
            <p class="ens_text">域名</p>
            <div class="domian_name_search">
                <div class="domian_name_content">
                    <div class="right_content">
                        <p class="title_name">
                            {{searchText}}.bsc
                        </p>
                        <div class="step_content">

                            <p
                                class="step_title"
                                v-if=""
                            >您很快就可以完成域名注册</p>
                            <p class="step_title">
                                <img
                                    :src="successPng"
                                    alt=""
                                >
                                您已完成注册
                            </p>
                            <p class="step_title_desc">*您可以收藏喜欢的域名，以便于浏览器关闭以后重新查看这个域名。</p>

                            <div class="step_process">
                                <div class="step_left_process">
                                    <div class="left_circle">
                                        <p :style="{color: !approveBtnDisabled ? '#ffffff' : '#d8d8d8', 'background-image': !approveBtnDisabled ? 'linear-gradient(-60deg, #6AF0E9 0%, #EDAFFF 100%)' : 'linear-gradient(-60deg, #ffffff 0%, #ffffff 100%)','border': !approveBtnDisabled? 'none' : '0.01rem solid #ccc;'}">1</p>
                                    </div>
                                    <div class="step_text">
                                        <div class="step_text_title">请求注册</div>
                                        <div class="step_text_desc">需要在钱包中确认一笔交易，这是完成域名注册所需的两笔交易中的第一笔。如果第1步完成之后的24小时内没有进行第2步，则需要从第1步重新开始。</div>
                                    </div>
                                </div>
                                <div class="step_center_process">
                                    <div class="left_circle">
                                        <!-- <p :style="{color: registBtnDisabled ? '#ffffff' : '#d8d8d8', border: registBtnDisabled ? '0.02rem solid #a63928' : '0.01rem solid #d8d8d8'}">2</p> -->
                                        <p :style="{color: registBtnDisabled ? '#ffffff' : '#d8d8d8', 'background-image': registBtnDisabled ? 'linear-gradient(-60deg, #6AF0E9 0%, #EDAFFF 100%)' : 'linear-gradient(-60deg, #ffffff 0%, #ffffff 100%)','border': registBtnDisabled? 'none' : '0.01rem solid #ccc;'}">2</p>
                                    </div>
                                    <div class="step_text">
                                        <div class="step_text_title">完成注册</div>
                                        <div class="step_text_desc">点击“注册”按钮，并在钱包中再次确认一笔交易，只有在这次交易确认后，才能确定是不是成功注册了这个域名。</div>
                                    </div>

                                </div>
                            </div>
                            <div class="process_img">
                                <el-progress
                                    :show-text="false"
                                    :stroke-width="20"
                                    :percentage="50"
                                    status="exception"
                                ></el-progress>

                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import searchBtnPng from 'img/首页/search.png';
import addPng from 'img/增加.png';
import reducePng from 'img/减少.png';
import linkPng from 'img/链接.png';
import warnPng from 'img/警告.png';
import successPng from 'img/编组@2x.png';
import {
	buyWithEth,
	buyWithUsdt,
	buyWithBrick,
	approve,
	getPrice,
	usdtPrice,
	bnbPrice,
	brickPrice,
} from 'houtai/web3_eth.js';

export default {
	data() {
		return {
			reducePng,
			linkPng,
			warnPng,
			successPng,
			searchBtnPng,

			bodyHeight: '',
			isExist: null,
			openLinkShowFlag: false,
			searchEnsLoading: false,
			fontColor: 'blue',
			approveBtnDisabled: false,
			approveBtnLoading: false,
			registBtnDisabled: false,
			registBtnLoading: false,
			years: 2,
			price: 99999999999,
			currencyUnit: 'BRICK',
			currencyPrice: '999999999',
			toUsdtPrice: '0',
			searchText: '',
			warnPng,
			reducePng,
			linkPng,
			addPng,
			tips: '请注意! 使用brick,usdt购买时需要先授权',
			paymentMethod: 'BRICK',
			paymentMethodOpts: [
				{
					value: 'BNB',
					label: 'BNB',
				},
				{
					value: 'USDT',
					label: 'USDT',
				},
				{
					value: 'BRICK',
					label: 'BRICK',
				},
			],
		};
	},
	async mounted() {
		this.bodyHeight =
			document.documentElement.clientHeight ||
			document.body.clientHeight;
		this.searchText = this.$route.query.text || '';
		console.log('this.$route.query.text', this.$route.query.text);
		console.log('this.$routet', this.$route);
		console.log('this.searchText', this.searchText);
		let flag = localStorage.getItem('STATUS')
			? localStorage.getItem('STATUS')
			: '';
		//钱包已连接 查询
		if (flag) {
			this.inIt();
		}
	},

	methods: {
		async inIt() {
			this.bodyHeight =
				document.documentElement.clientHeight ||
				document.body.clientHeight;
			this.searchText = this.$route.query.text || '';
			await getPrice(this.searchText);
			this.price =
				(brickPrice / 1e18).toFixed(0) * this.years;
			this.toUsdtPrice =
				(usdtPrice / 1e18).toFixed(0) *
				this.years *
				0.85;
		},
		async changeText(text) {
			console.log('changeText', text);
			this.searchText = text;
			if (this.paymentMethod == 'BNB') {
				this.approveBtnDisabled = true;
				this.registBtnDisabled = false;
				this.approveBtnLoading = false;
				this.registBtnLoading = false;
			} else {
				this.approveBtnDisabled = false;
				this.registBtnDisabled = false;
				this.approveBtnLoading = false;
				this.registBtnLoading = false;
			}
			await getPrice(this.searchText);
			this.price =
				(brickPrice / 1e18).toFixed(0) * this.years;
			this.toUsdtPrice =
				(usdtPrice / 1e18).toFixed(0) * this.years;
		},

		openLinkBtn(flag) {
			this.openLinkShowFlag = flag;
		},
		approveToken() {
			var _this = this;
			approve(
				this.paymentMethod,
				function () {
					_this.approveBtnLoading = true;
				},
				function () {
					_this.approveBtnLoading = false;
				},
				function () {
					_this.tips = '已经授权';
					_this.approveBtnDisabled = true;
					_this.approveBtnLoading = false;
				},
			);
		},

		requestRegistration() {
			let _router = this.$router;
			let _name = this.searchText.toLowerCase() + '.bsc';
			var _this = this;
			var _loadingTrue = function () {
				// loading 转圈
				_this.registBtnLoading = true;
			};
			var _loadingFalse = function () {
				// loading转圈停止 进入disabled
				_this.registBtnLoading = false;
				//_this.registBtnDisabled = true;
			};
			var _cb = function () {
				_router.push({
					path: '/registration/info',
					query: {
						text: this.searchText
							? this.searchText
							: undefined,
					},
				});
			};

			console.log('_name', _name);

			//TODO 再次确认是否已被注册
			// TODO 传入 price进行计算 1e18
			if (this.paymentMethod === 'BNB') {
				buyWithEth(
					_name,
					_cb,
					_loadingTrue,
					_loadingFalse,
					this.years,
					this.price * 1e18,
				);
			} else if (this.paymentMethod === 'USDT') {
				buyWithUsdt(
					_name,
					_cb,
					_loadingTrue,
					_loadingFalse,
					this.years,
					this.price * 1e18,
				);
			} else if (this.paymentMethod === 'BRICK') {
				buyWithBrick(
					_name,
					_cb,
					_loadingTrue,
					_loadingFalse,
					this.years,
					this.price * 1e18,
				);
			}
		},
		paymentMethodChange(val) {
			console.log('paymentMethodChange');
			this.currencyUnit = val;
			if (val == 'BNB') {
				this.approveBtnDisabled = true;
				this.registBtnDisabled = false;
			} else {
				this.approveBtnDisabled = false;
				this.registBtnDisabled = false;
			}

			this.updatePrice();
		},
		addCount() {
			this.years++;
			this.updatePrice();
		},
		reduceCount() {
			if (this.years > 0) {
				this.years--;
			}

			this.updatePrice();
		},

		updatePrice() {
			if (this.currencyUnit === 'BNB') {
				this.price =
					(bnbPrice / 1e18).toFixed(5) *
					this.years;
			} else if (this.currencyUnit === 'USDT') {
				this.price =
					(usdtPrice / 1e18).toFixed(0) *
					this.years;
			} else if (this.currencyUnit === 'BRICK') {
				this.price =
					(brickPrice / 1e18).toFixed(0) *
					this.years;
			}

			this.toUsdtPrice =
				(usdtPrice / 1e18).toFixed(0) * this.years;
			if (this.currencyUnit === 'BRICK') {
				this.toUsdtPrice = this.toUsdtPrice * 0.85;
			}
		},
	},
};
</script>

<style lang="less" scoped>
.search_main {
	height: 100%;
	width: 100%;
	font-size: 0.16rem;
	.search_ens {
		display: flex;
		flex-direction: column;
		justify-content: center;
		.ens_text {
			width: 0.44rem;
			height: 0.3rem;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			font-size: 0.22rem;
			color: #000000;
			margin: 0.4rem 0 0.2rem 0.6rem;
		}
		.domian_name_search {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.domian_name_content {
				width: 15.3rem;
				height: 5rem;
				background: #ffffff;
				border-radius: 0.32rem;
				position: relative;

				.right_content {
					.title_name {
						height: 0.96rem;
						line-height: 0.96rem;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						font-size: 0.2rem;
						color: #333333;
						border-bottom: 0.01rem solid
							#dedede;
						margin: 0;
						padding-left: 0.34rem;
						margin-bottom: 0.32rem;
					}
					.step_content {
						width: 15.3rem;
						height: 2.17rem;
						background: #ffffff;
						border-radius: 0.32rem;
						display: flex;
						flex-direction: column;
						padding-left: 0.34rem;
						padding-top: 0.4rem;
						box-sizing: border-box;
						margin-top: 0.16rem;
						margin-bottom: 0.34rem;

						.step_title {
							// width: 2.79rem;
							height: 0.33rem;
							font-family: PingFangSC-Regular;
							font-weight: 400;
							font-size: 0.24rem;
							color: #000000;
							margin: 0;
							margin-bottom: 0.08rem;
							img {
								width: 0.32rem;
								height: 0.32rem;
								vertical-align: middle;
								margin-top: -0.06rem;
							}
						}
						.step_title_desc {
							height: 0.2rem;
							font-family: PingFangSC-Regular;
							font-weight: 400;
							font-size: 0.14rem;
							margin: 0;
							color: #999999;
							margin-bottom: 0.6rem;
						}
						.step_process {
							display: flex;
							flex-direction: row;
							margin-bottom: 0.6rem;
							.step_text_title {
								// height: 1.5rem;
								// font-weight: 600;
								// font-size: 1rem;
								// color: #000000;
								// padding-bottom: 0.5rem;
								// width: 0.64rem;
								height: 0.22rem;
								font-family: PingFangSC-Semibold;
								font-weight: 600;
								font-size: 0.16rem;
								color: #000000;
								margin-bottom: 0.08rem;
							}
							.step_text_desc {
								// width: 100%;
								// // height: 80rem;
								// font-weight: 400;
								// font-size: 0.8rem;
								// color: #333333;
								// width: 4.87rem;
								width: 5.55rem;
								height: 0.4rem;
								font-family: PingFangSC-Regular;
								font-weight: 400;
								font-size: 0.14rem;
								color: #333333;
							}
							.left_circle {
								color: #d8d8d8;
								height: 0.56rem;
								width: 0.56rem;
								line-height: 0.56rem;
								margin-right: 0.12rem;
								box-sizing: border-box;
								p {
									margin: 0;
									text-align: center;
									font-family: PingFangSC-Regular;
									font-weight: 400;
									height: 0.56rem;
									line-height: 0.56rem;
									width: 0.56rem;
									border: 0.02rem
										solid
										#ccc;
									border-radius: 50%;
									font-size: 0.24rem;
								}
							}
							.step_left_process {
								// width: 43%;
								display: flex;
								flex-direction: row;
								.step_text {
								}
								margin-right: 1rem;
							}
							.step_center_process {
								// width: 43%;
								display: flex;
								flex-direction: row;
								.step_text {
								}
							}
						}
						.process_img {
							width: 13.32rem;
							// height: 4.72rem;
							background: #ffffff;
							border-radius: 0.32rem;
							// height: 0.24rem;
							/deep/.el-progress-bar__inner {
								opacity: 0.66;
								background-image: linear-gradient(
									-60deg,
									#6af0e9
										0%,
									#edafff
										100%
								);
							}
						}
					}
				}
			}
		}
	}
}
</style>