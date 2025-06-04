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
import AdminLayoutView from "./views/adminLayout/AdminLayoutView.vue";
import AdminAuthLayoutView from "./views/adminLayout/AdminAuthLayoutView.vue";

export default defineComponent({
  name: "App",
  setup() {
    const route = useRoute();

    const layout = computed(() => {
      if (route.meta.layout === "special") {
        return SpecialLayout;
      }

      if (route.meta.layout === "admin") {
        return AdminLayoutView;
      }

      if (route.meta.layout === "admin-auth") {
        return AdminAuthLayoutView;
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
