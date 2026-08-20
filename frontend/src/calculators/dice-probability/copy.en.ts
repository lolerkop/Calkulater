import type { CalculatorCopy } from '../../lib/platform/types';

export const diceProbabilityCopyEn: CalculatorCopy = {
  name: 'Dice probability calculator',
  slug: 'dice-probability-calculator',
  shortDescription: 'Probability of rolling a given sum on several identical dice.',
  longDescription:
    'Sums on several dice are not equally likely, and that is the whole point. There is exactly one way to roll two on two six-sided dice and six ways to roll seven, so seven comes up six times as often. The calculator counts the favourable combinations exactly using inclusion–exclusion rather than simulating rolls, so the answer is a definite fraction rather than an estimate. Both counts are computed in exact integer arithmetic, which matters once the totals grow: ten twenty-sided dice have more than ten quadrillion outcomes, past the point where ordinary floating-point counting stays reliable.',
  seoTitle: 'Dice probability calculator — chance of a sum',
  seoDescription:
    'Calculate the probability of rolling a target sum on several identical dice, with the exact number of favourable and total outcomes.',
  h1: 'Dice probability calculator',
  keywords: ['dice probability calculator', 'sum of dice', 'd6 odds', 'favourable outcomes'],
  howToUse: [
    'Enter how many dice are rolled.',
    'Enter how many sides each die has.',
    'Enter the sum you are interested in.',
    'The sum must be between the number of dice and dice × sides.',
  ],
  howItWorks:
    'Favourable combinations come from inclusion–exclusion over the number of dice that overshoot their maximum. Total outcomes are sides raised to the number of dice, and the probability is their ratio.',
  example: 'Two six-sided dice make seven in six of thirty-six ways, which is 16.67%.',
  faq: [
    {
      q: 'Why is seven the most likely sum on two dice?',
      a: 'Because it has the most combinations: six of them, from 1+6 through 6+1. Two and twelve have one each, which is why they show up six times less often.',
    },
    {
      q: 'Does this cover dice with different numbers of sides?',
      a: 'No, all the dice here are identical. Mixed sets — a d6 with a d8, say — need a different count and are not what this calculator computes.',
    },
    {
      q: 'What is the expected sum?',
      a: 'The average over many rolls: dice × (sides + 1) ÷ 2. For three six-sided dice it is 10.5, which is why ten and eleven are the most common results.',
    },
    {
      q: 'How do I get the chance of at least a given sum?',
      a: 'Add up the probabilities of that sum and every higher one. This calculator answers for one exact sum at a time.',
    },
  ],
};
