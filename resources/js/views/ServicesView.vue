<script setup>

import Services from "../components/Services.vue";
import MenuServices from "../components/menuServices.vue";
import AppFooter from "@/js/components/AppFooter.vue";
</script>

<template>
  <div class="min-h-[80vh]">
    <MenuServices />
    <Services />
  </div>
    <!--Footer-->
    <AppFooter />
</template>
