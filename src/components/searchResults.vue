<script>
import { store } from '../js/store';

export default {
    data() {
        return {
            store,
            scroller: 0
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
        },
        scrollLeft() {
            console.log(this.scroller);
            this.scroller = this.scroller - 1500;
            event.target.parentElement.scrollTo(this.scroller, 0);
            if (this.scroller < 0) {
                this.scroller = 0
            }
        },
        scrollRight() {
            console.log(this.scroller);
            this.scroller = this.scroller + 1500;
            event.target.parentElement.scrollTo(this.scroller, 0);
            if (this.scroller > 4000) {
                this.scroller = 4000
            }
        }
    }
}
</script>
<template>
    <section>
        <h1 v-if="(store.movieList.results.length > 0)">FILM</h1>
        <div class="row">
            <div class="prev" @click="scrollLeft()"></div>
            <div class="next" @click="scrollRight()"></div>
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
            <div class="prev"></div>
            <div class="next"></div>
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
    width: 100%;
    overflow-x: hidden;
}

.row {
    overflow-x: hidden;
    width: 100%;
    // width: 10000px;
    // white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    // justify-content: center;
    overflow-y: hidden;
    scroll-behavior: smooth;
}

.card {
    text-align: center;
    margin: 0 5px;
    // max-height: 500px;
    // display: inline-block;
    // width: calc(100% / 6);
}

.poster {
    max-width: 300px;
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

.prev, .next {
    width: 20px;
    height: 20px;
    margin: 10px 0;
    border-radius: 50%;
    background: #ccc;
    position: absolute;
    cursor: pointer;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
}

.prev {
    left: 0;
}

.next {
    right: 0;
}

.prev::after {
    content: '';
    width: 10px;
    height: 10px;
    border-top: 1px solid black;
    border-right: 1px solid black;
    display: block;
    position: absolute;
    top: 50%;
    left: 35%;
    transform: translatey(-50%) rotate(-135deg);
}

.next::before {
    content: '';
    width: 10px;
    height: 10px;
    border-top: 1px solid black;
    border-right: 1px solid black;
    display: block;
    position: absolute;
    top: 50%;
    // left: 50%;
    right: 35%;
    transform: translatey(-50%) rotate(45deg);
}
</style>
