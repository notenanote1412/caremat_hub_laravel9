<script setup>
import { ref } from "vue";

defineProps({
  caption: {
    type: String,
    required: true,
  },
});

let question_lists = ref({
  question01: "",
  question02: "",
  question03: "",
  question04: "",
  question05: "",
  question06: [],
  question07: "",
  question08: "",
  question09: "",
  question10: "",
  question11: "",
  status: "question_aire",
});

let lists = ref({
  questionsLists: [
    {
      no: 1,
      model: "question01",
      question: "ท่านนิยามตนเองว่าเป็น กลุ่มประชากรใด",
      answers: [
        "ชาย",
        "หญิง",
        "ชายที่มีเพศสัมพันธ์กับชาย",
        "สาวประเภทสอง",
        "ไบเซ็กชวล",
        "ไม่อยู่ในกรอบเพศชาย/หญิง",
      ],
      type: "radio",
      score: [1, 2, 2, 2, 2, 1],
    },
    {
      no: 2,
      model: "question02",
      question:
        "ท่านเคยได้รับสิ่งของหรือเงิน เพื่อนำไปสู่การมีเพศสัมพันธ์หรือไม่",
      answers: ["เคย", "ไม่เคย"],
      type: "radio",
      score: [2, 1],
    },
    {
      no: 3,
      model: "question03",
      question: "ผลการตรวจเอชไอวี ครั้งล่าสุด",
      answers: [
        "ไม่เคยตรวจ",
        "เคยตรวจ แต่จำผลการตรวจไม่ได้",
        "เคยตรวจ ผลไม่ติดเชื้อเอชไอวี (ลบ)",
        "เคยตรวจ ผลติดเชื้อเอชไอวี (บวก)",
        "เคยตรวจ แต่สรุปผลไม่ได้",
      ],
      type: "radio",
      score: [1, 1, 1, 1, 1],
    },
    {
      no: 4,
      model: "question04",
      question: "เพศสัมพันธ์กับคู่นอน ในระยะ 3 เดือนที่ผ่านมา",
      answers: [
        "กับคู่นอนประจำ เท่านั้น",
        "กับคู่นอนไม่ประจำ เท่านั้น",
        "กับคู่นอนประจำ และคู่นอน ไม่ประจำ",
        "ไม่มีเพศสัมพันธ์",
      ],
      type: "radio",
      score: [1, 2, 3, 0],
    },
    {
      no: 5,
      model: "question05",
      question: "บทบาททางเพศ",
      answers: [
        "รุกเท่านั้น",
        "รับเท่านั้น",
        "ทั้งรุกทั้งรับ",
        "ไม่เคยมีเพศสัมพันธ์",
      ],
      type: "radio",
      score: [1, 3, 2, 0],
    },
    {
      no: 6,
      model: "question06",
      question:
        "ท่านมีเพศสัมพันธ์ครั้งล่าสุดทางช่องทางใด (สามารถตอบได้มากกว่า 1 ข้อ)",
      answers: [
        "ทางทวารหนัก",
        "ทางช่องคลอดผู้หญิง",
        "ทางช่องคลอดสาวประเภทสอง",
        "ทางปาก",
        "ไม่เคยมีเพศสัมพันธ์",
      ],
      type: "checkbox",
      score: [4, 3, 3, 2, 0],
    },
    {
      no: 7,
      model: "question07",
      question:
        "การใช้ถุงยางอนามัย (ทั้งแบบรุก/แบบรับ) ในระยะ 3 เดือนที่ผ่านมา",
      answers: [
        "ใช้ถุงยางทุกครั้ง",
        "ใช้ถุงยางเป็นบางครั้ง",
        "ไม่เคยใช้ถุงยางเลย",
        "ไม่เคยมีเพศสัมพันธ์",
      ],
      type: "radio",
      score: [1, 2, 3, 0],
    },
    {
      no: 8,
      model: "question08",
      question:
        "ในช่วง 3 เดือนที่ผ่านมาท่านมีเพศสัมพันธ์แบบสอดใส่(ทั้งแบบรุก/แบบรับ) หรือไม่",
      answers: ["มีการสอดใส", "ไม่มีการสอดใส่", "ไม่แน่ใจ"],
      type: "radio",
      score: [2, 0, 1],
    },
    {
      no: 9,
      model: "question09",
      question:
        "ในระยะ 3 เดือนที่ผ่านมา ท่านเคยใช้สารเสพติด  Chemsex  รวมถึงระหว่างมีเพศสัมพันธ์หรือไม่",
      answers: ["เคยใช้สารเสพติด", "ไม่เคยใช้สารเสพติด", "ไม่แน่ใจ"],
      type: "radio",
      score: [2, 0, 1],
    },
    {
      no: 10,
      model: "question10",
      question: "ท่านเคยใช้เข็มฉีดยาหรือฉีดสารเสพติด ร่วมกับผู้อื่นหรือไม่",
      answers: [
        "เคยใช้เข็มร่วมกับผู้อื่น",
        "ไม่เคยใช้เข็มร่วมกับผู้อื่น",
        "จำไม่ได้",
      ],
      type: "radio",
      score: [2, 0, 1],
    },
    {
      no: 11,
      model: "question11",
      question:
        "ในระยะ 3 เดือนที่ผ่านมา ท่านมีอาการผิดปกติ เช่นแผล ตุ่ม หนอง ที่อวัยวะเพศหรือทวารหนัก หรือไม่",
      answers: ["เคยมี รักษาหายแล้ว", "มีในขณะนี้", "ไม่เคยมีอาการ"],
      type: "radio",
      score: [2, 4, 1],
    },
    {
      no: 12,
      model: "question12",
      question: "ท่านรู้จัก ยา PrEP (ยาป้องกันเอชไอวี ก่อนสัมผัสเชื้อ) หรือไม่",
      answers: ["รู้จัก ยา PrEP", "ไม่รู้จัก ยา PrEP"],
      type: "radio",
      score: [0, 0],
    },
    {
      no: 13,
      model: "question13",
      question: "ท่านรู้จัก ยา PEP (ยาป้องกันเอชไอวี แบบฉุกเฉิน) หรือไม่",
      answers: ["รู้จัก ยา PEP", "ไม่รู้จัก ยา PEP"],
      type: "radio",
      score: [0, 0],
    },
  ],
});
</script>

