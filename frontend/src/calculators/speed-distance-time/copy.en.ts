import type { CalculatorCopy } from '../../lib/platform/types';

export const speedDistanceTimeCopyEn: CalculatorCopy = {
  name: "Speed distance time calculator",
  slug: "speed-distance-time-calculator",
  shortDescription: "Find speed, distance or time from the other two.",
  longDescription:
    "Solves the triangle in whichever direction you need, and shows the journey time broken into hours and minutes alongside. Average speed only: stops and acceleration are not modelled, so the figure answers how long a steady journey takes rather than what a speedometer reads at any moment.",
  seoTitle: "Speed distance time calculator — solve for any one",
  seoDescription: "Calculate speed, distance or travel time from the other two values, with the time broken into hours and minutes.",
  h1: "Speed distance time calculator",
  keywords: ["speed distance time calculator", "travel time calculator", "average speed"],
  howToUse: ["Choose which value you need.", "Enter the two you know.", "Read the result and the journey time."],
  howItWorks: "Speed = distance ÷ time, distance = speed × time, time = distance ÷ speed.",
  example: "420 km covered in 5 hours is an average of 84 km/h.",
  faq: [
    { q: "Is this average or instantaneous speed?", a: "Average. It answers how fast you travelled overall, including whatever the traffic did along the way." },
    { q: "Should I include stops in the time?", a: "That is your choice, and it changes the meaning. Including them gives the average for the whole journey; excluding them gives the average while moving." },
    { q: "Can I use miles?", a: "Not directly — the calculation works in kilometres. Convert first with the unit converter if your figures are in miles." },
    { q: "Why is zero speed rejected when finding time?", a: "Dividing by it has no value: standing still, no distance is ever covered, so no time answers the question." },
  ],
};
