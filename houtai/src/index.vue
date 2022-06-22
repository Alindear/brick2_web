<template>
    <div class="app_main">
        <!-- <div class="back_top_img"></div> -->
				<registered
            v-if="openLinkShowFlag"
            :openLinkShowFlag="openLinkShowFlag"
        ></registered>
        <div class="header_top">
            <head-er
                type="index"
                @changeStatus="changeStatus"
            ></head-er>
        </div>

        <div class="back_top_img"></div>
        <div class="index_content">
            <div class="back_bottom_img"></div>
            <div class="index_left">
                <div class="left_top">
                    <!-- <span>BNS</span>
                    <el-button>去链接</el-button> -->
                    <img
                        :src="bnsClickPng"
                        alt=""
                        @click="onConnect"
                    >
                </div>
                <div class="left_center">
                    <div class="text_list">
                        <span class="list_icon"></span>
                        <span>链接每一个web3用户</span>
                    </div>
                    <div class="text_list">
                        <span class="list_icon list_icon2"></span>
                        <span>链接每一个主流平台场景</span>
                    </div>
                    <div class="text_list">
                        <span class="list_icon list_icon3"></span>
                        <span>帮助每一个用户链接他的身份和资产</span>
                    </div>
                    <div class="text_list">
                        <span class="list_icon list_icon4"></span>
                        <span>帮助bsc链接更大的增量客户</span>
                    </div>
                </div>
                <div class="left_bottom">
                    <el-button
                        class="pc_top_search"
                        type="primary"
                    >
                        <div class="search_module">
                            <el-select
                                class="select_lang"
                                v-model="select"
                                slot="suffix"
                                placeholder=""
                                @change="selectLanageChange"
                            >
                                <el-option
                                    v-for="item in lanageListOpts"
                                    :key="item.value"
                                    :label="item.value"
                                    :value="item.label"
                                >
                                    <el-radio
                                        v-model="selectRadio"
                                        :label="item.label"
                                    > </el-radio>
                                </el-option>

                            </el-select>
                            <div class="cut_border"></div>
                            <el-input
                                class="input_search"
                                placeholder="请输入域名或地址"
                                v-model="searchText"
                                @input="searchTextChange"
                            >
                            </el-input>
                        </div>
                    </el-button>
                    <img
                        @click="searchEns"
                        :src="searchBtnPng"
                        alt=""
                    >
                </div>
            </div>
            <div class="index_right">
                <div class="right_top">
                    <div class="right_top_input">
                        <img
                            class="img"
                            :src="top1Png"
                            alt=""
                        >
                        <!-- <el-input v-model="megaInput"></el-input> -->
                        <div class="border_input">
                            <span>{{megaInput}}</span>
                            <img
                                :src="inputIcon"
                                alt=""
                            >
                        </div>
                    </div>
                    <img
                        class="img2"
                        :src="top2Png"
                        alt=""
                    >
                </div>
                <div class="right_bottom">
                    <img
                        class="img3"
                        :src="top3Png"
                        alt=""
                    >
                    <div class="right_bottom_input">
                        <!-- <el-input v-model="bnsInput"></el-input> -->
                        <div class="border_bns_input">
                            <span>{{bnsInput}}</span>
                            <img
                                :src="inputIcon"
                                alt=""
                            >
                        </div>
                        <img
                            class="img4"
                            :src="top4Png"
                            alt=""
                        >
                    </div>

                </div>
            </div>
        </div>

        <div class="bns_compose_module">
            <p class="the_text">The</p>
            <div class="title_text">Bns生态构成</div>
            <img
                :src="bnsComposeImg"
                alt=""
            >
            <div class="back_right_center_img"></div>
        </div>

        <div class="back_right_center_img"></div>

        <div class="share_module">
            <div class="title_text">分享赚取收益</div>
            <p class="span_text">推荐好友注册域名有奖励！赶紧生成自己的专属链接吧！</p>
            <div class="share_img">
                <div
                    class="left_img"
                    v-if="linkShowFlag"
                >
                    <!-- v-if="!changeStatusShowFlag && linkShowFlag" -->
                    <p class="on_link">http:24989:cnwert.fogfh3wr4560-24989:cnwert.fogfh34560-567asd。i c</p>
                </div>
                <div
                    class="left_img"
                    @click="linkClick"
                    v-if="!linkShowFlag"
                >
                    <!-- v-if="!changeStatusShowFlag && !linkShowFlag" -->
                    <p
                        class="dis_link"
                        @click="linkClick"
                    >点击生成专属链接</p>
                </div>
                <div class="right_img">
                    <div
                        class="now_profit"
                        v-if="changeStatusShowFlag"
                    >
                        <p class="profit_text">当前收益</p>
                        <div class="profit_num">$457,780,213.001</div>
                    </div>
                    <p
                        class="dis_content"
                        v-if="!changeStatusShowFlag"
                    >
                        请链接钱包后查看当前收益
                    </p>
                    <el-button @click="getIncomeBtn">提取收益</el-button>
                </div>
            </div>
        </div>

        <div class="express_module">
            <p class="title_text">个性化是表达自我的第一步，而不是：</p>
            <el-button class="button_text">
                <p>
                    0xF7Bc92...79E7A4AD
                </p>
            </el-button>
        </div>

        <div class="back_address_price_module">
            <div class="back_left_center_img"></div>
            <div
                v-for="(item,index) in addressPriceList"
                :key="index"
                class="address_price_module"
            >
                <div class="address_price_left_desc">
                    <img
                        :src="item.icon"
                        alt=""
                    >
                    <div class="address_price_title">{{item.title}}</div>
                    <p class="address_price_desc">{{item.desc}}</p>
                </div>
                <div class="address_price_right_img">
                    <img
                        :src="item.img"
                        alt=""
                    >
                </div>

            </div>

        </div>

        <div class="partner_module">
            <p class="partner_title">合作伙伴</p>
            <!-- <div class="partner_img">
                <img
                    v-for="(item,index) in imgList"
                    :key="index"
                    @mouseenter="changeImageSrc(index, 'hover')"
                    @mouseleave="changeImageSrc(index, '')"
                    :src="item.img"
                    alt=""
                >
            </div> -->

            <div class="partner_img">
                <img
                    :src="partnerImg"
                    alt=""
                >
            </div>
        </div>

        <div class="contact_us_module">
            <p class="contanct_title">
                联系我们
            </p>
            <div class="contact_input">
                <span class="email">E-mail: admin@bnsdid.io </span>
                <span class="bottom_img">
                    <img
                        class="bottom_icon1"
                        :src="twitterPng"
                        alt=""
                    >
                    <img
                        class="bottom_icon2"
                        :src="discordPng"
                        alt=""
                    >
                    <img
                        class="bottom_icon3"
                        :src="lastIconPng"
                        alt=""
                    >
                    <!-- <div class="img_left"></div> -->
                </span>
                <span class="img_left"></span>
                <span class="img_center">SAY HI HERE</span>
                <img
                    class="img_right"
                    :src="enterIcon"
                    alt=""
                >

            </div>
        </div>

    </div>
