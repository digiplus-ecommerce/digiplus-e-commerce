<template>
  <div class="login-container">
    <div class="form-wrapper">
      <div class="image-container">
        <DotLottieVue
          style="height: 100%; width: 100%"
          autoplay
          loop
          src="https://lottie.host/e9e566fd-ae83-4bc8-86f8-0342874b0991/iqHoSuiVKa.lottie"
        />
      </div>

      <div class="form-container">
        <p class="title">Login to Shop</p>

        <el-form :model="form" label-width="100px">
          <el-form-item label="Username">
            <el-input v-model="form.username" />
          </el-form-item>
          <el-form-item label="Password">
            <el-input type="password" v-model="form.password" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">Login</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useAuthStore } from "../../store/useAuthStore";
import { ElMessage } from "element-plus";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();
authStore.loadUsers();

const form = reactive({
  username: "",
  password: "",
});

const login = () => {
  try {
    authStore.login(form.username, form.password);
    ElMessage.success("Logged in successfully!");
    router.push('/')
  } catch (error: any) {
    ElMessage.error(error.message);
  }
};
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-wrapper {
  width: 1000px;
  height: 500px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 1rem;
  border: 1px solid var(--neutral-tint);
  border-radius: 20px;
}

.image-container,
.form-container {
  width: 100%;
  height: 100%;
}

.title {
  text-align: center;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 1.5rem;
  line-height: 1.7;
  letter-spacing: 2px;
}

.form-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
