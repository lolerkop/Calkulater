import type { CalculatorCopy } from '../../lib/platform/types';

export const cryptoPnlCopyEn: CalculatorCopy = {
  name: "Crypto profit calculator",
  slug: "crypto-profit-calculator",
  shortDescription: "Trade result for long and short positions including entry and exit fees and leverage.",
  longDescription:
    "Works a trade out the way an exchange does: with direction, two fees and leverage. A short earns on a falling price, so the sign of the difference flips — computing it as a rise would report a loss where there was a gain. The fee is charged twice, on entry and on exit, and is taken from each side's turnover rather than from the result, so a losing trade still costs money. Leverage does not change the profit itself, only its ratio to your own funds — and that ratio is what the position return shows.",
  seoTitle: "Crypto profit calculator — long and short trades",
  seoDescription: "Calculate the result of a crypto trade in a long or short position, including entry and exit fees, leverage and the price change.",
  h1: "Crypto profit calculator",
  keywords: ["crypto profit calculator", "crypto pnl calculator", "long short calculator", "exchange fee calculator"],
  howToUse: [
    "Choose the direction: a long earns on a rise, a short on a fall.",
    "Enter the entry price, the exit price and the size in coins.",
    "Enter the exchange fee for one side of the trade.",
    "Set the leverage if the position was opened with borrowed funds.",
  ],
  howItWorks:
    "Result before fees = (exit − entry) × size for a long and (entry − exit) × size for a short. The fee is taken from the entry turnover and the exit turnover. Invested = entry turnover ÷ leverage, and the return is measured against it.",
  example: "A long of 0.5 coin from 30000 to 34500 at a 0.1% fee nets 2217.75 and returns 14.79%.",
  faq: [
    { q: "Why does the sign flip on a short?", a: "Because a short earns on a fall: the profit appears when the exit price is below the entry price. Computing it as a rise would report a loss where there was a gain." },
    { q: "Why is the fee charged twice?", a: "The exchange takes it both when the position opens and when it closes. Each side is measured against its own turnover, so exiting at a higher price costs more." },
    { q: "How does leverage change the result?", a: "The profit in money does not change — the invested amount does. Leverage of 2 halves your own funds and doubles the position return." },
    { q: "Is the funding rate included?", a: "No. Funding depends on the exchange and on how long the position is held; this calculator settles the trade itself." },
    { q: "What does the price change show?", a: "How far the price moved between entry and exit, regardless of the direction of the trade or the leverage." },
  ],
};
