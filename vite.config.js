import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

// Auto-discover HTML files for multi-page build
function getHtmlEntries() {
  const entries = {};
  const root = resolve(__dirname);

  // Root HTML files
  const rootFiles = fs.readdirSync(root).filter(f => f.endsWith('.html'));
  rootFiles.forEach(file => {
    const name = file.replace('.html', '');
    entries[name] = resolve(root, file);
  });

  // EN subdirectory
  const enDir = resolve(root, 'en');
  if (fs.existsSync(enDir)) {
    const enFiles = fs.readdirSync(enDir).filter(f => f.endsWith('.html'));
    enFiles.forEach(file => {
      const name = `en/${file.replace('.html', '')}`;
      entries[name] = resolve(enDir, file);
    });
  }

  return entries;
}

export default defineConfig({
  root: '.',
  base: './', // Ensures relative paths for assets on GitHub Pages
  publicDir: 'public',
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: getHtmlEntries()
    },
    cssMinify: true
  },
  server: {
    port: 3000,
    open: true
  }
});
