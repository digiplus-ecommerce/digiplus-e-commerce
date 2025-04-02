<script setup lang="ts">
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
import type { FormInstance, FormRules } from "element-plus";
import { reactive, ref } from "vue";

const ruleFormRef = ref<FormInstance>();

const loginForm = reactive({
  username: "",
  password: "",
});

const ruleLoginForm = reactive<FormRules>({
  username: [
    { required: true, message: "Username is required", trigger: "blur" },
  ],
  password: [
    { required: true, message: "Password is required", trigger: "blur" },
  ],
});

const onSubmit = async () => {
  try {
    const isValid = await ruleFormRef.value?.validate();
    if (isValid) {
      console.log("Form Submitted");
    }
  } catch (error) {
    console.log("Error Submitted");
  }
};
</script>

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

        {{ loginForm }}

        <el-form
          ref="ruleFormRef"
          :model="loginForm"
          :rules="ruleLoginForm"
          @submit.prevent="onSubmit"
        >
          <el-form-item label="Username">
            <el-input v-model="loginForm.username" />
          </el-form-item>

          <el-form-item label="Password">
            <el-input v-model="loginForm.password" />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

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
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
