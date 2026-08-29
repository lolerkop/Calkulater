import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { inventoryTurnoverCopyEn } from './copy.en';
import { inventoryTurnoverCopyUk } from './copy.uk';
import { inventoryTurnoverCopyDe } from './copy.de';
import { inventoryTurnoverReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "inventory-turnover",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: inventoryTurnoverCopyEn, uk: inventoryTurnoverCopyUk, de: inventoryTurnoverCopyDe },
  referenceCases: inventoryTurnoverReferenceCases,
  publishedExample: { inputs: { cogs: 600000, mode: 'direct', avgInventory: 150000 }, expected: ["4,00 раз"] },
  presentation: {
    id: "inventory-turnover",
    name: "Калькулятор оборачиваемости запасов",
    slug: "inventory-turnover",
    fullPath: "/business/inventory-turnover/",
    category: "business",
    icon: "repeat",
    popularity: 42,
    isNew: false,
    shortDescription: "Оборачиваемость запасов и срок хранения по себестоимости продаж.",
    longDescription:
      "Показывает, сколько раз за период склад полностью обновился. Знаменатель здесь — средний запас, а числитель — именно СЕБЕСТОИМОСТЬ проданного, а не выручка: запасы учитываются по себестоимости, и деление выручки на них завысило бы оборачиваемость на всю торговую наценку. Срок хранения — обратная величина: 365 дней, делённые на оборачиваемость, дают среднее число дней, которое товар проводит на складе.",
    seoTitle: "Калькулятор оборачиваемости запасов — обороты и дни хранения",
    seoDescription: "Рассчитайте оборачиваемость запасов по себестоимости продаж и среднему запасу, а также средний срок хранения товара в днях.",
    h1: "Калькулятор оборачиваемости запасов",
    keywords: ["оборачиваемость запасов", "калькулятор оборачиваемости", "срок хранения товара", "себестоимость продаж"],
    fields: [
      { name: 'cogs', label: 'Себестоимость продаж за период, ₽', type: 'number', defaultValue: 600000, min: 0, step: 1000 },
      {
        name: 'mode', label: 'Средний запас', type: 'select', defaultValue: 'direct',
        options: [
          { value: 'direct', label: 'известен' },
          { value: 'beginEnd', label: 'считать по остаткам' },
        ],
      },
      { name: 'avgInventory', label: 'Средний запас, ₽', type: 'number', defaultValue: 150000, min: 0, step: 1000, showIf: { field: 'mode', equals: 'direct' } },
      { name: 'beginInventory', label: 'Запас на начало, ₽', type: 'number', defaultValue: 30000, min: 0, step: 1000, showIf: { field: 'mode', equals: 'beginEnd' } },
      { name: 'endInventory', label: 'Запас на конец, ₽', type: 'number', defaultValue: 20000, min: 0, step: 1000, showIf: { field: 'mode', equals: 'beginEnd' } },
    ],
    resultLabels: {
      "turns": "Оборачиваемость",
      "days": "Срок хранения",
      "avg": "Средний запас",
    },
    howToUse: ["Введите себестоимость проданного за период — не выручку.", "Укажите средний запас или остатки на начало и конец.", "Прочитайте оборачиваемость и срок хранения."],
    howItWorks: "Оборачиваемость = себестоимость продаж ÷ средний запас. Срок хранения = 365 ÷ оборачиваемость. По остаткам средний запас берётся как полусумма начального и конечного.",
    example: "Себестоимость 600 000 ₽ при среднем запасе 150 000 ₽ даёт оборачиваемость 4,00 раз и срок хранения 91,3 дней.",
    faq: [
      { q: "Почему в числителе себестоимость, а не выручка?", a: "Потому что запасы учитываются по себестоимости. Разделив на них выручку, вы добавили бы к оборачиваемости всю торговую наценку и получили бы завышенное число." },
      { q: "Как считать средний запас?", a: "Проще всего как полусумму остатков на начало и конец периода — этот режим есть в калькуляторе. Точнее выйдет по среднемесячным остаткам, если они у вас есть." },
      { q: "Что показывает срок хранения?", a: "Сколько дней в среднем товар лежит на складе до продажи. Это та же информация, что и оборачиваемость, но в днях — её удобнее сравнивать со сроком годности и с условиями поставки." },
      { q: "Какая оборачиваемость считается нормальной?", a: "Зависит от отрасли: у продуктов она в разы выше, чем у мебели. Ориентиров калькулятор не приводит — сравнивайте с собственной динамикой." },
    ],
    relatedCalculatorIds: ["contribution-margin", "break-even-calculator", "margin-calculator"],
  },
};
