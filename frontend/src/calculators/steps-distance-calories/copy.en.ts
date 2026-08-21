import type { CalculatorCopy } from '../../lib/platform/types';

export const stepsDistanceCaloriesCopyEn: CalculatorCopy = {
  name: "Steps to distance and calories calculator",
  slug: "steps-to-distance",
  shortDescription: "Turns a step count into kilometres walked and calories spent.",
  longDescription:
    "Turns the number on your pedometer into distance and energy. The stride comes either from your height by the usual 0.415 ratio or straight from a measurement you have made yourself — a measured stride always beats an estimated one, and anyone who has measured theirs has no reason to trust a coefficient. The energy per kilometre is an editable, visible assumption: 0.53 kcal per kilogram of body weight per kilometre is ordinary walking, and running, a backpack or a climb all change it. Hiding that number inside the code would look like precision this calculation does not have.",
  seoTitle: "Steps to distance and calories calculator",
  seoDescription: "Convert steps into kilometres and calories using your height or your measured stride length.",
  h1: "Steps to distance and calories",
  keywords: ["steps to km", "steps to calories", "pedometer distance calculator", "stride length calculator"],
  howToUse: [
    "Enter the number of steps.",
    "Either give your height or switch to entering your measured stride.",
    "Enter your body weight — calories scale with it.",
    "Adjust the energy per kilometre if you were not simply walking.",
  ],
  howItWorks:
    "Stride is height times 0.415 unless you enter it directly. Distance is steps times stride, and calories are the energy coefficient times weight times distance in kilometres.",
  example: "10,000 steps at 175 cm of height is 7.263 km and about 269 kcal for a 70 kg walker.",
  faq: [
    { q: "How accurate is the 0.415 ratio?", a: "It is a common rule of thumb for walking, not a law. Individual strides vary with leg length, pace and shoe; if it matters, measure ten steps and divide." },
    { q: "Why is the calorie coefficient a field?", a: "Because it depends on what you were doing. Walking is around 0.5 kcal per kilogram per kilometre; running is noticeably higher, and so is carrying weight or going uphill." },
    { q: "Does it count the calories I would burn anyway?", a: "No. The figure is the energy of the movement itself, not the difference from lying still, so it slightly overstates the extra you spent." },
    { q: "Why does weight change the calories?", a: "Because moving a heavier body over the same distance takes more work. Distance stays the same; energy does not." },
    { q: "How is this different from the activity calories calculator?", a: "That one starts from an activity and a duration through MET values. This one starts from steps and a stride, with no clock involved." },
  ],
};
