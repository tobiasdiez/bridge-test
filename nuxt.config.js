import { defineNuxtConfig } from "@nuxt/bridge";

export default defineNuxtConfig({
  bridge: {
    vite: true
  },
  target: "static",
  ssr: true,
  build: {
    transpile: ["tslib", "vue-property-decorator"]
  }
});
