import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        i18n: {
            CN: {
                placeholder: "请输入域名或地址",
                placeholder_mb_en: "请输入域名或地址",
                search: '查询',
                register: '注册',
                details: '详情',
                contactus_title: "联系工棚",
                mybns: '我的域名',
                main_net: 'Main 网络',
                connectwallet: '链接钱包 （只读状态）',
                connect: '连接',
                connected: '断开连接',
                mydomain: '我的域名',
                contactus_left: '关于我们',
                text_1: '请至少输入三个字符',
                text_2: '尚未注册，点击按钮去注册该域名(可注册)',
                text_3: '已注册，点击按钮查看注册详情(已注册)',
                dialog_text: '该域名已被购买',
                dialog_cancle: '取消',
                dialog_details: '详情',
                step: '注册步骤',
                register_completed: "您已完成注册",
                register_tips: "*您可以收藏喜欢的域名，以便于浏览器关闭以后重新查看这个域名。",


                placeholder_title: "请输入域名或地址",
                search_title: '查询',
                bns: '域名',
                years: '年份',
                // payment: '支付方式(使用Brick支付可享受85折优惠)',
                payment: '支付方式',
                period: '注册时长',
                pricetopay: '注册费用',
                low_long_price: '字符越短价值越高，字符越长价值越低',
                _steps: '注册一个域名需要2个步骤',
                approval: '请求授权',
                approval_desc: '点击“授权”按钮，此为正常的链上交互，保证绝对安全的环境，这是完成域名注册的第一步，会花费极少许Gas费用',
                registration: '请求注册',
                registration_desc: '点击“注册”按钮，并在钱包中确认一笔交易，只有在这笔交易确认成功后，域名注册才算完成，这样你就拥有了一个专属域名。',
                attention_approval: '请注意! 使用usdt购买时需要先授权',
                approval_btn: '请求授权',
                register_btn: '请求注册',
                approval_mb_btn: '授权',
                register_mb_btn: '注册',


                bns_details: '域名详情',
                domain: '域名：',
                administrator: '管理员：',
                owner: '持有人：',
                registration_period: '注册年限：',
                registration_time: '注册时间：',
                expiration: '过期时间：',

                payment_option: '请选择支付方式',
                please_connect_wallet: '请链接钱包',
                enter_names: '请输入查询的域名',
                expiry_time: '到期时间',
                approved: '已经授权',

                at_least_1_year: '年份最少选择1年',
                illegal_love_exists: '存在非法字符[❤]️，请替换再查询',
                illegal_exists: '存在非法字符，请替换再查询',
                BNB_wallet: '钱包BNB余额不足',
                USDT_wallet: '钱包USDT余额不足',
                BRICK_wallet: '钱包BRICK余额不足',


                index_text1: '链接每一个web3用户',
                index_text2: '链接每一个主流平台场景',
                index_text3: '帮助每一个用户链接他的身份和资产',
                index_text4: '帮助bsc链接更大的增量客户',
                placeholder: "请输入域名或地址",
                bns_ecological: 'Bns生态构成',
                share: '分享赚取收益',
                share_desc: '推荐好友注册域名有奖励！赶紧生成自己的专属链接吧！',
                click_text: '点击生成专属链接',
                btn_gains: '提取收益',
                please_link_wallet: '请链接钱包后查看当前收益',
                first_step: '个性化是表达自我的第一步，而不是：',
                enter_address_text: '转账时请输入能一眼记住的地址',
                enter_address_desc: '再也不用担心长长的、无序的地址了。直接从域名到域名进行交易，简单便捷。',
                good_domain_name: '交易域名，好的域名会比某些NFT更有价值',
                collect_and_sell: '收集、出售.bsc域名，从这些独一无二的域名中获利。',
                first_gift: 'web3的第一份礼物请收下',
                first_gift_desc: '域名抽奖活动，每周一次，周五开奖，周六开始新一轮抽奖，每周四抽奖截止',
                connect_wallet_btn: '请链接钱包',
                gift_one_desc1: '融资计划开启',
                gift_one_desc2: '测试网上线',
                gift_two_desc1: '主网上线',
                gift_two_desc2: '域名交易市场开启',
                gift_two_desc3: 'Share to earn',
                gift_three_desc1: 'BNS代币上线',
                gift_three_desc2: '实现90%的场景覆盖',
                gift_four_desc1: '基于数据的did',
                gift_four_desc2: 'UGC模式社交产品',
                partners: '合作伙伴',
                contact_us: '联系我们',

                index_menu: '首页',
                my_domain: '我的域名',
                document_desc: "文档说明",
                contact_community: '联系社区',


                validity_period: '有效期',
                no_data: '什么也没有哦～',
                // expiration: '过期：',

                search_title: '查询',
                bns: '域名',
                // payment: '支付方式(使用Brick支付可享受85折优惠)',
                payment_option: '请选择支付方式',
                years: '年份',
                period: '注册时长',
                pricetopay: '注册费用',
                low_long_price: '字符越短价值越高，字符越长价值越低',
                _steps: '注册一个域名需要2个步骤',
                approval: '请求授权',
                approval_desc: '点击“授权”按钮，此为正常的链上交互，保证绝对安全的环境，这是完成域名注册的第一步，会花费极少许Gas费用',
                registration: '请求注册',
                registration_desc: '点击“注册”按钮，并在钱包中确认一笔交易，只有在这笔交易确认成功后，域名注册才算完成，这样你就拥有了一个专属域名。',
                // attention_approval: '请注意! 使用brick,usdt购买时需要先授权',
                attention_approval: '请注意! 使用usdt购买时需要先授权',
                approval_btn: '请求授权',
                register_btn: '请求注册',
                approval_mb_btn: '授权',
                register_mb_btn: '注册',

                connectwallet: '链接钱包 （只读状态）',
                connect: '连接',
                connected: '断开连接',
                main_net: 'Main 网络',
                search: '查询',
                search_title: '查询',
                text_1: '请至少输入三个字符',
                team_1: '前阿里产品经理，web2连续创业者。负责bns整体方向和设计把控',
                team_2: '在韩国延世大学读的软件工程研究生，在 probit globall做上币和投研',
                team_3: '兼职麦肯锡的营销助理，三年腾讯营销经验目前负责营销和应用场景洽谈，如小狐狸、Chainlink 等',
                team_4: 'Polimi硕士学位，2年AECOM工作经历，任项目负责人 目前负责商务沟通',
                team_5: 'UI Designer前字节跳动UI设计师 负责bns UE设计',

                gift_successfully: "已参与成功！",
                lucky_this: '本期幸运儿：',
                prize_this: '本期奖品：',
                lucky_the_last: '上期幸运儿：',
                prize_the_last: '上期奖品：',

                congratulations: '恭喜你中奖了！',
                contactTG: '请联系TG @Gon9tou',
                sorry_prize: '很遗憾没中奖',

                user_guide: '使用指南',
                token_economy: '代币经济学',
                developer_use: '开发人员使用',
                team_members: '团队成员',

                current_gains: '当前收益',
                view_results: '查看结果',
                participate_draw: '参与抽奖',

                register_domain_names: '注册域名',
                setDefault: '解析',
                defaultName:'默认域名',
                xufei:'续费',
            },
            EN: {

                title: "We’re Brick, and we believe web 3.0 belongs to every investor.",
                title_top: 'We’re Brick, and we believe web 3.0',
                title_bottom: 'belongs to every investor.',
                // placeholder: 'SEARCH NAMES or ADDRESSES',
                placeholder: 'Search names or addresses',
                search: 'SEARCH',
                // register: 'Register',
                register: 'REGISTER',
                details: 'Details',
                contactus_title: "Contact US",
                mybns: 'My BNS',
                main_net: 'Main net',
                connectwallet: 'Connect wallet（read only）',
                connect: 'Connect',
                connected: 'Connected',
                mydomain: 'My Domain',
                // contactus_left: 'Contact US',
                contactus_left: 'About US',
                text_1: 'Please enter at least three characters',
                // text_2: 'is available，Click the button to register（Registerable）',
                // text_3: 'Registered, click the button for details (registered)',

                text_2: 'is available，Click the button to register',
                text_3: 'Registered, click the button for details',
                dialog_text: 'This domain name has been purchased',
                dialog_cancle: 'Cancel',
                dialog_details: 'Details',
                step: 'STEP',
                register_completed: "COMPLETED",
                register_tips: "You can bookmark your favorite domain name so that you can view it again after the browser is closed",

                payment_option: 'Please select payment option',
                please_connect_wallet: 'Please connect your wallet',
                enter_names: 'Enter query domain names',
                expiry_time: 'Expiry time: ',
                approved: 'approved',

                placeholder_title: "Search names or addresses",
                search_title: 'Search',
                // bns: 'BNS',
                // years: 'Years',
                // payment: 'Payment Options（15% discount with Brick payment）',
                // period: 'Registration Period',
                // pricetopay: 'Registration price to pay',
                // low_long_price: 'The shorter the domain registered, the higher the fee，the longer the domain registered, the lower the fee.',

                // _steps: 'Registering  a domain only takes 2 steps',
                // approval: 'Request for approval',
                // approval_desc: 'Click on “Approval”, which is a standard on-chain interaction within an absolutely secure environment. This is the first step to complete the domain registration and will cost a minimal amount of Gas.',
                // registration: 'Request for Registration',
                // registration_desc: 'Click on the “Register” button and confirm a transaction in your wallet, only after this transaction is confirmed successfully, the domain name registration will be completed and then you will have your exclusive domain name.',
                // attention_approval: 'Attention! Approval is required before using brick, usdt payment',
                // approval_btn: 'Approval',
                // register_btn: 'Register',
                // approval_mb_btn: 'Approval',
                // register_mb_btn: 'Register',

                validity_period: 'Validity Period',
                no_data: 'No Data Available',

                bns_details: 'BNS details',
                domain: 'Domain: ',
                administrator: 'Administrator: ',
                owner: 'Owner: ',
                registration_period: 'Registration period: ',
                registration_time: 'Registration time: ',
                expiration: 'Expiration: ',

                at_least_1_year: 'Select at least 1 year',
                illegal_love_exists: 'Illegal character [❤]️ exists, please replace it and check again',
                illegal_exists: 'Illegal character exists, please replace and check again',
                BNB_wallet: 'Insufficient BNB balance in wallet',
                USDT_wallet: 'Insufficient USDT balance in wallet',
                BRICK_wallet: 'Insufficient BRICK balance in wallet',

                index_text1: 'Link each web3 user',
                index_text2: 'Link to each mainstream platform scenario',
                index_text3: 'Help each user link his identity and assets',
                index_text4: 'Help Bnb Smart Chain(BSC) link with more customers',

                placeholder: 'Please enter your Domain Names or Addresses',
                placeholder_mb_en: 'Enter Names or Address',
                bns: 'BNS',
                share: 'Share To Earn',
                share_desc: 'You will get gains for recommending friends to register domain names! Come on to create your own link!',
                click_text: 'Click to generate exclusive link',
                btn_gains: 'Withdraw Gains',
                please_link_wallet: 'Please link the wallet to view the current revenue',
                first_step: 'Personalization is the first step to expressing yourself,not:',
                enter_address_text: 'Please enter an address which you can remember immediately in transaction',
                enter_address_desc: 'You will no longer worry about the long and unordered addresses. Trading from one Domain Name to another Domain Name directly is simple and convenient.',
                good_domain_name: 'Domain Names can be traded, and a good Domain Name is more valuable than some NFTs.',
                collect_and_sell: 'You can collect and sell “.bsc” Domain Names and profit from these unique Domain Names.',
                first_gift: 'Please accept the first gift from Web3',
                first_gift_desc: 'The lucky draw of Domain Names is held once a week. The results will be announced on Friday. The new round of draw will start on Saturday and end on Thursday.',
                connect_wallet_btn: 'Please connect your wallet',
                gift_one_desc1: 'Start the financing plan',
                gift_one_desc2: 'Launch on the test website',
                gift_two_desc1: '',
                gift_two_desc2: 'Launch on the main website',
                gift_two_desc3: ' Open the Domain Names trading market',
                gift_three_desc1: 'Launch the BNS tokens',
                gift_three_desc2: 'Achieve 90% coverage of scenarios',
                gift_four_desc1: 'did based on data',
                gift_four_desc2: 'UGC social products',

                partners: 'PARTNERS',
                contact_us: 'Contact Us',

                index_menu: 'Index',
                my_domain: 'My Domain Name',
                document_desc: 'Document Description',
                contact_community: 'Contact Community',


                validity_period: 'Validity Period',
                no_data: 'No Data Available ~',
                expiration: 'Expiration: ',

                search_title: 'Search',
                bns_ecological: 'BNS Ecological Structure',
                payment_option: 'Please select payment option',
                // payment: 'Payment Options（15% discount with Brick payment）',
                payment: 'Payment Options',
                years: 'Years',
                period: 'Registration Period',
                pricetopay: 'Registration price to pay',
                low_long_price: 'The shorter the domain registered, the higher the fee，the longer the domain registered, the lower the fee.',

                _steps: 'Registering  a domain only takes 2 steps',
                approval: 'Request for approval',
                approval_desc: 'Click on “Approval”, which is a standard on-chain interaction within an absolutely secure environment. This is the first step to complete the domain registration and will cost a minimal amount of Gas.',
                registration: 'Request for Registration',
                registration_desc: 'Click on the “Register” button and confirm a transaction in your wallet, only after this transaction is confirmed successfully, the domain name registration will be completed and then you will have your exclusive domain name.',
                attention_approval: 'Attention! Approval is required before using usdt payment',
                approval_btn: 'Approval',
                register_btn: 'Register',
                approval_mb_btn: 'Approval',
                register_mb_btn: 'Register',

                connectwallet: 'Connect wallet（read only）',
                connect: 'Connect',
                connected: 'Connected',
                main_net: 'Main net',
                search: 'SEARCH',
                search_title: 'Search',
                text_1: 'Please enter at least three characters',

                team_1: 'Former PM in Ali; Serial entrepreneur of web2; Now responsible for BNS overall direction and design control',
                team_2: 'A software engineering graduate student at Yonsei University in South Korea, doing coin listing and investment research at probit global',
                team_3: 'Part-time marketing assistant of McKinsey,with three years of Tencent marketing experience,currently in charge of business marketing and application scenario negotiation of BNS, such as MetaMask,Chainlink,etc.',
                team_4: 'Graduated from Polimi with a Master degree; 2 years’ experience in AECOM as a project leader;Responsible for business communication',
                team_5: 'Former UI designer in Byte Dancer; Now responsible for UE design of BNS',

                gift_successfully: 'Participated Successfully!',
                lucky_this: 'Lucky user in this round：',
                prize_this: 'Prize in this round：',
                lucky_the_last: 'Lucky user in the last round：',
                prize_the_last: 'Prize in the last round：',

                congratulations: 'Congratulations!',
                contactTG: 'Please contact TG@Gon9tou',
                sorry_prize: 'Sorry, you didn’t win the prize.',

                user_guide: 'User Guide',
                token_economy: 'Token Economy',
                participate_draw: 'Participate in the draw',
                developer_use: 'Developer use',
                team_members: 'Team Members',
                current_gains: 'Current Gains',
                view_results: 'View results',
                register_domain_names: 'Register Domain Names',

                setDefault: 'set',
                defaultName:'Default',
                xufei:'Renewal',
            }
        },
        // language: 'CN',
        // languageSelect: '简体中文 (CN)',
        language: 'EN',
        languageSelect: 'English (EN)',
        cpsFee: [],
        query_search_text: '',
        myLottery: '',
        selectedAccount: '',
        lowerPoolAccounts: '',
        lowerPools: ''
    },
    mutations: {
        showENLanage(state) {
            state.language = 'EN'
            state.languageSelect = 'English (EN)'
            // state.i18n[state.language].approved;
        },
        showCNLanage(state) {
            state.language = 'CN'
            state.languageSelect = '简体中文 (CN)'
        },
        showCNLanageSelect(state) {
            // state.languageSelect = '简体中文 (CN)'
            // _this.$store.state.i18n[
            //     _this.$store.state.language
            // ].approved;
        },
        setQuerySearchText(state, text) {
            state.query_search_text = text
        }
    },
})
