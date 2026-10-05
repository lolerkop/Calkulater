import type { CalculatorCopy } from '../../lib/platform/types';

// Existing native content individually reviewed; scoped model and input corrections.
export const automotiveWave10ContractContent = {
  "ru": {
    "longDescription": "Рабочий объём поршневого двигателя выводится из диаметра цилиндра, хода поршня и числа одинаковых цилиндров. Показываются объём одного цилиндра, суммарный объём в см³ и литрах, а также отношение хода к диаметру. Последнее характеризует геометрию, но не определяет само по себе крутящий момент или обороты максимальной мощности. Расчёт по введённым размерам не заменяет заводской или документальный объём.",
    "howItWorks": "V = π/4 · D² · S · n, миллиметры кубические делятся на 1000. D и S заданы в мм, n — целое число от 1 до максимального безопасного целого. Для одного цилиндра n = 1; 1000 см³ = 1 л. Нулевые размеры, дробное число цилиндров и непредставимые выводимые объёмы отклоняются.",
    "howToUse": [
      "Диаметр и ход — в миллиметрах, как их печатают в каталогах запчастей.",
      "После расточки блока диаметр меняется, а ход остаётся: подставьте фактический размер гильзы.",
      "Отношение хода к диаметру больше единицы — длинноходный мотор, меньше — короткоходный.",
      "Считается геометрический рабочий объём. Полный объём камеры сгорания больше на объём камеры сжатия."
    ],
    "example": "Четыре цилиндра 82×86 мм дают 1816,67 см³ — те самые «1,8 литра».",
    "faq": [
      {
        "q": "Почему в паспорте другое число?",
        "a": "В названии модели объём может быть округлён. Геометрический расчёт по диаметру и ходу помогает сравнить размеры цилиндров, но может отличаться от значения в документах. Для налогов, регистрации или таможенного оформления нужны соответствующие документы и применимые правила; калькулятор не устанавливает юридически действующий объём."
      },
      {
        "q": "Что даёт расточка блока?",
        "a": "Каждый лишний миллиметр диаметра прибавляет объём квадратично: у мотора 82 мм расточка до 83 даёт около 45 см³ на четыре цилиндра. Ход поршня при этом не меняется — он задан коленвалом."
      },
      {
        "q": "Чем длинноходный мотор отличается?",
        "a": "S/D больше 1 означает длинноходную геометрию, меньше 1 — короткоходную. Фактическая характеристика зависит и от газообмена, фаз, наддува и допустимых оборотов; по одному отношению нельзя вывести тягу с низких оборотов."
      },
      {
        "q": "Годится ли расчёт для мотоцикла?",
        "a": "Да, формула не зависит от типа техники. Для одноцилиндрового мотора поставьте единицу — расчёт покажет один и тот же объём в обеих строках."
      }
    ]
  },
  "en": {
    "longDescription": "A piston engine’s swept displacement follows from bore, stroke and the number of identical cylinders. The tool shows one cylinder’s volume, total cm³ and litres, and the stroke-to-bore ratio. That ratio describes geometry, not by itself torque or peak-power speed. A calculation from entered dimensions does not replace the manufacturer’s or documented displacement.",
    "howItWorks": "V = π/4 · D² · S · n, with cubic millimetres divided by 1000. D and S are in mm, and n is a whole number from 1 to the largest safe integer. For one cylinder use n = 1; 1000 cm³ = 1 L. Zero dimensions, fractional cylinder counts and unrepresentable output volumes are rejected.",
    "howToUse": [
      "Bore and stroke in millimetres, as parts catalogues print them.",
      "Boring the block changes the bore but not the stroke: enter the actual liner size.",
      "A stroke-to-bore ratio above one means a long-stroke engine, below one a short-stroke.",
      "This is the swept volume. The total combustion chamber volume is larger by the clearance volume."
    ],
    "example": "Four cylinders of 82×86 mm give 1816.67 cm³ — the familiar \"1.8 litres\".",
    "faq": [
      {
        "q": "Why do the papers say something else?",
        "a": "A model name may use rounded displacement. A geometric calculation from bore and stroke helps compare cylinder dimensions and may differ from the documented value. Tax, registration or customs use requires the relevant documents and applicable rules; this calculator does not establish legally accepted displacement."
      },
      {
        "q": "What does boring the block do?",
        "a": "Every extra millimetre of bore adds volume quadratically: on an 82 mm engine, boring to 83 adds about 45 cm³ across four cylinders. The stroke stays put — it is set by the crankshaft."
      },
      {
        "q": "How does a long-stroke engine differ?",
        "a": "S/D above 1 describes a long-stroke geometry and below 1 a short-stroke one. The actual curve also depends on breathing, valve timing, boost and permitted engine speed; the ratio alone cannot establish low-speed torque."
      },
      {
        "q": "Does this work for a motorcycle?",
        "a": "Yes, the formula does not care about the vehicle. For a single-cylinder engine enter one and the calculation shows the same volume in both rows."
      }
    ]
  },
  "uk": {
    "longDescription": "Робочий об’єм поршневого двигуна визначається діаметром циліндра, ходом поршня та кількістю однакових циліндрів. Показуються об’єм одного циліндра, сума в см³ і літрах та відношення ходу до діаметра. Воно характеризує геометрію, але саме по собі не визначає крутний момент чи оберти максимальної потужності. Розрахунок за введеними розмірами не замінює заводський або документальний об’єм.",
    "howItWorks": "Об’єм рахується як V = π/4 · D² · S · n, де D — діаметр циліндра, S — хід поршня, n — кількість циліндрів. Кубічні міліметри діляться на 1000, щоб отримати кубічні сантиметри. D і S задані в мм, n — ціле число від 1 до найбільшого безпечного цілого. Для одного циліндра n = 1; 1000 см³ = 1 л. Нульові розміри, дробова кількість циліндрів і непредставимі вихідні об’єми відхиляються.",
    "howToUse": [
      "Введіть діаметр циліндра в міліметрах.",
      "Введіть хід поршня.",
      "Введіть кількість циліндрів."
    ],
    "example": "Чотири циліндри 82 × 86 мм дають 1816,67 см³ — ті самі «1,8 літра».",
    "faq": [
      {
        "q": "Чому в назві двигуна округлене число?",
        "a": "Бо виробники округлюють до десятих літра. Фактичні 1816 см³ стають «1,8», а 1998 см³ — «двійкою»."
      },
      {
        "q": "Чим відрізняється короткоходовий двигун від довгоходового?",
        "a": "S/D понад 1 означає довгоходову геометрію, менше 1 — короткоходову. Реальна характеристика також залежить від газообміну, фаз, наддуву й допустимих обертів; одне відношення не визначає тягу на низьких обертах."
      },
      {
        "q": "Чи впливає об’єм на потужність напряму?",
        "a": "Не однозначно. Наддув і високі оберти дозволяють малому об’єму видавати потужність, порівнянну з великим атмосферним. Об’єм визначає радше характер, ніж максимум."
      },
      {
        "q": "Навіщо знати точний об’єм?",
        "a": "Щоб перевірити геометричний розрахунок або порівняти зміни діаметра й ходу. Для податків, реєстрації чи митного оформлення потрібні відповідні документи та правила; калькулятор не встановлює юридично чинний об’єм."
      }
    ]
  },
  "de": {
    "longDescription": "Der Hubraum eines Kolbenmotors ergibt sich aus Bohrung, Hub und Anzahl gleicher Zylinder. Angezeigt werden das Volumen eines Zylinders, die Summe in cm³ und Litern sowie das Verhältnis von Hub zu Bohrung. Dieses beschreibt die Geometrie, bestimmt aber allein weder Drehmoment noch Drehzahl der Höchstleistung. Die Rechnung ersetzt keine Hersteller- oder Dokumentenangabe.",
    "howItWorks": "V = π/4 · D² · S · n, mit Kubikmillimetern geteilt durch 1000. D und S stehen in mm, n ist eine ganze Zahl ab 1 bis zur größten sicheren Ganzzahl. Für einen Zylinder gilt n = 1; 1000 cm³ = 1 L. Nullmaße, gebrochene Zylinderzahlen und nicht darstellbare Ausgaben werden abgewiesen.",
    "howToUse": [
      "Bohrung und Hub in Millimetern, so wie Teilekataloge sie ausweisen.",
      "Aufbohren ändert die Bohrung, nicht den Hub: trage das tatsächliche Laufbuchsenmaß ein.",
      "Ein Verhältnis von Hub zu Bohrung über eins bedeutet einen Langhuber, unter eins einen Kurzhuber.",
      "Das ist der Hubraum. Das gesamte Brennraumvolumen ist um den Verdichtungsraum größer."
    ],
    "example": "Vier Zylinder mit 82×86 mm ergeben 1816,67 cm³ — die vertrauten „1,8 Liter“.",
    "faq": [
      {
        "q": "Warum steht im Fahrzeugschein etwas anderes?",
        "a": "Die Modellbezeichnung kann einen gerundeten Hubraum nennen. Die geometrische Rechnung aus Bohrung und Hub hilft beim Vergleich von Zylindermaßen und kann vom dokumentierten Wert abweichen. Für Steuer, Zulassung oder Zoll sind die entsprechenden Dokumente und geltenden Regeln erforderlich; der Rechner stellt keinen rechtlich maßgeblichen Hubraum fest."
      },
      {
        "q": "Was bewirkt das Aufbohren des Blocks?",
        "a": "Jeder zusätzliche Millimeter Bohrung bringt quadratisch Volumen: bei einem 82-mm-Motor bringt das Aufbohren auf 83 rund 45 cm³ über vier Zylinder. Der Hub bleibt, wo er ist — ihn setzt die Kurbelwelle."
      },
      {
        "q": "Wie unterscheidet sich ein Langhuber?",
        "a": "S/D über 1 bedeutet langhubige, unter 1 kurzhubige Geometrie. Die tatsächliche Kennlinie hängt auch von Gaswechsel, Steuerzeiten, Aufladung und zulässiger Drehzahl ab; das Verhältnis allein bestimmt keine Zugkraft bei niedrigen Drehzahlen."
      },
      {
        "q": "Funktioniert das auch für ein Motorrad?",
        "a": "Ja, die Formel kümmert sich nicht um das Fahrzeug. Bei einem Einzylinder trägst du eins ein, und die Rechnung zeigt dasselbe Volumen in beiden Zeilen."
      }
    ]
  },
  "es": {
    "longDescription": "La cilindrada de un motor de pistones se obtiene del diámetro, la carrera y el número de cilindros iguales. Se muestran el volumen de un cilindro, el total en cm³ y litros y la relación carrera-diámetro. Esta describe la geometría, pero no determina por sí sola el par ni el régimen de potencia máxima. El cálculo no sustituye a la cilindrada declarada por el fabricante o la documentación.",
    "howItWorks": "V = π/4 · D² · S · n, con los milímetros cúbicos divididos entre 1000. D y S están en mm y n es un entero desde 1 hasta el mayor entero seguro. Para un cilindro usa n = 1; 1000 cm³ = 1 L. Se rechazan dimensiones cero, cantidades fraccionarias de cilindros y volúmenes no representables.",
    "howToUse": [
      "Diámetro y carrera en milímetros, tal como los imprimen los catálogos de recambios.",
      "Rectificar el bloque cambia el diámetro pero no la carrera: introduce el tamaño real de la camisa.",
      "Una relación carrera-diámetro mayor que uno indica un motor de carrera larga y menor que uno, de carrera corta.",
      "Esta es la cilindrada. El volumen total de la cámara de combustión es mayor por el volumen muerto."
    ],
    "example": "Cuatro cilindros de 82×86 mm dan 1816,67 cm³: los conocidos «1,8 litros».",
    "faq": [
      {
        "q": "¿Por qué la documentación dice otra cosa?",
        "a": "El nombre del modelo puede usar una cilindrada redondeada. El cálculo geométrico a partir del diámetro y la carrera sirve para comparar las dimensiones y puede diferir del valor documentado. Para impuestos, matriculación o aduana hacen falta los documentos y las normas aplicables; la calculadora no establece una cilindrada con validez legal."
      },
      {
        "q": "¿Qué consigue rectificar el bloque?",
        "a": "Cada milímetro extra de diámetro añade volumen de forma cuadrática: en un motor de 82 mm, rectificar a 83 añade unos 45 cm³ entre los cuatro cilindros. La carrera no cambia: la fija el cigüeñal."
      },
      {
        "q": "¿En qué se diferencia un motor de carrera larga?",
        "a": "S/D mayor que 1 indica carrera larga y menor que 1 carrera corta. La curva real también depende del intercambio de gases, la distribución, la sobrealimentación y el régimen permitido; la relación sola no establece el par a bajas vueltas."
      },
      {
        "q": "¿Vale para una motocicleta?",
        "a": "Sí, a la fórmula le da igual el vehículo. Para un motor monocilíndrico introduce uno y el cálculo mostrará el mismo volumen en ambas filas."
      }
    ]
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', Partial<CalculatorCopy>>;
