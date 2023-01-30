<script setup>
import AppFooter from "@/js/components/AppFooter.vue";
import { useBookingStore } from "@/js/stores/BookingStore.js";

let booking = useBookingStore();
// reset pinia store to default
booking.$reset();

// delete localStorage
localStorage.clear();

// booking.fetchClinicConfig();
</script>

<template>
  <div
    class="container p-8 mx-auto flex flex-wrap flex-col md:flex-row items-center"
  >
    <!--Left Col-->
    <div
      class="flex flex-col w-full lg:pl-10 lg:w-2/4 justify-center lg:items-start overflow-y-hidden"
    >
      <h1
        class="cursor-pointer my-5 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left"
      >
        <RouterLink to="/">
          <span
            class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500"
          >
            CAREMAT
          </span>

          <span class="text-[#4338CA]">Hub</span>
        </RouterLink>
        <div
          class="font-prompt text-center p-4 font-bold mt-6 text-slate-50 text-xl lg:text-4xl border-2 rounded-lg"
        >
          รวมบริการสุขภาพจาก CAREMAT
        </div>
        <div class="mt-5 lg:mt-7">
          <RouterLink
            href=""
            type="button"
            class="font-prompt py-2.5 px-5 mb-3 text-base lg:text-xl text-white focus:outline-none bg-gradient-to-r from-rose-500 via-red-500 to-pink-500 rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:text-white focus:z-10 focus:ring-4"
            to="/services"
          >
            จองให้คำปรึกษาออนไลน์
          </RouterLink>
        </div>
        <div class="lg:mt-3">
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdngz6zTfmkdnV7yZ0iXQYIR51aSCBBlVzZSweIc5gOM3Dw6w/viewform"
            type="button"
            class="font-prompt py-2.5 px-5 mb-3 text-base lg:text-xl text-white focus:outline-none bg-gradient-to-r from-green-500 via-lime-500 to-lime-300 rounded-lg hover:from-emerald-400 hover:to-teal-600 hover:text-white focus:z-10 focus:ring-4"
          >
            จองอุปกรณ์ป้องกัน
          </a>
          <a
            target="_blank"
            href="https://caremat.actse-clinic.com/questionnaire/questionnaire.php"
            type="button"
            class="font-prompt py-2.5 px-5 mb-3 lg:ml-3 text-base lg:text-xl text-white focus:outline-none bg-gradient-to-r from-green-500 via-lime-500 to-lime-300 rounded-lg hover:from-emerald-400 hover:to-teal-600 hover:text-white focus:z-10 focus:ring-4"
          >
            ประเมินความเสี่ยง
          </a>
          <a
            target="_blank"
            href="https://testmenow.net/1703"
            type="button"
            class="font-prompt py-2.5 px-5 mb-3 lg:ml-3 text-base lg:text-xl text-white focus:outline-none bg-gradient-to-r from-green-500 via-lime-500 to-lime-300 rounded-lg hover:from-emerald-400 hover:to-teal-600 hover:text-white focus:z-10 focus:ring-4"
          >
            จองตรวจเลือด
          </a>
        </div>
      </h1>
      <div
        class="font-prompt indent-8 text-white leading-relaxed text-sm border-2 rounded-lg p-4 lg:text-base mb-8 mt-1 lg:mt-2 text-left lg:text-left"
      >
        <p>
          มูลนิธิแคร์แมท ได้รับการประเมินคุณภาพและติดตามผล ประจำปี 2022
          ที่ผ่านมา โดย USAID Thailand ( United States Agency for International
          Development ) เพื่อความเป็นมาตรฐานและความเชื่อมั่นสำหรับผู้รับบริการ
          ในการยุติปัญหาเอดส์ในประเทศไทย
          ซึ่งได้ร่วมงานกับองค์กรภาคีและหน่วยงานภาครัฐของจังหวัดเชียงใหม่มาอย่างยาวนาน
          และเราได้เพิ่มฟังชั่นใหม่เข้ามา คือ Caremathub ซึ่งระบบนี้จะช่วย
          ในการจองเพิ่ือเข้ารับบริการที่ต้องได้สะดวกและรวดเร็วมากยิ่งขึ้น
        </p>
      </div>
    </div>

    <!--Right Col-->
    <div class="w-full pl-2 lg:pl-10 lg:w-2/4">
      <img
        class="mx-auto w-full lg:w-4/5 transition hover:scale-110 duration-700 ease-in-out"
        src="@/js/assets/caremat_model.png"
      />
    </div>
    <!--Bandner-->
    <!-- <div class="w-full pl-2 lg:w-2/4 overflow-hidden">
      <a
        class="inline-block text-purpul-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 lg:h-auto lg:p-4 transform hover:scale-125 duration-300 ease-in-out"
        href="https://www.facebook.com/sharer/sharer.php?u=#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          class="fill-current h-12"
        >
          <path
            fill="currentColor"
            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
          />
        </svg>
      </a>
    </div> -->

    <!--Footer-->
    <AppFooter />
  </div>
</template>
