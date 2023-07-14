<script>
  import Counter from './lib/Counter.svelte'

  const props = {
    maxCount: 10,
    initialCount: 6
  }
  const initialCount = 6;
</script>

<Counter {...props}/>
<Counter {...props} x="y"/>
<Counter {initialCount}/>
<Counter initialCount={6} maxCount={10}/>

<style>

</style>