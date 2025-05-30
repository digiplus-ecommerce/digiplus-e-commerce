<template>
  <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
    <el-space size="large" class="left-head">
      <el-icon :size="20"><Promotion /></el-icon>
      <el-text class="sale">Flash Sale</el-text>
      <el-space size="large" class="countdown-container">
        <el-text>{{ hours }}</el-text>
        <el-text>{{ minutes }}</el-text>
        <el-text>{{ seconds }}</el-text>
      </el-space>
    </el-space>
  </el-col>

  <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
    <el-space size="large" class="right-head">
      <Button type="default" btnType="button" class="left-icon">
        <el-icon :size="20"><DArrowLeft /></el-icon>
      </Button>

      <Button type="primary" btnType="button" class="right-icon">
        <el-icon :size="20"><DArrowRight /></el-icon>
      </Button>
    </el-space>
  </el-col>
</template>

<script setup lang="ts">
import { useCountdownTimer } from "../composables/useCountdownTimer";
import Button from "./Button.vue";

const { hours, minutes, seconds } = useCountdownTimer();
</script>

<style scoped>
.left-head {
  cursor: default;
}

.countdown-container {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
}

.countdown-container span {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgb(236, 133, 133);
  font-weight: 700;
}

.left-head .el-icon {
  width: 40px;
  height: 40px;
  background-color: var(--neutral);
  border-radius: 50%;
  color: var(--neutral-shade);
  font-weight: 700;
}

.sale {
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 24px;
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
