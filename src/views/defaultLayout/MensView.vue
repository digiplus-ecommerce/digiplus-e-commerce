<script setup lang="ts">
import { onMounted, onUpdated, watch } from "vue";
import { ref } from "vue";

const timer = ref(10);
const timerMessage = ref(null);
const intervalId = ref(null);

const handleStartTimer = () => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
    timer.value = 10; // Reset timer to 10 seconds
  }

  intervalId.value = setInterval(() => {
    timerMessage.value = "Timer is running";

    timer.value--;

    console.log("Timer is running", timer.value);

    if (timer.value === 0) {
      timerMessage.value = "Timer is finished";
      clearInterval(intervalId.value);
    }
  }, 1000);
};

const handleStopTimer = () => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
    intervalId.value = null;
    timer.value = 10; // Reset timer to 10 seconds
  }
  timerMessage.value = "Timer is stopped";
};
</script>

<template>
  <div class="main-container">
    <div>
      <p>Timer is : {{ timer }}</p>
      <p>Timer message : {{ timerMessage }}</p>
      <button id="timer" @click="handleStartTimer">Start Timer</button>
      <button id="timer" @click="handleStopTimer">Stop Timer</button>
    </div>
  </div>
</template>

<style scoped></style>
