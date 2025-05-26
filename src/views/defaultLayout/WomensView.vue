<script setup lang="ts">
import Button from "../../components/Button.vue";
</script>

<template>
  <div class="main-container">
    <p>Hello From Womens Page</p>
    <div class="idk">
      <!-- As a regular button -->
      <Button type="primary" btnType="button">Primary</Button>
      <Button type="default" btnType="button">Default</Button>
      <Button type="danger" btnType="button">Danger | Delete</Button>
      <Button :disabled="true" btnType="button">Disabled</Button>

      <!-- As a router link -->
      <Button btnType="link" to="/about" type="primary">Go to About</Button>
    </div>
  </div>
</template>

<style scoped>
.idk {
  display: flex;
  gap: 20px;
}
</style>
