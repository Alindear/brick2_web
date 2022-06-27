<template>
    <div class="pc_ens_list">
        <div class="ens_name_list">
            <div style="height:100%">
                <div class="right_content">
                    <div class="title_name">
                        <el-avatar
                            class="title_name_img"
                            :src="teamImg1"
                        ></el-avatar>
                        <!-- :src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" -->
                        <div class="title_name_text">{{selectedAccount}}</div>
                    </div>
                    <div
                        class="list_tab_content"
                        :style="{ 'padding-bottom': (!myEnsNameList || myEnsNameList.length == 0) ? '0.01rem' : 0, 'width':$store.state.language === 'CN' ? '1rem' : '1.5rem' } "
                    >
                        <span class="list_tab">
                            <!-- 有效期 -->
                            {{i18n.validity_period}}
                        </span>
                    </div>
                    <div
                        class="list_tab_content_mb"
                        :style="{ 'padding-bottom': (!myEnsNameList || myEnsNameList.length == 0) ? '0.01rem' : 0, 'width':$store.state.language === 'CN' ? '1.2rem' : '2.2rem' } "
                    >
                        <span class="list_tab">
                            <!-- 有效期 -->
                            {{i18n.validity_period}}
                        </span>
                    </div>
                    <div class="ens_list">
                        <div
                            v-for="(item, index) in myEnsNameList"
                            :label="item.ensName"
                            :key="index"
                        >
                            <div class="ens_name_time">
                                <span class="ens_name">{{item.ensName}}</span>
                                <span class="ens_time">
                                    <!-- 过期 -->
                                    {{i18n.expiration}}
                                    {{item.endTime}}
                                </span>
                            </div>
                        </div>
                        <div
                            v-if="!myEnsNameList || myEnsNameList.length == 0"
                            class="no_data_img"
                        >
                            <img
                                :src="nodataPng"
                                alt=""
                            >
                            <p>
                                <!-- 什么都没有～ -->
                                {{i18n.no_data}}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getAllNodes } from 'houtai/web3_eth.js';
import nodataPng from 'img/编组 8.png';
import teamImg1 from 'img/头像/椭圆形.png';
export default {
	// components: { connectWallet, titleEnsSearch },
	data() {
		return {
			nodataPng,
			teamImg1,
			selectedAccount:
				'0x56789098765482345678987654367890876545643232123122346789090987',
			bodyHeight: '',
			myEnsNameList: [
				{
					ensName: 'benxiong.brick',
					endTime: '2023.05.05',
				},
				{
					ensName: 'benxiong.brick',
					endTime: '2023.05.05',
				},
				{
					ensName: 'benxiong.brick',
					endTime: '2023.05.05',
				},
				{
					ensName: 'benxiong.brick',
					endTime: '2023.05.05',
				},
				{
					ensName: 'benxiong.brick',
					endTime: '2023.05.05',
				},
			],
		};
	},
	mounted() {
		this.bodyHeight =
			document.documentElement.clientHeight ||
			document.body.clientHeight;
		this.searchEnsList();
	},
	computed: {
		i18n: function () {
			return this.$store.state.i18n[
				this.$store.state.language
			];
		},
	},
	methods: {
		// 钱包链接成功 查询
		searchEnsList() {
			this.selectedAccount = localStorage.getItem('STATUS')
				? localStorage.getItem('STATUS')
				: '';
			//钱包已连接 查询
			if (this.selectedAccount) {
				this.getAllNodesClick();
			}
		},

		async getAllNodesClick() {
			this.myEnsNameList = await getAllNodes();
			console.log('myEnsNameList', this.myEnsNameList);
		},
	},
};
</script>

