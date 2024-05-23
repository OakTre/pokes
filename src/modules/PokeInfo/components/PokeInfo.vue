<script setup lang="ts">
import { usePokeInfoStore } from '../store/usePokeInfoStore'
import { computed, onMounted} from 'vue'

const pokeInfoStore = usePokeInfoStore()
const info = computed(() => pokeInfoStore.info)

onMounted(async () => {
    await pokeInfoStore.getPokemonInfo()
})
</script>

<template>
    <div class="card">
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
                    weight: {{ info.weight }}
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
</style>