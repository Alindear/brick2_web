<template>
    <div class="dialog_registered">
        <el-dialog
            title=""
            :visible.sync="dialogVisible"
            class="dialog_content"
            :show-close="false"
						:close-on-click-modal="false"
        >
            <p style="font-size: 0.32rem; color: #000000; float:right;margin:0;">
                {{i18n.dialog_text}}
								<!-- 该域名已被购买 -->
            </p>
            <span
                slot="footer"
                class="dialog-footer"
            >
                <el-button @click="cancleBtn">
									{{i18n.dialog_cancle}}
									<!-- 取消 -->
								</el-button>
                <el-button
                    type="primary"
                    @click="saveSelectBtn"
                >
								{{i18n.dialog_details}}
								<!-- 详情 -->
								</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
	props: ['openLinkShowFlag', 'text','searchText'],
	data() {
		return {
			dialogVisible: false,
		};
	},
	mounted() {
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
			console.log("saveSelectBtn",this.searchText)
			//已存在 跳到我的域名
			this.$router.push({
				path: '/brick/myens',
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
	}
	.el-dialog {
		width: 7.5rem;
		box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05);
		border-radius: 0.07rem;
	}
	.el-dialog__body {
		display: flex;
		margin-left: 0.2rem;
		padding: 0.20rem 0.10rem;
	}

	.el-button {
		width: 1.78rem;
		height: 0.96rem;
		font-size: 0.32rem;
	}
	.el-button--default:hover {
		color: #000000;
		background-color: #ffffff;
	}

	.el-button--default {
		color: #000000;
		border: 0.02rem solid #cccccc;
		border-radius: 0.64rem;
		font-size: 0.32rem;
	}
	.el-button--primary {
		border: none;
		background-image: linear-gradient(-60deg, #6af0e9 0%, #edafff 100%);
    border-radius: 0.64rem;;
    color: #ffffff;
    border: none;
		font-size: 0.32rem;
	}

	@media only screen and (max-width: 768px) {
		.dialog_registered {
			width: 6.5rem;
			margin-top: 25vh;
		}
		.el-dialog {
			width: 6.5rem;
			margin-top: 25vh !important;
		}
	}
}
</style>