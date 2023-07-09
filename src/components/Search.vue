<template>
  <div class="search">
    <span><img src="/images/search.svg" alt="search"></span>
    <input v-model.trim="searchValue" type="text" class="input">
  </div>
</template>
<script setup lang="ts">
const {searchValue} = storeToRefs(useMain())

</script>
<style scoped lang="less">
.search {
  .br(100px);
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background: #fff;

  span {
    display: block;
    margin: 0 8px 0 0;
  }

  .input {
    width: 90%;
  }
}
</style>