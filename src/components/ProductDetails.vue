<template>
  <el-dialog
    width="1000"
    align-center
    :model-value="isDialogOpen"
    @close="emits('update:isDialogOpen', false)"
  >
    <template #header>
      <el-text class="header-text">Product Details</el-text>
    </template>

    <LoadingSpinner v-if="isLoading" />
    <el-space v-else-if="error" class="body-container">{{ error }}</el-space>
    <div v-else class="body-container">
      <div class="image-container">
        <el-image :src="product?.image" fit="contain" lazy />
      </div>

      <el-space alignment="start" class="details-container">
        <el-text class="title">{{ product?.title }}</el-text>
        <el-text class="category">{{ product?.category }}</el-text>
        <el-text class="description">{{ product?.description }}</el-text>
        <el-space class="reviews">
          <el-text>
            <span>Rating: </span>
            {{ product?.rating?.rate }}
          </el-text>

          <el-text>
            <span>Rating: </span>
            {{ product?.rating?.count }}
          </el-text>
        </el-space>
        <el-text class="price">
          ₱ {{ product?.price?.toLocaleString() }}
        </el-text>
      </el-space>
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
.header-text {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
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
  letter-spacing: 0.5px;
}

.description {
  font-weight: 400;
  color: var(--neutral);
  letter-spacing: 0.5px;
  line-height: 1.8;
}

.reviews {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  margin-bottom: 1rem;
}

.reviews span {
  font-weight: 600;
  font-size: 12px;
}

.price {
  font-weight: 600;
  font-size: 28px;
}
</style>
