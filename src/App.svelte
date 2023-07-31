<script>
  import TodoList from "./lib/TodoList.svelte";
  import { v4 as uuid } from "uuid"

  let todos = [
    { 
      id: uuid(), 
      title: "Todo 1", 
      completed: true
    },
    { 
      id: uuid(), 
      title: "Todo 2", 
      completed: false
    },
    { 
      id: uuid(), 
      title: "Todo 3", 
      completed: true
    },
  ]

  function handleAddTodo(event){
    todos = [
      ...todos,
      { 
        id: uuid(), 
        title: event.detail.title, 
        completed: true
      },
    ]
  }

  function handleRemoveTodo(event){
    todos = todos.filter(todo => todo.id !== event.detail.id);
  }

  function handleToggleTodo(event) {
    todos = todos.map((todo) => {
      if (todo.id === event.detail.id) {
        return { ...todo, completed: event.detail.value };
      }
      return { ...todo };
    });
  }
</script>

<TodoList 
  {todos} 
  on:addTodo={handleAddTodo} 
  on:removeTodo={handleRemoveTodo}
	on:toggletodo={handleToggleTodo}
/>

<style>
</style>