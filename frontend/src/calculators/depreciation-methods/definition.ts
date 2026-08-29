import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { depreciationMethodsCopyEn } from './copy.en';
import { depreciationMethodsCopyUk } from './copy.uk';
import { depreciationMethodsCopyDe } from './copy.de';
import { depreciationMethodsReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "depreciation-methods",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: depreciationMethodsCopyEn, uk: depreciationMethodsCopyUk, de: depreciationMethodsCopyDe },
  referenceCases: depreciationMethodsReferenceCases,
  publishedExample: {
    inputs: { cost: 1200000, salvage: 200000, life: 5, method: 'straight', year: 1 },
    expected: ["200 000,00 ₽"],
  },
  presentation: {
    id: "depreciation-methods",
    name: "Калькулятор амортизации актива",
    slug: "amortizaciya-aktiva",
    fullPath: "/finance/amortizaciya-aktiva/",
    category: "finance",
    icon: "trending-up",
    popularity: 34,
    isNew: false,
    shortDescription: "Амортизация тремя методами с ликвидационной стоимостью и таблицей по годам.",
    longDescription:
      "Считает амортизацию линейным методом, двойным убывающим остатком и способом суммы чисел лет. Линейный делит амортизируемую базу поровну. Двойной убывающий берёт удвоенную линейную норму от остаточной стоимости и в первые годы списывает больше, но никогда не уводит книгу ниже ликвидационной стоимости — этот ограничитель и отличает метод от простой геометрической прогрессии. Сумма чисел лет распределяет базу пропорционально оставшемуся сроку: из пяти лет в первый списывается 5/15, в последний — 1/15. Таблица показывает все годы сразу.",
    seoTitle: "Калькулятор амортизации — линейный, убывающий остаток, сумма чисел лет",
    seoDescription: "Рассчитайте амортизацию актива тремя методами с учётом ликвидационной стоимости: за год, накопленную и остаточную стоимость с таблицей по годам.",
    h1: "Калькулятор амортизации актива",
    keywords: ["амортизация", "линейный метод амортизации", "убывающий остаток", "сумма чисел лет"],
    fields: [
      { name: 'cost', label: 'Первоначальная стоимость, ₽', type: 'number', defaultValue: 1200000, min: 0, step: 10000 },
      { name: 'salvage', label: 'Ликвидационная стоимость, ₽', type: 'number', defaultValue: 200000, min: 0, step: 10000 },
      { name: 'life', label: 'Срок службы, лет', type: 'number', defaultValue: 5, min: 1, max: 50, step: 1 },
      {
        name: 'method', label: 'Метод', type: 'select', defaultValue: 'straight',
        options: [
          { value: 'straight', label: 'линейный' },
          { value: 'ddb', label: 'двойной убывающий остаток' },
          { value: 'syd', label: 'сумма чисел лет' },
        ],
      },
      { name: 'year', label: 'Год расчёта', type: 'number', defaultValue: 1, min: 1, step: 1 },
    ],
    resultLabels: {
      "yearly": "Амортизация за год",
      "accumulated": "Накопленная амортизация",
      "book": "Остаточная стоимость",
      "base": "Амортизируемая база",
      "share": "Доля списанного",
      "table": "Амортизация по годам",
    },
    howToUse: [
      "Введите первоначальную стоимость и ту, по которой актив можно продать в конце срока.",
      "Срок службы задаётся в годах и определяет норму списания.",
      "Выберите метод: линейный ровный, убывающий остаток быстрее в начале, сумма чисел лет между ними.",
      "Год расчёта показывает нужную строку таблицы отдельно.",
    ],
    howItWorks: "Линейный: (стоимость − ликвидационная) ÷ срок. Двойной убывающий: 2 ÷ срок от остаточной, не ниже ликвидационной. Сумма чисел лет: база × оставшиеся годы ÷ сумму чисел лет.",
    example: "Актив за 1 200 000 ₽ с ликвидационной 200 000 ₽ на пять лет линейно списывается по 200 000 ₽ в год.",
    faq: [
      { q: "Чем двойной убывающий отличается от простой прогрессии?", a: "Ограничителем: списание никогда не уводит остаточную стоимость ниже ликвидационной. Без него книга стремилась бы к нулю и никогда его не достигала." },
      { q: "Зачем нужна ликвидационная стоимость?", a: "Это то, за что актив можно продать в конце срока. Амортизируется только разница между покупкой и ней — списывать до нуля то, что сохранит цену, неверно." },
      { q: "Какой метод выбрать?", a: "Линейный проще и ровнее, его берут по умолчанию. Ускоренные методы ближе к жизни для техники, которая теряет ценность в первые годы, и раньше уменьшают налоговую базу." },
      { q: "Это налоговый расчёт?", a: "Нет. Это арифметика трёх классических методов. Какой из них допустим в вашем учёте и с какими сроками — вопрос учётной политики и законодательства, а не калькулятора." },
    ],
    relatedCalculatorIds: ["car-depreciation", "inflation", "real-return"],
  },
};
