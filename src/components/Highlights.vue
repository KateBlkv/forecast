<script setup>
import Highlight from "./Highlight.vue"
import { computed } from 'vue'

const windCardData = 'Learn\n' +
    '          <a href="https://www.windy.com/articles/weather-phenomena-what-s-the-difference-between-sustained-winds-and-wind-gusts-10390?satellite,7.787,115.115,5" target="_blank">more</a>\n' +
    '          about gusts'
const tempCardData = 'How hot or cold it really feels'
const cloudCardData = 'The sky fraction obscured by clouds'

import { getPressureMm, getTime } from '../utils'

const props = defineProps({
  weatherInfo: {
    type: [Object, null],
    required: true
  }
})

const timezone = computed(() => props.weatherInfo?.timezone )

const sunriseTime = computed(() => {
  return getTime(props.weatherInfo?.sys?.sunrise + timezone.value)
})
const sunsetTime = computed(() => {
  return getTime(props.weatherInfo?.sys?.sunset + timezone.value)
})

</script>

<template>
  <div class="highlights">
    <div class="title">
      Today's Highlights
    </div>
    <div class="highlights-wrapper">

<!--      тег <template #default> можно выкинуть, если другие теги <template> (для других слотов) не применяются вместе с ним-->

      <highlight title="Wind" unit="m/s" card-title="Wind gusts" class-name="wind" :small-card-data="windCardData"
                 :card-value="weatherInfo?.wind?.gust">
        <div class="card-justify">
          <div class="info-main">
            <div class="info-main-num">
              {{ weatherInfo?.wind?.speed }}
            </div>
            <div class="info-main-text">
              m/s
            </div>
          </div>
          <div class="info-main">
            <div class="info-main-num">
              {{ weatherInfo?.wind?.deg }}
            </div>
            <div class="info-main-text">
              deg
            </div>
          </div>
        </div>
      </highlight>

      <highlight title="Pressure" unit="mm" card-title="Feels like" class-name="pressure" :small-card-data="tempCardData"
                 :card-value="weatherInfo?.main.feels_like">
        <div class="card-centered">
          <div class="info-main">
            <div class="info-main-num">
              {{ getPressureMm(weatherInfo?.main.pressure) }}
            </div>
            <div class="info-main-text">
              mm
            </div>
          </div>
        </div>
      </highlight>

      <highlight title="Sunrise and sunset" unit="%" card-title="Cloudiness" class-name="sun"
                 :small-card-data="cloudCardData" :card-value="weatherInfo?.clouds.all">
        <div class="states">
          <div class="state">
            <div class="state-pic"></div>
            <div class="state-title">
              Sunrise
            </div>
            <div class="state-time">
              {{ sunriseTime }}
            </div>
          </div>
          <div class="state">
            <div class="state-pic state-pic--flipped"></div>
            <div class="state-title">
              Sunset
            </div>
            <div class="state-time">
              {{ sunsetTime }}
            </div>
          </div>
        </div>
      </highlight>

    </div>
  </div>
</template>

<style scoped>

</style>
