import type { CalculatorCopy } from '../../lib/platform/types';

export const yeastConvertCopyEn: CalculatorCopy = {
  name: "Yeast converter",
  slug: "yeast-converter",
  shortDescription: "Convert between fresh compressed, active dry and instant yeast by weight.",
  longDescription:
    "Recipes are written in whatever yeast the author had to hand, and the shop stocks another kind. The proportion is settled and follows from moisture: fresh compressed yeast is about seventy per cent water, so a third as much active dry is needed and a quarter as much instant. All three figures are printed at once, so there is nothing to convert twice when the recipe says one thing and the packet another.",
  seoTitle: "Yeast converter — fresh, active dry and instant",
  seoDescription: "Convert fresh compressed, active dry and instant yeast between each other by weight.",
  h1: "Yeast converter",
  keywords: ["yeast conversion", "fresh yeast", "active dry yeast", "instant yeast"],
  howToUse: [
    "On the left pick the yeast the recipe calls for, on the right the one you actually have.",
    "The ratio fresh : active dry : instant is taken as 1 : 1/3 : 1/4.",
    "Active dry yeast usually needs proofing in warm liquid; instant yeast is mixed straight into the flour.",
    "The ratio row is the conversion multiplier: 0.25 means a quarter of the weight.",
  ],
  howItWorks: "Fresh compressed is taken as one, active dry 1/3, instant 1/4; the weight is converted through fresh.",
  example: "30 g of fresh compressed yeast is replaced by 7.5 g of instant.",
  faq: [
    { q: "Where does the one-to-three ratio come from?", a: "From moisture. Fresh compressed yeast is about seventy per cent water and dry yeast has almost none, so the same leavening power fits into roughly a third of the weight." },
    { q: "How does active dry differ from instant?", a: "In granule size and handling: active dry is dissolved in warm liquid and left to foam, instant is mixed straight into the flour. Instant needs slightly less by weight, hence a quarter rather than a third." },
    { q: "Can I swap yeast by volume instead?", a: "No — the proportion is by weight. A spoon of fresh and a spoon of dry differ in both density and moisture, so a swap by volume misses by a good deal more." },
    { q: "Will the rising time change?", a: "A little. Instant yeast usually raises dough slightly faster, while fresh gives a more pronounced flavour on a long cold proof. The proportion does not account for that — it is only about weight." },
  ],
};
