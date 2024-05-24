import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'
import type { RouteLocationNormalizedLoaded } from "vue-router";
import type { IMappedPokeInfo } from '../types/IPokeInfo'
import PokemonsService from '../api/PokeInfoService'
import mapPokeInfo from '../helpers/mapPokeInfo'


export const usePokeInfoStore = defineStore('pokeInfo', () => {
    const info = ref<IMappedPokeInfo>({
        name: '1',
        weight: 1,
        abilities: '1',
        height: 1,
        stats: [
            { level: 1, name: '1' }
        ],
        items: '1'
    })
    const isLoading = ref<boolean>(false)
    const route: RouteLocationNormalizedLoaded = useRoute()

    async function getPokemonInfo():Promise<void> {
        isLoading.value = true

        try {
            const { data } = await PokemonsService.getInfo(route.params.name as string)

            info.value = mapPokeInfo(data)
        } catch (error) {
            alert('Произошла ошибка')
        } finally {
            isLoading.value = false
        }
    }

    return { info, isLoading, getPokemonInfo }
})
