import type { CalculatorCopy } from '../../lib/platform/types';

export const batteryChargeTimeCopyEn: CalculatorCopy = {
  name: "Battery charge time calculator",
  slug: "battery-charge-time-calculator",
  shortDescription: "How long a battery takes to charge at a given current.",
  longDescription:
    "Estimates charging time: capacity in amp-hours divided by the charger current, adjusted for efficiency. It is the inverse of the run-time question — that page says how long a battery lasts under load, this one how long it takes to refill. The estimate is idealised: a real charger tapers the current towards the end of the cycle, so the last few per cent take noticeably longer than calculated.",
  seoTitle: "Battery charge time calculator — hours from capacity and current",
  seoDescription: "Calculate battery charging time from the capacity in amp-hours, the charger current and the charging efficiency.",
  h1: "Battery charge time calculator",
  keywords: ["battery charge time calculator", "how long to charge a battery", "charging time from amp hours"],
  howToUse: ["Enter the battery capacity in amp-hours.", "Give the charger current.", "Lower the efficiency if needed — the time grows accordingly."],
  howItWorks: "Time = capacity ÷ (current × efficiency ÷ 100). At 100% efficiency it is simply capacity divided by current.",
  example: "A 100 Ah battery at 10 A charges in 10 h 0 min at full efficiency.",
  faq: [
    { q: "How is this different from battery run time?", a: "Run time answers how long a charge lasts under load. This is the inverse — how long it takes to refill the capacity." },
    { q: "Why does real charging take longer?", a: "Because the charger tapers the current towards the end of the cycle to avoid overheating the battery. The last few per cent come in much more slowly, and that is not modelled here." },
    { q: "What efficiency should I use?", a: "For simple chargers usually 80–90%: some energy is lost as heat. At 100% the result is a lower bound on the time." },
    { q: "Is the remaining charge accounted for?", a: "No, charging from empty is assumed. If the battery is half full, enter half the capacity." },
  ],
};
