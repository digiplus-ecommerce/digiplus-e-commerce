<template>
  <!-- left -->
  <div class="banner-left">
    <div class="layer" />
    <img src="../assets/banner-sneaker.jpg" alt="banner-left" />
  </div>

  <!-- right -->
  <div class="banner-right">
    <div class="layer" />
    <img src="../assets/banner-shoe.jpg" alt="banner-right" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.banner-left {
  position: relative;
  width: 100%;
  flex: 1;
}

.banner-right {
  position: relative;
  width: 100%;
  max-width: 30rem;
}

.layer {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  opacity: 40%;
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

img {
  width: 100%;
  height: 100%;
  border-radius: 30px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  object-fit: cover;
}
</style>
