<template>
  <div class="row">
    <div class="col col-lg-2 col-md-2 col-sm-2 py-2">
      <div class="row topboards-right my-2">
        <div class="col">Client</div>
        <div class="col">
          <ul class="clients-ul">
            <li>Client_1</li>
            <li>Client_2</li>
            <li>Client_4</li>
            <li>Client_5</li>
          </ul>
        </div>
      </div>
      <div class="row topboards-right my-2">
        <div class="col">CoCd</div>
        <div class="col">
          <ul class="cocd-ul">
            <li>CoCd_1</li>
            <li>CoCd_2</li>
            <li>CoCd_3</li>
            <li>CoCd_4</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col col-lg-10 col-md-10 col-sm-10 py-2">
        <div class="row py-5 no-gutters">
            <div class="mr-2 circled-values">
                <b class="main-value">45</b>
                <p class="text-value">No of customers</p>
            </div>
            <div class="mx-2 circled-values">
                <b class="main-value">209M</b>
                <p class="text-value">Total receivable</p>
            </div>
            <div class="mx-2 circled-values">
                <b class="main-value">1.8M</b>
                <p class="text-value">Matched</p>
            </div>
            <div class="mx-2 circled-values">
                <b class="main-value">18.7M</b>
                <p class="text-value">Unmatched</p>
            </div>
            <div class="mx-2 circled-values">
                <b class="main-value">189M</b>
                <p class="text-value">Uneconciled</p>
            </div>
            <div class="ml-2 circled-values">
                <b class="main-value">87.4M</b>
                <p class="text-value">Overdue</p>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.topboards-right {
  border: 1px solid #42b983;
  display: block;
  text-align: left;
  width: 90%;
  /* box-shadow: 0 4px 8px 0 #a0adb9, 0 6px 20px 0 #b5c4d1; */
}

.clients-ul, .cocd-ul {
  list-style-type: none;
  display: block;
  font-size: 14px;
}

.circled-values {
    border: 8px solid #42b983;
    height: 172px;
    width: 172px;
    border-radius: 50%;
    padding-top: 1.7rem;
}

.main-value {
    font-size: 42px;
    margin: 0;
}

.text-value {
    margin:0;
}

</style>