<script setup lang="ts">
import Avatar from './Avatar.vue'
import {Money16Regular,Accessibility16Filled} from '@vicons/fluent'

import { Icon } from '@vicons/utils'
</script>

<template>
    <div>我是子组件</div>
    <Avatar></Avatar>
    <Icon color="green" size="80">
        <Money16Regular />
        <Accessibility16Filled/>
    </Icon>
</template>

<style scoped>
</style>
