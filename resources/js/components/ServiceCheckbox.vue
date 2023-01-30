<script setup>
import { useBookingStore } from "@/js/stores/BookingStore.js"

let booking = useBookingStore()

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  }
});

const imageUrl = new URL(`./imgServices/${props.image}`, import.meta.url).href

</script>

<template>
  <label>
    <div class="flex flex-cols lg:flex lg:flex-row sm:flex-col-1 sm:justify-items-center form-check cursor-pointer">
      <img
        :src="imageUrl"
        class="lg:m-2 mr-2 mt-2 lg:h-20 h-10 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
      />
      <input
        @change="service_change"
        v-model="booking.services"
        type="checkbox"
        :value="value"
        class="form-check-input appearance-none lg:h-8 lg:w-8  h-5 w-5 border-2 border-white rounded-sm checked:bg-slate-600 checked:border-pink-500 focus:outline-none transition duration-200 lg:mt-8 mt-4 lg:ml-2 ml-2 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
      />
      <div class="lg:my-5 my-2 ml-4 font-bold lg:py-4 lg:px-4 py-2 rounded bg-purple-700 hover:bg-purple-600">
        <span class="lg:m-1 m-2 text-white">{{ caption }}</span>
      </div>
    </div>
  </label>
</template>
