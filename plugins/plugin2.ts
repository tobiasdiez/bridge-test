import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(() => {
  throw new Error("Error from plugin 2");
});
