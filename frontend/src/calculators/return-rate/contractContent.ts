// Subject copy reviewed against the actual fields, formula and result rows.
import type { CalculatorDef } from '../../lib/types';

type ContractCopy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractCopy> = {
  "ru": {
    "longDescription": "Доля возвратов показывает, какая часть выбранной группы заказов была возвращена. Возвраты должны относиться к тем же заказам в знаменателе: события возврата этого месяца могут касаться покупок предыдущего. Каждый возвращённый заказ учитывается один раз, независимо от числа возвращённых товаров.",
    "howToUse": [
      "Выберите группу заказов, например все отправленные за месяц.",
      "Введите число возвращённых заказов из этой группы и её полное целое количество; один заказ считайте один раз.",
      "Прочитайте долю возвратов и дополнение до 100%; учитывайте срок, в который группа ещё может вернуть товары."
    ],
    "howItWorks": "Доля возвратов = возвращённые заказы из группы ÷ все заказы группы × 100. Дополнение равно 100% минус доля возвратов. Обе величины целые, знаменатель положительный, возвраты от нуля до размера группы. Форма не сопоставляет заказы и возвраты автоматически.",
    "example": "45 возвращённых заказов из группы 900 дают 5%, дополнение — 95%. Ноль из 900 даёт 0%; 900 из 900 — 100%. Повторный возврат товара того же заказа не увеличивает число заказов.",
    "faq": [
      {
        "q": "Что считать возвратом?",
        "a": "Выберите единое правило: например заказ с хотя бы одним возвращённым товаром. Считайте каждый заказ один раз и используйте соответствующую группу в знаменателе. Отмены до отправки и число отдельных товаров — другие показатели."
      },
      {
        "q": "Почему возвратов не может быть больше заказов?",
        "a": "При подсчёте уникальных возвращённых заказов внутри одной группы числитель не может превышать её размер. Превышение может означать смешанные группы, даты или повторный подсчёт событий возврата; форма не определяет причину."
      },
      {
        "q": "Высокая доля возвратов — это всегда плохо?",
        "a": "Единой нормы нет. Сравнивайте одинаковые категории, каналы и сроки наблюдения. Высокая доля может быть допустима для конкретной модели продаж, но её влияние на выручку и затраты нужно оценивать отдельно."
      },
      {
        "q": "Как возвраты влияют на юнит-экономику?",
        "a": "Они снижают выручку и добавляют логистические расходы, поэтому маржинальный доход стоит пересчитать на оставленные заказы."
      }
    ],
    "disclaimer": "Считает уникальные заказы по вашим правилам, без загрузки истории и автоматического сопоставления возвратов. Дополнение до 100% не доказывает, что срок возврата уже завершён."
  },
  "en": {
    "longDescription": "Return rate measures returned orders within a selected order cohort. Returns must belong to the orders in the denominator: this month’s return events may concern earlier purchases. Count each returned order once, regardless of the number of items returned.",
    "howToUse": [
      "Choose an order cohort, such as all orders dispatched in a month.",
      "Enter returned orders from that cohort and its whole total; count each order once.",
      "Read the return rate and its complement to 100%; allow for the cohort’s return window."
    ],
    "howItWorks": "Return rate = returned orders from the cohort ÷ all orders in the cohort × 100. The complement is 100% minus the return rate. Both counts are whole, the denominator is positive, and returns range from zero to the cohort size. The form does not match orders to returns automatically.",
    "example": "45 returned orders from a cohort of 900 give 5%, with a 95% complement. Zero of 900 gives 0%; 900 of 900 gives 100%. Another item return from the same order does not increase the order count.",
    "faq": [
      {
        "q": "What counts as a return?",
        "a": "Choose one rule, for example an order with at least one returned item. Count each order once and use the matching cohort in the denominator. Pre-dispatch cancellations and individual returned items are different measures."
      },
      {
        "q": "Why can returns not exceed orders?",
        "a": "Unique returned orders within one cohort cannot exceed its size. An excess may mean mixed cohorts, dates or duplicate return events; the form cannot identify the cause."
      },
      {
        "q": "Is a high return rate always bad?",
        "a": "There is no universal benchmark. Compare like categories, channels and observation windows. A high rate may fit a particular sales model, but assess its revenue and cost effects separately."
      },
      {
        "q": "How does this affect unit economics?",
        "a": "Returns cut revenue and add logistics costs, so contribution margin should be recalculated on kept orders."
      }
    ],
    "disclaimer": "Counts unique orders under your policy, without importing histories or matching returns automatically. The complement to 100% does not prove the return window has closed."
  },
  "uk": {
    "longDescription": "Частка повернень показує, яка частина обраної групи замовлень була повернута. Повернення мають належати тим самим замовленням у знаменнику: події повернення цього місяця можуть стосуватися попередніх покупок. Кожне повернуте замовлення враховуйте один раз незалежно від кількості товарів.",
    "howToUse": [
      "Виберіть групу замовлень, наприклад усі відправлені за місяць.",
      "Введіть кількість повернутих замовлень із цієї групи та її цілу загальну кількість; кожне замовлення рахуйте один раз.",
      "Прочитайте частку повернень і доповнення до 100%; врахуйте строк, коли група ще може повернути товари."
    ],
    "howItWorks": "Частка повернень = повернуті замовлення групи ÷ усі замовлення групи × 100. Доповнення дорівнює 100% мінус частка повернень. Обидві кількості цілі, знаменник додатний, повернення від нуля до розміру групи. Форма не зіставляє замовлення й повернення автоматично.",
    "example": "45 повернутих замовлень із групи 900 дають 5%, доповнення — 95%. Нуль із 900 дає 0%; 900 із 900 — 100%. Повторне повернення товару того самого замовлення не збільшує кількість замовлень.",
    "faq": [
      {
        "q": "Чому показник занижується при зростанні продажів?",
        "a": "Повернення можуть надходити із затримкою. Якщо ділити повернення старих покупок на нові замовлення, зростання продажів знижує відсоток без зміни поведінки. Зіставляйте повернення з їхньою групою замовлень і порівнюйте однакові строки спостереження."
      },
      {
        "q": "Яка частка повернень нормальна?",
        "a": "Єдиної норми немає: категорія, канал, правила повернення й строк спостереження впливають на показник. Порівнюйте свої групи за однаковими правилами; калькулятор не містить галузевих нормативів."
      },
      {
        "q": "Чому повернення дорожчі, ніж здається?",
        "a": "Можливі зворотна логістика, перевірка, перепакування й уцінка. Їхня величина залежить від товару та процесу. Цей відсоток не розраховує збитки або маржу."
      },
      {
        "q": "Як зменшити повернення?",
        "a": "Перевіряйте причини у своїх даних: точні розміри, фотографії, описи та контроль якості можуть допомогти, якщо проблема саме в них. Порівнюйте зіставні групи замовлень; форма не визначає причини повернень."
      }
    ],
    "disclaimer": "Рахує унікальні замовлення за вашим правилом, без завантаження історії та автоматичного зіставлення повернень. Доповнення до 100% не доводить завершення строку повернення."
  },
  "de": {
    "longDescription": "Die Rücksendequote zeigt den Anteil zurückgesandter Bestellungen einer ausgewählten Bestellkohorte. Die Rücksendungen müssen zu den Bestellungen im Nenner gehören: Rücksendungen dieses Monats können ältere Käufe betreffen. Zähle jede zurückgesandte Bestellung einmal, unabhängig von der Stückzahl.",
    "howToUse": [
      "Wähle eine Bestellkohorte, etwa alle in einem Monat versandten Bestellungen.",
      "Trage zurückgesandte Bestellungen dieser Gruppe und ihre ganze Gesamtzahl ein; zähle jede Bestellung einmal.",
      "Lies Rücksendequote und Ergänzung auf 100% ab; beachte das Rückgabefenster der Kohorte."
    ],
    "howItWorks": "Rücksendequote = zurückgesandte Bestellungen der Kohorte ÷ alle Bestellungen der Kohorte × 100. Die Ergänzung beträgt 100% minus Rücksendequote. Beide Zahlen sind ganzzahlig, der Nenner positiv und die Rücksendungen zwischen null und der Gruppengröße. Die Zuordnung erfolgt nicht automatisch.",
    "example": "45 zurückgesandte Bestellungen aus einer Gruppe von 900 ergeben 5%, die Ergänzung 95%. Null von 900 ergibt 0%; 900 von 900 ergibt 100%. Eine weitere Artikelrückgabe derselben Bestellung erhöht die Bestellzahl nicht.",
    "faq": [
      {
        "q": "Was zählt als Rücksendung?",
        "a": "Wähle eine Regel, etwa eine Bestellung mit mindestens einem zurückgegebenen Artikel. Zähle jede Bestellung einmal und verwende die passende Kohorte im Nenner. Stornierungen vor Versand und einzelne Artikel sind andere Kennzahlen."
      },
      {
        "q": "Warum dürfen Rücksendungen die Bestellungen nicht übersteigen?",
        "a": "Einmalig gezählte zurückgesandte Bestellungen einer Kohorte können deren Größe nicht überschreiten. Ein Überschuss kann an gemischten Gruppen, Zeiträumen oder doppelten Ereignissen liegen; das Formular ermittelt die Ursache nicht."
      },
      {
        "q": "Ist eine hohe Rücksendequote immer schlecht?",
        "a": "Es gibt keinen universellen Grenzwert. Vergleiche gleiche Kategorien, Kanäle und Beobachtungsfenster. Eine hohe Quote kann zum Vertriebsmodell passen; Umsatz- und Kosteneffekte sind gesondert zu prüfen."
      },
      {
        "q": "Wie wirkt sich das auf die Deckungsrechnung aus?",
        "a": "Rücksendungen mindern den Umsatz und bringen Logistikkosten, der Deckungsbeitrag gehört deshalb auf behaltene Bestellungen neu gerechnet."
      }
    ],
    "disclaimer": "Zählt eindeutige Bestellungen nach deiner Regel, ohne Datenimport oder automatische Zuordnung. Die Ergänzung auf 100% belegt nicht, dass das Rückgabefenster geschlossen ist."
  },
  "es": {
    "longDescription": "La tasa mide pedidos devueltos dentro de una cohorte de pedidos. Las devoluciones deben pertenecer a los pedidos del denominador: las devoluciones de este mes pueden proceder de compras anteriores. Cuenta cada pedido devuelto una vez, independientemente del número de artículos.",
    "howToUse": [
      "Elige una cohorte de pedidos, por ejemplo todos los enviados en un mes.",
      "Introduce sus pedidos devueltos y el total entero del grupo; cuenta cada pedido una vez.",
      "Consulta la tasa y su complemento hasta el 100%; ten en cuenta el plazo de devolución de la cohorte."
    ],
    "howItWorks": "Tasa de devoluciones = pedidos devueltos de la cohorte ÷ todos sus pedidos × 100. El complemento es 100% menos la tasa. Los recuentos son enteros, el denominador positivo y las devoluciones van de cero al tamaño del grupo. El formulario no vincula pedidos y devoluciones automáticamente.",
    "example": "45 pedidos devueltos de una cohorte de 900 dan el 5%, con complemento del 95%. Cero de 900 da el 0%; 900 de 900 da el 100%. Otra devolución de artículos del mismo pedido no aumenta el recuento de pedidos.",
    "faq": [
      {
        "q": "¿Qué cuenta como devolución?",
        "a": "Elige un criterio, como un pedido con al menos un artículo devuelto. Cuenta cada pedido una vez y usa su cohorte en el denominador. Las cancelaciones antes del envío y los artículos individuales son otras métricas."
      },
      {
        "q": "¿Por qué las devoluciones no pueden superar a los pedidos?",
        "a": "Los pedidos devueltos únicos de una cohorte no pueden superar su tamaño. Un exceso puede indicar grupos o fechas mezclados, o eventos duplicados; el formulario no identifica la causa."
      },
      {
        "q": "¿Una tasa de devoluciones alta siempre es mala?",
        "a": "No hay un umbral universal. Compara categorías, canales y plazos de observación equivalentes. Una tasa alta puede encajar con un modelo de venta; evalúa por separado sus efectos en ingresos y costes."
      },
      {
        "q": "¿Cómo afecta a la economía unitaria?",
        "a": "Las devoluciones recortan ingresos y añaden costes de logística, así que el margen de contribución debe recalcularse sobre los pedidos que se quedan."
      }
    ],
    "disclaimer": "Cuenta pedidos únicos según tu criterio, sin importar historiales ni vincular devoluciones automáticamente. El complemento hasta el 100% no demuestra que haya terminado el plazo de devolución."
  }
};
