<template>
    <div class="mb-2 w-1/2 flex flex-col">
        <span class="ml-5">{{ title }}</span>
        <select>
            <option>
                Про кохання
            </option>
            <option>
                Про природу
            </option>
        </select>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
})
</script>

<style lang="scss" scoped>

</style>
