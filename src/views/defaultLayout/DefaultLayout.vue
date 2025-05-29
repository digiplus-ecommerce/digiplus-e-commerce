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

  <!-- <el-dialog v-model="isAddProducts" title="Warning" width="500" align-center>
    <span>Open the dialog from the center from the screen</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="isAddProducts = false">Cancel</el-button>
        <el-button type="primary" @click="isAddProducts = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog> -->

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
