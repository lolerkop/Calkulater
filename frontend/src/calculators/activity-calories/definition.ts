import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { activityCaloriesCopyEn } from './copy.en';
import { activityCaloriesCopyUk } from './copy.uk';
import { activityCaloriesReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "activity-calories",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: activityCaloriesCopyEn, uk: activityCaloriesCopyUk },
  referenceCases: activityCaloriesReferenceCases,
  publishedExample: { inputs: { activity: 'cycling', met: 7.5, weightKg: 70, minutes: 45 }, expected: ["413 ккал"] },
  presentation: {
    id: "activity-calories",
    name: "Калькулятор калорий при активности",
    slug: "activity-calories",
    fullPath: "/sport/activity-calories/",
    category: "sport",
    icon: "bike",
    popularity: 45,
    isNew: false,
    shortDescription: "Расход калорий на ходьбе, беге, велосипеде и плавании по MET и массе тела.",
    longDescription:
      "Считает расход на конкретное занятие, а не суточную норму: MET показывает, во сколько раз активность энергозатратнее покоя, и от него ведётся весь расчёт. Масса входит множителем, а не поправкой — человек 90 кг на том же велосипеде тратит почти на треть больше, чем человек 70 кг, и усреднённый расход из таблиц для него занижен. Коэффициенты по видам активности взяты как общепринятые ориентиры, но это усреднение, а не измерение: свой темп задаётся вручную через отдельный пункт списка.",
    seoTitle: "Калькулятор калорий при активности — MET и масса",
    seoDescription: "Рассчитайте расход калорий при ходьбе, беге, велосипеде или плавании по коэффициенту MET, массе тела и длительности занятия.",
    h1: "Калькулятор калорий при активности",
    keywords: ["расход калорий", "калории при беге", "калории на велосипеде", "калории при ходьбе"],
    fields: [
      {
        name: 'activity', label: 'Вид активности', type: 'select', defaultValue: 'cycling',
        options: [
          { value: 'walking', label: 'ходьба, MET 3,5' },
          { value: 'cycling', label: 'велосипед, MET 7,5' },
          { value: 'swimming', label: 'плавание, MET 8,0' },
          { value: 'running', label: 'бег, MET 9,8' },
          { value: 'custom', label: 'свой коэффициент MET' },
        ],
      },
      { name: 'met', label: 'Свой коэффициент MET', type: 'number', defaultValue: 7.5, min: 0, step: 0.1, showIf: { field: 'activity', equals: 'custom' } },
      { name: 'weightKg', label: 'Масса тела, кг', type: 'number', defaultValue: 70, min: 0, step: 1 },
      { name: 'minutes', label: 'Длительность, мин', type: 'number', defaultValue: 45, min: 0, step: 5 },
    ],
    resultLabels: {
      "kcal": "Потрачено калорий",
      "perMinute": "Калорий в минуту",
      "perHour": "Расход в час",
      "met": "Коэффициент MET",
    },
    howToUse: [
      "Выберите вид активности или пункт со своим коэффициентом MET.",
      "Введите массу тела — она входит в расчёт множителем.",
      "Укажите длительность занятия в минутах.",
      "Сравните расход в час, если планируете более длинную тренировку.",
    ],
    howItWorks:
      "Калории = MET × 3,5 × масса в килограммах ÷ 200 × минуты. Число 3,5 — потребление кислорода в покое в миллилитрах на килограмм в минуту, а MET показывает, во сколько раз активность его превышает.",
    example: "Велосипед 45 минут при массе 70 кг и MET 7,5 сжигает 413 ккал, то есть 9,19 ккал в минуту.",
    faq: [
      { q: "Что означает коэффициент MET?", a: "Во сколько раз активность энергозатратнее покоя. MET 7,5 значит, что велосипед расходует в семь с половиной раз больше энергии, чем спокойное сидение." },
      { q: "Почему масса так сильно влияет?", a: "Она входит в формулу множителем: перемещать более тяжёлое тело энергетически дороже. При 90 кг вместо 70 расход выше почти на треть." },
      { q: "Насколько точны коэффициенты из списка?", a: "Это усреднённые ориентиры для среднего темпа. Реальный расход зависит от скорости, рельефа и тренированности, поэтому свой коэффициент можно ввести вручную." },
      { q: "Учитывается ли основной обмен?", a: "Нет. Здесь считается расход на само занятие; суточная норма с учётом обмена веществ считается отдельным калькулятором." },
      { q: "Можно ли вычесть эти калории из дневной нормы?", a: "Частично: во время тренировки организм всё равно тратил бы энергию на покой. Строго говоря, вычитать нужно расход за вычетом обмена за то же время." },
    ],
    relatedCalculatorIds: ["calorie-calculator", "calories-from-macros", "running-pace-calculator"],
  },
};
