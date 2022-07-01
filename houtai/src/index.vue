<template>
    <div class="app_main">

        <giftTips
            type="viewResult"
            v-if="viewResultShowFlag"
            :viewResultShowFlag="viewResultShowFlag"
            :luckOrNot="luckOrNot"
        ></giftTips>
        <giftTips
            type="luckDraw"
            v-if="luckDrawShowFlag"
            :luckDrawShowFlag="luckDrawShowFlag"
        ></giftTips>

        <!-- <div class="back_top_img"></div> -->
        <registered
            v-if="openLinkShowFlag"
            :openLinkShowFlag="openLinkShowFlag"
        ></registered>
        <div class="header_top">
            <head-er
                type="index"
                @changeStatus="changeStatus"
            ></head-er>
        </div>

        <div class="back_top_img"></div>
        <div class="index_content">
            <div class="back_bottom_img"></div>
            <div class="index_left">
                <div class="left_top">
                    <span v-if="$store.state.language === 'EN'">
                        BNS
                    </span>
                    <el-button
                        v-if="$store.state.language === 'EN'"
                        @click="onConnect"
                    >Go and link</el-button>
                    <img
                        v-if="$store.state.language === 'CN'"
                        :src="bnsClickPng"
                        alt=""
                        @click="onConnect"
                    >
                </div>
                <div class="left_center">
                    <div class="text_list">
                        <span class="list_icon"></span>
                        <span>
                            <!-- 链接每一个web3用户 -->
                            {{i18n.index_text1}}
                        </span>
                    </div>
                    <div class="text_list">
                        <span class="list_icon list_icon2"></span>
                        <span>
                            <!-- 链接每一个主流平台场景 -->
                            {{i18n.index_text2}}

                        </span>
                    </div>
                    <div class="text_list">
                        <span class="list_icon list_icon3"></span>
                        <span>
                            <!-- 帮助每一个用户链接他的身份和资产 -->
                            {{i18n.index_text3}}
                        </span>
                    </div>
                    <div class="text_list">
                        <span class="list_icon list_icon4"></span>
                        <span>
                            <!-- 帮助bsc链接更大的增量客户 -->
                            {{i18n.index_text4}}
                        </span>
                    </div>
                </div>
                <div class="left_bottom">
                    <el-button
                        class="pc_top_search"
                        type="primary"
                    >
                        <div class="search_module">
                            <el-select
                                class="select_lang"
                                v-model="select"
                                slot="suffix"
                                placeholder=""
                                @change="selectLanageChange"
                            >
                                <el-option
                                    v-for="item in lanageListOpts"
                                    :key="item.value"
                                    :label="item.value"
                                    :value="item.label"
                                >
                                    <el-radio
                                        v-model="selectRadio"
                                        :label="item.label"
                                    > </el-radio>
                                </el-option>

                            </el-select>
                            <div class="cut_border"></div>
                            <el-input
                                class="input_search"
                                :placeholder="i18n.placeholder"
                                v-model="searchText"
                                @input="searchTextChange"
                            >
                            </el-input>
                        </div>
                    </el-button>
                    <img
                        @click="searchEns"
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
                        <!-- <el-input v-model="megaInput"></el-input> -->
                        <div class="border_input">
                            <span>{{megaInput}}</span>
                            <img
                                :src="inputIcon"
                                alt=""
                            >
                        </div>
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
                        <!-- <el-input v-model="bnsInput"></el-input> -->
                        <div class="border_bns_input">
                            <span>{{bnsInput}}</span>
                            <img
                                :src="inputIcon"
                                alt=""
                            >
                        </div>
                        <img
                            class="img4"
                            :src="top4Png"
                            alt=""
                        >
                    </div>

                </div>
            </div>
        </div>

        <div class="mb_index_content">
            <img
                :src="topImg"
                alt=""
            >
            <div class="index_left">
                <div class="left_top">
                    <span v-if="$store.state.language === 'EN'">BNS</span>
                    <el-button
                        v-if="$store.state.language === 'EN'"
                        @click="onConnect"
                    >Go and link</el-button>
                    <img
                        v-if="$store.state.language === 'CN'"
                        :src="bnsClickPng"
                        alt=""
                        @click="onConnect"
                    >
                </div>
                <div class="left_center">
                    <div class="text_list">
                        <span class="list_icon"></span>
                        <span>
                            <!-- 链接每一个web3用户 -->
                            {{i18n.index_text1}}
                        </span>
                    </div>
                    <div class="text_list">
                        <span class="list_icon list_icon2"></span>
                        <span>
                            <!-- 链接每一个主流平台场景 -->
                            {{i18n.index_text2}}

                        </span>
                    </div>
                    <div class="text_list">
                        <span class="list_icon list_icon3"></span>
                        <span>
                            <!-- 帮助每一个用户链接他的身份和资产 -->
                            {{i18n.index_text3}}
                        </span>
                    </div>
                    <div class="text_list">
                        <span class="list_icon list_icon4"></span>
                        <span>
                            <!-- 帮助bsc链接更大的增量客户 -->
                            {{i18n.index_text4}}
                        </span>
                    </div>
                </div>
                <div class="left_bottom">
                    <el-button
                        class="pc_top_search"
                        type="primary"
                    >
                        <div class="search_module">
                            <el-select
                                class="select_lang"
                                v-model="select"
                                slot="suffix"
                                placeholder=""
                                @change="selectLanageChange"
                            >
                                <el-option
                                    v-for="item in lanageListOpts"
                                    :key="item.value"
                                    :label="item.value"
                                    :value="item.label"
                                >
                                    <el-radio
                                        v-model="selectRadio"
                                        :label="item.label"
                                    > </el-radio>
                                </el-option>

                            </el-select>
                            <div class="cut_border"></div>
                            <el-form action="javascript:return true">
                                <el-input
                                    class="input_search"
                                    :placeholder="i18n.placeholder_mb_en"
                                    v-model="searchText"
                                    type="search"
                                    @input="searchTextChange"
                                    @keyup.13.native="searchEns"
                                >
                                    <i></i>
                                    <!-- <img
                                        slot="suffix"
                                        :src="searchblack"
                                        alt=""
                                    > -->
                                </el-input>
                            </el-form>
                        </div>
                    </el-button>
                    <img
                        @click="searchEns"
                        :src="searchBtnPng"
                        alt=""
                    >
                </div>
            </div>

        </div>

        <div class="bns_compose_module">
            <p class="the_text">The</p>
            <div
                class="title_text"
                :style="{ 'font-family': $store.state.language === 'CN' ? 'YouSheBiaoTiYuan' : 'Futura-Bold','font-weight': $store.state.language === 'CN' ? '' : 'Bold'}"
            >
                <!-- Bns生态构成 -->
                {{i18n.bns_ecological}}
            </div>
            <img
                :src="bnsComposeImg"
                alt=""
            >
            <div class="back_right_center_img"></div>
        </div>

        <div class="back_right_center_img"></div>

        <div class="share_module">
            <div
                class="title_text"
                :style="{ 'font-family': $store.state.language === 'CN' ? 'YouSheBiaoTiYuan' : 'Futura-Bold', 'font-weight': $store.state.language === 'CN' ? '' : 'Bold'}"
            >
                <!-- 分享赚取收益 -->
                {{i18n.share}}
            </div>
            <p :class="$store.state.language === 'CN' ? 'span_text' : 'span_text_en'">
                <!-- 推荐好友注册域名有奖励！赶紧生成自己的专属链接吧！ -->
                {{i18n.share_desc}}
            </p>
            <div class="share_img">
                <div
                    class="left_img"
                    v-if="linkShowFlag"
                >
                    <p class="on_link">{{this.refAddress}}</p>
                </div>
                <div
                    class="left_img"
                    @click="linkClick"
                    v-if="!linkShowFlag"
                >
                    <p :class="$store.state.language === 'CN' ? 'dis_link' : 'dis_link_en'">
                        <!-- 点击生成专属链接 -->
                        {{i18n.click_text}}
                    </p>
                </div>
                <div class="right_img">
                    <div
                        class="now_profit"
                        v-if="changeStatusShowFlag"
                    >
                        <p class="profit_text">
                            <!-- 当前收益 -->
                            {{i18n.current_gains}}
                        </p>
												<div class="profit_usdt">USDT</div>
                        <div class="profit_num_usdt">{{usdtCps}}</div>
												<div class="profit_bnb">BNB</div>
                        <div class="profit_num_bnb">{{bnbCps}}</div>
                        <!-- <div class="profit_num">BRICK: {{brickCps }}</div>
                        <div class="profit_num">USDT:{{usdtCps}}</div>
                        <div class="profit_num">BNB:{{bnbCps}}</div> -->
                    </div>
                    <p
                        class="dis_content"
                        v-if="!changeStatusShowFlag"
                    >
                        <!-- 请链接钱包后查看当前收益 -->
                        {{i18n.please_link_wallet}}
                    </p>
                    <el-button @click="getIncomeBtn">
                        <!-- 提取收益 -->
                        {{i18n.btn_gains}}
                    </el-button>
                </div>
            </div>
        </div>

        <div class="express_module">
            <p
                class="title_text"
                :style="{ 'font-family': $store.state.language === 'CN' ? 'Alibaba-PuHuiTi-M' : 'Futura-Bold', 'font-weight': $store.state.language === 'CN' ? '' : 'Bold', 'width': $store.state.language === 'CN' ? '' : '13rem',}"
            >
                <!-- 个性化是表达自我的第一步，而不是： -->
                {{i18n.first_step}}
            </p>
            <el-button class="button_text">
                <p>
                    0xF7Bc92...79E7A4AD
                </p>
            </el-button>
        </div>

        <div class="back_address_price_module">
            <div class="back_left_center_img"></div>
            <div
                v-for="(item,index) in addressPriceList"
                :key="index"
                class="address_price_module"
            >
                <div class="address_price_left_desc">
                    <img
                        :src="item.icon"
                        alt=""
                    >
                    <div class="address_price_title web-font">{{item.title}}</div>
                    <p class="address_price_desc">{{item.desc}}</p>
                </div>
                <div class="address_price_right_img">
                    <img
                        :src="item.img"
                        alt=""
                    >
                </div>

            </div>

        </div>
        <div class="mb_back_address_price_module">
            <div class="back_left_center_img"></div>
            <div
                v-for="(item,index) in addressPriceList"
                :key="index"
                class="address_price_module"
            >
                <!-- :style="{ 'background' : index === 0 ? '#ffffff' : '#f8f8f8'}" -->
                <div class="address_price_right_img">
                    <img
                        :src="item.img"
                        alt=""
                    >
                </div>
                <div class="address_price_left_desc">
                    <div class="mb_price_title">
                        <img
                            :src="item.icon"
                            alt=""
                        >
                        <div class="address_price_title web-font">{{item.title}}</div>
                    </div>
                    <p class="address_price_desc">{{item.desc}}</p>
                </div>

            </div>

        </div>

        <div class="gift_module">
            <div
                class="title_text_gift"
                :style="{ 'font-family': $store.state.language === 'CN' ? 'YouSheBiaoTiYuan' : 'Futura-Bold', 'font-weight': $store.state.language === 'CN' ? '' : 'Bold'}"
            >
                <!-- web3的第一份礼物请收下 -->
                {{i18n.first_gift}}
            </div>
            <p class="span_text_gift">
                <!-- 域名抽奖活动，每周一次，周五开奖，周六开始新一轮抽奖，每周四抽奖截止 -->
                {{i18n.first_gift_desc}}
            </p>
            <el-button
                v-if="!changeStatusShowFlag"
                disabled
            >
                <!-- 请链接钱包 -->
                {{i18n.connect_wallet_btn}}
            </el-button>
            <el-button
                v-if="changeStatusShowFlag && !isShowDraw"
                @click="luckDrawBtn(true)"
            >
                <!-- 参与抽奖 -->
                {{i18n.participate_draw}}
            </el-button>
            <el-button
                v-if="changeStatusShowFlag && isShowDraw"
                @click="viewResultBtn(true)"
            >
                <!-- 查看结果 -->
                {{i18n.view_results}}
            </el-button>
            <div class="four_gift_bottom">
                <div
                    v-for="(item,index) in giftList"
                    :key="index"
                    class="four_gift_item"
                >
                    <img
                        :src="item.img"
                        alt=""
                    >
                    <p class="item_title">{{item.title}}</p>
                    <div class="item_desc">
                        <p>{{item.desc1}}</p>
                        <p>{{item.desc2}}</p>
                        <p v-if="item.desc3">{{item.desc3}}</p>
                    </div>
                    <!-- <span :class="`item_desc${index+1}`">{{item.desc}}</span> -->
                </div>
            </div>

        </div>

        <div class="partner_module">
            <p
                class="partner_title"
                :style="{ 'font-family': $store.state.language === 'CN' ? 'YouSheBiaoTiYuan' : 'Futura-Bold', 'font-weight': $store.state.language === 'CN' ? '' : 'Bold'}"
            >
                <!-- 合作伙伴 -->
                {{i18n.partners}}
            </p>

            <div class="partner_img">
                <div class="partner_img_div">
                    <img
                        class="partner_img_1"
                        :src="partnerImg1"
                        alt=""
                    >
                </div>
                <div class="partner_img_div">
                    <img
                        class="partner_img_2"
                        :src="partnerImg2"
                        alt=""
                    >
                </div>
                <div class="partner_img_div">
                    <img
                        class="partner_img_3"
                        :src="partnerImg3"
                        alt=""
                    >
                </div>
                <div class="partner_img_div">
                    <img
                        class="partner_img_4"
                        :src="partnerImg4"
                        alt=""
                    >
                </div>
            </div>
						<div class="mb_partner_img">
                <div class="partner_img_div">
                    <img
                        class="partner_img_1"
                        :src="mbpartnerImg1"
                        alt=""
                    >
                </div>
                <div class="partner_img_div">
                    <img
                        class="partner_img_2"
                        :src="mbpartnerImg2"
                        alt=""
                    >
                </div>
                <div class="partner_img_div">
                    <img
                        class="partner_img_3"
                        :src="mbpartnerImg3"
                        alt=""
                    >
                </div>
                <div class="partner_img_div">
                    <img
                        class="partner_img_4"
                        :src="mbpartnerImg4"
                        alt=""
                    >
                </div>
            </div>

            <div class="contact_us_module">
                <p
                    class="contanct_title"
                    :style="{ 'font-family': $store.state.language === 'CN' ? 'YouSheBiaoTiYuan' : 'Futura-Medium', 'font-weight': $store.state.language === 'CN' ? '' : ''}"
                >
                    <!-- 联系我们 -->
                    {{i18n.contact_us}}
                </p>
                <div class="contact_input">
                    <span class="email">E-mail: admin@bnsdid.io </span>
                    <span class="bottom_img">

												<a href="https://twitter.com/bnsdomains_">
                        <img
                            class="bottom_icon1"
                            :src="twitterPng"
                            alt=""
                        >
												</a>
                       <a href="https://discord.gg/FS2zwvPtEz">
                        <img
                            class="bottom_icon2"
                            :src="discordPng"
                            alt=""
                        >
												</a>
												<a href="https://t.me/brickcn">
                        <img
                            class="bottom_icon3"
                            :src="lastIconPng"
                            alt=""
                        >
												</a>
                        <!-- <div class="img_left"></div> -->
                    </span>
                    <span class="img_left"></span>
											<span class="img_center">SAY HI HERE</span>
											<a href="https://twitter.com/bnsdomains_">
												<img
														class="img_right"
														:src="enterIcon"
														alt=""
												>
											</a>
                   

                </div>

                <div class="mb_contact_input">
                    <p class="email_top">E-mail: admin@bnsdid.io </p>
										
                    <div class="input_center">
                        <span class="img_center">SAY HI HERE</span>
												<a href="https://twitter.com/bnsdomains_">
													<img
															class="img_right"
															:src="enterIcon"
															alt=""
													>
												</a>
                    </div>

                    <!-- <span class="img_left"></span> -->
                    <span class="bottom_img">
												<a href="https://twitter.com/bnsdomains_">
													<img
															class="bottom_icon1"
															:src="twitterMBPng"
															alt=""
													>
												</a>
                       
                       <a href="https://discord.gg/FS2zwvPtEz">
													<img
														class="bottom_icon2"
														:src="discordMBPng"
														alt=""
													>
												</a>
												<a href="https://t.me/brickcn">
													<img
															class="bottom_icon3"
															:src="lastIconMBPng"
															alt=""
													>
												</a>
                        
                    </span>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
