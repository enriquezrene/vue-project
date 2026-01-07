<script setup lang="ts">
import { reactive } from 'vue'

const state = reactive({ count: 0 })

const increment = () => {
  state.count += 1
}

</script>

<template>
  <h1>{{state.count}}</h1>
  <button @click="increment">Increment</button>
</template>
