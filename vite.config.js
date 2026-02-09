import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/<REPO>/', // Reemplaza <REPO> por el nombre de tu repositorio de GitHub
  plugins: [vue()],
})
