// Individually reviewed against all five actual188 native bodies; human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Оцените скорость звука в сухом воздухе по температуре −80…80 °C. Дополнительные строки переводят скорость в км/ч и показывают время на 1 км и путь за 3 секунды. Это однородная среда, а не расчёт акустической трассы с ветром и температурными слоями.",
    "howToUse": [
      "Введите температуру воздуха, а не температуру источника звука.",
      "Отличайте скорость относительно среды от скорости относительно земли при ветре.",
      "Для постоянной скорости путь равен c·время; округление строки вывода не меняет исходный расчёт."
    ],
    "howItWorks": "c=331,3√(1+t/273,15) м/с — заданное приближение при постоянных составе газа и отношении теплоёмкостей. Следствия: скорость в км/ч=3,6 c, время 1 км=1000/c с, путь за 3 с=3 c м.",
    "example": "При 20 °C модель даёт 343,21 м/с,1235,57 км/ч, около 2,914 с на 1 км и 1029,64 м за 3 с. При 0 °C получаются 331,3 м/с.",
    "faq": [
      {
        "q": "Почему давление не влияет на скорость звука?",
        "a": "c=331,3√(1+t/273,15) м/с — заданное приближение при постоянных составе газа и отношении теплоёмкостей. Следствия: скорость в км/ч=3,6 c, время 1 км=1000/c с, путь за 3 с=3 c м."
      },
      {
        "q": "Почему расстояние до грозы делят на три?",
        "a": "При 20 °C получаются 343,21 м/с,1229? км/ч? Скорость в км/ч точно пересчитывается:≈1235,57 км/ч. Время 1 км≈2,914 с, за 3 с звук проходит≈1029,64 м. При 0 °C модель даёт 331,3 м/с. Приближённый сухой воздух с фиксированными газовыми параметрами. Влажность и состав могут менять скорость; общей гарантии «меньше 1%» нет. В воде, стали и неоднородной атмосфере нужна другая модель. Оценка расстояния по грому не устанавливает безопасную дистанцию до молнии."
      },
      {
        "q": "Влияет ли влажность?",
        "a": "Приближённый сухой воздух с фиксированными газовыми параметрами. Влажность и состав могут менять скорость; общей гарантии «меньше 1%» нет. В воде, стали и неоднородной атмосфере нужна другая модель. Оценка расстояния по грому не устанавливает безопасную дистанцию до молнии."
      },
      {
        "q": "Какая скорость звука в воде и в стали?",
        "a": "Около 1500 м/с в воде и около 5900 м/с в стали — в разы больше, чем в воздухе, потому что эти среды гораздо менее сжимаемы. Этот расчёт для них неприменим."
      }
    ],
    "disclaimer": "Приближённый сухой воздух с фиксированными газовыми параметрами. Влажность и состав могут менять скорость; общей гарантии «меньше 1%» нет. В воде, стали и неоднородной атмосфере нужна другая модель. Оценка расстояния по грому не устанавливает безопасную дистанцию до молнии."
  },
  "en": {
    "longDescription": "Estimate sound speed in dry air for −80 to 80 °C. Additional rows convert to km/h and show time over 1 km and distance in 3 seconds. This assumes a uniform medium, not a ray path through wind and temperature layers.",
    "howToUse": [
      "Enter air temperature, not the source temperature.",
      "Distinguish speed relative to the medium from ground-relative speed in wind.",
      "At constant speed distance=c·time; display rounding does not change the underlying calculation."
    ],
    "howItWorks": "c=331.3√(1+t/273.15) m/s is the stated approximation at fixed composition and heat-capacity ratio. Thus km/h=3.6 c, time over 1 km=1000/c s and distance in 3 s=3 c m.",
    "example": "At 20 °C the model gives 343.21 m/s,1235.57 km/h, about 2.914 s over 1 km and 1029.64 m in 3 s. At 0 °C it returns 331.3 m/s.",
    "faq": [
      {
        "q": "Why does pressure not affect the speed of sound?",
        "a": "c=331.3√(1+t/273.15) m/s is the stated approximation at fixed composition and heat-capacity ratio. Thus km/h=3.6 c, time over 1 km=1000/c s and distance in 3 s=3 c m."
      },
      {
        "q": "Why divide the distance to a storm by three?",
        "a": "At 20 °C the model gives 343.21 m/s,1235.57 km/h, about 2.914 s over 1 km and 1029.64 m in 3 s. At 0 °C it returns 331.3 m/s. Approximate dry air with fixed gas parameters. Humidity and composition can change sound speed; there is no universal “under 1%” guarantee. Water, steel and nonuniform air need another model. Thunder-delay distance does not establish a safe lightning distance."
      },
      {
        "q": "Does humidity matter?",
        "a": "Approximate dry air with fixed gas parameters. Humidity and composition can change sound speed; there is no universal “under 1%” guarantee. Water, steel and nonuniform air need another model. Thunder-delay distance does not establish a safe lightning distance."
      },
      {
        "q": "What about water and steel?",
        "a": "About 1500 m/s in water and about 5900 m/s in steel — many times faster than in air, because those media are far less compressible. This calculation does not apply to them."
      }
    ],
    "disclaimer": "Approximate dry air with fixed gas parameters. Humidity and composition can change sound speed; there is no universal “under 1%” guarantee. Water, steel and nonuniform air need another model. Thunder-delay distance does not establish a safe lightning distance."
  },
  "uk": {
    "longDescription": "Оцініть швидкість звуку в сухому повітрі за −80…80 °C. Інші рядки переводять у км/год і показують час на 1 км та шлях за 3 секунди. Це однорідне середовище, не акустична траса з вітром і температурними шарами.",
    "howToUse": [
      "Введіть температуру повітря, не джерела звуку.",
      "Розрізняйте швидкість відносно середовища й землі за вітру.",
      "За сталої швидкості шлях=c·час; округлення рядка не змінює вихідний розрахунок."
    ],
    "howItWorks": "c=331,3√(1+t/273,15) м/с — задане наближення за сталих складу газу й відношення теплоємностей. Тому км/год=3,6 c, час 1 км=1000/c с, шлях за 3 с=3 c м.",
    "example": "За 20 °C модель дає 343,21 м/с,1235,57 км/год, близько 2,914 с на 1 км і 1029,64 м за 3 с. За 0 °C отримуємо 331,3 м/с.",
    "faq": [
      {
        "q": "Чому тиск не впливає на швидкість звуку?",
        "a": "c=331,3√(1+t/273,15) м/с — задане наближення за сталих складу газу й відношення теплоємностей. Тому км/год=3,6 c, час 1 км=1000/c с, шлях за 3 с=3 c м."
      },
      {
        "q": "Як швидко порахувати відстань до блискавки?",
        "a": "За 20 °C модель дає 343,21 м/с,1235,57 км/год, близько 2,914 с на 1 км і 1029,64 м за 3 с. За 0 °C отримуємо 331,3 м/с. Наближене сухе повітря зі сталими газовими параметрами. Вологість і склад можуть змінити швидкість; загальної гарантії «менше 1%» немає. Для води, сталі й неоднорідної атмосфери потрібна інша модель. Відстань за громом не визначає безпечну дистанцію до блискавки."
      },
      {
        "q": "Чи впливає вологість?",
        "a": "Наближене сухе повітря зі сталими газовими параметрами. Вологість і склад можуть змінити швидкість; загальної гарантії «менше 1%» немає. Для води, сталі й неоднорідної атмосфери потрібна інша модель. Відстань за громом не визначає безпечну дистанцію до блискавки."
      },
      {
        "q": "Чому в літаках говорять про Мах, а не про км/год?",
        "a": "Число Маха дорівнює швидкості відносно повітря, поділеній на місцеву швидкість звуку. Шляхова швидкість відносно землі за вітру не є тією самою величиною. Цей калькулятор визначає лише знаменник — модельну швидкість звуку."
      }
    ],
    "disclaimer": "Наближене сухе повітря зі сталими газовими параметрами. Вологість і склад можуть змінити швидкість; загальної гарантії «менше 1%» немає. Для води, сталі й неоднорідної атмосфери потрібна інша модель. Відстань за громом не визначає безпечну дистанцію до блискавки."
  },
  "de": {
    "longDescription": "Schätze die Schallgeschwindigkeit in trockener Luft bei −80 bis 80 °C. Zusatzzeilen zeigen km/h, Zeit für 1 km und Weg in 3 Sekunden. Angenommen wird ein homogenes Medium, kein Schallweg mit Wind und Temperaturschichten.",
    "howToUse": [
      "Gib Lufttemperatur ein, nicht Quellentemperatur.",
      "Unterscheide bei Wind Geschwindigkeit relativ zum Medium und Boden.",
      "Bei konstanter Geschwindigkeit gilt Weg=c·Zeit; Anzeigerundung ändert die Rechnung nicht."
    ],
    "howItWorks": "c=331,3√(1+t/273,15) m/s ist die Näherung bei fester Gaszusammensetzung und konstantem Wärmekapazitätsverhältnis. km/h=3,6 c, Zeit für 1 km=1000/c s und Weg in 3 s=3 c m.",
    "example": "Bei 20 °C:343,21 m/s,1235,57 km/h, etwa 2,914 s für 1 km und 1029,64 m in 3 s. Bei 0 °C sind es 331,3 m/s.",
    "faq": [
      {
        "q": "Warum wirkt sich der Druck nicht auf die Schallgeschwindigkeit aus?",
        "a": "c=331,3√(1+t/273,15) m/s ist die Näherung bei fester Gaszusammensetzung und konstantem Wärmekapazitätsverhältnis. km/h=3,6 c, Zeit für 1 km=1000/c s und Weg in 3 s=3 c m."
      },
      {
        "q": "Warum die Entfernung zum Gewitter durch drei teilen?",
        "a": "Bei 20 °C:343,21 m/s,1235,57 km/h, etwa 2,914 s für 1 km und 1029,64 m in 3 s. Bei 0 °C sind es 331,3 m/s. Angenäherte trockene Luft mit festen Gasparametern. Feuchte und Zusammensetzung können die Geschwindigkeit verändern; es gibt keine allgemeine Zusage „unter 1%“. Wasser, Stahl und inhomogene Luft brauchen andere Modelle. Entfernung aus Donnerverzögerung legt keinen sicheren Blitzabstand fest."
      },
      {
        "q": "Spielt die Luftfeuchte eine Rolle?",
        "a": "Angenäherte trockene Luft mit festen Gasparametern. Feuchte und Zusammensetzung können die Geschwindigkeit verändern; es gibt keine allgemeine Zusage „unter 1%“. Wasser, Stahl und inhomogene Luft brauchen andere Modelle. Entfernung aus Donnerverzögerung legt keinen sicheren Blitzabstand fest."
      },
      {
        "q": "Und in Wasser und Stahl?",
        "a": "Rund 1500 m/s in Wasser und rund 5900 m/s in Stahl — ein Mehrfaches der Luft, weil diese Medien weit weniger zusammendrückbar sind. Diese Rechnung gilt für sie nicht."
      }
    ],
    "disclaimer": "Angenäherte trockene Luft mit festen Gasparametern. Feuchte und Zusammensetzung können die Geschwindigkeit verändern; es gibt keine allgemeine Zusage „unter 1%“. Wasser, Stahl und inhomogene Luft brauchen andere Modelle. Entfernung aus Donnerverzögerung legt keinen sicheren Blitzabstand fest."
  },
  "es": {
    "longDescription": "Estima sonido en aire seco entre −80 y 80 °C. Las filas adicionales dan km/h, tiempo para 1 km y distancia en 3 segundos. Se supone medio uniforme, no una trayectoria acústica con viento y capas térmicas.",
    "howToUse": [
      "Introduce temperatura del aire, no de la fuente.",
      "Distingue velocidad respecto al medio y al suelo con viento.",
      "A velocidad constante distancia=c·tiempo; el redondeo mostrado no cambia el cálculo."
    ],
    "howItWorks": "c=331,3√(1+t/273,15) m/s es la aproximación con composición y razón de capacidades fijas. km/h=3,6 c, tiempo de 1 km=1000/c s y distancia en 3 s=3 c m.",
    "example": "A 20 °C:343,21 m/s,1235,57 km/h, unos 2,914 s para 1 km y 1029,64 m en 3 s. A 0 °C devuelve 331,3 m/s.",
    "faq": [
      {
        "q": "¿Por qué la presión no afecta a la velocidad del sonido?",
        "a": "c=331,3√(1+t/273,15) m/s es la aproximación con composición y razón de capacidades fijas. km/h=3,6 c, tiempo de 1 km=1000/c s y distancia en 3 s=3 c m."
      },
      {
        "q": "¿Por qué se divide entre tres la distancia a una tormenta?",
        "a": "A 20 °C:343,21 m/s,1235,57 km/h, unos 2,914 s para 1 km y 1029,64 m en 3 s. A 0 °C devuelve 331,3 m/s. Aire seco aproximado con parámetros fijos. Humedad y composición pueden cambiar la velocidad; no hay garantía universal «menos del 1%». Agua, acero y atmósfera no uniforme necesitan otra modelo. La distancia por retraso del trueno no establece distancia segura de rayos."
      },
      {
        "q": "¿Importa la humedad?",
        "a": "Aire seco aproximado con parámetros fijos. Humedad y composición pueden cambiar la velocidad; no hay garantía universal «menos del 1%». Agua, acero y atmósfera no uniforme necesitan otra modelo. La distancia por retraso del trueno no establece distancia segura de rayos."
      },
      {
        "q": "¿Y el agua y el acero?",
        "a": "Unos 1500 m/s en el agua y unos 5900 m/s en el acero: muchas veces más rápido que en el aire, porque esos medios son mucho menos compresibles. Este cálculo no se les aplica."
      }
    ],
    "disclaimer": "Aire seco aproximado con parámetros fijos. Humedad y composición pueden cambiar la velocidad; no hay garantía universal «menos del 1%». Agua, acero y atmósfera no uniforme necesitan otro modelo. La distancia por retraso del trueno no establece distancia segura de rayos."
  }
};
