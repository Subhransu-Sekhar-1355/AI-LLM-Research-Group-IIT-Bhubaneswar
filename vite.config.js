import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? "/Nexus-AI-Lab-Research-Website/" : "/",
  plugins: [react()],
}))
