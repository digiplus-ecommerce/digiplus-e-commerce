<script setup lang="ts">
// import ProductsCard from "../../components/ProductsCard.vue";
import Banner from "../../components/Banner.vue";
import productData from "../../data/products.json";

console.log(productData);
</script>

<template>
  <div class="wrapper">
    <!-- banner section -->
    <div class="banner-container">
      <Banner />
    </div>

    <!-- <div class="card-grid">
      <ProductsCard
        v-for="product in productData"
        :key="product.id"
        :product="product"
      />
    </div> -->
  </div>
</template>

<style scoped>
.banner-container {
  display: flex;
  gap: 10px;
  width: 100%;
  height: 40vh;
  margin-bottom: 3rem;
}

/* products wrapper grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}
</style>
