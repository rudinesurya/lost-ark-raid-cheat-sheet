import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'lost-ark-raid-cheat-sheet', // <--- 👀
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'assets/img/**/*.png', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Lost Ark Raid Cheat Sheet', // <--- 👀
        short_name: 'Lost Ark Raid Cheat Sheet', // <--- 👀
        description: 'Description', // <--- 👀
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
