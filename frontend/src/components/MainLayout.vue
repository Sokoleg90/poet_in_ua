<template>
    <div class="flex flex-col">
        <header class="flex flex-col">
            <div class="flex justify-between items-center h-16 bg-gray-600">
                <div class="mx-3">
                    <span class="text-white font-extrabold">POET IN UKRAINE</span>
                </div>
                <div class="flex justify-around">
                    <router-link :to="{name: 'personal.index'}">
                    <button class="mx-4 bg-gray-800 text-white hover:bg-white hover:text-black rounded-3xl">Особистий кабінет</button>
                    </router-link>
                    <button class="mx-4 bg-gray-800 text-white hover:bg-white hover:text-black rounded-3xl">Реєстрація</button>
                    <button class="mx-4 bg-gray-800 text-white hover:bg-white hover:text-black rounded-3xl">Увійти</button>
                </div>
            </div>
            <!--            Navbar-->
            <div class="flex justify-center items-center h-14 bg-gray-600">
                <div class="mx-7">
                <router-link :to="{name: 'main'}">
                    <span class=" text-white hover:text-black lg:text-2xl sm:text-sm">ГОЛОВНА СТОРІНКА</span>
                </router-link>
                </div>
                <div class="mx-7">
                <router-link :to="{name: 'poets'}">
                    <span class="text-white hover:text-black lg:text-2xl sm:text-sm">НАШІ ПОЕТИ</span>
                </router-link>
                </div>
                <div class="mx-7">
                <router-link :to="{name: 'poems'}">
                    <span class="text-white hover:text-black lg:text-2xl sm:text-sm">ВІРШІ</span>
                </router-link>
                </div>
                <div class="mx-7">
                <router-link :to="{name: 'about'}">
                    <span class="text-white hover:text-black lg:text-2xl sm:text-sm">ПРО НАС</span>
                </router-link>
                </div>
            </div>
            <!--            /Navbar-->
<!--            Banner-->
            <div class="flex justify-center items-center h-28 w-full bg-gray-300 text-center">
                <h1 class="text-gray-800 text-6xl font-serif">Поет в Україні</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-black ml-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
            </div>
<!--            /Banner-->
        </header>
<!--        Main-->
        <div class="bg-gray-100 h-screen">
        <router-view></router-view>
        </div>
<!--        /Main-->
        <footer class="h-12 bg-gray-700 text-white">
            <p>© PoetInUkraine 2023. All rights reserved.</p>
        </footer>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

</style>
