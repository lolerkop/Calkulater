// Подписи полей A и B зависят от выбранного режима: в режиме доли это «Часть»
// и «Целое», в режиме изменения — «Начальное» и «Конечное». Логика перенесена
// из `CalculatorIsland.tsx` дословно, вместе с текстами всех трёх локалей.

import type { Field } from '../../lib/types';
import type { CalculatorContextualField } from '../../lib/platform/types';

const labels = {
  ru: {
    percentage: 'Процент', number: 'Число', part: 'Часть', whole: 'Целое', start: 'Начальное значение', end: 'Конечное значение',
  },
  en: {
    percentage: 'Percentage', number: 'Number', part: 'Part', whole: 'Whole', start: 'Starting value', end: 'Final value',
  },
  uk: {
    percentage: 'Відсоток', number: 'Число', part: 'Частина', whole: 'Ціле', start: 'Початкове значення', end: 'Кінцеве значення',
  },
} as const;

export const percentContextualField: CalculatorContextualField = (field, values, locale): Field => {
  if (field.name !== 'a' && field.name !== 'b') return field;
  const mode = String(values.mode ?? 'of');
  const copy = labels[locale === 'ru' || locale === 'uk' ? locale : 'en'];
  if (mode === 'what') return { ...field, label: field.name === 'a' ? copy.part : copy.whole };
  if (mode === 'change') return { ...field, label: field.name === 'a' ? copy.start : copy.end };
  return { ...field, label: field.name === 'a' ? copy.percentage : copy.number };
};

export { percentContextualField as contextualField };
