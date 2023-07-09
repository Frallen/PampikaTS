<template>
  <img src="/public/images/" alt="">
  <div class="nav">
    <router-link :to="item.Link" :active-class="'active'" class="nav-item" v-for="item in Navigation">
      <span><img :src="'/public/images/'+item.Icon" alt="icon"></span>
      {{ item.Title }}
    </router-link>
  </div>
</template>
<script setup lang="ts">
const {Navigation} = storeToRefs(useMain())
</script>
<style scoped lang="less">
.nav {
  padding: 18px 44px;
  .br(40px 40px 30px 30px);
  background: #fff;
  box-shadow: 0px 0px 13px 0px rgba(22, 22, 23, 0.26);
  display: flex;
  align-items: center;
  justify-content: space-between;

  &-item {
    text-decoration: none;
    color: black;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.327px;
    .trs(0.3s);

    span {
      display: block;
    }
  }

  &-item:hover {
    .trs(0.3s);
    color: @orange;
  }
}
.active{
  color: @orange;
}
</style>
  