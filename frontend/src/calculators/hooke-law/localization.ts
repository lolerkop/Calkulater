import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Сила': 'Force', 'Удлинение': 'Extension', 'Жёсткость': 'Spring rate',
  'Энергия пружины': 'Stored energy', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Сила': 'Сила', 'Удлинение': 'Видовження', 'Жёсткость': 'Жорсткість',
  'Энергия пружины': 'Енергія пружини', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { mode: 'What to find', k: 'Spring rate, N/m', x: 'Extension or compression, m', f: 'Force, N' },
    options: { force: 'the spring force', extension: 'the extension', stiffness: 'the spring rate' },
    results: RESULTS_EN,
    values: {
      'Сила и деформация должны быть направлены в одну сторону': 'The force and the deformation must point the same way',
      'Н/м': 'N/m', 'Н': 'N', 'Дж': 'J', 'м': 'm',
      'Жёсткость должна быть больше нуля': 'The spring rate must be greater than zero',
      'Удлинение не может быть нулевым: делить на него нечего': 'The extension cannot be zero: there is nothing to divide by',
    },
  },
  uk: {
    fields: { mode: 'Що знайти', k: 'Жорсткість, Н/м', x: 'Видовження або стиснення, м', f: 'Сила, Н' },
    options: { force: 'силу пружності', extension: 'видовження', stiffness: 'жорсткість' },
    results: RESULTS_UK,
    values: {
      'Сила и деформация должны быть направлены в одну сторону': 'Сила і деформація мають бути напрямлені в один бік',
      'Н/м': 'Н/м', 'Н': 'Н', 'Дж': 'Дж', 'м': 'м',
      'Жёсткость должна быть больше нуля': 'Жорсткість має бути більшою за нуль',
      'Удлинение не может быть нулевым: делить на него нечего': 'Видовження не може бути нульовим: ділити на нього нічого',
    },
  },
};
