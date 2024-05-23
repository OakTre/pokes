import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IPokemon } from '../types/IPokemon'
import PokemonsService from '../api/PokemonsService'


export const usePokeListStore = defineStore('pokeList', () => {
    const list = ref<IPokemon[]>([])
    const isLoading = ref<boolean>(false)

    async function getPokemons():Promise<void>{
        isLoading.value = true

       try {
           const { data } = await PokemonsService.getPokemons()

           list.value = data.results
       } catch (error) {
           alert('Произошла ошибка')
       } finally {
            isLoading.value = false
       }
    }

    return { list, isLoading, getPokemons }
})