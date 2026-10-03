import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const headphonePowerCopyUk: CalculatorCopy = {
  ...{
    "name": "Калькулятор потужності для навушників",
    "slug": "potuzhnist-dlya-navushnykiv",
    "shortDescription": "Гучність за чутливістю та підведеною потужністю.",
    "seoTitle": "Калькулятор потужності для навушників — гучність і напруга",
    "seoDescription": "Розрахуйте звуковий тиск навушників за чутливістю, імпедансом і підведеною потужністю.",
    "h1": "Калькулятор потужності для навушників",
    "keywords": [
      "потужність для навушників",
      "чутливість навушників",
      "імпеданс навушників"
    ]
  },
  ...contract.uk,
};
