<script>
  export let todos = [];
</script>

<ul>
  <!--{#each todos as todo, index (todo.id)}  (todo.id) para identificar el loop -->
  {#each todos as {title, id}, index (id)} <!-- se puede desestructurar el todo -->
    {@const number = index + 1} <!-- 2 formas de pintar el index -->
    <li>{number} - {title}</li>
    <!-- <li>{index + 1} - {todo.title}</li> -->
  {/each}
</ul>