<template>
  <el-dialog
    title="Warning"
    width="500"
    align-center
    :model-value="isDialogOpen"
    @close="emits('update:isDialogOpen', false)"
  >
    <span>Open the dialog from the center from the screen</span>
    <template #footer>
      <div class="dialog-footer">
        <Button
          type="danger"
          btnType="button"
          @click="emits('update:isDialogOpen', false)"
          >Cancel</Button
        >
        <Button type="primary" btnType="button" @click="handleSubmit">
          Confirm
        </Button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import Button from "./Button.vue";
import { useProduct } from "../composables/api/useProduct";

const props = defineProps<{
  product: string;
  isDialogOpen: boolean;
}>();

const emits = defineEmits<{
  (e: "update:isDialogOpen", value: boolean): void;
}>();

const { product, isLoading, error } = useProduct(props.product);

const handleSubmit = () => {
  //
};

console.log(product);
console.log(isLoading);
console.log(error);
</script>

<style scoped></style>
