import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/bk-deep-learning-web/',
  plugins: [react()]
});
