<script setup lang="ts">
import { ref, computed } from 'vue'

const header = ref('Shopping List App!')
const items = ref([
  { id: 1, label: 'Item 1', purchased: true },
  { id: 2, label: 'Item 2', purchased: false },
  { id: 3, label: 'Item 3', purchased: true },
])

const reversedItems = computed(() => { return [...items.value.reverse()]})

const newItem = ref('')
const characterCount = computed(() => {
  return newItem.value.length
})

const saveItem = () => {
  items.value.push({ id: items.length, label: newItem.value, purchased: false })
  newItem.value = ''
}
</script>

<template>
  <h1>{{ header }}</h1>
  <form @submit.prevent="saveItem">
    <input maxlength="20" type="text" placeholder="Add an item" v-model="newItem" />
    {{ newItem }}
    <button>Add item</button>
  </form>
  <p><h4>{{ characterCount}} / 20</h4></p>
  <ul>
    <li v-for="{ id, label, purchased } in reversedItems" :key="id" :class="{ strikeout: purchased }">
      {{ label }}
    </li>
  </ul>
  <p v-if="items.length === 0">Nothing to see here</p>
</template>

<style scoped>
.strikeout {
  text-decoration: line-through;
  opacity: 0.6;
}
</style>
