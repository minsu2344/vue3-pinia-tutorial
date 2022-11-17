<template>
  <div>
    <input type="text" v-model="newTodo">
    <button @click="() => addNewTodo(newTodo)">Add</button>
  </div>
</template>
<script setup lang="ts">
import { useTodosStore } from '@/stores/todos';
import {ref} from 'vue'

const todosStore = useTodosStore();
const {addTodo} = todosStore
const newTodo = ref<string>('')

function addNewTodo(text: string) {
  addTodo(text)
  newTodo.value = ''
}
</script>