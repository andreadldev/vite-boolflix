<script>
import axios from "axios";
import { store } from '../js/store';

export default {
    data() {
        return {
            store,
            key: '01ec531f2d0136f3747724d7db11da55',
            movie: 'Back to the future'
        }
    },
    methods: {
        search() {
            axios.get("https://api.themoviedb.org/3/search/movie?api_key="+this.key+"&query="+this.movie).then((resp) => {
            store.example = resp.data;
            console.log(store.example)
            }
        );
        }
    }
}
</script>

<template>
    <input type="text">
    <button @click="search()">premi</button>
</template>

<style lang="scss" scoped>
</style>
