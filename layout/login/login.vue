<script setup>
import {watch} from 'vue'
import {$state, authorizeQrcode, polling, userinfo} from './login'
import {uuid} from "../../utils/http";
import {$store, setStore} from '../../store'
import LoginDialog from './login-dialog.vue'


const login = async () => {
  if ($store.isLogin) {
    console.log("已登录成功")
    $store.loginVisible = false
    return
  }
  // 电脑浏览器显示二维码
  const cid = uuid()
  $state.qrimg = await authorizeQrcode(cid)
  await pollingTimeout(cid)
  //$store.loginVisible = true // 显示登录弹框

  //TODO 手机微信，直接跳转授权
}

async function pollingTimeout(cid) {
  if ($store.loginVisible) {
    const body = await polling(cid)
    //授权成功
    if (body && body.status === '1') {
      let user = await userinfo()
      setStore({user, isLogin: true})
      $store.loginVisible = false//登录成功关弹框
      return
    }
  }
  setTimeout(async () => await pollingTimeout(cid), 5 * 1000)
}


//显示登录框
watch(() => $store.loginVisible, async (n, o) => {
  if (n) {
    await login()
  }
})
</script>

<template>
  <div class="login">
    <div @click="$store.loginVisible = true" class="name">
      <img v-if="!$store.user.avatar" src="./default-avatar.webp" class="avatar">
      <img v-if="$store.user.avatar" :src="$store.user.avatar" class="avatar">
      <span class="nickname">{{ $store.isLogin ? ($store.user.nickname || '用户') : '登录' }}</span>
    </div>
    <LoginDialog></LoginDialog>
  </div>
</template>

<style scoped>
.login {
  margin-left: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.login:before {
  margin-right: 8px;
  margin-left: 8px;
  width: 1px;
  height: 24px;
  background-color: var(--vp-c-divider);
  content: "";
}

.login .name {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-left: 8px;
}

.avatar {
  border-radius: 50%;
  height: 30px;
  width: 30px;
  margin-right: 5px;
  background: #e6e8e7;
}

.nickname {
  font-size: 14px;
  font-weight: 500;
}


</style>