<template>
  <form>
    <div
      class="flex flex-col border-2 border-[#7b3f9e] rounded-md bg-[#bf9dd3] font-prompt"
      id=""
    >
      <div class="items-center grid grid-cols-1 pt-4">
        <span class="lg:text-2xl text-lg font-bold text-gray-700">{{
          caption
        }}</span>
        <div
          class="flex-row py-2 text-red-700 text-sm font-semibold lg:text-lg"
        >
          *คำแนะนำ
          <span class="text-gray-700 text-xs lg:text-base"
            >: กรุณาตอบคำถามให้ครบถ้วน
          </span>
        </div>
      </div>
      <div
        class="flex flex-col lg:m-4 m-1 mb-4 font-semibold"
        v-for="question_lists in lists.questionsLists"
        :key="question_lists"
      >
        <div class="flex flex-row text-left lg:ml-6 ml-2 mb-2">
          <span class="lg:text-lg lg:font-bold text-[15px] text-gray-800"
            >ข้อ {{ question_lists.no }}
            {{ question_lists.question }}
          </span>
        </div>
        <div class="form-check cursor-pointer">
          <div v-for="answer in question_lists.answers" :key="answer">
            <input
              class="form-check-input appearance-none lg:h-5 lg:w-5 h-4 w-4 lg:border-2 border lg:ml-12 ml-4 border-white rounded-sm checked:bg-[#bf9dd3] checked:border-pink-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
            />
            <label
              class="flex flex-row lg:text-left lg:text-base text-sm text-gray-800"
              >{{ answer }}</label
            >
          </div>
        </div>
      </div>
      <div class="my-4 grid grid-cols place-items-center">
        <button
          type="button"
          class="z-[1] inline-block px-8 py-2.5 bg-green-500 text-slate-200 font-bold text-base leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
        >
          ตกลง
        </button>
      </div>
    </div>
  </form>
</template>
