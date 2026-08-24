import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { transformerRatioCopyEn } from './copy.en';
import { transformerRatioCopyUk } from './copy.uk';
import { transformerRatioReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "transformer-ratio",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: transformerRatioCopyEn, uk: transformerRatioCopyUk },
  referenceCases: transformerRatioReferenceCases,
  publishedExample: {
    inputs: { mode: 'secondaryVoltage', n1: 500, n2: 100, v1: 220, v2: 44, i1: 2 },
    expected: ["44 В"],
  },
  presentation: {
    id: "transformer-ratio",
    name: "Калькулятор коэффициента трансформации",
    slug: "koefficient-transformacii",
    fullPath: "/electronics/koefficient-transformacii/",
    category: "electronics",
    icon: "repeat",
    popularity: 31,
    isNew: false,
    shortDescription: "Витки, напряжения и токи идеального трансформатора.",
    longDescription:
      "Слово «идеальный» здесь не украшение, а условие расчёта: мощность считается сохранённой полностью, поэтому во сколько раз выросло напряжение, во столько же упал ток. Настоящий трансформатор греется, а под нагрузкой вторичное напряжение проседает; насколько именно — зависит от сердечника, сечения провода и режима, и расчёт этого знать не может. Отличие от однофазной мощности: та связывает напряжение, ток и коэффициент мощности одной обмотки, здесь же связаны две обмотки через отношение витков.",
    seoTitle: "Калькулятор коэффициента трансформации — витки, напряжение, ток",
    seoDescription: "Рассчитайте вторичное напряжение и ток идеального трансформатора по числу витков или найдите нужное отношение обмоток.",
    h1: "Калькулятор коэффициента трансформации",
    keywords: ["коэффициент трансформации", "витки трансформатора", "вторичное напряжение", "идеальный трансформатор"],
    fields: [
      {
        name: 'mode', label: 'Что найти', type: 'select', defaultValue: 'secondaryVoltage',
        options: [
          { value: 'secondaryVoltage', label: 'вторичное напряжение' },
          { value: 'turnsRatio', label: 'отношение витков' },
        ],
      },
      { name: 'n1', label: 'Витков первичной обмотки', type: 'number', defaultValue: 500, min: 0, step: 10, showIf: { field: 'mode', equals: 'secondaryVoltage' } },
      { name: 'n2', label: 'Витков вторичной обмотки', type: 'number', defaultValue: 100, min: 0, step: 10, showIf: { field: 'mode', equals: 'secondaryVoltage' } },
      { name: 'v1', label: 'Первичное напряжение, В', type: 'number', defaultValue: 220, min: 0, step: 1 },
      { name: 'v2', label: 'Нужное вторичное напряжение, В', type: 'number', defaultValue: 44, min: 0, step: 1, showIf: { field: 'mode', equals: 'turnsRatio' } },
      { name: 'i1', label: 'Первичный ток, А', type: 'number', defaultValue: 2, min: 0, step: 0.1 },
    ],
    resultLabels: {
      "value": "Вторичное напряжение", "ratio": "Отношение витков", "i2": "Вторичный ток",
      "power": "Мощность", "type": "Тип",
    },
    howToUse: [
      "Выберите, что известно: числа витков обеих обмоток или нужное вторичное напряжение.",
      "Первичное напряжение и ток задаются в обоих режимах — по ним считается мощность.",
      "Отношение меньше единицы означает понижающий трансформатор, больше — повышающий.",
      "Полученное отношение витков округляйте вверх: дробных витков не бывает.",
    ],
    howItWorks: "U₂ = U₁ · n₂/n₁, а ток меняется обратно: I₂ = I₁ · n₁/n₂. Мощность считается сохранённой.",
    example: "Обмотки 500 и 100 витков понижают 220 В до 44 В, а ток 2 А растёт до 10 А.",
    faq: [
      { q: "Почему ток растёт, когда напряжение падает?", a: "Потому что мощность в идеальном трансформаторе сохраняется: произведение напряжения на ток одинаково с обеих сторон. Понизив напряжение впятеро, вы впятеро увеличиваете доступный ток." },
      { q: "Насколько расчёт отличается от реального трансформатора?", a: "Настоящий имеет потери в меди и в стали, поэтому под нагрузкой вторичное напряжение проседает, а мощность на выходе меньше входной. У небольших трансформаторов расхождение доходит до десятка процентов." },
      { q: "Можно ли получить дробное число витков?", a: "Нет. Расчёт даёт точное отношение, а мотать придётся целыми витками, поэтому результат округляют — обычно вверх, чтобы напряжение не оказалось ниже нужного." },
      { q: "Работает ли это для автотрансформатора?", a: "Отношение витков считается так же, но у автотрансформатора обмотки не разделены гальванически, и вопросы безопасности там совсем другие." },
    ],
    relatedCalculatorIds: ["single-phase", "kva-kw", "voltage-divider"],
  },
};
