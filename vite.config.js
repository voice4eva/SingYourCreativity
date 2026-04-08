import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        en: resolve(__dirname, "en/index.html"),
        fr: resolve(__dirname, "fr/index.html"),
      },
    },
  },
});
