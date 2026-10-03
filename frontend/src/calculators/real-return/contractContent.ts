import type { CalculatorDef } from '../../lib/types';
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Реальная доходность показывает годовое изменение покупательной способности вложенной суммы: рост денег сравнивается с ростом цен за тот же год. При доходности 12 % и инфляции 7 % точный результат равен 4,67 %, тогда как простая разность даёт 5 %. Разность может как завышать, так и занижать результат; её абсолютное расхождение показано отдельно. Номинальная доходность здесь означает годовой рост суммы до поправки на инфляцию, а не договорный APR с частотой начисления. Для дополнительного расчёта суммы подходят положительные дробные годы без округления.",
    "howToUse": [
      "Введите номинальную ставку, которую предлагают.",
      "Введите ожидаемую инфляцию.",
      "При желании добавьте сумму и срок."
    ],
    "howItWorks": "Реальная доходность = [(1+n/100)/(1+p/100)−1]×100 %, где n — годовой рост суммы, p — годовая инфляция. Разность n−p показана отдельно, расхождение — в процентных пунктах. Для суммы A и срока t: номинальный итог = A(1+n/100)^t; покупательная способность = A[(1+n/100)/(1+p/100)]^t. p>−100 %, n≥−100 %; n=−100 % означает полную потерю суммы. Положительные дробные годы не округляются. При сумме 0 денежные строки отсутствуют.",
    "example": "Ставка 12 процентов при инфляции 7 даёт реальные 4,67 процента, а не 5, как подсказывает разность. При годовой доходности 5 % и инфляции 9 % результат −3,67 %. Для 100 000 при 12 % и 7 % за 1,5 года покупательная способность равна 107 090,60 без округления срока.",
    "faq": [
      {
        "q": "Почему нельзя просто вычесть ставки?",
        "a": "Нужно разделить годовой множитель суммы на множитель цен. При 12 % и 7 % разность 5 % выше реальных 4,67 %, но при 5 % и 9 % разность −4 % ниже реальных −3,67 %. Для небольших ставок это приближение; направление и размер ошибки зависят от обеих ставок."
      },
      {
        "q": "Может ли реальная доходность быть отрицательной?",
        "a": "Да. Годовой множитель денег оказался меньше множителя цен, поэтому покупательная способность снизилась. При этом номинальная сумма могла вырасти, остаться прежней или уменьшиться: знак реального результата сам по себе этого не определяет."
      },
      {
        "q": "Какую инфляцию подставлять?",
        "a": "Для оценки прошедшего года используйте изменение соответствующего индекса за тот же год. Для будущего задайте сценарий инфляции и доходности; оба значения являются допущениями. Переменные годовые ставки этим постоянным сценарием не воспроизводятся."
      },
      {
        "q": "Учитывается ли налог?",
        "a": "Автоматически нет. Если известна годовая доходность после всех применимых налогов и комиссий, используйте её. Нельзя просто вычесть процент налога из процентной доходности: налоговая база, пороги и момент удержания зависят от условий."
      }
    ],
    "disclaimer": "Годовые постоянные темпы и одна сумма без взносов или снятий. Инфляция должна быть больше −100 %, доходность не ниже −100 %. Не рассчитываются налоги, комиссии, договорный APR, валютный курс или прогноз доходности."
  },
  "en": {
    "longDescription": "Real return measures the annual change in an investment’s purchasing power by comparing money growth with price growth for the same year. A 12% return and 7% inflation give about 4.67% under the entered model, while subtraction gives 5%. Subtraction may overstate or understate the result; its absolute gap is shown separately. Nominal return here means annual balance growth before inflation adjustment, rather than a contractual APR with compounding frequency. Positive fractional years are used without rounding for the optional cash projection.",
    "howToUse": [
      "Enter the nominal rate you are offered.",
      "Enter the inflation rate you expect.",
      "Optionally add an amount and a term."
    ],
    "howItWorks": "Real return = [(1+n/100)/(1+p/100)−1]×100%, where n is annual balance growth and p annual inflation. The shortcut n−p is separate; the gap uses percentage points. For amount A and duration t: nominal balance = A(1+n/100)^t; purchasing power = A[(1+n/100)/(1+p/100)]^t. Inflation must exceed −100%, and return must be at least −100%; −100% means complete capital loss. Positive fractional years are not rounded. Amount 0 omits the money rows.",
    "example": "A 12 percent rate with 7 percent inflation is a real 4.67 percent, not the 5 that subtraction suggests. Annual return 5% with inflation 9% gives −3.67%. For 100,000 at 12% and 7% over 1.5 years, purchasing power is 107,090.60 without rounding the duration.",
    "faq": [
      {
        "q": "Why not just subtract the rates?",
        "a": "Divide the annual balance factor by the price factor. With 12% and 7%, subtraction gives 5%, above the real 4.67%; with 5% and 9%, it gives−4%, below the real−3.67%. It is a low-rate approximation; the error’s direction and size depend on both rates."
      },
      {
        "q": "Can the real return be negative?",
        "a": "Yes. The annual money factor is below the price factor, so purchasing power falls. The nominal balance may have grown, stayed unchanged or fallen; the real result’s sign alone does not determine that."
      },
      {
        "q": "Which inflation figure should I use?",
        "a": "For a past year, use the change in an appropriate price index over that same year. For the future, enter an inflation and return scenario; both are assumptions. Constant rates do not reproduce a changing sequence of yearly returns and inflation."
      },
      {
        "q": "Is tax taken into account?",
        "a": "Not automatically. Use a known annual return after the applicable taxes and fees when that is the comparison needed. Do not subtract a tax percentage directly from a return percentage: the tax base, thresholds and timing depend on the actual terms."
      }
    ],
    "disclaimer": "Constant annual rates and one balance, without deposits or withdrawals. Inflation must exceed −100% and return cannot be below −100%. Taxes, fees, contractual APR, exchange rates and future return forecasts are not calculated."
  },
  "uk": {
    "longDescription": "Реальна дохідність показує річну зміну купівельної спроможності вкладеної суми: зростання грошей зіставляється зі зростанням цін за той самий рік. За дохідності 12 % та інфляції 7 % результат моделі дорівнює 4,67 %, а проста різниця дає 5 %. Різниця може як завищувати, так і занижувати результат; абсолютна розбіжність показана окремо. Номінальна дохідність тут означає річне зростання суми до поправки на інфляцію, а не договірний APR із частотою нарахування. Для додаткового розрахунку суми додатні дробові роки не округлюються.",
    "howToUse": [
      "Введіть номінальну ставку дохідності.",
      "Введіть очікувану інфляцію.",
      "Прочитайте реальну дохідність."
    ],
    "howItWorks": "Реальна дохідність = [(1+n/100)/(1+p/100)−1]×100 %, де n — річне зростання суми, p — річна інфляція. Різниця n−p показана окремо, розбіжність — у відсоткових пунктах. Для суми A та строку t номінальний підсумок = A(1+n/100)^t; купівельна спроможність = A[(1+n/100)/(1+p/100)]^t. p>−100 %, n≥−100 %; −100 % означає повну втрату капіталу. Додатні дробові роки не округлюються. За суми 0 грошові рядки відсутні.",
    "example": "Ставка 12 відсотків за інфляції 7 дає реальні 4,67 відсотка, а не 5, як підказує різниця. За ставки 30 % та інфляції 20 % розбіжність буде вже 1,67 пункту. Річна дохідність 5 % та інфляція 9 % дають −3,67 %. Для 100 000 за 12 % і 7 % протягом 1,5 року спроможність становить 107 090,60 без округлення строку.",
    "faq": [
      {
        "q": "Чому не можна просто відняти інфляцію?",
        "a": "Потрібно поділити річний множник суми на множник цін. За 12 % і 7 % різниця 5 % вища за реальні 4,67 %, але за 5 % і 9 % різниця −4 % нижча за реальні −3,67 %. Для малих ставок це наближення; напрям і розмір похибки залежать від обох ставок."
      },
      {
        "q": "Що означає від’ємна реальна дохідність?",
        "a": "Так. Річний множник грошей менший за множник цін, тож купівельна спроможність знизилася. Номінальна сума при цьому могла зрости, не змінитися або зменшитися: знак реального результату сам цього не визначає."
      },
      {
        "q": "Яку інфляцію брати?",
        "a": "Для минулого року візьміть зміну відповідного індексу за той самий рік. Для майбутнього задайте сценарій інфляції та дохідності; обидва значення є припущеннями. Сталі ставки не відтворюють змінну послідовність річних показників."
      },
      {
        "q": "Чи враховувати податок?",
        "a": "Автоматично ні. Якщо відома річна дохідність після потрібних податків і комісій, використайте її. Не віднімайте відсоток податку безпосередньо від відсоткової дохідності: база, пороги й час утримання залежать від умов."
      }
    ],
    "disclaimer": "Сталі річні темпи й одна сума без внесків або зняття. Інфляція має перевищувати −100 %, дохідність не може бути нижчою за −100 %. Податки, комісії, договірний APR, валютний курс і прогноз дохідності не розраховуються."
  },
  "de": {
    "longDescription": "Die reale Rendite beschreibt die jährliche Veränderung der Kaufkraft einer Anlage: Betragswachstum und Preiswachstum werden für dasselbe Jahr verglichen. 12 % Rendite bei 7 % Inflation ergeben im Modell 4,67 %, während die Subtraktion 5 % liefert. Sie kann das Ergebnis über- oder unterschätzen; der absolute Abstand steht gesondert daneben. Nominal meint hier das jährliche Betragswachstum vor Inflationsbereinigung und keinen vertraglichen APR mit Verzinsungshäufigkeit. Positive Jahresbruchteile werden für die optionale Betragsprojektion nicht gerundet.",
    "howToUse": [
      "Trage den Nominalzins ein, der dir geboten wird.",
      "Trage die Inflation ein, die du erwartest.",
      "Ergänze bei Bedarf einen Betrag und einen Zeitraum."
    ],
    "howItWorks": "Reale Rendite = [(1+n/100)/(1+p/100)−1]×100 %, mit jährlichem Betragswachstum n und jährlicher Inflation p. Die Näherung n−p steht separat; der Abstand wird in Prozentpunkten angegeben. Für Betrag A und Dauer t: nominaler Endbetrag = A(1+n/100)^t; Kaufkraft = A[(1+n/100)/(1+p/100)]^t. p>−100 %, n≥−100 %; −100 % bedeutet vollständigen Kapitalverlust. Positive Jahresbruchteile werden nicht gerundet. Bei Betrag 0 entfallen die Geldzeilen.",
    "example": "Ein Satz von 12 Prozent bei 7 Prozent Inflation sind real 4,67 Prozent und nicht die 5, die die Subtraktion nahelegt. Jahresrendite 5 % und Inflation 9 % ergeben −3,67 %. Bei 100 000 mit 12 % und 7 % über 1,5 Jahre beträgt die Kaufkraft 107 090,60 ohne Laufzeitrundung.",
    "faq": [
      {
        "q": "Warum nicht einfach die Sätze abziehen?",
        "a": "Der jährliche Betragsfaktor wird durch den Preisfaktor geteilt. Bei 12 % und 7 % liegen die subtrahierten 5 % über den realen 4,67 %; bei 5 % und 9 % liegen−4 % darunter, denn real sind es−3,67 %. Die Näherung für kleine Raten hat je nach beiden Raten eine andere Fehlerrichtung und Größe."
      },
      {
        "q": "Kann die reale Rendite negativ sein?",
        "a": "Ja. Der jährliche Geldfaktor liegt unter dem Preisfaktor, sodass die Kaufkraft sinkt. Der nominale Betrag kann gestiegen, unverändert oder gesunken sein; allein das Vorzeichen der realen Rendite legt das nicht fest."
      },
      {
        "q": "Welche Inflationszahl soll ich nehmen?",
        "a": "Für ein vergangenes Jahr nutze die Veränderung eines passenden Preisindexes im selben Jahr. Für die Zukunft gib ein Inflations- und Renditeszenario ein; beide Werte sind Annahmen. Konstante Raten bilden wechselnde Jahresverläufe nicht nach."
      },
      {
        "q": "Ist die Steuer berücksichtigt?",
        "a": "Nicht automatisch. Verwende bei Bedarf eine bekannte Jahresrendite nach den anwendbaren Steuern und Gebühren. Ein Steuerprozentsatz lässt sich nicht direkt von der Rendite abziehen: Bemessungsgrundlage, Freibeträge und Zeitpunkt hängen von den Bedingungen ab."
      }
    ],
    "disclaimer": "Konstante Jahresraten und ein Betrag ohne Ein- oder Auszahlungen. Inflation muss über −100 % liegen, Rendite darf nicht unter −100 % liegen. Steuern, Gebühren, vertraglicher APR, Wechselkurse und Renditeprognosen werden nicht berechnet."
  },
  "es": {
    "longDescription": "La rentabilidad real mide el cambio anual del poder adquisitivo de una inversión al comparar el crecimiento del saldo y de los precios durante el mismo año. Un 12 % de rentabilidad y 7 % de inflación dan 4,67 % en el modelo, mientras que la resta da 5 %. Esta puede sobrestimar o subestimar el resultado; la diferencia absoluta se muestra aparte. Nominal significa aquí crecimiento anual del saldo antes del ajuste por inflación, no un APR contractual con frecuencia de capitalización. Los años fraccionarios positivos se usan sin redondear para proyectar la cantidad opcional.",
    "howToUse": [
      "Introduce el tipo nominal que te ofrecen.",
      "Introduce la inflación que esperas.",
      "Si quieres, añade una cantidad y un plazo."
    ],
    "howItWorks": "Rentabilidad real = [(1+n/100)/(1+p/100)−1]×100 %, con crecimiento anual del saldo n e inflación anual p. La resta n−p se muestra aparte; la diferencia usa puntos porcentuales. Para cantidad A y plazo t: saldo nominal = A(1+n/100)^t; poder adquisitivo = A[(1+n/100)/(1+p/100)]^t. p>−100 %, n≥−100 %; −100 % significa pérdida total del capital. Los años fraccionarios positivos no se redondean. Cantidad 0 omite las filas monetarias.",
    "example": "Un tipo del 12 por ciento con un 7 por ciento de inflación es un 4,67 por ciento real, y no el 5 que sugiere la resta. Rentabilidad anual del 5 % e inflación del 9 % dan −3,67 %. Para 100 000 al 12 % y 7 % durante 1,5 años, el poder adquisitivo es 107 090,60 sin redondear el plazo.",
    "faq": [
      {
        "q": "¿Por qué no restar sin más los tipos?",
        "a": "Hay que dividir el factor anual del saldo entre el factor de precios. Con 12 % y 7 %, la resta da 5 %, por encima del 4,67 % real; con 5 % y 9 %, da−4 %, por debajo del−3,67 % real. Es una aproximación para tasas pequeñas; el sentido y tamaño del error dependen de ambas."
      },
      {
        "q": "¿La rentabilidad real puede ser negativa?",
        "a": "Sí. El factor anual del dinero es menor que el de precios y cae el poder adquisitivo. El saldo nominal puede haber crecido, permanecido igual o disminuido; el signo de la rentabilidad real por sí solo no determina eso."
      },
      {
        "q": "¿Qué cifra de inflación debo usar?",
        "a": "Para un año pasado usa la variación del índice de precios adecuado durante ese mismo año. Para el futuro introduce un escenario de inflación y rentabilidad; ambos son hipótesis. Las tasas constantes no reproducen una secuencia de variaciones anuales."
      },
      {
        "q": "¿Se tienen en cuenta los impuestos?",
        "a": "No automáticamente. Si conoces la rentabilidad anual tras los impuestos y comisiones aplicables, úsala cuando corresponda. No restes directamente un porcentaje fiscal del porcentaje de rentabilidad: la base, los umbrales y el momento del cobro dependen de las condiciones."
      }
    ],
    "disclaimer": "Tasas anuales constantes y un saldo sin aportaciones ni retiradas. La inflación debe superar −100 % y la rentabilidad no puede ser inferior a −100 %. No se calculan impuestos, comisiones, APR contractual, tipos de cambio ni previsiones."
  }
};
