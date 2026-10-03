import type { CalculatorDef } from '../../lib/types';

type ContractContent = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
// Individually reviewed model copy; native human review remains pending.
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractContent> = {
  "ru": {
    "longDescription": "Считает, что получается, если каждый месяц вкладывать одну и ту же сумму по меняющейся цене. На фиксированные деньги по низкой цене покупается больше единиц, чем по высокой, поэтому средняя цена покупки выходит НЕ ВЫШЕ средней цены за период — это свойство среднего гармонического, а не эффект самой стратегии. Рост цены здесь редактируемое допущение, а не прогноз: калькулятор не знает будущих цен и не выдаёт их за известные. Итоговая стоимость считается по цене последней покупки, а таблица показывает, как накапливались единицы месяц за месяцем.",
    "howToUse": [
      "Укажите сумму, которую вкладываете каждый месяц.",
      "Укажите, сколько месяцев продолжаются покупки.",
      "Введите цену за единицу на старте.",
      "Задайте предполагаемое изменение цены за месяц — для падения возьмите отрицательное."
    ],
    "howItWorks": "Покупки идут в начале каждого из n целых месяцев: единиц = постоянный взнос / текущая цена. Между покупками цена умножается на (1 + месячное изменение / 100); после последней покупки дополнительного изменения нет. Вложено = взнос × n, средняя цена = вложено / накопленные единицы, итог = единицы × цена последней покупки. Средняя цена не выше среднего арифметического положительных цен; при неизменной цене они равны. Допускаются 1–12000 месяцев и изменение строго выше −100%; числовое переполнение останавливает расчёт.",
    "example": "Взнос 10 000 ₽ в начале каждого из 12 месяцев, начальная цена 5000 ₽ и изменение 2% между покупками дают 21,574 единицы по средней цене 5562,33 ₽ и итог 134 120,90 ₽ по цене последней покупки.",
    "faq": [
      {
        "q": "Почему средняя цена ниже средней цены за период?",
        "a": "Потому что на одинаковую сумму по низкой цене покупается больше единиц, чем по высокой, и дешёвые месяцы весят в среднем больше. Это свойство среднего гармонического, и оно работает при любом движении цены. Если цена неизменна, средние равны."
      },
      {
        "q": "Это прогноз доходности?",
        "a": "Нет. Рост цены — величина, которую задаёте вы, и калькулятор просто разворачивает её последствия. Будущей цены он не знает и подставлять её не станет."
      },
      {
        "q": "По какой цене считается итоговая стоимость?",
        "a": "По цене последней покупки. Брать какую-то более позднюю цену значило бы додумать за вас ещё один период, которого вы не задавали."
      },
      {
        "q": "Можно ли задать падение цены?",
        "a": "Да, введите отрицательный процент. При падении на 1 % в месяц 5 000 ₽ в течение двух лет дают среднюю цену 177,74 ₽ против стартовых 200 ₽."
      },
      {
        "q": "Учитываются ли комиссии и налоги?",
        "a": "Равные взносы и постоянное заданное месячное изменение цены — сценарий, не прогноз и не гарантия прибыли. Комиссии и налоги исключены; расходы на покупки могут изменить фактическую среднюю стоимость с расходами. Дробные единицы актива допускаются."
      }
    ],
    "disclaimer": "Равные взносы и постоянное заданное месячное изменение цены — сценарий, не прогноз и не гарантия прибыли. Комиссии и налоги исключены; расходы на покупки могут изменить фактическую среднюю стоимость с расходами. Дробные единицы актива допускаются."
  },
  "en": {
    "longDescription": "Works out what happens when you put the same sum in every month at a changing price. A fixed amount buys more units when the price is low than when it is high, so the average purchase price comes out NO GREATER THAN the average price over the period — that is a property of the harmonic mean rather than an effect of the strategy itself. Price growth here is an assumption you edit, not a forecast: the calculator does not know future prices and will not present them as known. The final value is taken at the last purchase price, and the table shows how the units piled up month by month.",
    "howToUse": [
      "Enter the amount you invest each month.",
      "Enter how many months the purchases continue.",
      "Enter the price per unit at the start.",
      "Set the assumed monthly price change — negative for a decline."
    ],
    "howItWorks": "Purchases occur at the start of n whole months: units = constant contribution / current price. Between purchases multiply the price by (1 + monthly change / 100); there is no additional change after the last purchase. Invested = contribution × n, average price = invested / accumulated units, final value = units × last purchase price. The average purchase price is no greater than the arithmetic mean of positive prices; they are equal for a constant price. The range is 1–12000 months and a change strictly above −100%; numerical overflow stops the calculation.",
    "example": "Contribute 10,000 at the start of each of 12 months, starting at price 5,000 with a 2% change between purchases: this buys 21.574 units at an average price of 5,562.33 and a final value of 134,120.90 at the last purchase price.",
    "faq": [
      {
        "q": "Why is the average price below the average price over the period?",
        "a": "Because a fixed sum buys more units when the price is low, so the cheap months carry more weight in the average. This is a property of the harmonic mean and holds whichever way the price moves. If prices are constant, the means are equal."
      },
      {
        "q": "Is this a forecast of returns?",
        "a": "No. The price growth is a figure you supply, and the calculator simply works through its consequences. It does not know the future price and will not invent one."
      },
      {
        "q": "Which price is the final value based on?",
        "a": "The last purchase price. Using some later price would mean inventing an extra period you never asked for."
      },
      {
        "q": "Can I model a falling price?",
        "a": "Yes, enter a negative percentage. Falling 1% a month, 5,000 a month over two years gives an average price of 177.74 against a starting price of 200."
      },
      {
        "q": "Are fees and taxes included?",
        "a": "Equal contributions and a constant assumed monthly price change form a scenario, not a forecast or profit guarantee. Fees and taxes are excluded; purchase costs can change the actual all-in average cost. Fractional asset units are allowed."
      }
    ],
    "disclaimer": "Equal contributions and a constant assumed monthly price change form a scenario, not a forecast or profit guarantee. Fees and taxes are excluded; purchase costs can change the actual all-in average cost. Fractional asset units are allowed."
  },
  "uk": {
    "longDescription": "Усереднення ціни означає купівлю на однакову суму через рівні проміжки: за низької ціни купується більше одиниць, за високої — менше. Саме тому середня ціна купівлі виявляється не вищою за середнє арифметичне цін — це властивість самого методу, а не вдачі.",
    "howToUse": [
      "Введіть суму регулярного внеску.",
      "Задайте кількість періодів.",
      "Введіть початкову ціну й очікувану зміну ціни за період."
    ],
    "howItWorks": "Купівлі відбуваються на початку n цілих місяців: одиниці = постійний внесок / поточна ціна. Між купівлями ціна множиться на (1 + місячна зміна / 100); після останньої купівлі додаткової зміни немає. Вкладено = внесок × n, середня ціна = вкладено / накопичені одиниці, підсумок = одиниці × ціна останньої купівлі. Середня ціна не перевищує середнє арифметичне додатних цін; за сталої ціни вони рівні. Межі: 1–12000 місяців і зміна строго понад −100%; числове переповнення зупиняє розрахунок.",
    "example": "Внесок 10 000 ₴ на початку кожного з 12 місяців, початкова ціна 5000 ₴ та зміна 2% між купівлями дають 21,574 одиниці за середньою ціною 5562,33 ₴ і підсумок 134 120,90 ₴ за ціною останньої купівлі.",
    "faq": [
      {
        "q": "Чому середня ціна нижча за середню арифметичну?",
        "a": "Бо на однакову суму за низької ціни купується більше одиниць. Це середнє гармонійне, і воно завжди не перевищує середнє арифметичне — властивість самого методу. За сталої ціни середні рівні."
      },
      {
        "q": "Чи захищає метод від збитків?",
        "a": "Ні. Він згладжує вплив моменту входу, але за тривалого падіння усереднення лише збільшує позицію в активі, що дешевшає. Метод про дисципліну, а не про гарантію."
      },
      {
        "q": "Що вигідніше: вкласти все одразу чи частинами?",
        "a": "Для заданої послідовності цін результат одноразової купівлі та регулярних внесків може різнитися. Цей калькулятор не порівнює обидва портфелі та не визначає, який підхід вигідніший на майбутньому ринку."
      },
      {
        "q": "Чи враховано комісії за регулярні покупки?",
        "a": "Рівні внески та стала задана місячна зміна ціни — сценарій, а не прогноз чи гарантія прибутку. Комісії й податки виключені; витрати на купівлі можуть змінити фактичну середню собівартість із витратами. Дробові одиниці активу дозволені."
      }
    ],
    "disclaimer": "Рівні внески та стала задана місячна зміна ціни — сценарій, а не прогноз чи гарантія прибутку. Комісії й податки виключені; витрати на купівлі можуть змінити фактичну середню собівартість із витратами. Дробові одиниці активу дозволені."
  },
  "de": {
    "longDescription": "Ermittelt, was geschieht, wenn du jeden Monat dieselbe Summe zu einem sich ändernden Preis anlegst. Ein fester Betrag kauft bei niedrigem Preis mehr Anteile als bei hohem. Der durchschnittliche Kaufpreis ist deshalb höchstens so hoch wie das arithmetische Mittel der Preise; bei konstantem Preis sind beide gleich. Das ist eine Eigenschaft des harmonischen Mittels. Das eingegebene Preiswachstum ist eine Annahme und keine Vorhersage. Der Endwert nutzt den letzten Kaufpreis, und die Tabelle zeigt die angesammelten Anteile nach jedem Kauf.",
    "howToUse": [
      "Trage den Betrag ein, den du jeden Monat anlegst.",
      "Trage ein, wie viele Monate die Käufe laufen.",
      "Trage den Preis je Anteil zu Beginn ein.",
      "Setze die angenommene monatliche Preisänderung — negativ für einen Rückgang."
    ],
    "howItWorks": "Käufe erfolgen zu Beginn von n ganzen Monaten: Anteile = konstanter Beitrag / aktueller Preis. Zwischen Käufen wird der Preis mit (1 + monatliche Änderung / 100) multipliziert; nach dem letzten Kauf erfolgt keine weitere Änderung. Anlagebetrag = Beitrag × n, Durchschnittspreis = Anlagebetrag / angesammelte Anteile, Endwert = Anteile × letzter Kaufpreis. Der Kaufdurchschnitt ist höchstens das arithmetische Mittel positiver Preise; bei konstantem Preis sind beide gleich. Zulässig sind 1–12000 Monate und Änderungen strikt über −100%; Zahlenüberläufe beenden die Rechnung.",
    "example": "Ein Beitrag von 200 € zu Beginn jedes der 12 Monate, Anfangspreis 100 € und 2% Preisänderung zwischen Käufen ergibt 21,574 Anteile, einen Durchschnittspreis von 111,25 € und 2682,42 € Endwert zum letzten Kaufpreis.",
    "faq": [
      {
        "q": "Warum liegt der Durchschnittspreis unter dem durchschnittlichen Preis des Zeitraums?",
        "a": "Weil ein fester Betrag bei niedrigem Preis mehr Anteile kauft, die billigen Monate wiegen im Mittel also schwerer. Das ist eine Eigenschaft des harmonischen Mittels und gilt, wie sich der Preis auch bewegt. Bei konstanten Preisen sind die Mittelwerte gleich."
      },
      {
        "q": "Ist das eine Renditevorhersage?",
        "a": "Nein. Das Preiswachstum ist eine Zahl, die du angibst, und der Rechner spielt schlicht ihre Folgen durch. Er kennt den künftigen Preis nicht und erfindet keinen."
      },
      {
        "q": "Auf welchem Preis beruht der Endwert?",
        "a": "Auf dem letzten Kaufpreis. Einen späteren Preis zu nehmen hieße, einen zusätzlichen Zeitraum zu erfinden, nach dem du nie gefragt hast."
      },
      {
        "q": "Kann ich einen fallenden Preis abbilden?",
        "a": "Ja, trage einen negativen Prozentsatz ein. Bei einem Rückgang von 1 % im Monat ergeben 100 € im Monat über zwei Jahre einen Durchschnittspreis von 177,74 gegen einen Anfangspreis von 200."
      },
      {
        "q": "Sind Gebühren und Steuern enthalten?",
        "a": "Gleiche Beiträge und eine konstante angenommene monatliche Preisänderung sind ein Szenario, keine Prognose oder Gewinnzusage. Gebühren und Steuern fehlen; Kaufkosten können den tatsächlichen Durchschnitt einschließlich Kosten ändern. Bruchteile von Anteilen sind zulässig."
      }
    ],
    "disclaimer": "Gleiche Beiträge und eine konstante angenommene monatliche Preisänderung sind ein Szenario, keine Prognose oder Gewinnzusage. Gebühren und Steuern fehlen; Kaufkosten können den tatsächlichen Durchschnitt einschließlich Kosten ändern. Bruchteile von Anteilen sind zulässig."
  },
  "es": {
    "longDescription": "Calcula qué ocurre cuando aportas la misma cantidad todos los meses a un precio cambiante. Un importe fijo compra más unidades cuando el precio está bajo que cuando está alto, así que el precio medio de compra sale COMO MÁXIMO IGUAL AL precio medio del periodo: eso es una propiedad de la media armónica y no un efecto de la estrategia. El crecimiento del precio es aquí una suposición que editas, no una previsión: la calculadora no conoce los precios futuros y no los presentará como conocidos. El valor final se toma al precio de la última compra, y la tabla muestra cómo se acumularon las unidades mes a mes.",
    "howToUse": [
      "Introduce la cantidad que inviertes cada mes.",
      "Introduce cuántos meses continúan las compras.",
      "Introduce el precio por unidad al inicio.",
      "Fija la variación mensual de precio prevista: negativa si baja."
    ],
    "howItWorks": "Las compras se hacen al inicio de n meses enteros: unidades = aportación constante / precio actual. Entre compras se multiplica el precio por (1 + variación mensual / 100); no hay otra variación después de la última compra. Invertido = aportación × n, precio medio = invertido / unidades acumuladas, valor final = unidades × último precio de compra. El precio medio de compra no supera la media aritmética de precios positivos; con precio constante son iguales. Se admiten 1–12000 meses y una variación estrictamente mayor que −100%; el desbordamiento numérico detiene el cálculo.",
    "example": "Aportar 100 al inicio de cada uno de 12 meses, con precio inicial de 50 y variación del 2% entre compras, compra 21,574 unidades a un precio medio de 55,62 y da un valor final de 1341,21 al último precio de compra.",
    "faq": [
      {
        "q": "¿Por qué el precio medio queda por debajo del precio medio del periodo?",
        "a": "Porque una cantidad fija compra más unidades cuando el precio está bajo, así que los meses baratos pesan más en la media. Es una propiedad de la media armónica y se cumple se mueva el precio como se mueva. Con precios constantes, ambas medias son iguales."
      },
      {
        "q": "¿Es una previsión de rentabilidad?",
        "a": "No. El crecimiento del precio es una cifra que aportas tú, y la calculadora simplemente desarrolla sus consecuencias. No conoce el precio futuro y no se lo va a inventar."
      },
      {
        "q": "¿Con qué precio se calcula el valor final?",
        "a": "Con el de la última compra. Usar algún precio posterior significaría inventar un periodo más que nunca pediste."
      },
      {
        "q": "¿Puedo modelar un precio a la baja?",
        "a": "Sí, introduce un porcentaje negativo. Bajando un 1 % al mes, 5000 mensuales durante dos años dan un precio medio de 177,74 frente a un precio inicial de 200."
      },
      {
        "q": "¿Se incluyen las comisiones y los impuestos?",
        "a": "Aportaciones iguales y variación mensual constante supuesta forman un escenario, no una previsión ni garantía de ganancias. Se excluyen comisiones e impuestos; los costes de compra pueden alterar el coste medio real con gastos. Se admiten unidades fraccionarias."
      }
    ],
    "disclaimer": "Aportaciones iguales y variación mensual constante supuesta forman un escenario, no una previsión ni garantía de ganancias. Se excluyen comisiones e impuestos; los costes de compra pueden alterar el coste medio real con gastos. Se admiten unidades fraccionarias."
  }
};
