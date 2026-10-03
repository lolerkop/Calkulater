import type { CalculatorCopy } from '../../lib/platform/types';

export const dilutionCopyEn: CalculatorCopy = {
  "name": "Dilution calculator",
  "slug": "dilution-calculator",
  "shortDescription": "The C₁V₁ = C₂V₂ rule solved for either volume.",
  "longDescription": "Finds the final or stock-solution volume for dilution using C₁V₁ = C₂V₂. Concentrations must express amount or mass per solution volume, such as mol/L or g/L. Mass percentages cannot be used in this volume equation without density information. The separate solvent line estimates the difference of volumes.",
  "seoTitle": "Dilution calculator — C1V1 = C2V2",
  "seoDescription": "Calculate a dilution using the C₁V₁ = C₂V₂ rule: the final volume or the volume of stock solution needed.",
  "h1": "Dilution calculator",
  "keywords": [
    "dilution calculator",
    "c1v1 c2v2",
    "stock solution dilution",
    "prepare a solution"
  ],
  "howToUse": [
    "Choose the final or stock volume.",
    "Enter both concentrations using the same units per solution volume.",
    "Enter the known volume in mL and read the result."
  ],
  "howItWorks": "The dissolved amount is conserved: C₁V₁ = C₂V₂. Final volume is C₁V₁/C₂ and stock volume is C₂V₂/C₁. Volume fields use mL; both concentrations must use the same quantity definition and units. Subtracting volumes assumes additivity.",
  "example": "Make 50 mL of a 2 mol/L solution up to a final volume of 200 mL to obtain 0.5 mol/L. The 150 mL difference estimates solvent addition; make up to the final volume rather than assume all mixing volumes add exactly.",
  "faq": [
    {
      "q": "Which concentrations work in C₁V₁ = C₂V₂?",
      "a": "Amount or mass per volume, such as mol/L or g/L. Explicit mass/volume percentage in g per 100 mL is also proportional to mass concentration. Mass percentage has a different denominator: without solution masses or an appropriate density it cannot replace concentration per volume."
    },
    {
      "q": "Can dilution increase the concentration?",
      "a": "No. This model adds solvent and requires the final concentration not to exceed the initial one. Concentration by evaporation is a different operation."
    },
    {
      "q": "Is final volume the amount of solvent to add?",
      "a": "No. It includes the stock solution. V₂−V₁ estimates the solvent addition when volumes are additive; making up to the calculated final volume is more precise."
    },
    {
      "q": "Does this work for every percentage mixture?",
      "a": "No. Identify what the percentage means. Mass and amount fractions are not concentrations per volume. Volume percentages require a consistent definition and volume assumptions; mixing contraction or expansion is not modelled here."
    }
  ],
  "disclaimer": "The model conserves solute for concentration per volume. Solvent addition is approximate; mass fractions and nonadditive volumes need a different model."
};
