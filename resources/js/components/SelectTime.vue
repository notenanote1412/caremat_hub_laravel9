<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import TimeBooking from "../components/TimeBooking.vue";
import { useBookingStore } from "@/js/stores/BookingStore.js"
import safeJsonStringify from "safe-json-stringify";

let booking = useBookingStore()

if (JSON.parse(localStorage.getItem("services"))) {
  booking.$patch({
    services: JSON.parse(localStorage.getItem("services")),
  });
} else {
  // error have to have services selected
  // redirect to home
}

if (JSON.parse(localStorage.getItem("reference"))) {
  booking.$patch({
    reference: JSON.parse(localStorage.getItem("reference")),
  });
} else {
  // error have to have services selected
  // redirect to home
}

if (JSON.parse(localStorage.getItem("select_date"))) {
  booking.$patch({
    select_date: JSON.parse(localStorage.getItem("select_date")),
  });
} else {
  // error have to have services selected
  // redirect to home
}

if (JSON.parse(localStorage.getItem("select_date"))) {
  booking.$patch({
    select_date: JSON.parse(localStorage.getItem("select_date")),
  });
} else {
  // error have to have services selected
  // redirect to home
}

if (JSON.parse(localStorage.getItem("user_info"))) {
  booking.$patch({
    user_info: JSON.parse(localStorage.getItem("user_info")),
  });
} else {
  // error have to have services selected
  // redirect to home
}

let isTimeDisabled = ref(false);

function checkValidTimeSlot(e) {
   //console.log(isTimeDisabled.value);
  // show แจ้งเตือน ว่าให้เลือก อย่างน้อย 1 รายการ
  if (booking.select_date.slot_date == '') {
    e.preventDefault();
    isTimeDisabled.value = true;
  } else {
    isTimeDisabled.value = false;
  }
}

function checkBoxChange() {
  localStorage.setItem('select_date', safeJsonStringify(booking.select_date))

  isTimeDisabled.value = false;

}

</script>

<template>
  <section class="flex justify-center py-2">
    <div class="container md:pt-2 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <div class="flex flex-col w-full xl:w-full justify-center lg:items-center overflow-y-hidden">
        <h1
      class="my-2 text-2xl md:text-3xl text-white opacity-85 font-bold leading-tight text-center md:text-left"
    >
      เลือก
      <span
        class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500"
      >
      วัน-เวลา
      </span>
      ที่ท่านต้องการ
    </h1>
    <span class="text-lg text-lime-500">บริการที่ท่านเลือก {{ booking.services.join(", ") }} </span>
    <div class="flex flex-col justify-center">
      <TimeBooking  @change="checkBoxChange()"></TimeBooking>
      <div v-if="isTimeDisabled" class="leading-normal text-base md:text-xl mb-8 text-center lg:mt-8 mt-4" ><span class="text-red-500">เลือกช่วงเวลาอย่างน้อย 1 ช่วงเวลา</span></div>
      <div class="flex space-x-2 justify-center ">
        <div class="my-2">
          <div class="flex flex-row lg:flex lg:flex-row mx-2 ">
            <RouterLink
            to="/services" >
              <button
                role="link"
                class="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500
           text-white font-bold py-2 px-6 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              >
                <h6 class="text-base">ย้อนกลับ</h6>
              </button>
            </RouterLink>
            <div class="mx-8"></div>
            <RouterLink
            to="/inputform" >
              <button
                :disabled="isTimeDisabled"
                @click="checkValidTimeSlot"
                role="link"
                class="disabled:bg-gray-300 disabled:hover:bg-gray-300 disabled:cursor-not-allowed bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500
           text-white font-bold py-2 px-6 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              >
               ถัดไป
              </button>
            </RouterLink>
          </div>
          <RouterView class="p-3" />
        </div>
      </div>
    </div>
      </div>
    </div>
  </section>
</template>
