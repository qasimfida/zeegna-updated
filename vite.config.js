import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        "@floating-ui/react",
        "@/react-stately/utils",
        "@react-aria/ssr",
      ],
    },
  },
});
