<template>
  <div class="todo-list card">
    <img
      class="image"
      src="https://static3.cbrimages.com/wordpress/wp-content/uploads/2018/11/Kylo-Ren-2.jpg"
      alt="Kylo Ren"
      style="width:100%"
    />
    <div v-if="showTodoList" class="container">
      <todo-list-item v-for="(todo, i) of todoList" :key="i" :todo="todo" />
    </div>
    <div v-else class="container">
      <p class="empty">Your Todo list is empty...</p>
    </div>
    <router-link class="submit" to="/newTodo">Add new Todo</router-link>
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem.vue";
export default {
  components: {
    TodoListItem,
  },

  computed: {
    todoList() {
      return this.$store.state.todoList;
    },

    showTodoList() {
      return this.todoList.length > 0;
    },
  },

  methods: {
    goToAddNew() {
      this.$router.push("/newTodo");
    },
  },
};
</script>

<style scoped>
.card {
  background: black;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 2rem auto 0;
  text-align: center;
  width: 40%;
}

.image {
  border-radius: 10px 10px 0 0;
}

.container {
  padding: 2px 2px;
}

.empty {
  color: yellow;
}

.submit {
  margin-top: 1rem;
}
</style>
