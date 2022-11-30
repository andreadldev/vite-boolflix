<script>
import { store } from './js/store';
import searchBar from './components/searchBar.vue';

export default {
    components: {
        searchBar
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <searchBar/>
</template>

<style lang="scss">
@import "./css/style.scss";
</style>
