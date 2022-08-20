<script setup lang="ts">
import HeaderPage from "./components/HeaderPage/HeaderPage.vue";
</script>

<template>
    <!-- 顶部菜单栏 -->
    <HeaderPage />
    <!-- 页面主体，根据路由渲染 -->
    <div class="margin20">
         <router-view></router-view>   
    </div>

</template>

<style scoped>
.margin20{
    margin: 20px 20px 0 20px;
}
</style>
