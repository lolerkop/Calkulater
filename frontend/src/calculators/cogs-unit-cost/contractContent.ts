import type { CalculatorDef } from '../../lib/types';

// Reviewed original public145 bodies are retained where factual. Native corrections
// are AI authored; human subject and language review remains pending.
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Средняя себестоимость единицы делит затраты выбранной партии на число годных единиц. Материалы, труд и отнесённые накладные вводятся за одну и ту же партию. Увеличение тиража уменьшает долю только тех затрат, которые действительно остаются постоянными; калькулятор не предполагает этого автоматически. Доля материалов показывает чувствительность: при неизменных остальных затратах и выпуске рост цены материалов на 10 % увеличивает общий результат на 10 % их доли.",
    "howItWorks": "Себестоимость единицы = (материалы + труд + накладные) ÷ тираж. Доля материалов — материалы, делённые на сумму затрат, в процентах. Тираж — положительное целое число. Если все три суммы нулевые, себестоимость равна нулю, а доля материалов не показана: у неё нет ненулевого знаменателя. Это средняя распределённая стоимость, не предельная стоимость дополнительной единицы.",
    "example": "Материалы 240 000, труд 96 000 и накладные 54 000 на 1 500 штук дают 260 ₽ за единицу. Нулевая сумма затрат при 10 годных единицах даёт стоимость 0; доля материалов не выводится.",
    "howToUse": [
      "Введите стоимость материалов на всю партию.",
      "Укажите затраты на труд по той же партии.",
      "Укажите накладные расходы, отнесённые на партию.",
      "Введите, сколько единиц дала партия.",
      "Меняя тираж, пересчитайте материалы и труд по реальному сценарию; не оставляйте их постоянными, если закупки и часы растут."
    ],
    "faq": [
      {
        "q": "Какие затраты относить к накладным?",
        "a": "Всё, что партия потребила, не входя в сам товар: аренда цеха, амортизация оборудования, работа мастера. Общефирменные расходы вроде маркетинга в себестоимость единицы обычно не включают."
      },
      {
        "q": "Почему при большем тираже себестоимость единицы падает?",
        "a": "Только при соответствующей структуре затрат. Если материалы и труд на штуку неизменны, а накладные на партию постоянны, их доля на штуку падает. Если накладные тоже растут с выпуском или меняются цены, снижение не гарантировано."
      },
      {
        "q": "Считать ли брак в тираже?",
        "a": "Для средней стоимости годной продукции вводите число годных единиц. Однако необычные потери и затраты на брак нельзя автоматически распределять в стоимость запасов: их учёт зависит от применяемых правил. Сначала определите базу затрат партии."
      },
      {
        "q": "Это и есть цена, которую нужно назначить?",
        "a": "Нет. Средняя производственная стоимость помогает оценить маржу, но сама по себе не является универсальным минимальным тарифом или рекомендацией цены. Продажа, налоги, спрос, дополнительный заказ и свободные мощности требуют отдельного анализа."
      }
    ],
    "disclaimer": "Средняя стоимость выбранной партии в одной валюте без обмена. Не предельные затраты и не универсальная рекомендуемая цена."
  },
  "en": {
    "longDescription": "Average unit cost divides the selected batch costs by its count of usable units. Materials, labour and allocated overhead must all refer to that batch. A larger batch spreads only costs that actually remain fixed; the calculator does not assume this automatically. Material share measures sensitivity: with other costs and output unchanged, a 10% increase in material cost raises the total by 10% of that share.",
    "howItWorks": "Cost per unit = (materials + labour + overhead) ÷ units. The materials share is materials divided by the total cost, shown as a percentage. Batch size is a positive whole count. If all three costs are zero, unit cost is zero and material share is omitted because its denominator is zero. This is an average allocated cost, not the marginal cost of one extra unit.",
    "example": "Materials 240,000, labour 96,000 and overhead 54,000 across 1,500 units give 260 per unit. Zero total cost for 10 usable units gives unit cost 0; material share is omitted.",
    "howToUse": [
      "Enter the cost of materials for the whole run.",
      "Enter the labour cost for the same run.",
      "Enter the overhead allocated to the run.",
      "Enter how many units the run produced.",
      "When changing batch size, update materials and labour to the actual scenario; do not hold them fixed if purchases and work hours increase."
    ],
    "faq": [
      {
        "q": "Which costs belong in overhead here?",
        "a": "Everything the run consumed without being part of the product: rent for the production floor, equipment depreciation, supervision. Company-wide costs such as marketing usually do not belong in the unit cost."
      },
      {
        "q": "Why does the unit cost fall when the run gets bigger?",
        "a": "Only with suitable cost behaviour. If material and labour per unit stay constant and batch overhead stays fixed, overhead per unit falls. If overhead also grows with output or prices change, lower unit cost is not guaranteed."
      },
      {
        "q": "Should defective units be counted in the run size?",
        "a": "For usable-output average cost, use usable units. Abnormal waste and defective-unit costs should not automatically be capitalised into inventory; treatment depends on the applicable accounting rules. Define the batch-cost basis first."
      },
      {
        "q": "Is this the price I should charge?",
        "a": "No. Average production cost helps assess margin but is not a universal price floor or a pricing recommendation. Selling costs, taxes, demand, incremental orders and spare capacity need separate analysis."
      }
    ],
    "disclaimer": "Average cost of the selected batch in one currency without exchange. Not marginal cost or a universal recommended price."
  },
  "uk": {
    "longDescription": "Середня собівартість одиниці ділить витрати вибраної партії на кількість придатних одиниць. Матеріали, праця й розподілені накладні мають стосуватися цієї партії. Більший наклад розподіляє лише ті витрати, які справді залишаються сталими; калькулятор не припускає цього автоматично. Частка матеріалів показує чутливість: за незмінних інших витрат і випуску подорожчання матеріалів на 10 % піднімає суму на 10 % їхньої частки.",
    "howItWorks": "Собівартість одиниці дорівнює (матеріали + праця + накладні) ÷ наклад. Частка матеріалів рахується як матеріали, поділені на суму всіх витрат, у відсотках — вона показує, наскільки собівартість чутлива до цін постачальників. Наклад — додатна ціла кількість. Якщо всі три суми нульові, собівартість нульова, а частка матеріалів не показується через нульовий знаменник. Це середня розподілена вартість, а не граничні витрати додаткової одиниці.",
    "example": "Матеріали 240 000, праця 96 000 і накладні 54 000 на 1500 штук дають 260 за одиницю. Якщо подвоїти матеріали, працю й випуск до 3000, залишивши накладні 54 000, результат дорівнює 242. Усі суми задаються в одній вибраній валюті без перерахунку. Нульові витрати на 10 придатних одиниць дають вартість 0; частка матеріалів не показується.",
    "howToUse": [
      "Введіть вартість матеріалів на всю партію.",
      "Введіть витрати на працю.",
      "Введіть накладні витрати та кількість одиниць у партії.",
      "Змінюючи наклад, перераховуйте матеріали й працю за реальним сценарієм; не залишайте їх сталими, якщо закупівлі й години зростають."
    ],
    "faq": [
      {
        "q": "Чому собівартість падає зі зростанням накладу?",
        "a": "Це можливе, коли накладні на партію сталі, а матеріали й праця на одиницю незмінні. У прикладі подвоєння матеріалів до 480 000, праці до 192 000 і випуску до 3000 за накладних 54 000 дає 242 за одиницю. Якщо змінюються інші витрати, зниження не гарантоване."
      },
      {
        "q": "Що вважати накладними витратами?",
        "a": "Виробничі витрати, віднесені на партію: наприклад оренда цеху, амортизація й робота майстра. Вони можуть містити сталу та змінну частини; спосіб розподілу й застосовні правила обліку потрібно визначити до вводу."
      },
      {
        "q": "Навіщо знати частку матеріалів?",
        "a": "За незмінних інших витрат і випуску частка дає точну чутливість до витрат на матеріали: при частке 60 % подорожчання матеріалів на 10 % додає 6 % до загальної собівартості. Це не прогноз зміни всіх цін або випуску."
      },
      {
        "q": "Чи входить сюди доставка до покупця?",
        "a": "Доставка покупцеві не входить у виробничу базу автоматично. Якщо додаєте її до обраної управлінської бази, позначте це явно; тоді результат не буде лише виробничою собівартістю за стандартами обліку."
      }
    ],
    "disclaimer": "Середня вартість вибраної партії в одній валюті без обміну. Не граничні витрати й не універсальна рекомендована ціна."
  },
  "de": {
    "longDescription": "Die durchschnittlichen Stückkosten teilen die Kosten einer ausgewählten Charge durch ihre nutzbare Stückzahl. Material, Arbeit und zugeordnete Gemeinkosten müssen dieselbe Charge betreffen. Eine größere Charge verteilt nur tatsächlich feste Kosten auf mehr Stücke; diese Annahme trifft der Rechner nicht automatisch. Der Materialanteil zeigt Sensitivität: Bei unveränderten übrigen Kosten und Stückzahlen erhöht ein Materialanstieg von 10 % die Summe um 10 % dieses Anteils.",
    "howItWorks": "Kosten je Einheit = (Material + Arbeit + Gemeinkosten) ÷ Einheiten. Der Materialanteil ist das Material geteilt durch die Gesamtkosten, in Prozent. Die Chargengröße ist eine positive ganze Anzahl. Bei drei Nullkosten sind die Stückkosten null; der Materialanteil entfällt wegen des Nullnenners. Dies sind durchschnittlich zugeordnete Kosten, keine Grenzkosten eines zusätzlichen Stücks.",
    "example": "Material 24 000 €, Arbeit 9600 € und Gemeinkosten 5400 € über 1500 Einheiten ergeben 26 € je Stück. Null Gesamtkosten bei 10 nutzbaren Stücken ergeben Stückkosten 0; Materialanteil entfällt.",
    "howToUse": [
      "Trage die Materialkosten für die ganze Auflage ein.",
      "Trage die Arbeitskosten derselben Auflage ein.",
      "Trage die der Auflage zugerechneten Gemeinkosten ein.",
      "Trage ein, wie viele Einheiten die Auflage hervorgebracht hat.",
      "Passe bei anderer Chargengröße Material und Arbeit an das tatsächliche Szenario an; steigende Einkäufe und Arbeitsstunden sind nicht konstant."
    ],
    "faq": [
      {
        "q": "Welche Kosten gehören hier zu den Gemeinkosten?",
        "a": "Alles, was die Auflage verbraucht hat, ohne Teil des Erzeugnisses zu sein: Miete der Fertigungsfläche, Abschreibung der Anlagen, Aufsicht. Unternehmensweite Kosten wie Marketing gehören meist nicht in die Stückkosten."
      },
      {
        "q": "Warum fallen die Stückkosten bei größerer Auflage?",
        "a": "Nur bei passender Kostenstruktur. Bleiben Material und Arbeit je Stück gleich sowie Gemeinkosten je Charge fest, sinkt deren Stückanteil. Steigen auch Gemeinkosten mit dem Ausstoß oder ändern sich Preise, ist eine Senkung nicht garantiert."
      },
      {
        "q": "Sollen fehlerhafte Stücke zur Auflage zählen?",
        "a": "Für durchschnittliche Kosten nutzbarer Ware zählt die nutzbare Stückzahl. Außergewöhnlicher Ausschuss darf jedoch nicht automatisch in Lagerkosten aktiviert werden; die Behandlung folgt den geltenden Rechnungslegungsregeln. Bestimme zuerst die Kostenbasis."
      },
      {
        "q": "Ist das der Preis, den ich verlangen sollte?",
        "a": "Nein. Durchschnittliche Produktionskosten helfen bei der Margenprüfung, sind aber keine allgemeine Preisuntergrenze oder Preisempfehlung. Vertriebskosten, Steuern, Nachfrage, Zusatzaufträge und freie Kapazität erfordern eine eigene Betrachtung."
      }
    ],
    "disclaimer": "Durchschnittskosten der gewählten Charge in einer Währung ohne Umrechnung; keine Grenzkosten oder allgemeine Preisempfehlung."
  },
  "es": {
    "longDescription": "El coste unitario medio divide los costes de un lote entre sus unidades utilizables. Materiales, mano de obra y gastos generales asignados deben pertenecer al mismo lote. Una tirada mayor reparte solo los costes que realmente permanecen fijos; el cálculo no lo supone automáticamente. La cuota de materiales indica sensibilidad: con otros costes y producción constantes, un aumento del 10% en materiales eleva el total en el 10% de esa cuota.",
    "howItWorks": "Coste por unidad = (materiales + mano de obra + gastos generales) ÷ unidades. La proporción de materiales son los materiales divididos entre el coste total, en porcentaje. El lote debe tener una cantidad entera positiva. Si los tres costes son cero, el coste unitario es cero y se omite la cuota de materiales por denominador cero. Es coste medio asignado, no coste marginal de una unidad adicional.",
    "example": "Materiales 24 000, mano de obra 9600 y gastos generales 5400 en 1500 unidades dan 26 por unidad. Coste total cero para 10 unidades utilizables da coste unitario 0; se omite la cuota de materiales.",
    "howToUse": [
      "Introduce el coste de materiales de toda la tirada.",
      "Introduce el coste de mano de obra de esa misma tirada.",
      "Introduce los gastos generales imputados a la tirada.",
      "Introduce cuántas unidades produjo la tirada.",
      "Al variar la tirada, actualiza materiales y mano de obra según el escenario; no los mantengas fijos si aumentan compras y horas."
    ],
    "faq": [
      {
        "q": "¿Qué costes entran aquí en los gastos generales?",
        "a": "Todo lo que consumió la tirada sin formar parte del producto: alquiler de la nave, amortización de los equipos, supervisión. Los costes de toda la empresa, como el marketing, no suelen pertenecer al coste unitario."
      },
      {
        "q": "¿Por qué el coste unitario baja cuando crece la tirada?",
        "a": "Solo con una estructura adecuada. Si materiales y mano de obra por unidad no cambian y los gastos del lote son fijos, baja su parte por unidad. Si esos gastos también crecen con la producción o cambian precios, la reducción no está garantizada."
      },
      {
        "q": "¿Las unidades defectuosas cuentan en el tamaño de la tirada?",
        "a": "Para coste medio de producción utilizable, usa unidades utilizables. Las pérdidas anormales y costes de defectos no deben capitalizarse automáticamente en inventario; depende de las normas aplicables. Define primero la base de costes del lote."
      },
      {
        "q": "¿Es este el precio que debo cobrar?",
        "a": "No. El coste medio de producción ayuda a evaluar margen, pero no es un precio mínimo universal ni una recomendación. Costes de venta, impuestos, demanda, pedidos adicionales y capacidad libre necesitan análisis aparte."
      }
    ],
    "disclaimer": "Coste medio del lote en una moneda sin conversión; no coste marginal ni precio recomendado universal."
  }
};
