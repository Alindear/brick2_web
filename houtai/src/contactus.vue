<template>
    <div class="app_contact">
        <div class="contact_module">
					<a href="https://discord.gg/zsVChguPBZ">
            <div class="comm_list color1">
                <img
                    :src="icon1"
                    alt=""
                    class="image_icon"
                >
                <p>
                    <span>DISCORD</span>
                    <img
                        :src="enterPng"
                        alt=""
                        class="enter_png"
                    >
                </p>
            </div>
					</a>
					<a href="https://medium.com/@BNS_xxx.bsc">
            <div class="comm_list color2">
                <img
                    :src="icon2"
                    alt=""
                    class="image_icon"
                >
                <p>
                    <span>MEDIUM</span>
                    <img
                        :src="enterPng"
                        alt=""
                        class="enter_png"
                    >
                </p>
            </div>
					</a>
					<a href="https://twitter.com/bnsdomains_">
            <div class="comm_list color3">
                <img
                    :src="icon3"
                    alt=""
                    class="image_icon"
                >
                <p>
                    <span>TWITTER</span>
                    <img
                        :src="enterPng"
                        alt=""
                        class="enter_png"
                    >
                </p>
            </div>
					</a>
					<a href="https://t.me/brickcn">
            <div class="comm_list color4">
                <img
                    :src="icon4"
                    alt=""
                    class="image_icon"
                >
                <p>
                    <span> TELEGRAM PERSONAL </span>
                    <img
                        :src="enterPng"
                        alt=""
                        class="enter_png"
                    >
                </p>
            </div>
					</a>
        </div>
    </div>
</template>

<script>
import headEr from './components/header.vue';
import icon1 from 'img/iconus/discord@2x.png';
import icon2 from 'img/iconus/编组 28@2x.png';
import icon3 from 'img/iconus/推特@2x.png';
import icon4 from 'img/iconus/telegram@2x.png';
import enterPng from 'img/首页/编组 24@2x.png';
export default {
	components: { headEr },
	data() {
		return {
			icon1,
			icon2,
			icon3,
			icon4,
			enterPng,
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
			.image_icon {
				display: inline-block;
			}
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
				.enter_png {
					display: none; //PC没有箭头
				}
				span {
					display: block;
				}
			}
		}
		.comm_list:hover{
			box-shadow: 0 0.2rem 0.3rem #cccccc;
		}
		@media (max-width: 750px) {
			.comm_list {
				width: 6.22rem;
				height: 2.52rem;
				margin-right: 0;
				padding: 0.32rem 0.32rem 0.335rem;
				margin-bottom: 0.165rem;
				box-sizing: border-box;
				.image_icon {
					display: none;
				}
				img {
					width: 0.44rem;
					height: 0.44rem;
					margin-bottom: 1.02rem;
				}
				p {
					margin: 0;
					height: 0.41rem;
					font-family: Womby-Regular;
					font-weight: 400;
					font-size: 0.34rem;
					display: flex;
					justify-content: space-between;
					box-sizing: border-box;
					// img {
					// 	display: block;
					// 	margin-right: 0.382rem;
					// }
					.enter_png {
						display: block; // mb 有箭头
						margin: 0;
						margin-left: 5rem;
						margin-top: 1.44rem;
					}
					span {
						display: none;
					}
				}
			}
		}

		.comm_list:nth-child(2n) {
			margin-right: 0;
		}
		.color1 {
			background: rgba(123, 87, 246, 0.1);
			border: 0.01rem solid rgba(123, 87, 246, 0.3);
			box-shadow: 0 0.12rem 0.1rem 0 rgba(211, 211, 211, 0.27);
			color: #7b57f6;
		}
		.color2 {
			background: rgba(255, 189, 102, 0.1);
			border: 0.011rem solid #ffbd66;
			border-radius: 0.32rem;
			color: #e0942f;
		}
		.color3 {
			background: rgba(66, 116, 255, 0.1);
			border: 0.01rem solid rgba(66, 116, 255, 0.3);
			border-radius: 0.32rem;
			color: #4274ff;
		}
		.color4 {
			background: rgba(7, 209, 177, 0.1);
			border: 0.01rem solid rgba(38, 190, 255, 0.3);
			border-radius: 0.32rem;
			color: #5ecdb2;
		}
		@media (max-width: 750px) {
			.color1 {
				background: url('img/imgmb/dis.png');
				background-size: 100% 100%;
			}
			.color2 {
				background: url('img/imgmb/miu.png');
				background-size: 100% 100%;
			}
			.color3 {
				background: url('img/imgmb/twi.png');
				background-size: 100% 100%;
			}
			.color4 {
				background: url('img/imgmb/tel.png');
				background-size: 100% 100%;
			}
		}
	}
	@media (max-width: 750px) {
		.contact_module {
			width: 6.86rem;
			height: 11.22rem;
			margin: 0.32rem auto 0.54rem;
			padding: 0.32rem;
		}
	}
}
</style>