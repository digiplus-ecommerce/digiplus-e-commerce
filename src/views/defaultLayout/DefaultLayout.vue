<template>
  <Navbar />
  <Button
    type="primary"
    btnType="button"
    class="add-product-container"
    @click="toggleAddProducts"
  >
    <el-icon :size="20"><Plus /></el-icon>
  </Button>

  <CreateProductView v-model:isAddProducts="isAddProducts" />

  <main class="main-container">
    <slot>
      <!-- Where the page content will go -->
    </slot>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Button from "../../components/Button.vue";
import Navbar from "../../components/Navbar.vue";
import CreateProductView from "./CreateProductView.vue";

const isAddProducts = ref(false);

const toggleAddProducts = () => {
  isAddProducts.value = true;
};
</script>

<style scoped>
.add-product-container {
  position: fixed;
  bottom: 4.5rem;
  right: 4.5rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: 100;
}
</style>
