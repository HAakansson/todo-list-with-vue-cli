<template>
  <div class="home-page">
    <todo-list />
  </div>
</template>

<script>
import TodoList from "../components/home-page/TodoList.vue";

export default {
  components: { TodoList },
};
</script>
