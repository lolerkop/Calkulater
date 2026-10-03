import type { CalculatorCopy } from '../../lib/platform/types';
type ContractContent = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent = {
  "ru": {
    "longDescription": "Складывает стоимость блюда из списка ингредиентов и делит её на число порций. Каждая строка — это название, количество и цена за единицу, и последние два числа читаются как количество и цена, а всё перед ними считается названием: так работает «мука в/с 0,5 45», где в названии есть пробел. Строка без цены отклоняется, а не достраивается нулём — подставленная цена молча занизила бы себестоимость, и ошибка выглядела бы правдоподобно. Таблица показывает вклад каждого ингредиента без предположения, какой из них дороже. Все цены должны быть в одной выбранной валюте: её обозначение не конвертирует введённые суммы.",
    "howItWorks": "Последние два числа строки — количество и цена за его единицу; предшествующий текст — название. Стоимость строки = количество × цена; итог = сумма; стоимость порции = итог ÷ положительное число равных порционных эквивалентов. Дробные эквиваленты допустимы. Нулевые количество и цена допустимы, отрицательные — нет. Расчёт сохраняет неокруглённые значения, денежный вывод округляет до двух знаков.",
    "example": "Мука 0,5 кг по 45, масло 0,2 кг по 890 и сахар 0,3 кг по 68 дают 22,50 + 178 + 20,40 = 220,90 в одной валюте. Четыре порции: 55,225, на экране 55,23. При двух с половиной равных порциях — 88,36. Строка с количеством 0 даёт стоимость 0.",
    "howToUse": [
      "Впишите ингредиенты по одному в строке.",
      "В каждой строке последние два числа — количество и цена за единицу.",
      "Название может состоять из нескольких слов: «мука в/с 0,5 45».",
      "Укажите, на сколько порций рассчитан рецепт."
    ],
    "faq": [
      {
        "q": "В каких единицах вводить количество?",
        "a": "Количество и цена должны иметь одну основу: при цене за кг вводите кг, при цене за штуку — штуки. Разные строки могут использовать разные единицы, потому что суммируются деньги, а не количества."
      },
      {
        "q": "Что делать, если в названии есть пробелы?",
        "a": "Ничего особенного: последние два числа строки читаются как количество и цена, а всё перед ними считается названием. «Мука высшего сорта 0,5 45» разберётся верно."
      },
      {
        "q": "Почему строка без цены не считается?",
        "a": "Потому что подставленная цена занизила бы себестоимость молча. Лучше остановить расчёт, чем показать правдоподобное, но неверное число."
      },
      {
        "q": "Учитываются ли газ, электричество и труд?",
        "a": "Только если вы явно добавите такие расходы подходящими строками. По умолчанию считается стоимость введённых ингредиентов; это не полная себестоимость производства или прибыль."
      },
      {
        "q": "Как учесть специи, которых уходит на копейки?",
        "a": "Внесите измеренную или оценённую долю и её цену в согласованных единицах. Пропуск допустим лишь как осознанная граница вашей оценки, а не потому, что небольшие суммы всегда несущественны."
      }
    ],
    "disclaimer": "Суммируются выбранные затраты в одной валюте, без обмена валют, налогов или автоматического учёта труда и отходов."
  },
  "en": {
    "longDescription": "Builds the cost of a dish from a list of ingredients and divides it by the number of servings. Each line is a name, a quantity and a unit price, and the last two numbers are read as quantity and price while everything before them counts as the name — so «plain flour 0.5 45» parses correctly even with spaces in the name. A line without a price is rejected rather than filled with a zero: a substituted price would quietly understate the cost and the mistake would look plausible. The table shows each contribution without assuming which one dominates. All prices must use one selected currency; its display symbol does not convert entered amounts.",
    "howItWorks": "The final two numbers are quantity and price per its unit; preceding text is the name. Row cost = quantity × price; total = sum; serving cost = total ÷ positive equal serving equivalents. Fractional equivalents are allowed. Quantity and price can be zero, not negative. Calculations retain unrounded values; money is displayed to two decimal places.",
    "example": "Flour 0.5 kg at 45, butter 0.2 kg at 890 and sugar 0.3 kg at 68 give 22.50 + 178 + 20.40 = 220.90 in one currency. Four servings give 55.225, displayed as 55.23. Two and a half equal servings give 88.36. A zero-quantity row costs zero.",
    "howToUse": [
      "Enter ingredients one per line.",
      "On each line the last two numbers are the quantity and the unit price.",
      "The name may be several words: «plain flour 0.5 45».",
      "Enter how many servings the recipe makes."
    ],
    "faq": [
      {
        "q": "Which units should the quantity use?",
        "a": "Match quantity to the unit price: kg for a price per kg, items for a price per item. Different rows can use different units because money, rather than quantities, is summed."
      },
      {
        "q": "What if the name contains spaces?",
        "a": "Nothing special: the last two numbers are read as quantity and price, and everything before them is the name. «Plain white flour 0.5 45» parses correctly."
      },
      {
        "q": "Why is a line without a price rejected?",
        "a": "Because a substituted price would understate the cost silently. Stopping the calculation is better than showing a plausible but wrong number."
      },
      {
        "q": "Are gas, electricity and labour included?",
        "a": "Only when explicitly entered as suitable additional cost rows. The default result covers entered ingredients, not complete production cost or profit."
      },
      {
        "q": "How do I account for spices used in tiny amounts?",
        "a": "Enter a measured or estimated fraction and a price using matching units. Omission is a deliberate scope choice, not a rule that small amounts never matter."
      }
    ],
    "disclaimer": "Selected costs are summed in one currency, without exchange conversion, taxes or automatic labour and waste accounting."
  },
  "uk": {
    "longDescription": "Собівартість страви рахується як сума вартості інгредієнтів, поділена на кількість порцій. Головна тонкість — брати кількість і ціну в однакових одиницях: сто грамів масла за ціною за кілограм дають зовсім не ту суму, що за ціною за пачку. Таблиця показує внесок кожного інгредієнта. Усі ціни мають бути в одній обраній валюті: позначення на екрані не конвертує введених сум.",
    "howItWorks": "Останні два числа рядка — кількість і ціна за її одиницю; попередній текст — назва. Вартість рядка = кількість × ціна; підсумок = сума; вартість порції = підсумок ÷ додатне число рівних порційних еквівалентів. Дробові еквіваленти допустимі. Кількість і ціна можуть бути нульовими, не від’ємними. Неокруглені значення використовуються до грошового виводу з двома знаками.",
    "example": "Борошно 0,5 кг по 45, масло 0,2 кг по 890 та цукор 0,3 кг по 68 дають 22,50 + 178 + 20,40 = 220,90 в одній валюті. Чотири порції: 55,225, на екрані 55,23. Дві з половиною рівні порції — 88,36. Рядок із кількістю 0 має вартість 0.",
    "howToUse": [
      "Введіть кожен інгредієнт: кількість і ціну за ту саму одиницю.",
      "Введіть кількість порцій.",
      "Прочитайте вартість страви й однієї порції."
    ],
    "faq": [
      {
        "q": "Що робити з дрібними інгредієнтами?",
        "a": "Внесіть виміряну або оцінену частку з ціною у відповідній одиниці. Пропуск є свідомою межею оцінки, а не правилом, що дрібні витрати завжди неважливі."
      },
      {
        "q": "Чи враховувати відходи?",
        "a": "Якщо куплена й використана їстівна маса різні, визначте вихід за власним вимірюванням. Наприклад, куплений 1 кг за 100 із виміряним виходом 0,6 кг має ціну 166,666… за їстівний кг. Це приклад, не універсальний вихід певного продукту."
      },
      {
        "q": "Чи входять сюди газ і електрика?",
        "a": "Лише якщо явно додати відповідні рядки витрат. Типовий підсумок описує введені інгредієнти, а не повну виробничу собівартість чи прибуток."
      },
      {
        "q": "Навіщо рахувати собівартість удома?",
        "a": "Порівнюйте однакові складові витрат та розміри порцій. Таблиця допомагає побачити внески й зміни цін, але сама не доводить економії проти ресторану або доставки."
      }
    ],
    "disclaimer": "Обрані витрати сумуються в одній валюті без конвертації, податків чи автоматичного обліку праці та відходів."
  },
  "de": {
    "longDescription": "Baut die Kosten eines Gerichts aus einer Liste von Zutaten auf und teilt sie durch die Zahl der Portionen. Jede Zeile besteht aus einem Namen, einer Menge und einem Einheitspreis, und die letzten beiden Zahlen werden als Menge und Preis gelesen, während alles davor als Name zählt — „Weizenmehl Type 405 0.5 1.20“ wird also auch mit Leerzeichen im Namen richtig verstanden. Eine Zeile ohne Preis wird abgewiesen statt mit einer Null gefüllt: ein eingesetzter Preis setzte die Kosten still zu niedrig an, und der Fehler sähe plausibel aus. Die Tabelle zeigt jeden Beitrag ohne Annahme einer dominierenden Zutat. Alle Preise müssen dieselbe gewählte Währung verwenden; das angezeigte Zeichen rechnet Beträge nicht um.",
    "howItWorks": "Die letzten zwei Zahlen sind Menge und Preis je Mengeneinheit; davor steht der Name. Zeilenkosten = Menge × Preis; Gesamt = Summe; Portionskosten = Gesamt ÷ positive gleiche Portionsäquivalente. Bruchteile sind erlaubt. Menge und Preis dürfen null, aber nicht negativ sein. Gerechnet wird ungerundet, Geld mit zwei Nachkommastellen angezeigt.",
    "example": "Für dieses Preisbeispiel: Mehl 0,5 kg zu 1, Butter 0,2 kg zu 17,8 und Zucker 0,3 kg zu 1,2 ergeben 0,50 + 3,56 + 0,36 = 4,42 in einer Währung. Vier Portionen ergeben 1,105, angezeigt als 1,11. Zwei Portionen ergeben 2,21. Das sind eingegebene Beispielpreise, keine Umrechnung der Standardwerte.",
    "howToUse": [
      "Trage die Zutaten je Zeile ein.",
      "In jeder Zeile sind die letzten beiden Zahlen die Menge und der Einheitspreis.",
      "Der Name darf mehrere Wörter haben: „Weizenmehl Type 405 0.5 1.20“.",
      "Trage ein, wie viele Portionen das Rezept ergibt."
    ],
    "faq": [
      {
        "q": "In welchen Einheiten steht die Menge?",
        "a": "Menge und Preisbasis abgleichen: kg bei Preis je kg, Stück bei Stückpreis. Verschiedene Zeilen dürfen verschiedene Einheiten haben, da Geld statt Mengen summiert wird."
      },
      {
        "q": "Was, wenn der Name Leerzeichen enthält?",
        "a": "Nichts Besonderes: die letzten beiden Zahlen werden als Menge und Preis gelesen, und alles davor ist der Name. „Weizenmehl Type 405 0.5 1.20“ wird richtig verstanden."
      },
      {
        "q": "Warum wird eine Zeile ohne Preis abgewiesen?",
        "a": "Weil ein eingesetzter Preis die Kosten still zu niedrig ansetzte. Die Rechnung anzuhalten ist besser, als eine plausible und falsche Zahl zu zeigen."
      },
      {
        "q": "Sind Gas, Strom und Arbeit enthalten?",
        "a": "Nur bei ausdrücklich eingegebenen passenden Kostenzeilen. Der Standardwert umfasst Zutaten, nicht vollständige Herstellungskosten oder Gewinn."
      },
      {
        "q": "Wie berücksichtige ich Gewürze in winzigen Mengen?",
        "a": "Einen gemessenen oder geschätzten Anteil mit passender Preiseinheit eintragen. Weglassen ist eine bewusste Begrenzung der Schätzung, keine Regel über stets unwichtige Kleinstkosten."
      }
    ],
    "disclaimer": "Gewählte Kosten werden in einer Währung summiert, ohne Währungsumrechnung, Steuern oder automatische Erfassung von Arbeit und Abfällen."
  },
  "es": {
    "longDescription": "Construye el coste de un plato a partir de una lista de ingredientes y lo divide entre el número de raciones. Cada línea es un nombre, una cantidad y un precio unitario, y los dos últimos números se leen como cantidad y precio mientras que todo lo anterior cuenta como nombre, así que «harina de trigo 0,5 0,45» se interpreta bien aunque el nombre lleve espacios. Una línea sin precio se rechaza en vez de rellenarse con un cero: un precio sustituido subestimaría el coste en silencio y el error parecería verosímil. La tabla muestra cada aportación sin suponer un ingrediente dominante. Todos los precios deben usar una moneda elegida; el símbolo mostrado no convierte los importes.",
    "howItWorks": "Los dos últimos números son cantidad y precio por su unidad; el texto previo es el nombre. Coste de línea = cantidad × precio; total = suma; coste de ración = total ÷ equivalentes iguales positivos. Admite fracciones. Cantidad y precio pueden ser cero, no negativos. Se calcula sin redondear y se muestra dinero con dos decimales.",
    "example": "Para este ejemplo de precios: harina 0,5 kg a 4,5, mantequilla 0,2 kg a 89 y azúcar 0,3 kg a 6,8 dan 2,25 + 17,80 + 2,04 = 22,09 en una moneda. Cuatro raciones dan 5,5225, mostradas como 5,52. Dos raciones dan 11,045, mostradas como 11,05. Son precios introducidos de ejemplo, no conversión de los valores iniciales.",
    "howToUse": [
      "Introduce los ingredientes, uno por línea.",
      "En cada línea los dos últimos números son la cantidad y el precio unitario.",
      "El nombre puede llevar varias palabras: «harina de trigo 0,5 0,45».",
      "Introduce cuántas raciones salen de la receta."
    ],
    "faq": [
      {
        "q": "¿En qué unidades va la cantidad?",
        "a": "Haz coincidir cantidad y base del precio: kg para precio por kg, unidades para precio por unidad. Cada línea puede usar una unidad distinta porque se suma dinero, no cantidades."
      },
      {
        "q": "¿Y si el nombre lleva espacios?",
        "a": "Nada especial: los dos últimos números se leen como cantidad y precio, y todo lo anterior es el nombre. «Harina de trigo blanca 0,5 0,45» se interpreta bien."
      },
      {
        "q": "¿Por qué se rechaza una línea sin precio?",
        "a": "Porque un precio sustituido subestimaría el coste en silencio. Detener el cálculo es mejor que mostrar una cifra verosímil y equivocada."
      },
      {
        "q": "¿Se incluyen el gas, la electricidad y la mano de obra?",
        "a": "Solo si se introducen expresamente como filas de coste apropiadas. El resultado inicial incluye ingredientes, no coste completo de producción ni beneficio."
      },
      {
        "q": "¿Cómo cuento las especias que se usan en cantidades mínimas?",
        "a": "Introduce una fracción medida o estimada y un precio en unidades coherentes. Omitirla es una decisión sobre el alcance, no una regla de que los importes pequeños nunca importen."
      }
    ],
    "disclaimer": "Suma costes elegidos en una moneda, sin conversión, impuestos ni cómputo automático de trabajo o desperdicios."
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractContent>;
