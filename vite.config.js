import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/GoVibe_userUI/',  // add this line to set base path
  plugins: [react()],
})
