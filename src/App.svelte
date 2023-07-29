<script>
	import Button from './lib/Button.svelte';
	import FaAngellist from 'svelte-icons/fa/FaAngellist.svelte'
	import FaAllergies from 'svelte-icons/fa/FaAllergies.svelte'
</script>

<Button let:isLeftHovered size="small" shadow>
  <div style:width="20px" slot="leftContent">
    <span>
      {#if isLeftHovered}
        <FaAngellist />
      {:else}
        <FaAllergies />
      {/if}
    </span>
  </div>
  Button Text
</Button>

<style>
</style>