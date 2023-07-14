<script>
  /* los props se exportan */
  export let initialCount; // usado asi obliga a que esté pasado como prop 
  export let maxCount = undefined; // usado asi NO obliga a que esté pasado como prop

  // props contiene los pros y restProps todos los props que se le pasen pero no estén definidos
  // Los restProps no son aconsejables usar por una cuestion de rendimiento
  console.log($$props, $$restProps); 

  let count = initialCount;

  function increment () {
    if(count === maxCount) return
    count += 1;
  }
</script>

<button on:click={increment}>count is {count}</button>
<style>
  button {
    padding: 15px 20px;
  }
</style>