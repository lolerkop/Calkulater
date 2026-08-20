import type { CalculatorCopy } from '../../lib/platform/types';

export const aquariumWaterChangeCopyEn: CalculatorCopy = {
  name: 'Aquarium water change calculator',
  slug: 'aquarium-water-change-calculator',
  shortDescription: 'Volume of water to prepare for a change, corrected for substrate and decor.',
  longDescription:
    'A tank labelled one hundred litres never holds one hundred litres of water: gravel, rock and driftwood take up their share, and the water line sits below the rim. That difference matters twice over. Prepare the change from the label and you carry more water than the tank can take; dose conditioner by the label and you overdose every single time, because dosing follows the water, not the glass. This calculator subtracts the displaced share first and then applies the change percentage to what is actually water.',
  seoTitle: 'Aquarium water change calculator — litres to prepare',
  seoDescription:
    'Calculate how much water to prepare for an aquarium water change from the tank volume, the change percentage and the share taken by substrate and decor.',
  h1: 'Aquarium water change calculator',
  keywords: ['aquarium water change', 'tank volume calculator', 'net water volume', 'fishkeeping maintenance'],
  howToUse: [
    'Enter the labelled volume of the tank in litres.',
    'Enter the share of water you plan to change.',
    'Estimate what share of the tank the substrate, rock and decor occupy.',
    'Use the result both for the water you prepare and for dosing conditioner.',
  ],
  howItWorks:
    'Net water = tank volume × (1 − displaced share). The change is that net volume multiplied by the change percentage; what stays behind is the rest.',
  example: 'A 240-litre tank with 12% taken by substrate holds 211.2 litres of water; a 25% change is 52.8 litres.',
  faq: [
    {
      q: 'What share does substrate usually take?',
      a: 'A thin sand bed is around five per cent, a planted tank with a deep substrate and hardscape can reach fifteen to twenty. Measuring once with a bucket at setup beats guessing every week.',
    },
    {
      q: 'Why not dose conditioner by the tank label?',
      a: 'Because conditioner works on the water, and the label counts glass. On a decorated tank that error runs to a fifth of the dose, in the direction of overdosing.',
    },
    {
      q: 'How large should a routine change be?',
      a: 'Twenty to thirty per cent weekly suits most freshwater tanks. Larger changes are for fixing problems, and they need the new water matched for temperature and treated before it goes in.',
    },
    {
      q: 'Does the filter volume count?',
      a: 'An external canister and its hoses hold extra water that this figure ignores. If you dose by tank volume, that extra is a small safety margin rather than an error.',
    },
  ],
};
