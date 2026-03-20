import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // Ganti dengan URL GitHub Pages Anda:
  // Format: https://<username>.github.io          (jika repo bernama <username>.github.io)
  // Format: https://<username>.github.io/<repo>   (jika repo biasa)
  // Jika repo Anda BUKAN <username>.github.io, uncomment dan isi base:
  // base: '/nama-repo',
  site: "https://lazaaq.github.io",

  integrations: [tailwind()],
});