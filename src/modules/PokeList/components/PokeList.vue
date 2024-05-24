<script setup lang="ts">
import { usePokeListStore } from '../store/usePokeListStore'
import { computed, onMounted } from 'vue'
import PokeCard from './PokeCard.vue'

const pokeStore = usePokeListStore()
const isLoading = computed(() => pokeStore.isLoading)

onMounted( async () => {
    await pokeStore.getPokemons()
})
</script>

<template>
    <span v-if="isLoading" >Загрузка...</span>
    <ul v-else class="poke-list">
        <li
            v-for="poke in pokeStore.list"
            :key="poke.name"
            class="poke-list__item"
        >
            <PokeCard
                :name="poke.name"
                class="poke-list__item-card"
            />
        </li>
    </ul>
</template>

<style scoped>
.poke-list {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 16px;
}

.poke-list__item {
    display: flex;
    grid-column: 3 span;
    flex-direction: column;
}

.poke-list__item-card {
    flex-grow: 1;
}
</style>