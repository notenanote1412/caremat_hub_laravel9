<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="text-center p-3 m-2 bg-slate-100 shadow-lg rounded-md border-2 border-green-400"
  >
    <h1 class="text-green-700 text-3xl">{{ msg }}</h1>
    <h3 class="text-sm">
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
