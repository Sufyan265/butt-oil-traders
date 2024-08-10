import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/butt-oil-traders',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  // server: {
  //   host: true, // Use 0.0.0.0 to listen on all IP addresses
  //   port: 5173, // or any other port you prefer
  // },
})
