<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import AppFooter from "@/js/components/AppFooter.vue";
import inputUser_Info from "./inputUser_Info.vue";
import Swal from "sweetalert2";
// import safeJsonStringify from "safe-json-stringify";

import { useBookingStore } from "@/js/stores/BookingStore.js";

let booking = useBookingStore();

let errorMessage = ref("กรุณากรอกข้อมูล ชื่อ และ เบอร์ติดต่อ");

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

let isFormDisabled = ref(false);
let check = ref(false);
function checkEmail() {
  // Regular expression to match the phone number format
  // Regular expression to match the email format
  var emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (booking.user_info.email.match(emailRegex)) {
    // Input is a valid phone number or email format

    return true;
  }

  errorMessage.value = "รูปแบบ Email ไม่ถูกต้อง";

  return false;
}
function checkValidForm(e) {
  console.log("checkValidForm");

  errorMessage.value = "กรุณากรอกข้อมูล ชื่อ และ เบอร์ติดต่อ";

  //console.log(isFormDisabled.value);
  // show แจ้งเตือน ว่าให้เลือก อย่างน้อย 1 รายการ
  if (booking.user_info.name == "" || booking.user_info.phone == "") {
    if (booking.user_info.name == "") {
      e.preventDefault();
      check.value = true;
      isFormDisabled.value = true;
      console.log("1" + check.value);
    } else {
      check.value = false;
      isFormDisabled.value = false;
      console.log("1" + check.value);
    }

    if (booking.user_info.phone == "") {
      e.preventDefault();
      check.value = true;
      isFormDisabled.value = true;
      console.log("2" + check.value);
    } else {
      check.value = false;
      isFormDisabled.value = false;
      console.log("2" + check.value);
    }
  } else if (booking.user_info.name && booking.user_info.phone) {
    // Call the checkEmail function
    if (booking.user_info.email != "") {
      if (!checkEmail()) {
        e.preventDefault();
      }
      check.value = false;
      console.log("3" + check.value);
      isFormDisabled.value = false;

      Swal.fire({
        title: "คุณต้องการบันทึกใช่หรือไม่",
        html:`
        บริการ : ${ booking.services.join(", ")} <br>
        วัน : ${ booking.select_date.slot_day} <br>
        วันที่ : ${ booking.select_date.slot_date} <br>
        เวลา : ${ booking.select_date.slot_time} <br>
        ชื่อ : ${ booking.user_info.name } <br>
        เบอร์โทร : ${ booking.user_info.phone} <br>
        อีเมลย์ : ${ booking.user_info.email} <br>
        Line : ${ booking.user_info.line_id} `,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "บันทึก",
        cancelButtonText: "ยกเลิก",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",

      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "บันทึกสำเร็จ!",
            text: "ขอบคุณที่เข้าใช่บริการกับเรา เพื่อสุขภาพที่แข็งแรง.",
            icon:  "success",
            timer: 2000,
            willClose: () => {
                this.$router.push({ path: 'selectdata' });
            }
          }
          );
        }
      });
    }
    check.value = true;
    isFormDisabled.value = true;
  }
  return;
}

function checkPhone() {
  booking.user_info.phone = booking.user_info.phone.replace(/[^0-9]/g, "");

  if (booking.user_info.phone.length > 10) {
    booking.user_info.phone = booking.user_info.phone.substring(0, 10);
  }
}
</script>

<template>
  <div
    class="container p-8 lg:pt-10 mx-auto flex flex-col lg:flex-col items-center font-prompt"
  >
    <!--input test-->
    <div class="text-center grid grid-cols place-items-stretch my-4">
      <label>
        <p
          class="underline decoration-2 my-2 lg:mb-6 text-white lg:text-2xl text-xl"
        >
          กรอกข้อมูลเพื่อยืนยันการจอง
        </p>
        <span class="text-lg text-lime-500"
          >บริการที่ท่านเลือก {{ booking.services.join(", ") }}
        </span>
        <span class="text-lg text-lime-500">
          วันที่ให้คำปรึกษา วัน{{
            booking.select_date.slot_day +
            " " +
            booking.select_date.slot_date +
            " เวลา " +
            booking.select_date.slot_time
          }}</span
        >
      </label>
      <a class="mb-2 text-white lg:text-l text-base mt-4">
        กรุณากรอกข้อมูลให้ครบถ้วน เพื่อให้เจ้าหน้าที่ติดต่อ
      </a>
    </div>
    <div class="flex flex-col justify-center py-2 m-2">
      <div
        class="flex flex-row self-center lg:self-center items-center rounded-md"
        id="form"
      >
        <form class="w-96 text-black lg:w-full p-6 rounded-md bg-white">
          <inputUser_Info
            @input="isFormDisabled = false"
            name="name"
            caption="ขื่อเล่น"
            :required_data="check"
            :isEmpty="isFormDisabled"
          ></inputUser_Info>
          <inputUser_Info
            @input="(isFormDisabled = false), checkPhone()"
            name="phone"
            caption="เบอร์โทร"
            :required_data="check"
            :isEmpty="isFormDisabled"
          ></inputUser_Info>
          <inputUser_Info
            @input="isFormDisabled = false"
            name="line_id"
            caption="Line ID"
            :isEmpty="isFormDisabled"
          ></inputUser_Info>
          <inputUser_Info
            @input="isFormDisabled = false"
            name="email"
            type="email"
            caption="Email"
            :required_data="check"
            :isEmpty="isFormDisabled"
          ></inputUser_Info>
          <div
            v-if="isFormDisabled"
            class="leading-normal text-base md:text-xl mb-8 text-center lg:mt-6 mt-4"
          >
            <span class="text-red-500 text-sm" v-text="errorMessage"></span>
          </div>
          <div class="mt-5 mb-2 lg:w-2/3 lg:ml-36 ml-8">
            <RouterLink to="/selecttime" custom v-slot="{ navigate }">
              <button
                @click="navigate"
                role="link"
                type="submit"
                class="inline-block px-6 py-2.5 text-white rounded mx-4 bg-gradient-to-r from-red-400 to-pink-500 hover:from-pink-500 hover:to-red-500"
              >
                ย้อนกลับ
              </button>
            </RouterLink>

            <button
              :disabled="isFormDisabled"
              @click="checkValidForm"
              role="link"
              type="button"
              class="inline-block px-6 py-2.5 rounded mx-4 text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-500"
            >
              ถัดไป
            </button>
          </div>
        </form>
      </div>
    </div>
    <!--Footer-->
    <AppFooter />
  </div>
</template>
