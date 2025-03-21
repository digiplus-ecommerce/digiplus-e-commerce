<script setup lang="ts">
import { RouterLink } from "vue-router";
import productData from "../data/products.json";

console.log(productData);
</script>

<template>
  <div v-for="product in productData" :key="product.id" class="card-container">
    <div class="card-img-container">
      <img :src="product.image[0]" alt="product image" class="image" />
    </div>

    <div class="card-info">
      <p>
        Name: <span>{{ product.product }}</span>
      </p>
      <p>
        Category: <span>{{ product.category }}</span>
      </p>
      <p>
        Price: <span>{{ product.price }}</span>
      </p>
      <p>
        Reviews: <span>{{ product.reviews }}</span>
      </p>
    </div>

    <div class="btn-group">
      <p>₱{{ product.price.toLocaleString() }}</p>
      <RouterLink :to="`/product/${product.id}`">Details</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  width: 100%;
  height: 24.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
}

.card-img-container {
  width: 100%;
  height: 16.5rem;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.card-info {
  width: 100%;
  flex-grow: 1;
  padding: 0.5rem;
}

.card-info p {
  line-height: 1.2;
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 0.2px;
}

.card-info p span {
  font-weight: 400;
  margin-left: 0.5rem;
  font-size: 0.8rem;
}

.btn-group {
  width: 100%;
  padding: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-group a {
  padding: 0.3rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: var(--primary);
  color: var(--neutral-shade);
  font-weight: 600;
  font-size: 0.8rem;
  cursor: pointer;
}

.btn-group p {
  background-color: var(--secondary);
  font-weight: 600;
  font-size: 0.7rem;

  padding: 0.3rem 1rem;
  border: none;
  border-radius: 5px;
}
</style>
