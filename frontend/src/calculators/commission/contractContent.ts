import type { CalculatorDef } from '../../lib/types';
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Калькулятор считает комиссию по сумме и ставке, восстанавливает сумму сделки по известной комиссии или находит ставку, когда известны обе величины. Режим определяет, что вы вводите, а что получаете.",
    "howToUse": [
      "Выберите режим по тому, что уже известно.",
      "Введите две известные величины.",
      "Прочитайте недостающую и сумму к получению."
    ],
    "howItWorks": "Комиссия C = сумма A × ставка p / 100. Обратный режим: A = C / (p / 100), поэтому p > 0. По двум суммам p = C / A × 100, поэтому A > 0. «К получению» = A − C. Суммы и ставка неотрицательны; ставка выше 100% математически даёт отрицательный остаток и не доказывает допустимость тарифа.",
    "example": "Сделка на 100 000 при ставке 2,5 % даёт комиссию 2 500 и выплату 97 500.",
    "faq": [
      {
        "q": "Какой режим выбрать?",
        "a": "Тот, где названы две величины, которые у вас уже есть. Третью посчитает калькулятор."
      },
      {
        "q": "Учитываются ли налоги?",
        "a": "Нет, результат — комиссия до налогов. Налоги и сборы зависят от юрисдикции и условий договора."
      },
      {
        "q": "Может ли ставка быть нулевой?",
        "a": "При расчёте комиссии из суммы — да, результат просто нулевой. Восстановить сумму по нулевой ставке нельзя: ответа не существует."
      },
      {
        "q": "Почему выплата показана во всех режимах?",
        "a": "Это величина, которая нужна чаще всего, и во всех трёх направлениях она считается одним и тем же вычитанием."
      }
    ],
    "disclaimer": "Модель вычитает одну процентную комиссию из суммы сделки. Минимальный сбор, многоступенчатый тариф, начисление сверху и налоги не учитываются."
  },
  "en": {
    "longDescription": "Work out a commission from a deal amount and a rate, recover the amount from a known commission, or find the rate when both figures are known. The mode decides which two values you enter and which one is calculated.",
    "howToUse": [
      "Pick the mode for what you already know.",
      "Enter the two known values.",
      "Read the missing figure and the payout."
    ],
    "howItWorks": "Commission C = amount A × rate p / 100. To recover the amount, A = C / (p / 100), requiring p > 0. To find the rate, p = C / A × 100, requiring A > 0. Payout = A − C. Inputs must be non-negative; a rate above 100% gives a negative mathematical remainder without validating a real tariff.",
    "example": "A deal of 100,000 at 2.5% gives a commission of 2,500 and a payout of 97,500.",
    "faq": [
      {
        "q": "Which mode should I use?",
        "a": "Pick the one naming the two values you already have. The third is what the calculator returns."
      },
      {
        "q": "Does it include tax?",
        "a": "No. The result is gross commission; taxes and fees depend on your jurisdiction and contract."
      },
      {
        "q": "Can the rate be zero?",
        "a": "Yes when computing commission from an amount — the result is simply zero. Recovering an amount from a zero rate has no answer."
      },
      {
        "q": "Why does the payout appear in every mode?",
        "a": "It is the figure most people actually need, and it is the same subtraction in all three directions."
      }
    ],
    "disclaimer": "The model deducts one percentage commission from the deal amount. Minimum charges, tiered tariffs, fees added on top and taxes are excluded."
  },
  "uk": {
    "longDescription": "Розрахунок комісії розв’язує одне співвідношення в три боки: за сумою й ставкою знаходить комісію, за комісією й ставкою — суму угоди, за сумою й комісією — ставку. Оберіть режим за двома відомими величинами; лише суми, що прийшла на рахунок після утримання, для цих зворотних режимів недостатньо.",
    "howToUse": [
      "Виберіть, що шукати: комісію, суму угоди чи ставку.",
      "Введіть дві відомі величини.",
      "Прочитайте результат разом із сумою до виплати."
    ],
    "howItWorks": "Комісія C = сума A × ставка p / 100. Зворотний режим: A = C / (p / 100), тож p > 0. За двома сумами p = C / A × 100, тож A > 0. Виплата = A − C. Вхідні величини невід’ємні; ставка понад 100% дає від’ємний математичний залишок, але не підтверджує допустимість тарифу.",
    "example": "Угода на 100 000 ₴ за ставки 2,5 % дає комісію 2500 ₴ і виплату 97 500 ₴.",
    "faq": [
      {
        "q": "Комісія береться від суми угоди чи від виплати?",
        "a": "У цій моделі база — повна сума угоди, а комісія віднімається від неї. Нарахування збору понад суму, інша договірна база чи мінімальна комісія тут не моделюються."
      },
      {
        "q": "Як знайти ставку, знаючи утриману суму?",
        "a": "Виберіть режим пошуку ставки: вона дорівнює комісія × 100 ÷ сума. Так зручно перевіряти, чи збігається фактичне утримання із заявленим."
      },
      {
        "q": "Чи буває мінімальна комісія?",
        "a": "Часто. Багато посередників установлюють нижню межу в абсолютній сумі, і для дрібних угод фактична ставка виявляється значно вищою за номінальну."
      },
      {
        "q": "Чи входить сюди податок?",
        "a": "Ні. Податки, їхні бази й право на відрахування залежать від застосовних правил. Тут обчислюється лише одна відсоткова комісія."
      }
    ],
    "disclaimer": "Модель віднімає одну відсоткову комісію із суми угоди. Мінімальний збір, ступінчастий тариф, нарахування зверху та податки не враховуються."
  },
  "de": {
    "longDescription": "Ermittle eine Provision aus Geschäftsbetrag und Satz, gewinne den Betrag aus einer bekannten Provision zurück oder finde den Satz, wenn beide Zahlen bekannt sind. Der Modus entscheidet, welche zwei Werte du einträgst und welcher berechnet wird.",
    "howToUse": [
      "Wähle den Modus für das, was du bereits kennst.",
      "Trage die beiden bekannten Werte ein.",
      "Lies die fehlende Zahl und die Auszahlung ab."
    ],
    "howItWorks": "Provision C = Betrag A × Prozentsatz p / 100. Für den Ausgangsbetrag gilt A = C / (p / 100), also p > 0. Für den Satz gilt p = C / A × 100, also A > 0. Auszahlung = A − C. Die Eingaben sind nicht negativ; ein Satz über 100% ergibt einen negativen Rechenrest und bestätigt keinen tatsächlichen Tarif.",
    "example": "Ein Geschäft über 100 000 € zu 2,5 % ergibt eine Provision von 2500 € und eine Auszahlung von 97 500 €.",
    "faq": [
      {
        "q": "Welchen Modus soll ich nehmen?",
        "a": "Den, der die beiden Werte nennt, die du bereits hast. Den dritten liefert der Rechner."
      },
      {
        "q": "Ist die Steuer enthalten?",
        "a": "Nein. Das Ergebnis ist die Bruttoprovision; Steuern und Gebühren hängen von deinem Rechtsraum und deinem Vertrag ab."
      },
      {
        "q": "Darf der Satz null sein?",
        "a": "Ja, wenn die Provision aus einem Betrag berechnet wird — das Ergebnis ist dann schlicht null. Einen Betrag aus einem Satz von null zurückzugewinnen hat keine Antwort."
      },
      {
        "q": "Warum erscheint die Auszahlung in jedem Modus?",
        "a": "Sie ist die Zahl, die die meisten tatsächlich brauchen, und es ist in allen drei Richtungen dieselbe Subtraktion."
      }
    ],
    "disclaimer": "Das Modell zieht eine prozentuale Provision vom Geschäftsbetrag ab. Mindestgebühren, Tarifstufen, aufgeschlagene Gebühren und Steuern bleiben außen vor."
  },
  "es": {
    "longDescription": "Calcula una comisión a partir del importe de una operación y un tipo, recupera el importe a partir de una comisión conocida, o halla el tipo cuando se conocen ambas cifras. El modo decide qué dos valores introduces y cuál se calcula.",
    "howToUse": [
      "Elige el modo según lo que ya conozcas.",
      "Introduce los dos valores conocidos.",
      "Consulta la cifra que faltaba y la liquidación."
    ],
    "howItWorks": "Comisión C = importe A × porcentaje p / 100. Para recuperar el importe, A = C / (p / 100), con p > 0. Para hallar el porcentaje, p = C / A × 100, con A > 0. Liquidación = A − C. Las entradas son no negativas; un porcentaje superior al 100% da un resto negativo sin validar una tarifa real.",
    "example": "Una operación de 100 000 al 2,5 % da una comisión de 2500 y una liquidación de 97 500.",
    "faq": [
      {
        "q": "¿Qué modo debo usar?",
        "a": "El que nombre los dos valores que ya tienes. El tercero es lo que devuelve la calculadora."
      },
      {
        "q": "¿Incluye impuestos?",
        "a": "No. El resultado es la comisión bruta; los impuestos y las tasas dependen de tu jurisdicción y de tu contrato."
      },
      {
        "q": "¿El tipo puede ser cero?",
        "a": "Sí al calcular la comisión a partir de un importe: el resultado es simplemente cero. Recuperar un importe con un tipo de cero no tiene respuesta."
      },
      {
        "q": "¿Por qué la liquidación aparece en todos los modos?",
        "a": "Es la cifra que la mayoría de la gente necesita de verdad, y es la misma resta en los tres sentidos."
      }
    ],
    "disclaimer": "El modelo descuenta una comisión porcentual del importe de la operación. Excluye mínimos, tarifas por tramos, cargos añadidos e impuestos."
  }
};
