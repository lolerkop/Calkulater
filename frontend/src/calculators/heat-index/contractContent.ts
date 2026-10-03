// Individually reviewed against all five actual188 native bodies; human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Посчитайте девятичленную регрессию Ротфуша и её прибавку к температуре. Это именно регрессия без низковлажной и высоковлажной поправок и без предварительной ветви полного алгоритма NWS. Категория привязана к индексу в °F; она не оценивает состояние конкретного человека.",
    "howToUse": [
      "Введите температуру воздуха в тени и одновременно измеренную RH.",
      "Сравните прибавку с термометром; индекс может быть ниже температуры для некоторых сочетаний.",
      "Уточняйте, использует ли другое приложение полные поправки NWS: совпадение чисел не гарантируется."
    ],
    "howItWorks": "T=1,8 t+32 °F; HI=−42,379+2,04901523 T+10,14333127 RH −0,22475541 T·RH −0,00683783 T²−0,05481717 RH²+0,00122874 T²RH+0,00085282 T·RH²−0,00000199 T²RH². Итог °C=(HI −32)/1,8. Шкала категорий начинается с 80,90,103 и 125 °F.",
    "example": "Для 32 °C и 70% RH регрессия даёт≈40,409 °C или 104,736 °F: категория «опасность», поскольку индекс≥103 °F. Это не эквивалент 40 °C в совершенно сухом воздухе и не измеренная температура тела.",
    "faq": [
      {
        "q": "Почему влажность так сильно меняет ощущение?",
        "a": "Потому что тело охлаждается испарением пота. Во влажном воздухе пот испаряется хуже, теплоотвод падает, и та же температура переносится тяжелее."
      },
      {
        "q": "Почему расчёт отказывается работать ниже 26,7 °C?",
        "a": "Границы формы: t 20–60 °C, RH 0–100%, ветвь T≥80 °F. Они не подтверждают точность регрессии для всех крайних сочетаний; NWS отдельно предупреждает об экстраполяции. Солнце, ветер, нагрузка, одежда и индивидуальный риск не вводятся. Для действий используйте официальные предупреждения о жаре."
      },
      {
        "q": "Чем индекс жары отличается от ветрового охлаждения?",
        "a": "Это противоположные области. Индекс жары описывает зной с влажностью, ветровое охлаждение — мороз с ветром."
      },
      {
        "q": "Где мерить температуру?",
        "a": "Введите температуру воздуха в тени и одновременно измеренную RH. Границы формы: t 20–60 °C, RH 0–100%, ветвь T≥80 °F. Они не подтверждают точность регрессии для всех крайних сочетаний; NWS отдельно предупреждает об экстраполяции. Солнце, ветер, нагрузка, одежда и индивидуальный риск не вводятся. Для действий используйте официальные предупреждения о жаре."
      }
    ],
    "disclaimer": "Границы формы: t 20–60 °C, RH 0–100%, ветвь T≥80 °F. Они не подтверждают точность регрессии для всех крайних сочетаний; NWS отдельно предупреждает об экстраполяции. Солнце, ветер, нагрузка, одежда и индивидуальный риск не вводятся. Для действий используйте официальные предупреждения о жаре."
  },
  "en": {
    "longDescription": "Calculate the nine-term Rothfusz regression and its difference from air temperature. This is the unadjusted regression, without low/high-humidity corrections or the full NWS algorithm’s preliminary branch. Categories use the index in °F and do not assess an individual person.",
    "howToUse": [
      "Enter shaded air temperature and RH measured at the same time.",
      "Read the difference from the thermometer; some combinations give a lower index.",
      "Check whether another application uses all NWS adjustments: identical numbers are not guaranteed."
    ],
    "howItWorks": "T=1.8 t+32 °F; HI=−42.379+2.04901523 T+10.14333127 RH −0.22475541 T·RH −0.00683783 T²−0.05481717 RH²+0.00122874 T²RH+0.00085282 T·RH²−0.00000199 T²RH². Celsius=(HI −32)/1.8. Category thresholds are 80,90,103 and 125 °F.",
    "example": "For 32 °C and 70% RH the regression gives≈40.409 °C or 104.736 °F: “danger”, since the index is≥103 °F. This does not mean 40 °C in completely dry air or a measured body temperature.",
    "faq": [
      {
        "q": "Why does humidity change the sensation so much?",
        "a": "Because the body cools by evaporating sweat. In damp air the sweat evaporates poorly, heat loss drops, and the same temperature becomes far harder to bear."
      },
      {
        "q": "Why does it refuse below 26.7 °C?",
        "a": "Form bounds: t 20–60 °C,RH 0–100%, branch T≥80 °F. They do not validate every extreme combination; NWS warns about extrapolation. Sun, wind, activity, clothing and individual risk are not entered. Use official heat warnings for decisions."
      },
      {
        "q": "How does the heat index differ from wind chill?",
        "a": "They cover opposite conditions. The heat index describes heat with humidity; wind chill describes cold with wind."
      },
      {
        "q": "Where should the temperature be measured?",
        "a": "Enter shaded air temperature and RH measured at the same time. Form bounds: t 20–60 °C,RH 0–100%, branch T≥80 °F. They do not validate every extreme combination; NWS warns about extrapolation. Sun, wind, activity, clothing and individual risk are not entered. Use official heat warnings for decisions."
      }
    ],
    "disclaimer": "Form bounds: t 20–60 °C,RH 0–100%, branch T≥80 °F. They do not validate every extreme combination; NWS warns about extrapolation. Sun, wind, activity, clothing and individual risk are not entered. Use official heat warnings for decisions."
  },
  "uk": {
    "longDescription": "Обчисліть дев’ятичленну регресію Ротфуша й різницю з температурою. Це регресія без поправок низької/високої вологості та без попередньої гілки повного алгоритму NWS. Категорія визначається індексом у °F, не станом конкретної людини.",
    "howToUse": [
      "Введіть температуру повітря в затінку та одночасно виміряну RH.",
      "Перегляньте різницю з термометром: деякі поєднання дають нижчий індекс.",
      "Перевірте, чи інша програма застосовує всі поправки NWS: однакові числа не гарантовано."
    ],
    "howItWorks": "T=1,8 t+32 °F; HI=−42,379+2,04901523 T+10,14333127 RH −0,22475541 T·RH −0,00683783 T²−0,05481717 RH²+0,00122874 T²RH+0,00085282 T·RH²−0,00000199 T²RH². °C=(HI −32)/1,8. Межі категорій:80,90,103 і 125 °F.",
    "example": "За 32 °C і 70% RH регресія дає≈40,409 °C або 104,736 °F: «небезпека», бо індекс≥103 °F. Це не еквівалент 40 °C у цілком сухому повітрі та не виміряна температура тіла.",
    "faq": [
      {
        "q": "Чому вологість посилює спеку?",
        "a": "Бо тіло охолоджується випаровуванням поту, а у вологому повітрі випаровування сповільнюється. Піт стікає, не забираючи тепла, і перегрів настає швидше."
      },
      {
        "q": "Від якої температури формула працює?",
        "a": "Межі форми: t 20–60 °C,RH 0–100%, гілка T≥80 °F. Вони не підтверджують точність усіх крайніх поєднань; NWS застерігає щодо екстраполяції. Сонце, вітер, навантаження, одяг і особистий ризик не задано. Для дій використовуйте офіційні попередження про спеку."
      },
      {
        "q": "Чи враховано сонце й вітер?",
        "a": "Сонце й вітер не вводяться. Фіксована добавка 8 °C і твердження, що вітер завжди допомагає, не випливають із цієї регресії. Для реальних умов використовуйте місцеві попередження, а не переносіть індекс на будь-яке навантаження."
      },
      {
        "q": "Що робити за високого індексу?",
        "a": "Введіть температуру повітря в затінку та одночасно виміряну RH. Межі форми: t 20–60 °C,RH 0–100%, гілка T≥80 °F. Вони не підтверджують точність усіх крайніх поєднань; NWS застерігає щодо екстраполяції. Сонце, вітер, навантаження, одяг і особистий ризик не задано. Для дій використовуйте офіційні попередження про спеку."
      }
    ],
    "disclaimer": "Межі форми: t 20–60 °C,RH 0–100%, гілка T≥80 °F. Вони не підтверджують точність усіх крайніх поєднань; NWS застерігає щодо екстраполяції. Сонце, вітер, навантаження, одяг і особистий ризик не задано. Для дій використовуйте офіційні попередження про спеку."
  },
  "de": {
    "longDescription": "Berechne die neungliedrige Rothfusz-Regression und die Differenz zur Lufttemperatur. Es fehlen Korrekturen für niedrige/hohe Feuchte und der Vorzweig des vollständigen NWS-Algorithmus. Kategorien beziehen sich auf den Index in °F und bewerten keine einzelne Person.",
    "howToUse": [
      "Gib Lufttemperatur im Schatten und gleichzeitig gemessene RH ein.",
      "Lies die Differenz zum Thermometer; manche Kombinationen liefern einen niedrigeren Index.",
      "Prüfe, ob andere Anwendungen sämtliche NWS-Korrekturen verwenden; Zahlen müssen nicht übereinstimmen."
    ],
    "howItWorks": "T=1,8 t+32 °F; HI=−42,379+2,04901523 T+10,14333127 RH −0,22475541 T·RH −0,00683783 T²−0,05481717 RH²+0,00122874 T²RH+0,00085282 T·RH²−0,00000199 T²RH². Celsius=(HI −32)/1,8. Kategoriengrenzen:80,90,103 und 125 °F.",
    "example": "Bei 32 °C und 70% RH ergeben sich≈40,409 °C oder 104,736 °F: „Gefahr“, da der Index≥103 °F ist. Dies bedeutet weder 40 °C in völlig trockener Luft noch gemessene Körpertemperatur.",
    "faq": [
      {
        "q": "Warum ändert die Feuchte die Empfindung so stark?",
        "a": "Weil der Körper durch verdunstenden Schweiß kühlt. In feuchter Luft verdunstet der Schweiß schlecht, die Wärmeabgabe fällt, und dieselbe Temperatur wird weit schwerer erträglich."
      },
      {
        "q": "Warum verweigert er unter 26,7 °C?",
        "a": "Formulargrenzen: t 20–60 °C,RH 0–100%, Zweig T≥80 °F. Sie validieren nicht alle Extremkombinationen; NWS warnt vor Extrapolation. Sonne, Wind, Aktivität, Kleidung und persönliches Risiko fehlen. Entscheidungen sollten amtliche Hitzewarnungen berücksichtigen."
      },
      {
        "q": "Wie unterscheidet sich der Hitzeindex vom Windchill?",
        "a": "Sie decken entgegengesetzte Bedingungen ab. Der Hitzeindex beschreibt Hitze mit Feuchte; der Windchill beschreibt Kälte mit Wind."
      },
      {
        "q": "Wo soll die Temperatur gemessen werden?",
        "a": "Gib Lufttemperatur im Schatten und gleichzeitig gemessene RH ein. Formulargrenzen: t 20–60 °C,RH 0–100%, Zweig T≥80 °F. Sie validieren nicht alle Extremkombinationen; NWS warnt vor Extrapolation. Sonne, Wind, Aktivität, Kleidung und persönliches Risiko fehlen. Entscheidungen sollten amtliche Hitzewarnungen berücksichtigen."
      }
    ],
    "disclaimer": "Formulargrenzen: t 20–60 °C,RH 0–100%, Zweig T≥80 °F. Sie validieren nicht alle Extremkombinationen; NWS warnt vor Extrapolation. Sonne, Wind, Aktivität, Kleidung und persönliches Risiko fehlen. Entscheidungen sollten amtliche Hitzewarnungen berücksichtigen."
  },
  "es": {
    "longDescription": "Calcula la regresión de Rothfusz de nueve términos y su diferencia con el aire. No incluye ajustes de humedad baja/alta ni la rama preliminar del algoritmo NWS completo. Las categorías usan el índice en °F, no evalúan a una persona.",
    "howToUse": [
      "Introduce temperatura del aire a la sombra y RH medida simultáneamente.",
      "Lee la diferencia con el termómetro; ciertas combinaciones dan índice menor.",
      "Comprueba si otra aplicación aplica todos los ajustes NWS; no se garantizan cifras iguales."
    ],
    "howItWorks": "T=1,8 t+32 °F; HI=−42,379+2,04901523 T+10,14333127 RH −0,22475541 T·RH −0,00683783 T²−0,05481717 RH²+0,00122874 T²RH+0,00085282 T·RH²−0,00000199 T²RH². Celsius=(HI −32)/1,8. Umbrales:80,90,103 y 125 °F.",
    "example": "Con 32 °C y 70% RH se obtienen≈40,409 °C o 104,736 °F: «peligro», por ser≥103 °F. No equivale a 40 °C en aire totalmente seco ni es temperatura corporal medida.",
    "faq": [
      {
        "q": "¿Por qué la humedad cambia tanto la sensación?",
        "a": "Porque el cuerpo se enfría evaporando sudor. En aire húmedo el sudor se evapora mal, la pérdida de calor baja y la misma temperatura se vuelve mucho más difícil de soportar."
      },
      {
        "q": "¿Por qué se niega por debajo de 26,7 °C?",
        "a": "Límites del formulario: t 20–60 °C,RH 0–100%, rama T≥80 °F. No validan todas las combinaciones extremas; NWS advierte de extrapolación. No se introducen sol, viento, esfuerzo, ropa ni riesgo individual. Usa avisos oficiales de calor para decisiones."
      },
      {
        "q": "¿En qué se diferencia del factor de sensación por viento?",
        "a": "Cubren condiciones opuestas. El índice de calor describe el calor con humedad; la sensación por viento describe el frío con viento."
      },
      {
        "q": "¿Dónde debe medirse la temperatura?",
        "a": "Introduce temperatura del aire a la sombra y RH medida simultáneamente. Límites del formulario: t 20–60 °C,RH 0–100%, rama T≥80 °F. No validan todas las combinaciones extremas; NWS advierte de extrapolación. No se introducen sol, viento, esfuerzo, ropa ni riesgo individual. Usa avisos oficiales de calor para decisiones."
      }
    ],
    "disclaimer": "Límites del formulario: t 20–60 °C,RH 0–100%, rama T≥80 °F. No validan todas las combinaciones extremas; NWS advierte de extrapolación. No se introducen sol, viento, esfuerzo, ropa ni riesgo individual. Usa avisos oficiales de calor para decisiones."
  }
};
