<script>
  let count = 0;
  let string = `You have clicked ${count} times`;

  /* Reactive Statement */
  $: stringReactivo = `You have clicked ${count} times`;

  $: if(count > 5) {
    console.log( `the count is ${count}`);
  }

  function increment () {
    count ++
  }
</script>

<button on:click={increment}>
  count is {count}
</button>
<h3>{string}</h3><!-- es estatico y no se actualiza, no es reactivo -->
<h3>You have clicked {count} times</h3><!-- se actualiza, es reactivo  -->
<h3>{stringReactivo}</h3><!-- se actualiza, es reactivo  -->

<style>
  button {
    padding: 15px 20px;
  }
</style>