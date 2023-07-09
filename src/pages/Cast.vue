<template>
  <div class="cast">
    <h2 class="page-title">Персонажи</h2>
    <Search class="cast-search"></Search>
    <ListCharacters :list="filteredCharacters()"></ListCharacters>
    <button class="button button-default" @click="currentPage=(parseInt(currentPage)+1).toString()">
      Показать еще
      <span><img src="/images/arrowDown.svg" alt="arrow"></span>
    </button>
    <div class="cast-box" v-show="searchValue" @click="searchValue='';Characters=[];currentPage='1'">
      <button class="button button-primary">Сбросить поиск</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const {params, path} = useRoute()
const router = useRouter()
const {fetchCharacters,Characters} = useMain()
const {filteredCharacters,searchValue} = storeToRefs(useMain())
const currentPage = ref<string>(params.page as string ?? "1")


const Prepare = async () => {


  await router.push({
    query: {
      page: currentPage.value
    }
  })
  await fetchCharacters(currentPage.value)
}
watch(currentPage, () => {
  Prepare()
}, {immediate: true})

</script>

<style scoped lang="less">
.cast {
  &-search {
    margin: 12px 0 10px;
  }

  &-box {
    padding: 11px 25px;
    background: #fff;
  }
}

.button-default {
  margin: 10px 0 18px;
}
</style>