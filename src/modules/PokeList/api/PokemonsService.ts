import api from '@/api'
import type { AxiosResponse } from 'axios'

export default class PokemonsService {
    static async getPokemons(): Promise<AxiosResponse> {
        return api.get('/pokemon')
    }
}