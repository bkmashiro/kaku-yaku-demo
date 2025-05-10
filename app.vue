<template>
  <NuxtPage />
</template>

<script setup>

</script>

<style>
/* 自定义floating-vue样式 */
.v-popper--theme-tooltip .v-popper__inner {
  background-color: transparent;
  border: none;
  padding: 0;
  border-radius: 0;
  box-shadow: none;
}

.v-popper--theme-tooltip .v-popper__arrow-container {
  display: none;
}

/* 自定义tooltip popper */
.custom-tooltip-popper {
  z-index: 9999;
}

/* 确保popper不会在hover时消失 */
.v-popper__popper--shown {
  visibility: visible !important;
  opacity: 1 !important;
  transition-delay: 0s !important;
}
</style>
