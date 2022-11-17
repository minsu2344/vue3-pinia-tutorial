<template>
  <div>
    <button @click="filterChange">all</button>
    <button @click="filterChange">finished</button>
    <button @click="filterChange">unfinished</button>
    </div>
</template>
<script setup lang="ts">
import { useTodosStore } from '@/stores/todos';

const todosStore = useTodosStore();
const {filterChange} = todosStore
</script>