import type { CalculatorCopy } from '../../lib/platform/types';
import { idealGasLawContractContent } from './contractContent';

export const idealGasLawCopyUk: CalculatorCopy = {
  name: 'Калькулятор рівняння стану ідеального газу',
  slug: 'rivniannia-stanu-hazu',
  shortDescription: 'PV = nRT: тиск або об’єм газу за рештою величин.',
  seoTitle: 'Калькулятор рівняння стану ідеального газу — PV = nRT',
  seoDescription: 'Обчисліть тиск або об’єм ідеального газу за рівнянням PV = nRT з вибором одиниць.',
  h1: 'Калькулятор рівняння стану ідеального газу',
  keywords: ['рівняння стану ідеального газу', 'pv nrt', 'газова стала'],
  ...idealGasLawContractContent.uk,
};
