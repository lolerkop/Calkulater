import type { CalculatorCopy } from '../../lib/platform/types';

// Existing native content individually reviewed; scoped model and input corrections.
export const automotiveWave10ContractContent = {
  "ru": {
    "longDescription": "Берёт литры, которые вы действительно залили, и километры, которые действительно проехали, и превращает их в расход. Рядом показывается обратная величина в километрах на литр, а третий режим работает вперёд: по пробегу и известному расходу возвращает нужное количество топлива.",
    "howItWorks": "литров на 100 км = литры ÷ километры × 100; топливо на поездку = пробег ÷ 100 × расход. В режимах л/100 км и км/л нужны литры и километры; для потребности — километры и л/100 км. Все активные величины положительны. Количество топлива = расстояние·расход/100; расчёт не является прогнозом фактической поездки.",
    "howToUse": [
      "Выберите, что нужно посчитать.",
      "Заправьтесь до полного, проедьте и запишите литры и километры.",
      "В режимах измерения введите литры и км; для потребности — км и расход в л/100 км."
    ],
    "example": "42 литра на 560 километрах дают 42 ÷ 560 × 100 = 7,5 литра на 100 км.",
    "faq": [
      {
        "q": "Это конвертер миль на галлон?",
        "a": "Нет. Здесь расход считается по замеренным литрам и километрам. Перевод между л/100 км и mpg — отдельная задача с обратным преобразованием."
      },
      {
        "q": "Почему результат расходится с бортовым компьютером?",
        "a": "Бортовой прибор оценивает расход по своим данным, а заправочный метод — по пройденному расстоянию и долитому объёму. На сравнение влияют сброс среднего, условия заполнения и измерения. Нельзя заранее утверждать, что прибор всегда занижает или что один метод всегда точнее."
      },
      {
        "q": "Мерить по одному баку или по нескольким?",
        "a": "Несколько сопоставимых заправок помогают уменьшить влияние случайного различия заполнения. Сложите литры и километры, затем рассчитайте 100·Σлитров/Σкилометров; простое среднее отдельных расходов неверно при разных пробегах. Универсального минимального пробега для гарантированной точности нет."
      },
      {
        "q": "Сильно ли различаются город и трасса?",
        "a": "Существенно. Калькулятор считает только по введённым числам, поэтому замеряйте тот режим езды, который вас интересует."
      }
    ]
  },
  "en": {
    "longDescription": "Takes the litres you actually put in and the distance you actually covered, and turns them into consumption. The reciprocal figure in kilometres per litre appears alongside because people ask for it, and a third mode works forwards instead: give a distance and a known consumption and it returns the fuel required.",
    "howItWorks": "litres per 100 km = litres ÷ kilometres × 100; fuel for a trip is distance ÷ 100 × consumption. Both L/100 km and km/L modes require litres and kilometres; fuel required uses kilometres and L/100 km. All active quantities are positive. Required fuel = distance·consumption/100; it is not a prediction of an actual journey.",
    "howToUse": [
      "Choose what you want to work out.",
      "Fill the tank, drive, and note the litres and kilometres.",
      "For measurement modes enter litres and km; for fuel needed enter km and consumption in L/100 km."
    ],
    "example": "42 litres over 560 km is 42 ÷ 560 × 100 = 7.5 litres per 100 km.",
    "faq": [
      {
        "q": "Is this a miles-per-gallon converter?",
        "a": "No. It computes consumption from the litres and kilometres you measured. Converting between L/100 km and mpg is a separate job that needs a reciprocal conversion."
      },
      {
        "q": "Why does my figure differ from the on-board computer?",
        "a": "The dashboard estimates consumption from its own data; a refill measurement uses distance and added fuel. Resets, fill level and measurement conditions affect the comparison. Neither systematic under-reading nor one method always being more accurate can be assumed."
      },
      {
        "q": "Should I measure over one tank or several?",
        "a": "Several comparable fills help reduce random fill-level differences. Add the litres and kilometres, then calculate 100·Σlitres/Σkilometres. An unweighted mean of separate rates is wrong when distances differ. No universal minimum distance guarantees accuracy."
      },
      {
        "q": "Are city and motorway figures different?",
        "a": "Substantially. The calculator uses only what you enter, so measure the kind of driving you actually want to know about."
      }
    ]
  },
  "uk": {
    "longDescription": "Показує витрату в л/100 км, відстань на літр або кількість пального для заданого пробігу. Для вимірювання використовуйте зіставні заправки й пройдений між ними шлях. Результат описує введені дані та умови цього вимірювання, а не гарантовану витрату за будь-якої погоди чи маршруту.",
    "howItWorks": "Витрата на 100 км дорівнює літри ÷ кілометри × 100. Паливо на поїздку рахується зворотно: пробіг ÷ 100 × витрата. Обидва напрямки використовують одне співвідношення. Режими л/100 км і км/л потребують літрів та кілометрів; потреба в пальному — кілометрів і л/100 км. Усі активні величини додатні. Пальне = відстань·витрата/100; це не прогноз фактичної поїздки.",
    "howToUse": [
      "Заправтеся до повного бака й скиньте лічильник пробігу.",
      "Проїдьте й повторно заправтеся до зіставного рівня за правилами заправки; запишіть долитий об’єм і пробіг.",
      "Для вимірювання введіть літри й км; для потреби — км та витрату в л/100 км."
    ],
    "example": "42 літри на 560 кілометрах дають 42 ÷ 560 × 100 = 7,5 літра на 100 км.",
    "faq": [
      {
        "q": "Чому результат відрізняється від бортового комп’ютера?",
        "a": "Бортовий прилад оцінює витрату за своїми даними, а заправочний метод — за пробігом і долитим об’ємом. Впливають скидання середнього, рівень заповнення та умови вимірювання. Не можна припускати, що прилад завжди занижує витрату або один метод завжди точніший."
      },
      {
        "q": "Чому важливо заправлятися до відсічки?",
        "a": "Початковий і кінцевий рівні мають бути якомога зіставніші, інакше долитий об’єм не дорівнюватиме використаному. Дотримуйтеся правил заправки автомобіля та колонки, не доливайте пальне після автоматичної відсічки заради вимірювання."
      },
      {
        "q": "Чому взимку витрата вища?",
        "a": "Температура, прогрівання, короткі поїздки, шини та навантаження можуть змінювати витрату. Калькулятор не містить сезонного коефіцієнта й не додає універсальні 10–20 %: введіть власну виміряну або сценарну витрату."
      },
      {
        "q": "Скільки кілометрів потрібно для точного вимірювання?",
        "a": "Кілька зіставних заправок допомагають зменшити вплив випадкової різниці заповнення. Складіть літри й кілометри, потім рахуйте 100·Σлітрів/Σкілометрів. Просте середнє окремих витрат неправильне за різних пробігів. Універсального мінімального пробігу для гарантованої точності немає."
      }
    ],
    "seoDescription": "Розрахуйте витрату пального в л/100 км або км/л за літрами й пробігом, а також потрібний об’єм для заданого маршруту."
  },
  "de": {
    "longDescription": "Nimmt die Liter, die du tatsächlich getankt hast, und die Strecke, die du tatsächlich gefahren bist, und macht daraus den Verbrauch. Der Kehrwert in Kilometern je Liter steht daneben, weil danach gefragt wird, und ein dritter Modus rechnet vorwärts: gib eine Strecke und einen bekannten Verbrauch an, und du bekommst den nötigen Kraftstoff.",
    "howItWorks": "Liter je 100 km = Liter ÷ Kilometer × 100; der Kraftstoff für eine Fahrt ist Strecke ÷ 100 × Verbrauch. Für L/100 km und km/L werden Liter und Kilometer benötigt; der Kraftstoffbedarf nutzt Kilometer und L/100 km. Alle aktiven Größen sind positiv. Bedarf = Strecke·Verbrauch/100; dies ist keine Prognose einer tatsächlichen Fahrt.",
    "howToUse": [
      "Wähle, was berechnet werden soll.",
      "Tanke voll, fahre und notiere Liter und Kilometer.",
      "Für Messmodi gib Liter und km ein; für den Bedarf km und Verbrauch in L/100 km."
    ],
    "example": "42 Liter auf 560 km sind 42 ÷ 560 × 100 = 7,5 Liter je 100 km.",
    "faq": [
      {
        "q": "Ist das ein Umrechner für Meilen je Gallone?",
        "a": "Nein. Er berechnet den Verbrauch aus den Litern und Kilometern, die du gemessen hast. Zwischen l/100 km und mpg umzurechnen ist eine eigene Aufgabe und braucht einen Kehrwert."
      },
      {
        "q": "Warum weicht mein Wert vom Bordcomputer ab?",
        "a": "Der Bordcomputer schätzt den Verbrauch aus seinen Daten; die Tankmessung nutzt Strecke und nachgefüllte Menge. Zurücksetzen des Mittelwerts, Füllstand und Messbedingungen beeinflussen den Vergleich. Ein ständiges Unterschätzen oder die grundsätzliche Überlegenheit einer Methode ist nicht vorauszusetzen."
      },
      {
        "q": "Soll ich über eine oder mehrere Tankfüllungen messen?",
        "a": "Mehrere vergleichbare Tankfüllungen verringern den Einfluss zufälliger Füllstandsunterschiede. Addiere Liter und Kilometer und berechne dann 100·ΣLiter/ΣKilometer. Ein ungewichteter Mittelwert einzelner Verbräuche ist bei verschiedenen Strecken falsch. Es gibt keine allgemeine Mindeststrecke mit Genauigkeitsgarantie."
      },
      {
        "q": "Unterscheiden sich Stadt und Autobahn?",
        "a": "Deutlich. Der Rechner nimmt nur, was du einträgst — miss also die Art des Fahrens, über die du wirklich Bescheid wissen willst."
      }
    ]
  },
  "es": {
    "longDescription": "Toma los litros que realmente has repostado y los kilómetros que realmente has recorrido, y los convierte en consumo. La cifra inversa en kilómetros por litro aparece al lado porque mucha gente la pide, y un tercer modo funciona al revés: con una distancia y un consumo conocido devuelve el combustible necesario. No es un conversor entre litros a los 100 km y millas por galón: aquí se parte de mediciones propias, no de una equivalencia de unidades.",
    "howItWorks": "litros a los 100 km = litros ÷ kilómetros × 100; el combustible de un viaje es distancia ÷ 100 × consumo. Los modos L/100 km y km/L necesitan litros y kilómetros; el combustible necesario usa kilómetros y L/100 km. Todas las cantidades activas son positivas. Combustible = distancia·consumo/100; no es una predicción de un viaje real.",
    "howToUse": [
      "Elige qué quieres calcular.",
      "Llena el depósito, conduce y anota los litros y los kilómetros.",
      "En los modos de medida introduce litros y km; para necesidad, km y consumo en L/100 km."
    ],
    "example": "42 litros en 560 km son 42 ÷ 560 × 100 = 7,5 litros a los 100 km.",
    "faq": [
      {
        "q": "¿Es un conversor de millas por galón?",
        "a": "No. Calcula el consumo a partir de los litros y los kilómetros que has medido. Convertir entre l/100 km y mpg es otra tarea, que requiere una conversión inversa."
      },
      {
        "q": "¿Por qué mi cifra no coincide con la del ordenador de a bordo?",
        "a": "El ordenador estima el consumo con sus datos; el método de repostaje usa distancia y combustible añadido. Influyen el reinicio de la media, el nivel de llenado y las condiciones de medida. No se puede asumir que el ordenador siempre subestime o que un método sea siempre más preciso."
      },
      {
        "q": "¿Conviene medir un depósito o varios?",
        "a": "Varios repostajes comparables reducen el efecto de diferencias aleatorias de llenado. Suma litros y kilómetros y calcula 100·Σlitros/Σkilómetros. Una media sin ponderar de tasas separadas es incorrecta si las distancias difieren. No hay una distancia mínima universal que garantice exactitud."
      },
      {
        "q": "¿Cambia mucho entre ciudad y autopista?",
        "a": "Bastante. La calculadora usa solo lo que introduces, así que mide el tipo de conducción sobre el que de verdad quieres saber."
      }
    ]
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', Partial<CalculatorCopy>>;
