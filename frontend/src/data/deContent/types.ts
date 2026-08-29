import type { CalculatorDef } from '../../lib/types';

// Тот же набор полей, что уже принимает deCalculatorContent: подробный немецкий
// текст перекрывает общие шаблоны в buildLocalizedCalculatorCopy.
export type DeDetailedContent = Pick<
  CalculatorDef,
  'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq'
>;
