<template>
    <div class="flex flex-col items-center pt-6">
        <h1 class="text-4xl mb-3">
            Реєстрація
        </h1>
        <form method="POST">
            <MyInput title="Введіть ваше ім'я"></MyInput>
            <MyInput title="Введіть ваш email"></MyInput>
            <MyInput title="Введіть ваш пароль"></MyInput>
            <MyInput title="Підтвердіть ваш пароль"></MyInput>
            <div class="flex justify-between items-center">
                <router-link :to="{name: 'login'}">
                    <span class="text-white hover:text-amber-400">В мене є акаунт</span>
                </router-link>
                <router-link to="#">
                    <span class="text-white hover:text-amber-400">Забули пароль?</span>
                </router-link>
            </div>
            <MyButton title="Створити акаунт"></MyButton>
        </form>
    </div>
</template>

<script>
import MyInput from "../../components/UI/MyInput.vue";
import MyButton from "../../components/UI/MyButton.vue";

export default {
    components: {MyButton, MyInput}
}
</script>

<style lang="scss" scoped>

</style>

