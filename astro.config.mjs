import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://blog.pingpongtech.us.kg',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
