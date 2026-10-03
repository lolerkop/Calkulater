import { mathWave8ContractContent } from './contractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const weightedMeanCopyUk: CalculatorCopy = {
  name: 'Калькулятор середньозваженого значення',
  slug: 'serednozvazhene',
  shortDescription: 'Середнє з урахуванням ваги кожного значення: оцінок, часток, обсягів.',
  seoTitle: 'Калькулятор середньозваженого значення',
  seoDescription: 'Обчисліть середньозважене значення за парами «значення вага»: оцінки з кредитами, ціни з обсягами.',
  h1: 'Калькулятор середньозваженого значення',
  keywords: ['середньозважене значення', 'зважене середнє', 'калькулятор середнього з вагами'],
  ...mathWave8ContractContent.uk,
};
