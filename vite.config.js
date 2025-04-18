import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',  // ✅ root-level deploy for www.juniperfieldsco.com
  plugins: [react()],
})