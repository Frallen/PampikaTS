<template>
  <div class="index">
    <h2 class="page-title">Персонажи</h2>
    <Search class="index-search" v-model:search="searchValue"></Search>
  </div>
</template>

<script setup lang="ts">
const searchValue = ref<string>("")
</script>

<style scoped lang="less">
.index {
  &-search {
  margin: 12px 0 5px;
  }
}
</style>