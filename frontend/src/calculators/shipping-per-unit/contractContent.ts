// Subject copy reviewed against the actual fields, formula and result rows.
import type { CalculatorDef } from '../../lib/types';

type ContractCopy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractCopy> = {
  "ru": {
    "longDescription": "Распределяет заданные расходы на доставку и упаковку партии поровну между её единицами. Это распределение уже известной суммы, а не расчёт тарифа перевозчика: форма не определяет, как доставка меняется с весом, расстоянием или размером следующей партии.",
    "howToUse": [
      "Введите стоимость доставки всей партии.",
      "Укажите положительное целое число единиц в этой партии и, при необходимости, упаковку всей партии.",
      "Прочитайте равную долю затрат на единицу; поле упаковки не означает стоимость упаковки одной штуки."
    ],
    "howItWorks": "На единицу = (доставка всей партии + упаковка всей партии) ÷ число единиц. Количество положительное и целое; суммы неотрицательные. Пустая упаковка означает ноль. Распределение равное, без коэффициентов веса, объёма или цены товара.",
    "example": "Доставка партии 5000, упаковка партии 1000, количество 100: всего 6000, на единицу 60. Без упаковки — 50 на единицу. Если обе суммы нулевые, результат ноль; количество ноль недопустимо.",
    "faq": [
      {
        "q": "Учитывать ли упаковку?",
        "a": "Учитывайте, если платите за неё отдельно на партию. Оставьте поле пустым — распределится только доставка."
      },
      {
        "q": "Почему число единиц должно быть целым?",
        "a": "В партии целые товары; дробное значение означает, что партия или данные взяты неверно."
      },
      {
        "q": "Это переменные затраты?",
        "a": "Это зависит от договора перевозчика. У партии может быть фиксированная цена, тариф за вес, ступени или их сочетание. Калькулятор только делит введённую общую сумму и не определяет структуру затрат."
      },
      {
        "q": "А возвраты?",
        "a": "Обратная доставка — отдельная статья. Добавляйте её к стоимости доставки, только если нужна полностью нагруженная цифра."
      }
    ],
    "disclaimer": "Равное распределение расходов партии, без тарифов перевозчика, весовых коэффициентов и автоматического учёта возвратов."
  },
  "en": {
    "longDescription": "Allocates the given batch delivery and packaging costs equally across its units. This distributes a known amount rather than calculating a carrier tariff: the form does not determine how delivery changes with weight, distance or the size of another batch.",
    "howToUse": [
      "Enter the delivery cost of the entire batch.",
      "Enter a positive whole batch quantity and, optionally, packaging cost for the entire batch.",
      "Read the equal cost allocated per unit; the packaging field is not a per-item packaging price."
    ],
    "howItWorks": "Per unit = (whole-batch delivery + whole-batch packaging) ÷ number of units. Quantity is a positive whole number and costs are nonnegative. Blank packaging means zero. Allocation is equal, without weight, volume or item-price factors.",
    "example": "Batch delivery 5,000, batch packaging 1,000, quantity 100: total 6,000, per unit 60. Without packaging it is 50 per unit. Both costs zero give zero; quantity zero is invalid.",
    "faq": [
      {
        "q": "Should packaging be included?",
        "a": "Include it if you pay for it per batch. Leave the field empty and only the delivery is spread."
      },
      {
        "q": "Why must units be whole?",
        "a": "A batch holds whole items; a fractional count means the batch or the data is wrong."
      },
      {
        "q": "Does this belong in variable costs?",
        "a": "That depends on the carrier contract. A batch may have a fixed charge, weight pricing, bands or a combination. The calculator only divides the entered total and does not classify its cost structure."
      },
      {
        "q": "What about returns?",
        "a": "Return shipping is a separate cost. Add it to the delivery figure only if you want the fully loaded number."
      }
    ],
    "disclaimer": "Equal allocation of batch costs without carrier tariffs, weighting factors or automatic return costs."
  },
  "uk": {
    "longDescription": "Розподіляє задані витрати на доставку й пакування партії порівну між її одиницями. Це розподіл відомої суми, а не розрахунок тарифу перевізника: форма не визначає, як доставка змінюється з вагою, відстанню чи розміром наступної партії.",
    "howToUse": [
      "Введіть вартість доставки всієї партії.",
      "Укажіть додатну цілу кількість одиниць у партії та, за потреби, пакування всієї партії.",
      "Прочитайте рівну частку витрат на одиницю; поле пакування не є ціною пакування однієї штуки."
    ],
    "howItWorks": "На одиницю = (доставка всієї партії + пакування всієї партії) ÷ кількість одиниць. Кількість додатна й ціла; суми невід’ємні. Порожнє пакування означає нуль. Розподіл рівний, без коефіцієнтів ваги, об’єму чи ціни товару.",
    "example": "Доставка партії 5000, пакування партії 1000, кількість 100: разом 6000, на одиницю 60. Без пакування — 50 на одиницю. Обидві суми нульові дають нуль; кількість нуль недопустима.",
    "faq": [
      {
        "q": "Чому дрібні партії такі дорогі?",
        "a": "Якщо загальна ціна доставки незмінна, менша партія дає більшу частку на одиницю: 5000 ÷ 25 = 200, а 5000 ÷ 250 = 20. Але сам тариф може змінюватися з вагою чи обсягом; форма цього не прогнозує."
      },
      {
        "q": "Чи враховувати пакування?",
        "a": "Так, якщо воно потрібне саме для перевезення. Роздрібне пакування, яке товар має в будь-якому разі, належить до собівартості, а не до доставки."
      },
      {
        "q": "Як це використати для ціноутворення?",
        "a": "Додайте частку логістики до собівартості, якщо її ще не враховано. Не рахуйте ту саму упаковку або доставку двічі. Для змішаних товарів рівний розподіл може бути непридатним."
      },
      {
        "q": "Що робити зі змішаними партіями?",
        "a": "Ця форма розподіляє витрати порівну за кількістю. Якщо потрібні частки за вагою чи об’ємом, розрахуйте їх окремо для груп товарів, а потім поділіть виділену суму на кількість відповідної групи. Коефіцієнтів ваги тут немає."
      }
    ],
    "disclaimer": "Рівний розподіл витрат партії без тарифів перевізника, вагових коефіцієнтів та автоматичного обліку повернень."
  },
  "de": {
    "longDescription": "Verteilt die angegebenen Liefer- und Verpackungskosten einer Charge gleichmäßig auf ihre Stückzahl. Es wird ein bekannter Betrag verteilt, kein Frachttarif berechnet: Das Formular bestimmt nicht, wie Kosten mit Gewicht, Strecke oder einer anderen Chargengröße variieren.",
    "howToUse": [
      "Trage die Lieferkosten der gesamten Charge ein.",
      "Gib eine positive ganze Stückzahl und optional Verpackungskosten für die gesamte Charge an.",
      "Lies die gleichmäßig verteilten Kosten pro Stück ab; das Verpackungsfeld ist kein Verpackungspreis je Stück."
    ],
    "howItWorks": "Pro Stück = (Lieferung der gesamten Charge + Verpackung der gesamten Charge) ÷ Stückzahl. Die Menge ist positiv und ganzzahlig, Kosten sind nichtnegativ. Leere Verpackung bedeutet null. Die Verteilung ist gleichmäßig, ohne Gewicht-, Volumen- oder Preisfaktoren.",
    "example": "Lieferung der Charge 5000, Verpackung 1000, Menge 100: insgesamt 6000, pro Stück 60. Ohne Verpackung sind es 50 pro Stück. Zwei Nullbeträge ergeben null; Menge null ist unzulässig.",
    "faq": [
      {
        "q": "Soll die Verpackung enthalten sein?",
        "a": "Nimm sie hinein, wenn du sie je Sendung zahlst. Lass das Feld leer, und nur die Lieferung wird verteilt."
      },
      {
        "q": "Warum muss die Stückzahl ganzzahlig sein?",
        "a": "Eine Sendung enthält ganze Artikel; eine gebrochene Zahl heißt, dass die Sendung oder die Daten nicht stimmen."
      },
      {
        "q": "Gehört das zu den variablen Kosten?",
        "a": "Das hängt vom Frachtvertrag ab: Festpreis, Gewichtstarif, Staffel oder Kombination sind möglich. Der Rechner teilt nur den eingegebenen Gesamtbetrag und bestimmt keine Kostenstruktur."
      },
      {
        "q": "Und die Rücksendungen?",
        "a": "Der Rückversand ist eine eigene Kostenart. Rechne ihn nur dann zu den Lieferkosten, wenn du die vollständig belastete Zahl willst."
      }
    ],
    "disclaimer": "Gleiche Verteilung der Chargenkosten ohne Frachttarif, Gewichtungsfaktoren oder automatische Rücksendekosten."
  },
  "es": {
    "longDescription": "Reparte por igual los costes indicados de envío y embalaje del lote entre sus unidades. Distribuye un importe conocido, sin calcular la tarifa del transportista: no determina cómo varía el envío con el peso, la distancia o el tamaño de otro lote.",
    "howToUse": [
      "Introduce el coste de envío del lote completo.",
      "Indica una cantidad entera positiva y, opcionalmente, el embalaje de todo el lote.",
      "Consulta el coste repartido por igual entre las unidades; el campo de embalaje no es su precio por pieza."
    ],
    "howItWorks": "Por unidad = (envío de todo el lote + embalaje de todo el lote) ÷ número de unidades. La cantidad es entera positiva y los costes no negativos. Embalaje vacío equivale a cero. El reparto es uniforme, sin factores de peso, volumen o precio.",
    "example": "Envío del lote 5000, embalaje del lote 1000, cantidad 100: total 6000, por unidad 60. Sin embalaje son 50 por unidad. Ambos costes cero dan cero; cantidad cero no es válida.",
    "faq": [
      {
        "q": "¿Debo incluir el embalaje?",
        "a": "Inclúyelo si lo pagas por lote. Deja el campo vacío y solo se reparte la entrega."
      },
      {
        "q": "¿Por qué las unidades deben ser un número entero?",
        "a": "Un lote contiene artículos enteros; un recuento fraccionario significa que el lote o los datos están mal."
      },
      {
        "q": "¿Esto pertenece a los costes variables?",
        "a": "Depende del contrato: el lote puede tener una tarifa fija, por peso, por tramos o combinada. La calculadora solo divide el total introducido y no clasifica la estructura de costes."
      },
      {
        "q": "¿Y las devoluciones?",
        "a": "El envío de devolución es un coste aparte. Súmalo a la cifra de entrega solo si quieres el número totalmente cargado."
      }
    ],
    "disclaimer": "Reparto uniforme de costes del lote sin tarifas del transportista, ponderaciones ni costes automáticos de devolución."
  }
};
