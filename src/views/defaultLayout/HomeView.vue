<template>
  <!-- banner section -->
  <el-row class="banner-container">
    <Banner />
  </el-row>

  <!-- <el-row class="carousel-container">
    <el-col :span="24">
      <Carousel />
    </el-col>
  </el-row> -->

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
  <el-row class="product-header">
    <ProductsHeader />
  </el-row>

  <LoadingSpinner v-if="isLoading" />
  <el-space v-else-if="error">{{ error }}</el-space>
  <el-row v-else class="card-container">
    <ProductsCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </el-row>

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
import LoadingSpinner from "../../components/LoadingSpinner.vue";

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

.row-title,
.product-header,
.card-container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}

.banner-container {
  display: flex;
  justify-content: space-between;
}

.banner-container {
  height: 34rem;
}

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  height: 8rem;
  margin-bottom: 3rem;
}

.card-container {
  display: grid;
  /* grid-template-columns: repeat(5, 1fr); */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 3rem;
}

@media only screen and (max-width: 990px) {
  .banner-container {
    flex-direction: column;
  }
}
</style>
