const routerIntroduce = [
    {
        path: '/introduce',
        name: 'introduce',
        alias: ['/'],
        component: () => import("@/views/view-introduce/index.vue"),
    }
]

export default routerIntroduce;