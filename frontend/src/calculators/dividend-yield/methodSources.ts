// Educational methodology sources; these are not jurisdiction-wide rules.
import type { EditorialSource } from '../../data/calculatorEditorial';

export const methodSources: Record<'ru' | 'en' | 'uk' | 'de' | 'es', EditorialSource[]> = {
  "ru": [
    {
      "label": "FINRA: годовой дивиденд, цена и дивидендная доходность",
      "href": "https://www.finra.org/investors/insights/defining-value-investment"
    },
    {
      "label": "FINRA: дивиденды по акциям могут быть сокращены или отменены",
      "href": "https://www.finra.org/investors/investing/investment-products/stocks"
    }
  ],
  "en": [
    {
      "label": "FINRA: annual dividend, price and dividend yield",
      "href": "https://www.finra.org/investors/insights/defining-value-investment"
    },
    {
      "label": "FINRA: stock dividends can be reduced or eliminated",
      "href": "https://www.finra.org/investors/investing/investment-products/stocks"
    }
  ],
  "uk": [
    {
      "label": "FINRA: річний дивіденд, ціна й дивідендна дохідність",
      "href": "https://www.finra.org/investors/insights/defining-value-investment"
    },
    {
      "label": "FINRA: дивіденди за акціями можуть бути скорочені або скасовані",
      "href": "https://www.finra.org/investors/investing/investment-products/stocks"
    }
  ],
  "de": [
    {
      "label": "FINRA: Jahresdividende, Preis und Dividendenrendite",
      "href": "https://www.finra.org/investors/insights/defining-value-investment"
    },
    {
      "label": "FINRA: Aktiendividenden können gekürzt oder gestrichen werden",
      "href": "https://www.finra.org/investors/investing/investment-products/stocks"
    }
  ],
  "es": [
    {
      "label": "FINRA: dividendo anual, precio y rentabilidad por dividendo",
      "href": "https://www.finra.org/investors/insights/defining-value-investment"
    },
    {
      "label": "FINRA: los dividendos pueden reducirse o eliminarse",
      "href": "https://www.finra.org/investors/investing/investment-products/stocks"
    }
  ]
};
