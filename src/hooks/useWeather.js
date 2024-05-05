import {ref} from "vue";
import store from "@/store/index.js";

export default function useWeather() {
    const city = ref('Izmir')

    function getWeather() {
        store.dispatch('getWeather', city.value)
    }

    return {city, getWeather}
}
