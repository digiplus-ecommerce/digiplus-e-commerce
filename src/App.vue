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

<template>
  <component :is="layout" class="wrapper">
    <router-view :key="$route.path" />
  </component>
</template>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
}
</style>
