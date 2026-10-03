import type { CalculatorCopy } from '../../lib/platform/types';

type Body = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'> & Partial<Pick<CalculatorCopy, 'seoDescription'>>;

export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Body> = {
  "ru": {
    "longDescription": "Сравнение номинального напряжения, ёмкости и энергии идеальной сборки одинаковых ячеек. S — число ячеек последовательно в ветви, P — число одинаковых параллельных ветвей. Перестановка S и P меняет напряжение и А·ч, но при том же числе ячеек сохраняет номинальные Вт·ч. Эти числа сами по себе не подтверждают совместимость с устройством или допустимый ток.",
    "howToUse": [
      "Введите общее число ячеек и целые S и P от 1 до 500.",
      "Проверьте равенство N = S·P; лишние ячейки не округляются и не отбрасываются.",
      "Укажите номинальное напряжение и ёмкость одной одинаковой ячейки.",
      "Сопоставляйте напряжение во всём рабочем диапазоне, ток и требования BMS с документацией системы, а не только с номиналом."
    ],
    "howItWorks": "Последовательная ветвь даёт U = S·Uяч и сохраняет А·ч одной ячейки. P одинаковых ветвей дают C = P·Cяч. Энергия E = U·C = N·Uяч·Cяч Вт·ч. Модель предполагает одинаковые ячейки и не учитывает разбалансировку, проводники и потери.",
    "example": "12 ячеек по 3,7 В и 3,4 А·ч: 4S3P дают 14,8 В, 10,2 А·ч и 150,96 Вт·ч. Для 3S4P получаются 11,1 В, 13,6 А·ч и те же 150,96 Вт·ч. 4S4P требуют 16 ячеек, поэтому для N = 12 отклоняются.",
    "faq": [
      {
        "q": "Что складывается при соединении ячеек?",
        "a": "Последовательно складываются напряжения; параллельно — ёмкости в А·ч одинаковых ветвей. Формулы применяются к одинаковым ячейкам в прямоугольной схеме S×P."
      },
      {
        "q": "Подойдёт ли номинальная сборка 14,8 В к устройству на 12 В?",
        "a": "Номинала недостаточно. Нужны диапазон напряжений при заряде и разряде, допустимые токи устройства и ячеек, защита и BMS. Расчёт совместимость не устанавливает."
      },
      {
        "q": "Меняет ли параллельное соединение только время работы?",
        "a": "В идеальной модели оно увеличивает А·ч. Реальная допустимая отдача тока также зависит от ячеек, соединений, распределения тока и защиты; здесь её не рассчитывают."
      },
      {
        "q": "Можно ли вводить разные или дробные ячейки?",
        "a": "Нет: номинал и ёмкость считаются одинаковыми, количество — целым. Для батареи из неодинаковых элементов эти произведения не описывают ограничение самым слабым элементом или балансировку."
      }
    ],
    "disclaimer": "Номинальная модель одинаковых ячеек. Схема защиты, балансировка, допустимые токи и совместимость определяются спецификациями оборудования."
  },
  "en": {
    "longDescription": "Compare the nominal voltage, capacity and energy of an ideal pack of identical cells. S is the number in series per branch; P is the number of identical parallel branches. Swapping S and P changes voltage and Ah but preserves nominal Wh when the number of cells stays the same. These values alone do not establish device compatibility or permissible current.",
    "howToUse": [
      "Enter the cell count and integer S and P from 1 to 500.",
      "Check N = S·P; surplus cells are neither rounded nor discarded.",
      "Enter the nominal voltage and capacity of one identical cell.",
      "Check the full operating voltage range, current and BMS requirements against the system specifications, not only the nominal voltage."
    ],
    "howItWorks": "A series branch has U = S·Ucell and retains one cell's Ah. P identical branches give C = P·Ccell. Energy E = U·C = N·Ucell·Ccell Wh. The model assumes identical cells and excludes imbalance, wiring and losses.",
    "example": "Twelve 3.7 V, 3.4 Ah cells in 4S3P give 14.8 V, 10.2 Ah and 150.96 Wh. In 3S4P they give 11.1 V, 13.6 Ah and the same 150.96 Wh. A 4S4P layout needs 16 cells and is rejected when N = 12.",
    "faq": [
      {
        "q": "What adds when cells are connected?",
        "a": "Series voltages add; capacities in Ah add for identical parallel branches. These formulas describe identical cells in a rectangular S×P arrangement."
      },
      {
        "q": "Will a nominal 14.8 V pack suit a 12 V device?",
        "a": "Nominal voltage is insufficient. Check charged and discharged voltage ranges, device and cell current limits, protection and BMS requirements. The calculation does not establish compatibility."
      },
      {
        "q": "Does a parallel connection change only run time?",
        "a": "It increases Ah in the ideal model. Real current capability also depends on cells, connections, current sharing and protection, none of which is calculated here."
      },
      {
        "q": "Can I enter different cells or fractional counts?",
        "a": "No. Cells are assumed to have identical ratings, and counts must be integers. With dissimilar cells, these products do not describe the weakest-cell limit or balancing."
      }
    ],
    "disclaimer": "Nominal identical-cell model. Protection, balancing, current limits and compatibility require the actual equipment specifications."
  },
  "uk": {
    "longDescription": "Порівняння номінальної напруги, ємності та енергії ідеальної збірки однакових комірок. S — кількість послідовних комірок у гілці, P — кількість однакових паралельних гілок. Перестановка S і P змінює напругу та А·год, але за тієї самої кількості комірок зберігає номінальні Вт·год. Ці числа не підтверджують сумісність із пристроєм чи допустимий струм.",
    "howToUse": [
      "Уведіть кількість комірок і цілі S та P від 1 до 500.",
      "Перевірте N = S·P: зайві комірки не округлюються та не відкидаються.",
      "Укажіть номінальну напругу й ємність однієї однакової комірки.",
      "Зіставте весь робочий діапазон напруги, струми та вимоги BMS із документацією системи, а не лише з номіналом."
    ],
    "howItWorks": "Послідовна гілка дає U = S·Uком і зберігає А·год однієї комірки. P однакових гілок дають C = P·Cком. Енергія E = U·C = N·Uком·Cком Вт·год. Модель передбачає однакові комірки й не враховує дисбаланс, проводи та втрати.",
    "example": "12 комірок по 3,7 В і 3,4 А·год: 4S3P дають 14,8 В, 10,2 А·год і 150,96 Вт·год. 3S4P дають 11,1 В, 13,6 А·год і ті самі 150,96 Вт·год. Для 4S4P потрібні 16 комірок, тому за N = 12 схема відхиляється.",
    "faq": [
      {
        "q": "Що додається при з'єднанні комірок?",
        "a": "Послідовно додаються напруги; паралельно — ємності однакових гілок в А·год. Формули описують однакові комірки у прямокутній схемі S×P."
      },
      {
        "q": "Чи підійде номінальна збірка 14,8 В до пристрою на 12 В?",
        "a": "Номіналу недостатньо. Перевірте діапазони напруги при заряді й розряді, граничні струми комірок і пристрою, захист та BMS. Калькулятор не визначає сумісність."
      },
      {
        "q": "Чи паралельне з'єднання змінює лише час роботи?",
        "a": "В ідеальній моделі воно збільшує А·год. Реальна струмова здатність також залежить від комірок, з'єднань, розподілу струму та захисту; тут вона не обчислюється."
      },
      {
        "q": "Чи можна ввести різні комірки або дробову кількість?",
        "a": "Ні: комірки вважаються однаковими, а кількість — цілою. Для різних елементів ці добутки не описують обмеження найслабшим елементом або балансування."
      }
    ],
    "disclaimer": "Номінальна модель однакових комірок. Захист, балансування, допустимі струми та сумісність визначаються специфікаціями обладнання."
  },
  "de": {
    "longDescription": "Vergleicht Nennspannung, Kapazität und Energie eines idealen Packs aus gleichen Zellen. S bezeichnet die Zellen in Reihe je Zweig, P die Zahl gleicher paralleler Zweige. Ein Tausch von S und P verändert Spannung und Ah, erhält aber bei gleicher Zellenzahl die nominalen Wh. Diese Werte allein bestätigen weder Gerätekompatibilität noch zulässigen Strom.",
    "howToUse": [
      "Gib Zellenzahl sowie ganzzahlige S und P von 1 bis 500 ein.",
      "Prüfe N = S·P; überzählige Zellen werden nicht gerundet oder weggelassen.",
      "Trage Nennspannung und Kapazität einer der gleichen Zellen ein.",
      "Prüfe gesamten Spannungsbereich, Ströme und BMS-Anforderungen anhand der Systemdaten statt nur der Nennspannung."
    ],
    "howItWorks": "Ein Reihenzweig liefert U = S·UZelle bei unveränderten Ah einer Zelle. P gleiche Zweige ergeben C = P·CZelle. Energie E = U·C = N·UZelle·CZelle Wh. Gleiche Zellen werden vorausgesetzt; Ungleichgewicht, Leitungen und Verluste sind nicht enthalten.",
    "example": "Zwölf Zellen mit je 3,7 V und 3,4 Ah ergeben als 4S3P 14,8 V, 10,2 Ah und 150,96 Wh. Als 3S4P ergeben sie 11,1 V, 13,6 Ah und ebenfalls 150,96 Wh. Für 4S4P sind 16 Zellen nötig; bei N = 12 wird diese Anordnung abgelehnt.",
    "faq": [
      {
        "q": "Welche Größen addieren sich beim Verbinden von Zellen?",
        "a": "In Reihe addieren sich die Spannungen; bei gleichen parallelen Zweigen die Kapazitäten in Ah. Die Formeln gelten für gleiche Zellen in einer rechteckigen S×P-Anordnung."
      },
      {
        "q": "Passt ein Pack mit nominal 14,8 V zu einem 12-V-Gerät?",
        "a": "Die Nennspannung genügt dafür nicht. Spannungsbereich beim Laden und Entladen, Stromgrenzen von Gerät und Zellen, Schutz und BMS müssen geprüft werden. Der Rechner bestätigt keine Kompatibilität."
      },
      {
        "q": "Ändert Parallelschaltung nur die Laufzeit?",
        "a": "Im idealen Modell erhöht sie die Ah. Reale Strombelastbarkeit hängt auch von Zellen, Verbindungen, Stromverteilung und Schutz ab und wird hier nicht berechnet."
      },
      {
        "q": "Sind unterschiedliche Zellen oder Bruchteile erlaubt?",
        "a": "Nein. Die Zellen gelten als gleich, ihre Anzahl muss ganzzahlig sein. Bei verschiedenen Zellen beschreiben diese Produkte weder die Begrenzung durch die schwächste Zelle noch den Ladungsausgleich."
      }
    ],
    "disclaimer": "Nominalmodell gleicher Zellen. Schutz, Balancing, Stromgrenzen und Kompatibilität erfordern die konkreten Gerätespezifikationen."
  },
  "es": {
    "longDescription": "Compara tensión nominal, capacidad y energía de un conjunto ideal de celdas iguales. S es la cantidad en serie por rama y P el número de ramas paralelas iguales. Intercambiar S y P cambia tensión y Ah, pero conserva los Wh nominales con el mismo número de celdas. Estos valores no establecen por sí solos compatibilidad ni corriente admisible.",
    "howToUse": [
      "Introduce cantidad de celdas y enteros S y P entre 1 y 500.",
      "Comprueba N = S·P; no se redondean ni descartan celdas sobrantes.",
      "Indica tensión nominal y capacidad de una de las celdas iguales.",
      "Compara todo el rango de tensión, corrientes y requisitos del BMS con la documentación, no solo el valor nominal."
    ],
    "howItWorks": "Una rama en serie da U = S·Ucelda y conserva los Ah de una celda. P ramas iguales dan C = P·Ccelda. Energía E = U·C = N·Ucelda·Ccelda Wh. Se presuponen celdas iguales; no se incluyen desequilibrios, cableado ni pérdidas.",
    "example": "12 celdas de 3,7 V y 3,4 Ah en 4S3P dan 14,8 V, 10,2 Ah y 150,96 Wh. En 3S4P dan 11,1 V, 13,6 Ah y los mismos 150,96 Wh. Una disposición 4S4P necesita 16 celdas y se rechaza para N = 12.",
    "faq": [
      {
        "q": "¿Qué se suma al conectar celdas?",
        "a": "En serie se suman tensiones; en ramas paralelas iguales se suman capacidades en Ah. Las fórmulas describen celdas iguales en una disposición rectangular S×P."
      },
      {
        "q": "¿Sirve un conjunto nominal de 14,8 V para un aparato de 12 V?",
        "a": "El nominal no basta. Comprueba el rango cargado y descargado, límites de corriente del aparato y las celdas, protección y BMS. El calculador no confirma compatibilidad."
      },
      {
        "q": "¿La conexión paralela solo cambia la autonomía?",
        "a": "En el modelo ideal aumenta los Ah. La capacidad real de entregar corriente también depende de celdas, conexiones, reparto de corriente y protección; aquí no se calcula."
      },
      {
        "q": "¿Se admiten celdas diferentes o cantidades fraccionarias?",
        "a": "No: las celdas se suponen iguales y su cantidad debe ser entera. Para celdas distintas, estos productos no describen el límite del elemento más débil ni el equilibrado."
      }
    ],
    "disclaimer": "Modelo nominal de celdas iguales. Protección, equilibrado, corriente admisible y compatibilidad requieren las especificaciones concretas."
  }
};
