<script setup lang="ts">
import { h, ref } from 'vue'
// 引入头像图标
import { AirplaneTakeOff16Regular } from '@vicons/fluent'
// 引入菜单组件
import type { MenuOption } from 'naive-ui'
// 引入routerLink
import { RouterLink } from 'vue-router'
// 被选中的菜单的index
let activeKey = ref(null)
// 菜单枚举
const menuOptions: MenuOption[] = [
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/overview'
                    }
                },
                { default: () => '全局总览' }
            ),
        key: 'quan-ju-zong-lan',
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/require'
                    }
                },
                { default: () => '需求视图' }
            ),
        key: 'xu-qiu-shi-tu',
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/test'
                    }
                },
                { default: () => 'OA测试' }
            ),
        key: 'o-a-ce-shi',
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/document'
                    }
                },
                { default: () => '文档仓库' }
            ),
        key: 'wen-dang-cang-ku',
    }
]
</script>

<template>
    <div class="indent20 flex">
        <!-- 横向菜单栏 -->
        <div>
            <span class="main-title">极简协作</span>
            <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
        </div>
        <!-- 使用图标的头像 -->
        <n-avatar round size="large">
            <n-icon color="black">
                <AirplaneTakeOff16Regular />
            </n-icon>
        </n-avatar>
    </div>


</template>

<style scoped>
.indent20 {
    margin: 0 20px;
}

.main-title {
    font-size: 55px;
}

.flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
</style>
