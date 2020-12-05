<template>
  <div class="add-new-todo card">
    <img
      class="image"
      src="https://wallpapercave.com/wp/wp2416826.jpg"
      alt="Rey"
      style="width:100%"
    />

    <div class="container">
      <form class="add-new-form" @submit.prevent="createNewTodo">
        <h1>Create a new Todo</h1>
        <input v-model="author" type="text" placeholder="Author..." />
        <input
          v-model="todoInput"
          type="text"
          placeholder="Type you todo here..."
          required
        />
        <button class="submit">Create Todo</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: "",
      todoInput: "",
    };
  },

  methods: {
    createNewTodo() {
      let newTodo = {
        author: this.author || "Anon",
        content: this.todoInput,
        timestamp: Date.now(),
        done: false,
      };
      this.$store.commit("addTodo", newTodo);
      this.todoInput = "";
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.card {
  background:black;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  color: yellow;
  margin: 2rem auto 0;
  width: 40%;
}

.image {
  border-radius: 10px 10px 0 0;
}

.container {
  padding: 2px 16px;
  text-align: center;
}

.add-new-form input {
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  margin-bottom: 1rem;
  padding: 0.8rem;
  width: 100%;
}
</style>
