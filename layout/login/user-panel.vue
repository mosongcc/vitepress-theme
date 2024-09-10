<script setup>
import {$store, setStore} from "../../store";
import {$data} from "./data";
import {logout} from "./login";


function mouseout(event) {
  if (!event.currentTarget.contains(event.relatedTarget)) {
    $data.userPanelVisible = false
  }
}

async function exit() {
  setStore({isLogin: false, user: {}})
  await logout()
}

</script>

<template>
  <div class="panel" v-if="$data.userPanelVisible" @mouseout="mouseout">
    <div class="panel-body">
      <div class="user">
        <div class="avatar"><img :src="$store.user.avatar"></div>
        <div class="nu">
          <div class="nickname">{{ $store.user.nickname }} <span class="vip-icon"
                                                                 v-if="$store.user.type==='vip'">🎗️</span></div>
          <div class="uid">UID：{{ $store.user.uid }}</div>
        </div>
      </div>
      <div class="row-vip" v-if="$store.user.type==='vip'"><span>VIP至：{{ $store.user.vip_date }} </span><a>续费</a>
      </div>
      <div class="exit">
        <button class="exitBtn" @click="exit">退出登录</button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.panel {
  position: absolute;
  border: 1px solid #cccccc;
  border-radius: 5px;
  box-shadow: #efa84e 2px 2px 5px;
  background: #f8f5f5;
  top: 45px;
  right: 0;
  width: 300px;
  color: #666666;
}

.user {
  display: flex;
  justify-content: flex-start;
  margin-top: 15px;
}

.user .avatar img {
  width: 100%;
  border: none;
}

.user .avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 15px;
}

.nu {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}

.nu .uid {
  font-size: 12px;
  color: #aaaaaa
}

.row-vip {
  margin: 15px;
  padding: 5px 15px;
  font-size: 14px;
  background-color: #f8ddaa;
  color: #b66805;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
}

.exit {
  display: flex;
  justify-content: flex-end;
  padding: 15px;
}

.exit .exitBtn {
  border: solid 1px #cccccc;
  border-radius: 5px;
  padding: 3px 10px;
  color: #999999;
}
</style>