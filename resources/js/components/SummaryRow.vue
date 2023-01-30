<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <tr>
    <td class="w-[200px] px-3 py-1 text-right font-bold">{{ title }}</td>
    <td class="w-[400px] px-3 py-1 text-left">{{ data }}</td>
  </tr>
</template>
