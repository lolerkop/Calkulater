import type { CalculatorDef } from '../../lib/types';
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Показывает две стороны изменения цен: что сможет купить неизменная денежная сумма в будущем и сколько будущих денег понадобится для сегодняшней корзины. При постоянных 8 % в год цены за десять лет вырастают в 2,1589 раза, поэтому покупательная способность уменьшается на 53,68 %, а не на 80 %. Каждый год растёт уровень цен; деньги не уменьшаются на 8 % ежегодно. Ставка задаёт сценарий, а не прогноз или автоматически загруженный индекс.",
    "howToUse": [
      "Введите сумму в сегодняшних деньгах.",
      "Укажите ожидаемую годовую инфляцию.",
      "Введите срок в годах.",
      "Ставка — ваше допущение, а не прогноз."
    ],
    "howItWorks": "Обозначим годовую инфляцию в процентах p, срок в годах t и сумму A. Множитель цен F = (1+p/100)^t; покупательная способность = A/F; цена сегодняшней корзины в будущем = A×F. Потеря = A−A/F, её доля = (1−1/F)×100 %. Срок может быть дробным и используется без округления. p должно быть больше −100 %. При дефляции потеря отрицательна: это рост покупательной способности. Денежные суммы выражены в одной валюте, обменного курса нет.",
    "example": "100 000 ₽ при инфляции 8 % за 10 лет сохранят покупательную способность лишь 46 319,35 ₽ — потеря 53,68 %. При нулевой инфляции покупательная способность и сумма будущей корзины совпадают с исходной, потеря равна нулю.",
    "faq": [
      {
        "q": "Почему 8 % за 10 лет — это не 80 %?",
        "a": "Потому что цены умножаются на 1,08 каждый год. Через десять лет 100 000 делятся на 1,08^10 и дают 46 319,35 в сегодняшних ценах; потеря 53,68 %."
      },
      {
        "q": "Чем «покупательная способность» отличается от «столько же в будущих деньгах»?",
        "a": "Это две стороны одного множителя. Первая отвечает, что можно будет купить на сегодняшние 100 000 ₽; вторая — сколько будущих рублей понадобится, чтобы купить то же, что сегодня на 100 000 ₽."
      },
      {
        "q": "Брать официальный индекс или свою оценку?",
        "a": "Используйте индекс, соответствующий корзине и периоду задачи, либо явно заданное допущение для будущего. Средний потребительский индекс может отличаться от вашей структуры расходов; личная оценка сама по себе не является более точным прогнозом."
      },
      {
        "q": "Можно ли задать отрицательную инфляцию?",
        "a": "Да, при ставке больше −100 %. Например, −20 % за два года дают множитель цен 0,64: 100 денежных единиц сохраняют покупательную способность 156,25, а строка потери равна −56,25."
      },
      {
        "q": "Как защитить деньги от инфляции?",
        "a": "Расчёт этого не советует и советовать не может. Он показывает лишь масштаб потери, а выбор инструментов зависит от срока, риска и вашей ситуации."
      }
    ],
    "disclaimer": "Постоянная заданная инфляция и неизменная сумма без дохода. Разные годовые ставки, личная структура расходов, налоги, доходность вложений и валютный курс не моделируются. За пределами числовой точности расчёт показывает ошибку."
  },
  "en": {
    "longDescription": "Shows two sides of changing prices: what an unchanged cash amount can buy later, and how much future cash would buy today’s basket. With a constant 8% annual price rise, prices become 2.1589 times higher over ten years, so purchasing power falls by 53.68%, rather than 80%. The price level compounds; the cash balance is not reduced by 8% each year. The entered rate is a scenario, not a forecast or a downloaded index.",
    "howToUse": [
      "Enter the amount in today's money.",
      "Enter the expected annual inflation.",
      "Enter the term in years.",
      "The rate is your assumption, not a forecast."
    ],
    "howItWorks": "For annual inflation p in percent, duration t in years and amount A: price factor F = (1+p/100)^t; purchasing power = A/F; future cost of today’s basket = A×F. Loss = A−A/F and share lost = (1−1/F)×100%. Fractional years are used without rounding. Inflation must exceed −100%. Deflation produces a negative loss, meaning a purchasing-power gain. All amounts use one currency; no exchange rate is applied.",
    "example": "100,000 at 8% inflation over 10 years keeps the purchasing power of only 46,319.35 — a loss of 53.68%. With zero inflation, purchasing power and the future basket cost equal the starting amount, with no loss.",
    "faq": [
      {
        "q": "Why isn't 8% over 10 years equal to 80%?",
        "a": "Prices multiply by 1.08 each year. After ten years, 100,000 divided by 1.08^10 is 46,319.35 in today’s prices, a 53.68% loss."
      },
      {
        "q": "How do «purchasing power» and «the same in future money» differ?",
        "a": "They are two sides of the same factor. The first says what today's 100,000 will buy later; the second says how many future units it would take to buy what 100,000 buys now."
      },
      {
        "q": "Should I use the official index or my own estimate?",
        "a": "Use an index matching the basket and period, or an explicit assumption for a future scenario. An average consumer index may differ from your spending pattern; a personal estimate is not automatically a better forecast."
      },
      {
        "q": "Can I enter negative inflation?",
        "a": "Yes, above −100%. At −20% for two years, the price factor is 0.64: 100 monetary units retain purchasing power of 156.25, with a loss of −56.25."
      },
      {
        "q": "How do I protect money from inflation?",
        "a": "This calculation does not advise and cannot. It only shows the scale of the loss; which instruments suit you depends on your horizon, risk tolerance and circumstances."
      }
    ],
    "disclaimer": "Constant entered inflation and an unchanged balance with no earnings. Changing yearly rates, personal spending weights, taxes, investment returns and exchange rates are not modelled. Results beyond numeric precision produce an error."
  },
  "uk": {
    "longDescription": "Показує дві сторони зміни цін: що зможе купити незмінна сума грошей у майбутньому та скільки майбутніх грошей потрібно для сьогоднішнього кошика. За сталих 8 % на рік ціни за десять років зростають у 2,1589 раза, тому купівельна спроможність падає на 53,68 %, а не на 80 %. Щороку зростає рівень цін; сама сума не зменшується на 8 %. Введена ставка є сценарієм, а не прогнозом чи завантаженим індексом.",
    "howToUse": [
      "Введіть суму сьогодні.",
      "Введіть очікувану річну інфляцію.",
      "Задайте кількість років."
    ],
    "howItWorks": "Для річної інфляції p у відсотках, строку t у роках і суми A множник цін F = (1+p/100)^t. Купівельна спроможність = A/F; майбутня ціна сьогоднішнього кошика = A×F. Втрата = A−A/F, частка втрати = (1−1/F)×100 %. Дробові роки використовуються без округлення. Інфляція має бути більшою за −100 %. За дефляції втрата від’ємна, тобто спроможність зростає. Усі суми в одній валюті, без обмінного курсу.",
    "example": "100 000 ₴ за інфляції 8 % за 10 років збережуть купівельну спроможність лише 46 319,35 ₴ — втрата 53,68 %. Проста арифметика підказала б 80 % втрати, і вона хибна. За нульової інфляції спроможність і майбутня ціна кошика дорівнюють початковій сумі, втрата нульова.",
    "faq": [
      {
        "q": "Чому втрата за 8 % інфляції не дорівнює 8 % щороку?",
        "a": "Ціни щороку множаться на 1,08. Через десять років 100 000, поділені на 1,08^10, дають 46 319,35 у сьогоднішніх цінах, тобто втрату 53,68 %."
      },
      {
        "q": "Який індекс обрати для інфляційного сценарію?",
        "a": "Виберіть індекс для відповідного кошика та періоду або явно задайте припущення для майбутнього. Середній індекс може відрізнятися від ваших витрат; особиста оцінка не стає автоматично точнішим прогнозом."
      },
      {
        "q": "Що означає від’ємна втрата купівельної спроможності?",
        "a": "Так, якщо ставка більша за −100 %. За −20 % протягом двох років множник цін дорівнює 0,64: купівельна спроможність 100 одиниць становить 156,25, а втрата −56,25."
      },
      {
        "q": "Чи визначає інфляційний розрахунок потрібне вкладення?",
        "a": "Ні. Він показує зміну купівельної спроможності за припущенням. Ризик, комісії, податки та доступність грошей потребують окремої оцінки."
      }
    ],
    "disclaimer": "Стала введена інфляція та незмінна сума без доходу. Різні річні ставки, особистий склад витрат, податки, дохідність вкладень і валютний курс не моделюються. За межами числової точності показується помилка."
  },
  "de": {
    "longDescription": "Zeigt beide Seiten veränderter Preise: was ein unveränderter Geldbetrag später kaufen kann und welcher künftige Betrag den heutigen Warenkorb bezahlt. Bei konstant 8 % Inflation im Jahr steigen die Preise in zehn Jahren auf das 2,1589-Fache; die Kaufkraft sinkt damit um 53,68 % statt um 80 %. Das Preisniveau wächst jährlich, der Geldbetrag wird nicht jedes Jahr um 8 % gekürzt. Der eingegebene Satz ist ein Szenario, keine Prognose oder automatisch geladene Statistik.",
    "howToUse": [
      "Trage den Betrag in heutigem Geld ein.",
      "Trage die erwartete jährliche Inflation ein.",
      "Trage den Zeitraum in Jahren ein.",
      "Der Satz ist deine Annahme und keine Vorhersage."
    ],
    "howItWorks": "Bei jährlicher Inflation p in Prozent, Laufzeit t in Jahren und Betrag A gilt: Preisfaktor F = (1+p/100)^t; Kaufkraft = A/F; künftiger Preis des heutigen Warenkorbs = A×F. Verlust = A−A/F, Verlustanteil = (1−1/F)×100 %. Bruchteile von Jahren werden nicht gerundet. Die Inflation muss über −100 % liegen. Bei Deflation ist der Verlust negativ und die Kaufkraft steigt. Alle Beträge verwenden dieselbe Währung ohne Wechselkurs.",
    "example": "10 000 € behalten bei 8 % Inflation über 10 Jahre die Kaufkraft von nur 4631,94 € — ein Verlust von 53,68 %. Bei Inflation null entsprechen Kaufkraft und künftiger Warenkorb dem Anfangsbetrag; der Verlust ist null.",
    "faq": [
      {
        "q": "Warum sind 8 % über 10 Jahre nicht 80 %?",
        "a": "Die Preise werden jährlich mit 1,08 multipliziert. Nach zehn Jahren ergeben 100 000 geteilt durch 1,08^10 eine Kaufkraft von 46 319,35 zu heutigen Preisen: 53,68 % Verlust."
      },
      {
        "q": "Wie unterscheiden sich „Kaufkraft“ und „derselbe Wert in künftigem Geld“?",
        "a": "Es sind zwei Seiten desselben Faktors. Die erste sagt, was heutige 10 000 € später kaufen; die zweite, wie viele künftige Einheiten es bräuchte, um zu kaufen, was 10 000 € heute kaufen."
      },
      {
        "q": "Amtlicher Index oder eigene Schätzung?",
        "a": "Nutze einen Index für den passenden Warenkorb und Zeitraum oder eine ausdrückliche Annahme für die Zukunft. Ein durchschnittlicher Verbraucherindex kann von deinen Ausgaben abweichen; eine persönliche Schätzung ist nicht automatisch die bessere Prognose."
      },
      {
        "q": "Darf ich eine negative Inflation eintragen?",
        "a": "Ja, oberhalb von −100 %. Bei −20 % über zwei Jahre beträgt der Preisfaktor 0,64: 100 Geldeinheiten besitzen Kaufkraft von 156,25; der Verlust ist −56,25."
      },
      {
        "q": "Wie schütze ich Geld vor der Inflation?",
        "a": "Diese Rechnung berät nicht und kann es nicht. Sie zeigt allein das Ausmaß des Verlusts; welche Anlagen zu dir passen, hängt von deinem Zeitraum, deiner Risikobereitschaft und deinen Umständen ab."
      }
    ],
    "disclaimer": "Konstante eingegebene Inflation und unveränderter Betrag ohne Erträge. Wechselnde Jahresraten, persönliche Ausgabenanteile, Steuern, Anlagerenditen und Wechselkurse werden nicht modelliert. Außerhalb der numerischen Genauigkeit erscheint eine Fehlermeldung."
  },
  "es": {
    "longDescription": "Muestra dos caras del cambio de precios: qué comprará una cantidad de dinero que no cambia y cuánto dinero futuro permitirá comprar la cesta actual. Con una subida constante del 8 % anual, los precios se multiplican por 2,1589 en diez años; el poder adquisitivo cae un 53,68 %, en vez de un 80 %. Crece el nivel de precios; el saldo no se reduce un 8 % cada año. La tasa introducida es un escenario, no una previsión ni un índice descargado.",
    "howToUse": [
      "Introduce la cantidad en dinero de hoy.",
      "Introduce la inflación anual prevista.",
      "Introduce el plazo en años.",
      "El tipo es tu suposición, no una previsión."
    ],
    "howItWorks": "Para inflación anual p en porcentaje, plazo t en años e importe A: factor de precios F = (1+p/100)^t; poder adquisitivo = A/F; coste futuro de la cesta actual = A×F. Pérdida = A−A/F; parte perdida = (1−1/F)×100 %. Los años fraccionarios se usan sin redondearlos. La inflación debe superar −100 %. La deflación da una pérdida negativa, es decir, una ganancia de poder adquisitivo. Todos los importes usan una moneda, sin conversión.",
    "example": "10 000 con un 8 % de inflación durante 10 años conservan el poder adquisitivo de solo 4631,94: una pérdida del 53,68 %. Con inflación cero, el poder adquisitivo y el coste futuro de la cesta igualan el importe inicial, sin pérdida.",
    "faq": [
      {
        "q": "¿Por qué un 8 % durante 10 años no es un 80 %?",
        "a": "Los precios se multiplican por 1,08 cada año. Tras diez años, 100 000 divididos entre 1,08^10 equivalen a 46 319,35 a precios actuales: una pérdida del 53,68 %."
      },
      {
        "q": "¿En qué se diferencian «poder adquisitivo» y «lo mismo en dinero futuro»?",
        "a": "Son dos caras del mismo multiplicador. La primera dice qué comprarán más adelante los 10 000 de hoy; la segunda, cuántas unidades futuras harían falta para comprar lo que compran ahora 10 000."
      },
      {
        "q": "¿Debo usar el índice oficial o mi propia estimación?",
        "a": "Usa un índice de la cesta y el periodo adecuados o una hipótesis explícita para el futuro. El índice medio puede diferir de tu gasto personal; una estimación propia no es automáticamente una previsión más exacta."
      },
      {
        "q": "¿Puedo introducir una inflación negativa?",
        "a": "Sí, siempre que supere −100 %. Con −20 % durante dos años el factor es 0,64: 100 unidades conservan un poder adquisitivo de 156,25 y la pérdida es −56,25."
      },
      {
        "q": "¿Cómo protejo el dinero de la inflación?",
        "a": "Este cálculo no aconseja ni puede hacerlo. Solo muestra la magnitud de la pérdida; qué instrumentos te convienen depende de tu horizonte, tu tolerancia al riesgo y tus circunstancias."
      }
    ],
    "disclaimer": "Inflación introducida constante y saldo sin rendimientos. No se modelan tasas anuales variables, pesos del gasto personal, impuestos, rentabilidad de inversiones ni tipos de cambio. Fuera de la precisión numérica se muestra un error."
  }
};
