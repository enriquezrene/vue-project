<script setup lang="ts">
import { ref } from 'vue'

const isEditable = ref(false)

const header = ref('Shopping List App!')
const items = ref([
  { id: 1, label: 'Item 1', purchased: true },
  { id: 2, label: 'Item 2', purchased: false },
  { id: 3, label: 'Item 3', purchased: true },
])
const newItem = ref('')

const saveItem = () => {
  items.value.push({ id: items.length, label: newItem.value, purchased: false })
  newItem.value = ''
}
</script>

<template>
  <h1>{{ header }}</h1>

  <ul>
    <li v-for="{ id, label, purchased } in items" :key="id" :class="{ strikeout: purchased }">{{ label }}</li>
  </ul>
  <p v-if="items.length === 0">Nothing to see here</p>
</template>

<style scoped>
.strikeout {
  text-decoration: line-through;
  opacity: 0.6;
}
</style>
