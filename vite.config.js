import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 80,
    // Enable detailed logs for the local server
    logLevel: 'verbose',
  },
  
  // Build settings
  build: {
    // Minify the code using esbuild
    minify: 'esbuild',
    // Generate source maps for debugging
    sourcemap: true,
  },
  
  // Optimize dependencies
  optimizeDeps: {
    // Include react and react-dom in the optimization
    include: ['react', 'react-dom'],
  },
  
  // Esbuild options
  esbuild: {
    // Target ES2021 syntax
    target: 'es2021',
  },
  
  // Enable source maps for CSS
  cssSourceMap: true,
  
  // Enable compression for production builds
  compress: true,
})