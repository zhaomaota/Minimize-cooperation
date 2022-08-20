import {createRouter,createWebHistory  } from 'vue-router'
import OverallOverview from '../pages/OverallOverview/OverallOverview.vue'
import OATest from '../pages/OATest/OATest.vue'
import RequirementsView from '../pages/RequirementsView/RequirementsView.vue'
import DocumentWarehouse from '../pages/DocumentWarehouse/DocumentWarehouse.vue'

const routes = [
        {
            path:'/',
            name:'首页',
            redirect:'overview'
        },
        {
            path:'/overview',
            name:'全局总览',
            component:OverallOverview
        },
        {
            path:'/require',
            name:'需求视图',
            component:RequirementsView
        },
        {
            path:'/test',
            name:'OA测试',
            component:OATest
        },
        {
            path:'/document',
            name:'文档仓库',
            component:DocumentWarehouse
        }
    ]
    const router = createRouter({
        history:createWebHistory(),
        routes
    })
    export default router