<template>
  <div class="banner-title">
    <h2>{{ props.title }}</h2>
    <p>{{ props.description }}</p>
  </div>
</template>

<script setup lang="ts">
import type { TitleSeperator } from "../types";

const props = defineProps<TitleSeperator>();
</script>

<style scoped>
.banner-title {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 3rem;
}
</style>
