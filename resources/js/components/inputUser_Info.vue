<script setup>
import { useBookingStore } from "@/js/stores/BookingStore.js";
let booking = useBookingStore();

defineProps({
  name: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  required_data: {
    type: Boolean,
  },
  type: {
    type: String,
    default: "text",
    required: false,
  },
  isEmpty: {
    type: Boolean,
    required: true,
  },
});
</script>
<template>
  <div class="flex space-x-2 justify-center">
    <div class="lg:flex lg:items-center mb-6">
      <div class="ml-5 lg:ml-3 mt-3 lg:w-1/3">
        <label class="block font-bold text-left lg:text-left mb-1 lg:mb-0 pr-4">
          {{ caption }}
          <span class="text-red-900" v-if="required_data">*</span>
        </label>
      </div>
      <div class="ml-3 mt-3 lg:w-2/3 mr-6 lg:mr-12">
        <input
          v-model="booking.user_info[name]"
          :name="name"
          class="lg:w-96 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          :type="type"
          :class="{ 'border-red-500': isEmpty && required_data }"
        />
      </div>
    </div>
  </div>
</template>
