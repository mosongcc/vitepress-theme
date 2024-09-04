<script setup>
import {state} from './state.js';


</script>

<template>
  <Teleport to="body">
    <div class="popout" v-if="state.visible">
      <div class="shade" @click="state.visible=false"></div>
      <div class="content">
        <!--<img class="qrimg" :src="dat.qrimg">-->
        <p>倒计时：60s</p>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>

.popout .shade {
  position: absolute;
  z-index: 10000;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: #1b1b1f;
  opacity: 0.5;
}

.popout .content {
  position: absolute;
  z-index: 10001;
  top: 15vw;
  left: 25vw;
  width: 50vw;
  background: #ffffff;
  opacity: 1;
  text-align: center;
  padding: 5vw;
}

</style>