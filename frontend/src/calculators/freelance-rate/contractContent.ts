import type { CalculatorDef } from '../../lib/types';
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Считает ставку в обратную сторону: не «сколько выйдет при такой цене часа», а «какую цену часа выставлять, чтобы получить нужную сумму на руки». Между желаемым доходом и ставкой стоят две поправки, без которых цена часа систематически занижается. Первая — оплачиваемая доля: часть недели уходит на переписку, счета и поиск заказов, и делить доход на все рабочие часы значит работать половину времени бесплатно. Вторая — налог: он берётся с оборота, поэтому выставить нужно больше, чем хочется получить. Расходы вычитаются после условного удержания с оборота и не уменьшают его базу. 6% — допущение примера, а не налоговая ставка для всех фрилансеров. Дни и часы могут быть дробными средними величинами; оплачиваемую долю выбирают по собственному учёту времени.",
    "howToUse": [
      "Введите сумму, которую хотите получать на руки за месяц.",
      "Укажите рабочие дни и часы — столько времени вы готовы работать.",
      "Задайте долю оплачиваемых часов: оцените её по собственному учёту времени.",
      "Добавьте расходы на работу и ставку своего налогового режима."
    ],
    "howItWorks": "Оплачиваемые часы = дни × часы в день × оплачиваемый процент / 100. В этой модели выбранное удержание берётся со всей выставленной суммы: счёт = (целевой остаток после расходов + расходы) / (1 − ставка / 100). Часовая ставка = счёт / оплачиваемые часы; дневная = счёт / рабочие дни. Оплачиваемая доля должна быть больше 0 и не больше 100%; ставка — от 0 до менее 100%. Фактический налог с прибыли, прогрессивная шкала, НДС и взносы требуют другой модели.",
    "example": "Чтобы оставалось 150 000 ₽ после расходов 15 000 ₽ и условного удержания 6% с оборота, при 21 дне по 6 часов и 70% оплачиваемого времени нужно выставить 175 531,91 ₽: 88,2 оплачиваемого часа дают 1990,16 ₽/ч. При расходах 0 на тех же входах ставка 1809,23 ₽/ч.",
    "faq": [
      {
        "q": "Почему нельзя делить доход на все рабочие часы?",
        "a": "Потому что часть времени не оплачивается: переписка, счета, правки и поиск заказов. Если считать по всем часам, ставка выйдет заниженной ровно на долю этой работы."
      },
      {
        "q": "Какую долю оплачиваемых часов ставить?",
        "a": "Возьмите долю оплачиваемых часов из своего учёта: оплачиваемые часы / все рабочие часы × 100. Переписка, продажи и администрирование могут уменьшать её; универсальная «нормальная» доля здесь не задаётся."
      },
      {
        "q": "Почему налог делит, а не прибавляется?",
        "a": "Налог берётся с полученной суммы, а не с желаемой. Чтобы после вычета осталось 100 000 при ставке 6 %, выставить надо 106 383, а не 106 000."
      },
      {
        "q": "Что относить к расходам на работу?",
        "a": "Подписки, оборудование, аренду места и комиссии площадок — всё, что оплачивается из дохода до того, как он станет вашим."
      },
      {
        "q": "Ставка за день — это дневной заработок?",
        "a": "Это оплачиваемая часть дня по выведенной ставке. Полный рабочий день длиннее, потому что часть его не оплачивается."
      }
    ],
    "disclaimer": "Расходы вычитаются после условного удержания с оборота и не уменьшают его базу. 6% — допущение примера, а не налоговая ставка для всех фрилансеров. Дни и часы могут быть дробными средними величинами; оплачиваемую долю выбирают по собственному учёту времени."
  },
  "en": {
    "longDescription": "Works backwards: not «what will I earn at this rate» but «what rate must I charge to take home this much». Two corrections sit between the target income and the rate, and without them the hourly price comes out systematically low. The first is the billable share: part of every week goes on email, invoices and finding work, so dividing income across all working hours assumes that every working hour can be billed. The second is the assumed withholding, applied here to turnover — meaning you must invoice more than you want to receive. Costs are deducted after the assumed turnover withholding and do not reduce its base. The example’s 6% is an assumption, not a tax rate for all freelancers. Days and hours can be fractional averages; choose the billable share from your own time records.",
    "howToUse": [
      "Enter the amount you want to take home each month.",
      "Enter the working days and hours you are prepared to put in.",
      "Set the billable share — estimate it from your own time records.",
      "Add your business costs and the rate of your tax regime."
    ],
    "howItWorks": "Billable hours = days × hours per day × billable percentage / 100. In this model the chosen withholding applies to the entire invoice: invoice = (target remainder after costs + costs) / (1 − rate / 100). Hourly rate = invoice / billable hours; day rate = invoice / working days. Billable share must be above 0 and at most 100%; the rate is from 0 to below 100%. Actual taxes on profit, progressive bands, VAT and social contributions need a different model.",
    "example": "To retain 150,000 after 15,000 of costs and an assumed 6% turnover withholding, with 21 days of 6 hours and 70% billable time, invoice 175,531.91: 88.2 billable hours give 1,990.16 per hour. With zero costs and the same other inputs the rate is 1,809.23.",
    "faq": [
      {
        "q": "Why not divide income across all working hours?",
        "a": "Because some of the time is never billed: email, invoices, revisions and finding work. Counting every hour understates the rate by exactly that share."
      },
      {
        "q": "What billable share should I use?",
        "a": "Use your records: billed hours / all working hours × 100. Correspondence, sales and administration can reduce it; this page does not prescribe a universal normal share."
      },
      {
        "q": "Why does tax divide rather than add?",
        "a": "Tax is charged on what you receive, not on what you want. To be left with 100000 at a 6% rate you must invoice 106383, not 106000."
      },
      {
        "q": "What counts as a business cost?",
        "a": "Subscriptions, equipment, desk rent and platform fees — anything paid out of income before it becomes yours."
      },
      {
        "q": "Is the day rate a full day's earnings?",
        "a": "It is the billable part of a day at the calculated rate. A full working day is longer, because part of it is not billed."
      }
    ],
    "disclaimer": "Costs are deducted after the assumed turnover withholding and do not reduce its base. The example’s 6% is an assumption, not a tax rate for all freelancers. Days and hours can be fractional averages; choose the billable share from your own time records."
  },
  "uk": {
    "longDescription": "Ставка фрилансера рахується не від бажаного доходу навпростець: оплачуваними виявляється лише частина робочого часу, а податок береться з усієї суми. Тому виставляти доводиться помітно більше, ніж підказує ділення доходу на години. Витрати віднімаються після умовного утримання з обороту й не зменшують його базу. 6% — припущення прикладу, а не ставка для всіх фрилансерів. Дні та години можуть бути дробовими середніми; оплачувану частку обирайте за власним обліком часу.",
    "howToUse": [
      "Введіть бажаний дохід на руки.",
      "Введіть робочі дні на місяць і години на день.",
      "Задайте частку оплачуваного часу — за власним обліком часу.",
      "Введіть ставку податку й ділові витрати."
    ],
    "howItWorks": "Оплачувані години = дні × години на день × оплачуваний відсоток / 100. У цій моделі задане утримання застосовується до всієї суми рахунку: рахунок = (цільовий залишок після витрат + витрати) / (1 − ставка / 100). Ставка за годину = рахунок / оплачувані години; за день = рахунок / робочі дні. Оплачувана частка понад 0 і не більше 100%; ставка — від 0 до менш ніж 100%. Податок із прибутку, прогресивна шкала, ПДВ та внески потребують іншої моделі.",
    "example": "Щоб залишалося 150 000 ₴ після витрат 15 000 ₴ та умовного утримання 6% з обороту, за 21 дня по 6 годин і 70% оплачуваного часу потрібно виставити 175 531,91 ₴: 88,2 оплачуваної години дають 1990,16 ₴/год. За витрат 0 та тих самих інших входів ставка 1809,23 ₴/год.",
    "faq": [
      {
        "q": "Чому оплачувано лише 60–70 % часу?",
        "a": "Візьміть частку зі свого обліку: оплачувані години / усі робочі години × 100. Переговори, продажі й адміністрування можуть її зменшувати; універсального нормативу тут немає."
      },
      {
        "q": "Чому податок ділиться, а не віднімається?",
        "a": "Бо він береться з усієї виставленої суми. Щоб після податку лишилася потрібна сума, виставляти треба дохід, поділений на (1 − ставка), а не дохід плюс податок."
      },
      {
        "q": "Які ділові витрати враховувати?",
        "a": "Обладнання, програми, зв’язок, оренду робочого місця, бухгалтерію, страхування. Плюс відсутність оплачуваної відпустки й лікарняних — це теж витрати, які має покривати ставка."
      },
      {
        "q": "Як порівняти ставку з окладом?",
        "a": "Для порівняння спершу визначте однаковий період та однаковий залишок після витрат і утримань. Відпустка, страхування, внески й обладнання можуть фінансуватися по-різному; внесіть власні витрати та доступні оплачувані години. Сам калькулятор не визначає внески роботодавця чи універсальну перевагу однієї форми роботи."
      }
    ],
    "disclaimer": "Витрати віднімаються після умовного утримання з обороту й не зменшують його базу. 6% — припущення прикладу, а не ставка для всіх фрилансерів. Дні та години можуть бути дробовими середніми; оплачувану частку обирайте за власним обліком часу."
  },
  "de": {
    "longDescription": "Rechnet rückwärts: nicht „was verdiene ich zu diesem Satz“, sondern „welchen Satz muss ich verlangen, um so viel netto zu behalten“. Zwischen dem Zieleinkommen und dem Satz stehen zwei Korrekturen, und ohne sie fällt der Stundenpreis regelmäßig zu niedrig aus. Die erste ist der abrechenbare Anteil: ein Teil jeder Woche geht für E-Mails, Rechnungen und die Suche nach Aufträgen drauf, das Einkommen über alle Arbeitsstunden zu teilen heißt also, die halbe Zeit umsonst zu arbeiten. Die zweite ist die Steuer, die auf den Umsatz erhoben wird — du musst also mehr in Rechnung stellen, als du bekommen willst. Kosten werden nach dem angenommenen Umsatzabzug abgezogen und mindern dessen Bemessungsgrundlage nicht. Die 6% im Beispiel sind eine Annahme, kein Steuersatz für alle Selbstständigen. Tage und Stunden dürfen gebrochene Durchschnittswerte sein; der abrechenbare Anteil folgt der eigenen Zeiterfassung.",
    "howToUse": [
      "Trage den Betrag ein, den du monatlich netto behalten willst.",
      "Trage die Arbeitstage und Arbeitsstunden ein, die du aufbringen willst.",
      "Setze den abrechenbaren Anteil — ermittle ihn aus deiner eigenen Zeiterfassung.",
      "Ergänze deine Betriebskosten und den Satz deiner Besteuerung."
    ],
    "howItWorks": "Abrechenbare Stunden = Tage × Stunden je Tag × abrechenbarer Prozentsatz / 100. Im Modell gilt der gewählte Abzug für die ganze Rechnung: Rechnungsbetrag = (Zielrest nach Kosten + Kosten) / (1 − Satz / 100). Stundensatz = Rechnungsbetrag / abrechenbare Stunden; Tagessatz = Rechnungsbetrag / Arbeitstage. Der abrechenbare Anteil liegt über 0 und höchstens bei 100%, der Abzugssatz bei mindestens 0 und unter 100%. Tatsächliche Gewinnsteuern, progressive Tarife, Umsatzsteuer und Sozialbeiträge benötigen ein anderes Modell.",
    "example": "Für 3000 € Rest nach 300 € Kosten und angenommenen 6% Umsatzabzug sind bei 21 Tagen zu 6 Stunden und 70% abrechenbarer Zeit 3510,64 € abzurechnen: 88,2 Stunden ergeben 39,80 €/h. Ohne Kosten und bei sonst gleichen Eingaben beträgt der Satz 36,18 €/h.",
    "faq": [
      {
        "q": "Warum nicht das Einkommen über alle Arbeitsstunden teilen?",
        "a": "Weil ein Teil der Zeit nie abgerechnet wird: E-Mails, Rechnungen, Überarbeitungen und die Suche nach Aufträgen. Jede Stunde mitzuzählen setzt den Satz genau um diesen Anteil zu niedrig an."
      },
      {
        "q": "Welchen abrechenbaren Anteil soll ich nehmen?",
        "a": "Nutze deine Aufzeichnungen: abgerechnete Stunden / alle Arbeitsstunden × 100. Kommunikation, Vertrieb und Verwaltung können den Anteil senken; ein allgemeiner Normalwert wird nicht festgelegt."
      },
      {
        "q": "Warum wird die Steuer geteilt und nicht addiert?",
        "a": "Die Steuer wird auf das erhoben, was du bekommst, und nicht auf das, was du willst. Um bei einem Satz von 19 % 3000 € zu behalten, musst du 3703,70 € in Rechnung stellen und nicht 3570 €."
      },
      {
        "q": "Was zählt als Betriebskosten?",
        "a": "Abonnements, Ausstattung, Miete für einen Arbeitsplatz und Plattformgebühren — alles, was aus dem Einkommen bezahlt wird, bevor es dir gehört."
      },
      {
        "q": "Ist der Tagessatz der Verdienst eines vollen Tages?",
        "a": "Er ist der abrechenbare Teil eines Tages zum berechneten Satz. Ein voller Arbeitstag ist länger, weil ein Teil davon nicht abgerechnet wird."
      }
    ],
    "disclaimer": "Kosten werden nach dem angenommenen Umsatzabzug abgezogen und mindern dessen Bemessungsgrundlage nicht. Die 6% im Beispiel sind eine Annahme, kein Steuersatz für alle Selbstständigen. Tage und Stunden dürfen gebrochene Durchschnittswerte sein; der abrechenbare Anteil folgt der eigenen Zeiterfassung."
  },
  "es": {
    "longDescription": "Trabaja al revés: no «cuánto ganaré con esta tarifa» sino «qué tarifa tengo que cobrar para llevarme esto a casa». Entre los ingresos objetivo y la tarifa hay dos correcciones, y sin ellas el precio por hora sale sistemáticamente bajo. La primera es la parte facturable: cada semana se va una porción en correo, facturas y buscar trabajo, así que repartir los ingresos entre todas las horas trabajadas significa trabajar la mitad del tiempo gratis. La segunda son los impuestos, que se cobran sobre la facturación, es decir, que tienes que facturar más de lo que quieres recibir. Los gastos se descuentan después de la retención supuesta sobre facturación y no reducen su base. El 6% del ejemplo es una hipótesis, no un tipo para todos los autónomos. Los días y las horas pueden ser medias fraccionarias; elige la parte facturable según tu registro de tiempo.",
    "howToUse": [
      "Introduce la cantidad que quieres llevarte a casa cada mes.",
      "Introduce los días y las horas de trabajo que estás dispuesto a dedicar.",
      "Fija la parte facturable: estímala con tu propio registro de tiempo.",
      "Añade los gastos de tu negocio y el tipo de tu régimen fiscal."
    ],
    "howItWorks": "Horas facturables = días × horas por día × porcentaje facturable / 100. En este modelo la retención elegida se aplica a toda la factura: factura = (resto objetivo después de gastos + gastos) / (1 − tipo / 100). Tarifa por hora = factura / horas facturables; tarifa diaria = factura / días de trabajo. La parte facturable debe superar 0 y no exceder el 100%; el tipo va de 0 a menos del 100%. Impuestos reales sobre beneficio, tramos progresivos, IVA y cotizaciones necesitan otro modelo.",
    "example": "Para conservar 1500 después de 150 de gastos y una retención supuesta del 6% sobre facturación, con 21 días de 6 horas y un 70% facturable, factura 1755,32: 88,2 horas dan 19,90 por hora. Sin gastos y con las mismas otras entradas, la tarifa es 18,09.",
    "faq": [
      {
        "q": "¿Por qué no repartir los ingresos entre todas las horas trabajadas?",
        "a": "Porque parte del tiempo no se factura nunca: correo, facturas, revisiones y buscar trabajo. Contar todas las horas subestima la tarifa exactamente en esa proporción."
      },
      {
        "q": "¿Qué parte facturable debo usar?",
        "a": "Usa tus registros: horas facturadas / todas las horas de trabajo × 100. Comunicación, ventas y administración pueden reducirla; aquí no se prescribe una proporción normal universal."
      },
      {
        "q": "¿Por qué el impuesto divide en vez de sumar?",
        "a": "El impuesto se cobra sobre lo que recibes, no sobre lo que quieres. Para quedarte con 1000 con un tipo del 6 % tienes que facturar 1063,83, no 1060."
      },
      {
        "q": "¿Qué cuenta como gasto del negocio?",
        "a": "Suscripciones, equipos, alquiler de puesto y comisiones de plataforma: todo lo que se paga con los ingresos antes de que sean tuyos."
      },
      {
        "q": "¿La tarifa por día son los ingresos de una jornada completa?",
        "a": "Es la parte facturable de una jornada a la tarifa calculada. Una jornada completa es más larga, porque una parte no se factura."
      }
    ],
    "disclaimer": "Los gastos se descuentan después de la retención supuesta sobre facturación y no reducen su base. El 6% del ejemplo es una hipótesis, no un tipo para todos los autónomos. Los días y las horas pueden ser medias fraccionarias; elige la parte facturable según tu registro de tiempo."
  }
};
