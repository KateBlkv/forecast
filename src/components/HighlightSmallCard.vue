<script setup>
// Неиспользуемая переменная props
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
    // Тип - число
    type: Number,
  },
})
</script>

<template>
  <div class="card-small">
    <div class="card-small-title">
      {{cardTitle}}
    </div>
    <div class="card-small-info">
      <div v-if="cardValue" class="card-small-data">
        <div class="info-main-num">
          {{ Math.round(cardValue) }}
        </div>
        <div class="info-main-text">
          {{unit}}
        </div>
      </div>
      <div class="card-small-hint">
        <div class="card-small-pic" :class="'card-small-pic--' + classNameCard"/>
        <div class="card-small-text" v-html="cardData"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
