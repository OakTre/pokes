<script setup lang="ts">
import { usePokeListStore } from '../store/usePokeListStore'
import { onMounted } from 'vue'
import PokeCard from './PokeCard.vue'

const store = usePokeListStore()

onMounted(() => {
    store.getPokemons()
})
</script>

<template>
    <span v-if="store.isLoading" >Загрузка....</span>
    <ul v-else class="poke-list">
        <li
            v-for="poke in store.list"
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