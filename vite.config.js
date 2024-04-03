import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/StudentForm.jsx',
      name: 'student-form-library',
      formats: ['es', 'cjs'],
    },
  },
});