import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import ServicesView from "../views/ServicesView.vue";
// import InpuForm from "../views/InpuForm.vue";
// import SelectData from "../views/SelectData.vue";
import QuestionnaireView from "../views/QuestionnaireView.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/services",
      name: "services",
      component: ServicesView,
    },
    {
      path: "/selecttime",
      name: "selecttime",
      component: () => import("../views/TimeView.vue"),
      // component: TimeView,
    },
    {
      path: "/inputform",
      name: "inputform",
      component: () => import("../views/InputForm.vue"),
      // component: TimeView,
    },
    {
      path: "/selectdata",
      name: "selectdata",
      component: () => import("../views/SelectData.vue"),
      // component: TimeView,
    },
    {
      path: "/questionnaire",
      name: "questionnaire",
      //component: () => ,
      component: QuestionnaireView,
    },
    // {
    //   path: "/inputform",
    //   name: "inputform",
    //   component: () => import("../views/InpuForm.vue"),
    //   // component: TimeView,
    // },
    // {
    //   path: "/selectdata",
    //   name: "selectdata",
    //   component: () => import("../views/SelectData.vue"),
    //   // component: TimeView,
    // },
  ],
});

export default router;
