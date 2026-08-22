import type { CalculatorCopy } from '../../lib/platform/types';

export const thermalConductionCopyEn: CalculatorCopy = {
  name: "Thermal conduction calculator",
  slug: "thermal-conduction-layer",
  shortDescription: "Heat flow, thermal resistance and U-value of a single layer.",
  longDescription:
    "Works out how much heat passes through a flat layer of a given thickness and conductivity: the flow in watts, the flux density, the thermal resistance and the U-value. Only conduction through the material itself is counted — surface convection and radiation are outside the model — so thin glass comes out with a vanishing resistance. A real window holds heat through the boundary air films and the cavity of the double glazing rather than through the glass, and this calculation shows that plainly.",
  seoTitle: "Thermal conduction calculator — heat flow and resistance",
  seoDescription: "Calculate the heat flow through a layer of insulation or wall: thermal resistance, U-value and heat flux density.",
  h1: "Thermal conduction calculator",
  keywords: ["thermal conduction calculator", "u value calculator", "thermal resistance calculator", "heat loss through a wall"],
  howToUse: [
    "Enter the area of the construction.",
    "Set the layer thickness in metres: 200 mm is 0.2.",
    "Give the conductivity: mineral wool 0.04, brick 0.7, glass 1.0, timber 0.15 W/(m·K).",
    "Set the temperature difference across the layer.",
  ],
  howItWorks: "Flow = conductivity × area × temperature difference ÷ thickness. Thermal resistance = thickness ÷ conductivity, and the U-value is its reciprocal.",
  example: "A 10 m² wall with 200 mm of mineral wool at a 25 K difference passes 50 W.",
  faq: [
    { q: "Why does glass give such an enormous flow?", a: "Because only the conduction of the glass itself is counted, and its resistance is negligible. A real window holds heat through the air films at its surfaces and the cavity between panes." },
    { q: "How do I combine several layers?", a: "Resistances add. Work out R for each layer, add them up, and the reciprocal of the sum gives the U-value of the whole construction." },
    { q: "How is this different from a heating power calculator?", a: "That works out how much heat a room needs from its volume. This works out how much escapes through one specific construction from its conductivity." },
    { q: "Why can the difference be negative?", a: "Because the flow can run inward: in summer the outside is warmer than the room. The sign shows direction; the magnitude is unchanged." },
  ],
};
