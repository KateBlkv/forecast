import {createStore} from 'vuex';
import {API_KEY, BASE_URL} from '../constants'

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
        getWeather(context, city){
            fetch(`${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`)
                .then((response)=>response.json())
                .then((data)=> {
                    if(Object.hasOwn(data, 'message')){
                        context.commit('setError', data.message)
                    }else{
                        context.commit('setWeatherInfo', data)
                        context.commit('setError', false)
                    }
                })
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