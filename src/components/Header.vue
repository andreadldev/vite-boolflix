<script>
import { store } from '../js/store';
import searchBar from './searchBar.vue';

export default {
    components: {
        searchBar
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <header>
        <h1>BOOLFLIX</h1>
        <searchBar/>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: var(--header);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    padding: 0 30px;
}
</style>
