<template>
    <div class="app_main">
        <div class="header_top">
            <head-er type="index"></head-er>
        </div>
        <div class="index_content">
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
                    <el-input
                        v-model="searchText"
                        placeholder="请输入域名或地址"
                    ></el-input>
                    <img
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
                        <el-input v-model="megaInput"></el-input>
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
                        <el-input v-model="bnsInput"></el-input>
                        <img
                            class="img4"
                            :src="top4Png"
                            alt=""
                        >
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
import headEr from './components/header.vue';
import searchBtnPng from 'img/首页/search.png';
import bnsClickPng from 'img/首页/bnsClick.png';
import top1Png from 'img/首页/rodion-kutsaev--tgTipG2t_g-unsplash@2x.png';
import top2Png from 'img/首页/位图@2x.png';
import top3Png from 'img/首页/tezos-NN8ioR6Y88A-unsplash@2x.png';
import top4Png from 'img/首页/tezos-N593T973hl0-unsplash@2x.png';

export default {
	components: { headEr },
	data() {
		return {
			searchBtnPng,
			bnsClickPng,
			top1Png,
			top2Png,
			top3Png,
			top4Png,
			megaInput: 'Mega.bsc',
			bnsInput: 'BNS-apple.bsc',
		};
	},

	methods: {
		onConnect() {
			console.log('去链接');
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
	.index_content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 9.8rem;
		box-sizing: border-box;
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
				// span {
				// 	width: 1.69rem;
				// 	height: 1.03rem;
				// 	font-family: Womby-Regular;
				// 	font-weight: 600;
				// 	font-size: 0.86rem;
				// 	color: #ffffff;
				// 	letter-spacing: 0.04rem;
				// 	background-image: linear-gradient(
				// 		to right,
				// 		#6af0e9,
				// 		#edafff
				// 	);
				// 	-webkit-background-clip: text;
				// 	color: transparent;
				// }
				// .el-button {
				// 	width: 3.28rem;
				// 	height: 1.48rem;
				// 	background-image: linear-gradient(
				// 		-60deg,
				// 		#6af0e9 0%,
				// 		#edafff 100%
				// 	);
				// 	border-radius: 0.24rem;
				// 	font-family: CKTKingKong;
				// 	font-size: 0.72rem;
				// 	color: #ffffff;
				// }
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
				img {
					width: 1.5733rem;
					height: 1.28rem;
					margin-left: 0.16rem;
					// background-image: linear-gradient(
					// 	-60deg,
					// 	#6af0e9 0%,
					// 	#edafff 100%
					// );
					// border-radius: 32rem;
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
					img {
						margin-bottom: 0.37rem;
					}
				}
				/deep/.el-input__inner {
					width: 3.75rem;
					height: 0.74rem;
					border-radius: 0.2764rem;
					border: 1px;
					border-style: solid;
					border-image: linear-gradient(
							to right,
							#e5b3fd,
							#7de7ec
						)
						1 10;
				}
			}
			.right_bottom {
				display: flex;
				flex-direction: row;
				.right_bottom_input {
					display: flex;
					flex-direction: column;
					/deep/.el-input__inner {
						width: 3.52rem;
						height: 0.74rem;
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
	}
}
</style>