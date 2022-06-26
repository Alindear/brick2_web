<template>
    <div class="header_web">
        <registered
            v-if="openLinkShowFlag"
            :openLinkShowFlag="openLinkShowFlag"
        ></registered>
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
                    <span @click="goRouter('/brick/myens')">
                        <!-- 我的域名 -->
                        {{i18n.my_domain}}
                    </span>
                    <span @click="goRouter('/brick/documentdesc')">
                        <!-- 文档说明 -->
                        {{i18n.document_desc}}
                    </span>
                    <span @click="goRouter('/brick/contactus')">
                        <!-- 联系社区 -->
                        {{i18n.contact_community}}
                    </span>
                    <!-- <span @click="goRouter('/brick/searchEns')">11111</span>
                    <span @click="goRouter('/brick/step')">222222</span> -->

                </div>

                <!-- 未连接 -->
                <div
                    v-if="!selectedAccount"
                    class="on_connect"
                >
                    <span class="connect_text">
                        <!-- 链接钱包（只读状态） -->
                        {{i18n.connectwallet}}
                    </span>
                    <el-button @click="connectWallet">
                        <!-- 连接 -->
                        {{i18n.connect}}
                    </el-button>
                </div>

                <!-- 已连接 可断开 -->
                <div
                    v-if="selectedAccount"
                    class="dis_connect"
                >
                    <span class="connect_text">
                        {{(selectedAccount && selectedAccount.length > 8) ? (selectedAccount.slice(0,4) + '...' + selectedAccount.slice(-4)) : selectedAccount}}
                    </span>
                    <span class="connect_main">
                        <span class="coin_main"></span>
                        <span>
                            <!-- Main 网络 -->
                            {{i18n.main_net}}

                        </span>
                    </span>
                    <el-button @click="disconnectWallet">
                        <!-- 断开连接 -->
                        {{i18n.connected}}
                    </el-button>
                </div>

                <!-- 顶部搜索按钮 （首页不展示）-->
                <div
                    class="secrch_title"
                    v-if="$route.fullPath !== '/index'"
                >
                    <el-button
                        class="search_border"
                        @click="showSearchBtn(true)"
                    >
                        <img
                            :src="searchPng"
                            alt=""
                        >
                        <span>
                            <!-- 搜索 -->
                            {{i18n.search}}
                        </span>
                    </el-button>
                </div>
            </div>

            <div class="title_right_mb">
                <img
                    :src="moremenu"
                    alt=""
                    v-if="menuFlag"
                    @click="openMenu"
                >
                <img
                    :src="closemenu"
                    alt=""
                    v-if="!menuFlag"
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

        <!-- mb 搜索面板 -->
        <!-- <transition
            enter-active-class="animate_bounceIn"
            leave-active-class="animate_bounceOut"
        > -->
        <div
            class="menu_list"
            v-if="!menuFlag"
        >
            <div class="menu_connect_search">
                <div class="connect_status">
                    <!-- 未连接 -->
                    <div
                        v-if="!selectedAccount"
                        class="on_connect"
                    >
                        <span class="connect_text">
                            <!-- 链接钱包（只读状态） -->
                            {{i18n.connectwallet}}
                        </span>
                        <el-button @click="connectWallet">
                            <!-- 连接 -->
                            {{i18n.connect}}
                        </el-button>
                    </div>

                    <!-- 已连接 可断开 -->
                    <div
                        v-if="selectedAccount"
                        class="dis_connect"
                    >
                        <span class="connect_text">
                            {{(selectedAccount && selectedAccount.length > 8) ? (selectedAccount.slice(0,4) + '...' + selectedAccount.slice(-4)) : selectedAccount}}
                        </span>
                        <span
                            class="connect_main"
                            :style="{'margin-right': $store.state.language === 'CN' ? '0.48rem' : '0.32rem'}"
                        >
                            <span class="coin_main"></span>
                            <span>
                                <!-- Main 网络 -->
                                {{i18n.main_net}}

                            </span>
                        </span>
                        <el-button @click="disconnectWallet">
                            <!-- 断开连接 -->
                            {{i18n.connected}}
                        </el-button>
                    </div>
                </div>
                <el-form action="javascript:return true">
                    <el-input
                        class="input_search"
                        :placeholder="i18n.placeholder"
                        v-model="searchText"
                        type="search"
                        :autocomplete="off"
                        @input="searchTextChange"
                        @keyup.13.native="searchEns"
                    >
                        <!-- <i
                    slot="suffix"
                    class="el-input__icon el-icon-date"
                ></i> -->
                        <img
                            slot="suffix"
                            :src="searchblack"
                            alt=""
                        >
                    </el-input>
                </el-form>
            </div>

            <p @click="goRouter('/index')">
                <!-- 首页 -->
                {{i18n.index_menu}}
            </p>
            <div class="list_border"></div>
            <p @click="goRouter('/brick/myens')">
                <!-- 我的域名 -->
                {{i18n.my_domain}}
            </p>
            <div class="list_border"></div>
            <p @click="goRouter('/brick/documentdesc')">
                <!-- 文档说明 -->
                {{i18n.document_desc}}
            </p>
            <div class="list_border"></div>
            <p @click="goRouter('/brick/contactus')">
                <!-- 联系社区 -->
                {{i18n.contact_community}}
            </p>

            <div class="list_border"></div>
            <p>
                <span
                    :class="$store.state.language === 'CN' ? 'yes_lang' : 'no_lang'"
                    @click="selectLanageChange('简体中文 (CN)')"
                >中文</span>
                <span> / </span>
                <span
                    :class="$store.state.language === 'EN' ? 'yes_lang' : 'no_lang'"
                    @click="selectLanageChange('English (EN)')"
                > EN </span>
            </p>
        </div>
        <!-- </transition> -->

        <!-- pc搜索面板 -->
        <div v-if="showSearchContainer">
            <div class="search_container">
                <p class="search_text">
                    <!-- 搜索 -->
                    {{i18n.search_title}}
                </p>
                <!-- <el-button
                    class="pc_top_search"
                    type="primary"
                > -->
                <div
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
                            :placeholder="i18n.placeholder"
                            v-model="searchText"
                            @input="searchTextChange"
                        >
                            <div style="width: 1px;height: 38.68px;border: 1px solid red;"></div>
                        </el-input>
                        <el-button
                            @click="searchEns"
                            :loading="searchEnsLoading"
                        >
                            <img
                                :src="search2Png"
                                alt=""
                            >
                            <span>
                                <!-- 查询 -->
                                {{i18n.search}}
                            </span>
                        </el-button>
                    </div>
                    <!-- </el-button> -->
                </div>
                <div class="his_list">
                    <!-- v-if="histroys && histroys.length > 0" -->
                    <!-- @click="goDetail(his)" -->
                    <span
                        class="his_text"
                        v-for="(his, i) in histroys"
                        :key="i"
                    >{{ his }}</span>
                </div>
            </div>
            <div
                class="mask_dialog"
                @click="showSearchBtn(false)"
            ></div>
        </div>

    </div>
