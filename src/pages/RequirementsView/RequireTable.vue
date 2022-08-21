<script setup lang="ts">
import { h, defineProps, onBeforeMount, reactive, ref, computed, nextTick } from 'vue'
import { NButton, useMessage } from "naive-ui";
const props = defineProps({
    postSelect: Boolean
});
// 模拟的前端需求数据
let frontEndData = reactive([
    {
        sort: 1,
        title: '美化页面',
        degree: '一点也不着急',
        status: 0
    },
    {
        sort: 2,
        title: '增加充值功能',
        degree: '十万火急',
        status: 1
    },
    {
        sort: 3,
        title: '增加充值功能',
        degree: '十万火急',
        status: 2
    },
    {
        sort: 4,
        title: '增加充值功能',
        degree: '十万火急',
        status: 3
    }
])
// 模拟的后端需求数据
const backEndData = reactive([
    {
        sort: 1,
        title: '等级数据',
        degree: '不是很急',
        status: 3
    },
    {
        sort: 2,
        title: '充值金额',
        degree: '十万火急',
        status: 1
    }
])
// 表格列信息
const columns = [
    {
        title: "排序",
        key: "sort"
    },
    {
        title: "需求概要",
        key: "title"
    },
    {
        title: "紧急程度",
        key: "degree"
    },
    {
        title: "状态",
        key: "status",
        render(row: any, index: any) {
            return h(
                NButton,
                {
                    type: 'success',
                    onClick: () => { changeButtonStatus(row) }
                },
                {
                    default: () => {
                        switch (row.status) {
                            case 0:
                                return '待处理'
                            case 1:
                                return '正在处理'
                            case 2:
                                return '提交测试'
                            case 3:
                                return '已完成'
                        }
                    }
                }
            );
        }
    }
]
// 是否分页
let pagination = ref(false)
// 状态按钮点击回调
function changeButtonStatus(row: any) {
    console.log('状态按钮被点击了', row)
    if (row.status < 3) {
        row.status++
    }
}


// 根据前/后端状态选择数据源，用计算属性实现
let dataSource = computed(() =>
    props.postSelect ? frontEndData : backEndData
)


</script>

<template>
    <div>我是需求表格,postSelect：{{ postSelect }}</div>
    <!-- 表格主体 -->
    <n-data-table :columns="columns" :data="dataSource" :pagination="pagination" :bordered="true" />
</template>

<style scoped>
</style>