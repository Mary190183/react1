/// <reference types="vitest" />
/// <reference types="vite/client" />
import istanbul from 'vite-plugin-istanbul';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgx from '@svgx/vite-plugin-react';
import eslintPlugin from '@nabla/vite-plugin-eslint';

export default defineConfig({
  plugins: [
    react(),
    svgx(),
    eslintPlugin(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  server: {
    open: true,
    port: 5113,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
    coverage: {
      provider: 'istanbul',
      all: true,
      skipFull: true,
      reporter: 'text',
      exclude: [
        'vite.config.ts',
        'dist',
        'cypress',
        'instrumented',
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
  envDir: './',
});
