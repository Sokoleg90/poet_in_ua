<template>
    <div class="mb-2 flex flex-col">
        <span class="ml-5">{{ title }}</span>
        <input class="text-black pl-3 rounded-3xl w-72 h-8 enabled:hover:border-gray-400 disabled:opacity-75 my-3 focus:border" type="text">
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
})
</script>

<style lang="scss" scoped>

</style>
