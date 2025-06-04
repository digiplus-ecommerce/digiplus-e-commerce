<template>
  <el-space class="signup-wrapper">
    <el-space class="form-wrapper">
      <el-space class="image-container">
        <DotLottieVue
          style="height: 800px; width: 800px"
          autoplay
          loop
          src="https://lottie.host/e9e566fd-ae83-4bc8-86f8-0342874b0991/iqHoSuiVKa.lottie"
        />
      </el-space>

      <!-- =============================================================================== -->
      <el-form :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="User Name">
          <el-input v-model="form.username" placeholder="User Name" />
        </el-form-item>

        <el-form-item label="Last Name">
          <el-input v-model="form.lastname" placeholder="Last Name" />
        </el-form-item>

        <el-form-item label="Email">
          <el-input v-model="form.email" placeholder="Email" />
        </el-form-item>

        <el-form-item label="Password">
          <el-input v-model="form.password" placeholder="Password" />
        </el-form-item>

        <el-form-item label="Re-Password">
          <el-input v-model="form.repassword" placeholder="Re-Password" />
        </el-form-item>

        <el-button type="primary" @click="onSubmit">Register</el-button>
      </el-form>

      <el-space class="form-container"> </el-space>
    </el-space>
  </el-space>
</template>

<script setup lang="ts">
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
import { reactive } from "vue";
import { useAuthStore } from "../../store/useAuthStore";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();
authStore.loadUsers();

const form = reactive({
  username: "",
  lastname: "",
  email: "",
  password: "",
  repassword: "",
});

const onSubmit = () => {
  if (form.password !== form.repassword) {
    ElMessage.error("Password do no match");
    return;
  }
  try {
    authStore.register({
      username: form.username,
      lastname: form.lastname,
      password: form.password,
    });
    ElMessage.success("User registered successfully");
    router.push("/login");
  } catch (error: any) {
    ElMessage.error(error.message);
  }
};
</script>

<style scoped>
.signup-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.form-wrapper {
  width: 100%;
  min-width: 85rem;
  height: 600px;
  border: 1px solid rgb(0, 0, 0);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
