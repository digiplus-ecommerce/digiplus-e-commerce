<script setup lang="ts">
import Navbar from "../../components/Navbar.vue";
</script>

<template>
  <Navbar />
  <main>
    <slot>
      <!-- Where the page content will go -->
    </slot>
  </main>
</template>

<style scoped></style>
