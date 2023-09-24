<template>
    <div class="flex flex-col justify-center items-center h-screen bg-gray-500">
        <h1 class="text-8xl text-white">404</h1>
        <h2 class="text-3xl text-gray-300">Вибачте, ми не знайшли цю сторінку</h2>
        <router-link :to="{name: 'main'}">
            <button class="mt-5 bg-gray-700 text-white">Перейти на головну сторінку</button>
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
