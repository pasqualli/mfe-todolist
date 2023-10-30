import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "todoList",
      remotes: {
        header: "http://localhost:5110/assets/remoteEntry.js",
        mfeList: "http://localhost:5111/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ], // register the plugin
  server: {
    port: 3000,
  },
});
