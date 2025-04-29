import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
// import { resolve } from "node:fs/path";
// import { fileURLToPath } from "node:url";
// import { resolve } from "node:path";

console.log("URL:", import.meta.url);

export default defineConfig({
  plugins: [tsconfigPaths()],
  resolve: {
    alias: {
      "@": new URL("./src/", import.meta.url).pathname,
      // "@": import.meta.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    // environment: "jsdom",
    environment: "happy-dom",
    setupFiles: ["./config/setupTests.ts"],
  },
});
