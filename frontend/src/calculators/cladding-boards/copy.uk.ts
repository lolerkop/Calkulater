import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Калькулятор обшивки стіни дошкою",
  "slug": "obshyvka-doshkoyu",
  "shortDescription": "Скільки дощок потрібно на стіну з урахуванням нахлесту та запасу.",
  "seoTitle": "Калькулятор обшивки стіни дошкою — кількість дощок із нахлестом",
  "seoDescription": "Розрахуйте, скільки дощок потрібно на обшивку стіни: корисна ширина з урахуванням нахлесту, запас на підрізання та погонні метри.",
  "h1": "Калькулятор обшивки стіни дошкою",
  "keywords": [
    "розрахунок обшивки дошкою",
    "скільки дощок на стіну",
    "калькулятор імітації брусу"
  ]
};

export const claddingBoardsCopyUk: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.uk,
};
