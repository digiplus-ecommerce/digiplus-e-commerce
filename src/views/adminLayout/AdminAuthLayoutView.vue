<template>
  <el-space class="signup-wrapper">
    <slot>
      <!-- Where the page content will go -->
    </slot>
  </el-space>

  <!-- <main class="main-container">
    <slot>
    </slot>
  </main> -->
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
</style>
