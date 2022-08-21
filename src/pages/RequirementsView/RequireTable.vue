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
        degree: '有点着急',
        status: 0,
        allTheInfomation: '美化页面大家都很喜欢的啦，我觉得这个太重要了！'
    },
    {
        sort: 2,
        title: '增加充值功能',
        degree: '十万火急',
        status: 1,
        allTheInfomation: '增加充值功能，一定要加，不然怎么赚钱呢？'
    },
    {
        sort: 3,
        title: '开启PK玩法',
        degree: '十万火急',
        status: 2,
        allTheInfomation: 'PK发型不乱'
    },
    {
        sort: 4,
        title: '可以加好友',
        degree: '比较着急',
        status: 3,
        allTheInfomation: '社交才是王道'
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
        key: "sort",
        sortOrder: true,
        sorter: 'default'
    },
    {
        title: "需求概要",
        key: "title",
        render(row: any) {
            return h(
                NButton,
                {
                    text: true,
                    onClick: () => { changeModal(row) }
                },
                {
                    default: () => row.title
                }
            );
        }
    },
    {
        title: "紧急程度",
        key: "degree"
    },
    {
        title: "状态",
        key: "status",
        render(row: any) {
            return h(
                NButton,
                {
                    type: buttonType(row.status),
                    onClick: () => { changeButtonStatus(row) }
                },
                {
                    default: () => {
                        switch (row.status) {
                            case 0:
                                return '尚未开始'
                            case 1:
                                return '正在处理'
                            case 2:
                                return '提交测试'
                            case 3:
                                return '测试通过'
                        }
                    }
                }
            );
        }
    }
]
// 是否分页
let pagination = ref(false)
// 按钮类型的样式
function buttonType(status: number) {
    switch (status) {
        case 0:
            return 'info'
        case 1:
            return 'error'
        case 2:
            return 'warning'
        case 3:
            return 'success'
    }
}
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

// 显示完整需求信息的modal的数据
let modalData = reactive({
    title: '我是标题',
    header: '我是头部',
    main: '我是主体',
    footer: '我是尾巴',
})


// 控制modal显示与否
let showModal = ref(false)
// 渲染modal的方法
function changeModal(row: { allTheInfomation: string; }) {
    // 变更modal数据
    modalData.main = row.allTheInfomation
    // 显示modal
    showModal.value = true
}
</script>

<template>
    <div>我是需求表格,postSelect：{{ postSelect }}</div>
    <!-- 表格主体 -->
    <n-data-table :columns="columns" :data="dataSource" :pagination="pagination" :bordered="true" />
    <!-- 显示完整需求信息的modal -->
    <n-modal v-model:show="showModal">
        <n-card style="width: 600px" :title=modalData.title :bordered="false" size="huge" role="dialog"
            aria-modal="true">
            <template #header-extra>
                {{ modalData.header }}
            </template>
            {{ modalData.main }}
            <template #footer>
                {{ modalData.footer }}
            </template>
        </n-card>
    </n-modal>
</template>

<style scoped>
</style>