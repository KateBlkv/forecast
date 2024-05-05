<script setup>
import {computed} from 'vue'
import {capitalizeFirstLetter} from '../utils'
import useWeather from "@/hooks/useWeather.js";
import store from "@/store/index.js";

// Вынес логику в хук
const { city, getWeather } = useWeather()

const today = new Date().toLocaleString('en-EN', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric'})

const props = defineProps({
  data: {
    type: [Object, null],
    required: true
  }
})

const weather = computed(() => props.data?.weather[0])
const mainData = computed(() => props.data?.main)
const sysData = computed(() => props.data?.sys)
// Добавил свойство с текстом ошибки
const error = computed(() => store.getters.getError)
</script>

<template>
  <div class="info">
    <div class="city-inner">
<!--      Добавил класс has-error-->
      <input type="text" class="search" :class="error && 'has-error'" v-model="city" @keyup.enter="getWeather">
<!--      Добавил элемент с текстом ошибки-->
      <div v-if="error" class="error-msg">{{ error }}</div>
    </div>
    <div v-if="weather" class="summary">
      <div
          :style="`background-image: url('/src/assets/img/weather-main/${weather.description}.png');`"
          class="pic-main"
      />
      <div class="weather">
        <div class="temp">
          {{ Math.round(mainData?.temp) }} °C
        </div>
        <div class="weather-desc text-block">
          {{ capitalizeFirstLetter(weather.description) }}
        </div>
      </div>
      <div class="city text-block">
        {{ data?.name }},
        {{ sysData?.country }}
      </div>
      <div class="date text-block">
        {{ today }}
      </div>
    </div>
  </div>
</template>
