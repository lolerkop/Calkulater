import type { CalculatorDef } from '../../lib/types';

// Reviewed original public145 bodies are retained where factual. Native corrections
// are AI authored; human subject and language review remains pending.
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Два числа описывают один и тот же рост и отвечают на разные вопросы. Общий рост говорит, во сколько раз аудитория стала больше; рост за период — какой темп дал бы тот же результат при равномерном движении. Удвоение за год и удвоение за месяц совпадают по общему росту и не совпадают больше ни в чём, поэтому сравнивать каналы по одному общему проценту нельзя. Темп за период как раз и делает сопоставимыми аккаунты разного возраста, а прирост в людях удерживает проценты от лукавства: сто процентов на базе двенадцати — это двенадцать человек.",
    "howItWorks": "Общий рост = (E/S − 1) × 100 %. Рост за период = ((E/S)^(1/n) − 1) × 100 %, где S и E — положительные целые размеры аудитории, n ≥ 1 — длительность в одинаковых периодах. Это постоянный геометрический темп между двумя замерами, а не среднее наблюдавшихся месячных процентов. Дробная длительность допустима, если единица периода определена.",
    "example": "С 12 000 до 18 500 за шесть периодов — это 54,17 % всего и 7,48 % за период.",
    "howToUse": [
      "Введите размер аудитории на начало периода.",
      "Введите размер аудитории на конец.",
      "Укажите, сколько периодов прошло между двумя замерами.",
      "Единица периода должна быть одна — месяцы или недели, но не вперемешку.",
      "Сравнивайте одинаковую длительность периода и определение аудитории; дробными могут быть периоды, но не количество людей."
    ],
    "faq": [
      {
        "q": "Почему темп за период меньше, чем общий рост, делённый на число периодов?",
        "a": "При положительном росте и более чем одном периоде геометрический темп ниже общего роста, делённого на число периодов, поскольку база увеличивается. При одном периоде значения равны; при нулевом росте оба равны нулю. Для спада такое утверждение о величине нельзя переносить без проверки знака."
      },
      {
        "q": "Считает ли калькулятор падение аудитории?",
        "a": "Да. Если конечное значение меньше начального, оба показателя выходят отрицательными — это честное описание спада, а не спрятанный ноль."
      },
      {
        "q": "Что считать периодом?",
        "a": "Ту единицу, в которой вы мерили: месяц, неделю, кампанию. Калькулятору она безразлична, важно лишь, чтобы число периодов и оба замера относились к одной единице."
      },
      {
        "q": "Зачем показывать прирост в людях?",
        "a": "Проценты скрывают базу. Рост с двенадцати до двадцати четырёх — это сто процентов и двенадцать человек, и колонка прироста не даёт об этом забыть."
      }
    ],
    "disclaimer": "Два замера и равномерный геометрический темп; без прогноза дальнейшего роста или анализа причин."
  },
  "en": {
    "longDescription": "Two numbers describe the same growth and answer different questions. Total growth says how much larger the audience became; growth per period says what pace would produce that same result if it were spread evenly. Doubling over a year and doubling over a month share a total figure and have nothing else in common, which is why comparing channels on total growth alone is misleading. The per-period rate is what makes accounts of different ages comparable, and the net gain keeps the percentages honest — a hundred per cent on a base of twelve is twelve people.",
    "howItWorks": "Total growth = (E/S − 1) × 100%. Per-period growth = ((E/S)^(1/n) − 1) × 100%, with positive whole audience counts S and E and duration n ≥ 1 in equal period units. This is the constant geometric rate connecting two observations, not an average of observed monthly rates. Fractional duration is valid when the period unit is defined.",
    "example": "Going from 12,000 to 18,500 over six periods is 54.17% in total and 7.48% per period.",
    "howToUse": [
      "Enter the audience size at the start of the period.",
      "Enter the audience size at the end.",
      "Enter how many periods passed between the two measurements.",
      "Keep the period unit consistent — months or weeks, but not both.",
      "Use the same period unit and audience definition when comparing channels; duration can be fractional, people counts cannot."
    ],
    "faq": [
      {
        "q": "Why is the per-period rate lower than total growth divided by periods?",
        "a": "For positive growth over more than one period, the geometric rate is lower than total growth divided by periods because the base compounds. At one period they coincide; unchanged counts give zero. Do not apply the same inequality to decline without checking its sign."
      },
      {
        "q": "Can this handle a shrinking audience?",
        "a": "Yes. If the end figure is below the start, both rates come out negative — an honest description of decline rather than a hidden zero."
      },
      {
        "q": "What counts as a period here?",
        "a": "Whatever unit you measured in: a month, a week, a campaign. The calculator does not care, as long as the count and the two measurements refer to the same unit."
      },
      {
        "q": "Why show the net gain as well?",
        "a": "Percentages hide the base. Growing from twelve to twenty-four is a hundred per cent and twelve people, and the gain column is what keeps that in view."
      }
    ],
    "disclaimer": "Two observations and an equivalent constant geometric rate; no prediction of future growth or causes."
  },
  "uk": {
    "longDescription": "Два числа описують одне й те саме зростання й відповідають на різні питання. Загальне зростання каже, у скільки разів аудиторія стала більшою; зростання за період — з якою швидкістю це відбувалося. Друге число й дозволяє порівнювати відрізки різної довжини.",
    "howItWorks": "Загальне зростання = (E/S − 1) × 100 %. Зростання за період = ((E/S)^(1/n) − 1) × 100 %, де S та E — додатні цілі кількості аудиторії, n ≥ 1 — тривалість в однакових періодах. Це сталий геометричний темп між двома замірами, а не середнє фактичних місячних відсотків. Дробова тривалість допустима за визначеної одиниці періоду.",
    "example": "З 12 000 до 18 500 за шість періодів — це 54,17 % загалом і 7,48 % за період. Просте ділення 54,17 на 6 дало б 9,03 % — завищену оцінку.",
    "howToUse": [
      "Введіть початкову кількість аудиторії.",
      "Введіть кінцеву кількість.",
      "Введіть кількість періодів між ними.",
      "Порівнюйте однакову одиницю періоду й визначення аудиторії; дробовою може бути тривалість, але не кількість людей."
    ],
    "faq": [
      {
        "q": "Чому не можна просто поділити загальне зростання на кількість періодів?",
        "a": "За додатного зростання протягом більш ніж одного періоду геометричний темп нижчий за загальне зростання, поділене на кількість періодів. За один період вони рівні, без зміни аудиторії обидва нульові. Для спаду нерівність потрібно перевіряти окремо; у прикладі правильний темп 7,48 %, а не 9,03 %."
      },
      {
        "q": "Навіщо потрібне зростання за період?",
        "a": "Щоб порівнювати відрізки різної довжини. Приріст 50 % за рік і 50 % за три роки — це зовсім різні темпи, і лише подільник за періодами це показує."
      },
      {
        "q": "Чи працює розрахунок для спаду?",
        "a": "Так. Якщо кінцеве значення менше за початкове, обидва числа вийдуть від’ємними, а темп покаже середню швидкість спаду за період."
      },
      {
        "q": "Що брати за період?",
        "a": "Будь-яку однакову одиницю: місяць, квартал, рік. Головне — щоб кількість періодів відповідала проміжку між початковим і кінцевим значенням."
      }
    ],
    "disclaimer": "Два заміри й еквівалентний сталий геометричний темп; без прогнозу зростання або аналізу причин."
  },
  "de": {
    "longDescription": "Zwei Zahlen beschreiben dasselbe Wachstum und beantworten verschiedene Fragen. Das Gesamtwachstum sagt, um wie viel größer das Publikum geworden ist; das Wachstum je Zeitraum sagt, welches Tempo dasselbe Ergebnis brächte, wenn es gleichmäßig verteilt wäre. Eine Verdopplung über ein Jahr und eine über einen Monat teilen die Gesamtzahl und haben sonst nichts gemein, weshalb Kanäle allein am Gesamtwachstum zu vergleichen in die Irre führt. Die Rate je Zeitraum macht verschieden alte Auftritte vergleichbar, und der Zuwachs hält die Prozentwerte ehrlich — hundert Prozent auf einer Grundlage von zwölf sind zwölf Menschen.",
    "howItWorks": "Gesamtwachstum = (E/S − 1) × 100 %. Wachstum je Zeitraum = ((E/S)^(1/n) − 1) × 100 %, mit positiven ganzen Publikumszahlen S und E sowie Dauer n ≥ 1 in gleichen Zeiteinheiten. Dies ist die konstante geometrische Rate zwischen zwei Messungen, kein Mittel beobachteter Monatsraten. Bruchteile einer Dauer sind bei festgelegter Zeiteinheit möglich.",
    "example": "Von 12 000 auf 18 500 über sechs Zeiträume sind 54,17 % insgesamt und 7,48 % je Zeitraum.",
    "howToUse": [
      "Trage die Größe des Publikums am Anfang des Zeitraums ein.",
      "Trage die Größe am Ende ein.",
      "Trage ein, wie viele Zeiträume zwischen beiden Messungen lagen.",
      "Halte die Einheit des Zeitraums gleich — Monate oder Wochen, aber nicht beides.",
      "Vergleiche gleiche Zeiteinheiten und Publikumsdefinitionen; die Dauer darf gebrochen sein, die Personenzahl nicht."
    ],
    "faq": [
      {
        "q": "Warum liegt die Rate je Zeitraum unter dem Gesamtwachstum geteilt durch die Zeiträume?",
        "a": "Bei positivem Wachstum über mehr als einen Zeitraum liegt die geometrische Rate unter Gesamtwachstum geteilt durch Dauer, da die Basis mitwächst. Bei einem Zeitraum stimmen sie überein, ohne Wachstum sind beide null. Auf einen Rückgang lässt sich die Ungleichung nicht ungeprüft übertragen."
      },
      {
        "q": "Kommt das mit einem schrumpfenden Publikum zurecht?",
        "a": "Ja. Liegt der Endwert unter dem Anfangswert, kommen beide Raten negativ heraus — eine ehrliche Beschreibung des Rückgangs statt einer verborgenen Null."
      },
      {
        "q": "Was zählt hier als Zeitraum?",
        "a": "Die Einheit, in der du gemessen hast: ein Monat, eine Woche, eine Kampagne. Dem Rechner ist sie gleich, solange Zählung und beide Messungen dieselbe Einheit meinen."
      },
      {
        "q": "Warum wird auch der Zuwachs angezeigt?",
        "a": "Prozentwerte verbergen die Grundlage. Von zwölf auf vierundzwanzig sind hundert Prozent und zwölf Menschen, und die Spalte mit dem Zuwachs hält das im Blick."
      }
    ],
    "disclaimer": "Zwei Messungen und eine gleichwertige konstante geometrische Rate; keine Prognose oder Ursachenanalyse."
  },
  "es": {
    "longDescription": "Dos cifras describen el mismo crecimiento y responden a preguntas distintas. El crecimiento total dice cuánto ha aumentado la audiencia; el crecimiento por periodo dice qué ritmo produciría ese mismo resultado si se repartiera de forma uniforme. Duplicarse en un año y duplicarse en un mes comparten la cifra total y no tienen nada más en común, y por eso comparar canales solo por el crecimiento total induce a error. El ritmo por periodo es lo que hace comparables cuentas de distinta edad, y la ganancia neta mantiene honestos los porcentajes: un cien por cien sobre una base de doce son doce personas.",
    "howItWorks": "Crecimiento total = (E/S − 1) × 100%. Crecimiento por periodo = ((E/S)^(1/n) − 1) × 100%, con cantidades positivas enteras S y E y duración n ≥ 1 en unidades de periodo iguales. Es la tasa geométrica constante entre dos observaciones, no la media de porcentajes mensuales observados. La duración puede ser fraccionaria si se define su unidad.",
    "example": "Pasar de 12 000 a 18 500 en seis periodos es un 54,17 % en total y un 7,48 % por periodo.",
    "howToUse": [
      "Introduce el tamaño de la audiencia al principio del periodo.",
      "Introduce el tamaño al final.",
      "Introduce cuántos periodos pasaron entre ambas mediciones.",
      "Mantén constante la unidad de periodo: meses o semanas, pero no ambos.",
      "Compara con la misma unidad de periodo y definición de audiencia; la duración puede ser fraccionaria, las personas no."
    ],
    "faq": [
      {
        "q": "¿Por qué el ritmo por periodo es menor que el crecimiento total dividido entre los periodos?",
        "a": "Con crecimiento positivo durante más de un periodo, la tasa geométrica es menor que el crecimiento total dividido por periodos porque la base se acumula. En un periodo coinciden y sin cambio ambas son cero. No traslades esa desigualdad a una caída sin comprobar el signo."
      },
      {
        "q": "¿Vale para una audiencia que mengua?",
        "a": "Sí. Si la cifra final es menor que la inicial, ambos ritmos salen negativos: una descripción honesta del descenso en lugar de un cero disimulado."
      },
      {
        "q": "¿Qué cuenta como periodo aquí?",
        "a": "La unidad en la que midieras: un mes, una semana, una campaña. A la calculadora le da igual, mientras el recuento y las dos mediciones se refieran a la misma unidad."
      },
      {
        "q": "¿Por qué se muestra también la ganancia neta?",
        "a": "Los porcentajes esconden la base. Crecer de doce a veinticuatro es un cien por cien y doce personas, y la columna de la ganancia es lo que mantiene eso a la vista."
      }
    ],
    "disclaimer": "Dos observaciones y tasa geométrica constante equivalente; sin pronóstico de crecimiento ni análisis causal."
  }
};
