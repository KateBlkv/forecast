<script setup>
defineProps({
  cardTitle: {
    required: true,
    type: String,
  },
  classNameCard: {
    required: true,
    type: String,
  },
  unit: {
    required: true,
    type: String,
  },
  cardData: {
    type: String,
  },
  cardValue: {
    type: Number,
  },
})
</script>

<template>
  <div class="card-small">
    <div class="small-title">
      {{cardTitle}}
    </div>
    <div class="small-info">
      <div v-if="cardValue" class="small-data">
        <div class="info-main-num">
          {{ Math.round(cardValue) }}
        </div>
        <div class="info-main-text">
          {{unit}}
        </div>
      </div>
      <div class="small-hint">
        <div class="small-pic" :class="'small-pic--' + classNameCard"/>
        <div class="small-text" v-html="cardData"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>