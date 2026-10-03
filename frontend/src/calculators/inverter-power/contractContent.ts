// Individually authored subject contracts; primary reading and independent evidence are recorded for wave12.
export const contract = {
  "ru": {
    "longDescription": "Рассчитайте постоянную входную мощность инвертора и ток батареи для заданной выходной активной мощности, КПД и напряжения на клеммах. Баланс показывает также потери. КПД вводится для рассматриваемой нагрузки: максимальное паспортное значение не обязано сохраняться во всём диапазоне. Химия батареи, пусковой пик, просадка напряжения и потребление на холостом ходу отдельно не моделируются.",
    "howToUse": [
      "Введите активную выходную мощность в Вт, а не полную мощность в ВА.",
      "Используйте КПД для данной нагрузки и условий из документации.",
      "Указывайте напряжение на клеммах под нагрузкой, если оно известно.",
      "Ток результата не выбирает сечение кабеля, предохранитель, ёмкость батареи или допустимый пусковой режим."
    ],
    "howItWorks": "η=КПД/100; Pвх=Pвых/η, Iб=Pвх/Uб, Pпот=Pвых·(1−η)/η. Мощность в Вт, напряжение в В. Pвых>0, Uб>0, 0<КПД≤100%; 100% — формальный идеал без потерь.",
    "example": "1000 Вт, 85% и 12 В дают 1176,5 Вт на входе, 98,04 А и 176,5 Вт потерь. При том же КПД и 24 В ток 49,02 А. При 100% потери нулевые; нулевая нагрузка не рассчитывается, поскольку реальный холостой ход требует отдельной модели.",
    "faq": [
      {
        "q": "Почему КПД выше 100 процентов не принимается?",
        "a": "Это означало бы, что инвертор отдаёт больше энергии, чем потребляет. Не погрешность округления, а невозможная величина, поэтому ввод отвергается."
      },
      {
        "q": "Учитываются ли пусковые токи?",
        "a": "Нет. У некоторых двигателей и компрессоров пусковая мощность превышает номинальную. Величина и длительность пика зависят от нагрузки и находятся вне этого стационарного расчёта."
      },
      {
        "q": "Где взять КПД?",
        "a": "В документации на инвертор. Обычно он зависит от нагрузки, поэтому вводить стоит значение при вашей типичной нагрузке."
      },
      {
        "q": "Учитывается ли химия аккумулятора?",
        "a": "Нет. Расчёт чисто электрический; как поведёт себя батарея под таким током — отдельный вопрос."
      }
    ],
    "disclaimer": "Стационарный баланс мощности по введённому КПД; без пускового тока, модели батареи и расчёта проводки."
  },
  "en": {
    "longDescription": "Calculate steady DC input power and battery current for a stated AC active output power, efficiency and battery terminal voltage. The balance also shows conversion loss. Use efficiency at the relevant load: a datasheet maximum is not constant across the load range. Battery chemistry, start-up peaks, voltage sag and separate idle consumption are not modelled.",
    "howToUse": [
      "Enter active output power in W, not apparent power in VA.",
      "Use documented efficiency at the relevant load and conditions.",
      "Use loaded terminal voltage when known.",
      "The result does not size cables, fuses, battery capacity or start-up capability."
    ],
    "howItWorks": "η=efficiency/100; Pin=Pout/η, Ib=Pin/Ub, Ploss=Pout·(1−η)/η. Power is in W and voltage in V. Pout>0, Ub>0 and 0<efficiency≤100%; 100% is a formal lossless limit.",
    "example": "1000 W, 85% and 12 V give 1176.5 W input, 98.04 A and 176.5 W loss. At the same efficiency and 24 V, current is 49.02 A. At 100% loss is zero; zero-load operation is outside the model because actual idle consumption needs separate information.",
    "faq": [
      {
        "q": "Why is efficiency above 100 percent rejected?",
        "a": "It would mean the inverter produces more energy than it consumes. That is not a rounding issue but an impossible figure, so it is refused rather than calculated."
      },
      {
        "q": "Does this include start-up surge?",
        "a": "No. Some motors and compressors need more than their rated power during start-up. The peak and duration depend on the load and lie outside this steady calculation."
      },
      {
        "q": "Where do I find the efficiency?",
        "a": "On the inverter datasheet. It usually varies with load, so the figure at your typical load is the one worth entering."
      },
      {
        "q": "Is battery chemistry taken into account?",
        "a": "No. The calculation is purely electrical; how the battery behaves under that current is a separate question."
      }
    ],
    "disclaimer": "Steady power balance at entered efficiency; no start-up surge, battery model or wiring design."
  },
  "uk": {
    "longDescription": "Обчисліть сталу вхідну потужність інвертора та струм батареї для заданих активної потужності на виході, ККД і напруги на клемах. Баланс також показує втрати. Використовуйте ККД для цього навантаження: максимальне паспортне значення не є постійним для всіх режимів. Хімію батареї, пускові піки, просідання напруги й окреме споживання без навантаження не змодельовано.",
    "howToUse": [
      "Вводьте активну вихідну потужність у Вт, а не повну у ВА.",
      "Беріть ККД для потрібного навантаження й умов із документації.",
      "За можливості використайте напругу на клемах під навантаженням.",
      "Результат не вибирає переріз кабелю, запобіжник, ємність батареї чи допустимий пуск."
    ],
    "howItWorks": "η=ККД/100; Pвх=Pвих/η, Iб=Pвх/Uб, Pвтрат=Pвих·(1−η)/η. Потужність у Вт, напруга у В. Pвих>0, Uб>0, 0<ККД≤100%; 100% — формальний ідеал без втрат.",
    "example": "1000 Вт, 85% і 12 В дають 1176,5 Вт на вході, 98,04 А і 176,5 Вт втрат. За того самого ККД та 24 В струм 49,02 А. За 100% втрати нульові; нульове навантаження не розраховується, бо реальне споживання холостого ходу потребує окремих даних.",
    "faq": [
      {
        "q": "Чому струм такий великий?",
        "a": "I=Pвх/Uб: за низької напруги той самий потік енергії потребує більшого струму. 98,04 А у прикладі — розрахунок, а не норматив перерізу кабелю чи запобіжника."
      },
      {
        "q": "Чи краще брати систему на 24 або 48 В?",
        "a": "За однакових Pвх і ККД подвоєння напруги вдвічі зменшує струм. Втрати I²R в тому самому опорі кабелю тоді зменшуються вчетверо. Вибір системи потребує сумісності батареї та обладнання."
      },
      {
        "q": "Куди дівається різниця в ККД?",
        "a": "Різниця Pвх−Pвих є втратами перетворення. Їхній розподіл і залежність ККД від навантаження визначаються конкретним пристроєм; модель не додає вдруге втрати, вже враховані в ККД."
      },
      {
        "q": "Чи враховано пусковий струм?",
        "a": "Ні. Пускова потужність і тривалість піку беруться з даних навантаження та інвертора. Універсального множника 3–7 або автоматичного запасу цей розрахунок не задає."
      }
    ],
    "disclaimer": "Сталий баланс потужності за введеним ККД; без пускових піків, моделі батареї та розрахунку проводки."
  },
  "de": {
    "longDescription": "Berechne die stationäre DC-Eingangsleistung und den Batteriestrom aus aktiver Ausgangsleistung, Wirkungsgrad und Klemmenspannung. Die Bilanz zeigt auch Verluste. Ein maximaler Datenblattwirkungsgrad gilt nicht bei jeder Last. Batteriechemie, Anlaufspitzen, Spannungseinbruch und gesonderter Leerlaufverbrauch werden nicht modelliert.",
    "howToUse": [
      "Aktive Ausgangsleistung in W statt Scheinleistung in VA eingeben.",
      "Den dokumentierten Wirkungsgrad bei der betrachteten Last verwenden.",
      "Wenn bekannt, die Klemmenspannung unter Last einsetzen.",
      "Das Ergebnis dimensioniert keine Kabel, Sicherungen, Batteriekapazität oder Anlaufreserve."
    ],
    "howItWorks": "η=Wirkungsgrad/100; Pin=Pout/η, Ib=Pin/Ub, Pverlust=Pout·(1−η)/η. Leistung in W, Spannung in V. Pout>0, Ub>0 und 0<Wirkungsgrad≤100%; 100% ist ein formaler verlustloser Grenzfall.",
    "example": "1000 W, 85% und 12 V ergeben 1176,5 W Eingangsleistung, 98,04 A und 176,5 W Verlust. Bei gleichem Wirkungsgrad und 24 V sinkt der Strom auf 49,02 A. 100% ergibt null Verlust; Leerlauf bei null Ausgangsleistung benötigt eigene Gerätedaten und wird nicht berechnet.",
    "faq": [
      {
        "q": "Warum wird ein Wirkungsgrad über 100 Prozent abgewiesen?",
        "a": "Er hieße, dass der Wechselrichter mehr Energie erzeugt, als er aufnimmt. Das ist keine Rundungsfrage, sondern eine unmögliche Zahl, deshalb wird sie verweigert statt gerechnet."
      },
      {
        "q": "Ist der Anlaufstrom enthalten?",
        "a": "Nein. Manche Motoren und Verdichter benötigen beim Anlaufen mehr als ihre Nennleistung. Höhe und Dauer der Spitze hängen von der Last ab und liegen außerhalb dieser stationären Rechnung."
      },
      {
        "q": "Wo finde ich den Wirkungsgrad?",
        "a": "Im Datenblatt des Wechselrichters. Er ändert sich meist mit der Last, es lohnt sich also, den Wert bei deiner üblichen Last einzutragen."
      },
      {
        "q": "Wird die Zellchemie der Batterie berücksichtigt?",
        "a": "Nein. Die Rechnung ist rein elektrisch; wie sich die Batterie bei diesem Strom verhält, ist eine eigene Frage."
      }
    ],
    "disclaimer": "Stationäre Leistungsbilanz beim eingegebenen Wirkungsgrad; keine Anlauf-, Batterie- oder Leitungsberechnung."
  },
  "es": {
    "longDescription": "Calcula la potencia continua de entrada y la corriente de batería a partir de potencia activa de salida, rendimiento y tensión en bornes. El balance muestra también pérdidas. El rendimiento máximo de la ficha no tiene por qué mantenerse con cualquier carga. No se modelan química de batería, arranque, caída de tensión ni consumo separado en vacío.",
    "howToUse": [
      "Introduce potencia activa de salida en W, no potencia aparente en VA.",
      "Usa el rendimiento documentado para la carga y condiciones consideradas.",
      "Si se conoce, utiliza tensión en bornes bajo carga.",
      "El resultado no dimensiona cable, fusible, capacidad de batería ni capacidad de arranque."
    ],
    "howItWorks": "η=rendimiento/100; Pentrada=Psalida/η, Ib=Pentrada/Ub, Ppérdida=Psalida·(1−η)/η. Potencia en W y tensión en V. Psalida>0, Ub>0 y 0<rendimiento≤100%; 100% es un límite ideal sin pérdidas.",
    "example": "1000 W, 85% y 12 V dan 1176,5 W de entrada, 98,04 A y 176,5 W de pérdida. Con igual rendimiento y 24 V, la corriente es 49,02 A. Con 100% la pérdida es cero; la operación sin carga necesita datos de consumo propios y queda fuera del modelo.",
    "faq": [
      {
        "q": "¿Por qué se rechaza un rendimiento por encima del 100 por cien?",
        "a": "Significaría que el inversor produce más energía de la que consume. Eso no es una cuestión de redondeo, sino una cifra imposible, así que se rechaza en vez de calcularse."
      },
      {
        "q": "¿Incluye el pico de arranque?",
        "a": "No. Algunos motores y compresores necesitan más que su potencia nominal al arrancar. Magnitud y duración dependen de la carga y quedan fuera de este cálculo estacionario."
      },
      {
        "q": "¿Dónde encuentro el rendimiento?",
        "a": "En la hoja de datos del inversor. Suele variar con la carga, así que conviene introducir el valor correspondiente a tu carga habitual."
      },
      {
        "q": "¿Se tiene en cuenta la química de la batería?",
        "a": "No. El cálculo es puramente eléctrico; cómo se comporta la batería con esa corriente es otra cuestión."
      }
    ],
    "disclaimer": "Balance estacionario con el rendimiento introducido; sin arranque, modelo de batería o diseño de cableado."
  }
};
