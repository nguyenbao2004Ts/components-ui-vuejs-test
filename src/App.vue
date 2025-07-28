<template>
  <div id="app">
    <h1>Components UI Vue.js Test</h1>
    <LearnVueButton>Click me!</LearnVueButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LearnVueButton from './components/LearnVueButton.vue'

export default defineComponent({
  name: 'App',
  components: {
    LearnVueButton,
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
