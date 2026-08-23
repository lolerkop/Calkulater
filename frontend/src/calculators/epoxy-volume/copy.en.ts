import type { CalculatorCopy } from '../../lib/platform/types';

export const epoxyVolumeCopyEn: CalculatorCopy = {
  name: "Epoxy resin calculator",
  slug: "epoxy-resin-volume",
  shortDescription: "How much resin and hardener a pour needs.",
  longDescription:
    "Consumption follows from the volume of the layer and the density of the mix, then splits into resin and hardener by the kit ratio. The ratio here is a field, not a constant: kits run 2:1, 3:1, 4:1 and even 100:47, and mixing them up is not an option. This mistake is unforgiving \u2014 excess hardener does not speed curing, it leaves the resin permanently tacky, and the pour cannot be rescued.",
  seoTitle: "Epoxy resin calculator \u2014 how much for a pour",
  seoDescription: "Calculate how much epoxy resin and hardener a pour needs from its dimensions and layer thickness.",
  h1: "Epoxy resin calculator",
  keywords: ["epoxy resin", "resin quantity", "hardener ratio", "river table pour"],
  howToUse: [
    "Take the ratio from the kit label: parts of resin to ONE part hardener.",
    "Most epoxy mixes are around 1.1 g/cm\u00b3 \u2014 check the datasheet.",
    "Thick layers are poured in stages: usually no more than 5\u201310 mm at once because of the exotherm.",
    "Add an allowance for what stays in the pot and on the tools: five per cent usually covers it.",
  ],
  howItWorks: "Volume = length \u00d7 width \u00d7 thickness; mass = volume \u00d7 density; split by the ratio.",
  example: "A 100\u00d750 cm top at 5 mm needs 2.75 kg of mix: 1.833 kg resin and 0.917 kg hardener.",
  faq: [
    { q: "What happens if the ratio is wrong?", a: "The resin will not cure properly. Excess hardener does not speed the reaction, it breaks the stoichiometry: some molecules stay unbonded and the surface remains tacky for good. There is no fix \u2014 only stripping and pouring again." },
    { q: "Why not pour a thick layer at once?", a: "Curing releases heat, and in a thick layer it cannot escape. The resin overheats, yellows, boils into bubbles and can crack. Hence 5\u201310 mm layers with a wait between them." },
    { q: "Is the ratio by mass or by volume?", a: "It depends on the kit \u2014 the label says. The calculation gives mass because weighing is more accurate than measuring volume; if the ratio is by volume, convert it using the component densities." },
    { q: "How much should I allow for losses?", a: "Usually about five per cent: some mix stays in the pot and on the spreader. Small pours lose proportionally more, large ones less." },
  ],
};
