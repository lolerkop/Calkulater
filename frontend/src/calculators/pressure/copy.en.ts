import type { CalculatorCopy } from '../../lib/platform/types';

export const pressureCopyEn: CalculatorCopy = {
  "name": "Pressure calculator",
  "slug": "pressure-calculator",
  "shortDescription": "Pressure, force or area from p = F ÷ A.",
  "seoTitle": "Pressure calculator — p = F ÷ A",
  "seoDescription": "Calculate mechanical pressure, force or bearing area from p = F ÷ A in pascals.",
  "h1": "Pressure calculator",
  "keywords": [
    "pressure calculator",
    "force over area",
    "pascal calculator",
    "bearing area"
  ],
  "longDescription": "Finds mean pressure from the normal force component and contact area, or solves for force or area. It does not calculate the pressure distribution: local values at edges or contact points can differ from the mean. The atmosphere row converts units using 1 atm = 101,325 Pa; it does not add ambient pressure. You supply any allowable bearing pressure; strength and settlement are not assessed.",
  "howToUse": [
    "Choose pressure, force or area.",
    "Use normal force in N and area in m²; resolve an inclined force into components first.",
    "For area, provide positive force and pressure; the zero pair cannot determine area.",
    "Convert cm² to m² by multiplying by 0.0001: 1 cm² = 0.0001 m²."
  ],
  "howItWorks": "p = Fₙ/A is mean normal pressure; Fₙ = pA and A = Fₙ/p. Area is positive. Zero normal force gives zero pressure in the forward mode; zero pressure at a known area gives zero force. Finding a positive area requires Fₙ > 0 and p > 0. Pressure in atm is p/101325.",
  "example": "1000 N on 2 m² gives 500 Pa. The same 1000 N on 1 cm², or 0.0001 m², gives 10,000,000 Pa = 10 MPa. At 2000 N and 100,000 Pa, the area is 0.02 m².",
  "faq": [
    {
      "q": "Why does a wider support give lower mean pressure?",
      "a": "At fixed normal force, doubling area halves F/A. This does not describe local peaks or changes in ground properties."
    },
    {
      "q": "Is this gauge or absolute pressure?",
      "a": "The form evaluates Fₙ/A without choosing a pressure reference. Converting gauge to absolute requires the actual ambient pressure, which need not be 101,325 Pa."
    },
    {
      "q": "How can I use the inverse bearing-area calculation?",
      "a": "Enter force and a separately justified allowable mean pressure. A = F/p gives area within this simplified model, not a footing verification; non-uniform loading, stability and settlement are excluded."
    },
    {
      "q": "Is this the same pressure unit as in a tyre or pipe?",
      "a": "Yes: Pa means N/m². A particular instrument may report absolute, gauge or differential pressure, so identify its reference before comparing."
    },
    {
      "q": "Why can force be zero but area cannot?",
      "a": "Zero force on a positive area gives zero mean pressure. Zero area is a zero denominator; F = p = 0 does not identify a positive area."
    }
  ],
  "disclaimer": "Non-negative mean normal-pressure scenario; local stresses, foundation strength and automatic reference-pressure conversions are not calculated."
};
