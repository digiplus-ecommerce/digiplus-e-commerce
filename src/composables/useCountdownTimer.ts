import { computed, onMounted, onUnmounted, ref } from "vue";
import type { CountdownTimer } from "../types";

export function useCountdownTimer(): CountdownTimer {
  const initialSeconds = 3 * 60 * 60; // 3 hours
  const remainingSeconds = ref<number>(initialSeconds);
  let intervalId: number | null = null;

  const hours = computed(() =>
    Math.floor(remainingSeconds.value / 3600)
      .toString()
      .padStart(2, "0")
  );
  const minutes = computed(() =>
    Math.floor((remainingSeconds.value % 3600) / 60)
      .toString()
      .padStart(2, "0")
  );
  const seconds = computed(() =>
    (remainingSeconds.value % 60).toString().padStart(2, "0")
  );

  const tick = () => {
    if (remainingSeconds.value > 0) {
      remainingSeconds.value--;
    } else {
      remainingSeconds.value = initialSeconds;
    }
  };

  onMounted(() => {
    intervalId = window.setInterval(tick, 1000);
  });

  onUnmounted(() => {
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
  });

  return {
    hours,
    minutes,
    seconds,
  };
}
