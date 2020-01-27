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
        <div class="mr-2 circled-values circle">
          <b class="main-value">45</b>
          <p class="text-value">No of customers</p>
        </div>
        <div class="mx-2 circled-values circle">
          <b class="main-value">209M</b>
          <p class="text-value">Total receivable</p>
        </div>
        <div class="mx-2 circled-values circle">
          <b class="main-value">1.8M</b>
          <p class="text-value">Matched</p>
        </div>
        <div class="mx-2 circled-values circle">
          <b class="main-value">18.7M</b>
          <p class="text-value">Unmatched</p>
        </div>
        <div class="mx-2 circled-values circle">
          <b class="main-value">189M</b>
          <p class="text-value">Uneconciled</p>
        </div>
        <div class="ml-2 circled-values circle">
          <b class="main-value">87.4M</b>
          <p class="text-value">Overdue</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$light: #42b983;
$dark: #2c3e50;

.topboards-right {
  border: 1px solid $light;
  display: block;
  text-align: left;
  width: 90%;
  /* box-shadow: 0 4px 8px 0 #a0adb9, 0 6px 20px 0 #b5c4d1; */
}

.clients-ul,
.cocd-ul {
  list-style-type: none;
  display: block;
  font-size: 14px;
}

.clients-ul li:hover,
.cocd-ul li:hover {
  font-weight: bold;
}

.circled-values {
  border: 8px solid $light;
  height: 172px;
  width: 172px;
  padding-top: 2.5rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 100%;
  box-shadow: none;
  border: 0;
  box-sizing: border-box;

  // Required, since we're setting absolute on pseudo-elements
  position: relative;
  vertical-align: middle;

  &::before,
  &::after {
    box-sizing: inherit;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
  }
}

.circle {
  
  &:hover {
    color: $dark;
  }

  &::before,
  &::after {
    top: 0;
    left: 0;
  }

  &::before {
    border: 8px solid $light; // We're animating border-color again
  }

  &:hover::before {
    border-top-color: $dark; // Show borders
    border-right-color: $dark;
    border-bottom-color: $dark;

    transition:
      border-top-color 0.15s linear, // Stagger border appearances
      border-right-color 0.15s linear 0.10s,
      border-bottom-color 0.15s linear 0.20s;
  }

  &::after {
    border: 0 solid transparent; // Makes border thinner at the edges? I forgot what I was doing
  }

  &:hover::after {
    border-top: 8px solid $dark; // Shows border
    border-left-width: 8px; // Solid edges, invisible borders
    border-right-width: 8px; // Solid edges, invisible borders
    transform: rotate(270deg); // Rotate around circle
    transition:
      transform 0.4s linear 0s,
      border-left-width 0s linear 0.35s; // Solid edge post-rotation
  }

  border-radius: 100%;
  box-shadow: none;
    
  &::before,
  &::after {
    border-radius: 100%;
  }
}

.circled-values:hover {
  transform: scale(1.1);
}

.main-value {
  font-size: 42px;
  margin: 0;
}

.text-value {
  margin: 0;
}
</style>