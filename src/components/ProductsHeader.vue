<template>
  <el-col :span="12">
    <div class="left-head">
      <el-icon :size="55"><Promotion /></el-icon>
      <h5>Flash Sale</h5>
      <div class="countdown-container">
        <p>{{ hours }}</p>
        <p>{{ minutes }}</p>
        <p>{{ seconds }}</p>
      </div>
    </div>
  </el-col>

  <el-col :span="12">
    <div class="right-head">
      <Button type="default" btnType="button" class="left-icon">
        <el-icon :size="20"><DArrowLeft /></el-icon>
      </Button>

      <Button type="primary" btnType="button" class="right-icon">
        <el-icon :size="20"><DArrowRight /></el-icon>
      </Button>
    </div>
  </el-col>
</template>

<script setup lang="ts">
import { useCountdownTimer } from "../composables/useCountdownTimer";
import Button from "./Button.vue";

const { hours, minutes, seconds } = useCountdownTimer();
</script>

<style scoped>
.left-head {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  cursor: default;
}

.countdown-container {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
}

.countdown-container p {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(236, 133, 133);
  color: var(--neutral);
  font-weight: 600;
}

.left-head .el-icon {
  padding: 1rem;
  background-color: var(--neutral);
  border-radius: 50%;
  color: var(--neutral-shade);
  font-weight: 700;
}

.left-head h5 {
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 4px;
}

.right-head {
  display: flex;
  justify-content: end;
  align-items: center;
}

.right-icon {
  width: 7.5rem;
}

.left-icon {
  width: 3.5rem;
}
</style>
