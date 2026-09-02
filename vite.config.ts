import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Four marketing routes and no server functions, so there is nothing to run:
// nitro is off and the app ships as a prerendered client bundle.
export default defineConfig({
  nitro: false,
  tanstackStart: {
    spa: { enabled: true },
    prerender: { enabled: true, crawlLinks: true },
  },
});
