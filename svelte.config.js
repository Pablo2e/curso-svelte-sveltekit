import preprocess from 'svelte-preprocess';
 
export default { 
  preprocess: preprocess({
    scss: {
      prependData: '@use "./src/styles/variables.scss";'
    }
  })
};