<template>
    <div class="flex flex-col items-center">
        <MyTitle title="Напиши свого вірша"></MyTitle>
        <MyInput title="Назва вірша"></MyInput>
        <MyTextarea title="Вірш"></MyTextarea>
        <MySelect title="Виберіть тематику вірша"></MySelect>
        <MyButton title="Створити"></MyButton>
    </div>
</template>

<script>
import MyInput from "../../components/UI/MyInput.vue";
import MyTextarea from "../../components/UI/MyTextarea.vue";
import MyButton from "../../components/UI/MyButton.vue";
import MyTitle from "../../components/UI/MyTitle.vue";
import MySelect from "../../components/UI/MySelect.vue";

export default {
    components: {MySelect, MyTitle, MyButton, MyTextarea, MyInput}

}
</script>

<style lang="scss" scoped>

</style>
