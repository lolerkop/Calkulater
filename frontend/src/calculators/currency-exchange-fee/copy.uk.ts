import type { CalculatorCopy } from '../../lib/platform/types';
import { exchangeFeeContractContent } from './contractContent';

export const currencyExchangeFeeCopyUk: CalculatorCopy = {
  name: "Калькулятор вартості обміну валюти",
  slug: "vartist-obminu-valyuty",
  shortDescription: "Скільки насправді коштує обмін: спред, відсоток і фіксований збір разом.",
  seoTitle: "Калькулятор вартості обміну валюти зі спредом",
  seoDescription: "Розрахуйте, скільки залишиться після обміну валюти з урахуванням спреду, відсоткової комісії та фіксованого збору за заданим курсом.",
  h1: "Калькулятор вартості обміну валюти",
  keywords: ["вартість обміну валюти", "спред обмінника", "комісія за обмін"],
  ...exchangeFeeContractContent.uk,
};
