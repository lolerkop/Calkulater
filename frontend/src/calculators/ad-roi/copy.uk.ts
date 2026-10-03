// Complete subject copy; metadata and published locale routes are preserved.
import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const adRoiCopyUk: CalculatorCopy = {
  name: 'Калькулятор ROI реклами',
  slug: 'roi-reklamy',
  shortDescription: "ROAS і спрощений ROI за виторгом та рекламними витратами.",
  seoTitle: 'Калькулятор ROI реклами — ROI та ROAS з витрат і виторгу',
  seoDescription: "Розрахуйте ROAS і спрощений ROI за виторгом кампанії та витратами лише на рекламу. Собівартість, комісії та інші витрати не входять до полів.",
  h1: 'Калькулятор ROI реклами',
  keywords: ['ROI реклами', 'калькулятор ROAS', 'окупність кампанії'],
  ...contractContent.uk,
};
