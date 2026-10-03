import type { CalculatorCopy } from '../../lib/platform/types';

// Owned native explanations reviewed against this calculator’s model.
// Human editorial review is still pending; this file makes no publication claim.
export const massEnergyContractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq'>> = {
  "ru": {
    "longDescription": "E₀=mc² — энергия покоя заданной массы. Введите граммы, чтобы сравнить одну и ту же энергию в джоулях, киловатт-часах и тоннах тротилового эквивалента. Эти единицы объясняют масштаб; они не сообщают, сколько электричества можно получить от топлива. Для реакции нужен дефект массы Δm, а для электростанции ещё и эффективность преобразования.",
    "howToUse": [
      "Масса в поле — в граммах:1 кг соответствует 1000. Строка «В миллионах киловатт-часов» лишь меняет масштаб числа; она не задаёт потребление города или число обеспеченных квартир."
    ],
    "howItWorks": "E₀=(m₍г₎/1000)c²; c=299792458 м/с точно.1 кВт·ч=3,6·10⁶ Дж;1 т тротилового эквивалента=4,184·10⁹ Дж по соглашению.",
    "example": "Один грамм вещества содержит 8,988·10¹³ джоулей — около 25 миллионов киловатт-часов.",
    "faq": [
      {
        "q": "Значит ли это, что грамм вещества можно сжечь и получить столько энергии?",
        "a": "Нет. Здесь вычисляется энергия покоя введённой массы. Выделяемую в конкретной реакции энергию находят по уменьшению полной массы системы ΔE=Δmc²; доступная электрическая энергия зависит также от процесса и его КПД. Состав топлива и КПД этот инструмент не запрашивает."
      },
      {
        "q": "Почему ответ показан степенью десяти?",
        "a": "Потому что 89 875 517 873 681,8 джоуля не читается. Показательная запись оставляет значащие цифры и порядок, а порядок здесь и есть главная новость."
      },
      {
        "q": "Откуда берутся тонны тротила?",
        "a": "Одна тонна тротилового эквивалента по договорённости равна 4,184 гигаджоуля. Это не свойство конкретной взрывчатки, а единица сравнения, принятая ровно для того, чтобы такие числа можно было представить."
      },
      {
        "q": "Работает ли формула для движущегося тела?",
        "a": "Для движущегося тела к энергии покоя добавляется кинетическая, и полная энергия считается через релятивистский множитель. Здесь считается именно энергия покоя — та, что заключена в самой массе."
      },
      {
        "q": "Как читать малую массу и большое число энергии?",
        "a": "Граммы и килограммы отличаются в 1000 раз. Для 1 г получается≈8,988·10¹³ Дж,≈24,965 млн кВт·ч и≈21480,76 т тротилового эквивалента. Тротиловый эквивалент — единица энергии, а не масса взрывчатки, производимой реакцией."
      }
    ]
  },
  "en": {
    "longDescription": "E₀=mc² is the rest energy of the entered mass. Enter grams to compare that same energy in joules, kilowatt-hours and tonnes of TNT equivalent. These units explain the scale; they do not give the electricity obtainable from a fuel. A reaction requires its mass defect Δm, and electricity production also requires a conversion efficiency.",
    "howToUse": [
      "The mass field uses grams:1 kg is 1000. The million-kilowatt-hour row only rescales the number. It provides no city demand or number of supplied homes."
    ],
    "howItWorks": "E₀=(m in grams/1000)c²; c=299792458 m/s exactly.1 kWh=3.6·10⁶ J;1 tonne TNT equivalent=4.184·10⁹ J by convention.",
    "example": "One gram of matter holds 8.988·10¹³ joules — about 25 million kilowatt-hours.",
    "faq": [
      {
        "q": "Does that mean burning a gram of matter releases this much?",
        "a": "No. This calculation gives the rest energy of the entered mass. Energy released by a particular reaction is found from the decrease in total system mass, ΔE=Δmc²; recoverable electricity also depends on the process and its efficiency. Neither fuel composition nor efficiency is an input."
      },
      {
        "q": "Why is the answer shown as a power of ten?",
        "a": "Because 89,875,517,873,681.8 joules cannot be read. Exponential notation keeps the significant digits and the order of magnitude, and here the order of magnitude is the whole point."
      },
      {
        "q": "Where do the tonnes of TNT come from?",
        "a": "One tonne of TNT equivalent is defined as 4.184 gigajoules. It is not a property of a particular explosive but a unit of comparison adopted precisely so that numbers like these can be pictured."
      },
      {
        "q": "Does the formula work for a moving body?",
        "a": "For a moving body the kinetic energy adds to the rest energy, and the total is found through the relativistic factor. What is computed here is the rest energy — the energy locked in the mass itself."
      },
      {
        "q": "How do I interpret a small mass and a large energy?",
        "a": "Grams and kilograms differ by a factor of 1000. For 1 g the result is≈8.988·10¹³ J,≈24.965 million kWh and≈21480.76 tonnes TNT equivalent. TNT equivalent is an energy unit, not the mass of explosive produced by a reaction."
      }
    ]
  },
  "uk": {
    "longDescription": "E₀=mc² — енергія спокою заданої маси. Введіть грами, щоб порівняти ту саму енергію в джоулях, кіловат-годинах і тоннах тротилового еквівалента. Одиниці пояснюють масштаб, але не кількість електрики з палива. Для реакції потрібен дефект маси Δm, а для електростанції ще й ефективність перетворення.",
    "howToUse": [
      "Поле маси використовує грами:1 кг відповідає 1000. Рядок у мільйонах кіловат-годин лише змінює масштаб числа, не задаючи споживання міста або кількість забезпечених квартир."
    ],
    "howItWorks": "E₀=(m у грамах/1000)c²; c=299792458 м/с точно.1 кВт·год=3,6·10⁶ Дж;1 т тротилового еквівалента=4,184·10⁹ Дж за домовленістю.",
    "example": "Один грам: E₀≈8,988·10¹³ Дж≈24,965 млн кВт·год. Це енергія спокою, без припущення про отриману електрику чи річне споживання квартир.",
    "faq": [
      {
        "q": "Чи можна справді отримати цю енергію?",
        "a": "Ні. Тут обчислюється енергія спокою введеної маси. Виділену в конкретній реакції енергію визначають за зменшенням повної маси системи ΔE=Δmc²; доступна електрика залежить також від процесу та ККД. Склад палива й ККД не вводяться."
      },
      {
        "q": "Чому швидкість світла точна, а не виміряна?",
        "a": "Бо з 1983 року метр визначається через неї: світло проходить метр за 1/299 792 458 секунди. Тепер уточнюють не швидкість світла, а самі вимірювання довжини."
      },
      {
        "q": "Куди дівається маса під час ядерної реакції?",
        "a": "Зміна енергії системи пов’язана зі зміною її маси через ΔE=Δmc². Для конкретної ядерної реакції треба порівняти повні маси початкового та кінцевого станів; цей калькулятор їх не запитує."
      },
      {
        "q": "Чи стосується формула звичайних процесів?",
        "a": "Так: зміна внутрішньої енергії змінює масу системи на Δm=ΔE/c². Величина залежить від фактичного ΔE; тут задано лише масу, тому нагрівання чи заряд акумулятора не моделюються."
      },
      {
        "q": "Як читати малу масу та велику енергію?",
        "a": "Грами та кілограми відрізняються у 1000 разів. Для 1 г маємо≈8,988·10¹³ Дж,≈24,965 млн кВт·год і≈21480,76 т тротилового еквівалента. Це одиниця енергії, а не маса вибухівки, утвореної реакцією."
      }
    ]
  },
  "de": {
    "longDescription": "E₀=mc² ist die Ruheenergie der eingegebenen Masse. Gib Gramm ein, um dieselbe Energie in Joule, Kilowattstunden und Tonnen TNT-Äquivalent zu vergleichen. Die Einheiten erläutern die Größenordnung; sie bestimmen keine aus Brennstoff gewinnbare Strommenge. Für eine Reaktion ist der Massendefekt Δm nötig, für Strom zusätzlich der Umwandlungswirkungsgrad.",
    "howToUse": [
      "Das Massefeld verwendet Gramm:1 kg entspricht 1000. Die Zeile in Millionen Kilowattstunden skaliert nur den Zahlenwert. Sie setzt weder den Bedarf einer Stadt noch die Zahl versorgter Wohnungen voraus."
    ],
    "howItWorks": "E₀=(m in Gramm/1000)c²; c=299792458 m/s exakt.1 kWh=3,6·10⁶ J;1 Tonne TNT-Äquivalent=4,184·10⁹ J nach Konvention.",
    "example": "Ein Gramm Materie enthält 8,988·10¹³ Joule — rund 25 Millionen Kilowattstunden.",
    "faq": [
      {
        "q": "Heißt das, ein Gramm Materie zu verbrennen setzt so viel frei?",
        "a": "Nein. Berechnet wird die Ruheenergie der eingegebenen Masse. Die in einer Reaktion freigesetzte Energie folgt aus der Abnahme der gesamten Systemmasse, ΔE=Δmc². Nutzbare elektrische Energie hängt zusätzlich vom Prozess und Wirkungsgrad ab. Brennstoffzusammensetzung und Wirkungsgrad werden nicht eingegeben."
      },
      {
        "q": "Warum steht die Antwort als Zehnerpotenz?",
        "a": "Weil sich 89 875 517 873 681,8 Joule nicht lesen lassen. Die Exponentialschreibweise behält die tragenden Stellen und die Größenordnung, und hier ist die Größenordnung der ganze Punkt."
      },
      {
        "q": "Woher kommen die Tonnen TNT?",
        "a": "Eine Tonne TNT-Äquivalent ist als 4,184 Gigajoule festgelegt. Es ist keine Eigenschaft eines bestimmten Sprengstoffs, sondern eine Vergleichseinheit, gerade damit sich solche Zahlen vorstellen lassen."
      },
      {
        "q": "Gilt die Formel für einen bewegten Körper?",
        "a": "Bei einem bewegten Körper kommt die kinetische Energie zur Ruheenergie hinzu, und die Summe folgt über den relativistischen Faktor. Berechnet wird hier die Ruheenergie — die Energie, die in der Masse selbst steckt."
      },
      {
        "q": "Wie lese ich eine kleine Masse und eine große Energie?",
        "a": "Gramm und Kilogramm unterscheiden sich um den Faktor 1000. Für 1 g ergeben sich≈8,988·10¹³ J,≈24,965 Millionen kWh und≈21480,76 Tonnen TNT-Äquivalent. Das TNT-Äquivalent ist eine Energieeinheit, keine in einer Reaktion hergestellte Sprengstoffmasse."
      }
    ]
  },
  "es": {
    "longDescription": "E₀=mc² es la energía en reposo de la masa introducida. Introduce gramos para comparar esa misma energía en julios, kilovatios hora y toneladas equivalentes de TNT. Las unidades explican la escala, pero no la electricidad obtenible de un combustible. Una reacción requiere su defecto de masa Δm y la producción eléctrica necesita además la eficiencia de conversión.",
    "howToUse": [
      "El campo utiliza gramos:1 kg equivale a 1000. La fila en millones de kilovatios hora solo cambia la escala del número; no representa la demanda de una ciudad ni un número de viviendas abastecidas."
    ],
    "howItWorks": "E₀=(m en gramos/1000)c²; c=299792458 m/s exactamente.1 kWh=3,6·10⁶ J;1 tonelada equivalente de TNT=4,184·10⁹ J por convenio.",
    "example": "Un gramo de materia guarda 8,988·10¹³ julios, unos 25 millones de kilovatios hora.",
    "faq": [
      {
        "q": "¿Significa eso que quemar un gramo de materia libera tanto?",
        "a": "No. Aquí se calcula la energía en reposo de la masa introducida. La energía liberada por una reacción concreta se obtiene de la disminución de la masa total del sistema, ΔE=Δmc². La electricidad recuperable depende también del proceso y su eficiencia. No se introduce composición del combustible ni rendimiento."
      },
      {
        "q": "¿Por qué la respuesta aparece como una potencia de diez?",
        "a": "Porque 89 875 517 873 681,8 julios no se pueden leer. La notación exponencial conserva las cifras significativas y el orden de magnitud, y aquí el orden de magnitud es todo el sentido."
      },
      {
        "q": "¿De dónde salen las toneladas de TNT?",
        "a": "Una tonelada equivalente de TNT se define como 4,184 gigajulios. No es una propiedad de un explosivo concreto, sino una unidad de comparación adoptada precisamente para poder imaginar cifras como estas."
      },
      {
        "q": "¿La fórmula vale para un cuerpo en movimiento?",
        "a": "En un cuerpo en movimiento la energía cinética se suma a la de reposo, y el total se halla con el factor relativista. Lo que se calcula aquí es la energía en reposo: la energía encerrada en la propia masa."
      },
      {
        "q": "¿Cómo interpreto una masa pequeña y una energía grande?",
        "a": "Gramos y kilogramos difieren por un factor de 1000. Para 1 g se obtiene≈8,988·10¹³ J,≈24,965 millones de kWh y≈21480,76 toneladas equivalentes de TNT. Es una unidad de energía, no la masa de explosivo producida por una reacción."
      }
    ]
  }
};
