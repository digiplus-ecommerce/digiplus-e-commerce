<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <div class="logo-wrapper">
      <p>Logo</p>
    </div>

    <div class="router-container">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/womens">Womens</RouterLink>
      <RouterLink to="/mens">Mens</RouterLink>
      <RouterLink to="/sales">Sales</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: var(--secondary-shade);
  padding: 0.5rem 2rem;
}

.logo-wrapper {
  width: 100%;
  height: auto;
}

.logo-wrapper p {
  font-weight: 700;
  font-size: 1.2rem;
}

.router-container {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;
}

a {
  text-decoration: none;
  padding: 0.2rem 1rem;
  font-weight: 600;
}
</style>
