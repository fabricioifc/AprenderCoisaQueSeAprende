import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Sobre from "@/components/Sobre";
import Quiz from "@/components/Quiz";
import Gardner from "@/components/Gardner";
import Problemas from "@/components/Problemas";
import Maneiras from "@/components/Maneiras";
import Hora from "@/components/Hora";
import Lugar from "@/components/Lugar";
import Login from "@/components/Login";
import { routerGuard } from "./guard";
import Logica from "@/components/Logica";
import Linguistica from "@/components/Linguistica";
import Corporal from "@/components/Corporal";
import Interpessoal from "@/components/Interpessoal";
import Intrapessoal from "@/components/Intrapessoal";
import Visual from "@/components/Visual";
import Auditiva from "@/components/Auditiva";
import Musical from "@/components/Musical";
import Cadastro from "@/components/Cadastro";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props: { msg: "Página Inicial" },
      meta: {}
    },
    {
      path: "/sobre",
      name: "sobre",
      component: Sobre,
      props: { msg: "Sobre Nós" }
    },
    {
      path: "/quiz",
      name: "quiz",
      component: Quiz,
      props: {},
      meta: { requiresAuth: true }
    },
    {
      path: "/gardner",
      name: "gardner",
      component: Gardner,
      props: {}
    },
    {
      path: "/problemas",
      name: "problemas",
      component: Problemas,
      props: {}
    },
    {
      path: "/maneiras",
      name: "maneiras",
      component: Maneiras,
      props: {}
    },
    {
      path: "/hora",
      name: "hora",
      component: Hora,
      props: {}
    },
    {
      path: "/lugar",
      name: "lugar",
      component: Lugar,
      props: {}
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      props: {},
      meta: { requiresGuest: true }
    },
    {
      path: "/logout",
      name: "logout",
      meta: { logout: true }
    },
    {
      path: "/logica",
      name: "logica",
      component: Logica,
      props: {}
    },
    {
      path: "/linguistica",
      name: "linguistica",
      component: Linguistica,
      props: {}
    },
    {
      path: "/interpessoal",
      name: "interpessoal",
      component: Interpessoal,
      props: {}
    },
    {
      path: "/intrapessoal",
      name: "intrapessoal",
      component: Intrapessoal,
      props: {}
    },
    {
      path: "/visual",
      name: "visual",
      component: Visual,
      props: {}
    },
    {
      path: "/auditiva",
      name: "auditiva",
      component: Auditiva,
      props: {}
    },
    {
      path: "/musical",
      name: "musical",
      component: Musical,
      props: {}
    },
    {
      path: "/corporal",
      name: "corporal",
      component: Corporal,
      props: {}
    },
    {
      path: "/cadastro",
      name: "cadastro",
      component: Cadastro,
      props: {},
      meta: { requiresGuest: true }
    }
  ]
});
router.beforeEach((to, from, next) => {
  routerGuard(to, from, next);
});

export default router;
