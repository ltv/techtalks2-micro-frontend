// vite.config.ts
import { defineConfig } from "file:///Users/bao/Documents/My%20Project/mobile-store/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/bao/Documents/My%20Project/mobile-store/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import federation from "file:///Users/bao/Documents/My%20Project/mobile-store/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
var vite_config_default = defineConfig(({ mode }) => {
  const port = 3001;
  return {
    plugins: [
      vue(),
      federation({
        name: "apple",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYmFvL0RvY3VtZW50cy9NeSBQcm9qZWN0L21vYmlsZS1zdG9yZS9hcHBzL2FwcGxlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYmFvL0RvY3VtZW50cy9NeSBQcm9qZWN0L21vYmlsZS1zdG9yZS9hcHBzL2FwcGxlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9iYW8vRG9jdW1lbnRzL015JTIwUHJvamVjdC9tb2JpbGUtc3RvcmUvYXBwcy9hcHBsZS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcbmltcG9ydCBmZWRlcmF0aW9uIGZyb20gXCJAb3JpZ2luanMvdml0ZS1wbHVnaW4tZmVkZXJhdGlvblwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xuICBjb25zdCBwb3J0ID0gMzAwMTtcbiAgcmV0dXJuIHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICB2dWUoKSxcbiAgICAgIGZlZGVyYXRpb24oe1xuICAgICAgICBuYW1lOiBcImFwcGxlXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJlbW90ZUVudHJ5LmpzXCIsXG4gICAgICAgIHJlbW90ZXM6IHtcbiAgICAgICAgICBzdG9yZTogYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hc3NldHMvcmVtb3RlRW50cnkuanNgLFxuICAgICAgICB9LFxuICAgICAgICBleHBvc2VzOiB7XG4gICAgICAgICAgXCIuL1Bob25lcy52dWVcIjogXCIuL3NyYy9jb21wb25lbnRzL1Bob25lcy52dWVcIixcbiAgICAgICAgfSxcbiAgICAgICAgc2hhcmVkOiBbXCJ2dWVcIiwgXCJwaW5pYVwiXSxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgc2VydmVyOiB7XG4gICAgICBwb3J0LFxuICAgIH0sXG4gICAgcHJldmlldzoge1xuICAgICAgcG9ydCxcbiAgICB9LFxuICAgIGJ1aWxkOiB7XG4gICAgICB0YXJnZXQ6IFwiZXNuZXh0XCIsXG4gICAgICBjc3NDb2RlU3BsaXQ6IGZhbHNlLFxuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBleHRlcm5hbDogW1widGFpbHdpbmRjc3NcIl0sXG4gICAgICB9LFxuICAgICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiA1MDAgKiAxMDI0LFxuICAgIH0sXG4gIH07XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVYsU0FBUyxvQkFBb0I7QUFDdFgsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sZ0JBQWdCO0FBR3ZCLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ3hDLFFBQU0sT0FBTztBQUNiLFNBQU87QUFBQSxJQUNMLFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLFdBQVc7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxRQUNWLFNBQVM7QUFBQSxVQUNQLE9BQU87QUFBQSxRQUNUO0FBQUEsUUFDQSxTQUFTO0FBQUEsVUFDUCxnQkFBZ0I7QUFBQSxRQUNsQjtBQUFBLFFBQ0EsUUFBUSxDQUFDLE9BQU8sT0FBTztBQUFBLE1BQ3pCLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQO0FBQUEsSUFDRjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLE1BQ1IsY0FBYztBQUFBLE1BQ2QsZUFBZTtBQUFBLFFBQ2IsVUFBVSxDQUFDLGFBQWE7QUFBQSxNQUMxQjtBQUFBLE1BQ0EsdUJBQXVCLE1BQU07QUFBQSxJQUMvQjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
