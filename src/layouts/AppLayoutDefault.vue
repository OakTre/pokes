<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
    <TheHeader />
    <main>
        <div class="page-container">
            <slot />
        </div>
    </main>
    <TheFooter />
</template>

<style></style>
