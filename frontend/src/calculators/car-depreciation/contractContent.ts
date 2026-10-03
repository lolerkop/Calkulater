import type { CalculatorCopy } from '../../lib/platform/types';

// Existing native content individually reviewed; scoped model and input corrections.
export const automotiveWave10ContractContent = {
  "ru": {
    "longDescription": "Рассчитывает условную остаточную стоимость по заданным вами процентам потери: первый год отдельно, следующие — с одинаковой годовой ставкой. Проценты применяются к оставшейся стоимости, поэтому это последовательное уменьшение, а не вычитание одной суммы каждый год. Результат позволяет сравнить сценарии владения; он не определяет рыночную цену продажи и не включает топливо, ремонт, налоги или стоимость кредита.",
    "howItWorks": "Стоимость = цена × (1 − потеря за первый год) × (1 − годовая ставка) в степени числа лет после первого. При нулевом сроке стоимость равна цене. Поддерживаются целые сроки 0–30 лет, положительная цена и ставки от 0 включительно до 100 % исключительно. Дробный срок отклоняется, а не округляется. Нулевые ставки дают нулевую потерю; непредставимый числовой результат вызывает ошибку диапазона.",
    "howToUse": [
      "Введите цену, за которую автомобиль был куплен.",
      "Укажите, сколько полных лет им владели.",
      "Укажите годовую ставку потери, действующую после первого года.",
      "Задайте отдельную потерю за первый год; она не обязана быть самой большой."
    ],
    "example": "Машина за 2 400 000 теряет 20 % в первый год и по 12 % далее: через четыре года она стоит 1 308 426,24 ₽.",
    "faq": [
      {
        "q": "Почему первый год считается по отдельной ставке?",
        "a": "Это выбор модели, позволяющий задать первоначальную потерю иначе, чем последующие. Первый процент не обязан быть больше годового: берите предположения для конкретного сценария, а не универсальную кривую рынка."
      },
      {
        "q": "Какая годовая ставка реалистична?",
        "a": "Единой ставки для всех автомобилей нет. Сравните цены сопоставимых машин того же рынка и периода, учтите состояние и пробег, затем проверьте несколько ставок. Значения по умолчанию — пример сценария."
      },
      {
        "q": "Влияет ли пробег на результат?",
        "a": "Пробег не является полем этой модели. Он и состояние машины могут влиять на реальную цену, но калькулятор не оценивает их влияние и не гарантирует, с какой стороны от результата окажется цена продажи."
      },
      {
        "q": "Почему неполные годы не считаются?",
        "a": "Этот инструмент применяет ставки по полным годовым шагам и принимает только целое число 0–30. Для 3,5 года нужна отдельная модель внутри года; здесь такой ввод отклоняется. Это ограничение инструмента, а не правило оценки рынка."
      }
    ]
  },
  "en": {
    "longDescription": "Calculates a conditional residual value from your chosen depreciation rates: one rate for the first year and a constant annual rate thereafter. Each percentage applies to the remaining value, so the loss compounds rather than subtracting a fixed amount each year. Use it to compare ownership scenarios; it does not determine a market sale price or include fuel, repairs, tax or financing.",
    "howItWorks": "Value = price × (1 − first-year loss) × (1 − annual rate) raised to the number of years after the first. With zero years the value equals the price. The supported inputs are whole periods of 0–30 years, a positive price and rates from 0 inclusive to 100% exclusive. Fractional years are rejected, not rounded. Zero rates give zero loss; an unrepresentable numerical result causes a range error.",
    "howToUse": [
      "Enter the price the car was bought for.",
      "Enter how many full years it has been owned.",
      "Enter the annual loss rate applied after the first year.",
      "Enter a separate first-year loss; it need not be the largest rate."
    ],
    "example": "A car bought for 2,400,000 loses 20% in year one and 12% a year after: four years later it is worth 1,308,426.24.",
    "faq": [
      {
        "q": "Why is the first year a separate rate?",
        "a": "It is a modelling choice that lets the initial loss differ from later years. The first-year rate need not be larger: use assumptions for your scenario rather than a universal market curve."
      },
      {
        "q": "What annual rate is realistic?",
        "a": "There is no single rate for every car. Compare similar vehicles in the same market and period, account for condition and mileage, then try several rates. Defaults are an example scenario."
      },
      {
        "q": "Does mileage change the result?",
        "a": "Mileage is not an input to this model. It and condition can affect a real price, but the tool does not quantify that effect or guarantee whether the sale price will be above or below the result."
      },
      {
        "q": "Why do part-years not count?",
        "a": "This tool applies rates in whole annual steps and accepts only an integer from 0 to 30. A period of 3.5 years needs a separate within-year model and is rejected here. This is a product limit, not a market valuation rule."
      }
    ]
  },
  "uk": {
    "longDescription": "Рахує умовну залишкову вартість за вибраними вами відсотками втрати: перший рік окремо, наступні — з однаковою річною ставкою. Відсоток застосовується до залишку, тому це послідовне зменшення, а не щорічне віднімання однієї суми. Результат допомагає порівняти сценарії володіння, але не визначає ринкову ціну продажу й не включає пальне, ремонт, податки чи кредит.",
    "howItWorks": "Вартість дорівнює ціна × (1 − втрата за перший рік) × (1 − річна ставка) у степені кількості років після першого. Знецінення складне: кожен рік відсоток береться від уже зменшеної вартості. Підтримуються цілі строки 0–30 років, додатна ціна та ставки від 0 включно до 100 % виключно. Дробний строк відхиляється, а не округлюється. Нульові ставки дають нульову втрату; непредставимий числовий результат спричиняє помилку діапазону.",
    "howToUse": [
      "Введіть додатну ціну покупки.",
      "Задайте цілий строк 0–30 років і окрему втрату за перший рік.",
      "Задайте річну втрату після першого року та порівняйте залишок із сумарною втратою."
    ],
    "example": "Автомобіль за 2 400 000 ₴ втрачає 20 % у перший рік і по 12 % далі: через чотири роки він коштує 1 308 426 ₴.",
    "faq": [
      {
        "q": "Чому перший рік найдорожчий?",
        "a": "У цій моделі перший рік має окрему ставку, але вона не зобов’язана бути найбільшою. Це ваше припущення для сценарію, а не універсальний закон ринку."
      },
      {
        "q": "Від чого залежить темп знецінення?",
        "a": "Єдиної ставки для всіх машин немає. Порівняйте подібні автомобілі на тому самому ринку й у той самий період, врахуйте стан і пробіг та перевірте кілька ставок. Типові значення в полях — приклад сценарію."
      },
      {
        "q": "Чи враховано пробіг?",
        "a": "Пробіг не є полем цієї моделі. Він і стан авто можуть впливати на реальну ціну, але калькулятор не оцінює цей вплив і не гарантує, що продажна ціна буде вищою або нижчою за результат."
      },
      {
        "q": "Чи можна ввести неповний рік?",
        "a": "Інструмент застосовує ставки повними річними кроками та приймає лише ціле число 0–30. Для 3,5 року потрібна окрема модель усередині року; такий ввід тут відхиляється. Калькулятор не визначає найвигідніший момент продажу."
      }
    ]
  },
  "de": {
    "longDescription": "Berechnet einen bedingten Restwert aus deinen gewählten Wertverlustsätzen: ein Satz für das erste Jahr, danach ein konstanter Jahressatz. Jeder Prozentsatz bezieht sich auf den verbleibenden Wert, daher wird nicht jedes Jahr derselbe Betrag abgezogen. Das hilft beim Vergleich von Besitzszenarien, bestimmt aber keinen Marktverkaufspreis und enthält weder Kraftstoff noch Reparaturen, Steuern oder Finanzierung.",
    "howItWorks": "Wert = Preis × (1 − Verlust im ersten Jahr) × (1 − Jahressatz) hoch der Zahl der Jahre nach dem ersten. Bei null Jahren entspricht der Wert dem Preis. Unterstützt werden ganze Zeiträume von 0–30 Jahren, ein positiver Preis und Sätze ab 0 einschließlich bis unter 100 %. Bruchteile von Jahren werden abgewiesen statt gerundet. Nullsätze ergeben keinen Verlust; ein nicht darstellbares Zahlenergebnis führt zu einer Bereichsfehlermeldung.",
    "howToUse": [
      "Trage den Preis ein, für den das Auto gekauft wurde.",
      "Trage ein, wie viele volle Jahre es im Besitz ist.",
      "Trage den jährlichen Verlustsatz ab dem zweiten Jahr ein.",
      "Gib den Verlust im ersten Jahr getrennt an; er muss nicht der größte Satz sein."
    ],
    "example": "Ein für 30 000 € gekauftes Auto verliert im ersten Jahr 20 % und danach 12 % im Jahr: nach vier Jahren ist es 16 355,33 € wert.",
    "faq": [
      {
        "q": "Warum hat das erste Jahr einen eigenen Satz?",
        "a": "Das ist eine Modellentscheidung, damit der anfängliche Verlust anders angesetzt werden kann. Der erste Satz muss nicht höher sein; verwende Annahmen für dein Szenario statt einer allgemeinen Marktkurve."
      },
      {
        "q": "Welcher Jahressatz ist realistisch?",
        "a": "Es gibt keinen einheitlichen Satz für alle Fahrzeuge. Vergleiche ähnliche Autos im selben Markt und Zeitraum, berücksichtige Zustand und Laufleistung und prüfe mehrere Sätze. Die Vorgaben sind ein Beispielszenario."
      },
      {
        "q": "Ändert die Laufleistung das Ergebnis?",
        "a": "Die Laufleistung ist keine Eingabe dieses Modells. Sie und der Zustand können den echten Preis beeinflussen; das Werkzeug beziffert den Einfluss aber nicht und garantiert keine Lage des Verkaufspreises oberhalb oder unterhalb des Ergebnisses."
      },
      {
        "q": "Warum zählen angebrochene Jahre nicht?",
        "a": "Das Werkzeug wendet Sätze in ganzen Jahresschritten an und akzeptiert nur eine ganze Zahl von 0 bis 30. 3,5 Jahre benötigen ein eigenes Modell innerhalb des Jahres und werden hier abgewiesen. Das ist eine Produktgrenze, keine Marktregel."
      }
    ]
  },
  "es": {
    "longDescription": "Calcula un valor residual condicionado a las tasas que elijas: una para el primer año y otra anual constante para los siguientes. Cada porcentaje se aplica al valor restante, de modo que no se resta una cantidad fija cada año. Permite comparar escenarios de propiedad; no determina el precio de venta de mercado ni incluye combustible, reparaciones, impuestos o financiación.",
    "howItWorks": "Valor = precio × (1 − pérdida del primer año) × (1 − tasa anual) elevado al número de años posteriores al primero. Con cero años el valor es igual al precio. Se admiten periodos enteros de 0–30 años, un precio positivo y tasas desde 0 inclusive hasta menos del 100 %. Los años fraccionarios se rechazan en lugar de redondearse. Las tasas cero producen pérdida cero; un resultado numérico no representable genera un error de intervalo.",
    "howToUse": [
      "Introduce el precio al que se compró el coche.",
      "Introduce cuántos años completos lo has tenido.",
      "Introduce la tasa de pérdida anual que se aplica tras el primer año.",
      "Introduce por separado la pérdida del primer año; no tiene que ser la mayor."
    ],
    "example": "Un coche comprado por 24 000 pierde un 20 % el primer año y un 12 % anual después: cuatro años más tarde vale 13 084,26.",
    "faq": [
      {
        "q": "¿Por qué el primer año tiene una tasa aparte?",
        "a": "Es una elección del modelo para permitir una pérdida inicial distinta. La tasa del primer año no tiene que ser mayor: usa supuestos de tu escenario, no una curva universal del mercado."
      },
      {
        "q": "¿Qué tasa anual es realista?",
        "a": "No existe una tasa única para todos los coches. Compara vehículos similares en el mismo mercado y periodo, considera el estado y el kilometraje y prueba varias tasas. Los valores iniciales son un ejemplo."
      },
      {
        "q": "¿El kilometraje cambia el resultado?",
        "a": "El kilometraje no es una entrada de este modelo. Puede influir en el precio real junto con el estado, pero la herramienta no cuantifica ese efecto ni garantiza si la venta quedará por encima o por debajo del resultado."
      },
      {
        "q": "¿Por qué no cuentan los años parciales?",
        "a": "La herramienta aplica las tasas en pasos anuales enteros y acepta solo un entero de 0 a 30. Un periodo de 3,5 años requiere otro modelo dentro del año y se rechaza aquí. Es un límite del producto, no una regla del mercado."
      }
    ]
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', Partial<CalculatorCopy>>;
