import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { print3dCostCopyEn } from './copy.en';
import { print3dCostCopyUk } from './copy.uk';
import { print3dCostReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "print-3d-cost",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: print3dCostCopyEn, uk: print3dCostCopyUk },
  referenceCases: print3dCostReferenceCases,
  publishedExample: {
    inputs: { grams: 85, spoolPrice: 1800, spoolWeight: 1000, hours: 6.5, powerW: 120, kwhPrice: 5.5, wearPerHour: 0, markupPct: 0 },
    expected: ["157,29 ₽"],
  },
  presentation: {
    id: "print-3d-cost",
    name: "Калькулятор стоимости 3D-печати",
    slug: "print-3d-cost",
    fullPath: "/household/print-3d-cost/",
    category: "household",
    icon: "layers",
    popularity: 38,
    isNew: true,
    shortDescription: "Пластик, электричество и амортизация принтера в себестоимости одной детали.",
    longDescription:
      "Считает, во сколько обходится напечатанная деталь. Пластик берётся не катушками, а долей от катушки: цена грамма выводится из цены и веса катушки, поэтому деталь стоит ровно столько, сколько весит. Электричество считается от мощности принтера и времени печати, амортизация — за час работы, и обе величины задаются вручную, потому что зависят от конкретного принтера и тарифа. Наценка применяется ко всей себестоимости, а не к одному пластику: иначе она не покрывала бы часы, которые принтер занят.",
    seoTitle: "Калькулятор стоимости 3D-печати — себестоимость детали",
    seoDescription: "Рассчитайте себестоимость 3D-печати: расход пластика, электричество, амортизацию принтера и наценку на готовую деталь.",
    h1: "Калькулятор стоимости 3D-печати",
    keywords: ["стоимость 3D-печати", "себестоимость детали", "расход пластика", "калькулятор 3D-принтера"],
    fields: [
      { name: 'grams', label: 'Вес детали, г', type: 'number', defaultValue: 85, min: 0, step: 1 },
      { name: 'spoolPrice', label: 'Цена катушки, ₽', type: 'number', defaultValue: 1800, min: 0, step: 10 },
      { name: 'spoolWeight', label: 'Вес катушки, г', type: 'number', defaultValue: 1000, min: 0, step: 50 },
      { name: 'hours', label: 'Время печати, ч', type: 'number', defaultValue: 6.5, min: 0, step: 0.5 },
      { name: 'powerW', label: 'Мощность принтера, Вт', type: 'number', defaultValue: 120, min: 0, step: 10 },
      { name: 'kwhPrice', label: 'Цена киловатт-часа, ₽', type: 'number', defaultValue: 5.5, min: 0, step: 0.1 },
      { name: 'wearPerHour', label: 'Амортизация за час, ₽', type: 'number', defaultValue: 0, min: 0, step: 1, optional: true },
      { name: 'markupPct', label: 'Наценка, %', type: 'number', defaultValue: 0, min: 0, step: 1, optional: true },
    ],
    resultLabels: {
      "total": "Себестоимость печати",
      "material": "Пластик",
      "energy": "Электричество",
      "wear": "Амортизация принтера",
      "markup": "Наценка",
      "kwh": "Израсходовано энергии",
      "gramPrice": "Цена грамма пластика",
    },
    howToUse: [
      "Введите вес детали — слайсер показывает его вместе со временем печати.",
      "Укажите цену и вес катушки, чтобы калькулятор вывел цену грамма.",
      "Задайте мощность принтера и цену киловатт-часа по своему тарифу.",
      "Добавьте амортизацию и наценку, если считаете стоимость для заказчика.",
    ],
    howItWorks:
      "Пластик = вес детали × (цена катушки ÷ вес катушки). Электричество = мощность ÷ 1000 × часы × цена киловатт-часа. Амортизация = ставка за час × часы. Наценка применяется к их сумме.",
    example: "Деталь 85 г из катушки 1800 ₽ за килограмм при 6,5 часа печати обходится в 157,29 ₽ вместе с электричеством.",
    faq: [
      { q: "Почему цена грамма не вводится напрямую?", a: "Потому что на ценнике всегда цена катушки. Калькулятор делит её на вес катушки сам, и вы не ошибётесь, пересчитывая килограммы в граммы вручную." },
      { q: "Какую мощность принтера указывать?", a: "Среднюю потребляемую за печать, а не пиковую. Для настольного FDM-принтера с подогревом стола это обычно 100–150 Вт; точное значение есть в паспорте." },
      { q: "Что относить к амортизации?", a: "Износ сопла, ремня и стола, поделённый на ресурс в часах. Это ваша собственная оценка, поэтому поле необязательное и по умолчанию пустое." },
      { q: "Наценка считается от пластика?", a: "Нет, от всей себестоимости вместе с электричеством и амортизацией. Наценка только на пластик не покрывала бы часы, которые принтер занят." },
      { q: "Учитывается ли брак?", a: "Нет. Если деталь печатается со второй попытки, введите суммарный вес и суммарное время всех попыток." },
    ],
    relatedCalculatorIds: ["electricity-usage", "price-per-unit", "workday-cost"],
  },
};
