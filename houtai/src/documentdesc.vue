<template>
    <div class="app_desc">
        <!-- 文档说明 -->
        <div class="desc_content">
            <div class="card_four">
                <div
                    class="card_list"
                    v-for="(item,index) in cardList"
                    :key="index"
                >
                    <div @click="cardClick(index)">
                        <div class="card_list_img">
                            <img
                                :src="item.img"
                                class="image"
                            >
                        </div>
                        <div class="card_list_text">
                            <span>{{item.text}}</span>
                        </div>
                    </div>

                </div>

            </div>
            <div class="card_desc_four_module">
                <div class="card_desc_four1">
                    <div
                        class="bottom_popover1"
                        v-if="popoverClick === 0"
                    >
                        <video controls>
                            <source
                                :src="videoSrc"
                                type="video/mp4"
                            >
                            您的浏览器不支持 HTML5 video 标签。
                        </video>
                        <div class="video_btn">
                            <el-button @click="registerBtn">
                                <!-- 注册域名 -->
                                {{i18n.register_domain_names}}
                            </el-button>
                        </div>
                    </div>
                </div>

                <div class="card_desc_four2">
                    <!-- <div
                        class="bottom_popover2"
                        v-if="popoverClick === 1"
                    >
                        <p>
                            文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容
                        </p>
                    </div> -->
                </div>

                <div class="card_desc_four3">
                    <div
                        class="bottom_popover"
                        v-if="popoverClick === 2"
                    >
                        <!-- 3 -->
                    </div>
                </div>

                <div class="card_desc_four4">
                    <div
                        class="bottom_popover4"
                        v-if="popoverClick === 3"
                    >
                        <div
                            v-for="(item,index) in teamList"
                            :key="index"
                            class="team_list"
                        >
                            <img
                                class="team_title"
                                :src="item.img"
                                alt=""
                            >
                            <p class="team_name">{{item.name}}</p>
                            <p class="team_level">{{item.level}}</p>
                            <div
                                class="team_desc"
                                :style="{ height: $store.state.language === 'CN' ? '1.2rem' : '2.3rem'}"
                            >
                                <p>{{item.descaname}}</p>
                                <span>{{item.desc}}</span>
                            </div>
														<a :href="item.url" v-if="item.icon">
															<img
																	v-if="item.icon"
																	class="team_icon"
																	:src="item.icon"
																	alt=""
															>
														</a>

                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="mb_card_four">
            <div class="card_four">
                <div
                    @click="cardClick1"
                    class="card_list"
                    :style="{ 'background': popoverClick1 ? '#F8FCFF' : '#e3f2ff'}"
                >
                    <div class="card_list_text">
                        <span>
                            <!-- 使用指南 -->
                            {{i18n.user_guide}}
                        </span>
                        <img
                            :src="popoverClick1 ? arrow2Png : arrow1Png"
                            alt=""
                        >
                    </div>
                    <div class="card_list_img">
                        <img
                            :src="img1"
                            class="image"
                        >
                    </div>
                </div>

                <div class="list_detail1">
                    <div
                        class="bottom_popover1"
                        v-if="popoverClick1"
                    >
                        <video controls>
                            <source
                                :src="videoSrc"
                                type="video/mp4"
                            >
                            您的浏览器不支持 HTML5 video 标签。
                        </video>
                        <div class="video_btn">
                            <el-button @click="registerBtn">
                                <!-- 注册域名 -->
                                {{i18n.register_domain_names}}
                            </el-button>
                        </div>
                    </div>

                </div>

                <div
                    @click="cardClick2"
                    class="card_list"
                    :style="{ 'background': popoverClick2 ? '#F8FCFF' : '#e3f2ff'}"
                >
                    <div class="card_list_text">
                        <span>
                            <!-- 代币经济学 -->
                            {{i18n.token_economy}}
                        </span>
                        <img
                            :src="popoverClick2 ? arrow2Png : arrow1Png"
                            alt=""
                        >
                    </div>
                    <div class="card_list_img">
                        <img
                            :src="img2"
                            class="image"
                        >
                    </div>
                </div>

                <div class="list_detail2">
                    <!-- <div
                        class="bottom_popover2"
                        v-if="popoverClick2"
                    >
                        <p>
                            文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性内容文字叙述性
                        </p>
                    </div> -->

                </div>

                <div
                    @click="cardClick3"
                    class="card_list"
                    :style="{ 'background': popoverClick3 ? '#F8FCFF' : '#e3f2ff'}"
                >
                    <div class="card_list_text">
                        <span>
                            <!-- 开发人员使用 -->
                            {{i18n.developer_use}}
                        </span>
                        <img
                            :src="popoverClick3 ? arrow2Png : arrow1Png"
                            alt=""
                        >
                    </div>
                    <div class="card_list_img">
                        <img
                            :src="img3"
                            class="image"
                        >
                    </div>
                </div>
                <div class="list_detail3">
                    <div
                        class="bottom_popover3"
                        v-if="popoverClick3"
                    >
                        <!-- 这里什么都没有～ -->
                    </div>
                </div>

                <div
                    @click="cardClick4"
                    class="card_list"
                    :style="{ 'background': popoverClick4 ? '#F8FCFF' : '#e3f2ff'}"
                >
                    <div class="card_list_text">
                        <span>
                            <!-- 团队成员 -->
                            {{i18n.team_members}}
                        </span>
                        <img
                            :src="popoverClick4 ? arrow2Png : arrow1Png"
                            alt=""
                        >
                    </div>
                    <div class="card_list_img">
                        <img
                            :src="img4"
                            class="image"
                        >
                    </div>
                </div>

                <div class="list_detail4">
                    <div
                        class="bottom_popover4"
                        v-if="popoverClick4"
                    >
                        <div
                            v-for="(item,index) in teamList"
                            :key="index"
                            class="team_list"
                        >
                            <img
                                class="team_title"
                                :src="item.img"
                                alt=""
                            >
                            <p class="team_name">{{item.name}}</p>
                            <p class="team_level">{{item.level}}</p>
                            <div
                                class="team_desc"
                                :style="{ height: $store.state.language === 'CN' ? '2.22rem' : '4.2rem'}"
                            >
                                <p>{{item.descaname}}</p>
                                <span>{{item.desc}}</span>
                            </div>
														<a v-if="item.icon" :href="item.url">
															<img
																	v-if="item.icon"
																	class="team_icon"
																	:src="item.icon"
																	alt=""
															>
														</a>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import headEr from './components/header.vue';
