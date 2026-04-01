import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Code splitting - separate vendor and app code
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@mui/material', '@emotion/react', '@emotion/styled'],
          'animation-vendor': ['framer-motion'],
          'icons-vendor': ['react-icons', 'lucide-react'],
        },
      },
    },
    // Optimize build
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 500,
    // CSS code splitting
    cssCodeSplit: true,
    // Sourcemaps for production (optional - set to false for smaller build)
    sourcemap: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', '@mui/material', 'framer-motion'],
  },
})
