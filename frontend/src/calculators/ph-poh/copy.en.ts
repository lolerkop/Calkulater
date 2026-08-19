import type { CalculatorCopy } from '../../lib/platform/types';

export const phPohCopyEn: CalculatorCopy = {
  name: 'pH and pOH calculator',
  slug: 'ph-calculator',
  shortDescription: 'pH from hydrogen ion concentration and back, with pOH and the medium.',
  longDescription:
    'Converts a hydrogen ion concentration into pH and back, reporting pOH and whether the medium is acidic, neutral or alkaline. pH and pOH add to fourteen not always but at 25 °C: that is the ion product of water, and at another temperature it differs, so the caveat sits on the page rather than in small print. The logarithm is defined only for a positive concentration, so zero is rejected instead of becoming infinity.',
  seoTitle: 'pH and pOH calculator — acidity of a solution',
  seoDescription: 'Calculate pH from the hydrogen ion concentration or the concentration from pH, together with pOH and the medium.',
  h1: 'pH and pOH calculator',
  keywords: ['ph calculator', 'ph and poh', 'acidity of a solution', 'hydrogen ion concentration'],
  howToUse: ['Choose whether you know the concentration or the pH.', 'Enter the value.', 'Read the other quantity, the pOH and the medium.'],
  howItWorks:
    'pH = −log₁₀[H⁺], the decimal logarithm of the concentration with the sign reversed. The reverse gives [H⁺] = 10^−pH. At 25 °C the ion product of water is 10⁻¹⁴, which is why pH + pOH = 14.',
  example: 'A hydrogen ion concentration of 10⁻³ mol/L corresponds to pH 3 and pOH 11 — an acidic medium.',
  faq: [
    { q: 'Do pH and pOH always add up to 14?', a: 'No, only at 25 °C. The sum equals the exponent of the ion product of water, which depends on temperature: at 60 °C it is already about 13.0.' },
    { q: 'What does pH 7 mean?', a: 'That the concentrations of hydrogen and hydroxide ions are equal — a neutral medium. Again, this holds at 25 °C.' },
    { q: 'Why is a zero concentration not accepted?', a: 'Zero has no logarithm. A solution with no hydrogen ions at all is physically impossible, so an error is reported instead of infinity.' },
    { q: 'Can pH fall outside 0 to 14?', a: 'Formally yes in very concentrated solutions, but the scale stops being meaningful there and the usual approximations break down. The range is limited here deliberately.' },
  ],
};
