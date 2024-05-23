import type { RouteRecordRaw } from 'vue-router'
import { AppLayoutsEnum } from '@/layouts/types'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Главная',
        component: () => import('@/pages/Main')
    },
    {
        path: '/poke/:name',
        name: 'Покемон',
        component: () => import('@/pages/PokeInfo')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Нет такой страницы',
        component: () => import('@/pages/PageNotFound'),
        meta: {
            layout: AppLayoutsEnum.error
        }
    }
]

export default routes