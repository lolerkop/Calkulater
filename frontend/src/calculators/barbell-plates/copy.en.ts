import type { CalculatorCopy } from '../../lib/platform/types';

export const barbellPlatesCopyEn: CalculatorCopy = {
  name: "Barbell plate calculator",
  slug: "barbell-plates",
  shortDescription: "Which plates to load on each side to reach a target weight.",
  longDescription:
    "Takes the weight you want on the bar and works out what to hang on each side, starting from the heaviest plate you have and working down. The list of available plates is yours to edit — a gym with no 1.25s produces different answers, and pretending otherwise would give you a loading you cannot actually build. If the target cannot be hit exactly the shortfall is shown as its own line rather than being rounded away: knowing you are 1.25 kg short is more useful than a number that quietly is not the weight you asked for.",
  seoTitle: "Barbell plate calculator: what to load on each side",
  seoDescription: "Work out which plates to put on each side of the bar to reach your target weight, using the plates you actually have.",
  h1: "Barbell plate calculator",
  keywords: ["barbell plate calculator", "what plates to load", "plate math", "barbell loading calculator"],
  howToUse: [
    "Enter the total weight you want on the bar.",
    "Enter the weight of the bar itself — an Olympic bar is 20 kg.",
    "List the plates available to you, separated by spaces.",
    "Load the combination shown on each side.",
  ],
  howItWorks:
    "The bar is subtracted from the target and the rest is halved to get one side. Plates are then taken greedily from heaviest to lightest, each as many times as fits.",
  example: "100 kg on a 20 kg bar comes out as 25 + 15 on each side.",
  faq: [
    { q: "Why does it start from the heaviest plate?", a: "Because that is how a bar is loaded in practice: big plates against the collar, small ones outside. Taking the heaviest that fits also gives the fewest plates." },
    { q: "What if the exact weight is impossible?", a: "The shortfall is shown. With only 25s and 20s available, 87.5 kg cannot be built, and the calculator says how much is missing rather than rounding the answer." },
    { q: "Do I enter plates per side or in total?", a: "Just the weights you own, once each. The calculator assumes a symmetric load and counts pairs itself." },
    { q: "How do I handle a different bar?", a: "Change the bar weight: a women's Olympic bar is 15 kg, a training bar is often 10 kg, and some fixed bars are heavier than they look." },
    { q: "Are collars included?", a: "No. If your collars are heavy — competition ones are 2.5 kg each — add their weight to the bar." },
  ],
};
