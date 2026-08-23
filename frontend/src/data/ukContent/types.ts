import type { CalculatorDef } from '../../lib/types';

// Той самий набір полів, що вже приймає ukCalculatorContent: детальний
// український текст перекриває загальні шаблони в buildLocalizedCalculatorCopy.
export type UkDetailedContent = Pick<
  CalculatorDef,
  'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq'
>;
