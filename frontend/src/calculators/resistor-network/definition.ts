import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { resistorNetworkCopyEn } from './copy.en';
import { resistorNetworkCopyUk } from './copy.uk';
import { resistorNetworkCopyDe } from './copy.de';
import { resistorNetworkCopyEs } from './copy.es';
import { resistorNetworkReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "resistor-network",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: resistorNetworkCopyEn, uk: resistorNetworkCopyUk, de: resistorNetworkCopyDe, es: resistorNetworkCopyEs },
  referenceCases: resistorNetworkReferenceCases,
  publishedExample: { inputs: { resistances: '100 220 330', mode: 'series' }, expected: ["650 Ом"] },
  presentation: {
    seoDescription: "Рассчитайте общее сопротивление цепи резисторов при последовательном и параллельном соединении.",
    id: "resistor-network",
    name: "Калькулятор соединения резисторов",
    slug: "resistor-network",
    fullPath: "/electronics/resistor-network/",
    category: "electronics",
    icon: "zap",
    popularity: 35,
    isNew: false,
    shortDescription: "Общее сопротивление цепи при последовательном и параллельном соединении.",
    
    seoTitle: "Калькулятор последовательного и параллельного соединения резисторов",
    
    h1: "Калькулятор соединения резисторов",
    keywords: ["соединение резисторов", "параллельное соединение", "последовательное соединение", "общее сопротивление"],
    fields: [
  {
    "name": "resistances",
    "label": "Сопротивления, Ом — по одному в строке или через пробел",
    "type": "textarea",
    "defaultValue": "100 220 330",
    "unit": "Ом"
  },
  {
    "name": "mode",
    "label": "Соединение",
    "type": "select",
    "defaultValue": "series",
    "options": [
      {
        "value": "series",
        "label": "Последовательное"
      },
      {
        "value": "parallel",
        "label": "Параллельное"
      }
    ]
  }
],
    resultLabels: {
      "total": "Общее сопротивление",
      "count": "Резисторов",
      "min": "Наименьший",
      "max": "Наибольший",
      "mode": "Соединение",
    },

    relatedCalculatorIds: ["ohms-law", "led-resistor", "inverter-power"],
    ...contractContent.ru,
  },
};
