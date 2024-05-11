import {createStore} from 'vuex';
import {API_KEY, BASE_URL} from '../constants'
import {capitalizeFirstLetter} from "@/utils/index.js";

const store = createStore({
    state(){
        return {
            weatherInfo: null,
            error: false,
        }
    },
    mutations: {
        setWeatherInfo(state, data){
            state.weatherInfo = data
        },
        setError(state, error){
            state.error = error
        },
    },
    actions: {
        async getWeather(context, city) {
            try {
                const response = await fetch(`${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`)
                const data = await response.json()
                if (!response.ok) {
                    context.commit('setError', capitalizeFirstLetter(data.message) || 'Something went wrong')
                    return
                }
                context.commit('setWeatherInfo', data)
                context.commit('setError', '')
            } catch (e) {
                console.log(e)
                context.commit('setError', 'Something went wrong')
            }
        },
    },
    getters: {
        getMainData(state){
            return state.weatherInfo?.main
        },
        getWeatherInfo(state){
            return state.weatherInfo
        },
        getCoord(state){
            return state.weatherInfo?.coord
        },
        getError(state){
            return state.error
        },
    },
})

export default store