<script setup lang="ts">
import HeaderPage from "./components/HeaderPage/HeaderPage.vue";
</script>

<template>
<!-- 顶部菜单栏 -->
<HeaderPage/>
<!-- 页面主体，根据路由渲染 -->
 <router-view></router-view>
</template>

<style scoped>
</style>
