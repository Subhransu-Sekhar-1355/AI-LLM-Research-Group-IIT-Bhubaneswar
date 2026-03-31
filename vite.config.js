import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? "/AI-LLM-Research-Group-IIT-Bhubaneswar/" : "/",
  plugins: [react()],
}))
