<template>
    <div class="mb-2 w-1/2 flex flex-col">
        <span class="ml-5">{{ title }}</span>
        <textarea class="rounded-2xl my-3 focus:border" type="text"></textarea>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
})
</script>

<style lang="scss" scoped>

</style>
