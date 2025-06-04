<template>
  <el-space class="form-wrapper" fill="fill" :size="42">
    <el-space class="header-container">
      <p class="title">Admin Login</p>
      <p class="description">Welcome back! please enter your details.</p>
    </el-space>

    <el-form
      ref="ruleFormRef"
      :label-position="labelPosition"
      label-width="auto"
      :model="ruleForm"
      :rules="rules"
      width="400px"
    >
      <el-form-item
        label="Username"
        :label-position="itemLabelPosition"
        prop="username"
      >
        <el-input v-model="ruleForm.username" />
      </el-form-item>

      <el-form-item
        label="Password"
        :label-position="itemLabelPosition"
        prop="password"
      >
        <el-input v-model="ruleForm.password" />
      </el-form-item>

      <Button btnType="button" type="primary" @click="handleLogin(ruleFormRef)"
        >Login</Button
      >
    </el-form>
  </el-space>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type {
  FormInstance,
  FormItemProps,
  FormProps,
  FormRules,
} from "element-plus";
import Button from "../../components/Button.vue";
import { useRouter } from "vue-router";

interface AdminRuleForm {
  username?: string;
  password?: string;
}

const route = useRouter();
const labelPosition = ref<FormProps["labelPosition"]>("top");
const itemLabelPosition = ref<FormItemProps["labelPosition"]>("");

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<AdminRuleForm>({
  username: "",
  password: "",
});

const rules = reactive<FormRules<AdminRuleForm>>({
  username: [
    { required: true, message: "Please input Username", trigger: "blur" },
  ],
  password: [
    { required: true, message: "Please input Passwrod", trigger: "blur" },
    {
      validator: (_rule, _value, callback) => {
        if (
          ruleForm.username !== usernameCredentials ||
          ruleForm.password !== loginCredentials
        ) {
          callback(new Error("Invalid username or password"));
        } else {
          callback();
        }
      },
      trigger: "blur",
    },
  ],
});

const usernameCredentials = "admin";
const loginCredentials = "admin";

const handleLogin = (formEl: FormInstance | undefined) => {
  if (!formEl) {
    console.log("formEl is undefined ❌");
    return;
  }

  formEl.validate((valid) => {
    if (valid) {
      if (
        usernameCredentials === ruleForm.username ||
        loginCredentials === ruleForm.password
      ) {
        route.push("/dashboard");
        console.log("submit");
      } else {
        console.log("username and password didnt match");
      }
    } else {
      console.log("❌ Invalid credentials");
    }
  });
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
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-width: 25rem;
  height: auto;
  border: 1px solid var(--neutral-tint);
  border-radius: 10px;
  padding: 1.5rem;
}

.header-container,
.el-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 10px;
}

.title {
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 0.1px;
  line-height: 1.2;
  color: var(--neutral);
}

.description {
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.8px;
  line-height: 1.8;
  color: var(--neutral);
}
</style>
