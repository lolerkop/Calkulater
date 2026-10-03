// Subject copy reviewed against the actual fields, formula and result rows.
import type { CalculatorDef } from '../../lib/types';

type ContractCopy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractCopy> = {
  "ru": {
    "longDescription": "Дивидендная доходность соотносит годовой дивиденд с ценой акции. Обе величины вводите вы: доходность к цене покупки — это не доходность к сегодняшней рыночной цене, и калькулятор не станет молча подменять одно другим.",
    "howToUse": [
      "Введите суммарный годовой дивиденд на одну акцию, а не одну квартальную выплату.",
      "Укажите положительную цену акции: рыночную или вашу цену покупки.",
      "По желанию укажите число акций, в том числе дробное; пустое поле не добавляет расчёт пакета."
    ],
    "howItWorks": "Доходность = годовой дивиденд на акцию ÷ цена акции × 100.",
    "example": "Годовой дивиденд 12 и цена 200 дают 6%. Для 2,5 акции: годовые дивиденды 30, стоимость пакета 500. При нулевом дивиденде доходность ноль; цена ноль недопустима.",
    "faq": [
      {
        "q": "Какую цену подставлять?",
        "a": "Цена покупки даёт доходность к вашим затратам, текущая — доходность для нового покупателя. Это разные числа, и оба законны."
      },
      {
        "q": "Учитывается ли налог на дивиденды?",
        "a": "Нет. Введите дивиденд после налога, если нужна чистая доходность."
      },
      {
        "q": "Загружает ли калькулятор котировки?",
        "a": "Нет. Он работает только с введёнными вами числами и никуда не обращается."
      },
      {
        "q": "Высокая доходность — это всегда хорошо?",
        "a": "Не обязательно. При неизменном дивиденде падение цены повышает отношение. Причиной могут быть риски бизнеса или ожидаемое сокращение выплат. Доходность не включает изменение цены и не гарантирует будущие дивиденды."
      }
    ],
    "disclaimer": "Не прогнозирует выплаты или цену акции, не рассчитывает налоги и полную доходность с изменением цены. Дивиденды не гарантированы."
  },
  "en": {
    "longDescription": "Dividend yield measures the annual dividend against the share price. Both figures are yours to enter: the yield on your purchase price is not the yield on today market price, and the calculator will not silently substitute one for the other.",
    "howToUse": [
      "Enter the total annual dividend per share, rather than one quarterly payment.",
      "Enter a positive share price: the market price or your purchase price.",
      "Optionally enter the number of shares, including fractional shares; a blank field omits the holding calculation."
    ],
    "howItWorks": "Yield = annual dividend per share ÷ share price × 100.",
    "example": "Annual dividend 12 and price 200 give 6%. For 2.5 shares, annual dividends are 30 and holding value is 500. A zero dividend gives zero yield; a zero price is invalid.",
    "faq": [
      {
        "q": "Which price should I use?",
        "a": "Your purchase price gives the yield on your cost; the current price gives the yield a new buyer would get. They are different numbers and both are legitimate."
      },
      {
        "q": "Are taxes accounted for?",
        "a": "No. Enter the dividend after tax if you want the net yield."
      },
      {
        "q": "Does the calculator fetch quotes?",
        "a": "No. It works only with the numbers you enter and connects to nothing."
      },
      {
        "q": "Is a high yield always good?",
        "a": "Not necessarily. With an unchanged dividend, a falling price raises the ratio. Business risks or expected dividend cuts may explain it. Yield excludes changes in share price and does not guarantee future dividends."
      }
    ],
    "disclaimer": "Does not forecast payouts or share prices, calculate taxes or total return including price changes. Dividends are not guaranteed."
  },
  "uk": {
    "longDescription": "Дивідендна дохідність співвідносить річний дивіденд із заданою ціною акції. За незмінного дивіденду падіння ціни підвищує відсоток, але саме по собі не робить інвестицію вигіднішою. Ринкова ціна та ваша ціна купівлі дають різні показники; форму не підключено до котирувань.",
    "howToUse": [
      "Введіть сумарний річний дивіденд на одну акцію, а не одну квартальну виплату.",
      "Укажіть додатну ціну акції: ринкову або вашу ціну купівлі.",
      "За бажанням укажіть кількість акцій, зокрема дробову; порожнє поле не додає розрахунок пакета."
    ],
    "howItWorks": "Дохідність дорівнює річний дивіденд на акцію ÷ ціна акції × 100. Береться саме річна сума виплат: якщо компанія платить щокварталу, чотири виплати треба скласти.",
    "example": "Річний дивіденд 12 і ціна 200 дають 6%. Для 2,5 акції: річні дивіденди 30, вартість пакета 500. За нульового дивіденду дохідність нуль; ціна нуль недопустима.",
    "faq": [
      {
        "q": "Чому висока дохідність буває поганим знаком?",
        "a": "За незмінної виплати падіння ціни підвищує відсоток. Причиною можуть бути ризики бізнесу або очікуване скорочення виплат. Висока цифра сама по собі не доводить ні проблему, ні надійність інвестиції."
      },
      {
        "q": "Дивіденд брати до податку чи після?",
        "a": "Для порівняння між акціями — до податку, так публікують дані. Для оцінки власного доходу — після: податок помітно зменшує фактичну дохідність."
      },
      {
        "q": "Чи гарантовані дивіденди?",
        "a": "Ні. Компанія може скоротити або скасувати виплати; їхня частота й порядок залежать від конкретного емітента. Сума минулих дивідендів не є обіцянкою майбутніх."
      },
      {
        "q": "Що таке дохідність на вкладену суму?",
        "a": "Це річний дивіденд, поділений на вашу ціну купівлі. Ринкова дохідність використовує поточну ціну. За незмінного дивіденду подорожчання акції знижує ринкову дохідність, але не дохідність на незмінну ціну купівлі."
      }
    ],
    "disclaimer": "Не прогнозує виплати чи ціну акції, не розраховує податки й повну дохідність зі зміною ціни. Дивіденди не гарантовані."
  },
  "de": {
    "longDescription": "Die Dividendenrendite misst die Jahresdividende am Aktienkurs. Beide Zahlen trägst du selbst ein: die Rendite auf deinen Kaufpreis ist nicht die Rendite auf den heutigen Kurs, und der Rechner setzt die eine nicht stillschweigend für die andere ein.",
    "howToUse": [
      "Trage die gesamte Jahresdividende je Aktie ein, nicht nur eine Quartalszahlung.",
      "Trage einen positiven Aktienpreis ein: den Marktpreis oder deinen Kaufpreis.",
      "Gib optional die Aktienanzahl an, auch Bruchteile; ein leeres Feld lässt die Berechnung des Bestands weg."
    ],
    "howItWorks": "Rendite = Jahresdividende je Aktie ÷ Aktienkurs × 100.",
    "example": "Jahresdividende 12 und Preis 200 ergeben 6%. Bei 2,5 Aktien: Jahresdividenden 30, Bestandswert 500. Null Dividende ergibt null Rendite; null als Preis ist unzulässig.",
    "faq": [
      {
        "q": "Welchen Kurs soll ich nehmen?",
        "a": "Dein Kaufpreis ergibt die Rendite auf deine Anschaffungskosten; der derzeitige Kurs die Rendite, die ein neuer Käufer bekäme. Es sind verschiedene Zahlen, und beide sind berechtigt."
      },
      {
        "q": "Sind Steuern berücksichtigt?",
        "a": "Nein. Trage die Dividende nach Steuern ein, wenn du die Nettorendite willst."
      },
      {
        "q": "Ruft der Rechner Kurse ab?",
        "a": "Nein. Er arbeitet allein mit den Zahlen, die du einträgst, und verbindet sich mit nichts."
      },
      {
        "q": "Ist eine hohe Rendite immer gut?",
        "a": "Nicht unbedingt. Bei unveränderter Dividende erhöht ein fallender Kurs das Verhältnis. Geschäftsrisiken oder erwartete Kürzungen können die Ursache sein. Die Rendite enthält keine Kursänderung und garantiert keine künftige Dividende."
      }
    ],
    "disclaimer": "Keine Prognose von Ausschüttung oder Aktienpreis, keine Steuerrechnung oder Gesamtrendite mit Kursänderung. Dividenden sind nicht garantiert."
  },
  "es": {
    "longDescription": "La rentabilidad por dividendo mide el dividendo anual frente al precio de la acción. Ambas cifras las introduces tú: la rentabilidad sobre tu precio de compra no es la rentabilidad sobre el precio de mercado de hoy, y la calculadora no va a sustituir una por otra en silencio.",
    "howToUse": [
      "Introduce el dividendo anual total por acción, no solo un pago trimestral.",
      "Introduce un precio positivo por acción: de mercado o de compra.",
      "Opcionalmente indica el número de acciones, también fraccionarias; un campo vacío omite el cálculo de la cartera."
    ],
    "howItWorks": "Rentabilidad = dividendo anual por acción ÷ precio de la acción × 100.",
    "example": "Dividendo anual 12 y precio 200 dan el 6%. Para 2,5 acciones: dividendos anuales 30 y valor de cartera 500. Un dividendo cero da rentabilidad cero; el precio cero no es válido.",
    "faq": [
      {
        "q": "¿Qué precio debo usar?",
        "a": "Tu precio de compra da la rentabilidad sobre tu coste; el precio actual da la rentabilidad que obtendría un comprador nuevo. Son cifras distintas y ambas son legítimas."
      },
      {
        "q": "¿Se tienen en cuenta los impuestos?",
        "a": "No. Introduce el dividendo neto si quieres la rentabilidad neta."
      },
      {
        "q": "¿La calculadora consulta cotizaciones?",
        "a": "No. Trabaja solo con los números que introduces y no se conecta a nada."
      },
      {
        "q": "¿Una rentabilidad alta siempre es buena?",
        "a": "No necesariamente. Con un dividendo constante, una caída del precio eleva el cociente. Puede reflejar riesgos del negocio o recortes esperados. La rentabilidad no incluye cambios de cotización ni garantiza futuros dividendos."
      }
    ],
    "disclaimer": "No pronostica pagos o cotizaciones ni calcula impuestos o retorno total con cambios de precio. Los dividendos no están garantizados."
  }
};
