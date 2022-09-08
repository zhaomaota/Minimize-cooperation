<script setup lang="ts">
// 声明一个myInterface接口，规定了使用该接口的类里面有且仅有name和age两个属性，其数据类型需符合接口定义

class Person{
    private name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
}

const per = new Person('孙悟空',18)
</script>

<template>
  <div>我是全局总览</div>
</template>

<style scoped></style>
