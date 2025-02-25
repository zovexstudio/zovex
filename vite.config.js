// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    minify: "terser", // Minify code to reduce bundle size
    chunkSizeWarningLimit: 500, // Avoid large bundle warnings
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Separate vendor libraries from the main bundle
          }
        },
      },
    },
  },
  server: {
    host: true, // Ensure it's accessible on the network
    port: 3000, // Adjust if necessary
  },
});
