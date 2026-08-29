import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { leverMomentCopyEn } from './copy.en';
import { leverMomentCopyUk } from './copy.uk';
import { leverMomentCopyDe } from './copy.de';
import { leverMomentReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "lever-moment",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: leverMomentCopyEn, uk: leverMomentCopyUk, de: leverMomentCopyDe },
  referenceCases: leverMomentReferenceCases,
  publishedExample: { inputs: { mode: 'force2', f1: 100, d1: 2, d2: 0.5, f2: 400 }, expected: ["400 Н"] },
  presentation: {
    id: "lever-moment",
    name: "Калькулятор рычага и выигрыша в силе",
    slug: "rychag-i-vyigrysh-v-sile",
    fullPath: "/physics/rychag-i-vyigrysh-v-sile/",
    category: "physics",
    icon: "move-right",
    popularity: 31,
    isNew: false,
    shortDescription: "Равновесие рычага: сила на втором плече и выигрыш в силе.",
    longDescription:
      "Считает равновесие рычага: какая сила нужна с другой стороны опоры и во сколько раз рычаг её умножит. Отличие от момента силы существенное — та страница считает момент ОДНОЙ силы через плечо и угол, здесь же связаны две силы на двух плечах. Выигрыш в силе не бесплатен: во столько же раз длиннее путь, который проходит длинное плечо. Рычаг не создаёт работу, он только перераспределяет её между силой и расстоянием, и ожидание обратного — самое частое заблуждение о нём.",
    seoTitle: "Калькулятор рычага — сила на плече и выигрыш в силе",
    seoDescription: "Рассчитайте равновесие рычага: силу на втором плече или длину плеча по правилу F₁·d₁ = F₂·d₂ и выигрыш в силе.",
    h1: "Калькулятор рычага и выигрыша в силе",
    keywords: ["правило рычага", "выигрыш в силе", "равновесие рычага", "f1d1 f2d2"],
    fields: [
      {
        name: 'mode', label: 'Что найти', type: 'select', defaultValue: 'force2',
        options: [
          { value: 'force2', label: 'силу на втором плече' },
          { value: 'distance2', label: 'длину второго плеча' },
        ],
      },
      { name: 'f1', label: 'Сила на первом плече, Н', type: 'number', defaultValue: 100, min: 0, step: 10 },
      { name: 'd1', label: 'Первое плечо, м', type: 'number', defaultValue: 2, min: 0, step: 0.1 },
      { name: 'd2', label: 'Второе плечо, м', type: 'number', defaultValue: 0.5, min: 0, step: 0.1 },
      { name: 'f2', label: 'Сила на втором плече, Н', type: 'number', defaultValue: 400, min: 0, step: 10 },
    ],
    resultLabels: {
      "force2": "Сила на втором плече",
      "distance2": "Второе плечо",
      "advantage": "Выигрыш в силе",
      "moment": "Момент первой силы",
      "arm1": "Первое плечо",
      "arm2": "Второе плечо",
    },
    howToUse: [
      "Выберите, что ищете: силу на втором плече или его длину.",
      "Введите силу и плечо с первой стороны опоры.",
      "Заполните известную величину со второй стороны.",
      "Плечи меряются от опоры до точки приложения силы, а не до конца рычага.",
    ],
    howItWorks: "Рычаг в равновесии, когда моменты сил равны: F₁·d₁ = F₂·d₂. Выигрыш в силе равен отношению плеч.",
    example: "Сила 100 Н на плече 2 м уравновешивается силой 400 Н на плече 0,5 м — выигрыш в четыре раза.",
    faq: [
      { q: "Чем это отличается от момента силы?", a: "Момент силы — величина одной силы на своём плече, с учётом угла. Здесь считается равновесие двух сил на двух плечах и отношение между ними." },
      { q: "Рычаг создаёт энергию?", a: "Нет. Во сколько раз выигрываешь в силе, во столько же проигрываешь в пути. Работа остаётся той же, меняется только её распределение." },
      { q: "Откуда меряются плечи?", a: "От опоры до точки приложения силы, по перпендикуляру к линии её действия. Длина самого рычага за точкой приложения роли не играет." },
      { q: "Что если силы приложены с одной стороны?", a: "Тогда это не равновесие двух плеч, а сумма моментов. Расчёт описывает классическую схему с опорой между силами." },
    ],
    relatedCalculatorIds: ["physics-torque", "newton-force", "work"],
  },
};
