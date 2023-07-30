<svelte:options immutable={true} />

<script>
  export let todos = [];
  import Button from "./Button.svelte";
  import { createEventDispatcher } from "svelte"
  let inputText = '';

  const dispatch = createEventDispatcher();

  function handleAddTodo(){
    const isNotCancelled = dispatch(
      'addTodo', 
      {title: inputText},
      {cancelable: true}
    );
    if(isNotCancelled) {
      inputText = '';
    }
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