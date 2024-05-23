<script lang="ts" setup>
const props = defineProps<{
    name: string
}>()
</script>

<template>
    <article class="poke">
        <img
            :src="`https://img.pokemondb.net/artwork/${props.name}.jpg`"
            :alt="props.name"
            class="poke__img"
        >
        <h3 class="poke__name">
            <RouterLink
                :to="`/poke/${props.name}`"
                class="poke__name-link"
            >
                {{ props.name }}
            </RouterLink>
        </h3>
    </article>
</template>

<style scoped>
.poke {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px;
    border: 1px solid var(--color-border);
    border-radius: 16px;
    overflow: hidden;
}

.poke__img {
    border-radius: 8px;
    width: 100%;
    height: 300px;
    object-fit: contain;
}

.poke__name {
    text-align: center;
    margin: 15px 0;
}

.poke__name-link:before {
    position: absolute;
    inset: 0;
    content: "";
}

.poke__name-link:hover {
    text-decoration: none;
}
</style>