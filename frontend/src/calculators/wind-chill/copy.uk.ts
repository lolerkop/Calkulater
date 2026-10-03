import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const windChillCopyUk: CalculatorCopy = {
 ...{
  "name": "Калькулятор відчутної температури за вітру",
  "slug": "vidchutna-temperatura",
  "shortDescription": "Наскільки холоднішим відчувається мороз за вітру — за формулою метеослужб.",
  "seoTitle": "Калькулятор відчутної температури за вітру — wind chill",
  "seoDescription": "Розрахуйте, наскільки холоднішим відчувається мороз за вітру, за формулою метеослужб Канади та США.",
  "h1": "Калькулятор відчутної температури за вітру",
  "keywords": [
    "відчутна температура",
    "wind chill",
    "температура за вітру"
  ]
},
 ...contract.uk,
};
