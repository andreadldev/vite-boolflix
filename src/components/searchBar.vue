<script>
import axios from "axios";
import { store } from '../js/store';

export default {
    data() {
        return {
            store,
            flag: "https://www.countryflagicons.com/FLAT/24/",
            png: '.png'
        }
    },
    methods: {
        search() {
            axios.get("https://api.themoviedb.org/3/search/movie?api_key="+store.key+"&language=it"+"&query="+store.movie).then((resp) => {
            store.example = resp.data;
            console.log(store.example.results)
            }
        )
        },
        upperCase(data) {
            if (data == 'en') {
                return 'GB'
            }
            else {
                return data.toUpperCase();
            }
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
        <div class="lang">
            <li>Lingua: </li>
            <img :src=(flag+this.upperCase(movie.original_language)+png) alt="...">
        </div>
        <li>Voto: {{movie.vote_average}}</li>
    </ul>
</template>

<style lang="scss" scoped>
.lang {
    display: flex;
    align-items: center;
}
</style>
