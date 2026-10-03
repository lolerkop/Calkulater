import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
import { validate } from './validate';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { passwordEntropyCopyEn } from './copy.en';
import { passwordEntropyCopyUk } from './copy.uk';
import { passwordEntropyCopyDe } from './copy.de';
import { passwordEntropyCopyEs } from './copy.es';
import { passwordEntropyReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "password-entropy",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  validate,
  copy: { en: passwordEntropyCopyEn, uk: passwordEntropyCopyUk, de: passwordEntropyCopyDe, es: passwordEntropyCopyEs },
  referenceCases: passwordEntropyReferenceCases,
  publishedExample: { inputs: { length: 12, charset: "alnum", rate: 10 }, expected: ["71,45 бит"] },
  presentation: {
    ...contractContent.ru,
    id: "password-entropy",
    name: "Калькулятор стойкости пароля",
    slug: "stoykost-parolya",
    fullPath: "/computers/stoykost-parolya/",
    category: "computers",
    icon: "shield",
    popularity: 38,
    isNew: false,
    seoTitle: "Калькулятор стойкости пароля — энтропия и время перебора",
    h1: "Калькулятор стойкости пароля",
    keywords: ["энтропия пароля", "стойкость пароля", "время перебора", "битов энтропии"],
    fields: [
  {
    "name": "length",
    "label": "Длина случайной последовательности",
    "type": "number",
    "defaultValue": 12,
    "min": 1,
    "step": 1,
    "unit": "знаков"
  },
  {
    "name": "charset",
    "label": "Алфавит",
    "type": "select",
    "defaultValue": "alnum",
    "options": [
      {
        "value": "digits",
        "label": "только цифры (10)"
      },
      {
        "value": "lower",
        "label": "строчные латинские (26)"
      },
      {
        "value": "loweralnum",
        "label": "строчные и цифры (36)"
      },
      {
        "value": "mixed",
        "label": "строчные и прописные (52)"
      },
      {
        "value": "alnum",
        "label": "буквы и цифры (62)"
      },
      {
        "value": "alnumsym",
        "label": "буквы, цифры и знаки (94)"
      }
    ]
  },
  {
    "name": "rate",
    "label": "Скорость проверки",
    "type": "number",
    "defaultValue": 10,
    "min": 0,
    "step": 1,
    "unit": "10⁹ попыток/с"
  }
],
    resultLabels: {
      "entropy": "Энтропия", "combos": "Вариантов пароля", "seconds": "Средний перебор",
      "years": "В годах", "size": "Размер алфавита",
    },
    relatedCalculatorIds: ["ipv4-subnet", "files-on-disk", "combinatorics"],
  },
};