import giftTips from './components/giftTips.vue';
import registered from './components/registered.vue';
import headEr from './components/header.vue';
import {
	onConnect,
	onDisconnect,
	getAccount,
	isExist,
	checkBrickbalance,
	checkAndLoadFromLast,
	checkEachLength,
	init,
	drawMine,
	selectedAccount,
	checkAlready,
	randomLottery, checkEnable, getMyLottery, hexToUtf8, getHolders, getLotteryPool,
} from 'houtai/web3_eth.js';

import topImg from 'img/imgmb/首页/顶部.png';
import searchBtnPng from 'img/首页/search.png';
import bnsClickPng from 'img/首页/bnsClick.png';
import top1Png from 'img/首页/rodion-kutsaev--tgTipG2t_g-unsplash@2x.png';
import top2Png from 'img/首页/位图@2x.png';
import top3Png from 'img/首页/tezos-NN8ioR6Y88A-unsplash@2x.png';
import top4Png from 'img/首页/tezos-N593T973hl0-unsplash@2x.png';
// import bnsComposeImg from 'img/首页/编组 37@2x.png';
import bnsComposeImg from 'img/首页/编组 58.png';
import addressIcon from 'img/首页/编组 18@2x.png';
import priceIcon from 'img/首页/编组 19@2x.png';
import img1 from 'img/首页/未标题-2.png';
import img2 from 'img/首页/编组 20.png';
import enterIcon from 'img/首页/编组 24@2x.png';
import inputIcon from 'img/首页/椭圆形@2x.png';
import partnerImg1 from 'img/首页/编组 36.png';
import partnerImg2 from 'img/首页/编组 35.png';
import partnerImg3 from 'img/首页/编组 34.png';
import partnerImg4 from 'img/首页/编组 27.png';

import mbpartnerImg1 from 'img/imgmb/首页/bottom1.png';
import mbpartnerImg2 from 'img/imgmb/首页/bottom2.png';
import mbpartnerImg3 from 'img/imgmb/首页/bottom3.png';
import mbpartnerImg4 from 'img/imgmb/首页/bottom4.png';

import twitterPng from 'img/首页/推特_twitter44@2x.png';
import discordPng from 'img/首页/discord@2x.png';
import lastIconPng from 'img/首页/编组 56@2x.png';

import twitterMBPng from 'img/imgmb/首页/推特_twitter44.png';
import discordMBPng from 'img/imgmb/首页/discord.png';
import lastIconMBPng from 'img/imgmb/首页/编组 56.png';

import giftImg1 from 'img/gift/编组 30.png';
import giftImg2 from 'img/gift/编组 31.png';
import giftImg3 from 'img/gift/编组 32.png';
import giftImg4 from 'img/gift/编组 33.png';

import icon1 from 'img/logo/灰色2x/icon1.png';
import icon2 from 'img/logo/灰色2x/icon2.png';
import icon3 from 'img/logo/灰色2x/icon3.png';
import icon4 from 'img/logo/灰色2x/icon4.png';
import icon5 from 'img/logo/灰色2x/icon5.png';
import icon6 from 'img/logo/灰色2x/icon6.png';
import icon7 from 'img/logo/灰色2x/icon7.png';
import icon8 from 'img/logo/灰色2x/icon8.png';
import icon9 from 'img/logo/灰色2x/icon9.png';
import icon10 from 'img/logo/灰色2x/icon10.png';
import icon11 from 'img/logo/灰色2x/icon11.png';
import icon12 from 'img/logo/灰色2x/icon12.png';
import icon13 from 'img/logo/灰色2x/icon13.png';
import icon14 from 'img/logo/灰色2x/icon14.png';

