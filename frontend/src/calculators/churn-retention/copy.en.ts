import type { CalculatorCopy } from '../../lib/platform/types';

export const churnRetentionCopyEn: CalculatorCopy = {
  name: "Churn and retention calculator",
  slug: "churn-retention-calculator",
  shortDescription: "Churn, retention, net growth and average customer lifetime for a period.",
  longDescription:
    "Works out customer churn and retention for a period. The denominator is the number of customers at the START of the period, not at the end and not the average: those who arrived during the period do not belong in it, otherwise inflow would mask losses and churn would look smaller the harder you recruit. Average lifetime follows from churn as 100 ÷ churn: at 5% churn per period a customer stays about twenty periods. At zero churn the lifetime is infinite and the row is omitted — this calculator will not promise an immortal customer. Net growth is shown separately and may be negative.",
  seoTitle: "Churn and retention rate calculator",
  seoDescription: "Calculate churn, retention, net customer growth and the average customer lifetime for a period.",
  h1: "Churn and retention calculator",
  keywords: ["churn rate calculator", "retention rate", "customer churn", "customer lifetime"],
  howToUse: [
    "Enter how many customers you had at the start of the period.",
    "Enter how many were lost during the period.",
    "Enter how many were gained during the period.",
    "Those gained do not enter the churn denominator.",
  ],
  howItWorks:
    "Churn = lost ÷ customers at the start. Retention = 100% − churn. Net growth = (gained − lost) ÷ customers at the start. Average lifetime = 100 ÷ churn in percent.",
  example: "Of 1,000 customers 50 left and 80 arrived: churn 5.00%, retention 95.00%, ending with 1,030 customers.",
  faq: [
    { q: "Why the customers at the start rather than at the end?", a: "Because those who arrived mid-period never had the chance to leave. Measuring against the end would dilute churn with newcomers, making it look smaller the harder you recruit." },
    { q: "How does churn relate to customer lifetime?", a: "Inversely: lifetime ≈ 100 ÷ churn in percent. At 5% monthly churn a customer stays about 20 months; at 10%, only 10." },
    { q: "Why is lifetime hidden at zero churn?", a: "Formally it is infinite, and infinity on screen would promise an everlasting customer. Zero churn in a single period is ordinary enough, but immortality does not follow from it." },
    { q: "Can net growth be negative?", a: "Yes, and it is an important signal: more customers left than arrived, so the base is shrinking even with decent retention." },
    { q: "Should churn be measured in customers or in revenue?", a: "Here it is customers. Revenue churn is a separate figure and can differ several times over: losing one large account barely moves the headcount number." },
  ],
};
