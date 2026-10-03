import type { CalculatorCopy } from '../../lib/platform/types';

export const barbellPlatesCopyEn: CalculatorCopy = {
  "name": "Barbell plate calculator",
  "slug": "barbell-plates",
  "shortDescription": "Which plates to load on each side to reach a target weight.",
  "seoTitle": "Barbell plate calculator: what to load on each side",
  "seoDescription": "Work out which plates to put on each side of the bar to reach your target weight, using the plates you actually have.",
  "h1": "Barbell plate calculator",
  "keywords": [
    "barbell plate calculator",
    "what plates to load",
    "plate math",
    "barbell loading calculator"
  ],
  "longDescription": "Find a symmetric plate combination: the tool selects the greatest achievable load no higher than your target, then the fewest plates for that load. Denominations have an unlimited supply of pairs; your actual inventory counts are not entered. Check that matching pairs and sleeve space are available.",
  "howToUse": [
    "Enter total target load including the bar, and bar mass including any collars you account for.",
    "List positive denominations separated by spaces or semicolons; 2.5 is one denomination.",
    "Compare actual load, target and total shortfall.",
    "Check matching pairs before loading; inputs support up to 1000 kg and three decimal places."
  ],
  "howItWorks": "Each side needs (target−bar)/2. Integer-gram dynamic programming examines reachable sums, choosing the closest below the target and the fewest plates at that sum. Limits: 32 denominations, target/bar 0–1000 kg, plates 0.001–1000 kg to 0.001 kg precision. These are product limits, not sporting rules.",
  "example": "100 kg with a 20 kg bar needs 40 kg per side: 25+15. For target 32 kg, bar 20 kg and plates 4 and 3 kg, each side needs 6 kg: 3+3 is exact; greedily selecting 4 would leave a shortfall.",
  "faq": [
    {
      "q": "Why are plates displayed from largest to smallest?",
      "a": "That is the display order. A full search determines the minimum count, rather than always choosing the largest first."
    },
    {
      "q": "What if the exact target load is impossible?",
      "a": "The greatest achievable load below the target and its total shortfall are shown; the tool never rounds above the target."
    },
    {
      "q": "Are plate entries per side or in total?",
      "a": "Enter each denomination once. Its quantity is unlimited in the model, so check that enough matching pairs actually exist."
    },
    {
      "q": "How do I account for a different bar?",
      "a": "Enter its actual mass. IWF men’s bars are 20 kg and women’s bars 15 kg; not every gym bar follows that specification."
    },
    {
      "q": "How do I include collars?",
      "a": "Add both collars’ combined mass to the bar. Two IWF collars at 2.5 kg each add 5 kg; other collars may differ."
    }
  ],
  "disclaimer": "Denomination selection assumes unlimited pairs and does not check inventory, sleeve capacity or a safe training load."
};
