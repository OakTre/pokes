import type { RouteLocationNormalized } from 'vue-router'
import { AppLayoutsEnum, AppLayoutToFileMap } from '@/layouts/types'
import type { VueElement } from 'vue'

declare module "vue-router" {
    interface RouteMeta {
        layout?: AppLayoutsEnum;
        layoutComponent?: VueElement;
    }
}

export async function loadLayoutMiddleware(route: RouteLocationNormalized): Promise<void> {
    const { layout } = route.meta
    const normalizedLayoutName = layout || AppLayoutsEnum.default
    const fileName = AppLayoutToFileMap[normalizedLayoutName]
    const fileNameWithoutExtension = fileName.split('.vue')[0]

    const component = await import(`@/layouts/${fileNameWithoutExtension}.vue`)
    route.meta.layoutComponent = component.default
}
