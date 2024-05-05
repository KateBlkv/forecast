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
        // 1. Переписал с async/await - это стильно, модно, молодежно
        // 2. Добавил отлов ошибок через try/catch - это поможет отловить ошибки вроде упавшего Интернета
        // 3. Поменял условие проверки data.message на response.ok. Это более надежный способ, тк поле ok - это часть стандарта (https://developer.mozilla.org/en-US/docs/Web/API/Response/ok)
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
        // getWeatherData(state){
        //     return state.weatherInfo?.weather ? state.weatherInfo?.weather[0] : {}
        // },
        getMainData(state){
            return state.weatherInfo?.main
        },
        getWeatherInfo(state){
            return state.weatherInfo
        },
        // getSysData(state){
        //     return state.weatherInfo?.sys
        // },
        getCoord(state){
            return state.weatherInfo?.coord
        },
        getError(state){
            return state.error
        },
    },
})

export default store