</template>

<script>
import registered from './registered.vue';
import anglesign from 'img/角标.png';
import moremenu from 'img/更多.png';
import closemenu from 'img/关闭菜单.png';
import searchPng from 'img/icon/编组.png';
import search2Png from 'img/icon/编组 2.png';
import searchblack from 'img/searchblack.png';
// import logoPng from 'img/首页/BNS_logo@2x.png';
import logoPng from 'img/logoleft.png';
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

export default {
	components: { registered },
	props: ['type'],
	data() {
		return {
			searchText: '',
			language: false,
			isconnect: false,
			anglesign,
			moremenu,
			closemenu,
			logoPng,
			searchPng,
			search2Png,
			searchblack,
			menuFlag: true,
			showSearchContainer: false,

			histroys: [],

			selectedAccount: '',
			isExist: null,
			openLinkShowFlag: false,
			searchEnsLoading: false,
			searchText: '',
			select: this.$store.state.language,
			selectRadio: this.$store.state.languageSelect,
			// select: 'CN',
			// selectRadio: '简体中文 (CN)',
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
		};
	},
	watch: {
		searchText(newValue, oldValue) {
			console.log(newValue);
			this.searchText = newValue.replace('-', '');
			// this.searchText = this.searchText.replace(
			// 	/[`:_.~!｜」』『「@#$%^&*() \+ =<>?"{}|, \/ ;' \\ [ \] ·~～！@#￥¥%……&*（）—— \+ ={}|《》<>？：“”【】、；‘’，。、]/g,
			// 	'',
			// );
			this.searchText = this.searchText.replace(
				/[`:_.~!｜［｛｝〉×〉×［］〖〗＊〔〕‖〈〉«»«»×÷＞＜≥≤¡¿£€﹉–´´＂＇¢฿♀♂‹›」』『「@#$%^&*() \+ =<>?"{}|, \/ ;' \\ [ \] ·~～！@#￥¥%……&*（）—— \+ ={}|《》<>？：“”【】、；‘’，。、]/g,
				'',
			);
			this.searchText = this.searchText.toLowerCase();
		},
	},

	computed: {
		i18n: function () {
			return this.$store.state.i18n[
				this.$store.state.language
			];
		},
	},
	mounted() {
		window.addEventListener('load', async () => {
			init();
			if (localStorage.getItem('STATUS')) {
				await this.connectWallet();
			}
		});
		window.addEventListener('beforeunload', (e) => {
			localStorage.setItem('STATUS', '');
		});
		this.$nextTick(async () => {
			this.selectedAccount = localStorage.getItem('STATUS')
				? localStorage.getItem('STATUS')
				: this.selectedAccount;
		});
		console.log('this.$route', this.$route.fullPath);
		// this.onConnect();
		this.showHotSearch();
	},

	methods: {
		onSearch(value) {
			this.addHotSearch(value); //调用添加搜索的方法
			// this.goDetail(value); //跳转页面
		},
		showHotSearch() {
			var items = localStorage.getItem('api-hot-search'); // 从本地获取
			if (items) {
				items = JSON.parse(items);
				this.histroys = items;
			}
		},
		addHotSearch(keyword) {
			keyword = String(keyword);
			var items = this.histroys; //historys是在data中定义的一个数组
			if (items.indexOf(keyword) == -1) {
				//如果historys中没有，现在搜索的值
				if (items.length >= 10) {
					// 控制historys这个数组的长度不超过10
					items.pop();
				}
				items.unshift(keyword); //往数组的前面加上该值
			}
			localStorage.setItem(
				'api-hot-search',
				JSON.stringify(items),
			); //存到本地
		},
		// 点击查询 打开查询面板
		showSearchBtn(flag) {
			this.showSearchContainer = flag;
		},

		// //打开菜单
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
		goMain() {
			this.$router.push({
				path: '/main',
			});
		},
		myEnsBtn() {
			this.$router.push({
				path: '/my/enslist',
			});
		},
		async connectWallet() {
			console.log('链接');
			await onConnect(this);
			let account = getAccount();
			this.selectedAccount = account || '';
			localStorage.setItem('STATUS', this.selectedAccount);
			// if (
			// 	this.$router.history.current.path ===
			// 	'/my/enslist'
			// ) {
			// 	console.log('/my/enslist');
			// 	this.$parent.searchEnsList();
			// }
			// if (
			// 	this.$router.history.current.path ===
			// 	'/registration/request'
			// ) {
			// 	this.$parent.inIt();
			// }
			if (this.$route.fullPath === '/index') {
				console.log(
					'this.selectedAccount',
					this.selectedAccount,
				);
				this.$emit(
					'changeStatus',
					this.selectedAccount,
				);
			}
		},
		async disconnectWallet() {
			onDisconnect();
			this.selectedAccount = '';
			localStorage.setItem('STATUS', this.selectedAccount);
			// if (
			// 	this.$router.history.current.path ===
			// 	'/my/enslist'
			// ) {
			// 	console.log('/my/enslist');
			// 	this.$parent.searchEnsList();
			// }
			if (this.$route.fullPath === '/index') {
				console.log(
					'this.selectedAccount',
					this.selectedAccount,
				);
				this.$emit(
					'changeStatus',
					this.selectedAccount,
				);
			}
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

			// 存入查询历史中
			this.onSearch(this.searchText);

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
		openLinkBtn(flag) {
			this.openLinkShowFlag = flag;
		},
		changeEnsText(text) {
			//详情页
			if (
				this.$router.history.current.path ===
				'/registration/info'
			) {
				this.$parent.changeEnsText(this.searchText);
			}
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
				.el-button {
					// color: #ffffff;
					border: none;
				}
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
					border: none;
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
				// border: none;
			}
			.menu_top {
				cursor: pointer;
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
				margin-left: 0.32rem;
				background-clip: padding-box, border-box;
				background-origin: padding-box, border-box;
				background-image: linear-gradient(
						to right,
						#ffffff,
						#ffffff
					),
					linear-gradient(90deg, #e5b3fd, #7de7ec);
				.search_border {
					padding: 0 0.12rem;
					// width: 0.92rem;
					width: 100%;
					height: 0.48rem;
					// line-height: 0.48rem;
					line-height: 0.44rem;
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
		.title_right_mb {
			display: none;
		}
		@media (max-width: 750px) {
			.title_right {
				display: none;
			}
			.title_right_mb {
				display: block;
				img {
					// width: 0.5115rem;
					// height: 0.48rem;
					height: 0.3rem;
					width: 0.3rem;
					vertical-align: middle;
				}
			}
		}
	}
	.back_menu {
		width: 100%;
		// height: 100%;
		height: 12.07rem;
		position: fixed;
		left: 0;
		// top: 0;
		top: 1.28rem;
		background: rgba(0, 0, 0, 0.21);
		// filter: blur(10px);
		// background-color: rgba(113, 115, 139, 0.4117647059);
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(10px);
		z-index: 999;
	}
	// .menu_content {
	// 	width: 7.5rem;
	// 	height: 13.34rem;
	// 	position: relative;
	// 	z-index: 1;
	.menu_list {
		height: 12.07rem;
		width: 6.66rem;
		position: fixed;
		right: 0;
		top: 1.28rem;
		z-index: 9999;
		background-color: #ffffff;
		color: #000000;
		padding: 0.19rem 0.32rem;
		box-sizing: border-box;
		.menu_connect_search {
			.connect_status {
				display: flex;
				flex-direction: row;
				height: 0.77rem;
				// line-height: 0.77rem;
				.on_connect {
					display: flex;
					flex-direction: row;
					.el-button {
						// color: #ffffff;
						padding: 0.16rem 0.6rem;
						border: none;
					}
				}
				.dis_connect {
					display: flex;
					flex-direction: row;
					.connect_main {
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						color: #999999;
						margin-right: 0.48rem;
						font-size: 0.28rem;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						.coin_main {
							width: 0.08rem;
							height: 0.08rem;
							background: #21dc3f;
							border-radius: 50%;
							margin-right: 0.12rem;
						}
					}
					.el-button {
						color: #ffffff;
						border: none;
					}
				}
				.connect_text {
					// width: 1.8rem;
					height: 0.45rem;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					font-size: 0.32rem;
					margin: auto;
					margin-right: 0.16rem;
					color: #666666;
				}
				.el-button {
					// width: 1.86rem;
					height: 0.77rem;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					font-size: 0.32rem;
					color: #ffffff;
					background-image: linear-gradient(
						-60deg,
						#6af0e9 0%,
						#edafff 100%
					);
					border-radius: 0.0533rem;
					text-align: center;
					padding: 0.16rem 0.29rem;
					// border: none;
				}
			}
			.input_search {
				/deep/.el-input__inner {
					width: 5.8rem;
					height: 0.96rem;
					opacity: 0.2;
					background-image: linear-gradient(
						-60deg,
						rgb(106, 240, 233, 0.2) 0%,
						rgb(237, 175, 255, 0.2) 100%
					);
					border-radius: 0.48rem;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					font-size: 0.32rem;
					color: #999999;
					opacity: 1;
					border: none;
				}
				img {
					height: 0.32rem;
					margin: 0.32rem;
					margin-right: 0.52rem;
				}
			}
		}

		p {
			margin: 0;
			height: 0.45rem;
			line-height: 0.45rem;
			color: #000000;
			letter-spacing: 0.096rem;
			margin: 0.32rem;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: #000000;
			letter-spacing: 0.01rem;
			text-align: center;
			font-size: 0.32rem;
		}
		// 选中的语言
		.yes_lang {
			font-family: PingFangSC-Medium;
			font-weight: 500;
			font-size: 0.3rem;
			color: #000000;
			letter-spacing: 0.0053rem;
		}
		//未选中的语言
		.no_lang {
			font-family: PingFangSC-Medium;
			font-weight: 500;
			font-size: 0.28rem;
			color: #999999;
			letter-spacing: 0.0049rem;
		}
		.list_border {
			height: 1px;
			// opacity: 0.4;
			background: #ededed;
			margin: auto;
		}

		// }
	}
	@media (max-width: 750px) {
		.header_pc {
			padding: 0.4683rem 0.46rem;
		}
	}
	.mask_dialog {
		width: 100%;
		height: calc(100% - 1rem);
		opacity: 0.7;
		background-color: #000000;
		// bottom: 0;
		// left: 0;
		// position: fixed;
		position: absolute;
		z-index: 1;
	}
	.search_container {
		width: 16rem;
		height: 4.1rem;
		background: #ffffff;
		// background: #000000;
		border-radius: 0 0 0.32rem 0.32rem;
		z-index: 999;
		position: absolute;
		margin: 0 1.6rem;
		padding: 0 1rem;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		.search_text {
			// height: 0.40rem;
			font-family: PingFangSC-Semibold;
			font-weight: 600;
			font-size: 0.28rem;
			color: #000000;
			letter-spacing: 0;
		}
		.pc_top_search {
			display: flex;
			flex-direction: row;
			width: 14rem;
			height: 0.96rem;
			line-height: 0.96rem;
			border-radius: 0.32rem;
			padding: 0;
			background-image: linear-gradient(
				to right,
				#e5b3fd,
				#7de7ec
			);
			-webkit-background-clip: text;
			color: transparent;
			.search_module {
				display: flex;
				flex-direction: row;
				align-items: center;
				width: 14rem;
				border-radius: 0.32rem;
				border: 0.01rem solid;
				background-clip: padding-box, border-box;
				background-origin: padding-box, border-box;
				background-image: linear-gradient(
						to right,
						#ffffff,
						#ffffff
					),
					linear-gradient(90deg, #e5b3fd, #7de7ec);
				.select_lang {
					margin-right: 0.28rem;
					/deep/.el-input__inner {
						height: 0.9rem;
						line-height: 0.96rem;
						border: none;
						border-radius: 0.32rem;
						font-family: PingFangSC-Medium;
						font-weight: 500;
						font-size: 0.2rem;
						color: #999999;
						margin: 0;
						margin-left: 0.34rem;
						padding: 0;
						width: 0.7rem;
					}
				}
				.cut_border {
					width: 0.01rem;
					height: 0.38rem;
					border-left: 0.02rem solid #979797;
					// float: left;
					margin-right: 0.32rem;
				}
				.input_search {
					width: 11.09rem;
					/deep/.el-input__inner {
						// width: 11.09rem;
						height: 0.9rem;
						line-height: 0.96rem;
						border: none;
						border-radius: 0.32rem;
						font-family: PingFangSC-Medium;
						font-weight: 500;
						font-size: 0.2rem;
						color: #999999;
						margin: 0;
						// margin-left: 0.34rem;
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
					border: none;
				}
				img {
					width: 0.29rem;
					height: 0.32rem;
					vertical-align: middle;
					margin-right: 0.16rem;
				}
			}
		}
		// .el-input {
		// 	width: 14rem;
		// 	height: 0.96rem;
		// 	border-radius: 0.32rem;
		// }
		.his_list {
			display: flex;
			flex-direction: row;
			margin-top: 0.32rem;
			.his_text {
				height: 0.58rem;
				line-height: 0.58rem;
				padding: 0 0.18rem;
				background: #f1f1f1;
				font-family: PingFangSC-Semibold;
				font-weight: 600;
				font-size: 0.16rem;
				margin-right: 0.16rem;
				color: #999999;
				letter-spacing: 0;
				display: flex;
				flex-direction: row;
			}
		}
	}
}
@media (max-width: 750px) {
	.header_web {
		height: 1.28rem;
	}
}
</style>