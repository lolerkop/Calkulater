import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { newtonForceCopyEn } from './copy.en';
import { newtonForceCopyUk } from './copy.uk';
import { newtonForceCopyDe } from './copy.de';
import { newtonForceCopyEs } from './copy.es';
import { newtonForceReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "newton-force",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: newtonForceCopyEn, uk: newtonForceCopyUk, de: newtonForceCopyDe, es: newtonForceCopyEs },
  referenceCases: newtonForceReferenceCases,
  publishedExample: { inputs: { mode: 'F', m: 10, a: 2 }, expected: ["20 Н"] },
  presentation: {
  "id": "newton-force",
  "name": "Калькулятор силы по второму закону Ньютона",
  "slug": "newton-force",
  "fullPath": "/physics/newton-force/",
  "category": "physics",
  "icon": "atom",
  "popularity": 47,
  "isNew": false,
  "shortDescription": "Сила, масса или ускорение по формуле F = m · a.",
  "longDescription": "Связывает модуль равнодействующей внешних сил, положительную постоянную массу и модуль ускорения: F = ma. Вводится уже найденная равнодействующая, а не сумма модулей разнонаправленных сил. Направления здесь не рассчитываются. Дополнительная строка веса равна mg при условном стандартном g = 9,80665 м/с²; это не измерение местной тяжести или показаний весов в ускоряющемся лифте.",
  "seoTitle": "Калькулятор силы — второй закон Ньютона F = ma",
  "seoDescription": "Рассчитайте силу, массу или ускорение по второму закону Ньютона F = m · a в единицах СИ.",
  "h1": "Калькулятор силы по второму закону Ньютона",
  "keywords": [
    "калькулятор силы",
    "второй закон ньютона",
    "f = ma",
    "найти массу по силе"
  ],
  "fields": [
    {
      "name": "mode",
      "label": "Что нужно найти",
      "type": "select",
      "defaultValue": "F",
      "options": [
        {
          "value": "F",
          "label": "силу"
        },
        {
          "value": "m",
          "label": "массу"
        },
        {
          "value": "a",
          "label": "ускорение"
        }
      ]
    },
    {
      "name": "m",
      "label": "Масса",
      "type": "number",
      "defaultValue": 10,
      "min": 0,
      "step": 0.1,
      "showIf": {
        "field": "mode",
        "equals": "F"
      },
      "unit": "кг"
    },
    {
      "name": "a",
      "label": "Модуль ускорения",
      "type": "number",
      "defaultValue": 2,
      "min": 0,
      "step": 0.1,
      "showIf": {
        "field": "mode",
        "equals": "F"
      },
      "unit": "м/с²"
    },
    {
      "name": "F",
      "label": "Модуль равнодействующей",
      "type": "number",
      "defaultValue": 50,
      "min": 0,
      "step": 0.1,
      "showIf": {
        "field": "mode",
        "equals": "m"
      },
      "unit": "Н"
    },
    {
      "name": "a2",
      "label": "Модуль ускорения",
      "type": "number",
      "defaultValue": 5,
      "min": 0,
      "step": 0.1,
      "showIf": {
        "field": "mode",
        "equals": "m"
      },
      "unit": "м/с²"
    },
    {
      "name": "F2",
      "label": "Модуль равнодействующей",
      "type": "number",
      "defaultValue": 12,
      "min": 0,
      "step": 0.1,
      "showIf": {
        "field": "mode",
        "equals": "a"
      },
      "unit": "Н"
    },
    {
      "name": "m2",
      "label": "Масса",
      "type": "number",
      "defaultValue": 4,
      "min": 0,
      "step": 0.1,
      "showIf": {
        "field": "mode",
        "equals": "a"
      },
      "unit": "кг"
    }
  ],
  "resultLabels": {
    "force": "Сила",
    "mass": "Масса",
    "accel": "Ускорение",
    "weight": "Вес у поверхности Земли"
  },
  "howToUse": [
    "Выберите силу, массу или ускорение.",
    "Введите массу в кг, модули силы в Н и ускорения в м/с²; направления сначала учтите при сложении сил.",
    "При поиске массы обе известные величины должны быть положительными; по F = 0 и a = 0 массу определить нельзя.",
    "Нулевое ускорение допустимо для поиска силы, а нулевая равнодействующая — для поиска ускорения положительной массы."
  ],
  "howItWorks": "Для постоянной массы в инерциальной системе F = ma, m = F/a, a = F/m. Все F и a на этой странице — неотрицательные модули согласованных векторов. Справочный вес W = mgₙ с gₙ = 9,80665 м/с² не заменяет равнодействующую: другие силы могут её уравновешивать.",
  "example": "Масса 10 кг и ускорение 2 м/с² дают равнодействующую 20 Н; справочный вес 98,0665 Н. Если тяга 30 Н, а трение против неё 10 Н, вводится 20 Н, а не 40 Н.",
  "faq": [
    {
      "q": "Чем сила отличается от веса?",
      "a": "Сила — общее понятие. Здесь F — модуль равнодействующей, а справочная строка веса — mgₙ. В покое вес может уравновешиваться реакцией опоры, так что F = 0 при ненулевом mgₙ."
    },
    {
      "q": "Почему нулевое ускорение не принимается при поиске массы?",
      "a": "При F = a = 0 подходит любая положительная масса. При F > 0 и a = 0 данные противоречат модели постоянной конечной массы; деление на ноль не даёт ответа."
    },
    {
      "q": "Можно ли задать нулевое ускорение при поиске силы?",
      "a": "Да: для m > 0 получается F = 0. Но F = 0 при ненулевом a не позволяет получить положительную массу в обратном режиме."
    },
    {
      "q": "Учитывается ли трение?",
      "a": "Автоматически нет. Его вектор входит в равнодействующую вместе с тягой и другими внешними силами; сложите их с направлениями до ввода."
    },
    {
      "q": "Стандартное g — точная тяжесть в моём городе?",
      "a": "Нет. 9,80665 м/с² — условное стандартное значение. Местная тяжесть зависит от места, а показание опоры ещё и от движения системы."
    }
  ],
  "relatedCalculatorIds": [
    "kinetic-energy",
    "work",
    "physics-power"
  ],
  "disclaimer": "Классическая модель постоянной положительной массы и модулей равнодействующей; силы трения и направления не восстанавливаются автоматически."
}
};
