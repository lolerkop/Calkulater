// Individual subject copy; native human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Приводит подписки с разными периодами оплаты к среднему расходу за месяц. В каждой строке последние два числовых поля — цена и месяцы, всё перед ними — название. Итог за год равен 12 месячным средним, а не календарю будущих списаний: пробные периоды, отмены и изменения тарифа не прогнозируются.",
    "howToUse": [
      "Введите одну строку на подписку: название цена месяцы, например «облачное хранилище 1990 12».",
      "Цена и период должны быть отдельными числами без пробелов внутри: 1990, не 1 990; дробная часть может использовать точку или запятую.",
      "Месячный период —1, квартальный —3, годовой —12. Положительный дробный период, например 0,5, допустим и показывается как дробный.",
      "Все цены задавайте в одной валюте. Нулевая цена разрешена; период должен быть положительным. Не более 1000 строк за расчёт."
    ],
    "howItWorks": "Месячный вклад строки = цена / месяцы. Вклады складываются без предварительного округления до денежных знаков; годовое среднее = месячный итог ×12. Таблица сохраняет введённый дробный период, а не округляет его до целого. Десятичные денежные отношения округляются до двух знаков только при выводе; расчёт сохраняет неокруглённые отношения.",
    "example": "Строки «стриминг 299 1», «облако 1990 12», «музыка 169 1» дают 633,83 в месяц и 7606,00 в год. «половина месяца 30 0,5» отдельно даёт 60,00 в месяц, не 30,00.",
    "faq": [
      {
        "q": "Почему период числом, а не «ежемесячно» или «ежегодно»?",
        "a": "Число определяет длительность, на которую делится цена: 1 месяц, 3 месяца, 12 месяцев. Слова «год» или «месяц» не являются числовыми полями этой записи."
      },
      {
        "q": "Как ввести квартальный тариф?",
        "a": "Как 3 месяца. Подходит любой период — двухлетний это 24."
      },
      {
        "q": "Почему годовое число не равно двенадцати округлённым месяцам?",
        "a": "Годовое среднее умножается до округления месячного показа. Например, 1 за 3 месяца — около 0,33 в месяц и 4,00 в год, тогда как 12×0,33 дают 3,96. Это среднее, не сумма реальных списаний по датам."
      },
      {
        "q": "Учитывается ли пробный период?",
        "a": "Не напрямую. Вводите цену, которую с вас действительно спишут; нулевая цена принимается и просто ничего не добавляет."
      },
      {
        "q": "Всегда ли самый дешёвый месячный тариф выгоднее?",
        "a": "В расчёте на месяц — да, именно это сравнение и показывает. А был ли выгоднее годовой тариф, которым вы перестали пользоваться через два месяца, это уже другой вопрос."
      }
    ],
    "disclaimer": "Средняя стоимость в одной валюте, не график платежей. Периоды и цены задаются вручную; бесплатная строка не задаёт дату окончания пробы."
  },
  "en": {
    "longDescription": "Converts subscriptions with different billing periods to an average monthly expense. The last two numeric fields on each line are price and months; everything before them is the name. The annual figure is 12 monthly averages, not a future debit schedule: trials, cancellations and tariff changes are not predicted.",
    "howToUse": [
      "Enter one line per subscription: name price months, for example “cloud storage 1990 12”.",
      "Keep price and period as separate numbers without internal spaces: 1990, not 1 990. A decimal point or comma is accepted.",
      "Monthly is 1, quarterly 3, annual 12. A positive fraction such as 0.5 is allowed and stays fractional in the table.",
      "Use one currency for every price. Zero price is allowed; the period must be positive. At most 1000 lines per calculation."
    ],
    "howItWorks": "Monthly contribution = price / months. Contributions are added before money-display rounding; annual average = monthly total ×12. The table retains a fractional period rather than rounding it to a whole month. Decimal monetary ratios are rounded to two places only for display; calculations retain the unrounded ratios.",
    "example": "“streaming 299 1”, “cloud 1990 12” and “music 169 1” give 633.83 per month and 7606.00 per year. “half month 30 0.5” alone gives 60.00 per month, not 30.00.",
    "faq": [
      {
        "q": "Why is the period a number and not «monthly» or «yearly»?",
        "a": "The number defines how long the price covers: 1 month, 3 months or 12 months. Words such as “year” and “monthly” are not numeric fields in this input format."
      },
      {
        "q": "How do I enter a quarterly plan?",
        "a": "As 3 months. Any period works — a two-year plan is 24."
      },
      {
        "q": "Why is the yearly figure not twelve times the rounded month?",
        "a": "The annual average is multiplied before rounding the displayed month. For example, 1 for 3 months gives about 0.33 monthly and 4.00 yearly, whereas 12×0.33 gives 3.96. This is an average, not dated debits."
      },
      {
        "q": "Does it account for a free trial?",
        "a": "Not directly. Enter the price you will actually be charged; a trial at zero is accepted and simply contributes nothing."
      },
      {
        "q": "Is the cheapest monthly plan always the cheapest?",
        "a": "Per month, yes — that is exactly what this comparison shows. Whether a yearly plan you stop using after two months was cheaper is a different question."
      }
    ],
    "disclaimer": "Average cost in one currency, not a payment schedule. Prices and periods are manual; a free line does not set the end date of a trial."
  },
  "uk": {
    "longDescription": "Зводить підписки з різними періодами оплати до середніх витрат на місяць. Останні два числові поля рядка — ціна й місяці, усе перед ними — назва. Річне число дорівнює 12 місячним середнім, а не календарю списань; пробні періоди, скасування й зміни тарифів не прогнозуються.",
    "howToUse": [
      "Введіть рядок на підписку: назва ціна місяці, наприклад «хмарне сховище 1990 12».",
      "Ціна й період — окремі числа без внутрішніх пробілів: 1990, не 1 990. Десятковий знак може бути крапкою або комою.",
      "Місячний період —1, квартальний —3, річний —12. Додатний дробовий період 0,5 допустимий і лишається дробовим у таблиці.",
      "Усі ціни задайте в одній валюті. Нульова ціна допустима, період має бути додатним. Не більше 1000 рядків за розрахунок."
    ],
    "howItWorks": "Місячний внесок = ціна / місяці. Внески додаються до грошового округлення для показу; річне середнє = місячний підсумок ×12. Таблиця зберігає дробовий період, а не округляє його до цілого місяця. Десяткові грошові відношення округлюються до двох знаків лише для виведення; розрахунок зберігає неокруглені відношення.",
    "example": "«стримінг 299 1», «хмара 1990 12» і «музика 169 1» дають 633,83 на місяць і 7606,00 на рік. Окремо «пів місяця 30 0,5» дає 60,00 на місяць, не 30,00.",
    "faq": [
      {
        "q": "Чому період числом, а не «щомісяця» чи «щороку»?",
        "a": "Число задає строк, який покриває ціна: 1 місяць, 3 або 12 місяців. Слова «рік» чи «щомісяця» не є числовими полями цього формату."
      },
      {
        "q": "Як ввести квартальний тариф?",
        "a": "Як 3 місяці. Підходить будь-який період — дворічний це 24."
      },
      {
        "q": "Чому річне число не дорівнює дванадцяти округленим місяцям?",
        "a": "Річне середнє множиться до округлення місячного показу. 1 за 3 місяці дає приблизно 0,33 на місяць і 4,00 на рік, тоді як 12×0,33 —3,96. Це середнє, не списання за датами."
      },
      {
        "q": "Чи враховується безкоштовний період?",
        "a": "Не напряму. Вводьте ціну, яку з вас справді знімуть; нульова ціна приймається і просто нічого не додає."
      },
      {
        "q": "Чи завжди найдешевший місячний тариф найвигідніший?",
        "a": "На місяць — так, саме це і показує порівняння. А чи був вигіднішим річний тариф, яким ви перестали користуватися через два місяці, це вже інше питання."
      }
    ],
    "disclaimer": "Середня вартість в одній валюті, не графік платежів. Ціни й періоди вводяться вручну; безкоштовний рядок не задає дату завершення проби."
  },
  "de": {
    "longDescription": "Rechnet Abos mit verschiedenen Zahlungsperioden auf durchschnittliche Monatskosten um. Die letzten zwei Zahlenfelder jeder Zeile sind Preis und Monate; davor steht der Name. Die Jahreszahl sind 12 Monatsmittel, kein zukünftiger Abbuchungsplan: Probezeiten, Kündigungen und Tarifänderungen werden nicht vorhergesagt.",
    "howToUse": [
      "Eine Zeile je Abo: Name Preis Monate, zum Beispiel „Cloudspeicher 1990 12“.",
      "Preis und Zeitraum als getrennte Zahlen ohne innere Leerzeichen schreiben: 1990, nicht 1 990. Dezimalpunkt oder Komma sind möglich.",
      "Monatlich bedeutet 1, vierteljährlich 3, jährlich 12. Ein positiver Bruchteil wie 0,5 ist zulässig und bleibt in der Tabelle erhalten.",
      "Alle Preise in einer Währung angeben. Preis 0 ist zulässig, Zeitraum muss positiv sein. Höchstens 1000 Zeilen pro Rechnung."
    ],
    "howItWorks": "Monatsbeitrag = Preis / Monate. Beiträge werden vor der Geldanzeigerundung addiert; Jahresmittel = Monatssumme ×12. Die Tabelle bewahrt Teilmonate, statt sie auf ganze Monate zu runden. Dezimale Geldverhältnisse werden erst zur Anzeige auf zwei Stellen gerundet; die Rechnung behält ungerundete Verhältnisse.",
    "example": "„Streaming 299 1“, „Cloud 1990 12“ und „Musik 169 1“ ergeben 633,83 im Monat und 7606,00 im Jahr. „Halber Monat 30 0,5“ allein ergibt 60,00 im Monat, nicht 30,00; alle Beträge sind in derselben gewählten Geldeinheit.",
    "faq": [
      {
        "q": "Warum ist der Zeitraum eine Zahl und nicht „monatlich“ oder „jährlich“?",
        "a": "Die Zahl beschreibt die abgedeckte Dauer: 1 Monat, 3 Monate oder 12 Monate. Wörter wie „Jahr“ oder „monatlich“ sind keine Zahlenfelder dieses Eingabeformats."
      },
      {
        "q": "Wie trage ich einen Vierteljahrestarif ein?",
        "a": "Als 3 Monate. Jeder Zeitraum geht — ein Zweijahrestarif sind 24."
      },
      {
        "q": "Warum ist die Jahreszahl nicht das Zwölffache des gerundeten Monats?",
        "a": "Das Jahresmittel wird vor Rundung der Monatsanzeige multipliziert. 1 für 3 Monate ergibt etwa 0,33 monatlich und 4,00 jährlich, während 12×0,33 nur 3,96 ergibt. Ein Mittelwert, keine datierten Abbuchungen."
      },
      {
        "q": "Wird eine kostenlose Probezeit berücksichtigt?",
        "a": "Nicht unmittelbar. Trage den Preis ein, der dir tatsächlich berechnet wird; eine Probezeit mit null wird angenommen und steuert schlicht nichts bei."
      },
      {
        "q": "Ist der billigste Monatstarif immer der billigste?",
        "a": "Je Monat ja — genau das zeigt dieser Vergleich. Ob ein Jahrestarif, den du nach zwei Monaten nicht mehr nutzt, billiger war, ist eine andere Frage."
      }
    ],
    "disclaimer": "Durchschnittskosten in einer Währung, kein Zahlungsplan. Preise und Perioden sind manuell; eine kostenlose Zeile legt kein Probezeitende fest."
  },
  "es": {
    "longDescription": "Convierte suscripciones con distintos periodos de pago en un gasto mensual medio. Los dos últimos campos numéricos son precio y meses; lo anterior es el nombre. La cifra anual son 12 medias mensuales, no un calendario futuro de cargos: no predice pruebas, cancelaciones ni cambios de tarifa.",
    "howToUse": [
      "Introduce una línea por suscripción: nombre precio meses, por ejemplo «nube 1990 12».",
      "Precio y periodo son números separados, sin espacios internos: 1990, no 1 990. Se admite punto o coma decimal.",
      "Mensual es 1, trimestral 3 y anual 12. Se permite una fracción positiva como 0,5, conservada en la tabla.",
      "Usa una moneda en todos los precios. Se permite precio 0, pero el periodo debe ser positivo. Máximo 1000 líneas por cálculo."
    ],
    "howItWorks": "Aporte mensual = precio / meses. Los aportes se suman antes del redondeo monetario para mostrar; media anual = total mensual ×12. La tabla conserva periodos fraccionarios en lugar de redondearlos a meses enteros. Las razones monetarias decimales se redondean a dos cifras solo al mostrarlas; el cálculo conserva las razones sin redondear.",
    "example": "«streaming 299 1», «nube 1990 12» y «música 169 1» dan 633,83 al mes y 7606,00 al año. «medio mes 30 0,5» solo da 60,00 al mes, no 30,00; todo en la misma unidad monetaria elegida.",
    "faq": [
      {
        "q": "¿Por qué el periodo es un número y no «mensual» o «anual»?",
        "a": "El número define la duración cubierta por el precio: 1 mes, 3 meses o 12 meses. Palabras como «año» o «mensual» no son campos numéricos de este formato."
      },
      {
        "q": "¿Cómo introduzco un plan trimestral?",
        "a": "Como 3 meses. Vale cualquier periodo: un plan de dos años son 24."
      },
      {
        "q": "¿Por qué la cifra anual no es doce veces el mes redondeado?",
        "a": "La media anual se multiplica antes de redondear el mes mostrado. 1 por 3 meses da unos 0,33 mensuales y 4,00 anuales, mientras 12×0,33 da 3,96. Es una media, no cargos por fechas."
      },
      {
        "q": "¿Tiene en cuenta un periodo de prueba gratuito?",
        "a": "No directamente. Introduce el precio que se te va a cobrar de verdad; una prueba a cero se admite y simplemente no aporta nada."
      },
      {
        "q": "¿El plan mensual más barato es siempre el más barato?",
        "a": "Al mes sí, y eso es exactamente lo que muestra esta comparación. Si un plan anual que dejas de usar a los dos meses salía más barato es otra cuestión."
      }
    ],
    "disclaimer": "Coste medio en una moneda, no calendario de pagos. Precios y periodos son manuales; una línea gratuita no fija el fin de una prueba."
  }
};
