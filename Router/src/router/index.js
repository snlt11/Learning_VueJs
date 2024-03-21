import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import JobsView from "../views/jobs/JobsView.vue";
import NotFound from "../views/NotFound.vue";
import JobDetailView from "../views/jobs/JobDetailView.vue";

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
      component: AboutView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      path: "/jobDetail/:id",
      name: "jobDetail",
      component: JobDetailView,
      props: true,
    },
    // redirect
    {
      path: "/all-jobs",
      redirect: "/jobs",
    },
    // Catches 404
    {
      path: "/:catchAll(.*)",
      component: NotFound
    },
  ],
});

export default router;
