import { defineConfig } from "vite";
import { resolve } from "path";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: '/StoryApp/',

  plugins: [
    VitePWA({
      strategies: "injectManifest",
      srcDir: "scripts",
      filename: "sw.js",
      injectManifest: {
        injectionPoint: undefined,
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg}"],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
      },
      manifest: {
        id: "/#/",
        start_url: "/#/",
        scope: "/",
        name: "Story App",
        short_name: "StoryApp",
        description: "Aplikasi berbagi cerita.",
        display: "standalone",
        background_color: "#FFFFFF",
        theme_color: "#FFFFFF",
        icons: [
          {
            src: "images/icons/icon-x144.png",
            type: "image/png",
            sizes: "144x144",
            purpose: "any"
          },
          {
            src: "images/icons/maskable-icon-x48.png",
            type: "image/png",
            sizes: "48x48",
            purpose: "maskable"
          },
          {
            src: "images/icons/maskable-icon-x96.png",
            type: "image/png",
            sizes: "96x96",
            purpose: "maskable"
          },
          {
            src: "images/icons/maskable-icon-x192.png",
            type: "image/png",
            sizes: "192x192",
            purpose: "maskable"
          },
          {
            src: "images/icons/maskable-icon-x384.png",
            type: "image/png",
            sizes: "384x384",
            purpose: "maskable"
          },
          {
            src: "images/icons/maskable-icon-x512.png",
            type: "image/png",
            sizes: "512x512",
            purpose: "maskable"
          }
        ],
        screenshots: [
          {
            src: "images/screenshots/StoryApp_001.jpg",
            sizes: "1920x1043",
            type: "image/jpg",
            form_factor: "wide"
          },
          {
            src: "images/screenshots/StoryApp_002.jpg",
            sizes: "1080x2280",
            type: "image/jpg",
            form_factor: "narrow"
          },
          {
            src: "images/screenshots/StoryApp_003.jpg",
            sizes: "1080x2280",
            type: "image/jpg",
            form_factor: "narrow"
          },
        ],
        shortcuts: [
          {
            name: "Story Baru",
            short_name: "Baru",
            description: "Posting cerita baru.",
            url: "/?source=pwa#/new",
            icons: [
              {
                src: "images/icons/add-x512.png",
                type: "image/png",
                sizes: "512x512"
              }
            ]
          },
          {
            name: "Cerita Tersimpan",
            short_name: "Tersimpan",
            description: "Lihat daftar cerita tersimpan.",
            url: "/?source=pwa#/bookmark",
            icons: [
              {
                src: "images/icons/bookmark-x512.png",
                type: "image/png",
                sizes: "512x512"
              }
            ]
          }
        ]
      },
      devOptions: {
        enabled: process.env.NODE_ENV === "development",
        type: "module",
        navigateFallback: "index.html",
      },
    }),
  ],

  // ⬇️ Konfigurasi build & direktori
  root: resolve(__dirname, "src"),
  publicDir: resolve(__dirname, "src", "public"),
  build: {
    rollupOptions: {
      input: {
        main: './src/index.html',
        sw: './src/scripts/sw.js'
      }
    },
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
  },

  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
