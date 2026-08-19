import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { densityCopyEn } from './copy.en';
import { densityCopyUk } from './copy.uk';
import { densityReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "density",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: densityCopyEn, uk: densityCopyUk },
  referenceCases: densityReferenceCases,
  publishedExample: { inputs: { mode: 'rho', m: 1000, V: 1 }, expected: ["1 000 кг/м³"] },
  presentation: {
    id: "density",
    name: "Калькулятор плотности",
    slug: "density",
    fullPath: "/physics/density/",
    category: "physics",
    icon: "layers",
    popularity: 45,
    isNew: true,
    shortDescription: "Плотность, масса или объём вещества по формуле ρ = m ÷ V.",
    longDescription:
      "Связывает массу, объём и плотность и решает соотношение в любую сторону: по массе и объёму находит плотность, по плотности и объёму — массу, которая понадобится для расчёта нагрузки. Это не перевод единиц: страница конвертера плотности переводит кг/м³ в г/см³ и обратно, а здесь считается сама величина по физическому определению. Обе задачи встречаются вместе, но это разные вопросы.",
    seoTitle: "Калькулятор плотности — ρ = m ÷ V",
    seoDescription: "Рассчитайте плотность вещества, его массу или объём по формуле ρ = m ÷ V в единицах СИ.",
    h1: "Калькулятор плотности",
    keywords: ["калькулятор плотности", "плотность вещества", "масса по плотности", "ро = м/в"],
    fields: [
      {
        name: 'mode', label: 'Что нужно найти', type: 'select', defaultValue: 'rho',
        options: [
          { value: 'rho', label: 'плотность' },
          { value: 'm', label: 'массу' },
          { value: 'V', label: 'объём' },
        ],
      },
      { name: 'm', label: 'Масса, кг', type: 'number', defaultValue: 1000, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'rho' } },
      { name: 'V', label: 'Объём, м³', type: 'number', defaultValue: 1, min: 0, step: 0.01, showIf: { field: 'mode', equals: 'rho' } },
      { name: 'rho', label: 'Плотность, кг/м³', type: 'number', defaultValue: 2700, min: 0, step: 1, showIf: { field: 'mode', equals: 'm' } },
      { name: 'V2', label: 'Объём, м³', type: 'number', defaultValue: 0.5, min: 0, step: 0.01, showIf: { field: 'mode', equals: 'm' } },
      { name: 'm2', label: 'Масса, кг', type: 'number', defaultValue: 7850, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'V' } },
      { name: 'rho2', label: 'Плотность, кг/м³', type: 'number', defaultValue: 7850, min: 0, step: 1, showIf: { field: 'mode', equals: 'V' } },
    ],
    resultLabels: {
      "density": "Плотность",
      "mass": "Масса",
      "volume": "Объём",
      "gcm3": "В граммах на кубический сантиметр",
    },
    howToUse: ["Выберите искомую величину.", "Введите две оставшиеся в единицах СИ.", "Прочитайте результат — плотность показана и в г/см³."],
    howItWorks: "ρ = m ÷ V, отсюда m = ρ · V и V = m ÷ ρ. Один килограмм на кубометр равен 0,001 г/см³.",
    example: "Тонна воды занимает кубометр, значит её плотность 1000 кг/м³, то есть 1 г/см³.",
    faq: [
      { q: "Чем эта страница отличается от конвертера плотности?", a: "Конвертер переводит одну единицу плотности в другую. Здесь плотность вычисляется из массы и объёма по определению — это разные задачи, и обычно они возникают одна за другой." },
      { q: "Почему плотность показана ещё и в г/см³?", a: "Потому что справочники по материалам чаще приводят её именно так: у воды 1 г/см³ читается легче, чем 1000 кг/м³." },
      { q: "Можно ли посчитать массу детали по её объёму?", a: "Да. Выберите режим «массу», задайте плотность материала из справочника и объём — получите массу заготовки." },
      { q: "Учитываются ли пустоты и пористость?", a: "Нет. Считается средняя плотность тела: масса, делённая на полный занимаемый объём, включая поры." },
    ],
    relatedCalculatorIds: ["convert-density", "pressure", "newton-force"],
  },
};
