import { contractContent } from './contractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const numberToWordsCopyUk: CalculatorCopy = {
  name: "Число прописом",
  slug: "chyslo-propysom",
  shortDescription: "Запис цілого числа словами; грошовий рядок фіксований у RUB із00 копійок.",
  seoTitle: "Число прописом — запис числа словами онлайн",
  seoDescription: "Запишіть ціле число словами: від мінус999 999 999 999 до999 999 999 999. Грошовий рядок фіксований у рублях RUB із00 копійок.",
  h1: "Число прописом",
  keywords: ["число прописом", "сума прописом", "число словами"],
  ...contractContent.uk
};
