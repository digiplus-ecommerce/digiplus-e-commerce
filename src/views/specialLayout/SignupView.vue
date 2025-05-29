<template>
  <div class="card-container">
    <div class="card">
      <div class="card-face card-front">Front</div>
      <div class="card-face card-back">Back</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.card-container {
  perspective: 1000px;
}

.card {
  width: 200px;
  height: 300px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.card:hover {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card-front {
  background-color: #fff;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.card-back {
  background-color: #007bff;
  color: white;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}
</style>
