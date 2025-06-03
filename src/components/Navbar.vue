<template>
  <nav>
    <el-space wrap>
      <RouterLink to="/">
        <el-text tag="b" class="custom-text">Logo</el-text>
      </RouterLink>
    </el-space>

    <el-space class="link-space">
      <RouterLink to="/">
        <el-text>Home</el-text>
      </RouterLink>

      <RouterLink to="/womens">
        <el-text>Womens</el-text>
      </RouterLink>

      <RouterLink to="/mens">
        <el-text>Mens</el-text>
      </RouterLink>

      <RouterLink to="/electronics">
        <el-text>Electronics</el-text>
      </RouterLink>

      <RouterLink to="/jewelry">
        <el-text>Jewelry</el-text>
      </RouterLink>
    </el-space>

    <el-space class="auth-links" alignment="center" :size="5">
      <RouterLink to="/login">
        <el-text>ordiales@gmail.com</el-text>
      </RouterLink>

      <RouterLink to="/login">
        <el-text>Logout</el-text>
      </RouterLink>

      <RouterLink to="/admin-login">
        <el-icon :size="18"><ShoppingBag /></el-icon>
      </RouterLink>

      <RouterLink to="/signup">
        <el-icon :size="20"><Van /></el-icon>
      </RouterLink>
    </el-space>
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

.custom-text {
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
}

.el-space {
  width: 100%;
}

.link-space a::after {
  content: "";
  width: 0%;
  height: 2px;
  background: var(--primary);
  margin: auto;
  display: block;
  transition: 0.15s;
}

.link-space a:hover::after {
  width: 100%;
}

a {
  padding: 0.2rem 1rem;
  font-weight: 700;
}

.auth-links {
  justify-content: end;
}

.auth-links a {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 990px) {
  nav {
    display: none;
  }
}
</style>
