import type { CalculatorCopy } from '../../lib/platform/types';
// Individually read actual immutable145 body; agent-authored amendment is not human approval.
export const buildingWave16ContractContent = {
  "ru": {
    "longDescription": "Настоящий вопрос в магазине звучит не «сколько миллилитров», а «хватит ли одного картриджа». Поэтому рядом с объёмом стоит строка, сколько метров шва даёт один картридж: при сечении шесть на шесть картридж 310 мл проходит около восьми с половиной метров, а при десять на восемь — уже меньше четырёх. Арифметика удобная: миллиметр на миллиметр на метр даёт ровно один миллилитр.",
    "howItWorks": "Прямоугольное сечение: расход v = b·t·L мл при b и t в мм, L в м, поскольку мм²·м = мл. С запасом vₛ = v·(1 + w/100); картриджей = ceil(vₛ/C), покрытие одного картриджа = C/(b·t) м. Размеры и C положительны, w ≥ 0, все значения конечны. Целое количество округляется до отображения расхода, без удаления настоящего положительного остатка. Форма вогнутого шва и потери выбранного продукта отдельно не вычисляются.",
    "howToUse": [
      "Введите ширину и расчётную глубину прямоугольного шва в мм, выбранные для конкретного продукта.",
      "Введите суммарную длину в м и фактический объём упаковки в мл.",
      "Задайте собственный запас; он не является гарантией покрытия всех потерь.",
      "Сравните целое число картриджей и геометрическую длину из одной упаковки."
    ],
    "example": "Шов 6×6 мм длиной 12 м требует 475 мл с запасом — два картриджа по 310 мл.",
    "faq": [
      {
        "q": "Почему глубину не делают больше ширины?",
        "a": "Универсального отношения глубины и ширины для всех герметиков нет. Размеры зависят от конкретного продукта, движения и конструкции шва. Например, инструкция Sikaflex NP 2 задаёт свои глубины и ограничения; калькулятор их не выбирает, а лишь считает введённый прямоугольный объём."
      },
      {
        "q": "Зачем нужен уплотнительный шнур?",
        "a": "В соответствующей системе шва шнур контролирует глубину и отделяет герметик от третьей поверхности. Инструкция Sikaflex NP 2 предусматривает шнур либо разделительную ленту против трёхстороннего сцепления. Совместимость и размеры выбирают по конкретному продукту; срок службы здесь не рассчитывается."
      },
      {
        "q": "Насколько точен расход?",
        "a": "Это геометрия постоянного прямоугольного сечения. Неровность шва, форма поверхности и остаток в упаковке могут изменить расход. Запас выбираете вы; он не гарантирует, что все потери уже покрыты."
      },
      {
        "q": "Можно ли досчитать сколько дверей проходит один картридж?",
        "a": "Строка «метров из одного картриджа» делает это напрямую: разделите её на периметр вашего проёма."
      }
    ],
    "disclaimer": "Расход рассчитан для постоянного прямоугольного сечения. Размеры и совместимость шва выбирают по конкретному герметику; форма поверхности и потери отдельно не моделируются, выбранный запас не гарантирует их покрытия."
  },
  "en": {
    "longDescription": "The real question in the shop is not \"how many millilitres\" but \"will one cartridge do it\". So next to the volume sits a row for how many metres of joint one cartridge fills: at a six-by-six section a 310 mL cartridge runs about eight and a half metres, at ten-by-eight less than four. The arithmetic is convenient: a millimetre by a millimetre by a metre gives exactly one millilitre.",
    "howItWorks": "Rectangular section: v = b·t·L mL with b and t in mm and L in m, since mm²·m = mL. With reserve vₛ = v·(1 + w/100); cartridges = ceil(vₛ/C), coverage per cartridge = C/(b·t) m. Dimensions and C are positive, w ≥ 0 and values are finite. Whole cartridges are rounded before displaying volume, without deleting a genuine positive remainder. Concave bead shape and product-specific losses are not computed separately.",
    "howToUse": [
      "Enter rectangular joint width and design depth in mm, selected for the actual product.",
      "Enter total length in m and actual pack volume in mL.",
      "Choose your reserve; it is not a guarantee against every loss.",
      "Compare whole cartridges with geometric coverage per pack."
    ],
    "example": "A 6×6 mm joint 12 m long needs 475 ml with allowance — two 310 ml cartridges.",
    "faq": [
      {
        "q": "Why not make the joint deeper than it is wide?",
        "a": "There is no universal depth-to-width rule for every sealant. Dimensions depend on the product, movement and joint design. Sikaflex NP 2 instructions, for example, specify their own depths and limits; this calculator does not select them and only computes the entered rectangular volume."
      },
      {
        "q": "What is a backer rod for?",
        "a": "In a suitable joint system a backer rod controls depth and separates sealant from the third surface. Sikaflex NP 2 specifies a rod or bond-breaker tape to prevent three-point bonding. Select compatibility and dimensions for the actual product; service life is not calculated here."
      },
      {
        "q": "How accurate is the figure?",
        "a": "It is the geometry of a constant rectangular section. Joint variation, bead shape and packaging residue can change consumption. You select the reserve; it does not guarantee that every loss is covered."
      },
      {
        "q": "Can I tell how many doorways one cartridge does?",
        "a": "The \"metres per cartridge\" row does it directly: divide it by the perimeter of your opening."
      }
    ],
    "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
  },
  "uk": {
    "longDescription": "Витрата герметика рахується за перерізом шва, і одиниці тут складаються напрочуд зручно: міліметр на міліметр на метр дає рівно один мілілітр. Тому шов 6 × 6 мм витрачає 36 мл на кожен погонний метр — і картриджа на 310 мл вистачає приблизно на вісім метрів.",
    "howItWorks": "Прямокутний переріз: витрата v = b·t·L мл за b і t у мм, L у м, оскільки мм²·м = мл. Із запасом vₛ = v·(1 + w/100); картриджів = ceil(vₛ/C), покриття одного = C/(b·t) м. Розміри та C додатні, w ≥ 0, значення скінченні. Картриджі округлюються до показу витрати, без усунення справжнього додатного залишку. Увігнута форма шва та втрати конкретного продукту окремо не обчислюються.",
    "howToUse": [
      "Введіть ширину та розрахункову глибину прямокутного шва в мм для конкретного продукту.",
      "Введіть сумарну довжину в м і фактичний об’єм упаковки в мл.",
      "Задайте власний запас; він не гарантує покриття всіх втрат.",
      "Порівняйте ціле число картриджів та геометричну довжину з однієї упаковки."
    ],
    "example": "Шов 6 × 6 мм завдовжки 12 м потребує 475 мл із запасом — два картриджі по 310 мл.",
    "faq": [
      {
        "q": "Яка має бути глибина шва?",
        "a": "Універсального відношення глибини до ширини для всіх герметиків немає. Розміри залежать від продукту, руху та конструкції шва. Наприклад, інструкція Sikaflex NP 2 задає власні глибини й обмеження; калькулятор їх не обирає, а рахує введений прямокутний об’єм."
      },
      {
        "q": "Навіщо потрібен ущільнювальний шнур?",
        "a": "У відповідній системі шва шнур контролює глибину й відділяє герметик від третьої поверхні. Інструкція Sikaflex NP 2 передбачає шнур або розділювальну стрічку проти тристороннього зчеплення. Сумісність і розміри обирають для конкретного продукту; строк служби тут не розраховано."
      },
      {
        "q": "Скільки метрів дає один картридж?",
        "a": "За прямокутного перерізу без запасу 310 мл дають приблизно 8,6 м для 6×6 мм або 3,1 м для 10×10 мм: довжина = 310/(ширина·глибина). Реальна форма та втрати продукту можуть відрізнятися."
      },
      {
        "q": "Який запас герметика закладати?",
        "a": "Вкажіть власний невід’ємний запас з урахуванням нерівностей, пробних видавлювань і залишку в упаковці. Універсальні 10 % не гарантують покриття всіх втрат; поле лише множить геометричний об’єм на обраний відсоток."
      }
    ],
    "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
  },
  "de": {
    "longDescription": "Die eigentliche Frage im Baumarkt lautet nicht „wie viele Milliliter“, sondern „reicht eine Kartusche“. Deshalb steht neben der Menge eine Zeile dafür, wie viele Meter Fuge eine Kartusche füllt: bei einem Querschnitt von sechs mal sechs reicht eine Kartusche mit 310 ml rund achteinhalb Meter, bei zehn mal acht weniger als vier. Die Rechnung ist bequem: ein Millimeter mal einem Millimeter mal einem Meter ergibt genau einen Milliliter.",
    "howItWorks": "Rechteckiger Querschnitt: v = b·t·L ml bei b und t in mm und L in m, da mm²·m = ml. Mit Zuschlag vₛ = v·(1 + w/100); Kartuschen = ceil(vₛ/C), Reichweite je Kartusche = C/(b·t) m. Maße und C sind positiv, w ≥ 0 und alle Werte endlich. Ganze Kartuschen werden vor der Volumenanzeige aufgerundet, ohne einen echten positiven Rest zu streichen. Konkave Fugenform und produktspezifische Verluste werden nicht einzeln berechnet.",
    "howToUse": [
      "Rechteckige Fugenbreite und geplante Tiefe in mm für das konkrete Produkt eingeben.",
      "Gesamtlänge in m und tatsächliches Packungsvolumen in ml eingeben.",
      "Eigenen Zuschlag wählen; er garantiert nicht die Deckung aller Verluste.",
      "Ganze Kartuschen und geometrische Reichweite je Packung vergleichen."
    ],
    "example": "Eine Fuge von 6×6 mm über 12 m braucht mit Zuschlag 475 ml — zwei Kartuschen zu 310 ml.",
    "faq": [
      {
        "q": "Warum die Fuge nicht tiefer machen als breit?",
        "a": "Ein universelles Verhältnis von Tiefe und Breite für alle Dichtstoffe gibt es nicht. Maße hängen von Produkt, Bewegung und Fugenkonstruktion ab. Sikaflex NP 2 nennt etwa eigene Tiefen und Grenzen; der Rechner wählt diese nicht aus, sondern berechnet das eingegebene Rechteckvolumen."
      },
      {
        "q": "Wozu ein Hinterfüllprofil?",
        "a": "Im passenden Fugensystem begrenzt das Hinterfüllprofil die Tiefe und trennt den Dichtstoff von der dritten Fläche. Sikaflex NP 2 verlangt dafür Profil oder Trennband gegen Dreiflankenhaftung. Verträglichkeit und Maße produktspezifisch wählen; die Lebensdauer wird hier nicht berechnet."
      },
      {
        "q": "Wie genau ist die Zahl?",
        "a": "Es ist die Geometrie eines konstanten rechteckigen Querschnitts. Unebene Fugen, Oberflächenform und Verpackungsreste können den Verbrauch ändern. Den Zuschlag wählst du; er garantiert nicht die Abdeckung aller Verluste."
      },
      {
        "q": "Kann ich erkennen, für wie viele Türöffnungen eine Kartusche reicht?",
        "a": "Die Zeile „Meter je Kartusche“ tut das unmittelbar: teile sie durch den Umfang deiner Öffnung."
      }
    ],
    "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
  },
  "es": {
    "longDescription": "La pregunta real en la tienda no es «cuántos mililitros», sino «¿bastará con un cartucho?». Por eso junto al volumen hay una fila con cuántos metros de junta rellena un cartucho: con una sección de seis por seis, un cartucho de 310 ml da para unos ocho metros y medio, y con diez por ocho, para menos de cuatro. La aritmética es cómoda: un milímetro por un milímetro por un metro da exactamente un mililitro.",
    "howItWorks": "Sección rectangular: v = b·t·L ml con b y t en mm y L en m, pues mm²·m = ml. Con margen vₛ = v·(1 + w/100); cartuchos = ceil(vₛ/C), cobertura por cartucho = C/(b·t) m. Las dimensiones y C son positivas, w ≥ 0 y los valores son finitos. Los cartuchos se redondean antes de mostrar el volumen, sin eliminar un resto positivo real. No calcula por separado la forma cóncava del cordón ni las pérdidas del producto.",
    "howToUse": [
      "Introduce anchura y profundidad rectangular de proyecto en mm para el producto concreto.",
      "Introduce longitud total en m y volumen real del envase en ml.",
      "Elige tu margen; no garantiza cubrir todas las pérdidas.",
      "Compara cartuchos enteros y cobertura geométrica por envase."
    ],
    "example": "Una junta de 6×6 mm y 12 m necesita 475 ml con margen: dos cartuchos de 310 ml.",
    "faq": [
      {
        "q": "¿Por qué no hacer la junta más profunda que ancha?",
        "a": "No hay una relación universal de profundidad y anchura para todos los selladores. Depende del producto, movimiento y diseño de junta. Sikaflex NP 2, por ejemplo, indica profundidades y límites propios; esta calculadora no los selecciona, solo calcula el volumen rectangular introducido."
      },
      {
        "q": "¿Para qué sirve el fondo de junta?",
        "a": "En un sistema adecuado el fondo controla la profundidad y separa el sellador de la tercera superficie. Sikaflex NP 2 especifica fondo o cinta antiadherente contra adherencia a tres caras. Elige compatibilidad y medidas para el producto concreto; aquí no se calcula vida útil."
      },
      {
        "q": "¿Qué exactitud tiene la cifra?",
        "a": "Es la geometría de una sección rectangular constante. Variación de junta, forma del cordón y residuo del envase pueden cambiar el consumo. El margen lo eliges tú; no garantiza cubrir todas las pérdidas."
      },
      {
        "q": "¿Puedo saber cuántas puertas hace un cartucho?",
        "a": "La fila de «metros por cartucho» lo hace directamente: divídela entre el perímetro de tu hueco."
      }
    ],
    "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es',Partial<CalculatorCopy>>;
