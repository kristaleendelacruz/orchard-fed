import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite uses rollup https://rollupjs.org/ as its module bundler
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
