import type { CalculatorCopy } from '../../lib/platform/types';

export const lightingCopyEn: CalculatorCopy = {
  name: "Room lighting calculator",
  slug: "room-lighting",
  shortDescription: "How many lumens a room needs and how many lamps that comes to.",
  longDescription:
    "Turns a room area into a lumen figure and a lamp count. The target illuminance is an editable, visible assumption rather than a hidden constant: a living room is usually taken at around 150 lux, a desk at three times that, and statutory values differ from country to country. Putting it in a field shows what the answer was built on and lets you change it. The maintenance factor accounts for dirt and ageing — a fitting dims over its life, and dividing by that factor budgets for it in advance. Lamps round up, because half a lamp does not exist.",
  seoTitle: "Room lighting calculator: lumens and number of lamps",
  seoDescription: "Work out how many lumens a room needs for a chosen illuminance and how many lamps of a given output that takes.",
  h1: "Room lighting calculator",
  keywords: ["lighting calculator", "lumens per room", "how many lamps", "illuminance calculator"],
  howToUse: [
    "Enter the floor area of the room.",
    "Choose the illuminance you are aiming for.",
    "Enter the output of one lamp in lumens — it is on the box.",
    "Adjust the maintenance factor if the room is dusty or the fittings are enclosed.",
  ],
  howItWorks:
    "Lumens needed are the area times the target illuminance, divided by the maintenance factor. The lamp count is that figure divided by one lamp's output, rounded up.",
  example: "18 m² at 150 lx with 800 lm lamps and a 0.8 factor needs 3,375 lm, which is five lamps.",
  faq: [
    { q: "What illuminance should I aim for?", a: "As a rough guide: a bedroom around 100–150 lx, a living room 150–200, a kitchen worktop 300–500, a desk 500. Your local standard may set different numbers, which is why the value is editable." },
    { q: "What is the maintenance factor for?", a: "Dust on the fitting and ageing of the lamp both cut output over time. Designing at 0.8 means the room still meets its target when the lamps are no longer new." },
    { q: "Does the ceiling height matter?", a: "It does in a full lighting design — a high ceiling spreads the same lumens over a bigger cone. This calculator uses the simpler area rule, which is close enough for ordinary rooms." },
    { q: "Do wall and ceiling colours matter?", a: "Yes. A dark room absorbs light that a white one bounces back. That effect belongs to the utilisation factor, which a detailed design accounts for and this one does not." },
    { q: "Can I mix different lamps?", a: "Enter the total you plan per fitting, or work out the lumens first and pick fittings that add up to it." },
  ],
};
