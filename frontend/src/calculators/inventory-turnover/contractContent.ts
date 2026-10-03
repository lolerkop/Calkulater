import type { CalculatorDef } from '../../lib/types';

// Reviewed original public145 bodies are retained where factual. Native corrections
// are AI authored; human subject and language review remains pending.
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Годовая оборачиваемость сравнивает себестоимость продаж за год со средним запасом по стоимости. В числителе нужна себестоимость, а не выручка: иначе наценка меняет шкалу сравнения. Показатель не означает, что каждый артикул физически продан одинаковое число раз. Дни запасов оцениваются на условной базе 365 дней; это агрегатное отношение, а не измеренный возраст каждой единицы на складе.",
    "howItWorks": "Оборачиваемость = годовая себестоимость продаж/средний запас. Дни запасов = 365/оборачиваемость. В режиме остатков средний запас = начало/2 + конец/2; оба остатка неотрицательные, средний запас и годовая себестоимость положительные. Поля невыбранного режима не используются. Для другого периода нужна его длительность вместо 365 — этого поля здесь нет, поэтому месячные продажи нельзя подставлять как годовые.",
    "example": "Себестоимость 600 000 ₽ при среднем запасе 150 000 ₽ даёт оборачиваемость 4,00 раз и срок хранения 91,3 дней. Годовая себестоимость 1 и средний запас 1 дают 1 оборот и 365 дней.",
    "howToUse": [
      "Введите себестоимость продаж за один год в стоимости запасов, не выручку.",
      "Выберите известный средний запас или остатки на начало и конец того же года.",
      "При сезонности среднее по нескольким равномерным срезам надёжнее двух крайних точек.",
      "Сравнивайте одинаковые периоды и базы оценки; дни ниже всегда используют 365.",
      "Не заменяйте годовую себестоимость месячной ради удобства: дни запасов останутся на базе 365 и ответ изменит смысл."
    ],
    "faq": [
      {
        "q": "Почему в числителе себестоимость, а не выручка?",
        "a": "Потому что запасы учитываются по себестоимости. Разделив на них выручку, вы добавили бы к оборачиваемости всю торговую наценку и получили бы завышенное число."
      },
      {
        "q": "Как считать средний запас?",
        "a": "Проще всего как полусумму остатков на начало и конец периода — этот режим есть в калькуляторе. Точнее выйдет по среднемесячным остаткам, если они у вас есть."
      },
      {
        "q": "Что показывает срок хранения?",
        "a": "Это средний уровень запаса, делённый на среднюю ежедневную себестоимость продаж при годовой базе 365 дней. Он помогает сравнивать периоды, но не показывает фактическую дату продажи конкретного товара или срок его годности."
      },
      {
        "q": "Какая оборачиваемость считается нормальной?",
        "a": "Зависит от отрасли: у продуктов она в разы выше, чем у мебели. Ориентиров калькулятор не приводит — сравнивайте с собственной динамикой."
      }
    ],
    "disclaimer": "Годовые продажи по себестоимости и условная база 365 дней. Два остатка могут плохо отражать сезонный средний запас."
  },
  "en": {
    "longDescription": "Annual inventory turnover compares a year of cost of goods sold with average inventory at cost. Using revenue would mix valuation bases and inflate the ratio by markup. Turnover does not mean every item physically sold the same number of times. Inventory days use a 365-day convention: an aggregate ratio rather than the measured age of every stocked unit.",
    "howItWorks": "Turnover = annual COGS/average inventory. Inventory days = 365/turnover. In balance mode, average inventory = opening/2 + closing/2; balances are nonnegative and average inventory and annual COGS are positive. Fields from the other mode are unused. Another period requires its own day count instead of 365; this tool has no such field, so monthly COGS cannot be entered as annual.",
    "example": "A cost of 600,000 against an average inventory of 150,000 gives a turnover of 4.00 times and 91.3 days on hand. Annual COGS 1 and average inventory 1 give 1 turn and 365 days.",
    "howToUse": [
      "Enter one year of COGS using the inventory-cost basis, not revenue.",
      "Choose a known average inventory or opening and closing balances for that same year.",
      "For seasonal stock, an average of several regularly spaced observations can be more representative than two endpoints.",
      "Compare consistent periods and valuation bases; displayed days always use 365.",
      "Do not substitute monthly COGS for annual COGS: inventory days still use 365 and the result would change meaning."
    ],
    "faq": [
      {
        "q": "Why cost of goods sold rather than revenue?",
        "a": "Because inventory is carried at cost. Dividing revenue by it would add the whole trade margin to the turnover and overstate it."
      },
      {
        "q": "How do I work out average inventory?",
        "a": "The simplest way is the half-sum of the opening and closing balances — that mode is built in. Monthly averages are more accurate if you have them."
      },
      {
        "q": "What do days on hand show?",
        "a": "It is average inventory divided by average daily COGS on a 365-day annual basis. It helps compare periods but does not establish an individual item’s actual sale date or shelf life."
      },
      {
        "q": "What turnover is considered normal?",
        "a": "It depends on the sector: groceries turn many times faster than furniture. No benchmark is offered here — compare against your own trend."
      }
    ],
    "disclaimer": "Annual COGS and a 365-day convention. Two endpoint balances may poorly represent seasonal average inventory."
  },
  "uk": {
    "longDescription": "Річна оборотність порівнює собівартість продажів за рік із середнім запасом за вартістю. Підстановка виторгу змішує бази й додає вплив націнки. Показник не означає, що кожен артикул фізично продавався однакову кількість разів. Дні запасів оцінюються на умовній базі 365 днів: це сукупне відношення, а не виміряний вік кожної одиниці на складі.",
    "howItWorks": "Оборотність = річна собівартість продажів/середній запас. Дні запасів = 365/оборотність. За залишками середній запас = початок/2 + кінець/2; обидва залишки невід’ємні, середній запас і річна собівартість додатні. Поля іншого режиму не використовуються. Для іншого періоду потрібна його тривалість замість 365; такого поля тут немає, тому місячні продажі не можна вводити як річні.",
    "example": "Собівартість 600 000 ₴ за середнього запасу 150 000 ₴ дає оборотність 4,00 рази й строк зберігання 91,3 дня. Це сукупне відношення, не фактичний вік кожного товару. Річна собівартість 1 та середній запас 1 дають 1 оборот і 365 днів.",
    "howToUse": [
      "Введіть собівартість продажів за один рік у вартості запасів, не виторг.",
      "Виберіть відомий середній запас або залишки на початок і кінець того самого року.",
      "За сезонності середнє кількох рівномірних зрізів може краще представляти запас, ніж дві крайні точки.",
      "Порівнюйте однакові періоди й бази оцінки; дні нижче завжди використовують 365.",
      "Не замінюйте річну собівартість місячною: дні залишаться на базі 365, і результат змінить зміст."
    ],
    "faq": [
      {
        "q": "Чому в чисельнику собівартість, а не виторг?",
        "a": "Бо запас теж обліковується за собівартістю. Підстановка виторгу змішує дві шкали й завищує оборотність рівно на націнку — за націнки 50 % показник вийде в півтора раза кращим, ніж є."
      },
      {
        "q": "Що таке строк зберігання?",
        "a": "Це середній запас, поділений на середню денну собівартість за річної бази 365 днів. Для 600000 і 150000 результат 91,25 дня, на екрані 91,3. Він не встановлює фактичний строк лежання кожного товару."
      },
      {
        "q": "Висока оборотність — це завжди добре?",
        "a": "Не обов’язково. Високе відношення може супроводжуватися нестачею запасу, але саме по собі цього не доводить. Для оцінки потрібні сервісний рівень, збої постачання й попит; універсальної норми для всіх товарів немає."
      },
      {
        "q": "Як рахувати середній запас?",
        "a": "Найпростіше — півсума на початок і кінець періоду. Точніше — середнє за місячними зрізами: для сезонного товару різниця між цими способами велика."
      }
    ],
    "disclaimer": "Річні продажі за собівартістю й умовна база 365 днів. Два залишки можуть погано представляти сезонний середній запас."
  },
  "de": {
    "longDescription": "Jährlicher Lagerumschlag vergleicht den Wareneinsatz eines Jahres mit dem durchschnittlichen Lagerwert zu Kosten. Umsatz statt Wareneinsatz würde Bewertungsgrundlagen mischen und den Aufschlag einrechnen. Nicht jeder Artikel muss sich tatsächlich gleich oft verkauft haben. Bestandstage verwenden die Konvention von 365 Tagen; sie sind ein Gesamtverhältnis, kein gemessenes Alter jedes Lagerstücks.",
    "howItWorks": "Umschlag = jährlicher Wareneinsatz/Durchschnittsbestand. Bestandstage = 365/Umschlag. Im Bestandsmodus gilt Durchschnitt = Anfang/2 + Ende/2; beide Bestände sind nicht negativ, Durchschnitt und Jahreswareneinsatz positiv. Felder des anderen Modus bleiben unbenutzt. Ein anderer Zeitraum braucht seine eigene Tageszahl statt 365; dieses Feld fehlt hier, daher darf Monatswareneinsatz nicht als Jahreswert eingegeben werden.",
    "example": "Ein Wareneinsatz von 60 000 € bei einem durchschnittlichen Bestand von 15 000 € ergibt eine Umschlagshäufigkeit von 4,00 und eine Lagerdauer von 91,3 Tagen. Jahreswareneinsatz 1 und Durchschnittsbestand 1 ergeben 1 Umschlag und 365 Tage.",
    "howToUse": [
      "Gib den Wareneinsatz eines Jahres auf derselben Kostenbasis wie den Bestand ein, nicht Umsatz.",
      "Wähle bekannten Durchschnittsbestand oder Anfangs- und Endbestand desselben Jahres.",
      "Bei Saisonbeständen kann ein Durchschnitt regelmäßig verteilter Messungen aussagekräftiger als zwei Randwerte sein.",
      "Vergleiche gleiche Zeiträume und Bewertungsgrundlagen; die Tage verwenden immer 365.",
      "Ersetze Jahreswareneinsatz nicht durch einen Monatswert: Bestandstage bleiben auf 365 bezogen und erhalten eine andere Bedeutung."
    ],
    "faq": [
      {
        "q": "Warum der Wareneinsatz und nicht der Umsatz?",
        "a": "Weil der Bestand zu Einkaufspreisen geführt wird. Den Umsatz durch ihn zu teilen fügte dem Umschlag die ganze Handelsspanne hinzu und setzte ihn zu hoch an."
      },
      {
        "q": "Wie ermittle ich den durchschnittlichen Bestand?",
        "a": "Am einfachsten als halbe Summe aus Anfangs- und Endbestand — dieser Modus ist eingebaut. Monatsdurchschnitte sind genauer, wenn du sie hast."
      },
      {
        "q": "Was zeigt die Lagerdauer?",
        "a": "Durchschnittsbestand geteilt durch durchschnittlichen täglichen Wareneinsatz auf einer Jahresbasis von 365 Tagen. Dies hilft beim Periodenvergleich, bestimmt aber weder Verkaufsdatum noch Haltbarkeit eines einzelnen Artikels."
      },
      {
        "q": "Welche Umschlagshäufigkeit gilt als normal?",
        "a": "Das hängt von der Branche ab: Lebensmittel drehen sich viel schneller als Möbel. Ein Richtwert wird hier nicht genannt — vergleiche mit deinem eigenen Verlauf."
      }
    ],
    "disclaimer": "Jahreswareneinsatz und die Konvention von 365 Tagen; zwei Randbestände können Saisonbestände schlecht repräsentieren."
  },
  "es": {
    "longDescription": "La rotación anual compara el coste de ventas de un año con existencias medias valoradas a coste. Usar ingresos mezclaría bases e inflaría el cociente por el margen comercial. No significa que cada artículo se vendiera físicamente el mismo número de veces. Los días de inventario usan la convención de 365 días: un cociente agregado, no la edad medida de cada unidad.",
    "howItWorks": "Rotación = coste anual de ventas/existencias medias. Días de inventario = 365/rotación. En modo saldos, media = inicial/2 + final/2; ambos saldos son no negativos y media y coste anual son positivos. Se ignoran campos del otro modo. Otro periodo exige sus propios días en lugar de 365; esta herramienta no incluye ese campo, por lo que no debe introducirse coste mensual como anual.",
    "example": "Un coste de 60 000 frente a unas existencias medias de 15 000 dan una rotación de 4,00 veces y 91,3 días de cobertura. Coste anual 1 y existencias medias 1 dan 1 rotación y 365 días.",
    "howToUse": [
      "Introduce coste de ventas de un año con la misma base de coste del inventario, no ingresos.",
      "Elige existencias medias conocidas o saldos inicial y final de ese año.",
      "Con estacionalidad, varias observaciones repartidas regularmente pueden representar mejor la media que dos extremos.",
      "Compara periodos y valoraciones coherentes; los días mostrados siempre usan 365.",
      "No sustituyas coste anual por mensual: los días siguen usando 365 y el resultado cambiaría de significado."
    ],
    "faq": [
      {
        "q": "¿Por qué el coste de las mercancías vendidas y no los ingresos?",
        "a": "Porque las existencias se valoran a coste. Dividir los ingresos entre ellas añadiría todo el margen comercial a la rotación y la exageraría."
      },
      {
        "q": "¿Cómo calculo las existencias medias?",
        "a": "Lo más sencillo es la semisuma de los saldos inicial y final: ese modo está incorporado. Las medias mensuales son más exactas si dispones de ellas."
      },
      {
        "q": "¿Qué indican los días de cobertura?",
        "a": "Son existencias medias divididas por coste medio diario de ventas, usando 365 días al año. Permite comparar periodos, pero no determina la fecha real de venta ni la caducidad de un artículo."
      },
      {
        "q": "¿Qué rotación se considera normal?",
        "a": "Depende del sector: la alimentación rota mucho más rápido que el mueble. Aquí no se ofrece ninguna referencia: compárate con tu propia tendencia."
      }
    ],
    "disclaimer": "Coste anual de ventas y convención de 365 días; dos saldos extremos pueden representar mal la media estacional."
  }
};
