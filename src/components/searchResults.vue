<script>
import { store } from '../js/store';

export default {
    data() {
        return {
            store
        }
    },
    methods: {
        upperCase(lang) {
            if (lang == 'en') {
                return 'GB'
            }
            else if (lang == 'ko') {
                return 'KR'
            }
            else if (lang == 'da') {
                return 'DK'
            }
            else if (lang == 'ar') {
                return 'SA'
            }
            else if (lang == 'ja') {
                return 'JP'
            }
            else if (lang == 'hi') {
                return 'IN'
            }
            else if (lang) {
                return lang.toUpperCase();
            }
        }
    }
}
</script>
<template>
    <section>
        <h1 v-if="(store.movieList.results.length > 0)">FILM</h1>
        <div class="row">
            <div class="card" v-for="movie in store.movieList.results">
                <ul>
                    <li><img class="poster" :src=store.info.poster+movie.poster_path alt="..."></li>
                    <li><h3>{{movie.title}}</h3></li>
                    <li>Titolo originale: {{movie.original_title}}</li>
                    <li class="lang">
                        <span>Lingua:</span>
                        <img :src=(store.info.flag.src+this.upperCase(movie.original_language)+store.info.flag.type) width="24"/>
                    </li>
                    <div>
                        <font-awesome-icon v-for="n in Math.ceil(movie.vote_average / 2)" icon="fa-solid fa-star"/>
                        <font-awesome-icon v-for="n in 5 - Math.ceil(movie.vote_average / 2)" icon="fa-regular fa-star"/>
                    </div>
                </ul>
            </div>
        </div>

        <h1 v-if="(store.tvList.results.length > 0)">SERIE TV</h1>
        <div class="row">
            <div class="card" v-if="store.tvList.results != 0" v-for="series in store.tvList.results">
                <ul>
                    <li><img class="poster" :src=store.info.poster+series.poster_path alt="..."></li>
                    <li><h3>{{series.name}}</h3></li>
                    <li>Titolo originale: {{series.original_name}}</li>
                    <li class="lang">
                        <span>Lingua:</span>
                        <img :src=(store.info.flag.src+this.upperCase(series.original_language)+store.info.flag.type) width="24"/>
                    </li>
                    <div>
                        <font-awesome-icon v-for="n in Math.ceil(series.vote_average / 2)" icon="fa-solid fa-star"/>
                        <font-awesome-icon v-for="n in 5 - Math.ceil(series.vote_average / 2)" icon="fa-regular fa-star"/>
                    </div>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    padding-top: 60px;
}

.row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.hide {
    width: 0;
    height: 0;
    opacity: 0;
}
.card {
    text-align: center;
    width: calc(100% / 6);
}

.poster {
    width: calc(100% - 25px);
    max-height: 400px;
}

.lang {
    display: flex;
    align-items: center;
}

.lang img:before {
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
