import type { CalculatorDef } from '../../lib/types';

type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
// Starts from the five actual145 public bodies; bounded model corrections
// and independently checked examples are authored per subject and locale.
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Показывает арендный доход относительно цены покупки недвижимости. Валовая доходность использует годовую аренду, чистая вычитает введённые годовые расходы и может быть отрицательной. Например, валовые 6% при расходах в 2% цены дают чистые 4%. Отдельная строка окупаемости относится к валовой аренде, даже когда расходы заполнены. Сравнение со вкладом требует также учёта налогов, ликвидности, рисков и изменения стоимости, которые здесь не оценены.",
    "howToUse": [
      "Введите цену покупки.",
      "Укажите аренду за год или за месяц.",
      "При желании добавьте годовые расходы — появится чистая доходность."
    ],
    "howItWorks": "При месячной аренде M годовая аренда A=12×M; в годовом режиме A вводится напрямую. Цена P>0, валовая доходность 100×A/P. При расходах C>0 чистая доходность 100×(A−C)/P, в том числе отрицательная при C>A; пустое поле расходов означает 0. Простая валовая окупаемость P/A не вычитает расходы и не дисконтирует будущие поступления. Все деньги используют одну валютную базу, без конвертации.",
    "example": "Квартира за 10 000 000 ₽ с арендой 50 000 ₽ в месяц даёт валовую доходность 6,00%. Граница: цена 1000, годовая аренда 100 и расходы 150 дают валовые 10%, чистые −5%, но валовую окупаемость 10 лет. При аренде 0 и расходах 50 чистые −5%, а строки окупаемости нет.",
    "faq": [
      {
        "q": "Чем валовая доходность отличается от чистой?",
        "a": "Валовая берёт всю введённую аренду, чистая вычитает расходы. Чистая помогает сопоставлять денежные потоки, но сама по себе не делает аренду и вклад равными по риску, налогам, сроку и ликвидности."
      },
      {
        "q": "Что входит в годовые расходы?",
        "a": "Выбранная вами сумма ежегодных затрат: налог, страхование, обслуживание, ремонт и другие статьи. Потерю аренды из-за простоя учитывайте один раз: либо уменьшите годовую аренду до ожидаемого получения, либо вычтите недополученную аренду как расход из полной аренды. Не делайте оба действия одновременно."
      },
      {
        "q": "Учитывается ли рост цены недвижимости?",
        "a": "Нет. Считается только доход от аренды. Прирост стоимости — отдельная составляющая, и она непредсказуема."
      },
      {
        "q": "Что показывает окупаемость?",
        "a": "Строка показывает простую валовую окупаемость: цена покупки ÷ годовая аренда. Это 100 ÷ валовая доходность в процентах, даже при заполненных расходах. Она не является чистой или дисконтированной окупаемостью и предполагает постоянную аренду."
      }
    ],
    "disclaimer": "Доходность относится только к введённой аренде и расходам; рост цены, кредит, капитальные затраты покупки и дисконтирование отсутствуют. Строка окупаемости всегда валовая, даже при показанной чистой доходности."
  },
  "en": {
    "longDescription": "Shows rental income relative to a property purchase price. Gross yield uses annual rent; net yield subtracts the entered annual costs and may be negative. For example, gross 6% with costs equal to 2% of the price gives net 4%. The separate payback row always uses gross rent, even when costs are entered. A deposit comparison also needs taxes, liquidity, risks and price changes, none of which is valued here.",
    "howToUse": [
      "Enter the purchase price.",
      "Give the rent per year or per month.",
      "Optionally add annual costs — the net yield then appears."
    ],
    "howItWorks": "Monthly rent M gives annual rent A=12×M; annual mode takes A directly. For price P>0, gross yield is 100×A/P. With costs C>0, net yield is 100×(A−C)/P, including a negative result if C>A; blank costs mean 0. Simple gross payback P/A neither subtracts costs nor discounts future receipts. All money uses one currency basis, without conversion.",
    "example": "A flat costing 10,000,000 let at 50,000 a month gives a gross yield of 6.00%. Boundary: price 1000, annual rent 100 and costs 150 give gross 10%, net −5%, and gross payback 10 years. With rent 0 and costs 50, net is −5% and the payback row is absent.",
    "faq": [
      {
        "q": "How does gross yield differ from net?",
        "a": "Gross uses all entered rent; net deducts costs. Net is useful for comparing cash flows, but does not make rental property and a deposit equivalent in risk, taxes, term or liquidity."
      },
      {
        "q": "What counts as annual costs?",
        "a": "Your selected annual total, such as tax, insurance, maintenance and repairs. Count vacancy rent loss once: either reduce annual rent to expected receipts, or subtract missed rent as a cost from full rent. Do not do both."
      },
      {
        "q": "Is property price growth included?",
        "a": "No. Only rental income is computed. Capital appreciation is a separate component and an unpredictable one."
      },
      {
        "q": "What does the payback period show?",
        "a": "The row is simple gross payback: purchase price ÷ annual rent, equal to 100 ÷ gross yield in percent even with costs entered. It is neither net nor discounted payback and assumes unchanged rent."
      }
    ],
    "disclaimer": "Yield uses only entered rent and costs; price changes, borrowing, acquisition costs and discounting are excluded. Payback is always gross, even when a net-yield row is shown."
  },
  "uk": {
    "longDescription": "Показує орендний дохід відносно ціни придбання. Валова дохідність бере річну оренду, чиста віднімає введені річні витрати й може бути від’ємною. Наприклад, валові 6% за витрат у 2% ціни дають чисті 4%. Окремий строк окупності завжди розраховано за валовою орендою, навіть із заповненими витратами. Порівняння з депозитом потребує також податків, ліквідності, ризиків і зміни ціни, які тут не оцінені.",
    "howToUse": [
      "Введіть ціну нерухомості.",
      "Оберіть річну або місячну оренду й заповніть відповідне видиме поле.",
      "Додайте річні витрати, щоб побачити чисту дохідність."
    ],
    "howItWorks": "За місячної оренди M річна сума A=12×M; у річному режимі A вводиться прямо. За ціни P>0 валова дохідність 100×A/P. За витрат C>0 чиста дохідність 100×(A−C)/P, зокрема від’ємна при C>A; порожні витрати означають 0. Проста валова окупність P/A не віднімає витрати й не дисконтує майбутні надходження. Усі суми мають одну валютну базу, без конвертації.",
    "example": "Квартира за 10 000 000 ₴ з орендою 50 000 ₴ на місяць дає 6% валових. За витрат 120 000 ₴ на рік чиста дохідність 4,8%, але показана валова окупність лишається 16,7 року: 10 000 000 ÷ 600 000. Межа: ціна 1000, річна оренда 100 і витрати 150 дають валові 10%, чисті −5%, але валову окупність 10 років. За оренди 0 й витрат 50 чисті −5%, рядка окупності немає.",
    "faq": [
      {
        "q": "Які витрати враховувати?",
        "a": "Введіть обрану річну суму витрат: податки, страхування, утримання, ремонт та інші статті. Втрату оренди через простій врахуйте один раз: або зменште оренду до очікуваних надходжень, або відніміть недоотриману оренду як витрату з повної суми."
      },
      {
        "q": "Чому валова дохідність вводить в оману?",
        "a": "Валова дохідність не віднімає витрат, але є чітко визначеним показником, а не оцінкою вигідності. Різниця з чистою залежить від введених витрат; універсальної чверті чи третини немає. За витрат понад оренду чистий результат від’ємний."
      },
      {
        "q": "Чи враховано зростання вартості нерухомості?",
        "a": "Ні, рахується лише орендний потік. Повна дохідність вкладення включає ще й зміну ціни самого об’єкта, а вона може бути як додатною, так і від’ємною."
      },
      {
        "q": "З чим порівнювати результат?",
        "a": "Порівнюйте потоки за однаковий період і податкову базу, враховуючи також ризик, ліквідність і управління. Чиста орендна дохідність сама по собі не визначає потрібної премії до депозиту чи облігацій і не включає зміну ціни нерухомості."
      }
    ],
    "disclaimer": "Дохідність використовує лише введені оренду й витрати; зміна ціни, кредит, витрати придбання та дисконтування відсутні. Окупність завжди валова, навіть із показаною чистою дохідністю."
  },
  "de": {
    "longDescription": "Zeigt Mietertrag im Verhältnis zum Kaufpreis. Die Bruttorendite verwendet Jahresmiete; die Nettorendite zieht eingegebene Jahreskosten ab und kann negativ sein. Brutto 6% mit Kosten von 2% des Preises ergibt beispielsweise netto 4%. Die gesonderte Amortisationszeile nutzt stets Bruttomiete, auch mit eingegebenen Kosten. Ein Vergleich mit Festgeld braucht zusätzlich Steuern, Liquidität, Risiken und Wertänderungen; diese werden hier nicht bewertet.",
    "howToUse": [
      "Trage den Kaufpreis ein.",
      "Gib die Miete je Jahr oder je Monat an.",
      "Ergänze bei Bedarf die jährlichen Kosten — dann erscheint die Nettorendite."
    ],
    "howItWorks": "Monatsmiete M ergibt Jahresmiete A=12×M; im Jahresmodus wird A direkt eingegeben. Bei Preis P>0 ist die Bruttorendite 100×A/P. Mit Kosten C>0 ist netto 100×(A−C)/P, auch negativ bei C>A; leere Kosten bedeuten 0. Einfache Bruttoamortisation P/A zieht keine Kosten ab und diskontiert keine künftigen Einnahmen. Alle Geldwerte verwenden dieselbe Währungsbasis, ohne Umrechnung.",
    "example": "Eine Wohnung für 250 000 €, für 950 € im Monat vermietet, bringt eine Bruttorendite von 4,56 %. Grenze: Preis 1000, Jahresmiete 100 und Kosten 150 ergeben brutto 10%, netto −5%, Bruttoamortisation 10 Jahre. Bei Miete 0 und Kosten 50 ist netto −5%; die Amortisationszeile fehlt.",
    "faq": [
      {
        "q": "Worin unterscheiden sich Brutto- und Nettorendite?",
        "a": "Brutto nutzt die gesamte eingegebene Miete, netto zieht Kosten ab. Netto hilft beim Zahlungsstromvergleich, setzt Immobilie und Festgeld aber nicht hinsichtlich Risiko, Steuern, Laufzeit und Liquidität gleich."
      },
      {
        "q": "Was zählt zu den jährlichen Kosten?",
        "a": "Die von dir gewählte jährliche Summe, etwa Steuer, Versicherung, Instandhaltung und Reparaturen. Leerstandsausfall nur einmal zählen: entweder Jahresmiete auf erwartete Einnahmen senken oder ausgefallene Miete von der vollen Miete als Kosten abziehen, nicht beides."
      },
      {
        "q": "Ist die Wertsteigerung der Immobilie enthalten?",
        "a": "Nein. Gerechnet wird allein der Mietertrag. Der Wertzuwachs ist ein eigener und schwer vorhersehbarer Teil."
      },
      {
        "q": "Was zeigt die Amortisationsdauer?",
        "a": "Die Zeile ist einfache Bruttoamortisation: Kaufpreis ÷ Jahresmiete, gleich 100 ÷ Bruttorendite in Prozent, auch mit Kosten. Das ist keine Netto- oder abgezinste Amortisation und setzt konstante Miete voraus."
      }
    ],
    "disclaimer": "Die Rendite nutzt nur Miete und Kosten; Wertänderung, Kredit, Anschaffungskosten und Abzinsung fehlen. Die Amortisation ist stets brutto, auch mit angezeigter Nettorendite."
  },
  "es": {
    "longDescription": "Muestra ingresos de alquiler respecto al precio de compra. La rentabilidad bruta usa renta anual; la neta resta gastos anuales introducidos y puede ser negativa. Por ejemplo, un 6% bruto con gastos del 2% del precio da un 4% neto. La recuperación mostrada siempre usa renta bruta, aun con gastos. Comparar con un depósito exige además impuestos, liquidez, riesgos y variación del precio, que aquí no se valoran.",
    "howToUse": [
      "Introduce el precio de compra.",
      "Indica la renta anual o mensual.",
      "Si quieres, añade los gastos anuales: aparecerá entonces la rentabilidad neta."
    ],
    "howItWorks": "Renta mensual M da anual A=12×M; el modo anual recibe A directamente. Con precio P>0, rentabilidad bruta 100×A/P. Con gastos C>0, neta 100×(A−C)/P, también negativa si C>A; gastos vacíos significan 0. Recuperación bruta simple P/A no resta gastos ni descuenta cobros futuros. Todo el dinero comparte base monetaria, sin conversión.",
    "example": "Un piso de 100 000 alquilado a 500 al mes da una rentabilidad bruta del 6,00 %. Límite: precio 1000, renta anual 100 y gastos 150 dan bruto 10%, neto −5% y recuperación bruta de 10 años. Con renta 0 y gastos 50, neto −5% y sin fila de recuperación.",
    "faq": [
      {
        "q": "¿En qué se diferencia la rentabilidad bruta de la neta?",
        "a": "La bruta toma toda la renta; la neta resta gastos. La neta ayuda a comparar flujos, pero no iguala alquiler y depósito en riesgo, impuestos, plazo o liquidez."
      },
      {
        "q": "¿Qué cuenta como gastos anuales?",
        "a": "El total anual elegido, como impuestos, seguro, mantenimiento y reparaciones. Cuenta una sola vez la renta perdida por vacancia: reduce la renta anual a los cobros esperados o resta el alquiler perdido como gasto de la renta completa, no ambas cosas."
      },
      {
        "q": "¿Se incluye la revalorización del inmueble?",
        "a": "No. Solo se calculan los ingresos por alquiler. La revalorización es un componente aparte y además impredecible."
      },
      {
        "q": "¿Qué indica el plazo de recuperación?",
        "a": "La fila es recuperación bruta simple: precio ÷ renta anual, igual a 100 ÷ rentabilidad bruta porcentual aun con gastos. No es recuperación neta ni descontada y supone renta constante."
      }
    ],
    "disclaimer": "La rentabilidad usa solo renta y gastos; se excluyen cambio de precio, financiación, gastos de adquisición y descuento. La recuperación siempre es bruta aunque se muestre rentabilidad neta."
  }
};
