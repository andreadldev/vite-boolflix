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
    <section>
        <div v-if="store.productList.results != 0" v-for="product in store.productList.results">
            <ul v-if="product.media_type != 'person'">
                <li><h3>{{product.title}} {{product.name}}</h3></li>
                <li>{{this.mediaType(product)}}</li>
                <li>Titolo originale: {{product.original_title}} {{product.original_name}}</li>
                <li class="lang">
                    <span>Lingua:</span>
                    <img :src=(store.info.flag.src+this.upperCase(product.original_language)+store.info.flag.type) width="24"/>
                </li>
                <div>
                    <font-awesome-icon v-for="n in Math.ceil(product.vote_average / 2)" icon="fa-solid fa-star"/>
                    <font-awesome-icon v-for="n in 5 - Math.ceil(product.vote_average / 2)" icon="fa-regular fa-star"/>
                </div>
                <li><img :src=store.info.poster+product.poster_path alt="..."></li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    margin-top: 60px;
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
