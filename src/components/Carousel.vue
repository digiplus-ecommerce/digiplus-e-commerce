<template>
  <el-carousel height="32.75rem">
    <el-carousel-item v-for="(img, index) in urls" :key="index">
      <div class="layer" />

      <el-image :src="img" fit="cover" lazy />
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
import caro1 from "../assets/carousel-img/slide-1.webp";
import caro2 from "../assets/carousel-img/slide-2.webp";
import caro3 from "../assets/carousel-img/slide-3.webp";

const urls = [caro1, caro2, caro3];
</script>

<style scoped>
.el-image {
  width: 100%;
  height: 100%;
}

.el-carousel {
  position: relative;
  border-radius: 30px;
}

.layer {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  opacity: 20%;
  background-image: linear-gradient(
    to left top,
    #afcfb9,
    #acd1b9,
    #a8d3b8,
    #a4d6b8,
    #a0d8b8
  );
  z-index: 100;
}
</style>
