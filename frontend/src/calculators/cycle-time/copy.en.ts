import type { CalculatorCopy } from '../../lib/platform/types';

export const cycleTimeCopyEn: CalculatorCopy = {
  name: "Takt time calculator",
  slug: "takt-time",
  shortDescription: "How much time you may spend per unit to keep up with demand.",
  longDescription:
    "Takt is set by the customer, not by the line: available shift time divided by the units that shift has to ship. The actual cycle time is then compared against it — and if it is larger, the cell cannot keep up however \"fast\" it feels. That is why a utilisation above one hundred per cent means a shortfall rather than overtime: you must cut the cycle or add parallel stations.",
  seoTitle: "Takt time calculator — time available per unit",
  seoDescription: "Calculate takt time from available shift time and demand, compare it with the actual cycle and read the utilisation.",
  h1: "Takt time calculator",
  keywords: ["takt time", "cycle time", "lean manufacturing", "line utilisation"],
  howToUse: [
    "Available time means net working time: subtract breaks, shift handovers and planned stops first.",
    "Take demand for the same shift the available time covers, or the takt is meaningless.",
    "Actual cycle time is the average time per unit the cell currently achieves.",
    "Utilisation above one hundred per cent means a shortfall, not overtime.",
  ],
  howItWorks: "Takt = available time / demand; utilisation = actual cycle / takt.",
  example: "A 480-minute shift for 120 units gives a 4-minute takt; an actual 3.5 minutes is 87.5 % utilisation.",
  faq: [
    { q: "How does takt differ from cycle time?", a: "Takt is the customer's requirement, cycle time is the cell's ability. Takt cannot be \"improved\": it only moves with demand or shift length. What you improve is the cycle, pulling it under the takt." },
    { q: "What if the cycle exceeds the takt?", a: "Three routes: shorten the cycle, add a parallel station, or extend the available time. The calculation shows how large the shortfall is, which tells you whether one measure will do." },
    { q: "Should I plan in a margin?", a: "Usually yes: cycles are planned at 85–95 % of takt to absorb stoppages and changeovers. Running exactly at takt means any interruption immediately becomes a missed shipment." },
    { q: "Is changeover time included?", a: "Only if you subtracted it from the available time. Takt is computed from net working time — changeovers, cleaning and planned maintenance should not be in it." },
  ],
};
