<template>
  <Navbar />
  <main class="main-container">
    <slot>
      <!-- Where the page content will go -->
    </slot>
  </main>
</template>

<script setup lang="ts">
import Navbar from "../../components/Navbar.vue";
</script>

<style scoped></style>
