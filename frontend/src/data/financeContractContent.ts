import type { CalculatorDef } from '../lib/types';
import type { EditorialSource } from './calculatorEditorial';

export type FinanceContentLocale = 'ru' | 'en' | 'uk' | 'de' | 'es';
export type FinanceContractCopy = Pick<CalculatorDef,
  'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

const aprSource = 'https://www.consumerfinance.gov/ask-cfpb/what-is-the-difference-between-a-loan-interest-rate-and-the-apr-en-733/';
const mortgageSource = 'https://www.consumerfinance.gov/ask-cfpb/on-a-mortgage-whats-the-difference-between-my-principal-and-interest-payment-and-my-total-monthly-payment-en-1941/';
const depositSource = 'https://www.consumerfinance.gov/rules-policy/regulations/1030/a/';
const compoundSource = 'https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator';

// Official educational references support the distinctions described here.
// US disclosure rules do not become rules for the visitor's country. The
// site's model formulas and cash-flow examples are independently derived.
export const financeMethodSources: Partial<Record<string, EditorialSource[]>> = {
  'credit-calculator': [{ label: 'CFPB (US): educational distinction between interest rate and APR', href: aprSource }],
  'mortgage-calculator': [
    { label: 'CFPB (US): principal and interest versus total mortgage outgoings', href: mortgageSource },
    { label: 'CFPB (US): educational distinction between interest rate and APR', href: aprSource },
  ],
  'deposit-calculator': [{ label: 'CFPB (US): regulated APY assumptions, distinct from this model’s annual equivalent', href: depositSource }],
  'compound-interest': [{ label: 'SEC Investor.gov (US): educational inputs for capital, contributions and compounding', href: compoundSource }],
};

const sourceLabels: Record<FinanceContentLocale, Record<string, string>> = {
  ru: {
    [aprSource]: 'CFPB (США): учебное объяснение различия процентной ставки и APR',
    [mortgageSource]: 'CFPB (США): долг и проценты отдельно от общих расходов по ипотеке',
    [depositSource]: 'CFPB (США): допущения регулируемого APY, отличного от годового эквивалента модели',
    [compoundSource]: 'SEC Investor.gov (США): учебные параметры капитала, взносов и капитализации',
  },
  en: Object.fromEntries(Object.values(financeMethodSources).flatMap((sources) => sources!.map((source) => [source.href!, source.label]))),
  uk: {
    [aprSource]: 'CFPB (США): навчальне пояснення відмінності процентної ставки та APR',
    [mortgageSource]: 'CFPB (США): борг і проценти окремо від загальних іпотечних витрат',
    [depositSource]: 'CFPB (США): припущення регульованого APY, відмінного від річного еквівалента моделі',
    [compoundSource]: 'SEC Investor.gov (США): навчальні параметри капіталу, внесків і капіталізації',
  },
  de: {
    [aprSource]: 'CFPB (USA): Erläuterung des Unterschieds zwischen Nominalzins und APR',
    [mortgageSource]: 'CFPB (USA): Tilgung und Zinsen im Vergleich zu gesamten Immobilienkreditausgaben',
    [depositSource]: 'CFPB (USA): gesetzliche APY-Annahmen im Unterschied zum Jahreswert dieses Modells',
    [compoundSource]: 'SEC Investor.gov (USA): Beispielparameter für Kapital, Einzahlungen und Kapitalisierung',
  },
  es: {
    [aprSource]: 'CFPB (EE. UU.): explicación de la diferencia entre tipo de interés y APR',
    [mortgageSource]: 'CFPB (EE. UU.): capital e intereses frente a gastos hipotecarios totales',
    [depositSource]: 'CFPB (EE. UU.): supuestos del APY regulado, distinto de la equivalencia anual de este modelo',
    [compoundSource]: 'SEC Investor.gov (EE. UU.): parámetros didácticos de capital, aportaciones y capitalización',
  },
};

export function getFinanceMethodSources(id: string, locale: string): EditorialSource[] {
  const language: FinanceContentLocale = locale === 'ru' || locale === 'uk' || locale === 'de' || locale === 'es' ? locale : 'en';
  return (financeMethodSources[id] ?? []).map((source) => ({
    ...source,
    label: sourceLabels[language][source.href!] ?? source.label,
  }));
}

