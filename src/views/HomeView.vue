<script setup lang="ts">
import ProductsCard from "../components/ProductsCard.vue";
import productData from "../data/products.json";

console.log(productData);
</script>

<template>
  <div class="main-container">
    <p class="title">Hello From Home Page</p>

    <div class="card-grid">
      <ProductsCard
        v-for="product in productData"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<style scoped>
.title {
  margin-bottom: 2rem;
}

.card-grid {
  display: grid;
  /* grid-template-columns: repeat(5, 18.5rem); */
  grid-template-columns: repeat(5, 1fr);

  gap: 10px;
}
</style>
