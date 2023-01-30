<script setup>
import { useBookingStore } from "@/js/stores/BookingStore.js";

let booking = useBookingStore();

function select_time_change(date, day, time) {
  booking.select_date.slot_date = date
  booking.select_date.slot_day = day
  booking.select_date.slot_time = time

}

defineProps({
  date: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  class_add: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <label class="cursor-pointer">
    <input
      @change="select_time_change(date, day, time)"
      v-model="booking.select_date.date_time"
      type="radio"
      class="peer sr-only"
      :value="`${date} ${time}`"
      name="time_slot"
    />
    <div
      class="grid place-items-center rounded-lg bg-[#ffffff] border-2 border-purple-500  m-2 px-2 py-1 hover:bg-purple-500 text-purple-500 ring-1 ring-transparent transition-all hover:text-white hover:shadow peer-checked:bg-purple-500 peer-checked:text-white peer-checked:ring-purple-400 peer-checked:ring-offset-2"
      :class="class_add"
    >
      <div class="">
        <span class="text-xl font-medium">{{ time }}</span>
      </div>
    </div>
  </label>
</template>
