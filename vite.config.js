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

  // Services subdirectory
  const servicesDir = resolve(root, 'services');
  if (fs.existsSync(servicesDir)) {
    const serviceFiles = fs.readdirSync(servicesDir).filter(f => f.endsWith('.html'));
    serviceFiles.forEach(file => {
      const name = `services/${file.replace('.html', '')}`;
      entries[name] = resolve(servicesDir, file);
    });
  }

  return entries;
}

export default defineConfig({
  root: '.',
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
    minify: 'terser',
    cssMinify: true
  },
  server: {
    port: 3000,
    open: true
  }
});
