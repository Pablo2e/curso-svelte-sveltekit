<script>
  import Button from "./lib/Button.svelte";
</script>

<!-- <button><slot/></button> <button><slot>Fallback</slot></button> -->
<Button>Button Text</Button> <!-- aparece Button Text en ambos -->
<Button></Button> <!-- aparece Button Text solo en el segundo -->

<style>

</style>