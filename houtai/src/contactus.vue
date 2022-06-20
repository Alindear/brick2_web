<template>
    <div class="app_contact">
        <div class="contact_module">
            <div class="comm_list color1">
                <img
                    :src="warnPng"
                    alt=""
                >
                <p>DISCORD</p>
            </div>
            <div class="comm_list color2">
                <img
                    :src="warnPng"
                    alt=""
                >
                <p>MEDIUM</p>
            </div>
            <div class="comm_list color3">
                <img
                    :src="warnPng"
                    alt=""
                >
                <p>TWITTER</p>
            </div>
            <div class="comm_list color4">
                <img
                    :src="warnPng"
                    alt=""
                >
                <p>TELEGRAM PERSONAL</p>
            </div>
        </div>
    </div>
</template>

<script>
import headEr from './components/header.vue';
import warnPng from 'img/警告.png';
export default {
	components: { headEr },
	data() {
		return {
			warnPng,
		};
	},

	methods: {},
};
</script>

<style lang="less" scoped>
.app_contact {
	height: 100%;
	width: 100%;
	.contact_module {
		width: 15.3rem;
		height: 8.8rem;
		background: #ffffff;
		border-radius: 0.32rem;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		flex-wrap: wrap;
		padding: 0.6rem 0.6rem 0.36rem;
		box-sizing: border-box;
		margin: 0 auto;
		margin-top: 0.4rem;
		.comm_list {
			width: 6.8rem;
			height: 3.68rem;
			border-radius: 0.32rem;
			margin-right: 0.24rem;
			margin-bottom: 0.24rem;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			padding-left: 0.4rem;
			padding-top: 0.4rem;
			img {
				width: 0.44rem;
				height: 0.44rem;
				margin-bottom: 2.03rem;
				// background: #000000;
			}
			p {
				margin: 0;
				height: 0.41rem;
				font-family: Womby-Regular;
				font-weight: 400;
				font-size: 0.34rem;
				color: #7b57f6;
			}
		}

		i.comm_listmg:nth-child(2n) {
			margin-right: 0;
		}
		.color1 {
			background: rgba(123, 87, 246, 0.1);
			border: 0.01rem solid rgba(123, 87, 246, 0.3);
			box-shadow: 0 0.12rem 0.1rem 0 rgba(211, 211, 211, 0.27);
		}
		.color2 {
			background: rgba(255, 189, 102, 0.1);
			border: 0.011rem solid #ffbd66;
			border-radius: 0.32rem;
		}
		.color3 {
			background: rgba(66, 116, 255, 0.1);
			border: 0.01rem solid rgba(66, 116, 255, 0.3);
			border-radius: 0.32rem;
		}
		.color4 {
			background: rgba(7, 209, 177, 0.1);
			border: 0.01rem solid rgba(38, 190, 255, 0.3);
			border-radius: 0.32rem;
		}
	}
}
</style>