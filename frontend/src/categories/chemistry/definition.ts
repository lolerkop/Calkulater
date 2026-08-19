// Категория «Химия».
//
// Всё, что о ней знает платформа, лежит здесь и в соседнем localization.ts.
// Общие файлы её не перечисляют: манифест собирается генератором.

import type { CategoryDefinition } from '../types';
import { copy, faq } from './localization';

export const definition: CategoryDefinition = {
  id: "chemistry",
  order: 15,
  icon: "flask",
  searchAliases: "химия раствор концентрация молярность моль количество вещества разбавление ph poh кислотность щёлочность идеальный газ уравнение менделеева клапейрона молярная масса ppm процентная концентрация",
  copy,
  faq,
  guidance: {
    useCases: [
      "Когда нужно приготовить раствор заданной концентрации из более крепкого.",
      "Когда известна масса вещества, а нужна молярность, или наоборот.",
      "Когда по концентрации ионов водорода нужно получить pH, а по pH — концентрацию.",
      "Когда одна из величин состояния газа неизвестна, а остальные три заданы.",
    ],
    checklist: [
      "Проверьте единицу у каждого поля: там, где её можно выбрать, значение приводится к базовой.",
      "Молярную массу берите из справочника — калькулятор её не выводит из формулы вещества.",
      "Для газа переводите температуру в кельвины: ноль по Цельсию — это 273,15 K, а не ноль.",
      "Убедитесь, что масса растворённого вещества не превышает массу раствора.",
    ],
    mistakes: [
      "Подставлять объём в литрах туда, где формула ждёт кубометры.",
      "Считать pH + pOH = 14 верным при любой температуре — это соотношение для 25 °C.",
      "Путать процент по массе с процентом по объёму: у растворов это разные величины.",
      "Пытаться «разбавить» раствор до большей концентрации, чем исходная.",
    ],
  },
  editorial: {
    ru: "Расчёты идеализированы: газ считается идеальным, растворы — разбавленными, объёмы при смешивании складываются, а pH + pOH = 14 верно при 25 °C. Для точных лабораторных работ проверяйте условия применимости.",
    en: "The calculations are idealised: gases are treated as ideal, solutions as dilute, volumes as additive on mixing, and pH + pOH = 14 holds at 25 °C. Check the applicability conditions for precise laboratory work.",
    es: "The calculations are idealised: gases are treated as ideal, solutions as dilute, volumes as additive on mixing, and pH + pOH = 14 holds at 25 °C. Check the applicability conditions for precise laboratory work.",
    de: "The calculations are idealised: gases are treated as ideal, solutions as dilute, volumes as additive on mixing, and pH + pOH = 14 holds at 25 °C. Check the applicability conditions for precise laboratory work.",
    fr: "The calculations are idealised: gases are treated as ideal, solutions as dilute, volumes as additive on mixing, and pH + pOH = 14 holds at 25 °C. Check the applicability conditions for precise laboratory work.",
    it: "The calculations are idealised: gases are treated as ideal, solutions as dilute, volumes as additive on mixing, and pH + pOH = 14 holds at 25 °C. Check the applicability conditions for precise laboratory work.",
    pt: "The calculations are idealised: gases are treated as ideal, solutions as dilute, volumes as additive on mixing, and pH + pOH = 14 holds at 25 °C. Check the applicability conditions for precise laboratory work.",
    nl: "The calculations are idealised: gases are treated as ideal, solutions as dilute, volumes as additive on mixing, and pH + pOH = 14 holds at 25 °C. Check the applicability conditions for precise laboratory work.",
    pl: "The calculations are idealised: gases are treated as ideal, solutions as dilute, volumes as additive on mixing, and pH + pOH = 14 holds at 25 °C. Check the applicability conditions for precise laboratory work.",
    cs: "The calculations are idealised: gases are treated as ideal, solutions as dilute, volumes as additive on mixing, and pH + pOH = 14 holds at 25 °C. Check the applicability conditions for precise laboratory work.",
    sk: "The calculations are idealised: gases are treated as ideal, solutions as dilute, volumes as additive on mixing, and pH + pOH = 14 holds at 25 °C. Check the applicability conditions for precise laboratory work.",
    hu: "The calculations are idealised: gases are treated as ideal, solutions as dilute, volumes as additive on mixing, and pH + pOH = 14 holds at 25 °C. Check the applicability conditions for precise laboratory work.",
    ro: "The calculations are idealised: gases are treated as ideal, solutions as dilute, volumes as additive on mixing, and pH + pOH = 14 holds at 25 °C. Check the applicability conditions for precise laboratory work.",
    tr: "The calculations are idealised: gases are treated as ideal, solutions as dilute, volumes as additive on mixing, and pH + pOH = 14 holds at 25 °C. Check the applicability conditions for precise laboratory work.",
    uk: "Розрахунки ідеалізовані: газ вважається ідеальним, розчини — розведеними, об’єми при змішуванні додаються, а pH + pOH = 14 справджується за 25 °C.",
    id: "The calculations are idealised: gases are treated as ideal, solutions as dilute, volumes as additive on mixing, and pH + pOH = 14 holds at 25 °C. Check the applicability conditions for precise laboratory work.",
    vi: "The calculations are idealised: gases are treated as ideal, solutions as dilute, volumes as additive on mixing, and pH + pOH = 14 holds at 25 °C. Check the applicability conditions for precise laboratory work.",
  },
};
