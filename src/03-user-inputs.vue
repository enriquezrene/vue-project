<script setup lang="ts">
import { ref } from 'vue'
const header = ref('Shopping List App!')
const items = ref([
  { id: 1, label: 'Item 1' },
  { id: 2, label: 'Item 2' },
  { id: 3, label: 'Item 3' },
  { id: 4, label: 'Item 4' },
])
const newItem = ref('')
</script>

<template>
  <h1>{{ header }}</h1>
  <!--  clear spaces-->
<!--  <input v-model.trim="newItem" type="text" placeholder="Add an item">-->
  <!--  once the user finish typing-->
<!--  <input v-model.lazy="newItem" type="text" placeholder="Add an item">-->
  <input v-model="newItem" type="text" placeholder="Add an item">
  {{ newItem}}
  <ul>
    <li v-for="{ id, label } in items" :key="id">{{ label }}</li>
  </ul>
</template>
