import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ServicesView from "../views/ServicesView.vue"
import ServiceView from "../views/ServiceView.vue"
import SubServicesView from "../views/SubServicesView.vue"
import SubServiceView from "../views/SubServiceView.vue"
import MamasafiView from "../views/MamasafiView.vue"
import SingleMamasafiView from "../views/SingleMamasafiView.vue"
import ClientsView from "../views/ClientsView.vue"
import SingleClientView from "../views/SingleClientView.vue"
import DashboardView from "../views/DashboardView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: DashboardView,
    },
    {
      path: "/services",
      name: "Services",
      component: ServicesView,
    },
    {
      path: "/service/:id",
      name: "service",
      component: ServiceView,
    },
    {
      path: "/subservices",
      name: "SubServices",
      component: SubServicesView,
    },
    {
      path: "/subservice/:id",
      name: "SubService",
      component: SubServiceView,
    },
    {
      path: "/mamasafis",
      name: "Mamasafis",
      component: MamasafiView,
    },
    {
      path: "/mamasafi/:id",
      name: "Mamasafi",
      component: SingleMamasafiView,
    },
    {
      path: "/clients",
      name: "Clients",
      component: ClientsView,
    },
    {
      path: "/client/:id",
      name: "Client",
      component: SingleClientView,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
