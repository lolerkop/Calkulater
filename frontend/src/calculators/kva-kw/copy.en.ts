import type { CalculatorCopy } from '../../lib/platform/types';

export const kvaKwCopyEn: CalculatorCopy = {
  name: "kVA to kW calculator",
  slug: "kva-to-kw",
  shortDescription: "Converting apparent power to active power through the power factor.",
  longDescription:
    "Converts kilovolt-amperes to kilowatts and back through the power factor. Three quantities go by the single everyday word \"power\" and they are not the same: generators and UPS units are rated in kVA, which is a current limit, while the load draws active power in kW, and only that becomes heat and work. The difference goes into reactive power, which shuttles back and forth between supply and load doing nothing, yet still occupying current and cable cross-section. Hence the usual mistake: a \"5 kVA\" generator delivers only 4 kW at a power factor of 0.8.",
  seoTitle: "kVA to kW calculator — convert by power factor",
  seoDescription: "Convert kVA to kW and back by the power factor, with the reactive component: what a generator or UPS actually delivers.",
  h1: "kVA to kW calculator",
  keywords: ["kva to kw calculator", "power factor calculator", "kw to kva", "generator power rating"],
  howToUse: [
    "Choose what you know: the kVA rating or the kW draw.",
    "Enter the known figure — the other becomes read-only.",
    "Set the power factor: 0.8 for a mixed household load, closer to 1 for purely resistive ones.",
    "Check the reactive component against your cable and breaker headroom.",
  ],
  howItWorks: "Active = apparent × power factor; reactive = √(apparent² − active²).",
  example: "A 10 kW load needs a 12.5 kVA source at a power factor of 0.8 — 7.5 kvar of reactive power.",
  faq: [
    { q: "Does a 5 kVA generator give 5 kW?", a: "No. At a power factor of 0.8 it delivers 4 kW; the rest is taken up by the reactive component. Kilovolt-amperes are a current limit, kilowatts are what reaches the load." },
    { q: "What power factor should I assume if I don't know it?", a: "For a mix of household loads 0.8 is the usual figure. Heaters, incandescent lamps and elements are nearly purely resistive with a factor close to one; motors and transformers are markedly lower." },
    { q: "What does reactive power actually do?", a: "It is pumped between supply and load twice per cycle and does no net work. The current it draws is entirely real, though, which is why cable and breaker are sized by apparent power, not active." },
    { q: "Why is a power factor of zero rejected?", a: "Because at zero the load draws no active power at all and the conversion loses its meaning: there is nothing to divide by. By definition the factor lies above zero and at most one." },
  ],
};
