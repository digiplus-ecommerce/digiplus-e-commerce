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
      <RouterLink to="/login">
        <el-icon :size="18"><ShoppingBag /></el-icon>
      </RouterLink>
      <RouterLink to="/login">
        <el-icon :size="18"><Van /></el-icon>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 4rem;
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
  justify-content: center;
  align-items: center;
}

.router-container a::after {
  content: "";
  width: 0%;
  height: 2px;
  background: var(--primary);
  margin: auto;
  display: block;
  transition: 0.15s;
}

.router-container a:hover::after {
  width: 100%;
}

a {
  text-decoration: none;
  padding: 0.2rem 1rem;
  font-weight: 600;
  line-height: 2;
}

.auth-links {
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 2rem;
}

.auth-links a {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  padding: 0;
}

.auth-links a:last-child {
  background-color: var(--primary-tint);
  border-radius: 5px;
  border: none;
}
</style>
