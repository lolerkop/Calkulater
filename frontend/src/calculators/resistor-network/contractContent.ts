import type { CalculatorCopy } from '../../lib/platform/types';

type Body = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'> & Partial<Pick<CalculatorCopy, 'seoDescription'>>;

export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Body> = {
  "ru": {
    "longDescription": "Эквивалентное сопротивление одной последовательной цепочки или одной параллельной группы идеальных резисторов. Введите все номиналы в омах, не смешивая Ом и кОм. Результат описывает отношение напряжения к току для этой группы; он не рассчитывает мощность каждого резистора, нагрев или произвольную мостовую схему.",
    "howToUse": [
      "Выберите последовательное или параллельное соединение.",
      "Введите от 2 до 256 положительных номиналов в Ом через пробел или точку с запятой; длина списка до 16 384 символов.",
      "Десятичная точка или запятая внутри числа допустимы: 4,7 означает один номинал. Для двух номиналов пишите 4; 7.",
      "Сверьте итог с минимумом и максимумом: последовательный больше максимума, параллельный меньше минимума."
    ],
    "howItWorks": "Последовательно ток одинаков: U = I·ΣR, значит Rэкв = ΣR. Параллельно напряжение одинаково: I = U·Σ(1/R), значит Rэкв = 1/Σ(1/R). Для двух одинаковых R параллельный итог R/2, последовательный 2R. Положительные входы исключают короткое замыкание нулевого сопротивления из этой модели.",
    "example": "470 Ом и 470 Ом дают 940 Ом последовательно или 235 Ом параллельно. Для 100, 220 и 330 Ом параллельно: 1/R = 1/100 + 1/220 + 1/330 = 29/1650, поэтому R = 1650/29 ≈ 56,897 Ом.",
    "faq": [
      {
        "q": "Почему последовательный итог больше, а параллельный меньше?",
        "a": "Сумма двух и более положительных сопротивлений больше каждого. В параллели к проводимости одного резистора добавляются положительные проводимости остальных, поэтому обратная величина становится меньше минимального сопротивления."
      },
      {
        "q": "Можно ли указать 4,7 кОм?",
        "a": "Суффиксы единиц не распознаются. Введите 4 700 Ом как 4700. Число 4,7 означает 4,7 Ом; разделять несколько чисел безопаснее пробелом или точкой с запятой."
      },
      {
        "q": "Можно ли свести любую схему к этим двум операциям?",
        "a": "Нет. Можно поэтапно сворачивать действительно последовательные и параллельные группы. Мостовая схема обычно требует законов Кирхгофа или другого анализа; общий список номиналов не задаёт её соединения."
      },
      {
        "q": "Складывается ли допустимая мощность резисторов?",
        "a": "Этот расчёт мощности не определяет. Распределение зависит от сопротивлений и подключения, а допустимая мощность — от номиналов и условий охлаждения. Два резистора по 0,25 Вт не всегда безопасно заменить одним эквивалентом на 0,5 Вт."
      },
      {
        "q": "Что делать с нулём, одним резистором и огромным списком?",
        "a": "Для этой задачи нужны минимум два строго положительных номинала. Один резистор равен самому себе, но не образует рассчитываемую группу. Лимиты 256 номиналов и 16 384 символов — ограничения ввода страницы, а не физические законы."
      }
    ],
    "disclaimer": "Идеальные постоянные сопротивления. Допуски, температурные зависимости, мощность и электрическая безопасность здесь не проверяются."
  },
  "en": {
    "longDescription": "Find the equivalent resistance of one series chain or one parallel group of ideal resistors. Enter every rating in ohms without mixing Ω and kΩ. The result describes the voltage-to-current ratio of that group; it does not calculate each resistor's dissipation, heating or an arbitrary bridge circuit.",
    "howToUse": [
      "Select series or parallel connection.",
      "Enter 2 to 256 positive ratings in Ω, separated by spaces or semicolons; the list is limited to 16 384 characters.",
      "A decimal point or comma inside a number is accepted: 4,7 is one rating. For two ratings use 4; 7.",
      "Compare with the extrema: series resistance exceeds the maximum and parallel resistance is below the minimum."
    ],
    "howItWorks": "Series current is common: U = I·ΣR, hence Req = ΣR. Parallel voltage is common: I = U·Σ(1/R), hence Req = 1/Σ(1/R). Two equal resistors R give R/2 in parallel and 2R in series. Positive inputs exclude a zero-resistance short from this model.",
    "example": "470 Ω and 470 Ω give 940 Ω in series or 235 Ω in parallel. For 100, 220 and 330 Ω in parallel, 1/R = 1/100 + 1/220 + 1/330 = 29/1650, so R = 1650/29 ≈ 56.897 Ω.",
    "faq": [
      {
        "q": "Why is series resistance larger and parallel resistance smaller?",
        "a": "The sum of at least two positive resistances exceeds each one. In parallel, other positive conductances add to any one branch, so the reciprocal is below the smallest resistance."
      },
      {
        "q": "Can I type 4.7 kΩ?",
        "a": "Unit suffixes are not parsed. Enter 4700 Ω as 4700. A value of 4.7 means 4.7 Ω; spaces or semicolons clearly separate multiple ratings."
      },
      {
        "q": "Can every circuit be reduced with these two operations?",
        "a": "No. Actual series and parallel subgroups can be reduced step by step. A bridge generally needs Kirchhoff's laws or another circuit analysis; a list of ratings does not specify its connections."
      },
      {
        "q": "Do resistor power ratings add?",
        "a": "This tool does not calculate dissipation. Distribution depends on resistances and connections, while permissible dissipation depends on component ratings and cooling. Two 0.25 W resistors do not always form a safe 0.5 W equivalent."
      },
      {
        "q": "What about zero, one resistor or an enormous list?",
        "a": "This task requires at least two strictly positive ratings. A single resistor equals itself but is outside the group calculation. The 256-rating and 16 384-character limits are input limits, not physical laws."
      }
    ],
    "disclaimer": "Ideal constant resistances. Tolerances, temperature dependence, dissipation and electrical safety are not checked."
  },
  "uk": {
    "longDescription": "Еквівалентний опір одного послідовного ланцюжка або однієї паралельної групи ідеальних резисторів. Усі номінали вводяться в омах без змішування Ом і кОм. Підсумок описує відношення напруги до струму групи; потужність кожного резистора, нагрівання та довільна мостова схема не обчислюються.",
    "howToUse": [
      "Оберіть послідовне чи паралельне з'єднання.",
      "Введіть від 2 до 256 додатних номіналів в Ом через пробіл або крапку з комою; до 16 384 символів.",
      "Десяткова крапка або кома всередині числа допустима: 4,7 — один номінал. Для двох пишіть 4; 7.",
      "Зіставте результат із межами: послідовний більший за максимум, паралельний менший за мінімум."
    ],
    "howItWorks": "Послідовно струм спільний: U = I·ΣR, отже Rекв = ΣR. Паралельно напруга спільна: I = U·Σ(1/R), отже Rекв = 1/Σ(1/R). Два однакові R дають R/2 паралельно та 2R послідовно. Додатні номінали виключають нульовий опір короткого замикання з цієї моделі.",
    "example": "470 Ом і 470 Ом дають 940 Ом послідовно або 235 Ом паралельно. Для 100, 220 і 330 Ом паралельно: 1/R = 29/1650, тому R = 1650/29 ≈ 56,897 Ом.",
    "faq": [
      {
        "q": "Чому послідовний опір більший, а паралельний менший?",
        "a": "Сума щонайменше двох додатних опорів більша за кожен. Паралельно до провідності однієї гілки додаються інші додатні провідності, тому обернена величина менша за найменший опір."
      },
      {
        "q": "Чи можна вказати 4,7 кОм?",
        "a": "Суфікси одиниць не читаються. Введіть 4 700 Ом як 4700. Число 4,7 означає 4,7 Ом; пробіл або крапка з комою однозначно розділяють кілька номіналів."
      },
      {
        "q": "Чи будь-яка схема зводиться до цих двох операцій?",
        "a": "Ні. Можна послідовно згортати справді послідовні та паралельні групи. Мостова схема зазвичай потребує законів Кірхгофа чи іншого аналізу; список номіналів не задає її з'єднань."
      },
      {
        "q": "Чи додаються допустимі потужності резисторів?",
        "a": "Цей калькулятор не визначає розсіювання. Розподіл залежить від опорів і з'єднань, допустима потужність — від номіналів і охолодження. Два резистори по 0,25 Вт не завжди утворюють безпечний еквівалент на 0,5 Вт."
      },
      {
        "q": "Що з нулем, одним резистором і дуже довгим списком?",
        "a": "Потрібні щонайменше два строго додатні номінали. Один резистор дорівнює самому собі, але не є цією групою. Межі 256 номіналів і 16 384 символів — обмеження вводу, не фізичні закони."
      }
    ],
    "disclaimer": "Ідеальні сталі опори. Допуски, температурні залежності, розсіювання та електробезпека не перевіряються."
  },
  "de": {
    "longDescription": "Berechnet den Ersatzwiderstand einer Reihenkette oder einer parallelen Gruppe idealer Widerstände. Alle Nennwerte stehen in Ohm; Ω und kΩ dürfen nicht gemischt werden. Das Ergebnis beschreibt das Verhältnis von Spannung zu Strom der Gruppe, nicht die Verlustleistung einzelner Bauteile, ihre Erwärmung oder eine beliebige Brückenschaltung.",
    "howToUse": [
      "Wähle Reihen- oder Parallelschaltung.",
      "Gib 2 bis 256 positive Werte in Ω mit Leerzeichen oder Semikolon ein; höchstens 16 384 Zeichen.",
      "Dezimalpunkt oder Dezimalkomma innerhalb einer Zahl sind erlaubt: 4,7 ist ein Wert. Für zwei Werte schreibe 4; 7.",
      "Vergleiche die Extremwerte: In Reihe liegt der Ersatzwiderstand über dem Maximum, parallel unter dem Minimum."
    ],
    "howItWorks": "In Reihe ist der Strom gleich: U = I·ΣR, also Rers = ΣR. Parallel ist die Spannung gleich: I = U·Σ(1/R), also Rers = 1/Σ(1/R). Zwei gleiche R ergeben parallel R/2 und in Reihe 2R. Positive Eingaben schließen einen Kurzschluss mit null Ohm aus dieser Modellrechnung aus.",
    "example": "470 Ω und 470 Ω ergeben in Reihe 940 Ω oder parallel 235 Ω. Für parallel geschaltete 100, 220 und 330 Ω gilt 1/R = 29/1650, also R = 1650/29 ≈ 56,897 Ω.",
    "faq": [
      {
        "q": "Warum wird der Widerstand in Reihe größer und parallel kleiner?",
        "a": "Die Summe von mindestens zwei positiven Widerständen übersteigt jeden Einzelwert. Parallel addieren sich weitere positive Leitwerte, sodass der Kehrwert kleiner als der kleinste Widerstand ist."
      },
      {
        "q": "Darf ich 4,7 kΩ eingeben?",
        "a": "Einheitensuffixe werden nicht ausgewertet. Gib 4 700 Ω als 4700 ein. 4,7 bedeutet 4,7 Ω; Leerzeichen oder Semikolon trennen mehrere Werte eindeutig."
      },
      {
        "q": "Lässt sich jede Schaltung so vereinfachen?",
        "a": "Nein. Tatsächliche Reihen- und Parallelgruppen lassen sich schrittweise zusammenfassen. Eine Brücke benötigt gewöhnlich Kirchhoff-Gleichungen oder eine andere Analyse; die Werteliste beschreibt ihre Verbindungen nicht."
      },
      {
        "q": "Addieren sich die zulässigen Verlustleistungen?",
        "a": "Dieser Rechner berechnet keine Verlustleistung. Ihre Verteilung hängt von Widerständen und Verbindungen ab; zulässige Leistung auch von Bauteildaten und Kühlung. Zwei 0,25-W-Widerstände bilden nicht immer einen sicheren 0,5-W-Ersatz."
      },
      {
        "q": "Was gilt für null, einen Widerstand oder sehr lange Listen?",
        "a": "Die Aufgabe erfordert mindestens zwei strikt positive Werte. Ein einzelner Widerstand entspricht sich selbst, ist aber keine solche Gruppe. 256 Werte und 16 384 Zeichen sind Eingabegrenzen, keine physikalischen Gesetze."
      }
    ],
    "disclaimer": "Ideale konstante Widerstände. Toleranzen, Temperaturabhängigkeit, Verlustleistung und elektrische Sicherheit werden nicht geprüft."
  },
  "es": {
    "longDescription": "Calcula la resistencia equivalente de una cadena en serie o un grupo en paralelo de resistencias ideales. Introduce todos los valores en ohmios sin mezclar Ω y kΩ. El resultado describe la relación tensión/corriente del grupo, no la disipación individual, el calentamiento ni un puente arbitrario.",
    "howToUse": [
      "Selecciona conexión en serie o en paralelo.",
      "Introduce entre 2 y 256 valores positivos en Ω separados por espacios o punto y coma; máximo 16 384 caracteres.",
      "Se admite punto o coma decimal dentro de un número: 4,7 es un valor. Para dos valores escribe 4; 7.",
      "Compara con los extremos: en serie supera el máximo y en paralelo queda por debajo del mínimo."
    ],
    "howItWorks": "En serie la corriente es común: U = I·ΣR, por tanto Req = ΣR. En paralelo la tensión es común: I = U·Σ(1/R), por tanto Req = 1/Σ(1/R). Dos resistencias iguales R dan R/2 en paralelo y 2R en serie. Las entradas positivas excluyen un cortocircuito de resistencia cero de este modelo.",
    "example": "470 Ω y 470 Ω dan 940 Ω en serie o 235 Ω en paralelo. Para 100, 220 y 330 Ω en paralelo, 1/R = 29/1650; así R = 1650/29 ≈ 56,897 Ω.",
    "faq": [
      {
        "q": "¿Por qué la resistencia crece en serie y baja en paralelo?",
        "a": "La suma de al menos dos resistencias positivas supera cada valor. En paralelo se añaden conductancias positivas, por lo que su inverso queda por debajo de la resistencia mínima."
      },
      {
        "q": "¿Puedo escribir 4,7 kΩ?",
        "a": "No se interpretan sufijos de unidad. Introduce 4 700 Ω como 4700. El valor 4,7 significa 4,7 Ω; espacios o punto y coma separan claramente varios valores."
      },
      {
        "q": "¿Se puede reducir cualquier circuito con estas dos operaciones?",
        "a": "No. Los grupos realmente en serie o paralelo se pueden reducir por etapas. Un puente suele requerir leyes de Kirchhoff u otro análisis; la lista de valores no especifica sus conexiones."
      },
      {
        "q": "¿Se suman las potencias admisibles?",
        "a": "Este calculador no calcula disipación. Su reparto depende de resistencias y conexiones, y el límite depende de los componentes y su refrigeración. Dos resistencias de 0,25 W no siempre forman un equivalente seguro de 0,5 W."
      },
      {
        "q": "¿Qué ocurre con cero, una resistencia o una lista enorme?",
        "a": "Se requieren al menos dos valores estrictamente positivos. Una resistencia equivale a sí misma, pero queda fuera de este grupo. Los límites de 256 valores y 16 384 caracteres son límites de entrada, no leyes físicas."
      }
    ],
    "disclaimer": "Resistencias ideales constantes. No se comprueban tolerancias, dependencia térmica, disipación ni seguridad eléctrica."
  }
};
