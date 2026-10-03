import type { CalculatorDef } from '../../lib/types';

type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
// Starts from the five actual145 public bodies; bounded model corrections
// and independently checked examples are authored per subject and locale.
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Выводит объём не из суммы, которую хочется вложить, а из суммы, которую допустимо потерять: сколько денег теряется на одной единице до стоп-приказа, столько раз допустимый риск в них и укладывается. Стоимость позиции получается побочно и вполне может превысить депозит — это следствие выбранного риска и расстояния до стопа; доступность финансирования здесь не проверяется, и доля депозита выводится отдельной строкой именно затем, чтобы это было видно. Дробный объём показан отдельно: допустимый шаг зависит от инструмента и брокера. Для покупки целых единиц объём округляется вниз, чтобы расчётный убыток до выбранной цены стопа не превышал заданную сумму.",
    "howToUse": [
      "Введите размер депозита целиком, а не свободный остаток.",
      "Задайте собственный риск на сделку от более 0 до 100%; калькулятор не выбирает безопасный процент.",
      "Введите цену входа и цену стоп-приказа.",
      "Сопоставьте стоимость позиции с капиталом и допустимым размером лота; доступность сделки не проверяется."
    ],
    "howItWorks": "При депозите D и выбранном риске p% сумма риска R=D×p/100. Для входа E и стопа S расстояние a=|E−S| должно быть положительным. Дробный объём q=R/a; целые единицы floor(q), стоимость дробной позиции q×E и её доля в депозите 100×q×E/D. Предполагается линейный результат на единицу без множителя контракта, комиссии и проскальзывания. Это убыток при исполнении по введённой цене, а не гарантия исполнения стопа.",
    "example": "При депозите 100 000 ₽, риске 1%, входе 250 ₽ и стопе 240 ₽ объём равен 100 единицам на 25 000 ₽. Модельный убыток при исполнении по 240 ₽ равен 1000 ₽ без расходов. Если бюджет риска 100, вход 10, стоп 7, дробный объём 33,333…; целые единицы 33 дают модельную потерю 99. Округление до 34 превысило бы бюджет: потеря 102.",
    "faq": [
      {
        "q": "Почему объём считается от стопа, а не от суммы вложений?",
        "a": "Так выбранная денежная сумма связывается с разницей цен на единицу. Это условный убыток при исполнении по цене стопа; разрыв котировок и условия инструмента могут дать другой результат."
      },
      {
        "q": "Стоимость позиции больше депозита — это ошибка?",
        "a": "Арифметически это возможно при малом расстоянии до стопа. Но сумма выше депозита не доказывает доступность финансирования и не означает, что выбранный стоп подходит инструменту; проверьте капитал, маржу и шаг лота отдельно."
      },
      {
        "q": "Почему целые единицы округляются вниз?",
        "a": "Если инструмент требует целые единицы, floor(q) не превышает дробный объём. При исполнении по введённой цене стопа это сохраняет модельный убыток в пределах бюджета; округление вверх могло бы его превысить. Допустимый шаг и фактическое исполнение проверяются отдельно."
      },
      {
        "q": "Учитываются ли комиссии и проскальзывание?",
        "a": "Нет. Комиссии и неблагоприятное исполнение могут увеличить убыток сверх выбранного бюджета; величину изменения эта модель не оценивает. Стоп-лимит, в отличие от рыночного стопа, также может остаться неисполненным."
      },
      {
        "q": "Какой процент риска считается разумным?",
        "a": "Модель не определяет подходящий риск: он зависит от инструмента, капитала, связанных позиций и вероятности убытков. Процент является входным условием сценария, а не оценкой безопасности сделки."
      }
    ],
    "disclaimer": "Расчёт предполагает линейный убыток на единицу и исполнение по указанной цене. Стоп не гарантирует цену или исполнение; маржа, множитель контракта, шаг лота и расходы требуют отдельной проверки."
  },
  "en": {
    "longDescription": "Derives size not from the amount you want to commit but from the amount you can afford to lose: however much is lost on one unit down to the stop, that is how many times the permitted risk fits into it. The position value comes out as a by-product and may well exceed the account — a consequence of the chosen risk and stop distance, without checking financing availability, and the share of the account is shown on its own row precisely so that this is visible. Fractional size is shown separately; the allowed lot step depends on the instrument and broker. If whole units are required, size rounds down so the modeled loss to the selected stop price does not exceed the amount set.",
    "howToUse": [
      "Enter the whole account balance rather than the free margin.",
      "Set your own risk per trade above 0 and up to 100%; the calculator does not choose a safe percentage.",
      "Enter the entry price and the stop price.",
      "Compare position value with capital and the permitted lot step; execution eligibility is not checked."
    ],
    "howItWorks": "With account D and chosen risk p%, risk budget R=D×p/100. Entry E and stop S must have positive distance a=|E−S|. Fractional size q=R/a; whole units floor(q), fractional position value q×E and account share 100×q×E/D. This assumes a linear payoff per unit without a contract multiplier, fees or slippage. It models a loss at the entered execution price and does not guarantee stop execution.",
    "example": "An account of 100000, risk 1%, entry 250 and stop 240 gives 100 units worth 25000. The modeled loss at execution price 240 is 1000 before costs. For risk budget 100, entry 10 and stop 7, fractional size is 33.333…; 33 whole units give modeled loss 99. Rounding up to 34 would exceed the budget with loss 102.",
    "faq": [
      {
        "q": "Why is size derived from the stop rather than the amount invested?",
        "a": "It links a chosen money budget to the price difference per unit. This is a conditional loss at the stop execution price; gaps and instrument terms may produce a different outcome."
      },
      {
        "q": "The position is worth more than the account — is that an error?",
        "a": "A small stop distance can produce this arithmetically. A value above the account does not establish financing availability or whether the stop suits the instrument; capital, margin and lot steps need separate checks."
      },
      {
        "q": "Why do whole units round down?",
        "a": "If whole units are required, floor(q) does not exceed fractional size. At execution at the entered stop price this keeps modeled loss within the budget; rounding up could exceed it. Permitted steps and actual execution require separate checks."
      },
      {
        "q": "Are fees and slippage included?",
        "a": "No. Fees and adverse execution can take the loss beyond the chosen budget; this model does not estimate the difference. A stop-limit order can also remain unfilled, unlike assuming execution at the entered price."
      },
      {
        "q": "What risk percentage is considered sensible?",
        "a": "The model does not determine a suitable risk. It depends on the instrument, capital, related positions and loss probabilities. The percentage is a scenario input rather than a trade safety assessment."
      }
    ],
    "disclaimer": "Calculation assumes linear loss per unit and execution at the stated price. A stop guarantees neither price nor execution; margin, contract multiplier, lot step and costs need separate checks."
  },
  "uk": {
    "longDescription": "Розмір позиції тут виводиться з обраної суми ризику та відстані від входу до стопа, а не з бажаного прибутку. Калькулятор показує дробовий обсяг і окремо ціле число одиниць, округлене вниз. Ціна позиції може перевищувати депозит: це співвідношення показує потребу в капіталі, але не підтверджує доступність плеча, допустимий крок лота чи виконання стопа за вказаною ціною.",
    "howToUse": [
      "Введіть розмір депозиту.",
      "Задайте власний ризик на угоду понад 0 і до 100%; калькулятор не обирає безпечний відсоток.",
      "Введіть ціну входу й ціну стоп-заявки."
    ],
    "howItWorks": "За депозиту D і обраного ризику p% сума R=D×p/100. Для входу E та стопа S відстань a=|E−S| має бути додатною. Дробовий обсяг q=R/a; цілі одиниці floor(q), ціна дробової позиції q×E та частка депозиту 100×q×E/D. Припускається лінійний результат на одиницю без множника контракту, комісій і прослизання. Це модель втрати за введеною ціною виконання, не гарантія виконання стопа.",
    "example": "За депозиту 100 000 ₴, ризику 1%, входу 250 ₴ і стопа 240 ₴ обсяг дорівнює 100 одиницям на 25 000 ₴. За виконання по 240 ₴ модельна втрата 1000 ₴ без витрат. За бюджету ризику 100, входу 10 і стопа 7 дробовий обсяг 33,333…; 33 цілі одиниці дають модельну втрату 99. Округлення до 34 перевищило б бюджет: втрата 102.",
    "faq": [
      {
        "q": "Чому 1–2 % на угоду?",
        "a": "Калькулятор не призначає відсоток. Якщо щоразу втрачати частку поточного депозиту, після десяти втрат по 2% лишиться 0,98^10≈81,7%, а по 10% — 0,9^10≈34,9%. Це арифметичне порівняння, не доказ безпеки чи відновлення капіталу."
      },
      {
        "q": "Що станеться, якщо стоп-заявка не спрацює?",
        "a": "Розрахунок припускає виконання за заданою ціною. На розриві котирувань виконання може бути гіршим, і фактична втрата перевищить заплановану — це ризик, який обсягом не керується."
      },
      {
        "q": "Чому обсяг зменшується за далекого стопа?",
        "a": "Бо ризик на одиницю більший, а загальна сума ризику фіксована. Далекий стоп означає меншу позицію — і це правильно: інакше одна угода коштувала б більше, ніж дозволено."
      },
      {
        "q": "Чи враховано комісії?",
        "a": "Ні, рахується ринковий ризик. Комісії й спред збільшують фактичну втрату, тому за частої торгівлі їх варто закладати в допустимий ризик."
      }
    ],
    "disclaimer": "Розрахунок припускає лінійну втрату на одиницю й виконання за вказаною ціною. Стоп не гарантує ціни чи виконання; маржа, множник, крок лота й витрати перевіряються окремо."
  },
  "de": {
    "longDescription": "Leitet die Größe nicht aus dem Betrag ab, den du einsetzen willst, sondern aus dem, den du verlieren kannst: wie viel an einer Einheit bis zum Stopp verloren geht, so oft passt das zugelassene Risiko hinein. Der Wert der Position fällt dabei als Nebenergebnis ab und kann das Konto durchaus übersteigen — eine Folge des gewählten Risikos und Stoppabstands, ohne Prüfung der Finanzierung, und der Anteil am Konto steht gerade deshalb in einer eigenen Zeile. Die gebrochene Stückzahl wird gesondert gezeigt; zulässige Schritte hängen von Instrument und Broker ab. Sind ganze Einheiten nötig, wird abgerundet, damit der modellierte Verlust bis zum gewählten Stoppkurs den gesetzten Betrag nicht überschreitet.",
    "howToUse": [
      "Trage den ganzen Kontostand ein und nicht die freie Marge.",
      "Setze deinen eigenen Risikowert über 0 bis 100%; der Rechner wählt keinen sicheren Prozentsatz.",
      "Trage Einstiegspreis und Stoppkurs ein.",
      "Vergleiche Positionswert mit Kapital und zulässigem Lotschritt; die Handelbarkeit wird nicht geprüft."
    ],
    "howItWorks": "Bei Konto D und gewähltem Risiko p% ist das Risikobudget R=D×p/100. Einstieg E und Stopp S brauchen Abstand a=|E−S|>0. Gebrochene Stückzahl q=R/a; ganze Einheiten floor(q), gebrochener Positionswert q×E und Kontoanteil 100×q×E/D. Vorausgesetzt ist ein linearer Ertrag je Einheit ohne Kontraktmultiplikator, Gebühren oder Slippage. Modelliert wird der Verlust zum eingegebenen Ausführungskurs, keine garantierte Stoppausführung.",
    "example": "Ein Konto von 10 000 €, Risiko 1%, Einstieg 250 € und Stopp 240 € ergibt 10 Einheiten im Wert von 2500 €. Bei Ausführung zu 240 € beträgt der modellierte Verlust 100 € vor Kosten. Bei Risikobudget 100, Einstieg 10 und Stopp 7 ist die gebrochene Größe 33,333…; 33 ganze Einheiten ergeben Modellverlust 99. Aufrunden auf 34 überschritte das Budget mit Verlust 102.",
    "faq": [
      {
        "q": "Warum folgt die Größe aus dem Stopp und nicht aus dem eingesetzten Betrag?",
        "a": "So wird ein gewähltes Geldbudget mit dem Kursabstand je Einheit verknüpft. Der Verlust gilt unter Ausführung zum Stoppkurs; Kurslücken und Instrumentbedingungen können ein anderes Ergebnis erzeugen."
      },
      {
        "q": "Die Position ist mehr wert als das Konto — ist das ein Fehler?",
        "a": "Ein kleiner Stoppabstand kann dies rechnerisch erzeugen. Ein Wert oberhalb des Kontos belegt weder Finanzierung noch Eignung des Stopps; Kapital, Margin und Lotschritte sind gesondert zu prüfen."
      },
      {
        "q": "Warum werden ganze Einheiten abgerundet?",
        "a": "Sind ganze Einheiten nötig, überschreitet floor(q) die gebrochene Größe nicht. Bei Ausführung zum eingegebenen Stoppkurs bleibt der Modellverlust im Budget; Aufrunden könnte es überschreiten. Zulässiger Schritt und tatsächliche Ausführung sind separat zu prüfen."
      },
      {
        "q": "Sind Gebühren und Kursschlupf enthalten?",
        "a": "Nein. Gebühren und ungünstige Ausführung können den Verlust über das Budget erhöhen; die Differenz wird hier nicht geschätzt. Auch eine Stop-Limit-Order kann unausgeführt bleiben."
      },
      {
        "q": "Welcher Risikoprozentsatz gilt als sinnvoll?",
        "a": "Das Modell bestimmt kein geeignetes Risiko. Instrument, Kapital, verbundene Positionen und Verlustwahrscheinlichkeiten spielen mit hinein. Der Prozentsatz ist eine Szenarioannahme, keine Sicherheitsbewertung."
      }
    ],
    "disclaimer": "Die Rechnung nimmt linearen Verlust je Einheit und Ausführung zum angegebenen Kurs an. Ein Stopp garantiert weder Kurs noch Ausführung; Margin, Kontraktmultiplikator, Lotschritt und Kosten sind separat zu prüfen."
  },
  "es": {
    "longDescription": "Deduce el tamaño no del importe que quieres comprometer, sino del importe que puedes permitirte perder: lo que se pierda en una unidad hasta el stop indica cuántas veces cabe en él el riesgo permitido. El valor de la posición sale como subproducto y bien puede superar a la cuenta, consecuencia del riesgo elegido y de la distancia al stop, sin comprobar disponibilidad de financiación, y la proporción de la cuenta se muestra en su propia fila precisamente para que eso quede a la vista. El tamaño fraccionario se muestra aparte: el paso admitido depende del instrumento y del intermediario. Si se requieren unidades enteras, se redondea hacia abajo para que la pérdida modelada hasta el precio de stop no supere el importe fijado.",
    "howToUse": [
      "Introduce todo el saldo de la cuenta y no el margen libre.",
      "Fija tu propio riesgo por operación por encima de 0 y hasta el 100%; la calculadora no elige un porcentaje seguro.",
      "Introduce el precio de entrada y el precio del stop.",
      "Compara el valor de la posición con el capital y el paso del lote admitido; no se verifica si puede ejecutarse."
    ],
    "howItWorks": "Con cuenta D y riesgo elegido p%, presupuesto R=D×p/100. Entrada E y stop S deben tener distancia positiva a=|E−S|. Tamaño fraccionario q=R/a; unidades enteras floor(q), valor fraccionario q×E y proporción de cuenta 100×q×E/D. Se supone resultado lineal por unidad, sin multiplicador de contrato, comisiones ni deslizamiento. Es una pérdida modelada al precio introducido, no una garantía de ejecución del stop.",
    "example": "Una cuenta de 10 000, riesgo del 1%, entrada 250 y stop 240 da 10 unidades por valor de 2500. La pérdida modelada a precio de ejecución 240 es 100 antes de gastos. Con presupuesto de riesgo 100, entrada 10 y stop 7, tamaño fraccionario 33,333…; 33 unidades enteras dan pérdida modelada 99. Redondear a 34 superaría el presupuesto: pérdida 102.",
    "faq": [
      {
        "q": "¿Por qué el tamaño se deduce del stop y no del importe invertido?",
        "a": "Relaciona un presupuesto monetario elegido con la diferencia de precio por unidad. La pérdida supone ejecución al precio del stop; saltos de cotización y condiciones del instrumento pueden cambiarla."
      },
      {
        "q": "La posición vale más que la cuenta, ¿es un error?",
        "a": "Una distancia pequeña al stop puede producirlo aritméticamente. Un valor superior a la cuenta no demuestra que haya financiación ni que ese stop sea adecuado; comprueba aparte capital, margen y pasos del lote."
      },
      {
        "q": "¿Por qué las unidades enteras se redondean hacia abajo?",
        "a": "Si se requieren unidades enteras, floor(q) no supera el tamaño fraccionario. Con ejecución al precio de stop introducido mantiene la pérdida modelada dentro del presupuesto; redondear arriba podría superarlo. Pasos admitidos y ejecución real se revisan aparte."
      },
      {
        "q": "¿Están incluidas las comisiones y el deslizamiento?",
        "a": "No. Comisiones y ejecución desfavorable pueden superar el presupuesto elegido; no se estima esa diferencia. Una orden stop-limit también puede quedar sin ejecutar."
      },
      {
        "q": "¿Qué porcentaje de riesgo se considera razonable?",
        "a": "El modelo no determina un riesgo adecuado. Depende del instrumento, capital, posiciones relacionadas y probabilidades de pérdida. El porcentaje es una condición del escenario, no una evaluación de seguridad."
      }
    ],
    "disclaimer": "Se supone pérdida lineal por unidad y ejecución al precio indicado. El stop no garantiza precio ni ejecución; margen, multiplicador, paso del lote y gastos necesitan revisión aparte."
  }
};
