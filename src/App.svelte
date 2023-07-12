<script>
  let name = 'Svelte';
  let src="http://picsum.com/200/200"
  let string = 'Some <strong>string</strong> with html.'
</script>

<img {src} alt="Some text {name}"/>
<h1>Hello {name.toUpperCase()}!</h1>
<p>{@html string}</p><!-- @html permite que se lea la etiqueta html del string -->

<style>
  h1 {
    color: red;
  }
</style>