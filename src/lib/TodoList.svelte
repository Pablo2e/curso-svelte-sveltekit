<script>
  export let todos = [];
  import Button from "./Button.svelte";
  import { v4 as uuid } from "uuid"
  let inputText = '';

  function handleAddTodo(){
    if(!inputText) return;
   /*  todos.push({ 
      id: uuid(), 
      title: inputText, 
      completed: true
    })
    todos = todos; 
    con metodos hay que asignarlo sinó no lo refresca, tanto arrays como objetos */
    /* sin metodos no hay que hacerlo como aqui abajo */
    todos = [
      ...todos, 
      { 
        id: uuid(), 
        title: inputText, 
        completed: false
      }
    ];
    inputText = '';
  }
</script>

<div class="todo-list-wrapper">
  <ul>
    {#each todos as {title, id}, index (id)}
      {@const number = index + 1} 
      <li>{number} - {title}</li>
    {/each}
  </ul>
</div>

<form class="add-todo-form" on:submit|preventDefault={handleAddTodo}>
  <input bind:value={inputText}/>
  <Button type="submit" disabled={!inputText}>Add</Button>
</form>