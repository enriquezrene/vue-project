<script setup lang="ts">
import { ref } from 'vue'

const isEditable = ref(false)

const header = ref('Shopping List App!')
const items = ref([])
const newItem = ref('')

const saveItem = () => {
  items.value.push({ id: items.length, label: newItem.value })
  newItem.value = ''
}

</script>

<template>
  <h1>{{ header }}</h1>

  <form @submit.prevent="saveItem">
    <input type="text" placeholder="Add an item" v-model="newItem" />
    {{ newItem }}
    <button :disabled="newItem.length<5">Add item</button>
  </form>
  <ul>
    <li v-for="{ id, label } in items" :key="id">{{ label }}</li>
  </ul>

</template>
