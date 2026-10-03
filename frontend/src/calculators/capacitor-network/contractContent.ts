import type { CalculatorCopy } from '../../lib/platform/types';

type Body = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'> & Partial<Pick<CalculatorCopy, 'seoDescription'>>;

export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Body> = {
  "ru": {
    "longDescription": "Эквивалентная ёмкость одной последовательной или параллельной группы идеальных конденсаторов. Все значения задаются в микрофарадах. Расчёт ёмкости не определяет рабочее напряжение группы: распределение напряжений в серии зависит от зарядов, допусков, утечек и балансирующих элементов.",
    "howToUse": [
      "Выберите последовательное или параллельное соединение.",
      "Введите от 1 до 256 положительных ёмкостей в мкФ, до 16 384 символов.",
      "Используйте десятичную точку: 0.1 означает 0,1 мкФ = 100 нФ. Запятая здесь разделяет элементы списка, поэтому 0,1 не является десятичным числом.",
      "Разделяйте номиналы пробелом, точкой с запятой или новой строкой и сравните итог с крайними значениями."
    ],
    "howItWorks": "Параллельно напряжение общее, а заряды складываются: Q = U·ΣC, поэтому Cэкв = ΣC. Для последовательной группы с одинаковыми по модулю зарядами складываются напряжения Q/C: 1/Cэкв = Σ(1/C). Для двух и более положительных номиналов параллельный итог больше максимума, последовательный меньше минимума; один элемент равен самому себе.",
    "example": "100 мкФ и 220 мкФ дают 320 мкФ параллельно. Последовательно C = 100·220/(100+220) = 68,75 мкФ. Два одинаковых 100 мкФ дают соответственно 200 или 50 мкФ.",
    "faq": [
      {
        "q": "Почему формулы противоположны резисторным?",
        "a": "У конденсаторов параллельно складывается заряд при общей разности потенциалов. Последовательно складываются напряжения при общем модуле заряда. Из Q = C·U следуют сумма C и сумма 1/C."
      },
      {
        "q": "Как вводить нанофарады и десятичные значения?",
        "a": "Переведите в мкФ: 100 нФ = 0.1 мкФ, 1 нФ = 0.001 мкФ. В этом списке нужна точка; запятая служит разделителем номиналов. Суффиксы мкФ и нФ не вводятся."
      },
      {
        "q": "Можно ли складывать допустимые напряжения в серии?",
        "a": "Автоматически нельзя. При одинаковом заряде меньшее C получает большее напряжение, а в реальной схеме влияют утечки и начальные заряды. Допустимое напряжение сборки требует отдельного анализа и данных компонентов."
      },
      {
        "q": "Что с одним конденсатором или смешанной схемой?",
        "a": "Один положительный номинал даёт ту же ёмкость. В смешанной схеме сворачивайте только известные последовательные или параллельные подгруппы; произвольные соединения одним списком не описываются."
      }
    ],
    "disclaimer": "Идеальная линейная ёмкость. Полярность, рабочее напряжение, ESR, утечки и необходимость балансировки не проверяются."
  },
  "en": {
    "longDescription": "Find the equivalent capacitance of one ideal series or parallel group. All values are in microfarads. Capacitance alone does not determine a group's working voltage: series voltage sharing depends on charges, tolerances, leakage and balancing components.",
    "howToUse": [
      "Choose series or parallel connection.",
      "Enter 1 to 256 positive capacitances in µF, within 16 384 characters.",
      "Use a decimal point: 0.1 means 0.1 µF = 100 nF. A comma separates list items here, so 0,1 is not a decimal number.",
      "Separate ratings with spaces, semicolons or newlines and compare the result with the extrema."
    ],
    "howItWorks": "Parallel voltage is common and charges add: Q = U·ΣC, hence Ceq = ΣC. In a series group with equal charge magnitudes, voltages Q/C add: 1/Ceq = Σ(1/C). With at least two positive ratings, parallel capacitance exceeds the maximum and series capacitance is below the minimum; one component equals itself.",
    "example": "100 µF and 220 µF give 320 µF in parallel. In series, C = 100·220/(100+220) = 68.75 µF. Two equal 100 µF capacitors give 200 µF or 50 µF respectively.",
    "faq": [
      {
        "q": "Why are these formulas opposite to resistor formulas?",
        "a": "Parallel capacitors add charge at the same potential difference. Series capacitors add voltages at the same charge magnitude. Q = C·U then gives a sum of C or a sum of 1/C."
      },
      {
        "q": "How do I enter nanofarads and decimal values?",
        "a": "Convert to µF: 100 nF = 0.1 µF and 1 nF = 0.001 µF. This list requires a decimal point; commas separate ratings. Do not enter µF or nF suffixes."
      },
      {
        "q": "Can I add voltage ratings in series?",
        "a": "Not automatically. At equal charge, a smaller capacitance receives a larger voltage; real leakage and initial charge also matter. A pack's working voltage requires a separate analysis and component specifications."
      },
      {
        "q": "What about one capacitor or a mixed network?",
        "a": "A single positive rating gives the same capacitance. In a mixed network, reduce only known series or parallel subgroups. A single list cannot describe arbitrary connections."
      }
    ],
    "disclaimer": "Ideal linear capacitance. Polarity, voltage rating, ESR, leakage and balancing requirements are not checked."
  },
  "uk": {
    "longDescription": "Еквівалентна ємність однієї послідовної чи паралельної групи ідеальних конденсаторів. Усі номінали задаються в мікрофарадах. Ємність не визначає робочу напругу групи: у послідовній схемі розподіл напруг залежить від зарядів, допусків, витоків і балансувальних елементів.",
    "howToUse": [
      "Оберіть послідовне або паралельне з'єднання.",
      "Введіть від 1 до 256 додатних ємностей у мкФ, до 16 384 символів.",
      "Використовуйте десяткову крапку: 0.1 означає 0,1 мкФ = 100 нФ. Кома тут розділяє елементи, тому 0,1 не є десятковим числом.",
      "Розділяйте номінали пробілом, крапкою з комою чи новим рядком і перевірте крайні значення."
    ],
    "howItWorks": "Паралельно напруга спільна, заряди додаються: Q = U·ΣC, отже Cекв = ΣC. У послідовній групі за однакових модулів заряду додаються напруги Q/C: 1/Cекв = Σ(1/C). Для двох і більше додатних номіналів паралельний підсумок більший за максимум, послідовний менший за мінімум; один елемент дорівнює самому собі.",
    "example": "100 мкФ і 220 мкФ дають 320 мкФ паралельно. Послідовно C = 100·220/(100+220) = 68,75 мкФ. Два однакові 100 мкФ дають відповідно 200 або 50 мкФ.",
    "faq": [
      {
        "q": "Чому формули протилежні резисторним?",
        "a": "Паралельно конденсатори додають заряд за спільної різниці потенціалів. Послідовно додаються напруги за спільного модуля заряду. Із Q = C·U випливають сума C та сума 1/C."
      },
      {
        "q": "Як вводити нанофаради та десяткові значення?",
        "a": "Переведіть у мкФ: 100 нФ = 0.1 мкФ, 1 нФ = 0.001 мкФ. У цьому списку потрібна крапка; кома розділяє номінали. Суфікси мкФ і нФ не вводьте."
      },
      {
        "q": "Чи додаються допустимі напруги послідовно?",
        "a": "Не автоматично. За однакового заряду менше C отримує більшу напругу; також впливають реальні витоки та початкові заряди. Робоча напруга збірки потребує окремого аналізу й даних компонентів."
      },
      {
        "q": "Що з одним конденсатором або змішаною схемою?",
        "a": "Один додатний номінал дає ту саму ємність. У змішаній схемі згортайте лише відомі послідовні чи паралельні підгрупи. Довільні з'єднання одним списком не описуються."
      }
    ],
    "disclaimer": "Ідеальна лінійна ємність. Полярність, робоча напруга, ESR, витоки та потреба балансування не перевіряються."
  },
  "de": {
    "longDescription": "Berechnet die Ersatzkapazität einer idealen Reihen- oder Parallelgruppe. Alle Werte stehen in Mikrofarad. Die Kapazität allein bestimmt nicht die Betriebsspannung der Gruppe: Die Spannungsaufteilung in Reihe hängt von Ladungen, Toleranzen, Leckströmen und Ausgleichselementen ab.",
    "howToUse": [
      "Wähle Reihen- oder Parallelschaltung.",
      "Gib 1 bis 256 positive Kapazitäten in µF mit höchstens 16 384 Zeichen ein.",
      "Verwende einen Dezimalpunkt: 0.1 bedeutet 0,1 µF = 100 nF. Ein Komma trennt hier Listenelemente; 0,1 ist deshalb keine Dezimalzahl.",
      "Trenne Werte durch Leerzeichen, Semikolon oder Zeilenumbruch und vergleiche die Extremwerte."
    ],
    "howItWorks": "Parallel ist die Spannung gleich und die Ladungen addieren sich: Q = U·ΣC, also Cers = ΣC. In einer Reihengruppe mit gleichen Ladungsbeträgen addieren sich Spannungen Q/C: 1/Cers = Σ(1/C). Bei mindestens zwei positiven Werten ist die Parallelkapazität größer als das Maximum, die Reihenkapazität kleiner als das Minimum; ein Bauteil entspricht sich selbst.",
    "example": "100 µF und 220 µF ergeben parallel 320 µF. In Reihe gilt C = 100·220/(100+220) = 68,75 µF. Zwei gleiche 100-µF-Kondensatoren ergeben entsprechend 200 oder 50 µF.",
    "faq": [
      {
        "q": "Warum sind die Formeln gegenüber Widerständen vertauscht?",
        "a": "Parallel addieren Kondensatoren Ladung bei gleicher Potentialdifferenz. In Reihe addieren sich Spannungen bei gleichem Ladungsbetrag. Aus Q = C·U folgen die Summe von C beziehungsweise von 1/C."
      },
      {
        "q": "Wie gebe ich Nanofarad und Dezimalwerte ein?",
        "a": "Rechne in µF um: 100 nF = 0.1 µF und 1 nF = 0.001 µF. Diese Liste verlangt einen Dezimalpunkt; Kommas trennen Werte. Keine Suffixe µF oder nF eingeben."
      },
      {
        "q": "Darf ich zulässige Spannungen in Reihe addieren?",
        "a": "Nicht automatisch. Bei gleicher Ladung erhält die kleinere Kapazität die größere Spannung; reale Leckströme und Anfangsladungen wirken ebenfalls mit. Die Betriebsspannung erfordert eine getrennte Analyse und Bauteildaten."
      },
      {
        "q": "Was gilt für einen Kondensator oder eine gemischte Schaltung?",
        "a": "Ein positiver Einzelwert ergibt dieselbe Kapazität. Bei gemischten Schaltungen lassen sich bekannte Reihen- oder Parallelgruppen schrittweise zusammenfassen. Eine Liste beschreibt keine beliebigen Verbindungen."
      }
    ],
    "disclaimer": "Ideale lineare Kapazität. Polarität, Spannungsfestigkeit, ESR, Leckströme und notwendiger Spannungsausgleich werden nicht geprüft."
  },
  "es": {
    "longDescription": "Calcula la capacidad equivalente de un grupo ideal en serie o paralelo. Todos los valores están en microfaradios. La capacidad no determina la tensión de trabajo del conjunto: el reparto en serie depende de cargas, tolerancias, fugas y elementos de equilibrado.",
    "howToUse": [
      "Selecciona conexión en serie o paralelo.",
      "Introduce de 1 a 256 capacidades positivas en µF, con un máximo de 16 384 caracteres.",
      "Usa punto decimal: 0.1 significa 0,1 µF = 100 nF. Aquí la coma separa elementos, así que 0,1 no es un número decimal.",
      "Separa valores con espacios, punto y coma o saltos de línea y compara los extremos."
    ],
    "howItWorks": "En paralelo la tensión es común y se suman cargas: Q = U·ΣC, por tanto Ceq = ΣC. En un grupo en serie con iguales módulos de carga se suman tensiones Q/C: 1/Ceq = Σ(1/C). Para al menos dos valores positivos, el paralelo supera el máximo y la serie queda por debajo del mínimo; un componente equivale a sí mismo.",
    "example": "100 µF y 220 µF dan 320 µF en paralelo. En serie, C = 100·220/(100+220) = 68,75 µF. Dos condensadores iguales de 100 µF dan respectivamente 200 o 50 µF.",
    "faq": [
      {
        "q": "¿Por qué se invierten las fórmulas respecto a resistencias?",
        "a": "En paralelo los condensadores suman carga con la misma diferencia de potencial. En serie suman tensiones con el mismo módulo de carga. De Q = C·U se obtiene la suma de C o de 1/C."
      },
      {
        "q": "¿Cómo introducir nanofaradios y decimales?",
        "a": "Convierte a µF: 100 nF = 0.1 µF y 1 nF = 0.001 µF. Esta lista exige punto decimal; las comas separan valores. No añadas sufijos µF o nF."
      },
      {
        "q": "¿Se pueden sumar las tensiones admisibles en serie?",
        "a": "No automáticamente. Con igual carga, la menor capacidad recibe más tensión; las fugas y cargas iniciales reales también influyen. La tensión de trabajo requiere otro análisis y las especificaciones de los componentes."
      },
      {
        "q": "¿Qué pasa con un condensador o un circuito mixto?",
        "a": "Un único valor positivo da la misma capacidad. En un circuito mixto reduce solo los subgrupos conocidos en serie o paralelo. Una lista no describe conexiones arbitrarias."
      }
    ],
    "disclaimer": "Capacidad lineal ideal. No se comprueban polaridad, tensión admisible, ESR, fugas ni requisitos de equilibrado."
  }
};
