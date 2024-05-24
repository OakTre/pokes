import type { IMappedPokeInfo, IPokeInfo } from '../types/IPokeInfo'

const mapPokeInfo = (info: IPokeInfo): IMappedPokeInfo => {
    const {
        name,
        weight,
        height,
        stats,
        held_items,
        abilities
    } = info

    const mappedInfo: IMappedPokeInfo = {
        name,
        weight,
        height,
        stats: stats.map(({stat, base_stat}) => ({
            name: stat.name,
            level: base_stat
        })),
        abilities: abilities.map(({ ability }) => ability.name)?.join(', '),
        items: 'Отсутствуют'
    }

    if (held_items) {
        mappedInfo.items = held_items.map(({item}) => item.name).join(', ')
    }

    return mappedInfo
}

export default mapPokeInfo