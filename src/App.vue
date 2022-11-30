<script>
import { store } from './js/store';
import HelloWorld from './components/HelloWorld.vue';

export default {
    components: {
        HelloWorld
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <HelloWorld/>
</template>

<style lang="scss">
@import "./css/style.scss";
</style>
