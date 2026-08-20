import type { CalculatorCopy } from '../../lib/platform/types';

export const timezoneDifferenceCopyEn: CalculatorCopy = {
  name: "Time zone difference calculator",
  slug: "time-zone-difference-calculator",
  shortDescription: "Convert a time between two UTC offsets, midnight rollover included.",
  longDescription:
    "Converts a time between two zones given as UTC offsets. The offsets are entered as numbers, and that is a deliberate limitation: this calculator holds no time-zone database, does not infer daylight saving and keeps no history of past rules — it compares exactly the offsets you supply. Fractional offsets work: India at UTC+5:30 and Nepal at UTC+5:45 are current zones rather than curiosities, so the difference is computed in minutes. A rollover past midnight is shown on its own row, since otherwise the time would appear to be the same calendar day.",
  seoTitle: "Time zone difference calculator by UTC offset",
  seoDescription: "Convert a time between two time zones using their UTC offsets, including fractional offsets and rollover past midnight.",
  h1: "Time zone difference calculator",
  keywords: ["time zone difference calculator", "utc offset converter", "convert time between zones", "what time is it there"],
  howToUse: [
    "Enter the UTC offset of the zone where the time is known.",
    "Enter the UTC offset of the zone you are converting to.",
    "Enter the hours and minutes of the source time.",
    "Check the calendar-day row: the time may have moved to an adjacent day.",
  ],
  howItWorks:
    "The difference between the offsets is converted to minutes and added to the source time. If the sum falls outside the day, the time rolls to the neighbouring day and the shift is reported separately.",
  example: "14:30 at UTC+3 corresponds to 06:30 on the same day at UTC−5.",
  faq: [
    { q: "Why are zones entered as numbers rather than picked from a list?", a: "Because a list needs a time-zone database and yearly updates to it. Showing a stale rule is worse than asking for an offset you can verify right now." },
    { q: "Is daylight saving taken into account?", a: "No. If one of the zones is on summer time, enter the offset that already includes it — UTC+2 instead of UTC+1, for example." },
    { q: "Are half-hour zones supported?", a: "Yes. India uses UTC+5:30 and Nepal UTC+5:45; enter those as 5.5 and 5.75." },
    { q: "What does the day shift mean?", a: "That the converted time landed on a neighbouring calendar day: plus one is the next day, minus one the previous." },
    { q: "How do I find a city's offset?", a: "It is shown in the time-zone settings on your phone or computer next to the city name, usually as UTC+3 or GMT+3." },
  ],
};
