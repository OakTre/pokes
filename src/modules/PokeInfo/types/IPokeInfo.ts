

export interface IPokeInfo {
    weight: number,
    name: string,
    abilities: {
        ability: {
            name: string,
            url: string
        }
    }[],
    base_experience?: string 
    types: [],
    stats: {
        base_stat: number,
        stat: {
            name: string,
            url: string
        }
    }[],
    sprites: [],
    species: object,
    past_types: [],
    past_abilities: [],
    order: number,
    moves: [],
    location_area_encounters: string,
    is_default: boolean,
    id: number,
    held_items?: {
        item: {
            name: string,
            url: string
        }
    }[],
    height: number,
    game_indices?: [],
    forms: [],
    cries: object
}

export interface IMappedPokeInfo {
    name: string,
    weight: number,
    abilities: string,
    height: number,
    stats: {level: number, name: string}[],
    items: string
}