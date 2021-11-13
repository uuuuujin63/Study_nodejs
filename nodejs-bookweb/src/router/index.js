import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Book from "@/views/Book.vue";
import BookList from "@/components/book/BookList.vue";
import BookCreate from "@/components/book/BookCreate.vue";
import BookModify from "@/components/book/BookModify.vue";
import BookView from "@/components/book/BookView.vue";
import BookDelete from "@/components/book/BookDelete.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },{
    path: "/book",
    name: "Book",
    component: Book,
    redirect: "/book/list",
    children: [
      {
        path: "/list",
        name: "BookList",
        component: BookList
      },{
        path: "/create",
        name: "BookCreate",
        component: BookCreate
      },{
        path: "/modify",
        name: "BookModify",
        component: BookModify
      },{
        path: "/view/:isbn",
        name: "BookView",
        component: BookView
      },{
        path: "/view/:isbn",
        name: "BookDelete",
        component: BookDelete
      },
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
