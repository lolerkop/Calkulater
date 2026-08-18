import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены из ms = 1000 / fps вручную:
//   1000 / 60 = 16,666… · 1000 / 240 = 4,1666… · 1000 / 8,33 = 120,048…
export const fpsFrametimeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: '60 FPS — это 16,667 мс на кадр',
    inputs: { mode: 'fps', fps: 60 },
    expectPrimary: '16,667 мс',
  },
  {
    name: '8,33 мс на кадр — это 120,05 FPS',
    inputs: { mode: 'ms', frameTime: 8.33 },
    expectPrimary: '120,05 FPS',
  },
  {
    name: 'граница: 240 FPS — 4,167 мс',
    inputs: { mode: 'fps', fps: 240 },
    expectPrimary: '4,167 мс',
  },
  {
    name: 'граница: 1 FPS — ровно 1000 мс',
    inputs: { mode: 'fps', fps: 1 },
    expectPrimary: '1 000,000 мс',
  },
  {
    name: 'недопустимо: нулевая частота кадров',
    inputs: { mode: 'fps', fps: 0 },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: нулевое время кадра',
    inputs: { mode: 'ms', frameTime: 0 },
    expectPrimary: '—',
  },
];
