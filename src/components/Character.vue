<template>
  <div class="list-item">
    <div class="list-item-box">
      <div class="image">
        <img :src="item.image" alt="">
      </div>
      <div class="name">{{ item.name }}</div>
    </div>
    <div class="noty" @click="showMessage(item.species)"><img src="/images/noty.svg" alt="noty"></div>
  </div>
</template>

<script setup lang="ts">
import {characterType} from "../types/global.types";

interface propsType {
  item: characterType
}

const {item} = defineProps<propsType>()

const showMessage = (str?: string) => {
  str && alert(str)
}
</script>

<style scoped lang="less">
.list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .br(15px);
  border: 1px solid #F4F5F5;
  background: #FFF;
  padding: 15px;
  margin: 10px 0 0;

  .noty {
    cursor: pointer;
  }

  &-box {
    display: flex;
    align-items: center;


    .image {
      .br(80px);
      width: 50px;
      height: 50px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .name {
      margin: 0 0 0 20px;
      color: @black;
      font-size: 17px;
      font-weight: 700;
      letter-spacing: -0.327px;
    }
  }
}

.list-item:first-child {
  margin: 0;
}
</style>