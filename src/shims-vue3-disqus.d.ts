// vue3-disqus 1.0.7 ships type declarations but omits a `types` condition from
// its package.json `exports` map, so they don't resolve under bundler/NodeNext
// module resolution. Re-export the shipped declarations explicitly until that is
// fixed upstream.
declare module 'vue3-disqus' {
  export * from 'vue3-disqus/dist/index'
  export { default } from 'vue3-disqus/dist/index'
}
