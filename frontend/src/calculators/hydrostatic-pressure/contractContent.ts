// Individually reviewed against all five actual188 native bodies; human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Определите прирост давления на вертикальной глубине h в покоящейся жидкости постоянной плотности: Δp=ρgh. Без внешнего давления показан этот прирост относительно поверхности. При положительном p₀, заданном как абсолютное давление поверхности, ответ p₀+Δp помечается абсолютным. 101 325 Па — стандартная атмосфера для примера, а не давление в любом месте и погоде.",
    "howToUse": [
      "Введите плотность жидкости: у пресной воды это 1000 кг/м³.",
      "Укажите глубину.",
      "Манометрическое давление обычно отсчитывают от местной атмосферы, абсолютное — от вакуума. При пустом или нулевом p₀ калькулятор показывает только прирост ρgh относительно поверхности; добавьте реальное абсолютное давление поверхности для полного результата."
    ],
    "howItWorks": "Δp=ρ·g·h и p=p₀+Δp при g=9,80665 м/с². При h=0 остаётся p₀. Форма сосуда не входит в локальный баланс статической жидкости; одинаковое давление на одной глубине требует одинаковой жидкости и давления поверхности. Капиллярные эффекты и изменение плотности здесь исключены.",
    "example": "Под десятью метрами пресной воды давление столба равно 98 066,5 Па — почти одна атмосфера.",
    "faq": [
      {
        "q": "Зависит ли давление от формы сосуда?",
        "a": "Δp=ρ·g·h и p=p₀+Δp при g=9,80665 м/с². При h=0 остаётся p₀. Форма сосуда не входит в локальный баланс статической жидкости; одинаковое давление на одной глубине требует одинаковой жидкости и давления поверхности. Капиллярные эффекты и изменение плотности здесь исключены."
      },
      {
        "q": "Чем избыточное давление отличается от абсолютного?",
        "a": "Манометрическое давление обычно отсчитывают от местной атмосферы, абсолютное — от вакуума. При пустом или нулевом p₀ калькулятор показывает только прирост ρgh относительно поверхности; добавьте реальное абсолютное давление поверхности для полного результата."
      },
      {
        "q": "Какую плотность брать?",
        "a": "Пресная вода — 1000 кг/м³, морская около 1025, дизельное топливо примерно 840. Значение вводится, потому что зависит от температуры и состава."
      },
      {
        "q": "Чем это отличается от калькулятора давления?",
        "a": "Тот считает давление как силу, делённую на площадь. Здесь давление создаётся весом столба жидкости, и в формулу входит глубина, а не площадь опоры."
      }
    ],
    "disclaimer": "Покоящаяся жидкость с постоянной введённой плотностью и стандартным g. Манометрическая разность отсчитывается от поверхности; положительное p₀ должно быть абсолютным. Расчёт не определяет прочность сосуда или пригодность для погружения."
  },
  "en": {
    "longDescription": "Find the pressure increase at vertical depth h in a static liquid of constant density: Δp=ρgh. Without a surface pressure, the output is this increase relative to the surface. A positive p₀ entered as absolute surface pressure makes p₀+Δp an absolute result. The 101,325 Pa example is one standard atmosphere, not pressure at every location and weather condition.",
    "howToUse": [
      "Enter the density of the liquid: fresh water is 1000 kg/m³.",
      "Give the depth.",
      "Gauge pressure is usually relative to local atmospheric pressure; absolute pressure is relative to vacuum. With blank or zero p₀ this calculator shows only the increase ρgh relative to the surface; enter actual absolute surface pressure for the total."
    ],
    "howItWorks": "Δp=ρ·g·h and p=p₀+Δp with g=9.80665 m/s². At h=0 only p₀ remains. Vessel shape does not enter the local static-fluid balance; equal pressure at equal depth requires the same liquid and surface pressure. Capillarity and varying density are excluded here.",
    "example": "Ten metres of fresh water gives a column pressure of 98,066.5 Pa — almost one atmosphere.",
    "faq": [
      {
        "q": "Does the pressure depend on the shape of the vessel?",
        "a": "Δp=ρ·g·h and p=p₀+Δp with g=9.80665 m/s². At h=0 only p₀ remains. Vessel shape does not enter the local static-fluid balance; equal pressure at equal depth requires the same liquid and surface pressure. Capillarity and varying density are excluded here."
      },
      {
        "q": "How does gauge pressure differ from absolute?",
        "a": "Gauge pressure is usually relative to local atmospheric pressure; absolute pressure is relative to vacuum. With blank or zero p₀ this calculator shows only the increase ρgh relative to the surface; enter actual absolute surface pressure for the total."
      },
      {
        "q": "Which density should I use?",
        "a": "Fresh water is 1000 kg/m³, sea water about 1025, diesel roughly 840. It is entered because it depends on temperature and composition."
      },
      {
        "q": "How is this different from the pressure calculator?",
        "a": "That one treats pressure as force divided by area. Here the pressure comes from the weight of a liquid column, and depth enters the formula rather than a contact area."
      }
    ],
    "disclaimer": "Static liquid with constant entered density and standard g. The pressure difference is relative to the surface; positive p₀ must be absolute. This does not assess vessel strength or suitability for diving."
  },
  "uk": {
    "longDescription": "Визначте приріст тиску на вертикальній глибині h у нерухомій рідині сталої густини: Δp=ρgh. Без зовнішнього тиску показано приріст відносно поверхні. За додатного p₀, заданого як абсолютний тиск поверхні, відповідь p₀+Δp позначається абсолютною. 101 325 Па — стандартна атмосфера для прикладу, не тиск за будь-якої погоди й місця.",
    "howToUse": [
      "Введіть глибину занурення в метрах.",
      "Введіть густину рідини: для прісної води 1000 кг/м³, для морської близько 1025.",
      "Манометричний тиск зазвичай відлічують від місцевої атмосфери, абсолютний — від вакууму. За порожнього або нульового p₀ калькулятор показує лише приріст ρgh відносно поверхні; для повного значення введіть реальний абсолютний тиск поверхні."
    ],
    "howItWorks": "Δp=ρ·g·h та p=p₀+Δp за g=9,80665 м/с². За h=0 залишається p₀. Форма посудини не входить у локальний баланс нерухомої рідини; однаковий тиск на одній глибині потребує однакової рідини й тиску поверхні. Капілярні ефекти та змінну густину виключено.",
    "example": "Під десятьма метрами прісної води тиск стовпа дорівнює 98 066,5 Па — майже одна атмосфера. Разом з атмосферним повний тиск на цій глибині близький до двох атмосфер.",
    "faq": [
      {
        "q": "Чому форма посудини не має значення?",
        "a": "Δp=ρ·g·h та p=p₀+Δp за g=9,80665 м/с². За h=0 залишається p₀. Форма посудини не входить у локальний баланс нерухомої рідини; однаковий тиск на одній глибині потребує однакової рідини й тиску поверхні. Капілярні ефекти та змінну густину виключено."
      },
      {
        "q": "Що додає зовнішній тиск?",
        "a": "Манометричний тиск зазвичай відлічують від місцевої атмосфери, абсолютний — від вакууму. За порожнього або нульового p₀ калькулятор показує лише приріст ρgh відносно поверхні; для повного значення введіть реальний абсолютний тиск поверхні."
      },
      {
        "q": "Наскільки росте тиск із глибиною?",
        "a": "Приблизно на одну атмосферу кожні десять метрів прісної води. Саме тому дайвери говорять про «атмосферу на десять метрів» як про робоче правило."
      },
      {
        "q": "Чи змінюється густина води з глибиною?",
        "a": "Якщо густина змінюється з глибиною, потрібен інтеграл p=p₀+∫ρ(h)g dh. Ця сторінка використовує одну сталу густину й не встановлює універсальної глибини малої похибки."
      }
    ],
    "disclaimer": "Нерухома рідина зі сталою введеною густиною та стандартним g. Різниця тиску відлічується від поверхні; додатне p₀ має бути абсолютним. Міцність посудини чи придатність для занурення не визначаються."
  },
  "de": {
    "longDescription": "Bestimme die Druckzunahme in vertikaler Tiefe h einer ruhenden Flüssigkeit konstanter Dichte: Δp=ρgh. Ohne Oberflächendruck wird diese Zunahme relativ zur Oberfläche angezeigt. Ein positives p₀ als absoluter Oberflächendruck macht p₀+Δp zum Absolutdruck. Die beispielhaften 101 325 Pa sind eine Standardatmosphäre und kein Wert für jeden Ort und jedes Wetter.",
    "howToUse": [
      "Trage die Dichte der Flüssigkeit ein: Süßwasser hat 1000 kg/m³.",
      "Gib die Tiefe an.",
      "Überdruck bezieht sich üblicherweise auf den örtlichen Luftdruck, Absolutdruck auf Vakuum. Bei leerem oder null gesetztem p₀ zeigt der Rechner nur die Zunahme ρgh relativ zur Oberfläche; gib für den Gesamtdruck den tatsächlichen absoluten Oberflächendruck ein."
    ],
    "howItWorks": "Δp=ρ·g·h und p=p₀+Δp bei g=9,80665 m/s². Für h=0 bleibt nur p₀. Die Gefäßform geht nicht in die örtliche Bilanz einer ruhenden Flüssigkeit ein; gleicher Druck in gleicher Tiefe setzt dieselbe Flüssigkeit und denselben Oberflächendruck voraus. Kapillarität und veränderliche Dichte sind ausgeschlossen.",
    "example": "Zehn Meter Süßwasser ergeben einen Säulendruck von 98 066,5 Pa — beinahe eine Atmosphäre.",
    "faq": [
      {
        "q": "Hängt der Druck von der Form des Gefäßes ab?",
        "a": "Δp=ρ·g·h und p=p₀+Δp bei g=9,80665 m/s². Für h=0 bleibt nur p₀. Die Gefäßform geht nicht in die örtliche Bilanz einer ruhenden Flüssigkeit ein; gleicher Druck in gleicher Tiefe setzt dieselbe Flüssigkeit und denselben Oberflächendruck voraus. Kapillarität und veränderliche Dichte sind ausgeschlossen."
      },
      {
        "q": "Wie unterscheidet sich Überdruck von absolutem Druck?",
        "a": "Überdruck bezieht sich üblicherweise auf den örtlichen Luftdruck, Absolutdruck auf Vakuum. Bei leerem oder null gesetztem p₀ zeigt der Rechner nur die Zunahme ρgh relativ zur Oberfläche; gib für den Gesamtdruck den tatsächlichen absoluten Oberflächendruck ein."
      },
      {
        "q": "Welche Dichte soll ich nehmen?",
        "a": "Süßwasser hat 1000 kg/m³, Meerwasser rund 1025, Diesel etwa 840. Sie wird eingetragen, weil sie von Temperatur und Zusammensetzung abhängt."
      },
      {
        "q": "Wie unterscheidet sich das vom Druckrechner?",
        "a": "Jener behandelt den Druck als Kraft geteilt durch Fläche. Hier entsteht der Druck aus dem Gewicht einer Flüssigkeitssäule, und die Tiefe geht in die Formel ein statt einer Berührfläche."
      }
    ],
    "disclaimer": "Ruhende Flüssigkeit mit konstanter eingegebener Dichte und Standard-g. Die Druckdifferenz bezieht sich auf die Oberfläche; positives p₀ muss absolut sein. Behälterfestigkeit oder Eignung für einen Tauchgang werden nicht bewertet."
  },
  "es": {
    "longDescription": "Obtén el aumento de presión a profundidad vertical h en un líquido en reposo y de densidad constante: Δp=ρgh. Sin presión superficial, el resultado es ese incremento respecto a la superficie. Un p₀ positivo introducido como presión absoluta superficial hace que p₀+Δp sea absoluto. Los 101 325 Pa del ejemplo son una atmósfera estándar, no la presión de cualquier lugar y tiempo.",
    "howToUse": [
      "Introduce la densidad del líquido: el agua dulce son 1000 kg/m³.",
      "Indica la profundidad.",
      "La presión manométrica suele referirse a la atmósfera local; la absoluta, al vacío. Con p₀ vacío o cero el calculador muestra solo el incremento ρgh respecto a la superficie; introduce la presión absoluta superficial real para obtener el total."
    ],
    "howItWorks": "Δp=ρ·g·h y p=p₀+Δp con g=9,80665 m/s². Si h=0 solo queda p₀. La forma del recipiente no entra en el equilibrio local del líquido estático; igual presión a igual profundidad requiere el mismo líquido y presión superficial. Se excluyen capilaridad y densidad variable.",
    "example": "Diez metros de agua dulce dan una presión de columna de 98 066,5 Pa, casi una atmósfera.",
    "faq": [
      {
        "q": "¿La presión depende de la forma del recipiente?",
        "a": "Δp=ρ·g·h y p=p₀+Δp con g=9,80665 m/s². Si h=0 solo queda p₀. La forma del recipiente no entra en el equilibrio local del líquido estático; igual presión a igual profundidad requiere el mismo líquido y presión superficial. Se excluyen capilaridad y densidad variable."
      },
      {
        "q": "¿En qué se diferencia la presión manométrica de la absoluta?",
        "a": "La presión manométrica suele referirse a la atmósfera local; la absoluta, al vacío. Con p₀ vacío o cero el calculador muestra solo el incremento ρgh respecto a la superficie; introduce la presión absoluta superficial real para obtener el total."
      },
      {
        "q": "¿Qué densidad debo usar?",
        "a": "El agua dulce son 1000 kg/m³, el agua de mar unos 1025 y el gasóleo alrededor de 840. Se introduce porque depende de la temperatura y de la composición."
      },
      {
        "q": "¿En qué se diferencia de la calculadora de presión?",
        "a": "Aquella trata la presión como fuerza dividida entre área. Aquí la presión viene del peso de una columna de líquido, y en la fórmula entra la profundidad en vez de un área de contacto."
      }
    ],
    "disclaimer": "Líquido en reposo con densidad introducida constante y g estándar. La diferencia de presión se refiere a la superficie; p₀ positivo debe ser absoluto. No se evalúa la resistencia del recipiente ni la aptitud para bucear."
  }
};
