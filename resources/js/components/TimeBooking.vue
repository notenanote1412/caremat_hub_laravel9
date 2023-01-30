<!-- eslint-disable no-undef -->
<script setup>
import { ref, onMounted } from "vue";
import TimeSlot from "@/js/components/TimeSlot.vue";
import { useBookingStore } from "@/js/stores/BookingStore.js";

let booking = useBookingStore();

let date_thai_lists = ref([
  "อาทิตย์",
  "จันทร์",
  "อังคาร",
  "พุธ",
  "พฤหัสบดี",
  "ศุกร์",
  "เสาร์",
]);

let clinic_config = booking.clinic_config;
// let timeSlots = ref([]);
let count_date = 0;

let booking_date_arr = ref([]);
let current_date = dayjs().format("YYYY-MM-DD");
let current_time = dayjs().format("HH:mm");

let check_date = current_date;
let check_week_day = "";

// show date only 7 days
while (count_date < clinic_config.day_show_number) {
  check_week_day = dayjs(check_date).day();

  // ถ้า วันนี้ ไม่เป็นวันหยุด และ เปิดบริการ
  // start1 8 : 00 12 : 30
  // holidays
  // let last_slot = "16:00";
  // end1 = 1200 start1 = 0000 slot = 30 -> last_slot = 1130
  // end1 = 1150 start1 = 0000 slot = 30 -> last_slot = 1100 // end_time - last_slot have to >= slot
  // end1 = 1150 start1 = 1300 end2 = 1800 slot = 30 -> last_slot = 1730 // end_time - last_slot have to >= slot

  let end_day_time = clinic_config.operation_time[check_week_day].end1;

  if (clinic_config.operation_time[check_week_day].end2 !== "00:00") {
    end_day_time = clinic_config.operation_time[check_week_day].end2;
  }

  let last_slot = dayjs(`${check_date} ${end_day_time}`)
    .subtract(clinic_config.slot, "minutes")
    .format("HH:mm");

  // if (end_day_time === "00:00") last_slot = "00:00";

  // push valid day ให้ข้ามวัน เมื่อ
  // วันหยุด
  // ไม่ทำงาน
  // วันปัจจุบัน แต่เวลาเลย slot สุดท้าย
  // slot ทั้งวัน ถูกจองหมด
  if (
    clinic_config.holidays.includes(check_date) ||
    clinic_config.operation_time[check_week_day].start1 == "00:00" ||
    (current_date == check_date && current_time >= last_slot)
  ) {
    check_date = dayjs(check_date).add(1, "day").format("YYYY-MM-DD");

    continue;
  }

  // try to add time slot
  let time_slot = [];
  let time_slot_late = [];

  let date_valid = check_date;
  let operation_time = clinic_config.operation_time.filter(
    (item) => item.day == check_week_day
  )[0];

  // gen time_slot
  let start_time = dayjs(`${date_valid} ${operation_time.start1}`).format(
    "HH:mm"
  );
  let end_time = dayjs(`${date_valid} ${operation_time.end1}`).format("HH:mm");

  let start_time_late = dayjs(`${date_valid} ${operation_time.start2}`).format(
    "HH:mm"
  );
  let end_time_late = dayjs(`${date_valid} ${operation_time.end2}`).format(
    "HH:mm"
  );

  // ตัวตั้งต้น slot_time = start_time
  let slot_time = dayjs(`${date_valid} ${start_time}`).format("HH:mm");
  let slot_time_late = dayjs(`${date_valid} ${start_time_late}`).format(
    "HH:mm"
  );

  let slot_time_cal = dayjs(`${date_valid} ${start_time}`).minute();
  let slot_time_cal_late = dayjs(`${date_valid} ${start_time_late}`).minute();
  // console.log(end_time_late)
  // puch slot_time to time_slot array
  // ถ้า slot_time >= เวลาเริ่มงาน และ น้อยกว่า เวลาเลิกงาน

  while (
    start_time >= slot_time ||
    (end_time < start_time_late &&
      slot_time_late < end_time_late &&
      end_time > slot_time &&
      start_time_late >= end_time)
  ) {
    if (
      slot_time_cal % clinic_config.slot !== 0 ||
      slot_time_cal_late % clinic_config.slot !== 0
    ) {
      slot_time_cal++;
      slot_time_cal_late++;

      slot_time = dayjs(`${date_valid} ${slot_time}`)
        .add(1, "minutes")
        .format("HH:mm");

      slot_time_late = dayjs(`${date_valid} ${slot_time_late}`)
        .add(1, "minutes")
        .format("HH:mm");

      // console.log(slot_time_cal);
      continue;
    }

    // check slot ที่ถูกจอง วันที่จอง ถ้าสถานะไม่ยกเลิก ให้ filter ออกมา
    const bookedSlots = clinic_config.booked_list.filter(
      (slot) =>
        (slot.booked_date === date_valid &&
          slot.booked_slot === slot_time &&
          slot.booked_status !== "cancel") ||
        (slot.booked_date === date_valid &&
          slot.booked_slot === slot_time_late &&
          slot.booked_status !== "cancel")
    );

    let slot_time_check = dayjs(`${date_valid} ${slot_time}`);
    let slot_time_late_check = dayjs(`${date_valid} ${slot_time_late}`);
    let current_time_check = dayjs();

    // ถ้า seat เต็ม ให้ข้าม
    if (bookedSlots.length < clinic_config.seat_slot) {
      // ถ้าวันปัจจุบัน และ เวลา slot < เวลาปัจจุบัน ให้ข้าม
      if (current_date == check_date) {
        if (slot_time_check >= current_time_check) {
          if (start_time !== "00:00") time_slot.push(slot_time);

          if (
            slot_time_late_check >= current_time_check &&
            start_time_late !== "00:00"
          ) {
            time_slot_late.push(slot_time_late);
          }
        }
      } else {
        if (start_time !== "00:00") time_slot.push(slot_time);

        if (start_time_late !== "00:00") time_slot_late.push(slot_time_late);
      }
    }

    slot_time = dayjs(`${date_valid} ${slot_time}`)
      .add(clinic_config.slot, "minutes")
      .format("HH:mm");
    slot_time_late = dayjs(`${date_valid} ${slot_time_late}`)
      .add(clinic_config.slot, "minutes")
      .format("HH:mm");
  }
  // gen time_slot

  // if morning_slot all booked and after_noon slot all booked Do not push the date
  // ถ้า slot เช้า จองเต็ม และ บ่าย ก็เต็ม จะไม่ถูก push เข้า array time_slot
  if (time_slot.length === 0 && time_slot_late.length === 0) {
    // don't push the day object into the booking_date_arr array
  } else {
    booking_date_arr.value.push({
      //date: check_date,
      date: date_valid,
      day: date_thai_lists.value[check_week_day],
      time_slot: time_slot,
      time_slot_late: time_slot_late,

      work_day_th: date_thai_lists.value[check_week_day],
      operation_time: operation_time,
    });
    count_date++;
  }

  check_date = dayjs(check_date).add(1, "day").format("YYYY-MM-DD");
}
</script>

<template>
  <form>
    <div
      class="flex m-2 z-[3]"
      id="time"
      v-for="booking_date in booking_date_arr"
      :key="booking_date"
    >
      <div class="my-2 rounded-lg bg-slate-300">
        <div class="flex flex-col m-2">
          <h6
            class="font-bold text-xl text-purple-700 border-b-2 border-purple-500"
          >
            {{ booking_date.day + ", " + booking_date.date }}
          </h6>

          <div class="lg:grid lg:grid-cols-8 grid grid-cols-4">
            <div v-for="(time, index) in booking_date.time_slot" :key="index">
              <div>
                <TimeSlot
                  :day="booking_date.day"
                  :date="booking_date.date"
                  :time="time"
                ></TimeSlot>
              </div>
            </div>
            <div
              v-for="(time_late, index) in booking_date.time_slot_late"
              :key="index"
            >
              <div>
                <TimeSlot
                  :day="booking_date.day"
                  :date="booking_date.date"
                  :time="time_late"
                ></TimeSlot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<style></style>
