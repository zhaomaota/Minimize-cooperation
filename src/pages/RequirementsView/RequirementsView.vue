<script setup lang="ts">
import { CSSProperties, defineComponent, ref, onBeforeMount } from 'vue'
import RequireTable from './RequireTable.vue'
// 开关状态，true显示前端，false显示后端
let active = ref(true)
// 前后端切换开关内容
const railStyle = ({
    focused,
    checked
}: {
    focused: boolean
    checked: boolean
}) => {
    const style: CSSProperties = {}
    if (checked) {
        style.background = '#008000'
        if (focused) {
            style.boxShadow = '0 0 0 2px #00800040'
        }
    } else {
        style.background = '#2080f0'
        if (focused) {
            style.boxShadow = '0 0 0 2px #2080f040'
        }
    }
    return style
}
// 开关回调
function handleChange() {
    console.log('现在的状态是', active.value)
    const postSelect = active.value ? '前端' : '后端'
    localStorage.setItem('postSelect', postSelect)
}
// 挂载前钩子
onBeforeMount(() => {
    console.log('我要挂载了！')
    if (localStorage.getItem('postSelect') != null) {
        const postSelect = localStorage.getItem('postSelect')
        if (postSelect === '后端') {
            active.value = false
        }
    }
})
</script>

<template>
    <div class="flex-row ">
        <div>我是需求视图，这个位置打算换成面包屑</div>
        <!-- 前后端切换开关 -->
        <n-switch v-model:value="active" :rail-style="railStyle" :round="false" size="large"
            @update:value="handleChange">
            <template #unchecked>
                后端
            </template>
            <template #checked>
                前端
            </template>
        </n-switch>
    </div>
    <!-- 需求展示 -->
    active：{{active}}
    <require-table :post-select="active"></require-table>
</template>

<style scoped>
.flex-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>