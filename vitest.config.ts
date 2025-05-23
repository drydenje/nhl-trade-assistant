/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import { loadEnv } from "vite";
// import { process } from "process";

export default defineConfig(({ mode }) => {
  // Load env files based on mode
  // process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return {
    resolve: {
      alias: {
        "@": new URL("./src/", import.meta.url).pathname,
      },
    },
    test: {
      env: loadEnv(mode, process.cwd(), ""),
      // environment: "node",
      environment: "happy-dom",
      // environment: "jsdom",
      setupFiles: ["./config/setupTests.ts"],
      globals: true, // This allows using globals without imports
    },
  };
});

// to try
// import { defineConfig, mergeConfig } from 'vitest/config'
// import viteConfig from './vite.config.mjs'

// export default mergeConfig(viteConfig, defineConfig({
//   test: {
//     // ...
//   },
// }))
