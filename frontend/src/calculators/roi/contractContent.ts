// Subject copy reviewed against the actual fields, formula and result rows.
import type { CalculatorDef } from '../../lib/types';

type ContractCopy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractCopy> = {
  "ru": {
    "longDescription": "Возврат на вложения сравнивает прибыль со всем, во что вложение обошлось. Дополнительные затраты входят и в числитель, и в знаменатель, потому что они такая же часть вложений, как основная сумма, — учитывать их только против прибыли значит приукрасить результат.",
    "howToUse": [
      "Введите всю полученную сумму, а не только прибыль.",
      "Введите исходное вложение и отдельно неотрицательные дополнительные затраты; пустое дополнительное поле означает ноль.",
      "Прочитайте ROI к сумме всех затрат; для сравнения инвестиций отдельно учитывайте срок и риск."
    ],
    "howItWorks": "ROI = (получено − вложено − дополнительные) ÷ (вложено + дополнительные) × 100.",
    "example": "Получено 130 000, вложено 100 000 и дополнительно потрачено 5000: всего 105 000, прибыль 25 000, ROI ≈ 23,81%. При полученной сумме ноль и затратах 100 000 ROI равен −100%.",
    "faq": [
      {
        "q": "Почему дополнительные затраты учитываются дважды?",
        "a": "Они уменьшают прибыль и увеличивают вложенное. Учитывать их только против прибыли значит завысить доходность."
      },
      {
        "q": "Чем это отличается от ROI рекламы?",
        "a": "Формула та же; отличается то, что считается вложением. В рекламной версии это расходы и выручка кампании."
      },
      {
        "q": "Учитывает ли ROI время?",
        "a": "Нет. ROI за весь период не является годовой ставкой. Без промежуточных денежных потоков годовой темп за t лет можно отдельно найти как (получено ÷ все затраты)^(1/t) − 1; даты денежных потоков эта форма не принимает."
      },
      {
        "q": "Что означает отрицательный ROI?",
        "a": "Вернулось меньше вложенного. Калькулятор показывает это, а не обрезает до нуля."
      }
    ],
    "disclaimer": "Результат за весь период, без годового пересчёта, инфляции, промежуточных платежей и автоматического налогообложения."
  },
  "en": {
    "longDescription": "Return on investment compares profit with everything the investment cost. Additional costs enter both the numerator and the denominator, because they are as much a part of the investment as the principal — counting them only against profit flatters the result.",
    "howToUse": [
      "Enter the total amount received, rather than profit alone.",
      "Enter the original investment and separate nonnegative additional costs; a blank additional field means zero.",
      "Read ROI relative to all costs; account for time and risk separately when comparing investments."
    ],
    "howItWorks": "ROI = (received − invested − additional) ÷ (invested + additional) × 100.",
    "example": "Received 130,000, invested 100,000 and additional cost 5,000: total 105,000, profit 25,000, ROI ≈ 23.81%. Zero received with costs of 100,000 gives ROI −100%.",
    "faq": [
      {
        "q": "Why do additional costs appear twice?",
        "a": "They reduce profit and they increase what was invested. Counting them only against profit overstates the return."
      },
      {
        "q": "How is this different from advertising ROI?",
        "a": "The formula is the same; the difference is what counts as the investment. The advertising version uses campaign spend and campaign revenue."
      },
      {
        "q": "Does ROI account for time?",
        "a": "No. Whole-period ROI is not an annual rate. With no intermediate cash flows, the annual rate over t years can be calculated separately as (received ÷ all costs)^(1/t) − 1; this form has no cash-flow dates."
      },
      {
        "q": "What does a negative ROI mean?",
        "a": "Less came back than went in. The calculator shows it rather than clamping to zero."
      }
    ],
    "disclaimer": "A whole-period result without annualisation, inflation, intermediate cash flows or automatic taxation."
  },
  "uk": {
    "longDescription": "Дохідність вкладення рахує чистий результат відносно всього, що було вкладено, включно з додатковими витратами. Саме додаткові витрати найчастіше й забувають: комісії, обслуговування й податки перетворюють красиві 30 % у помітно скромніше число.",
    "howToUse": [
      "Введіть усю отриману суму, а не лише прибуток.",
      "Введіть початкове вкладення й окремо невід’ємні додаткові витрати; порожнє додаткове поле означає нуль.",
      "Прочитайте ROI до суми всіх витрат; для порівняння вкладень окремо врахуйте строк і ризик."
    ],
    "howItWorks": "Дохідність рахується як (отримано − вкладено − додаткові) ÷ (вкладено + додаткові) × 100. Додаткові витрати входять і в чисельник, і в знаменник: вони зменшують результат і збільшують базу порівняння.",
    "example": "Отримано 130 000, вкладено 100 000 і додатково витрачено 5000: разом 105 000, прибуток 25 000, ROI ≈ 23,81%. За отриманої суми нуль і витрат 100 000 ROI дорівнює −100%.",
    "faq": [
      {
        "q": "Чому додаткові витрати входять і в базу?",
        "a": "Бо ви їх теж вклали. Комісія брокера — це гроші, які пішли з кишені так само, як і сама покупка, тому вони збільшують знаменник, а не лише зменшують чисельник."
      },
      {
        "q": "Чи враховує показник строк?",
        "a": "Ні, і це його головна вада. Дохідність 30 % за рік і за п’ять років — зовсім різні результати. Для порівняння різних за строком вкладень потрібен CAGR."
      },
      {
        "q": "Чи можна порівнювати ROI різних інструментів?",
        "a": "Лише за однакового строку й з урахуванням ризику. Депозит із 10 % і акція з 30 % непорівнянні напряму: у другої може бути й мінус 30 %."
      },
      {
        "q": "Чи враховано інфляцію?",
        "a": "Ні, результат номінальний. Щоб побачити реальний приріст купівельної спроможності, скористайтеся розрахунком реальної дохідності."
      }
    ],
    "disclaimer": "Результат за весь період без річного перерахунку, інфляції, проміжних платежів та автоматичного оподаткування."
  },
  "de": {
    "longDescription": "Die Kapitalrendite vergleicht den Gewinn mit allem, was die Anlage gekostet hat. Zusätzliche Kosten gehen sowohl in den Zähler als auch in den Nenner ein, denn sie gehören ebenso zur Anlage wie der Grundbetrag — sie nur vom Gewinn abzuziehen lässt das Ergebnis besser aussehen, als es ist.",
    "howToUse": [
      "Trage den gesamten erhaltenen Betrag ein, nicht nur den Gewinn.",
      "Trage die ursprüngliche Anlage und getrennt nichtnegative Zusatzkosten ein; ein leeres Zusatzfeld bedeutet null.",
      "Lies den ROI bezogen auf alle Kosten ab; berücksichtige Zeit und Risiko beim Vergleich gesondert."
    ],
    "howItWorks": "ROI = (erhalten − eingesetzt − zusätzlich) ÷ (eingesetzt + zusätzlich) × 100.",
    "example": "Erhalten 130 000, eingesetzt 100 000, Zusatzkosten 5000: insgesamt 105 000, Gewinn 25 000, ROI ≈ 23,81%. Null erhalten bei Kosten von 100 000 ergibt ROI −100%.",
    "faq": [
      {
        "q": "Warum tauchen die zusätzlichen Kosten zweimal auf?",
        "a": "Sie mindern den Gewinn und erhöhen das Eingesetzte. Sie nur vom Gewinn abzuziehen setzt die Rendite zu hoch an."
      },
      {
        "q": "Wie unterscheidet sich das vom ROI einer Werbekampagne?",
        "a": "Die Formel ist dieselbe, der Unterschied liegt darin, was als Anlage zählt. Die Werbevariante nimmt die Kosten und den Umsatz der Kampagne."
      },
      {
        "q": "Berücksichtigt der ROI die Zeit?",
        "a": "Nein. Der ROI des gesamten Zeitraums ist kein Jahreszins. Ohne zwischenzeitliche Zahlungsströme lässt sich für t Jahre separat (erhalten ÷ alle Kosten)^(1/t) − 1 berechnen; das Formular hat keine Zahlungsdaten."
      },
      {
        "q": "Was bedeutet ein negativer ROI?",
        "a": "Es kam weniger zurück, als hineinging. Der Rechner zeigt das, statt bei null abzuschneiden."
      }
    ],
    "disclaimer": "Ergebnis für den gesamten Zeitraum ohne Jahresumrechnung, Inflation, Zwischenzahlungen oder automatische Steuern."
  },
  "es": {
    "longDescription": "El retorno de la inversión compara el beneficio con todo lo que costó la inversión. Los costes adicionales entran tanto en el numerador como en el denominador, porque forman parte de la inversión igual que el principal: contarlos solo contra el beneficio favorece el resultado.",
    "howToUse": [
      "Introduce el importe total recibido, no solo el beneficio.",
      "Introduce la inversión inicial y los costes adicionales no negativos por separado; un campo adicional vacío equivale a cero.",
      "Consulta el ROI respecto a todos los costes; considera plazo y riesgo por separado al comparar inversiones."
    ],
    "howItWorks": "ROI = (recibido − invertido − adicional) ÷ (invertido + adicional) × 100.",
    "example": "Recibido 130 000, invertido 100 000 y coste adicional 5000: total 105 000, beneficio 25 000, ROI ≈ 23,81%. Recibir cero con costes de 100 000 da ROI −100%.",
    "faq": [
      {
        "q": "¿Por qué los costes adicionales aparecen dos veces?",
        "a": "Reducen el beneficio y aumentan lo invertido. Contarlos solo contra el beneficio exagera el retorno."
      },
      {
        "q": "¿En qué se diferencia del ROI publicitario?",
        "a": "La fórmula es la misma; lo que cambia es qué cuenta como inversión. La versión publicitaria usa la inversión y los ingresos de la campaña."
      },
      {
        "q": "¿El ROI tiene en cuenta el tiempo?",
        "a": "No. El ROI del periodo completo no es una tasa anual. Sin flujos intermedios, la tasa anual de t años puede calcularse aparte como (recibido ÷ todos los costes)^(1/t) − 1; el formulario no admite fechas de flujos."
      },
      {
        "q": "¿Qué significa un ROI negativo?",
        "a": "Volvió menos de lo que entró. La calculadora lo muestra en vez de recortarlo a cero."
      }
    ],
    "disclaimer": "Resultado del periodo completo sin anualización, inflación, flujos intermedios ni impuestos automáticos."
  }
};
