import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const dtiCopyUk: CalculatorCopy = {
  "name": "Калькулятор кредитного навантаження",
  "slug": "kredytne-navantazhennya",
  "shortDescription": "Яка частка доходу до податків іде на боргові платежі.",
  "seoTitle": "Калькулятор кредитного навантаження — DTI та залишок",
  "seoDescription": "Розрахуйте DTI за місячними борговими платежами та доходом до податків. Показані умовні зони й залишок до податків і звичайних витрат без оцінки схвалення кредиту.",
  "h1": "Калькулятор кредитного навантаження",
  "keywords": [
    "кредитне навантаження",
    "DTI",
    "боргове навантаження"
  ],
  "resultTitle": "Калькулятор кредитного навантаження",
  ...contractContent.uk,
};
