<script>
import { store } from './js/store';
import AppHeader from './components/Header.vue';
import searchResults from './components/searchResults.vue';

export default {
    components: {
        AppHeader,
        searchResults
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
    <searchResults/>
</template>

<style lang="scss">
@import "./css/style.scss";
</style>