<style lang="less" scoped>
.pc_ens_list {
	width: 100%;
	margin: 0;
	padding: 0;
	.ens_name_list {
		width: 15.3rem;
		height: 8.8rem;
		background: #ffffff;
		border-radius: 0.32rem;
		margin: auto;
		margin-top: 0.4rem;
		.right_content {
			display: flex;
			flex-direction: column;
			.title_name {
				height: 1.18rem;
				line-height: 1.18rem;
				margin-top: 0;
				border-bottom: 0.01rem solid #d8d8d8;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				font-size: 0.2rem;
				color: #333333;
				display: flex;
				flex-direction: row;
				.title_name_img {
					vertical-align: middle;
					height: 0.5rem;
					width: 0.5rem;
					margin: auto 0;
					margin-left: 0.34rem;
				}
				.title_name_text {
					height: 0.28rem;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					font-size: 0.2rem;
					color: #333333;
					margin-left: 0.24rem;
				}
			}
			@media (max-width: 750px) {
				.title_name {
					height: 100%;
					line-height: 0.5rem;
					margin-top: 0;
					border-bottom: 0.01rem solid #d8d8d8;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					font-size: 0.2rem;
					color: #333333;
					display: flex;
					flex-direction: row;
					margin: 0.32rem 0.32rem 0;
					padding-bottom: 0.32rem;
					.title_name_img {
						vertical-align: middle;
						height: 0.6rem;
						width: 0.6rem;
						margin: auto 0;
						// margin-left: 0.32rem;
					}
					.title_name_text {
						width: 5.4rem;
						height: 100%;
						word-break: break-all;
						font-size: 0.32rem;
						margin-left: 0.16rem;
					}
				}
			}
			.list_tab_content {
				display: block;
				padding: 0.32rem 0 0 0.34rem;
				width: 1.2rem;
				.list_tab {
					text-align: center;
					display: block;
					padding-bottom: 0.09rem;
					// width: 0.72rem;
					border-bottom: 0.01rem solid #850099;
					font-family: PingFangSC-Semibold;
					font-weight: 600;
					font-size: 0.16rem;
					color: #850099;
				}
				@media (max-width: 750px) {
					.list_tab {
						font-size: 0.28rem;
					}
				}
			}
			.list_tab_content_mb {
				display: none;
			}
			@media (max-width: 750px) {
				.list_tab_content {
					display: none;
				}
				.list_tab_content_mb {
					display: block;
					padding: 0.32rem 0 0 0.34rem;
					width: 2.2rem;
					.list_tab {
						text-align: center;
						display: block;
						padding-bottom: 0.09rem;
						border-bottom: 0.01rem solid
							#850099;
						font-family: PingFangSC-Semibold;
						font-weight: 600;
						font-size: 0.16rem;
						color: #850099;
					}
					@media (max-width: 750px) {
						.list_tab {
							font-size: 0.28rem;
						}
					}
				}
			}
			.ens_list {
				padding: 0.16rem 0.34rem;
				box-sizing: border-box;
				height: 6.38rem;
				overflow: scroll;
				.ens_name_time {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					border-bottom: 0.01rem dashed #ededed;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: #000000;
					height: 0.7515rem;
					// line-height: 0.7515rem;
					font-size: 0.2rem;
					.ens_name {
						height: 0.28rem;
						color: #000000;
						margin-top: 0.2358rem;
					}
					.ens_time {
						height: 0.28rem;
						color: #999999;
						margin-top: 0.2358rem;
					}
				}
				.no_data_img {
					text-align: center;
					margin: 1.47rem auto;
					img {
						width: 4.73rem;
						height: 1.83rem;
					}
					p {
						// width: 1.2rem;
						height: 0.28rem;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						font-size: 0.2rem;
						color: #000000;
						margin: 0 auto;
						margin-top: 0.32rem;
					}
				}
			}
			@media (max-width: 750px) {
				.ens_list {
					padding-top: 0;
					height: 8.46rem;
					overflow: scroll;
					.ens_name_time {
						display: block;
						height: 1.492rem;
						font-size: 0.32rem;
						padding-top: 0.32rem;
						box-sizing: border-box;
						overflow: scroll;
						.ens_name {
							height: 0.45rem;
							color: #000000;
							margin-bottom: 0.16rem;
							display: block;
							font-family: PingFangSC-Semibold;
							font-weight: 600;
							font-size: 0.32rem;
							margin-top: 0;
						}
						.ens_time {
							height: 0.4rem;
							color: #999999;
							margin-bottom: 0.158rem;
							font-family: PingFangSC-Regular;
							font-weight: 400;
							font-size: 0.28rem;
							color: #999999;
							margin-top: 0;
						}
					}
					.no_data_img {
						text-align: center;
						margin: 1.47rem auto;
						img {
							width: 4.73rem;
							height: 1.83rem;
						}
						p {
							// width: 1.2rem;
							height: 0.28rem;
							font-family: PingFangSC-Regular;
							font-weight: 400;
							font-size: 0.2rem;
							color: #000000;
							margin: 0 auto;
							margin-top: 0.32rem;
						}
					}
				}
			}
		}
	}
	@media (max-width: 750px) {
		.ens_name_list {
			height: 11.22rem;
			width: 6.86rem;
			// margin: 0.32rem 0.32rem 0.52rem;
			margin: 0.32rem auto 0.52rem;
		}
	}
}
</style>