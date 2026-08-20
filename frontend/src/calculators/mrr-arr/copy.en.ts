import type { CalculatorCopy } from '../../lib/platform/types';

export const mrrArrCopyEn: CalculatorCopy = {
  name: "MRR and ARR calculator",
  slug: "mrr-arr-calculator",
  shortDescription: "Monthly and annual recurring revenue of a subscription and its growth.",
  longDescription:
    "Works out the recurring revenue of a subscription business: monthly MRR and annual ARR. It matters that ARR here is MRR multiplied by twelve — the current run rate expressed annually, NOT a forecast of the revenue for the year. The difference is real: with a growing base the actual year comes out higher and with a shrinking one lower, so ARR should not be dropped into a plan as expected money. Growth is projected one month ahead only and remains your own assumption: raising a percentage to the twelfth power and presenting the result as annual revenue would be selling a confidence that does not exist.",
  seoTitle: "MRR and ARR calculator: subscription recurring revenue",
  seoDescription: "Calculate the monthly and annual recurring revenue of a subscription from the subscriber count and average revenue.",
  h1: "MRR and ARR calculator",
  keywords: ["mrr calculator", "arr calculator", "recurring revenue", "subscription revenue"],
  howToUse: [
    "Enter the number of active subscribers.",
    "Enter the average revenue per subscriber per month.",
    "Set the assumed monthly growth of the base.",
    "Use a negative percentage for a shrinking base.",
  ],
  howItWorks:
    "MRR = subscribers × average monthly revenue. ARR = MRR × 12, the current run rate expressed annually. MRR next month = MRR × (1 + growth).",
  example: "420 subscribers at 1,490 each give an MRR of 625,800.00 and an ARR of 7,509,600.00.",
  faq: [
    { q: "Is ARR the revenue for the year?", a: "No, it is the current monthly rate multiplied by twelve. With a growing base the actual year comes out higher and with a shrinking one lower, so ARR must not be planned against as expected money." },
    { q: "Why is growth projected only one month ahead?", a: "Because growth is your assumption, not a prediction. Raising the percentage to the twelfth power would present as annual revenue a number nobody can stand behind." },
    { q: "Do one-off payments count towards MRR?", a: "No. MRR is recurring revenue specifically. A one-time sale, setup fee or consultation does not belong in it, or the metric stops reflecting dependable income." },
    { q: "How do I handle annual subscriptions?", a: "Divide the annual payment by twelve and include the result in the average monthly revenue. Otherwise the month of sale shows a spike that is not really there." },
    { q: "How does MRR differ from LTV?", a: "MRR is the revenue of the whole base for one month, while LTV is the total value of a single customer over their lifetime. The first is about the current rate, the second about the payback horizon on acquisition." },
  ],
};
