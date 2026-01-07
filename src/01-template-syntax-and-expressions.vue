<script setup lang="ts">
import { ref } from 'vue'
const message = ref('Hello World!')

</script>

<template>
  <h1>{{ message }} - {{ message.length }}</h1>
  <h1>{{ message.length === 0 ? 'Empty' : message }}</h1>
  <input v-model="message" />
</template>
