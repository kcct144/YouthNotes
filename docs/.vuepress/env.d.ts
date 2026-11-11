/// <reference path="../../node_modules/vuepress-theme-plume/dist/client/shim.d.ts" />

declare module '*.css'

declare module '@temp/random-notes' {
  const notes: import('./shared/random-notes').RandomNote[]
  export default notes
}

declare const __VUEPRESS_SSR__: boolean
