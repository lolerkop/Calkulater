import type { CalculatorCopy } from '../../lib/platform/types';

// Actual 145 native body individually reviewed; scoped model and input corrections. Agent review is not human approval.
export const buildingWave13ContractContent = {
  "ru": {
    "longDescription": "Рассчитывает сухую смесь по площади стены, толщине слоя и вашему расходу на 1 мм. Площадь можно ввести готовой или получить из длины и высоты. Значение 8,5 в поле — условный пользовательский расход, а не типичная норма гипсовой штукатурки: расход производителя на слой 10 мм нужно сначала разделить на 10.",
    "howItWorks": "A = длина·высота или введённая площадь; масса = A·t·c, где A в м², t в мм, c в кг/м²/мм. Мешков = ⌈масса/масса мешка⌉; расход на м² = t·c. Активные размеры, толщина, расход и масса мешка положительны и конечны. Округление мешков вверх использует десятичные значения без отбрасывания малого положительного остатка.",
    "howToUse": [
      "Выберите готовую площадь или положительные длину и высоту стены.",
      "Введите толщину в мм и переведите расход упаковки именно на 1 мм.",
      "Укажите массу мешка; проёмы, откосы и выбранный запас учитывайте в площади или отдельной смете."
    ],
    "example": "С сохранённым условным c = 8,5 кг/м²/мм площадь 20 м² при 10 мм даёт 1700 кг и 57 мешков по 30 кг. Это не норма КНАУФ-Ротбанд. Для его заявленных примерно 8,5 кг/м² на 10 мм ввод c = 0,85 даёт 170 кг и 6 таких мешков; это оценка по указанному расходу.",
    "faq": [
      {
        "q": "Откуда брать расход смеси?",
        "a": "Из инструкции конкретного продукта, вместе с толщиной, к которой он относится. Если указано c₀ кг/м² для t₀ мм, в поле вводится c₀/t₀."
      },
      {
        "q": "Почему 8,5 на 10 мм нельзя вводить как 8,5 на 1 мм?",
        "a": "Это десятикратное различие единиц. Поле требует расход на 1 мм. Сохранённое 8,5 — условный ввод; калькулятор не выбирает марку и не исправляет его автоматически."
      },
      {
        "q": "Какую толщину слоя брать?",
        "a": "Из измерений и допустимых условий выбранного продукта. Простое среднее минимального и максимального зазора не гарантирует среднюю толщину по площади."
      },
      {
        "q": "Учитываются ли откосы и проёмы?",
        "a": "Автоматически нет. Вычтите площади проёмов и добавьте площади откосов; грунтовка, армирование и технологические потери отдельно не считаются."
      }
    ]
  },
  "en": {
    "longDescription": "Calculates dry mix from wall area, layer thickness and your consumption per 1 mm. Enter area directly or derive it from length and height. The default 8.5 is a hypothetical user consumption, not a typical gypsum-plaster rate: a manufacturer value for a 10 mm layer must first be divided by 10.",
    "howItWorks": "A = length·height or supplied area; mass = A·t·c, with A in m², t in mm and c in kg/m²/mm. Bags = ⌈mass/bag mass⌉; consumption per m² = t·c. Active dimensions, thickness, consumption and bag mass are positive and finite. Upward bag rounding uses decimal values without deleting a small positive remainder.",
    "howToUse": [
      "Choose supplied area or positive wall length and height.",
      "Enter thickness in mm and convert the packaging consumption specifically to 1 mm.",
      "Enter bag mass; account for openings, reveals and chosen allowance in the area or a separate budget."
    ],
    "example": "With the retained hypothetical c = 8.5 kg/m²/mm, 20 m² at 10 mm gives 1700 kg and 57 bags of 30 kg. This is not the KNAUF Rotband rate. Its stated approximate 8.5 kg/m² at 10 mm means c = 0.85, giving 170 kg and 6 such bags, estimated from that stated consumption.",
    "faq": [
      {
        "q": "Where does the consumption figure come from?",
        "a": "Use the specific product instructions and the thickness to which the figure applies. If c₀ kg/m² is given for t₀ mm, enter c₀/t₀."
      },
      {
        "q": "Why is 8.5 at 10 mm different from 8.5 per 1 mm?",
        "a": "The unit basis differs by a factor of ten. This field requires consumption per 1 mm. The retained 8.5 is hypothetical; the calculator neither selects a product nor corrects it automatically."
      },
      {
        "q": "How should I choose layer thickness?",
        "a": "Use measurements and the selected product limits. Averaging the smallest and largest gap does not guarantee the area-weighted mean thickness."
      },
      {
        "q": "Are openings and reveals included?",
        "a": "Not automatically. Subtract opening areas and add reveals; primer, reinforcement and process losses are not separately calculated."
      }
    ],
    "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
  },
  "uk": {
    "longDescription": "Розраховує суху суміш за площею стіни, товщиною шару та вашою витратою на 1 мм. Площу можна ввести або отримати з довжини й висоти. Типове поле 8,5 — умовна користувацька витрата, а не норма гіпсової штукатурки: показник виробника на 10 мм спочатку ділять на 10.",
    "howItWorks": "A = довжина·висота або введена площа; маса = A·t·c, де A у м², t у мм, c у кг/м²/мм. Мішків = ⌈маса/маса мішка⌉; витрата на м² = t·c. Активні розміри, товщина, витрата та маса мішка додатні й скінченні. Округлення вгору використовує десяткові значення без відкидання малого додатного залишку.",
    "howToUse": [
      "Оберіть готову площу або додатні довжину й висоту стіни.",
      "Введіть товщину в мм і переведіть витрату з упаковки саме на 1 мм.",
      "Укажіть масу мішка; прорізи, укоси та запас врахуйте в площі або окремій оцінці."
    ],
    "example": "За збереженого умовного c = 8,5 кг/м²/мм площа 20 м² при 10 мм дає 1700 кг і 57 мішків по 30 кг. Це не витрата КНАУФ-Ротбанд. Його заявлені приблизно 8,5 кг/м² на 10 мм означають c = 0,85, тобто 170 кг і 6 таких мішків за вказаною витратою.",
    "faq": [
      {
        "q": "Де взяти витрату суміші?",
        "a": "З інструкції конкретного продукту разом із товщиною, якої стосується число. Якщо c₀ кг/м² задано для t₀ мм, вводьте c₀/t₀."
      },
      {
        "q": "Чому 8,5 на 10 мм не дорівнює 8,5 на 1 мм?",
        "a": "Основа одиниці відрізняється вдесятеро. Поле потребує витрати на 1 мм. Збережене 8,5 — умовний ввід; калькулятор не обирає марку й не виправляє його автоматично."
      },
      {
        "q": "Яку товщину шару задавати?",
        "a": "З вимірювань і допустимих умов обраного продукту. Середнє мінімального та максимального зазору не гарантує середньої товщини за площею."
      },
      {
        "q": "Чи враховано прорізи й укоси?",
        "a": "Автоматично ні. Відніміть площі прорізів і додайте площі укосів; ґрунтовка, армування й технологічні втрати окремо не розраховуються."
      }
    ],
    "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
  },
  "de": {
    "longDescription": "Berechnet Trockenmörtel aus Wandfläche, Schichtdicke und deinem Verbrauch je 1 mm. Die Fläche wird direkt oder über Länge und Höhe angegeben. Der voreingestellte Wert 8,5 ist ein hypothetischer Verbrauch und kein typischer Gipsputzwert: Eine Herstellerangabe für 10 mm muss zuerst durch 10 geteilt werden.",
    "howItWorks": "A = Länge·Höhe oder eingegebene Fläche; Masse = A·t·c, mit A in m², t in mm und c in kg/m²/mm. Säcke = ⌈Masse/Sackmasse⌉; Verbrauch je m² = t·c. Aktive Maße, Dicke, Verbrauch und Sackmasse sind positiv und endlich. Aufgerundet wird mit dezimalen Werten, ohne einen kleinen positiven Rest zu entfernen.",
    "howToUse": [
      "Wähle eine bekannte Fläche oder positive Wandlänge und -höhe.",
      "Gib die Dicke in mm ein und rechne den Verpackungsverbrauch ausdrücklich auf 1 mm um.",
      "Trage die Sackmasse ein; Öffnungen, Laibungen und Reserven berücksichtigst du über die Fläche oder separat."
    ],
    "example": "Mit dem beibehaltenen hypothetischen c = 8,5 kg/m²/mm ergeben 20 m² bei 10 mm 1700 kg und 57 Säcke à 30 kg. Das ist nicht der Verbrauch von KNAUF Rotband. Die angegebenen ungefähr 8,5 kg/m² bei 10 mm bedeuten c = 0,85: 170 kg und 6 solche Säcke als Verbrauchsschätzung.",
    "faq": [
      {
        "q": "Woher kommt der Verbrauchswert?",
        "a": "Aus der Anleitung des konkreten Produkts einschließlich der zugehörigen Dicke. Bei c₀ kg/m² für t₀ mm trägst du c₀/t₀ ein."
      },
      {
        "q": "Warum sind 8,5 bei 10 mm nicht 8,5 je 1 mm?",
        "a": "Die Einheitsbasis unterscheidet sich um den Faktor zehn. Das Feld verlangt Verbrauch je 1 mm. Der beibehaltene Wert 8,5 ist hypothetisch; der Rechner wählt kein Produkt und korrigiert ihn nicht automatisch."
      },
      {
        "q": "Welche Schichtdicke soll ich verwenden?",
        "a": "Aus Messungen und den zulässigen Bedingungen des Produkts. Der Mittelwert aus kleinstem und größtem Abstand garantiert keine flächengewichtete mittlere Dicke."
      },
      {
        "q": "Sind Öffnungen und Laibungen enthalten?",
        "a": "Nicht automatisch. Ziehe Öffnungen ab und addiere Laibungen; Grundierung, Bewehrung und Arbeitsverluste werden nicht separat berechnet."
      }
    ],
    "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
  },
  "es": {
    "longDescription": "Calcula mezcla seca con la superficie, el espesor y tu consumo por 1 mm. Introduce la superficie directamente o mediante largo y alto. El valor inicial 8,5 es un consumo hipotético, no una tasa típica de yeso: una cifra del fabricante para 10 mm debe dividirse primero entre 10.",
    "howItWorks": "A = largo·alto o superficie introducida; masa = A·t·c, con A en m², t en mm y c en kg/m²/mm. Sacos = ⌈masa/masa del saco⌉; consumo por m² = t·c. Las dimensiones activas, espesor, consumo y masa del saco son positivos y finitos. Se redondea hacia arriba con valores decimales sin eliminar un resto positivo pequeño.",
    "howToUse": [
      "Elige la superficie conocida o largo y alto positivos.",
      "Introduce el espesor en mm y convierte el consumo del envase específicamente a 1 mm.",
      "Indica la masa del saco; incluye huecos, mochetas y margen en la superficie o en otro presupuesto."
    ],
    "example": "Con el c hipotético conservado de 8,5 kg/m²/mm, 20 m² a 10 mm dan 1700 kg y 57 sacos de 30 kg. No es el consumo de KNAUF Rotband. Sus aproximadamente 8,5 kg/m² a 10 mm corresponden a c = 0,85: 170 kg y 6 sacos, como estimación según ese consumo.",
    "faq": [
      {
        "q": "¿De dónde sale el consumo de mezcla?",
        "a": "De las instrucciones del producto concreto y del espesor al que se refiere. Si c₀ kg/m² corresponde a t₀ mm, introduce c₀/t₀."
      },
      {
        "q": "¿Por qué 8,5 a 10 mm no equivale a 8,5 por 1 mm?",
        "a": "La base de la unidad difiere por un factor de diez. El campo exige consumo por 1 mm. El 8,5 conservado es hipotético; la calculadora no elige producto ni lo corrige automáticamente."
      },
      {
        "q": "¿Qué espesor debo introducir?",
        "a": "De las mediciones y los límites del producto. La media del hueco mínimo y máximo no garantiza el espesor medio ponderado por superficie."
      },
      {
        "q": "¿Se incluyen huecos y mochetas?",
        "a": "No automáticamente. Resta los huecos y añade las mochetas; no se calculan aparte imprimación, refuerzo ni pérdidas de aplicación."
      }
    ],
    "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es', Partial<CalculatorCopy>>;
