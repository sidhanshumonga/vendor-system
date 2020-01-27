<template>
  <div>
    <div id="nav" class="justify-content-between">
      <h4>AR Dashboard</h4>
      <div style="display:flex">
        <h6 class="company-text pt-2 mx-2">Hi, AB company</h6>
        <p class="company-logo mx-2">AB</p>
      </div>

      <!-- <router-link to="/login"><button class="login">Login</button></router-link> -->
    </div>
    <div class="dashboard px-4 py-3">
      <div class="row">
        <div class="col">
          <TopBoard />
        </div>
      </div>
      <div class="row">
        <div class="col col-lg-6 col-md-6 col-sm-6 boards">
          <GraphBoard />
        </div>
        <div class="col col-lg-3 col-md-3 col-sm-3 boards">
          <TableBoard title="Customer wise balance" />
        </div>
        <div class="col col-lg-3 col-md-3 col-sm-3 boards">
          <TableBoard title="Unreconciled balance" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.boards {
  max-height: 51vh;
  overflow: hidden;
}

#nav {
  display: flex;
}

.login {
  background: #42b983;
  border: none;
  padding: 8px 20px;
}

.login:focus {
  outline: none;
}
.company-text {
  color: white;
  margin:0;
}

.company-logo {
  background: #42b983;
  border-radius: 50%;
  margin:0;
  height: 35px;
  padding: 6px 0;
  color: #2c3e50;
  width: 35px;
  font-weight: 200;
}
</style>

<script>
// @ is an alias to /src
import TopBoard from "@/components/Dashboard/TopBoard";
import GraphBoard from "@/components/Dashboard/GraphBoard";
import TableBoard from "@/components/Dashboard/TableBoard";

export default {
  name: "home",
  components: {
    TopBoard,
    GraphBoard,
    TableBoard
  }
};
</script>
