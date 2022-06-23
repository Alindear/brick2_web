<template>
    <div class="dialog_app">
         <el-dialog
            title=""
            :visible.sync="dialogVisible"
            class="dialog_content"
            :show-close="false"
        >
            <p v-if="dialogVisible">
								123123
            </p>
        </el-dialog>

    </div>
</template>

<script>
import search2Png from 'img/icon/编组 2.png';

export default {
	props: ['type','luckDrawShowFlag','viewResultShowFlag'],
	data() {
		return {
			search2Png,
			dialogVisible: false,
		};
	},

	mounted() {
		if(this.type === 'viewResult'){
			this.dialogVisible = this.viewResultShowFlag
		} else {
			this.dialogVisible = this.luckDrawShowFlag
		}
	},

	methods: {
	
	},
};
</script>

<style lang="less" scoped>
.dialog_app {
	height: 100%;
	width: 100%;
	background-color: #ffffff;
	.dialog_content{
		width: 6.40rem;
		height: 3.68rem;
		background: #FFFFFF;
		border-radius: 0.32rem;

	}
}
</style>