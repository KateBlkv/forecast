<script setup>
const props = defineProps({
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
    <div class="block-bottom-inner">
      <div class="block-bottom-pic" :class="'pic-' + imgClass"></div>
      <div class="block-bottom-texts">
        <div class="block-bottom-text-block">
          <div class="block-bottom-text-block-title">
            {{firstTitle}}: {{ firstValue }}
          </div>
          <div class="block-bottom-text-block-desc">
            <slot name="firstText"></slot>
          </div>
        </div>
        <slot name="additional"></slot>
      </div>
    </div>
  </div>
</template>