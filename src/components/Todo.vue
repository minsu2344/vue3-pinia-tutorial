<template>
  <div v-for="(todo, index) in filteredTodos" :key="index" style="display: flex">
    <h1 :style="todo.isFinished && {textDecoration: 'line-through'}">{{todo.text}}</h1>
    <button @click="() => toggleTodo(index)">toggle</button>
  </div>
</template>
<script setup lang="ts">
import { useTodosStore } from '../stores/todos';
import { storeToRefs } from 'pinia';

interface Todos {
  id: number,
  text: string,
  isFinished: boolean
}

const todosStore = useTodosStore();
const {filteredTodos} = storeToRefs(todosStore);
const {toggleTodo} = todosStore
</script>