import type { CalculatorCopy } from '../../lib/platform/types';

// Actual 145 native body individually reviewed; scoped model and input corrections. Agent review is not human approval.
export const buildingWave13ContractContent = {
  "ru": {
    "longDescription": "Рассчитывает геометрический объём плиты, прямоугольной ленты или одинаковых столбов с заданной площадью сечения. Чистый объём и выбранный запас показаны отдельно. Страница не подбирает состав, марку бетона, армирование, несущую способность или условия доставки; процент запаса задаёте вы.",
    "howItWorks": "Плита: V=L·B·t; лента: V=P·b·h; столбы: V=S·H·n. Линейные размеры в м, S в м², объём в м³. n — положительное безопасное целое; активные размеры положительны и конечны. Итог V·(1+w/100), отдельный запас V·w/100, w от 0 до 50 %. Неактивные размеры других форм не используются.",
    "howToUse": [
      "Выберите форму заливки.",
      "Введите её размеры.",
      "Задайте запас на потери и прочитайте объём заказа."
    ],
    "example": "Плита 6 × 4 м толщиной 0,2 м — это 4,8 м³ чистого объёма; с запасом 5 % заказать нужно 5,04 м³.",
    "faq": [
      {
        "q": "Сколько бетона заказывать сверх расчёта?",
        "a": "Запас — ваш ввод 0–50 %, а не назначенная минимальная норма. Оцените потери и расхождения геометрии для конкретной работы; калькулятор не определяет их сам."
      },
      {
        "q": "Почему чистый объём показан отдельно?",
        "a": "Потому что это разные числа: по чистому объёму сверяют геометрию, а заказывают с запасом. Смешивать их — верный способ недосчитаться бетона на последнем кубе."
      },
      {
        "q": "Чем это отличается от калькулятора ленточного фундамента?",
        "a": "Здесь три простые геометрии. Режим ленты принимает её суммарную длину и постоянное сечение; пересечения и неодинаковые участки нужно учитывать в исходной геометрии отдельно."
      },
      {
        "q": "Учитывается ли арматура?",
        "a": "Нет. Используется полный геометрический объём; объём арматуры, закладных и пустот автоматически не вычитается. Их доля не считается универсально малой."
      }
    ]
  },
  "en": {
    "longDescription": "Calculates geometric volume for a slab, rectangular strip or equal columns with a supplied section area. Net volume and your chosen allowance are separate. The page does not design a mix, concrete grade, reinforcement, load capacity or delivery conditions; you choose the allowance.",
    "howItWorks": "Slab: V=L·B·t; strip: V=P·b·h; columns: V=S·H·n. Linear dimensions are in m, S in m² and volume in m³. n is a positive safe integer; active dimensions are positive and finite. Total is V·(1+w/100), separate allowance V·w/100, with w from 0 to 50%. Other shapes’ inactive dimensions are ignored.",
    "howToUse": [
      "Choose the pour shape.",
      "Enter its dimensions.",
      "Set the allowance for losses and read the volume to order."
    ],
    "example": "A 6 × 4 m slab 0.2 m thick is 4.8 m³ net; with a 5 % allowance you order 5.04 m³.",
    "faq": [
      {
        "q": "What allowance should I use?",
        "a": "Allowance is your input from 0 to 50%, not a prescribed minimum. Assess losses and geometric variation for the actual work; the calculator does not determine them."
      },
      {
        "q": "Why is the net volume shown separately?",
        "a": "Because they are different numbers: the net volume checks the geometry, the other is what you order. Confusing them is a reliable way to run short on the last cubic metre."
      },
      {
        "q": "How is this different from the strip foundation calculator?",
        "a": "This page has three simple geometries. Strip mode uses total strip length and a constant section; intersections and unequal segments need separate geometric accounting."
      },
      {
        "q": "Is reinforcement accounted for?",
        "a": "No. Full geometric volume is used; reinforcement, inserts and voids are not automatically subtracted. Their share is not assumed universally negligible."
      }
    ],
    "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
  },
  "uk": {
    "longDescription": "Рахує геометричний об’єм плити, прямокутної стрічки або однакових стовпів із заданою площею перерізу. Чистий об’єм і вибраний запас показано окремо. Склад, марка бетону, армування, несуча здатність та умови доставки не визначаються; відсоток запасу задаєте ви.",
    "howItWorks": "Плита: V=L·B·t; стрічка: V=P·b·h; стовпи: V=S·H·n. Лінійні розміри у м, S у м², об’єм у м³. n — додатне безпечне ціле; активні розміри додатні й скінченні. Підсумок V·(1+w/100), окремий запас V·w/100, w від 0 до 50 %. Неактивні розміри інших форм не використовуються.",
    "howToUse": [
      "Виберіть тип конструкції: плита, стрічка чи стовпи.",
      "Введіть розміри.",
      "Задайте обраний для роботи запас від 0 до 50 %."
    ],
    "example": "Плита 6 × 4 м товщиною 0,2 м — це 4,8 м³ чистого об’єму; із запасом 5 % замовити треба 5,04 м³.",
    "faq": [
      {
        "q": "Навіщо запас, якщо розміри відомі точно?",
        "a": "Запас — ваш ввід 0–50 %, а не встановлена мінімальна норма. Оцініть втрати й відхилення геометрії для конкретної роботи; калькулятор не визначає їх сам."
      },
      {
        "q": "Чому не можна замовити впритул?",
        "a": "Чистий об’єм перевіряє задану геометрію; підсумок додатково містить ваш запас. Калькулятор не визначає графік заливання або допустимість робочих швів."
      },
      {
        "q": "Як бетон продають?",
        "a": "Постачальник визначає мінімальне замовлення, крок округлення й місткість машини. Результат 5,04 м³ сам по собі не означає 6 м³ або певне число рейсів."
      },
      {
        "q": "Чи входить сюди арматура?",
        "a": "Ні. Використовується повний геометричний об’єм; арматура, закладні й порожнини автоматично не віднімаються. Їхня частка не вважається універсально малою."
      }
    ],
    "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
  },
  "de": {
    "longDescription": "Berechnet das geometrische Volumen einer Platte, eines rechteckigen Streifens oder gleicher Stützen mit angegebener Querschnittsfläche. Nettovolumen und gewählter Zuschlag erscheinen getrennt. Mischung, Betonklasse, Bewehrung, Tragfähigkeit und Lieferung werden nicht geplant; den Zuschlag wählst du selbst.",
    "howItWorks": "Platte: V=L·B·t; Streifen: V=P·b·h; Stützen: V=S·H·n. Längen stehen in m, S in m² und Volumen in m³. n ist eine positive sichere ganze Zahl, aktive Maße sind positiv und endlich. Gesamt V·(1+w/100), Zuschlag V·w/100, w von 0 bis 50 %. Inaktive Maße anderer Formen werden ignoriert.",
    "howToUse": [
      "Wähle die Form des Betonierens.",
      "Trage ihre Maße ein.",
      "Setze den Zuschlag für Verluste und lies das zu bestellende Volumen ab."
    ],
    "example": "Eine Platte von 6 × 4 m mit 0,2 m Dicke sind 4,8 m³ netto; mit 5 % Zuschlag bestellst du 5,04 m³.",
    "faq": [
      {
        "q": "Welchen Zuschlag soll ich nehmen?",
        "a": "Der Zuschlag ist deine Eingabe von 0–50 %, keine vorgeschriebene Mindestreserve. Beurteile Verluste und Geometrieabweichungen der konkreten Arbeit; der Rechner bestimmt sie nicht."
      },
      {
        "q": "Warum steht das Nettovolumen gesondert da?",
        "a": "Weil es verschiedene Zahlen sind: das Nettovolumen prüft die Geometrie, das andere ist das, was du bestellst. Beides zu verwechseln ist ein verlässlicher Weg, beim letzten Kubikmeter zu kurz zu kommen."
      },
      {
        "q": "Wie unterscheidet sich das vom Rechner für das Streifenfundament?",
        "a": "Hier gibt es drei einfache Geometrien. Der Streifenmodus nutzt die gesamte Länge und einen konstanten Querschnitt; Überschneidungen und ungleiche Abschnitte sind gesondert zu berücksichtigen."
      },
      {
        "q": "Ist die Bewehrung berücksichtigt?",
        "a": "Nein. Verwendet wird das volle geometrische Volumen; Bewehrung, Einbauteile und Hohlräume werden nicht automatisch abgezogen. Ihr Anteil wird nicht pauschal als vernachlässigbar angenommen."
      }
    ],
    "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
  },
  "es": {
    "longDescription": "Calcula el volumen geométrico de una losa, una franja rectangular o pilares iguales con una sección indicada. El volumen neto y el margen elegido aparecen por separado. No dimensiona mezcla, clase de hormigón, armaduras, capacidad ni transporte; tú eliges el margen.",
    "howItWorks": "Losa: V=L·B·t; franja: V=P·b·h; pilares: V=S·H·n. Las longitudes están en m, S en m² y el volumen en m³. n es un entero positivo seguro; las dimensiones activas son positivas y finitas. Total V·(1+w/100), margen separado V·w/100, con w de 0 a 50%. Se ignoran los datos inactivos de otras formas.",
    "howToUse": [
      "Elige la forma del vertido.",
      "Introduce sus dimensiones.",
      "Fija el margen por pérdidas y consulta el volumen que pedir."
    ],
    "example": "Una losa de 6 × 4 m y 0,2 m de espesor son 4,8 m³ netos; con un 5 % de margen pides 5,04 m³.",
    "faq": [
      {
        "q": "¿Qué margen debo usar?",
        "a": "El margen es tu entrada de 0–50%, no un mínimo prescrito. Evalúa pérdidas y diferencias geométricas de la obra; el cálculo no las determina."
      },
      {
        "q": "¿Por qué el volumen neto se muestra aparte?",
        "a": "Porque son cifras distintas: el neto comprueba la geometría y el otro es lo que pides. Confundirlos es una manera segura de quedarse corto en el último metro cúbico."
      },
      {
        "q": "¿En qué se diferencia de la calculadora de zapata corrida?",
        "a": "Hay tres geometrías sencillas. El modo de franja usa la longitud total y una sección constante; cruces y tramos desiguales requieren un cómputo geométrico aparte."
      },
      {
        "q": "¿Se tiene en cuenta la armadura?",
        "a": "No. Se usa el volumen geométrico completo; no se restan automáticamente armaduras, insertos ni huecos. Su proporción no se considera siempre despreciable."
      }
    ],
    "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es', Partial<CalculatorCopy>>;
