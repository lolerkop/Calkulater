import type { CalculatorCopy } from '../../lib/platform/types';

export const ctrCopyEn: CalculatorCopy = {
  name: 'CTR calculator',
  slug: 'ctr-calculator',
  shortDescription: 'Click-through rate from clicks and impressions, with cost per click.',
  longDescription:
    'Divides clicks by impressions to give the click-through rate. The denominator is what separates CTR from the metrics beside it: conversion divides by clicks, ROAS by spend, and mixing them up produces a number that looks perfectly plausible. Add the campaign spend and the cost per click and per thousand impressions follow.',
  seoTitle: 'CTR calculator — click-through rate and cost per click',
  seoDescription: 'Calculate click-through rate from clicks and impressions, plus cost per click and per thousand impressions.',
  h1: 'CTR calculator',
  keywords: ['ctr calculator', 'click through rate', 'cost per click'],
  howToUse: ['Enter the number of clicks.', 'Enter the number of impressions.', 'Add the spend for cost per click.'],
  howItWorks: 'CTR = clicks ÷ impressions × 100; cost per click is spend ÷ clicks.',
  example: '1250 clicks on 84 000 impressions is a CTR of 1.49 percent.',
  faq: [
    { q: 'What counts as a good CTR?', a: 'It depends entirely on the channel, the placement and the audience, so no benchmark is shown here. Compare against your own history instead.' },
    { q: 'Why can clicks not exceed impressions?', a: 'Every click follows an impression. More clicks than impressions usually means the two figures come from different periods or different reports.' },
    { q: 'How is CTR different from conversion rate?', a: 'The denominator. CTR divides by impressions; conversion rate divides by clicks or sessions.' },
    { q: 'What happens with zero clicks?', a: 'CTR is zero, which is a real result. Cost per click has no value, because there is nothing to divide by.' },
  ],
};
