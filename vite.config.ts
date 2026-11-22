import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' usa caminhos relativos: funciona no GitHub Pages tanto em
// 'usuario.github.io' quanto em 'usuario.github.io/nome-do-repo/', sem ajustes.
export default defineConfig({
  plugins: [react()],
  base: './',
});
