import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [react()],
  base: '/home/',
  server: {
    host: '0.0.0.0',  // 👈 this is the key line to allow external access
    port: 5173
  },
  build: {
    rollupOptions: {
      // external: [], // (if you ever use it)
    }
  },
  define: {
    'process.env': {
      VITE_API_KEY: JSON.stringify(process.env.VITE_API_KEY)
    }
  }  
});
