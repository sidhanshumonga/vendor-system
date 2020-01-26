<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: "app",
  components: {
    // Login
  },
  data() {
    return {
      loggedin: false
    };
  }
};
</script>

<style>
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-color: #2c3e50;
  padding: 13px 15px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav h4 {
  font-weight: bold;
  color: #42b983;
  font-size: 26px;
}
</style>
