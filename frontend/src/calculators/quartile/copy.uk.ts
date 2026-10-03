import { mathWave8ContractContent } from './contractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const quartileCopyUk: CalculatorCopy = {
  name: "Калькулятор квартилів і перцентилів",
  slug: "kvartyli",
  shortDescription: "Квартилі, міжквартильний розмах, межі вусів і викиди за списком чисел.",
  seoTitle: "Калькулятор квартилів, міжквартильного розмаху та викидів",
  seoDescription: "Порахуйте Q1, медіану, Q3, міжквартильний розмах, межі вусів і кількість викидів за списком чисел.",
  h1: "Калькулятор квартилів і перцентилів",
  keywords: ["квартилі", "міжквартильний розмах", "викиди", "ящик з вусами"],
  ...mathWave8ContractContent.uk,
};
