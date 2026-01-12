<script setup lang="ts">

import { useProductStore} from '@/stores/ProductStore.ts'
import ProductCard from '@/ProductCard.vue'

const productsStore = useProductStore()
productsStore.fill()
</script>


<template>
  <div id="app">
A
    <div class="product-grid">
      <ProductCard
        v-for="(item, index) in productsStore.products"
        :key="index"
        :name="item.name"
        :image="item.image"
        :price="item.price"
      />
    </div>
B

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>


      <ul>
        <li>
          <router-link to="/nv-one">First page</router-link>
        </li>
        <li>
          <router-link to="/nv-two">Second page</router-link>
        </li>
      </ul>

      <div class="views-container">
        <router-view class="view one"></router-view>
        <router-view class="view two" name="a"></router-view>
        <router-view class="view three" name="b"></router-view>
      </div>

    </nav>
  </div>
</template>

<style>
/* Basic styling to see the views */
.views-container {
  border: 1px solid #ccc;
  padding: 20px;
  margin-top: 20px;
}

.view {
  padding: 10px;
  margin: 10px;
  border: 1px solid #ddd;
}

.one { background-color: #f0f8ff; }
.two { background-color: #fff0f5; }
.three { background-color: #f0fff0; }
</style>
