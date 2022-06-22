import { defineNuxtConfig } from 'nuxt';
import svgLoader from 'vite-svg-loader';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    "@/assets/css/tailwind.css",
    "@/assets/css/styles.css",
  ],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
  buildModules: [
    '@pinia/nuxt', 
  ],
  vite: {
    plugins: [
      svgLoader({

      })
    ]
  },
  head: {
    meta: [ 
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]
  },
})