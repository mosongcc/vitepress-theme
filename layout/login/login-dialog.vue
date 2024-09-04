<script setup>
import {state} from "./state.js";
</script>

<template>
  <Teleport to="body">
    <!-- 弹出登录框  -->
    <div class="dialog" v-if="state.visible">
      <div class="shade" @click="state.visible=false"></div>
      <div class="content">
        <h3>微信扫码登录</h3>
        <img class="qrimg" :src="state.qrimg">
        <p class="tips">{{ state.tips }}</p>
        <button class="cancel" @click="state.visible=false">取消</button>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>

.dialog {
}

.dialog .shade {
  position: absolute;
  z-index: 100000;
  top: 0px;
  left: 0vw;
  width: 100vw;
  height: 100vh;
  background: #000000;
  opacity: 0.7;
}

.content {
  position: absolute;
  z-index: 100001;
  top: 10vw;
  left: calc(50vw - 250px);
  width: 500px;
  height: 500px;
  background: #0be68b;
  opacity: 1;
  text-align: center;
  padding: 50px 0;
}

.content h3 {
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 15px 0;
}

.qrimg {
  width: 300px;
  height: 300px;
  display: block;
  margin-left: calc(50% - 150px);
}

.tips {
  margin: 1vw 0;
}

.cancel {
  width: 100px;
  height: 30px;
  line-height: 30px;
  background: #e4efea;
  color: #666666;
  border-radius: 15px;
}
</style>