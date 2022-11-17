<template>
  <main>
    <FilterButtons />
    <InputBox />
    <Todo />
  </main>
</template>
<script setup lang="ts">
import Todo from './components/Todo.vue'
import FilterButtons from './components/FilterButtons.vue';
import InputBox from './components/InputBox.vue'
</script>