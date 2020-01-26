<template>
  <div class="row px-4 graph-row">
    <div class="col px-4 py-2">
      <highcharts id="allcharts" class="chart" :options="chartOptions"></highcharts>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartOptions: {
        chart: {
          type: "bar",
          borderColor: "blue"
        },
        title: {
          text: "Cash flow by Month"
        },
        xAxis: {
          categories: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "october",
            "November",
            "December"
          ],
          title: {
            text: "Months"
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: "Cash flow",
            align: "high"
          },
          labels: {
            overflow: "justify"
          }
        },
        tooltip: {
          valueSuffix: " millions"
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true
            }
          }
        },
        series: [
          {
            data: [2, 6, 12, 76, 98, 132, 49, 34, 23, 22, 13, 2]
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.graph-row {
  border: 1px solid black;
}
</style>