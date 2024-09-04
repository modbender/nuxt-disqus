import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["../src/module"],
  devtools: { enabled: process.env.NODE_ENV === "development" },
  compatibilityDate: "2024-09-04",
});