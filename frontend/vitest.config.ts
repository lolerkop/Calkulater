import { defineConfig } from 'vitest/config';

// Конфигурация Vitest для модульного тестирования
// чистой логики калькуляторов (без UI).
export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
    environment: 'node',
    globals: false,
    reporters: ['default'],
  },
});
