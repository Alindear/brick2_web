import VueRouter from 'vue-router';

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/index',
        },
        {
            path: '/index',
            component: () => import('houtai/src/index.vue')
        },


    ],
});
