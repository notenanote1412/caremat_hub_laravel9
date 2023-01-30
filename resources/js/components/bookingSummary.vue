<script setup>
import AppFooter from "@/js/components/AppFooter.vue";
import SummaryRow from "@/js/components/SummaryRow.vue";
import { useBookingStore } from "@/js/stores/BookingStore";

let booking = useBookingStore();

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
</script>

<template>
  <div
    class="font-prompt container p-8 lg:pt-10 mx-auto flex flex-col lg:flex-col items-center"
  >
    <!--select data test-->
    <div class="flex flex-col">
      <div class="flex flex-col h-full">
        <label>
          <p class="text-white text-center lg:text-3xl text-3xl">
            ทำรายการจองสำเร็จ
          </p>
        </label>
      </div>
      <div class="flex flex-col text-center">
        <!-- <label>
          <a class="mb-4 text-rose-600 text-center lg:text-xl text-sm">
            *หมายเหตุ </a
          >:
          <a class="mb-4 text-white text-center lg:text-xl text-sm">
            กรุณาตรวจสอบข้อมูลให้ครบถ้วน
            และแค้ปหน้าจอเพื่อแสดงต่อเจ้าหน้าที่ในวันนัด
          </a>
        </label> -->
      </div>
      <div
        class="min-w-full p-6 lg:p-6 lg:w-4/5 mt-5 lg:mt-5 flex flex-col self-center lg:self-center items-center bg-white border-2 rounded-md"
      >
        <div class="my-3 items-center">
          <img
            alt=""
            class="mt-2 max-h-20 lg:max-h-28 lg:w-28"
            src="@/components/icons/tick.png"
          />
        </div>
        <div class="mt-3 my-4 text-black text-sm lg:text-base">
          <div class="flex flex-row mb-5">
            <table class="table-auto">
              <tbody>
                <SummaryRow title="รหัสอ้างอิง" :data="booking.reference" />
                <SummaryRow
                  title="บริการที่เลือก"
                  :data="booking.services.toString()"
                />
                <SummaryRow
                  title="วันที่นัด"
                  :data="`${booking.select_date.slot_day} ${booking.select_date.slot_date}`"
                />
                <SummaryRow
                  title="เวลานัด"
                  :data="booking.select_date.slot_time"
                />
                <SummaryRow title="ชื่อเล่น" :data="booking.user_info.name" />
                <SummaryRow title="เบอร์โทร" :data="booking.user_info.phone" />
                <SummaryRow title="Line ID" :data="booking.user_info.line_id" />
                <SummaryRow title="Email" :data="booking.user_info.email" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!--Footer-->
    <AppFooter />
  </div>
</template>
