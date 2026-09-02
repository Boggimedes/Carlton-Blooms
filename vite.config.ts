import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Four marketing routes and no server functions, so there is nothing to run:
// nitro is off and every route is prerendered to a static page.
export default defineConfig({
  nitro: false,
  tanstackStart: {
    prerender: { enabled: true, crawlLinks: true },
  },
});
