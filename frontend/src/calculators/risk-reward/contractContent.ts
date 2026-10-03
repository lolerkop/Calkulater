import type { CalculatorDef } from '../../lib/types';

type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
// Starts from the five actual145 public bodies; bounded model corrections
// and independently checked examples are authored per subject and locale.
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Сопоставляет расстояние от входа до стопа с расстоянием до цели. Объём необязателен и нужен только для денежных сумм; отношение выводится из трёх цен. При отношении 3 безубыточная доля равна 25%, а при 0,5 — примерно 66,67%. Это условный порог серии с одинаковыми исходами без расходов, а не прогноз вероятности, реалистичности цели или выгодности сделки. Неверное расположение стопа и цели для выбранного направления вызывает предупреждение.",
    "howToUse": [
      "Выберите направление: в лонге стоп ниже входа, в шорте — выше.",
      "Введите цену входа, цену стоп-приказа и целевую цену.",
      "Укажите объём, если хотите увидеть риск и прибыль в деньгах.",
      "Сравните безубыточную долю со своей реальной статистикой сделок."
    ],
    "howItWorks": "Риск на единицу a=|вход−стоп|>0, потенциальный результат b=|цель−вход|. Отношение R=b/a, безубыточная доля в процентах p=100/(1+R). При объёме q>0 денежные суммы q×a и q×b; при пустом или нулевом объёме они не показаны. Лонг требует стоп<вход<цель, шорт — цель<вход<стоп; при нарушении расстояния всё равно вычислены, но предупреждение исключает трактовку результата как корректно заданной сделки. Комиссии, разрывы цены и различия исходов серии не моделируются.",
    "example": "Вход 250, стоп 240, цель 280 дают отношение 3: достаточно выигрывать 25 % сделок, чтобы выйти в ноль. При тех же ценах и пустом объёме отношение 3 и доля 25% остаются, но денежных итогов нет. Если цель совпадает со входом, отношение 0 и порог 100%; одновременно предупреждение отмечает некорректное расположение цели.",
    "faq": [
      {
        "q": "Чем это отличается от расчёта размера позиции?",
        "a": "Размер позиции выводит количество единиц из суммы риска. Здесь количество задаётся отдельно, а отношение сравнивает два расстояния. Ни один из показателей сам по себе не оценивает качество или вероятность сделки."
      },
      {
        "q": "Что показывает безубыточная доля сделок?",
        "a": "Порог для серии с постоянными выигрышем и убытком, без расходов: при R=3 это 25%, при R=1 — 50%, при R=0,5 — 66,67%. Он не является прогнозом фактической доли выигрышей; при разных исходах нужен анализ всей серии."
      },
      {
        "q": "Какое отношение считается приемлемым?",
        "a": "Универсального приемлемого отношения нет. R=2 требует более 33,33% выигрышей для положительного среднего результата до расходов при одинаковых исходах. Без оценки вероятности и затрат одно отношение не определяет выгодность."
      },
      {
        "q": "Почему расстояния берутся по модулю?",
        "a": "Потому что в шорте стоп выше входа, а цель ниже, и знак разности зависит от направления. Риск и прибыль — величины, а не направления."
      },
      {
        "q": "Учитываются ли комиссии?",
        "a": "Нет. Для отношения по чистым исходам затраты нужно отдельно вычесть из возможного дохода и добавить к моделируемому убытку. Отличие может быть существенным; его величину этот расчёт не определяет."
      }
    ],
    "disclaimer": "Отношение и доля безубыточности предполагают одинаковые выигрыши и потери без расходов. Они не прогнозируют движение цены или вероятность цели; предупреждение о расположении цен обязательно учитывается."
  },
  "en": {
    "longDescription": "Compares the entry-to-stop distance with the entry-to-target distance. Size is optional and only needed for money totals; the ratio comes from three prices. Ratio 3 gives a 25% break-even win rate, while 0.5 gives about 66.67%. This is a conditional threshold for repeated identical payoffs before costs, not a forecast of probability, target realism or trade quality. Prices on the wrong side for the chosen direction produce a warning.",
    "howToUse": [
      "Choose the direction: a long stops below entry, a short above it.",
      "Enter the entry price, the stop price and the target price.",
      "Enter the size if you want risk and reward in money.",
      "Compare the break-even rate with your own trade statistics."
    ],
    "howItWorks": "Risk per unit a=|entry−stop|>0 and potential reward b=|target−entry|. Ratio R=b/a; break-even percentage p=100/(1+R). With size q>0, money totals are q×a and q×b; blank or zero size omits them. A long needs stop<entry<target; a short needs target<entry<stop. Distances remain calculated for invalid ordering, but a warning prevents treating that as a correctly specified trade. Fees, gaps and varying outcomes across trades are not modeled.",
    "example": "Entry 250, stop 240, target 280 gives a ratio of 3: winning 25% of trades is enough to break even. With the same prices and blank size, ratio 3 and rate 25% remain, but money totals are absent. Target equal to entry gives ratio 0 and threshold 100%, with a warning that target ordering is invalid.",
    "faq": [
      {
        "q": "How does this differ from position sizing?",
        "a": "Position sizing derives units from a risk budget. Here size is entered separately and the ratio compares two distances. Neither measure alone assesses trade quality or probability."
      },
      {
        "q": "What does the break-even win rate show?",
        "a": "It is the threshold for a series with constant win and loss amounts before costs: R=3 gives 25%, R=1 gives 50%, and R=0.5 gives 66.67%. It does not predict your actual win rate; varying outcomes require the full series."
      },
      {
        "q": "What ratio is considered acceptable?",
        "a": "There is no universally acceptable ratio. R=2 needs more than 33.33% wins for a positive average before costs with identical payoffs. Without probabilities and costs, the ratio alone cannot determine profitability."
      },
      {
        "q": "Why are the distances taken as magnitudes?",
        "a": "Because a short stops above entry and targets below it, so the sign of the difference depends on direction. Risk and reward are magnitudes, not directions."
      },
      {
        "q": "Are fees included?",
        "a": "No. A net-payoff ratio needs costs separately deducted from potential gains and added to modeled losses. The difference can be substantial; this calculation does not estimate its size."
      }
    ],
    "disclaimer": "Ratio and break-even rate assume identical wins and losses before costs. They predict neither price movement nor target probability; the price-ordering warning must be considered."
  },
  "uk": {
    "longDescription": "Зіставляє відстань від входу до стопа з відстанню до цілі. Обсяг необов’язковий і потрібний лише для грошових сум; відношення виводиться з трьох цін. За відношення 3 беззбиткова частка 25%, за 0,5 — близько 66,67%. Це умовний поріг серії з однаковими результатами без витрат, не прогноз імовірності, досяжності цілі чи якості угоди. Невідповідне розташування цін для обраного напрямку викликає попередження.",
    "howToUse": [
      "Введіть ціну входу.",
      "Введіть ціну стоп-заявки й цільову ціну.",
      "Порівняйте отримане відношення з вашою часткою виграшних угод."
    ],
    "howItWorks": "Ризик на одиницю a=|вхід−стоп|>0, потенційний результат b=|ціль−вхід|. Відношення R=b/a, беззбиткова частка у відсотках p=100/(1+R). За обсягу q>0 суми q×a і q×b; за порожнього чи нульового обсягу вони не показані. Лонг потребує стоп<вхід<ціль, шорт — ціль<вхід<стоп. За порушення відстані обчислюються, але попередження не дозволяє вважати це правильно заданою угодою. Комісії, розриви ціни й різні результати серії не моделюються.",
    "example": "Вхід 250, стоп 240, ціль 280 дають відношення 3: достатньо вигравати 25 % угод, щоб вийти в нуль. За відношення 1 знадобилося б уже 50 %. За тих самих цін і порожнього обсягу відношення 3 та частка 25% лишаються, але грошових підсумків немає. Ціль на вході дає відношення 0 й поріг 100% із попередженням про неправильне розташування цілі.",
    "faq": [
      {
        "q": "Яке відношення вважається прийнятним?",
        "a": "Універсального прийнятного числа немає. За однакових результатів без витрат R=5 і 10% виграшів дає середню втрату, а R=1 і 60% — додатне очікуване значення. Саме відношення не прогнозує імовірність чи прибутковість."
      },
      {
        "q": "Як порахувати беззбиткову частку виграшів?",
        "a": "Відсоток дорівнює 100/(1+R). Для R=3 це 25%, для R=2 — 33,33%, для R=1 — 50%. Цей поріг передбачає однакові виграші та втрати без витрат; фактична частка вище нього не гарантує результат за інших умов."
      },
      {
        "q": "Чому не ставити ціль якнайдалі?",
        "a": "Бо далека ціль рідше досягається. Відношення 10 виглядає чудово, але якщо ціна доходить туди в одному випадку з двадцяти, стратегія збиткова."
      },
      {
        "q": "Чи змінюють комісії відношення прибутку до ризику?",
        "a": "Так, витрати змінюють фактичне відношення: зменшують отриманий прибуток і збільшують втрату. Показане тут відношення використовує лише відстані цін та ігнорує комісії, спред і прослизання."
      }
    ],
    "disclaimer": "Відношення й беззбиткова частка припускають однакові виграші та втрати без витрат. Вони не прогнозують ціну чи імовірність цілі; попередження про порядок цін треба враховувати."
  },
  "de": {
    "longDescription": "Vergleicht den Abstand vom Einstieg zum Stopp mit dem Abstand zum Ziel. Die Stückzahl ist optional und nur für Geldsummen nötig; das Verhältnis entsteht aus drei Kursen. Verhältnis 3 ergibt 25% Break-even-Trefferquote, 0,5 rund 66,67%. Dies ist eine bedingte Schwelle für wiederholte gleiche Auszahlungen vor Kosten, keine Prognose von Wahrscheinlichkeit, Zielerreichbarkeit oder Qualität. Falsch angeordnete Kurse für die Richtung erzeugen eine Warnung.",
    "howToUse": [
      "Wähle die Richtung: eine Long-Position stoppt unter dem Einstieg, eine Short-Position darüber.",
      "Trage Einstiegskurs, Stoppkurs und Zielkurs ein.",
      "Trage die Größe ein, wenn du Risiko und Ertrag in Geld sehen willst.",
      "Vergleiche die Trefferquote für die Nulllinie mit deiner eigenen Statistik."
    ],
    "howItWorks": "Risiko je Einheit a=|Einstieg−Stopp|>0, möglicher Ertrag b=|Ziel−Einstieg|. Verhältnis R=b/a; Break-even-Prozent p=100/(1+R). Bei Stückzahl q>0 sind Geldsummen q×a und q×b; leer oder null lässt sie weg. Long verlangt Stopp<Einstieg<Ziel, Short Ziel<Einstieg<Stopp. Bei falscher Anordnung werden Abstände berechnet, aber eine Warnung kennzeichnet das ungültige Szenario. Gebühren, Kurslücken und unterschiedliche Serienergebnisse fehlen.",
    "example": "Einstieg 250, Stopp 240, Ziel 280 ergeben ein Verhältnis von 3: 25 % gewinnende Positionen genügen für ein Nullergebnis. Bei gleichen Kursen und leerer Stückzahl bleiben Verhältnis 3 und Quote 25%, Geldsummen entfallen. Ziel gleich Einstieg ergibt Verhältnis 0 und Schwelle 100% samt Warnung zur ungültigen Zielanordnung.",
    "faq": [
      {
        "q": "Worin unterscheidet sich das von der Positionsgröße?",
        "a": "Die Positionsgröße leitet Einheiten aus einem Risikobudget ab. Hier wird sie getrennt eingegeben und das Verhältnis vergleicht zwei Abstände. Keine der Zahlen bewertet allein Qualität oder Wahrscheinlichkeit."
      },
      {
        "q": "Was zeigt die Trefferquote für die Nulllinie?",
        "a": "Die Schwelle gilt für konstante Gewinn- und Verlustbeträge vor Kosten: R=3 ergibt 25%, R=1 50%, R=0,5 66,67%. Sie prognostiziert keine tatsächliche Trefferquote; wechselnde Ergebnisse brauchen eine Serienanalyse."
      },
      {
        "q": "Welches Verhältnis gilt als annehmbar?",
        "a": "Ein allgemein akzeptables Verhältnis gibt es nicht. R=2 braucht mehr als 33,33% Treffer für einen positiven Durchschnitt vor Kosten bei gleichen Auszahlungen. Ohne Wahrscheinlichkeit und Kosten bestimmt das Verhältnis keine Rentabilität."
      },
      {
        "q": "Warum werden die Abstände als Beträge genommen?",
        "a": "Weil eine Short-Position über dem Einstieg stoppt und darunter zielt, das Vorzeichen der Differenz also von der Richtung abhängt. Risiko und Ertrag sind Beträge und keine Richtungen."
      },
      {
        "q": "Sind Gebühren enthalten?",
        "a": "Nein. Für Nettoauszahlungen sind Kosten getrennt vom möglichen Gewinn abzuziehen und zum Modellverlust zu addieren. Die Differenz kann erheblich sein; ihre Größe wird hier nicht geschätzt."
      }
    ],
    "disclaimer": "Verhältnis und Break-even-Quote setzen gleiche Gewinne und Verluste vor Kosten voraus. Sie prognostizieren weder Kursbewegung noch Zielwahrscheinlichkeit; die Kursanordnungswarnung ist zu beachten."
  },
  "es": {
    "longDescription": "Compara la distancia de entrada a stop con la distancia de entrada a objetivo. El tamaño es opcional y solo sirve para importes monetarios; el ratio sale de tres precios. Ratio 3 da aciertos de equilibrio del 25%; 0,5, aproximadamente 66,67%. Es un umbral condicionado a resultados repetidos iguales y sin gastos, no una previsión de probabilidad, viabilidad del objetivo o calidad de la operación. Precios mal situados para el sentido elegido generan una advertencia.",
    "howToUse": [
      "Elige el sentido: un largo pone el stop por debajo de la entrada y un corto, por encima.",
      "Introduce el precio de entrada, el del stop y el objetivo.",
      "Introduce el tamaño si quieres el riesgo y el beneficio en dinero.",
      "Compara el porcentaje de equilibrio con tus propias estadísticas de operación."
    ],
    "howItWorks": "Riesgo por unidad a=|entrada−stop|>0 y resultado potencial b=|objetivo−entrada|. Ratio R=b/a; porcentaje de equilibrio p=100/(1+R). Con tamaño q>0, importes q×a y q×b; vacío o cero los omite. Largo exige stop<entrada<objetivo; corto, objetivo<entrada<stop. Si el orden falla, se calculan distancias, pero una advertencia indica que no es una operación correctamente especificada. No se modelan gastos, saltos de precio ni resultados variables.",
    "example": "Entrada 250, stop 240 y objetivo 280 dan un ratio de 3: basta con ganar el 25 % de las operaciones para no perder. Con los mismos precios y tamaño vacío, se mantienen ratio 3 y porcentaje 25%, sin totales monetarios. Objetivo igual a entrada da ratio 0 y umbral 100%, con advertencia por orden incorrecto del objetivo.",
    "faq": [
      {
        "q": "¿En qué se diferencia del dimensionamiento de posiciones?",
        "a": "El dimensionamiento deduce unidades de un presupuesto de riesgo. Aquí el tamaño se introduce aparte y el ratio compara dos distancias. Ninguna cifra sola evalúa calidad o probabilidad."
      },
      {
        "q": "¿Qué indica el porcentaje de aciertos de equilibrio?",
        "a": "Es el umbral con ganancias y pérdidas constantes antes de gastos: R=3 da 25%, R=1 50% y R=0,5 66,67%. No predice los aciertos reales; resultados variables requieren estudiar toda la serie."
      },
      {
        "q": "¿Qué ratio se considera aceptable?",
        "a": "No hay un ratio universalmente aceptable. R=2 necesita más del 33,33% de aciertos para media positiva antes de gastos con pagos iguales. Sin probabilidades y costes, el ratio no determina rentabilidad."
      },
      {
        "q": "¿Por qué las distancias se toman en valor absoluto?",
        "a": "Porque un corto pone el stop por encima de la entrada y el objetivo por debajo, así que el signo de la diferencia depende del sentido. El riesgo y el beneficio son magnitudes, no direcciones."
      },
      {
        "q": "¿Están incluidas las comisiones?",
        "a": "No. El ratio de resultados netos exige restar gastos de las ganancias posibles y añadirlos a las pérdidas modeladas. La diferencia puede ser importante; no se estima su tamaño."
      }
    ],
    "disclaimer": "Ratio y aciertos de equilibrio suponen ganancias y pérdidas iguales antes de gastos. No predicen movimiento ni probabilidad del objetivo; debe atenderse la advertencia de orden de precios."
  }
};
