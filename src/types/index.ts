import type { ComputedRef } from "vue";

export interface CountdownTimer {
  hours?: ComputedRef<string>;
  minutes?: ComputedRef<string>;
  seconds?: ComputedRef<string>;
}

export interface TitleSeperator {
  title?: string;
  description?: string;
}
