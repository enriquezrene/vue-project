<script setup lang="ts">
import { watch } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

const route = useRoute()

watch(
  () => route.params.id,
  (newId, oldId) => {
    console.log(newId, oldId, 'new', 'old')
  }
)

onBeforeRouteUpdate(async (to, from) => {
  // react to route changes...fetch user data, check permissions, etc...
})

</script>

<template>
  <p> User component {{ $route.params.id }} </p>
  <router-view/>
</template>

<style scoped></style>
