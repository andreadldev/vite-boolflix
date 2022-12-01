import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    productList: [],
    key: '01ec531f2d0136f3747724d7db11da55',
    inputField: '',
    info: {
        flag: {
            src: "https://www.countryflagicons.com/FLAT/24/",
            type: '.png'
        },
        poster: 'https://image.tmdb.org/t/p/w92/'
    },
    search() {
        axios.get("https://api.themoviedb.org/3/search/multi?api_key="+store.key+"&language=it"+"&query="+store.inputField).then((resp) => {
        store.productList = resp.data;
        console.log(store.productList.results)
        }
    )
    },

})