<script setup>
defineProps({
    circle: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <img
    :src="circle"
    class="absolute lg:opacity-30 opacity-0 z-[0]"
  />
</template>
