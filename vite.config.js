import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true, // Enable the service worker in development for testing
      },
      manifest: {
        name: "Robofriends",
        short_name: "Robofriends",
        description: "My awesome Robofriends PWA!",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "./icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "./icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  base: "/robofriends-latest/",
});
