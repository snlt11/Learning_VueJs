import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Detail from "../views/Detail.vue";
import Create from "../views/Create.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/posts/:id",
      name: "Detail",
      component: Detail,
      props: true,
    },
    {
      path: "/create",
      name: "Create",
      component: Create,
    },
  ],
});

export default router;
