<script setup>
import HighlightSmallCard from "./HighlightSmallCard.vue"

defineProps({
  className: {
    required: true,
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
  cardTitle: {
    required: true,
    type: String,
  },
  unit: {
    required: true,
    type: String,
  },
  smallUnit: {
    type: String,
  },
  smallCardData: {
    type: String,
  },
  cardValue: {
    type: Number,
  },
  classNameCard: {
    type: String,
  },
})
</script>

<template>
  <div class="highlight">
    <div class="card">
      <div class="title">
        {{title}}
      </div>
      <div class="pic" :class="'pic--' + className"/>
      <div class="info">
        <slot/>
      </div>
    </div>
    <highlight-small-card
        :unit="smallUnit"
        :class-name-card="classNameCard"
        :card-title="cardTitle"
        :card-data="smallCardData"
        :card-value="cardValue"/>
  </div>
</template>

<style scoped>

</style>