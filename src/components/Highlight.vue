<script setup>
import HighlightSmallCard from "./HighlightSmallCard.vue"
const props = defineProps({
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
  smallCardData: {
    type: String,
  },
  cardValue: {
    type: String,
  },
})
</script>

<template>
  <div class="highlight">
    <div class="card">
      <div class="card-title">
        {{title}}
      </div>
      <div class="card-pic" :class="'card-pic--' + className"></div>
      <div class="card-info">
        <slot></slot>
      </div>
    </div>
    <highlight-small-card :unit="unit" :class-name-card="className" :card-title="cardTitle" :card-data="smallCardData" :card-value="cardValue"/>
  </div>
</template>

<style scoped>

</style>