import img1 from 'img/使用指南@2x.png';
import img2 from 'img/代币经济学.png';
import img3 from 'img/开发人员@2x.png';
import img4 from 'img/团队成员@2x.png';
import teamImg1 from 'img/头像/椭圆形.png';
import teamImg2 from 'img/头像/椭圆形2.png';
import teamImg3 from 'img/头像/椭圆形3.png';
import teamImg4 from 'img/头像/椭圆形4.png';
import teamImg5 from 'img/头像/椭圆形5.png';
import linkedinIcon from 'img/icon/linkedin.png';
import arrow1Png from 'img/箭头1.png';
import arrow2Png from 'img/箭头2.png';

export default {
	components: { headEr },
	data() {
		return {
			img1,
			img2,
			img3,
			img4,
			teamImg1,
			teamImg2,
			teamImg3,
			teamImg4,
			teamImg5,
			arrow1Png,
			arrow2Png,
			popoverClick: 0,
			popoverClick1: false,
			popoverClick2: false,
			popoverClick3: false,
			popoverClick4: false,
			videoSrc: 'http://v.xiaohongshu.com/pre_post/01e2ac32c6786921018370038170a7d9c9_259.mp4?sign=b87a02cffa7f793816c7453426064a1e&t=62af4800',
			cardList: [
				{
					img: img1,
					// text: '使用指南',
					text: this.$store.state.i18n[
						this.$store.state.language
					].user_guide,
				},
				{
					img: img2,
					// text: '代币经济学',
					text: this.$store.state.i18n[
						this.$store.state.language
					].token_economy,
				},
				{
					img: img3,
					// text: '开发人员使用',
					text: this.$store.state.i18n[
						this.$store.state.language
					].developer_use,
				},
				{
					img: img4,
					// text: '团队成员',
					text: this.$store.state.i18n[
						this.$store.state.language
					].team_members,
				},
			],
			teamList: [
				{
					img: teamImg1,
					name: 'Tim',
					level: 'Founder',
					descaname: 'PM',
					// desc: '前美团产品经理，web2连续创业者，thebrickdao创始人负责bns整体方向和产品设计把控',
					desc: this.$store.state.i18n[
						this.$store.state.language
					].team_1,
					icon: linkedinIcon,
					url:'https://www.linkedin.com/in/tim-tong-79560b241',
				},
				{
					img: teamImg2,
					name: 'Joseph',
					level: 'Co-Founder',
					descaname: 'User Development',
					// desc: '在FTX交易所负责用户增长斯巴达集团（dvisory分析师Crypto）多年用户侧增长工作经验；擅长用户体验调研策略',
					desc: this.$store.state.i18n[
						this.$store.state.language
					].team_2,
					icon: linkedinIcon,
					url:'https://www.linkedin.com/in/joseph-price-137459241/',
				},
				{
					img: teamImg3,
					name: 'Berry',
					level: 'Co-Founder',
					descaname: 'Market Development',
					// desc: '兼职麦肯锡的营销助理，三年腾讯营销经验目前负责营销和应用场景洽谈，如小狐狸、Chainlink 等',
					desc: this.$store.state.i18n[
						this.$store.state.language
					].team_3,
					icon: linkedinIcon,
					url:'https://www.linkedin.com/in/berry-jon-299617241',
				},
				{
					img: teamImg4,
					name: 'Valery',
					level: ' ',
					descaname: 'Business communication',
					// desc: 'Polimi硕士学位，2年AECOM工作经历，任项目负责人目前负责商务沟通',
					desc: this.$store.state.i18n[
						this.$store.state.language
					].team_4,
					icon: '',
				},
				{
					img: teamImg5,
					name: 'Guan',
					level: ' ',
					descaname: 'UI Designer',
					// desc: '前字节跳动UI设计师负责bns UE设计',
					desc: this.$store.state.i18n[
						this.$store.state.language
					].team_5,
					icon: '',
				},
			],
		};
	},
	computed: {
		i18n: function () {
			return this.$store.state.i18n[
				this.$store.state.language
			];
		},
	},
	watch: {
		'$store.state.language': function (val, old) {
			console.log(val);
			console.log('监听');
			this.teamList = [
				{
					img: this.teamImg1,
					name: 'Tim',
					level: 'Founder',
					descaname: 'PM',
					// desc: '前美团产品经理，web2连续创业者，thebrickdao创始人负责bns整体方向和产品设计把控',
					desc: this.$store.state.i18n[
						this.$store.state.language
					].team_1,
					icon: linkedinIcon,
				},
				{
					img: this.teamImg2,
					name: 'Joseph',
					level: 'Co-Founder',
					descaname: 'User Development',
					// desc: '在FTX交易所负责用户增长斯巴达集团（dvisory分析师Crypto）多年用户侧增长工作经验；擅长用户体验调研策略',
					desc: this.$store.state.i18n[
						this.$store.state.language
					].team_2,
					icon: linkedinIcon,
				},
				{
					img: this.teamImg3,
					name: 'Berry',
					level: 'Co-Founder',
					descaname: 'Market Development',
					// desc: '兼职麦肯锡的营销助理，三年腾讯营销经验目前负责营销和应用场景洽谈，如小狐狸、Chainlink 等',
					desc: this.$store.state.i18n[
						this.$store.state.language
					].team_3,
					icon: linkedinIcon,
				},
				{
					img: this.teamImg4,
					name: 'Valery',
					level: ' ',
					descaname: 'Business communication',
					// desc: 'Polimi硕士学位，2年AECOM工作经历，任项目负责人目前负责商务沟通',
					desc: this.$store.state.i18n[
						this.$store.state.language
					].team_4,
					icon: '',
				},
				{
					img: this.teamImg5,
					name: 'Guan',
					level: ' ',
					descaname: 'UI Designer',
					// desc: '前字节跳动UI设计师负责bns UE设计',
					desc: this.$store.state.i18n[
						this.$store.state.language
					].team_5,
					icon: '',
				},
			];
			this.cardList = [
				{
					img: img1,
					// text: '使用指南',
					text: this.$store.state.i18n[
						this.$store.state.language
					].user_guide,
				},
				{
					img: img2,
					// text: '代币经济学',
					text: this.$store.state.i18n[
						this.$store.state.language
					].token_economy,
				},
				{
					img: img3,
					// text: '开发人员使用',
					text: this.$store.state.i18n[
						this.$store.state.language
					].developer_use,
				},
				{
					img: img4,
					// text: '团队成员',
					text: this.$store.state.i18n[
						this.$store.state.language
					].team_members,
				},
			];
		},
	},

	methods: {
		cardClick1() {
			this.popoverClick1 = !this.popoverClick1;
			this.popoverClick2 = false;
			this.popoverClick3 = false;
			this.popoverClick4 = false;
		},
		cardClick2() {
			this.popoverClick2 = !this.popoverClick2;

			this.popoverClick1 = false;
			this.popoverClick3 = false;
			this.popoverClick4 = false;
		},
		cardClick3() {
			this.popoverClick3 = !this.popoverClick3;

			this.popoverClick1 = false;
			this.popoverClick2 = false;
			this.popoverClick4 = false;
		},
		cardClick4() {
			this.popoverClick4 = !this.popoverClick4;

			this.popoverClick1 = false;
			this.popoverClick2 = false;
			this.popoverClick3 = false;
		},
		cardClick(index) {
			console.log('122');
			console.log('index', index);
			this.popoverClick = index;
		},
		// 注册域名
		registerBtn() {
			console.log('注册域名');
		},
	},
};
</script>

