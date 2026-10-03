import type { CalculatorDef } from '../../lib/types';

// Reviewed original public145 bodies are retained where factual. Native corrections
// are AI authored; human subject and language review remains pending.
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Базовая сверка стоимости запасов прибавляет закупки к запасу на начало и вычитает запас на конец. Закупка, оставшаяся на складе, не становится себестоимостью проданного только из-за оплаты поставщику. Все суммы берутся по одной учётной базе стоимости, а не в розничных ценах. При списаниях, порче, возвратах или иных движениях простая разница смешивает причины уменьшения запаса: такие операции нужно сверить отдельно, прежде чем назвать весь результат себестоимостью продаж.",
    "howItWorks": "Себестоимость = запас на начало + закупки − запас на конец. Промежуточная величина «доступно к продаже» — это сумма первых двух: весь товар, который мог быть продан за период. Формула предполагает, что нет неучтённых дополнительных движений. Закупки здесь — стоимость поступлений с относимыми затратами, а не только денежные платежи. Отрицательные суммы и конечный запас выше доступного отклоняются.",
    "example": "Склад на начало 320 000 ₽, закупки 780 000 ₽, остаток 415 000 ₽ — себестоимость продаж 685 000 ₽. Если начало 100, закупки 50 и конец 150, результат 0, доступно 150.",
    "howToUse": [
      "Введите стоимость запаса, с которым период начался.",
      "Укажите, на какую сумму закуплено товара за период.",
      "Укажите стоимость остатка на складе на конец периода.",
      "Все три величины берите в одних и тех же ценах — закупочных, а не розничных.",
      "Сверьте потери и прочие движения отдельно: простая разница склада не отличает продажу от списания. Суммы одной валюты не конвертируются."
    ],
    "faq": [
      {
        "q": "Почему остаток на складе вычитается, а не прибавляется?",
        "a": "Конечный запас остаётся вне стоимости выбывшего за период. При корректной базе и отсутствии других движений разница относится к проданному; при потерях или списаниях сначала разделите эти причины уменьшения склада."
      },
      {
        "q": "Входит ли доставка от поставщика в закупки?",
        "a": "Да, если она увеличивает стоимость товара на складе. Доставка до покупателя — уже расходы на продажу, и в этой формуле её быть не должно."
      },
      {
        "q": "Что делать, если склад не инвентаризировали?",
        "a": "Без остатка на конец расчёт даст только «доступно к продаже». Оценка остатка по учётным данным допустима, но ошибка в ней целиком переходит в себестоимость — она вычитается один в один."
      },
      {
        "q": "Почему себестоимость получилась больше закупок?",
        "a": "Значит, склад за период уменьшился: продавали не только закупленное, но и то, что лежало с прошлого периода. Это нормальная ситуация, а не ошибка ввода."
      }
    ],
    "disclaimer": "Базовая сверка учётной стоимости запасов. Не заменяет оценку, обособление списаний или бухгалтерские и налоговые правила."
  },
  "en": {
    "longDescription": "This basic inventory-cost reconciliation adds purchases to opening inventory and subtracts closing inventory. Paying a supplier does not turn unsold stock into cost of goods sold. Use one consistent cost-valuation basis rather than retail prices. Write-offs, damage, returns or other movements can enter the difference without being sales, so reconcile those separately before treating the whole result as sales COGS.",
    "howItWorks": "COGS = opening inventory + purchases − closing inventory. The intermediate figure, goods available for sale, is the sum of the first two: everything that could have been sold during the period. The formula assumes no additional unreconciled movements. Purchases represent received inventory cost with applicable allocations, not merely cash paid. Negative amounts and closing inventory exceeding available inventory are rejected.",
    "example": "Opening stock 320,000, purchases 780,000, closing stock 415,000 — cost of goods sold is 685,000. Opening 100, purchases 50 and closing 150 give COGS 0 and available inventory 150.",
    "howToUse": [
      "Enter the value of the stock the period started with.",
      "Enter how much inventory was purchased during the period.",
      "Enter the value of the stock left at the end of the period.",
      "Use the same prices for all three figures — purchase prices, not retail.",
      "Reconcile losses and other movements separately: the inventory difference cannot distinguish sales from write-offs. Amounts use one currency without conversion."
    ],
    "faq": [
      {
        "q": "Why is closing stock subtracted rather than added?",
        "a": "Closing inventory remains outside the cost removed during the period. With consistent valuation and no other movements, the difference relates to goods sold; losses and write-offs need to be separated first."
      },
      {
        "q": "Do inbound freight costs count as purchases?",
        "a": "Yes, when they increase the value of the goods on the shelf. Outbound delivery to the customer is a selling expense and does not belong in this formula."
      },
      {
        "q": "What if the stock was never counted?",
        "a": "Without a closing figure the calculation only gives goods available for sale. Estimating the closing stock from bookkeeping records is acceptable, but any error in it passes straight into COGS — it is subtracted one for one."
      },
      {
        "q": "Why is COGS higher than my purchases?",
        "a": "The warehouse shrank during the period: you sold not only what you bought but also what was carried over. That is a normal situation, not an input error."
      }
    ],
    "disclaimer": "Basic reconciliation of inventory carrying cost. Does not replace valuation, separating write-offs or accounting and tax rules."
  },
  "uk": {
    "longDescription": "Базова звірка вартості запасів додає закупівлі до запасу на початок і віднімає запас на кінець. Оплата постачальнику не робить непроданий товар собівартістю продажів. Усі суми мають одну облікову базу вартості, а не роздрібні ціни. Списання, псування, повернення чи інші рухи можуть потрапити в різницю без продажу; їх потрібно звірити окремо, перш ніж називати весь результат собівартістю продажів.",
    "howItWorks": "Собівартість дорівнює запас на початок + закупівлі − запас на кінець. Проміжна величина «доступно до продажу» — це сума перших двох доданків: увесь товар, який міг бути проданий за період. Формула припускає відсутність додаткових незвірених рухів. Закупівлі — вартість надходжень із відповідними витратами, а не лише грошові платежі. Від’ємні суми та кінцевий запас понад доступний відхиляються.",
    "example": "Склад на початок 320 000 ₴, закупівлі 780 000 ₴, залишок 415 000 ₴ — собівартість продажів 685 000 ₴, а доступно до продажу було 1 100 000 ₴. За початку 100, закупівель 50 і кінця 150 результат 0, доступно 150.",
    "howToUse": [
      "Введіть вартість запасу на початок періоду.",
      "Введіть суму закупівель за період.",
      "Введіть вартість залишку на кінець періоду.",
      "Звірте втрати й інші рухи окремо: різниця складу не відрізняє продаж від списання. Суми однієї валюти не конвертуються."
    ],
    "faq": [
      {
        "q": "Чому не можна взяти просто суму закупівель?",
        "a": "Закуплене й продане належать до різних моментів обліку. Товар, що залишився на складі, не включається в проданий лише через оплату. Потрібні узгоджені залишки та облік інших рухів."
      },
      {
        "q": "Що входить у вартість запасу?",
        "a": "Закупівельна ціна плюс витрати на доведення товару до продажу: доставка, мито, пакування. Витрати на продаж і рекламу сюди не входять — це витрати періоду."
      },
      {
        "q": "Що робити з псуванням і крадіжкою?",
        "a": "Вони можуть зменшити кінцевий запас і збільшити просту різницю, але це ще не означає, що весь результат є вартістю проданого. Потрібен окремий облік втрат і списань та їхнє належне відображення за застосовними правилами."
      },
      {
        "q": "Чи змінює результат метод оцінки запасів?",
        "a": "Так, оцінка запасу впливає на різницю. IAS 2 описує FIFO або середньозважену вартість для взаємозамінних запасів; це не дозвіл на LIFO. Застосовні стандарти та податкові правила залежать від юрисдикції, а калькулятор лише використовує вже оцінені суми."
      }
    ],
    "disclaimer": "Базова звірка облікової вартості запасів. Не замінює оцінку, відокремлення списань або правила обліку й податків."
  },
  "de": {
    "longDescription": "Diese einfache Abstimmung der Lagerwerte addiert Einkäufe zum Anfangsbestand und zieht den Endbestand ab. Eine Lieferantenzahlung macht unverkaufte Ware noch nicht zum Wareneinsatz. Verwende eine einheitliche Kostenbewertung statt Verkaufspreisen. Abschreibungen, Schäden, Retouren und andere Bewegungen können ebenfalls in der Differenz stecken; sie sind vor einer Einordnung als reiner Wareneinsatz getrennt abzustimmen.",
    "howItWorks": "Wareneinsatz = Anfangsbestand + Zukäufe − Endbestand. Die Zwischenzahl, die zum Verkauf verfügbare Ware, ist die Summe der ersten beiden: alles, was im Zeitraum hätte verkauft werden können. Die Formel setzt voraus, dass keine weiteren unabgestimmten Bewegungen fehlen. Einkäufe bedeuten Kosten des erhaltenen Bestands einschließlich zugehöriger Kosten, nicht nur Barzahlungen. Negative Werte und ein Endbestand über dem verfügbaren Bestand werden abgelehnt.",
    "example": "Anfangsbestand 32 000 €, Zukäufe 78 000 €, Endbestand 41 500 € — der Wareneinsatz beträgt 68 500 €. Anfang 100, Einkäufe 50 und Ende 150 ergeben Wareneinsatz 0 und verfügbaren Bestand 150.",
    "howToUse": [
      "Trage den Wert des Bestands ein, mit dem der Zeitraum begann.",
      "Trage ein, wie viel Ware im Zeitraum zugekauft wurde.",
      "Trage den Wert des am Ende verbliebenen Bestands ein.",
      "Nimm für alle drei Zahlen dieselben Preise — Einkaufspreise, nicht Verkaufspreise.",
      "Stimme Verluste und weitere Bewegungen separat ab; die Lagerdifferenz unterscheidet Verkauf nicht von Abschreibung. Eine Währung ohne Umrechnung gilt."
    ],
    "faq": [
      {
        "q": "Warum wird der Endbestand abgezogen und nicht addiert?",
        "a": "Der Endbestand gehört nicht zu den Kosten der im Zeitraum abgegangenen Ware. Bei einheitlicher Bewertung ohne weitere Bewegungen entspricht die Differenz verkaufter Ware; Verluste und Abschreibungen sind vorher abzugrenzen."
      },
      {
        "q": "Zählen Frachtkosten beim Einkauf als Zukäufe?",
        "a": "Ja, wenn sie den Wert der Ware im Regal erhöhen. Der Versand zum Kunden ist ein Vertriebsaufwand und gehört nicht in diese Formel."
      },
      {
        "q": "Was, wenn der Bestand nie gezählt wurde?",
        "a": "Ohne Endbestand liefert die Rechnung nur die zum Verkauf verfügbare Ware. Den Endbestand aus der Buchführung zu schätzen ist vertretbar, aber jeder Fehler darin geht eins zu eins in den Wareneinsatz über — er wird unmittelbar abgezogen."
      },
      {
        "q": "Warum ist der Wareneinsatz höher als meine Zukäufe?",
        "a": "Das Lager ist im Zeitraum geschrumpft: du hast nicht nur Zugekauftes verkauft, sondern auch Übertragenes. Das ist ein gewöhnlicher Fall und kein Eingabefehler."
      }
    ],
    "disclaimer": "Einfache Abstimmung der Lagerkosten; kein Ersatz für Bewertung, Abgrenzung von Abschreibungen oder Rechnungslegungs- und Steuerregeln."
  },
  "es": {
    "longDescription": "Esta conciliación básica suma compras a las existencias iniciales y resta las finales. Pagar al proveedor no convierte mercancía no vendida en coste de ventas. Usa una base de valoración a coste coherente, no precios de venta. Bajas, deterioro, devoluciones u otros movimientos pueden reducir las existencias sin ser ventas; deben conciliarse aparte antes de tratar toda la diferencia como coste de ventas.",
    "howItWorks": "Coste de ventas = existencia inicial + compras − existencia final. La cifra intermedia, mercancías disponibles para la venta, es la suma de las dos primeras: todo lo que podría haberse vendido en el periodo. La fórmula supone que no faltan otros movimientos por conciliar. Compras significa coste del inventario recibido con costes atribuibles, no únicamente pagos en efectivo. Se rechazan importes negativos y existencias finales superiores a las disponibles.",
    "example": "Existencia inicial 32 000, compras 78 000 y existencia final 41 500: el coste de las mercancías vendidas es de 68 500. Inicial 100, compras 50 y final 150 dan coste 0 y disponible 150.",
    "howToUse": [
      "Introduce el valor de las existencias con las que empezó el periodo.",
      "Introduce cuánta mercancía se compró durante el periodo.",
      "Introduce el valor de las existencias que quedaron al final del periodo.",
      "Usa los mismos precios en las tres cifras: precios de compra, no de venta.",
      "Concilia pérdidas y otros movimientos aparte: la diferencia no distingue venta de baja. Los importes usan una moneda sin conversión."
    ],
    "faq": [
      {
        "q": "¿Por qué la existencia final se resta y no se suma?",
        "a": "Las existencias finales quedan fuera del coste retirado durante el periodo. Con valoración coherente y sin otros movimientos, la diferencia corresponde a ventas; primero separa pérdidas y bajas."
      },
      {
        "q": "¿Los portes de entrada cuentan como compras?",
        "a": "Sí, cuando aumentan el valor de la mercancía en la estantería. El envío al cliente es un gasto de venta y no entra en esta fórmula."
      },
      {
        "q": "¿Y si nunca se hizo inventario?",
        "a": "Sin una cifra final el cálculo solo da las mercancías disponibles para la venta. Estimar la existencia final con los registros contables es aceptable, pero cualquier error en ella pasa directo al coste de ventas: se resta uno por uno."
      },
      {
        "q": "¿Por qué el coste de ventas es mayor que mis compras?",
        "a": "El almacén se redujo durante el periodo: vendiste no solo lo que compraste, sino también lo que venía de antes. Es una situación normal y no un error de entrada."
      }
    ],
    "disclaimer": "Conciliación básica del coste del inventario; no sustituye valoración, separación de bajas ni normas contables o fiscales."
  }
};
