import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/Prototype-Craftware-V2/',
  plugins: [react(), tailwindcss()],
});
