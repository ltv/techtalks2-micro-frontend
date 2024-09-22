import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig(() => {
  const port = 3004;
  return {
    plugins: [
      vue(),
      federation({
        name: "cart",
        filename: "remoteEntry.js",
        remotes: {
          store: `http://localhost:3000/assets/remoteEntry.js`,
        },
        exposes: {
          "./cart": "./src/stores/cart",
          "./Cart.vue": "./src/components/Cart.vue",
        },
        shared: ["vue", "pinia"],
      }),
    ],
    server: {
      port,
    },
    preview: {
      port,
    },
    build: {
      target: "esnext",
      cssCodeSplit: false,
      rollupOptions: {
        external: ["tailwindcss"],
      },
      chunkSizeWarningLimit: 500 * 1024,
    },
  };
});
