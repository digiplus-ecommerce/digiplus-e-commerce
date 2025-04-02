<script setup lang="ts"></script>

<template>
  <div class="main-container">
    <div class="form-container">
      <p class="title">Create Product</p>

      <div class="basic-container">
        <p class="container-title">Basic Details</p>
        <div class="input-wrapper">
          <label>Product Name</label>
          <input type="text" placeholder="Input Product" />
        </div>

        <div class="input-wrapper">
          <label>Description</label>
          <textarea placeholder="Add Description here..."></textarea>
        </div>

        <div class="join-input">
          <div class="input-wrapper">
            <label>Category</label>
            <input type="text" placeholder="Input Category" />
          </div>

          <div class="input-wrapper">
            <label>Price</label>
            <input type="number" placeholder="Input Price" />
          </div>

          <div class="input-wrapper">
            <label>Reviews</label>
            <input type="number" placeholder="Input Reviews" />
          </div>

          <div class="input-wrapper">
            <label>Rating</label>
            <input type="number" placeholder="Input Rating" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  max-width: 700px;
  width: 700px;
  margin: 0 auto;
  padding: 1rem 2rem;
  height: 100vh;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
}

.title {
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 0.2px;
}

.basic-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 1rem;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.input-wrapper label {
  font-size: 0.8rem;
  font-weight: 500;
}

.input-wrapper input {
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: var(--secondary-tint);
  outline: none;
}

.join-input {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.container-title {
  font-weight: 500;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  color: var(--primary-shade);
}

.input-wrapper textarea {
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: var(--secondary-tint);
  color: var(--primary-shade);
  outline: none;
}
</style>
