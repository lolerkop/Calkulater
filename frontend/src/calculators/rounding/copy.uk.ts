import { mathWave8ContractContent } from './contractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const roundingCopyUk: CalculatorCopy = {
  name: 'Калькулятор округлення',
  slug: 'okruhlennya',
  shortDescription: 'Округлення до заданої кількості знаків до найближчого, вниз або вгору.',
  seoTitle: 'Калькулятор округлення чисел до знаків',
  seoDescription:
    'Округлення числа до заданої кількості десяткових знаків трьома способами — до найближчого, вниз і вгору — з показом відкинутої різниці.',
  h1: 'Калькулятор округлення',
  keywords: ['калькулятор округлення', 'округлити до знаків', 'округлення вниз', 'округлення вгору'],
  ...mathWave8ContractContent.uk,
};
