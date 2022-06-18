<template>
    <div class="houtai_container">
        <div class="header_top">
            <head-er type="medal"></head-er>
        </div>
        <div class="container_config">
            <div class="config_left">

                <el-menu
                    default-active="2"
                    :collapse="isCollapse"
                    class="el-menu-vertical-demo"
                >
                    <el-menu-item
                        v-for="(item,index) of configData"
                        :index="index.toString()"
                        :key="index"
                        @click="itemDeal(item)"
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
                <router-view></router-view>
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

			myensSelect,
			documentdescSelect,
			contanctusSelect,
			isCollapse: false,
			configData: [
				{
					label: '首页',
					path: '/brick/index',
					img: indexIcon,
					code: '0501',
					showed: true,
				},
				{
					label: '我的域名',
					path: '/brick/myens',
					icon: 'el-icon-c-scale-to-original',
					img: myensIcon,
					imgSelect: myensSelect,
					code: '0502',
					showed: true,
				},
				{
					label: '文档说明',
					path: '/brick/documentdesc',
					icon: 'el-icon-c-scale-to-original',
					img: documentdescIcon,
					imgSelect: documentdescSelect,
					code: '0503',
					showed: true,
				},
				{
					label: '联系社区',
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
	},
	mounted: function () {
		console.log(this.configData);
	},
};
</script>

<style lang="less">
.houtai_container {
	display: flex;
	flex-direction: column;
	// justify-content: space-around;
	width: 100%;
	// height: 100%;
	.container_config {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		.config_left {
			// height: 100%;
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
				// width: 2.7rem;
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
		.config_right {
			height: 100%;
			flex: 1;
			font-size: 0.16rem;
		}
	}
}
</style>
