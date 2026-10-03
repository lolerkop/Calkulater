import type { CalculatorCopy } from '../../lib/platform/types';

type Body = Pick<CalculatorCopy, 'shortDescription' | 'seoDescription' | 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

// Subject-specific retained and amended copy; source and calculation limits are explicit.
export const contractContent: Record<'ru'|'en'|'uk'|'de'|'es', Body> = {
  "ru": {
    "longDescription": "Открытый ремень огибает два шкива без перекрещивания. Калькулятор оценивает его расчётную длину по диаметрам и расстоянию между осями, отдельно показывает угол обхвата меньшего шкива и отношение большего диаметра к меньшему. Формула длины приближённая: она точна для равных шкивов, а при большой разности диаметров относительно межосевого расстояния заметнее отличается от точной геометрии касательных. Результат помогает сравнить варианты компоновки, но сам по себе не выбирает изделие или натяжение.",
    "howToUse": [
      "Введите положительное расстояние между осями и два расчётных диаметра в миллиметрах.",
      "Порядок диаметров не меняет длину; расчёт сам выбирает меньший для угла обхвата.",
      "Проверьте зазор: C должен быть больше полусуммы диаметров.",
      "Сопоставьте расчётную длину с каталогом выбранного ремня, допустимым диапазоном регулировки и требованиями производителя."
    ],
    "howItWorks": "L ≈ 2C + π(D₁+D₂)/2 + (D₂−D₁)²/(4C), все размеры в мм. Для обхвата α = 180° − 2·arcsin(|D₂−D₁|/(2C))·180°/π. При D₁ = D₂ = D длина равна 2C + πD, обхват — 180°. Здесь требуется C > (D₁+D₂)/2: шкивы не должны касаться или пересекаться. Это строже условия существования касательных C > |D₂−D₁|/2.",
    "example": "При C = 300 мм и диаметрах 100 и 200 мм приближённая длина равна 1079,57 мм, обхват малого шкива — 160,81°. Точная идеальная траектория касательных дала бы 1079,59 мм. При равных диаметрах 150 мм и C = 500 мм обе формулы дают 1471,24 мм.",
    "faq": [
      {
        "q": "Почему нужна поправка на разность диаметров?",
        "a": "Разные диаметры меняют углы касательных и длины дуг обхвата одновременно. Член (D₂−D₁)²/(4C) — приближение их общего вклада, а не точная длина прямых ветвей. Для равных диаметров он равен нулю."
      },
      {
        "q": "Чем опасен малый угол обхвата?",
        "a": "Меньший обхват влияет на доступное сцепление или число зубьев в зацеплении, но универсальной границы 120° для всех ремней нет. Допустимую нагрузку и необходимость ролика определяют по типу передачи и данным производителя."
      },
      {
        "q": "Что делать, если стандартной длины нет?",
        "a": "Выберите каталожный размер, который совместим с допустимой регулировкой межосевого расстояния и натяжением. Ближайший размер может быть меньше или больше расчётного: правило «всегда брать длиннее» не универсально."
      },
      {
        "q": "Годится ли расчёт для зубчатого ремня?",
        "a": "Оценивать геометрию можно по расчётным диаметрам. Для зубчатого ремня длина равна целому числу шагов; выбор числа зубьев, зацепления и допустимой нагрузки сверяют с каталогом конкретной системы."
      }
    ],
    "shortDescription": "Приближённая длина открытого ремня по межосевому расстоянию и расчётным диаметрам шкивов.",
    "seoDescription": "Оцените длину открытого ремня по приближённой формуле, межосевому расстоянию и расчётным диаметрам двух шкивов.",
    "disclaimer": "Приближённая длина открытой двухшкивной передачи без роликов и перекрещивания. Расчёт не моделирует толщину, растяжение, натяжение, проскальзывание и допустимую мощность ремня."
  },
  "en": {
    "longDescription": "An open belt runs around two pulleys without crossing. This calculator estimates its pitch-path length from the diameters and centre distance, then shows the smaller pulley’s wrap angle and the larger-to-smaller diameter ratio. The length formula is an approximation: it is exact for equal pulleys and differs more from exact tangent geometry as the diameter difference becomes large relative to the centre distance. Use it to compare layouts; a numerical length alone does not select a belt or its tension.",
    "howToUse": [
      "Enter a positive centre distance and two pitch diameters in millimetres.",
      "Diameter order does not change the length; the smaller diameter is selected for the wrap angle.",
      "Check clearance: C must exceed half the sum of the diameters.",
      "Compare the estimate with the selected belt’s catalogue, adjustment travel and manufacturer requirements."
    ],
    "howItWorks": "L ≈ 2C + π(D₁+D₂)/2 + (D₂−D₁)²/(4C), with every input in mm. Wrap α = 180° − 2·arcsin(|D₂−D₁|/(2C))·180°/π. Equal diameters D give L = 2C + πD and 180° wrap. This tool requires C > (D₁+D₂)/2 so the pulleys neither touch nor overlap. That clearance condition is stricter than tangent existence, C > |D₂−D₁|/2.",
    "example": "For C = 300 mm and diameters of 100 and 200 mm, the approximate length is 1079.57 mm and the smaller pulley’s wrap is 160.81°. Exact ideal tangent geometry would give 1079.59 mm. Equal 150 mm diameters at C = 500 mm give 1471.24 mm with either formula.",
    "faq": [
      {
        "q": "Why the correction for unequal diameters?",
        "a": "Unequal diameters change both tangent angles and wrapped arc lengths. The term (D₂−D₁)²/(4C) approximates their combined contribution; it is not the exact straight-run length. It vanishes for equal diameters."
      },
      {
        "q": "Why is a small wrap angle a problem?",
        "a": "Less wrap affects frictional grip or the number of teeth in mesh, but 120° is not a universal limit for every belt. Load capacity and any idler requirement depend on the drive type and manufacturer data."
      },
      {
        "q": "What if no standard length matches?",
        "a": "Choose a catalogue size compatible with the permitted centre-distance adjustment and tension. The nearest workable size may be shorter or longer than the estimate; always rounding up is not a general rule."
      },
      {
        "q": "Does this work for a toothed belt?",
        "a": "Pitch diameters can be used to estimate the path geometry. A timing belt’s length is an integer number of pitches; tooth count, teeth in mesh and load rating must be checked against the specific system’s catalogue."
      }
    ],
    "shortDescription": "Approximate open-belt length from centre distance and pulley pitch diameters.",
    "seoDescription": "Estimate open-belt length using the approximation, centre distance and pitch diameters of two pulleys.",
    "disclaimer": "Approximate length of an open two-pulley drive without idlers or crossing. Belt thickness, stretch, tension, slip and rated power are not modelled."
  },
  "uk": {
    "longDescription": "Відкритий пас огинає два шківи без перехрещення. Калькулятор оцінює його розрахункову довжину за діаметрами та міжосьовою відстанню, окремо показує кут обхвату меншого шківа й відношення більшого діаметра до меншого. Формула довжини наближена: для рівних шківів вона точна, а за великої різниці діаметрів відносно міжосьової відстані помітніше відрізняється від точної геометрії дотичних. Це засіб порівняння компонувань; сама довжина не визначає виріб чи натяг.",
    "howToUse": [
      "Уведіть додатну міжосьову відстань та два розрахункові діаметри в міліметрах.",
      "Порядок діаметрів не впливає на довжину; для обхвату розрахунок обирає менший.",
      "Перевірте зазор: C має бути більшим за півсуму діаметрів.",
      "Зіставте оцінку з каталогом обраного паса, діапазоном регулювання та вимогами виробника."
    ],
    "howItWorks": "L ≈ 2C + π(D₁+D₂)/2 + (D₂−D₁)²/(4C), усі розміри в мм. Кут обхвату α = 180° − 2·arcsin(|D₂−D₁|/(2C))·180°/π. За D₁ = D₂ = D маємо L = 2C + πD та обхват 180°. Тут потрібне C > (D₁+D₂)/2: шківи не повинні торкатися чи перетинатися. Це сильніше за умову існування дотичних C > |D₂−D₁|/2.",
    "example": "За C = 300 мм і діаметрів 100 та 200 мм наближена довжина становить 1079,57 мм, кут обхвату малого шківа — 160,81°. Точна ідеальна траєкторія дотичних дала б 1079,59 мм. Рівні діаметри 150 мм за C = 500 мм дають 1471,24 мм за обома формулами.",
    "faq": [
      {
        "q": "Навіщо потрібна поправка на різницю діаметрів?",
        "a": "Різні діаметри змінюють і кути дотичних, і довжини дуг обхвату. Доданок (D₂−D₁)²/(4C) наближує їхній спільний внесок, а не є точною довжиною прямих віток. Для рівних діаметрів він нульовий."
      },
      {
        "q": "Чим небезпечний малий кут обхвату?",
        "a": "Менший обхват впливає на тертя або кількість зубців у зачепленні, але 120° не є універсальною межею для всіх пасів. Навантаження й потребу в ролику визначають за типом передачі та даними виробника."
      },
      {
        "q": "Що робити, якщо стандартної довжини немає?",
        "a": "Оберіть каталожний розмір, сумісний із допустимим регулюванням міжосьової відстані та натягом. Придатний розмір може бути меншим або більшим за розрахунковий; правило «завжди довший» не універсальне."
      },
      {
        "q": "Чи годиться розрахунок для зубчастого паса?",
        "a": "Геометрію можна оцінити за розрахунковими діаметрами. Довжина зубчастого паса дорівнює цілому числу кроків; кількість зубців, зачеплення та допустиме навантаження звіряють із каталогом конкретної системи."
      },
      {
        "q": "Який діаметр брати — зовнішній чи розрахунковий?",
        "a": "Розрахунковий, тобто по середній лінії паса. Для клинового паса вона лежить усередині канавки, а не по кромці шківа, і різниця дає помітну похибку на довжині."
      }
    ],
    "shortDescription": "Наближена довжина відкритого паса за міжосьовою відстанню та розрахунковими діаметрами шківів.",
    "seoDescription": "Оцініть довжину відкритого паса за наближеною формулою, міжосьовою відстанню та розрахунковими діаметрами шківів.",
    "disclaimer": "Наближена довжина відкритої двошківної передачі без роликів і перехрещення. Товщина, розтягнення, натяг, проковзування та допустима потужність паса не моделюються."
  },
  "de": {
    "longDescription": "Ein offener Riemen läuft ohne Kreuzung um zwei Scheiben. Der Rechner schätzt seine Wirklänge aus den Durchmessern und dem Achsabstand und zeigt außerdem den Umschlingungswinkel der kleineren Scheibe sowie das Verhältnis des größeren zum kleineren Durchmesser. Die Längenformel ist eine Näherung: Bei gleichen Scheiben ist sie exakt; bei großer Durchmesserdifferenz im Verhältnis zum Achsabstand weicht sie stärker von der genauen Tangentengeometrie ab. Damit lassen sich Anordnungen vergleichen; allein die Länge legt weder den Riemen noch seine Spannung fest.",
    "howToUse": [
      "Gib einen positiven Achsabstand und zwei Wirkdurchmesser in Millimetern ein.",
      "Die Durchmesserreihenfolge ändert die Länge nicht; für die Umschlingung wird die kleinere Scheibe gewählt.",
      "Prüfe den Abstand: C muss größer als die halbe Durchmessersumme sein.",
      "Vergleiche die Schätzung mit dem Riemenkatalog, dem Verstellweg und den Herstellervorgaben."
    ],
    "howItWorks": "L ≈ 2C + π(D₁+D₂)/2 + (D₂−D₁)²/(4C), alle Eingaben in mm. Umschlingung α = 180° − 2·arcsin(|D₂−D₁|/(2C))·180°/π. Gleiche Durchmesser D ergeben L = 2C + πD und 180° Umschlingung. Hier gilt C > (D₁+D₂)/2, damit sich die Scheiben weder berühren noch überlappen. Das ist strenger als die Bedingung für Tangenten C > |D₂−D₁|/2.",
    "example": "Bei C = 300 mm und Durchmessern von 100 und 200 mm beträgt die Näherungslänge 1079,57 mm, die Umschlingung der kleinen Scheibe 160,81°. Die genaue ideale Tangentengeometrie ergäbe 1079,59 mm. Gleiche Durchmesser von 150 mm bei C = 500 mm ergeben mit beiden Formeln 1471,24 mm.",
    "faq": [
      {
        "q": "Wozu die Korrektur für ungleiche Durchmesser?",
        "a": "Ungleiche Durchmesser ändern sowohl die Tangentenwinkel als auch die umschlungenen Bogenlängen. Der Term (D₂−D₁)²/(4C) nähert deren gemeinsamen Beitrag an; er ist nicht die genaue Länge der geraden Trume. Bei gleichen Durchmessern entfällt er."
      },
      {
        "q": "Warum ist ein kleiner Umschlingungswinkel ein Problem?",
        "a": "Weniger Umschlingung beeinflusst den Reibschluss oder die Zahl der eingreifenden Zähne; 120° ist jedoch keine allgemeine Grenze für alle Riemen. Belastbarkeit und eine nötige Spannrolle ergeben sich aus Antriebsart und Herstellerdaten."
      },
      {
        "q": "Was, wenn keine Normlänge passt?",
        "a": "Wähle eine Kataloglänge, die zum zulässigen Achsabstand und Verstellweg passt. Sie kann kürzer oder länger als die Schätzung sein; grundsätzlich aufzurunden ist keine allgemeine Regel."
      },
      {
        "q": "Gilt das auch für einen Zahnriemen?",
        "a": "Mit Wirkdurchmessern lässt sich die Bahngeometrie schätzen. Bei Zahnriemen ist die Länge ein ganzzahliges Vielfaches der Teilung; Zähnezahl, Eingriff und Belastbarkeit müssen zum Katalog des konkreten Systems passen."
      }
    ],
    "shortDescription": "Angenäherte Länge eines offenen Riemens aus Achsabstand und Wirkdurchmessern.",
    "seoDescription": "Schätze die Länge eines offenen Riemens mit der Näherungsformel aus Achsabstand und Wirkdurchmessern zweier Scheiben.",
    "disclaimer": "Näherungslänge eines offenen Zweischeibenantriebs ohne Rollen und Kreuzung. Riemendicke, Dehnung, Spannung, Schlupf und zulässige Leistung werden nicht berechnet."
  },
  "es": {
    "longDescription": "Una correa abierta rodea dos poleas sin cruzarse. La calculadora estima su longitud primitiva a partir de los diámetros y la distancia entre ejes y muestra el ángulo de contacto de la polea menor y la relación del diámetro mayor al menor. La fórmula de longitud es aproximada: es exacta con poleas iguales y se aparta más de la geometría exacta de las tangentes cuando la diferencia de diámetros es grande frente a la distancia entre ejes. Sirve para comparar disposiciones; la longitud por sí sola no elige la correa ni su tensión.",
    "howToUse": [
      "Introduce una distancia positiva entre ejes y dos diámetros primitivos en milímetros.",
      "El orden de los diámetros no cambia la longitud; se elige el menor para el ángulo de contacto.",
      "Comprueba la separación: C debe superar la semisuma de diámetros.",
      "Compara la estimación con el catálogo de la correa, el recorrido de ajuste y las instrucciones del fabricante."
    ],
    "howItWorks": "L ≈ 2C + π(D₁+D₂)/2 + (D₂−D₁)²/(4C), con todas las entradas en mm. El contacto es α = 180° − 2·arcsen(|D₂−D₁|/(2C))·180°/π. Diámetros iguales D dan L = 2C + πD y contacto de 180°. Aquí se exige C > (D₁+D₂)/2 para que las poleas no se toquen ni solapen. Es más estricto que la existencia de tangentes, C > |D₂−D₁|/2.",
    "example": "Con C = 300 mm y diámetros de 100 y 200 mm, la longitud aproximada es 1079,57 mm y el contacto de la polea menor, 160,81°. La trayectoria ideal exacta daría 1079,59 mm. Diámetros iguales de 150 mm con C = 500 mm dan 1471,24 mm con ambas fórmulas.",
    "faq": [
      {
        "q": "¿Por qué la corrección por diámetros desiguales?",
        "a": "Diámetros desiguales cambian tanto los ángulos de las tangentes como los arcos de contacto. El término (D₂−D₁)²/(4C) aproxima su efecto conjunto; no es la longitud exacta de los tramos rectos. Desaparece con diámetros iguales."
      },
      {
        "q": "¿Por qué es un problema un ángulo de abrace pequeño?",
        "a": "Un menor contacto afecta al rozamiento o al número de dientes engranados, pero 120° no es un límite universal para todas las correas. La carga admisible y la necesidad de tensor dependen del tipo de transmisión y del fabricante."
      },
      {
        "q": "¿Y si ninguna longitud normalizada encaja?",
        "a": "Elige una longitud de catálogo compatible con el ajuste permitido entre ejes y la tensión. Puede ser menor o mayor que la estimación; redondear siempre hacia arriba no es una regla general."
      },
      {
        "q": "¿Sirve para una correa dentada?",
        "a": "Los diámetros primitivos permiten estimar la geometría de la trayectoria. La longitud de una correa dentada es un número entero de pasos; dientes, engrane y carga admisible se comprueban en el catálogo del sistema concreto."
      }
    ],
    "shortDescription": "Longitud aproximada de una correa abierta a partir de la distancia entre ejes y los diámetros primitivos.",
    "seoDescription": "Estima la longitud de una correa abierta con la fórmula aproximada, la distancia entre ejes y los diámetros primitivos de las poleas.",
    "disclaimer": "Longitud aproximada de una transmisión abierta de dos poleas sin rodillos ni cruce. No se modelan espesor, estiramiento, tensión, deslizamiento ni potencia admisible."
  }
};
