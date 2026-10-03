import type { CalculatorDef } from '../../lib/types';

// Reviewed original public145 bodies are retained where factual. Native corrections
// are AI authored; human subject and language review remains pending.
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Рекламный бюджет превращается в ожидаемые клики, заказы и выручку при заданных цене клика, конверсии и среднем чеке. Клики и заказы здесь могут быть дробными математическими ожиданиями, а не обещанным числом покупок. ROAS сравнивает выручку с рекламным расходом: без себестоимости и маржи он не определяет прибыльность. Модель предполагает неизменные CPC и конверсию для всего бюджета и не оценивает аукцион, возвраты или повторные покупки.",
    "howItWorks": "Клики = бюджет ÷ цена клика. Заказы = клики × конверсия ÷ 100. Выручка = заказы × средний чек, а ROAS — выручка ÷ бюджет. Цена заказа = CPC ÷ (конверсия/100), только при конверсии выше нуля. При 0 % заказов и выручки нет, а цена заказа не показана. В этой модели каждый клик даёт не более одного заказа, поэтому конверсия ограничена 0–100 %.",
    "example": "Бюджет 150 000 ₽ при цене клика 24 ₽, конверсии 2,4 % и чеке 4 900 ₽ даёт 735 000 ₽ — ROAS 4,9. При той же цене клика и конверсии 0 % заказы и выручка 0, цена заказа не показывается.",
    "howToUse": [
      "Введите бюджет, который планируете потратить.",
      "Укажите цену клика, ожидаемую на аукционе.",
      "Укажите конверсию из клика в заказ.",
      "Введите средний чек по рекламируемым товарам.",
      "Проверьте маржинальный доход отдельно: ROAS 1 не равен покрытию себестоимости. Все денежные входы имеют одну выбранную валюту без обмена."
    ],
    "faq": [
      {
        "q": "К какому входу стоит отнестись внимательнее всего?",
        "a": "К конверсии. Она умножается через всю цепочку, и предположение о 3 % против реальных 1,5 % вдвое режет выручку, выглядя на странице небольшой разницей."
      },
      {
        "q": "Какой ROAS считать достаточным?",
        "a": "Порог зависит от маржинального дохода до рекламы. Если он составляет 30 % выручки, только покрытие рекламного расхода требует ROAS = 1/0,30 = 3,3333… . Прочие расходы могут повысить порог; ROAS 1 не означает безубыточность."
      },
      {
        "q": "Учитывает ли выручка возвраты?",
        "a": "Возвраты отдельно не моделируются. Используйте средний чек и долю состоявшихся заказов на согласованной базе или пересчитайте возвраты отдельно. Универсального уменьшения выручки на 20 % здесь нет."
      },
      {
        "q": "Зачем показывать цену заказа отдельно?",
        "a": "Она напрямую сравнивается со средним чеком и с вашей маржой. Если заказ обходится дороже, чем приносит, воронка сломана независимо от того, как выглядят итоги."
      }
    ],
    "disclaimer": "Постоянные CPC и вероятность заказа; прогноз выручки до неучтённых затрат, без универсального порога прибыли."
  },
  "en": {
    "longDescription": "This forecast turns an advertising budget into expected clicks, orders and revenue using a supplied click price, conversion probability and average order value. Fractional clicks and orders are expected averages rather than promised purchases. ROAS compares revenue with advertising cost; profitability also needs product costs and margin. The model keeps CPC and conversion constant across the budget and does not model auctions, returns or repeat purchases.",
    "howItWorks": "Clicks = budget ÷ cost per click. Orders = clicks × conversion ÷ 100. Revenue = orders × average order value, and ROAS is revenue ÷ budget. Cost per order = CPC ÷ (conversion/100), only for positive conversion. At 0%, orders and revenue are zero and cost per order is omitted. Each click produces at most one order in this model, so conversion is limited to 0–100%.",
    "example": "A budget of 150,000 at 24 per click with 2.4% conversion and a 4,900 order value returns 735,000 — a ROAS of 4.9. With the same click price and 0% conversion, orders and revenue are 0 and cost per order is omitted.",
    "howToUse": [
      "Enter the budget you plan to spend.",
      "Enter the cost per click you expect from the auction.",
      "Enter the conversion rate from click to order.",
      "Enter the average order value for the products advertised.",
      "Check contribution margin separately: ROAS 1 does not cover product costs by itself. Use one chosen currency for every amount; no exchange occurs."
    ],
    "faq": [
      {
        "q": "Which input should I be most careful with?",
        "a": "The conversion rate. It multiplies through the whole chain, and a guess of 3% against a real 1.5% halves the revenue while looking like a small difference on the page."
      },
      {
        "q": "What ROAS is good enough?",
        "a": "The threshold depends on contribution margin before ads. With 30% of revenue available to cover advertising, covering ads alone needs ROAS = 1/0.30 = 3.3333… . Other costs can raise the threshold; ROAS 1 does not establish break-even."
      },
      {
        "q": "Does the revenue include returns?",
        "a": "Returns are not modelled separately. Use an order value and completed-order conversion on a consistent basis, or account for returns separately. There is no universal 20% revenue adjustment."
      },
      {
        "q": "Why show the cost per order separately?",
        "a": "Because it compares directly with the average order value and with your margin. If an order costs more to acquire than it earns, the funnel is broken regardless of how the totals look."
      }
    ],
    "disclaimer": "Constant CPC and order probability; revenue forecast before unentered costs, without a universal profitability threshold."
  },
  "uk": {
    "longDescription": "Рекламний бюджет перетворюється на очікувані кліки, замовлення й виторг за заданих ціни кліка, конверсії та середнього чека. Дробові кліки й замовлення є математичними очікуваннями, а не обіцянкою продажів. ROAS порівнює виторг із рекламними витратами; прибутковість потребує собівартості й маржі. Модель тримає CPC і конверсію сталими для всього бюджету та не моделює аукціон, повернення або повторні покупки.",
    "howItWorks": "Кліки дорівнюють бюджет ÷ ціна кліка. Замовлення — кліки × конверсія ÷ 100. Виторг — замовлення × середній чек, а ROAS — виторг ÷ бюджет. Кожен етап множиться на наступний, тому помилка в будь-якому з них проходить крізь усю воронку. Ціна замовлення = CPC ÷ (конверсія/100), лише за додатної конверсії. За 0 % замовлення й виторг нульові, а ціна замовлення не показується. Один клік дає не більше одного замовлення, тому конверсія обмежена 0–100 %.",
    "example": "Бюджет 150 000 ₴ за ціни кліка 24 ₴, конверсії 2,4 % і чека 4900 ₴ дає 735 000 ₴ — ROAS 4,9. Приріст конверсії до 3 % підняв би виторг до 918 750 ₴ без збільшення бюджету. За тієї самої ціни кліка й конверсії 0 % замовлення та виторг 0, ціна замовлення не показується.",
    "howToUse": [
      "Введіть бюджет кампанії.",
      "Введіть ціну кліка й очікувану конверсію у відсотках.",
      "Введіть середній чек.",
      "Перевірте маржинальний дохід окремо: ROAS 1 сам по собі не покриває собівартість. Усі суми мають одну вибрану валюту без обміну."
    ],
    "faq": [
      {
        "q": "Який етап воронки покращувати першим?",
        "a": "Порівняйте вартість і реалістичність зміни кожного етапу. Підвищення конверсії з 2,4 % до 3 % дає той самий множник 1,25, що зниження CPC з 24 до 19,2 за незмінних бюджету й чека. Жодна з цих змін не є автоматично доступнішою."
      },
      {
        "q": "Чому прогноз розходиться з фактом?",
        "a": "CPC та конверсія можуть змінюватися через аудиторію, аукціон і пропозицію. Зростання бюджету саме по собі не гарантує ні дорожчих кліків, ні нижчої конверсії. Перевірте кілька обґрунтованих сценаріїв замість одного точного прогнозу."
      },
      {
        "q": "Чи враховано повторні покупки?",
        "a": "Повторні покупки окремо не враховані. Вони можуть збільшити цінність клієнта, але також потребують витрат, часу й утримання. Їхній майбутній внесок не гарантований цим ROAS."
      },
      {
        "q": "Що робити, якщо ROAS нижчий за беззбитковий?",
        "a": "Спочатку визначте власний поріг з маржинального доходу до реклами та інших витрат. За частки 30 % лише реклама покривається при ROAS 3,3333… . Потім порівняйте обґрунтовані зміни CPC, конверсії й чека; сам ROAS не обчислює чистий прибуток."
      }
    ],
    "disclaimer": "Сталі CPC та ймовірність замовлення; прогноз виторгу до невказаних витрат без універсального порога прибутку."
  },
  "de": {
    "longDescription": "Diese Prognose übersetzt ein Werbebudget über Klickpreis, Konversionswahrscheinlichkeit und Bestellwert in erwartete Klicks, Bestellungen und Umsatz. Bruchteile von Klicks oder Bestellungen sind Erwartungswerte, keine zugesagten Verkäufe. ROAS vergleicht Umsatz mit Werbekosten; für Rentabilität fehlen Warenkosten und Marge. CPC und Konversion bleiben für das gesamte Budget konstant. Auktionen, Rücksendungen und Wiederholungskäufe werden nicht modelliert.",
    "howItWorks": "Klicks = Budget ÷ Klickpreis. Bestellungen = Klicks × Konversion ÷ 100. Umsatz = Bestellungen × durchschnittlicher Bestellwert, und der ROAS ist Umsatz ÷ Budget. Bestellkosten = CPC ÷ (Konversion/100), nur bei positiver Konversion. Bei 0 % entstehen null Bestellungen und Umsatz; Bestellkosten entfallen. Ein Klick liefert hier höchstens eine Bestellung, daher gilt 0–100 %.",
    "example": "Ein Budget von 3000 € bei 0,48 € je Klick, 2,4 % Konversion und einem Bestellwert von 98 € bringt 14 700 € — ein ROAS von 4,9. Bei gleichem Klickpreis und 0 % Konversion sind Bestellungen und Umsatz 0; Bestellkosten entfallen.",
    "howToUse": [
      "Trage das Budget ein, das du ausgeben willst.",
      "Trage den Klickpreis ein, den du in der Auktion erwartest.",
      "Trage die Konversionsrate vom Klick zur Bestellung ein.",
      "Trage den durchschnittlichen Bestellwert der beworbenen Waren ein.",
      "Prüfe den Deckungsbeitrag separat: ROAS 1 deckt nicht automatisch Warenkosten. Alle Beträge verwenden eine gewählte Währung ohne Umrechnung."
    ],
    "faq": [
      {
        "q": "Bei welcher Eingabe muss ich am vorsichtigsten sein?",
        "a": "Bei der Konversionsrate. Sie geht als Faktor durch die ganze Kette, und eine Schätzung von 3 % gegen tatsächliche 1,5 % halbiert den Umsatz, während sie auf der Seite wie ein kleiner Unterschied aussieht."
      },
      {
        "q": "Welcher ROAS reicht aus?",
        "a": "Der Schwellenwert hängt vom Deckungsbeitrag vor Werbung ab. Bei 30 % Umsatzanteil für Werbung verlangt allein deren Deckung ROAS = 1/0,30 = 3,3333… . Weitere Kosten können den Wert erhöhen; ROAS 1 beweist keine Kostendeckung."
      },
      {
        "q": "Sind Rücksendungen im Umsatz enthalten?",
        "a": "Rücksendungen werden nicht getrennt modelliert. Bestellwert und Quote erfolgreicher Bestellungen müssen dieselbe Grundlage nutzen, oder Rücksendungen sind separat abzuziehen. Eine allgemeine Umsatzkorrektur von 20 % gibt es nicht."
      },
      {
        "q": "Warum stehen die Kosten je Bestellung gesondert da?",
        "a": "Weil sie sich unmittelbar mit dem durchschnittlichen Bestellwert und mit deiner Marge vergleichen lassen. Kostet eine Bestellung mehr in der Gewinnung, als sie einbringt, ist der Trichter kaputt, wie die Summen auch aussehen."
      }
    ],
    "disclaimer": "Konstanter CPC und Bestellwahrscheinlichkeit; Umsatzprognose vor fehlenden Kosten ohne allgemeine Gewinnschwelle."
  },
  "es": {
    "longDescription": "Esta previsión convierte el presupuesto publicitario en clics, pedidos e ingresos esperados mediante el precio por clic, la probabilidad de conversión y el valor medio del pedido. Los clics y pedidos fraccionarios son medias esperadas, no ventas prometidas. ROAS compara ingresos con gasto publicitario; la rentabilidad requiere costes del producto y margen. CPC y conversión permanecen constantes para todo el presupuesto, sin modelar subastas, devoluciones ni compras repetidas.",
    "howItWorks": "Clics = presupuesto ÷ coste por clic. Pedidos = clics × conversión ÷ 100. Ingresos = pedidos × ticket medio, y el ROAS es ingresos ÷ presupuesto. Coste por pedido = CPC ÷ (conversión/100), solo con conversión positiva. Con 0%, pedidos e ingresos son cero y se omite el coste por pedido. Cada clic genera como máximo un pedido en este modelo; la conversión se limita a 0–100%.",
    "example": "Un presupuesto de 15 000 a 2,40 por clic con un 2,4 % de conversión y un ticket de 49 devuelve 7350: un ROAS de 0,49. Con el mismo precio por clic y conversión 0%, pedidos e ingresos son 0 y se omite el coste por pedido.",
    "howToUse": [
      "Introduce el presupuesto que piensas gastar.",
      "Introduce el coste por clic que esperas de la subasta.",
      "Introduce la tasa de conversión de clic a pedido.",
      "Introduce el ticket medio de los productos anunciados.",
      "Comprueba aparte el margen de contribución: ROAS 1 no cubre por sí solo el producto. Usa una moneda elegida para todos los importes, sin conversión."
    ],
    "faq": [
      {
        "q": "¿Con qué dato debo tener más cuidado?",
        "a": "Con la tasa de conversión. Se multiplica a lo largo de toda la cadena, y suponer un 3 % frente a un 1,5 % real reduce los ingresos a la mitad pareciendo una diferencia pequeña en la página."
      },
      {
        "q": "¿Qué ROAS es suficiente?",
        "a": "El umbral depende del margen de contribución antes de publicidad. Si queda el 30% de los ingresos para cubrir anuncios, solo cubrirlos exige ROAS = 1/0,30 = 3,3333… . Otros costes pueden elevarlo; ROAS 1 no demuestra equilibrio."
      },
      {
        "q": "¿Los ingresos incluyen las devoluciones?",
        "a": "Las devoluciones no se modelan por separado. Usa valor del pedido y conversión de pedidos completados con una base coherente, o ajusta las devoluciones aparte. No existe un descuento universal del 20% sobre los ingresos."
      },
      {
        "q": "¿Por qué se muestra aparte el coste por pedido?",
        "a": "Porque se compara directamente con el ticket medio y con tu margen. Si un pedido cuesta más de captar de lo que deja, el embudo está roto por bien que se vean los totales."
      }
    ],
    "disclaimer": "CPC y probabilidad de pedido constantes; previsión de ingresos antes de costes ausentes, sin umbral universal de beneficio."
  }
};
