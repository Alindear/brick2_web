import axios from "axios"
import router from "./route.js"
import Vue from "vue";

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

const request = axios.create({
    baseURL: '/',
    headers: {
        "Content-Type": 'application/json'
    }
});

request.interceptors.request.use(function (config) {
    return config
}, function (error) {
    notice({
        title: '警告',
        message: error,
        type: 'error'
    })
})

request.interceptors.response.use(function (response) {
    //console.log(response)
    if (response.data.code == '200') {
        return Promise.resolve(response.data);
    } else if (response.data.resultCode === '1') {
        Vue.prototype.$notify({
            title: '提示',
            message: response.data.message,
            type: "warning"
        })
        return Promise.reject(false)
    }
    else {
        Vue.prototype.$notify({
            title: '警告',
            message: response.data.message,
            type: 'error'
        })
        return Promise.reject(false)
    }
}, function (error) {
    Vue.prototype.$notify({
        title: '警告',
        message: error,
        type: 'error'
    })
    return Promise.reject(false)
})

const apis = {
    imgSrc: 'http://localhost:3002',

    // setOrderCompleted: function (data) {
    //     return request({
    //         url: '/api/order/set_order_completed',
    //         method: 'post',
    //         data
    //     })
    // }
}
export default {
    install: function (Vue) {
        Vue.prototype.$rq = apis
    }
}