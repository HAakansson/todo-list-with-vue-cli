<template>
  <div class="nav-bar">
    <h1 class="header">My Star Wars Todo List</h1>
    <div class="links-wrapper">
      <router-link class="links" to="/">Home</router-link>
      <router-link class="links" to="/newTodo">Create New Todo</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-bar {
  align-items: center;
  background: black;
  color: yellow;
  display: flex;
  height: 10vh;
  justify-content: space-between;
  padding: 0 2rem;
  width: 100vw;
}

.header {
  text-align: start;
}

.links {
  color: yellow;
  font-size: 2rem;
  margin: 0 1rem;
  text-decoration: none;
}

.links:hover {
  color: gray;
}
</style>
