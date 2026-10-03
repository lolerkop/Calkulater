import type { CalculatorDef } from '../lib/types';
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const financeWave11LegacyContractContent: Partial<Record<'ru' | 'en' | 'uk' | 'de' | 'es', Record<string, Copy>>> = {
  "ru": {
    "income-tax-calculator": {
      "longDescription": "Калькулятор НДФЛ предназначен для основной российской пятиступенчатой шкалы, действующей с 2025 года: 13% до 2,4 млн ₽ годовой базы, 15% до 5 млн, 18% до 20 млн, 20% до 50 млн и 22% сверх. Повышенная ставка применяется к соответствующей части базы. Годовой расчёт относится к выбранной основной базе, а месячный без предыдущей базы — к среднему налогу при повторении такого месячного дохода весь год. Положительная предыдущая база включает расчёт прироста налога с начала года. Это разные сценарии, а не автоматический расчёт любой выплаты работодателя. Материалы ФНС проверены 2 октября 2026 года.",
      "howToUse": [
        "Введите сумму дохода — за месяц или за год.",
        "Укажите, что именно введено: «Начислено» (gross) или «На руки» (net).",
        "Выберите режим — прогрессивная шкала 2025 года или фиксированная ставка.",
        "Для фиксированного режима задайте ставку, применимость которой вы проверили отдельно; 30% для нерезидента имеет исключения.",
        "Предыдущую базу и вычеты вводите неотрицательными. Пустые поля означают 0; при месячном расчёте нулевая предыдущая база выбирает средний годовой сценарий."
      ],
      "howItWorks": "Обозначим T(B) налог по пяти ступеням основной российской шкалы с 2025 года от неотрицательной базы B. За год: T(max(начислено − вычет, 0)). За месяц при предыдущей базе 0: T(max(начислено − вычет, 0) × 12) / 12 — средний месячный налог условного полного года. При положительной предыдущей базе B: налог текущего месяца T(B + max(начислено − вычет, 0)) − T(B). Введите именно предыдущую облагаемую базу после ранее учтённых вычетов. Обратный режим находит начисление, оставляющее заданную сумму после этого налога. В фиксированном режиме применяется только выбранный процент, от 0 до менее 100%.",
      "example": "Зарплата 200 000 ₽ в месяц = 2 400 000 ₽ в год. По прогрессивной шкале вся сумма попадает в первый порог — налог 13%, итого 26 000 ₽/мес. на руки 174 000 ₽.",
      "faq": [
        {
          "q": "Что изменилось в НДФЛ с 2025 года?",
          "a": "Для соответствующей основной базы с 1 января 2025 года введена пятиступенчатая шкала: 13/15/18/20/22% в зависимости от годового дохода. Раньше повышенная ставка 15% применялась только при доходе свыше 5 млн ₽."
        },
        {
          "q": "Как считается налог при превышении порога?",
          "a": "Повышенная ставка применяется только к части дохода, превышающей порог. Например, при доходе 6 млн ₽ первые 2,4 млн облагаются по 13%, следующие 2,6 млн — по 15%, остальные 1 млн — по 18%."
        },
        {
          "q": "Какая ставка для нерезидентов?",
          "a": "Общая ставка 30% для ряда доходов нерезидентов не является правилом для всех выплат: ФНС перечисляет исключения для отдельных трудовых доходов и другие специальные ставки. Статус, вид дохода и право на режим нужно проверить отдельно. Фиксированный режим выполняет только арифметику введённого процента."
        },
        {
          "q": "Учитываются ли вычеты?",
          "a": "Только те, которые вы укажете сами: сумма из поля «Налоговые вычеты за период» уменьшает налоговую базу, и калькулятор показывает её отдельной строкой. Право на стандартные, имущественные и социальные вычеты и их размер он не определяет — проверьте их отдельно."
        },
        {
          "q": "Почему первый месяц года может отличаться от среднего месячного результата?",
          "a": "Налоговый агент обычно считает основную прогрессивную базу нарастающим итогом. Здесь прежняя база 0 означает условный доход за полный год и средний налог: 1 000 000 ₽ в месяц без вычетов дают 163 500 ₽ среднего налога. Первый отдельный месяц с базой 1 000 000 ₽ попадает в ступень 13% и даёт 130 000 ₽; для него можно выбрать годовую формулу на эту базу. Калькулятор не определяет конкретное удержание работодателя."
        }
      ],
      "disclaimer": "Россия, основная шкала для соответствующих доходов за 2025–2026 годы; проверено по ФНС 02.10.2026. Отдельные базы, нерезидентские исключения, допустимость и перенос вычетов, округление обязательного платежа и окончательный перерасчёт ФНС здесь не определяются. Месячный результат без предыдущей базы — средний сценарий, а не универсальное удержание за месяц."
    },
    "vat-calculator": {
      "longDescription": "Калькулятор НДС работает в двух режимах: «выделить НДС из суммы» (когда цена уже включает налог) и «начислить НДС сверху» (когда цена без налога). Поддерживает основную ставку 22% для актуальных расчётов в России с 1 января 2026 года, льготную 10%, нулевую ставку, а также пониженные варианты 5% и 7% для отдельных режимов УСН. Ставки сверены по материалам ФНС по состоянию на 2026 год.",
      "howToUse": [
        "Введите сумму, с которой нужно работать.",
        "Выберите ставку НДС — 22% по умолчанию для актуального расчёта.",
        "Выберите операцию: «Выделить» — если сумма уже с НДС, «Начислить» — если сумма без НДС.",
        "Дата служит проверкой переходного периода. Для авансов, корректировок и возвратов отдельно установите применимые правила и ставку."
      ],
      "howItWorks": "Для выбранного процента p используйте долю r = p / 100. Начисление сверху: НДС = сумма без налога × r; итог = сумма без налога + НДС. Выделение: НДС = сумма с налогом × r / (1+r); база = сумма с налогом − НДС. Дата даёт справочное предупреждение о переходе 20% → 22% с 2026 года, но не выбирает ставку автоматически и не определяет налоговый момент.",
      "example": "12 200 ₽ с НДС 22%: выделяем налог — 2 200 ₽, без НДС — 10 000 ₽. Начисляем сверху на 10 000 ₽ — НДС 2 200 ₽, итого 12 200 ₽.",
      "faq": [
        {
          "q": "Когда применяется ставка 10%?",
          "a": "Ставка 10% применяется к предусмотренным НК РФ категориям товаров, в частности отдельным продовольственным, детским и медицинским товарам и периодике, при соблюдении условий и перечней. Калькулятор не устанавливает соответствие конкретного товара этим требованиям."
        },
        {
          "q": "Чем выделение отличается от начисления?",
          "a": "Выделение — из суммы, которая уже включает НДС, нужно вычленить сам налог. Начисление — к сумме без налога добавить НДС сверху."
        },
        {
          "q": "Какая ставка НДС стоит по умолчанию?",
          "a": "Для актуальных расчётов выбрана ставка 22%. Ставка 20% оставлена в списке как исторический вариант для старых документов и сверок."
        },
        {
          "q": "Что такое упрощённые ставки 5% и 7%?",
          "a": "Это пониженные ставки для отдельных плательщиков на УСН. Право на их применение зависит от режима, доходов и условий налогового законодательства."
        },
        {
          "q": "Можно ли использовать расчёт для бухгалтерии?",
          "a": "Калькулятор подходит для быстрой проверки формулы. Для отчётности сверяйте ставку, период и правила с бухгалтером или официальными материалами ФНС. Ставки на странице указаны по состоянию на 2026 год."
        }
      ],
      "disclaimer": "Российская арифметика выбранной ставки; материалы ФНС проверены 02.10.2026. Основная ставка для облагаемых по ней отгрузок с 01.01.2026 — 22%; 20% сохраняется для исторических и переходных сверок. Право на 0%, 5%, 7% или 10%, освобождение, входной вычет и налоговый момент не определяются по одной дате. Предупреждение о дате не заменяет правил авансов, возвратов и корректировок."
    },
    "margin-calculator": {
      "longDescription": "Калькулятор наценки и маржи показывает обе величины сразу и объясняет разницу между ними: наценка считается от себестоимости, маржа — от цены продажи, поэтому наценка 25% и маржа 20% описывают одну и ту же сделку. Работает в трёх режимах: по известной цене, по желаемой наценке и по желаемой марже. Дополнительно считает прибыль с единицы и с партии.",
      "howToUse": [
        "Выберите, что вам известно: цена продажи, желаемая наценка или желаемая маржа.",
        "Введите себестоимость единицы товара или услуги.",
        "Заполните второе значение — цену, наценку или маржу.",
        "Укажите количество, если нужна прибыль со всей партии, и сравните наценку с маржой."
      ],
      "howItWorks": "Для себестоимости C > 0 и цены P > 0: разница = P − C; наценка = (P−C)/C × 100%, маржа = (P−C)/P × 100%. По наценке u: P = C × (1+u/100); по марже m < 100%: P = C / (1−m/100). Отрицательные проценты допустимы, если цена остаётся положительной. Для положительных цены и себестоимости наценка не меньше маржи: разность равна (P−C)²/(C×P) × 100. При убытке модуль маржи больше модуля наценки; при цене, равной себестоимости, обе равны 0. Количество — целое не меньше 1, разница партии = (P−C) × количество.",
      "example": "Себестоимость 100 ₽, цена 125 ₽ → прибыль 25 ₽, наценка 25%, маржа 20%. Та же сделка описывается двумя разными процентами.",
      "faq": [
        {
          "q": "Чем наценка отличается от маржи?",
          "a": "Базой расчёта. Наценка показывает, на сколько процентов цена выше себестоимости, а маржа — какую долю в цене продажи занимает прибыль. Прибыль в обоих случаях одна и та же, меняется только знаменатель."
        },
        {
          "q": "Почему маржа всегда меньше наценки?",
          "a": "Потому что при положительной прибыли цена продажи больше себестоимости. Одна и та же прибыль делится на большее число, поэтому процент получается меньше: наценка 100% — это маржа 50%."
        },
        {
          "q": "Как перевести наценку в маржу и обратно?",
          "a": "Маржа = наценка ÷ (100 + наценка) × 100. Наценка = маржа ÷ (100 − маржа) × 100. Калькулятор делает этот пересчёт автоматически в любом из режимов."
        },
        {
          "q": "Почему маржа не может быть 100% или больше?",
          "a": "Маржа 100% означала бы нулевую себестоимость, а больше 100% — отрицательную. При приближении маржи к 100% требуемая цена растёт неограниченно, поэтому такие значения не принимаются."
        },
        {
          "q": "Учитывается ли НДС и другие налоги?",
          "a": "Нет. Калькулятор работает с теми суммами, которые вы вводите. Если нужно выделить или начислить НДС, сделайте это отдельно и подставьте сюда уже нужные значения."
        },
        {
          "q": "Что делать, если цена ниже себестоимости?",
          "a": "Расчёт всё равно выполнится: прибыль, наценка и маржа станут отрицательными, и калькулятор покажет отдельное пояснение. Это удобно, чтобы оценить убыток по акции или распродаже."
        }
      ],
      "disclaimer": "Разница цены и введённой себестоимости — результат на выбранной базе затрат, не автоматически чистая прибыль бизнеса. Налоги, комиссии и накладные затраты отдельно не добавляются."
    },
    "break-even-calculator": {
      "longDescription": "Калькулятор точки безубыточности показывает, какой объём продаж покрывает постоянные и переменные затраты. Постоянные затраты не зависят от количества проданного — аренда, оклады, подписки. Переменные растут вместе с каждой проданной единицей — материалы, комиссия, доставка. Разница между ценой и переменными затратами называется маржинальной прибылью: именно она идёт на покрытие постоянных затрат. Дополнительно можно указать плановый объём продаж и увидеть прибыль и запас прочности.",
      "howToUse": [
        "Укажите постоянные затраты за период: аренду, оклады, подписки и другие расходы, которые не зависят от объёма продаж.",
        "Введите цену продажи одной единицы товара или услуги.",
        "Укажите переменные затраты на единицу — то, что тратится на каждую проданную штуку.",
        "При необходимости задайте плановый объём продаж, чтобы увидеть прибыль и запас прочности."
      ],
      "howItWorks": "Маржинальная прибыль с единицы равна цене минус переменные затраты на единицу. Каждая проданная единица приносит именно эту сумму на покрытие постоянных затрат, поэтому расчётный объём безубыточности равен постоянным затратам, делённым на маржинальную прибыль. Товар продаётся целыми единицами, поэтому расчётный объём округляется вверх. Выручка в точке безубыточности показана двумя величинами: при точном расчётном объёме и при целом числе единиц — это разные суммы, и калькулятор их не смешивает. Формулы предполагают одну выбранную базу затрат и постоянные цену и переменные затраты на единицу в рабочем диапазоне. При нулевых постоянных затратах и нулевой маржинальной прибыли результат равен нулю при любом объёме. При отрицательной маржинальной прибыли и нулевых постоянных затратах лишь нулевые продажи дают нулевую прибыль. План — целое неотрицательное число; пустое поле означает 0.",
      "example": "Постоянные затраты 300 000 ₽ в месяц, цена 1 500 ₽, переменные затраты 900 ₽. Маржинальная прибыль 600 ₽ с единицы, значит нужно продать 500 штук на 750 000 ₽, чтобы выйти в ноль.",
      "faq": [
        {
          "q": "Чем постоянные затраты отличаются от переменных?",
          "a": "Постоянные не зависят от объёма продаж за период: аренда, оклады, подписки, амортизация. Переменные возникают на каждую проданную единицу: материалы, упаковка, комиссия площадки, доставка. Одно и то же расходное направление иногда делится на обе части, и тогда его нужно разнести по этим двум полям."
        },
        {
          "q": "Что такое маржинальная прибыль и зачем она нужна?",
          "a": "Это цена продажи минус переменные затраты на единицу. Она показывает, сколько денег приносит каждая проданная единица на покрытие постоянных затрат. Пока накопленная маржинальная прибыль меньше постоянных затрат, бизнес работает в убыток, а в момент равенства достигается точка безубыточности."
        },
        {
          "q": "Почему показаны две разные выручки?",
          "a": "Выручка при расчётном объёме получена делением постоянных затрат на коэффициент маржинальной прибыли и соответствует дробному числу единиц. Выручка при целом числе единиц — это округлённый вверх объём, умноженный на цену. Вторая величина обычно немного больше, и путать их нельзя."
        },
        {
          "q": "Почему объём округляется вверх, а не до ближайшего целого?",
          "a": "Продать часть единицы нельзя, а объём на единицу меньше расчётного уже не покрывает постоянные затраты. Поэтому расчёт округляется вверх. Если расчётный объём получается ровно целым, лишняя единица не добавляется."
        },
        {
          "q": "Что означает запас прочности?",
          "a": "Это разница между плановым объёмом продаж и точкой безубыточности. В процентах он показывает, на сколько может упасть план, прежде чем бизнес перестанет покрывать затраты. Отрицательный запас означает, что плановый объём ниже безубыточного и расчёт показывает убыток."
        },
        {
          "q": "Что если переменные затраты выше цены продажи?",
          "a": "При положительных постоянных затратах нулевая маржинальная прибыль оставляет постоянный убыток, а отрицательная увеличивает его с каждой единицей. Если постоянные затраты равны 0, при нулевой марже прибыль 0 для любого объёма; при отрицательной — только нулевой объём не даёт убытка."
        },
        {
          "q": "Учитываются ли налоги и кредиты?",
          "a": "Нет. Расчёт работает с теми суммами, которые вы вводите, и не моделирует налоги, проценты по кредитам и сезонность. Это управленческая оценка, а не бухгалтерский или налоговый расчёт, поэтому её результат нельзя считать гарантией прибыли."
        }
      ],
      "disclaimer": "Одна постоянная цена, одни переменные затраты на единицу и постоянные затраты за тот же период в применимом диапазоне объёмов. Изменение мощности, скидки, ассортимент и налоговые правила могут менять реальную точку; это не гарантированный план продаж."
    }
  },
  "en": {
    "margin-calculator": {
      "longDescription": "This margin and markup calculator shows both figures at once and makes the difference obvious: markup is measured against cost, margin against the selling price, so a 25% markup and a 20% margin describe the same deal. It works in three modes — from a known price, from a target markup and from a target margin — and also reports profit per unit and per batch.",
      "howToUse": [
        "Choose what you already know: the selling price, a target markup or a target margin.",
        "Enter the cost of one unit of the product or service.",
        "Fill in the second value — price, markup or margin.",
        "Set a quantity if you need the profit for a whole batch, and compare markup with margin."
      ],
      "howItWorks": "For cost C > 0 and price P > 0: difference = P − C; markup = (P−C)/C × 100%, margin = (P−C)/P × 100%. From markup u: P = C × (1+u/100); from margin m < 100%: P = C / (1−m/100). Negative percentages are valid if price stays positive. For positive price and cost, signed markup is at least margin: their difference is (P−C)²/(C×P) × 100. For a loss the absolute margin is larger; when price equals cost, both are 0. Quantity is a whole number at least 1; batch difference = (P−C) × quantity.",
      "example": "A cost of 100 and a price of 125 give a profit of 25, a markup of 25% and a margin of 20% — one deal described by two different percentages.",
      "faq": [
        {
          "q": "What is the difference between margin and markup?",
          "a": "The base they are measured against. Markup shows how far the price sits above cost, while margin shows what share of the selling price is profit. The profit is the same in both cases; only the denominator changes."
        },
        {
          "q": "Why is margin always lower than markup?",
          "a": "Because on a profitable sale the price is higher than the cost. The same profit is divided by a larger number, so the percentage comes out smaller: a 100% markup is a 50% margin."
        },
        {
          "q": "How do I convert markup into margin and back?",
          "a": "Margin = markup ÷ (100 + markup) × 100. Markup = margin ÷ (100 − margin) × 100. The calculator does this conversion automatically in every mode."
        },
        {
          "q": "Why can margin not reach 100%?",
          "a": "A 100% margin would mean zero cost, and anything above it a negative cost. As margin approaches 100% the required price grows without limit, so those values are rejected."
        },
        {
          "q": "Does it include VAT or other taxes?",
          "a": "No. The calculator works with the amounts you enter. If you need to add or extract VAT, do that separately and use the resulting figures here."
        },
        {
          "q": "What if the price is below cost?",
          "a": "The calculation still runs: profit, markup and margin turn negative and the calculator adds a note. That is useful for checking the loss on a promotion or a clearance sale."
        }
      ],
      "disclaimer": "The price-minus-entered-cost difference uses your chosen cost basis; it is not automatically business net profit. Taxes, fees and overhead are not added separately."
    },
    "break-even-calculator": {
      "longDescription": "This break-even calculator shows the sales volume that covers fixed and variable costs. Fixed costs stay the same whatever you sell — rent, salaries, subscriptions. Variable costs grow with every unit sold — materials, commission, delivery. The gap between price and variable cost is the contribution margin, and it is what pays down the fixed costs. Add a planned sales volume to also see the profit and the margin of safety.",
      "howToUse": [
        "Enter the fixed costs for the period: rent, salaries, subscriptions and anything else that does not depend on sales volume.",
        "Enter the selling price of one unit of your product or service.",
        "Enter the variable cost per unit — what each sold item costs you.",
        "Optionally add a planned sales volume to see the profit and the margin of safety."
      ],
      "howItWorks": "The contribution margin per unit is the price minus the variable cost per unit. Every unit sold contributes exactly that amount towards the fixed costs, so the break-even volume is the fixed costs divided by the contribution margin. Goods are sold in whole units, so the calculated volume is rounded up. Break-even revenue is shown as two separate figures — at the exact calculated volume and at the whole number of units — because they are different amounts and the calculator does not mix them. The formulas assume one cost basis and constant price and variable cost per unit within the relevant range. If both fixed costs and contribution are zero, profit is zero at every volume. With negative contribution and zero fixed costs, only zero sales give zero profit. The plan is a non-negative whole count; a blank field means 0.",
      "example": "Fixed costs of 300,000 a month, a price of 1,500 and a variable cost of 900 give a contribution margin of 600 per unit, so 500 units and 750,000 in revenue are needed to break even.",
      "faq": [
        {
          "q": "What is the difference between fixed and variable costs?",
          "a": "Fixed costs do not depend on how much you sell in a period: rent, salaries, subscriptions, depreciation. Variable costs arise with every unit sold: materials, packaging, marketplace commission, delivery. A single spending line is sometimes split between the two, and then it has to be shared across both fields."
        },
        {
          "q": "What is the contribution margin and why does it matter?",
          "a": "It is the selling price minus the variable cost per unit. It shows how much each sold unit contributes towards the fixed costs. While the accumulated contribution is below the fixed costs the business runs at a loss, and the moment they are equal is the break-even point."
        },
        {
          "q": "Why are two different revenue figures shown?",
          "a": "Revenue at the calculated volume divides the fixed costs by the contribution margin ratio and corresponds to a fractional number of units. Revenue at the whole number of units multiplies the rounded-up volume by the price. The second figure is usually slightly larger, and the two must not be confused."
        },
        {
          "q": "Why is the volume rounded up rather than to the nearest unit?",
          "a": "You cannot sell part of a unit, and one unit fewer than the calculated volume no longer covers the fixed costs. So the result is rounded up. When the calculated volume is already a whole number, no extra unit is added."
        },
        {
          "q": "What does the margin of safety mean?",
          "a": "It is the gap between the planned sales volume and the break-even point. As a percentage it shows how far the plan can fall before the business stops covering its costs. A negative margin of safety means the planned volume is below break-even and the calculation shows a loss."
        },
        {
          "q": "What if the variable cost is higher than the price?",
          "a": "With positive fixed costs, zero contribution leaves a constant loss and negative contribution increases the loss per unit. If fixed costs are zero, zero contribution gives zero profit at every volume; with negative contribution, only zero volume avoids a loss."
        },
        {
          "q": "Are taxes and loans included?",
          "a": "No. The calculation uses the amounts you enter and does not model taxes, loan interest or seasonality. It is a management estimate rather than an accounting or tax calculation, so the result is not a guarantee of profit."
        }
      ],
      "disclaimer": "One constant price, one variable cost per unit, and fixed costs for the same period within the relevant volume range. Capacity changes, discounts, product mix and tax rules can change the actual break-even point; this is not a guaranteed sales plan."
    }
  },
  "uk": {
    "margin-calculator": {
      "longDescription": "Націнка й маржа описують ту саму різницю ціни та собівартості, але ділять її на різні бази: націнка на собівартість, маржа на ціну. За прибуткового продажу ціна більша за собівартість, тому маржа менша за націнку. За продажу у збиток обидві величини від’ємні; націнка лишається більшою як число, але модуль маржі більший. Розрахунок допомагає перейти між двома відсотками та перевірити результат партії на введеній базі витрат.",
      "howToUse": [
        "Введіть собівартість і ціну продажу.",
        "Або задайте націнку чи маржу, щоб отримати ціну.",
        "Порівняйте обидва відсотки — вони різні за побудовою."
      ],
      "howItWorks": "За собівартості C > 0 і ціни P > 0: різниця = P − C; націнка = (P−C)/C × 100%, маржа = (P−C)/P × 100%. За націнкою u: P = C × (1+u/100); за маржею m < 100%: P = C / (1−m/100). Від’ємні відсотки допустимі, якщо ціна додатна. За додатних ціни й собівартості націнка не менша за маржу: їхня різниця (P−C)²/(C×P) × 100. За збитку модуль маржі більший; за ціни, рівної собівартості, обидві дорівнюють 0. Кількість — ціле не менше 1, різниця партії = (P−C) × кількість.",
      "example": "Собівартість 1000 ₴ і ціна 1500 ₴ дають прибуток 500 ₴: націнка 50 %, маржа 33,33 %. Одна угода, два різні відсотки.",
      "faq": [
        {
          "q": "Чому націнка завжди більша за маржу?",
          "a": "За додатної різниці ціни та собівартості ціна більша, тому маржа має більший знаменник і менше значення. Приклад: 100 → 125 дає націнку 25% і маржу 20%. За ціни 80 і собівартості 100 маємо націнку −20% та маржу −25%."
        },
        {
          "q": "Як перевести одне в інше?",
          "a": "Маржа = націнка ÷ (100 + націнка) × 100, націнка = маржа ÷ (100 − маржа) × 100. Обидві формули корисно тримати під рукою під час переговорів про знижку."
        },
        {
          "q": "Чим це небезпечно на практиці?",
          "a": "Знижка 30 % за маржі 33 % майже повністю з’їдає прибуток, хоча звучить як «трохи менше третини націнки». Плутанина двох показників — класична причина збиткових акцій."
        },
        {
          "q": "Що брати за собівартість?",
          "a": "Введіть ту собівартість одиниці, яку хочете аналізувати, й послідовно використовуйте її в усіх режимах. Розрахунок не додає накладні витрати, податки або комісії автоматично; чи включати розподілені постійні витрати до бази, залежить від мети аналізу."
        }
      ],
      "disclaimer": "Різниця ціни та введеної собівартості рахується на обраній базі витрат; це не автоматично чистий прибуток бізнесу. Податки, комісії й накладні витрати окремо не додаються."
    },
    "break-even-calculator": {
      "longDescription": "Калькулятор точки беззбитковості показує, який обсяг продажів покриває постійні та змінні витрати. Постійні витрати не залежать від проданої кількості — оренда, оклади, підписки. Змінні зростають разом із кожною проданою одиницею — матеріали, комісія, доставка. Різниця між ціною та змінними витратами називається маржинальним прибутком: саме він іде на покриття постійних витрат. Додатково можна вказати плановий обсяг продажів і побачити прибуток та запас міцності.",
      "howToUse": [
        "Вкажіть постійні витрати за період: оренду, оклади, підписки та інші витрати, що не залежать від обсягу продажів.",
        "Введіть ціну продажу однієї одиниці товару або послуги.",
        "Вкажіть змінні витрати на одиницю — те, що витрачається на кожну продану штуку.",
        "За потреби задайте плановий обсяг продажів, щоб побачити прибуток і запас міцності."
      ],
      "howItWorks": "Маржинальний прибуток з одиниці дорівнює ціні мінус змінні витрати на одиницю. Кожна продана одиниця приносить саме цю суму на покриття постійних витрат, тому розрахунковий обсяг беззбитковості дорівнює постійним витратам, поділеним на маржинальний прибуток. Товар продається цілими одиницями, тому розрахунковий обсяг округлюється вгору. Виручку в точці беззбитковості показано двома величинами: за точного розрахункового обсягу та за цілого числа одиниць — це різні суми, і калькулятор їх не змішує. Формули припускають одну базу витрат та сталі ціну й змінні витрати на одиницю в робочому діапазоні. За нульових постійних витрат і нульової маржинальної різниці результат нульовий за будь-якого обсягу. За від’ємної різниці й нульових постійних витрат лише нульові продажі дають нульовий прибуток. План — невід’ємне ціле; порожнє поле означає 0.",
      "example": "Постійні витрати 300 000 на місяць, ціна 1 500, змінні витрати 900. Маржинальний прибуток 600 з одиниці, отже потрібно продати 500 штук на 750 000, щоб вийти в нуль.",
      "faq": [
        {
          "q": "Чим постійні витрати відрізняються від змінних?",
          "a": "Постійні не залежать від обсягу продажів за період: оренда, оклади, підписки, амортизація. Змінні виникають на кожну продану одиницю: матеріали, пакування, комісія майданчика, доставка. Один і той самий напрям витрат іноді ділиться на обидві частини, і тоді його потрібно рознести по цих двох полях."
        },
        {
          "q": "Що таке маржинальний прибуток і навіщо він потрібен?",
          "a": "Це ціна продажу мінус змінні витрати на одиницю. Він показує, скільки грошей приносить кожна продана одиниця на покриття постійних витрат. Поки накопичений маржинальний прибуток менший за постійні витрати, бізнес працює у збиток, а в момент рівності досягається точка беззбитковості."
        },
        {
          "q": "Чому показано дві різні виручки?",
          "a": "Виручку за розрахункового обсягу отримано діленням постійних витрат на коефіцієнт маржинального прибутку, і вона відповідає дробовому числу одиниць. Виручка за цілого числа одиниць — це округлений угору обсяг, помножений на ціну. Друга величина зазвичай трохи більша, і плутати їх не можна."
        },
        {
          "q": "Чому обсяг округлюється вгору, а не до найближчого цілого?",
          "a": "Продати частину одиниці неможливо, а обсяг на одиницю менший за розрахунковий уже не покриває постійні витрати. Тому розрахунок округлюється вгору. Якщо розрахунковий обсяг виходить рівно цілим, зайва одиниця не додається."
        },
        {
          "q": "Що означає запас міцності?",
          "a": "Це різниця між плановим обсягом продажів і точкою беззбитковості. У відсотках він показує, наскільки може впасти план, перш ніж бізнес перестане покривати витрати. Відʼємний запас означає, що плановий обсяг нижчий за беззбитковий і розрахунок показує збиток."
        },
        {
          "q": "Що робити, якщо змінні витрати вищі за ціну продажу?",
          "a": "За додатних постійних витрат нульова маржинальна різниця залишає сталий збиток, а від’ємна збільшує його з кожною одиницею. Якщо постійні витрати 0, за нульової різниці прибуток 0 за будь-якого обсягу; за від’ємної лише нульовий обсяг не дає збитку."
        },
        {
          "q": "Чи враховуються податки та кредити?",
          "a": "Ні. Розрахунок працює з тими сумами, які ви вводите, і не моделює податки, відсотки за кредитами та сезонність. Це управлінська оцінка, а не бухгалтерський чи податковий розрахунок, тому її результат не можна вважати гарантією прибутку."
        }
      ],
      "disclaimer": "Одна стала ціна, одні змінні витрати на одиницю й постійні витрати за той самий період у застосовному діапазоні обсягів. Зміна потужності, знижки, асортимент та податкові правила можуть змінити фактичну точку; це не гарантований план продажів."
    }
  },
  "de": {
    "margin-calculator": {
      "longDescription": "Marge und Aufschlag beschreiben denselben Gewinn und liefern verschiedene Zahlen, weil sie ihn durch Verschiedenes teilen: der Aufschlag durch die Selbstkosten, die Marge durch den Verkaufspreis. Deshalb ist der Aufschlag bei einem gewinnbringenden Geschäft immer die größere Zahl — sein Nenner ist kleiner. Ein Aufschlag von 100 % ist eine Marge von 50 %, und wer beides verwechselt, kalkuliert dauerhaft falsch. Der Rechner arbeitet in drei Richtungen: aus Preis und Kosten, aus Kosten und Aufschlag, aus Kosten und Marge.",
      "howToUse": [
        "Wähle, welche zwei Größen du kennst.",
        "Trage die Selbstkosten ein.",
        "Trage je nach Modus den Verkaufspreis, den Aufschlag oder die Marge ein.",
        "Ergänze eine Stückzahl, wenn du den Gewinn der ganzen Partie sehen willst."
      ],
      "howItWorks": "Bei Kosten C > 0 und Preis P > 0: Differenz = P − C; Aufschlag = (P−C)/C × 100%, Marge = (P−C)/P × 100%. Mit Aufschlag u: P = C × (1+u/100); mit Marge m < 100%: P = C / (1−m/100). Negative Prozentsätze sind bei positivem Preis zulässig. Bei positivem Preis und positiven Kosten ist der vorzeichenbehaftete Aufschlag mindestens so groß wie die Marge: die Differenz beträgt (P−C)²/(C×P) × 100. Bei Verlust ist der Betrag der Marge größer; bei Preis gleich Kosten sind beide 0. Die Menge ist ganzzahlig und mindestens 1; Chargendifferenz = (P−C) × Menge.",
      "example": "Selbstkosten von 100 € und ein Preis von 125 € ergeben 25 € Gewinn, 25 % Aufschlag und 20 % Marge — ein Geschäft, zwei Prozentzahlen.",
      "faq": [
        {
          "q": "Worin unterscheiden sich Marge und Aufschlag?",
          "a": "In der Bezugsgröße. Der Aufschlag misst, wie weit der Preis über den Kosten liegt, die Marge, welcher Anteil des Verkaufspreises Gewinn ist. Der Gewinn ist derselbe, nur der Nenner wechselt."
        },
        {
          "q": "Wie rechne ich Aufschlag in Marge um?",
          "a": "Marge = Aufschlag ÷ (100 + Aufschlag) × 100, und umgekehrt Aufschlag = Marge ÷ (100 − Marge) × 100. Der Rechner macht diese Umrechnung in jedem Modus mit."
        },
        {
          "q": "Warum kann die Marge keine 100 % erreichen?",
          "a": "Eine Marge von 100 % bedeutete Selbstkosten von null. Je näher die Marge an hundert rückt, desto stärker wächst der nötige Preis, deshalb werden solche Werte abgewiesen."
        },
        {
          "q": "Ist die Umsatzsteuer enthalten?",
          "a": "Nein. Der Rechner nimmt die Beträge, die du einträgst. Rechne die Steuer vorher heraus oder hinzu und arbeite hier mit einheitlichen Zahlen."
        },
        {
          "q": "Was, wenn der Preis unter den Kosten liegt?",
          "a": "Die Rechnung läuft weiter: Gewinn, Aufschlag und Marge werden negativ, und ein Hinweis erscheint. Genau so prüft man den Verlust einer Aktion oder eines Abverkaufs."
        }
      ],
      "disclaimer": "Die Differenz zwischen Preis und eingegebenen Kosten nutzt deine Kostengrundlage und ist nicht automatisch Nettogewinn. Steuern, Gebühren und Gemeinkosten werden nicht gesondert ergänzt."
    },
    "break-even-calculator": {
      "longDescription": "Der Deckungsbeitrag je Einheit — Preis minus variable Kosten — ist die ganze Rechnung: jede verkaufte Einheit trägt genau diesen Betrag zu den Fixkosten bei, und sobald die Summe dieser Beiträge die Fixkosten erreicht, ist die Gewinnschwelle da. Verkauft wird in ganzen Einheiten, deshalb wird die Menge aufgerundet, und der Umsatz erscheint in zwei getrennten Zeilen — bei der rechnerischen Menge und bei der ganzen Zahl von Einheiten —, weil das zwei verschiedene Beträge sind, die der Rechner nicht vermischt.",
      "howToUse": [
        "Trage die Fixkosten der Periode ein: Miete, Gehälter, Abos, Abschreibung.",
        "Trage den Verkaufspreis einer Einheit ein.",
        "Trage die variablen Kosten je Einheit ein: Material, Verpackung, Provision, Versand.",
        "Ergänze die geplante Absatzmenge, wenn du die Sicherheitsspanne sehen willst."
      ],
      "howItWorks": "Deckungsbeitrag je Einheit = Preis − variable Kosten. Gewinnschwelle = Fixkosten ÷ Deckungsbeitrag, aufgerundet auf ganze Einheiten. Die Deckungsbeitragsquote ist der Deckungsbeitrag geteilt durch den Preis, und die Sicherheitsspanne ist der Abstand der geplanten Menge zur Gewinnschwelle. Vorausgesetzt werden eine Kostengrundlage sowie konstanter Preis und variable Stückkosten im relevanten Bereich. Sind Fixkosten und Deckungsbeitrag null, ist der Gewinn bei jeder Menge null. Bei negativem Deckungsbeitrag und null Fixkosten ergibt nur Absatz null auch Gewinn null. Die Planung ist eine nicht negative ganze Menge; ein leeres Feld bedeutet 0.",
      "example": "Fixkosten von 30 000 € im Monat, ein Preis von 150 € und variable Kosten von 90 € ergeben 60 € Deckungsbeitrag, also 500 Einheiten und 75 000 € Umsatz bis zur Gewinnschwelle.",
      "faq": [
        {
          "q": "Was zählt als fix und was als variabel?",
          "a": "Fixkosten fallen unabhängig vom Absatz an: Miete, Gehälter, Abos, Abschreibung. Variable Kosten entstehen mit jeder verkauften Einheit: Material, Verpackung, Provision, Versand. Manche Position teilt sich auf beide auf und muss dann verteilt werden."
        },
        {
          "q": "Warum stehen zwei Umsatzzahlen da?",
          "a": "Die eine gehört zur rechnerischen Menge mit Nachkommastellen, die andere zur aufgerundeten ganzen Zahl von Einheiten. Die zweite ist meist etwas größer, und beide dürfen nicht verwechselt werden."
        },
        {
          "q": "Warum wird aufgerundet und nicht kaufmännisch gerundet?",
          "a": "Eine Einheit weniger deckt die Fixkosten nicht mehr. Geht die Rechnung genau auf, kommt keine zusätzliche Einheit hinzu."
        },
        {
          "q": "Was bedeutet die Sicherheitsspanne?",
          "a": "Den Abstand zwischen geplantem Absatz und Gewinnschwelle. Als Prozentsatz sagt sie, wie weit der Plan verfehlt werden darf, bevor das Geschäft die Kosten nicht mehr deckt. Ein negativer Wert heißt Verlust."
        },
        {
          "q": "Was, wenn die variablen Kosten über dem Preis liegen?",
          "a": "Bei positiven Fixkosten bleibt mit Deckungsbeitrag null ein konstanter Verlust; ein negativer Beitrag vergrößert ihn je Einheit. Sind Fixkosten null, ergibt Beitrag null bei jeder Menge Gewinn null; bei negativem Beitrag vermeidet nur Menge null einen Verlust."
        },
        {
          "q": "Sind Steuern und Kredite enthalten?",
          "a": "Nein. Gerechnet wird mit den eingetragenen Beträgen ohne Steuern, Kreditzinsen und Saisonalität. Das ist eine Führungsrechnung und keine Steuerrechnung."
        }
      ],
      "disclaimer": "Ein konstanter Preis, variable Stückkosten und Fixkosten für denselben Zeitraum im relevanten Mengenbereich. Kapazitätsänderungen, Rabatte, Produktmix und Steuerregeln können die tatsächliche Schwelle ändern; kein garantierter Absatzplan."
    }
  },
  "es": {
    "margin-calculator": {
      "longDescription": "Esta calculadora de margen y recargo muestra ambas cifras a la vez y hace evidente la diferencia: el recargo se mide contra el coste y el margen contra el precio de venta, así que un 25 % de recargo y un 20 % de margen describen la misma operación. Funciona en tres modos —desde un precio conocido, desde un recargo objetivo y desde un margen objetivo— e indica además el beneficio por unidad y por lote.",
      "howToUse": [
        "Elige lo que ya conoces: el precio de venta, un recargo objetivo o un margen objetivo.",
        "Introduce el coste de una unidad del producto o servicio.",
        "Rellena el segundo valor: precio, recargo o margen.",
        "Fija una cantidad si necesitas el beneficio de todo un lote, y compara el recargo con el margen."
      ],
      "howItWorks": "Con coste C > 0 y precio P > 0: diferencia = P − C; recargo = (P−C)/C × 100%, margen = (P−C)/P × 100%. Con recargo u: P = C × (1+u/100); con margen m < 100%: P = C / (1−m/100). Se admiten porcentajes negativos con precio positivo. Con precio y coste positivos, el recargo con signo es al menos igual al margen: la diferencia es (P−C)²/(C×P) × 100. Con pérdida, el valor absoluto del margen es mayor; con precio igual al coste, ambos son 0. La cantidad es un entero de al menos 1; diferencia del lote = (P−C) × cantidad.",
      "example": "Un coste de 100 y un precio de 125 dan un beneficio de 25, un recargo del 25 % y un margen del 20 %: una operación descrita por dos porcentajes distintos.",
      "faq": [
        {
          "q": "¿Qué diferencia hay entre margen y recargo?",
          "a": "La base contra la que se miden. El recargo indica cuánto está el precio por encima del coste, mientras que el margen indica qué parte del precio de venta es beneficio. El beneficio es el mismo en ambos casos; solo cambia el denominador."
        },
        {
          "q": "¿Por qué el margen es siempre menor que el recargo?",
          "a": "Porque en una venta rentable el precio es mayor que el coste. El mismo beneficio se divide entre un número mayor, así que el porcentaje sale menor: un recargo del 100 % es un margen del 50 %."
        },
        {
          "q": "¿Cómo convierto un recargo en margen y al revés?",
          "a": "Margen = recargo ÷ (100 + recargo) × 100. Marcado = margen ÷ (100 − margen) × 100. La calculadora hace esta conversión de forma automática en todos los modos."
        },
        {
          "q": "¿Por qué el margen no puede llegar al 100 %?",
          "a": "Un margen del 100 % significaría coste cero, y cualquier valor por encima, coste negativo. A medida que el margen se acerca al 100 %, el precio necesario crece sin límite, así que esos valores se rechazan."
        },
        {
          "q": "¿Incluye el IVA u otros impuestos?",
          "a": "No. La calculadora trabaja con los importes que introduces. Si necesitas añadir o extraer el IVA, hazlo aparte y usa aquí las cifras resultantes."
        },
        {
          "q": "¿Y si el precio está por debajo del coste?",
          "a": "El cálculo se ejecuta igualmente: el beneficio, el recargo y el margen salen negativos y la calculadora añade una nota. Es útil para comprobar la pérdida de una promoción o de una liquidación."
        }
      ],
      "disclaimer": "La diferencia entre precio y coste introducido usa tu base de costes; no es automáticamente el beneficio neto del negocio. No se añaden aparte impuestos, comisiones ni gastos generales."
    },
    "break-even-calculator": {
      "longDescription": "Esta calculadora del punto de equilibrio muestra el volumen de ventas que cubre los costes fijos y variables. Los costes fijos se mantienen vendas lo que vendas: alquiler, sueldos, suscripciones. Los costes variables crecen con cada unidad vendida: materiales, comisiones, envío. La diferencia entre el precio y el coste variable es el margen de contribución, y es lo que va amortizando los costes fijos. Añade un volumen de ventas previsto para ver además el beneficio y el margen de seguridad.",
      "howToUse": [
        "Introduce los costes fijos del periodo: alquiler, sueldos, suscripciones y todo lo que no dependa del volumen de ventas.",
        "Introduce el precio de venta de una unidad de tu producto o servicio.",
        "Introduce el coste variable por unidad: lo que te cuesta cada artículo vendido.",
        "Si quieres, añade un volumen de ventas previsto para ver el beneficio y el margen de seguridad."
      ],
      "howItWorks": "El margen de contribución por unidad es el precio menos el coste variable por unidad. Cada unidad vendida aporta exactamente esa cantidad a los costes fijos, así que el volumen de equilibrio son los costes fijos divididos entre el margen de contribución. Las mercancías se venden en unidades enteras, así que el volumen calculado se redondea hacia arriba. Los ingresos de equilibrio se muestran como dos cifras separadas —al volumen calculado exacto y al número entero de unidades— porque son importes distintos y la calculadora no los mezcla. Las fórmulas suponen una base de costes, precio constante y coste variable unitario constante dentro del rango relevante. Si costes fijos y contribución son cero, el beneficio es cero a cualquier volumen. Con contribución negativa y costes fijos cero, solo ventas cero dan beneficio cero. El plan es un entero no negativo; el campo vacío significa 0.",
      "example": "Unos costes fijos de 30 000 al mes, un precio de 150 y un coste variable de 90 dan un margen de contribución de 60 por unidad, así que hacen falta 500 unidades y 75 000 de ingresos para alcanzar el equilibrio.",
      "faq": [
        {
          "q": "¿Qué diferencia hay entre costes fijos y variables?",
          "a": "Los costes fijos no dependen de cuánto vendas en un periodo: alquiler, sueldos, suscripciones, amortización. Los costes variables surgen con cada unidad vendida: materiales, embalaje, comisión del marketplace, envío. A veces una misma partida de gasto se reparte entre ambos, y entonces hay que repartirla entre los dos campos."
        },
        {
          "q": "¿Qué es el margen de contribución y por qué importa?",
          "a": "Es el precio de venta menos el coste variable por unidad. Indica cuánto aporta cada unidad vendida a los costes fijos. Mientras la contribución acumulada esté por debajo de los costes fijos el negocio va a pérdidas, y el momento en que se igualan es el punto de equilibrio."
        },
        {
          "q": "¿Por qué se muestran dos cifras de ingresos distintas?",
          "a": "Los ingresos al volumen calculado dividen los costes fijos entre el ratio de contribución y corresponden a un número fraccionario de unidades. Los ingresos al número entero de unidades multiplican el volumen redondeado hacia arriba por el precio. La segunda cifra suele ser algo mayor, y no deben confundirse."
        },
        {
          "q": "¿Por qué el volumen se redondea hacia arriba y no al entero más cercano?",
          "a": "No se puede vender parte de una unidad, y una unidad menos que el volumen calculado ya no cubre los costes fijos. Por eso el resultado se redondea hacia arriba. Cuando el volumen calculado ya es un número entero, no se añade ninguna unidad extra."
        },
        {
          "q": "¿Qué significa el margen de seguridad?",
          "a": "Es la diferencia entre el volumen de ventas previsto y el punto de equilibrio. En porcentaje indica cuánto puede caer el plan antes de que el negocio deje de cubrir sus costes. Un margen de seguridad negativo significa que el volumen previsto está por debajo del equilibrio y el cálculo muestra pérdidas."
        },
        {
          "q": "¿Y si el coste variable es mayor que el precio?",
          "a": "Con costes fijos positivos, una contribución cero deja una pérdida constante y una negativa la aumenta por unidad. Con costes fijos cero, contribución cero da beneficio cero a cualquier volumen; si es negativa, solo volumen cero evita pérdidas."
        },
        {
          "q": "¿Se incluyen los impuestos y los préstamos?",
          "a": "No. El cálculo usa los importes que introduces y no modela impuestos, intereses de préstamos ni estacionalidad. Es una estimación de gestión y no un cálculo contable o fiscal, así que el resultado no garantiza beneficios."
        }
      ],
      "disclaimer": "Un precio constante, un coste variable por unidad y costes fijos del mismo periodo dentro del rango de volumen aplicable. Capacidad, descuentos, mezcla de productos y reglas fiscales pueden cambiar el punto real; no es un plan de ventas garantizado."
    }
  }
};
