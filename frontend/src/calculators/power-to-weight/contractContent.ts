import type { CalculatorCopy } from '../../lib/platform/types';

// Existing native content individually reviewed; scoped model and input corrections.
export const automotiveWave10ContractContent = {
  "ru": {
    "longDescription": "Сравнивает мощность с расчётной массой автомобиля, включая отдельно введённую нагрузку. Ввод PS означает метрическую лошадиную силу 735,49875 Вт; kW означает киловатт. Механическая hp — другая единица, поэтому перед сравнением проверьте обозначение в источнике данных. Результат в кВт/т и обратный показатель кг/PS описывают отношение, но не гарантируют разгон или принадлежность к классу автомобилей.",
    "howItWorks": "Мощность приводится к киловаттам, масса — к тоннам, и берётся их отношение; килограммы на силу — та же связь, только обратная. Масса = введённая масса + дополнительная нагрузка. Мощность и исходная масса положительны, нагрузка неотрицательна; единица выбирается явно. Дополнительные строки тоже должны быть представимы в числовом диапазоне. Не прибавляйте людей или топливо повторно, если они уже включены в исходную массу.",
    "howToUse": [
      "Введите мощность двигателя и выберите единицу.",
      "Укажите снаряжённую массу.",
      "При желании добавьте груз, который нужно учесть."
    ],
    "example": "150 л.с. при массе 1400 кг — это 110,32 кВт на 1,4 т, то есть 78,80 кВт на тонну.",
    "faq": [
      {
        "q": "Какая лошадиная сила используется?",
        "a": "Режим PS использует метрическую силу: 1 PS = 735,49875 Вт. Механическая hp соответствует приблизительно 745,7 Вт и не является тем же вводом. Если источник даёт hp, сначала переведите её в кВт или PS."
      },
      {
        "q": "Учитывать ли пассажиров и топливо?",
        "a": "Это ваш выбор. Обычно сравнивают по снаряжённой массе, а поле дополнительной нагрузки позволяет добавить всё, что нужно учесть."
      },
      {
        "q": "Зачем показывать ещё и килограммы на силу?",
        "a": "Многие помнят показатель именно в таком виде, а меньшее значение означает лучшую динамику — кому-то это нагляднее."
      },
      {
        "q": "Предсказывает ли это разгон?",
        "a": "Только грубо. Передаточные числа, сцепление, аэродинамика и то, на каких оборотах приходит мощность, здесь не учитываются."
      }
    ]
  },
  "en": {
    "longDescription": "Compares power with the vehicle’s calculated mass, including a separately entered payload. PS means metric horsepower, 735.49875 W; kW means kilowatts. Mechanical hp is a different unit, so check the unit in the data source before comparing. kW/t and the inverse kg/PS describe a ratio, not a guaranteed acceleration time or vehicle class.",
    "howItWorks": "Power is converted to kilowatts, mass to tonnes, and the ratio follows; kg per hp is the same relationship inverted. Calculated mass = entered mass + payload. Power and base mass are positive, payload is nonnegative, and the power unit is explicitly selected. Additional output rows must also be numerically representable. Do not add people or fuel twice if already included in the base mass.",
    "howToUse": [
      "Enter engine power and pick its unit.",
      "Enter the kerb weight.",
      "Add any extra load you want included."
    ],
    "example": "150 metric PS in a 1400 kg car is 110.32 kW over 1.4 t, which is 78.80 kW per tonne.",
    "faq": [
      {
        "q": "Which horsepower is used?",
        "a": "The PS option uses metric horsepower: 1 PS = 735.49875 W. Mechanical hp is approximately 745.7 W and is not the same input. Convert a source given in mechanical hp to kW or PS first."
      },
      {
        "q": "Should I include passengers and fuel?",
        "a": "That is your choice. Kerb weight is the usual basis for comparison, and the extra load field lets you add whatever you want counted."
      },
      {
        "q": "Why show kilograms per horsepower as well?",
        "a": "Many people remember the figure that way, and a lower number means better acceleration, which some find more intuitive."
      },
      {
        "q": "Does this predict acceleration?",
        "a": "Only roughly. Gearing, traction, aerodynamics and where the power arrives in the rev range all matter and are not modelled."
      }
    ]
  },
  "uk": {
    "longDescription": "Порівнює потужність із розрахунковою масою авто, включаючи окремо введене навантаження. PS означає метричну кінську силу 735,49875 Вт; kW — кіловат. Механічна hp є іншою одиницею, тому перед порівнянням перевірте позначення в джерелі даних. кВт/т та обернене кг/PS описують відношення, але не гарантують розгін чи належність до класу авто.",
    "howItWorks": "Потужність приводиться до кіловатів, маса — до тонн, і береться їхнє відношення. Обернена величина — кілограми на силу — показує, скільки маси припадає на одну кінську силу. Маса = введена маса + додаткове навантаження. Потужність і базова маса додатні, навантаження невід’ємне; одиниця обирається явно. Додаткові рядки також мають бути чисельно представимими. Не додавайте людей або пальне повторно, якщо вони вже включені в базову масу.",
    "howToUse": [
      "Введіть потужність у кінських силах або кіловатах.",
      "Введіть спорядну масу.",
      "Прочитайте питому потужність."
    ],
    "example": "150 к.с. за маси 1400 кг — це 110,32 кВт на 1,4 т, тобто 78,80 кВт на тонну.",
    "faq": [
      {
        "q": "Чому це важливіше за саму потужність?",
        "a": "Бо прискорення дорівнює силі, поділеній на масу. Два автомобілі по 150 к.с., але вагою 1200 і 1800 кг, розганяються зовсім по-різному."
      },
      {
        "q": "Які значення вважаються високими?",
        "a": "Універсальні межі «високої» питомої потужності тут не задані. Порівнюйте однаково визначені потужності й фактичні маси. Режим PS використовує метричну силу 735,49875 Вт; механічна hp приблизно 745,7 Вт, і ці одиниці не слід змішувати."
      },
      {
        "q": "Яку масу брати?",
        "a": "Спорядну плюс вагу водія й палива — тобто реальну масу в русі. Паспортна суха маса завжди оптимістичніша."
      },
      {
        "q": "Чи визначає це час розгону?",
        "a": "Значною мірою, але не цілком. Ще важать зчеплення, передавальні числа, аеродинаміка й характер моменту. Питома потужність — найкраще одне число, але не єдине."
      }
    ]
  },
  "de": {
    "longDescription": "Vergleicht die Leistung mit der berechneten Fahrzeugmasse einschließlich einer getrennt eingegebenen Zuladung. PS bedeutet die metrische Pferdestärke mit 735,49875 W, kW bedeutet Kilowatt. Mechanische hp ist eine andere Einheit; prüfe daher die Datenquelle. kW/t und das umgekehrte kg/PS beschreiben ein Verhältnis, garantieren aber weder Beschleunigungszeit noch Fahrzeugklasse.",
    "howItWorks": "Die Leistung wird in Kilowatt umgerechnet, die Masse in Tonnen, daraus folgt das Verhältnis; Kilogramm je PS ist dieselbe Beziehung umgekehrt. Berechnete Masse = Grundmasse + Zuladung. Leistung und Grundmasse sind positiv, Zuladung ist nichtnegativ; die Einheit wird ausdrücklich gewählt. Auch weitere Ergebniszeilen müssen numerisch darstellbar sein. Zähle Personen oder Kraftstoff nicht doppelt, wenn sie bereits in der Grundmasse enthalten sind.",
    "howToUse": [
      "Trage die Motorleistung ein und wähle ihre Einheit.",
      "Trage das Leergewicht ein.",
      "Ergänze eine zusätzliche Last, wenn sie mitzählen soll."
    ],
    "example": "150 PS in einem Auto mit 1400 kg sind 110,32 kW auf 1,4 t, also 78,80 kW je Tonne.",
    "faq": [
      {
        "q": "Welche Pferdestärke wird verwendet?",
        "a": "Die Option PS verwendet die metrische Pferdestärke: 1 PS = 735,49875 W. Mechanische hp entspricht ungefähr 745,7 W und ist nicht dieselbe Eingabe. Rechne mechanische hp zuerst in kW oder PS um."
      },
      {
        "q": "Sollen Insassen und Kraftstoff mitzählen?",
        "a": "Das entscheidest du. Üblich für Vergleiche ist das Leergewicht, und das Feld für die zusätzliche Last lässt dich hinzurechnen, was mitzählen soll."
      },
      {
        "q": "Warum wird auch Kilogramm je PS angezeigt?",
        "a": "Viele merken sich die Zahl in dieser Form, und ein niedrigerer Wert bedeutet bessere Beschleunigung — manchen ist das anschaulicher."
      },
      {
        "q": "Sagt das die Beschleunigung voraus?",
        "a": "Nur grob. Übersetzung, Traktion, Aerodynamik und die Stelle im Drehzahlband, an der die Leistung anliegt, zählen mit und stecken nicht im Modell."
      }
    ]
  },
  "es": {
    "longDescription": "Compara la potencia con la masa calculada del vehículo, incluida una carga añadida por separado. PS representa el caballo métrico de 735,49875 W; kW son kilovatios. El hp mecánico es otra unidad, así que comprueba la fuente de los datos. kW/t y la relación inversa kg/PS describen una proporción, no garantizan tiempo de aceleración ni categoría del vehículo.",
    "howItWorks": "La potencia se convierte a kilovatios, la masa a toneladas, y la relación sale de ahí; los kg por CV son esa misma relación invertida. Masa calculada = masa introducida + carga. La potencia y la masa base son positivas, la carga es no negativa y se elige expresamente la unidad. Las salidas adicionales también deben ser representables numéricamente. No sumes personas o combustible dos veces si ya figuran en la masa base.",
    "howToUse": [
      "Introduce la potencia del motor y elige su unidad.",
      "Introduce la masa en vacío.",
      "Añade cualquier carga adicional que quieras incluir."
    ],
    "example": "150 CV en un coche de 1400 kg son 110,32 kW sobre 1,4 t, es decir, 78,80 kW por tonelada.",
    "faq": [
      {
        "q": "¿Qué caballo se usa?",
        "a": "La opción PS usa el caballo métrico: 1 PS = 735,49875 W. El hp mecánico equivale aproximadamente a 745,7 W y no es la misma entrada. Convierte primero los hp mecánicos a kW o PS."
      },
      {
        "q": "¿Debo incluir a los pasajeros y el combustible?",
        "a": "Es tu elección. La masa en vacío es la base habitual de comparación, y el campo de carga adicional te permite sumar lo que quieras contar."
      },
      {
        "q": "¿Por qué se muestran también los kilogramos por caballo?",
        "a": "Mucha gente recuerda la cifra así, y un número menor significa mejor aceleración, lo que a algunos les resulta más intuitivo."
      },
      {
        "q": "¿Predice la aceleración?",
        "a": "Solo de forma aproximada. Las relaciones de cambio, la tracción, la aerodinámica y en qué punto del régimen llega la potencia influyen y no están modelados."
      }
    ]
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', Partial<CalculatorCopy>>;
