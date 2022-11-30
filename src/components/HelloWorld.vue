<script>
import axios from "axios";
import { store } from '../js/store';

export default {
    data() {
        return {
            store
        }
    },
    methods: {
        search() {
            axios.get("https://api.themoviedb.org/3/search/movie?api_key="+store.key+"&language=it"+"&query="+store.movie).then((resp) => {
            store.example = resp.data;
            console.log(store.example.results)
            }
        );
        }
    }
}
</script>

<template>
    <input type="text" v-model="store.movie" @keyup.enter="search()">
    <button @click="search()">premi</button>
    <ul v-if="store.example.results != 0" v-for="movie in store.example.results">
        <h3>{{movie.title}}</h3>
        <li>Titolo originale: {{movie.original_title}}</li>
        <li>Lingua: {{movie.original_language}}</li>
        <li>Voto: {{movie.vote_average}}</li>
    </ul>
</template>

<style lang="scss" scoped>
</style>
