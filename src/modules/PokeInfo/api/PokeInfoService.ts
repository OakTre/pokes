import api from '@/api'
import type { AxiosResponse } from 'axios'

export default class PokemonService {
    static async getInfo(pokeName: string): Promise<AxiosResponse> {
        return api.get(`/pokemon/${pokeName}`)
    }
}