import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'
import type { RouteLocationNormalizedLoaded } from "vue-router";
import type { IPokeInfo } from '../types/IPokeInfo'
import PokemonsService from '../api/PokeInfoService'


export const usePokeInfoStore = defineStore('pokeInfo', () => {
    const info = ref<IPokeInfo>({})
    const isLoading = ref<boolean>(false)
    const route: RouteLocationNormalizedLoaded = useRoute()

    async function getPokemonInfo():Promise<void> {
        isLoading.value = true

        try {
            const { data } = await PokemonsService.getInfo(route.params.name as string)

            info.value = data
        } catch (error) {
            alert('Произошла ошибка')
        } finally {
            isLoading.value = false
        }
    }

    return { info, isLoading, getPokemonInfo }
})
