import type { CalculatorCopy } from '../../lib/platform/types';

export const riskRewardCopyEn: CalculatorCopy = {
  name: "Risk reward ratio calculator",
  slug: "risk-reward-ratio-calculator",
  shortDescription: "Risk-to-reward ratio from three prices and the win rate needed to break even.",
  longDescription:
    "Answers «is this trade worth taking» rather than «how much to take». Size is optional here and only converts the result into money: the assessment itself comes from three prices — entry, stop and target. The useful figure is not the ratio but the break-even win rate: at a ratio of 3 you only need to win a quarter of your trades to stay level, while at 0.5 you need to win two thirds. That number is what ties a single trade to your actual statistics and shows whether the target is realistic.",
  seoTitle: "Risk reward ratio calculator with break-even rate",
  seoDescription: "Calculate the risk-to-reward ratio from entry, stop and target prices, plus the share of winning trades needed to break even.",
  h1: "Risk reward ratio calculator",
  keywords: ["risk reward ratio calculator", "risk to reward", "break even win rate", "trade ratio calculator"],
  howToUse: [
    "Choose the direction: a long stops below entry, a short above it.",
    "Enter the entry price, the stop price and the target price.",
    "Enter the size if you want risk and reward in money.",
    "Compare the break-even rate with your own trade statistics.",
  ],
  howItWorks:
    "Risk is the distance from entry to stop and reward the distance from entry to target, both as magnitudes. Ratio = reward ÷ risk, and the break-even win rate = 1 ÷ (1 + ratio).",
  example: "Entry 250, stop 240, target 280 gives a ratio of 3: winning 25% of trades is enough to break even.",
  faq: [
    { q: "How does this differ from position sizing?", a: "Position sizing answers how many units to take at a given risk. Here no size is derived — the trade itself is judged from three prices." },
    { q: "What does the break-even win rate show?", a: "The share of trades that must close in profit for the series to come out level. At a ratio of 3 that is 25%, at 1 it is half, at 0.5 it is two thirds." },
    { q: "What ratio is considered acceptable?", a: "A common reference point is at least 2, so that occasional wins outweigh frequent losses. That is a money-management convention rather than advice." },
    { q: "Why are the distances taken as magnitudes?", a: "Because a short stops above entry and targets below it, so the sign of the difference depends on direction. Risk and reward are magnitudes, not directions." },
    { q: "Are fees included?", a: "No. Fees reduce actual profit and increase losses, so the real ratio is slightly worse than the calculated one." },
  ],
};
