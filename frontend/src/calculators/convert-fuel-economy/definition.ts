import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { convertFuelEconomyCopyEn } from './copy.en';
import { convertFuelEconomyCopyUk } from './copy.uk';
import { convertFuelEconomyReferenceCases } from './referenceCases';

const UNIT_OPTIONS = [
  { value: 'l100km', label: 'л/100 км' },
  { value: 'kml', label: 'км/л' },
  { value: 'mpgus', label: 'mpg США' },
  { value: 'mpguk', label: 'mpg Великобритании' },
];

export const definition: CalculatorDefinitionV2 = {
  id: "convert-fuel-economy",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: convertFuelEconomyCopyEn, uk: convertFuelEconomyCopyUk },
  referenceCases: convertFuelEconomyReferenceCases,
  publishedExample: { inputs: { value: 8, fromUnit: 'l100km', toUnit: 'mpgus' }, expected: ["29,402"] },
  presentation: {
    id: "convert-fuel-economy",
    name: "Конвертер расхода топлива",
    slug: "convert-fuel-economy",
    fullPath: "/converters/convert-fuel-economy/",
    category: "converters",
    icon: "car",
    popularity: 17,
    isNew: false,
    shortDescription: "Перевод расхода топлива между л/100 км, км/л и милями на галлон.",
    longDescription:
      "Переводит расход топлива между четырьмя единицами. Главная особенность здесь в том, что связь между ними ОБРАТНАЯ: чем больше литров на сто километров, тем меньше миль на галлон, и потому обычный множитель не годится — удвоение расхода в литрах вдвое уменьшает пробег на галлон. Все переводы идут через л/100 км, а не по таблице пар: у четырёх единиц она стоила бы шестнадцати записей, каждая из которых могла бы разойтись с остальными. Галлоны США и Великобритании различаются почти на четверть, поэтому американские и британские mpg показаны отдельными строками — путать их значит ошибиться на 20 %.",
    seoTitle: "Конвертер расхода топлива: л/100 км, км/л и mpg",
    seoDescription: "Переведите расход топлива между литрами на 100 км, километрами на литр и милями на галлон США и Великобритании.",
    h1: "Конвертер расхода топлива",
    keywords: ["расход топлива", "л/100 км в mpg", "mpg в литры", "конвертер расхода"],
    fields: [
      { name: 'value', label: 'Значение', type: 'number', defaultValue: 8, min: 0, step: 0.1 },
      { name: 'fromUnit', label: 'Из единицы', type: 'select', defaultValue: 'l100km', options: UNIT_OPTIONS },
      { name: 'toUnit', label: 'В единицу', type: 'select', defaultValue: 'mpgus', options: UNIT_OPTIONS },
    ],
    resultLabels: {
      "result": "Результат",
      "l100km": "В л/100 км",
      "kml": "В км/л",
      "mpgus": "В mpg США",
      "mpguk": "В mpg Великобритании",
    },
    howToUse: [
      "Введите значение расхода.",
      "Выберите, в какой единице оно указано.",
      "Выберите нужную единицу.",
      "Остальные три показаны рядом для сравнения.",
    ],
    howItWorks:
      "Все единицы приводятся к л/100 км. Километры на литр связаны обратно: 100 ÷ значение. Мили на галлон переводятся как 100 × объём галлона ÷ (значение × 1,609344). Галлон США равен 3,785411784 л, имперский — 4,54609 л.",
    example: "Расход 8 л/100 км — это 12,5 км/л, 29,402 mpg США и 35,31 mpg Великобритании.",
    faq: [
      { q: "Почему нельзя просто умножить на коэффициент?", a: "Потому что связь обратная, а не пропорциональная. Литры на сто километров растут, когда мили на галлон падают, поэтому перевод идёт через деление, и постоянного множителя между ними не существует." },
      { q: "Чем отличаются mpg США и Великобритании?", a: "Объёмом галлона: американский — 3,785 л, имперский — 4,546 л. Разница почти четверть, поэтому одна и та же машина «проезжает» 30 mpg в США и 36 mpg в Британии." },
      { q: "Какая единица привычнее где?", a: "Литры на 100 км приняты в России и континентальной Европе, километры на литр — в ряде стран Азии и Латинской Америки, мили на галлон — в США и Великобритании." },
      { q: "Меньше — это лучше или хуже?", a: "Зависит от единицы, и в этом главная путаница. У литров на 100 км меньше — лучше, у километров на литр и миль на галлон — наоборот, больше лучше." },
      { q: "Почему экономия от 10 к 9 л/100 км больше, чем от 6 к 5?", a: "Как раз из-за обратной связи: одинаковый шаг в литрах даёт разную экономию топлива в mpg. Именно поэтому улучшение прожорливой машины окупается быстрее, чем такое же улучшение экономичной." },
    ],
    relatedCalculatorIds: ["fuel-consumption", "trip-cost", "convert-volume"],
  },
};
