import type { CalculatorCopy } from '../../lib/platform/types';

export const molarMassCopyEn: CalculatorCopy = {
  name: "Molar mass calculator",
  slug: "molar-mass-calculator",
  shortDescription: "Molar mass from a chemical formula with each element's contribution broken out.",
  longDescription:
    "Parses a chemical formula and sums the atomic masses, showing what each element contributes and what share of the total mass it carries. Brackets are supported and nest: Ca(OH)2 reads as calcium plus a doubled group rather than four symbols in a row. The scope is stated plainly: eight elements are supported — hydrogen, carbon, nitrogen, oxygen, sodium, sulfur, chlorine and calcium — which cover water, salt, acids, glucose, carbonates and ammonia. An unknown symbol is rejected with the list of available ones rather than counted as zero mass.",
  seoTitle: "Molar mass calculator from a chemical formula",
  seoDescription: "Calculate molar mass from a chemical formula, with the contribution of each element and its share of the total mass.",
  h1: "Molar mass calculator",
  keywords: ["molar mass calculator", "molecular weight calculator", "formula mass", "g/mol calculator"],
  howToUse: [
    "Enter the formula in Latin letters: element symbol capitalised, index as a number.",
    "Use round brackets for groups: Ca(OH)2.",
    "Read the composition table for each element's contribution and mass share.",
    "The molar mass can be fed straight into the amount-of-substance calculator.",
  ],
  howItWorks:
    "The formula is parsed character by character, and a multiplier after a closing bracket applies to the whole group. Element masses are multiplied by their atom counts and summed.",
  example: "Sulfuric acid H2SO4 weighs 98.072 g/mol, of which nearly two thirds is oxygen.",
  faq: [
    { q: "Which elements are supported?", a: "Eight: H, C, N, O, Na, S, Cl and Ca. They cover water, salt, sulfuric and nitric acids, glucose, carbonates and ammonia." },
    { q: "Why not the whole periodic table?", a: "Because atomic masses are reference values and cannot be written from memory: an error in the third digit looks plausible and no calculation would reveal it. Extending the table requires checking against a primary source." },
    { q: "Where do the atomic masses come from?", a: "They are IUPAC standard atomic weights in abridged form — the same values printed in reference tables." },
    { q: "How do I write bracketed groups?", a: "In the usual way: Ca(OH)2 or Al2(SO4)3. A multiplier after a closing bracket applies to the whole group, and brackets may nest." },
    { q: "Is water of crystallisation handled?", a: "The dot notation is not understood. Write the water molecules straight into the formula instead of using the hydrate form." },
  ],
};
