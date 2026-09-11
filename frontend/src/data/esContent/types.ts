import type { CalculatorDef } from '../../lib/types';

// Тот же набор полей, что уже принимает esCalculatorContent: подробный
// испанский текст перекрывает общие шаблоны в buildLocalizedCalculatorCopy.
export type EsDetailedContent = Pick<
  CalculatorDef,
  'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq'
>;
