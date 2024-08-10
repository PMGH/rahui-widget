import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [cssInjectedByJsPlugin()],
  build: {
    rollupOptions: {
      input: "src/main.ts",
      output: {
        format: "iife",
        dir: "dist",
        entryFileNames: "bundle.js",
      },
    },
  },
});
