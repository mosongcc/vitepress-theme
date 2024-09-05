<script setup>
import DefaultTheme from 'vitepress/theme';
import Login from './login/login.vue';
import VipPay from "./vip-pay/index.vue"

const {Layout} = DefaultTheme

</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <Login></Login>
    </template>

    <template #doc-footer-before>

    </template>

    <!-- 当 layout: 'doc' 时启用，显示在doc最下面   -->
    <template #doc-after>

    </template>

    <template #layout-bottom>
      <VipPay></VipPay>
    </template>

  </Layout>
</template>

<style scoped>

</style>
