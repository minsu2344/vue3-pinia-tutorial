import { defineStore } from "pinia";

interface Todos {
  id: number,
  text: string,
  isFinished: boolean
}

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todos: [
      {
        id: 1,
        text: 'clean room',
        isFinished: false
      }
    ],
    filter: 'all'
  }),
  getters: {
    filteredTodos(): [] | Todos[] {
      if(this.filter === 'finished') return this.todos.filter(todo => todo.isFinished)
      else if(this.filter === 'unfinished') return this.todos.filter(todo => !todo.isFinished)
      else return this.todos
    }
  },
  actions: {
    addTodo(text: string): void {
      if(!text) return;
      this.todos.push({
        id: (this.todos.length+1),
        text,
        isFinished: false
      })
    },
    toggleTodo(index: number): void {
      this.todos[index].isFinished = !this.todos[index].isFinished
    },
    // event의 type은 Event나 any
    filterChange(event: Event): void {
      this.filter = event.target.innerText
    }
  }
})