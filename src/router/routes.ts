import {RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        redirect: '/research/',
        children: [
            {
                path: 'research/',
                component: () => import('pages/ResearchPage.vue'),
            },
            {
                path: 'reports/',
                component: () => import('pages/ReportsPage.vue'),
            },
            {
                path: 'report/:id',
                component: () => import('pages/ReportPage.vue'),
            },
        ],
    },
    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
    },
]

export default routes
