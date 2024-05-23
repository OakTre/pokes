import axios from 'axios'

const config = {
    baseURL: 'https://pokeapi.co/api/v2'
}

const api = axios.create(config)

export default api