// These are authored subject explanations for the public finance routes, not
// generated substitutions. Deposit remains RU-only under the current locale
// registry. Numerical scenarios are covered in the corresponding engine tests.
export const financeContractContent: Partial<Record<FinanceContentLocale, Record<string, FinanceContractCopy>>> = {
  ru: {
    'credit-calculator': {
      longDescription: 'При сравнении кредитов небольшой платёж может скрывать долгий срок и большую сумму процентов. Здесь можно отдельно увидеть базовый платёж, проценты, введённую разовую комиссию и результат постоянной ежемесячной доплаты. Аннуитет сохраняет базовый платёж, дифференцированная схема сохраняет долю погашаемого долга. График показывает, какая часть каждого платежа погашает долг, а какая идёт на проценты.',
      howToUse: [
        'Введите сумму кредита и номинальную годовую процентную ставку. Не подставляйте полную стоимость кредита вместо процентной ставки.',
        'Задайте срок в месяцах или годах. Он должен соответствовать целому числу месяцев от 1 до 1200; например, 1,5 года — 18 месяцев.',
        'Выберите аннуитетную или дифференцированную схему. При необходимости укажите доплату каждый месяц и разовую комиссию.',
        'Сопоставьте сумму процентов, переплату и фактический срок. В таблице показаны первые 12 месяцев и последний платёж более длинного графика.',
      ],
      howItWorks: 'Обозначим сумму кредита P, число месяцев n, месячную долю ставки r = годовая ставка / 100 / 12. Аннуитетный платёж A = P × r / (1 − (1 + r)^−n), а при нулевой ставке A = P / n. В каждом месяце проценты равны остатку долга × r; остальная часть платежа уменьшает долг. В дифференцированной схеме базовое погашение долга равно P / n. Доплата каждый месяц ускоряет погашение при сохранении базового платежа. Последний фактический платёж ограничен оставшимся долгом с процентами. Разовая комиссия прибавляется один раз к общей сумме выплат и переплате, но не включается в долг и не увеличивает проценты. Месяцы считаются равными долями года; суммы графика округляются только для показа, поэтому их видимая сумма может отличаться от округлённого итога.',
      example: 'Учебные суммы указаны в денежных единицах. Для 120 000 на 12 месяцев под номинальные 12% при дифференцированной схеме месячная ставка равна 1%, а погашение долга — 10 000. Первый платёж: 10 000 + 1200 = 11 200, последний: 10 000 + 100 = 10 100. Сумма процентов равна 7800; комиссия 300 повышает все выплаты до 128 100 и переплату до 8100. Граничный случай: для 120 000 на 12 месяцев под 0% аннуитетный платёж равен 10 000. С комиссией 2500 проценты остаются нулевыми, но общие выплаты составляют 122 500.',
      faq: [
        { q: 'Как разовая комиссия влияет на кредитный расчёт?', a: 'Учитывается только введённая комиссия: она один раз добавляется к общей сумме выплат и переплате. Кредитный график и сумма процентов остаются прежними. Если комиссия финансируется кредитом, этот сценарий нужно считать отдельно; автоматического финансирования комиссии здесь нет.' },
        { q: 'Что означает сокращение срока при ежемесячной доплате?', a: 'Базовый платёж сохраняется, а постоянная доплата гасит долг быстрее. Калькулятор не пересчитывает кредит на меньший регулярный платёж. В последнем месяце платится только фактически оставшийся долг с процентами.' },
        { q: 'Можно ли сравнивать этот результат с полной стоимостью кредита?', a: 'Расчёт показывает модель с введённой номинальной ставкой и одной указанной комиссией. Полная стоимость кредита или регулируемый APR не вычисляются. Страховки, остальные услуги, реальные даты и правила кредитора нужно сверять с его раскрытием стоимости и графиком.' },
      ],
      disclaimer: 'Предварительный расчёт с постоянной номинальной ставкой и равными месячными периодами. Введённая разовая комиссия включена; полная стоимость кредита, страхование и условия конкретного договора не определяются.',
    },
    'mortgage-calculator': {
      longDescription: 'Первоначальный взнос уменьшает кредит, а ежемесячная страховка увеличивает расходы, не погашая долг. Ипотечный расчёт разделяет эти величины: показывает сумму кредита, базовый платёж, проценты и общую стоимость с введёнными расходами. Взнос можно задать суммой или процентом цены; постоянная доплата позволяет оценить более раннее погашение при той же базовой платёжной схеме.',
      howToUse: [
        'Введите цену недвижимости и выберите, как задан взнос: суммой или процентом. Взнос должен быть неотрицательным и меньше цены.',
        'Задайте номинальную годовую ставку и срок до 100 лет. Дробный год допустим, если получается целое число месяцев, например 1,5 года.',
        'Выберите платёжную схему. Укажите постоянную доплату и известную сумму страховки и расходов в месяц, если они нужны для сценария.',
        'Читайте базовый платёж отдельно от расхода со страховкой. Сравните проценты, фактический срок и общую стоимость с первоначальным взносом.',
      ],
      howItWorks: 'Кредит P = цена недвижимости − первоначальный взнос; в процентном режиме взнос = цена × процент / 100. При месячной доле ставки r = годовая ставка / 100 / 12 и n месяцах аннуитет A = P × r / (1 − (1 + r)^−n); для 0% A = P / n. Дифференцированная схема погашает P / n долга за месяц, начисляя проценты на остаток. Доплата сокращает срок, а последний платёж ограничен фактическим долгом. Введённая страховка и расходы в месяц умножаются на фактическое число платежей, включая последний месяц. Они не меняют долг и проценты. «Переплата» означает проценты по кредиту; дополнительные расходы показаны отдельно. Общая стоимость равна всем кредитным платежам плюс взнос и введённые расходы. Точные даты, налоги и автоматически рассчитанная стоимость сделки в модель не входят.',
      example: 'Учебный сценарий в денежных единицах: цена 150 000, взнос 30 000 (20%), срок 1 год и номинальная ставка 12%. Кредит равен 120 000. При дифференцированной схеме первый платёж — 11 200, проценты за срок — 7800, стоимость с взносом без дополнительных расходов — 157 800. Граничный сценарий с той же ценой и взносом: при 0% базовый платёж равен 10 000. Доплата 10 000 каждый месяц гасит кредит за 6 месяцев. Страховка и расходы 500 в месяц добавляют 3000, общая стоимость получается 153 000. Базовый платёж здесь не равен расходу 20 500 в месяц.',
      faq: [
        { q: 'Почему ипотечная переплата не включает введённую страховку?', a: 'Эта строка показывает только проценты по кредиту. Страховка и другие введённые ежемесячные расходы выводятся отдельной суммой и входят в общую стоимость с взносом. Они не погашают основную задолженность.' },
        { q: 'Нужно ли менять страховку после досрочного погашения в ипотечном сценарии?', a: 'Модель начисляет указанную сумму расходов только за фактические месяцы погашения кредита. В реальности страхование недвижимости может продолжаться после закрытия ипотеки; такие последующие расходы здесь не прогнозируются.' },
        { q: 'Есть ли универсальный минимальный первоначальный взнос для этого расчёта?', a: 'Нет. Форма допускает любой неотрицательный взнос меньше цены. Требования банка зависят от страны, программы и договора; математическая допустимость взноса не означает, что кредитор одобрит такую ипотеку.' },
      ],
      disclaimer: 'Предварительная модель ипотеки, а не предложение банка. Введённые ежемесячные расходы включены; налоги, тарифы страхования, комиссии сделки и индивидуальные правила досрочного погашения автоматически не определяются.',
    },
    'deposit-calculator': {
      longDescription: 'Доход пополняемого вклада зависит не только от ставки, но и от того, когда деньги начинают участвовать в начислении. Этот расчёт разделяет внесённые средства и проценты, позволяет выбрать пополнение в начале или конце месяца и сравнить капитализацию с выплатой накопленного дохода в конце. Таблица показывает модельную сумму с уже начисленными процентами, включая ещё не присоединённые к основному балансу.',
      howToUse: [
        'Введите начальную сумму, номинальную годовую ставку и целое число месяцев от 1 до 1200.',
        'Выберите капитализацию: ежемесячно, ежеквартально или ежегодно. Без капитализации начисленные проценты не увеличивают базу следующего начисления.',
        'Укажите сумму ежемесячного пополнения и его момент: начало или конец месяца. Для вклада без пополнений поставьте 0.',
        'Отделяйте сумму пополнений от процентного дохода. Эффективная годовая ставка показывает теоретический годовой результат без пополнений, а не доходность всех ваших взносов.',
      ],
      howItWorks: 'Месячная доля ставки r = номинальная годовая ставка / 100 / 12. В начале месяца выбранное раннее пополнение добавляется к основному балансу; затем начисляются проценты баланс × r. Накопленный доход присоединяется к балансу через 1, 3 или 12 месяцев согласно периоду капитализации. Позднее пополнение вносится после начисления и участвует в доходе со следующего месяца. Без капитализации проценты не приносят новых процентов, но сами пополнения тоже входят в базу начисления. В итог на выбранном сроке включается доход за неполный период капитализации. Без пополнений для полного числа периодов F = P × (1 + j / k)^N, где P — начальная сумма, j — годовая ставка как доля, k — число капитализаций в год, N — число периодов. Годовой эквивалент равен ((1 + j / k)^k − 1) × 100%. Месяцы в модели равны 1/12 года, налоги и условия досрочного снятия не применяются.',
      example: 'Вклад 100 000 ₽ на 12 месяцев под номинальные 12% с ежемесячной капитализацией и без пополнений: r = 0,01; итог = 100 000 × 1,01^12 = 112 682,50 ₽ до округления. Интерфейс показывает 112 683 ₽ и 12 683 ₽ дохода. Сценарий без капитализации: начальная сумма 1000 ₽, ставка 12%, срок 12 месяцев, пополнение 100 ₽ в конце месяца. Начальная сумма приносит 120 ₽, пополнения — 66 ₽; итог равен 2386 ₽. При тех же пополнениях в начале месяца доход от них составляет 78 ₽, итог — 2398 ₽. Граничный случай: при ставке 0% начальная сумма 0 ₽ и шесть взносов по 100 ₽ дают 600 ₽ без процентного дохода.',
      faq: [
        { q: 'Как понять баланс вклада до следующей капитализации?', a: 'В таблице показаны основной баланс и уже начисленные проценты вместе. До даты капитализации эти проценты ещё не приносят новые проценты. Их доступность для снятия определяется договором банка, а не числом в этой таблице.' },
        { q: 'Всегда ли эффективная ставка вклада выше номинальной?', a: 'Нет. При нулевой ставке или ежегодной капитализации они совпадают. При положительной ставке и более частой капитализации годовой эквивалент выше номинального. Это модельная ставка без пополнений, а не регулируемый банковский APY.' },
        { q: 'Что происходит с процентами за незавершённый период вклада?', a: 'Модель включает начисленный доход в итог на выбранном сроке, даже если следующий момент капитализации ещё не наступил. Это допущение не описывает досрочное закрытие реального вклада: банк может выплатить иной доход по условиям договора.' },
      ],
      disclaimer: 'Модель вклада с постоянной номинальной ставкой и равными месячными периодами. Налоги, реальные календарные даты, смена ставки и банковские правила досрочного снятия не учитываются; доход не гарантируется этим расчётом.',
    },
    'compound-interest': {
      longDescription: 'В росте капитала важно отделить собственные взносы от начисленного дохода. Здесь частота пополнений и частота капитализации задаются независимо: ежемесячный взнос не получает проценты за весь год, если внесён в его середине. Таблица показывает накопления по годам и итоговый период. Расчёт подходит для учебного сравнения постоянных ставок и планов взносов, но не прогнозирует рыночную доходность.',
      howToUse: [
        'Введите начальную сумму и постоянную номинальную годовую ставку. Модель принимает неотрицательные ставки.',
        'Задайте срок до 1000 лет; дробная часть года должна соответствовать целому числу месяцев.',
        'Выберите частоту капитализации. Отдельно укажите сумму пополнения и частоту внесения: месяц, квартал или год.',
        'Пополнения вносятся в конце выбранного периода. Сравните внесённую сумму и прибыль; для длинного срока таблица сохраняет итоговый период после первых 30 лет.',
      ],
      howItWorks: 'Месячная доля ставки r = годовая ставка / 100 / 12. Каждый месяц основной баланс B приносит B × r начисленного дохода. Доход присоединяется к капиталу раз в 1, 3 или 12 месяцев согласно частоте капитализации. Пополнение добавляется в конце своего периода после начисления процентов и не зарабатывает за время до внесения. Без пополнений на полных периодах F = P × (1 + j / k)^N, где P — начальная сумма, j — годовая ставка как доля, k — капитализаций в год, N — число полных периодов. Если взносы и капитализация совпадают по периодам, их будущая стоимость равна C × ((1 + i)^N − 1) / i: C — взнос в конце периода, i — ставка периода. При разных частотах считается помесячный денежный поток. Доход за неполный последний период включается в итог, но не капитализируется раньше срока. «Прибыль» равна итогу минус все внесённые деньги; инфляция, налоги, комиссии и годы с убытком не моделируются.',
      example: 'Учебный сценарий в денежных единицах: начальная сумма 1000, номинальная ставка 12%, срок 1 год, пополнение 100 каждый месяц, капитализация ежегодная. Начальная сумма приносит 120. Взносы зарабатывают за 11, 10, …, 0 месяцев: 100 × 0,01 × (11 + 10 + … + 0) = 66. Внесено 2200, прибыль 186, итог 2386. Если вносить по 100 ежеквартально, внесено 1400 и прибыль 138, итог 1538. Граничный неполный период: без взносов 1000 под 12% с ежегодной капитализацией за 1,5 года дают 1120 после первого года и ещё 67,20 начисленного дохода за полгода; итог 1187,20, на экране 1187.',
      faq: [
        { q: 'Почему месячный взнос не получает полный год процентов при ежегодной капитализации?', a: 'Начисление зависит от времени, когда деньги уже находятся в балансе. Взнос в конце первого месяца приносит доход только за следующие 11 месяцев. Капитализация меняет момент присоединения процентов к капиталу, а не дату начала владения взносом.' },
        { q: 'Как выбрать ставку для сценария роста капитала?', a: 'Введите собственные учебные варианты и сравните их при одинаковом плане взносов. Калькулятор не устанавливает реалистичную рыночную доходность: ставка остаётся постоянной и неотрицательной, отрицательные годы и колебания не учитываются.' },
        { q: 'Почему финальный капитал отличается от внесённой суммы?', a: 'Внесённая сумма — начальный капитал плюс фактически внесённые пополнения. Разница с итогом — модельный процентный доход. Это номинальная сумма до налогов и расходов; она не показывает покупательную способность после инфляции.' },
      ],
      disclaimer: 'Учебная модель постоянной неотрицательной номинальной ставки с пополнениями в конце периода. Результат не является прогнозом рынка или гарантией дохода; убытки, инфляция, налоги и комиссии не учитываются.',
    },
  },
  en: {
    'credit-calculator': {
      longDescription: 'A smaller loan payment can hide a longer term and a higher interest bill. This calculator separates the base payment, loan interest, an entered one-time fee and the effect of a fixed monthly extra payment. An annuity keeps the base payment constant; equal-principal repayments keep the principal component constant. The schedule shows how each actual payment is split between interest and principal.',
      howToUse: [
        'Enter the principal and nominal annual interest rate. Do not substitute a lender’s APR for the interest rate.',
        'Choose months or years. The term must equal a whole number of months between 1 and 1,200; 1.5 years means 18 months.',
        'Choose the repayment method, then enter a fixed monthly extra payment and one-time fee if your scenario requires them.',
        'Compare interest, extra cost and actual repayment term. The table shows the first 12 months and the final payment of a longer schedule.',
      ],
      howItWorks: 'Let P be the principal, n the number of months and r = annual interest rate / 100 / 12. The annuity payment is A = P × r / (1 − (1 + r)^−n); at zero interest, A = P / n. Each month, interest equals outstanding principal × r, and the rest of the payment repays principal. With equal-principal repayments, the base principal component is P / n. A monthly extra payment shortens the term while the base scheduled payment stays fixed. The final actual payment is capped at principal and interest still due. An entered one-time fee adds once to total repayment and extra cost; it is not financed and does not increase loan interest. Every month represents one twelfth of a year. Values are rounded only for display, so adding rounded schedule cells can differ from the rounded total.',
      example: 'These illustrative amounts use currency units. For 120,000 over 12 months at a nominal 12% annual rate with equal-principal repayments, r is 1% and monthly principal repayment is 10,000. The first payment is 10,000 + 1,200 = 11,200; the last is 10,000 + 100 = 10,100. Interest totals 7,800. A one-time fee of 300 makes total repayment 128,100 and extra cost 8,100. Boundary case: at 0% over the same term, the annuity payment is 10,000. A fee of 2,500 leaves interest at zero but makes total repayment 122,500.',
      faq: [
        { q: 'How does the one-time fee affect this loan estimate?', a: 'Only the fee you enter is included, once, in total repayment and extra cost. The loan schedule and interest do not change. Financing the fee would require a separate scenario; this calculator does not add it to principal automatically.' },
        { q: 'What does a shorter term from a monthly extra payment mean?', a: 'The base payment remains fixed and the extra amount repays principal faster. The calculator does not recast the loan to a lower recurring payment. The final actual payment is only the principal and interest still due.' },
        { q: 'Does this loan estimate calculate a lender’s APR?', a: 'No. It models a nominal interest rate and one supplied fee. Regulated APR or full cost of credit is not calculated. Check the lender’s disclosures and schedule for insurance, other products, actual payment dates and contract rules.' },
      ],
      disclaimer: 'Estimate with a constant nominal rate and equal model months. The entered one-time fee is included; regulated APR, insurance and lender-specific contract costs are not determined.',
    },
    'mortgage-calculator': {
      longDescription: 'A down payment reduces the mortgage principal; monthly insurance increases outgoings without repaying debt. This estimate keeps those roles separate and shows financed principal, the base payment, loan interest and total cost with the expenses you enter. Set the down payment as an amount or a percentage. A fixed monthly extra payment models earlier payoff under the same base repayment method.',
      howToUse: [
        'Enter the property price and choose a down payment amount or percentage. It must be nonnegative and smaller than the price.',
        'Enter a nominal annual interest rate and a term up to 100 years. Fractional years are accepted if they equal a whole number of months, such as 1.5 years.',
        'Choose the payment method. Add a fixed monthly extra payment and known monthly insurance or expenses if relevant.',
        'Read the base payment separately from outgoings including insurance. Compare interest, the actual payoff term and total cost including the down payment.',
      ],
      howItWorks: 'Principal P = property price − down payment. In percentage mode, down payment = price × percentage / 100. For monthly rate r = annual interest rate / 100 / 12 and n months, the annuity payment is A = P × r / (1 − (1 + r)^−n); at 0%, A = P / n. Equal-principal repayments use P / n each month plus interest on the outstanding balance. A fixed extra payment shortens the term, and the final payment is capped at the amount due. Supplied monthly insurance and expenses are multiplied by actual repayment months, including the final month. They do not change principal or interest. Overpayment means loan interest; additional expenses have a separate total. Total cost equals loan payments plus down payment plus entered expenses. Actual dates, automatic taxes and closing-cost estimates are outside the model.',
      example: 'Illustrative currency units: property price 150,000, down payment 30,000 (20%), term 1 year and nominal annual rate 12%. Financed principal is 120,000. With equal-principal repayments, the first payment is 11,200, total interest 7,800 and cost including the down payment 157,800 before extra expenses. Boundary scenario: at 0%, the base payment is 10,000. Paying an extra 10,000 each month clears the loan in 6 months. Monthly insurance and expenses of 500 total 3,000, making total cost 153,000. The base payment differs from the planned monthly outgoings of 20,500.',
      faq: [
        { q: 'Why does mortgage overpayment exclude the insurance amount I entered?', a: 'This row measures loan interest only. Supplied monthly insurance and expenses have a separate total and are included in total cost with the down payment. They do not repay principal.' },
        { q: 'What happens to mortgage expenses after early payoff in this model?', a: 'The entered expense is counted only for actual loan repayment months. Property insurance may continue after a real mortgage is paid off; those later expenses are not projected here.' },
        { q: 'Is there a universal minimum mortgage down payment in this estimate?', a: 'No. Any nonnegative down payment smaller than the price is mathematically accepted. Lender requirements depend on country, programme and contract; a valid calculation does not imply approval.' },
      ],
      disclaimer: 'A mortgage scenario, not a lender offer. Entered monthly expenses are included; taxes, insurance tariffs, closing fees and lender-specific early repayment rules are not estimated automatically.',
    },
    'compound-interest': {
      longDescription: 'Capital growth needs a distinction between your contributions and earned interest. Contribution frequency and capitalization frequency are separate here: money deposited midway through a year does not earn a full year of interest. The table shows yearly checkpoints and the actual final period. Use it to compare illustrative constant rates and contribution plans; it does not predict market returns.',
      howToUse: [
        'Enter initial capital and a constant nominal annual rate. This model accepts nonnegative rates.',
        'Choose a term up to 1,000 years. A fractional year must equal a whole number of months.',
        'Set capitalization frequency separately from contribution amount and frequency: monthly, quarterly or annually.',
        'Contributions are made at the end of their interval. Compare invested funds with profit; longer tables keep the actual final period after the first 30 years.',
      ],
      howItWorks: 'The monthly rate is r = annual rate / 100 / 12. Each month, principal balance B earns B × r in accrued interest. Accrued interest joins capital every 1, 3 or 12 months according to capitalization frequency. Contributions are added at the end of their interval, after interest accrual, and earn nothing before they are deposited. Without contributions, complete periods follow F = P × (1 + j / k)^N: P is initial capital, j the annual rate as a fraction, k capitalizations per year and N complete periods. When contribution and capitalization intervals match, contributions have future value C × ((1 + i)^N − 1) / i, where C is the contribution at period end and i the period rate. Mixed frequencies use monthly cash flows. Interest for an unfinished final capitalization period is included at the end without early capitalization. Profit is final capital minus all contributions. Inflation, taxes, fees and negative-return years are not modeled.',
      example: 'Illustrative currency units: initial capital 1,000, nominal annual rate 12%, term 1 year, monthly contribution 100 and annual capitalization. Initial capital earns 120. Contributions earn for 11, 10, …, 0 months: 100 × 0.01 × (11 + 10 + … + 0) = 66. Invested funds are 2,200, profit 186 and final capital 2,386. With contributions of 100 each quarter instead, invested funds are 1,400, profit 138 and final capital 1,538. Partial-period boundary: without contributions, 1,000 at 12% with annual capitalization over 1.5 years becomes 1,120 after year 1, plus 67.20 accrued in the next half-year; final capital is 1,187.20, displayed as 1,187.',
      faq: [
        { q: 'Why does a monthly contribution not earn a full year under annual capitalization?', a: 'Interest accrues only after money is in the balance. A contribution at the end of month 1 earns for the next 11 months. Capitalization sets when earned interest joins principal; it does not move a contribution’s deposit date backward.' },
        { q: 'How should I choose a rate for a capital-growth scenario?', a: 'Use your own illustrative rates and keep the contribution plan equal when comparing them. The calculator does not determine a realistic market return: it holds a nonnegative rate constant and excludes losses or fluctuations.' },
        { q: 'Why is final capital different from the invested amount?', a: 'Invested funds are initial capital plus contributions actually made. The difference from the final amount is modeled interest. Both are nominal amounts before taxes and costs, not purchasing power after inflation.' },
      ],
      disclaimer: 'Illustrative constant nonnegative nominal-rate model with contributions at period end. The result is neither a market forecast nor guaranteed income; losses, inflation, taxes and fees are excluded.',
    },
  },
  uk: {
    'credit-calculator': {
      longDescription: 'Менший кредитний платіж може приховувати довший строк і більшу суму процентів. Тут окремо показано базовий платіж, проценти, введену разову комісію та ефект сталої щомісячної доплати. Аннуїтет зберігає базовий платіж, диференційована схема — частку погашення боргу. Графік розділяє кожний фактичний платіж на проценти й основний борг.',
      howToUse: [
        'Введіть суму кредиту та номінальну річну процентну ставку. Не підставляйте повну вартість кредиту замість ставки.',
        'Оберіть місяці або роки. Строк має дорівнювати цілій кількості місяців від 1 до 1200; 1,5 року — 18 місяців.',
        'Оберіть аннуїтетну або диференційовану схему. За потреби додайте сталу щомісячну доплату й разову комісію.',
        'Порівняйте проценти, переплату й фактичний строк. Таблиця містить перші 12 місяців і останній платіж довшого графіка.',
      ],
      howItWorks: 'Нехай P — сума кредиту, n — кількість місяців, r = річна ставка / 100 / 12. Аннуїтетний платіж A = P × r / (1 − (1 + r)^−n), а за нульової ставки A = P / n. Щомісяця проценти дорівнюють залишку боргу × r; решта платежу зменшує борг. У диференційованій схемі базове погашення боргу дорівнює P / n. Щомісячна доплата скорочує строк зі збереженням базового платежу. Останній фактичний платіж обмежено боргом і процентами, що залишилися. Разова комісія один раз додається до загальних виплат і переплати, але не включається в борг та не збільшує проценти. Модельні місяці становлять рівні частки року. Округлення застосовується для показу, тому сума округлених рядків може відрізнятися від округленого підсумку.',
      example: 'Навчальні суми в грошових одиницях: 120 000 на 12 місяців під номінальні 12% за диференційованою схемою. Місячна ставка — 1%, погашення боргу — 10 000. Перший платіж: 10 000 + 1200 = 11 200; останній: 10 000 + 100 = 10 100. Проценти становлять 7800. Разова комісія 300 збільшує загальні виплати до 128 100, переплату — до 8100. Граничний випадок: за ставки 0% аннуїтетний платіж для тих самих суми й строку дорівнює 10 000. Комісія 2500 не створює процентів, але збільшує виплати до 122 500.',
      faq: [
        { q: 'Як разова комісія впливає на цей кредитний розрахунок?', a: 'Введена комісія один раз додається до загальних виплат і переплати. Графік боргу та проценти не змінюються. Фінансування комісії потребує окремого сценарію; автоматично до суми кредиту вона не додається.' },
        { q: 'Що означає скорочення кредитного строку через щомісячну доплату?', a: 'Базовий платіж зберігається, а доплата швидше погашає борг. Модель не зменшує наступний регулярний платіж. В останньому місяці сплачуються лише фактичні борг і проценти, що залишилися.' },
        { q: 'Чи визначає цей кредитний розрахунок регульований APR?', a: 'Ні. Моделюються номінальна ставка й одна введена комісія. APR або повна вартість кредиту не обчислюються. Страхування, інші послуги, точні дати й правила договору перевіряйте за розкриттям вартості та графіком кредитора.' },
        { q: 'Чому сума видимих кредитних платежів може не збігатися з підсумком?', a: 'Кожний рядок округлюється лише для показу; проценти та залишок боргу обчислюються без такого проміжного округлення. Підсумок округлюється окремо. У довгому графіку також показано лише перші 12 місяців і останній платіж, тому видимі рядки не представляють усі виплати.' },
      ],
      disclaimer: 'Попередній розрахунок зі сталою номінальною ставкою й рівними модельними місяцями. Введену разову комісію враховано; повна вартість кредиту, страхування та умови конкретного договору не визначаються.',
    },
    'mortgage-calculator': {
      longDescription: 'Початковий внесок зменшує іпотечний борг, а щомісячне страхування збільшує витрати, не погашаючи кредит. Розрахунок розділяє ці величини: суму кредиту, базовий платіж, проценти й загальну вартість із введеними витратами. Внесок можна задати сумою або процентом ціни. Стала щомісячна доплата показує раніше погашення зі збереженням базової схеми.',
      howToUse: [
        'Введіть ціну нерухомості й оберіть суму або процент початкового внеску. Внесок має бути невід’ємним і меншим за ціну.',
        'Задайте номінальну річну ставку та строк до 100 років. Дробовий рік допускається, якщо це ціла кількість місяців, наприклад 1,5 року.',
        'Оберіть платіжну схему. За потреби додайте щомісячну доплату й відому суму страхування та витрат за місяць.',
        'Розглядайте базовий платіж окремо від витрат зі страхуванням. Порівняйте проценти, фактичний строк і загальну вартість із внеском.',
      ],
      howItWorks: 'Кредит P = ціна нерухомості − початковий внесок; у процентному режимі внесок = ціна × процент / 100. Для r = річна ставка / 100 / 12 і n місяців аннуїтет A = P × r / (1 − (1 + r)^−n); за 0% A = P / n. Диференційована схема погашає P / n боргу щомісяця та додає проценти на залишок. Доплата скорочує строк, останній платіж обмежено сумою боргу з процентами. Введені страхування й витрати за місяць множаться на фактичну кількість платежів, включно з останнім місяцем; борг і проценти вони не змінюють. Переплата означає проценти за кредитом, додаткові витрати показано окремо. Загальна вартість — усі кредитні платежі плюс внесок і введені витрати. Точні дати, податки та автоматично визначена вартість угоди не моделюються.',
      example: 'Навчальний сценарій у грошових одиницях: ціна 150 000, внесок 30 000 (20%), строк 1 рік, номінальна ставка 12%. Кредит — 120 000. За диференційованою схемою перший платіж становить 11 200, проценти — 7800, загальна вартість із внеском без інших витрат — 157 800. Граничний сценарій: за 0% базовий платіж дорівнює 10 000. Доплата 10 000 щомісяця погашає кредит за 6 місяців. Страхування й витрати 500 за місяць додають 3000; загальна вартість — 153 000. Базовий платіж відрізняється від місячних витрат 20 500.',
      faq: [
        { q: 'Чому іпотечна переплата не містить введене страхування?', a: 'Цей рядок показує лише кредитні проценти. Введені страхування й витрати мають окремий підсумок та включаються в загальну вартість із внеском. Вони не погашають основний борг.' },
        { q: 'Що відбувається з іпотечними витратами після дострокового погашення в моделі?', a: 'Введена сума враховується тільки за фактичні місяці погашення кредиту. У реальності страхування нерухомості може тривати після закриття іпотеки; наступні витрати тут не прогнозуються.' },
        { q: 'Чи є універсальний мінімальний іпотечний внесок для цієї моделі?', a: 'Ні. Допускається будь-який невід’ємний внесок менший за ціну. Вимоги банку залежать від країни, програми й договору; математично допустимий сценарій не означає схвалення іпотеки.' },
        { q: 'Чи дорівнює іпотечна загальна вартість усім витратам покупця?', a: 'Вона складається з початкового внеску, фактичних кредитних платежів і введених щомісячних витрат. Податки, нотаріальні послуги, оцінка, ремонт та інші разові витрати автоматично не додаються. Внесок уже включений у підсумок: додавати його вдруге не потрібно.' },
      ],
      disclaimer: 'Іпотечний сценарій, а не пропозиція банку. Введені щомісячні витрати враховано; податки, страхові тарифи, комісії угоди й індивідуальні правила дострокового погашення автоматично не визначаються.',
    },
    'compound-interest': {
      longDescription: 'У зростанні капіталу варто відділяти власні внески від нарахованого доходу. Частота поповнень і капіталізації задаються окремо: гроші, внесені посеред року, не отримують доходу за весь рік. Таблиця показує річні контрольні точки й фактичний кінцевий період. Розрахунок порівнює навчальні сталі ставки та плани внесків, але не прогнозує ринки.',
      howToUse: [
        'Введіть початкову суму й сталу номінальну річну ставку. Модель приймає невід’ємні ставки.',
        'Оберіть строк до 1000 років. Дробова частина року має дорівнювати цілій кількості місяців.',
        'Задайте частоту капіталізації окремо від суми й частоти поповнень: місяць, квартал або рік.',
        'Поповнення вносяться наприкінці свого періоду. Порівняйте внесені кошти й прибуток; після перших 30 років таблиця зберігає підсумковий період.',
      ],
      howItWorks: 'Місячна частка ставки r = річна ставка / 100 / 12. Щомісяця основний баланс B приносить B × r нарахованого доходу. Доходи приєднуються до капіталу через 1, 3 або 12 місяців за частотою капіталізації. Поповнення вноситься наприкінці свого періоду після нарахування й не заробляє за час до внесення. Без поповнень повні періоди описує F = P × (1 + j / k)^N: P — початковий капітал, j — річна ставка як частка, k — капіталізацій на рік, N — повних періодів. Коли періоди внесків і капіталізації збігаються, майбутня вартість внесків дорівнює C × ((1 + i)^N − 1) / i: C — внесок наприкінці періоду, i — ставка періоду. Різні частоти моделюються щомісячним потоком. Доходи незавершеного кінцевого періоду входять у підсумок без ранньої капіталізації. Прибуток — підсумок мінус внесені кошти; інфляція, податки, комісії та збиткові роки не враховуються.',
      example: 'Навчальні грошові одиниці: початкова сума 1000, номінальна ставка 12%, строк 1 рік, щомісячний внесок 100, щорічна капіталізація. Початкова сума приносить 120. Внески працюють 11, 10, …, 0 місяців: 100 × 0,01 × (11 + 10 + … + 0) = 66. Внесено 2200, прибуток 186, підсумок 2386. За внесків 100 щокварталу внесено 1400, прибуток 138, підсумок 1538. Неповний кінцевий період: без внесків 1000 під 12% зі щорічною капіталізацією за 1,5 року дають 1120 після першого року та ще 67,20 нарахованого доходу за пів року; підсумок 1187,20, на екрані 1187.',
      faq: [
        { q: 'Чому місячний внесок не отримує повний рік процентів за щорічної капіталізації?', a: 'Проценти нараховуються лише після появи грошей у балансі. Внесок наприкінці першого місяця приносить дохід за наступні 11 місяців. Капіталізація визначає приєднання процентів, а не переносить дату внесення назад.' },
        { q: 'Як обрати ставку для сценарію зростання капіталу?', a: 'Використовуйте власні навчальні варіанти, порівнюючи їх з однаковим планом внесків. Модель не визначає реалістичну ринкову дохідність: ставка лишається сталою й невід’ємною, збитки та коливання не враховуються.' },
        { q: 'Чому кінцевий капітал відрізняється від внесеної суми?', a: 'Внесена сума — початковий капітал і фактичні поповнення. Різниця з підсумком — модельний процентний дохід. Це номінальні суми до податків і витрат, а не купівельна спроможність після інфляції.' },
        { q: 'Як визначається дохід за неповний рік зростання капіталу?', a: 'Строк має відповідати цілій кількості місяців. Наприклад, 1,5 року означає 18 щомісячних нарахувань. Накопичені проценти входять у кінцевий результат, навіть якщо наступний момент капіталізації ще не настав; внески за майбутні місяці не додаються.' },
      ],
      disclaimer: 'Навчальна модель сталої невід’ємної номінальної ставки з внесками наприкінці періоду. Результат не прогнозує ринок і не гарантує дохід; збитки, інфляція, податки та комісії не враховуються.',
    },
  },
  de: {
    'credit-calculator': {
      longDescription: 'Eine kleinere Kreditrate kann eine längere Laufzeit und mehr Zinsen verbergen. Dieser Rechner trennt reguläre Rate, Kreditzinsen, eingegebene einmalige Gebühr und die Wirkung einer festen monatlichen Sondertilgung. Bei der Annuität bleibt die reguläre Rate gleich, bei gleichmäßiger Tilgung der Tilgungsanteil. Der Plan zeigt, welcher Teil der tatsächlichen Zahlung den Kredit tilgt und welcher Zinsen bezahlt.',
      howToUse: [
        'Trage Kreditbetrag und nominalen Jahreszins ein. Verwende dafür nicht den effektiven Jahreszins eines Kreditangebots.',
        'Wähle Monate oder Jahre. Die Laufzeit muss 1 bis 1200 ganze Monate ergeben; 1,5 Jahre sind 18 Monate.',
        'Wähle Annuität oder gleichmäßige Tilgung. Ergänze bei Bedarf eine feste monatliche Sondertilgung und eine einmalige Gebühr.',
        'Vergleiche Zinsen, Mehrkosten und tatsächliche Laufzeit. Bei längeren Plänen zeigt die Tabelle die ersten zwölf Monate und die letzte Zahlung.',
      ],
      howItWorks: 'P bezeichnet den Kreditbetrag, n die Monatszahl und r = nominaler Jahreszins / 100 / 12. Die Annuität ist A = P × r / (1 − (1 + r)^−n); bei null Zinsen gilt A = P / n. Monatliche Zinsen sind Restschuld × r, der übrige Zahlungsbetrag tilgt den Kredit. Bei gleichmäßiger Tilgung beträgt der reguläre Tilgungsanteil P / n. Eine monatliche Sondertilgung verkürzt die Laufzeit bei gleicher regulärer Rate. Die letzte tatsächliche Zahlung wird auf die noch fällige Restschuld mit Zinsen begrenzt. Die eingegebene einmalige Gebühr erhöht Gesamtauszahlung und Mehrkosten genau einmal. Sie wird nicht mitfinanziert und erzeugt keine zusätzlichen Kreditzinsen. Jeder Modellmonat entspricht einem Zwölftel des Jahres. Erst die Anzeige wird gerundet; die Summe gerundeter Tabellenwerte kann deshalb vom gerundeten Gesamtbetrag abweichen.',
      example: 'Die Beispiele verwenden Geldeinheiten. Für 120 000 über zwölf Monate bei nominal 12 % pro Jahr und gleichmäßiger Tilgung sind Monatszins 1 % und Tilgung 10 000. Erste Zahlung: 10 000 + 1200 = 11 200, letzte: 10 000 + 100 = 10 100. Zinsen insgesamt: 7800. Eine einmalige Gebühr von 300 erhöht die Gesamtauszahlung auf 128 100 und die Mehrkosten auf 8100. Grenzfall: Bei 0 % beträgt die Annuität für denselben Betrag und Zeitraum 10 000. Eine Gebühr von 2500 lässt die Zinsen bei null, erhöht aber die Gesamtauszahlung auf 122 500.',
      faq: [
        { q: 'Wie wirkt die einmalige Gebühr in dieser Kreditrechnung?', a: 'Die eingegebene Gebühr wird einmal zu Gesamtauszahlung und Mehrkosten addiert. Zahlungsplan und Kreditzinsen bleiben gleich. Eine mitfinanzierte Gebühr muss als eigener Fall gerechnet werden; sie wird hier nicht automatisch dem Kreditbetrag zugeschlagen.' },
        { q: 'Was bedeutet die kürzere Kreditlaufzeit durch monatliche Sondertilgung?', a: 'Die reguläre Rate bleibt gleich und die Sondertilgung verringert die Restschuld schneller. Das Modell senkt die folgenden regulären Raten nicht. Bei der letzten Zahlung werden nur noch fällige Restschuld und Zinsen bezahlt.' },
        { q: 'Ermittelt diese Kreditrechnung einen gesetzlich vorgeschriebenen effektiven Jahreszins?', a: 'Nein. Modelliert werden ein nominaler Zins und eine eingegebene Gebühr. Ein gesetzlicher Effektivzins oder vollständiger Kreditpreis wird nicht bestimmt. Prüfe beim Kreditgeber Versicherung, weitere Produkte, tatsächliche Zahlungstermine und Vertragsbedingungen.' },
        { q: 'Wie unterscheiden sich Annuität und gleichmäßige Tilgung im Kreditplan?', a: 'Bei der Annuität bleibt die reguläre Rate gleich; der Zinsanteil sinkt mit der Restschuld und der Tilgungsanteil steigt. Bei gleichmäßiger Tilgung bleibt der reguläre Tilgungsbetrag gleich, deshalb sinkt die Zahlung mit den Zinsen. Vergleiche beide Formen bei gleichem Betrag, Zinssatz und gleicher Laufzeit; Sondertilgungen und die begrenzte letzte Zahlung verändern die tatsächlich gezahlten Beträge.' },
        { q: 'Warum ergibt die Summe sichtbarer Kreditraten nicht immer den Gesamtbetrag?', a: 'Tabellenbeträge werden nur zur Anzeige gerundet, während Zinsen und Restschuld mit ungerundeten Beträgen weitergerechnet werden. Der Gesamtbetrag wird gesondert gerundet. Bei langen Laufzeiten zeigt die Tabelle außerdem nur die ersten zwölf Monate und die letzte Zahlung; dazwischenliegende Zahlungen fehlen in der sichtbaren Auswahl.' },
      ],
      disclaimer: 'Modell mit konstantem nominalem Zinssatz und gleich langen Modellmonaten. Die eingegebene einmalige Gebühr ist enthalten; gesetzlicher Effektivzins, Versicherungen und individuelle Vertragskosten werden nicht bestimmt.',
    },
    'mortgage-calculator': {
      longDescription: 'Eigenkapital verringert den Immobilienkredit, monatliche Versicherungszahlungen erhöhen dagegen die Ausgaben ohne Tilgung. Der Rechner trennt diese Größen: Kreditsumme, reguläre Rate, Zinsen und Gesamtkosten mit eingegebenen Zusatzkosten. Eigenkapital kann als Betrag oder Anteil am Kaufpreis angegeben werden. Eine feste monatliche Sondertilgung zeigt ein früheres Ende bei gleicher regulärer Zahlungsform.',
      howToUse: [
        'Trage Immobilienpreis und Eigenkapital als Betrag oder Prozentwert ein. Der Eigenkapitalbetrag darf nicht negativ sein und muss unter dem Preis liegen.',
        'Gib nominalen Jahreszins und Laufzeit bis 100 Jahre an. Bruchteile eines Jahres sind möglich, wenn sie ganze Monate ergeben, etwa 1,5 Jahre.',
        'Wähle die Zahlungsform. Ergänze bei Bedarf monatliche Sondertilgung und bekannte Versicherungs- oder Nebenkosten pro Monat.',
        'Trenne reguläre Rate und Ausgaben einschließlich Versicherung. Vergleiche Zinsen, tatsächliche Laufzeit und Gesamtkosten mit Eigenkapital.',
      ],
      howItWorks: 'Kreditsumme P = Immobilienpreis − Eigenkapital. Im Prozentmodus gilt Eigenkapital = Preis × Prozent / 100. Mit r = nominaler Jahreszins / 100 / 12 und n Monaten ist die Annuität A = P × r / (1 − (1 + r)^−n); bei 0 % gilt A = P / n. Gleichmäßige Tilgung zahlt P / n im Monat zuzüglich Zinsen auf die Restschuld. Sondertilgung verkürzt die Laufzeit; die letzte Zahlung ist auf den fälligen Betrag begrenzt. Eingegebene monatliche Versicherungs- und Nebenkosten werden mit der tatsächlichen Zahl der Zahlungsmonate einschließlich des letzten multipliziert. Sie ändern weder Restschuld noch Zinsen. Die Mehrkostenzeile zeigt Kreditzinsen; Zusatzkosten werden separat ausgewiesen. Gesamtkosten sind Kreditrückzahlungen plus Eigenkapital plus eingegebene Zusatzkosten. Tatsächliche Kalendertage, automatische Steuern und Kaufnebenkostenberechnungen sind nicht enthalten.',
      example: 'Beispiel in Geldeinheiten: Kaufpreis 150 000, Eigenkapital 30 000 (20 %), Laufzeit ein Jahr, nominaler Zins 12 %. Der Kredit beträgt 120 000. Bei gleichmäßiger Tilgung ist die erste Zahlung 11 200, die Zinssumme 7800 und der Gesamtaufwand mit Eigenkapital ohne Zusatzkosten 157 800. Grenzfall: Bei 0 % ist die reguläre Rate 10 000. Monatliche Sondertilgung von 10 000 beendet den Kredit nach sechs Monaten. Versicherungs- und Nebenkosten von 500 im Monat ergeben 3000; insgesamt sind es 153 000. Die reguläre Rate ist nicht mit den monatlichen Ausgaben von 20 500 gleichzusetzen.',
      faq: [
        { q: 'Warum enthält die Zinsmehrkostenzeile meines Immobilienkredits keine Versicherung?', a: 'Diese Zeile misst ausschließlich Kreditzinsen. Eingegebene monatliche Versicherungs- und Nebenkosten haben eine eigene Summe und sind in den Gesamtkosten mit Eigenkapital enthalten. Sie tilgen keine Restschuld.' },
        { q: 'Was passiert nach früher Rückzahlung mit den Immobilienkosten im Modell?', a: 'Die eingegebenen Kosten werden nur während der tatsächlichen Kreditlaufzeit gezählt. Eine Gebäudeversicherung kann nach Rückzahlung weiterlaufen; diese späteren Kosten werden nicht prognostiziert.' },
        { q: 'Gilt für diesen Immobilienrechner ein allgemeiner Mindesteigenkapitalanteil?', a: 'Nein. Rechnerisch ist jeder nicht negative Eigenkapitalbetrag unterhalb des Kaufpreises zulässig. Anforderungen hängen von Land, Programm und Vertrag ab. Ein gültiger Rechenfall ist keine Kreditzusage.' },
        { q: 'Senkt eine monatliche Sondertilgung die nächste reguläre Immobilienkreditrate?', a: 'Das Modell behält die reguläre Zahlung bei und verkürzt durch den zusätzlichen Tilgungsbetrag die Laufzeit. Es berechnet keine neue niedrigere reguläre Rate. Der letzte Kreditbetrag ist auf Restschuld und fällige Zinsen begrenzt; die eingegebenen monatlichen Zusatzkosten werden für diesen letzten Zahlungsmonat weiterhin angesetzt.' },
        { q: 'Enthält der Gesamtaufwand des Immobilienmodells sämtliche Kaufnebenkosten?', a: 'Enthalten sind Eigenkapital, tatsächliche Kreditrückzahlungen und die eingegebenen monatlichen Zusatzkosten. Steuern, Notar, Bewertung, Renovierung und weitere einmalige Kaufkosten werden nicht automatisch ergänzt. Das Eigenkapital ist bereits im Gesamtaufwand enthalten und darf nicht noch einmal addiert werden.' },
      ],
      disclaimer: 'Immobilienfinanzierungsmodell, kein Kreditangebot. Eingegebene monatliche Zusatzkosten sind enthalten; Steuern, Versicherungstarife, Kaufgebühren und individuelle Regeln für Sondertilgung werden nicht automatisch berechnet.',
    },
    'compound-interest': {
      longDescription: 'Beim Kapitalwachstum sollten eigene Einzahlungen von Zinsen getrennt werden. Einzahlungs- und Kapitalisierungsrhythmus sind hier unabhängig: Eine Einzahlung zur Jahresmitte verdient keine Zinsen für ein ganzes Jahr. Die Tabelle zeigt Jahresstände und den tatsächlichen letzten Zeitraum. Der Rechner vergleicht beispielhafte konstante Zinssätze und Sparpläne, sagt aber keine Marktrendite voraus.',
      howToUse: [
        'Trage Startkapital und einen konstanten nominalen Jahreszins ein. Das Modell akzeptiert nicht negative Zinssätze.',
        'Wähle eine Laufzeit bis 1000 Jahre. Ein Jahresbruchteil muss eine ganze Monatszahl ergeben.',
        'Wähle Kapitalisierungsrhythmus sowie separat Einzahlungsbetrag und Einzahlungsrhythmus: monatlich, quartalsweise oder jährlich.',
        'Einzahlungen erfolgen am Ende des gewählten Intervalls. Vergleiche Einzahlungen und Gewinn; nach den ersten 30 Jahren bleibt der Endzeitraum in der Tabelle sichtbar.',
      ],
      howItWorks: 'Der Monatszins ist r = Jahreszins / 100 / 12. Das Kapital B erzeugt monatlich B × r aufgelaufene Zinsen. Diese werden je nach Kapitalisierungsrhythmus nach 1, 3 oder 12 Monaten dem Kapital zugeschlagen. Einzahlungen folgen am Ende ihres Intervalls nach dem Zinslauf und werden für die Zeit davor nicht verzinst. Ohne Einzahlungen gilt für vollständige Perioden F = P × (1 + j / k)^N: P ist Startkapital, j der Jahreszins als Anteil, k Kapitalisierungen pro Jahr und N vollständige Perioden. Bei gleichen Einzahlungs- und Kapitalisierungsintervallen ist der Endwert der Einzahlungen C × ((1 + i)^N − 1) / i; C ist die Einzahlung am Periodenende, i der Periodenzins. Unterschiedliche Rhythmen werden über monatliche Geldflüsse berechnet. Zinsen einer unvollständigen letzten Periode sind im Endwert enthalten, ohne vorzeitig kapitalisiert zu werden. Gewinn ist Endkapital minus Einzahlungen. Inflation, Steuern, Gebühren und Verlustjahre sind nicht modelliert.',
      example: 'Beispielhafte Geldeinheiten: Startkapital 1000, nominal 12 % pro Jahr, Laufzeit ein Jahr, monatliche Einzahlung 100, jährliche Kapitalisierung. Das Startkapital verdient 120. Einzahlungen werden für 11, 10, …, 0 Monate verzinst: 100 × 0,01 × (11 + 10 + … + 0) = 66. Eingezahlt sind 2200, der Gewinn beträgt 186, das Endkapital 2386. Bei Einzahlungen von 100 je Quartal sind es 1400 Einzahlungen, 138 Gewinn und 1538 Endkapital. Unvollständige Endperiode: Ohne Einzahlungen werden aus 1000 bei 12 % und jährlicher Kapitalisierung in 1,5 Jahren zunächst 1120 nach Jahr eins, dann weitere 67,20 aufgelaufene Zinsen; der Endwert beträgt 1187,20, angezeigt als 1187.',
      faq: [
        { q: 'Warum verdient eine monatliche Einzahlung bei jährlicher Kapitalisierung keine vollen Jahreszinsen?', a: 'Zinsen laufen erst auf, wenn das Geld im Kapital enthalten ist. Eine Einzahlung am Ende des ersten Monats verdient für die folgenden elf Monate Zinsen. Kapitalisierung bestimmt die Aufnahme von Zinsen ins Kapital, nicht eine rückwirkende Einzahlung.' },
        { q: 'Wie wähle ich einen Zinssatz für mein Kapitalwachstumsbeispiel?', a: 'Nutze eigene Beispielzinssätze und behalte zum Vergleich denselben Einzahlungsplan. Der Rechner bestimmt keine realistische Marktrendite: Der Zinssatz bleibt konstant und nicht negativ, Verluste und Schwankungen fehlen.' },
        { q: 'Warum unterscheidet sich das Endkapital von der eingezahlten Summe?', a: 'Eingezahlt sind Startkapital und tatsächlich geleistete Einzahlungen. Die Differenz zum Endwert sind Modellzinsen. Es sind nominale Beträge vor Steuern und Kosten, keine inflationsbereinigte Kaufkraft.' },
        { q: 'Wie verändert häufigere Kapitalisierung den Jahresertrag ohne Einzahlungen?', a: 'Bei 12 % nominalem Jahreszins ergeben monatliche Kapitalisierung und Wiederanlage über ein volles Jahr (1 + 0,12 / 12)^12 − 1, also etwa 12,6825 %. Bei jährlicher Kapitalisierung sind es 12 %. Dies ist ein rechnerischer Vergleich ohne Einzahlungen, Steuern und Gebühren; er ersetzt keinen gesetzlich ausgewiesenen effektiven Zinssatz.' },
        { q: 'Kann der Zinseszinsrechner einen Plan mit einzelnen Verlustjahren abbilden?', a: 'Nein. Er verwendet einen konstanten, nicht negativen Zinssatz. Unterschiedliche Jahresrenditen können nicht durch ihren einfachen Durchschnitt ersetzt werden: Ohne Einzahlungen ergeben erst +10 % und dann −10 % aus 100 insgesamt 99. Für solche Folgen, Kursverluste oder schwankende Renditen ist diese konstante Zinsrechnung nicht ausgelegt.' },
      ],
      disclaimer: 'Beispielmodell eines konstanten nicht negativen nominalen Zinssatzes mit Einzahlungen am Periodenende. Keine Marktprognose oder Einkommensgarantie; Verluste, Inflation, Steuern und Gebühren sind nicht enthalten.',
    },
  },
  es: {
    'credit-calculator': {
      longDescription: 'Una cuota menor puede ocultar un préstamo más largo y más intereses. Este cálculo separa la cuota base, los intereses, una comisión única introducida y el efecto de un pago adicional mensual fijo. La cuota constante mantiene el pago base; la amortización de capital constante mantiene la parte de capital. El calendario muestra cuánto de cada pago real reduce la deuda y cuánto corresponde a intereses.',
      howToUse: [
        'Introduce el capital y el tipo nominal anual. No sustituyas el tipo de interés por la TAE de una oferta.',
        'Elige meses o años. El plazo debe equivaler a entre 1 y 1200 meses enteros; 1,5 años son 18 meses.',
        'Selecciona cuota constante o amortización de capital constante. Añade, si corresponde, un pago adicional mensual fijo y una comisión única.',
        'Compara intereses, sobrecoste y plazo real. En calendarios largos, la tabla muestra los primeros doce meses y el último pago.',
      ],
      howItWorks: 'P es el capital, n el número de meses y r = tipo nominal anual / 100 / 12. La cuota constante es A = P × r / (1 − (1 + r)^−n); con interés cero, A = P / n. Los intereses mensuales son capital pendiente × r; el resto del pago amortiza deuda. Con amortización de capital constante, la parte base de capital es P / n. Un pago adicional mensual acorta el plazo manteniendo la cuota base. El último pago real se limita al capital y los intereses pendientes. La comisión única se suma una sola vez al total pagado y al sobrecoste; no se financia ni genera intereses. Cada mes del modelo representa una doceava parte del año. El redondeo se aplica a la presentación, por lo que sumar celdas redondeadas puede diferir del total redondeado.',
      example: 'Ejemplos en unidades monetarias: 120 000 durante doce meses al tipo nominal anual del 12%, con amortización de capital constante. El tipo mensual es 1% y se amortizan 10 000 al mes. Primer pago: 10 000 + 1200 = 11 200; último: 10 000 + 100 = 10 100. Los intereses suman 7800. Una comisión única de 300 aumenta el total pagado a 128 100 y el sobrecoste a 8100. Caso límite: al 0%, la cuota constante para el mismo capital y plazo es 10 000. Una comisión de 2500 mantiene los intereses en cero, pero eleva el total a 122 500.',
      faq: [
        { q: '¿Cómo afecta la comisión única a este cálculo del préstamo?', a: 'La comisión introducida se añade una vez al total pagado y al sobrecoste. El calendario de deuda y los intereses no cambian. Una comisión financiada requiere un escenario separado; aquí no se añade automáticamente al capital.' },
        { q: '¿Qué significa acortar el préstamo mediante un pago adicional mensual?', a: 'La cuota base se mantiene y el importe adicional amortiza capital antes. El modelo no reduce las cuotas base posteriores. El último pago incluye solo el capital y los intereses que siguen pendientes.' },
        { q: '¿Este cálculo del préstamo determina una TAE regulada?', a: 'No. Se modelan un tipo nominal y una comisión introducida. No se calcula la TAE regulada ni el coste completo del crédito. Comprueba seguros, otros productos, fechas reales y condiciones en la información y el calendario del prestamista.' },
        { q: '¿Cómo cambia el préstamo entre cuota constante y capital constante?', a: 'Con cuota constante, la cuota base permanece igual: los intereses bajan al reducirse la deuda y la parte destinada a capital aumenta. Con capital constante se devuelve la misma parte base de capital cada mes, por lo que el pago baja con los intereses. Compara ambos métodos con el mismo capital, tipo y plazo; los pagos adicionales y el último pago limitado modifican los importes realmente pagados.' },
        { q: '¿Por qué sumar las cuotas visibles puede diferir del total del préstamo?', a: 'Cada celda se redondea para mostrarla, pero el cálculo de intereses y capital pendiente continúa sin ese redondeo intermedio. El total se redondea por separado. En un plazo largo también se muestran solo los primeros doce meses y el último pago; la tabla visible omite los pagos intermedios.' },
      ],
      disclaimer: 'Estimación con tipo nominal constante y meses iguales del modelo. Se incluye la comisión única introducida; no se determinan la TAE regulada, seguros ni costes específicos del contrato.',
    },
    'mortgage-calculator': {
      longDescription: 'La entrada reduce el capital hipotecario; el seguro mensual aumenta los gastos sin amortizar deuda. Este cálculo separa capital financiado, cuota base, intereses y coste total con los gastos introducidos. La entrada se puede indicar como importe o porcentaje del precio. Un pago adicional mensual fijo permite estimar una cancelación anterior manteniendo el método de amortización base.',
      howToUse: [
        'Introduce el precio de la vivienda y una entrada en importe o porcentaje. Debe ser no negativa y menor que el precio.',
        'Indica el tipo nominal anual y un plazo de hasta 100 años. Se admiten fracciones de año que equivalgan a meses enteros, como 1,5 años.',
        'Elige el método de pago. Añade un pago mensual adicional y los seguros o gastos mensuales conocidos si procede.',
        'Lee la cuota base por separado del desembolso con seguro. Compara intereses, plazo real y coste total con la entrada.',
      ],
      howItWorks: 'Capital P = precio de la vivienda − entrada. En modo porcentaje, entrada = precio × porcentaje / 100. Con r = tipo nominal anual / 100 / 12 y n meses, la cuota constante es A = P × r / (1 − (1 + r)^−n); al 0%, A = P / n. La amortización de capital constante devuelve P / n al mes, más intereses sobre el capital pendiente. El pago adicional acorta el plazo y el último pago se limita a lo pendiente. Los seguros y gastos mensuales introducidos se multiplican por el número real de meses de pago, incluido el último. No cambian el capital ni los intereses. El sobrecoste del préstamo muestra intereses; los gastos adicionales tienen su propio total. El coste total suma pagos del préstamo, entrada y gastos introducidos. No se modelan fechas reales ni se calculan automáticamente impuestos o gastos de compraventa.',
      example: 'Escenario en unidades monetarias: precio 150 000, entrada 30 000 (20%), plazo un año y tipo nominal anual del 12%. El préstamo es 120 000. Con amortización de capital constante, el primer pago es 11 200, los intereses son 7800 y el coste con entrada antes de otros gastos es 157 800. Caso límite: al 0%, la cuota base es 10 000. Un pago adicional mensual de 10 000 cancela el crédito en seis meses. Seguros y gastos de 500 al mes suman 3000 y elevan el coste total a 153 000. La cuota base se distingue del desembolso mensual previsto de 20 500.',
      faq: [
        { q: '¿Por qué el sobrecoste hipotecario no incluye el seguro introducido?', a: 'Ese resultado mide solo los intereses del préstamo. Los seguros y gastos mensuales introducidos tienen un total separado y se incluyen en el coste total con la entrada. No amortizan capital.' },
        { q: '¿Qué ocurre con los gastos hipotecarios después de amortizar antes en este modelo?', a: 'El gasto indicado se cuenta solo durante los meses reales de pago del préstamo. Un seguro de vivienda puede continuar tras cancelarlo; esos gastos posteriores no se proyectan aquí.' },
        { q: '¿Existe una entrada hipotecaria mínima universal en esta estimación?', a: 'No. Matemáticamente se acepta cualquier entrada no negativa menor que el precio. Las exigencias dependen del país, programa y contrato; un cálculo válido no implica que el banco apruebe la hipoteca.' },
      ],
      disclaimer: 'Escenario hipotecario, no oferta bancaria. Se incluyen los gastos mensuales introducidos; no se estiman automáticamente impuestos, tarifas de seguros, gastos de compraventa ni reglas específicas de amortización anticipada.',
    },
    'compound-interest': {
      longDescription: 'Al proyectar capital conviene separar las aportaciones propias de los intereses. La frecuencia de aportación y la de capitalización son independientes: el dinero depositado a mitad de año no gana intereses de todo el año. La tabla muestra puntos anuales y el período final real. El cálculo compara tasas constantes ilustrativas y planes de aportaciones; no predice la rentabilidad del mercado.',
      howToUse: [
        'Introduce capital inicial y una tasa nominal anual constante. El modelo acepta tasas no negativas.',
        'Selecciona un plazo de hasta 1000 años. Una fracción de año debe equivaler a meses enteros.',
        'Configura la capitalización por separado del importe y frecuencia de aportaciones: mensual, trimestral o anual.',
        'Las aportaciones se realizan al final de su intervalo. Compara capital aportado y beneficio; la tabla conserva el período final después de los primeros 30 años.',
      ],
      howItWorks: 'La tasa mensual es r = tasa anual / 100 / 12. Cada mes, el capital B genera B × r de intereses devengados. Se incorporan al capital cada 1, 3 o 12 meses según la capitalización elegida. Las aportaciones se añaden al final de su intervalo después del devengo y no reciben intereses por el tiempo anterior al depósito. Sin aportaciones, los períodos completos siguen F = P × (1 + j / k)^N: P es el capital inicial, j la tasa anual como fracción, k capitalizaciones al año y N períodos completos. Si los intervalos de aportación y capitalización coinciden, el valor futuro de las aportaciones es C × ((1 + i)^N − 1) / i; C es la aportación al final del período e i la tasa del período. Para frecuencias distintas se calculan flujos mensuales. Los intereses del último período incompleto se incluyen al final sin capitalizar antes de tiempo. Beneficio es capital final menos dinero aportado. No se modelan inflación, impuestos, comisiones ni años con pérdidas.',
      example: 'Unidades monetarias ilustrativas: capital inicial 1000, tasa nominal anual del 12%, plazo un año, aportación mensual 100 y capitalización anual. El capital inicial gana 120. Las aportaciones trabajan 11, 10, …, 0 meses: 100 × 0,01 × (11 + 10 + … + 0) = 66. Se aportan 2200, el beneficio es 186 y el capital final 2386. Con aportaciones de 100 trimestrales, se aportan 1400, el beneficio es 138 y el capital final 1538. Período final incompleto: sin aportaciones, 1000 al 12% con capitalización anual durante 1,5 años dan 1120 al acabar el primer año y 67,20 de intereses en el siguiente medio año; total 1187,20, mostrado como 1187.',
      faq: [
        { q: '¿Por qué una aportación mensual no recibe todo un año con capitalización anual?', a: 'Los intereses se devengan solo cuando el dinero ya forma parte del capital. Una aportación al final del primer mes gana intereses durante los once meses siguientes. La capitalización fija cuándo se incorporan los intereses, no adelanta la fecha del depósito.' },
        { q: '¿Cómo elijo una tasa para un escenario de crecimiento del capital?', a: 'Usa tasas ilustrativas propias manteniendo el mismo plan de aportaciones al comparar. El cálculo no determina una rentabilidad de mercado realista: mantiene una tasa no negativa constante y excluye pérdidas o fluctuaciones.' },
        { q: '¿Por qué el capital final difiere del importe aportado?', a: 'El importe aportado suma capital inicial y aportaciones realmente realizadas. La diferencia respecto al total final son intereses del modelo. Son importes nominales antes de impuestos y gastos, no poder adquisitivo tras la inflación.' },
      ],
      disclaimer: 'Modelo ilustrativo de tasa nominal no negativa constante con aportaciones al final del período. No es una predicción del mercado ni una garantía de ingresos; se excluyen pérdidas, inflación, impuestos y comisiones.',
    },
  },
};
