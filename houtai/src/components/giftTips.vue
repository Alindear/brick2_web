<template>
    <div class="dialog_app">
        <el-dialog
            title=""
            :visible.sync="dialogVisible"
            class="dialog_content"
            :show-close="false"
            :close-on-click-modal="false"
        >
            <div
                v-if="type === 'luckDraw'"
                class="luck_draw"
            >
                <div
                    class="top_title_luck"
                    :style="{ 'margin-bottom': $store.state.language === 'CN' ? '0.2rem' : '-0.02rem'}"
                >
                    <span
                        class="title_text_luck"
                        v-if="$store.state.language === 'CN'"
                    >
                        <!-- 已参与成功！ -->
                        {{i18n.gift_successfully}}
                    </span>
                    <span
                        class="title_text_luck"
                        v-if="$store.state.language === 'EN'"
                    ></span>
                    <img
                        :src="partakePng"
                        alt=""
                        class="img_icon_luck"
                    >
                    <img
                        :src="search2Png"
                        alt=""
                        class="close_icon_luck"
                        @click="closeIconBtn"
                    >
                </div>
                <div
                    class="top_title_luck"
                    v-if="$store.state.language === 'EN'"
                >
                    <span style="width:100%;font-family: Futura-Bold;width: 4.33rem;height: 0.41rem;font-weight: Bold;font-size: 0.32rem;color: #80469D; margin: auto;,margin-bottom:0.25rem">
                        <!-- 已参与成功！EN -->
                        {{i18n.gift_successfully}}
                    </span>
                </div>
                <div
                    class="input_bsc_luck"
                    :style="{ 'flex-direction': $store.state.language === 'CN' ? 'row' : 'column','align-items': $store.state.language === 'CN' ?'center' : 'flex-start', 'height': $store.state.language === 'CN' ? '0.7rem' : '1rem',}"
                >
                    <p class="left_bsc">
                        <!-- 本期幸运儿：57892680.bsc -->
                        {{i18n.lucky_this}}57892680.bsc
                    </p>
                    <p class="right_bsc">
                        <!-- 本期奖品：889988.bsc -->
                        {{i18n.prize_this}}889988.bsc
                    </p>
                </div>
                <div :class="$store.state.language === 'CN' ? 'pre_bsc_luck' : 'pre_bsc_luck_en'">
                    <!--  class="pre_bsc_luck" :style="{ 'flex-direction': $store.state.language === 'CN' ? 'row' : 'column','align-items': $store.state.language === 'CN' ?'center' : 'flex-start',}" -->
                    <p class="left_bsc">
                        <!-- 上期幸运儿：wow.bsc -->
                        {{i18n.lucky_the_last}}wow.bsc
                    </p>
                    <p class="right_bsc">
                        <!-- 上期奖品：really.bsc -->
                        {{i18n.prize_the_last}}really.bsc
                    </p>
                </div>
                <p class="bottom_logo_luck">
                    <img
                        :src="logoPng"
                        alt=""
                    >
                    <span>Powered by Chainlink！</span>
                </p>
            </div>

            <div
                v-if="type === 'viewResult' && luckOrNot === 'YES'"
                class="luck_result"
            >
                <div class="top_title_luck_result">
                    <span :class="$store.state.language === 'CN' ? 'title_text_luck_result' : 'title_text_luck_result_en'">
                        <!-- 恭喜你中奖了！ -->
                        {{i18n.congratulations}}
                    </span>
                    <img
                        :src="prizePng"
                        alt=""
                        class="img_icon_luck_result"
                    >
                    <img
                        :src="search2Png"
                        alt=""
                        class="close_icon_luck_result"
                        @click="closeIconBtn"
                    >
                </div>

                <div
                    class="input_bsc_luck_result"
                    :style="{ 'flex-direction': $store.state.language === 'CN' ? 'row' : 'column','align-items': $store.state.language === 'CN' ?'center' : 'flex-start', 'height': $store.state.language === 'CN' ? '0.7rem' : '1rem',}"
                >
                    <p :class="$store.state.language === 'CN' ? 'left_bsc_result':'left_bsc_result_en'">
                        <!-- 本期幸运儿：57892680.bsc -->
                        {{i18n.lucky_this}}57892680.bsc
                    </p>
                    <p :class="$store.state.language === 'CN' ? 'right_bsc_result':'right_bsc_result_en'">
                        <!-- 本期奖品：889988.bsc -->
                        {{i18n.prize_this}}889988.bsc
                    </p>
                </div>
                <div class="pre_bsc_luck_result">
                    <p>
                        <!-- 请联系TG @Gon9tou -->
                        {{i18n.contactTG}}
                    </p>
                </div>
                <p class="bottom_logo_luck_result">
                    <img
                        :src="logoPng"
                        alt=""
                    >
                    <span>Powered by Chainlink！</span>
                </p>
            </div>

            <div
                class="top_title"
                v-if="type === 'viewResult' && luckOrNot === 'NO'"
            >
                <span class="title_text">
                    <!-- 很遗憾没中奖 -->
                    {{i18n.sorry_prize}}
                </span>

                <img
                    :src="disprizePng"
                    alt=""
                    class="img_icon"
                >
                <img
                    :src="search2Png"
                    alt=""
                    class="close_icon"
                    @click="closeIconBtn"
                >
            </div>
            <div
                class="input_bsc"
                v-if="type === 'viewResult' && luckOrNot === 'NO'"
            >
                <p class="left_bsc">
                    <!-- 本期幸运儿：57892680.bsc -->
                    {{i18n.lucky_this}}57892680.bsc
                </p>
                <p class="right_bsc">
                    <!-- 本期奖品：889988.bsc -->
                    {{i18n.prize_this}}889988.bsc
                </p>
            </div>
            <p
                class="bottom_logo"
                v-if="type === 'viewResult' && luckOrNot === 'NO'"
            >
                <img
                    :src="logoPng"
                    alt=""
                >
                <span>Powered by Chainlink！</span>
            </p>

        </el-dialog>

    </div>
