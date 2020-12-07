<template>
  <div class="todo-list-item">
    <div class="author" :class="{done: todoDone}">Author: {{ todo.author }}</div>
    <div class="todo-content">
      <div class="checkmark" @click="crossTodo">
        {{ todo.done ? "🟢" : "🔴" }}
      </div>
      <div class="content" :class="{done: todoDone}">{{ todo.content }}</div>
      <div class="trash-bin" @click="removeTodo">🗑️</div>
    </div>
    <div class="timestamp" :class="{done: todoDone}">{{ time }}</div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
    },
  },

  computed: {
    time() {
      return new Date(this.todo.timestamp).toLocaleString();
    },
    todoDone(){
      return this.todo.done;
    }
  },

  methods: {
    removeTodo() {
      this.$store.commit("removeTodo", this.todo);
    },
    crossTodo() {
      this.todo.done = !this.todo.done;
    },
  },
};
</script>

<style scoped>
.todo-list-item {
  border-bottom: 2px solid yellow;
  border-radius: 5px;
  color: yellow;
  padding: 0.5rem 0;
}

.author,
.timestamp {
  color: grey;
  font-size: 0.8rem;
  text-align: start;
  margin-left: 0.6rem;
}

.todo-content {
  align-items: center;
  display: grid;
  column-gap: 5px;
  grid-template-columns: 0.2fr 4fr 0.5fr;
  padding: 0.5rem;
}

.checkmark,
.content {
  justify-self: start;
}

.checkmark,
.trash-bin {
  cursor: pointer;
  user-select: none;
}

.done {
  text-decoration: line-through;
}
</style>
