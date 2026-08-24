import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { newtonForceCopyEn } from './copy.en';
import { newtonForceCopyUk } from './copy.uk';
import { newtonForceReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "newton-force",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: newtonForceCopyEn, uk: newtonForceCopyUk },
  referenceCases: newtonForceReferenceCases,
  publishedExample: { inputs: { mode: 'F', m: 10, a: 2 }, expected: ["20 Н"] },
  presentation: {
    id: "newton-force",
    name: "Калькулятор силы по второму закону Ньютона",
    slug: "newton-force",
    fullPath: "/physics/newton-force/",
    category: "physics",
    icon: "atom",
    popularity: 47,
    isNew: false,
    shortDescription: "Сила, масса или ускорение по формуле F = m · a.",
    longDescription:
      "Решает второй закон Ньютона в любую сторону: по массе и ускорению находит силу, по силе и ускорению — массу, по силе и массе — ускорение. Делитель выбранного режима проверяется первым: при нулевом ускорении масса не определена, и деление вернуло бы бесконечность под видом ответа. Вес тела здесь тоже виден как частный случай — это сила, с которой на него действует тяжесть.",
    seoTitle: "Калькулятор силы — второй закон Ньютона F = ma",
    seoDescription: "Рассчитайте силу, массу или ускорение по второму закону Ньютона F = m · a в единицах СИ.",
    h1: "Калькулятор силы по второму закону Ньютона",
    keywords: ["калькулятор силы", "второй закон ньютона", "f = ma", "найти массу по силе"],
    fields: [
      {
        name: 'mode', label: 'Что нужно найти', type: 'select', defaultValue: 'F',
        options: [
          { value: 'F', label: 'силу' },
          { value: 'm', label: 'массу' },
          { value: 'a', label: 'ускорение' },
        ],
      },
      { name: 'm', label: 'Масса, кг', type: 'number', defaultValue: 10, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'F' } },
      { name: 'a', label: 'Ускорение, м/с²', type: 'number', defaultValue: 2, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'F' } },
      { name: 'F', label: 'Сила, Н', type: 'number', defaultValue: 50, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'm' } },
      { name: 'a2', label: 'Ускорение, м/с²', type: 'number', defaultValue: 5, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'm' } },
      { name: 'F2', label: 'Сила, Н', type: 'number', defaultValue: 12, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'a' } },
      { name: 'm2', label: 'Масса, кг', type: 'number', defaultValue: 4, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'a' } },
    ],
    resultLabels: {
      "force": "Сила",
      "mass": "Масса",
      "accel": "Ускорение",
      "weight": "Вес у поверхности Земли",
    },
    howToUse: ["Выберите, какую величину нужно найти.", "Введите две оставшиеся в единицах СИ.", "Прочитайте результат и сопутствующие величины."],
    howItWorks: "F = m · a, отсюда m = F ÷ a и a = F ÷ m. Вес у поверхности Земли считается как m · 9,80665.",
    example: "Масса 10 кг с ускорением 2 м/с² даёт силу 20 Н.",
    faq: [
      { q: "Чем сила отличается от веса?", a: "Вес — это сила тяжести, действующая на тело: m · g. Масса измеряется в килограммах и не меняется, вес измеряется в ньютонах и зависит от притяжения." },
      { q: "Почему нулевое ускорение не принимается при поиске массы?", a: "Масса равна силе, делённой на ускорение. При нулевом ускорении деление не имеет значения, и о массе ничего сказать нельзя." },
      { q: "Можно ли задать нулевое ускорение при поиске силы?", a: "Да. Тело, движущееся равномерно, не требует результирующей силы — это реальное состояние, а не ошибка ввода." },
      { q: "Учитывается ли трение?", a: "Нет. F = m · a связывает массу с РЕЗУЛЬТИРУЮЩЕЙ силой; чтобы учесть трение, вычтите его из приложенной силы самостоятельно." },
    ],
    relatedCalculatorIds: ["kinetic-energy", "work", "physics-power"],
  },
};
