<template>
    <div class="houtai_container">
        <div class="header_top">
            <head-er @changeText="changeText"></head-er>
        </div>
        <div class="container_config">
            <div class="config_left">
                <el-menu
                    :default-active="activeMenu"
                    :collapse="isCollapse"
                    class="el-menu-vertical-demo"
                >
                    <el-menu-item
                        v-for="(item,index) of configData"
                        :index="index.toString()"
                        :key="index"
                        @click="itemDeal(item)"
                        :style="{ 'margin': $store.state.language === 'CN' ? '0.4rem 0.8rem' : '0.4rem 0.3rem' }"
                    >
                        <img
                            class="icon_img"
                            :src="item.img"
                            alt=""
                        >
                        <span slot="title">{{item.label}}</span>
                    </el-menu-item>
                </el-menu>
            </div>
            <div class="config_right">
                <router-view @changeText="changeText"></router-view>
            </div>
        </div>

    </div>
</template>

<script>
import headEr from './components/header.vue';
import indexIcon from 'img/icon/首页-未选中.png';
// import indexSelect from 'img/icon/首页-选中.png';
import myensIcon from 'img/icon/我的域名-未选中.png';
import myensSelect from 'img/icon/我的域名-选中态@2x.png';
import documentdescIcon from 'img/icon/文档说明@2x.png';
import documentdescSelect from 'img/icon/文档说明-选中态@2x.png';
import contanctusIcon from 'img/icon/联系社区-未选中@2x.png';
import contanctusSelect from 'img/icon/联系社区-选中状态@2x.png';
export default {
	name: 'systemconfig',
	components: { headEr },
	data() {
		return {
			indexIcon,
			myensIcon,
			documentdescIcon,
			contanctusIcon,
			activeMenu: '',

			myensSelect,
			documentdescSelect,
			contanctusSelect,
			isCollapse: false,
			configData: [
				{
					// label: '首页',
					// label: '首页',
					label: this.$store.state.i18n[
						this.$store.state.language
					].index_menu,
					path: '/index',
					img: indexIcon,
					code: '0501',
					showed: true,
				},
				{
					// label: '我的域名',
					label: this.$store.state.i18n[
						this.$store.state.language
					].my_domain,
					path: '/brick/myens',
					icon: 'el-icon-c-scale-to-original',
					img: myensIcon,
					imgSelect: myensSelect,
					code: '0502',
					showed: true,
				},
				{
					// label: '文档说明',
					label: this.$store.state.i18n[
						this.$store.state.language
					].document_desc,
					path: '/brick/documentdesc',
					icon: 'el-icon-c-scale-to-original',
					img: documentdescIcon,
					imgSelect: documentdescSelect,
					code: '0503',
					showed: true,
				},
				{
					// label: '联系社区',
					label: this.$store.state.i18n[
						this.$store.state.language
					].contact_community,
					path: '/brick/contactus',
					icon: 'el-icon-c-scale-to-original',
					img: contanctusIcon,
					imgSelect: contanctusSelect,
					code: '0504',
					showed: true,
				},
			],
		};
	},
	methods: {
		itemDeal: function (item) {
			this.$router.push(item.path);
		},
		changeText() {
			console.log('2222222');
		},
	},
	mounted: function () {
		console.log(this.configData);
		if (this.$route.fullPath == '/brick/myens') {
			this.activeMenu = '1';
		} else if (this.$route.fullPath == '/brick/documentdesc') {
			this.activeMenu = '2';
		} else if (this.$route.fullPath == '/brick/contactus') {
			this.activeMenu = '3';
		}
	},
	computed: {
		i18n: function () {
			return this.$store.state.i18n[
				this.$store.state.language
			];
		},
	},
	watch: {
		'$store.state.language': function (val, old) {
			console.log(val);
			console.log('监听');

			this.configData = [
				{
					// label: '首页',
					// label: '首页',
					label: this.$store.state.i18n[
						this.$store.state.language
					].index_menu,
					path: '/index',
					img: indexIcon,
					code: '0501',
					showed: true,
				},
				{
					// label: '我的域名',
					label: this.$store.state.i18n[
						this.$store.state.language
					].my_domain,
					path: '/brick/myens',
					icon: 'el-icon-c-scale-to-original',
					img: myensIcon,
					imgSelect: myensSelect,
					code: '0502',
					showed: true,
				},
				{
					// label: '文档说明',
					label: this.$store.state.i18n[
						this.$store.state.language
					].document_desc,
					path: '/brick/documentdesc',
					icon: 'el-icon-c-scale-to-original',
					img: documentdescIcon,
					imgSelect: documentdescSelect,
					code: '0503',
					showed: true,
				},
				{
					// label: '联系社区',
					label: this.$store.state.i18n[
						this.$store.state.language
					].contact_community,
					path: '/brick/contactus',
					icon: 'el-icon-c-scale-to-original',
					img: contanctusIcon,
					imgSelect: contanctusSelect,
					code: '0504',
					showed: true,
				},
			];
		},
	},
};
</script>

<style lang="less">
.houtai_container {
	display: flex;
	flex-direction: column;
	width: 100%;
	.container_config {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		.config_left {
			display: block;
			ul {
				padding-top: 0.2rem;
				box-sizing: border-box;
			}
			.el-menu-vertical-demo:not(.el-menu--collapse) {
				width: 2.7rem;
				height: calc(100vh - 1rem);
				background-image: linear-gradient(
					-60deg,
					#6af0e9 0%,
					#edafff 100%
				);
			}
			.el-menu-item {
				height: 0.3rem;
				line-height: 0.3rem;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				font-size: 0.16rem;
				color: #791d94;
				margin: 0.4rem 0.8rem;
				padding: 0 !important;
				display: flex;
				flex-direction: row;
			}

			.el-menu-item.is-active {
				//你要修改的颜⾊
				// background-color:rgb(48,105,132)!important;//
				// img{
				// 	background-image: url('houtai/img/icon/我的域名-选中态.png');
				// 	background-size: 100% 100%;
				// }
				.icon_img {
					// width: 0.3rem;
					// height: 0.3rem;
					opacity: 1;
					// background: #ffffff;
					// border-radius: 0.08rem;
					// vertical-align: middle;
					// margin-right: 0.16rem;
					// background-image: url('houtai/img/icon/我的域名-选中态.png');
					// background-size: 100% 100%;
				}
			}
			.icon_img {
				width: 0.3rem;
				height: 0.3rem;
				opacity: 0.5;
				background: #ffffff;
				border-radius: 0.08rem;
				vertical-align: middle;
				margin-right: 0.16rem;
			}

			.el-menu-item:focus,
			.el-menu-item:hover {
				outline: 0;
				background-color: initial;
				position: relative;
			}
		}
		@media (max-width: 750px) {
			.config_left {
				display: none;
			}
		}
		.config_right {
			height: 100%;
			flex: 1;
			font-size: 0.16rem;
		}
	}
}
</style>
