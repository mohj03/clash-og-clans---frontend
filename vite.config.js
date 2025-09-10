import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/clash-og-clans---frontend/',   // Adjust base path for GitHub Pages
  plugins: [react()],
})