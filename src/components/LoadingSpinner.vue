<template>
  <div class="loading-container">
    <Vue3Lottie :animationData="loadingSpinner" />
  </div>
</template>

<script setup lang="ts">
import { Vue3Lottie } from "vue3-lottie";
import loadingSpinner from "../assets/lottie/loadingSpinner.json";
</script>

<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20rem;
}
</style>
