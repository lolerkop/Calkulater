// Концентрация раствора: по массе, по объёму и в миллионных долях.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { solutionConcentrationCopyEn } from './copy.en';
import { solutionConcentrationCopyUk } from './copy.uk';
import { solutionConcentrationCopyDe } from './copy.de';
import { solutionConcentrationCopyEs } from './copy.es';
import { solutionConcentrationReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'solution-concentration',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: solutionConcentrationCopyEn, uk: solutionConcentrationCopyUk, de: solutionConcentrationCopyDe, es: solutionConcentrationCopyEs },
  referenceCases: solutionConcentrationReferenceCases,
  publishedExample: { inputs: { mode: 'ww', solute: 25, solution: 500 }, expected: ['5,00%'] },
  presentation: {
    "id": "solution-concentration",
    "name": "Калькулятор концентрации раствора",
    "slug": "solution-concentration",
    "fullPath": "/chemistry/solution-concentration/",
    "category": "chemistry",
    "icon": "flask",
    "popularity": 43,
    "isNew": false,
    "shortDescription": "Массовая доля и ppm по массе или граммы на 100 мл раствора.",
    "longDescription": "Выберите массовую долю или массу вещества на объём готового раствора. В первом режиме результат — процент по массе и ppm по массе; во втором — граммы на 100 мл, обозначаемые % m/v, и г/л. Масса растворителя и объём растворителя не заменяют массу и объём всего раствора.",
    "seoTitle": "Калькулятор концентрации раствора — проценты и ppm",
    "seoDescription": "Рассчитайте концентрацию раствора: процент по массе, масса на объём и миллионные доли.",
    "h1": "Калькулятор концентрации раствора",
    "keywords": [
      "концентрация раствора",
      "процентная концентрация",
      "массовая доля",
      "ppm"
    ],
    "fields": [
      {
        "name": "mode",
        "label": "Форма концентрации",
        "type": "select",
        "defaultValue": "ww",
        "options": [
          {
            "value": "ww",
            "label": "процент по массе"
          },
          {
            "value": "wv",
            "label": "масса на объём"
          }
        ]
      },
      {
        "name": "solute",
        "label": "Масса вещества, г",
        "type": "number",
        "defaultValue": 25,
        "min": 0,
        "step": 0.1
      },
      {
        "name": "solution",
        "label": "Масса раствора, г",
        "type": "number",
        "defaultValue": 500,
        "min": 0,
        "step": 1,
        "showIf": {
          "field": "mode",
          "equals": "ww"
        }
      },
      {
        "name": "volume",
        "label": "Объём раствора, мл",
        "type": "number",
        "defaultValue": 300,
        "min": 0,
        "step": 1,
        "showIf": {
          "field": "mode",
          "equals": "wv"
        }
      }
    ],
    "resultLabels": {
      "concentration": "Концентрация",
      "solvent": "Масса растворителя",
      "ppm": "В миллионных долях",
      "perLitre": "Масса на литр"
    },
    "howToUse": [
      "Выберите массовую долю или массу на объём.",
      "Введите массу растворённого вещества в граммах.",
      "Укажите полную массу раствора в граммах либо его конечный объём в миллилитрах."
    ],
    "howItWorks": "w/w: 100 × m/масса раствора; ppm: 10⁶ × то же отношение масс. w/v: 100 × m/V при m в г и V в мл — граммы на 100 мл; 1000 × m/V — г/л. Ограничение m ≤ масса раствора относится только к w/w. Масса вещества должна быть конечной и неотрицательной; масса и объём раствора — конечными и больше нуля; непредставимый результат отклоняется, малые значения показываются без округления до нуля.",
    "example": "25 г вещества в 500 г раствора: 5,00% по массе, 50 000 ppm и 475 г растворителя. 3 г в 100 мл готового раствора: 3,00% m/v и 30 г/л.",
    "faq": [
      {
        "q": "Почему нужна масса раствора, а не растворителя?",
        "a": "Вещество входит в общую массу. Для 25 г вещества и 475 г растворителя вводится 500 г раствора; разность масс показывается отдельно."
      },
      {
        "q": "Что означает процент в режиме масса на объём?",
        "a": "Число граммов вещества на 100 мл раствора, а не объёмная доля. Поэтому % m/v нельзя сравнивать с массовым процентом без плотности раствора."
      },
      {
        "q": "Может ли результат превышать 100%?",
        "a": "Массовая доля не может: масса компонента не больше общей массы. Для г/100 мл универсального предела 100 нет; калькулятор не проверяет растворимость вещества."
      },
      {
        "q": "Равны ли ppm и мг/л?",
        "a": "Здесь ppm — мг на кг раствора, то есть массовое отношение. Равенство с мг/л требует плотности 1 кг/л; автоматически это не предполагается."
      },
      {
        "q": "Можно ли ввести нулевую массу вещества?",
        "a": "Да. При положительной массе или объёме раствора 0 г вещества дают 0% и соответственно 0 ppm или 0 г/л. Потеря положительной концентрации до нуля при вычислении вызывает ошибку."
      }
    ],
    "relatedCalculatorIds": [
      "dilution",
      "molarity",
      "moles"
    ],
    "disclaimer": "Считаются массовая доля и массовая концентрация; объёмная доля и растворимость не вычисляются. ppm относятся к массе. Машинная арифметика и вывод округляются."
  },
};
