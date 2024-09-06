<script setup>
import DefaultTheme from 'vitepress/theme';
import Login from './login/login.vue';

const {Layout} = DefaultTheme

</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <Login></Login>
    </template>

    <template #doc-footer-before>

    </template>

    <template #doc-after>

    </template>

    <template #layout-bottom>

    </template>

  </Layout>
</template>

<style scoped>

</style>
