import { defineStore } from "pinia";
import axios from "axios";

export let useBookingStore = defineStore("booking", {
  state: () => ({
    clinic_config: {
      slot: 30,
      seat_slot: 1,
      day_show_number: 7,
      holidays: ["2023-01-16", "2023-01-18", "2023-01-20", "2023-01-31"],
      operation_time: [
        {
          day: 0,
          start1: "00:00",
          end1: "00:00",
          start2: "00:00",
          end2: "00:00",
        },
        {
          day: 1,
          start1: "00:00",
          end1: "00:00",
          start2: "00:00",
          end2: "00:00",
        },
        {
          day: 2,
          start1: "09:00",
          end1: "12:00",
          start2: "13:00",
          end2: "18:00",
        },
        {
          day: 3,
          start1: "09:00",
          end1: "12:00",
          start2: "13:00",
          end2: "18:00",
        },
        {
          day: 4,
          start1: "09:00",
          end1: "12:00",
          start2: "13:00",
          end2: "18:00",
        },
        {
          day: 5,
          start1: "09:00",
          end1: "12:00",
          start2: "13:00",
          end2: "18:00",
        },
        {
          day: 6,
          start1: "00:00",
          end1: "12:00",
          start2: "13:00",
          end2: "18:00",
        },
      ],
      booked_list: [
        {
          booked_date: "2023-01-19",
          booked_slot: "09:00",
          booked_status: "booked",
        },
        {
          booked_date: "2023-01-19",
          booked_slot: "09:00",
          booked_status: "booked",
        },
        {
          booked_date: "2023-01-19",
          booked_slot: "10:00",
          booked_status: "booked",
        },
        {
          booked_date: "2023-01-19",
          booked_slot: "10:30",
          booked_status: "booked",
        },
        {
          booked_date: "2023-01-19",
          booked_slot: "10:30",
          booked_status: "booked",
        },
        {
          booked_date: "2023-01-19",
          booked_slot: "10:30",
          booked_status: "booked",
        },
        {
          booked_date: "2023-01-19",
          booked_slot: "11:00",
          booked_status: "booked",
        },
        {
          booked_date: "2023-01-19",
          booked_slot: "11:30",
          booked_status: "booked",
        },
        {
          booked_date: "2023-01-21",
          booked_slot: "09:00",
          booked_status: "booked",
        },
        {
          booked_date: "2023-01-22",
          booked_slot: "11:30",
          booked_status: "cancle",
        },
        {
          booked_date: "2023-01-22",
          booked_slot: "16:30",
          booked_status: "cancle",
        },
        {
          booked_date: "2023-01-22",
          booked_slot: "16:30",
          booked_status: "booked",
        },
        {
          booked_date: "2023-01-22",
          booked_slot: "10:00",
          booked_status: "booked",
        },
        {
          booked_date: "2023-01-22",
          booked_slot: "10:30",
          booked_status: "booked",
        },
        {
          booked_date: "2023-01-22",
          booked_slot: "11:00",
          booked_status: "booked",
        },
        {
          booked_date: "2023-01-22",
          booked_slot: "15:30",
          booked_status: "cancel",
        },
        {
          booked_date: "2023-01-22",
          booked_slot: "15:30",
          booked_status: "booked",
        },
        {
          booked_date: "2023-01-22",
          booked_slot: "13:30",
          booked_status: "booked",
        },
        {
          booked_date: "2023-01-22",
          booked_slot: "13:30",
          booked_status: "booked",
        },
      ],
    },
    services: [],
    select_date: {
      date_time: "",
      slot_date: "",
      slot_day: "",
      slot_time: "",
    },
    reference: "",
    user_info: {
      name: "",
      phone: "",
      line_id: "",
      email: "",
    },
  }),
//   actions: {
//     async fetchClinicConfig() {
//       try {
//         const response = await axios.get("clinic_config.php");

//         this.clinic_config = response.data

//         console.log(response.data)

//       } catch (error) {
//         alert(error);
//         console.log(error);
//       }
//     },
//   },
  // fetchClinicConfig() {

  //   let formData = new FormData()

  //   ///

  //     axios
  //       .post('save_booking.php', formData)
  //       .then(response => {
  //         // console.log(response)
  //         // show page
  //       })
  //       .catch(error => console.log(error))
  //   },
  // },
  // getters: {
  //   finishedTodos(state) {
  //     // autocompletion! ✨
  //     return state.todos.filter((todo) => todo.isFinished)
  //   },
  //   unfinishedTodos(state) {
  //     return state.todos.filter((todo) => !todo.isFinished)
  //   },
  //   /**
  //    * @returns {{ text: string, id: number, isFinished: boolean }[]}
  //    */
  //   filteredTodos(state) {
  //     if (this.filter === 'finished') {
  //       // call other getters with autocompletion ✨
  //       return this.finishedTodos
  //     } else if (this.filter === 'unfinished') {
  //       return this.unfinishedTodos
  //     }
  //     return this.todos
  //   },
  // },
});
