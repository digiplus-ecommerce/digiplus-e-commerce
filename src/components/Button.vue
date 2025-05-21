<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";

// define props btnType controls button behavior
// variant controls the style, and disabled is optional
const props = defineProps<{
  btnType?: "button" | "submit" | "reset" | "link";
  variant?: "primary" | "secondary" | "danger" | "delete";
  disabled?: boolean;
  to?: string;
}>();

// provide default value for btnType
const btnType = computed(() => props.btnType ?? "button");

// compute CSS classes based on the variant prop.
const classes = computed(() => {
  return [
    "my-button", // base button class
    {
      "my-button--primary": !props.variant || props.variant === "primary",
      "my-button--secondary": props.variant === "secondary",
      "my-button--danger":
        props.variant === "danger" || props.variant === "delete",
    },
    // optionally add styles for disabled
    { "my-button--disabled": props.disabled },
  ];
});

// setup event emitter
const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

function handleClick(event: MouseEvent) {
  if (!props.disabled) {
    emit("click", event);
  }
}
</script>

<template>
  <RouterLink
    v-if="btnType === 'link'"
    :to="to"
    :class="classes"
    :aria-disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </RouterLink>

  <button
    v-else
    :type="btnType"
    :class="classes"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
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

.my-button--secondary {
  background-color: var(--secondary);
  color: var(--neutral);
}

.my-button--danger {
  background-color: rgb(224, 38, 38);
  color: var(--neutral-shade);
}

/* Optional disabled style */
.my-button--disabled {
  background-color: #858688;
  cursor: not-allowed;
}
</style>
