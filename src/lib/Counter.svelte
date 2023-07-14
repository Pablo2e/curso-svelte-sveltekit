<script>
  let count1 = 0;
  let count2 = 0;

  /* No funciona porque las variables reactivas no estan asignadas al valor reactivo
  function getTotal(){return count1 + count2}; 
  $: string = `The count total is ${getTotal()}.`; */  
  
  function setCount2(x){
    return count2 = x;
  }; 
  /* si el orden fuera inverso no funcionaría porque tiene en cuenta cuando se actualiza que */
  $: setCount2(count1);
  $: string = `Count2 is ${count2}.`;

  function increment1 () {
    count1 ++
  }
</script>

<button on:click={increment1}>count is {count1}</button>
<h3>{string}</h3>

<style>
  button {
    padding: 15px 20px;
  }
</style>