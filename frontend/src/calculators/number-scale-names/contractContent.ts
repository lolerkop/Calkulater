import type { CalculatorCopy } from '../../lib/platform/types';
type Body=Pick<CalculatorCopy,'longDescription'|'howToUse'|'howItWorks'|'example'|'faq'>;
export const contractContent:Record<'ru' | 'en' | 'uk' | 'de' | 'es',Body> = {
  "ru": {
    "longDescription": "В южноазиатской системе счёт идёт не тройками: после тысячи стоит лакх — сто тысяч, а после него крор — десять миллионов. Поэтому «два крора» это не два миллиона, а двадцать, и запись 1,00,00,000 группируется иначе, чем привычная 10,000,000. Калькулятор переводит в обе стороны и сразу показывает величину в единицах, в лакхах и в крорах, чтобы порядок был виден целиком.",
    "howToUse": [
      "Введите число и выберите, в какой шкале оно записано.",
      "Выберите шкалу, в которую нужно перевести.",
      "Строки «в единицах», «в лакхах» и «в крорах» показывают ту же величину сразу в трёх видах.",
      "Для очень больших и очень малых значений ответ выводится с показателем степени."
    ],
    "howItWorks": "Каждая шкала — это множитель к единице: тысяча 10³, лакх 10⁵, миллион 10⁶, крор 10⁷, миллиард 10⁹. Значение должно быть положительным; ноль и отрицательные числа не принимаются. Результат = значение × множитель исходной шкалы / множитель целевой. Здесь миллиард и английское billion означают 10⁹, без автоматического выбора длинной шкалы. Вспомогательная строка может выйти за числовой диапазон при конечном основном ответе; это отмечается отдельно.",
    "example": "25 лакхов — это 2,5 миллиона, то есть 2 500 000.",
    "faq": [
      {
        "q": "Сколько это — один крор?",
        "a": "Десять миллионов. Крор идёт после лакха, который равен ста тысячам, поэтому в кроре ровно сто лакхов."
      },
      {
        "q": "Почему запись группируется иначе?",
        "a": "Потому что после первой тройки цифры идут парами: 1,00,00,000 — это один крор. Западная запись 10,000,000 группирует всё по три."
      },
      {
        "q": "Где используются эти названия?",
        "a": "В этом калькуляторе лакх определён как 100 000, крор —10 000 000. Проверьте единицу рядом с числом в исходном тексте: названия и группировка цифр не меняют саму величину."
      },
      {
        "q": "Почему у единицы в лакхах показатель степени?",
        "a": "Одна единица — это 0,00001 лакха, а платформа переходит на показательную запись ниже 10⁻⁴, чтобы значение не превратилось в ноль при округлении."
      }
    ]
  },
  "en": {
    "longDescription": "The South Asian system does not count in threes: after the thousand comes the lakh, a hundred thousand, and after that the crore, ten million. So two crore is not two million but twenty, and 1,00,00,000 groups its digits differently from the familiar 10,000,000. The converter works both ways and shows the quantity in units, in lakh and in crore at once, so the order of magnitude is visible whole.",
    "howToUse": [
      "Enter the number and pick the scale it is written in.",
      "Pick the scale you want it converted to.",
      "The units, lakh and crore rows show the same quantity three ways at once.",
      "Very large and very small results are shown in exponent notation."
    ],
    "howItWorks": "Each scale is a multiplier over the unit: thousand 10³, lakh 10⁵, million 10⁶, crore 10⁷, billion 10⁹. The value must be positive; zero and negative numbers are rejected. Result = value × source multiplier / target multiplier. Here billion means 10⁹, with no automatic long-scale interpretation. A secondary row may exceed the numeric range even when the main result is finite; it is marked separately.",
    "example": "25 lakh is 2.5 million, that is 2,500,000.",
    "faq": [
      {
        "q": "How much is one crore?",
        "a": "Ten million. The crore follows the lakh, which is a hundred thousand, so one crore holds exactly a hundred lakh."
      },
      {
        "q": "Why are the digits grouped differently?",
        "a": "Because after the first group of three the digits go in pairs: 1,00,00,000 is one crore. Western notation groups everything in threes."
      },
      {
        "q": "Where are these names used?",
        "a": "This calculator defines lakh as 100,000 and crore as 10,000,000. Check the unit beside the original number: names and digit grouping do not change its value."
      },
      {
        "q": "Why does one unit in lakh show an exponent?",
        "a": "One unit is 0.00001 lakh, and the platform switches to exponent notation below 10⁻⁴ so that the value does not round away to zero."
      }
    ]
  },
  "uk": {
    "longDescription": "Індійська система числення користується власними розрядами: лакх — це сто тисяч, крор — десять мільйонів. Вони постійно трапляються в новинах, звітах і цінах на нерухомість Індії та сусідніх країн, а прямого відповідника в європейській системі не мають.",
    "howToUse": [
      "Виберіть шкалу, з якої переводите.",
      "Введіть значення.",
      "Виберіть цільову шкалу та прочитайте результат."
    ],
    "howItWorks": "Кожна шкала — це множник до одиниці: тисяча 10³, лакх 10⁵, мільйон 10⁶, крор 10⁷, мільярд 10⁹. Індійська система групує цифри інакше за європейську: після перших трьох розрядів вона йде парами, а не трійками. Значення має бути додатним; нуль і від’ємні числа не приймаються. Результат = значення × множник початкової шкали / множник цільової. Тут мільярд і англійське billion означають 10⁹, без автоматичного вибору довгої шкали. Допоміжний рядок може вийти за числовий діапазон за скінченного основного результату; це позначається окремо.",
    "example": "25 лакхів — це 2,5 мільйона, тобто 2 500 000. А 3 крори дорівнюють 30 мільйонам.",
    "faq": [
      {
        "q": "Скільки це — один крор?",
        "a": "Десять мільйонів, тобто сто лакхів."
      },
      {
        "q": "Чому індійська система групує цифри інакше?",
        "a": "Бо після перших трьох розрядів вона йде парами: 1,00,00,000 замість 10,000,000. Це відповідає структурі назв — лакх і крор відрізняються на два порядки, а не на три."
      },
      {
        "q": "Що таке білліон?",
        "a": "У цій формі англійське billion означає 10⁹, тобто мільярд. Якщо джерело використовує довгу шкалу 10¹², спочатку переведіть його число в одиниці; калькулятор сам традицію назви не визначає."
      },
      {
        "q": "Де ще вживають лакх і крор?",
        "a": "У цьому калькуляторі лакх —100 000, крор —10 000 000. Перевірте одиницю біля вихідного числа: назви й групування цифр не змінюють самої величини."
      }
    ]
  },
  "de": {
    "longDescription": "Das südasiatische System zählt nicht in Dreiergruppen: nach dem Tausender kommt das Lakh mit hunderttausend und danach das Crore mit zehn Millionen. Zwei Crore sind also nicht zwei Millionen, sondern zwanzig, und 1,00,00,000 gruppiert seine Ziffern anders als die vertrauten 10 000 000. Der Umrechner arbeitet in beide Richtungen und zeigt die Menge zugleich in Einheiten, in Lakh und in Crore, damit die Größenordnung als Ganzes sichtbar bleibt.",
    "howToUse": [
      "Trage die Zahl ein und wähle die Skala, in der sie geschrieben ist.",
      "Wähle die Skala, in die sie umgerechnet werden soll.",
      "Die Zeilen für Einheiten, Lakh und Crore zeigen dieselbe Menge dreifach zugleich.",
      "Sehr große und sehr kleine Ergebnisse erscheinen in Exponentialschreibweise."
    ],
    "howItWorks": "Jede Skala ist ein Faktor über der Einheit: Tausend 10³, Lakh 10⁵, Million 10⁶, Crore 10⁷, Milliarde 10⁹. Der Wert muss positiv sein; null und negative Zahlen werden abgelehnt. Ergebnis = Wert × Ausgangsfaktor / Zielfaktor. Milliarde und englisches billion bedeuten hier 10⁹; die lange Skala wird nicht automatisch gewählt. Eine Zusatzzeile kann trotz endlichem Hauptergebnis den Zahlenbereich überschreiten; dies wird gesondert markiert.",
    "example": "25 Lakh sind 2,5 Millionen, also 2 500 000.",
    "faq": [
      {
        "q": "Wie viel ist ein Crore?",
        "a": "Zehn Millionen. Das Crore folgt auf das Lakh, das hunderttausend ist, ein Crore hält also genau hundert Lakh."
      },
      {
        "q": "Warum werden die Ziffern anders gruppiert?",
        "a": "Weil nach der ersten Dreiergruppe die Ziffern paarweise gehen: 1,00,00,000 ist ein Crore. Die westliche Schreibweise gruppiert durchgehend in Dreiergruppen."
      },
      {
        "q": "Wo werden diese Namen verwendet?",
        "a": "Hier ist Lakh als 100 000 und Crore als 10 000 000 definiert. Die Einheit neben der Ausgangszahl prüfen: Namen und Zifferngruppierung ändern den Wert nicht."
      },
      {
        "q": "Warum zeigt eine Einheit in Lakh einen Exponenten?",
        "a": "Eine Einheit sind 0,00001 Lakh, und unterhalb von 10⁻⁴ wechselt die Anzeige in die Exponentialschreibweise, damit der Wert nicht auf null gerundet wird."
      }
    ]
  },
  "es": {
    "longDescription": "El sistema del sur de Asia no cuenta de tres en tres: después del millar viene el lakh, cien mil, y después el crore, diez millones. Así que dos crore no son dos millones, sino veinte, y 1,00,00,000 agrupa sus cifras de otra manera que el habitual 10.000.000. El conversor funciona en ambos sentidos y muestra la cantidad en unidades, en lakh y en crore a la vez, de modo que el orden de magnitud se ve entero.",
    "howToUse": [
      "Introduce el número y elige la escala en la que está escrito.",
      "Elige la escala a la que quieres convertirlo.",
      "Las filas de unidades, lakh y crore muestran la misma cantidad de tres maneras a la vez.",
      "Los resultados muy grandes y muy pequeños se muestran en notación exponencial."
    ],
    "howItWorks": "Cada escala es un multiplicador sobre la unidad: millar 10³, lakh 10⁵, millón 10⁶, crore 10⁷, mil millones 10⁹. El valor debe ser positivo; se rechazan cero y números negativos. Resultado = valor × multiplicador de origen / multiplicador de destino. Aquí mil millones y el inglés billion significan 10⁹, sin interpretación automática de la escala larga. Una fila auxiliar puede exceder el rango numérico aunque el resultado principal sea finito; se señala por separado.",
    "example": "25 lakh son 2,5 millones, es decir, 2.500.000.",
    "faq": [
      {
        "q": "¿Cuánto es un crore?",
        "a": "Diez millones. El crore sigue al lakh, que son cien mil, así que un crore contiene exactamente cien lakh."
      },
      {
        "q": "¿Por qué se agrupan las cifras de otra forma?",
        "a": "Porque tras el primer grupo de tres las cifras van de dos en dos: 1,00,00,000 es un crore. La notación occidental lo agrupa todo de tres en tres."
      },
      {
        "q": "¿Dónde se usan estos nombres?",
        "a": "Aquí lakh equivale a 100 000 y crore a 10 000 000. Comprueba la unidad junto al número original: los nombres y la agrupación de cifras no cambian su valor."
      },
      {
        "q": "¿Por qué una unidad en lakh aparece con exponente?",
        "a": "Una unidad son 0,00001 lakh, y la plataforma pasa a notación exponencial por debajo de 10⁻⁴ para que el valor no se redondee hasta desaparecer."
      }
    ]
  }
};
