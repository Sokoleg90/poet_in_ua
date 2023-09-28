<template>
    <button class="mt-3 max-w-full bg-gray-800 text-white hover:bg-gray-200 hover:text-black" type="submit">{{title}}</button>
</template>

<script setup>
const props = defineProps({
    title: String,
})
</script>

<style lang="scss" scoped>

</style>
