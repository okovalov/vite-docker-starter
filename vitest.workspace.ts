import { defineWorkspace } from "vitest/config";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineWorkspace([
  {
    test: {
      include: [
        // "tests/unit/**/*.{test,spec}.ts",
        // "tests/**/*.unit.{test,spec}.ts",
        "tests/**/*.{test,spec}.ts",
      ],
      name: "unit",
      environment: "node",
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "/src"),
      },
    },
  },
  {
    test: {
      include: [
        // "tests/browser/**/*.{test,spec}.ts",
        // "tests/**/*.browser.{test,spec}.ts",
        "tests/**/*.{test,spec}.tsx",
      ],
      name: "browser",
      browser: {
        enabled: true,
        provider: "playwright",
        name: "firefox",
        // provider: "webdriverio", // doesnt work , no state update
        headless: true,
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "/src"),
      },
    },
  },
]);
