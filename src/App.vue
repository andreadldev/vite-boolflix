<script>
import { store } from './js/store';
import AppHeader from './components/Header.vue';
import searchBar from './components/searchBar.vue';

export default {
    components: {
        AppHeader,
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
    <AppHeader/>
    <searchBar/>
</template>

<style lang="scss">
@import "./css/style.scss";
</style>
