import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IPokeInfo } from '../types/IPokeInfo'
import PokemonsService from '../api/PokeInfoService'


export const usePokeInfoStore = defineStore('pokeList', () => {
    const info = ref<IPokeInfo>({})
    const isLoading = ref<boolean>(false)

    const getInfo = async (pokeName: string) => {
        isLoading.value = true

        try {
            const { data } = await PokemonsService.getInfo(pokeName)

            info.value = data
        } catch (error) {
            alert('Произошла ошибка')
        } finally {
            isLoading.value = false
        }

    }

    return { info, isLoading, getInfo }
})
