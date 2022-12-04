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
            this.scroller = this.scroller - 1500;
            event.target.parentElement.scrollTo(this.scroller, 0);
            if (this.scroller < 0) {
                this.scroller = 0
            }
        },
        scrollRight() {
            this.scroller = this.scroller + 1500;
            event.target.parentElement.scrollTo(this.scroller, 0);
            if (this.scroller > 4000) {
                this.scroller = 4000
            }
        },
        cardBlurIn() {
            event.target.parentElement.firstChild.classList.add('filter');
            event.target.parentElement.lastChild.classList.add('opacity');
        },
        cardBlurOut() {
            event.target.parentElement.firstChild.classList.remove('filter');
            event.target.parentElement.lastChild.classList.remove('opacity');
        },
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
                <div class="wrapper" @mouseover="cardBlurIn()" @mouseout="cardBlurOut()">
                    <img class="poster" :src=store.info.poster+movie.poster_path alt="...">
                    <div class="info">
                        <div><h3>{{movie.title}}</h3></div>
                        <div>Titolo originale: {{movie.original_title}}</div>
                        <div class="lang">
                            <span>Lingua:</span>
                            <img :src=(store.info.flag.src+this.upperCase(movie.original_language)+store.info.flag.type) width="24"/>
                        </div>
                        <div>
                            <font-awesome-icon v-for="n in Math.ceil(movie.vote_average / 2)" icon="fa-solid fa-star"/>
                            <font-awesome-icon v-for="n in 5 - Math.ceil(movie.vote_average / 2)" icon="fa-regular fa-star"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <h1 v-if="(store.tvList.results.length > 0)">SERIE TV</h1>
        <div class="row">
            <div class="prev" @click="scrollLeft()"></div>
            <div class="next" @click="scrollRight()"></div>
            <div class="card" v-if="store.tvList.results != 0" v-for="series in store.tvList.results">
                <div class="wrapper" @mouseover="cardBlurIn()" @mouseout="cardBlurOut()">
                    <img class="poster" :src=store.info.poster+series.poster_path alt="...">
                    <div class="info">
                        <div><h3>{{series.name}}</h3></div>
                        <div>Titolo originale: {{series.original_name}}</div>
                        <div class="lang">
                            <span>Lingua:</span>
                            <img :src=(store.info.flag.src+this.upperCase(series.original_language)+store.info.flag.type) width="24"/>
                        </div>
                        <div>
                            <font-awesome-icon v-for="n in Math.ceil(series.vote_average / 2)" icon="fa-solid fa-star"/>
                            <font-awesome-icon v-for="n in 5 - Math.ceil(series.vote_average / 2)" icon="fa-regular fa-star"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

section {
    padding: 0 50px;
    padding-top: 80px;
    width: 100%;
    overflow-x: hidden;
}

h1 {
    padding: 0 10px;
}
.filter {
    filter: blur(5px)
}

.row {
    margin: 50px 0;
    overflow-x: hidden;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    overflow-y: hidden;
    scroll-behavior: smooth;
}

.card {
    text-align: center;
    margin: 0 5px;
    max-height: 400px;
}

.wrapper {
    position: relative;
}

.info {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 20%;
    transform: translateY(-70%);
    left: 50%;
    transform: translateX(-50%);
    div {
        margin: 15px 0;
    }
    text-shadow: 2px 2px 2px black;
    pointer-events: none;
    transition: opacity 0.4s;
    opacity: 0;
}
.opacity {
    opacity: 1;
}
.poster {
    max-width: 300px;
    transition: filter 0.3s;
}

.lang {
    display: flex;
    justify-content: center;
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
    right: 35%;
    transform: translatey(-50%) rotate(45deg);
}
</style>
