<template>
  <!-- left -->
  <el-col :span="16">
    <div class="image-wrapper">
      <div class="layer" />
      <el-image :src="bannerLeft" fit="cover" lazy />
    </div>
  </el-col>

  <!-- right -->
  <el-col :span="8">
    <div class="image-wrapper">
      <div class="layer" />
      <el-image :src="bannerRight" fit="cover" lazy />
    </div>
  </el-col>
</template>

<script setup lang="ts">
import bannerLeft from "../assets/banner-img/banner-sneaker.jpg";
import bannerRight from "../assets/banner-img/banner-shoe.jpg";
</script>

<style scoped>
.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.el-col {
  width: 100%;
  height: 100%;
}

.layer {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 30%;
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

.el-image {
  width: 100%;
  height: 100%;
}
</style>
