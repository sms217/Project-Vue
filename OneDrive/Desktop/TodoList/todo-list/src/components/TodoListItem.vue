<template>
    <!-- <li v-for="(list, index) in lists" v-bind:key="index">
        {{index}}
        <button @click="del">X</button>
    </li> -->
    <li>
        {{todo.text}}
        <button @click="$emit('remove', todo.id)">X</button>
    </li>
</template>

<script>
export default {
    props:{
        todo:{
            type:Object,
            required:true
        }
    }
}
</script>

<style>

</style>