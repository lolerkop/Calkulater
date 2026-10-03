// Individually reviewed subject contract; human review pending.
export const contract = {
  "ru": {
    "longDescription": "Оцените индекс ветрового охлаждения по округлённой метрической формуле с температурой воздуха и ветром в км/ч. Индекс описывает модель теплоотдачи, а не новую температуру воздуха, конкретного человека или предмета.",
    "howToUse": [
      "Преобразуйте м/с в км/ч умножением на 3,6.",
      "Сравнивайте данные с одинаковой высотой измерения ветра; исходная модель использует стандартный ветер на 10 м.",
      "Для фактического риска используйте предупреждения метеослужбы, не одно число индекса."
    ],
    "howItWorks": "WC=13,12+0,6215 t −11,37 v^0,16+0,3965 t·v^0,16, t в °C, v в км/ч. Разница=WC −t. Для °F используется 1,8 WC+32. Увеличение ветра не даёт линейного увеличения эффекта, поскольку показатель степени 0,16.",
    "example": "Для −10 °C и 20 км/ч получаются WC≈−17,861 °C и разница≈−7,861 °C. При граничных 10 °C и 4,8 км/ч модель возвращает≈9,817 °C. Эти числа не означают, что предмет остынет доWC.",
    "faq": [
      {
        "q": "Ветер правда понижает температуру?",
        "a": "Нет. Термометр показывает ту же температуру при любом ветре. Ветер сносит прогретый слой воздуха у кожи, и тело теряет тепло быстрее — меняется скорость теплоотдачи, а не температура воздуха."
      },
      {
        "q": "Почему расчёт отказывает при +15 °C?",
        "a": "Сохранённые границы продукта: t≤10 °C и v≥4,8 км/ч, t выше абсолютного нуля.4,8 км/ч — округлённая граница, не точный перевод 3 миль/ч (4,828032 км/ч); NWS указывает ветер выше 3 миль/ч. Индекс не предсказывает время обморожения, одежду или личную переносимость."
      },
      {
        "q": "Замёрзнет ли машина сильнее при ветре?",
        "a": "Оцените индекс ветрового охлаждения по округлённой метрической формуле с температурой воздуха и ветром в км/ч. Индекс описывает модель теплоотдачи, а не новую температуру воздуха, конкретного человека или предмета. Ветер сам по себе не охлаждает предмет ниже воздуха; испарение и излучение — другие механизмы, здесь не учтённые."
      },
      {
        "q": "Почему у метеослужб бывает другое число?",
        "a": "Метеослужба может использовать другую формулу, пороги, высоту измерения, единицы или округление. Сравнивайте одинаковые входные условия; один лишь год старой формулы не объясняет все различия."
      }
    ],
    "disclaimer": "Сохранённые границы продукта: t≤10 °C и v≥4,8 км/ч, t выше абсолютного нуля.4,8 км/ч — округлённая граница, не точный перевод 3 миль/ч (4,828032 км/ч); NWS указывает ветер выше 3 миль/ч. Индекс не предсказывает время обморожения, одежду или личную переносимость."
  },
  "en": {
    "longDescription": "Estimate wind chill with the rounded metric formula using air temperature and wind in km/h. The index describes a heat-loss model, not a new air temperature or a particular person’s or object’s temperature.",
    "howToUse": [
      "Convert m/s to km/h by multiplying by 3.6.",
      "Compare wind measured at the same height; the original model uses standard 10 m wind.",
      "For actual risk use weather-service warnings, not the index alone."
    ],
    "howItWorks": "WC=13.12+0.6215 t −11.37 v^0.16+0.3965 t·v^0.16, t in °C,v in km/h. Difference=WC −t; °F=1.8 WC+32. Increasing wind is not a linear increase in the effect, since the exponent is 0.16.",
    "example": "For −10 °C and 20 km/h: WC≈−17.861 °C and difference≈−7.861 °C. At the product boundaries 10 °C and 4.8 km/h it returns≈9.817 °C. These values do not mean an object cools to WC.",
    "faq": [
      {
        "q": "Does wind actually lower the temperature?",
        "a": "No. The thermometer reads the same at any wind speed. Wind strips the warmed layer of air from the skin so the body loses heat faster — what changes is the rate of heat loss, not the air temperature."
      },
      {
        "q": "Why does it decline at +15 °C?",
        "a": "Preserved product bounds: t≤10 °C,v≥4.8 km/h and t above absolute zero.4.8 km/h is rounded, not the exact 3 mph conversion (4.828032 km/h); NWS specifies wind above 3 mph. The index does not predict frostbite time, clothing or individual tolerance."
      },
      {
        "q": "Will a car freeze harder in wind?",
        "a": "Estimate wind chill with the rounded metric formula using air temperature and wind in km/h. The index describes a heat-loss model, not a new air temperature or a particular person’s or object’s temperature. Wind alone does not cool an object below the air; evaporation and radiation are different mechanisms not included here."
      },
      {
        "q": "Why do some services quote a different number?",
        "a": "Weather services may differ in formula, thresholds, measurement height, units or rounding. Compare identical input conditions; the age of a formula alone does not explain every difference."
      }
    ],
    "disclaimer": "Preserved product bounds: t≤10 °C,v≥4.8 km/h and t above absolute zero.4.8 km/h is rounded, not the exact 3 mph conversion (4.828032 km/h); NWS specifies wind above 3 mph. The index does not predict frostbite time, clothing or individual tolerance."
  },
  "uk": {
    "longDescription": "Оцініть індекс вітрового охолодження за округленою метричною формулою з температурою повітря й вітром у км/год. Індекс описує модель тепловіддачі, не нову температуру повітря чи конкретної людини або предмета.",
    "howToUse": [
      "Переведіть м/с у км/год множенням на 3,6.",
      "Порівнюйте вітер на однаковій висоті вимірювання; початкова модель використовує стандартний вітер на 10 м.",
      "Для фактичного ризику використовуйте попередження метеослужби, не лише індекс."
    ],
    "howItWorks": "WC=13,12+0,6215 t −11,37 v^0,16+0,3965 t·v^0,16, t у °C,v у км/год. Різниця=WC −t; °F=1,8 WC+32. Зростання вітру не дає лінійного ефекту, бо показник степеня 0,16.",
    "example": "Для −10 °C і 20 км/год: WC≈−17,861 °C, різниця≈−7,861 °C. На межах продукту 10 °C і 4,8 км/год отримуємо≈9,817 °C. Це не означає охолодження предмета доWC.",
    "faq": [
      {
        "q": "Чи справді вітер знижує температуру?",
        "a": "Вітер сам по собі прискорює наближення температури предмета до температури повітря, а не задає нижчу температуру. Випаровування чи випромінювання можуть змінити баланс; вони тут не моделюються."
      },
      {
        "q": "Чому формула не працює вище за 10 °C?",
        "a": "Збережені межі продукту: t≤10 °C,v≥4,8 км/год,t вище абсолютного нуля.4,8 км/год є округленням, не точним переводом 3 миль/год (4,828032 км/год); NWS указує вітер понад 3 милі/год. Індекс не прогнозує час обмороження, одяг чи особисту переносимість."
      },
      {
        "q": "Чому подвоєння вітру не подвоює ефект?",
        "a": "Вітер входить у степені 0,16, а не лінійно. Його подвоєння множить цей доданок на 2^0,16≈1,117, але не подвоює загальний індекс або різницю з температурою. Модель не має різкої межі «після 20 км/год ефект зникає»."
      },
      {
        "q": "Чи впливає це на техніку?",
        "a": "Для техніки вітер змінює швидкість теплообміну. Сам вітер не задає кінцеву температуру нижче повітря; випаровування й випромінювання можуть змінити баланс, але індекс їх не моделює."
      }
    ],
    "disclaimer": "Збережені межі продукту: t≤10 °C,v≥4,8 км/год,t вище абсолютного нуля.4,8 км/год є округленням, не точним переводом 3 миль/год (4,828032 км/год); NWS указує вітер понад 3 милі/год. Індекс не прогнозує час обмороження, одяг чи особисту переносимість."
  },
  "de": {
    "longDescription": "Schätze Windchill mit der gerundeten metrischen Formel aus Lufttemperatur und Wind in km/h. Der Index beschreibt ein Wärmeverlustmodell, keine neue Lufttemperatur oder Temperatur einer bestimmten Person oder eines Gegenstands.",
    "howToUse": [
      "Wandle m/s durch Multiplikation mit 3,6 in km/h um.",
      "Vergleiche Windmessungen gleicher Höhe; das Ursprungsmodell nutzt Standardwind auf 10 m.",
      "Für tatsächliches Risiko dienen Wetterdienstwarnungen, nicht nur der Index."
    ],
    "howItWorks": "WC=13,12+0,6215 t −11,37 v^0,16+0,3965 t·v^0,16, t in °C,v in km/h. Differenz=WC −t; °F=1,8 WC+32. Der Effekt wächst wegen des Exponenten 0,16 nicht linear mit dem Wind.",
    "example": "Für −10 °C und 20 km/h: WC≈−17,861 °C, Differenz≈−7,861 °C. An den Produktgrenzen 10 °C und 4,8 km/h ergibt sich≈9,817 °C. Ein Gegenstand kühlt dadurch nicht auf WC ab.",
    "faq": [
      {
        "q": "Senkt Wind tatsächlich die Temperatur?",
        "a": "Nein. Das Thermometer zeigt bei jeder Windgeschwindigkeit dasselbe. Der Wind reißt die erwärmte Luftschicht von der Haut fort, sodass der Körper schneller Wärme verliert — es ändert sich die Rate des Wärmeverlusts und nicht die Lufttemperatur."
      },
      {
        "q": "Warum verweigert er bei +15 °C?",
        "a": "Erhaltene Produktgrenzen: t≤10 °C,v≥4,8 km/h,t über dem absoluten Nullpunkt.4,8 km/h ist gerundet, nicht die exakte Umrechnung von 3 mph (4,828032 km/h); NWS nennt Wind über 3 mph. Der Index prognostiziert weder Erfrierungszeit noch Kleidung oder individuelle Verträglichkeit."
      },
      {
        "q": "Friert ein Auto im Wind stärker durch?",
        "a": "Schätze Windchill mit der gerundeten metrischen Formel aus Lufttemperatur und Wind in km/h. Der Index beschreibt ein Wärmeverlustmodell, keine neue Lufttemperatur oder Temperatur einer bestimmten Person oder eines Gegenstands. Wind allein kühlt einen Gegenstand nicht unter die Lufttemperatur; Verdunstung und Strahlung sind andere, hier fehlende Mechanismen."
      },
      {
        "q": "Warum nennen manche Dienste eine andere Zahl?",
        "a": "Wetterdienste können Formel, Schwellen, Messhöhe, Einheiten oder Rundung anders wählen. Vergleiche gleiche Eingabebedingungen; allein ein früheres Formeljahr erklärt nicht alle Unterschiede."
      }
    ],
    "disclaimer": "Erhaltene Produktgrenzen: t≤10 °C,v≥4,8 km/h,t über dem absoluten Nullpunkt.4,8 km/h ist gerundet, nicht die exakte Umrechnung von 3 mph (4,828032 km/h); NWS nennt Wind über 3 mph. Der Index prognostiziert weder Erfrierungszeit noch Kleidung oder individuelle Verträglichkeit."
  },
  "es": {
    "longDescription": "Estima enfriamiento por viento con la fórmula métrica redondeada, temperatura del aire y viento en km/h. El índice describe pérdida de calor modelada, no nueva temperatura del aire ni de una persona u objeto concreto.",
    "howToUse": [
      "Convierte m/s a km/h multiplicando por 3,6.",
      "Compara viento medido a igual altura; el modelo original usa viento estándar a 10 m.",
      "Para riesgo real usa avisos meteorológicos, no solo el índice."
    ],
    "howItWorks": "WC=13,12+0,6215 t −11,37 v^0,16+0,3965 t·v^0,16, t en °C,v en km/h. Diferencia=WC −t; °F=1,8 WC+32. El efecto no crece linealmente con el viento por el exponente 0,16.",
    "example": "Para −10 °C y 20 km/h: WC≈−17,861 °C, diferencia≈−7,861 °C. En los límites del producto 10 °C y 4,8 km/h da≈9,817 °C. No significa que un objeto se enfríe hasta WC.",
    "faq": [
      {
        "q": "¿El viento baja de verdad la temperatura?",
        "a": "No. El termómetro marca lo mismo con cualquier viento. El viento arranca de la piel la capa de aire templada, de modo que el cuerpo pierde calor más deprisa: lo que cambia es el ritmo de pérdida de calor, no la temperatura del aire."
      },
      {
        "q": "¿Por qué se niega a +15 °C?",
        "a": "Límites conservados: t≤10 °C,v≥4,8 km/h,t superior al cero absoluto.4,8 km/h es redondeado, no la conversión exacta de 3 mph (4,828032 km/h); NWS especifica viento superior a 3 mph. No predice tiempo de congelación, ropa ni tolerancia individual."
      },
      {
        "q": "¿Un coche se congela más con viento?",
        "a": "Estima enfriamiento por viento con la fórmula métrica redondeada, temperatura del aire y viento en km/h. El índice describe pérdida de calor modelada, no nueva temperatura del aire ni de una persona u objeto concreto. El viento por sí solo no enfría un objeto por debajo del aire; evaporación y radiación son otros mecanismos no incluidos."
      },
      {
        "q": "¿Por qué algunos servicios dan otra cifra?",
        "a": "Los servicios pueden usar otra fórmula, umbrales, altura de medida, unidades o redondeo. Compara iguales entradas; la antigüedad de la fórmula no explica toda diferencia."
      }
    ],
    "disclaimer": "Límites conservados: t≤10 °C,v≥4,8 km/h,t superior al cero absoluto.4,8 km/h es redondeado, no la conversión exacta de 3 mph (4,828032 km/h); NWS especifica viento superior a 3 mph. No predice tiempo de congelación, ropa ni tolerancia individual."
  }
};
