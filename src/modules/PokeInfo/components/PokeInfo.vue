<script setup lang="ts">
import { usePokeInfoStore } from '../store/usePokeInfoStore'
import { computed, onMounted} from 'vue'

const pokeInfoStore = usePokeInfoStore()
const info = computed(() => pokeInfoStore.info)
const isLoading = computed(() => pokeInfoStore.isLoading)

onMounted(async () => {
    await pokeInfoStore.getPokemonInfo()
})
</script>

<template>
    <span v-if="isLoading" >Загрузка...</span>
    <div v-else class="card">
        <img
            :src="`https://img.pokemondb.net/artwork/${info.name}.jpg`"
            :alt="info.name"
            class="card__img"
        >
        <div class="card__info">
            <h3 class="card__name">
                {{ info.name }}
            </h3>
            <ul class="card__list">
                <li class="card__list-item">
                    Вес: {{ info.weight }}
                </li>
                <li class="card__list-item">
                    Рост: {{ info.height }}
                </li>
                <li class="card__list-item">
                   Способности: {{ info.abilities }}
                </li>
                <li class="card__list-item">
                    Показатели:
                    <ul>
                        <li
                            v-for="stat in info.stats"
                            :key="stat.name"
                        >
                            {{ stat.name }}: {{ stat.level }}
                        </li>
                    </ul>
                </li>
                <li class="card__list-item">
                    Артефакты: {{ info.items || 'Отсутствуют' }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    gap: 32px;
}

.card__name {
    text-transform: uppercase;
}

.card__img {
    width: 500px;
    height: auto;
    object-fit: contain;
}

.card__list {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.card__list-item {
    position: relative;
    padding-left: 20px;
}

.card__list-item:before {
    position: absolute;
    top: 12px;
    left: 0;
    width: 6px;
    height: 6px;
    background: currentColor;
    border-radius: 50%;
    content: "";
}

.card__list-item ul {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin: 10px 0;
}
</style>