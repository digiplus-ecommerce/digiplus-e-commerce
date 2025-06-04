<template>
  <LoadingSpinner v-if="isLoading" />
  <el-space v-else-if="error" class="body-container">{{ error }}</el-space>
  <el-table v-else :data="products" style="width: 100%">
    <el-table-column label="Title">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{{ scope.row.title }}</span>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="Price" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{{ scope.row.price }}</span>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="Description">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{{ scope.row.description }}</span>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="Category" width="200">
      <template #default="scope">
        <div
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            text-transform: capitalize;
          "
        >
          <span style="margin-left: 10px">{{ scope.row.category }}</span>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="Rate" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{{ scope.row.rating.rate }}</span>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="Count" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{{ scope.row.rating.count }}</span>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="Operations">
      <template #default="scope">
        <Button
          type="default"
          btnType="button"
          @click="handleEdit(scope.$index, scope.row)"
        >
          Edit
        </Button>

        <Button
          type="danger"
          btnType="button"
          @click="handleDelete(scope.$index, scope.row)"
        >
          Delete
        </Button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useProducts } from "../../composables/api/useProducts";
import type { Products } from "../../types/products";
import Button from "../../components/Button.vue";
import LoadingSpinner from "../../components/LoadingSpinner.vue";

const { data: products, isLoading, error, fetchProducts } = useProducts();

onMounted(() => {
  fetchProducts();
});

console.log(products);

const handleEdit = (index: number, row: Products) => {
  console.log(index, row);
};
const handleDelete = (index: number, row: Products) => {
  console.log(index, row);
};
</script>

<style scoped>
.el-table {
  border-radius: 10px;
  --el-table-bg-color: var(--secondary-tint);
  --el-table-tr-bg-color: var(--secondary-tint);
  --el-table-header-bg-color: var(--secondary-tint);
  --el-table-row-hover-bg-color: var(--primary-tint);
  --el-table-border-color: var(--primary-tint);
  --el-table-header-text-color: var(--neutral);
  height: 90vh;
}
</style>
