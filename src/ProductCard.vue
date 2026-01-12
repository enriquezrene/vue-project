<script setup lang="ts">
// 1. Define the interface for your props to match your JSON structure
interface Props {
  name: string
  image: string // This will be "img.png", "img_1.png", etc.
  price: number
}

// 2. Access the props
const props = defineProps<Props>()
</script>

<template>
  <div class="product-card">
    <div class="image-container">
      <img
        :src="`/images/${props.image}`"
        :alt="props.name"
        class="product-image"
      />
    </div>

    <div class="product-info">
      <h3 class="product-name">{{ props.name }}</h3>
      <p class="product-price">${{ props.price.toFixed(2) }}</p>
      <button class="add-btn">Add to Cart</button>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  background: white;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.image-container {
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.product-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Ensures the whole pineapple shows without cropping */
}

.product-name {
  font-size: 1.1rem;
  margin: 0;
  color: #333;
  font-weight: 600;
}

.product-price {
  font-size: 1.25rem;
  color: #27ae60;
  font-weight: bold;
  margin: 4px 0;
}

.add-btn {
  width: 100%;
  padding: 10px;
  background-color: #f1c40f; /* Pineapple yellow! */
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}

.add-btn:hover {
  background-color: #d4ac0d;
}
</style>
