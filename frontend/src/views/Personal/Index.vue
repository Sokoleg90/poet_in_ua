<template>
    <div>
<h1>Ваш особистий кабінет для написання віршів</h1>
        <router-link :to="{name: 'personal.create'}">
            <MyButton title="Написати вірша"></MyButton>
        </router-link>
    </div>
</template>

<script>
import MyButton from "../../components/UI/MyButton.vue";

export default {
    components: {MyButton}

}
</script>

<style lang="scss" scoped>

</style>
