// Какой балл нужен на экзамене для желаемой итоговой.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { finalGradeCopyEn } from './copy.en';
import { finalGradeCopyUk } from './copy.uk';
import { finalGradeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "final-grade",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: finalGradeCopyEn, uk: finalGradeCopyUk },
  referenceCases: finalGradeReferenceCases,
  publishedExample: { inputs: { current: 78, target: 85, weight: 30 }, expected: ["101,33%"] },
  presentation: {
    id: "final-grade",
    name: "Калькулятор нужной оценки",
    slug: "final-grade",
    fullPath: "/education/final-grade/",
    category: "education",
    icon: "graduation-cap",
    popularity: 31,
    isNew: true,
    shortDescription: "Какой балл нужен на экзамене, чтобы выйти на цель.",
    longDescription:
      "Считает от обратного: текущая оценка вносит свою долю, экзамен — оставшуюся, и разница показывает, что должен дать экзамен. Результат выше ста — это ответ, а не ошибка: он говорит, что цель одним экзаменом уже не берётся, и число сообщает, насколько именно.",
    seoTitle: "Калькулятор нужной оценки — какой балл нужен на экзамене",
    seoDescription:
      "Узнайте, какой балл нужен на экзамене для желаемой итоговой оценки при известных текущей оценке и весе экзамена.",
    h1: "Калькулятор нужной оценки",
    keywords: ["нужная оценка", "балл на экзамене", "вес экзамена"],
    fields: [
      { name: 'current', label: 'Текущая оценка, %', type: 'number', defaultValue: 78, min: 0, max: 100, step: 1 },
      { name: 'target', label: 'Желаемая итоговая, %', type: 'number', defaultValue: 85, min: 0, max: 100, step: 1 },
      { name: 'weight', label: 'Вес экзамена, %', type: 'number', defaultValue: 30, min: 0, max: 100, step: 5 },
    ],
    resultLabels: { result: "Нужный балл", contribution: "Вклад текущей оценки", weight: "Вес экзамена" },
    howToUse: ["Введите текущую оценку в процентах.", "Введите итоговую оценку, к которой стремитесь.", "Укажите, какой вес имеет экзамен."],
    howItWorks: "Нужный балл = (цель − текущая × (1 − вес)) ÷ вес, где вес взят долей.",
    example: "При 78 процентах и весе экзамена 30 выход на 85 потребовал бы 101,33 — больше, чем экзамен может дать.",
    faq: [
      { q: "Что означает вес экзамена?", a: "Долю, которую экзамен занимает в итоговой оценке. Остальное приходится на уже сделанную работу, и вместе они дают сто процентов." },
      { q: "Почему ответ бывает больше ста?", a: "Потому что цель этим экзаменом уже недостижима. Число сохраняется, чтобы был виден размер разрыва." },
      { q: "Текущая оценка — это процент?", a: "Да. Если курс оценивается по другой шкале, переведите её сначала: расчёт целиком ведётся в процентах." },
      { q: "Переводится ли результат в оценку?", a: "Нет. Шкалы различаются от школы к школе и от страны к стране, и без справочника любой перевод был бы выдумкой." },
    ],
    relatedCalculatorIds: ["test-score-percent", "reading-speed", "percent-calculator"],
  },
};
