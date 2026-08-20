import type { CalculatorCopy } from '../../lib/platform/types';

export const internetTrafficCopyEn: CalculatorCopy = {
  name: "Internet data usage calculator",
  slug: "internet-data-usage-calculator",
  shortDescription: "How many gigabytes a month adds up to at a given stream rate and hours per day.",
  longDescription:
    "Works out the volume that accumulates under steady use: the stream rate is multiplied by time rather than divided by it. The eight in the denominator converts bits to bytes, and that is what most often goes missing — a connection is measured in megabits while an allowance is quoted in gigabytes, and confusing the two is wrong by a factor of exactly eight. Enter an allowance and the calculator adds how long it lasts and by how much it is exceeded — answering «will this last the month», not only «how many gigabytes is that».",
  seoTitle: "Internet data usage calculator per month",
  seoDescription: "Calculate monthly internet data usage from the stream rate and daily viewing hours, and check whether your data allowance covers it.",
  h1: "Internet data usage calculator",
  keywords: ["internet data usage calculator", "how much data does streaming use", "monthly data usage", "data allowance calculator"],
  howToUse: [
    "Enter the stream rate: standard quality is 3–5 Mbit/s, 4K about 25.",
    "Enter how many hours a day the stream or call runs.",
    "Set the length of the period — usually 30 or 31 days.",
    "Add your data allowance to check whether it is enough.",
  ],
  howItWorks:
    "The rate in megabits is divided by eight to give megabytes per second, multiplied by 3600 seconds and converted to gigabytes. That figure is then scaled by hours per day and days in the period.",
  example: "Three hours a day at five megabits uses 6.75 GB daily and 202.5 GB a month — twice a 100 GB allowance.",
  faq: [
    { q: "Why is the rate divided by eight?", a: "Because connections are measured in megabits and volume in megabytes, and a byte holds eight bits. Without the division the usage is overstated eightfold." },
    { q: "Which stream rate should I enter?", a: "The one playback actually runs at: roughly 3–5 Mbit/s for standard quality, 8 for Full HD and around 25 for 4K. The player's statistics show the exact figure." },
    { q: "Is background traffic counted?", a: "No. Updates, sync and messengers add on top, so real usage is usually a little above the calculated figure." },
    { q: "What does the allowance duration show?", a: "How many days the allowance lasts at the same daily usage. A fractional number means it runs out partway through a day." },
    { q: "Is the gigabyte decimal here?", a: "Yes, 10⁹ bytes — the way operators quote an allowance. The gap against a binary gigabyte is about 7%." },
  ],
};
