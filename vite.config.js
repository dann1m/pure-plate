import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative paths for assets
  build: {
    assetsInlineLimit: 0, // Prevent inlining small assets
  },
})
