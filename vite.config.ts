/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgx from '@svgx/vite-plugin-react';
import { coverageConfigDefaults } from 'vitest/config';
import eslintPlugin from '@nabla/vite-plugin-eslint';

export default defineConfig({
  plugins: [react(), svgx(), eslintPlugin()],
  server: {
    open: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
    coverage: {
      provider: 'c8',
      all: true,
      skipFull: true,
      reporter: 'text',
      exclude: [...coverageConfigDefaults.exclude],
    },
  },
  build: {
    rollupOptions: {
      output: {
        interop: 'compat',
      },
    },
    sourcemap: true,
  },
});
