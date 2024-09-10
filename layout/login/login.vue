<script setup>
import {watch} from 'vue';
import {$data} from "./data";
import {login} from './login';
import {$store} from '../../store';
import LoginDialog from './login-dialog.vue';
import UserPanel from "./user-panel.vue";

//显示登录框
watch(() => $store.loginVisible, async (n, o) => {
  if (n) {
    await login()
  }
})

</script>

<template>
  <div class="login">
    <div @click="$store.loginVisible = true" @mouseover="$store.isLogin?$data.userPanelVisible=true:''" class="name">
      <img v-if="!$store.user.avatar" src="./default-avatar.webp" class="avatar">
      <img v-if="$store.user.avatar" :src="$store.user.avatar" class="avatar">
      <span class="nickname">{{ $store.isLogin ? ($store.user.nickname || '用户') : '登录' }}</span>
    </div>
    <UserPanel></UserPanel>
    <LoginDialog></LoginDialog>
  </div>
</template>

<style scoped>
.login {
  margin-left: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
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