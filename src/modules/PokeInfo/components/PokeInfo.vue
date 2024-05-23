<script setup lang="ts">
import { usePokeInfoStore } from '../store/usePokeInfoStore'
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const store = usePokeInfoStore()
const pokeName = route.params.name as string

watch(() => pokeName, () => {
    store.getInfo(pokeName)
}, { immediate: true })
</script>

<template>
    <span v-if="store.isLoading" >Загрузка...</span>
    <div
        v-else
        class="card"
    >
        <img
            :src="`https://img.pokemondb.net/artwork/${store.info.name}.jpg`"
            :alt="store.info.name"
            class="card__img"
        >
        <div class="card__info">
            <h3 class="card__name">
                {{ store.info.name }}
            </h3>
            <ul class="card__list">
                <li class="card__list-item">
                    weight: {{ store.info.weight }}
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