export default defineNuxtConfig({
  modules: ["../src/module"],
  disqus: {
    shortname: "ktquez-dev-test",
  },
  devtools: { enabled: process.env.NODE_ENV === "development" },
});
