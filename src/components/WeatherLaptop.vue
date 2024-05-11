<script setup>
import WeatherSummary from "./WeatherSummary.vue"
import Highlights from "./Highlights.vue"
import InfoBottomBlock from "./InfoBottomBlock.vue"

import {computed, onMounted} from 'vue'
import store from "@/store/index.js";
import useWeather from "@/hooks/useWeather.js";

const { getWeather } = useWeather()
onMounted(getWeather)

const coord = computed(() => store.getters.getCoord)
const mainData = computed(() => store.getters.getMainData)
const weatherInfo = computed(() => store.getters.getWeatherInfo)
</script>

<template>
  <div class="sections">
    <div class="section-top">
      <weather-summary :data="weatherInfo"/>
      <highlights :weather-info="weatherInfo"/>
    </div>
    <div class="section-bottom">
      <info-bottom-block img-class="coords" first-title="Longitude" second-title="Latitude" :first-value="coord?.lon">
        <template #firstText>
          Longitude measures distance east or west of the prime meridian.
        </template>
        <template #additional>
          <div class="text-block">
            <div class="block-title">
              Latitude: {{ coord?.lat }}
            </div>
            <div class="text-block-desc">
              Latitude lines start at the equator (0 degrees latitude) and run east and west, parallel to the equator.
            </div>
          </div>
        </template>
      </info-bottom-block>

      <info-bottom-block img-class="humidity" first-title="Humidity" :first-value="`${mainData?.humidity} %`">
        <template #firstText>
          Humidity is the concentration of water vapor present in the air. Water vapor, the gaseous state of water, is
          generally invisible to the human eye.
          <br/><br/>
          The same amount of water vapor results in higher relative humidity in cool air than warm air.
        </template>
      </info-bottom-block>
    </div>
  </div>
</template>
