import type { CalculatorCopy } from '../../lib/platform/types';

export const conversionRateCopyEn: CalculatorCopy = {
  name: "Conversion rate calculator",
  slug: "conversion-rate-calculator",
  shortDescription: "Conversion from visits into actions, and the cost of one conversion.",
  longDescription:
    "Works out the share of visits that ended in a target action and, when a budget is given, the cost of one conversion. This is the lower part of the funnel: click-through divides clicks by impressions, while conversion divides target actions by visits, and the denominator is a different one. Visits per conversion is the same figure turned inside out — «33 visits per order» lands better for many people than «3%». At zero conversions neither the cost per conversion nor that figure is shown: both require dividing by zero, whereas a conversion rate of zero is itself a legitimate and meaningful answer.",
  seoTitle: "Conversion rate calculator and cost per conversion",
  seoDescription: "Calculate the conversion rate from visits to target actions, the cost per conversion and visits per conversion.",
  h1: "Conversion rate calculator",
  keywords: ["conversion rate calculator", "website conversion", "cost per conversion", "CPA"],
  howToUse: [
    "Enter the number of visits for the period.",
    "Enter the number of target actions for the same period.",
    "The budget is optional — without it only the rate is shown.",
    "With a budget you also get the cost per conversion.",
  ],
  howItWorks:
    "Conversion rate = target actions ÷ visits. Cost per conversion = budget ÷ target actions. Visits per conversion = visits ÷ target actions — the same rate expressed differently.",
  example: "240 orders from 8,000 visits give a 3.00% conversion rate, and with a 60,000 budget a cost per conversion of 250.00.",
  faq: [
    { q: "How does conversion differ from click-through rate?", a: "Click-through divides clicks by ad IMPRESSIONS, while conversion divides target actions by site visits. They are different rungs of the funnel and their denominators must not be mixed up." },
    { q: "What counts as a target action?", a: "Whatever the page exists for: an order, an enquiry, a sign-up, a subscription. The only requirement is that visits and actions cover the same period." },
    { q: "Why is the cost per conversion hidden at zero conversions?", a: "Because the budget would have to be divided by zero. The zero rate itself is still shown: that is a meaningful answer, unlike an infinite cost." },
    { q: "What is the visits-per-conversion row for?", a: "It is the same rate turned inside out. «33 visits for one order» is easier to act on than «3%», and it converts directly into a traffic target." },
    { q: "Is a 3% conversion rate good?", a: "It depends on the niche and the action: 1–3% is ordinary for an online shop, while an enquiry form can reach 10%. Compare against your own previous period rather than someone else's industry." },
  ],
};
