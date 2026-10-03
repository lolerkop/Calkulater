import type { CalculatorCopy } from '../../lib/platform/types';

export const molarityCopyEn: CalculatorCopy = {
  "name": "Molarity calculator",
  "slug": "molarity-calculator",
  "shortDescription": "Molar concentration of a solution from moles or from a mass.",
  "longDescription": "Molarity is amount of substance per volume of finished solution. Enter moles, or mass in grams and molar mass in g/mol. Select mL, L or m³ for the volume. The calculation does not identify the substance or check its solubility.",
  "seoTitle": "Molarity calculator — solution concentration in mol/L",
  "seoDescription": "Calculate the molar concentration of a solution from the amount of substance or from a mass and a molar mass.",
  "h1": "Molarity calculator",
  "keywords": [
    "molarity calculator",
    "molar concentration",
    "moles per litre",
    "solution concentration"
  ],
  "howToUse": [
    "Choose amount of substance or mass.",
    "Enter a finite nonnegative amount; in mass mode enter M in g/mol.",
    "Select the volume unit and enter the final volume of the whole solution."
  ],
  "howItWorks": "C = n/V in litres; mass mode uses n = m/M. 1 mL = 0.001 L and 1 m³ = 1000 L. Divisions are reordered to preserve finite answers when an intermediate conversion overflows. Mass and amount must be finite and nonnegative; volume and molar mass must be finite and positive. Volume is normally shown in litres; if that conversion is outside the numeric range, the original unit is retained.",
  "example": "0.5 mol in 2 L gives 0.25 mol/L. 58.44 g with M = 58.44 g/mol in a final 500 mL gives 1 mol / 0.5 L = 2 mol/L.",
  "faq": [
    {
      "q": "Which volume is needed?",
      "a": "The finished solution volume at the chosen temperature. Solvent and solute volumes need not add; a universal volume increase is not assumed."
    },
    {
      "q": "Can I enter millilitres?",
      "a": "Yes, select mL. 500 mL is treated as 0.5 L, so do not convert the number by hand first."
    },
    {
      "q": "How does molarity differ from molality?",
      "a": "Molarity divides moles by solution volume. Molality divides by solvent mass in kg; it is not calculated here."
    },
    {
      "q": "Can I enter a mass percentage?",
      "a": "No. Converting it to mol/L requires a consistent molar mass and solution density. A percentage is not an amount in moles."
    },
    {
      "q": "Can mass or amount of substance be zero?",
      "a": "Yes. 0 mol in a positive volume gives 0 mol/L; 0 g with positive molar mass and volume also gives 0 mol/L. Losing a positive amount or concentration to zero produces an error."
    }
  ],
  "disclaimer": "The entered final solution volume is used. Temperature, density, activity and solubility are not modelled. Unrepresentable quantities produce an error; displayed values are rounded."
};