</template>

<script>
import registered from './components/registered.vue';
import headEr from './components/header.vue';
import {
	onConnect,
	onDisconnect,
	getAccount,
	isExist,
	checkBrickbalance,
	checkAndLoadFromLast,
	checkEachLength,
	init,
} from 'houtai/web3_eth.js';

import searchBtnPng from 'img/首页/search.png';
import bnsClickPng from 'img/首页/bnsClick.png';
import top1Png from 'img/首页/rodion-kutsaev--tgTipG2t_g-unsplash@2x.png';
import top2Png from 'img/首页/位图@2x.png';
import top3Png from 'img/首页/tezos-NN8ioR6Y88A-unsplash@2x.png';
import top4Png from 'img/首页/tezos-N593T973hl0-unsplash@2x.png';
import bnsComposeImg from 'img/首页/编组 37@2x.png';
import addressIcon from 'img/首页/编组 18@2x.png';
import priceIcon from 'img/首页/编组 19@2x.png';
import img1 from 'img/首页/未标题-2.png';
import img2 from 'img/首页/编组 20.png';
import enterIcon from 'img/首页/编组 24@2x.png';
import inputIcon from 'img/首页/椭圆形@2x.png';
import partnerImg from 'img/首页/编组 39@2x.png';
import twitterPng from 'img/首页/推特_twitter44@2x.png';
import discordPng from 'img/首页/discord@2x.png';
import lastIconPng from 'img/首页/编组 56@2x.png';

import icon1 from 'img/logo/灰色2x/icon1.png';
import icon2 from 'img/logo/灰色2x/icon2.png';
import icon3 from 'img/logo/灰色2x/icon3.png';
import icon4 from 'img/logo/灰色2x/icon4.png';
import icon5 from 'img/logo/灰色2x/icon5.png';
import icon6 from 'img/logo/灰色2x/icon6.png';
import icon7 from 'img/logo/灰色2x/icon7.png';
import icon8 from 'img/logo/灰色2x/icon8.png';
import icon9 from 'img/logo/灰色2x/icon9.png';
import icon10 from 'img/logo/灰色2x/icon10.png';
import icon11 from 'img/logo/灰色2x/icon11.png';
import icon12 from 'img/logo/灰色2x/icon12.png';
import icon13 from 'img/logo/灰色2x/icon13.png';
import icon14 from 'img/logo/灰色2x/icon14.png';

