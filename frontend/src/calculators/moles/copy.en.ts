import type { CalculatorCopy } from '../../lib/platform/types';

export const molesCopyEn: CalculatorCopy = {
  "name": "Moles calculator",
  "slug": "moles-calculator",
  "shortDescription": "Moles from a mass and a molar mass, plus the number of particles.",
  "longDescription": "Relates mass, molar mass and amount of substance, and reports a calculated entity count. Enter molar mass in g/mol; chemical formulas are not parsed. The Avogadro constant is exact, but the entered molar mass and machine result need not be.",
  "seoTitle": "Moles calculator — amount of substance from mass",
  "seoDescription": "Calculate the amount of substance in moles from a mass and a molar mass, along with the number of particles.",
  "h1": "Moles calculator",
  "keywords": [
    "moles calculator",
    "amount of substance",
    "Avogadro number",
    "mole"
  ],
  "howToUse": [
    "Choose calculation from mass or from amount of substance.",
    "Enter mass in g or amount in mol.",
    "Enter molar mass in g/mol for the same entity you want to count."
  ],
  "howItWorks": "n = m/M, with the reverse m = nM; N = nN_A, where N_A = 6.02214076 × 10²³ mol⁻¹ by the SI definition. Mass is entered in g. Mass and amount must be finite and nonnegative; molar mass must be finite and positive. If any displayed result overflows or a positive quantity is lost to zero, a range error is returned. Small and large finite quantities use scientific notation.",
  "example": "18 g with the entered M = 18.02 g/mol gives 0.9989 mol after rounding. For 1 mol with the same M, mass is 18.02 g and N = 6.02214076 × 10²³ entities before display rounding.",
  "faq": [
    {
      "q": "What is an entity?",
      "a": "A specified molecule, atom, ion or other explicitly defined elementary entity. Its molar mass must refer to that same entity."
    },
    {
      "q": "Where does molar mass come from?",
      "a": "From composition and appropriate atomic weights, or a checked reference. Mixtures need a defined average-composition model, which is not derived here."
    },
    {
      "q": "Why is 18 g of water not exactly one mole?",
      "a": "This example uses the rounded M = 18.02 g/mol. The ratio 18/18.02 is slightly below one; another consistent choice of M changes the result."
    },
    {
      "q": "Is the Avogadro constant exact?",
      "a": "Yes, 6.02214076 × 10²³ mol⁻¹ is fixed by definition. Computer division, multiplication and display are still rounded. The entity count is a model estimate, not a count of individual particles."
    },
    {
      "q": "Can mass or amount of substance be zero?",
      "a": "Yes. Zero mass gives 0 mol and 0 entities; 0 mol gives 0 g and 0 entities with a positive molar mass. Losing a positive quantity to zero during calculation produces an error."
    }
  ],
  "disclaimer": "Molar mass is supplied by the user. Entity count follows the model for the specified entity; mixture and isotope compositions are not determined. Every displayed quantity must fit the numeric range."
};
