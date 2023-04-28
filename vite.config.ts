import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgx from '@svgx/vite-plugin-react';
import { coverageConfigDefaults } from 'vitest/config';
import { million } from 'million/vite-plugin-million';
import eslintPlugin from '@nabla/vite-plugin-eslint';

export default defineConfig({
  plugins: [react(), svgx(), million(), eslintPlugin()],
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
    minify: false,
  },
  esbuild: { jsx: 'automatic' },
});
