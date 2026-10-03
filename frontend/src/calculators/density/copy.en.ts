import type { CalculatorCopy } from '../../lib/platform/types';

export const densityCopyEn: CalculatorCopy = {
  "name": "Density calculator",
  "slug": "density-calculator",
  "shortDescription": "Density, mass or volume of a substance from ρ = m ÷ V.",
  "seoTitle": "Density calculator — ρ = m ÷ V",
  "seoDescription": "Calculate the density of a substance, its mass or its volume from ρ = m ÷ V in SI units.",
  "h1": "Density calculator",
  "keywords": [
    "density calculator",
    "density of a substance",
    "mass from density",
    "rho = m/v"
  ],
  "longDescription": "Relates mass, occupied volume and average mass density. Inputs always use kg, m³ and kg/m³: entering grams does not switch the units. Density is additionally converted to g/cm³. Average density depends on the volume measured: a porous body’s external volume includes voids, while the material volume excludes them. Temperature, pressure, composition and porosity are not assigned automatically.",
  "howToUse": [
    "Choose density, mass or volume.",
    "Use mass in kg, volume in m³ and density in kg/m³; for example, 2 litres = 0.002 m³.",
    "For density or mass, volume must be positive; mass or density may be zero.",
    "Finding a positive volume requires positive mass and density; use a reference density for the relevant conditions."
  ],
  "howItWorks": "ρ = m/V, m = ρV and V = m/ρ. Since 1 g/cm³ = 1000 kg/m³, the g/cm³ row is ρ/1000. Using external volume includes pores in the denominator; the tool does not subtract them automatically. Zero mass in a specified positive volume gives zero average density.",
  "example": "1000 kg in 1 m³ gives 1000 kg/m³ = 1 g/cm³. This is a convenient rounded example, not water’s exact density under every condition. A 5.4 kg part occupying 0.002 m³ gives 2700 kg/m³ = 2.7 g/cm³; at density 2700 and volume 0.5 m³, mass is 1350 kg.",
  "faq": [
    {
      "q": "How is this different from the density converter?",
      "a": "The converter changes units for a known density. Here two related quantities determine the third, with fixed SI input fields."
    },
    {
      "q": "Why show g/cm³, and is water exactly 1 g/cm³?",
      "a": "The unit is convenient for materials: 1000 kg/m³ equals exactly 1 g/cm³. Real water density varies with temperature, pressure and composition; 1000 is a rounded example."
    },
    {
      "q": "Can I get the mass of a part from its volume?",
      "a": "Yes, m = ρV. Density and volume must describe the same part: material density cannot be combined with the outer volume of a hollow part without accounting for voids."
    },
    {
      "q": "How are voids and porosity included?",
      "a": "Through the volume you choose. Mass divided by external volume including pores gives average or bulk density; pore-free material density is different."
    },
    {
      "q": "How does density differ from specific weight?",
      "a": "Density is mass per volume in kg/m³. Specific weight is gravitational force per volume in N/m³, equal to ρg for the chosen gravity."
    },
    {
      "q": "How can I measure an irregular body’s volume?",
      "a": "For an impermeable object, liquid displacement can measure volume. Dissolving, absorption, open pores and trapped bubbles can alter the measurement; choose a method matching the intended volume."
    }
  ],
  "disclaimer": "Average mass density at specified conditions and volume definition; temperature, pressure, porosity and composition are not modelled separately."
};
