import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [
      {
        author: "Niklas",
        content: "Städa bilen",
        done: false,
        timestamp: Date.now(),
      },
      {
        author: "Maria",
        content: "Städa Elsas rum",
        done: false,
        timestamp: Date.now(),
      },
      {
        author: "Elsa",
        content: "Leta efter den röda färgpennan",
        done: false,
        timestamp: Date.now(),
      },
    ],
  },
  mutations: {
    addTodo(state, data) {
      state.todoList.unshift(data);
    },
    removeTodo(state, data) {
      state.todoList = state.todoList.filter(function(todo) {
        return todo !== data;
      });
    },
  },
  actions: {},
  modules: {},
});
