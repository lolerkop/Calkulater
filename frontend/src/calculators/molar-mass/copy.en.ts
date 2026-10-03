import type { CalculatorCopy } from '../../lib/platform/types';

export const molarMassCopyEn: CalculatorCopy = {
  "name": "Molar mass calculator",
  "slug": "molar-mass-calculator",
  "shortDescription": "Molar mass from a chemical formula with each element's contribution broken out.",
  "longDescription": "Parses formulas containing the eight supported elements H, C, N, O, Na, S, Cl and Ca. Uses assigned approximate standard atomic weights to calculate molar mass and composition. Round brackets and ordinary integer indices are supported; dotted hydrate notation, charges, isotopes and other elements are not.",
  "seoTitle": "Molar mass calculator from a chemical formula",
  "seoDescription": "Calculate molar mass from a chemical formula, with the contribution of each element and its share of the total mass.",
  "h1": "Molar mass calculator",
  "keywords": [
    "molar mass calculator",
    "molecular weight calculator",
    "formula mass",
    "g/mol calculator"
  ],
  "howToUse": [
    "Enter the formula in Latin letters: element symbol capitalised, index as a number.",
    "Use round brackets for groups: Ca(OH)2.",
    "Read the composition table for each element's contribution and mass share.",
    "The molar mass can be fed straight into the amount-of-substance calculator."
  ],
  "howItWorks": "The formula is parsed character by character, and a multiplier after a closing bracket applies to the whole group. Element masses are multiplied by their atom counts and summed.",
  "example": "Sulfuric acid H2SO4 weighs 98.072 g/mol, of which nearly two thirds is oxygen.",
  "faq": [
    {
      "q": "Which elements are supported?",
      "a": "Eight: H, C, N, O, Na, S, Cl and Ca. They cover water, salt, sulfuric and nitric acids, glucose, carbonates and ammonia."
    },
    {
      "q": "Why not the whole periodic table?",
      "a": "Because atomic masses are reference values and cannot be written from memory: an error in the third digit looks plausible and no calculation would reveal it. Extending the table requires checking against a primary source."
    },
    {
      "q": "How do I enter formulas and groups?",
      "a": "Use Latin element symbols and ordinary digits, such as H2SO4 or Ca(OH)2. Case matters, for example Cl. A multiplier after round brackets applies to the whole group; empty groups and zero indices are rejected."
    },
    {
      "q": "How do I enter a supported hydrate?",
      "a": "For CaSO4·2H2O enter CaSO4(H2O)2: Ca, S, O and H are supported, while the dot notation is not. The multiplier 2 adds four H atoms and two O atoms. Examples containing Cu or Al do not work because those elements are absent from the table."
    },
    {
      "q": "What are the parser limits?",
      "a": "At most 1000 characters after removing whitespace and 64 nested bracket levels. Indices and the total atom count must be positive safe integers, no greater than 9007199254740991. Other symbols and inputs exceeding these limits return an error."
    }
  ],
  "disclaimer": "Calculation for H, C, N, O, Na, S, Cl and Ca using approximate standard atomic weights. Isotopic composition, charges and other elements are not handled."
};
