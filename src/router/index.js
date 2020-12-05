import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AddNewTodoPage from "../views/AddNewTodoPage.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/newTodo",
    name: "AddNewTodoPage",
    component: AddNewTodoPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
