<template>
    <div class="dialog_registered">
        <el-dialog
            title=""
            :visible.sync="dialogVisible"
            class="dialog_content"
            :show-close="false"
        >
            <p style="font-size: 1.2rem; color: #000000; float:right;margin:0;">
                {{i18n.dialog_text}}
            </p>
            <span
                slot="footer"
                class="dialog-footer"
            >
                <el-button @click="cancleBtn">{{i18n.dialog_cancle}}</el-button>
                <el-button
                    type="primary"
                    @click="saveSelectBtn"
                >{{i18n.dialog_details}}</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
// import metaMaskFoxPng from 'img/MetaMask_Fox.png';
// import unnamedPng from 'img/unnamed.png';
// import warnPng from 'img/警告.png';
export default {
	props: ['openLinkShowFlag', 'text'],
	data() {
		return {
			dialogVisible: false,
			metaMaskFoxPng,
			unnamedPng,
			warnPng,
			radio4: '1',
			searchText: '',
		};
	},
	mounted() {
		this.searchText = this.text;
		console.log('openLinkShowFlag', this.openLinkShowFlag);
		this.dialogVisible = this.openLinkShowFlag;
	},
	computed: {
		i18n: function () {
			return this.$store.state.i18n[
				this.$store.state.language
			];
		},
	},
	methods: {
		cancleBtn() {
			this.$parent.openLinkBtn(false);
		},
		saveSelectBtn() {
			// 详情页 刷新后处理默认值 （目的：防止刷新界面 需要重新链接钱包）
			if (
				this.$router.history.current.path ===
				'/registration/info'
			) {
				this.$parent.changeEnsText(this.searchText);
			}
			// this.$router.go(0);
			this.$router.push({
				path: '/registration/info',
				query: {
					text: this.searchText,
				},
			});
			this.$parent.openLinkBtn(false);
		},
	},
};
</script>

<style lang="less">
.dialog_registered {
	.dialog_content {
		// width: 50%;
	}
	.el-dialog {
		width: 27.5rem;
		// height: 40vh;
		// background: #eedfbd !important;
		// border: 1px solid #ededed;
		box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05);
		border-radius: 7px;
	}
	.el-radio {
		margin-right: 0;
	}
	.el-radio--mini.is-bordered {
		height: 9rem;
		width: 9rem;
		float: left;
		margin-right: 2rem;
	}
	.el-radio-group {
		display: flex;
		flex-direction: row;
		margin-left: 2rem;
	}
	.el-radio.is-bordered {
		border: 1px solid rgba(0, 0, 0, 0.1);
		border-radius: 8px;
	}
	.el-dialog__body {
		display: flex;
		// flex-direction: row;
		// justify-content: space-around;
		margin-left: 20px;
		padding: 20px 10px;
	}
	.el-radio.is-bordered.is-checked {
		border: 2px solid #a63928;
		box-sizing: border-box;
		border-radius: 8px;
	}
	.el-radio__inner {
		border: 1px solid #eedebd !important;
		background-color: #eedebd;
		border-radius: 8px;
	}
	.el-radio__input.is-checked .el-radio__inner {
		// background-color: #eedebd;
	}
	.el-radio__inner::after {
		// background-color: #eedebd;
	}

	.radio_content_left {
		display: flex;
		flex-direction: column;
		img {
			width: 3.5rem;
			margin: 0 auto;
		}
		.radio_text {
			font-family: PingFangSC-Regular;
			font-weight: 400;
			font-size: 1rem;
			color: #000000;
			text-align: center;
			margin-top: 2rem;
		}
	}

	.radio_content_right {
		padding-bottom: 1rem;
		display: flex;
		flex-direction: column;
		img {
			width: 5rem;
			margin: 0 auto;
		}

		.radio_text {
			font-family: PingFangSC-Regular;
			font-weight: 400;
			font-size: 1rem;
			color: #000000;
			margin-top: 0.5rem;
			text-align: center;
		}
	}

	.el-button {
		width: 7rem;
		height: 3rem;
		font-size: 1rem;
	}
	.el-button--default:hover {
		color: #000000;
		background-color: #ffffff;
	}

	.el-button--default {
		color: #000000;
		border: 1.55px solid #cccccc;
		border-radius: 154.84px;
		// background-color: #eedebd;
	}
	.el-button--primary {
		border: 1.55px solid #a63928;
		border-radius: 154.84px;
		background-color: #a63928;
	}

	// .radio_content_left:active {
	// 	border: 2px solid #a63928 !important;
	// }
	// .radio_content_left:visited {
	// 	border: 1px solid blue;
	// }
	@media only screen and (max-width: 768px) {
		// .dialog_content {
		// 	// width: 50%;
		// }
		// .el-dialog__wrapper .dialog_content {
		// 	margin-top: 35vh;
		// 	width: 35%;
		// }
		.dialog_registered {
			width: 18.5rem;
			margin-top: 25vh;
		}
		.el-dialog {
			width: 18.5rem;
			margin-top: 25vh !important;
		}
	}
}
</style>