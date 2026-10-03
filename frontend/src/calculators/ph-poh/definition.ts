// pH и pOH: pH = −lg[H⁺], сумма 14 при 25 °C.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { phPohCopyEn } from './copy.en';
import { phPohCopyUk } from './copy.uk';
import { phPohCopyDe } from './copy.de';
import { phPohCopyEs } from './copy.es';
import { phPohReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'ph-poh',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: phPohCopyEn, uk: phPohCopyUk, de: phPohCopyDe, es: phPohCopyEs },
  referenceCases: phPohReferenceCases,
  publishedExample: { inputs: { mode: 'fromH', h: 0.0001 }, expected: ['4,00'] },
  presentation: {
    "id": "ph-poh",
    "name": "Калькулятор pH и pOH",
    "slug": "ph-poh",
    "fullPath": "/chemistry/ph-poh/",
    "category": "chemistry",
    "icon": "flask",
    "popularity": 45,
    "isNew": false,
    "shortDescription": "pH по концентрации ионов водорода и обратно, с pOH и характером среды.",
    "longDescription": "Учебный расчёт по концентрации H⁺ в моль/л или по заданному pH. Строго pH определяется активностью ионов водорода; здесь активность приближена концентрацией относительно 1 моль/л, что обычно применяют для достаточно разбавленных растворов. Для pOH принято pKw = 14 при 25 °C. Температура и коэффициенты активности не вводятся.",
    "seoTitle": "Калькулятор pH и pOH — кислотность раствора",
    "seoDescription": "Рассчитайте pH по концентрации ионов водорода или концентрацию по pH, вместе с pOH и характером среды.",
    "h1": "Калькулятор pH и pOH",
    "keywords": [
      "калькулятор ph",
      "ph и poh",
      "кислотность раствора",
      "концентрация ионов водорода"
    ],
    "fields": [
      {
        "name": "mode",
        "label": "Что известно",
        "type": "select",
        "defaultValue": "fromH",
        "options": [
          {
            "value": "fromH",
            "label": "концентрация H⁺"
          },
          {
            "value": "fromPh",
            "label": "pH"
          }
        ]
      },
      {
        "name": "h",
        "label": "Концентрация H⁺, моль/л",
        "type": "number",
        "defaultValue": 0.0001,
        "min": 0,
        "step": 0.0001,
        "showIf": {
          "field": "mode",
          "equals": "fromH"
        }
      },
      {
        "name": "ph",
        "label": "pH",
        "type": "number",
        "defaultValue": 8.4,
        "min": 0,
        "max": 14,
        "step": 0.1,
        "showIf": {
          "field": "mode",
          "equals": "fromPh"
        }
      }
    ],
    "resultLabels": {
      "ph": "pH",
      "poh": "pOH",
      "h": "Концентрация H⁺",
      "medium": "Среда"
    },
    "howToUse": [
      "Выберите концентрацию H⁺ или pH.",
      "Введите конечную положительную концентрацию в моль/л либо pH от 0 до 14.",
      "Читайте результат в рамках приближения при 25 °C."
    ],
    "howItWorks": "pH = −log₁₀ a(H⁺). В модели a(H⁺) ≈ [H⁺]/c°, где c° = 1 моль/л; обратно [H⁺] ≈ c° × 10⁻pH. pOH = 14 − pH. Нейтральная точка модели — pH 7. Продукт принимает pH от 0 до 14 и соответствующие положительные концентрации; это ограничение калькулятора, а не универсальные пределы шкалы pH.",
    "example": "Для [H⁺] = 10⁻³ моль/л модель даёт pH 3,00 и pOH 11,00. При pH 8,4 получаем приблизительно 3,981 × 10⁻⁹ моль/л и pOH 5,60.",
    "faq": [
      {
        "q": "Всегда ли pH + pOH = 14?",
        "a": "Нет. Сумма равна pKw, который зависит от температуры и среды. Здесь фиксирован учебный выбор pKw = 14 при 25 °C; другие температуры не рассчитываются."
      },
      {
        "q": "Является ли концентрация точным определением pH?",
        "a": "Нет. Определение использует безразмерную активность. Приближение концентрацией не учитывает коэффициенты активности и может быть неточным в концентрированных растворах."
      },
      {
        "q": "Может ли pH быть вне 0–14?",
        "a": "Да, шкала остаётся осмысленной и вне этих границ. Этот калькулятор намеренно ограничен диапазоном 0–14 и не моделирует такие растворы."
      },
      {
        "q": "Почему нулевая концентрация отклоняется?",
        "a": "Логарифм нуля не определён. Пустой или неверный ввод тоже вызывает ошибку, а не заменяется нулём."
      }
    ],
    "relatedCalculatorIds": [
      "solution-concentration",
      "dilution",
      "molarity"
    ],
    "disclaimer": "Приближение активности концентрацией; pKw = 14 при 25 °C. Диапазон продукта 0–14 не является физическим пределом pH. Ионная сила, температура и измерительные поправки не моделируются."
  },
};
