import type { CalculatorCopy } from '../../lib/platform/types';

export const phPohCopyEn: CalculatorCopy = {
  "name": "pH and pOH calculator",
  "slug": "ph-calculator",
  "shortDescription": "pH from hydrogen ion concentration and back, with pOH and the medium.",
  "longDescription": "An educational calculation from H⁺ concentration in mol/L or from a specified pH. Strictly, pH is defined by hydrogen-ion activity; here activity is approximated by concentration relative to 1 mol/L, commonly used for sufficiently dilute solutions. pOH uses the assumed pKw = 14 at 25 °C. Temperature and activity coefficients are not inputs.",
  "seoTitle": "pH and pOH calculator — acidity of a solution",
  "seoDescription": "Calculate pH from the hydrogen ion concentration or the concentration from pH, together with pOH and the medium.",
  "h1": "pH and pOH calculator",
  "keywords": [
    "ph calculator",
    "ph and poh",
    "acidity of a solution",
    "hydrogen ion concentration"
  ],
  "howToUse": [
    "Choose H⁺ concentration or pH.",
    "Enter a finite positive concentration in mol/L or pH from 0 to 14.",
    "Interpret the result within the approximation at 25 °C."
  ],
  "howItWorks": "pH = −log₁₀ a(H⁺). The model uses a(H⁺) ≈ [H⁺]/c°, with c° = 1 mol/L; inversely [H⁺] ≈ c° × 10⁻pH. pOH = 14 − pH. The model’s neutral point is pH 7. The product accepts pH from 0 to 14 and corresponding positive concentrations; these are calculator limits, not universal limits of the pH scale.",
  "example": "For [H⁺] = 10⁻³ mol/L, the model gives pH 3.00 and pOH 11.00. At pH 8.4 it gives approximately 3.981 × 10⁻⁹ mol/L and pOH 5.60.",
  "faq": [
    {
      "q": "Does pH + pOH always equal 14?",
      "a": "No. The sum is pKw, which depends on temperature and medium. This model fixes the educational assumption pKw = 14 at 25 °C; other temperatures are not calculated."
    },
    {
      "q": "Is concentration the exact definition of pH?",
      "a": "No. The definition uses dimensionless activity. The concentration approximation omits activity coefficients and can be inaccurate in concentrated solutions."
    },
    {
      "q": "Can pH be outside 0–14?",
      "a": "Yes, the scale remains meaningful beyond those bounds. This calculator deliberately accepts only 0–14 and does not model such solutions."
    },
    {
      "q": "Why is zero concentration rejected?",
      "a": "The logarithm of zero has no finite real value. Blank or malformed input also gives an error instead of being replaced with zero."
    }
  ],
  "disclaimer": "Activity is approximated by concentration; pKw = 14 at 25 °C. The product range 0–14 is not a physical pH limit. Ionic strength, temperature and measurement corrections are not modelled."
};
