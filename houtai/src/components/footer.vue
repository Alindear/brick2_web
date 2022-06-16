<template>
    <div class="app_footer">
        <div class="bottom_content">
            <el-button @click="inviteFriends">邀请好友</el-button>

        </div>
    </div>
</template>

<script>
import 'houtai/web3.min.js';
import { currentAddr, copyToClipboard, alert } from 'houtai/web3_eth.js';

export default {
	data() {
		return {};
	},

	methods: {
		//邀请好友
		inviteFriends() {
			if (currentAddr == null) {
				alert('请链接钱包');
				return;
			}

			var url =
				window.location.origin +
				'/#/ido?ref=' +
				currentAddr;

			copyToClipboard(url);

			alert('复制成功');
		},
	},
};
</script>

<style lang="less" scoped>
.app_footer {
	height: 100%;
	widows: 100%;
	.bottom_content {
		margin: 0 0.4rem;
		margin-top: 0.4rem;
		.el-button {
			width: 6.7rem;
			height: 1rem;
			background: #6a008e;
			border-radius: 8px;
			border-radius: 1rem;
			border: 1px solid #6a008e;
			font-family: PingFangSC-Semibold;
			font-weight: 600;
			font-size: 0.36rem;
			color: #ffffff;
			text-align: center;
		}
	}
}
</style>