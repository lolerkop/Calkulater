// Individual subject copy; native human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Делит товарный запас на постоянный суточный расход: корм, крупу, топливо или расходники, а не акции. Порог в днях задаёт, при каком оставшемся сроке вы хотите сделать заказ. Если включить в него доставку и дополнительный буфер, расчёт покажет выбранный момент заказа, но не гарантирует срок поставки.",
    "howToUse": [
      "Введите имеющийся запас в удобных вам единицах.",
      "Укажите суточный расход в тех же единицах.",
      "При желании задайте страховой запас в днях.",
      "Нулевой запас допустим, суточный расход должен быть положительным. Пустой необязательный порог означает 0 дней; очень малый срок показывается без искусственного увеличения до 0,1 дня."
    ],
    "howItWorks": "Срок = запас / расход в сутки. При положительном пороге момент заказа = срок − порог; если разница отрицательна, выбранный порог уже нарушен. Нулевой запас означает 0 дней; отрицательные запас и порог недопустимы.",
    "example": "30 кг корма при расходе 2 кг в сутки хватит на 15 дней. При резерве 4 дня заказ нужен через 11 дней от текущего момента.",
    "faq": [
      {
        "q": "В каких единицах вводить запас?",
        "a": "В любых, лишь бы запас и расход были в одних и тех же. Килограммы, литры, штуки — калькулятор делит одно на другое и работает с отношением."
      },
      {
        "q": "Что такое страховой запас в днях?",
        "a": "Порог заказа — оставшийся запас в днях на момент заказа. Если он покрывает время доставки плюс желаемый остаток после неё, оба срока включают в одно число. Доставку отдельно калькулятор не прибавляет."
      },
      {
        "q": "Учитывается ли неравномерный расход?",
        "a": "Нет, расход считается постоянным. При сезонных скачках берите средний расход пикового периода, а не годовой."
      },
      {
        "q": "Речь о товарном запасе или об акциях?",
        "a": "О товарном: корм, крупа, топливо, расходники. Финансовые бумаги здесь ни при чём."
      }
    ],
    "disclaimer": "Постоянный расход в одинаковых единицах; прогноз доставки, сезонности, порчи и наличия у поставщика не выполняется."
  },
  "en": {
    "longDescription": "Divides supplies by a constant daily use: feed, grain, fuel or consumables, not shares. The threshold in days sets how much cover you want left when ordering. Include delivery time and an extra buffer if that is your plan; the result locates your chosen reorder point but does not guarantee delivery.",
    "howToUse": [
      "Enter the stock you have, in whatever unit suits you.",
      "Give the daily use in the same unit.",
      "Optionally set a safety buffer in days.",
      "Zero stock is allowed; daily use must be positive. A blank optional threshold means 0 days. Very small durations are shown without artificially raising them to 0.1 day."
    ],
    "howItWorks": "Duration = stock / daily use. With a positive threshold, reorder time = duration − threshold; a negative difference means that threshold is already breached. Zero stock means 0 days; negative stock and threshold are invalid.",
    "example": "30 kg of feed used at 2 kg a day lasts 15 days. A 4-day reorder threshold means ordering in 11 days from now.",
    "faq": [
      {
        "q": "What unit should the stock be in?",
        "a": "Any, as long as the stock and the daily use share it. Kilograms, litres, pieces — the calculator divides one by the other and works with the ratio."
      },
      {
        "q": "What is the safety buffer in days?",
        "a": "The threshold is cover remaining when you order. To cover delivery time plus a desired remainder after arrival, include both in that one number. Delivery time is not added separately."
      },
      {
        "q": "Is uneven consumption handled?",
        "a": "No, the rate is treated as constant. For seasonal peaks use the average rate of the peak period rather than the yearly one."
      },
      {
        "q": "Is this about supplies or about shares?",
        "a": "Supplies: feed, grain, fuel, consumables. Financial securities are unrelated."
      }
    ],
    "disclaimer": "Constant consumption in matching units. Delivery, seasonality, spoilage and supplier availability are not forecast."
  },
  "uk": {
    "longDescription": "Ділить товарний запас на постійну добову витрату: корм, крупу, пальне або витратні матеріали, не акції. Поріг у днях визначає бажаний залишок на момент замовлення. Доставку й додатковий буфер можна включити в цей поріг; результат не гарантує строку постачання.",
    "howToUse": [
      "Введіть поточний запас.",
      "Введіть витрату за добу.",
      "Задайте страховий запас у днях — зазвичай строк доставки плюс кілька днів.",
      "Нульовий запас допустимий, добова витрата має бути додатною. Порожній необов’язковий поріг означає 0 днів; малий строк не збільшується штучно до 0,1 дня."
    ],
    "howItWorks": "Строк = запас / витрата за добу. За додатного порога час замовлення = строк − поріг; від’ємна різниця означає, що обраний поріг уже порушений. Нульовий запас дає 0 днів; від’ємні запас і поріг недопустимі.",
    "example": "30 кг корму за витрати 2 кг на добу вистачить на 15 днів. Зі страховим запасом у 4 дні замовляти треба на одинадцятий день.",
    "faq": [
      {
        "q": "Який страховий запас закладати?",
        "a": "Поріг означає залишок у днях на момент замовлення. Щоб покрити доставку й бажаний залишок після неї, включіть обидва строки в одне число: доставка окремо не додається."
      },
      {
        "q": "Що робити з нерівномірною витратою?",
        "a": "Брати середню за кілька тижнів і збільшувати страховий запас. Для сезонних товарів середнє за рік дає хибну картину — рахувати треба за сезоном."
      },
      {
        "q": "Чи підходить це для складу?",
        "a": "Для окремої позиції за сталого споживання — так. Модель не враховує графік постачання, строк придатності чи взаємодію кількох запасів; це не повна система керування складом."
      },
      {
        "q": "Чому не замовляти впритул до нуля?",
        "a": "Поріг може дати час на доставку й затримки, якщо ви включили їх у число. Розмір буфера залежить від ситуації; модель не доводить, що запас завжди дешевший або гарантує постачання."
      }
    ],
    "disclaimer": "Постійна витрата в однакових одиницях. Строк доставки, сезонність, псування й наявність товару не прогнозуються.",
    "seoDescription": "Розрахуйте тривалість запасу за денною витратою та час до введеної межі резерву, з нульовим запасом і без прогнозу постачання."
  },
  "de": {
    "longDescription": "Teilt Vorräte durch gleichbleibenden Tagesverbrauch: Futter, Lebensmittel, Kraftstoff oder Verbrauchsmaterial, keine Aktien. Die Schwelle in Tagen beschreibt die gewünschte Restdeckung beim Bestellen. Lieferzeit und zusätzlichen Puffer können Sie darin zusammenfassen; eine Lieferzusage ergibt die Rechnung nicht.",
    "howToUse": [
      "Trage den vorhandenen Vorrat in der Einheit ein, die dir passt.",
      "Gib den Tagesverbrauch in derselben Einheit an.",
      "Setze bei Bedarf eine Sicherheitsreserve in Tagen.",
      "Vorrat 0 ist möglich, Tagesverbrauch muss positiv sein. Eine leere optionale Schwelle bedeutet 0 Tage. Sehr kurze Reichweiten werden nicht künstlich auf 0,1 Tag erhöht."
    ],
    "howItWorks": "Reichweite = Vorrat / Tagesverbrauch. Bei positiver Schwelle: Bestellzeit = Reichweite − Schwelle; ein negativer Unterschied bedeutet bereits unterschrittene Restdeckung. Vorrat 0 ergibt 0 Tage; negativer Vorrat oder Schwelle sind ungültig.",
    "example": "30 kg Futter bei einem Verbrauch von 2 kg am Tag reichen 15 Tage. Bei 4 Tagen Reserveschwelle ist die Bestellung in 11 Tagen fällig.",
    "faq": [
      {
        "q": "In welcher Einheit soll der Vorrat stehen?",
        "a": "In beliebiger, solange Vorrat und Tagesverbrauch dieselbe teilen. Kilogramm, Liter, Stück — der Rechner teilt das eine durch das andere und arbeitet mit dem Verhältnis."
      },
      {
        "q": "Was ist die Sicherheitsreserve in Tagen?",
        "a": "Die Schwelle ist Restdeckung bei der Bestellung. Soll sie Lieferzeit und gewünschten Rest bei Ankunft abdecken, beide Zeiträume in diese eine Zahl aufnehmen. Lieferzeit wird nicht separat addiert."
      },
      {
        "q": "Wird ungleichmäßiger Verbrauch berücksichtigt?",
        "a": "Nein, der Verbrauch gilt als gleichbleibend. Für saisonale Spitzen nimm den mittleren Verbrauch der Spitzenzeit und nicht den des Jahres."
      },
      {
        "q": "Geht es um Vorräte oder um Aktien?",
        "a": "Um Vorräte: Futter, Getreide, Kraftstoff, Verbrauchsmaterial. Mit Wertpapieren hat das nichts zu tun."
      }
    ],
    "disclaimer": "Gleichbleibender Verbrauch in gleichen Einheiten. Lieferzeit, Saisonalität, Verderb und Verfügbarkeit werden nicht vorhergesagt."
  },
  "es": {
    "longDescription": "Divide suministros entre un consumo diario constante: pienso, alimentos, combustible o consumibles, no acciones. El umbral en días indica cuánto quieres que quede al hacer el pedido. Puedes incluir plazo de entrega y reserva adicional en él; el cálculo no garantiza la llegada.",
    "howToUse": [
      "Introduce las existencias de que dispones, en la unidad que te convenga.",
      "Indica el consumo diario en esa misma unidad.",
      "Si quieres, fija una reserva de seguridad en días.",
      "Se permite existencias 0; el consumo diario debe ser positivo. Un umbral opcional vacío significa 0 días. Una duración pequeña no se eleva artificialmente a 0,1 día."
    ],
    "howItWorks": "Duración = existencias / consumo diario. Con umbral positivo: momento de pedido = duración − umbral; una diferencia negativa significa que el umbral ya se ha incumplido. Existencias 0 dan 0 días; existencias o umbral negativos no son válidos.",
    "example": "30 kg de pienso con un consumo de 2 kg al día duran 15 días. Con una reserva de 4 días, el pedido corresponde dentro de 11 días.",
    "faq": [
      {
        "q": "¿En qué unidad van las existencias?",
        "a": "En cualquiera, mientras las existencias y el consumo diario la compartan. Kilogramos, litros, unidades: la calculadora divide una entre otro y trabaja con la razón."
      },
      {
        "q": "¿Qué es la reserva de seguridad en días?",
        "a": "El umbral es lo que queda cuando pides. Para cubrir plazo de entrega y resto deseado a la llegada, incluye ambos en ese único número. La entrega no se añade aparte."
      },
      {
        "q": "¿Se admite un consumo irregular?",
        "a": "No, el ritmo se trata como constante. Para picos de temporada usa el consumo medio del periodo punta y no el anual."
      },
      {
        "q": "¿Habla de suministros o de acciones?",
        "a": "De suministros: pienso, grano, combustible, consumibles. Los valores financieros no tienen nada que ver."
      }
    ],
    "disclaimer": "Consumo constante en unidades iguales. No predice entregas, estacionalidad, deterioro ni disponibilidad del proveedor."
  }
};
