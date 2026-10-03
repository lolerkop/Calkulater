import type { CalculatorCopy } from '../../lib/platform/types';
import { waveContractContent } from './contractContent';

export const waveCopyUk: CalculatorCopy = {
  name: 'Калькулятор довжини хвилі та частоти',
  slug: 'khvylya-chastota',
  shortDescription: 'Зв’язок швидкості, частоти та довжини хвилі в будь-якому напрямі.',
  seoTitle: 'Калькулятор довжини хвилі, частоти та швидкості',
  seoDescription: 'Розрахунок довжини хвилі, частоти або швидкості за двома відомими величинами разом із періодом коливання.',
  h1: 'Калькулятор довжини хвилі та частоти',
  keywords: ['довжина хвилі', 'частота', 'швидкість хвилі', 'період коливання'],
  ...waveContractContent.uk,
};
