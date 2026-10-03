import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { capacitorNetworkCopyEn } from './copy.en';
import { capacitorNetworkCopyUk } from './copy.uk';
import { capacitorNetworkCopyDe } from './copy.de';
import { capacitorNetworkCopyEs } from './copy.es';
import { capacitorNetworkReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "capacitor-network",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: capacitorNetworkCopyEn, uk: capacitorNetworkCopyUk, de: capacitorNetworkCopyDe, es: capacitorNetworkCopyEs },
  referenceCases: capacitorNetworkReferenceCases,
  publishedExample: { inputs: { capacitances: '100 220 470', mode: 'series' }, expected: ["59,977 мкФ"] },
  presentation: {
    seoDescription: "Рассчитайте общую ёмкость батареи конденсаторов при последовательном и параллельном соединении по списку номиналов.",
    id: "capacitor-network",
    name: "Калькулятор батареи конденсаторов",
    slug: "kondensatory-v-cepi",
    fullPath: "/electronics/kondensatory-v-cepi/",
    category: "electronics",
    icon: "zap",
    popularity: 31,
    isNew: false,
    shortDescription: "Общая ёмкость конденсаторов при последовательном и параллельном соединении.",
    
    seoTitle: "Калькулятор конденсаторов — последовательно и параллельно",
    
    h1: "Калькулятор батареи конденсаторов",
    keywords: ["конденсаторы последовательно", "конденсаторы параллельно", "общая ёмкость", "батарея конденсаторов"],
    fields: [
  {
    "name": "capacitances",
    "label": "Ёмкости через пробел, мкФ",
    "type": "textarea",
    "defaultValue": "100 220 470",
    "placeholder": "100 220 470",
    "unit": "мкФ"
  },
  {
    "name": "mode",
    "label": "Соединение",
    "type": "select",
    "defaultValue": "series",
    "options": [
      {
        "value": "series",
        "label": "последовательное"
      },
      {
        "value": "parallel",
        "label": "параллельное"
      }
    ]
  }
],
    resultLabels: {
      "total": "Общая ёмкость", "count": "Конденсаторов", "min": "Наименьший",
      "max": "Наибольший", "connection": "Соединение",
    },

    relatedCalculatorIds: ["resistor-network", "capacitor-basics", "rc-filter"],
    ...contractContent.ru,
  },
};
