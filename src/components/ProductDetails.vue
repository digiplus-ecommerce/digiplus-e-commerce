<template>
  <el-dialog
    width="1000"
    align-center
    :model-value="isDialogOpen"
    @close="emits('update:isDialogOpen', false)"
  >
    <template #header>
      <p class="dialog-header">Product Details</p>
    </template>

    <LoadingSpinner v-if="isLoading" />
    <div v-else-if="error" class="body-container">{{ error }}</div>
    <div v-else class="body-container">
      <div class="image-container">
        <el-image :src="product?.image" fit="contain" lazy />
      </div>

      <div class="details-container">
        <p class="title">{{ product?.title }}</p>
        <p class="category">{{ product?.category }}</p>
        <p class="description">{{ product?.description }}</p>
        <div class="reviews">
          <p>
            Rating: <span>{{ product?.rating?.rate }}</span>
          </p>
          <p>
            Stock: <span>{{ product?.rating?.count }}</span>
          </p>
        </div>
        <p class="price">₱ {{ product?.price?.toLocaleString() }}</p>
      </div>
    </div>

    <template #footer>
      <div class="dialog-footer">
        <Button
          type="danger"
          btnType="button"
          @click="emits('update:isDialogOpen', false)"
        >
          <span class="icon-container">
            <el-icon :size="18">
              <Warning />
            </el-icon>
            Cancel
          </span>
        </Button>

        <Button type="primary" btnType="button" @click="handleSubmit">
          <span class="icon-container">
            <el-icon :size="18">
              <ShoppingCartFull />
            </el-icon>
            Add to Cart
          </span>
        </Button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import Button from "./Button.vue";
import { useProducts } from "../composables/api/useProducts";
import { onMounted } from "vue";
import LoadingSpinner from "./LoadingSpinner.vue";

const props = defineProps<{
  productId: string;
  isDialogOpen: boolean;
}>();

const emits = defineEmits<{
  (e: "update:isDialogOpen", value: boolean): void;
}>();

const { product, isLoading, error, fetchProduct } = useProducts();

onMounted(() => {
  fetchProduct(props.productId);
});

const handleSubmit = () => {
  //
};
</script>

<style scoped>
.dialog-header {
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--neutral);
  font-size: 24px;
  margin-bottom: 3rem;
}

.body-container {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 100%;
}

.image-container {
  width: 100%;
  height: 20rem;
}

.details-container {
  width: 100%;
  height: 100%;
}

.el-image {
  width: 100%;
  height: 100%;
}

.details-container {
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
}

.title {
  font-weight: 700;
  color: var(--neutral);
  font-size: 24px;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.category,
.description {
  font-size: 12px;
  margin-bottom: 2rem;
}

.category {
  font-weight: 600;
  color: rgb(168, 164, 164);
}

.description {
  font-weight: 400;
  color: var(--neutral);
}

.reviews {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
}

.reviews p {
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 2rem;
}

.price {
  font-weight: 600;
  font-size: 24px;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
</style>
