<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapsed"
    @open="handleOpen"
    @close="handleClose"
  >
    <template class="logo">
      <p>DLC</p>
    </template>

    <template v-for="(section, index) in menuSections" :key="index">
      <!-- Section Title -->
      <el-menu-item-group v-if="!isCollapsed">
        <template #title>
          <span>{{ section.title }}</span>
        </template>
      </el-menu-item-group>

      <!-- Section Items -->
      <el-menu-item v-for="items in section.items" :key="items.index">
        <el-icon><component :is="items.icon" /></el-icon>
        <RouterLink :to="items.link">
          <el-text>{{ items.title }}</el-text>
        </RouterLink>
      </el-menu-item>
    </template>

    <el-button @click="handleCollapsed" class="sidebar-toggler" circle>
      <el-icon>
        <DArrowRight v-if="isCollapsed" />
        <DArrowLeft v-else />
      </el-icon>
    </el-button>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { DArrowLeft, DArrowRight } from "@element-plus/icons-vue";
import { menuSections } from "../../constants";

const isCollapsed = ref(false);

const handleCollapsed = () => {
  isCollapsed.value = !isCollapsed.value;
  emit("toggle-collapsed", isCollapsed.value);
};

const emit = defineEmits(["toggle-collapsed"]);

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style scoped>
.el-menu {
  position: relative;
  border: none;
  height: 100%;
  padding: 0.5rem;
  background-color: var(--secondary-tint);
}

.el-menu-item {
  --el-menu-hover-bg-color: var(--primary-tint);
  border-radius: 10px;
}

.sidebar-toggler {
  position: absolute;
  bottom: 70%;
  right: 2%;
  background-color: var(--primary-tint);
  color: var(--neutral);
  z-index: 999;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
