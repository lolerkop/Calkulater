import type { CalculatorDef } from '../../lib/types';

// Reviewed original public145 bodies are retained where factual. Native corrections
// are AI authored; human subject and language review remains pending.
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Прибыль — вычитание, которое сделает кто угодно; расходятся стороны на двух процентах рядом с ней. Маржа делит прибыль на выручку, наценка — ту же прибыль на затраты, и знаменатель составляет всю разницу между ними. Наценка в сто процентов — это маржа пятьдесят, и оба числа описывают ровно одну и ту же сделку. При затратах 100 наценка 40% даёт цену 140, а маржа 40% требует цены 100/0,6≈166,67. Второй вариант выше первого в 25/21≈1,1905 раза. Поэтому процент следует называть вместе с его базой. Какая именно прибыль получена, зависит от состава затрат: только себестоимость даёт валовой результат, а чистый результат требует также остальных относимых расходов и налогов. Калькулятор не дополняет пропущенные расходы автоматически.",
    "howItWorks": "Прибыль = выручка − затраты. Маржа = прибыль ÷ выручка × 100. Наценка = прибыль ÷ затраты × 100. При нулевых затратах наценка не определена и не показывается.",
    "example": "Выручка 480 000 ₽ при затратах 315 000 ₽ даёт 165 000 ₽ прибыли, маржу 34,38 % и наценку 52,38 %. Выручка 100 при затратах 0 даёт прибыль 100 и маржу 100 %; наценка не показана.",
    "howToUse": [
      "Введите выручку за период или по сделке.",
      "Введите затраты, относящиеся к этой же выручке.",
      "Читайте маржу, когда речь о выручке, и наценку, когда речь о затратах.",
      "Обе величины берите в одной валюте и одинаково — до налогов или после.",
      "Определите состав затрат до сравнения маржи: валовой результат и остаток после всех расходов нельзя сопоставлять как одну метрику."
    ],
    "faq": [
      {
        "q": "Что больше — маржа или наценка?",
        "a": "При положительных выручке и затратах наценка не ниже маржи: при прибыли она выше, при нулевой прибыли оба показателя 0%, а при убытке подписанный процент наценки также выше. Выручка 100 и затраты 200 дают маржу−100% и наценку−50%; по модулю маржа больше. При нулевых затратах наценка не выводится."
      },
      {
        "q": "Как перевести наценку в маржу?",
        "a": "Маржа = наценка ÷ (100 + наценка) × 100. Наценка 50 % — это маржа 33,33 %, а наценка 100 % — маржа 50 %."
      },
      {
        "q": "Может ли маржа превысить сто процентов?",
        "a": "Нет. Прибыль не бывает больше выручки, из которой получена, поэтому маржа упирается в сто — это означало бы нулевые затраты. У наценки такого потолка нет."
      },
      {
        "q": "Какие затраты включать в расчёт?",
        "a": "Тот уровень, который вы измеряете: только себестоимость товара для валовой маржи, всё вместе с зарплатами и арендой для чистой. Смешение уровней между периодами и делает динамику бессмысленной."
      }
    ],
    "disclaimer": "Положительная выручка и выбранные неотрицательные затраты в одной валюте. Результат не становится чистой прибылью без полного состава расходов."
  },
  "en": {
    "longDescription": "Profit is a subtraction anyone can do; the two percentages beside it are where deals go wrong. Margin divides profit by revenue, markup divides the same profit by cost, and the denominator is the entire difference between them. A markup of one hundred per cent is a margin of fifty, and both describe exactly the same transaction. At a cost of 100, a 40% markup gives a price of 140, while a 40% margin requires 100/0.6≈166.67. The second price is 25/21≈1.1905 times the first. Name the percentage together with its base. The profit category depends on cost scope: product costs alone give a gross result, while a net result also needs the other applicable expenses and taxes. Missing costs are not added automatically.",
    "howItWorks": "Profit = revenue − costs. Margin = profit ÷ revenue × 100. Markup = profit ÷ costs × 100. With costs of zero there is nothing to divide by, so the markup row is omitted.",
    "example": "Revenue of 480,000 against costs of 315,000 gives 165,000 profit, a 34.38% margin and a 52.38% markup. Revenue 100 and cost 0 give profit 100 and margin 100%; markup is omitted.",
    "howToUse": [
      "Enter the revenue for the period or the deal.",
      "Enter the costs that belong to that same revenue.",
      "Read margin when you speak about revenue, markup when you speak about cost.",
      "Keep both figures in the same currency and before or after tax consistently.",
      "Define cost scope before comparing margins: gross results and results after all expenses are not the same metric."
    ],
    "faq": [
      {
        "q": "Which is bigger, margin or markup?",
        "a": "For positive revenue and cost, signed markup is at least signed margin: it is higher with a profit, both are 0% at zero profit, and signed markup remains higher for a loss. Revenue 100 and cost 200 give margin−100% and markup−50%; the margin has the greater absolute magnitude. Zero cost omits markup."
      },
      {
        "q": "How do I turn a markup into a margin?",
        "a": "Margin = markup ÷ (100 + markup) × 100. A markup of 50% is a margin of 33.33%, and a markup of 100% is a margin of 50%."
      },
      {
        "q": "Can the margin exceed one hundred per cent?",
        "a": "No. Profit cannot be larger than the revenue it came from, so the margin tops out at one hundred, which would mean costs of zero. Markup has no such ceiling."
      },
      {
        "q": "Which costs should I include?",
        "a": "Whichever level you are measuring: only the cost of goods for gross margin, everything including salaries and rent for net margin. Mixing the two levels between periods is what makes trends meaningless."
      }
    ],
    "disclaimer": "Positive revenue and chosen nonnegative costs in one currency. The result is not net profit unless the relevant full cost scope is included."
  },
  "uk": {
    "longDescription": "Прибуток — це віднімання, яке зробить будь-хто; розходяться сторони на двох відсотках поруч із ним. Маржа ділить прибуток на виторг, націнка — на витрати, і це різні числа: 34,375 % маржі відповідають приблизно 52,38 % націнки. Плутанина між ними — найчастіша причина того, що узгоджена знижка з’їдає весь заробіток. Вид прибутку залежить від складу витрат: лише собівартість дає валовий результат, чистий потребує й інших відповідних витрат та податків. Пропущені витрати автоматично не додаються.",
    "howItWorks": "Прибуток дорівнює виторг − витрати. Маржа рахується як прибуток ÷ виторг × 100, націнка — як прибуток ÷ витрати × 100. За нульових витрат націнка не визначена: ділення на нуль.",
    "example": "Виторг 480 000 ₴ за витрат 315 000 ₴ дає 165 000 ₴ прибутку, маржу 34,38 % і націнку 52,38 %. Одне й те саме віднімання, два різні відсотки. Виторг 100 за витрат 0 дає прибуток 100 і маржу 100 %; націнка не показується.",
    "howToUse": [
      "Введіть виторг за період.",
      "Введіть витрати за той самий період.",
      "Прочитайте прибуток, маржу й націнку — це три різні числа.",
      "Визначте склад витрат до порівняння маржі: валовий результат і залишок після всіх витрат є різними метриками."
    ],
    "faq": [
      {
        "q": "Чим маржа відрізняється від націнки?",
        "a": "За додатних виторгу й витрат націнка не менша за маржу: за прибутку вона більша, за нульового прибутку обидва показники 0%, і за збитку знаковий відсоток націнки також більший. Виторг 100 та витрати 200 дають маржу−100% і націнку−50%; модуль маржі більший. За нульових витрат націнка не показується."
      },
      {
        "q": "Як перевести націнку в маржу?",
        "a": "Маржа = націнка ÷ (100 + націнка) × 100. Націнка 50 % відповідає маржі 33,3 %, націнка 100 % — маржі 50 %."
      },
      {
        "q": "Які витрати входять у розрахунок прибутку?",
        "a": "Ті, що стосуються цього самого виторгу за той самий період. Змішувати собівартість проданого з витратами на закупівлю складу не можна — вийде число, яке нічого не описує."
      },
      {
        "q": "Чому за нульових витрат націнка не визначена?",
        "a": "Бо вона ділить прибуток на витрати, і ділення на нуль сенсу не має. Маржа при цьому дорівнює 100 %, і це коректна відповідь."
      }
    ],
    "disclaimer": "Додатний виторг і вибрані невід’ємні витрати в одній валюті. Результат не стає чистим прибутком без повного складу витрат."
  },
  "de": {
    "longDescription": "Der Gewinn ist eine Subtraktion, die jeder ausführen kann; bei den beiden Prozentwerten daneben gehen Geschäfte schief. Die Marge teilt den Gewinn durch den Umsatz, der Aufschlag teilt denselben Gewinn durch die Kosten, und der Nenner ist der ganze Unterschied zwischen ihnen. Ein Aufschlag von hundert Prozent ist eine Marge von fünfzig, und beides beschreibt genau dasselbe Geschäft. Bei Kosten von 100 ergibt ein Aufschlag von 40% den Preis 140; eine Marge von 40% verlangt 100/0,6≈166,67. Der zweite Preis beträgt 25/21≈1,1905 des ersten. Nenne deshalb den Prozentsatz zusammen mit seiner Bezugsgröße. Die Gewinnart hängt von der Kostenbasis ab: Warenkosten allein liefern einen Bruttobetrag; Nettogewinn erfordert auch weitere zugehörige Aufwendungen und Steuern. Fehlende Kosten werden nicht automatisch ergänzt.",
    "howItWorks": "Gewinn = Umsatz − Kosten. Marge = Gewinn ÷ Umsatz × 100. Aufschlag = Gewinn ÷ Kosten × 100. Bei Kosten von null gibt es nichts, wodurch geteilt werden könnte, die Zeile mit dem Aufschlag entfällt deshalb.",
    "example": "Ein Umsatz von 48 000 € gegen Kosten von 31 500 € ergibt 16 500 € Gewinn, eine Marge von 34,38 % und einen Aufschlag von 52,38 %. Umsatz 100 und Kosten 0 ergeben Gewinn 100 und Marge 100 %; Aufschlag entfällt.",
    "howToUse": [
      "Trage den Umsatz des Zeitraums oder des Geschäfts ein.",
      "Trage die Kosten ein, die zu diesem Umsatz gehören.",
      "Lies die Marge ab, wenn du über den Umsatz sprichst, und den Aufschlag, wenn du über die Kosten sprichst.",
      "Halte beide Zahlen in derselben Währung und einheitlich vor oder nach Steuern.",
      "Bestimme die Kostenbasis vor dem Margenvergleich; Bruttobeträge und Ergebnisse nach allen Kosten sind verschiedene Kennzahlen."
    ],
    "faq": [
      {
        "q": "Was ist größer, Marge oder Aufschlag?",
        "a": "Bei positivem Umsatz und positiven Kosten ist der Aufschlag mindestens so groß wie die Marge: bei Gewinn größer, bei null Gewinn beide 0%, und bei Verlust bleibt der vorzeichenbehaftete Aufschlag größer. Umsatz 100 und Kosten 200 ergeben Marge−100% und Aufschlag−50%; der Betrag der Marge ist größer. Bei Nullkosten entfällt der Aufschlag."
      },
      {
        "q": "Wie rechne ich einen Aufschlag in eine Marge um?",
        "a": "Marge = Aufschlag ÷ (100 + Aufschlag) × 100. Ein Aufschlag von 50 % ist eine Marge von 33,33 %, und ein Aufschlag von 100 % ist eine Marge von 50 %."
      },
      {
        "q": "Kann die Marge über hundert Prozent liegen?",
        "a": "Nein. Der Gewinn kann nicht größer sein als der Umsatz, aus dem er stammt, die Marge endet also bei hundert, was Kosten von null bedeutete. Der Aufschlag hat keine solche Obergrenze."
      },
      {
        "q": "Welche Kosten soll ich einbeziehen?",
        "a": "Die der Ebene, die du misst: nur den Wareneinsatz für die Rohmarge, alles einschließlich Gehältern und Miete für die Nettomarge. Die beiden Ebenen zwischen Zeiträumen zu mischen ist es, was Verläufe sinnlos macht."
      }
    ],
    "disclaimer": "Positiver Umsatz und gewählte nicht negative Kosten in einer Währung; Nettogewinn nur bei vollständiger zugehöriger Kostenbasis."
  },
  "es": {
    "longDescription": "El beneficio es una resta que sabe hacer cualquiera; los dos porcentajes que lo acompañan son donde se tuercen las operaciones. El margen divide el beneficio entre los ingresos, el recargo divide ese mismo beneficio entre el coste, y el denominador es toda la diferencia entre ambos. Un recargo del cien por cien es un margen del cincuenta, y los dos describen exactamente la misma transacción. Con un coste de 100, un recargo del 40% da un precio de 140; un margen del 40% exige 100/0,6≈166,67. El segundo precio es 25/21≈1,1905 veces el primero. Indica siempre la base junto al porcentaje. La categoría de beneficio depende de los costes: solo coste del producto da un resultado bruto; un resultado neto necesita otros gastos e impuestos aplicables. No se añaden automáticamente costes ausentes.",
    "howItWorks": "Beneficio = ingresos − costes. Margen = beneficio ÷ ingresos × 100. Marcado = beneficio ÷ costes × 100. Con costes de cero no hay entre qué dividir, así que la fila del recargo se omite.",
    "example": "Unos ingresos de 48 000 frente a unos costes de 31 500 dan 16 500 de beneficio, un margen del 34,38 % y un recargo del 52,38 %. Ingresos 100 y coste 0 dan beneficio 100 y margen 100%; se omite el recargo.",
    "howToUse": [
      "Introduce los ingresos del periodo o de la operación.",
      "Introduce los costes que corresponden a esos mismos ingresos.",
      "Lee el margen cuando hables de ingresos y el marcado cuando hables de coste.",
      "Mantén ambas cifras en la misma moneda y con o sin impuestos de forma coherente.",
      "Define costes antes de comparar márgenes: resultado bruto y resultado tras todos los gastos son métricas distintas."
    ],
    "faq": [
      {
        "q": "¿Qué es mayor, el margen o el recargo?",
        "a": "Con ingresos y costes positivos, el recargo con signo es al menos igual al margen: es mayor con beneficio, ambos son 0% sin beneficio y el recargo sigue siendo mayor con pérdidas. Ingresos 100 y coste 200 dan margen−100% y recargo−50%; el valor absoluto del margen es mayor. Con coste cero se omite el recargo."
      },
      {
        "q": "¿Cómo convierto un recargo en margen?",
        "a": "Margen = recargo ÷ (100 + recargo) × 100. Un recargo del 50 % es un margen del 33,33 %, y un recargo del 100 %, un margen del 50 %."
      },
      {
        "q": "¿El margen puede pasar del cien por cien?",
        "a": "No. El beneficio no puede ser mayor que los ingresos de los que salió, así que el margen se detiene en cien, lo que significaría costes de cero. El recargo no tiene ese techo."
      },
      {
        "q": "¿Qué costes debo incluir?",
        "a": "Los del nivel que estés midiendo: solo el coste de la mercancía para el margen bruto, y todo, sueldos y alquiler incluidos, para el margen neto. Mezclar los dos niveles entre periodos es lo que deja las tendencias sin sentido."
      }
    ],
    "disclaimer": "Ingresos positivos y costes no negativos elegidos en una moneda; no es beneficio neto sin incluir todos los costes aplicables."
  }
};
