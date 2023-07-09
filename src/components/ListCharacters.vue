<template>
  <div>
    <div class="count">{{ list.length }} персонажей</div>
    <div class="list">
      <transition-group name="fade">
      <Character :item="item" :key="item.id" v-for="item in list"></Character>
      </transition-group>
    </div>
  </div>
</template>
<script setup lang="ts">

import {characterType} from "../types/global.types";

interface propsType {
  list: characterType[]
}

const {list} = defineProps<propsType>()
</script>

<style scoped lang="less">
.count{
  color: @gray;
  text-align: center;
}
.list {
  display: flex;
  flex-direction: column;
  margin:20px 0;
  height: 500px;
  overflow-y: auto;
}
.list::-webkit-scrollbar-thumb {
  background: @black;
  .br(10px);
}
.list::-webkit-scrollbar-track {
  background-color: #eee;
}
.list::-webkit-scrollbar {
  width: 5px;
}

</style>