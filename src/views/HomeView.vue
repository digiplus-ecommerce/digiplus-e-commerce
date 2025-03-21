<script setup lang="ts">
import ProductsCard from "../components/ProductsCard.vue";
</script>

<template>
  <div class="main-container">
    <p class="title">Hello From Home Page</p>

    <div class="card-grid">
      <ProductsCard />
    </div>
  </div>
</template>

<style scoped>
.title {
  margin-bottom: 2rem;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(5, 18.5rem);
  gap: 10px;
}
</style>
