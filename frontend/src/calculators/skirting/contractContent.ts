import type { CalculatorCopy } from '../../lib/platform/types';
// Individually read actual immutable145 body; agent-authored amendment is not human approval.
export const buildingWave16ContractContent = {
  "ru": {
    "longDescription": "Плинтус живёт по периметру, а не по площади, и обе типичные ошибки лежат по разные стороны от этого. Первая — забыть вычесть дверные проёмы и купить лишнее. Вторая, дороже, — вычесть их и не заложить запас: каждый угол съедает длину на косой рез, и на комнате с пятью углами это заметно. Планки считаются вверх целыми, потому что в магазине половину планки не продают.",
    "howItWorks": "Периметр P = 2(L + W); вычет = n·b, где n — неотрицательное безопасное целое число проёмов, b — общая для них или средняя ширина в м. Чистая длина P − n·b должна быть положительной. С запасом R = (P − n·b)(1 + w/100), планок = ceil(R/длина планки), куплено = число планок·длина планки. Запас конечный и неотрицательный. Раскрой отдельных стен, углы и соединители не оптимизируются.",
    "howToUse": [
      "Введите длину и ширину прямоугольной комнаты в м.",
      "Укажите целое число участков без плинтуса и их общую для всех или среднюю ширину.",
      "Введите длину покупаемой планки и собственный процент запаса.",
      "Проверьте отдельный план резов и соединителей."
    ],
    "example": "Комната 5,2×3,4 с двумя проёмами по 0,9 м требует 16,17 м плинтуса — семь планок по 2,5 м.",
    "faq": [
      {
        "q": "Почему нужен запас, если периметр известен точно?",
        "a": "Запас покрывает выбранную вами поправку на раскрой, а округление до целых планок добавляет ещё длину. Потери зависят от стен, углов, соединений и использования обрезков; универсальных 5 или 10 % нет, угол реза не всегда 45°."
      },
      {
        "q": "Нужно ли вычитать проёмы?",
        "a": "Вычитайте только участки, где плинтуса действительно не будет. Если под аркой плинтус продолжается, не считайте её проёмом для вычета: добавлять ширину обратно после нулевого вычета не требуется. Для разных ширин используйте их среднее при целом числе проёмов."
      },
      {
        "q": "Как считать комнату сложной формы?",
        "a": "Измерьте полный периметр P вручную. Для той же длины в этой модели введите L = W = P/4, либо любые положительные L и W с L + W = P/2. Деление P пополам в обоих полях удвоило бы периметр. Реальные углы и раскрой при этом не моделируются."
      },
      {
        "q": "Считать ли плинтус за мебелью?",
        "a": "Обычно да: за встроенной мебелью плинтус часто ставят, чтобы стык был закрыт при перестановке. Если точно знаете, что он не нужен, вычтите эту длину как дополнительный проём."
      }
    ],
    "disclaimer": "Оценка основана на периметре, вычете проёмов и выбранном запасе. Раскрой, углы и соединители не оптимизируются; округление до целых планок не гарантирует достаточный запас для любого плана резов."
  },
  "en": {
    "longDescription": "Skirting follows the perimeter rather than the area, and both common mistakes sit on either side of that. The first is forgetting to deduct the doorways and buying too much. The second, and the costlier one, is deducting them and leaving no allowance: every corner eats length in the mitre cut, and on a room with five corners that shows. Planks are rounded up, because a shop will not sell half of one.",
    "howItWorks": "Perimeter P = 2(L + W); deduction = n·b, where n is a nonnegative safe whole opening count and b is their common or mean width in m. Net length P − n·b must be positive. With reserve R = (P − n·b)(1 + w/100), pieces = ceil(R/stock length), purchased length = pieces·stock length. Reserve is finite and nonnegative. Individual wall cuts, corners and connectors are not optimized.",
    "howToUse": [
      "Enter rectangular room length and width in m.",
      "Enter a whole count of spans without skirting and their common or mean width.",
      "Enter stock-piece length and your chosen reserve percentage.",
      "Check the separate cut and connector plan."
    ],
    "example": "A 5.2×3.4 room with two 0.9 m doorways needs 16.17 m of skirting — seven 2.5 m planks.",
    "faq": [
      {
        "q": "Why an allowance if the perimeter is known exactly?",
        "a": "The reserve is your chosen cutting allowance, while rounding whole pieces adds further length. Losses depend on walls, corners, joints and reuse of offcuts; neither 5 nor 10% is universal and cuts are not always 45°."
      },
      {
        "q": "Should doorways be deducted?",
        "a": "Deduct only spans without skirting. If skirting continues under an arch, do not count that arch as a deduction; there is no need to add its width back after deducting zero. For unequal openings use their mean width and a whole count."
      },
      {
        "q": "How do I handle an irregular room?",
        "a": "Measure the full perimeter P manually. To reproduce that length use L = W = P/4, or any positive L and W with L + W = P/2. Entering P/2 in both fields would double the perimeter. Actual corners and cutting layout are not modeled."
      },
      {
        "q": "Should I count skirting behind furniture?",
        "a": "Usually yes: skirting is often fitted behind built-in units so the joint stays covered if things are moved. If you are certain it is not needed, deduct that length as an extra doorway."
      }
    ],
    "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
  },
  "uk": {
    "longDescription": "Плінтус рахується за периметром за вирахуванням прорізів, а купується планками фіксованої довжини. Через округлення вгору й підрізання в кутах фактична витрата виходить помітно більшою за чистий периметр.",
    "howItWorks": "Периметр P = 2(L + W); віднімання = n·b, де n — невід’ємне безпечне ціле число прорізів, b — спільна або середня їхня ширина в м. Чиста довжина P − n·b має бути додатною. Із запасом R = (P − n·b)(1 + w/100), планок = ceil(R/довжина планки), придбано = число планок·довжина планки. Запас скінченний і невід’ємний. Розкрій окремих стін, кути й з’єднувачі не оптимізуються.",
    "howToUse": [
      "Введіть довжину й ширину прямокутної кімнати в м.",
      "Укажіть ціле число ділянок без плінтуса та їхню спільну або середню ширину.",
      "Введіть довжину придбаної планки та власний відсоток запасу.",
      "Окремо перевірте план різів і з’єднувачів."
    ],
    "example": "Кімната 5,2 × 3,4 м із двома прорізами по 0,9 м потребує 16,17 м плінтуса — сім планок по 2,5 м.",
    "faq": [
      {
        "q": "Чому планок потрібно більше, ніж за периметром?",
        "a": "Запас — ваша поправка на розкрій, а округлення до цілих планок додає довжину окремо. Втрати залежать від стін, кутів, стиків і використання обрізків; універсального мінімуму 10 % немає."
      },
      {
        "q": "Чи віднімати дверні прорізи?",
        "a": "Так, плінтус там не ставиться. Але враховувати треба саме ширину коробки, а не полотна дверей."
      },
      {
        "q": "Скільки потрібно кутів і з’єднувачів?",
        "a": "По одному внутрішньому куту на кожен внутрішній кут кімнати, зовнішні — на виступи, заглушки — на торці біля дверей. Їх рахують окремо за планом."
      },
      {
        "q": "Чи можна стикувати планки посеред стіни?",
        "a": "Можна, для цього є з’єднувачі. Але шов помітний, тому довгі стіни краще закривати цілими планками, а обрізки лишати для коротких."
      }
    ],
    "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
  },
  "de": {
    "longDescription": "Sockelleisten laufen am Raumumfang entlang, aber nicht durch die Türen. Der Rechner nimmt Länge und Breite des Raums, zieht die Türöffnungen ab, schlägt Verschnitt für Gehrungen und Fehlschnitte auf und teilt das Ergebnis in ganze Leisten der gewählten Länge — also genau die Zahl, die im Baumarkt gebraucht wird.",
    "howItWorks": "Umfang P = 2(L + W); Abzug = n·b, mit einer nichtnegativen sicheren ganzen Anzahl n und gemeinsamer oder mittlerer Öffnungsbreite b in m. Nettolänge P − n·b muss positiv sein. Mit Zuschlag R = (P − n·b)(1 + w/100), Leisten = ceil(R/Lagerlänge), gekaufte Länge = Stückzahl·Lagerlänge. Der Zuschlag ist endlich und nichtnegativ. Einzelne Wandzuschnitte, Ecken und Verbinder werden nicht optimiert.",
    "howToUse": [
      "Länge und Breite des Rechteckraums in m eintragen.",
      "Ganze Zahl der Abschnitte ohne Leiste und ihre gemeinsame oder mittlere Breite eingeben.",
      "Lagerlänge der Leiste und eigenen Zuschlag eintragen.",
      "Zuschnitt und Verbinder gesondert planen."
    ],
    "example": "Ein Raum von 5 × 4 m hat 18 m Umfang. Bei zwei Türen mit zusammen 1,8 m bleiben 16,2 m. Mit 10 % Verschnitt sind das 17,82 m, bei 2,5-m-Leisten also 8 Stück.",
    "faq": [
      {
        "q": "Warum wird immer aufgerundet?",
        "a": "Leisten werden als ganze Stücke verkauft. Eine rechnerisch benötigte Länge von 7,1 Leisten bedeutet in der Praxis 8 Stück, weil das Reststück der achten Leiste den Rest abdeckt."
      },
      {
        "q": "Wie viel Verschnitt ist sinnvoll?",
        "a": "Wähle den Zuschlag anhand von Zuschnitt, Wandlängen, Verbindungen und nutzbaren Resten. Ein fester Prozentwert passt nicht zu jedem Raum. Das Aufrunden auf ganze Leisten ergänzt den Zuschlag, ersetzt aber keinen Zuschnittplan."
      },
      {
        "q": "Gilt die Rechnung auch für nicht rechteckige Räume?",
        "a": "Den gesamten Umfang P messen. Für dieselbe Länge L = W = P/4 oder beliebige positive L und W mit L + W = P/2 eingeben. P/2 in beiden Feldern würde den Umfang verdoppeln. Tatsächliche Ecken und Zuschnitt werden nicht modelliert."
      },
      {
        "q": "Zählen Türzargen zur Öffnung?",
        "a": "Abgezogen wird die Breite, an der tatsächlich keine Leiste sitzt. Bei Zargen ohne Sockelanschluss ist das die lichte Öffnung samt Zargenbreite."
      }
    ],
    "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
  },
  "es": {
    "longDescription": "El rodapié sigue el perímetro y no la superficie, y los dos errores habituales están a uno y otro lado de eso. El primero es olvidarse de descontar los huecos de puerta y comprar de más. El segundo, y el más caro, es descontarlos y no dejar margen: cada esquina se come longitud en el corte a inglete, y en una habitación con cinco esquinas se nota. Los tramos se redondean hacia arriba, porque en la tienda no venden medio.",
    "howItWorks": "Perímetro P = 2(L + W); descuento = n·b, donde n es un entero seguro no negativo y b es el ancho común o medio de los huecos en m. La longitud neta P − n·b debe ser positiva. Con margen R = (P − n·b)(1 + w/100), piezas = ceil(R/longitud comercial), comprado = piezas·longitud comercial. El margen es finito y no negativo. No optimiza los cortes de cada pared, esquinas ni conectores.",
    "howToUse": [
      "Introduce largo y ancho de la habitación rectangular en m.",
      "Indica un número entero de tramos sin rodapié y su ancho común o medio.",
      "Introduce la longitud comercial y tu porcentaje de margen.",
      "Comprueba aparte el plan de cortes y conectores."
    ],
    "example": "Una habitación de 5,2×3,4 con dos huecos de 0,9 m necesita 16,17 m de rodapié: siete tramos de 2,5 m.",
    "faq": [
      {
        "q": "¿Por qué un margen si el perímetro se conoce exactamente?",
        "a": "El margen es la reserva de corte que eliges, y el redondeo a piezas enteras añade más longitud. Las pérdidas dependen de paredes, esquinas, uniones y reutilización; ni 5 ni 10 % son universales y los cortes no siempre son de 45°."
      },
      {
        "q": "¿Hay que descontar los huecos de puerta?",
        "a": "Descuenta solo tramos sin rodapié. Si continúa bajo un arco, no cuentes el arco como descuento; no añadas su ancho tras descontar cero. Para anchos distintos usa la media con un número entero de huecos."
      },
      {
        "q": "¿Cómo trato una habitación irregular?",
        "a": "Mide el perímetro completo P. Para reproducir esa longitud usa L = W = P/4, o cualquier par positivo con L + W = P/2. Introducir P/2 en ambos campos duplica el perímetro. No modela las esquinas reales ni el despiece."
      },
      {
        "q": "¿Debo contar el rodapié detrás de los muebles?",
        "a": "Normalmente sí: el rodapié suele colocarse detrás de los muebles empotrados para que la junta quede cubierta si se mueven las cosas. Si estás seguro de que no hace falta, descuenta esa longitud como un hueco más."
      }
    ],
    "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es',Partial<CalculatorCopy>>;