</template>

<script>
import search2Png from 'img/icon/编组 2.png';
import disprizePng from 'img/gift/未中奖.png';
import partakePng from 'img/gift/位图.png';
import prizePng from 'img/gift/中奖.png';
import logoPng from 'img/gift/logo.png';

export default {
	props: ['type', 'luckDrawShowFlag', 'viewResultShowFlag', 'luckOrNot'],
	data() {
		return {
			search2Png,
			disprizePng,
			partakePng,
			prizePng,
			logoPng,
			dialogVisible: false,
		};
	},
	computed: {
		i18n: function () {
			return this.$store.state.i18n[
				this.$store.state.language
			];
		},
	},

	mounted() {
		if (this.type === 'viewResult') {
			this.dialogVisible = this.viewResultShowFlag;
		} else {
			this.dialogVisible = this.luckDrawShowFlag;
		}
	},

	methods: {
		closeIconBtn() {
			if (this.type === 'viewResult') {
				this.dialogVisible = !this.viewResultShowFlag;
				this.$parent.viewResultBtn(false);
			} else {
				this.dialogVisible = !this.luckDrawShowFlag;
				this.$parent.luckDrawBtn(false);
			}
		},
	},
};
</script>

<style lang="less" scoped>
.dialog_app {
	.luck_draw {
		.top_title_luck {
			display: flex;
			flex-direction: row;
			margin-bottom: 0.2rem;
			.title_text_luck {
				width: 2.69rem;
				// height: 0.62rem;
				font-family: YouSheBiaoTiYuan;
				font-size: 0.48rem;
				color: #80469d;
				margin: 0.82rem 0 0 0.9rem;
			}
			.img_icon_luck {
				width: 2.0784rem;
				height: 2.21rem;
				margin-top: -1.2299rem;
			}
			.close_icon_luck {
				width: 0.4rem;
				height: 0.4rem;
				background: #d8d8d8;
				margin: 0.4rem 0.4rem 0 -0.25rem;
			}
		}

		.input_bsc_luck {
			width: 5.08rem;
			height: 0.7rem;
			background: rgba(138, 62, 162, 0.03);
			border: 0.01rem solid rgba(138, 62, 162, 0.55);
			border-radius: 0.12rem;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			// margin: auto;
			padding: 0 0.25rem;
			margin: 0 0.66rem;
			// margin: 0 0.66rem 0.3rem;
			box-sizing: border-box;
			p {
				margin: 0;
			}
			.left_bsc {
				// width: 2.02rem;
				height: 0.22rem;
				font-family: Alibaba-PuHuiTi-B;
				font-weight: B;
				font-size: 0.16rem;
				color: #000000;
				margin: 0.24rem 0 0.08rem 0;
			}
			.right_bsc {
				// width: 1.67rem;
				height: 0.22rem;
				font-family: Alibaba-PuHuiTi-B;
				font-weight: B;
				font-size: 0.16rem;
				color: #000000;
				margin: 0 0 0.24rem 0;
			}
		}
		.pre_bsc_luck {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			.left_bsc {
				height: 0.22rem;
				font-family: Alibaba-PuHuiTi-R;
				font-weight: R;
				font-size: 0.16rem;
				color: #666666;
				margin: 0.16rem 0 0.32rem 0.9rem;
			}
			.right_bsc {
				height: 0.22rem;
				font-family: Alibaba-PuHuiTi-R;
				font-weight: R;
				font-size: 0.16rem;
				color: #666666;
				margin: 0.16rem 0.9rem 0.32rem 0;
			}
		}
		.pre_bsc_luck_en {
			display: flex;
			flex-direction: column;
			// justify-content: space-between;
			// align-items: center;
			.left_bsc {
				height: 0.22rem;
				font-family: Alibaba-PuHuiTi-R;
				font-weight: R;
				font-size: 0.16rem;
				color: #666666;
				margin: 0.16rem 0 0.08rem 0.9rem;
			}
			.right_bsc {
				height: 0.22rem;
				font-family: Alibaba-PuHuiTi-R;
				font-weight: R;
				font-size: 0.16rem;
				color: #666666;
				margin: 0 0 0.32rem 0.9rem;
			}
		}

		.bottom_logo_luck {
			display: flex;
			justify-content: center;
			margin: 0 0.66rem 0;
			img {
				width: 0.22rem;
				height: 0.22rem;
				margin-right: 0.08rem;
			}
			span {
				// width: 1.8rem;
				height: 0.22rem;
				font-family: Alibaba-PuHuiTi-R;
				font-weight: R;
				font-size: 0.16rem;
				color: #999999;
			}
		}
	}
	.luck_result {
		.top_title_luck_result {
			display: flex;
			flex-direction: row;
			margin-bottom: 0.2rem;
			.title_text_luck_result {
				width: 3.13rem;
				// height: 0.62rem;
				font-family: YouSheBiaoTiYuan;
				font-size: 0.48rem;
				color: #ff870b;
				margin: 0.82rem 0 0 0.9rem;
			}
			.img_icon_luck_result {
				width: 1.6187rem;
				height: 1.74rem;
				margin-top: -0.78rem;
			}
			.close_icon_luck_result {
				width: 0.4rem;
				height: 0.4rem;
				background: #d8d8d8;
				margin: 0.4rem 0.4rem 0 -0.05rem;
			}
			.title_text_luck_result_en {
				margin: 0.82rem 0 0 0.9rem;
				width: 2.86rem;
				height: 0.41rem;
				font-family: Futura-Bold;
				font-weight: Bold;
				font-size: 0.32rem;
				color: #ff870b;
			}
		}

		.input_bsc_luck_result {
			width: 5.08rem;
			height: 0.7rem;
			// background: rgba(138, 62, 162, 0.03);
			// border: 0.01rem solid rgba(138, 62, 162, 0.55);
			background: rgba(255, 220, 0, 0.03);
			border: 0.01rem solid #ffdc00;
			border-radius: 0.12rem;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			// margin: auto;
			padding: 0 0.25rem;
			margin: 0 0.66rem;
			// margin: 0 0.66rem 0.3rem;
			box-sizing: border-box;
			p {
				margin: 0;
			}
			.left_bsc_result {
				// width: 2.02rem;
				height: 0.22rem;
				font-family: Alibaba-PuHuiTi-B;
				font-weight: B;
				font-size: 0.16rem;
				color: #000000;
			}
			.right_bsc_result {
				// width: 1.67rem;
				height: 0.22rem;
				font-family: Alibaba-PuHuiTi-B;
				font-weight: B;
				font-size: 0.16rem;
				color: #000000;
			}
			.left_bsc_result_en {
				margin: 0.24rem 0 0.08rem 0;
			}
			.right_bsc_result_en {
				margin: 0 0 0.24rem 0;
			}
		}
		.pre_bsc_luck_result {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			p {
				text-align: center;
				margin: 0;
				// width: 150rem;
				height: 0.22rem;
				font-family: Alibaba-PuHuiTi-R;
				font-weight: R;
				font-size: 0.16rem;
				color: #ff0000;
				margin: 0.16rem 0 0.32rem;
			}
		}

		.bottom_logo_luck_result {
			display: flex;
			justify-content: center;
			margin: 0 0.66rem 0;
			img {
				width: 0.22rem;
				height: 0.22rem;
				margin-right: 0.08rem;
			}
			span {
				// width: 1.8rem;
				height: 0.22rem;
				font-family: Alibaba-PuHuiTi-R;
				font-weight: R;
				font-size: 0.16rem;
				color: #999999;
			}
		}
	}

	.top_title {
		display: flex;
		flex-direction: row;
		margin-bottom: 0.2rem;
		.title_text {
			width: 2.65rem;
			height: 0.62rem;
			font-family: YouSheBiaoTiYuan;
			font-size: 0.48rem;
			color: #000000;
			margin: 0.82rem 0 0.22rem 0.9rem;
		}
		.img_icon {
			width: 1.7rem;
			height: 1.7rem;
			margin-top: -0.65rem;
		}
		.close_icon {
			width: 0.4rem;
			height: 0.4rem;
			background: #d8d8d8;
			margin: 0.4rem 0.4rem 0 0.25rem;
		}
	}

	.input_bsc {
		width: 5.08rem;
		height: 0.7rem;
		background: rgba(237, 237, 237, 0.21);
		border: 0.01rem solid #d8d8d8;
		border-radius: 0.12rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		// margin: auto;
		padding: 0 0.25rem;
		margin: 0 0.66rem 0.3rem;
		box-sizing: border-box;

		.left_bsc {
			// width: 2.02rem;
			height: 0.22rem;
			font-family: Alibaba-PuHuiTi-B;
			font-weight: B;
			font-size: 0.16rem;
			color: #000000;
			margin: 0.16rem 0 0.08rem 0.9rem;
		}
		.right_bsc {
			// width: 1.67rem;
			height: 0.22rem;
			font-family: Alibaba-PuHuiTi-B;
			font-weight: B;
			font-size: 0.16rem;
			color: #000000;
			margin: 0.16rem 0 0.32rem 0.9rem;
		}
	}
	.bottom_logo {
		display: flex;
		justify-content: center;
		margin: 0 0.66rem 0;
		img {
			width: 0.22rem;
			height: 0.22rem;
			margin-right: 0.08rem;
		}
		span {
			// width: 1.8rem;
			height: 0.22rem;
			font-family: Alibaba-PuHuiTi-R;
			font-weight: R;
			font-size: 0.16rem;
			color: #999999;
		}
	}
	// #6e7071
	// #4b4b4b
	/deep/.el-dialog {
		width: 6.4rem;
		// height: 3.68rem;
		min-height: 3.68rem;
		background: #ffffff;
		border-radius: 0.32rem;
		margin-top: 3.78rem !important;
	}
	/deep/.el-dialog__body {
		padding: 0;
		padding-bottom: 0.4rem;
	}
	/deep/.el-dialog__header {
		padding: 0;
	}
	/deep/.el-dialog__wrapper {
		background: #4b4b4b;
	}
}
</style>