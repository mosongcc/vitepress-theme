<script setup>
import {state} from './state'
import {submit} from './popout'


</script>

<!--支付弹框界面-->
<template>
  <Teleport to="body">
    <div class="vip-popout" v-if="state.visible">
      <div class="shade" @click="state.visible=false"></div>
      <div class="content">
        <div class="vip1">
          年费会员，
        </div>
        <div class="vip2">
          永久会员
        </div>
        <button @click="submit('240001')">支付</button>
        <img v-if="state.payQrcode" :src="state.payQrcode">
      </div>
    </div>
  </Teleport>
</template>

<style scoped>

.vip-popout .shade {
  position: absolute;
  z-index: 10000;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: #1b1b1f;
  opacity: 0.5;
}

.vip-popout .content {
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