<template>
  <div>
    <Error v-if="isError"></Error>
    <div v-else class="container">
      <router-view v-slot="{ Component }">
        <suspense>
          <component :is="Component"/>
        </suspense>
      </router-view>
      <Navigation></Navigation>
    </div>
  </div>
</template>
<script setup lang="ts">
const {isError} = storeToRefs(useMain())
const router = useRouter()
router.push({name: "characters"})
</script>
<style lang="less">

</style>
