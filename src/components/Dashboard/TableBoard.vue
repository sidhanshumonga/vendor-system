<template>
  <div class="row px-4">
    <div class="col px-0 table-row text-center">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th colspan="2" class="title">{{title}}</th>
          </tr>
          <tr>
            <th>Customer name</th>
            <th>Ammount (in local currency)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cust in customers" :key="cust.name">
            <td>{{cust.name}}</td>
            <td>{{cust.ammount}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.table-row {
  /* border: 1px solid black; */
  height: 51vh;
  overflow: scroll;
}

th {
    background: white;
  position: sticky;
  top: 0;
}

.title {
  font-weight: bold;
  color: #42b983;
}
</style>

<script>
export default {
  props: {
    title: String
  },
  data() {
    return {
      customers: [
        { name: "Demo 1", ammount: "384392.48" },
        { name: "Demo 2", ammount: "384392.48" },
        { name: "Demo 3", ammount: "384392.48" },
        { name: "Demo 4", ammount: "384392.48" },
        { name: "Demo 5", ammount: "384392.48" },
        { name: "Demo 6", ammount: "384392.48" },
        { name: "Demo 7", ammount: "384392.48" },
        { name: "Demo 8", ammount: "384392.48" },
        { name: "Demo 9", ammount: "384392.48" },
        { name: "Demo 10", ammount: "384392.48" }
      ]
    };
  }
};
</script>