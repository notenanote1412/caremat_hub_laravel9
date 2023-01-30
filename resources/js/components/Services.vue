<script setup>
import { ref, watch } from "vue";
import { RouterLink, RouterView } from "vue-router";
import ServiceCheckbox from "./ServiceCheckbox.vue";
import { useBookingStore } from "@/js/stores/BookingStore";
import safeJsonStringify from "safe-json-stringify";

let booking = useBookingStore();

if (booking.reference == "") {
  // console.log('not found local');
  booking.reference = makeid(6);
  // console.log(booking);
  localStorage.setItem("reference", safeJsonStringify(booking.reference));
}

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

if (JSON.parse(localStorage.getItem("user_info"))) {
  booking.$patch({
    user_info: JSON.parse(localStorage.getItem("user_info")),
  });
} else {
  // error have to have services selected
  // redirect to home
}

function makeid(
  length,
  letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
) {
  let result = "";
  let characters = letters;
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

let isDisabled = ref(false);

function checkValidServices(e) {
  // console.log(isDisabled.value);
  // show แจ้งเตือน ว่าให้เลือก อย่างน้อย 1 รายการ
  if (booking.services.length == 0) {
    e.preventDefault();
    isDisabled.value = true;
  } else {
    isDisabled.value = false;
  }
}

function checkBoxChange() {
  localStorage.setItem("services", safeJsonStringify(booking.services));

  if (booking.services.length == 0) {
    isDisabled.value = true;
  } else {
    isDisabled.value = false;
  }
}
</script>

<template>
  <div
    class="font-prompt container md:pt-12 mx-auto flex flex-wrap flex-col md:flex-row items-center"
  >
    <div
      class="flex flex-col w-full xl:w-full justify-center lg:items-center overflow-y-hidden"
    >
      <h1
        class="my-2 text-2xl md:text-3xl text-white opacity-85 font-bold leading-tight text-center md:text-left"
      >
        เลือก
        <span
          class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500"
        >
          บริการ
        </span>
        ที่ท่านต้องการ
      </h1>
      <h6
        class="leading-normal text-base md:text-xl mb-8 text-center md:text-left"
      >
        <span class="leading-normal text-base md:text-xl text-red-500"
          >*หมายเหตุ
        </span>
        : ท่านสามารถเลือกได้มากกว่า 1 รายการ
      </h6>

      <form class="">
        <div class="flex items-center justify-center m-2">
          <div class="lg:flex-row lg:grid lg:gap-4 lg:grid-cols-2 lg:ml-8">
            <ServiceCheckbox
              @change="checkBoxChange()"
              value="HIV"
              image="hiv.png"
              caption="ตรวจเลือด เอชไอวี ซิฟิลิส"
            ></ServiceCheckbox>
            <ServiceCheckbox
              @change="checkBoxChange()"
              value="PrEP"
              image="medicine.png"
              caption="รับยาเพร็พ"
            ></ServiceCheckbox>
            <ServiceCheckbox
              @change="checkBoxChange()"
              value="Hormones"
              image="hormones.png"
              caption="ตรวจฮอร์โมนเพศ"
            ></ServiceCheckbox>
            <ServiceCheckbox
              @change="checkBoxChange()"
              value="HepB"
              image="hepatitis-b.png"
              caption="ตรวจ Hep B"
            ></ServiceCheckbox>
            <ServiceCheckbox
              @change="checkBoxChange()"
              value="HepC"
              image="hepatitis-c.png"
              caption="ตรวจ Hep C"
            ></ServiceCheckbox>
            <ServiceCheckbox
              @change="checkBoxChange()"
              value="Counseling"
              image="conversation.png"
              caption="ขอคำปรึกษา อื่นๆ"
            ></ServiceCheckbox>
          </div>
        </div>
        <div
          v-if="isDisabled"
          class="w-64 items-center justify-center border-2 border-white rounded-sm leading-normal text-base md:text-xl mb-8 text-center lg:mt-8 mt-4"
        >
          <span class="text-white">กรุณาเลือกอย่างน้อย 1 รายการ</span>
        </div>
        <div class="flex items-center justify-center m-2 lg:mt-6">
          <RouterLink to="/selecttime">
            <button
              :disabled="isDisabled"
              @click="checkValidServices"
              role="link"
              ref="services_continue"
              class="disabled:bg-gray-300 disabled:hover:bg-gray-300 disabled:cursor-not-allowed bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-6 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              type="button"
            >
              ถัดไป
            </button>
          </RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>
