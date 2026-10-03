import type { CalculatorCopy } from '../../lib/platform/types';

type ContractContent = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent = {
  "ru": {
    "longDescription": "Одна капля кажется ничем, и в этом вся ловушка: десять капель в минуту — это почти триста литров в год, а сплошная струйка в секунду уносит больше кубометра. Счётчик считает не капли, а кубометры, и потому строка про них стоит рядом с деньгами. Объём капли задаётся отдельно: он зависит от смесителя и от того, срывается капля или уже течёт тонкой струйкой.",
    "howToUse": [
      "Посчитайте капли за пятнадцать секунд и умножьте на четыре — так проще, чем считать целую минуту.",
      "Сохранённые 0,05 мл — пример. Измерьте свой средний объём капли; универсального значения нет.",
      "Если из крана идёт тонкая непрерывная струйка, капли считать бесполезно — там уже литры в час.",
      "Тариф за м³ берите из своего счёта, включая только нужные переменные составляющие."
    ],
    "howItWorks": "Для среднего темпа D капель/мин и выбранного объёма v мл/каплю за сутки теряется L=D×1440×v/1000 литров. Месяц здесь равен 30 суткам, год — 365: 30 L и 365 L. Кубометры за год =365 L/1000; стоимость =эта величина×тариф за м³. D может быть дробным средним темпом; объём капли не измеряется калькулятором.",
    "example": "Десять капель в минуту — это 0,72 литра в сутки и почти 263 литра за год. При 60 каплях/мин и 0,05 мл —4,32 л/сутки и 1576,8 л за 365 дней.",
    "faq": [
      {
        "q": "Правда ли, что капля в секунду — это много?",
        "a": "При введённом объёме 0,05 мл капля в секунду —60 в минуту,4,32 л в сутки и 1576,8 л за 365 дней. Если реальная капля крупнее, потери пропорционально выше. Это расчёт по выбранному объёму, а не измерение вашего крана."
      },
      {
        "q": "Почему объём капли задаётся, а не берётся постоянным?",
        "a": "Капля не имеет универсального объёма: USGS прямо отмечает это и использует 0,25 мл в своём примере. Здесь сохранены 0,05 мл как редактируемое допущение. От 0,03 до 0,08 мл результат меняется в 8/3≈2,67 раза; измерение лучше общего «типичного» числа."
      },
      {
        "q": "Считает ли расчёт водоотведение?",
        "a": "Только если введённый тариф включает его. Суммируйте применимые переменные цены водоснабжения и водоотведения, не прибавляя постоянные платежи повторно. Соотношение тарифов и способ начисления зависят от вашего счёта; удвоение стоимости не универсально."
      },
      {
        "q": "С какого момента стоит чинить кран?",
        "a": "Расчёт показывает расход, но не цену детали и ремонта. Сравните фактические затраты и состояние узла; утверждать, что любая прокладка всегда дешевле кубометра, нельзя. Для струйки измерьте литры за время вместо попытки считать капли."
      }
    ]
  },
  "en": {
    "longDescription": "A single drop seems like nothing, and that is the trap: ten drops a minute is nearly three hundred litres a year, and a steady drip once a second carries off more than a cubic metre. The meter counts cubic metres rather than drops, which is why that row sits next to the money. The drop volume is entered separately: it depends on the tap and on whether the water is still dripping or already running.",
    "howToUse": [
      "Count the drips over fifteen seconds and multiply by four — easier than timing a whole minute.",
      "The retained 0.05 mL is an example. Measure your average drop volume; there is no universal value.",
      "If the tap runs as a thin continuous stream, counting drips is pointless — that is already litres per hour.",
      "Take the per-m³ tariff from your bill, including only applicable variable components."
    ],
    "howItWorks": "At an average D drips/min and entered drop volume v mL, daily loss L=D×1440×v/1000 litres. The displayed month is 30 days and year 365 days:30 L and 365 L. Annual cubic metres=365 L/1000; annual cost is that amount times the tariff per m³. D may be a fractional average rate; the calculator does not measure the drop.",
    "example": "Ten drips a minute is 0.72 litres a day and nearly 263 litres a year. At 60 drips/min and 0.05 mL:4.32 L/day and 1576.8 L over 365 days.",
    "faq": [
      {
        "q": "Is a drip a second really a lot?",
        "a": "At entered 0.05 mL, one drip per second is 60 per minute,4.32 L/day and 1576.8 L over 365 days. Larger measured drops increase loss proportionally. This is arithmetic for the selected drop, not a measurement of your tap."
      },
      {
        "q": "Why is the drop volume an input rather than a constant?",
        "a": "A drip has no universal volume: USGS states this and uses 0.25 mL in its example. The editable 0.05 mL assumption is retained here. Changing 0.03 to 0.08 mL scales the answer by 8/3≈2.67; measurement beats a general “typical” value."
      },
      {
        "q": "Does this include waste water charges?",
        "a": "Only if the entered tariff includes it. Add the applicable variable water and sewer rates without repeating fixed charges. Rate ratios and billing rules depend on your bill; doubling the cost is not universal."
      },
      {
        "q": "When is it worth fixing?",
        "a": "The calculation gives water loss, not parts or repair prices. Compare actual costs and the fault; no claim that every washer is cheaper than a cubic metre follows. For a stream, measure volume over time instead of counting drips."
      }
    ],
    "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
  },
  "uk": {
    "longDescription": "Крапля здається дрібницею, доки її не перевести в рік: десять крапель за хвилину дають майже 263 літри за рік. Розрахунок і потрібен саме для цього переходу — від непомітної краплі до цифри, яку видно в рахунку.",
    "howToUse": [
      "Полічіть кількість крапель за хвилину.",
      "Збережені 0,05 мл — приклад. Виміряйте середній об’єм своєї краплі; універсального значення немає.",
      "Прочитайте втрати за добу, місяць і рік."
    ],
    "howItWorks": "За середнього темпу D крапель/хв та введеного об’єму v мл/краплю добова втрата L=D×1440×v/1000 літрів. Місяць тут 30 діб, рік 365:30 L та 365 L. Річні кубометри=365 L/1000; вартість — це число×тариф за м³. D може бути дробним середнім темпом; об’єм краплі калькулятор не вимірює.",
    "example": "Десять крапель за хвилину — це 0,72 літра на добу і майже 263 літри за рік. За 60 крапель/хв та 0,05 мл —4,32 л/добу й 1576,8 л за 365 днів.",
    "faq": [
      {
        "q": "Який об’єм у краплі?",
        "a": "Універсального об’єму краплі з крана немає.0,05 мл — збережене початкове припущення, не вимір. Можна зібрати відому кількість крапель у мірний посуд та поділити об’єм на їх число. USGS для свого прикладу використовує інше значення 0,25 мл."
      },
      {
        "q": "Чи багато це — 263 літри на рік?",
        "a": "263 літри приблизно відповідають річній втраті за 10 крапель/хв та 0,05 мл. За чотири роки це близько 1051 літра. Вартість залежить від вашого повного тарифу, а обсяг — від фактичної краплі; універсальної оцінки ціни ремонту тут немає."
      },
      {
        "q": "Чому кран узагалі крапає?",
        "a": "Причина може бути в ущільненні, картриджі чи іншому вузлі. Вартість і тривалість ремонту залежать від крана та пошкодження; калькулятор їх не оцінює. Втрати води й додаткові наслідки витоку розглядайте окремо."
      },
      {
        "q": "А якщо тече тонким струмком?",
        "a": "Тоді виміряйте об’єм за відомий час: товщина струмка сама не визначає витрату. Наприклад, виміряні 30 л/год дають 262,8 м³ за 365 днів безперервної течії. Цей приклад не прогнозує витрату за діаметром струменя."
      }
    ],
    "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
  },
  "de": {
    "longDescription": "Ein einzelner Tropfen scheint nichts zu sein, und darin liegt die Falle: zehn Tropfen je Minute sind fast dreihundert Liter im Jahr, und ein gleichmäßiges Tropfen im Sekundentakt trägt mehr als einen Kubikmeter fort. Der Zähler zählt Kubikmeter und keine Tropfen, weshalb diese Zeile neben dem Geld steht. Das Tropfenvolumen wird gesondert eingetragen: es hängt vom Hahn ab und davon, ob das Wasser noch tropft oder schon läuft.",
    "howToUse": [
      "Zähle die Tropfen über fünfzehn Sekunden und nimm sie mal vier — einfacher, als eine ganze Minute zu stoppen.",
      "Die erhaltenen 0,05 ml sind ein Beispiel. Mittleres Tropfenvolumen messen; ein allgemeiner Wert existiert nicht.",
      "Läuft der Hahn als dünner durchgehender Strahl, ist das Zählen von Tropfen sinnlos — das sind schon Liter je Stunde.",
      "Tarif je m³ aus eigener Rechnung nehmen, nur zutreffende variable Bestandteile einschließen."
    ],
    "howItWorks": "Bei durchschnittlich D Tropfen/min und eingegebenem Volumen v ml/Tropfen gehen täglich L=D×1440×v/1000 Liter verloren. Der Monat umfasst hier 30 Tage, das Jahr 365:30 L und 365 L. Kubikmeter im Jahr=365 L/1000; Kosten=dieser Wert×Tarif je m³. D darf ein gebrochener mittlerer Takt sein; der Rechner misst keine Tropfen.",
    "example": "Zehn Tropfen je Minute sind 0,72 Liter am Tag und fast 263 Liter im Jahr. 60 Tropfen/min mit 0,05 ml ergeben 4,32 l/Tag und 1576,8 l in 365 Tagen.",
    "faq": [
      {
        "q": "Ist ein Tropfen je Sekunde wirklich viel?",
        "a": "Bei eingegebenen 0,05 ml bedeutet ein Tropfen je Sekunde 60/min,4,32 l/Tag und 1576,8 l in 365 Tagen. Größere gemessene Tropfen erhöhen den Verlust proportional. Das ist Rechnung für deine Annahme, keine Messung am Hahn."
      },
      {
        "q": "Warum ist das Tropfenvolumen eine Eingabe und keine Konstante?",
        "a": "Ein Tropfen hat kein allgemeingültiges Volumen: USGS nennt dies ausdrücklich und verwendet 0,25 ml im eigenen Beispiel. Hier bleiben 0,05 ml als änderbare Annahme erhalten.0,03→0,08 ml skaliert das Ergebnis um 8/3≈2,67; Messen ist besser als ein pauschaler „typischer“ Wert."
      },
      {
        "q": "Ist das Abwasserentgelt enthalten?",
        "a": "Nur wenn der Tarif es enthält. Anwendbare variable Wasser- und Abwasserpreise addieren, feste Gebühren nicht doppelt. Preisverhältnis und Abrechnung hängen von deinem Vertrag ab; eine Verdoppelung gilt nicht allgemein."
      },
      {
        "q": "Wann lohnt sich die Reparatur?",
        "a": "Die Rechnung liefert Verlust, keine Teile- oder Reparaturpreise. Tatsächliche Kosten und Fehler vergleichen; nicht jede Dichtung ist zwingend billiger als ein Kubikmeter. Bei einem Strahl Volumen über Zeit messen statt Tropfen zählen."
      }
    ],
    "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
  },
  "es": {
    "longDescription": "Una sola gota parece nada, y esa es la trampa: diez gotas por minuto son casi trescientos litros al año, y un goteo constante de una por segundo se lleva más de un metro cúbico. El contador cuenta metros cúbicos y no gotas, y por eso esa fila está junto al dinero. El volumen de la gota se introduce aparte: depende del grifo y de si el agua todavía gotea o ya corre.",
    "howToUse": [
      "Cuenta las gotas durante quince segundos y multiplica por cuatro: es más fácil que cronometrar un minuto entero.",
      "El 0,05 ml conservado es un ejemplo. Mide el volumen medio de tu gota; no hay un valor universal.",
      "Si el grifo corre como un hilo continuo, contar gotas no sirve: eso ya son litros por hora.",
      "Toma la tarifa por m³ de tu factura con solo los componentes variables aplicables."
    ],
    "howItWorks": "Para un ritmo medio D gotas/min y volumen introducido v ml/gota, pérdida diaria L=D×1440×v/1000 litros. El mes representa 30 días y el año 365:30 L y 365 L. Metros cúbicos anuales=365 L/1000; coste=esa cantidad×tarifa por m³. D puede ser una tasa media fraccionaria; la calculadora no mide la gota.",
    "example": "Diez gotas por minuto son 0,72 litros al día y casi 263 litros al año. 60 gotas/min a 0,05 ml dan 4,32 l/día y 1576,8 l en 365 días.",
    "faq": [
      {
        "q": "¿De verdad es mucho una gota por segundo?",
        "a": "Con 0,05 ml introducidos, una gota por segundo son 60/min,4,32 l/día y 1576,8 l en 365 días. Gotas medidas mayores aumentan la pérdida proporcionalmente. Es aritmética del volumen elegido, no una medición del grifo."
      },
      {
        "q": "¿Por qué el volumen de la gota es un dato y no una constante?",
        "a": "No existe un volumen universal: USGS lo aclara y usa 0,25 ml en su ejemplo. Aquí se conserva 0,05 ml como supuesto editable. Pasar de 0,03 a 0,08 ml multiplica el resultado por 8/3≈2,67; medir supera una cifra “típica” general."
      },
      {
        "q": "¿Incluye el saneamiento?",
        "a": "Solo si la tarifa lo incluye. Suma las tarifas variables aplicables de agua y saneamiento sin repetir cargos fijos. Su relación y facturación dependen de tu recibo; duplicar el coste no es universal."
      },
      {
        "q": "¿Cuándo merece la pena arreglarlo?",
        "a": "El cálculo da pérdida de agua, no precios de piezas o reparación. Compara costes reales y avería; no toda junta cuesta necesariamente menos que un metro cúbico. Para un hilo, mide volumen por tiempo en vez de contar gotas."
      }
    ],
    "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractContent>;
