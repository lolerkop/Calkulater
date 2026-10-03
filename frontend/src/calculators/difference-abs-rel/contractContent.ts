// Subject copy reviewed against the actual fields, formula and result rows.
import type { CalculatorDef } from '../../lib/types';

type ContractCopy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractCopy> = {
  "ru": {
    "longDescription": "Показывает обе разницы сразу: обычную разность и её размер относительно исходного значения. Знаменателем служит модуль базы, поэтому рост от отрицательного числа читается как рост, а не как отрицательный процент.",
    "howToUse": [
      "Введите исходное значение в поле «Было» и новое в поле «Стало».",
      "Используйте одинаковые единицы для обоих значений; отрицательные числа допустимы.",
      "Прочитайте разницу со знаком и процент к модулю исходного значения; при нулевой базе процент не определён."
    ],
    "howItWorks": "Абсолютная = стало − было. Относительная = эта разница, делённая на модуль исходного значения, умноженная на 100.",
    "example": "От 120 до 150: разница +30, относительная +25%. От −50 до 50: +100 и +200%, поскольку база равна |−50|. От 0 до 5: разница +5, относительная не определена.",
    "faq": [
      {
        "q": "Чем это отличается от процентного изменения?",
        "a": "Процентное изменение делит на саму базу. Здесь делитель — её модуль, поэтому рост от отрицательного числа читается как положительный."
      },
      {
        "q": "Почему относительная разница иногда отсутствует?",
        "a": "Когда исходное значение равно нулю, делить не на что, и существует только абсолютная разница."
      },
      {
        "q": "Какое значение считается базой?",
        "a": "Первое — то, от которого вы отталкиваетесь. Если поменять значения местами, процент изменится."
      },
      {
        "q": "Могут ли оба значения быть отрицательными?",
        "a": "Да. Абсолютная разница сохраняет знак, а относительная измеряется относительно размера базы."
      }
    ],
    "disclaimer": "«Абсолютная» здесь означает разницу в единицах со знаком, а не модуль разности. При нулевой базе относительный процент не определён."
  },
  "en": {
    "longDescription": "Shows both differences at once: the plain subtraction and its size relative to the starting value. The denominator is the absolute value of the base, so a rise from a negative number reads as growth rather than as a negative percentage.",
    "howToUse": [
      "Enter the original value in Before and the new value in After.",
      "Use the same units for both values; negative numbers are supported.",
      "Read the signed difference and the percentage relative to the absolute original value; a zero base has no relative percentage."
    ],
    "howItWorks": "Absolute = after − before. Relative = that difference divided by the absolute value of before, times 100.",
    "example": "From 120 to 150: signed difference +30, relative difference +25%. From −50 to 50: +100 and +200%, because the base is |−50|. From 0 to 5: difference +5 with no relative percentage.",
    "faq": [
      {
        "q": "How is this different from percentage change?",
        "a": "Percentage change divides by the base itself. Here the divisor is its absolute value, so growth from a negative number reads as positive."
      },
      {
        "q": "Why is relative difference missing sometimes?",
        "a": "When the starting value is zero there is nothing to divide by, so only the absolute difference exists."
      },
      {
        "q": "Which value is the base?",
        "a": "The first one — the value you started from. Swapping the two changes the percentage."
      },
      {
        "q": "Can both values be negative?",
        "a": "Yes. The absolute difference keeps its sign and the relative one is measured against the size of the base."
      }
    ],
    "disclaimer": "Here “absolute” means a signed difference in units, not the magnitude of the difference. A zero base has no relative percentage."
  },
  "uk": {
    "longDescription": "Калькулятор показує обидві різниці одразу: звичайну різницю й її розмір відносно вихідного значення. Знаменником служить модуль бази, тому зростання від від’ємного числа читається як зростання, а не як від’ємний відсоток — це та деталь, через яку звіти з від’ємними базами найчастіше тлумачать навпаки.",
    "howToUse": [
      "Введіть початкове значення в поле «Було», а нове в поле «Стало».",
      "Використовуйте однакові одиниці для обох значень; від’ємні числа допустимі.",
      "Прочитайте різницю зі знаком і відсоток до модуля початкового значення; за нульової бази відсоток не визначений."
    ],
    "howItWorks": "Абсолютна різниця дорівнює «стало» мінус «було». Відносна — ця сама різниця, поділена на модуль вихідного значення й помножена на 100. Модуль у знаменнику потрібен, щоб знак відповіді показував напрямок зміни, а не знак бази.",
    "example": "Від 120 до 150: різниця +30, відносна +25%. Від −50 до 50: +100 і +200%, бо база дорівнює |−50|. Від 0 до 5: різниця +5, відносна не визначена.",
    "faq": [
      {
        "q": "Чому в знаменнику стоїть модуль?",
        "a": "Щоб знак відповіді показував напрямок зміни. Без модуля зростання від −50 до −40 дало б від’ємний відсоток, хоча значення насправді зросло."
      },
      {
        "q": "Від чого рахується відсоток?",
        "a": "Від вихідного значення, а не від нового. Це принципово: зростання зі 100 до 120 становить 20 %, а падіння зі 120 до 100 — уже 16,7 %."
      },
      {
        "q": "Чим відсоток відрізняється від відсоткового пункту?",
        "a": "Відсоток — це відносна зміна, відсотковий пункт — проста різниця між двома відсотковими значеннями. Зростання ставки з 5 % до 7 % — це плюс 2 пункти, але плюс 40 відсотків."
      },
      {
        "q": "Що буде, якщо вихідне значення дорівнює нулю?",
        "a": "Відносна різниця не визначена: ділення на нуль. Абсолютна при цьому рахується звичайно."
      }
    ],
    "disclaimer": "«Абсолютна» тут означає різницю в одиницях зі знаком, а не модуль різниці. За нульової бази відносний відсоток не визначений."
  },
  "de": {
    "longDescription": "Zeigt beide Differenzen zugleich: die schlichte Subtraktion und ihre Größe im Verhältnis zum Ausgangswert. Im Nenner steht der Betrag der Basis, ein Anstieg von einer negativen Zahl aus liest sich deshalb als Wachstum und nicht als negativer Prozentwert.",
    "howToUse": [
      "Trage den ursprünglichen Wert bei Vorher und den neuen bei Nachher ein.",
      "Verwende dieselben Einheiten; negative Zahlen sind zulässig.",
      "Lies die vorzeichenbehaftete Differenz und den Prozentsatz zum Betrag des Ausgangswerts ab; bei null ist der relative Wert nicht definiert."
    ],
    "howItWorks": "Absolut = nachher − vorher. Relativ = diese Differenz geteilt durch den Betrag von vorher, mal 100.",
    "example": "Von 120 auf 150: Differenz +30, relative Differenz +25%. Von −50 auf 50: +100 und +200%, da die Basis |−50| ist. Von 0 auf 5: Differenz +5 ohne relativen Prozentsatz.",
    "faq": [
      {
        "q": "Wie unterscheidet sich das von der prozentualen Veränderung?",
        "a": "Die prozentuale Veränderung teilt durch die Basis selbst. Hier ist der Teiler ihr Betrag, ein Wachstum von einer negativen Zahl aus liest sich deshalb als positiv."
      },
      {
        "q": "Warum fehlt die relative Differenz manchmal?",
        "a": "Ist der Ausgangswert null, gibt es nichts, wodurch geteilt werden könnte, es besteht also nur die absolute Differenz."
      },
      {
        "q": "Welcher Wert ist die Basis?",
        "a": "Der erste — der Wert, von dem du ausgegangen bist. Die beiden zu tauschen ändert den Prozentwert."
      },
      {
        "q": "Dürfen beide Werte negativ sein?",
        "a": "Ja. Die absolute Differenz behält ihr Vorzeichen, und die relative wird an der Größe der Basis gemessen."
      }
    ],
    "disclaimer": "„Absolut“ bezeichnet hier die Differenz in Einheiten mit Vorzeichen, nicht ihren Betrag. Bei null als Basis ist der relative Prozentsatz nicht definiert."
  },
  "es": {
    "longDescription": "Muestra las dos diferencias a la vez: la resta simple y su tamaño respecto al valor de partida. El denominador es el valor absoluto de la base, así que una subida desde un número negativo se lee como crecimiento y no como un porcentaje negativo.",
    "howToUse": [
      "Introduce el valor inicial en Antes y el nuevo en Después.",
      "Usa las mismas unidades; se admiten números negativos.",
      "Lee la diferencia con signo y el porcentaje respecto al valor absoluto inicial; con una base cero no hay porcentaje relativo."
    ],
    "howItWorks": "Absoluta = después − antes. Relativa = esa diferencia dividida entre el valor absoluto de antes, por 100.",
    "example": "De 120 a 150: diferencia +30 y relativa +25%. De −50 a 50: +100 y +200%, porque la base es |−50|. De 0 a 5: diferencia +5 sin porcentaje relativo.",
    "faq": [
      {
        "q": "¿En qué se diferencia de la variación porcentual?",
        "a": "La variación porcentual divide entre la propia base. Aquí el divisor es su valor absoluto, así que el crecimiento desde un número negativo se lee como positivo."
      },
      {
        "q": "¿Por qué a veces falta la diferencia relativa?",
        "a": "Cuando el valor de partida es cero no hay entre qué dividir, así que solo existe la diferencia absoluta."
      },
      {
        "q": "¿Cuál de los dos valores es la base?",
        "a": "El primero: el valor del que partes. Intercambiarlos cambia el porcentaje."
      },
      {
        "q": "¿Pueden ser negativos los dos valores?",
        "a": "Sí. La diferencia absoluta conserva su signo y la relativa se mide contra el tamaño de la base."
      }
    ],
    "disclaimer": "Aquí «absoluta» significa diferencia en unidades con signo, no el valor absoluto de la resta. La base cero no tiene porcentaje relativo."
  }
};
