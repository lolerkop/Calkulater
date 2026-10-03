import type { CalculatorCopy } from '../../lib/platform/types';
import { halfLifeContractContent } from './contractContent';

export const halfLifeCopyUk: CalculatorCopy = {
  name: "Калькулятор періоду напіврозпаду",
  slug: "period-napivrozpadu",
  shortDescription: "Залишок речовини за періодом напіврозпаду або час до заданого залишку.",
  seoTitle: "Калькулятор періоду напіврозпаду — залишок і час",
  seoDescription: "Розрахуйте, скільки речовини залишиться через заданий час, або скільки чекати до потрібного залишку.",
  h1: "Калькулятор періоду напіврозпаду",
  keywords: ["період напіврозпаду", "радіоактивний розпад", "залишок речовини", "середній час життя"],
  ...halfLifeContractContent.uk,
};
