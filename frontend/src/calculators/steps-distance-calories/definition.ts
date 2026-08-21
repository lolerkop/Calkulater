import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { stepsDistanceCaloriesCopyEn } from './copy.en';
import { stepsDistanceCaloriesCopyUk } from './copy.uk';
import { stepsDistanceCaloriesReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "steps-distance-calories",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: stepsDistanceCaloriesCopyEn, uk: stepsDistanceCaloriesCopyUk },
  referenceCases: stepsDistanceCaloriesReferenceCases,
  publishedExample: { inputs: { mode: 'height', steps: 10000, height: 175, stride: 70, weight: 70, kcalPerKgKm: 0.53 }, expected: ["7,263 км"] },
  presentation: {
    id: "steps-distance-calories",
    name: "Калькулятор шагов, расстояния и калорий",
    slug: "shagi-rasstoyanie-kalorii",
    fullPath: "/sport/shagi-rasstoyanie-kalorii/",
    category: "sport",
    icon: "footprints",
    popularity: 53,
    isNew: true,
    shortDescription: "Превращает число шагов в пройденные километры и потраченные калории.",
    longDescription:
      "Превращает число на шагомере в расстояние и энергию. Длина шага берётся либо из роста по привычному соотношению 0,415, либо прямо из вашего собственного замера — измеренный шаг всегда точнее оценённого, и тому, кто его измерил, незачем доверять коэффициенту. Расход энергии на километр — редактируемое, видимое допущение: 0,53 ккал на килограмм веса на километр это обычная ходьба, а бег, рюкзак или подъём это число меняют. Спрятать его в коде значило бы изобразить точность, которой здесь нет.",
    seoTitle: "Калькулятор шагов в расстояние и калории",
    seoDescription: "Переведите шаги в километры и потраченные калории по росту или по измеренной длине шага, с видимым коэффициентом расхода.",
    h1: "Шаги в расстояние и калории",
    keywords: ["шаги в километры", "шаги в калории", "расстояние по шагомеру", "длина шага"],
    fields: [
      {
        name: 'mode', label: 'Длина шага', type: 'select', defaultValue: 'height',
        options: [
          { value: 'height', label: 'Оценить по росту' },
          { value: 'stride', label: 'Знаю свой шаг' },
        ],
      },
      { name: 'steps', label: 'Шаги', type: 'number', defaultValue: 10000, min: 0, step: 100 },
      { name: 'height', label: 'Рост, см', type: 'number', defaultValue: 175, min: 0, step: 1, showIf: { field: 'mode', equals: 'height' } },
      { name: 'stride', label: 'Длина шага, см', type: 'number', defaultValue: 70, min: 0, step: 1, showIf: { field: 'mode', equals: 'stride' } },
      { name: 'weight', label: 'Вес тела, кг', type: 'number', defaultValue: 70, min: 0, step: 1 },
      { name: 'kcalPerKgKm', label: 'Ккал на кг на км', type: 'number', defaultValue: 0.53, min: 0, step: 0.01 },
    ],
    resultLabels: {
      "km": "Расстояние",
      "kcal": "Калории",
      "stride": "Длина шага",
      "stepsPerKm": "Шагов на километр",
      "kcalPerKm": "Ккал на километр",
    },
    howToUse: [
      "Введите число шагов.",
      "Укажите рост или переключитесь на ввод измеренного шага.",
      "Введите вес тела — калории зависят от него.",
      "Измените расход на километр, если вы не просто шли.",
    ],
    howItWorks:
      "Длина шага — это рост, умноженный на 0,415, если вы не ввели её напрямую. Расстояние — это шаги на длину шага, а калории — коэффициент расхода на вес и на расстояние в километрах.",
    example: "10 000 шагов при росте 175 см — это 7,263 км и около 269 ккал для человека весом 70 кг.",
    faq: [
      { q: "Насколько точно соотношение 0,415?", a: "Это распространённое правило для ходьбы, а не закон. Шаг зависит от длины ног, темпа и обуви; если это важно, сделайте десять шагов и поделите." },
      { q: "Почему коэффициент калорий — это поле?", a: "Потому что он зависит от того, чем вы занимались. Ходьба — около 0,5 ккал на килограмм на километр; бег заметно больше, как и ноша или подъём." },
      { q: "Учтены ли калории, которые я потратил бы и так?", a: "Нет. Число — это энергия самого движения, а не разница с лежанием, поэтому оно слегка завышает именно дополнительные траты." },
      { q: "Почему вес меняет калории?", a: "Потому что переместить более тяжёлое тело на то же расстояние — большая работа. Расстояние не меняется, энергия меняется." },
      { q: "Чем это отличается от калькулятора калорий при активности?", a: "Тот начинает с активности и длительности через MET. Этот начинает с шагов и длины шага, и часы здесь ни при чём." },
    ],
    relatedCalculatorIds: ["activity-calories", "running-pace-calculator", "calorie-calculator"],
  },
};
