<script setup lang="ts">
import { ref } from 'vue'
const header = ref('Shopping List App!')
const items = ref([
  { id: 1, label: 'Item 1' },
  { id: 2, label: 'Item 2' },
  { id: 3, label: 'Item 3' },
  { id: 4, label: 'Item 4' },
])
</script>

<template>
  <h1>{{ header }}</h1>
  <ul>
    <li v-for="item in items" :key="item.id">{{ item.label }}</li>
  </ul>

  <ul>
    <li v-for="{ id, label } in items" :key="id">{{ label }}</li>
  </ul>

<!--  no good idea as index is the default key which is a bad idea-->
  <ul>
    <li v-for="({ id, label }, index) in items" :key="index">{{ index }} - {{ label }}</li>
  </ul>
</template>
