import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteCompression from "vite-plugin-compression";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression({
      algorithm: "brotliCompress",
    }),
  ],
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimizeDeps: {
    include: [
      "@massif/lancer-data",
      "@massif/ktb-data",
      "@massif/wallflower-data",
      "@massif/long-rim-data",
      "@massif/osr-data",
      "@massif/ssmr-data",
      "@massif/dustgrave-data",
      "@massif/ows-data",
      "../assets/lcp/Core_Mk_2",
    ],
  },
  build: {
    sourcemap: true,
    cssCodeSplit: true,
    reportCompressedSize: true,
  },
  json: {
    namedExports: true,
  },
  css: {
    devSourcemap: true,
  },
});
