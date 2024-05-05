<script setup>
// Неиспользуемая переменная
defineProps({
  firstTitle: {
    required: true,
    type: String,
  },
  secondTitle: {
    type: String,
  },
  imgClass: {
    required: true,
    type: String,
  },
  firstValue: {
    required: true,
    type: String,
  },
})
</script>

<template>
  <div class="block-bottom">
<!--    Избавился от блока div.block-bottom-inner за ненадобностью-->
    <div class="block-bottom-pic" :class="'pic-' + imgClass"/>
    <div class="block-bottom-texts">
      <div class="block-bottom-text-block">
        <div class="block-bottom-text-block-title">
          {{ firstTitle }}: {{ firstValue }}
        </div>
        <div class="block-bottom-text-block-desc">
          <slot name="firstText"/>
        </div>
      </div>
      <slot name="additional"/>
    </div>
  </div>
</template>
