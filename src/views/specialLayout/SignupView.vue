<template>
  <el-space class="signup-wrapper">
    <el-space class="form-wrapper">
      <el-space class="image-container"> </el-space>

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
import { reactive } from "vue";

// do not use same name with ref
const form = reactive({
  username: "",
  lastname: "",
  email: "",
  password: "",
  repassword: "",
});

const onSubmit = () => {
  console.log("submit!");
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
