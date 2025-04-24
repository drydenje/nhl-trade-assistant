/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import { loadEnv } from "vite";
// import { process } from "process";

export default defineConfig(({ mode }) => {
  // Load env files based on mode
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  // console.log("ENV:", process.env);
  return {
    // Your vitest config
    test: {
      environment: "node",
      globals: true, // This allows using globals without imports
    },
  };
});
