<script setup lang="ts">
import Carousel from "../../components/Carousel.vue";
</script>

<template>
  <div class="main-container">
    <el-row class="carousel-container">
      <el-col :span="24">
        <Carousel />
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.carousel-container {
  width: 100%;
  height: 100%;
  margin-bottom: 3rem;
}
</style>
