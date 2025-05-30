<template>
  <el-space wrap direction="vertical" size="large" class="banner-title">
    <el-text class="title">{{ props.title }}</el-text>
    <p>{{ props.description }}</p>
  </el-space>
</template>

<script setup lang="ts">
import type { TitleSeperator } from "../types";

const props = defineProps<TitleSeperator>();
</script>

<style scoped>
.banner-title {
  display: flex;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  text-align: center;
}

.title {
  font-weight: 700;
  font-size: 42px;
}
</style>
