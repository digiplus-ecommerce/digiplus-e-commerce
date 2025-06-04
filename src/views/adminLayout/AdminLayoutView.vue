<template>
  <el-container class="layout-container">
    <el-aside :width="isCollapsed ? '65px' : '200px'" class="sidebar-container">
      <Sidebar @toggle-collapsed="toggleCollapsed" />
    </el-aside>

    <el-container :class="['main-container', { shrink: isCollapsed }]">
      <el-header>
        <Header />
      </el-header>

      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Header from "../../components/adminComponents/Header.vue";
import Sidebar from "../../components/adminComponents/Sidebar.vue";

const isCollapsed = ref(false);

const toggleCollapsed = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>

<style scoped>
.layout-container {
  display: flex;
  width: 100%;
  height: 100%;
}

.el-aside {
  position: fixed;
  height: 100%;
  max-width: 200px;
}

.main-container {
  width: 100%;
  margin-left: 200px;
  transition: margin-left 0.3s ease;
}

.main-container.shrink {
  margin-left: 65px;
}

.el-header {
  border-bottom: 1px solid purple;
}
</style>
