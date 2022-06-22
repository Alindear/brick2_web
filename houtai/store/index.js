import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        i18n: {
            CN: {
                title: '我们是BRICK 我们认为WEB3.0属于每一位投资者',
                title_top: '我们是BRICK 我们认为WEB3.0',
                title_bottom: '属于每一位投资者',
                placeholder: "请输入域名或地址",
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
                dialog_text: '这个域名不可注册',
                dialog_cancle: '取消',
                dialog_details: '查看详情',


                placeholder_title: "请输入域名或地址",
                search_title: '查询',
                bns: '域名',
                years: '年份',
                payment: '支付方式(使用Brick支付可享受85折优惠)',
                period: '注册时长',
                pricetopay: '注册费用',
                low_long_price: '字符越短价值越高，字符越长价值越低',
                _steps: '注册一个域名需要2个步骤',
                approval: '请求授权',
                approval_desc: '点击“授权”按钮，此为正常的链上交互，保证绝对安全的环境，这是完成域名注册的第一步，会花费极少许Gas费用',
                registration: '请求注册',
                registration_desc: '点击“注册”按钮，并在钱包中确认一笔交易，只有在这笔交易确认成功后，域名注册才算完成，这样你就拥有了一个专属域名。',
                attention_approval: '请注意! 使用brick,usdt购买时需要先授权',
                approval_btn: '请求授权',
                register_btn: '请求注册',
                approval_mb_btn: '授权',
                register_mb_btn: '注册',

                validity_period: '有效期',
                no_data: '暂无数据',

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
                dialog_text: 'This domain cannot be registered',
                dialog_cancle: 'Cancel',
                dialog_details: 'Details',

                payment_option: 'Please select payment option',
                please_connect_wallet: 'Please connect your wallet',
                enter_names: 'Enter query domain names',
                expiry_time: 'Expiry time: ',
                approved: 'approved',

                placeholder_title: "Search names or addresses",
                search_title: 'Search',
                bns: 'BNS',
                years: 'Years',
                payment: 'Payment Options（15% discount with Brick payment）',
                period: 'Registration Period',
                pricetopay: 'Registration price to pay',
                low_long_price: 'The shorter the domain registered, the higher the fee，the longer the domain registered, the lower the fee.',

                _steps: 'Registering  a domain only takes 2 steps',
                approval: 'Request for approval',
                approval_desc: 'Click on “Approval”, which is a standard on-chain interaction within an absolutely secure environment. This is the first step to complete the domain registration and will cost a minimal amount of Gas.',
                registration: 'Request for Registration',
                registration_desc: 'Click on the “Register” button and confirm a transaction in your wallet, only after this transaction is confirmed successfully, the domain name registration will be completed and then you will have your exclusive domain name.',
                attention_approval: 'Attention! Approval is required before using brick, usdt payment',
                approval_btn: 'Approval',
                register_btn: 'Register',
                approval_mb_btn: 'Approval',
                register_mb_btn: 'Register',

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
            }
        },
        language: 'CN',
        languageSelect: '简体中文 (CN)',
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
    },
})
