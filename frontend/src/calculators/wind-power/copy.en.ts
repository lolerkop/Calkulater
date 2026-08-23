import type { CalculatorCopy } from '../../lib/platform/types';

export const windPowerCopyEn: CalculatorCopy = {
  name: "Wind power calculator",
  slug: "wind-power",
  shortDescription: "Power in the wind and the power a rotor can extract, against the Betz limit.",
  longDescription:
    "Wind speed enters the power as a cube: double the wind and the power grows eightfold. From that follows a conclusion that matters more than any single number — the site decides more than the rotor size, and no diameter rescues a poor wind. The second limit is fundamental: the Betz figure of 16/27 is not a property of the design but a consequence of mass and momentum conservation. The flow cannot be stopped entirely, or the air behind the rotor would have nowhere to go.",
  seoTitle: "Wind power calculator — power in the wind and turbine output",
  seoDescription: "Compute the power in the wind and the power a rotor extracts from the diameter, wind speed and power coefficient.",
  h1: "Wind power calculator",
  keywords: ["wind power", "wind turbine", "Betz limit", "swept area"],
  howToUse: [
    "Use the average wind speed for the site at hub height rather than gusts: the power goes as the cube and a gust gives a misleadingly large figure.",
    "The power coefficient is 0.4–0.5 for modern industrial turbines and noticeably lower for home-built ones.",
    "Air density is 1.225 kg/m³ at sea level; it is lower in the mountains and the power falls with it.",
    "The daily output assumes a steady wind — real output is lower by the capacity factor.",
  ],
  howItWorks: "Power in the wind 0.5·ρ·A·v³ over a swept area of πD²/4; the extracted power is that figure times the power coefficient.",
  example: "A 3 m rotor in a 7 m/s wind with a coefficient of 0.4 gives 0.59 kW.",
  faq: [
    { q: "Why is the Betz limit exactly 16/27?", a: "It follows from mass and momentum conservation: extracting energy means slowing the flow, but air brought fully to rest has nowhere to leave from behind the rotor. The optimum slows it to a third of the original speed and yields 59.3 per cent." },
    { q: "Why does speed matter more than diameter?", a: "Diameter enters squared, speed cubed. Twice the wind gives eight times the power; matching that with a bigger rotor would take almost three times the diameter." },
    { q: "Why is real output below the calculation?", a: "Because wind is not steady. The ratio of actual output to the theoretical figure at constant rated wind is called the capacity factor; onshore it is usually a quarter to a third." },
    { q: "Is tower height included?", a: "Not directly. But wind strengthens with height, which is why towers are tall: a gain in speed works as a cube and pays back faster than a gain in diameter." },
  ],
};
