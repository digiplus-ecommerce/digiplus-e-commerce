<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, type RouteLocationRaw } from "vue-router";

// define props btnType controls button behavior
// variant controls the style, and disabled is optional
const props = defineProps<{
  type?:
    | "primary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "disabled"
    | "default";
  btnType?: "link" | "button";
  to?: RouteLocationRaw;
  disabled?: boolean;
}>();

// provide default value for btnType
const btnType = computed(() => props.type ?? "default");

// compute CSS classes based on the variant prop.
const classes = computed(() => {
  return [
    "my-button", // base button class
    {
      "my-button--primary": props.type === "primary",
      "my-button--default": props.type === "default",
      "my-button--success": props.type === "success",
      "my-button--danger": props.type === "danger",
      "my-button--info": props.type === "info",
      "my-button--warning": props.type === "warning",
      "my-button--disabled": props.disabled,
    },
  ];
});

// setup event emitter
const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

function handleClick(event: MouseEvent) {
  emit("click", event);
}
</script>

<template>
  <!-- The ! in :to="to!" is TypeScript's non-null assertion operator. It tells the TypeScript 
   compiler that the value of to will definitely not be null or undefined at runtime, even though 
   the type system thinks it might be.
   The ! operator essentially tells TypeScript "trust me, this will have a value" -->
  <RouterLink
    v-if="props.btnType === 'link'"
    :to="to!"
    :class="classes"
    @click="handleClick"
  >
    <slot />
  </RouterLink>

  <el-button
    v-else
    :type="btnType"
    @click="handleClick"
    :class="classes"
    :disabled="props.disabled"
  >
    <slot />
  </el-button>
</template>

<style scoped>
/* Base styles for the button */
.my-button {
  padding: 0.3rem 1rem;
  border: none;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
}

.my-button--primary {
  background-color: var(--primary);
  color: var(--neutral-shade);
}

.my-button--danger {
  background-color: rgb(202, 37, 37);
  color: var(--neutral-shade);
}

.my-button--default {
  background-color: var(--secondary);
  color: var(--neutral);
}

/* Optional disabled style */
.my-button--disabled {
  background-color: #858688;
  cursor: not-allowed;
}
</style>
