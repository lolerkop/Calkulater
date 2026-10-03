import type { CalculatorCopy } from '../../lib/platform/types';

// Actual 145 native body individually reviewed; scoped model and input corrections. Agent review is not human approval.
export const buildingWave13ContractContent = {
  "ru": {
    "longDescription": "Считает количество досок на обшивку стены внахлёст. Главная поправка — сам нахлёст: доска шириной 190 мм, положенная с перекрытием 20 мм, закрывает только 170, и расчёт «площадь стены поделить на площадь доски» занижает количество примерно на десятую часть. Отличие от расчёта досок кубометрами: там считается объём пиломатериала и его стоимость, здесь — покрытие площади, и ответ измеряется штуками и погонными метрами.",
    "howItWorks": "Полезная ширина bэфф=b−o. Площадь покупки Aз=A·(1+w/100); досок n=⌈Aз/(L·bэфф)⌉; погонных метров=n·L. Доля ширины, потерянная на нахлёст, o/b·100 %. A, L и b положительны и конечны, 0≤o<b, запас w от 0 до 50 %. Это оценка по площади, без раскладки рядов и повторного использования обрезков.",
    "howToUse": [
      "Введите площадь стены без вычета проёмов, если хотите запас на них.",
      "Укажите длину и полную ширину доски по каталогу.",
      "Задайте нахлёст — насколько соседние доски перекрывают друг друга.",
      "Задайте запас по вашей раскладке, от 0 до 50 %."
    ],
    "example": "Стена 30 м², доска 3 × 0,19 м с нахлёстом 0,02 м и запасом 10 % требует 65 досок — 195 погонных метров.",
    "faq": [
      {
        "q": "Почему нельзя просто поделить площадь на площадь доски?",
        "a": "Потому что нахлёст съедает часть каждой доски. При ширине 190 мм и перекрытии 20 мм работает только 170 мм, и без этой поправки досок не хватит примерно на десятую часть."
      },
      {
        "q": "Чем это отличается от расчёта досок кубометрами?",
        "a": "Там считают объём пиломатериала и его стоимость. Здесь считают покрытие площади с учётом перекрытия, и ответ — штуки и погонные метры."
      },
      {
        "q": "Какой нахлёст брать?",
        "a": "По размерам конкретного профиля и принятой схеме монтажа. Нужна разница полной и реально закрывающей ширины; универсального значения для всех соединений нет."
      },
      {
        "q": "Вычитать ли окна и двери?",
        "a": "Можно вычесть, но тогда запас лучше поднять: короткие обрезки над проёмами и под ними редко идут в дело целиком."
      }
    ]
  },
  "en": {
    "longDescription": "Works out how many boards a wall needs when they are laid with an overlap. The overlap is the whole point of the correction: a 190 mm board lapped by 20 mm only covers 170, so dividing wall area by board area undercounts by roughly a tenth. This differs from costing boards by the cubic metre — that answers volume and price, this answers coverage, and the result is measured in pieces and linear metres.",
    "howItWorks": "Effective width beff=b−o. Purchase area Aw=A·(1+w/100); boards n=⌈Aw/(L·beff)⌉; linear metres=n·L. Width lost to overlap is o/b·100%. A, L and b are positive and finite, 0≤o<b, and allowance w is 0–50%. This area estimate does not lay out rows or reuse offcuts.",
    "howToUse": [
      "Enter the wall area, leaving openings in if you want them as extra allowance.",
      "Give the catalogue length and full width of the board.",
      "Set the overlap — how far neighbouring boards cover each other.",
      "Choose an allowance from your layout, from 0 to 50%."
    ],
    "example": "A 30 m² wall with 3 × 0.19 m boards, a 0.02 m overlap and 10% waste takes 65 boards — 195 linear metres.",
    "faq": [
      {
        "q": "Why not just divide the area by the board area?",
        "a": "Because the overlap eats part of every board. At 190 mm wide with a 20 mm lap only 170 mm works, and without that correction you fall short by roughly a tenth."
      },
      {
        "q": "How is this different from costing boards by volume?",
        "a": "That answers cubic metres and price. This answers coverage with the overlap included, and the result is pieces and linear metres."
      },
      {
        "q": "What overlap should I use?",
        "a": "Use the actual profile dimensions and installation layout. Enter the difference between full and covering width; there is no universal overlap for every joint."
      },
      {
        "q": "Should I subtract windows and doors?",
        "a": "You can, but then raise the allowance: short offcuts above and below openings rarely all get used."
      }
    ],
    "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
  },
  "uk": {
    "longDescription": "Дошка з нахльостом закриває менше, ніж її повна ширина, — і саме на цю різницю й помиляються під час замовлення. Корисна ширина дорівнює повній мінус нахльост, і за дошки 190 мм із нахльостом 20 мм втрачається понад десять відсотків площі.",
    "howItWorks": "Корисна ширина bеф=b−o. Площа покупки Aз=A·(1+w/100); дощок n=⌈Aз/(L·bеф)⌉; погонних метрів=n·L. Частка ширини, втрачена на нахлест, o/b·100 %. A, L і b додатні та скінченні, 0≤o<b, запас w від 0 до 50 %. Це оцінка за площею без розкладки рядів і повторного використання обрізків.",
    "howToUse": [
      "Введіть площу стіни.",
      "Введіть довжину й ширину дошки.",
      "Задайте нахлест і запас за вашою розкладкою, від 0 до 50 %."
    ],
    "example": "Стіна 30 м², дошка 3 × 0,19 м із нахльостом 0,02 м і запасом 10 % потребує 65 дощок — 195 погонних метрів.",
    "faq": [
      {
        "q": "Чому корисна ширина менша за фактичну?",
        "a": "Бо частина дошки перекривається наступною. За ширини 190 мм і нахльосту 20 мм працює лише 170 мм — це на 10,5 % менше, і без урахування цього матеріалу не вистачить."
      },
      {
        "q": "Який нахльост потрібен?",
        "a": "За даними конкретного профілю та схемою монтажу. Потрібна різниця повної й фактичної корисної ширини; універсального нахлесту для всіх з’єднань немає."
      },
      {
        "q": "Чому дощок виходить більше, ніж за площею?",
        "a": "Через нахлест корисна ширина менша, а заданий запас збільшує площу покупки. Число дощок округлюється вгору; конкретного мінімального запасу калькулятор не встановлює."
      },
      {
        "q": "Як рахувати діагональне обшивання?",
        "a": "Формула дає лише площинну оцінку. Для діагонального обшивання спочатку складіть розкладку й оцініть обрізки; заданий відсоток не враховує їх автоматично."
      }
    ],
    "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
  },
  "de": {
    "longDescription": "Ermittelt, wie viele Bretter eine Wand braucht, wenn sie mit Überlappung verlegt werden. Die Überlappung ist der ganze Sinn der Korrektur: ein Brett von 190 mm, um 20 mm überlappt, deckt nur 170 ab, die Wandfläche durch die Brettfläche zu teilen zählt also um rund ein Zehntel zu wenig. Das unterscheidet sich vom Bepreisen nach Kubikmetern — jenes beantwortet Volumen und Preis, dies beantwortet die Deckung, und das Ergebnis wird in Stück und Laufmetern gemessen.",
    "howItWorks": "Nutzbreite beff=b−o. Kauffläche Aw=A·(1+w/100); Bretter n=⌈Aw/(L·beff)⌉; Laufmeter=n·L. Breitenverlust durch Überlappung: o/b·100 %. A, L und b sind positiv und endlich, 0≤o<b, Zuschlag w von 0–50 %. Diese Flächenschätzung plant keine Reihen oder Wiederverwendung von Resten.",
    "howToUse": [
      "Trage die Wandfläche ein und lass Öffnungen darin, wenn du sie als zusätzlichen Zuschlag willst.",
      "Gib die Kataloglänge und die volle Breite des Brettes an.",
      "Setze die Überlappung — wie weit benachbarte Bretter einander decken.",
      "Wähle anhand deines Verlegeplans 0–50 % Zuschlag."
    ],
    "example": "Eine Wand von 30 m² mit Brettern zu 3 × 0,19 m, 0,02 m Überlappung und 10 % Zuschlag braucht 65 Bretter — 195 Laufmeter.",
    "faq": [
      {
        "q": "Warum nicht einfach die Fläche durch die Brettfläche teilen?",
        "a": "Weil die Überlappung einen Teil jedes Brettes frisst. Bei 190 mm Breite und 20 mm Überlappung arbeiten nur 170 mm, und ohne diese Korrektur fehlt rund ein Zehntel."
      },
      {
        "q": "Wie unterscheidet sich das vom Bepreisen nach Volumen?",
        "a": "Jenes beantwortet Kubikmeter und Preis. Dies beantwortet die Deckung samt Überlappung, und das Ergebnis sind Stück und Laufmeter."
      },
      {
        "q": "Welche Überlappung soll ich nehmen?",
        "a": "Aus den Abmessungen des konkreten Profils und der Montageplanung. Benötigt wird die Differenz zwischen voller Breite und Deckbreite; ein allgemeines Maß für alle Verbindungen gibt es nicht."
      },
      {
        "q": "Soll ich Fenster und Türen abziehen?",
        "a": "Du kannst, aber erhöhe dann den Zuschlag: kurze Reststücke über und unter Öffnungen werden selten alle verbraucht."
      }
    ],
    "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
  },
  "es": {
    "longDescription": "Calcula cuántas tablas necesita una pared cuando se colocan con solape. El solape es todo el sentido de la corrección: una tabla de 190 mm solapada 20 mm solo cubre 170, así que dividir la superficie de la pared entre la de la tabla se queda corto alrededor de una décima parte. Se diferencia de presupuestar tablas por metro cúbico: aquello responde al volumen y al precio, esto responde a la cobertura, y el resultado se mide en unidades y metros lineales.",
    "howItWorks": "Ancho útil beff=b−o. Superficie de compra Aw=A·(1+w/100); tablas n=⌈Aw/(L·beff)⌉; metros lineales=n·L. Pérdida de ancho por solape: o/b·100%. A, L y b son positivos y finitos, 0≤o<b y margen w de 0–50%. Es una estimación por superficie sin distribución de filas ni reutilización de recortes.",
    "howToUse": [
      "Introduce la superficie de la pared, dejando los huecos dentro si los quieres como margen extra.",
      "Indica el largo de catálogo y el ancho total de la tabla.",
      "Fija el solape: cuánto se cubren entre sí las tablas contiguas.",
      "Elige un margen según tu despiece, de 0 a 50%."
    ],
    "example": "Una pared de 30 m² con tablas de 3 × 0,19 m, un solape de 0,02 m y un 10 % de merma lleva 65 tablas: 195 metros lineales.",
    "faq": [
      {
        "q": "¿Por qué no dividir sin más la superficie entre la de la tabla?",
        "a": "Porque el solape se come parte de cada tabla. Con 190 mm de ancho y 20 mm de solape solo trabajan 170 mm, y sin esa corrección te quedas corto alrededor de una décima parte."
      },
      {
        "q": "¿En qué se diferencia de presupuestar tablas por volumen?",
        "a": "Aquello responde a metros cúbicos y precio. Esto responde a la cobertura con el solape incluido, y el resultado son unidades y metros lineales."
      },
      {
        "q": "¿Qué solape debo usar?",
        "a": "Usa las dimensiones del perfil real y la disposición de montaje. Introduce la diferencia entre ancho total y ancho de cobertura; no existe un solape universal para todas las uniones."
      },
      {
        "q": "¿Debo restar las ventanas y las puertas?",
        "a": "Puedes, pero entonces sube el margen: los recortes cortos de encima y de debajo de los huecos rara vez se aprovechan todos."
      }
    ],
    "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es', Partial<CalculatorCopy>>;
