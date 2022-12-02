import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    movieList: [],
    tvList: [],
    key: '01ec531f2d0136f3747724d7db11da55',
    inputField: '',
    info: {
        flag: {
            src: "https://www.countryflagicons.com/FLAT/24/",
            type: '.png'
        },
        poster: 'https://image.tmdb.org/t/p/w300/'
    },
    search() {
        axios.get("https://api.themoviedb.org/3/search/movie?api_key="+store.key+"&language=it"+"&query="+store.inputField).then((resp) => {
            store.movieList = resp.data;
            console.log(resp.data.results)
            }
        ),
        axios.get("https://api.themoviedb.org/3/search/tv?api_key="+store.key+"&language=it"+"&query="+store.inputField).then((resp) => {
            store.tvList = resp.data;
            console.log(resp.data.results)
            }
        )
    },

})