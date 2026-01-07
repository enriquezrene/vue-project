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

  <input type="text" placeholder="Add an item"
         v-model="newItem"
         v-on:keyup.enter="items.push({ id: items.length, label: newItem })" />

  {{ newItem }}
  <button
    v-on:click="items.push({ id: items.length, label: newItem })"
  >
    Add item
  </button>
  <ul>
    <li v-for="{ id, label } in items" :key="id">{{ label }}</li>
  </ul>
</template>
