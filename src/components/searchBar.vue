<script>
import axios from "axios";
import { store } from '../js/store';

export default {
    data() {
        return {
            store,
            flag: {
                src: "https://www.countryflagicons.com/FLAT/24/",
                type: '.png'
            },
            poster: 'https://image.tmdb.org/t/p/w92/'
        }
    },
    methods: {
        search() {
            axios.get("https://api.themoviedb.org/3/search/multi?api_key="+store.key+"&language=it"+"&query="+store.movie).then((resp) => {
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
        },
        mediaType(data) {
            if (data.media_type == 'movie') {
                return 'Film'
            }
            else {
                return 'Serie TV'
            }
        }
    }
}
</script>

<template>
    <input type="text" v-model="store.movie" @keyup.enter="search()">
    <button @click="search()">premi</button>
    <ul v-if="store.example.results != 0" v-for="movie in store.example.results">
        <h3>{{movie.title}} {{movie.name}}</h3>
        <li>{{this.mediaType(movie)}}</li>
        <li>Titolo originale: {{movie.original_title}} {{movie.original_name}}</li>
        <div class="lang">
            <li>Lingua:</li>
            <img :src=(flag.src+this.upperCase(movie.original_language)+flag.type) width="24"/>
        </div>
        <li>Voto: {{movie.vote_average}}</li>
        <div>
            <img :src=this.poster+movie.poster_path alt="...">
        </div>
    </ul>
</template>

<style lang="scss" scoped>
.lang {
    display: flex;
    align-items: center;
}

img:before {
    content: ' ';
    display: block;
    position: absolute;
    height: 16px;
    width: 22px;
    background-image: url('src/css/img/missing-flag.jpg');
    background-size: cover;
    background-position: 50%;
}
</style>
