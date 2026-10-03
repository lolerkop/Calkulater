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
  de: {
    percentage: 'Prozentsatz', number: 'Zahl', part: 'Teil', whole: 'Ganzes', start: 'Ausgangswert', end: 'Endwert',
  },
  es: {
    percentage: 'Porcentaje', number: 'Número', part: 'Parte', whole: 'Total', start: 'Valor inicial', end: 'Valor final',
  },
} as const;

export const percentContextualField: CalculatorContextualField = (field, values, locale): Field => {
  if (field.name !== 'a' && field.name !== 'b') return field;
  const mode = String(values.mode ?? 'of');
  const copy = labels[locale === 'ru' || locale === 'uk' || locale === 'de' || locale === 'es' ? locale : 'en'];
  if (mode === 'what') return { ...field, label: field.name === 'a' ? copy.part : copy.whole, unit: undefined };
  if (mode === 'change') return { ...field, label: field.name === 'a' ? copy.start : copy.end, unit: undefined };
  const isPercentage = mode === 'addPct' || mode === 'subPct' ? field.name === 'b' : field.name === 'a';
  return { ...field, label: isPercentage ? copy.percentage : copy.number, unit: isPercentage ? '%' : undefined };
};

export { percentContextualField as contextualField };
