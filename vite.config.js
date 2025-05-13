import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  base: "/kontur-mockup/", // важно! как в ссылке на GitHub Pages
});
