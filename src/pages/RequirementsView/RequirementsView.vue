<script setup lang="ts">
import { CSSProperties, defineComponent } from 'vue'
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
</script>

<template>
    <div class="flex-row ">
        <div>我是需求视图，这个位置打算换成面包屑</div>
        <n-switch :rail-style="railStyle" :round="false" size="large">
            <template #checked>
                前端
            </template>
            <template #unchecked>
                后端
            </template>
        </n-switch>
    </div>

</template>

<style scoped>
.flex-row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}


</style>