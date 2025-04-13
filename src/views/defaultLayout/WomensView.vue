<script setup lang="ts">
import Button from "../../components/Button.vue";
</script>

<template>
  <div class="main-container">
    <p>Hello From Womens Page</p>
    <div class="idk">
      <!-- As a regular button -->
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger | Delete</Button>
      <Button disabled="true">Disabled</Button>

      <!-- As a router link -->
      <Button btnType="link" to="/about" variant="primary">Go to About</Button>
    </div>
  </div>
</template>

<style scoped>
.idk {
  display: flex;
  gap: 20px;
}
</style>