import iconSelect1 from 'img/logo/彩色2x/iconSelect1.png';
import iconSelect2 from 'img/logo/彩色2x/iconSelect2.png';
import iconSelect3 from 'img/logo/彩色2x/iconSelect3.png';
import iconSelect4 from 'img/logo/彩色2x/iconSelect4.png';
import iconSelect5 from 'img/logo/彩色2x/iconSelect5.png';
import iconSelect6 from 'img/logo/彩色2x/iconSelect6.png';
import iconSelect7 from 'img/logo/彩色2x/iconSelect7.png';
import iconSelect8 from 'img/logo/彩色2x/iconSelect8.png';
import iconSelect9 from 'img/logo/彩色2x/iconSelect9.png';
import iconSelect10 from 'img/logo/彩色2x/iconSelect10.png';
import iconSelect11 from 'img/logo/彩色2x/iconSelect11.png';
import iconSelect12 from 'img/logo/彩色2x/iconSelect12.png';
import iconSelect13 from 'img/logo/彩色2x/iconSelect13.png';
import iconSelect14 from 'img/logo/彩色2x/iconSelect14.png';

export default {
	components: { headEr, registered, giftTips },
	data() {
		return {
			isShowDraw: false, //是否参与抽奖
			luckDrawShowFlag: false, // 参与抽奖
			viewResultShowFlag: false, // 查看结果
			luckOrNot: 'NO', //是否中奖
			// luckOrNot: 'YES', //是否中奖

			openLinkShowFlag: false,
			searchEnsLoading: false,
			changeStatusShowFlag: false,

			// changeStatusShowFlag: true,

			linkShowFlag: false,
			refAddress: '',
			bnbCps: 0,
			brickCps: 0,
			usdtCps: 0,
			searchBtnPng,
			bnsClickPng,
			bnsComposeImg,
			top1Png,
			top2Png,
			top3Png,
			top4Png,
			addressIcon,
			priceIcon,
			img1,
			img2,
			enterIcon,
			inputIcon,
			partnerImg1,
			partnerImg2,
			partnerImg3,
			partnerImg4,
			mbpartnerImg1,
			mbpartnerImg2,
			mbpartnerImg3,
			mbpartnerImg4,
			twitterPng,
			discordPng,
			lastIconPng,
			twitterMBPng,
			discordMBPng,
			lastIconMBPng,
			giftImg1,
			giftImg2,
			giftImg3,
			giftImg4,
			topImg,

			icon1,
			icon2,
			icon3,
			icon4,
			icon5,
			icon6,
			icon7,
			icon8,
			icon9,
			icon10,
			icon11,
			icon12,
			icon13,
			icon14,
			iconSelect1,
			iconSelect2,
			iconSelect3,
			iconSelect4,
			iconSelect5,
			iconSelect6,
			iconSelect7,
			iconSelect8,
			iconSelect9,
			iconSelect10,
			iconSelect11,
			iconSelect12,
			iconSelect13,
			iconSelect14,
			searchText: '',
			megaInput: 'Mega.bsc',
			bnsInput: 'BNS-apple.bsc',
			// select: 'CN',
			// selectRadio: '简体中文 (CN)',
			select: this.$store.state.language,
			selectRadio: this.$store.state.languageSelect,
			lanageListOpts: [
				{
					label: 'English (EN)',
					value: 'EN',
				},
				{
					label: '简体中文 (CN)',
					value: 'CN',
				},
			],
			addressPriceList: [
				{
					icon: addressIcon,
					// title: '转账时请输入能一眼记住的地址',
					// desc: '再也不用担心长长的、无序的地址了。直接从域名到域名进行交易，简单便捷。',
					title: this.$store.state.i18n[
						this.$store.state.language
					].enter_address_text,
					desc: this.$store.state.i18n[
						this.$store.state.language
					].enter_address_desc,
					img: img1,
				},
				{
					icon: priceIcon,
					// title: '交易域名，好的域名会比某些NFT更有价值',
					// desc: '收集、出售.bsc域名，从这些独一无二的域名中获利。',
					title: this.$store.state.i18n[
						this.$store.state.language
					].good_domain_name,
					desc: this.$store.state.i18n[
						this.$store.state.language
					].collect_and_sell,
					img: img2,
				},
			],
			giftList: [
				{
					title: '2022Q3',
					// desc1: '融资计划开启',
					// desc2: '测试网上线',
					desc1: this.$store.state.i18n[
						this.$store.state.language
					].gift_one_desc1,
					desc2: this.$store.state.i18n[
						this.$store.state.language
					].gift_one_desc2,
					img: giftImg1,
				},
				{
					title: '2022Q4',
					// desc1: '主网上线',
					// desc2: '域名交易市场开启',
					// desc3: 'Share to earn',
					desc1: this.$store.state.i18n[
						this.$store.state.language
					].gift_two_desc1,
					desc2: this.$store.state.i18n[
						this.$store.state.language
					].gift_two_desc2,
					desc3: this.$store.state.i18n[
						this.$store.state.language
					].gift_two_desc3,
					img: giftImg2,
				},
				{
					title: '2022Q1-Q2',
					// desc1: 'BNS代币上线',
					// desc2: '实现90%的场景覆盖',
					desc1: this.$store.state.i18n[
						this.$store.state.language
					].gift_three_desc1,
					desc2: this.$store.state.i18n[
						this.$store.state.language
					].gift_three_desc2,
					img: giftImg3,
				},
				{
					title: '2023Q3',
					// desc1: '基于数据的did',
					// desc2: 'UGC模式社交产品',
					desc1: this.$store.state.i18n[
						this.$store.state.language
					].gift_four_desc1,
					desc2: this.$store.state.i18n[
						this.$store.state.language
					].gift_four_desc2,
					img: giftImg4,
				},
			],
			imgList: [
				{ img: icon1 },
				{ img: icon2 },
				{ img: icon3 },
				{ img: icon4 },
				{ img: icon5 },
				{ img: icon6 },
				{ img: icon7 },
				{ img: icon8 },
				{ img: icon9 },
				{ img: icon10 },
				{ img: icon11 },
				{ img: icon12 },
				{ img: icon13 },
				{ img: icon14 },
			],
			imgSelectList: [
				{ img: iconSelect1 },
				{ img: iconSelect2 },
				{ img: iconSelect3 },
				{ img: iconSelect4 },
				{ img: iconSelect5 },
				{ img: iconSelect6 },
				{ img: iconSelect7 },
				{ img: iconSelect8 },
				{ img: iconSelect9 },
				{ img: iconSelect10 },
				{ img: iconSelect11 },
				{ img: iconSelect12 },
				{ img: iconSelect13 },
				{ img: iconSelect14 },
			],
		};
	},

	watch: {
		searchText(newValue, oldValue) {
			console.log(newValue);
			this.searchText = newValue.replace('-', '');
			this.searchText = this.searchText.replace(
				/[`:_.~!｜［｛｝〉×〉×［］〖〗＊〔〕‖〈〉«»«»×÷＞＜≥≤¡¿£€﹉–´´＂＇¢฿♀♂‹›」』『「@#$%^&*() \+ =<>?"{}|, \/ ;' \\ [ \] ·~～！@#￥¥%……&*（）—— \+ ={}|《》<>？：“”【】、；‘’，。、]/g,
				'',
			);
			this.searchText = this.searchText.toLowerCase();
		},
		'$store.state.cpsFee': async function(val, old) {
			console.log(val);
			console.log('监听');
			this.bnbCps = val[0];
			this.brickCps = val[1];
			this.usdtCps = val[2];
			var _this = this;
			var _fun = function(_this) {
				_this.luckDrawShowFlag = true;
				_this.isShowDraw = true;
			}

			var enable = await checkEnable();
			// if(enable===true){
			 if(enable===false){
			 	// TODO
				//_this.viewResultShowFlag = true;
				// 判断是否中奖
				this.changeStatusShowFlag =true;
				this.isShowDraw = true;
			}

			var alreay = await checkAlready();
			if(alreay){
			   _fun(_this);
			}
		},
		'$store.state.language': function (val, old) {
			console.log(val);
			console.log('监听');
			this.addressPriceList = [
				{
					icon: addressIcon,
					// title: '转账时请输入能一眼记住的地址',
					// desc: '再也不用担心长长的、无序的地址了。直接从域名到域名进行交易，简单便捷。',
					title: this.$store.state.i18n[
						this.$store.state.language
					].enter_address_text,
					desc: this.$store.state.i18n[
						this.$store.state.language
					].enter_address_desc,
					img: img1,
				},
				{
					icon: priceIcon,
					// title: '交易域名，好的域名会比某些NFT更有价值',
					// desc: '收集、出售.bsc域名，从这些独一无二的域名中获利。',
					title: this.$store.state.i18n[
						this.$store.state.language
					].good_domain_name,
					desc: this.$store.state.i18n[
						this.$store.state.language
					].collect_and_sell,
					img: img2,
				},
			];

			this.giftList = [
				{
					title: '2022Q3',
					// desc1: '融资计划开启',
					// desc2: '测试网上线',
					desc1: this.$store.state.i18n[
						this.$store.state.language
					].gift_one_desc1,
					desc2: this.$store.state.i18n[
						this.$store.state.language
					].gift_one_desc2,
					img: giftImg1,
				},
				{
					title: '2022Q4',
					// desc1: '主网上线',
					// desc2: '域名交易市场开启',
					// desc3: 'Share to earn',
					desc1: this.$store.state.i18n[
						this.$store.state.language
					].gift_two_desc1,
					desc2: this.$store.state.i18n[
						this.$store.state.language
					].gift_two_desc2,
					desc3: this.$store.state.i18n[
						this.$store.state.language
					].gift_two_desc3,
					img: giftImg2,
				},
				{
					title: '2022Q1-Q2',
					// desc1: 'BNS代币上线',
					// desc2: '实现90%的场景覆盖',
					desc1: this.$store.state.i18n[
						this.$store.state.language
					].gift_three_desc1,
					desc2: this.$store.state.i18n[
						this.$store.state.language
					].gift_three_desc2,
					img: giftImg3,
				},
				{
					title: '2023Q3',
					// desc1: '基于数据的did',
					// desc2: 'UGC模式社交产品',
					desc1: this.$store.state.i18n[
						this.$store.state.language
					].gift_four_desc1,
					desc2: this.$store.state.i18n[
						this.$store.state.language
					].gift_four_desc2,
					img: giftImg4,
				},
			];
		},
		// '':{
		//     giftList
		// }
	},

	computed: {
		i18n: function () {
			return this.$store.state.i18n[
				this.$store.state.language
			];
		},
	},

	methods: {
		//参与抽奖
		async luckDrawBtn(flag) {
			//var alreay = await checkAlready();
			var _this = this;
			// var _fun = function (_this) {
				_this.luckDrawShowFlag = true;
				_this.isShowDraw = true;
			// };
			// randomLottery(_fun, _this);
		},
		// 查看结果
		async viewResultBtn(flag) { // TODO
			this.viewResultShowFlag = flag;
			var myLottery = await getMyLottery();
			if(myLottery==0x0000000000000000000000000000000000000000000000000000000000000000){
				this.luckOrNot = "NO";
				var holders = await getHolders();
				console.log(holders);
				var pool = await getLotteryPool();
				for (let i=0;i< holders.length;i++) {
					this.$store.state.lowerPoolAccounts = this.$store.state.lowerPoolAccounts===''?holders[i]:this.$store.state.lowerPoolAccounts+","+holders[i];
				}
				for (let i=0;i< pool.length;i++) {
					console.log(hexToUtf8(pool[i]));
					this.$store.state.lowerPools =this.$store.state.lowerPools===''?hexToUtf8(pool[i]):this.$store.state.lowerPools+","+hexToUtf8(pool[i]);
				}
			}else{
				this.$store.state.selectedAccount = selectedAccount;
				this.$store.state.myLottery = hexToUtf8(myLottery);
				this.luckOrNot = "YES";
			}
			//this.luckOrNot = this.luckOrNot;
		},
		searchTextChange() {
			console.log('域名发生变化');
			this.isExist = null;
			this.searchEnsLoading = false;
		},
		selectLanageChange(val) {
			if (val === 'English (EN)') {
				this.$store.commit('showENLanage');
			} else if (val === '简体中文 (CN)') {
				this.$store.commit('showCNLanage');
			}
			// console.log('this.i18n', this.i18n);
		},
		// 打开已存在提示弹窗
		openLinkBtn(flag) {
			this.openLinkShowFlag = flag;
		},
		//查询
		async searchEns() {
			if (!this.searchText) {
				// alert('请输入查询的域名');
				alert(
					this.$store.state.i18n[
						this.$store.state.language
					].enter_names,
				);
				return;
			}

			if (this.searchText.length < 3) {
				// alert('请至少输入三个字符');
				alert(
					this.$store.state.i18n[
						this.$store.state.language
					].text_1,
				);
				return;
			}

			//查询当前页面的域名时 直接清空 不进行查询（用于注册页 & 详情页）
			if (this.searchText === this.$route.query.text) {
				this.searchText = '';
				return;
			}

			// // 存入查询历史中
			// this.onSearch(this.searchText);

			this.searchEnsLoading = true;
			let text = this.searchText.toLowerCase() + '.bsc';
			this.isExist = await isExist(text);
			if (!(await checkEachLength(this.searchText))) {
				return;
			}
			if (this.isExist) {
				this.openLinkBtn(true);
			} else if (!this.isExist && this.isExist !== null) {
				// this.searchText = this.searchText + '.bsc';
				console.log('this.$router', this.$router);
				//注册页 刷新后处理默认值 （目的：防止刷新界面 需要重新链接钱包）
				// if (
				// 	this.$router.history.current.path ===
				// 	'/brick/searchens'
				// ) {
				// 	this.$parent.changeText(
				// 		this.searchText,
				// 	);
				// }
				this.$router.push({
					path: '/brick/searchens',
					query: {
						text: this.searchText,
					},
				});
			}
			if (this.isExist || !this.isExist) {
				this.searchEnsLoading = false;
			}
		},
		// //查询
		// async searchEns() {
		// 	//  document.activeElement.blur();  // 关闭软键盘
		// 	if (!this.searchText) {
		// 		alert('请输入查询的域名');
		// 		// alert(
		// 		// 	this.$store.state.i18n[
		// 		// 		this.$store.state.language
		// 		// 	].enter_names,
		// 		// );
		// 		return;
		// 	}

		// 	if (this.searchText.length < 3) {
		// 		alert('请至少输入三个字符');
		// 		// alert(
		// 		// 	this.$store.state.i18n[
		// 		// 		this.$store.state.language
		// 		// 	].text_1,
		// 		// );
		// 		return;
		// 	}

		// 	//查询当前页面的域名时 直接清空 不进行查询（用于注册页 & 详情页）
		// 	if (this.searchText === this.$route.query.text) {
		// 		this.searchText = '';
		// 		return;
		// 	}

		// 	this.searchEnsLoading = true;
		// 	let text = this.searchText.toLowerCase() + '.bsc';
		// 	this.isExist = await isExist(text);
		// 	if (!(await checkEachLength(this.searchText))) {
		// 		return;
		// 	}
		// 	console.log('this.isExist----', this.isExist);
		// 	if (this.isExist) {
		// 		this.openLinkBtn(true);
		// 	} else if (!this.isExist && this.isExist !== null) {
		// 		// this.searchText = this.searchText + '.bsc';
		// 		console.log('this.$router', this.$router);
		// 		//注册页 刷新后处理默认值 （目的：防止刷新界面 需要重新链接钱包）
		// 		if (
		// 			this.$router.history.current.path ===
		// 			'/registration/request'
		// 		) {
		// 			this.$parent.changeText(
		// 				this.searchText,
		// 			);
		// 		}
		// 		this.$router.push({
		// 			path: '/registration/request',
		// 			query: {
		// 				text: this.searchText,
		// 			},
		// 		});
		// 	}
		// 	if (this.isExist || !this.isExist) {
		// 		this.searchEnsLoading = false;
		// 	}
		// },
		onConnect() {
			console.log('去链接');
		},
		changeStatus(status) {
			this.changeStatusShowFlag = status;
			console.log(
				'this.changeStatusShowFlag',
				this.changeStatusShowFlag,
			);
		},
		//点击生成专属链接
		linkClick() {
			if (selectedAccount == null) {
				// alert('请先链接钱包');
				alert(
					this.$store.state.i18n[
						this.$store.state.language
					].please_connect_wallet,
				);
				return;
			}
			this.linkShowFlag = true;
			var text =
				window.location.origin +
				'/?ref=' +
				selectedAccount;
			const input = document.createElement('INPUT');
			input.style.opacity = 0;
			input.style.position = 'absolute';
			input.style.left = '-100000px';
			document.body.appendChild(input);

			input.value = text;
			input.select();
			input.setSelectionRange(0, text.length);
			document.execCommand('copy');
			document.body.removeChild(input);
			this.refAddress = text;
		},
		//提取收益
		getIncomeBtn() {
			drawMine();
		},
		changeImageSrc(key, way) {
			console.log('key, way', key, way);
			let tempStr = way === 'hover' ? 'Select' : '';
			for (let i = 0; i < this.imgList.length; i++) {
				if (i === key) {
					// this.imgList[key].img =
					// 	this.imgSelectList[i].img;
					this.imgList[i].img =
						this[`icon${tempStr}${i + 1}`];
				}
			}
		},
	},
	mounted() {

	}
};
</script>

<style lang="less" scoped>
.app_main {
	height: 100%;
	width: 100%;
	font-size: 0.16rem;
	background: #ffffff;
	position: relative;
	.header_top {
		position: relative;
		// position: absolute;
		z-index: 1;
	}
	.header_web {
		background: none;
	}
	.back_top_img {
		display: block;
		width: 4.34rem;
		height: 7.84rem;
		opacity: 0.12;
		background: #e3a0ff;
		filter: blur(0.44rem);
		position: absolute;
		top: -3.92rem;
		right: 0;
		float: right;
	}

	.index_content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 9.8rem;
		box-sizing: border-box;
		position: relative;
		width: calc(100% - 1rem);
		// background: pink;
		.index_left {
			margin-top: 1.62rem;
			margin-left: 1.61rem;
			box-sizing: border-box;
			.left_top {
				margin-bottom: 0.62rem;
				img {
					height: 1.48rem;
				}
				span {
					width: 1.69rem;
					height: 1.03rem;
					font-family: Womby-Regular;
					font-weight: 400;
					font-size: 0.86rem;
					// color: #ffffff;
					letter-spacing: 0.04rem;
					background-image: linear-gradient(
						to right,
						#e5b3fd,
						#7de7ec
					);
					-webkit-background-clip: text;
					color: transparent;
					margin-right: 0.24rem;
				}
				.el-button {
					width: 5.63rem;
					height: 1.48rem;
					background-image: linear-gradient(
						-60deg,
						#6af0e9 0%,
						#edafff 100%
					);
					border-radius: 0.24rem;
					// width: 443px;
					// height: 86px;
					font-family: Womby-Regular;
					font-weight: 400;
					font-size: 0.72rem;
					color: #ffffff;
					border: none;
				}
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
				margin-top: 0.72rem;
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
				/deep/.el-input__inner:focus {
					border-color: #f1f1f1 !important;
					outline: 0;
				}
				img {
					width: 1.5733rem;
					height: 1.28rem;
					margin-left: 0.16rem;
				}
				.pc_top_search {
					display: flex;
					flex-direction: row;
					padding: 0;
					border: none;
					width: 6.64rem;
					height: 1.28rem;
					line-height: 1.28rem;
					opacity: 0.8;
					background: #f1f1f1;
					border-radius: 0.32rem;
					.search_module {
						display: flex;
						flex-direction: row;
						align-items: center;
						width: 6.64rem;
						.select_lang {
							margin-right: 0.01rem;
							/deep/.el-input__inner {
								height: 1.28rem;
								line-height: 1.28rem;
								border: none;
								border-radius: 0.32rem;
								font-family: PingFangSC-Medium;
								font-weight: 500;
								font-size: 0.2rem;
								color: #999999;
								margin: 0;
								margin-left: 0.5rem;
								padding: 0;
								width: 0.7rem;
							}
						}
						.cut_border {
							width: 0.01rem;
							height: 0.38rem;
							border-left: 0.02rem
								solid #cdcdcd;
							// margin-right: 0.39rem;
							margin-right: 0.1rem;
						}
						.input_search {
							width: 5rem;
							/deep/.el-input__inner {
								width: 4.8rem;
								height: 1.28rem;
								line-height: 1.28rem;
								border: none;
								border-radius: 0;
								font-family: PingFangSC-Medium;
								font-weight: 500;
								font-size: 0.2rem;
								color: #333333;
								margin: 0;
								padding: 0;
								border-top-right-radius: 0.32rem;
								border-bottom-right-radius: 0.32rem;
							}
						}
						.el-button {
							width: 1.73rem;
							background-image: linear-gradient(
								-60deg,
								#6af0e9 0%,
								#edafff 100%
							);
							border-radius: 0.32rem;
							box-sizing: border-box;
							height: 0.98rem;
							margin-top: -0.02rem;
							font-family: PingFangSC-Semibold;
							font-weight: 600;
							font-size: 0.2rem;
							color: #ffffff;
						}
						img {
							width: 0.29rem;
							height: 0.32rem;
							vertical-align: middle;
							margin-right: 0.16rem;
						}
					}
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
					.img {
						margin-bottom: 0.37rem;
					}
					.border_input {
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						width: 3.75rem;
						height: 0.74rem;
						line-height: 0.74rem;
						border: 0.01rem solid
							transparent;
						border-radius: 0.32rem;
						background-clip: padding-box,
							border-box;
						background-origin: padding-box,
							border-box;
						background-image: linear-gradient(
								to right,
								#ffffff,
								#ffffff
							),
							linear-gradient(
								90deg,
								#edafff,
								#6af0e9
							);
						img {
							height: 0.51rem;
							width: 0.51rem;
							vertical-align: middle;
							margin: auto 0;
							margin-right: 0.1rem;
						}
						span {
							margin-left: 0.28rem;
							height: 0.38rem;
							font-family: Alibaba-PuHuiTi-R;
							font-weight: R;
							font-size: 0.16rem;
							color: #000000;
						}
					}
				}
				/deep/.el-input__inner {
					width: 3.75rem;
					height: 0.74rem;
					border-radius: 0.2764rem;
					// border: 0.01rem;
					// border-style: solid;
					border-image: linear-gradient(
							to right,
							#e5b3fd,
							#7de7ec
						)
						1 10;
					// background-image: linear-gradient(
					// 		right,
					// 		#e5b3fd,
					// 		#7de7ec
					// 	)
					// 	1 10;
				}
			}
			.right_bottom {
				display: flex;
				flex-direction: row;
				.right_bottom_input {
					display: flex;
					flex-direction: column;
					// /deep/.el-input__inner {
					// 	width: 3.52rem;
					// 	height: 0.74rem;
					// 	background-image: linear-gradient(
					// 		-60deg,
					// 		#6af0e9 0%,
					// 		#edafff 100%
					// 	);
					// 	border-radius: 0.2764rem;
					// 	font-family: Alibaba-PuHuiTi-R;
					// 	font-weight: R;
					// 	font-size: 0.2764rem;
					// 	color: #ffffff;
					// 	border: none;
					// }
					.border_bns_input {
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						width: 3.52rem;
						height: 0.74rem;
						line-height: 0.74rem;
						background-image: linear-gradient(
							-60deg,
							#6af0e9 0%,
							#edafff 100%
						);
						border-radius: 0.2764rem;
						font-family: Alibaba-PuHuiTi-R;
						font-weight: R;
						// font-size: 0.2764rem;
						font-size: 0.16rem;
						color: #ffffff;
						border: none;
						img {
							height: 0.51rem;
							width: 0.51rem;
							vertical-align: middle;
							margin: auto 0;
							margin-right: 0.1rem;
						}
						span {
							margin-left: 0.28rem;
						}
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
		.back_bottom_img {
			width: 6.28rem;
			height: 4.2rem;
			opacity: 0.11;
			background: #78ffef;
			filter: blur(0.44rem);
			position: absolute;
			float: left;
			left: -1.74rem;
			bottom: 0;
		}
	}
	.mb_index_content {
		display: none;
	}
	@media (max-width: 750px) {
		.mb_index_content {
			display: block;
			width: 100%;
			margin-top: -1.28rem;
			position: relative;
			img {
				width: 100%;
				position: absolute;
			}
			.index_left {
				// margin-top: 0.62rem;
				// margin-left: 0.61rem;
				box-sizing: border-box;
				position: relative;
				padding-top: 8.56rem;
				.left_top {
					margin-bottom: 0.32rem;
					margin-top: 0.62rem;
					margin-left: 0.61rem;
					img {
						width: 3.33rem;
						height: 0.95rem;
						position: relative;
					}
					span {
						font-size: 0.56rem;
						width: 1.69rem;
						height: 1.03rem;
						font-family: Womby-Regular;
						font-weight: 400;
						letter-spacing: 0.04rem;
						background-image: linear-gradient(
							to right,
							#e5b3fd,
							#7de7ec
						);
						-webkit-background-clip: text;
						color: transparent;
						margin-right: 0.24rem;
					}
					.el-button {
						font-size: 0.52rem;
						background-image: linear-gradient(
							-60deg,
							#6af0e9 0%,
							#edafff 100%
						);
						border-radius: 0.24rem;
						font-family: Womby-Regular;
						font-weight: 400;
						color: #ffffff;
						border: none;
					}
				}
				.left_center {
					display: flex;
					flex-direction: column;
					margin-left: 0.61rem;
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
							font-family: Alibaba-PuHuiTi-R;
							font-weight: R;
							font-size: 0.28rem;
							color: #666666;
							line-height: 0.36rem;
						}
					}
				}
				.left_bottom {
					margin-left: 0.61rem;
					margin-top: 0.22rem;
					display: flex;
					flex-direction: row;
					// justify-content: space-between;
					/deep/.el-input__inner {
						width: 5.56rem;
						height: 1.09rem;
						opacity: 0.8;
						background: #f1f1f1;
						border-radius: 0.32rem;
					}
					/deep/.el-input__inner:focus {
						border-color: #f1f1f1 !important;
						outline: 0;
					}
					img {
						width: 1.24rem;
						height: 1.09rem;
						margin-left: 0.0567rem;
						position: relative;
					}
					.pc_top_search {
						display: flex;
						flex-direction: row;
						padding: 0;
						border: none;
						width: 5.56rem;
						height: 1.09rem;
						line-height: 1.09rem;
						opacity: 0.8;
						background: #f1f1f1;
						border-radius: 0.32rem;
						.search_module {
							display: flex;
							flex-direction: row;
							align-items: center;
							width: 5.56rem;
							.select_lang {
								margin-right: 0.2rem;
								/deep/.el-input__inner {
									height: 1.09rem;
									line-height: 1.09rem;
									border: none;
									border-radius: 0.32rem;
									font-family: PingFangSC-Medium;
									font-weight: 500;
									font-size: 0.32rem;
									color: #999999;
									margin: 0;
									margin-left: 0.32rem;
									padding: 0;
									width: 0.85rem;
								}
								/deep/.el-input__suffix {
									right: -0.06rem;
								}
								/deep/.el-button--primary.is-active {
									background: #999999;
									border-color: #999999;
								}
							}
							.cut_border {
								width: 0.01rem;
								height: 0.38rem;
								border-left: 0.02rem
									solid
									#cdcdcd;
								margin-right: 0.12rem;
							}
							.input_search {
								width: 5rem;
								/deep/.el-input__inner {
									// width: 3.8rem;
									width: 4.8rem;
									height: 1.09rem;
									line-height: 1.09rem;
									border: none;
									border-radius: 0.32rem;
									font-family: PingFangSC-Medium;
									font-weight: 500;
									font-size: 0.32rem;
									color: #999999;
									margin: 0;
									padding: 0;
								}
							}
							.el-button {
								width: 1.73rem;
								background-image: linear-gradient(
									-60deg,
									#6af0e9
										0%,
									#edafff
										100%
								);
								border-radius: 0.32rem;
								box-sizing: border-box;
								height: 0.98rem;
								margin-top: -0.02rem;
								font-family: PingFangSC-Semibold;
								font-weight: 600;
								font-size: 0.32rem;
								color: #ffffff;
							}
							img {
								width: 0.29rem;
								height: 0.32rem;
								vertical-align: middle;
								margin-right: 0.16rem;
							}
						}
					}
				}
			}
		}
		.header_top {
			background: none;
		}
		.header_web {
			background: none;
		}
		.back_top_img {
			display: none;
		}
		.index_content {
			display: none;
		}
	}
	.bns_compose_module {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		.the_text {
			display: block;
			width: 0.32rem;
			height: 0.26rem;
			font-family: Futura-Medium;
			font-weight: 500;
			font-size: 0.2rem;
			color: #999999;
			text-align: center;
		}
		.title_text {
			// width: 6.83rem;
			height: 1.56rem;
			font-family: YouSheBiaoTiYuan;
			font-size: 1.2rem;
			color: #000000;
			text-align: center;
			margin-bottom: 0.1rem;
		}
		img {
			width: 10rem;
		}
		.back_right_center_img {
			width: 6.69rem;
			height: 6.83rem;
			opacity: 0.07;
			background: #78b5ff;
			filter: blur(0.5rem);
			position: absolute;
			top: 7.5rem;
			right: -2.17rem;
			float: right;
			display: block;
		}
	}
	@media (max-width: 750px) {
		.bns_compose_module {
			.the_text {
				display: none;
			}
			.title_text {
				height: 0.7rem;
				margin-top: 1.125rem;
				font-size: 0.54rem;
			}
			img {
				width: 7.5rem;
			}
			.back_right_center_img {
				display: none;
			}
		}
	}

	.share_module {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 2rem;
		.title_text {
			height: 1.04rem;
			font-family: YouSheBiaoTiYuan;
			font-size: 0.8rem;
			color: #000000;
			margin-bottom: 0.32rem;
		}
		.span_text {
			height: 0.3rem;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			font-size: 0.22rem;
			color: #999999;
			margin: 0;
			margin-bottom: 0.6rem;
		}
		.span_text_en {
			height: 0.3rem;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			font-size: 0.22rem;
			color: #999999;
			margin: 0;
			margin-bottom: 0.6rem;
		}
		.share_img {
			display: flex;
			flex-direction: row;

			.left_img {
				width: 8rem;
				height: 6.6rem;
				border: 0.33rem solid;
				// border: 0.01rem solid;
				border-image: linear-gradient(
						to right,
						#e5b3fd,
						#7de7ec
					)
					1 10;
				box-sizing: border-box;
				cursor: default;
				.on_link {
					font-family: Alibaba-PuHuiTi-B;
					font-weight: B;
					font-size: 0.46rem;
					background-image: linear-gradient(
						to right,
						#e5b3fd,
						#7de7ec
					);
					-webkit-background-clip: text;
					color: transparent;
					word-break: break-all;
					margin: 2.96rem 0.57rem 0.44rem 0.55rem;
					// margin: 3.94rem 0.9rem 0.77rem 0.88rem;
				}
				.dis_link {
					font-family: Alibaba-PuHuiTi-B;
					font-weight: B;
					font-size: 0.46rem;
					background-image: linear-gradient(
						to right,
						#e5b3fd,
						#7de7ec
					);
					-webkit-background-clip: text;
					color: transparent;
					// padding: 4.39rem 0 1.59rem 0.55rem;
					margin: 4.72rem 0 1.25rem 0.88rem;
					// box-sizing: border-box;
				}
				.dis_link_en {
					font-family: Alibaba-PuHuiTi-B;
					font-weight: B;
					font-size: 0.4rem;
					background-image: linear-gradient(
						to right,
						#e5b3fd,
						#7de7ec
					);
					-webkit-background-clip: text;
					color: transparent;
					// padding: 4.39rem 0 1.59rem 0.55rem;
					margin: 4.72rem 0 1.25rem 0.88rem;
					// box-sizing: border-box;
				}
			}
			.left_img:hover {
				border: 0.33rem solid;
				border-image: linear-gradient(
						to right,
						#e5b3fd,
						#7de7ec
					)
					1 10;
				box-sizing: border-box;
				cursor: default;
				.on_link {
					// margin: 3.94rem 0.9rem 0.77rem 0.88rem;
					// margin: 3.61rem 0.57rem 0.44rem 0.55rem;
					margin: 2.96rem 0.57rem 0.44rem 0.55rem;
				}
				.dis_link {
					// margin: 4.39rem 0 1.59rem 0.55rem;
					margin: 4.72rem 0 1.25rem 0.88rem;
					box-sizing: border-box;
					// padding: 4.72rem 0 1.25rem 0.88rem;
					// box-sizing: border-box;
				}
				.dis_link_en {
					font-family: Alibaba-PuHuiTi-B;
					font-weight: B;
					font-size: 0.4rem;
					background-image: linear-gradient(
						to right,
						#e5b3fd,
						#7de7ec
					);
					-webkit-background-clip: text;
					color: transparent;
					// margin: 4.39rem 0 1.59rem 0.55rem;
					margin: 4.72rem 0 1.25rem 0.88rem;
				}
			}
			.right_img {
				width: 8rem;
				height: 6.6rem;
				background-image: url('houtai/img/首页/收益.png');
				background-size: 100% 100%;
				border: 0.01rem solid;
				border-image: linear-gradient(
						to bottom,
						#e5b3fd,
						#7de7ec
					)
					1 10;
				box-sizing: border-box;
				cursor: default;
				.now_profit {
					margin-left: 0.69rem;
					// margin-bottom: 1.95rem;
					// margin-bottom: 0.95rem;
					.profit_text {
						// width: 0.95rem;
						height: 0.33rem;
						font-family: Alibaba-PuHuiTi-R;
						font-weight: R;
						font-size: 0.24rem;
						color: #000000;
						// margin: 0.99rem 0 0.32rem;
    				margin: 0.69rem 0 0.48rem 0;
					}
					.profit_usdt{
							height: 0.29rem;
							font-family: Womby-Regular;
							font-weight: 400;
							font-size: 0.24rem;
							color: #999999;
							letter-spacing: 0;
							margin-bottom: 0.11rem;
						}
						.profit_bnb{
							height: 0.29rem;
							font-family: Womby-Regular;
							font-weight: 400;
							font-size: 0.24rem;
							color: #999999;
							letter-spacing: 0;
							margin-bottom: 0.11rem;
						}
						// .profit_num {
						// 	width: 5.68rem;
						// 	height: 0.38rem;
						// 	font-family: Womby-Regular;
						// 	font-weight: 400;
						// 	font-size: 0.32rem;
						// 	color: #000000;
						// 	letter-spacing: 0.02rem;
						// 	word-break: break-all;
						// 	margin-bottom: 0.24rem;
						// }
					.profit_num_usdt {
						width: 7rem;
						height: 100%;
						font-family: Womby-Regular;
						font-weight: 400;
						font-size: 0.64rem;
						color: #000000;
						letter-spacing: 0.04rem;
						word-break: break-all;
						margin-bottom: 0.32rem;
					}
					.profit_num_bnb {
						width: 7rem;
						height: 100%;
						font-family: Womby-Regular;
						font-weight: 400;
						font-size: 0.64rem;
						color: #000000;
						letter-spacing: 0.04rem;
						word-break: break-all;
						margin-bottom: 0.32rem;
					}
					
				}
				.dis_content {
					// width: 2.84rem;
					height: 0.33rem;
					font-family: Alibaba-PuHuiTi-M;
					font-weight: M;
					font-size: 0.24rem;
					color: #000000;
					margin: 3.14rem 0 0.93rem 0.81rem;
				}
				.el-button {
					margin-left: 0.69rem;
					// margin-bottom: 0.92rem;
					margin-bottom: 1.25rem;
					// width: 3.32rem;
					height: 1.28rem;
					background-image: linear-gradient(
						-60deg,
						#6af0e9 0%,
						#edafff 100%
					);
					border-radius: 0.64rem;
					font-family: Alibaba-PuHuiTi-B;
					font-weight: B;
					font-size: 0.46rem;
					color: #ffffff;
					padding: 0 0.75rem;
					border: none;
				}
			}
			.right_img:hover {
				width: 8rem;
				height: 6.6rem;
				background-image: url('houtai/img/首页/收益.png');
				background-size: 100% 100%;
				border: 0.33rem solid;
				border-image: linear-gradient(
						to bottom,
						#e5b3fd,
						#7de7ec
					)
					1 10;
				box-sizing: border-box;
				cursor: default;
				// .now_profit {
				// 	margin-left: 0.36rem;
				// 	// margin-bottom: 1.95rem;
				// 	// margin-bottom: 0.95rem;
				// 	margin-bottom: 0.62rem;
				// 	.profit_text {
				// 		// width: 0.95rem;
				// 		height: 0.33rem;
				// 		font-family: Alibaba-PuHuiTi-R;
				// 		font-weight: R;
				// 		font-size: 0.24rem;
				// 		color: #000000;
				// 		// margin: 0.66rem 0 0.32rem;
				// 	}
				// 	.profit_num {
				// 		width: 5.69rem;
				// 		// height: 0.6rem;
				// 		font-family: Womby-Regular;
				// 		font-weight: 400;
				// 		font-size: 0.64rem;
				// 		color: #000000;
				// 		letter-spacing: 0.04rem;
				// 		word-break: break-all;
				// 	}
				// }
				// .dis_content {
				// 	// width: 2.84rem;
				// 	height: 0.33rem;
				// 	font-family: Alibaba-PuHuiTi-M;
				// 	font-weight: M;
				// 	font-size: 0.24rem;
				// 	color: #000000;
				// 	// margin: 3.14rem 0 0.93rem 0.81rem;
				// }
				// .el-button {
				// 	// margin-left: 0.69rem;
				// 	margin-left: 0.36rem;
				// 	// margin-bottom: 0.92rem;
				// 	margin-bottom: 1.25rem;
				// 	// width: 3.32rem;
				// 	height: 1.28rem;
				// 	background-image: linear-gradient(
				// 		-60deg,
				// 		#6af0e9 0%,
				// 		#edafff 100%
				// 	);
				// 	border-radius: 0.64rem;
				// 	font-family: Alibaba-PuHuiTi-B;
				// 	font-weight: B;
				// 	font-size: 0.46rem;
				// 	color: #ffffff;
				// 	padding: 0 0.75rem;
				// 	border: none;
				// }
			}
		}
	}
	@media (max-width: 750px) {
		.share_module {
			margin-bottom: 1.07rem;
			.title_text {
				height: 0.7rem;
				font-family: YouSheBiaoTiYuan;
				font-size: 0.54rem;
				margin-top: 0.2417rem;
				margin-bottom: 0.16rem;
			}
			.span_text {
				height: 100%;
				width: 4.2rem;
				text-align: center;
				font-weight: 400;
				font-size: 0.32rem;
				margin-bottom: 0.5632rem;
				font-family: PingFangSC-Regular;
			}
			.span_text_en {
				height: 100%;
				width: 6.2rem;
				text-align: center;
				font-weight: 400;
				font-size: 0.32rem;
				margin-bottom: 0.5632rem;
				font-family: PingFangSC-Regular;
			}
			.share_img {
				flex-direction: column;
				align-items: center;
				.left_img {
					width: 5.68rem;
					height: 2.606rem;
					border: 0.13rem solid;
					border-image: linear-gradient(
							to right,
							#e5b3fd,
							#7de7ec
						)
						1 10;
					box-sizing: border-box;
					.on_link {
						font-family: Alibaba-PuHuiTi-B;
						font-weight: B;
						font-size: 0.36rem;
						// margin: 1.05rem 1.42rem;
						display: flex;
						align-items: center;
						justify-content: center;
						margin: 0;
						text-align: center;
					}
					.dis_link {
						font-size: 0.36rem;
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						margin: 0;
						text-align: center;
					}
					.dis_link_en {
						font-size: 0.32rem;
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						margin: 0;
					}
				}

				.left_img:hover {
					border: 0.13rem solid;
					border-image: linear-gradient(
							to right,
							#e5b3fd,
							#7de7ec
						)
						1 10;
					box-sizing: border-box;
					.on_link {
						font-family: Alibaba-PuHuiTi-B;
						font-weight: B;
						font-size: 0.36rem;
						// margin: 1.05rem 1.42rem;
						margin: 0.32rem auto;
					}
					.dis_link {
						font-size: 0.36rem;
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						margin: 0;
					}
					.dis_link_en {
						font-size: 0.32rem;
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						margin: 0;
					}
				}

				.right_img {
					width: 5.68rem;
					height: 4.19rem;
					background-image: url('houtai/img/imgmb/首页/收益.png');
					background-size: 100% 100%;
					.now_profit {
						margin-left: 0.4rem;
						margin-bottom: 0.16rem;
						.profit_text {
							height: 0.35rem;
							font-family: Alibaba-PuHuiTi-R;
							font-weight: R;
							font-size: 0.28rem;
							color: #000000;
							margin: 0.24rem 0;
							// text-align: center;
						}
						.profit_usdt{
							height: 0.34rem;
							font-family: Womby-Regular;
							font-weight: 400;
							font-size: 0.28rem;
							color: #999999;
							letter-spacing: 0;
							margin-bottom: 0.08rem;
						}
						.profit_bnb{
							height: 0.34rem;
							font-family: Womby-Regular;
							font-weight: 400;
							font-size: 0.28rem;
							color: #999999;
							letter-spacing: 0;
							margin-bottom: 0.08rem;
						}
						.profit_num_usdt {
							width: 5.68rem;
							height: 0.38rem;
							font-family: Womby-Regular;
							font-weight: 400;
							font-size: 0.32rem;
							color: #000000;
							letter-spacing: 0.02rem;
							word-break: break-all;
							margin-bottom: 0.24rem;
						}
						.profit_num_bnb {
							width: 5.68rem;
							height: 0.38rem;
							font-family: Womby-Regular;
							font-weight: 400;
							font-size: 0.32rem;
							color: #000000;
							letter-spacing: 0.02rem;
							word-break: break-all;
							margin-bottom: 0.24rem;
						}
					}
					.dis_content {
						// width: 2.84rem;
						height: 0.35rem;
						font-size: 0.26rem;
						margin: 0;
						margin-top: 1.18rem;
						margin-bottom: 0.46rem;
						text-align: center;
					}
					.el-button {
						margin-left: 0.69rem;
						margin-bottom: 0.92rem;
						width: 4.48rem;
						height: 0.94rem;
						padding: 0 0.75rem;
						font-size: 0.32rem;
						border: none;
						margin: 0 auto;
						display: block;
					}
				}
				.right_img:hover {
					width: 5.68rem;
					height: 4.19rem;
					background-image: url('houtai/img/imgmb/首页/收益.png');
					background-size: 100% 100%;
					.now_profit {
						margin-left: 0.4rem;
						margin-bottom: 0.16rem;
						.profit_text {
							height: 0.33rem;
							font-family: Alibaba-PuHuiTi-R;
							font-weight: R;
							font-size: 0.28rem;
							color: #000000;
							margin: 0.16rem 0;
							// text-align: center;
						}
						.profit_num {
							width: 5.69rem;
							height: 0.44rem;
							font-family: Womby-Regular;
							font-weight: 400;
							font-size: 0.32rem;
							color: #000000;
							letter-spacing: 0.01rem;
							word-break: break-all;
						}
					}
					.dis_content {
						// width: 2.84rem;
						height: 0.35rem;
						font-size: 0.26rem;
						margin: 0;
						margin-top: 1.18rem;
						margin-bottom: 0.46rem;
						text-align: center;
					}
					.el-button {
						margin-left: 0.69rem;
						margin-bottom: 0.92rem;
						width: 4.48rem;
						height: 0.94rem;
						padding: 0 0.75rem;
						font-size: 0.32rem;
						border: none;
						margin: 0 auto;
						display: block;
					}
				}
				.right_img:hover {
					width: 5.68rem;
					height: 4.19rem;
					background-image: url('houtai/img/imgmb/首页/收益.png');
					background-size: 100% 100%;
					border: 0.01rem solid;
					border-image: linear-gradient(
							to bottom,
							#e5b3fd,
							#7de7ec
						)
						1 10;
					box-sizing: border-box;
					cursor: default;
				}
			}
		}
	}

	.express_module {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 2rem;
		// position: relative;
		.title_text {
			// width: 10.04rem;
			// height: 0.82rem;
			font-family: Alibaba-PuHuiTi-M;
			font-weight: M;
			font-size: 0.6rem;
			// color: #000000;
			background-image: linear-gradient(
				to right,
				#e0b6fd,
				#7ee6ed
			);
			-webkit-background-clip: text;
			color: transparent;
			margin-bottom: 0.6rem;
			text-align: center;
		}
		.button_text {
			width: 13.86rem;
			height: 3.02rem;
			line-height: 3.02rem;
			background-image: linear-gradient(
				-60deg,
				#6af0e9 0%,
				#edafff 100%
			);
			border-radius: 0.32rem;
			border: none;
			p {
				font-family: Alibaba-PuHuiTi-M;
				font-weight: M;
				font-size: 0.75rem;
				color: #ffffff;
				height: 2.22rem;
				line-height: 2.22rem;
				border: 0.05rem dashed #ffffff;
				border-radius: 0.32rem;
				margin: 0;
			}
		}
	}
	@media (max-width: 750px) {
		.express_module {
			margin-bottom: 0.68rem;
			.title_text {
				font-size: 0.32rem;
				margin-bottom: 0.3249rem;
				width: 7.5rem !important;
			}
			.button_text {
				width: 6.86rem;
				height: 1.58rem;
				line-height: 1.58rem;
				background-image: linear-gradient(
					-60deg,
					#6af0e9 0%,
					#edafff 100%
				);
				border-radius: 0.32rem;
				border: none;
				p {
					font-family: Alibaba-PuHuiTi-M;
					font-weight: M;
					font-size: 0.32rem;
					color: #ffffff;
					height: 1.1615rem;
					line-height: 1.1615rem;
					border: 0.05rem dashed #ffffff;
					border-radius: 0.32rem;
					margin: 0;
					// margin-top: -0.1rem;
					margin-top: -0.08rem;
				}
			}
		}
	}

	.back_address_price_module {
		position: relative;
		// margin-bottom: 0.16rem;
		margin-bottom: 2rem;
		display: block;
		.back_left_center_img {
			display: block;
			width: 7.15rem;
			height: 7.84rem;
			opacity: 0.07;
			background: #e3a0ff;
			// background: #000000;
			filter: blur(0.44rem);
			position: absolute;
			top: -5.99rem;
			left: -2.87rem;
		}
		.address_price_module {
			position: relative;
			width: 16rem;
			height: 4.91rem;
			background: #ffffff;
			// background: pink;
			margin: 0 auto;
			margin-bottom: 0.4rem;
			border-radius: 0.32rem;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			border: 0.01px solid #ededed;
			.address_price_left_desc {
				margin-left: 0.73rem;
				img {
					width: 0.5rem;
					height: 0.5rem;
					margin: 0.71rem 0 0.45rem 0;
				}
				.address_price_title {
					width: 8.4rem;
					// height: 0.42rem;
					font-family: Alibaba-PuHuiTi-B;
					font-weight: B;
					font-size: 0.3rem;
					color: #000000;
					margin-bottom: 0.24rem;
				}
				.address_price_desc {
					// width: 5.52rem;
					// height: 0.22rem;
					width: 8.78rem;
					font-family: Alibaba-PuHuiTi-R;
					font-weight: R;
					font-size: 0.16rem;
					color: #999999;
				}
			}
			.address_price_right_img {
				img {
					width: 4.1902rem;
					height: 4.1902rem;
					// transform: rotate(-7deg);
					margin: 0.4992rem 1.059rem 0.2206rem 0;
				}
			}
		}
	}
	.mb_back_address_price_module {
		display: none;
	}
	@media (max-width: 750px) {
		.back_address_price_module {
			display: none;
		}
		.mb_back_address_price_module {
			display: block;
			position: relative;
			margin-bottom: 1.6018rem;
			.back_left_center_img {
				display: none;
			}
			.address_price_module {
				width: 6.86rem;
				// height: 6.78rem;
				height: 100%;
				background: #ffffff;
				margin-bottom: 0.4rem;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				border-radius: 0.32rem;
				margin: 0 auto;
				margin-bottom: 0.98rem;
				padding-bottom: 0.1739rem;
				.address_price_right_img {
					img {
						width: 4.7923rem;
						height: 4.7923rem;
						transform: rotate(-1deg);
						margin-bottom: 0.2472rem;
					}
				}
				.address_price_left_desc {
					// margin-left: 0.73rem;
					.mb_price_title {
						display: flex;
						flex-direction: row;
						img {
							width: 0.44rem;
							height: 0.44rem;
							margin-right: 0.16rem;
						}
						.address_price_title {
							width: 5.62rem;
							word-break: break-all;
							// height: 0.5rem;
							font-family: Alibaba-PuHuiTi-B;
							font-weight: B;
							font-size: 0.36rem;
							color: #000000;
							margin-bottom: 0.1266rem;
						}
					}

					.address_price_desc {
						width: 6.22rem;
						font-family: Alibaba-PuHuiTi-R;
						font-weight: R;
						font-size: 0.28rem;
						color: #999999;
						margin: 0;
						word-break: break-all;
					}
				}
			}
		}
	}

	.gift_module {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-bottom: 2rem;
		p {
			margin: 0;
		}
		.title_text_gift {
			// width: 8.74rem;
			height: 1.04rem;
			font-family: YouSheBiaoTiYuan;
			font-size: 0.8rem;
			color: #000000;
		}
		.span_text_gift {
			// width: 7.48rem;
			height: 0.3rem;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			font-size: 0.22rem;
			color: #999999;
			margin: 0.32rem 0 0.8rem 0;
		}
		.el-button {
			// width: 4.03rem;
			height: 0.92rem;
			background-image: linear-gradient(
				-60deg,
				#6af0e9 0%,
				#edafff 100%
			);
			border-radius: 0.46rem;
			font-family: PingFangSC-Semibold;
			font-weight: 600;
			font-size: 0.24rem;
			color: #ffffff;
			border: none;
			padding: 0 1.42rem;
			box-shadow: 0 0.2rem 0.3rem #cccccc;
		}
		.four_gift_bottom {
			margin-top: 1.92rem;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			.four_gift_item {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-right: 0.16rem;
				img {
					width: 3.88rem;
					height: 2.0913rem;
					margin-bottom: 0.1787rem;
				}
				.item_title {
					height: 0.38rem;
					font-family: Womby-Regular;
					font-weight: 400;
					font-size: 0.32rem;
					color: #000000;
					letter-spacing: 0.01rem;
					margin-bottom: 0.32rem;
				}

				.item_desc {
					height: 0.75rem;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					font-size: 0.18rem;
					color: #666666;
					text-align: center;
				}
			}
		}
	}

	@media (max-width: 750px) {
		.gift_module {
			padding-bottom: 0.01rem;
			p {
				margin: 0;
			}
			.title_text_gift {
				font-size: 0.54rem;
				width: 6.3rem;
				height: 100%;
				text-align: center;
			}
			.span_text_gift {
				// height: 0.9rem;
				height: 100%;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				font-size: 0.32rem;
				text-align: center;
				margin: 0.16rem 0.32rem 0.4rem;
			}
			.el-button {
				// width: 4.48rem;
				// width: 100%;
				height: 0.94rem;
				border-radius: 0.47rem;
				font-size: 0.32rem;
				padding: 0 1.42rem;
			}
			.four_gift_bottom {
				margin-top: 1.23rem;
				width: 6.86;
				flex-wrap: wrap;
				.four_gift_item {
					margin-right: 0.14rem;
					img {
						width: 3.36rem;
						height: 100%;
						margin-bottom: 0.24rem;
					}
					.item_title {
						height: 0.38rem;
						font-family: Womby-Regular;
						font-weight: 400;
						font-size: 0.32rem;
						color: #000000;
						letter-spacing: 0.01rem;
						margin-bottom: 0.32rem;
					}

					.item_desc {
						width: 3.36rem;
						min-height: 1.3rem;
						margin-bottom: 0.62rem;
						font-size: 0.25rem;
						word-break: break-all;
					}
				}
			}
		}
	}

	.partner_module {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		// margin-bottom: 1.4043rem;
		margin-bottom: 1.2rem;
		.partner_title {
			height: 1.04rem;
			font-family: YouSheBiaoTiYuan;
			font-size: 0.8rem;
			color: #000000;
			letter-spacing: 0.055rem;
			margin: 0;
			margin-bottom: 1.22rem;
		}
		.partner_img {
			display: block;
			// img {
			// 	width: 3.88rem;
			// 	height: 2.14rem;
			// }
			.partner_img_div {
				width: 3.88rem;
				height: 2.14rem;
				float: left;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-bottom: 1.01rem;
				margin-right: 0.16rem;
			}
			.partner_img_1 {
				width: 2.5rem;
				// height: 1.18rem;
			}
			.partner_img_2 {
				width: 3.39rem;
				// height: 0.9077rem;
			}
			.partner_img_3 {
				// width: 0.93rem;
				height: 1.31rem;
			}
			.partner_img_4 {
				width: 2.5rem;
				// height: 1.18rem;
			}
			// display: flex;
			// flex-direction: row;
			// justify-content: space-around;
			// flex-wrap: wrap;
			// width: 15.61rem;
			// img {
			// 	width: 1.29rem;
			// 	height: 1.27rem;
			// 	margin-right: 0.96rem;
			// }
			// img:nth-child(7n) {
			// 	margin-right: 0;
			// }
		}
		.mb_partner_img{
			display: none;
		}
		@media (max-width: 750px) {
		.partner_img {
			display: none;
		}
		.mb_partner_img {
			display: block;
			margin-bottom: 0.42rem;

				// img {
				// 	width: 3.88rem;
				// 	height: 2.14rem;
				// }
				.partner_img_div {
					width: 1.56rem;
					height: 1.56rem;
					float: left;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-bottom: 0.59rem;
					margin-right: 0.16rem;
				}
				.partner_img_1 {
					width: 100%;
					// height: 1.18rem;
				}
				.partner_img_2 {
					// width: 1.4416rem;
					// height: 0.9077rem;
					width: 100%;
				}
				.partner_img_3 {
					// width: 0.93rem;
					// height: 1.31rem;
					width: 100%;
				}
				.partner_img_4 {
					// width: 2.5rem;
					// height: 1.18rem;
					width: 100%;
				}
		}
	}
	}
	// @media (max-width: 750px) {
	// 	.partner_img {
	// 		display: none;
	// 	}
	// 	.mb_partner_img {
	// 		display: block;
	// 		margin-bottom: 0.42rem;

	// 			// img {
	// 			// 	width: 3.88rem;
	// 			// 	height: 2.14rem;
	// 			// }
	// 			.partner_img_div {
	// 				width: 1.56rem;
	// 				height: 1.56rem;
	// 				float: left;
	// 				display: flex;
	// 				justify-content: center;
	// 				align-items: center;
	// 				margin-bottom: 0.59rem;
	// 				margin-right: 0.16rem;
	// 			}
	// 			.partner_img_1 {
	// 				width: 2.5rem;
	// 				// height: 1.18rem;
	// 			}
	// 			.partner_img_2 {
	// 				width: 3.39rem;
	// 				// height: 0.9077rem;
	// 			}
	// 			.partner_img_3 {
	// 				// width: 0.93rem;
	// 				height: 1.31rem;
	// 			}
	// 			.partner_img_4 {
	// 				width: 2.5rem;
	// 				// height: 1.18rem;
	// 			}
	// 	}
	// }

	.contact_us_module {
		width: 19.2rem;
		height: 4.31rem;
		background-image: linear-gradient(
			-60deg,
			#6af0e9 0%,
			#edafff 100%
		);
		display: flex;
		flex-direction: column;
		align-items: center;
		.contanct_title {
			// width: 2.89rem;
			height: 1.04rem;
			font-family: YouSheBiaoTiYuan;
			font-size: 0.8rem;
			color: #ffffff;
			letter-spacing: -0.0156rem;
			margin: 0;
			margin: 0.6rem 0;
		}
		.contact_input {
			width: 16rem;
			height: 1.47rem;
			line-height: 1.47rem;
			background: #ffffff;
			border-radius: 0.12rem;
			display: block;
			.email {
				width: 0.332rem;
				height: 0.4rem;
				font-family: PingFangSC-Semibold;
				font-weight: 600;
				font-size: 0.28rem;
				color: #000000;
				letter-spacing: -0.0054rem;
				margin-left: 0.84rem;
				margin-right: 1.58rem;
			}
			.bottom_img {
				img {
					height: 0.33rem;
					width: 0.33rem;
					margin-right: 0.24rem;
					vertical-align: middle;
					margin-top: -0.1rem;
				}
				.bottom_icon3 {
					margin-right: 0.6rem;
				}
			}
			.img_left {
				border-left: 0.02rem solid #6af0e9;
				margin: auto 0;
				margin-right: 1.77rem;
				// height: 0.6rem;
				// display: inline-block;
			}

			.img_center {
				width: 1.54rem;
				height: 0.34rem;
				font-family: Womby-Regular;
				font-weight: 400;
				font-size: 0.28rem;
				color: #000000;
				letter-spacing: -0.0054rem;
				background-image: linear-gradient(
					to right,
					#edafff,
					#6af0e9
				);
				-webkit-background-clip: text;
				color: transparent;
				margin-right: 3.6813rem;
			}
			.img_right {
				// margin-right: 0.932rem;
				width: 0.49rem;
				height: 0.49rem;
				vertical-align: middle;
				margin-top: -0.12rem;
				// opacity: 0;
				// background: #000000;
			}
		}
		.mb_contact_input {
			display: none;
		}
	}
	@media (max-width: 750px) {
		.contact_us_module {
			width: 100%;
			height: 4.58rem;
			background-image: linear-gradient(
				-60deg,
				#6af0e9 0%,
				#edafff 100%
			);
			display: flex;
			flex-direction: column;
			align-items: center;
			.contanct_title {
				margin: 0;
				margin: 0.4rem 0 0.16rem;
				height: 0.7rem;
				font-size: 0.54rem;
				letter-spacing: -0.0105px;
			}
			.contact_input {
				display: none;
			}
			.mb_contact_input {
				display: block;
				width: 5.83rem;
				height: 1.47rem;
				// line-height: 1.47rem;
				// background: #ffffff;
				border-radius: 0.12rem;
				display: flex;
				flex-direction: column;
				.email_top {
					width: 5.83rem;
					height: 0.9rem;
					line-height: 0.9rem;
					background: rgba(255, 255, 255, 0.1);
					border: 0.005rem solid #ffffff;
					border-radius: 0.12rem;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					font-size: 0.3rem;
					letter-spacing: 0;
					margin: 0;
					padding-left: 0.24rem;
					box-sizing: border-box;
					margin-bottom: 0.14rem;
				}
				.input_center {
					width: 5.84rem;
					height: 0.9rem;
					line-height: 0.9rem;
					background: #ffffff;
					border-radius: 0.12rem;
					padding-left: 0.24rem;
					box-sizing: border-box;
					margin-bottom: 0.4rem;
					.img_center {
						width: 1.76rem;
						height: 0.38rem;
						font-family: Womby-Regular;
						font-weight: 400;
						font-size: 0.32rem;
						color: #000000;
						letter-spacing: -0.0054rem;
						background-image: linear-gradient(
							to right,
							#edafff,
							#6af0e9
						);
						-webkit-background-clip: text;
						color: transparent;
						margin-right: 3.15rem;
					}
					.img_right {
						width: 0.44rem;
						height: 0.44rem;
						vertical-align: middle;
						margin-top: -0.12rem;
						margin: 0 0.24rem 0.23rem
							0.23rem 0;
					}
				}

				.bottom_img {
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: center;
					img {
						height: 0.6rem;
						width: 0.6rem;
						margin-right: 0.4rem;
						vertical-align: middle;
						// margin-top: -0.1rem;
					}
					img:last-child {
						margin-right: 0rem;
					}
					// .bottom_icon3 {
					// 	margin-right: 0.6rem;
					// }
				}
			}
		}
	}
}
// @media (max-width: 750px) {
// 	.app_main {
// 		// background: #f8f8f8;
// 		background: #ffffff;
// 	}
// }
</style>