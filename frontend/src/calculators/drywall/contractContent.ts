import type { CalculatorCopy } from '../../lib/platform/types';

// Actual 145 native body individually reviewed; scoped model and input corrections. Agent review is not human approval.
export const buildingWave13ContractContent = {
  "ru": {
    "longDescription": "Даёт предварительную смету листов гипсокартона, профиля и саморезов. Листы зависят от площади всех слоёв, размеров листа и выбранного запаса. Профиль и крепёж используют явно заданные грубые коэффициенты, а не схему конкретной системы. План раскроя, проёмы, длина стыков, требования огнестойкости и акустики не рассчитываются.",
    "howItWorks": "Площадь покупки B = A·n·(1+w/100); листов = ⌈B/(длина·ширина листа)⌉. n — целое от 1 до 3, w от 0 до 50 %. Профиль оценивается как A/s + A/(3 м), где s — заданный шаг в метрах. Саморезов = 60·число купленных листов: слои уже учтены в листах и второй раз не умножаются. Коэффициенты 3 м и 60 не подтверждают состав или монтаж системы.",
    "howToUse": [
      "Введите площадь одной поверхности; число слоёв задаётся отдельно.",
      "Укажите фактический формат листа, число слоёв и запас 0–50 %.",
      "Задайте шаг профиля и проверьте смету по схеме выбранной системы."
    ],
    "example": "40 м² в один слой листами 2,5 на 1,2 с запасом 10 % дают 15 листов.",
    "faq": [
      {
        "q": "Почему запас применяется к каждому слою?",
        "a": "В модели запас применяется к суммарной площади всех слоёв. Схема швов и реальный расход каждого слоя отдельно не рассчитываются; их проверяют по системе и раскладке."
      },
      {
        "q": "Насколько точно число профиля?",
        "a": "Это грубая оценка A/s + A/(3 м). Второй член — фиксированный запас модели, а не перемычки через каждый метр. Углы, проёмы, направляющие и раскладка стоек требуют отдельного плана."
      },
      {
        "q": "Почему шестьдесят саморезов на лист?",
        "a": "60 — сохранённый сметный коэффициент на каждый купленный лист, без нормативного обоснования. Например, 44 листа на два слоя дают 2640, а не 5280 саморезов. Реальный крепёж берут из документации системы."
      },
      {
        "q": "Всегда ли верен каркас с шагом 600 мм?",
        "a": "Нет. Шаг — ваш ввод, а не разрешение на монтаж. Даже отношение оценки A/s при шагах 600 и 400 мм не делает весь объём профиля ровно в 1,5 раза больше: остаётся дополнительный член A/3."
      },
      {
        "q": "Учтены ли шпаклёвка и лента?",
        "a": "Нет. Без геометрии раскладки здесь не известна длина швов, поэтому смеси, лента и их расход не рассчитываются."
      }
    ]
  },
  "en": {
    "longDescription": "Provides an initial plasterboard budget for sheets, profile and screws. Sheets depend on total area across all layers, sheet dimensions and chosen allowance. Profile and fasteners use explicit rough coefficients, not a specific system layout. Cutting plans, openings, joint lengths, fire performance and acoustic requirements are not calculated.",
    "howItWorks": "Purchased area B = A·n·(1+w/100); sheets = ⌈B/(sheet length·width)⌉. n is an integer from 1 to 3 and w ranges from 0 to 50%. Profile is estimated as A/s + A/(3 m), where s is the chosen spacing in metres. Screws = 60·purchased sheets: layers are already counted in sheets and are not multiplied again. The 3 m and 60 coefficients do not establish system components or installation requirements.",
    "howToUse": [
      "Enter one surface area; layers are specified separately.",
      "Enter actual sheet dimensions, layer count and an allowance of 0–50%.",
      "Specify profile spacing and check the budget against your chosen system layout."
    ],
    "example": "40 m² in one layer of 2.5 by 1.2 sheets with 10 % allowance comes to 15 sheets.",
    "faq": [
      {
        "q": "Why is the allowance applied per layer?",
        "a": "The model applies allowance to total area across all layers. Joint layout and each layer’s actual waste are not planned separately; check them against the system and layout."
      },
      {
        "q": "How exact is the profile figure?",
        "a": "It is a rough A/s + A/(3 m) estimate. The second term is a fixed model allowance, not noggins every metre. Corners, openings, tracks and stud layout need a separate plan."
      },
      {
        "q": "Why sixty screws per sheet?",
        "a": "60 is the retained budget coefficient per purchased sheet, without a normative basis. For example, 44 sheets across two layers give 2640 screws, not 5280. Actual fasteners come from the system documentation."
      },
      {
        "q": "Is the frame at 600 mm always right?",
        "a": "No. Spacing is your input, not installation approval. Even though A/s changes by a factor of 1.5 between 600 and 400 mm, the total profile estimate does not: it also contains A/3."
      },
      {
        "q": "Does this include filler and tape?",
        "a": "No. Joint length is unknown without a layout, so compound, tape and their quantities are not calculated."
      }
    ],
    "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
  },
  "uk": {
    "longDescription": "Дає попередню оцінку листів гіпсокартону, профілю та саморізів. Листи залежать від площі всіх шарів, формату листа й заданого запасу. Профіль і кріплення використовують явно задані грубі коефіцієнти, а не схему конкретної системи. Розкрій, прорізи, довжина стиків, вогнестійкість та акустика не розраховуються.",
    "howItWorks": "Площа покупки B = A·n·(1+w/100); листів = ⌈B/(довжина·ширина листа)⌉. n — ціле від 1 до 3, w від 0 до 50 %. Профіль оцінюється як A/s + A/(3 м), де s — заданий крок у метрах. Саморізів = 60·кількість куплених листів: шари вже враховані й удруге не множаться. Коефіцієнти 3 м і 60 не визначають склад чи монтаж системи.",
    "howToUse": [
      "Введіть площу однієї поверхні; число шарів задається окремо.",
      "Укажіть фактичний формат листа, число шарів і запас 0–50 %.",
      "Задайте крок профілю й перевірте оцінку за схемою обраної системи."
    ],
    "example": "40 м² в один шар листами 2,5 на 1,2 із запасом 10 % дають 15 листів.",
    "faq": [
      {
        "q": "Чому запас застосовується до кожного шару?",
        "a": "Модель застосовує запас до сумарної площі всіх шарів. Схема стиків і фактичні обрізки кожного шару окремо не плануються; їх перевіряють за системою й розкладкою."
      },
      {
        "q": "Наскільки точне число профілю?",
        "a": "Це груба оцінка A/s + A/(3 м). Другий доданок — фіксований запас моделі, а не перемички через кожен метр. Кути, прорізи, напрямні й розташування стійок потребують окремого плану."
      },
      {
        "q": "Чому шістдесят саморізів на лист?",
        "a": "60 — збережений кошторисний коефіцієнт на кожен куплений лист, без нормативного обґрунтування. Наприклад, 44 листи на два шари дають 2640, а не 5280 саморізів. Фактичне кріплення визначає документація системи."
      },
      {
        "q": "Чи завжди правильний каркас із кроком 600 мм?",
        "a": "Ні. Крок — ваш ввід, а не дозвіл на монтаж. Хоча A/s для кроків 600 і 400 мм змінюється у 1,5 раза, загальна оцінка профілю містить також A/3 і не має такого самого відношення."
      },
      {
        "q": "Чи враховано шпаклівку і стрічку?",
        "a": "Ні. Без геометрії розкладки довжина швів невідома, тому суміші, стрічка та їхня витрата не розраховуються."
      }
    ],
    "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте вихідні дані."
  },
  "de": {
    "longDescription": "Liefert eine vorläufige Mengenübersicht für Gipskartonplatten, Profile und Schrauben. Die Plattenzahl folgt aus der Fläche aller Lagen, dem Format und dem gewählten Zuschlag. Profile und Befestigungen verwenden offengelegte grobe Ansätze statt eines konkreten Systemplans. Zuschnitt, Öffnungen, Fugenlängen, Brandschutz und Akustik werden nicht berechnet.",
    "howItWorks": "Kauffläche B = A·n·(1+w/100); Platten = ⌈B/(Plattenlänge·Breite)⌉. n ist eine ganze Zahl von 1 bis 3, w liegt zwischen 0 und 50 %. Profile werden als A/s + A/(3 m) geschätzt, s ist der gewählte Abstand in Metern. Schrauben = 60·gekaufte Platten: Die Lagen sind darin bereits enthalten. Die Ansätze 3 m und 60 bestimmen weder Systemaufbau noch Montageanforderungen.",
    "howToUse": [
      "Gib die Fläche einer Oberfläche ein; Lagen werden separat angegeben.",
      "Trage das tatsächliche Plattenformat, die Lagenzahl und 0–50 % Zuschlag ein.",
      "Gib den Profilabstand an und prüfe die Mengen anhand des gewählten Systemplans."
    ],
    "example": "40 m² in einer Lage mit Platten zu 2,5 mal 1,2 und 10 % Zuschlag ergeben 15 Platten.",
    "faq": [
      {
        "q": "Warum gilt der Zuschlag je Lage?",
        "a": "Das Modell wendet den Zuschlag auf die Gesamtfläche aller Lagen an. Fugenanordnung und tatsächlicher Verschnitt jeder Lage werden nicht getrennt geplant; prüfe sie anhand von System und Verlegeplan."
      },
      {
        "q": "Wie genau ist die Zahl für die Profile?",
        "a": "Es ist eine grobe Schätzung A/s + A/(3 m). Der zweite Term ist ein fester Modellansatz, keine Querstücke je Meter. Ecken, Öffnungen, Schienen und Ständeranordnung benötigen einen eigenen Plan."
      },
      {
        "q": "Warum sechzig Schrauben je Platte?",
        "a": "60 ist der beibehaltene Mengenansatz je gekaufter Platte ohne normative Grundlage. 44 Platten für zwei Lagen ergeben etwa 2640 statt 5280 Schrauben. Der tatsächliche Bedarf folgt aus der Systemdokumentation."
      },
      {
        "q": "Ist ein Achsabstand von 600 mm immer richtig?",
        "a": "Nein. Der Abstand ist eine Eingabe, keine Montagefreigabe. A/s wird beim Wechsel von 600 auf 400 mm um den Faktor 1,5 größer; die gesamte Profilmenge enthält aber zusätzlich A/3."
      },
      {
        "q": "Sind Spachtelmasse und Bewehrungsstreifen enthalten?",
        "a": "Nein. Ohne Verlegeplan ist die Fugenlänge unbekannt; Spachtelmasse, Streifen und deren Mengen werden nicht berechnet."
      }
    ],
    "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
  },
  "es": {
    "longDescription": "Ofrece un presupuesto inicial de placas, perfilería y tornillos. Las placas dependen de la superficie de todas las capas, el formato y el margen elegido. La perfilería y las fijaciones usan coeficientes aproximados explícitos, no el plano de un sistema concreto. No calcula despieces, huecos, juntas, resistencia al fuego ni prestaciones acústicas.",
    "howItWorks": "Superficie de compra B = A·n·(1+w/100); placas = ⌈B/(largo·ancho de placa)⌉. n es un entero de 1 a 3 y w va de 0 a 50%. La perfilería se estima como A/s + A/(3 m), con s en metros. Tornillos = 60·placas compradas: las capas ya están incluidas y no se multiplican otra vez. Los coeficientes 3 m y 60 no determinan la composición ni el montaje del sistema.",
    "howToUse": [
      "Introduce la superficie de una cara; las capas se indican aparte.",
      "Indica el formato real, las capas y un margen de 0–50%.",
      "Especifica la separación de perfiles y contrasta el presupuesto con el sistema elegido."
    ],
    "example": "40 m² en una capa con placas de 2,5 por 1,2 y un 10 % de margen salen 15 placas.",
    "faq": [
      {
        "q": "¿Por qué el margen se aplica por capa?",
        "a": "El modelo aplica el margen a la superficie total de todas las capas. No planifica aparte juntas ni recortes de cada capa; contrástalos con el sistema y el despiece."
      },
      {
        "q": "¿Qué exactitud tiene la cifra de perfilería?",
        "a": "Es una estimación aproximada A/s + A/(3 m). El segundo término es un margen fijo del modelo, no travesaños cada metro. Esquinas, huecos, canales y montantes requieren un plano propio."
      },
      {
        "q": "¿Por qué sesenta tornillos por placa?",
        "a": "60 es el coeficiente presupuestario conservado por placa comprada, sin fundamento normativo. Por ejemplo, 44 placas en dos capas dan 2640 tornillos, no 5280. Las fijaciones reales se consultan en la documentación del sistema."
      },
      {
        "q": "¿La estructura a 600 mm es siempre lo correcto?",
        "a": "No. La separación es un dato, no una autorización de montaje. A/s aumenta 1,5 veces al pasar de 600 a 400 mm, pero el total también incluye A/3 y no mantiene esa misma proporción."
      },
      {
        "q": "¿Incluye la pasta y la cinta de juntas?",
        "a": "No. Sin el despiece se desconoce la longitud de juntas, por lo que no se calculan pasta, cinta ni sus cantidades."
      }
    ],
    "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es', Partial<CalculatorCopy>>;
