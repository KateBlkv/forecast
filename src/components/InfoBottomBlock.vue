<script setup>
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
  },
})
</script>

<template>
  <div class="block-bottom">
    <div class="block-bottom-inner">
      <div class="block-bottom-pic" :class="'pic-' + imgClass"/>
      <div class="block-bottom-texts">
        <div class="text-block">
          <div class="block-title">
            {{firstTitle}}: {{ firstValue }}
          </div>
          <div class="text-block-desc">
            <slot name="firstText"/>
          </div>
        </div>
        <slot name="additional"/>
      </div>
    </div>
  </div>
</template>