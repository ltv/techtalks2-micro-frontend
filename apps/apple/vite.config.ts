import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig(() => {
  const port = 3001;
  return {
    plugins: [
      vue(),
      federation({
        name: "apple",
        filename: "remoteEntry.js",
        remotes: {
          cart: `http://localhost:3004/assets/remoteEntry.js`,
        },
        exposes: {
          "./Phones.vue": "./src/components/Phones.vue",
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
