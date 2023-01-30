<script setup>
import AppNavbar from "@/js/components/AppNavbar.vue";
</script>


<template>
    <div class="h-full">
        <!--Nav-->
        <AppNavbar />

        <!--Main-->
        <RouterView />
    </div>
</template>

<style scope>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

html {
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>
