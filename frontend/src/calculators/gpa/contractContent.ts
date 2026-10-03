import type { CalculatorCopy } from '../../lib/platform/types';
type Body = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Body> = {
  "ru": {
    "longDescription": "Считает средний балл по списку оценок, где каждая может иметь свой вес — число кредитов, часов или любую другую меру значимости предмета. Рядом показано простое среднее без весов: разница между ними сразу показывает, тянут ли итог вниз именно тяжёлые предметы. Шкала здесь не навязывается: принимаются любые неотрицательные оценки, поэтому одинаково работают пятибалльная, стобалльная и четырёхбалльная системы. Соответствие между ними калькулятор не устанавливает — таблицы перевода различаются от вуза к вузу, и молча выбрать одну значило бы выдать чужое правило за общее.",
    "howToUse": [
      "Вводите по одной оценке в строке.",
      "Через пробел укажите вес предмета — кредиты или часы.",
      "Если веса не важны, оставьте только оценку: вес будет равен единице.",
      "Сравните взвешенное среднее с простым, чтобы увидеть влияние тяжёлых предметов."
    ],
    "howItWorks": "Взвешенное среднее = Σ(оценка × вес) / Σвесов; простое среднее = Σоценок / число строк. Пропущенный вес равен 1, явно указанный вес должен быть положительным. Все оценки вводятся в одной шкале. Результат обычно округляется до четырёх знаков после запятой; положительные значения меньше 0,0001 или не меньше 10¹² показаны в научной записи с четырьмя значащими цифрами. Правила конкретного учебного заведения, включая пересдачи и округление, здесь не воспроизводятся.",
    "example": "Оценки 5, 4 и 3 с кредитами 3, 4 и 2 дают средний балл 4,1111 против простого среднего 4.",
    "faq": [
      {
        "q": "Что писать в качестве веса?",
        "a": "Число кредитов, зачётных единиц или часов — любую меру, которой измеряется вклад предмета. Если такой меры нет, вес можно не указывать."
      },
      {
        "q": "Какая шкала поддерживается?",
        "a": "Любая неотрицательная: пятибалльная, стобалльная, четырёхбалльная GPA. Расчёт не переводит оценки между шкалами — вводите их в одной."
      },
      {
        "q": "Почему показано и простое среднее?",
        "a": "Чтобы был виден эффект весов. Если взвешенное заметно ниже простого, значит низкие оценки пришлись на предметы с большим числом кредитов."
      },
      {
        "q": "Что если вес равен нулю?",
        "a": "Такая строка отклоняется: предмет с нулевым весом не влияет на результат, и обычно это опечатка, а не намерение."
      },
      {
        "q": "Можно ли вводить дробные оценки?",
        "a": "Да. 4,5 без пробела после запятой — дробная оценка. Вес отделяется пробелом или точкой с запятой: «5 3» и «5; 3». Старый формат «5, 3» с пробелом после запятой также означает оценку 5 с весом 3."
      }
    ]
  },
  "en": {
    "longDescription": "Computes an average from a list of grades where each may carry its own weight — credits, hours or any other measure of how much a subject counts. The unweighted mean is shown beside it, so the gap between the two immediately reveals whether the heavy subjects are what drags the result down. No scale is imposed: any non-negative grade is accepted, so five-point, hundred-point and four-point systems all work. The calculator does not convert between them — conversion tables differ between institutions, and quietly picking one would pass somebody else's rule off as universal.",
    "howToUse": [
      "Enter one grade per line.",
      "Add the subject weight after a space — credits or hours.",
      "If weights do not matter, leave the grade alone: the weight defaults to one.",
      "Compare the weighted average with the unweighted one to see the effect of heavy subjects."
    ],
    "howItWorks": "Weighted mean = Σ(grade × weight) / Σweights; unweighted mean = Σgrades / row count. An omitted weight is 1; an explicit weight must be positive. Use one grading scale throughout. Results normally round to four decimal places; positive values below 0.0001 or at least 10¹² use scientific notation with four significant digits. Institutional rules, including retakes and rounding, are not reproduced.",
    "example": "Grades of 5, 4 and 3 with credits 3, 4 and 2 give a weighted average of 4.1111 against an unweighted 4.",
    "faq": [
      {
        "q": "What should I use as a weight?",
        "a": "Credits, course units or hours — any measure of how much a subject contributes. If there is no such measure, leave the weight out."
      },
      {
        "q": "Which grading scale is supported?",
        "a": "Any non-negative one: five-point, hundred-point, four-point GPA. The calculation does not convert between scales, so enter them all in one."
      },
      {
        "q": "Why is the unweighted mean also shown?",
        "a": "So the effect of the weights is visible. If the weighted figure is noticeably lower, the low grades fell on the subjects carrying the most credits."
      },
      {
        "q": "What if a weight is zero?",
        "a": "That line is rejected: a subject with zero weight cannot affect the result, and it is usually a typo rather than an intention."
      },
      {
        "q": "Can grades be fractional?",
        "a": "Yes. 4.5 or a decimal comma without following whitespace is a fractional grade. Separate the weight with whitespace or a semicolon: “5 3” or “5; 3”. The legacy “5, 3” with whitespace after the comma also means grade 5 with weight 3."
      }
    ]
  },
  "uk": {
    "longDescription": "Середній бал із вагами показує, як предмети з різною значущістю впливають на підсумок. Оцінку можна ввести з кредитами, годинами або іншою додатною вагою; без ваги вона дорівнює одиниці. Поряд показано простий середній. Шкалу оцінювання не перетворюємо: усі оцінки мають бути в одній шкалі.",
    "howToUse": [
      "Введіть одну невід’ємну оцінку в кожному рядку.",
      "Після пробілу додайте додатну вагу: кредити, години або іншу узгоджену міру. Без ваги використовується 1.",
      "Порівняйте зважений і простий середній; сума ваг не обов’язково означає кредити."
    ],
    "howItWorks": "Зважений середній = Σ(оцінка × вага) / Σваг; простий середній = Σоцінок / кількість рядків. Пропущена вага дорівнює 1, явно введена має бути додатною. Усі оцінки вводьте в одній шкалі. Результат зазвичай округлюється до чотирьох знаків після коми; додатні значення менші за 0,0001 або не менші за 10¹² показано в науковому записі з чотирма значущими цифрами. Правила закладу щодо перескладань та округлення тут не відтворюються.",
    "example": "Оцінки 5, 4 і 3 з кредитами 3, 4 і 2 дають середній бал 4,1111 проти простого середнього 4.",
    "faq": [
      {
        "q": "Чому зважений бал відрізняється від простого?",
        "a": "Ваги визначають внесок кожної оцінки. За однакових ваг обидва середні збігаються; за різних вони також можуть збігтися, наприклад коли всі оцінки однакові."
      },
      {
        "q": "Що брати за кредити?",
        "a": "Кількість залікових одиниць курсу, а за їхньої відсутності — годин. Головне, щоб міра була однаковою для всіх курсів."
      },
      {
        "q": "Як перевести оцінки в іншу шкалу?",
        "a": "Калькулятор не переводить оцінки між шкалами. Застосуйте офіційну таблицю свого закладу, якщо потрібне перетворення, і вводьте всі рядки вже в одній шкалі."
      },
      {
        "q": "Чи входять сюди незараховані курси?",
        "a": "Це визначають правила вашого закладу: до середнього можуть входити окремі спроби або оцінка, що замінює попередню. Внесіть лише потрібні за цими правилами рядки та ваги; калькулятор сам не обирає спробу."
      }
    ]
  },
  "de": {
    "longDescription": "Ein Notendurchschnitt ist selten das einfache Mittel aller Noten: Eine Vorlesung mit zehn Leistungspunkten wiegt schwerer als ein Seminar mit zwei. Der Rechner nimmt eine Liste aus Note und Gewicht, bildet den gewichteten Durchschnitt und stellt das ungewichtete Mittel daneben — die Differenz zeigt, wie stark die Gewichtung das Ergebnis verschiebt.",
    "howToUse": [
      "Trage je Zeile eine Note ein, danach durch Leerzeichen getrennt ihr Gewicht.",
      "Lässt du das Gewicht weg, zählt die Zeile mit dem Gewicht 1.",
      "Lies den gewichteten Durchschnitt ab.",
      "Vergleiche ihn mit dem ungewichteten Mittel, um den Einfluss der Gewichte zu sehen."
    ],
    "howItWorks": "Gewichtetes Mittel = Σ(Note × Gewicht) / ΣGewichte; ungewichtetes Mittel = ΣNoten / Zeilenzahl. Ein ausgelassenes Gewicht ist 1, ein eingegebenes Gewicht muss positiv sein. Alle Noten müssen dieselbe Skala verwenden. Das Ergebnis wird normalerweise auf vier Nachkommastellen gerundet; positive Werte unter 0,0001 oder ab 10¹² erscheinen in wissenschaftlicher Schreibweise mit vier signifikanten Stellen. Regeln einer Hochschule zu Wiederholungen und Rundung werden nicht nachgebildet.",
    "example": "Bei den Zeilen „1,7 10“, „2,3 4“ und „1,0 2“ ergibt sich 1,7 × 10 + 2,3 × 4 + 1,0 × 2 = 28,2 bei 16 Gewichtspunkten, also ein gewichteter Durchschnitt von 1,76. Das ungewichtete Mittel läge bei 1,67.",
    "faq": [
      {
        "q": "Welche Notenskala erwartet der Rechner?",
        "a": "Keine bestimmte. Er rechnet mit den eingetragenen Zahlen, gleich ob deutsche Noten von 1 bis 5, Punkte von 0 bis 15 oder eine Vier-Punkte-Skala verwendet werden. Wichtig ist nur, dass alle Zeilen dieselbe Skala nutzen."
      },
      {
        "q": "Was zählt als Gewicht?",
        "a": "Üblich sind Leistungspunkte, Semesterwochenstunden oder eine Prüfungsgewichtung in Prozent. Entscheidend ist, dass dasselbe Maß in allen Zeilen steht."
      },
      {
        "q": "Warum unterscheiden sich gewichteter und ungewichteter Wert?",
        "a": "Weil das gewichtete Mittel große Module stärker berücksichtigt. Eine gute Note in einem kleinen Seminar hebt den Schnitt weniger, als es das einfache Mittel vermuten lässt."
      },
      {
        "q": "Was passiert bei einem Gewicht von null?",
        "a": "Ein Gewicht von null wird abgelehnt. Entferne eine nicht einzubeziehende Zeile ausdrücklich; sie wird nicht automatisch aus dem Durchschnitt gestrichen."
      }
    ]
  },
  "es": {
    "longDescription": "Calcula la media de una lista de notas en la que cada una puede llevar su propio peso: créditos, horas o cualquier otra medida de cuánto cuenta la asignatura. La media simple aparece al lado, de modo que la distancia entre ambas revela de inmediato si son las asignaturas con más peso las que tiran del resultado hacia abajo. No se impone ninguna escala: se admite cualquier nota no negativa, así que valen los sistemas sobre cinco, sobre diez y sobre cien. La calculadora no convierte entre escalas, porque las tablas de equivalencia cambian según el centro y elegir una en silencio equivaldría a presentar la regla de otro como universal.",
    "howToUse": [
      "Escribe una nota por línea.",
      "Añade el peso de la asignatura tras un espacio: créditos u horas.",
      "Si los pesos no importan, deja la nota sola: el peso vale uno por defecto.",
      "Compara la media ponderada con la simple para ver el efecto de las asignaturas más pesadas."
    ],
    "howItWorks": "Media ponderada = Σ(nota × peso) / Σpesos; media simple = Σnotas / número de filas. Un peso omitido vale 1; un peso explícito debe ser positivo. Todas las notas deben usar una sola escala. El resultado suele redondearse a cuatro decimales; los valores positivos menores de 0,0001 o de al menos 10¹² usan notación científica con cuatro cifras significativas. No reproduce las normas de una institución sobre repeticiones o redondeo.",
    "example": "Notas de 5, 4 y 3 con créditos 3, 4 y 2 dan una media ponderada de 4,1111 frente a una media simple de 4.",
    "faq": [
      {
        "q": "¿Qué se usa como peso?",
        "a": "Créditos, unidades de curso u horas: cualquier medida de cuánto aporta la asignatura. Si no existe tal medida, deja el peso fuera."
      },
      {
        "q": "¿Qué escala de notas se admite?",
        "a": "Cualquiera no negativa: sobre cinco, sobre diez, sobre cien o sobre cuatro. El cálculo no convierte entre escalas, así que introdúcelas todas en la misma."
      },
      {
        "q": "¿Por qué se muestra también la media simple?",
        "a": "Para que se vea el efecto de los pesos. Si la ponderada es bastante más baja, las notas peores han caído en las asignaturas con más créditos."
      },
      {
        "q": "¿Qué pasa si un peso es cero?",
        "a": "Esa línea se rechaza: una asignatura con peso cero no puede influir en el resultado, y casi siempre es una errata y no una intención."
      },
      {
        "q": "¿Las notas pueden llevar decimales?",
        "a": "Sí. 4,5 sin espacio después de la coma es una nota decimal. Separa el peso con un espacio o punto y coma: «5 3» o «5; 3». El formato anterior «5, 3», con un espacio tras la coma, también significa nota 5 y peso 3."
      }
    ]
  }
};
