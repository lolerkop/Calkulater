import type { CalculatorDef } from '../lib/types';
import { currencies } from './currencies';

const currencyOptions = currencies.map((c) => ({
  value: c.code,
  label: `${c.code} — ${c.name}`,
}));

const FIN_DISCLAIMER =
  'Расчет носит справочный характер и не является финансовой рекомендацией.';
const SPORT_DISCLAIMER =
  'Расчет является ориентировочным и не заменяет консультацию специалиста.';
const CURR_DISCLAIMER =
  'Курсы валют демонстрационные и могут отличаться от банковских и биржевых.';
const BUILD_DISCLAIMER =
  'Расчет является ориентировочным. Фактический расход зависит от материалов, основания и способа укладки.';

export const calculators: CalculatorDef[] = [
  // ── ФИНАНСЫ ──────────────────────────────────────────────────────
  {
    id: 'credit-calculator',
    name: 'Кредитный калькулятор',
    slug: 'credit-calculator',
    fullPath: '/finance/credit-calculator/',
    category: 'finance',
    icon: 'credit-card',
    popularity: 95,
    shortDescription:
      'Рассчитайте ежемесячный платеж, общую переплату и сумму процентов по кредиту.',
    longDescription:
      'Кредитный калькулятор поможет оценить нагрузку на бюджет ещё до похода в банк. Поддерживаются аннуитетная и дифференцированная схемы платежей, выбор срока в месяцах или годах.',
    seoTitle: 'Кредитный калькулятор онлайн — расчет платежа и переплаты',
    seoDescription:
      'Бесплатный кредитный калькулятор: рассчитайте ежемесячный платеж, переплату и проценты. Аннуитет или дифференцированный платеж.',
    h1: 'Кредитный калькулятор',
    keywords: ['кредит', 'калькулятор кредита', 'аннуитет', 'переплата', 'проценты'],
    fields: [
      { name: 'amount', label: 'Сумма кредита', type: 'number', defaultValue: 500000, unit: '₽', min: 1000 },
      { name: 'term', label: 'Срок', type: 'number', defaultValue: 5, min: 1 },
      {
        name: 'termUnit', label: 'Единица срока', type: 'toggle', defaultValue: 'years',
        options: [{ value: 'years', label: 'Лет' }, { value: 'months', label: 'Месяцев' }],
      },
      { name: 'rate', label: 'Процентная ставка', type: 'number', defaultValue: 14, unit: '% годовых', step: 0.1 },
      {
        name: 'type', label: 'Тип платежа', type: 'toggle', defaultValue: 'annuity',
        options: [{ value: 'annuity', label: 'Аннуитетный' }, { value: 'differentiated', label: 'Дифференцированный' }],
      },
    ],
    resultLabels: {
      monthly: 'Ежемесячный платеж',
      total: 'Общая сумма выплат',
      overpay: 'Переплата',
      interest: 'Сумма процентов',
    },
    howToUse: [
      'Введите сумму, которую планируете взять в кредит.',
      'Укажите срок и выберите единицу — месяцы или годы.',
      'Введите процентную ставку, которую предлагает банк.',
      'Выберите схему платежа: аннуитетная или дифференцированная.',
    ],
    howItWorks:
      'При аннуитетной схеме платеж рассчитывается по классической формуле с равными суммами на весь срок. При дифференцированной — основной долг гасится равными долями, а проценты начисляются на остаток.',
    example:
      'Кредит 500 000 ₽ на 5 лет под 14% годовых при аннуитете даст ежемесячный платеж около 11 634 ₽ и общую переплату около 198 037 ₽.',
    faq: [
      { q: 'Что выгоднее — аннуитет или дифференцированный платеж?', a: 'При одинаковой ставке и сроке дифференцированный платеж даёт меньшую переплату, но первые платежи выше. Аннуитет удобнее для планирования бюджета.' },
      { q: 'Учитываются ли страховки в расчете?', a: 'Нет, калькулятор считает базовый платеж. Реальный платеж в банке может быть выше за счёт страхования жизни и имущества.' },
      { q: 'Можно ли вводить срок в месяцах?', a: 'Да, переключателем "Единица срока" вы можете задать срок в месяцах или годах.' },
    ],
    relatedCalculatorIds: ['mortgage-calculator', 'deposit-calculator', 'compound-interest'],
    disclaimer: FIN_DISCLAIMER,
  },
  {
    id: 'deposit-calculator',
    name: 'Калькулятор вклада',
    slug: 'deposit-calculator',
    fullPath: '/finance/deposit-calculator/',
    category: 'finance',
    icon: 'piggy-bank',
    popularity: 80,
    shortDescription: 'Посчитайте итоговую сумму вклада с учётом капитализации и пополнений.',
    longDescription:
      'Калькулятор вклада учитывает капитализацию процентов с заданной периодичностью и регулярные пополнения. Подходит для накопительных счетов и срочных вкладов.',
    seoTitle: 'Калькулятор вклада онлайн — расчет процентов и дохода',
    seoDescription:
      'Калькулятор вклада с капитализацией и пополнениями. Узнайте итоговую сумму и доход по вкладу за выбранный срок.',
    h1: 'Калькулятор вклада',
    keywords: ['вклад', 'депозит', 'капитализация', 'проценты'],
    fields: [
      { name: 'amount', label: 'Сумма вклада', type: 'number', defaultValue: 100000, unit: '₽' },
      { name: 'months', label: 'Срок, месяцев', type: 'number', defaultValue: 12, min: 1 },
      { name: 'rate', label: 'Годовая ставка', type: 'number', defaultValue: 12, unit: '%', step: 0.1 },
      {
        name: 'capitalization', label: 'Капитализация', type: 'toggle', defaultValue: 'yes',
        options: [{ value: 'yes', label: 'Есть' }, { value: 'no', label: 'Нет' }],
      },
      {
        name: 'capPeriod', label: 'Период капитализации', type: 'select', defaultValue: 'month',
        options: [
          { value: 'month', label: 'Ежемесячно' },
          { value: 'quarter', label: 'Ежеквартально' },
          { value: 'year', label: 'Ежегодно' },
        ],
        showIf: { field: 'capitalization', equals: 'yes' },
      },
      { name: 'topUp', label: 'Регулярное пополнение в месяц', type: 'number', defaultValue: 0, unit: '₽' },
    ],
    resultLabels: {
      finalAmount: 'Итоговая сумма',
      interest: 'Начисленные проценты',
      topUps: 'Сумма пополнений',
    },
    howToUse: [
      'Введите сумму, которую хотите положить на вклад.',
      'Укажите срок в месяцах и годовую ставку.',
      'Выберите наличие капитализации и её периодичность.',
      'Если вклад пополняемый — задайте сумму ежемесячного пополнения.',
    ],
    howItWorks:
      'При капитализации проценты начисляются на текущую сумму вклада с заданным периодом, увеличивая базу для следующего расчета. Без капитализации проценты считаются на исходную сумму.',
    example:
      'Вклад 100 000 ₽ на 12 месяцев под 12% с ежемесячной капитализацией даст около 12 683 ₽ дохода — на ~683 ₽ больше, чем без капитализации.',
    faq: [
      { q: 'Что такое эффективная ставка?', a: 'Это годовая ставка с учётом капитализации. При ежемесячной капитализации она всегда выше номинальной.' },
      { q: 'Учитывается ли налог на доход?', a: 'Нет, налог на проценты по вкладам в расчёте не учитывается.' },
    ],
    relatedCalculatorIds: ['compound-interest', 'credit-calculator', 'mortgage-calculator'],
    disclaimer: FIN_DISCLAIMER,
  },
  {
    id: 'compound-interest',
    name: 'Калькулятор сложного процента',
    slug: 'compound-interest',
    fullPath: '/finance/compound-interest/',
    category: 'finance',
    icon: 'trending-up',
    popularity: 70,
    shortDescription: 'Оцените эффект сложного процента на длительной дистанции.',
    longDescription:
      'Сложный процент — основа долгосрочного инвестирования. Калькулятор показывает, как растёт капитал при реинвестировании дохода и регулярных пополнениях.',
    seoTitle: 'Калькулятор сложного процента — расчет инвестиций',
    seoDescription:
      'Онлайн-калькулятор сложного процента с регулярными пополнениями. Рассчитайте рост капитала по годам.',
    h1: 'Калькулятор сложного процента',
    keywords: ['сложный процент', 'инвестиции', 'капитализация'],
    fields: [
      { name: 'principal', label: 'Начальная сумма', type: 'number', defaultValue: 100000, unit: '₽' },
      { name: 'rate', label: 'Годовая ставка', type: 'number', defaultValue: 10, unit: '%', step: 0.1 },
      { name: 'years', label: 'Срок, лет', type: 'number', defaultValue: 10, min: 1 },
      { name: 'topUp', label: 'Регулярное пополнение', type: 'number', defaultValue: 5000, unit: '₽' },
      {
        name: 'frequency', label: 'Периодичность пополнения', type: 'select', defaultValue: 'month',
        options: [
          { value: 'month', label: 'Ежемесячно' },
          { value: 'quarter', label: 'Ежеквартально' },
          { value: 'year', label: 'Ежегодно' },
        ],
      },
    ],
    resultLabels: {
      finalAmount: 'Итоговая сумма',
      invested: 'Внесённая сумма',
      profit: 'Прибыль',
    },
    howToUse: [
      'Введите стартовый капитал.',
      'Укажите годовую ставку доходности.',
      'Задайте срок инвестирования в годах.',
      'При необходимости укажите регулярные пополнения и их периодичность.',
    ],
    howItWorks:
      'Капитал растёт за счёт начисления процентов на уже накопленную сумму. С каждым новым периодом база увеличивается, и доход тоже.',
    example:
      'Начальная сумма 100 000 ₽ с пополнением 5 000 ₽ в месяц под 10% годовых за 10 лет вырастает примерно до 1,3 млн ₽.',
    faq: [
      { q: 'Чем сложный процент отличается от простого?', a: 'При простом проценте доход начисляется только на исходную сумму, при сложном — на сумму с уже начисленным доходом.' },
      { q: 'Какая ставка реалистична?', a: 'Зависит от инструмента: депозиты 5-15%, акции исторически давали 7-10% в долларах. Используйте калькулятор для разных сценариев.' },
    ],
    relatedCalculatorIds: ['deposit-calculator', 'credit-calculator', 'mortgage-calculator'],
    disclaimer: FIN_DISCLAIMER,
  },
  {
    id: 'mortgage-calculator',
    name: 'Ипотечный калькулятор',
    slug: 'mortgage-calculator',
    fullPath: '/finance/mortgage-calculator/',
    category: 'finance',
    icon: 'home',
    popularity: 90,
    shortDescription: 'Рассчитайте платеж и переплату по ипотеке с учётом первоначального взноса.',
    longDescription:
      'Ипотечный калькулятор показывает ежемесячный платеж, переплату и общую стоимость квартиры с учётом первоначального взноса. Поддерживается аннуитет и дифференцированная схема.',
    seoTitle: 'Ипотечный калькулятор онлайн — расчет платежа',
    seoDescription:
      'Ипотечный калькулятор: ежемесячный платеж, переплата и общая стоимость. Аннуитет или дифференцированный платеж.',
    h1: 'Ипотечный калькулятор',
    keywords: ['ипотека', 'ипотечный калькулятор', 'первоначальный взнос'],
    fields: [
      { name: 'price', label: 'Стоимость недвижимости', type: 'number', defaultValue: 8000000, unit: '₽' },
      { name: 'downPayment', label: 'Первоначальный взнос', type: 'number', defaultValue: 1600000, unit: '₽' },
      { name: 'years', label: 'Срок, лет', type: 'number', defaultValue: 20, min: 1 },
      { name: 'rate', label: 'Ставка', type: 'number', defaultValue: 13, unit: '% годовых', step: 0.1 },
      {
        name: 'type', label: 'Тип платежа', type: 'toggle', defaultValue: 'annuity',
        options: [{ value: 'annuity', label: 'Аннуитетный' }, { value: 'differentiated', label: 'Дифференцированный' }],
      },
    ],
    resultLabels: {
      loanAmount: 'Сумма кредита',
      monthly: 'Ежемесячный платеж',
      overpay: 'Переплата',
      total: 'Общая стоимость',
    },
    howToUse: [
      'Введите полную стоимость квартиры или дома.',
      'Укажите сумму первоначального взноса.',
      'Задайте срок ипотеки в годах и процентную ставку.',
      'Выберите тип платежа — большинство банков работает по аннуитету.',
    ],
    howItWorks:
      'Сумма кредита = стоимость недвижимости минус первоначальный взнос. Платеж рассчитывается по выбранной схеме и заданной ставке.',
    example:
      'Квартира 8 000 000 ₽, взнос 1 600 000 ₽, срок 20 лет под 13% — ежемесячный платеж около 75 008 ₽, переплата около 11,6 млн ₽.',
    faq: [
      { q: 'Зачем нужен первоначальный взнос?', a: 'Банки требуют от 10-20% от стоимости. Чем больше взнос — тем меньше переплата и ниже риск отказа.' },
      { q: 'Можно ли учесть досрочное погашение?', a: 'Сейчас нет — калькулятор считает классический график. Учет досрочки появится в следующих версиях.' },
    ],
    relatedCalculatorIds: ['credit-calculator', 'deposit-calculator', 'compound-interest'],
    disclaimer: FIN_DISCLAIMER,
  },

  {
    id: 'income-tax-calculator',
    name: 'Калькулятор НДФЛ 2025',
    slug: 'income-tax-calculator',
    fullPath: '/finance/income-tax-calculator/',
    category: 'finance',
    icon: 'percent',
    popularity: 92,
    shortDescription:
      'Расчёт налога на доходы физических лиц по прогрессивной шкале 2025 года.',
    longDescription:
      'Калькулятор НДФЛ учитывает действующую с 2025 года прогрессивную шкалу: 13% при доходе до 2,4 млн ₽ в год, 15% — до 5 млн, 18% — до 20 млн, 20% — до 50 млн и 22% сверх. Поддерживает расчёт за месяц или год, а также режим фиксированной ставки (например, 30% для нерезидентов).',
    seoTitle: 'Калькулятор НДФЛ 2025 онлайн — прогрессивная шкала 13/15/18/20/22%',
    seoDescription:
      'Бесплатный калькулятор НДФЛ по шкале 2025 года. Считает налог с зарплаты за месяц и год, поддерживает обратный расчёт «на руки» и фиксированные ставки.',
    h1: 'Калькулятор НДФЛ 2025',
    keywords: ['ндфл', 'налог на доходы', 'прогрессивная шкала', '13 процентов', '15 процентов', 'налог с зарплаты'],
    fields: [
      { name: 'amount', label: 'Сумма дохода', type: 'number', defaultValue: 150000, unit: '₽', min: 0 },
      {
        name: 'period', label: 'Период', type: 'toggle', defaultValue: 'month',
        options: [{ value: 'month', label: 'За месяц' }, { value: 'year', label: 'За год' }],
      },
      {
        name: 'direction', label: 'Что введено', type: 'toggle', defaultValue: 'gross',
        options: [{ value: 'gross', label: 'Начислено' }, { value: 'net', label: 'На руки' }],
      },
      {
        name: 'mode', label: 'Режим расчёта', type: 'toggle', defaultValue: 'progressive',
        options: [{ value: 'progressive', label: 'Прогрессивная 2025' }, { value: 'fixed', label: 'Фиксированная' }],
      },
      {
        name: 'rate', label: 'Фиксированная ставка', type: 'number', defaultValue: 13, unit: '%', min: 0, max: 100, step: 0.1,
        showIf: { field: 'mode', equals: 'fixed' },
      },
    ],
    resultLabels: {
      tax: 'Сумма налога',
      gross: 'Начислено',
      net: 'На руки',
      effective: 'Эффективная ставка',
    },
    howToUse: [
      'Введите сумму дохода — за месяц или за год.',
      'Укажите, что именно введено: «Начислено» (gross) или «На руки» (net).',
      'Выберите режим — прогрессивная шкала 2025 года или фиксированная ставка.',
      'При фиксированном режиме укажите ставку, например 30% для нерезидентов.',
    ],
    howItWorks:
      'Прогрессивная шкала применяется к годовому доходу: каждая часть дохода облагается своей ставкой. Месячный расчёт приводится к годовому и обратно. При вводе суммы «на руки» подбирается gross такой, что после удержания налога остаётся ровно введённое значение.',
    example:
      'Зарплата 200 000 ₽ в месяц = 2 400 000 ₽ в год. По прогрессивной шкале вся сумма попадает в первый порог — налог 13%, итого 26 000 ₽/мес. на руки 174 000 ₽.',
    faq: [
      { q: 'Что изменилось в НДФЛ с 2025 года?', a: 'С 1 января 2025 года введена пятиступенчатая шкала: 13/15/18/20/22% в зависимости от годового дохода. Раньше повышенная ставка 15% применялась только при доходе свыше 5 млн ₽.' },
      { q: 'Как считается налог при превышении порога?', a: 'Повышенная ставка применяется только к части дохода, превышающей порог. Например, при доходе 6 млн ₽ первые 2,4 млн облагаются по 13%, следующие 2,6 млн — по 15%, остальные 1 млн — по 18%.' },
      { q: 'Какая ставка для нерезидентов?', a: 'Стандартная ставка для нерезидентов — 30%. Выберите режим «Фиксированная» и укажите 30%.' },
      { q: 'Учитываются ли вычеты?', a: 'Нет, калькулятор показывает базовый расчёт без стандартных, имущественных и социальных вычетов.' },
    ],
    relatedCalculatorIds: ['vat-calculator', 'percent-calculator', 'deposit-calculator'],
    disclaimer: FIN_DISCLAIMER,
  },
  {
    id: 'vat-calculator',
    name: 'Калькулятор НДС',
    slug: 'vat-calculator',
    fullPath: '/finance/vat-calculator/',
    category: 'finance',
    icon: 'receipt',
    popularity: 85,
    shortDescription:
      'Выделите НДС из суммы или начислите сверху по ставке 20%, 10% или 0%.',
    longDescription:
      'Калькулятор НДС работает в двух режимах: «выделить НДС из суммы» (когда цена уже включает налог) и «начислить НДС сверху» (когда цена без налога). Поддерживает основную ставку 20%, льготную 10% и нулевую, а также произвольный процент.',
    seoTitle: 'Калькулятор НДС онлайн — выделить или начислить 20% / 10%',
    seoDescription:
      'Бесплатный калькулятор НДС: выделение налога из суммы и начисление сверху. Ставки 20%, 10%, 0%.',
    h1: 'Калькулятор НДС',
    keywords: ['ндс', 'налог на добавленную стоимость', 'выделить ндс', 'начислить ндс', '20 процентов'],
    fields: [
      { name: 'amount', label: 'Сумма', type: 'number', defaultValue: 12000, unit: '₽', min: 0 },
      {
        name: 'rate', label: 'Ставка НДС', type: 'select', defaultValue: '20',
        options: [
          { value: '20', label: '20% — основная' },
          { value: '10', label: '10% — льготная' },
          { value: '0', label: '0% — нулевая' },
          { value: '7', label: '7% — упрощённый НДС' },
          { value: '5', label: '5% — упрощённый НДС' },
        ],
      },
      {
        name: 'operation', label: 'Операция', type: 'toggle', defaultValue: 'extract',
        options: [
          { value: 'extract', label: 'Выделить из суммы' },
          { value: 'add', label: 'Начислить сверху' },
        ],
      },
    ],
    resultLabels: {
      vat: 'Сумма НДС',
      net: 'Сумма без НДС',
      gross: 'Сумма с НДС',
    },
    howToUse: [
      'Введите сумму, с которой нужно работать.',
      'Выберите ставку НДС — 20% по умолчанию.',
      'Выберите операцию: «Выделить» — если сумма уже с НДС, «Начислить» — если сумма без НДС.',
    ],
    howItWorks:
      'При начислении НДС сверху: НДС = сумма × ставка, итог = сумма + НДС. При выделении НДС: НДС = сумма × ставка / (1 + ставка), сумма без НДС = сумма − НДС.',
    example:
      '12 000 ₽ с НДС 20%: выделяем налог — 2 000 ₽, без НДС — 10 000 ₽. Начисляем сверху на 10 000 ₽ — НДС 2 000 ₽, итого 12 000 ₽.',
    faq: [
      { q: 'Когда применяется ставка 10%?', a: 'На продовольственные товары первой необходимости, детские товары, периодику, медицинские изделия и лекарства.' },
      { q: 'Чем выделение отличается от начисления?', a: 'Выделение — из суммы, которая уже включает НДС, нужно вычленить сам налог. Начисление — к сумме без налога добавить НДС сверху.' },
      { q: 'Что такое упрощённые ставки 5% и 7%?', a: 'С 2025 года плательщики УСН с оборотом более 60 млн ₽ обязаны платить НДС и могут выбрать пониженные ставки 5% или 7% без права на вычет.' },
    ],
    relatedCalculatorIds: ['income-tax-calculator', 'percent-calculator', 'discount-calculator'],
    disclaimer: FIN_DISCLAIMER,
  },
  {
    id: 'percent-calculator',
    name: 'Калькулятор процентов',
    slug: 'percent-calculator',
    fullPath: '/finance/percent-calculator/',
    category: 'finance',
    icon: 'percent',
    popularity: 88,
    shortDescription:
      'Найдите процент от числа, долю в процентах, прибавьте или отнимите процент.',
    longDescription:
      'Универсальный калькулятор процентов с пятью режимами: найти процент от числа, найти долю в процентах, прибавить или отнять процент, рассчитать процентное изменение между двумя значениями.',
    seoTitle: 'Калькулятор процентов онлайн — найти процент от числа',
    seoDescription:
      'Калькулятор процентов: процент от числа, доля в процентах, прибавить или отнять процент, процент изменения.',
    h1: 'Калькулятор процентов',
    keywords: ['проценты', 'процент от числа', 'процентное изменение', 'формула процентов'],
    fields: [
      {
        name: 'mode', label: 'Режим', type: 'select', defaultValue: 'of',
        options: [
          { value: 'of', label: 'Сколько составит X% от числа' },
          { value: 'what', label: 'Сколько процентов A от B' },
          { value: 'addPct', label: 'Прибавить процент к числу' },
          { value: 'subPct', label: 'Отнять процент от числа' },
          { value: 'change', label: 'Процент изменения от A к B' },
        ],
      },
      { name: 'a', label: 'Значение A', type: 'number', defaultValue: 15 },
      { name: 'b', label: 'Значение B', type: 'number', defaultValue: 200 },
    ],
    resultLabels: {
      result: 'Результат',
    },
    howToUse: [
      'Выберите нужный режим расчёта в выпадающем списке.',
      'Введите значение A (обычно процент или часть).',
      'Введите значение B (обычно число или целое).',
    ],
    howItWorks:
      'Базовая формула процента: X% от числа N = (X / 100) × N. Для процентного изменения используется формула (B − A) / A × 100%.',
    example:
      '15% от 200 = 30. 50 от 200 = 25%. 200 + 15% = 230. 200 − 15% = 170. Изменение со 100 до 130 = +30%.',
    faq: [
      { q: 'Как найти X процентов от числа?', a: 'Разделите X на 100 и умножьте на число. Например, 20% от 500 = 0,2 × 500 = 100.' },
      { q: 'Как считать процент изменения?', a: 'Из нового значения вычтите старое, разделите на старое и умножьте на 100. Положительный результат — рост, отрицательный — снижение.' },
      { q: 'Можно ли вводить дробные значения?', a: 'Да, используйте точку или запятую как разделитель.' },
    ],
    relatedCalculatorIds: ['discount-calculator', 'vat-calculator', 'compound-interest'],
    disclaimer: FIN_DISCLAIMER,
  },
  {
    id: 'discount-calculator',
    name: 'Калькулятор скидки',
    slug: 'discount-calculator',
    fullPath: '/finance/discount-calculator/',
    category: 'finance',
    icon: 'tag',
    popularity: 82,
    shortDescription:
      'Цена со скидкой, размер скидки в рублях и в процентах.',
    longDescription:
      'Калькулятор скидки помогает быстро посчитать итоговую цену товара после применения скидки. Поддерживает два режима: скидка задана в процентах или фиксированной суммой.',
    seoTitle: 'Калькулятор скидки онлайн — цена со скидкой в процентах',
    seoDescription:
      'Бесплатный калькулятор скидки: рассчитайте цену со скидкой, размер скидки в рублях и в процентах.',
    h1: 'Калькулятор скидки',
    keywords: ['скидка', 'процент скидки', 'распродажа', 'цена со скидкой'],
    fields: [
      { name: 'price', label: 'Исходная цена', type: 'number', defaultValue: 5000, unit: '₽', min: 0 },
      {
        name: 'mode', label: 'Как задана скидка', type: 'toggle', defaultValue: 'byPercent',
        options: [
          { value: 'byPercent', label: 'В процентах' },
          { value: 'byAmount', label: 'В рублях' },
        ],
      },
      { name: 'discountPct', label: 'Скидка, %', type: 'number', defaultValue: 20, min: 0, max: 100, step: 0.1, showIf: { field: 'mode', equals: 'byPercent' } },
      { name: 'discountAmt', label: 'Скидка, ₽', type: 'number', defaultValue: 1000, min: 0, showIf: { field: 'mode', equals: 'byAmount' } },
    ],
    resultLabels: {
      finalPrice: 'Цена со скидкой',
      saved: 'Размер скидки',
      pct: 'Процент скидки',
      original: 'Исходная цена',
    },
    howToUse: [
      'Введите исходную цену товара.',
      'Выберите способ задания скидки — в процентах или в рублях.',
      'Введите размер скидки и сразу увидите итоговую цену и экономию.',
    ],
    howItWorks:
      'При скидке в процентах: размер скидки = цена × процент / 100, итог = цена − скидка. При скидке в рублях: процент = скидка / цена × 100, итог = цена − скидка.',
    example:
      'Товар 5 000 ₽ со скидкой 20% — экономия 1 000 ₽, цена 4 000 ₽. Та же скидка 1 000 ₽ в рублях = 20%.',
    faq: [
      { q: 'Как посчитать, сколько процентов составила скидка?', a: 'Разделите размер скидки на исходную цену и умножьте на 100. Например, скидка 500 ₽ при цене 2 500 ₽ = 20%.' },
      { q: 'Можно ли применить две скидки подряд?', a: 'Калькулятор считает одну скидку. Для двух последовательных просто примените его дважды — сначала к исходной цене, затем к результату.' },
      { q: 'Учитывается ли НДС?', a: 'Нет, расчёт идёт от цены, которую вы вводите. Если нужно учесть НДС — воспользуйтесь калькулятором НДС.' },
    ],
    relatedCalculatorIds: ['percent-calculator', 'vat-calculator', 'currency-converter'],
    disclaimer: FIN_DISCLAIMER,
  },

  // ── ВАЛЮТЫ ────────────────────────────────────────────────────────
  {
    id: 'currency-converter',
    name: 'Конвертер валют',
    slug: 'currency-converter',
    fullPath: '/currency/currency-converter/',
    category: 'currency',
    icon: 'arrow-left-right',
    popularity: 100,
    shortDescription: 'Переведите сумму между девятью популярными валютами.',
    longDescription:
      'Конвертер валют поддерживает девять валют — от USD и EUR до MDL, RON и TRY. Курсы демонстрационные, подходят для прикидки сумм.',
    seoTitle: 'Конвертер валют онлайн — USD, EUR, MDL, RON',
    seoDescription:
      'Онлайн-конвертер валют: USD, EUR, MDL, RON, UAH, PLN, GBP, CHF, TRY. Перевод по демонстрационным курсам.',
    h1: 'Конвертер валют',
    keywords: ['конвертер валют', 'курсы валют', 'обмен валют'],
    fields: [
      { name: 'amount', label: 'Сумма', type: 'number', defaultValue: 100 },
      { name: 'from', label: 'Из валюты', type: 'select', defaultValue: 'USD', options: currencyOptions },
      { name: 'to', label: 'В валюту', type: 'select', defaultValue: 'EUR', options: currencyOptions },
    ],
    resultLabels: {
      result: 'Результат',
      rate: 'Курс',
      updated: 'Дата обновления',
    },
    howToUse: [
      'Введите сумму, которую хотите перевести.',
      'Выберите исходную валюту.',
      'Выберите валюту, в которую переводите.',
    ],
    howItWorks:
      'Все валюты приведены к USD через таблицу курсов. Конвертация выполняется в два шага: сумма → USD → целевая валюта.',
    example: '100 USD по курсу 0,92 = 92,00 EUR.',
    faq: [
      { q: 'Насколько актуальны курсы?', a: 'Курсы зафиксированы для демонстрации и не отражают рыночные значения. Перед обменом уточняйте в банке.' },
      { q: 'Будут ли исторические курсы?', a: 'Пока нет. Это возможно в будущих версиях при подключении внешнего источника.' },
    ],
    relatedCalculatorIds: ['usd-to-eur', 'eur-to-mdl', 'usd-to-mdl'],
    disclaimer: CURR_DISCLAIMER,
  },
  {
    id: 'usd-to-eur',
    name: 'Конвертер USD в EUR',
    slug: 'usd-to-eur',
    fullPath: '/currency/usd-to-eur/',
    category: 'currency',
    icon: 'dollar-sign',
    popularity: 85,
    shortDescription: 'Переведите доллары США в евро по демонстрационному курсу.',
    longDescription:
      'Страница быстрого расчёта USD → EUR. Используется тот же конвертер с предустановленной парой.',
    seoTitle: 'USD в EUR онлайн — конвертер долларов в евро',
    seoDescription: 'Перевод долларов США в евро. Курс USD/EUR демонстрационный.',
    h1: 'Конвертер USD в EUR',
    keywords: ['usd eur', 'доллар евро', 'конвертер'],
    fields: [
      { name: 'amount', label: 'Сумма', type: 'number', defaultValue: 100 },
      { name: 'from', label: 'Из', type: 'select', defaultValue: 'USD', options: currencyOptions },
      { name: 'to', label: 'В', type: 'select', defaultValue: 'EUR', options: currencyOptions },
    ],
    resultLabels: { result: 'Результат', rate: 'Курс', updated: 'Дата обновления' },
    howToUse: ['Введите сумму в долларах США.', 'Получите итоговое значение в евро.'],
    howItWorks: 'Расчёт выполняется через базовую таблицу курсов к USD.',
    example: '100 USD ≈ 92,00 EUR при курсе 0,92.',
    faq: [
      { q: 'Сколько евро в 100 долларах?', a: 'По демонстрационному курсу — около 92 евро. Реальный курс уточняйте в банке.' },
      { q: 'Можно ли посчитать в обратную сторону?', a: 'Да, поменяйте местами валюты «Из» и «В».' },
    ],
    relatedCalculatorIds: ['currency-converter', 'eur-to-mdl', 'usd-to-mdl'],
    disclaimer: CURR_DISCLAIMER,
  },
  {
    id: 'eur-to-mdl',
    name: 'Конвертер EUR в MDL',
    slug: 'eur-to-mdl',
    fullPath: '/currency/eur-to-mdl/',
    category: 'currency',
    icon: 'euro',
    popularity: 75,
    shortDescription: 'Переведите евро в молдавские леи.',
    longDescription: 'Быстрый расчёт EUR → MDL на основе таблицы демонстрационных курсов.',
    seoTitle: 'EUR в MDL онлайн — конвертер евро в молдавский лей',
    seoDescription: 'Перевод евро в молдавские леи. Курс EUR/MDL демонстрационный.',
    h1: 'Конвертер EUR в MDL',
    keywords: ['eur mdl', 'евро лей', 'молдавский лей'],
    fields: [
      { name: 'amount', label: 'Сумма', type: 'number', defaultValue: 100 },
      { name: 'from', label: 'Из', type: 'select', defaultValue: 'EUR', options: currencyOptions },
      { name: 'to', label: 'В', type: 'select', defaultValue: 'MDL', options: currencyOptions },
    ],
    resultLabels: { result: 'Результат', rate: 'Курс', updated: 'Дата обновления' },
    howToUse: ['Введите сумму в евро.', 'Получите эквивалент в молдавских леях.'],
    howItWorks: 'EUR конвертируется в USD, затем USD — в MDL.',
    example: '100 EUR ≈ 1940 MDL по демонстрационному курсу.',
    faq: [
      { q: 'Какой сейчас курс EUR/MDL?', a: 'На сайте используется условный курс. Реальный курс лучше уточнить в банке.' },
      { q: 'Подойдёт ли для расчёта зарплаты?', a: 'Только для прикидки. Зарплатные расчёты лучше делать по официальному курсу.' },
    ],
    relatedCalculatorIds: ['currency-converter', 'usd-to-eur', 'usd-to-mdl'],
    disclaimer: CURR_DISCLAIMER,
  },
  {
    id: 'usd-to-mdl',
    name: 'Конвертер USD в MDL',
    slug: 'usd-to-mdl',
    fullPath: '/currency/usd-to-mdl/',
    category: 'currency',
    icon: 'dollar-sign',
    popularity: 75,
    shortDescription: 'Переведите доллары США в молдавские леи.',
    longDescription: 'Готовая страница USD → MDL для быстрых расчётов.',
    seoTitle: 'USD в MDL онлайн — конвертер долларов в молдавский лей',
    seoDescription: 'Перевод долларов США в молдавские леи. Демонстрационный курс.',
    h1: 'Конвертер USD в MDL',
    keywords: ['usd mdl', 'доллар лей'],
    fields: [
      { name: 'amount', label: 'Сумма', type: 'number', defaultValue: 100 },
      { name: 'from', label: 'Из', type: 'select', defaultValue: 'USD', options: currencyOptions },
      { name: 'to', label: 'В', type: 'select', defaultValue: 'MDL', options: currencyOptions },
    ],
    resultLabels: { result: 'Результат', rate: 'Курс', updated: 'Дата обновления' },
    howToUse: ['Введите сумму в долларах.', 'Получите сумму в молдавских леях.'],
    howItWorks: 'Расчёт по таблице курсов к USD.',
    example: '100 USD ≈ 1785 MDL по демонстрационному курсу.',
    faq: [
      { q: 'Можно ли использовать для туристов?', a: 'Для прикидки — да. Для обмена — уточняйте курс в банке.' },
      { q: 'Точны ли курсы?', a: 'Курсы демонстрационные и зафиксированы в данных сайта.' },
    ],
    relatedCalculatorIds: ['currency-converter', 'usd-to-eur', 'eur-to-mdl'],
    disclaimer: CURR_DISCLAIMER,
  },

  // ── СПОРТ ────────────────────────────────────────────────────────
  {
    id: 'bmi-calculator',
    name: 'Калькулятор ИМТ',
    slug: 'bmi-calculator',
    fullPath: '/sport/bmi-calculator/',
    category: 'sport',
    icon: 'scale',
    popularity: 90,
    shortDescription: 'Индекс массы тела по росту и весу с интерпретацией результата.',
    longDescription:
      'ИМТ — простой индикатор соответствия массы тела росту. Калькулятор показывает категорию (недостаток, норма, избыток, ожирение) и даёт краткое пояснение.',
    seoTitle: 'Калькулятор ИМТ онлайн — индекс массы тела',
    seoDescription: 'Рассчитайте ИМТ по росту и весу. Узнайте свою категорию массы тела.',
    h1: 'Калькулятор ИМТ',
    keywords: ['ИМТ', 'индекс массы тела', 'BMI'],
    fields: [
      { name: 'height', label: 'Рост, см', type: 'number', defaultValue: 175 },
      { name: 'weight', label: 'Вес, кг', type: 'number', defaultValue: 70 },
    ],
    resultLabels: { bmi: 'ИМТ', category: 'Категория', note: 'Комментарий' },
    howToUse: ['Введите рост в сантиметрах.', 'Введите вес в килограммах.'],
    howItWorks: 'ИМТ = вес (кг) ÷ рост (м)². Категория определяется по таблице ВОЗ.',
    example: 'Рост 175 см, вес 70 кг → ИМТ ≈ 22,9 — норма.',
    faq: [
      { q: 'Подходит ли ИМТ спортсменам?', a: 'Для людей с большой мышечной массой ИМТ часто завышен. Им лучше ориентироваться на процент жира.' },
      { q: 'С какого возраста можно считать ИМТ?', a: 'Стандартная формула — для взрослых от 18 до 65 лет.' },
    ],
    relatedCalculatorIds: ['calorie-calculator', 'running-pace-calculator', 'one-rep-max-calculator'],
    disclaimer: SPORT_DISCLAIMER,
  },
  {
    id: 'calorie-calculator',
    name: 'Калькулятор калорий',
    slug: 'calorie-calculator',
    fullPath: '/sport/calorie-calculator/',
    category: 'sport',
    icon: 'flame',
    popularity: 95,
    shortDescription: 'Дневная норма калорий и БЖУ с учётом цели и активности.',
    longDescription:
      'Калькулятор использует формулу Миффлина — Сан Жеора для расчёта базового обмена и корректирует норму по уровню активности и цели.',
    seoTitle: 'Калькулятор калорий онлайн — БЖУ и дневная норма',
    seoDescription: 'Рассчитайте дневную норму калорий и БЖУ по формуле Миффлина — Сан Жеора.',
    h1: 'Калькулятор калорий',
    keywords: ['калории', 'БЖУ', 'диета'],
    fields: [
      {
        name: 'gender', label: 'Пол', type: 'toggle', defaultValue: 'male',
        options: [{ value: 'male', label: 'Мужской' }, { value: 'female', label: 'Женский' }],
      },
      { name: 'age', label: 'Возраст, лет', type: 'number', defaultValue: 30 },
      { name: 'height', label: 'Рост, см', type: 'number', defaultValue: 175 },
      { name: 'weight', label: 'Вес, кг', type: 'number', defaultValue: 70 },
      {
        name: 'activity', label: 'Уровень активности', type: 'select', defaultValue: '1.55',
        options: [
          { value: '1.2', label: 'Минимальная — сидячая работа' },
          { value: '1.375', label: 'Лёгкая — 1-3 тренировки в неделю' },
          { value: '1.55', label: 'Средняя — 3-5 тренировок' },
          { value: '1.725', label: 'Высокая — 6-7 тренировок' },
          { value: '1.9', label: 'Очень высокая — физическая работа' },
        ],
      },
      {
        name: 'goal', label: 'Цель', type: 'toggle', defaultValue: 'maintain',
        options: [
          { value: 'lose', label: 'Похудение' },
          { value: 'maintain', label: 'Поддержание' },
          { value: 'gain', label: 'Набор' },
        ],
      },
    ],
    resultLabels: {
      bmr: 'Базовый обмен (BMR)',
      daily: 'Дневная норма',
      protein: 'Белки',
      fat: 'Жиры',
      carbs: 'Углеводы',
    },
    howToUse: [
      'Укажите пол, возраст, рост и вес.',
      'Выберите подходящий уровень активности.',
      'Укажите цель — похудение, поддержание или набор.',
    ],
    howItWorks:
      'Базовый обмен считается по Миффлину — Сан Жеору, затем умножается на коэффициент активности. Дальше норма корректируется на ±15% в зависимости от цели.',
    example: 'Мужчина 30 лет, 175 см, 70 кг, средняя активность, поддержание → около 2580 ккал/день.',
    faq: [
      { q: 'На сколько урезать калории для похудения?', a: 'Калькулятор урезает дневную норму примерно на 15%. Это безопасный темп для большинства людей.' },
      { q: 'Какой процент БЖУ оптимален?', a: 'По умолчанию — 30/25/45. При наборе массы — больше углеводов, при похудении — больше белка.' },
    ],
    relatedCalculatorIds: ['bmi-calculator', 'running-pace-calculator', 'one-rep-max-calculator'],
    disclaimer: SPORT_DISCLAIMER,
  },
  {
    id: 'running-pace-calculator',
    name: 'Калькулятор темпа бега',
    slug: 'running-pace-calculator',
    fullPath: '/sport/running-pace-calculator/',
    category: 'sport',
    icon: 'timer',
    popularity: 70,
    shortDescription: 'Темп на километр, скорость и прогнозы на 5, 10 км и полумарафон.',
    longDescription:
      'Введите дистанцию и время — получите темп на километр и среднюю скорость. Также калькулятор даёт прогнозы на популярные дистанции.',
    seoTitle: 'Калькулятор темпа бега — мин/км и скорость',
    seoDescription: 'Рассчитайте темп бега и среднюю скорость. Прогноз на 5 км, 10 км и полумарафон.',
    h1: 'Калькулятор темпа бега',
    keywords: ['темп бега', 'мин/км', 'скорость'],
    fields: [
      { name: 'distance', label: 'Дистанция', type: 'number', defaultValue: 5 },
      {
        name: 'unit', label: 'Единица', type: 'toggle', defaultValue: 'km',
        options: [{ value: 'km', label: 'км' }, { value: 'mi', label: 'мили' }],
      },
      { name: 'hours', label: 'Часы', type: 'number', defaultValue: 0 },
      { name: 'minutes', label: 'Минуты', type: 'number', defaultValue: 25 },
      { name: 'seconds', label: 'Секунды', type: 'number', defaultValue: 0 },
    ],
    resultLabels: {
      pace: 'Темп',
      speed: 'Средняя скорость',
      p5: 'Прогноз на 5 км',
      p10: 'Прогноз на 10 км',
      pHalf: 'Прогноз на полумарафон',
    },
    howToUse: [
      'Введите пройденную дистанцию.',
      'Укажите единицу — километры или мили.',
      'Введите потраченное время.',
    ],
    howItWorks:
      'Темп = время / дистанция. Прогнозы на 5/10/21 км считаются с поправкой Riegel (показатель 1,06).',
    example: '5 км за 25:00 → темп 5:00/км, скорость 12 км/ч.',
    faq: [
      { q: 'Что такое формула Riegel?', a: 'Эмпирическая формула для прогноза времени на других дистанциях. Учитывает падение темпа с ростом длины забега.' },
      { q: 'Можно ли использовать для ходьбы?', a: 'Да, расчёт темпа универсален.' },
    ],
    relatedCalculatorIds: ['calorie-calculator', 'bmi-calculator', 'one-rep-max-calculator'],
    disclaimer: SPORT_DISCLAIMER,
  },
  {
    id: 'one-rep-max-calculator',
    name: 'Калькулятор 1ПМ',
    slug: 'one-rep-max-calculator',
    fullPath: '/sport/one-rep-max-calculator/',
    category: 'sport',
    icon: 'dumbbell',
    popularity: 65,
    shortDescription: 'Разовый максимум и проценты для рабочих подходов.',
    longDescription:
      'Калькулятор 1ПМ оценивает максимальный вес, который вы способны поднять на одно повторение. Дополнительно показывает рабочие веса от 50 до 90% от 1ПМ.',
    seoTitle: 'Калькулятор 1ПМ онлайн — разовый максимум',
    seoDescription: 'Рассчитайте свой 1ПМ по формуле Эпли. Проценты от 1ПМ для тренировочных подходов.',
    h1: 'Калькулятор 1ПМ',
    keywords: ['1ПМ', 'one rep max', 'жим', 'присед'],
    fields: [
      { name: 'weight', label: 'Рабочий вес, кг', type: 'number', defaultValue: 80 },
      { name: 'reps', label: 'Количество повторений', type: 'number', defaultValue: 5, min: 1, max: 12 },
    ],
    resultLabels: {
      oneRm: 'Примерный 1ПМ',
      p50: '50% от 1ПМ',
      p60: '60% от 1ПМ',
      p70: '70% от 1ПМ',
      p80: '80% от 1ПМ',
      p90: '90% от 1ПМ',
    },
    howToUse: [
      'Введите вес, с которым тренируетесь.',
      'Укажите, сколько раз вы делаете это упражнение в подходе.',
    ],
    howItWorks: 'Используется формула Эпли: 1ПМ = вес × (1 + повторения / 30).',
    example: '80 кг × 5 раз → 1ПМ ≈ 93 кг.',
    faq: [
      { q: 'До скольких повторений работает формула?', a: 'Точность падает после 10 повторений. Оптимально 3-8.' },
      { q: 'Можно ли использовать для становой?', a: 'Да, формула универсальна для базовых движений.' },
    ],
    relatedCalculatorIds: ['calorie-calculator', 'bmi-calculator', 'running-pace-calculator'],
    disclaimer: SPORT_DISCLAIMER,
  },

  // ── РЕМОНТ ────────────────────────────────────────────────────────
  {
    id: 'tile-calculator',
    name: 'Калькулятор плитки',
    slug: 'tile-calculator',
    fullPath: '/building/tile-calculator/',
    category: 'building',
    icon: 'square',
    popularity: 75,
    shortDescription: 'Количество плиток и упаковок с учётом запаса и расхода клея.',
    longDescription:
      'Калькулятор плитки помогает заранее посчитать материал на пол или стены. Можно задать размеры помещения или площадь напрямую.',
    seoTitle: 'Калькулятор плитки онлайн — расчёт количества и упаковок',
    seoDescription: 'Расчёт плитки по площади или размерам комнаты с учётом запаса. Литры клея.',
    h1: 'Калькулятор плитки',
    keywords: ['плитка', 'кафель', 'расчёт'],
    fields: [
      {
        name: 'mode', label: 'Способ расчёта', type: 'toggle', defaultValue: 'room',
        options: [{ value: 'room', label: 'По размерам' }, { value: 'area', label: 'По площади' }],
      },
      { name: 'length', label: 'Длина, м', type: 'number', defaultValue: 4, showIf: { field: 'mode', equals: 'room' } },
      { name: 'width', label: 'Ширина, м', type: 'number', defaultValue: 3, showIf: { field: 'mode', equals: 'room' } },
      { name: 'manualArea', label: 'Площадь, м²', type: 'number', defaultValue: 12, showIf: { field: 'mode', equals: 'area' } },
      { name: 'tileLength', label: 'Длина плитки, см', type: 'number', defaultValue: 30 },
      { name: 'tileWidth', label: 'Ширина плитки, см', type: 'number', defaultValue: 30 },
      { name: 'packArea', label: 'Площадь упаковки, м²', type: 'number', defaultValue: 1.44, step: 0.01 },
      { name: 'reserve', label: 'Запас, %', type: 'number', defaultValue: 10 },
    ],
    resultLabels: {
      area: 'Площадь',
      areaWithReserve: 'Площадь с запасом',
      tiles: 'Количество плиток',
      packs: 'Количество упаковок',
      glue: 'Примерный расход клея',
    },
    howToUse: [
      'Выберите, как считать — по размерам комнаты или сразу по площади.',
      'Укажите размеры плитки и площадь упаковки (написано на коробке).',
      'Задайте запас 5-15% на подрезку.',
    ],
    howItWorks:
      'Площадь умножается на коэффициент запаса. Количество плиток = площадь / площадь одной плитки. Расход клея — 5 кг на м² в среднем.',
    example: 'Пол 4×3 м, плитка 30×30 см, запас 10% → 12 м², 132 плитки, около 10 упаковок.',
    faq: [
      { q: 'Какой запас закладывать?', a: 'Для прямой укладки достаточно 5-10%, для диагональной — 15%.' },
      { q: 'Сколько клея уйдёт?', a: 'В среднем 5 кг на м² при гребёнке 8 мм. Точнее смотрите на упаковке клея.' },
    ],
    relatedCalculatorIds: ['wallpaper-calculator', 'paint-calculator', 'laminate-calculator'],
    disclaimer: BUILD_DISCLAIMER,
  },
  {
    id: 'wallpaper-calculator',
    name: 'Калькулятор обоев',
    slug: 'wallpaper-calculator',
    fullPath: '/building/wallpaper-calculator/',
    category: 'building',
    icon: 'wallpaper',
    popularity: 70,
    shortDescription: 'Расчёт количества рулонов с учётом раппорта и проёмов.',
    longDescription:
      'Калькулятор обоев учитывает размеры комнаты, проёмы и раппорт рисунка. Покажет, сколько целых рулонов нужно купить.',
    seoTitle: 'Калькулятор обоев онлайн — расчёт количества рулонов',
    seoDescription: 'Расчёт обоев с учётом раппорта, окон и дверей. Сколько рулонов нужно купить.',
    h1: 'Калькулятор обоев',
    keywords: ['обои', 'рулоны', 'раппорт'],
    fields: [
      { name: 'length', label: 'Длина комнаты, м', type: 'number', defaultValue: 5 },
      { name: 'width', label: 'Ширина комнаты, м', type: 'number', defaultValue: 4 },
      { name: 'height', label: 'Высота стен, м', type: 'number', defaultValue: 2.7, step: 0.1 },
      { name: 'rollWidth', label: 'Ширина рулона, м', type: 'number', defaultValue: 1.06, step: 0.01 },
      { name: 'rollLength', label: 'Длина рулона, м', type: 'number', defaultValue: 10 },
      { name: 'windows', label: 'Количество окон', type: 'number', defaultValue: 1 },
      { name: 'doors', label: 'Количество дверей', type: 'number', defaultValue: 1 },
      { name: 'pattern', label: 'Раппорт рисунка, см', type: 'number', defaultValue: 0 },
    ],
    resultLabels: {
      wallArea: 'Площадь стен',
      strips: 'Количество полотен',
      rolls: 'Количество рулонов',
      reserve: 'Запас',
    },
    howToUse: [
      'Введите длину, ширину и высоту комнаты.',
      'Укажите параметры рулона — длину и ширину.',
      'Задайте количество окон и дверей.',
      'Если есть рисунок — введите высоту раппорта.',
    ],
    howItWorks:
      'Считается периметр и площадь стен. Из площади вычитается ориентировочная площадь окон и дверей. Полотна разрезаются с учётом раппорта.',
    example: 'Комната 5×4 м, высота 2,7 м, рулон 1,06×10 м, 1 окно, 1 дверь → 6 рулонов.',
    faq: [
      { q: 'Что такое раппорт?', a: 'Это высота повторения рисунка на обоях. Чем больше раппорт — тем больше отходов на подгонку.' },
      { q: 'Что делать, если боюсь нехватки?', a: 'Возьмите на 1 рулон больше. Лучше остаться с запасом, чем искать партию.' },
    ],
    relatedCalculatorIds: ['paint-calculator', 'tile-calculator', 'laminate-calculator'],
    disclaimer: BUILD_DISCLAIMER,
  },
  {
    id: 'paint-calculator',
    name: 'Калькулятор краски',
    slug: 'paint-calculator',
    fullPath: '/building/paint-calculator/',
    category: 'building',
    icon: 'paint-bucket',
    popularity: 65,
    shortDescription: 'Объём краски и количество банок для покраски стен.',
    longDescription:
      'Калькулятор поможет определить нужный объём краски и количество банок с учётом числа слоёв и расхода на м².',
    seoTitle: 'Калькулятор краски онлайн — литры и банки',
    seoDescription: 'Расчёт краски: литры и банки с учётом слоёв и расхода на м².',
    h1: 'Калькулятор краски',
    keywords: ['краска', 'покраска', 'расход'],
    fields: [
      {
        name: 'mode', label: 'Способ расчёта', type: 'toggle', defaultValue: 'manual',
        options: [{ value: 'manual', label: 'Площадь вручную' }, { value: 'room', label: 'По размерам комнаты' }],
      },
      { name: 'area', label: 'Площадь, м²', type: 'number', defaultValue: 30, showIf: { field: 'mode', equals: 'manual' } },
      { name: 'length', label: 'Длина, м', type: 'number', defaultValue: 5, showIf: { field: 'mode', equals: 'room' } },
      { name: 'width', label: 'Ширина, м', type: 'number', defaultValue: 4, showIf: { field: 'mode', equals: 'room' } },
      { name: 'height', label: 'Высота, м', type: 'number', defaultValue: 2.7, step: 0.1, showIf: { field: 'mode', equals: 'room' } },
      { name: 'coats', label: 'Количество слоёв', type: 'number', defaultValue: 2, min: 1, max: 4 },
      { name: 'consumption', label: 'Расход на м², л', type: 'number', defaultValue: 0.15, step: 0.01 },
      { name: 'canVolume', label: 'Объём банки, л', type: 'number', defaultValue: 2.5, step: 0.1 },
    ],
    resultLabels: {
      area: 'Площадь окрашивания',
      liters: 'Литры краски',
      cans: 'Количество банок',
      reserve: 'Запас',
    },
    howToUse: [
      'Выберите способ — площадь напрямую или размеры комнаты.',
      'Укажите число слоёв (обычно 2).',
      'Введите расход и объём банки — данные есть на этикетке.',
    ],
    howItWorks:
      'Литры = площадь × расход × количество слоёв. Банки округляются вверх, чтобы хватило с запасом.',
    example: '30 м² в 2 слоя при расходе 0,15 л/м² → 9 л краски, 4 банки по 2,5 л.',
    faq: [
      { q: 'Какой расход краски брать?', a: 'Обычно 0,1-0,2 л/м² на слой для водоэмульсионных красок. Точные значения — на этикетке.' },
      { q: 'Сколько слоёв нужно?', a: 'Чаще всего 2. На контрастных стенах может понадобиться 3.' },
    ],
    relatedCalculatorIds: ['wallpaper-calculator', 'tile-calculator', 'laminate-calculator'],
    disclaimer: BUILD_DISCLAIMER,
  },
  {
    id: 'laminate-calculator',
    name: 'Калькулятор ламината',
    slug: 'laminate-calculator',
    fullPath: '/building/laminate-calculator/',
    category: 'building',
    icon: 'layout-grid',
    popularity: 70,
    shortDescription: 'Сколько упаковок ламината нужно на комнату с учётом запаса.',
    longDescription:
      'Калькулятор ламината считает площадь пола, добавляет запас на подрезку и переводит её в количество упаковок.',
    seoTitle: 'Калькулятор ламината онлайн — расчёт упаковок',
    seoDescription: 'Сколько упаковок ламината нужно для комнаты. С учётом запаса на подрезку.',
    h1: 'Калькулятор ламината',
    keywords: ['ламинат', 'упаковки', 'расчёт'],
    fields: [
      { name: 'length', label: 'Длина комнаты, м', type: 'number', defaultValue: 5 },
      { name: 'width', label: 'Ширина комнаты, м', type: 'number', defaultValue: 4 },
      { name: 'packArea', label: 'Площадь упаковки, м²', type: 'number', defaultValue: 2.13, step: 0.01 },
      { name: 'reserve', label: 'Запас, %', type: 'number', defaultValue: 10 },
    ],
    resultLabels: {
      area: 'Площадь пола',
      areaWithReserve: 'Площадь с запасом',
      packs: 'Количество упаковок',
    },
    howToUse: [
      'Введите размеры комнаты в метрах.',
      'Укажите площадь одной упаковки (написано на коробке).',
      'Задайте запас на подрезку — 5-15%.',
    ],
    howItWorks: 'Площадь = длина × ширина. Площадь с запасом = площадь × (1 + запас/100). Упаковки = площадь с запасом / площадь упаковки, округлено вверх.',
    example: 'Комната 5×4 м, упаковка 2,13 м², запас 10% → 22 м², 11 упаковок.',
    faq: [
      { q: 'Какой запас закладывать?', a: 'Для прямой укладки 5-7%, для диагональной 10-15%.' },
      { q: 'Что делать с остатком?', a: 'Сохраните несколько досок на ремонт после повреждений.' },
    ],
    relatedCalculatorIds: ['tile-calculator', 'wallpaper-calculator', 'paint-calculator'],
    disclaimer: BUILD_DISCLAIMER,
  },

  // ── ДАТЫ ─────────────────────────────────────────────────────────
  {
    id: 'age-calculator',
    name: 'Калькулятор возраста',
    slug: 'age-calculator',
    fullPath: '/date-time/age-calculator/',
    category: 'date-time',
    icon: 'cake',
    popularity: 70,
    shortDescription: 'Точный возраст в годах, месяцах и днях.',
    longDescription:
      'Введите дату рождения и дату расчёта — получите возраст с точностью до дня. Удобно для заполнения анкет и поздравлений.',
    seoTitle: 'Калькулятор возраста онлайн — точный возраст в днях',
    seoDescription: 'Точный возраст по дате рождения: годы, месяцы, дни и общее число прожитых дней.',
    h1: 'Калькулятор возраста',
    keywords: ['возраст', 'дни рождения'],
    fields: [
      { name: 'birthDate', label: 'Дата рождения', type: 'date', defaultValue: '1990-01-01' },
      { name: 'targetDate', label: 'Дата расчёта', type: 'date', defaultValue: '' },
    ],
    resultLabels: {
      years: 'Полных лет',
      months: 'Месяцев',
      days: 'Дней',
      totalDays: 'Всего прожито дней',
    },
    howToUse: [
      'Выберите дату рождения.',
      'Дата расчёта по умолчанию — сегодня, но её можно изменить.',
    ],
    howItWorks: 'Калькулятор вычитает дату рождения из даты расчёта и приводит результат к годам, месяцам и дням.',
    example: 'Родились 01.01.1990, сегодня 01.02.2026 → 36 лет 1 месяц.',
    faq: [
      { q: 'Учитываются ли високосные годы?', a: 'Да, расчёт идёт по календарным датам с високосными годами.' },
      { q: 'Можно ли посчитать сколько до дня рождения?', a: 'Поставьте в «Дате расчёта» свой следующий день рождения — увидите остаток.' },
    ],
    relatedCalculatorIds: ['working-days-calculator', 'bmi-calculator', 'currency-converter'],
  },
  {
    id: 'working-days-calculator',
    name: 'Калькулятор рабочих дней',
    slug: 'working-days-calculator',
    fullPath: '/date-time/working-days-calculator/',
    category: 'date-time',
    icon: 'calendar-check',
    popularity: 55,
    shortDescription: 'Количество рабочих дней между двумя датами с учётом выходных.',
    longDescription:
      'Калькулятор рабочих дней пригодится для расчёта сроков по договору или отпуска. Можно учитывать выходные и вручную исключать праздники.',
    seoTitle: 'Калькулятор рабочих дней онлайн — между двумя датами',
    seoDescription: 'Сколько рабочих дней между двумя датами. Учёт выходных и пользовательских исключений.',
    h1: 'Калькулятор рабочих дней',
    keywords: ['рабочие дни', 'выходные', 'между датами'],
    fields: [
      { name: 'startDate', label: 'Дата начала', type: 'date', defaultValue: '' },
      { name: 'endDate', label: 'Дата окончания', type: 'date', defaultValue: '' },
      {
        name: 'includeWeekends', label: 'Учитывать выходные как рабочие', type: 'toggle', defaultValue: 'no',
        options: [{ value: 'no', label: 'Нет' }, { value: 'yes', label: 'Да' }],
      },
      {
        name: 'excludedDates', label: 'Исключаемые даты (через запятую, ГГГГ-ММ-ДД)',
        type: 'textarea', defaultValue: '',
      },
    ],
    resultLabels: {
      calendar: 'Календарные дни',
      working: 'Рабочие дни',
      weekend: 'Выходные дни',
      excluded: 'Исключённые даты',
    },
    howToUse: [
      'Выберите даты начала и окончания.',
      'Включите учёт выходных, если суббота и воскресенье считаются рабочими.',
      'Через запятую введите даты праздников, которые нужно исключить.',
    ],
    howItWorks: 'Калькулятор перебирает каждый день диапазона, отделяя выходные и исключённые даты.',
    example: '01.02.2026 — 28.02.2026 → 28 календарных, 20 рабочих, 8 выходных.',
    faq: [
      { q: 'Какие дни считаются выходными?', a: 'Суббота и воскресенье. Праздничные дни нужно указать вручную.' },
      { q: 'Можно ли указать диапазон дат для исключения?', a: 'Сейчас нет — только список конкретных дат через запятую.' },
    ],
    relatedCalculatorIds: ['age-calculator', 'credit-calculator', 'currency-converter'],
  },
];

export const calculatorsById = Object.fromEntries(
  calculators.map((c) => [c.id, c]),
) as Record<string, CalculatorDef>;

export const calculatorsByCategory = (categoryId: string) =>
  calculators.filter((c) => c.category === categoryId);

export const popularCalculators = [...calculators]
  .sort((a, b) => b.popularity - a.popularity)
  .slice(0, 6);
