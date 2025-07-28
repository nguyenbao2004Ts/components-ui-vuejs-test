<template>
  <button class="learn-vue-button">
    Learn Vue
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {}
</script>

<style scoped>
.learn-vue-button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
