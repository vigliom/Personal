import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/Personal/', // Nombre del repositorio para GitHub Pages
  plugins: [vue()],
})
