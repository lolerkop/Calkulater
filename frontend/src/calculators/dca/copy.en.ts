import type { CalculatorCopy } from '../../lib/platform/types';

export const dcaCopyEn: CalculatorCopy = {
  name: "Dollar-cost averaging calculator",
  slug: "dollar-cost-averaging-calculator",
  shortDescription: "Average price and outcome when buying the same amount at regular intervals.",
  longDescription:
    "Works out what happens when you put the same sum in every month at a changing price. A fixed amount buys more units when the price is low than when it is high, so the average purchase price comes out BELOW the average price over the period — that is a property of the harmonic mean rather than an effect of the strategy itself. Price growth here is an assumption you edit, not a forecast: the calculator does not know future prices and will not present them as known. The final value is taken at the last purchase price, and the table shows how the units piled up month by month.",
  seoTitle: "DCA calculator: dollar-cost averaging",
  seoDescription: "Calculate the average purchase price, the amount invested and the outcome of investing a fixed sum regularly.",
  h1: "Dollar-cost averaging calculator",
  keywords: ["dca calculator", "dollar cost averaging", "average purchase price", "regular investing"],
  howToUse: [
    "Enter the amount you invest each month.",
    "Enter how many months the purchases continue.",
    "Enter the price per unit at the start.",
    "Set the assumed monthly price change — negative for a decline.",
  ],
  howItWorks:
    "Each month buys contribution ÷ current price units, after which the price moves by the given percentage. Average purchase price = invested ÷ units bought. Final value = units bought × the last purchase price.",
  example: "10,000 a month for a year with the price rising 2% a month buys 21.574 units at an average price of 5,562.33 for a final value of 134,120.90.",
  faq: [
    { q: "Why is the average price below the average price over the period?", a: "Because a fixed sum buys more units when the price is low, so the cheap months carry more weight in the average. This is a property of the harmonic mean and holds whichever way the price moves." },
    { q: "Is this a forecast of returns?", a: "No. The price growth is a figure you supply, and the calculator simply works through its consequences. It does not know the future price and will not invent one." },
    { q: "Which price is the final value based on?", a: "The last purchase price. Using some later price would mean inventing an extra period you never asked for." },
    { q: "Can I model a falling price?", a: "Yes, enter a negative percentage. Falling 1% a month, 5,000 a month over two years gives an average price of 177.74 against a starting price of 200." },
    { q: "Are fees and taxes included?", a: "No, this is the pure mechanics of averaging. Brokerage fees and tax on gains are calculated separately and do not affect the average purchase price." },
  ],
};
