import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite";

const config = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

export default config

