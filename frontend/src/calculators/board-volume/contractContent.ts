import type { CalculatorCopy } from '../../lib/platform/types';

// Actual 145 native body individually reviewed; scoped model and input corrections. Agent review is not human approval.
export const buildingWave13ContractContent = {
  "ru": {
    "longDescription": "Переводит длину и сечение доски в кубометры — единицу, в которой пиломатериал продают. Длину меряют метрами, сечение миллиметрами, и именно на этом переводе чаще всего ошибаются: перемножить миллиметры как метры значит промахнуться в миллион раз, получив по форме правдоподобную запись. Здесь перевод сделан явно. Отдельной строкой выводится, сколько таких досок помещается в кубометр — по этой цифре обычно и сверяются на складе.",
    "howItWorks": "Объём одной прямоугольной доски v = L·b·t/1 000 000: L в м, b и t в мм. Общий объём = n·v, теоретическое число в кубометре = 1/v. n — положительное безопасное целое, размеры положительны и конечны. Цена вводится в ₽/м³; ноль или отсутствие цены скрывает строку стоимости, положительная цена даёт объём·цену.",
    "howToUse": [
      "Введите длину доски в метрах, а ширину и толщину в миллиметрах.",
      "Укажите количество досок.",
      "При необходимости добавьте цену за кубометр."
    ],
    "example": "Доска 6 м × 150 × 25 мм занимает 0,0225 м³; пятьдесят таких досок — 1,125 м³, а в кубометре их 44,44.",
    "faq": [
      {
        "q": "Почему ширину и толщину нужно вводить в миллиметрах?",
        "a": "Потому что сечение пиломатериала так и маркируют: 150 × 25. Перевод в метры делается внутри расчёта — вводить 0,15 и 0,025 не нужно и легко ошибиться."
      },
      {
        "q": "Сколько досок в кубометре?",
        "a": "Это теоретическое 1/v. Для 6 м × 150 × 25 мм получается 44,44; 44 целые доски занимают 0,99 м³, а 45 — 1,0125 м³. Дробовое отношение не округляется в закупочный заказ."
      },
      {
        "q": "Учитывается ли обзол и усушка?",
        "a": "Нет. Объём следует ровно введённым размерам. Для фактического объёма измерьте материал, для номинального договорного объёма используйте договорные размеры; автоматической поправки нет."
      },
      {
        "q": "Подходит ли для бруса?",
        "a": "Да, если брус прямоугольного сечения: длина, ширина и толщина вводятся так же."
      }
    ]
  },
  "en": {
    "longDescription": "Converts board length and section into cubic metres — the unit timber is sold in. Length is measured in metres and the section in millimetres, and that conversion is exactly where mental arithmetic goes wrong: multiplying millimetres as if they were metres is out by a factor of a million while still looking like a plausible figure. Here it is done explicitly. A separate line gives how many such boards fit into a cubic metre, which is usually the number checked at the yard.",
    "howItWorks": "One rectangular board has v = L·b·t/1,000,000: L in m, b and t in mm. Total volume = n·v; theoretical boards per cubic metre = 1/v. n is a positive safe integer and dimensions are positive and finite. Price is in RUB/m³; zero or omitted price hides cost, while positive price gives volume·price.",
    "howToUse": [
      "Enter the board length in metres and the width and thickness in millimetres.",
      "Give the number of boards.",
      "Add a price per cubic metre if you need the cost."
    ],
    "example": "A 6 m × 150 × 25 mm board takes 0.0225 m³; fifty of them make 1.125 m³, and a cubic metre holds 44.44 of them.",
    "faq": [
      {
        "q": "Why are width and thickness in millimetres?",
        "a": "Because that is how timber sections are marked: 150 × 25. The conversion to metres happens inside the calculation, so there is no need to type 0.15 and 0.025 and no chance to slip a decimal."
      },
      {
        "q": "How many boards are in a cubic metre?",
        "a": "It is the theoretical ratio 1/v. For 6 m × 150 × 25 mm it is 44.44; 44 whole boards occupy 0.99 m³ and 45 occupy 1.0125 m³. This fractional ratio is not rounded into a purchase order."
      },
      {
        "q": "Is wane or shrinkage included?",
        "a": "No. Volume follows the entered dimensions. Measure actual dimensions for actual volume or use agreed nominal dimensions for contractual volume; no automatic correction is applied."
      },
      {
        "q": "Does it work for beams?",
        "a": "Yes, for any rectangular section: length, width and thickness are entered the same way."
      }
    ],
    "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
  },
  "uk": {
    "longDescription": "Переводить кількість прямокутних дощок у кубометри: довжина задається в метрах, ширина й товщина — у міліметрах. Окремо показує об’єм однієї дошки й теоретичне дробове число таких дощок у кубометрі. Наприклад, для 6 м × 150 × 25 мм це 44,44, а не гарантія, що ціла кількість дощок складе рівно 1 м³.",
    "howItWorks": "Об’єм прямокутної дошки v = L·b·t/1 000 000: L у м, b і t у мм. Загальний об’єм = n·v, теоретичне число в кубометрі = 1/v. n — додатне безпечне ціле, розміри додатні й скінченні. Ціна у ₽/м³; нуль або відсутність ціни приховує вартість, додатна ціна дає об’єм·ціну.",
    "howToUse": [
      "Введіть довжину дошки в метрах.",
      "Введіть ширину й товщину в міліметрах.",
      "Введіть кількість дощок."
    ],
    "example": "Дошка 6 м × 150 × 25 мм займає 0,0225 м³; п’ятдесят таких дощок — 1,125 м³, а в кубометрі їх 44,44.",
    "faq": [
      {
        "q": "Чому кількість дощок у кубометрі дробова?",
        "a": "Це теоретичне 1/v, а не кількість цілих дощок до закупівлі. Для 6 м × 150 × 25 мм 44 дошки займають 0,99 м³, а 45 — 1,0125 м³; відношення становить 44,44 дошки/м³."
      },
      {
        "q": "Розміри брати номінальні чи фактичні?",
        "a": "Вибір залежить від мети: для геометричного об’єму використовуйте фактичні розміри, для перевірки договірного номінального об’єму — розміри з договору. Калькулятор не закладає універсального припуску на стругання."
      },
      {
        "q": "Чим кубометр відрізняється від погонного метра?",
        "a": "Погонний метр — це довжина без урахування перерізу. Для дощок одного розміру перехід простий, для різних — ні, і саме тому пиломатеріал і продають кубами."
      },
      {
        "q": "Чи впливає вологість на об’єм?",
        "a": "Зміна вологості може змінити розміри матеріалу, але калькулятор цього не моделює. Використовуйте виміряні розміри для потрібного стану; універсальної усушки або цінового висновку тут немає."
      }
    ],
    "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
  },
  "de": {
    "longDescription": "Rechnet Länge und Querschnitt eines Brettes in Kubikmeter um — die Einheit, in der Schnittholz verkauft wird. Die Länge wird in Metern gemessen und der Querschnitt in Millimetern, und genau bei dieser Umrechnung geht das Kopfrechnen schief: Millimeter zu multiplizieren, als wären es Meter, liegt um den Faktor einer Million daneben und sieht dabei nach einer plausiblen Zahl aus. Hier geschieht sie ausdrücklich. Eine eigene Zeile nennt, wie viele solcher Bretter in einen Kubikmeter gehen — meist die Zahl, die auf dem Hof nachgeprüft wird.",
    "howItWorks": "Eine rechteckige Platte hat v = L·b·t/1.000.000: L in m, b und t in mm. Gesamtvolumen = n·v; theoretische Stückzahl je Kubikmeter = 1/v. n ist eine positive sichere ganze Zahl, Maße sind positiv und endlich. Der Preis steht in RUB/m³; null oder fehlender Preis blendet die Kosten aus, ein positiver Preis ergibt Volumen·Preis.",
    "howToUse": [
      "Trage die Brettlänge in Metern und Breite und Dicke in Millimetern ein.",
      "Gib die Zahl der Bretter an.",
      "Ergänze einen Preis je Kubikmeter, wenn du die Kosten brauchst."
    ],
    "example": "Ein Brett mit 6 m × 150 × 25 mm hat 0,0225 m³; fünfzig davon ergeben 1,125 m³, und ein Kubikmeter fasst 44,44 davon.",
    "faq": [
      {
        "q": "Warum stehen Breite und Dicke in Millimetern?",
        "a": "Weil Holzquerschnitte so bezeichnet werden: 150 × 25. Die Umrechnung in Meter geschieht innerhalb der Rechnung, es ist also nicht nötig, 0,15 und 0,025 einzutippen, und es lässt sich kein Komma verrutschen."
      },
      {
        "q": "Wie viele Bretter gehen auf einen Kubikmeter?",
        "a": "Es ist das theoretische Verhältnis 1/v. Bei 6 m × 150 × 25 mm sind es 44,44; 44 ganze Bretter ergeben 0,99 m³, 45 ergeben 1,0125 m³. Dieses Verhältnis wird nicht zu einer Bestellstückzahl gerundet."
      },
      {
        "q": "Sind Baumkante oder Schwund enthalten?",
        "a": "Nein. Das Volumen folgt den eingegebenen Maßen. Für tatsächliches Volumen misst du das Material, für vertragliches Nennvolumen gelten die vereinbarten Maße; eine automatische Korrektur gibt es nicht."
      },
      {
        "q": "Funktioniert das auch für Balken?",
        "a": "Ja, für jeden rechteckigen Querschnitt: Länge, Breite und Dicke werden gleich eingetragen."
      }
    ],
    "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
  },
  "es": {
    "longDescription": "Convierte el largo y la sección de una tabla en metros cúbicos, la unidad en la que se vende la madera. El largo se mide en metros y la sección en milímetros, y justo en esa conversión falla el cálculo mental: multiplicar milímetros como si fueran metros se equivoca en un factor de un millón sin dejar de parecer una cifra razonable. Aquí se hace de forma explícita. Una línea aparte da cuántas tablas así caben en un metro cúbico, que suele ser el número que se comprueba en el almacén.",
    "howItWorks": "Una tabla rectangular tiene v = L·b·t/1.000.000: L en m, b y t en mm. Volumen total = n·v; tablas teóricas por metro cúbico = 1/v. n es un entero positivo seguro y las dimensiones son positivas y finitas. El precio es RUB/m³; cero o ausencia de precio oculta el coste, y un precio positivo da volumen·precio.",
    "howToUse": [
      "Introduce el largo de la tabla en metros y el ancho y el grosor en milímetros.",
      "Indica el número de tablas.",
      "Añade un precio por metro cúbico si necesitas el coste."
    ],
    "example": "Una tabla de 6 m × 150 × 25 mm ocupa 0,0225 m³; cincuenta de ellas hacen 1,125 m³, y un metro cúbico da para 44,44.",
    "faq": [
      {
        "q": "¿Por qué el ancho y el grosor van en milímetros?",
        "a": "Porque así se marcan las secciones de madera: 150 × 25. La conversión a metros ocurre dentro del cálculo, así que no hace falta escribir 0,15 y 0,025 ni hay ocasión de perder una coma."
      },
      {
        "q": "¿Cuántas tablas hay en un metro cúbico?",
        "a": "Es la relación teórica 1/v. Para 6 m × 150 × 25 mm son 44,44; 44 tablas completas ocupan 0,99 m³ y 45 ocupan 1,0125 m³. No se convierte ese cociente fraccionario en una cantidad de compra."
      },
      {
        "q": "¿Se incluyen el canto vivo o la merma por secado?",
        "a": "No. El volumen sigue las medidas introducidas. Usa las medidas reales para volumen real o las nominales acordadas para volumen contractual; no hay ajuste automático."
      },
      {
        "q": "¿Vale para vigas?",
        "a": "Sí, para cualquier sección rectangular: el largo, el ancho y el grosor se introducen igual."
      }
    ],
    "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es', Partial<CalculatorCopy>>;
