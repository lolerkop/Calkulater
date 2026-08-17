// Английский копирайт калькулятора краски.
// Перенесён из `enCalculatorCopy` в `i18n.ts` дословно.

import type { CalculatorCopy } from '../../lib/platform/types';
import { genericEnFaq } from '../../lib/platform/copyHelpers';

export const paintCopyEn: CalculatorCopy = {
  name: 'Paint calculator',
  slug: 'paint-calculator',
  shortDescription: 'Estimate paint liters and cans for walls or a manual area.',
  longDescription: 'Use this paint calculator to estimate paint quantity from area, coats, coverage and can size.',
  seoTitle: 'Paint calculator — liters and cans needed',
  seoDescription: 'Calculate paint liters and cans for walls using area, coats, coverage and can volume.',
  h1: 'Paint calculator',
  keywords: ['paint calculator', 'paint liters', 'paint cans'],
  howToUse: ['Enter room dimensions or area.', 'Set coats, coverage and can size.', 'Review liters and cans.'],
  howItWorks: 'The calculator multiplies area by coats and coverage, then divides by can volume.',
  example: 'Estimate paint for 30 square meters with two coats.',
  faq: genericEnFaq('paint calculator'),
};
