import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@/api": resolve(__dirname, "src/api"),
      "@/utils": resolve(__dirname, "src/utils"),
    },
  },
  plugins: [uni()],
});
