import { mathWave8ContractContent } from './contractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const diceProbabilityCopyEn: CalculatorCopy = {
  name: 'Dice probability calculator',
  slug: 'dice-probability-calculator',
  shortDescription: 'Probability of rolling a given sum on several identical dice.',
  seoTitle: 'Dice probability calculator — chance of a sum',
  seoDescription:
    'Calculate the probability of rolling a target sum on several identical dice, with the exact number of favourable and total outcomes.',
  h1: 'Dice probability calculator',
  keywords: ['dice probability calculator', 'sum of dice', 'd6 odds', 'favourable outcomes'],
  ...mathWave8ContractContent.en,
};
