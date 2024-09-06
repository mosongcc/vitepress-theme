<!--
通过替换开始(mosong-vip-content-beg)结束(mosong-vip-content-end)标记间的内容，控制【VIP可见内容】与【VIP开通提示】只有一个正常展示。

插槽slot放组件根路径，不影响文档原始结构。
-->
<script setup>
import {ref} from 'vue'
import {$store} from "../../store";
import Popout from "./popout.vue";
import {state} from "./state";

// 开发环境显示所有内容
const isDev = ref(false)
if (typeof window !== 'undefined') {
  isDev.value = window.location.href.indexOf('://localhost') !== -1
}

//const props = defineProps({})

function buy() {
  if (!$store.isLogin) {
    $store.loginVisible = true
    return
  }
  state.visible = true
}

</script>

<template>
  <div class="vip-content" origin="https://vitepress.mosong.cc">
    <span class="mosong-vip-content-beg"></span>
  </div>

  <slot></slot>

  <div :style="{display: isDev?'block':'none'}">
    <span class="mosong-vip-content-end"></span>
    <div class="vip-block">
      <div class="content">
        <p>💞开通VIP，阅读全部会员文章。
          <template v-if="!$store.isLogin">如果你已经开通，请 <a @click="$store.loginVisible=true">登录</a></template>
        </p>
        <button class="btn" @click="buy">🔒去开通</button>
      </div>
      <popout></popout>
    </div>
    <div style="display: none;">
      <a href="https://vitepress.mosong.cc">VitePress主题</a>
      <a href="https://blog.mosong.cc">程序员墨松</a>
    </div>
  </div>
</template>

<style scoped>

.vip-block {
  border: solid 1px #cccccccc;
  background-color: #fdf1d9;
  color: #666666;
  border-radius: 10px;
  padding: 15px;
}

.content {
  text-align: center;
}

.btn {
  background-color: #9b8aff;
  color: #ffffff;
  padding: 3px 10px;
  border-radius: 10px;
}

</style>