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
      exclude: [
        'vite.config.ts',
        'dist',
        'src/vite-env.d.ts',
        'src/types',
        'src/**/*.test.tsx',
        'server.ts',
        'src/entry-client.tsx',
        'src/entry-server.tsx',
        'src/store/plantsApi.ts',
        'src/store/index.ts',
        'src/store/recycleSlice.ts',
        'src/store/searchSlice.ts',
      ],
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
