import VueRouter from 'vue-router';

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/index',
        },
        {
            path: '/index',
            component: () =>
                import(
                    'houtai/src/index.vue'
                ),
        },
        {
            path: '/brick',
            component: () => import('houtai/src/houtai.vue'),
            children: [
                {
                    path: '/brick/myens',
                    component: () =>
                        import(
                            'houtai/src/myens.vue'
                        ),
                },
                {
                    path: '/brick/documentdesc',
                    component: () =>
                        import(
                            'houtai/src/documentdesc.vue'
                        ),
                },
                {
                    path: '/brick/contactus',
                    component: () =>
                        import(
                            'houtai/src/contactus.vue'
                        ),
                },
                {
                    path: '/brick/searchens',
                    component: () =>
                        import(
                            'houtai/src/searchEns.vue'
                        ),
                },
                {
                    path: '/brick/step',
                    component: () =>
                        import(
                            'houtai/src/registration_step.vue'
                        ),
                },





            ],
        },


    ],
});
