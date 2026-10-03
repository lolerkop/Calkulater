import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const goldenRatioCopyUk: CalculatorCopy = {
  name: "Калькулятор золотого перерізу",
  slug: "zolotyi-pereriz",
  seoTitle: "Калькулятор золотого перерізу — поділ відрізка за φ",
  h1: "Калькулятор золотого перерізу",
  keywords: ["золотий переріз", "калькулятор φ", "божественна пропорція"],
  ...contractContent.uk,
};
