// vite.config.ts
import { defineConfig } from "file:///Users/bao/Documents/My%20Project/mobile-store/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/bao/Documents/My%20Project/mobile-store/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import federation from "file:///Users/bao/Documents/My%20Project/mobile-store/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
var vite_config_default = defineConfig(({ mode }) => {
  const port = 3002;
  return {
    plugins: [
      vue(),
      federation({
        name: "samsung",
        filename: "remoteEntry.js",
        remotes: {
          store: `http://localhost:3000/assets/remoteEntry.js`
        },
        exposes: {
          "./Phones.vue": "./src/components/Phones.vue"
        },
        shared: ["vue", "pinia"]
      })
    ],
    server: {
      port
    },
    preview: {
      port
    },
    build: {
      target: "esnext",
      cssCodeSplit: false,
      rollupOptions: {
        external: ["tailwindcss"]
      },
      chunkSizeWarningLimit: 500 * 1024
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYmFvL0RvY3VtZW50cy9NeSBQcm9qZWN0L21vYmlsZS1zdG9yZS9hcHBzL3NhbXN1bmdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9iYW8vRG9jdW1lbnRzL015IFByb2plY3QvbW9iaWxlLXN0b3JlL2FwcHMvc2Ftc3VuZy92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYmFvL0RvY3VtZW50cy9NeSUyMFByb2plY3QvbW9iaWxlLXN0b3JlL2FwcHMvc2Ftc3VuZy92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcbmltcG9ydCBmZWRlcmF0aW9uIGZyb20gXCJAb3JpZ2luanMvdml0ZS1wbHVnaW4tZmVkZXJhdGlvblwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xuICBjb25zdCBwb3J0ID0gMzAwMjtcbiAgcmV0dXJuIHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICB2dWUoKSxcbiAgICAgIGZlZGVyYXRpb24oe1xuICAgICAgICBuYW1lOiBcInNhbXN1bmdcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicmVtb3RlRW50cnkuanNcIixcbiAgICAgICAgcmVtb3Rlczoge1xuICAgICAgICAgIHN0b3JlOiBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2Fzc2V0cy9yZW1vdGVFbnRyeS5qc2AsXG4gICAgICAgIH0sXG4gICAgICAgIGV4cG9zZXM6IHtcbiAgICAgICAgICBcIi4vUGhvbmVzLnZ1ZVwiOiBcIi4vc3JjL2NvbXBvbmVudHMvUGhvbmVzLnZ1ZVwiLFxuICAgICAgICB9LFxuICAgICAgICBzaGFyZWQ6IFtcInZ1ZVwiLCBcInBpbmlhXCJdLFxuICAgICAgfSksXG4gICAgXSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIHBvcnQsXG4gICAgfSxcbiAgICBwcmV2aWV3OiB7XG4gICAgICBwb3J0LFxuICAgIH0sXG4gICAgYnVpbGQ6IHtcbiAgICAgIHRhcmdldDogXCJlc25leHRcIixcbiAgICAgIGNzc0NvZGVTcGxpdDogZmFsc2UsXG4gICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgIGV4dGVybmFsOiBbXCJ0YWlsd2luZGNzc1wiXSxcbiAgICAgIH0sXG4gICAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDUwMCAqIDEwMjQsXG4gICAgfSxcbiAgfTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErVixTQUFTLG9CQUFvQjtBQUM1WCxPQUFPLFNBQVM7QUFDaEIsT0FBTyxnQkFBZ0I7QUFHdkIsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsUUFBTSxPQUFPO0FBQ2IsU0FBTztBQUFBLElBQ0wsU0FBUztBQUFBLE1BQ1AsSUFBSTtBQUFBLE1BQ0osV0FBVztBQUFBLFFBQ1QsTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBLFFBQ1YsU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBLFFBQ1Q7QUFBQSxRQUNBLFNBQVM7QUFBQSxVQUNQLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsUUFDQSxRQUFRLENBQUMsT0FBTyxPQUFPO0FBQUEsTUFDekIsQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1A7QUFBQSxJQUNGO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsTUFDUixjQUFjO0FBQUEsTUFDZCxlQUFlO0FBQUEsUUFDYixVQUFVLENBQUMsYUFBYTtBQUFBLE1BQzFCO0FBQUEsTUFDQSx1QkFBdUIsTUFBTTtBQUFBLElBQy9CO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
