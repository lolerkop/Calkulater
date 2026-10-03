import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { convertRadiationCopyEn } from './copy.en';
import { convertRadiationCopyUk } from './copy.uk';
import { convertRadiationCopyDe } from './copy.de';
import { convertRadiationCopyEs } from './copy.es';
import { convertRadiationReferenceCases } from './referenceCases';

const UNITS = [
  { value: 'Sv', label: 'Зиверт (Зв)' },
  { value: 'mSv', label: 'Миллизиверт (мЗв)' },
  { value: 'uSv', label: 'Микрозиверт (мкЗв)' },
  { value: 'nSv', label: 'Нанозиверт (нЗв)' },
  { value: 'rem', label: 'Бэр' },
  { value: 'mrem', label: 'Миллибэр (мбэр)' },
];

export const definition: CalculatorDefinitionV2 = {
  id: "convert-radiation",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: convertRadiationCopyEn, uk: convertRadiationCopyUk, de: convertRadiationCopyDe, es: convertRadiationCopyEs },
  referenceCases: convertRadiationReferenceCases,
  publishedExample: { inputs: { value: 1, from: 'mSv', to: 'uSv' }, expected: ["1 000"] },
  presentation: {
    "id": "convert-radiation",
    "name": "Конвертер дозы излучения",
    "slug": "konverter-radiacii",
    "fullPath": "/converters/konverter-radiacii/",
    "category": "converters",
    "icon": "zap",
    "popularity": 43,
    "isNew": false,
    "shortDescription": "Зиверты, миллизиверты, микрозиверты и бэры, переведённые в обе стороны.",
    "longDescription": "Переводит единицы эквивалентной дозы: Зв, мЗв, мкЗв, нЗв, бэр и мбэр. Выбирайте одну и ту же дозиметрическую величину и период. Поглощённая доза в греях, активность в беккерелях и мощность дозы в Зв/ч не входят в этот список.",
    "seoTitle": "Конвертер дозы излучения: зиверт, миллизиверт, бэр",
    "seoDescription": "Переведите зиверты, миллизиверты, микрозиверты, нанозиверты, бэры и миллибэры друг в друга.",
    "h1": "Конвертер дозы излучения",
    "keywords": [
      "зиверт в бэр",
      "конвертер дозы",
      "мЗв в мкЗв",
      "перевод миллибэр"
    ],
    "fields": [
      {
        "name": "value",
        "label": "Значение",
        "type": "number",
        "defaultValue": 1,
        "min": 0,
        "step": 0.1
      },
      {
        "name": "from",
        "label": "Из единицы",
        "type": "select",
        "defaultValue": "mSv",
        "options": [
          {
            "value": "Sv",
            "label": "Зиверт (Зв)"
          },
          {
            "value": "mSv",
            "label": "Миллизиверт (мЗв)"
          },
          {
            "value": "uSv",
            "label": "Микрозиверт (мкЗв)"
          },
          {
            "value": "nSv",
            "label": "Нанозиверт (нЗв)"
          },
          {
            "value": "rem",
            "label": "Бэр"
          },
          {
            "value": "mrem",
            "label": "Миллибэр (мбэр)"
          }
        ]
      },
      {
        "name": "to",
        "label": "В единицу",
        "type": "select",
        "defaultValue": "uSv",
        "options": [
          {
            "value": "Sv",
            "label": "Зиверт (Зв)"
          },
          {
            "value": "mSv",
            "label": "Миллизиверт (мЗв)"
          },
          {
            "value": "uSv",
            "label": "Микрозиверт (мкЗв)"
          },
          {
            "value": "nSv",
            "label": "Нанозиверт (нЗв)"
          },
          {
            "value": "rem",
            "label": "Бэр"
          },
          {
            "value": "mrem",
            "label": "Миллибэр (мбэр)"
          }
        ]
      }
    ],
    "resultLabels": {
      "result": "Результат",
      "source": "Исходное значение",
      "ratio": "Соотношение"
    },
    "howToUse": [
      "Введите конечное неотрицательное значение дозы.",
      "Выберите исходную и целевую единицы одной дозиметрической величины.",
      "Читайте множитель в строке соотношения; период облучения не изменяется."
    ],
    "howItWorks": "1 мЗв = 10⁻³ Зв; 1 мкЗв = 10⁻⁶ Зв; 1 нЗв = 10⁻⁹ Зв; 1 бэр = 0,01 Зв; 1 мбэр = 10⁻⁵ Зв. Результат равен введённому значению, умноженному на отношение коэффициентов единиц. Коэффициенты определены точно; машинный расчёт и показ округляются. Конечный неотрицательный ввод допускает ноль. Ненулевые малые результаты сохраняются в показательной записи; переполнение и потеря до нуля вызывают ошибку.",
    "example": "1 мЗв = 1000 мкЗв; 250 мбэр = 2,5 мЗв. 1 нЗв = 1 × 10⁻⁹ Зв, а не нулевая доза.",
    "faq": [
      {
        "q": "Почему здесь нет Gy?",
        "a": "Грей измеряет поглощённую энергию на массу: 1 Gy = 1 Дж/кг. Эквивалентная доза в Sv учитывает радиационные весовые коэффициенты. Для перехода нужна модель облучения, а не общий коэффициент перевода единиц."
      },
      {
        "q": "Можно ли перевести Bq в Sv?",
        "a": "Нет. Беккерель измеряет активность источника, а не дозу. Расчёт дозы требует свойств излучения, геометрии и условий воздействия."
      },
      {
        "q": "Эквивалентная и эффективная доза взаимозаменяемы?",
        "a": "Нет, хотя обе выражаются в Sv. Эффективная доза дополнительно учитывает веса тканей. Конвертер меняет единицы введённой величины, а не её физический смысл."
      },
      {
        "q": "Что делать с мкЗв/ч?",
        "a": "Это мощность дозы, не доза. Здесь нет поля времени. Для получения дозы нужна отдельная модель интегрирования мощности за период."
      },
      {
        "q": "Определяет ли результат безопасность?",
        "a": "Нет. Число без типа дозы, периода и условий воздействия не оценивает риск. Конвертер не устанавливает медицинские или нормативные пределы."
      }
    ],
    "relatedCalculatorIds": [
      "convert-energy",
      "convert-power",
      "convert-frequency"
    ],
    "disclaimer": "Только смена единиц одной дозиметрической величины. Gy, Bq и мощность дозы не пересчитываются; риск и допустимость воздействия не оцениваются. Значения округляются."
  },
};
