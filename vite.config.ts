import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgx from '@svgx/vite-plugin-react';
import { coverageConfigDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react(), svgx()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
    coverage: {
      provider: 'c8',
      all: true,
      skipFull: true,
      reporter: 'text',
      exclude: [...coverageConfigDefaults.exclude, '**/main.tsx', '**/I*.ts'],
    },
  },
});
