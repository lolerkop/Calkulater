import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { scaleModelCopyEn } from './copy.en';
import { scaleModelCopyUk } from './copy.uk';
import { scaleModelReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "scale-model",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: scaleModelCopyEn, uk: scaleModelCopyUk },
  referenceCases: scaleModelReferenceCases,
  publishedExample: { inputs: { mode: 'toModel', real: 4350, model: 50, scale: 87 }, expected: ["50 мм"] },
  presentation: {
    id: "scale-model",
    name: "Калькулятор масштаба модели",
    slug: "masshtab-modeli",
    fullPath: "/converters/masshtab-modeli/",
    category: "converters",
    icon: "shapes",
    popularity: 30,
    isNew: true,
    shortDescription: "Пересчёт размеров между натурой и моделью при масштабе 1:N.",
    longDescription:
      "Пересчитывает размеры в три стороны: каким выйдет размер модели, какой размер был у натуры и в каком масштабе сделана уже готовая пара размеров. Знаменатель масштаба здесь первоклассный вход в словаре моделиста — 1:87, 1:43, 1:72, — а не безымянный член пропорции: переворачивать её в уме не нужно. Ответ приходит в миллиметрах, а найденный масштаб печатается привычной записью «1:N».",
    seoTitle: "Калькулятор масштаба модели — 1:87, 1:43, 1:72",
    seoDescription: "Переведите размер натуры в размер модели и обратно при любом масштабе, а по паре размеров найдите сам масштаб.",
    h1: "Калькулятор масштаба модели",
    keywords: ["масштаб модели", "1:87", "1:43", "перевод масштаба", "размер модели"],
    fields: [
      {
        name: 'mode', label: 'Что найти', type: 'select', defaultValue: 'toModel',
        options: [
          { value: 'toModel', label: 'размер модели' },
          { value: 'toReal', label: 'размер натуры' },
          { value: 'findScale', label: 'масштаб' },
        ],
      },
      { name: 'real', label: 'Размер натуры, мм', type: 'number', defaultValue: 4350, min: 0, step: 10 },
      { name: 'model', label: 'Размер модели, мм', type: 'number', defaultValue: 50, min: 0, step: 1 },
      { name: 'scale', label: 'Знаменатель масштаба, 1:N', type: 'number', defaultValue: 87, min: 0, step: 1 },
    ],
    resultLabels: {
      "model": "Размер модели",
      "real": "Размер натуры",
      "scale": "Масштаб",
      "times": "Натура больше модели во столько раз",
    },
    howToUse: [
      "Выберите, что нужно найти: размер модели, размер натуры или сам масштаб.",
      "Вводите размеры в миллиметрах — так подписаны чертежи и так измеряют модели.",
      "Знаменатель масштаба — второе число записи: у 1:87 это 87.",
      "Поле решаемой величины подписано «вычисляется» и заполняется расчётом.",
    ],
    howItWorks: "Размер модели = натура ÷ знаменатель; размер натуры = модель × знаменатель; масштаб = натура ÷ модель.",
    example: "Вагон длиной 4350 мм в масштабе 1:87 даёт модель 50 мм.",
    faq: [
      { q: "Что означает вторая цифра в записи 1:87?", a: "Во сколько раз модель меньше натуры. При 1:87 каждый миллиметр модели соответствует 87 миллиметрам настоящего предмета." },
      { q: "Чем это отличается от калькулятора пропорции?", a: "Пропорция решает безымянное a : b = c : d, и знаменатель приходится ставить самому. Здесь масштаб — отдельное поле, ответ идёт в миллиметрах, а найденный масштаб выводится записью «1:N»." },
      { q: "Масштаб получился дробным — это ошибка?", a: "Нет. Пара произвольных размеров редко даёт круглое число: 1:12,5 означает, что натура ровно в 12,5 раза больше. Для стандартных линеек выбирайте ближайший принятый масштаб." },
      { q: "Работает ли расчёт для площадей и объёмов?", a: "Поля считают линейные размеры. Площадь уменьшается в N², объём — в N³, поэтому подставлять сюда квадратные метры нельзя." },
    ],
    relatedCalculatorIds: ["proportion", "convert-length", "modular-scale"],
  },
};