import iconSelect1 from 'img/logo/彩色2x/iconSelect1.png';
import iconSelect2 from 'img/logo/彩色2x/iconSelect2.png';
import iconSelect3 from 'img/logo/彩色2x/iconSelect3.png';
import iconSelect4 from 'img/logo/彩色2x/iconSelect4.png';
import iconSelect5 from 'img/logo/彩色2x/iconSelect5.png';
import iconSelect6 from 'img/logo/彩色2x/iconSelect6.png';
import iconSelect7 from 'img/logo/彩色2x/iconSelect7.png';
import iconSelect8 from 'img/logo/彩色2x/iconSelect8.png';
import iconSelect9 from 'img/logo/彩色2x/iconSelect9.png';
import iconSelect10 from 'img/logo/彩色2x/iconSelect10.png';
import iconSelect11 from 'img/logo/彩色2x/iconSelect11.png';
import iconSelect12 from 'img/logo/彩色2x/iconSelect12.png';
import iconSelect13 from 'img/logo/彩色2x/iconSelect13.png';
import iconSelect14 from 'img/logo/彩色2x/iconSelect14.png';

export default {
	components: { headEr, registered },
	data() {
		return {
			openLinkShowFlag: false,
			searchEnsLoading: false,
			changeStatusShowFlag: false,
			linkShowFlag: false,
			searchBtnPng,
			bnsClickPng,
			bnsComposeImg,
			top1Png,
			top2Png,
			top3Png,
			top4Png,
			addressIcon,
			priceIcon,
			img1,
			img2,
			enterIcon,
			inputIcon,
			partnerImg,
			twitterPng,
			discordPng,
			lastIconPng,

			icon1,
			icon2,
			icon3,
			icon4,
			icon5,
			icon6,
			icon7,
			icon8,
			icon9,
			icon10,
			icon11,
			icon12,
			icon13,
			icon14,
			iconSelect1,
			iconSelect2,
			iconSelect3,
			iconSelect4,
			iconSelect5,
			iconSelect6,
			iconSelect7,
			iconSelect8,
			iconSelect9,
			iconSelect10,
			iconSelect11,
			iconSelect12,
			iconSelect13,
			iconSelect14,
			searchText: '',
			megaInput: 'Mega.bsc',
			bnsInput: 'BNS-apple.bsc',
			select: 'CN',
			selectRadio: '简体中文 (CN)',
			lanageListOpts: [
				{
					label: 'English (EN)',
					value: 'EN',
				},
				{
					label: '简体中文 (CN)',
					value: 'CN',
				},
			],
			addressPriceList: [
				{
					icon: addressIcon,
					title: '转账时请输入能一眼记住的地址',
					desc: '再也不用担心长长的、无序的地址了。直接从域名到域名进行交易，简单便捷。',
					img: img1,
				},
				{
					icon: priceIcon,
					title: '交易域名，好的域名会比某些NFT更有价值',
					desc: '收集、出售.bsc域名，从这些独一无二的域名中获利。',
					img: img2,
				},
			],
			imgList: [
				{ img: icon1 },
				{ img: icon2 },
				{ img: icon3 },
				{ img: icon4 },
				{ img: icon5 },
				{ img: icon6 },
				{ img: icon7 },
				{ img: icon8 },
				{ img: icon9 },
				{ img: icon10 },
				{ img: icon11 },
				{ img: icon12 },
				{ img: icon13 },
				{ img: icon14 },
			],
			imgSelectList: [
				{ img: iconSelect1 },
				{ img: iconSelect2 },
				{ img: iconSelect3 },
				{ img: iconSelect4 },
				{ img: iconSelect5 },
				{ img: iconSelect6 },
				{ img: iconSelect7 },
				{ img: iconSelect8 },
				{ img: iconSelect9 },
				{ img: iconSelect10 },
				{ img: iconSelect11 },
				{ img: iconSelect12 },
				{ img: iconSelect13 },
				{ img: iconSelect14 },
			],
		};
	},

	watch: {
		searchText(newValue, oldValue) {
			console.log(newValue);
			this.searchText = newValue.replace('-', '');
			this.searchText = this.searchText.replace(
				/[`:_.~!｜［｛｝〉×〉×［］〖〗＊〔〕‖〈〉«»«»×÷＞＜≥≤¡¿£€﹉–´´＂＇¢฿♀♂‹›」』『「@#$%^&*() \+ =<>?"{}|, \/ ;' \\ [ \] ·~～！@#￥¥%……&*（）—— \+ ={}|《》<>？：“”【】、；‘’，。、]/g,
				'',
			);
			this.searchText = this.searchText.toLowerCase();
		},
	},

	methods: {
		searchTextChange() {
			console.log('域名发生变化');
			this.isExist = null;
			this.searchEnsLoading = false;
		},
		selectLanageChange(val) {
			if (val === 'English (EN)') {
				this.$store.commit('showENLanage');
			} else if (val === '简体中文 (CN)') {
				this.$store.commit('showCNLanage');
			}
			// console.log('this.i18n', this.i18n);
		},
		// 打开已存在提示弹窗
		openLinkBtn(flag) {
			this.openLinkShowFlag = flag;
		},
			//查询
		async searchEns() {
			if (!this.searchText) {
				alert('请输入查询的域名');
				// alert(
				// 	this.$store.state.i18n[
				// 		this.$store.state.language
				// 	].enter_names,
				// );
				return;
			}

			if (this.searchText.length < 3) {
				alert('请至少输入三个字符');
				// alert(
				// 	this.$store.state.i18n[
				// 		this.$store.state.language
				// 	].text_1,
				// );
				return;
			}

			//查询当前页面的域名时 直接清空 不进行查询（用于注册页 & 详情页）
			if (this.searchText === this.$route.query.text) {
				this.searchText = '';
				return;
			}

			// // 存入查询历史中
			// this.onSearch(this.searchText);

			this.searchEnsLoading = true;
			let text = this.searchText.toLowerCase() + '.bsc';
			this.isExist = await isExist(text);
			if (!(await checkEachLength(this.searchText))) {
				return;
			}
			if (this.isExist) {
				this.openLinkBtn(true);
			} else if (!this.isExist && this.isExist !== null) {
				// this.searchText = this.searchText + '.bsc';
				console.log('this.$router', this.$router);
				//注册页 刷新后处理默认值 （目的：防止刷新界面 需要重新链接钱包）
				// if (
				// 	this.$router.history.current.path ===
				// 	'/brick/searchens'
				// ) {
				// 	this.$parent.changeText(
				// 		this.searchText,
				// 	);
				// }
				this.$router.push({
					path: '/brick/searchens',
					query: {
						text: this.searchText,
					},
				});
			}
			if (this.isExist || !this.isExist) {
				this.searchEnsLoading = false;
			}
		},
		// //查询
		// async searchEns() {
		// 	//  document.activeElement.blur();  // 关闭软键盘
		// 	if (!this.searchText) {
		// 		alert('请输入查询的域名');
		// 		// alert(
		// 		// 	this.$store.state.i18n[
		// 		// 		this.$store.state.language
		// 		// 	].enter_names,
		// 		// );
		// 		return;
		// 	}

		// 	if (this.searchText.length < 3) {
		// 		alert('请至少输入三个字符');
		// 		// alert(
		// 		// 	this.$store.state.i18n[
		// 		// 		this.$store.state.language
		// 		// 	].text_1,
		// 		// );
		// 		return;
		// 	}

		// 	//查询当前页面的域名时 直接清空 不进行查询（用于注册页 & 详情页）
		// 	if (this.searchText === this.$route.query.text) {
		// 		this.searchText = '';
		// 		return;
		// 	}

		// 	this.searchEnsLoading = true;
		// 	let text = this.searchText.toLowerCase() + '.bsc';
		// 	this.isExist = await isExist(text);
		// 	if (!(await checkEachLength(this.searchText))) {
		// 		return;
		// 	}
		// 	console.log('this.isExist----', this.isExist);
		// 	if (this.isExist) {
		// 		this.openLinkBtn(true);
		// 	} else if (!this.isExist && this.isExist !== null) {
		// 		// this.searchText = this.searchText + '.bsc';
		// 		console.log('this.$router', this.$router);
		// 		//注册页 刷新后处理默认值 （目的：防止刷新界面 需要重新链接钱包）
		// 		if (
		// 			this.$router.history.current.path ===
		// 			'/registration/request'
		// 		) {
		// 			this.$parent.changeText(
		// 				this.searchText,
		// 			);
		// 		}
		// 		this.$router.push({
		// 			path: '/registration/request',
		// 			query: {
		// 				text: this.searchText,
		// 			},
		// 		});
		// 	}
		// 	if (this.isExist || !this.isExist) {
		// 		this.searchEnsLoading = false;
		// 	}
		// },
		onConnect() {
			console.log('去链接');
		},
		changeStatus(status) {
			this.changeStatusShowFlag = status;
			console.log(
				'this.changeStatusShowFlag',
				this.changeStatusShowFlag,
			);
		},
		//点击生成专属链接
		linkClick() {
			// if (this.changeStatusShowFlag) {
			this.linkShowFlag = true;
			// } else {
			// 	console.log('先链接钱包');
			// }
		},
		//提取收益
		getIncomeBtn() {
			console.log('提取收益');
			alert('提取收益');
		},
		changeImageSrc(key, way) {
			console.log('key, way', key, way);
			let tempStr = way === 'hover' ? 'Select' : '';
			for (let i = 0; i < this.imgList.length; i++) {
				if (i === key) {
					// this.imgList[key].img =
					// 	this.imgSelectList[i].img;
					this.imgList[i].img =
						this[`icon${tempStr}${i + 1}`];
				}
			}
		},
	},
};
</script>

<style lang="less" scoped>
.app_main {
	height: 100%;
	width: 100%;
	font-size: 0.16rem;
	background: #ffffff;
	position: relative;
	.header_top {
		position: relative;
		// position: absolute;
		z-index: 1;
	}
	.back_top_img {
		width: 4.34rem;
		height: 7.84rem;
		opacity: 0.12;
		background: #e3a0ff;
		filter: blur(0.44rem);
		position: absolute;
		top: -3.92rem;
		right: 0;
		float: right;
	}

	.index_content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 9.8rem;
		box-sizing: border-box;
		position: relative;
		width: calc(100% - 1rem);
		// background: pink;
		.index_left {
			margin-top: 1.62rem;
			margin-left: 1.61rem;
			box-sizing: border-box;
			.left_top {
				margin-bottom: 0.32rem;
				img {
					height: 1.48rem;
				}
			}
			.left_center {
				display: flex;
				flex-direction: column;
				.text_list {
					display: flex;
					flex-direction: row;
					align-items: center;
					margin-bottom: 0.16rem;
					.list_icon {
						width: 0.08rem;
						height: 0.08rem;
						background: #e4b3fd;
						border-radius: 50%;
						margin-right: 0.16rem;
					}
					.list_icon2 {
						background: #c3c3f8;
					}
					.list_icon3 {
						background: #a8d1f3;
					}
					.list_icon4 {
						background: #86e2ee;
					}
					span {
						// width: 8.64rem;
						height: 0.36rem;
						font-family: Alibaba-PuHuiTi-R;
						font-weight: R;
						font-size: 0.24rem;
						color: #666666;
						line-height: 0.36rem;
					}
				}
			}
			.left_bottom {
				margin-top: 0.22rem;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				/deep/.el-input__inner {
					width: 6.64rem;
					height: 1.28rem;
					opacity: 0.8;
					background: #f1f1f1;
					border-radius: 0.32rem;
				}
				/deep/.el-input__inner:focus {
					border-color: #f1f1f1 !important;
					outline: 0;
				}
				img {
					width: 1.5733rem;
					height: 1.28rem;
					margin-left: 0.16rem;
				}
				.pc_top_search {
					display: flex;
					flex-direction: row;
					padding: 0;
					border: none;
					width: 6.64rem;
					height: 1.28rem;
					line-height: 1.28rem;
					opacity: 0.8;
					background: #f1f1f1;
					border-radius: 0.32rem;
					.search_module {
						display: flex;
						flex-direction: row;
						align-items: center;
						width: 6.64rem;
						.select_lang {
							margin-right: 0.21rem;
							/deep/.el-input__inner {
								height: 1.28rem;
								line-height: 1.28rem;
								border: none;
								border-radius: 0.32rem;
								font-family: PingFangSC-Medium;
								font-weight: 500;
								font-size: 0.2rem;
								color: #999999;
								margin: 0;
								margin-left: 0.5rem;
								padding: 0;
								width: 0.7rem;
							}
						}
						.cut_border {
							width: 0.01rem;
							height: 0.38rem;
							border-left: 0.02rem
								solid #cdcdcd;
							margin-right: 0.39rem;
						}
						.input_search {
							width: 5rem;
							/deep/.el-input__inner {
								width: 4.8rem;
								height: 1.28rem;
								line-height: 1.28rem;
								border: none;
								border-radius: 0.32rem;
								font-family: PingFangSC-Medium;
								font-weight: 500;
								font-size: 0.2rem;
								color: #999999;
								margin: 0;
								padding: 0;
							}
						}
						.el-button {
							width: 1.73rem;
							background-image: linear-gradient(
								-60deg,
								#6af0e9 0%,
								#edafff 100%
							);
							border-radius: 0.32rem;
							box-sizing: border-box;
							height: 0.98rem;
							margin-top: -0.02rem;
							font-family: PingFangSC-Semibold;
							font-weight: 600;
							font-size: 0.2rem;
							color: #ffffff;
						}
						img {
							width: 0.29rem;
							height: 0.32rem;
							vertical-align: middle;
							margin-right: 0.16rem;
						}
					}
				}
			}
		}
		.index_right {
			width: 6.28rem;
			height: 8.365rem;
			// background: red;
			margin: 0.52rem 1.6rem 0.915rem 1.3467rem;
			.right_top {
				display: flex;
				flex-direction: row;
				.right_top_input {
					display: flex;
					flex-direction: column;
					margin-right: 0.39rem;
					.img {
						margin-bottom: 0.37rem;
					}
					.border_input {
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						width: 3.75rem;
						height: 0.74rem;
						line-height: 0.74rem;
						border: 0.01px solid transparent;
						border-radius: 0.32rem;
						background-clip: padding-box,
							border-box;
						background-origin: padding-box,
							border-box;
						background-image: linear-gradient(
								to right,
								#ffffff,
								#ffffff
							),
							linear-gradient(
								90deg,
								#edafff,
								#6af0e9
							);
						img {
							height: 0.51rem;
							width: 0.51rem;
							vertical-align: middle;
							margin: auto 0;
							margin-right: 0.1rem;
						}
						span {
							margin-left: 0.28rem;
						}
					}
				}
				/deep/.el-input__inner {
					width: 3.75rem;
					height: 0.74rem;
					border-radius: 0.2764rem;
					// border: 0.01rem;
					// border-style: solid;
					border-image: linear-gradient(
							to right,
							#e5b3fd,
							#7de7ec
						)
						1 10;
					// background-image: linear-gradient(
					// 		right,
					// 		#e5b3fd,
					// 		#7de7ec
					// 	)
					// 	1 10;
				}
			}
			.right_bottom {
				display: flex;
				flex-direction: row;
				.right_bottom_input {
					display: flex;
					flex-direction: column;
					// /deep/.el-input__inner {
					// 	width: 3.52rem;
					// 	height: 0.74rem;
					// 	background-image: linear-gradient(
					// 		-60deg,
					// 		#6af0e9 0%,
					// 		#edafff 100%
					// 	);
					// 	border-radius: 0.2764rem;
					// 	font-family: Alibaba-PuHuiTi-R;
					// 	font-weight: R;
					// 	font-size: 0.2764rem;
					// 	color: #ffffff;
					// 	border: none;
					// }
					.border_bns_input {
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						width: 3.52rem;
						height: 0.74rem;
						line-height: 0.74rem;
						background-image: linear-gradient(
							-60deg,
							#6af0e9 0%,
							#edafff 100%
						);
						border-radius: 0.2764rem;
						font-family: Alibaba-PuHuiTi-R;
						font-weight: R;
						font-size: 0.2764rem;
						color: #ffffff;
						border: none;
						img {
							height: 0.51rem;
							width: 0.51rem;
							vertical-align: middle;
							margin: auto 0;
							margin-right: 0.1rem;
						}
						span {
							margin-left: 0.28rem;
						}
					}
				}
			}
			.img {
				width: 3.75rem;
				height: 3.75rem;
			}
			.img2 {
				width: 2.14rem;
				height: 3.29rem;
				margin-top: 1.68rem;
				margin-bottom: 0.27rem;
			}
			.img3 {
				width: 2.48rem;
				height: 3.05rem;
				margin-right: 0.275rem;
			}
			.img4 {
				width: 3.52rem;
				height: 2.07rem;
				margin-top: 0.315rem;
			}
		}
		.back_bottom_img {
			width: 6.28rem;
			height: 4.2rem;
			opacity: 0.11;
			background: #78ffef;
			filter: blur(0.44rem);
			position: absolute;
			float: left;
			left: -1.74rem;
			bottom: 0;
		}
	}
	.bns_compose_module {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		.the_text {
			width: 0.32rem;
			height: 0.26rem;
			font-family: Futura-Medium;
			font-weight: 500;
			font-size: 0.2rem;
			color: #999999;
			text-align: center;
		}
		.title_text {
			// width: 6.83rem;
			height: 1.56rem;
			font-family: YouSheBiaoTiYuan;
			font-size: 1.2rem;
			color: #000000;
			text-align: center;
			margin-bottom: 0.1rem;
		}
		img {
			width: 10rem;
			// height: 9.9rem;
		}
		.back_right_center_img {
			width: 6.69rem;
			height: 6.83rem;
			opacity: 0.07;
			background: #78b5ff;
			// background: #000000;
			filter: blur(0.5rem);
			position: absolute;
			top: 7.5rem;
			right: -2.17rem;
			float: right;
		}
	}

	.share_module {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 2rem;
		.title_text {
			height: 1.04rem;
			font-family: YouSheBiaoTiYuan;
			font-size: 0.8rem;
			color: #000000;
			margin-bottom: 0.32rem;
		}
		.span_text {
			height: 0.3rem;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			font-size: 0.22rem;
			color: #999999;
			margin: 0;
			margin-bottom: 0.6rem;
		}
		.share_img {
			display: flex;
			flex-direction: row;

			.left_img {
				width: 8rem;
				height: 6.6rem;
				// border: 0.33rem solid;
				border: 0.01rem solid;
				border-image: linear-gradient(
						to right,
						#e5b3fd,
						#7de7ec
					)
					1 10;
				box-sizing: border-box;
				.on_link {
					font-family: Alibaba-PuHuiTi-B;
					font-weight: B;
					font-size: 0.46rem;
					background-image: linear-gradient(
						to right,
						#e5b3fd,
						#7de7ec
					);
					-webkit-background-clip: text;
					color: transparent;
					word-break: break-all;
					// margin: 3.61rem 0.57rem 0.44rem 0.55rem;
					margin: 3.94rem 0.9rem 0.77rem 0.88rem;
				}
				.dis_link {
					font-family: Alibaba-PuHuiTi-B;
					font-weight: B;
					font-size: 0.46rem;
					background-image: linear-gradient(
						to right,
						#e5b3fd,
						#7de7ec
					);
					-webkit-background-clip: text;
					color: transparent;
					// padding: 4.39rem 0 1.59rem 0.55rem;
					margin: 4.72rem 0 1.25rem 0.88rem;
					// box-sizing: border-box;
				}
			}
			.left_img:hover {
				border: 0.34rem solid;
				border-image: linear-gradient(
						to right,
						#e5b3fd,
						#7de7ec
					)
					1 10;
				box-sizing: border-box;
				.on_link {
					// margin: 3.94rem 0.9rem 0.77rem 0.88rem;
					margin: 3.61rem 0.57rem 0.44rem 0.55rem;
				}
				.dis_link {
					margin: 4.39rem 0 1.59rem 0.55rem;
					box-sizing: border-box;
					// padding: 4.72rem 0 1.25rem 0.88rem;
					// box-sizing: border-box;
				}
			}
			.right_img {
				width: 8rem;
				height: 6.6rem;
				background-image: url('houtai/img/首页/收益.png');
				background-size: 100% 100%;
				border: 0.01rem solid;
				border-image: linear-gradient(
						to bottom,
						#e5b3fd,
						#7de7ec
					)
					1 10;
				box-sizing: border-box;
				.now_profit {
					margin-left: 0.69rem;
					margin-bottom: 1.95rem;
					.profit_text {
						// width: 0.95rem;
						height: 0.33rem;
						font-family: Alibaba-PuHuiTi-R;
						font-weight: R;
						font-size: 0.24rem;
						color: #000000;
						margin: 0.99rem 0 0.32rem;
					}
					.profit_num {
						width: 5.69rem;
						height: 0.77rem;
						font-family: Womby-Regular;
						font-weight: 400;
						font-size: 0.64rem;
						color: #000000;
						letter-spacing: 0.04rem;
					}
				}
				.dis_content {
					// width: 2.84rem;
					height: 0.33rem;
					font-family: Alibaba-PuHuiTi-M;
					font-weight: M;
					font-size: 0.24rem;
					color: #000000;
					margin: 3.14rem 0 0.93rem 0.81rem;
				}
				.el-button {
					margin-left: 0.69rem;
					margin-bottom: 0.92rem;
					width: 3.32rem;
					height: 1.28rem;
					background-image: linear-gradient(
						-60deg,
						#6af0e9 0%,
						#edafff 100%
					);
					border-radius: 0.64rem;
					font-family: Alibaba-PuHuiTi-B;
					font-weight: B;
					font-size: 0.46rem;
					color: #ffffff;
				}
			}
		}
	}

	.express_module {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 2rem;
		// position: relative;
		.title_text {
			// width: 10.04rem;
			height: 0.82rem;
			font-family: Alibaba-PuHuiTi-M;
			font-weight: M;
			font-size: 0.6rem;
			// color: #000000;
			background-image: linear-gradient(
				to right,
				#e0b6fd,
				#7ee6ed
			);
			-webkit-background-clip: text;
			color: transparent;
			margin-bottom: 0.6rem;
		}
		.button_text {
			width: 13.86rem;
			height: 3.02rem;
			line-height: 3.02rem;
			background-image: linear-gradient(
				-60deg,
				#6af0e9 0%,
				#edafff 100%
			);
			border-radius: 0.32rem;
			p {
				font-family: Alibaba-PuHuiTi-M;
				font-weight: M;
				font-size: 0.75rem;
				color: #ffffff;
				height: 2.22rem;
				line-height: 2.22rem;
				border: 0.05rem dashed #ffffff;
				border-radius: 0.32rem;
				margin: 0;
			}
		}
	}

	.back_address_price_module {
		position: relative;
		margin-bottom: 0.16rem;
		.back_left_center_img {
			width: 7.15rem;
			height: 7.84rem;
			opacity: 0.07;
			background: #e3a0ff;
			// background: #000000;
			filter: blur(0.44rem);
			position: absolute;
			top: -5.99rem;
			left: -2.87rem;
		}
		.address_price_module {
			position: relative;
			width: 16rem;
			height: 4.91rem;
			background: #ffffff;
			// background: pink;
			margin: 0 auto;
			margin-bottom: 0.4rem;
			border-radius: 0.32rem;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.address_price_left_desc {
				margin-left: 0.73rem;
				img {
					width: 0.5rem;
					height: 0.5rem;
					background: #9c84df;
					margin: 0.71rem 0 0.45rem 0;
				}
				.address_price_title {
					// width: 4.14rem;
					height: 0.42rem;
					font-family: Alibaba-PuHuiTi-B;
					font-weight: B;
					font-size: 0.3rem;
					color: #000000;
					margin-bottom: 0.24rem;
				}
				.address_price_desc {
					// width: 5.52rem;
					height: 0.22rem;
					font-family: Alibaba-PuHuiTi-R;
					font-weight: R;
					font-size: 0.16rem;
					color: #999999;
				}
			}
			.address_price_right_img {
				img {
					width: 4.1902rem;
					height: 4.1902rem;
					transform: rotate(-7deg);
					margin: 0.4992rem 1.059rem 0.2206rem 0;
				}
			}
		}
	}

	.partner_module {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		// margin-bottom: 1.4043rem;
		margin-bottom: 1.2rem;
		.partner_title {
			height: 1.04rem;
			font-family: YouSheBiaoTiYuan;
			font-size: 0.8rem;
			color: #000000;
			letter-spacing: 0.055rem;
			margin: 0;
			margin-bottom: 1.22rem;
		}
		.partner_img {
			img {
				width: 3.09rem;
				height: 1.46rem;
			}
			// display: flex;
			// flex-direction: row;
			// justify-content: space-around;
			// flex-wrap: wrap;
			// width: 15.61rem;
			// img {
			// 	width: 1.29rem;
			// 	height: 1.27rem;
			// 	margin-right: 0.96rem;
			// }
			// img:nth-child(7n) {
			// 	margin-right: 0;
			// }
		}
	}

	.contact_us_module {
		width: 19.2rem;
		height: 4.31rem;
		background-image: linear-gradient(
			-60deg,
			#6af0e9 0%,
			#edafff 100%
		);
		display: flex;
		flex-direction: column;
		align-items: center;
		.contanct_title {
			// width: 2.89rem;
			height: 1.04rem;
			font-family: YouSheBiaoTiYuan;
			font-size: 0.8rem;
			color: #ffffff;
			letter-spacing: -0.0156rem;
			margin: 0;
			margin: 0.6rem 0;
		}
		.contact_input {
			width: 16rem;
			height: 1.47rem;
			line-height: 1.47rem;
			background: #ffffff;
			border-radius: 0.12rem;
			.email {
				width: 0.332rem;
				height: 0.4rem;
				font-family: PingFangSC-Semibold;
				font-weight: 600;
				font-size: 0.28rem;
				color: #000000;
				letter-spacing: -0.0054rem;
				margin-left: 0.84rem;
				margin-right: 1.58rem;
			}
			.bottom_img {
				img {
					height: 0.33rem;
					width: 0.33rem;
					margin-right: 0.24rem;
					vertical-align: middle;
					margin-top: -0.1rem;
				}
				.bottom_icon3 {
					margin-right: 0.6rem;
				}
			}
			.img_left {
				// border-left: 0.02rem solid #6af0e9;
				margin: auto 0;
				margin-right: 1.77rem;
				height: 0.6rem;
				display: inline-block;
			}

			.img_center {
				width: 1.54rem;
				height: 0.34rem;
				font-family: Womby-Regular;
				font-weight: 400;
				font-size: 0.28rem;
				color: #000000;
				letter-spacing: -0.0054rem;
				background-image: linear-gradient(
					to right,
					#edafff,
					#6af0e9
				);
				-webkit-background-clip: text;
				color: transparent;
				margin-right: 3.6813rem;
			}
			.img_right {
				// margin-right: 0.932rem;
				width: 0.49rem;
				height: 0.49rem;
				vertical-align: middle;
				margin-top: -0.12rem;
				// opacity: 0;
				// background: #000000;
			}
		}
	}
}
</style>