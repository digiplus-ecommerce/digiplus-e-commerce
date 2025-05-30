<template>
  <el-space class="signup-wrapper">
    <el-space class="form-wrapper">
      <el-space class="image-container"></el-space>

      <el-space class="form-container"></el-space>
    </el-space>
  </el-space>
</template>

<script setup lang="ts"></script>

<style scoped>
.signup-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.form-wrapper {
  width: 100%;
  min-width: 85rem;
  height: 600px;
  border: 1px solid red;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
