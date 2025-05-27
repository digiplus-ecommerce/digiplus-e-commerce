<script setup lang="ts">
import ProductsCard from "../../components/ProductsCard.vue";
import Banner from "../../components/Banner.vue";
// import Carousel from "../../components/Carousel.vue";
import productData from "../../data/products.json";

console.log(productData);
</script>

<template>
  <!-- banner section -->
  <el-row :gutter="30" class="banner-container">
    <Banner />
  </el-row>

  <!-- <el-row class="carousel-container">
    <el-col :span="24">
      <Carousel />
    </el-col>
  </el-row> -->

  <div class="card-grid">
    <ProductsCard
      v-for="product in productData"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<style scoped>
.banner-container {
  margin-bottom: 3rem;
}

.carousel-container {
  width: 100%;
  height: 100%;
  margin-bottom: 3rem;
}

/* products wrapper grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}
</style>
