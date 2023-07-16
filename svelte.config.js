import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
export default { 
  preprocess: vitePreprocess({
    scss: {
      prependData: '@use "../src/styles/variables.scss"'
    }
  })
};