
const routerNavbar = [
  {
    path: "/chotot",
    name: "home",
    redirect: { name: 'lineup' },
    component: () => import("@/layouts/index.vue"),
    children: [
      {
        path: 'market',
        name: 'market',
        component: () => import("@/views/view-market/index.vue"),
      }, {
        path: 'mission',
        name: 'mission',
        component: () => import("@/views/view-mission/index.vue"),
      }, {
        path: 'lineup',
        name: 'lineup',
        component: () => import("@/views/view-lineup/index.vue"),
        children: [
          {
            path: 'allMatchResult',
            name: 'allMatchResult',
            component: () => import("@/views/view-lineup/child-content/allMatchResult.vue"),
          }
        ]
      }, {
        path: 'gift',
        name: 'gift',
        component: () => import("@/views/view-gift/index.vue"),
      }, {
        path: 'rankings',
        name: 'rankings',
        component: () => import("@/views/view-rankings/index.vue"),
      },
    ]
  },
];

export default routerNavbar;