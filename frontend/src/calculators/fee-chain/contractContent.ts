import type { CalculatorDef } from '../../lib/types';

// Reviewed original public145 bodies are retained where factual. Native corrections
// are AI authored; human subject and language review remains pending.
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Схема вычитает из цены товара две процентные ставки и две фиксированные суммы: комиссию, эквайринг, логистику и хранение. Обе ставки в этой модели относятся к одной исходной цене, а не последовательно к остатку. Выплата — остаток после введённых удержаний; строка прибыли дополнительно вычитает введённую себестоимость, но не неучтённые налоги, рекламу и прочие расходы. Реальные площадки могут применять другую базу, минимальные сборы и тарифные ступени — их нужно проверить отдельно.",
    "howItWorks": "Комиссия и эквайринг считаются долями от цены товара, а логистика и хранение прибавляются к ним фиксированными суммами. Выплата продавцу = цена минус все удержания; прибыль = выплата минус себестоимость. Прибыль к цене = (выплата−себестоимость)/цена × 100 %. Пустое хранение означает 0 и скрывает только эту строку. Отрицательная выплата или прибыль возможна при затратах выше цены и не заменяется нулём. Каждая ставка ограничена интерфейсным диапазоном 0–100 %. Это ограничение инструмента, а не тарифная норма.",
    "example": "Товар за 2000 ₽ при комиссии 17 %, эквайринге 1,5 % и логистике 55 ₽ даёт выплату 1575 ₽ и прибыль 675 ₽ при себестоимости 900 ₽. При цене 1000 и всех удержаниях 0 выплата 1000; пустое хранение эквивалентно 0.",
    "howToUse": [
      "Введите цену, по которой товар продаётся покупателю.",
      "Укажите ставку комиссии площадки и эквайринга из своего тарифа.",
      "Добавьте логистику и хранение за отправление, если они удерживаются отдельно.",
      "Впишите себестоимость, чтобы увидеть прибыль, а не только выплату.",
      "Сверьте базу тарифа, минимальные комиссии и распределение услуг на товар. Хранение можно оставить пустым; остальные суммы вводятся явно в одной валюте."
    ],
    "faq": [
      {
        "q": "Проценты берутся от цены или от остатка?",
        "a": "Здесь обе ставки берутся от исходной цены. Это выбранная схема, а не правило всех площадок. Если тариф включает доставку в базу, применяет минимум или удерживает проценты последовательно, простая модель не воспроизведёт его без отдельного расчёта."
      },
      {
        "q": "Почему логистика вводится за отправление?",
        "a": "Введите относимую на один продажный экземпляр сумму из своего тарифа или учёта. В модели она фиксирована при изменении цены, но реальная логистика может зависеть от размеров, веса, направления и услуг — одинаковая стоимость для любых товаров не предполагается."
      },
      {
        "q": "Что делать, если хранение не удерживается?",
        "a": "Оставьте поле пустым или нулевым — строка хранения тогда просто не появится в результате, а расчёт останется верным."
      },
      {
        "q": "Почему прибыль отличается от выплаты?",
        "a": "Выплата вычитает введённые услуги площадки, прибыль дополнительно вычитает себестоимость. Название строки не превращает остаток в чистую бухгалтерскую прибыль: реклама, возвраты, налоги и прочие неуказанные затраты ещё могут уменьшить его."
      },
      {
        "q": "Удерживает ли площадка налог с продавца?",
        "a": "Налоги здесь отдельно не считаются. Кто их начисляет, удерживает или перечисляет, зависит от страны, статуса продавца и платформы. Проверьте свои правила; калькулятор не утверждает, что площадка никогда не удерживает налог."
      }
    ],
    "disclaimer": "Две ставки от цены и введённые фиксированные услуги. Не воспроизводит любой тариф площадки; прибыль только после указанных затрат, без автоматических налогов."
  },
  "en": {
    "longDescription": "This model subtracts two percentage charges and two fixed amounts from the item price: commission, payment processing, shipping and storage. Both rates use the same original price, not the balance after the preceding fee. Payout is the remainder after entered deductions; the profit row also subtracts the supplied product cost but excludes any unentered taxes, ads and other costs. Actual platforms may use different bases, minimum charges and tiers, which must be checked separately.",
    "howItWorks": "Commission and card processing are taken as shares of the item price, while shipping and storage are added as flat amounts. Seller payout = price minus every deduction; profit = payout minus cost of goods. Price margin = (payout−product cost)/price × 100%. Blank storage means zero and omits only that row. Payout or profit can be negative when deductions exceed price; it is not clamped to zero. Each rate uses the form range 0–100%. This is a tool limit, not a tariff rule.",
    "example": "An item at 2000 with 17% commission, 1.5% processing and 55 shipping pays out 1575 and leaves 675 profit at a cost of 900. Price 1000 with all deductions 0 gives payout 1000; blank storage equals 0.",
    "howToUse": [
      "Enter the price the buyer pays for the item.",
      "Add the platform commission and card processing rates from your tariff.",
      "Add per-parcel shipping and storage if they are deducted separately.",
      "Enter the cost of goods to see profit rather than payout alone.",
      "Check tariff bases, minimum fees and service allocation per item. Storage may be blank; enter other amounts explicitly in one currency."
    ],
    "faq": [
      {
        "q": "Are the percentages taken from the price or from what is left?",
        "a": "Both rates use the original price here. This is the chosen model, not a rule for every platform. A shipping-inclusive fee base, minimum charge or sequential deduction needs a separate calculation."
      },
      {
        "q": "Why is shipping entered per parcel?",
        "a": "Enter the amount allocated to this sale from your tariff or records. It is fixed when the model price changes, but actual shipping may depend on size, weight, destination and service; equal shipping cost for every item is not assumed."
      },
      {
        "q": "What if storage is not deducted?",
        "a": "Leave the field empty or at zero — the storage row simply will not appear in the result and the calculation stays correct."
      },
      {
        "q": "Why does profit differ from payout?",
        "a": "Payout subtracts the entered platform charges; profit also subtracts product cost. The row label does not establish net accounting profit: ads, returns, taxes and other unentered costs can reduce it further."
      },
      {
        "q": "Is tax included?",
        "a": "Taxes are not calculated separately. Who charges, withholds or remits them depends on country, seller status and platform. Check the applicable rules; the model does not claim platforms never withhold taxes."
      }
    ],
    "disclaimer": "Two rates on price and entered fixed services. Does not reproduce every platform tariff; profit is after included costs only, without automatic taxes."
  },
  "uk": {
    "longDescription": "Модель віднімає від ціни товару дві відсоткові ставки й дві фіксовані суми: комісію, еквайринг, логістику та зберігання. Обидві ставки беруться від однієї початкової ціни, не послідовно від залишку. Виплата — залишок після введених утримань; рядок прибутку також віднімає введену собівартість, але не невказані податки, рекламу й інші витрати. Реальні майданчики можуть мати іншу базу, мінімальні збори та тарифні ступені — їх перевіряють окремо.",
    "howItWorks": "Комісія й еквайринг рахуються частками від ціни товару, а логістика й зберігання додаються до них фіксованими сумами. Виплата дорівнює ціна мінус усі утримання, прибуток — виплата мінус собівартість. Рентабельність до ціни = (виплата−собівартість)/ціна × 100 %. Порожнє зберігання означає 0 і прибирає лише цей рядок. Виплата або прибуток можуть бути від’ємними за витрат понад ціну й не замінюються нулем. Кожна ставка має діапазон інтерфейсу 0–100 %. Це межа інструмента, а не тарифна норма.",
    "example": "Товар за 2000 ₴ за комісії 17 %, еквайрингу 1,5 % і логістики 55 ₴ дає виплату 1575 ₴ і прибуток 675 ₴ за собівартості 900 ₴. За ціни 1000 й усіх утримань 0 виплата 1000; порожнє зберігання дорівнює 0.",
    "howToUse": [
      "Введіть ціну товару для покупця.",
      "Введіть комісію площадки й ставку еквайрингу у відсотках.",
      "Додайте логістику й зберігання, віднесені на один продаж; інші платежі потребують окремого обліку.",
      "Введіть собівартість, щоб побачити залишок після саме цих витрат, а не повний чистий прибуток.",
      "Перевірте базу тарифу, мінімальні комісії та розподіл послуг на товар. Зберігання може бути порожнім; решту сум вводьте явно в одній валюті."
    ],
    "faq": [
      {
        "q": "Чому підсумкове утримання більше за комісію?",
        "a": "Сума містить не лише комісію, а й введені еквайринг, логістику та зберігання. Їхня частка залежить від ціни й вашого тарифу; універсального подвоєння комісії немає."
      },
      {
        "q": "Від якої суми береться комісія?",
        "a": "У цій моделі — від початкової ціни для покупця. Перевірте реальну базу майданчика: вона може включати доставку, мати мінімум або ступені. Підвищення ціни змінює процентні утримання, тому виплата не зростає в тій самій відносній пропорції за фіксованих платежів."
      },
      {
        "q": "Чому фіксовані платежі так б’ють по дешевому товару?",
        "a": "Бо вони не залежать від ціни. Логістика 55 ₴ — це 2,75 % від товару за 2000 ₴ і аж 27,5 % від товару за 200 ₴. Дешевий асортимент на площадках часто збитковий саме тому."
      },
      {
        "q": "Чи враховано повернення?",
        "a": "Повернення окремо не моделюються. Вони можуть змінювати дохід, відшкодування комісії та прямі й зворотні логістичні платежі за правилами майданчика. Не припускайте автоматично рівно дві доставки для кожного повернення."
      }
    ],
    "disclaimer": "Дві ставки від ціни та введені фіксовані послуги. Не відтворює кожен тариф; прибуток лише після вказаних витрат без автоматичних податків."
  },
  "de": {
    "longDescription": "Das Modell zieht zwei prozentuale und zwei feste Beträge vom Artikelpreis ab: Provision, Zahlungsabwicklung, Versand und Lagerung. Beide Sätze beziehen sich auf denselben ursprünglichen Preis, nicht nacheinander auf einen Rest. Die Auszahlung bleibt nach eingegebenen Abzügen; die Gewinnzeile zieht zusätzlich die eingegebenen Warenkosten ab, nicht unberücksichtigte Steuern, Werbung oder weitere Kosten. Tatsächliche Plattformen können andere Bemessungsgrundlagen, Mindestgebühren und Tarifstufen verwenden.",
    "howItWorks": "Provision und Zahlungsabwicklung werden als Anteile des Warenpreises genommen, während Versand und Lagerung als feste Beträge hinzukommen. Auszahlung = Preis minus aller Abzüge; Gewinn = Auszahlung minus Wareneinsatz. Preismarge = (Auszahlung−Warenkosten)/Preis × 100 %. Leere Lagerkosten bedeuten null und entfernen nur diese Zeile. Auszahlung und Gewinn können bei Abzügen über dem Preis negativ sein; sie werden nicht auf null begrenzt. Jeder Satz nutzt den Formularbereich 0–100 %. Dies ist eine Werkzeuggrenze, keine Tarifvorgabe.",
    "example": "Eine Ware zu 40 € mit 17 % Provision, 1,5 % Zahlungsabwicklung und 1,10 € Versand zahlt 31,50 € aus und lässt bei 18 € Wareneinsatz 13,50 € Gewinn. Preis 1000 und alle Abzüge 0 ergeben Auszahlung 1000; leere Lagerkosten bedeuten 0.",
    "howToUse": [
      "Trage den Preis ein, den der Käufer für die Ware zahlt.",
      "Ergänze Provision und Zahlungsabwicklung aus deinem Tarif.",
      "Ergänze Versand und Lagerung je Paket, wenn sie gesondert einbehalten werden.",
      "Trage den Wareneinsatz ein, um den Gewinn statt nur der Auszahlung zu sehen.",
      "Prüfe Tarifbasis, Mindestgebühren und Zuordnung der Leistungen je Artikel. Lagerung darf leer sein; übrige Beträge sind in einer Währung einzugeben."
    ],
    "faq": [
      {
        "q": "Werden die Prozentsätze vom Preis oder vom Rest genommen?",
        "a": "Hier gelten beide Sätze für den ursprünglichen Preis. Das ist das gewählte Modell, keine Regel aller Plattformen. Eine Basis einschließlich Versand, Mindestgebühren oder aufeinanderfolgende Abzüge verlangen eine gesonderte Rechnung."
      },
      {
        "q": "Warum wird der Versand je Paket eingetragen?",
        "a": "Gib den dieser Verkaufseinheit zugeordneten Betrag aus Tarif oder Buchführung ein. Bei Preisänderungen ist er im Modell fest; tatsächlicher Versand kann jedoch von Größe, Gewicht, Ziel und Leistung abhängen. Gleiche Kosten für jeden Artikel werden nicht vorausgesetzt."
      },
      {
        "q": "Was, wenn keine Lagerung einbehalten wird?",
        "a": "Lass das Feld leer oder auf null — die Zeile zur Lagerung erscheint dann schlicht nicht, und die Rechnung bleibt richtig."
      },
      {
        "q": "Warum weicht der Gewinn von der Auszahlung ab?",
        "a": "Die Auszahlung zieht eingegebene Plattformgebühren ab; Gewinn zusätzlich Warenkosten. Der Zeilenname bezeichnet nicht automatisch Nettogewinn: Werbung, Retouren, Steuern und weitere fehlende Kosten können ihn senken."
      },
      {
        "q": "Ist die Steuer enthalten?",
        "a": "Steuern werden nicht getrennt berechnet. Wer sie erhebt, einbehält oder abführt, hängt von Land, Verkäuferstatus und Plattform ab. Prüfe geltende Regeln; das Modell behauptet nicht, dass Plattformen niemals Steuern einbehalten."
      }
    ],
    "disclaimer": "Zwei Sätze auf den Preis und eingegebene feste Leistungen; kein Abbild aller Plattformtarife. Gewinn nur nach enthaltenen Kosten, ohne automatische Steuern."
  },
  "es": {
    "longDescription": "El modelo resta del precio dos tipos porcentuales y dos importes fijos: comisión, procesamiento de pago, logística y almacenaje. Ambos porcentajes usan el precio original, no el saldo tras la tarifa anterior. La liquidación es el resto después de deducciones introducidas; la fila de beneficio también resta el coste del producto, pero no impuestos, publicidad u otros costes no incluidos. Las plataformas reales pueden usar bases diferentes, mínimos y tramos que deben comprobarse aparte.",
    "howItWorks": "La comisión y la pasarela de pago se toman como proporciones del precio del artículo, mientras que el envío y el almacenaje se suman como importes fijos. Liquidación al vendedor = precio menos todos los descuentos; beneficio = liquidación menos el coste de la mercancía. Margen sobre precio = (liquidación−coste del producto)/precio × 100%. Almacenaje vacío significa cero y omite solo esa fila. Liquidación o beneficio pueden ser negativos si los costes superan el precio, sin convertirlos en cero. Cada tipo usa el rango del formulario 0–100%. Es un límite de la herramienta, no una norma tarifaria.",
    "example": "Un artículo a 20 con un 17 % de comisión, un 1,5 % de pasarela y 0,55 de envío liquida 15,75 y deja 6,75 de beneficio con un coste de 9. Precio 1000 y deducciones 0 dan liquidación 1000; almacenaje vacío equivale a 0.",
    "howToUse": [
      "Introduce el precio que paga el comprador por el artículo.",
      "Añade los tipos de comisión de la plataforma y de la pasarela de pago según tu tarifa.",
      "Añade el envío y el almacenaje por paquete si se descuentan aparte.",
      "Introduce el coste de la mercancía para ver el beneficio y no solo la liquidación.",
      "Comprueba bases, mínimos y asignación de servicios al producto. Almacenaje puede quedar vacío; introduce los demás importes en una moneda."
    ],
    "faq": [
      {
        "q": "¿Los porcentajes se toman del precio o de lo que queda?",
        "a": "Aquí ambos tipos se aplican al precio original. Es el modelo elegido, no una regla de todas las plataformas. Bases que incluyan envío, tarifas mínimas o deducciones sucesivas requieren otro cálculo."
      },
      {
        "q": "¿Por qué el envío se introduce por paquete?",
        "a": "Introduce el importe asignado a esta venta según tarifa o registros. El modelo lo mantiene fijo al cambiar el precio, pero el envío real puede depender de tamaño, peso, destino y servicio; no supone el mismo coste para todo producto."
      },
      {
        "q": "¿Y si no se descuenta almacenaje?",
        "a": "Deja el campo vacío o en cero: la fila del almacenaje simplemente no aparecerá en el resultado y el cálculo sigue siendo correcto."
      },
      {
        "q": "¿Por qué el beneficio difiere de la liquidación?",
        "a": "La liquidación resta cargos de plataforma introducidos; el beneficio además resta el coste del producto. La etiqueta no acredita beneficio contable neto: publicidad, devoluciones, impuestos y otros costes ausentes pueden reducirlo."
      },
      {
        "q": "¿Están incluidos los impuestos?",
        "a": "Los impuestos no se calculan aparte. Quién los cobra, retiene o ingresa depende del país, condición del vendedor y plataforma. Comprueba las reglas; el modelo no afirma que las plataformas nunca retengan impuestos."
      }
    ],
    "disclaimer": "Dos tipos sobre precio y servicios fijos introducidos; no reproduce cualquier tarifa. Beneficio solo tras costes incluidos, sin impuestos automáticos."
  }
};
