<template>
  <!-- banner section -->
  <el-row :gutter="30" class="banner-container">
    <Banner />
  </el-row>

  <!-- title section -->
  <el-row class="row-title">
    <el-col :span="24">
      <TitleSeperator
        title="Unlock Exclusive Deals - Shop the Best, Save More!"
        description="Discover unbeatable prices on top-quality products across all categories.
        Whether you're upgrading your home, refreshing your wardrobe, or finding
        the perfect gift, our latest deals are here to make shopping smarter and
        more rewarding."
      />
    </el-col>
  </el-row>

  <!-- products grid -->
  <el-row :gutter="50" class="product-header">
    <ProductsHeader />
  </el-row>

  <div class="card-grid">
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <ProductsCard
      v-else
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>

  <!-- end title section -->
  <el-row class="row-title">
    <el-col :span="24">
      <TitleSeperator
        title="Thanks for Shopping With Us!"
        description="We’re grateful to have you as part of our community. 
        Whether you found something special or are just browsing, we hope to 
        see you again soon. Stay connected for exclusive deals, new arrivals, 
        and more surprises—delivered straight to your inbox."
      />
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import { useProducts } from "../../composables/api/useProducts";
import ProductsHeader from "../../components/ProductsHeader.vue";
import TitleSeperator from "../../components/TitleSeperator.vue";
import ProductsCard from "../../components/ProductsCard.vue";
import Banner from "../../components/Banner.vue";

const { data: products, isLoading, error, fetchProducts } = useProducts();

onMounted(() => {
  fetchProducts();
});
</script>

<style scoped>
.banner-container,
.row-title {
  margin-bottom: 3rem;
}

.banner-title {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 3rem;
}

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid red; */
  width: 100%;
  height: 8rem;
  margin-bottom: 3rem;
}

/* products wrapper grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  margin-bottom: 3rem;
}
</style>
