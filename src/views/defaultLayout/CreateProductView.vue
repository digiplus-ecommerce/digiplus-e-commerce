<template>
  <el-dialog
    :model-value="isAddProducts"
    title="Warning"
    width="500"
    align-center
    @close="emits('update:isAddProducts', false)"
  >
    <span>Open the dialog from the center from the screen</span>
    <template #footer>
      <div class="dialog-footer">
        <Button
          type="danger"
          btnType="button"
          @click="emits('update:isAddProducts', false)"
        >
          <span class="icon-container">
            <el-icon :size="18">
              <Warning />
            </el-icon>
            Cancel
          </span>
        </Button>
        <Button
          type="primary"
          btnType="button"
          @click="emits('update:isAddProducts', false)"
        >
          <span class="icon-container">
            <el-icon :size="18"><CirclePlus /></el-icon>
            Add Products
          </span>
        </Button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import Button from "../../components/Button.vue";

defineProps<{
  isAddProducts: boolean;
}>();

const emits = defineEmits<{
  (e: "update:isAddProducts", value: boolean): void;
}>();
</script>

<style scoped>
.form-container {
  max-width: 700px;
  width: 700px;
  margin: 0 auto;
  padding: 1rem 2rem;
  height: 100vh;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
}

.title {
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 0.2px;
}

.basic-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 1rem;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.input-wrapper label {
  font-size: 0.8rem;
  font-weight: 500;
}

.input-wrapper input {
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: var(--secondary-tint);
  outline: none;
}

.join-input {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.container-title {
  font-weight: 500;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  color: var(--primary-shade);
}

.input-wrapper textarea {
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: var(--secondary-tint);
  color: var(--primary-shade);
  outline: none;
}
</style>
