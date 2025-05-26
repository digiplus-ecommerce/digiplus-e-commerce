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
      <RouterLink to="/add-product">Add Products</RouterLink>
    </div>

    <div class="auth-links">
      <RouterLink to="/login">ordiales@gmail.com</RouterLink>
      <RouterLink to="/login">Logout</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1440px;
  height: 5rem;
  margin: 0 auto;
  margin-bottom: 3rem;
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
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
}

a {
  text-decoration: none;
  padding: 0.2rem 1rem;
  font-weight: 600;
}

.auth-links {
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 5px;
}

.auth-links a {
  font-size: 1rem;
  font-weight: 500;
}

.auth-links a:last-child {
  background-color: var(--primary-tint);
  border-radius: 5px;
  border: none;
}
</style>
