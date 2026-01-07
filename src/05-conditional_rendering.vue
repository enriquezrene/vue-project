<script setup lang="ts">
import { ref } from 'vue'

const isEditable = ref(false)

const header = ref('Shopping List App!')
const items = ref([

])
const newItem = ref('')

const saveItem = () => {
  items.value.push({ id: items.length, label: newItem.value })
  newItem.value = ''
}

const setEditable = (value: boolean) => {
  isEditable.value = value
}
</script>

<template>
  <h1>{{ header }}</h1>

  <div>
    <button @click="setEditable(false)" v-if="isEditable">Cancel</button>
    <button @click="setEditable(true)" v-else>Add Item</button>

  </div>
  <form @submit.prevent="saveItem" v-if="isEditable">
    <input type="text" placeholder="Add an item" v-model="newItem" />

    {{ newItem }}
    <button>Add item</button>
  </form>
  <ul>
    <li v-for="{ id, label } in items" :key="id">{{ label }}</li>
  </ul>
  <p v-if="items.length === 0">
    Nothing to see here
  </p>
  <h1 v-if="isEditable">Adding items</h1>
  <h1 v-else>View only</h1>
</template>
