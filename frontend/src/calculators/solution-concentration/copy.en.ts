import type { CalculatorCopy } from '../../lib/platform/types';

export const solutionConcentrationCopyEn: CalculatorCopy = {
  "name": "Solution concentration calculator",
  "slug": "solution-concentration-calculator",
  "shortDescription": "Per cent by mass, mass per volume and parts per million.",
  "longDescription": "Choose mass fraction or solute mass per volume of finished solution. The first mode reports mass percent and mass-based ppm; the second reports grams per 100 mL, written as % w/v, and g/L. Solvent mass or solvent volume must not replace the total solution quantity.",
  "seoTitle": "Solution concentration calculator — per cent and ppm",
  "seoDescription": "Calculate the concentration of a solution: per cent by mass, mass per volume and parts per million.",
  "h1": "Solution concentration calculator",
  "keywords": [
    "solution concentration calculator",
    "percentage concentration",
    "mass fraction",
    "ppm calculator"
  ],
  "howToUse": [
    "Choose mass fraction or mass per volume.",
    "Enter the dissolved substance mass in grams.",
    "Enter total solution mass in grams or final solution volume in millilitres."
  ],
  "howItWorks": "w/w: 100 × solute mass/solution mass; ppm: 10⁶ × the same mass ratio. w/v: 100 × m/V with m in g and V in mL gives g per 100 mL; 1000 × m/V gives g/L. The solute-mass limit applies only to w/w. Solute mass must be finite and nonnegative; solution mass and volume must be finite and positive. Unrepresentable results produce an error; small results are displayed without rounding to zero.",
  "example": "25 g in 500 g of solution gives 5.00% by mass, 50,000 ppm and 475 g of solvent. 3 g in 100 mL of finished solution gives 3.00% w/v and 30 g/L.",
  "faq": [
    {
      "q": "Why enter solution mass rather than solvent mass?",
      "a": "The solute is part of the total. For 25 g of solute and 475 g of solvent, enter 500 g of solution. The solvent difference is reported separately."
    },
    {
      "q": "What does the mass-per-volume percentage mean?",
      "a": "Grams of substance per 100 mL of solution, not volume fraction. Comparing it with mass percent requires the solution density."
    },
    {
      "q": "Can the result exceed 100%?",
      "a": "Mass fraction cannot exceed 100% because a component cannot exceed the total mass. There is no universal 100 limit for g per 100 mL; solubility is not checked."
    },
    {
      "q": "Does ppm equal mg/L?",
      "a": "Here ppm means mg per kg of solution, a mass ratio. Equality with mg/L requires a density of 1 kg/L, which is not assumed."
    },
    {
      "q": "Can the solute mass be zero?",
      "a": "Yes. With positive solution mass or volume, 0 g of solute gives 0% and respectively 0 ppm or 0 g/L. Losing a positive concentration to zero during calculation produces an error."
    }
  ],
  "disclaimer": "Mass fraction and mass concentration are calculated; volume fraction and solubility are not. ppm is mass-based. Machine arithmetic and displayed values are rounded."
};
