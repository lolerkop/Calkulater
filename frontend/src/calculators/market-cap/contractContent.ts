import type { CalculatorDef } from '../../lib/types';

type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
// Starts from the five actual145 public bodies; bounded model corrections
// and independently checked examples are authored per subject and locale.
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Считает рыночную капитализацию — число акций в обращении, умноженное на цену одной. Это то, во сколько рынок оценивает компанию целиком, и по этому числу компании относят к крупным, средним или малым. Обратный ход даёт цену акции по известной капитализации. Важно, что капитализация — не стоимость бизнеса: она не учитывает долг и денежные средства, для этого есть отдельный показатель. Число акций берётся целым для одного момента времени; взвешенное среднее для расчёта EPS и будущие акции не подменяют этот показатель. Цена и капитализация должны быть в одной валюте. Оценка акций не является ценой поглощения, и премия за контроль здесь не задаётся.",
    "howToUse": [
      "Выберите, что нужно найти.",
      "Введите число акций и вторую известную величину.",
      "Прочитайте результат."
    ],
    "howItWorks": "Капитализация = число акций в обращении × цена одной акции; отсюда цена = капитализация ÷ число акций.",
    "example": "Миллион акций по 250 ₽ дают капитализацию 250 000 000 ₽. Обратная проверка: капитализация 1000 и 10 акций дают цену 100. Если число акций 0 или 10,5, расчёт не определён для этого контракта целых акций и возвращает ошибку.",
    "faq": [
      {
        "q": "Капитализация — это стоимость компании?",
        "a": "Не совсем. Это оценка её акций рынком. Стоимость бизнеса дополнительно учитывает долг и денежные средства, и для неё используется другой показатель."
      },
      {
        "q": "Какие акции считать — все выпущенные или в обращении?",
        "a": "В обращении. Выкупленные компанией акции в расчёт капитализации обычно не входят, поэтому число берут из отчётности, а не из устава."
      },
      {
        "q": "Меняется ли капитализация в течение дня?",
        "a": "Да, вместе с ценой акции. Расчёт даёт снимок на введённую цену и не подтягивает котировки."
      },
      {
        "q": "Что такое разводнённая капитализация?",
        "a": "Оценка с учётом будущих акций — опционов и конвертируемых бумаг. Здесь она не считается: используется текущее число акций в обращении."
      }
    ],
    "disclaimer": "Капитализация — стоимость указанного класса текущих акций по одной введённой цене. Долг, денежные средства, другие классы, будущая эмиссия и премия за контроль не добавляются; котировки и реестр акций автоматически не проверяются."
  },
  "en": {
    "longDescription": "Computes market capitalisation — shares outstanding times the price of one. It is what the market values the whole company at, and the figure by which companies are sorted into large, mid and small cap. The reverse direction gives the share price from a known capitalisation. Note that market cap is not the value of the business: it ignores debt and cash, for which a separate measure exists. Use a whole outstanding-share count at a single point in time, not the weighted average used for EPS or future diluted shares. Price and capitalisation must use one currency. Equity market value is not an acquisition price, and no control premium is assumed.",
    "howToUse": [
      "Choose what you need.",
      "Enter the share count and the other known value.",
      "Read the result."
    ],
    "howItWorks": "Market cap = shares outstanding × price per share; hence price = market cap ÷ shares outstanding.",
    "example": "A million shares at 250 each give a capitalisation of 250,000,000. Reverse check: capitalization 1000 and 10 shares give price 100. Counts 0 or 10.5 are outside this whole-share contract and return an error.",
    "faq": [
      {
        "q": "Is market cap the value of the company?",
        "a": "Not quite. It is the market’s valuation of its shares. The value of the business also accounts for debt and cash, and uses a different measure."
      },
      {
        "q": "Which shares count — issued or outstanding?",
        "a": "Outstanding. Shares bought back by the company are normally excluded, so take the number from the accounts rather than the charter."
      },
      {
        "q": "Does market cap change during the day?",
        "a": "Yes, along with the share price. This gives a snapshot at the price you enter; no quotes are fetched."
      },
      {
        "q": "What is fully diluted market cap?",
        "a": "A valuation that includes future shares from options and convertibles. It is not computed here — the current outstanding count is used."
      }
    ],
    "disclaimer": "Capitalization values the specified current share class at one entered price. Debt, cash, other classes, future issuance and control premiums are not added; quotes and the share register are not verified automatically."
  },
  "uk": {
    "longDescription": "Ринкова капіталізація множить кількість акцій в обігу на ціну однієї. Це не вартість компанії й не сума, за яку її можна купити: капіталізація змінюється щохвилини разом із котируванням, а ціна угоди з великим пакетом залежить від умов продажу. Беріть цілу кількість акцій в обігу на одну дату, а не середньозважену кількість для EPS чи майбутні акції. Ціна й капіталізація мають бути в одній валюті. Ринкова оцінка акцій не визначає ціну поглинання; премія за контроль тут не задається.",
    "howToUse": [
      "Виберіть, що шукати: капіталізацію чи ціну акції.",
      "Введіть кількість акцій в обігу.",
      "Введіть другу відому величину."
    ],
    "howItWorks": "Капіталізація дорівнює кількість акцій в обігу × ціна однієї акції. Звідси ціна = капіталізація ÷ кількість акцій. Береться саме кількість в обігу, а не всі випущені: викуплені компанією акції не враховуються.",
    "example": "Мільйон акцій по 250 ₴ дають капіталізацію 250 000 000 ₴. Зростання ціни на 10 % підняло б її до 275 млн без жодних змін у бізнесі. Зворотна перевірка: капіталізація 1000 і 10 акцій дають ціну 100. Кількість 0 чи 10,5 не відповідає цьому контракту цілих акцій і повертає помилку.",
    "faq": [
      {
        "q": "Чи дорівнює капіталізація вартості компанії?",
        "a": "Капіталізація оцінює поточні акції в обігу, але не додає борг і не віднімає грошові кошти. У спрощеній моделі enterprise value їх враховують окремо; інші складові, класи акцій і умови угоди також можуть мати значення."
      },
      {
        "q": "Чому беруть акції в обігу, а не всі випущені?",
        "a": "Бо викуплені компанією акції не торгуються й не належать інвесторам. Включення їх завищило б капіталізацію."
      },
      {
        "q": "Чи можна купити компанію за капіталізацію?",
        "a": "Капіталізація — добуток поточної ціни та акцій в обігу, а не гарантована ціна придбання компанії. Велика угода, ліквідність, контроль і переговори можуть змінити ціну; універсального відсотка премії цей розрахунок не встановлює."
      },
      {
        "q": "Навіщо ділити компанії за розміром капіталізації?",
        "a": "Розмір капіталізації допомагає описувати компанії та склад індексів. Сам по собі він не визначає майбутнього зростання, волатильності чи ліквідності окремої акції; калькулятор не оцінює ці ризики."
      }
    ],
    "disclaimer": "Капіталізація оцінює вказаний клас поточних акцій за однією введеною ціною. Борг, кошти, інші класи, майбутня емісія та премія за контроль не додаються; котирування й реєстр не перевіряються автоматично."
  },
  "de": {
    "longDescription": "Berechnet die Marktkapitalisierung — ausstehende Aktien mal dem Kurs einer Aktie. Sie ist das, womit der Markt das ganze Unternehmen bewertet, und die Zahl, nach der Unternehmen in große, mittlere und kleine Werte sortiert werden. Die umgekehrte Richtung ergibt den Aktienkurs aus einer bekannten Kapitalisierung. Beachte, dass die Marktkapitalisierung nicht der Wert des Geschäfts ist: sie lässt Schulden und Barmittel außer Acht, wofür es eine eigene Kennzahl gibt. Verwende eine ganze Zahl ausstehender Aktien zu einem Zeitpunkt, nicht den gewichteten EPS-Durchschnitt oder künftig verwässernde Aktien. Kurs und Kapitalisierung müssen dieselbe Währung verwenden. Der Marktwert des Eigenkapitals legt keinen Übernahmepreis fest; eine Kontrollprämie wird nicht unterstellt.",
    "howToUse": [
      "Wähle, was du brauchst.",
      "Trage die Aktienzahl und den anderen bekannten Wert ein.",
      "Lies das Ergebnis ab."
    ],
    "howItWorks": "Marktkapitalisierung = ausstehende Aktien × Kurs je Aktie; daraus Kurs = Kapitalisierung ÷ ausstehende Aktien.",
    "example": "Eine Million Aktien zu je 25 € ergeben eine Kapitalisierung von 25 000 000 €. Rückprüfung: Kapitalisierung 1000 und 10 Aktien ergeben Kurs 100. Stückzahlen 0 oder 10,5 liegen außerhalb dieses Ganzaktienmodells und erzeugen einen Fehler.",
    "faq": [
      {
        "q": "Ist die Marktkapitalisierung der Wert des Unternehmens?",
        "a": "Nicht ganz. Sie ist die Bewertung seiner Aktien durch den Markt. Der Wert des Geschäfts berücksichtigt zusätzlich Schulden und Barmittel und nutzt eine andere Kennzahl."
      },
      {
        "q": "Welche Aktien zählen — ausgegebene oder ausstehende?",
        "a": "Die ausstehenden. Vom Unternehmen zurückgekaufte Aktien bleiben gewöhnlich außen vor, nimm die Zahl also aus dem Abschluss und nicht aus der Satzung."
      },
      {
        "q": "Ändert sich die Marktkapitalisierung im Tagesverlauf?",
        "a": "Ja, zusammen mit dem Aktienkurs. Hier steht eine Momentaufnahme zu dem Kurs, den du einträgst; es werden keine Kurse abgerufen."
      },
      {
        "q": "Was ist die voll verwässerte Kapitalisierung?",
        "a": "Eine Bewertung, die künftige Aktien aus Optionen und Wandelanleihen einbezieht. Sie wird hier nicht berechnet — verwendet wird die derzeitige Zahl der ausstehenden Aktien."
      }
    ],
    "disclaimer": "Die Kapitalisierung bewertet die angegebene aktuelle Aktienklasse zu einem Kurs. Schulden, Bargeld, andere Klassen, künftige Ausgabe und Kontrollprämien werden nicht addiert; Kurse und Register werden nicht automatisch geprüft."
  },
  "es": {
    "longDescription": "Calcula la capitalización bursátil: las acciones en circulación por el precio de una. Es lo que el mercado valora la empresa entera, y la cifra por la que las empresas se clasifican en gran, mediana y pequeña capitalización. El sentido inverso da el precio de la acción a partir de una capitalización conocida. Ten en cuenta que la capitalización no es el valor del negocio: ignora la deuda y la caja, para lo que existe otra medida. Usa un número entero de acciones en circulación en una fecha, no la media ponderada del BPA ni futuras acciones diluidas. Precio y capitalización deben estar en la misma moneda. El valor de mercado del capital no determina un precio de adquisición; no se supone una prima de control.",
    "howToUse": [
      "Elige qué necesitas.",
      "Introduce el número de acciones y el otro valor conocido.",
      "Consulta el resultado."
    ],
    "howItWorks": "Capitalización = acciones en circulación × precio por acción; de ahí, precio = capitalización ÷ acciones en circulación.",
    "example": "Un millón de acciones a 250 cada una dan una capitalización de 250 000 000. Comprobación inversa: capitalización 1000 y 10 acciones dan precio 100. Cantidades 0 o 10,5 no cumplen este contrato de acciones enteras y devuelven error.",
    "faq": [
      {
        "q": "¿La capitalización es el valor de la empresa?",
        "a": "No del todo. Es la valoración que el mercado hace de sus acciones. El valor del negocio tiene en cuenta además la deuda y la caja, y usa otra medida."
      },
      {
        "q": "¿Qué acciones cuentan, las emitidas o las que están en circulación?",
        "a": "Las que están en circulación. Las acciones recompradas por la empresa suelen excluirse, así que toma el número de las cuentas y no de los estatutos."
      },
      {
        "q": "¿La capitalización cambia durante el día?",
        "a": "Sí, junto con el precio de la acción. Esto da una instantánea al precio que introduzcas; no se consultan cotizaciones."
      },
      {
        "q": "¿Qué es la capitalización totalmente diluida?",
        "a": "Una valoración que incluye las acciones futuras de opciones y convertibles. Aquí no se calcula: se usa el número actual en circulación."
      }
    ],
    "disclaimer": "La capitalización valora la clase de acciones actual indicada a un precio. No añade deuda, efectivo, otras clases, futura emisión ni prima de control; no verifica automáticamente cotizaciones ni registro."
  }
};
