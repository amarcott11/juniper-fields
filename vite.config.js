import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/juniper-fields/', // <-- Change to your repo name
  plugins: [react()],
})