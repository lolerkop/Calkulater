import type { CalculatorCopy } from '../../lib/platform/types';

// Owned native explanations reviewed against this calculator’s model.
// Human editorial review is still pending; this file makes no publication claim.
export const photonEnergyContractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq'>> = {
  "ru": {
    "longDescription": "Энергия одного фотона определяется его частотой. Введите длину волны в вакууме в нанометрах: результат показывает энергию в джоулях и электронвольтах, частоту и спектроскопическое волновое число. Чем короче длина волны, тем больше энергия одного фотона; удвоение энергии требует уменьшения длины волны вдвое. Это расчёт для одного фотона, без мощности источника, времени облучения и оценки воздействия на человека.",
    "howToUse": [
      "Введите положительную длину волны именно в вакууме; длина волны в среде требует знания её показателя преломления. Нм переводятся в метры умножением на 10⁻⁹.",
      "Длина волны в нанометрах: видимый свет это примерно 380–780 нм. Для рентгена и гамма-излучения подойдут доли нанометра — расчёт справедлив и там. Электронвольты удобнее джоулей: у видимого света это 1,6–3,3 эВ. Волновое число в обратных сантиметрах используют в спектроскопии.",
      "Волновое число здесь равно 1/λ в см⁻¹. Это не угловое волновое число k = 2π/λ. Если положительная величина уже не помещается в числовой диапазон, страница сообщает об ограничении вместо физического нуля."
    ],
    "howItWorks": "E = hc/λ, где h = 6,62607015·10⁻³⁴ Дж·с, c = 299 792 458 м/с.",
    "example": "Зелёный свет 550 нм несёт 3,612·10⁻¹⁹ Дж, то есть 2,254 эВ.",
    "faq": [
      {
        "q": "Почему этот результат не определяет опасность излучения?",
        "a": "Энергия одного фотона не задаёт полученную дозу или последствия облучения. Здесь нет мощности, длительности, площади облучения и свойств ткани или материала; по одному значению в эВ такие выводы сделать нельзя."
      },
      {
        "q": "Зависит ли энергия фотона от яркости?",
        "a": "Нет: при неизменной частоте энергия каждого фотона одинакова. Изменение потока фотонов меняет передаваемую за время энергию. В фотоэффекте выход электрона зависит от частоты и работы выхода конкретного материала, а не от универсального деления на красный свет и ультрафиолет."
      },
      {
        "q": "Что такое электронвольт?",
        "a": "Энергия, которую электрон набирает, пройдя разность потенциалов в один вольт: 1,602·10⁻¹⁹ Дж. В этих единицах энергии фотонов, связей и уровней получаются числами порядка единиц, а не степенями десяти."
      },
      {
        "q": "Как связаны энергия и частота?",
        "a": "Прямо пропорционально: E = hν. Длина волны и частота связаны через скорость света, поэтому любые две из трёх величин задают третью."
      }
    ]
  },
  "en": {
    "longDescription": "The frequency determines the energy of one photon. Enter its vacuum wavelength in nanometres to obtain joules, electronvolts, frequency and spectroscopic wavenumber. Shorter wavelengths mean more energy per photon: doubling that energy requires halving the wavelength. The calculation concerns a single photon; it has no source power, exposure duration or assessment of effects on people.",
    "howToUse": [
      "Enter a positive vacuum wavelength. A wavelength measured inside a material also requires its refractive index. Multiply nanometres by 10⁻⁹ to obtain metres.",
      "Wavelength in nanometres: visible light runs roughly 380–780 nm. For X-rays and gamma radiation use fractions of a nanometre — the calculation holds there too. Electronvolts are handier than joules: visible light is 1.6–3.3 eV. Wavenumber in reciprocal centimetres is the spectroscopist’s unit.",
      "The wavenumber here is 1/λ in cm⁻¹, rather than the angular wavenumber k=2π/λ. A positive quantity outside the numerical range produces a range message instead of a physical zero."
    ],
    "howItWorks": "E = hc/λ, with h = 6.62607015·10⁻³⁴ J·s and c = 299 792 458 m/s.",
    "example": "Green light at 550 nm carries 3.612·10⁻¹⁹ J, that is 2.254 eV.",
    "faq": [
      {
        "q": "Why does this result not establish radiation risk?",
        "a": "Energy per photon does not specify the received dose or the consequences of exposure. The calculation has no power, duration, exposed area or tissue/material properties, so an eV value alone cannot establish those effects."
      },
      {
        "q": "Does photon energy depend on brightness?",
        "a": "No: at fixed frequency each photon has the same energy. Changing the photon flux changes the energy transferred over time. Photoelectric emission depends on frequency and the work function of the particular material; there is no universal red-versus-ultraviolet rule."
      },
      {
        "q": "What is an electronvolt?",
        "a": "The energy an electron gains crossing one volt: 1.602·10⁻¹⁹ J. In these units photon energies, bond energies and levels come out as numbers of order one rather than powers of ten."
      },
      {
        "q": "How do energy and frequency relate?",
        "a": "Directly: E = hν. Wavelength and frequency are tied by the speed of light, so any two of the three fix the third."
      }
    ]
  },
  "uk": {
    "longDescription": "Частота визначає енергію одного фотона. Введіть довжину хвилі у вакуумі в нанометрах, щоб отримати джоулі, електронвольти, частоту та спектроскопічне хвильове число. Коротша хвиля означає більшу енергію фотона: для подвоєння енергії довжину треба зменшити вдвічі. Розрахунок стосується одного фотона; він не враховує потужність джерела, тривалість опромінення чи вплив на людину.",
    "howToUse": [
      "Введіть додатну довжину хвилі саме у вакуумі. Для хвилі всередині матеріалу потрібен також його показник заломлення. Нм переводяться в метри множенням на 10⁻⁹.",
      "Введіть довжину хвилі в нанометрах: видиме світло — це приблизно 380–780 нм. Для рентгена й гамма-випромінювання підійдуть частки нанометра. Прочитайте енергію в джоулях та електронвольтах.",
      "Хвильове число тут дорівнює 1/λ у см⁻¹, а не кутовому хвильовому числу k=2π/λ. Якщо додатна величина не вміщується в числовий діапазон, сторінка повідомляє про обмеження замість фізичного нуля."
    ],
    "howItWorks": "Енергія рахується як E = hc/λ, де h = 6,62607015·10⁻³⁴ Дж·с — стала Планка, c = 299 792 458 м/с. Переведення в електронвольти виконується діленням на заряд електрона: один еВ дорівнює 1,602·10⁻¹⁹ Дж.",
    "example": "Зелене світло 550 нм: E≈3,612·10⁻¹⁹ Дж≈2,254 еВ, частота≈5,451·10¹⁴ Гц. При 300 нм енергія одного фотона≈4,133 еВ; це не оцінка отриманої дози.",
    "faq": [
      {
        "q": "Чому результат не визначає небезпеку випромінювання?",
        "a": "Енергія одного фотона не визначає отриману дозу чи наслідки опромінення. Тут немає потужності, тривалості, площі опромінення та властивостей тканини або матеріалу. Одного значення в еВ для такого висновку недостатньо."
      },
      {
        "q": "Що таке електронвольт?",
        "a": "Енергія, яку набуває електрон, пройшовши різницю потенціалів в один вольт. Для атомних масштабів це зручніша одиниця за джоуль: видиме світло — це 1,6–3,3 еВ."
      },
      {
        "q": "Чи залежить енергія фотона від яскравості?",
        "a": "Ні: за незмінної частоти енергія кожного фотона однакова. Зміна потоку фотонів змінює передану за час енергію. У фотоефекті вихід електрона залежить від частоти та роботи виходу конкретного матеріалу, а не від універсального поділу на червоне світло та ультрафіолет."
      },
      {
        "q": "Звідки береться стала Планка?",
        "a": "Це фундаментальна стала, що зв’язує енергію з частотою. Із 2019 року її значення зафіксовано точно й через неї визначено кілограм."
      }
    ]
  },
  "de": {
    "longDescription": "Die Frequenz bestimmt die Energie eines einzelnen Photons. Gib die Vakuumwellenlänge in Nanometern ein, um Joule, Elektronenvolt, Frequenz und spektroskopische Wellenzahl zu erhalten. Eine kürzere Wellenlänge bedeutet mehr Energie je Photon: doppelte Energie erfordert die halbe Wellenlänge. Die Rechnung umfasst weder Quellenleistung noch Bestrahlungsdauer oder eine Bewertung der Wirkung auf Menschen.",
    "howToUse": [
      "Gib eine positive Vakuumwellenlänge ein. Bei einer Wellenlänge innerhalb eines Materials wird zusätzlich dessen Brechungsindex benötigt. Nanometer werden mit 10⁻⁹ in Meter umgerechnet.",
      "Wellenlänge in Nanometern: sichtbares Licht reicht grob von 380 bis 780 nm. Für Röntgen- und Gammastrahlung nimm Bruchteile eines Nanometers — die Rechnung gilt auch dort. Elektronenvolt sind handlicher als Joule: sichtbares Licht liegt bei 1,6–3,3 eV. Die Wellenzahl in reziproken Zentimetern ist die Einheit der Spektroskopie.",
      "Die Wellenzahl ist hier 1/λ in cm⁻¹ und nicht die Kreiswellenzahl k=2π/λ. Liegt eine positive Größe außerhalb des Zahlenbereichs, erscheint eine Bereichsmeldung statt einer physikalischen Null."
    ],
    "howItWorks": "E = hc/λ, mit h = 6,62607015·10⁻³⁴ J·s und c = 299 792 458 m/s.",
    "example": "Grünes Licht bei 550 nm trägt 3,612·10⁻¹⁹ J, also 2,254 eV.",
    "faq": [
      {
        "q": "Warum bestimmt dieses Ergebnis keine Strahlungsgefährdung?",
        "a": "Die Energie je Photon gibt weder die aufgenommene Dosis noch die Folgen der Bestrahlung an. Leistung, Dauer, bestrahlte Fläche und Eigenschaften von Gewebe oder Material fehlen. Ein einzelner eV-Wert reicht dafür nicht aus."
      },
      {
        "q": "Hängt die Photonenenergie von der Helligkeit ab?",
        "a": "Nein: Bei unveränderter Frequenz hat jedes Photon dieselbe Energie. Ein anderer Photonenfluss ändert die über eine Zeitspanne übertragene Energie. Die Elektronenemission beim Photoeffekt hängt von der Frequenz und der Austrittsarbeit des jeweiligen Materials ab; eine allgemeine Regel für Rotlicht und Ultraviolett gibt es nicht."
      },
      {
        "q": "Was ist ein Elektronenvolt?",
        "a": "Die Energie, die ein Elektron beim Durchlaufen eines Volts gewinnt: 1,602·10⁻¹⁹ J. In diesen Einheiten kommen Photonenenergien, Bindungsenergien und Niveaus als Zahlen der Größenordnung eins heraus statt als Zehnerpotenzen."
      },
      {
        "q": "Wie hängen Energie und Frequenz zusammen?",
        "a": "Unmittelbar: E = hν. Wellenlänge und Frequenz sind über die Lichtgeschwindigkeit verbunden, zwei beliebige der drei legen also die dritte fest."
      }
    ]
  },
  "es": {
    "longDescription": "La frecuencia determina la energía de un fotón. Introduce la longitud de onda en el vacío, en nanómetros, para obtener julios, electronvoltios, frecuencia y número de onda espectroscópico. Una longitud más corta implica más energía por fotón: para duplicar la energía hay que reducir la longitud a la mitad. El cálculo no incluye potencia de la fuente, duración de la exposición ni evaluación de efectos sobre las personas.",
    "howToUse": [
      "Introduce una longitud de onda positiva en el vacío. Para una longitud medida dentro de un material también hace falta su índice de refracción. Multiplica los nanómetros por 10⁻⁹ para obtener metros.",
      "Longitud de onda en nanómetros: la luz visible va aproximadamente de 380 a 780 nm. Para rayos X y radiación gamma usa fracciones de nanómetro: el cálculo también vale ahí. Los electronvoltios son más cómodos que los julios: la luz visible son 1,6 a 3,3 eV. El número de onda en centímetros recíprocos es la unidad del espectroscopista.",
      "El número de onda aquí es 1/λ en cm⁻¹, no el número de onda angular k=2π/λ. Si una magnitud positiva no cabe en el rango numérico, se muestra una limitación en vez de un cero físico."
    ],
    "howItWorks": "E = hc/λ, con h = 6,62607015·10⁻³⁴ J·s y c = 299 792 458 m/s.",
    "example": "La luz verde de 550 nm lleva 3,612·10⁻¹⁹ J, es decir, 2,254 eV.",
    "faq": [
      {
        "q": "¿Por qué este resultado no determina el riesgo de la radiación?",
        "a": "La energía de un fotón no especifica la dosis recibida ni las consecuencias de una exposición. Faltan potencia, duración, área expuesta y propiedades del tejido o material. Un valor en eV por sí solo no permite evaluar esos efectos."
      },
      {
        "q": "¿La energía del fotón depende del brillo?",
        "a": "No: a frecuencia constante cada fotón tiene la misma energía. Cambiar el flujo de fotones cambia la energía transferida durante un intervalo. La emisión fotoeléctrica depende de la frecuencia y del trabajo de extracción del material concreto; no hay una regla universal entre rojo y ultravioleta."
      },
      {
        "q": "¿Qué es un electronvoltio?",
        "a": "La energía que gana un electrón al atravesar un voltio: 1,602·10⁻¹⁹ J. En estas unidades las energías de fotones, de enlaces y de niveles salen como números del orden de la unidad en vez de potencias de diez."
      },
      {
        "q": "¿Cómo se relacionan energía y frecuencia?",
        "a": "De forma directa: E = hν. La longitud de onda y la frecuencia están ligadas por la velocidad de la luz, así que dos cualesquiera de las tres fijan la tercera."
      }
    ]
  }
};
