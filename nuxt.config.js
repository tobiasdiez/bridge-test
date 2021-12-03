import { defineNuxtConfig } from "@nuxt/bridge";

export default defineNuxtConfig({
  target: "static",
  bridge: {
    vite: true
  },
  ssr: true,
});
