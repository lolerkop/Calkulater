import type { CalculatorCopy } from '../../lib/platform/types';

// Actual 145 native body individually reviewed; scoped model and input corrections. Agent review is not human approval.
export const buildingWave13ContractContent = {
  "ru": {
    "longDescription": "Оценивает прямой участок забора по общей длине и заданному максимальному размеру секции. Число секций округляется вверх, а фактический шаг показывает их равномерное распределение. Один дополнительный столб на каждый введённый проём — условность этой сметной модели. Ширина и положение ворот, углы, нагрузки и конструкция опор не заданы.",
    "howItWorks": "Секций n=⌈L/s⌉; столбов=n+1+g; фактический шаг=L/n. Лаг в метрах=n·s·r — номинальный запас полных длин, а не r·L установленной длины. Площадь зашивки=L·H без вычитания ворот. L, s и H положительны и конечны, r — целое 1–5, g — неотрицательное безопасное целое.",
    "howToUse": [
      "Введите общую длину забора.",
      "Введите пролёт, который планируете между столбами.",
      "Введите высоту и число лаг на секцию.",
      "Проёмы вводятся числом; добавочный столб — только правило сметы, не готовая схема ворот."
    ],
    "example": "40 м пролётами по 2,5 м с двумя лагами и одной калиткой требуют 18 столбов и 80 м лаг.",
    "faq": [
      {
        "q": "Почему столбов на один больше секций?",
        "a": "Потому что столбы стоят на концах секций, а не посередине. Четыре секции имеют пять столбов, как четыре щита требуют пяти опор."
      },
      {
        "q": "Почему калитка добавляет столб?",
        "a": "Это сохранённое правило сметы: по одному дополнительному столбу на введённый проём. Реальная схема может требовать другое число опор; без ширины и расположения ворот её определить нельзя."
      },
      {
        "q": "Какой пролёт выбрать?",
        "a": "Из вашего проекта и характеристик выбранной системы. Калькулятор не назначает универсальный безопасный пролёт и не проверяет лаги на прогиб или прочность."
      },
      {
        "q": "Почему фактический шаг отличается от введённого пролёта?",
        "a": "Потому что длина редко делится ровно. Секции делают одинаковыми, слегка их уменьшив, — именно это и показывает строка фактического шага."
      },
      {
        "q": "Учтена ли зашивка?",
        "a": "Только как площадь. Во что эта площадь обойдётся, зависит от того, ставите вы доску, сетку или профнастил."
      }
    ]
  },
  "en": {
    "longDescription": "Estimates a straight fence run from total length and the chosen maximum bay size. Bays round upward and actual spacing distributes them evenly. One extra post per entered opening is a convention of this budget model. Gate widths and positions, corners, loads and support construction are not supplied.",
    "howItWorks": "Bays n=⌈L/s⌉; posts=n+1+g; actual spacing=L/n. Rail metres=n·s·r, a full-length stock allowance rather than installed r·L. Cladding area=L·H without subtracting gates. L, s and H are positive and finite; r is an integer 1–5 and g a nonnegative safe integer.",
    "howToUse": [
      "Enter the total run of the fence.",
      "Enter the bay width you plan between posts.",
      "Enter the height and how many rails each bay carries.",
      "Openings are a count; the extra post is a budgeting rule, not a gate design."
    ],
    "example": "40 m in 2.5 m bays with two rails and one gate needs 18 posts and 80 m of rail.",
    "faq": [
      {
        "q": "Why one more post than bays?",
        "a": "Because posts stand at the ends of bays, not in the middle. Four bays have five posts, the same way four fence panels need five supports."
      },
      {
        "q": "Why does a gate add a post?",
        "a": "It is the retained budget rule: one extra post per entered opening. A real layout can need a different support count; without gate widths and positions it cannot be determined."
      },
      {
        "q": "What bay width should I use?",
        "a": "Use your design and the chosen system specifications. The calculator does not prescribe a universally safe span or check rail deflection or strength."
      },
      {
        "q": "Why is the actual spacing different from the bay width I entered?",
        "a": "Because the length rarely divides evenly. The bays are made equal by shrinking them slightly, which is what the actual spacing line shows."
      },
      {
        "q": "Is the cladding included?",
        "a": "Only as an area. What that area costs depends on whether you are fitting boards, mesh or corrugated sheet."
      }
    ],
    "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
  },
  "uk": {
    "longDescription": "Оцінює прямий відрізок паркану за загальною довжиною та заданим найбільшим розміром секції. Число секцій округлюється вгору, а фактичний крок рівномірно розподіляє їх. Додатковий стовп на кожен проріз — умовність цієї оцінки. Ширина й місце воріт, кути, навантаження та конструкція опор не задані.",
    "howItWorks": "Секцій n=⌈L/s⌉; стовпів=n+1+g; фактичний крок=L/n. Метри лаг=n·s·r — номінальний запас повних довжин, а не встановлена довжина r·L. Площа зашивки=L·H без віднімання воріт. L, s і H додатні та скінченні, r — ціле 1–5, g — невід’ємне безпечне ціле.",
    "howToUse": [
      "Введіть загальну довжину паркану.",
      "Введіть проліт, який плануєте між стовпами.",
      "Введіть висоту і кількість лаг на секцію.",
      "Прорізи задаються числом; додатковий стовп — правило оцінки, а не схема воріт."
    ],
    "example": "40 м прольотами по 2,5 м із двома лагами і однією хвірткою потребують 18 стовпів і 80 м лаг.",
    "faq": [
      {
        "q": "Чому стовпів на один більше за секції?",
        "a": "Бо стовпи стоять на кінцях секцій, а не посередині. Чотири секції мають п’ять стовпів, як чотири щити потребують п’яти опор."
      },
      {
        "q": "Чому хвіртка додає стовп?",
        "a": "Це збережене правило оцінки: один додатковий стовп на введений проріз. Фактична схема може потребувати іншого числа опор; без ширини й розташування воріт її не визначити."
      },
      {
        "q": "Який проліт обрати?",
        "a": "Із вашого проєкту й характеристик обраної системи. Калькулятор не встановлює універсального безпечного прольоту й не перевіряє лаги на прогин чи міцність."
      },
      {
        "q": "Чому фактичний крок відрізняється від уведеного прольоту?",
        "a": "Бо довжина рідко ділиться рівно. Секції роблять однаковими, трохи їх зменшивши, — саме це й показує рядок фактичного кроку."
      },
      {
        "q": "Чи враховано зашивку?",
        "a": "Лише як площу. Скільки коштує ця площа, залежить від того, ставите ви дошку, сітку чи профнастил."
      }
    ],
    "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте вихідні дані."
  },
  "de": {
    "longDescription": "Schätzt einen geraden Zaunabschnitt aus Gesamtlänge und gewählter maximaler Feldbreite. Die Felderzahl wird aufgerundet, der tatsächliche Abstand verteilt die Felder gleichmäßig. Ein zusätzlicher Pfosten je Öffnung ist eine Konvention dieser Mengenabschätzung. Torbreiten, Positionen, Ecken, Lasten und Stützenaufbau sind nicht angegeben.",
    "howItWorks": "Felder n=⌈L/s⌉; Pfosten=n+1+g; tatsächlicher Abstand=L/n. Riegelmeter=n·s·r sind ein Ansatz für volle Lagerlängen statt der eingebauten Länge r·L. Bekleidungsfläche=L·H ohne Torabzug. L, s und H sind positiv und endlich, r ganzzahlig 1–5, g eine nichtnegative sichere ganze Zahl.",
    "howToUse": [
      "Trage die Gesamtlänge des Zauns ein.",
      "Trage die geplante Feldbreite zwischen den Pfosten ein.",
      "Trage die Höhe ein und wie viele Riegel jedes Feld trägt.",
      "Öffnungen werden gezählt; der zusätzliche Pfosten ist eine Mengenregel, kein Torplan."
    ],
    "example": "40 m in Feldern zu 2,5 m mit zwei Riegeln und einem Tor brauchen 18 Pfosten und 80 m Riegel.",
    "faq": [
      {
        "q": "Warum ein Pfosten mehr als Felder?",
        "a": "Weil Pfosten an den Enden der Felder stehen und nicht in der Mitte. Vier Felder haben fünf Pfosten, so wie vier Zaunelemente fünf Stützen brauchen."
      },
      {
        "q": "Warum bringt ein Tor einen Pfosten hinzu?",
        "a": "Das ist die beibehaltene Mengenregel: ein zusätzlicher Pfosten je eingegebener Öffnung. Der reale Plan kann eine andere Zahl benötigen; ohne Torbreiten und Positionen lässt sie sich nicht bestimmen."
      },
      {
        "q": "Welche Feldbreite soll ich nehmen?",
        "a": "Aus deiner Planung und den Angaben des gewählten Systems. Der Rechner legt keine allgemein sichere Spannweite fest und prüft Riegel weder auf Durchbiegung noch auf Festigkeit."
      },
      {
        "q": "Warum weicht der tatsächliche Abstand von der eingetragenen Feldbreite ab?",
        "a": "Weil die Länge selten glatt aufgeht. Die Felder werden gleich gemacht, indem sie leicht schrumpfen — genau das zeigt die Zeile zum tatsächlichen Abstand."
      },
      {
        "q": "Ist die Bekleidung enthalten?",
        "a": "Nur als Fläche. Was diese Fläche kostet, hängt davon ab, ob du Bretter, Gitter oder Profilblech anbringst."
      }
    ],
    "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
  },
  "es": {
    "longDescription": "Estima una valla recta a partir de la longitud total y el tamaño máximo de tramo elegido. Los tramos se redondean hacia arriba y el paso real los distribuye uniformemente. Un poste extra por hueco es una convención presupuestaria del modelo. No se indican anchos ni posiciones de puertas, esquinas, cargas o construcción de apoyos.",
    "howItWorks": "Tramos n=⌈L/s⌉; postes=n+1+g; paso real=L/n. Metros de travesaño=n·s·r: reserva de largos completos, no longitud instalada r·L. Superficie=L·H sin restar puertas. L, s y H son positivos y finitos; r es un entero 1–5 y g un entero seguro no negativo.",
    "howToUse": [
      "Introduce el recorrido total de la valla.",
      "Introduce el ancho de tramo que prevés entre postes.",
      "Introduce la altura y cuántos travesaños lleva cada tramo.",
      "Los huecos se cuentan; el poste extra es una regla presupuestaria, no un diseño de puerta."
    ],
    "example": "40 m en tramos de 2,5 m con dos travesaños y una puerta necesitan 18 postes y 80 m de travesaño.",
    "faq": [
      {
        "q": "¿Por qué hay un poste más que tramos?",
        "a": "Porque los postes van en los extremos de los tramos y no en medio. Cuatro tramos tienen cinco postes, igual que cuatro paneles de valla necesitan cinco apoyos."
      },
      {
        "q": "¿Por qué una puerta añade un poste?",
        "a": "Es la regla presupuestaria conservada: un poste extra por hueco introducido. El plano real puede necesitar otra cantidad; sin anchos y posiciones de puertas no se determina."
      },
      {
        "q": "¿Qué ancho de tramo debo usar?",
        "a": "Usa el proyecto y las especificaciones del sistema elegido. No se prescribe una luz universal segura ni se comprueban flecha o resistencia de travesaños."
      },
      {
        "q": "¿Por qué el paso real difiere del ancho de tramo que introduje?",
        "a": "Porque la longitud rara vez divide exacto. Los tramos se igualan encogiéndolos ligeramente, y eso es lo que muestra la línea del paso real."
      },
      {
        "q": "¿Incluye el cerramiento?",
        "a": "Solo como superficie. Lo que cuesta esa superficie depende de si colocas tablas, malla o chapa."
      }
    ],
    "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es', Partial<CalculatorCopy>>;