<style lang="less" scoped>
.app_desc {
	height: 100%;
	width: 100%;
	.desc_content {
		display: block;
		width: 15.3rem;
		// height: 13.5rem;
		height: 100%;
		background: #ffffff;
		border-radius: 0.32rem;
		margin: 0.4rem 0.6rem 0.22rem;
		padding-bottom: 0.2rem;
		.card_four {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin: 0 0.4rem 0;
			padding-top: 0.4rem;
			.card_list {
				width: 3.505rem;
				height: 4.11rem;
				border-radius: 0.16rem;
				background: #e3f2ff;

				.card_list_img {
					img {
						width: 2.505rem;
						margin: 0.6rem 0.5rem 0;
						height: 2.68rem;
						vertical-align: middle;
					}
				}
				.card_list_text {
					width: 3.505rem;
					height: 0.87rem;
					line-height: 0.87rem;
					opacity: 0.66;
					background-image: linear-gradient(
						-60deg,
						#6af0e9 0%,
						#edafff 100%
					);
					font-family: PingFangSC-Semibold;
					font-weight: 600;
					font-size: 0.2rem;
					color: #000000;
					text-align: center;
					border-bottom-right-radius: 0.16rem;
					border-bottom-left-radius: 0.16rem;
				}
			}
		}
		.card_desc_four_module {
			width: 14.5rem;
			margin: 0.0717rem 0.4rem 0;
			// margin: 0.25rem 0.4rem;
			// background-image: linear-gradient(
			// 	180deg,
			// 	#e3f2ff 0%,
			// 	rgba(228, 242, 255, 0.96) 11%,
			// 	rgba(243, 250, 255, 0) 100%
			// );
			// border-radius: 16px 0 0 0 16px 16px 16px;
			// border-radius: 16px 0 0 0 16px 16px 16px;
			// border-radius: 0.3128rem;
			// background-image: url('houtai/img/imgdesc/使用指南.png');
			// background-size: 100% 100%;
			.card_desc_four1 {
				width: 14.5rem;
				background-image: url('houtai/img/imgdesc/使用指南.png');
				background-size: 100% 100%;
			}
			.card_desc_four2 {
				width: 14.5rem;
				background-image: url('houtai/img/imgdesc/代币.png');
				background-size: 100% 100%;
			}
			.card_desc_four3 {
				width: 14.5rem;
				background-image: url('houtai/img/imgdesc/开发人员.png');
				background-size: 100% 100%;
			}
			.card_desc_four4 {
				width: 14.5rem;
				background-image: url('houtai/img/imgdesc/矩形.png');
				background-size: 100% 100%;
			}
			.bottom_popover1 {
				width: 13.5rem;
				border-radius: 0.3128rem;
				// margin: 0.25rem 0.5rem 0;
				margin: 0.0717rem 0.5rem 0.3rem;
				box-sizing: border-box;
				position: relative;
				video {
					width: 13.5rem;
					height: 7.594rem;
					padding-top: 0.7283rem;
				}
				.video_btn {
					position: absolute;
					right: 0.53rem;
					top: 6.5rem;
					// bottom: 0.38rem;
					.el-button {
						// width: 1.44rem;
						height: 0.7rem;
						background: #5c70ff;
						border: 1px solid #5c70ff;
						border-radius: 64.5px;
						font-family: PingFangSC-Semibold;
						font-weight: 600;
						font-size: 0.16rem;
						color: #ffffff;
						text-align: center;
					}
				}
			}
			.bottom_popover2 {
				p {
					margin: 0.0717rem 0.32rem 0.23rem;
					padding-top: 0.4983rem;
				}
			}
			.bottom_popover4 {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				// padding: 0.24rem 0.24rem 0.4rem;
				padding: 0.4983rem 0.24rem 0.4rem;

				.team_list {
					width: 2.676rem;
					min-height: 4.14rem;
					background: #ffffff;
					border-radius: 0.16rem;
					text-align: center;
					p {
						margin: 0;
					}
					.team_title {
						width: 1.3rem;
						height: 1.3rem;
						margin: 0.2rem 0 0.24rem;
					}
					.team_name {
						height: 0.25rem;
						font-family: PingFangSC-Semibold;
						font-weight: 600;
						font-size: 0.18rem;
						color: #000000;
						text-align: center;
						margin-bottom: 0.08rem;
					}
					.team_level {
						height: 0.22rem;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						font-size: 0.16rem;
						color: #000000;
						text-align: center;
						margin-bottom: 0.16rem;
					}
					.team_desc {
						margin: 0 0.16rem;
						height: 2.22rem;
						span {
							height: 0.96rem;
							font-family: PingFangSC-Regular;
							font-weight: 400;
							font-size: 0.16rem;
							color: #999999;
							text-align: center;
							line-height: 0.24rem;
						}
						p {
							font-family: PingFangSC-Regular;
							font-weight: 400;
							font-size: 0.16rem;
							color: #999999;
							text-align: center;
							line-height: 0.24rem;
						}
					}
					.team_icon {
						width: 0.1875rem;
						height: 0.1875rem;
						margin-bottom: 0.2462rem;
					}
				}
			}
		}
	}
	.mb_card_four {
		display: none;
	}
	@media (max-width: 750px) {
		.desc_content {
			display: none;
		}
		.mb_card_four {
			display: block;
			margin: 0.32rem;
			margin-bottom: 0.495rem;
			.card_four {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				.card_list {
					width: 6.86rem;
					height: 2.73rem;
					background: #e3f2ff;
					// background: #F8FCFF;
					border-radius: 0.32rem;
					margin-bottom: 0.165rem;
					display: flex;
					flex-direction: row;
					align-items: center;
					.card_list_text {
						font-family: PingFangSC-Semibold;
						font-weight: 600;
						font-size: 0.36rem;
						color: #000000;
						margin: auto;
						margin-left: 0.6rem;
						// margin-right: 0.94rem;
						img {
							// width: 0.171rem;
							// height: 0.1rem;
							width: 0.32rem;
    					height: 0.32rem;
							margin-left: 0.16rem;
							vertical-align: middle;
						}
					}

					.card_list_img {
						.image {
							// width: 3.48rem;
							// height: 2.6rem;
							margin: 0.35rem 0.5rem 0
								0;
							width: 2.2rem;
							height: 2.2rem;
							vertical-align: middle;
						}
					}
				}
				.card_list:active {
					background: #f8fcff;
				}
				.bottom_popover1 {
					margin-bottom: 0.37rem;
					video {
						width: 6.8622rem;
						height: 3.86rem;
					}
					.video_btn {
						.el-button {
							margin-top: 0.16rem;
							width: 6.86rem;
							height: 1rem;
							background: #5c70ff;
							border: none;
							border-radius: 0.5rem;
							font-family: PingFangSC-Semibold;
							font-weight: 600;
							font-size: 0.32rem;
							color: #ffffff;
						}
					}
				}
				.bottom_popover2 {
					width: 6.86rem;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					font-size: 0.32rem;
					color: #000000;
					p {
						margin: 0;
						margin-bottom: 0.16rem;
					}
				}
				.list_detail4 {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 6.88rem;
				}
				.bottom_popover4 {
					display: flex;
					flex-wrap: wrap;
					// justify-content: center;
					.team_list {
						width: 3.35rem;
						min-height: 5.59rem;
						background: #ffffff;
						border-radius: 0.16rem;
						text-align: center;
						margin-right: 0.16rem;
						margin-bottom: 0.16rem;
						p {
							margin: 0;
						}
						.team_title {
							width: 1.3rem;
							height: 1.3rem;
							margin: 0.2rem 0 0.32rem;
						}
						.team_name {
							height: 0.45rem;
							font-family: PingFangSC-Semibold;
							font-weight: 600;
							font-size: 0.32rem;
							color: #000000;
							text-align: center;
							margin-bottom: 0.08rem;
						}
						.team_level {
							height: 0.4rem;
							font-family: PingFangSC-Regular;
							font-weight: 400;
							font-size: 0.28rem;
							color: #000000;
							text-align: center;
							margin-bottom: 0.18rem;
						}
						.team_desc {
							margin: 0 0.16rem;
							height: 2.22rem;
							span {
								height: 0.96rem;
								font-family: PingFangSC-Regular;
								font-weight: 400;
								font-size: 0.26rem;
								color: #999999;
								text-align: center;
								line-height: 0.4rem;
								word-break: break-all;
							}
							p {
								font-family: PingFangSC-Regular;
								font-weight: 400;
								font-size: 0.26rem;
								color: #999999;
								text-align: center;
								line-height: 0.4rem;
							}
						}
						.team_icon {
							width: 0.25rem;
							height: 0.25rem;
							margin-bottom: 0.235rem;
						}
					}
					.team_list:nth-child(2n) {
						margin-right: 0;
					}
				}
			}
		}
	}
}
</style>