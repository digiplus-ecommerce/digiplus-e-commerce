<template>
  <div class="card-container">
    <div class="card-img-container">
      <el-image :src="product.image" lazy />
    </div>

    <div class="card-info">
      <p>
        Name: <span>{{ product.title }}</span>
      </p>
      <p class="category">
        Category: <span>{{ product.category }}</span>
      </p>
    </div>

    <div class="btn-group">
      <p>₱{{ (product.price ?? 0).toLocaleString() }}</p>
      <Button
        btnType="button"
        type="primary"
        @click="productDetails(String(product.id))"
      >
        More Details
      </Button>
    </div>
  </div>

  <ProductDetails
    v-if="productId"
    v-model:isDialogOpen="isDialogOpen"
    :productId="productId"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Products } from "../types/products";
import Button from "./Button.vue";
import ProductDetails from "./ProductDetails.vue";

const productId = ref<string | null>(null);
const isDialogOpen = ref(false);

defineProps<{
  product: Products;
}>();

const productDetails = (id: string) => {
  isDialogOpen.value = true;
  if (isDialogOpen.value) {
    productId.value = id;
  }
};
</script>

<style scoped>
.card-container {
  width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
}

.card-img-container {
  width: 100%;
  height: 16.5rem;
}

.el-image {
  width: 100%;
  height: 100%;
  object-fit: "contain";
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.card-info {
  width: 100%;
  flex-grow: 1;
  padding: 0.5rem;
}

.card-info p {
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: 0.1px;
  text-transform: capitalize;
}

.card-info p span {
  font-weight: 400;
  margin-left: 0.5rem;
  font-size: 0.8rem;
}

.btn-group {
  width: 100%;
  padding: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-group a {
  padding: 0.3rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: var(--primary);
  color: var(--neutral-shade);
  font-weight: 600;
  font-size: 0.8rem;
  cursor: pointer;
}

.btn-group p {
  background-color: var(--secondary);
  font-weight: 600;
  font-size: 0.7rem;

  padding: 0.3rem 1rem;
  border: none;
  border-radius: 5px;
}
</style>
