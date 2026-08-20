import type { CalculatorCopy } from '../../lib/platform/types';

export const recipeScaleCopyEn: CalculatorCopy = {
  name: "Recipe scaling calculator",
  slug: "recipe-scaling-calculator",
  shortDescription: "Rescale every ingredient in a recipe to a different number of servings.",
  longDescription:
    "Takes the ratio of the servings you need to the servings the recipe makes and multiplies every quantity by it. A recipe line is a name followed by a single number, so «plain white flour 500» parses correctly even with spaces in the name. The factor is shown as its own row on purpose: how many times bigger the batch gets is easier to hold in your head than four new weights, and it tells you at a glance whether the dough will still fit the tin. Scaling is linear, and that is its limit — salt, yeast and spices are scaled at the same rate as flour, though in practice cooks often use less.",
  seoTitle: "Recipe scaling calculator for any number of servings",
  seoDescription: "Rescale recipe ingredients from one serving count to another and see the scaling factor.",
  h1: "Recipe scaling calculator",
  keywords: ["recipe scaling calculator", "resize a recipe", "servings converter", "scale ingredients"],
  howToUse: [
    "Enter ingredients one per line.",
    "On each line the last number is the quantity.",
    "Enter how many servings the recipe makes.",
    "Enter how many servings you need.",
  ],
  howItWorks:
    "Factor = servings needed ÷ servings in the recipe. Every quantity is multiplied by it. Units do not matter: the factor is dimensionless, so grams stay grams and pieces stay pieces.",
  example: "A recipe for 4 servings scaled to 6 gives a factor of 1.5, turning 837 g of ingredients into 1,255.5 g.",
  faq: [
    { q: "Does it matter what units the ingredients are in?", a: "No — the factor is dimensionless, so units never change. Grams stay grams, millilitres stay millilitres, pieces stay pieces, and mixing them in one list needs no special handling." },
    { q: "Can a recipe be scaled down?", a: "Yes. If you need fewer servings than the recipe makes, the factor comes out below one and every quantity shrinks proportionally." },
    { q: "Why are yeast and salt scaled the same as flour?", a: "Because scaling is linear. In practice, bakers often use slightly less yeast on a much larger batch and keep salt at a fixed percentage of the flour — that is what a baker's percentage calculation is for." },
    { q: "What do I do if it asks for 1.5 eggs?", a: "Round to whichever side suits you and adjust the liquid if needed. A fractional egg usually means the recipe is better doubled than scaled by 1.5." },
    { q: "Does baking time scale with the quantity?", a: "No, and this is the classic trap. Time depends on thickness and shape rather than mass: a double batch in the same tin takes noticeably longer, while the same batch spread over two trays takes about as long as the original." },
  ],
};
