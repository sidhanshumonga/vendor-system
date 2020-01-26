<template>
  <div class="row">
    <div class="col col-lg-6 col-md-6 col-sm-6 left-skew">
      <div class="col left"></div>
    </div>
    <div class="col col-lg-6 col-md-6 col-sm-6 m-auto right">
      <p class="links p-2 active">Vendor login</p> |
      <p class="links p-2">Customer login</p><br>
      <input placeholder="@username" class="m-3 input-field" />
      <br />
      <input placeholder="Password" class="m-3 input-field" />
      <br />
      <router-link to="/dashboard"><button class="m-3 input-login">Login</button></router-link>
    </div>
  </div>
</template>

<style scoped>
.left,
.left-skew {
  background: #2c3e50;
  height: 100vh;
  width: 100%;
}

.left {
  position: absolute;
  width: 100px;
  transform: skew(15deg);
}

.left-skew {
  max-width: 100%;
  transform: skew(-15deg);
}

.input-field {
  border: none;
  border-bottom: 1px solid #2c3e50;
  padding: 8px 25px;
}

.input-login {
  background: #2c3e50;
  border: none;
  color: white;
  padding: 8px 20px;
}

.input-login:hover {
  color: black;
  background: #42b983;
}

.input-field:focus,
.input-login:focus {
  outline: none;
  border-bottom: 1px solid #42b983;
}

.links {
  display: inline;
  cursor: pointer;
}
.links.active {
  color: #2c3e50;
}

.links:hover {
  color: #42b983;
}

</style>