<template>
  <component :is="layout">
    <router-view :key="$route.path" />
  </component>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
import DefaultLayout from "./views/defaultLayout/DefaultLayout.vue";
import SpecialLayout from "./views/specialLayout/SpecialLayout.vue";

export default defineComponent({
  name: "App",
  setup() {
    const route = useRoute();

    const layout = computed(() => {
      if (route.meta.layout === "special") {
        return SpecialLayout;
      }

      return DefaultLayout;
    });

    return {
      layout,
    };
  },
});
</script>

<style scoped></style>
