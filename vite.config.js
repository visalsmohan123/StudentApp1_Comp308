import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  server: {
    port: 3001, // Specify the port to avoid conflicts
  },
  plugins: [
    react(),
    federation({
      name: 'studentapp1',
      filename: 'remoteEntry.js',
      exposes: {
        "./StudentForm": "./src/StudentForm.jsx"
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },

});
