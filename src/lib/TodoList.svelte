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

  function handleRemoveTodo(id) {
    dispatch('removeTodo', {
      id
    })
  }
</script>

<div class="todo-list-wrapper">
  <ul>
    {#each todos as {title, id, completed} (id)}
      <li>
        <label>
          <input type='checkbox' checked={completed} />
          {title}
        </label>
        <button on:click={() => handleRemoveTodo(id)}>Remove</button>
      </li>
    {/each}
  </ul>
</div>

<form class="add-todo-form" on:submit|preventDefault={handleAddTodo}>
  <input bind:value={inputText}/>
  <Button type="submit" disabled={!inputText}>Add</Button>
</form>