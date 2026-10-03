// Individual subject copy; native human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Собирает статьи с разной базой: проживание за фактические ночи, питание за дни и людей, транспорт и развлечения общей суммой. Ночи и дни задаются независимо: пять дней и четыре ночи — пример, а не обязательное соотношение. Доля на человека равная, стоимость в день — средняя вместе с разовыми тратами.",
    "howToUse": [
      "Введите целые неотрицательные ночи и целое положительное число людей. Дни положительные; дробный день допустим как выбранная длительность питания.",
      "Цена ночи относится ко всей группе, а питание — к одному человеку в день. Нулевые расходы допустимы.",
      "Транспорт и развлечения задайте общей суммой для всех; не вводите цену одного билета вместо суммы билетов.",
      "Прочие расходы необязательны: пустое поле означает 0. Все суммы должны быть в одной валюте."
    ],
    "howItWorks": "Проживание = ночи × цена ночи для группы. Питание = дни × люди × дневная цена на человека. Транспорт, развлечения и прочее добавляются общими суммами. Доля = итог / люди; среднее в день = итог / дни. Одинаковые ночи и дни не запрещены.",
    "example": "Двое на 5 дней и 4 ночи: 4×3500 =14000 проживание, 5×2×1200 =12000 питание, 12000 транспорт и 5000 развлечения; итог 43000; 21500 на человека и 8600 в день. Без отеля можно задать 0 ночей.",
    "faq": [
      {
        "q": "Почему ночи и дни вводятся отдельно?",
        "a": "Проживание оплачивается по вашим фактическим ночам, а питание моделируется по выбранным дням. Пять дней и четыре ночи — только пример; ночная дорога или иная организация меняют соотношение."
      },
      {
        "q": "Питание считается на всех сразу?",
        "a": "Нет, вводится сумма на одного человека в день, а калькулятор умножает её и на дни, и на количество людей."
      },
      {
        "q": "Куда отнести билеты на самолёт?",
        "a": "В транспорт — это сумма на всю поездку. Если билеты куплены на каждого отдельно, введите их общую стоимость."
      },
      {
        "q": "Что показывает стоимость в день?",
        "a": "Весь бюджет, поделённый на число дней, включая разовые траты вроде билетов. Это ориентир для сравнения поездок разной длины."
      },
      {
        "q": "Учитывается ли курс валюты?",
        "a": "Нет, вводите суммы в одной валюте. Для перевода из другой валюты воспользуйтесь конвертером."
      }
    ],
    "disclaimer": "Сценарий расходов в одной валюте, без курса и ценового прогноза. Равное деление не учитывает разные личные расходы; ночи, дни и ставки выбираете вы."
  },
  "en": {
    "longDescription": "Combines costs with different bases: accommodation for actual nights, food for days and people, and transport and activities as group totals. Nights and days are independent: five days and four nights is an example, not a mandatory relationship. Per-person shares are equal; per-day cost averages one-off expenses too.",
    "howToUse": [
      "Enter whole nonnegative nights and a whole positive traveller count. Days must be positive; fractional days are allowed as your chosen food duration.",
      "The nightly rate covers the whole group; food is per person per day. Zero costs are allowed.",
      "Enter transport and activities for everyone together; use total ticket cost rather than one ticket’s price.",
      "Other costs are optional; blank means 0. Enter all amounts in one currency."
    ],
    "howItWorks": "Accommodation = nights × group nightly rate. Food = days × people × daily rate per person. Transport, activities and other costs are added as group totals. Share = total / people; daily average = total / days. Equal night and day counts are permitted.",
    "example": "Two people for 5 days and 4 nights: 4×3500 =14000 accommodation, 5×2×1200 =12000 food, 12000 transport and 5000 activities; total 43000; 21500 each and 8600 per day. Without a hotel, enter 0 nights.",
    "faq": [
      {
        "q": "Why are nights and days entered separately?",
        "a": "Accommodation follows your actual booked nights, while food follows your chosen days. Five days and four nights is only an example; overnight travel or another arrangement changes the relationship."
      },
      {
        "q": "Is the food budget for everyone at once?",
        "a": "No — enter the amount for one traveller per day, and the calculator multiplies it by both the days and the number of travellers."
      },
      {
        "q": "Where do flights belong?",
        "a": "In transport, as a total for the whole trip. If tickets were bought individually, enter their combined cost."
      },
      {
        "q": "What does the cost per day show?",
        "a": "The whole budget divided by the number of days, one-off costs like tickets included. It is a yardstick for comparing trips of different lengths."
      },
      {
        "q": "Are exchange rates applied?",
        "a": "No — enter every amount in a single currency. Use the converter first if some costs are in another one."
      }
    ],
    "disclaimer": "A one-currency expense scenario without exchange or price forecasting. Equal splitting does not model different personal expenses; you choose nights, days and rates."
  },
  "uk": {
    "longDescription": "Складає витрати з різною основою: проживання за фактичні ночі, харчування за дні й людей, транспорт і розваги загальними сумами. Ночі й дні незалежні: п’ять днів і чотири ночі — приклад, а не обов’язкова різниця. Частки рівні, середня ціна дня включає також разові витрати.",
    "howToUse": [
      "Введіть цілі невід’ємні ночі й цілу додатну кількість людей. Дні додатні; дробовий день допустимий як обрана тривалість харчування.",
      "Ціна ночі стосується всієї групи, харчування — однієї людини за день. Нульові витрати допустимі.",
      "Транспорт і розваги задайте сумами на всіх; не підставляйте ціну одного квитка замість загальної.",
      "Інші витрати необов’язкові: порожнє поле означає 0. Усі гроші мають бути в одній валюті."
    ],
    "howItWorks": "Проживання = ночі × ціна ночі для групи. Харчування = дні × люди × денна ціна на людину. Транспорт, розваги й інше додаються загальними сумами. Частка = підсумок / люди; середнє за день = підсумок / дні. Однакові ночі й дні допустимі.",
    "example": "Двоє на 5 днів і 4 ночі: 4×3500 =14000 проживання, 5×2×1200 =12000 їжа, 12000 транспорт і 5000 розваги; разом 43000; 21500 на людину й 8600 за день. Без готелю можна задати 0 ночей.",
    "faq": [
      {
        "q": "Чому ночей менше, ніж днів?",
        "a": "Ночі залежать від фактичного проживання, а дні — від вашої моделі витрат. П’ять днів і чотири ночі — лише приклад; нічна дорога або інша організація може дати інше чи навіть однакове число."
      },
      {
        "q": "Що зазвичай забувають закласти?",
        "a": "Окремо перевірте місцевий транспорт, страхування, візи, сувеніри й інші потрібні витрати. Обраний резерв внесіть сумою в поле інших витрат; універсальних 10–15 % модель не встановлює."
      },
      {
        "q": "Як рахувати харчування?",
        "a": "Введіть обрану суму на людину за день. Якщо частина харчування включена в проживання, не додавайте її вдруге. Оцінка залежить від вашого сценарію, а не від єдиного рекомендованого меню."
      },
      {
        "q": "Чи враховано курс валюти?",
        "a": "Ні, усі суми в одній валюті. Для закордонної поїздки закладіть запас на коливання курсу й комісії за конвертацію."
      }
    ],
    "disclaimer": "Сценарій витрат в одній валюті, без курсу й прогнозу цін. Рівний поділ не моделює різні особисті витрати; ночі, дні й ставки обираєте ви."
  },
  "de": {
    "longDescription": "Verbindet Kosten mit verschiedenen Bezugsgrößen: Unterkunft je tatsächlicher Nacht, Essen je Tag und Person, Fahrt und Aktivitäten als Gruppensummen. Nächte und Tage sind unabhängig: fünf Tage und vier Nächte sind ein Beispiel, keine vorgeschriebene Beziehung. Pro Person wird gleich geteilt; das Tagesmittel enthält auch Einmalkosten.",
    "howToUse": [
      "Ganze nichtnegative Nächte und ganze positive Personenzahl eingeben. Tage müssen positiv sein; Teil eines Tages ist als gewählte Essensdauer zulässig.",
      "Nachtpreis gilt für die ganze Gruppe, Essenspreis je Person und Tag. Kosten 0 sind zulässig.",
      "Fahrt und Aktivitäten für alle zusammen angeben, nicht einen Ticketpreis statt aller Tickets.",
      "Sonstige Kosten sind optional; leer bedeutet 0. Alle Beträge in einer Währung angeben."
    ],
    "howItWorks": "Unterkunft = Nächte × Gruppennachtpreis. Essen = Tage × Personen × Tagessatz je Person. Fahrt, Aktivitäten und sonstige Kosten sind Gruppensummen. Anteil = Gesamt / Personen; Tagesmittel = Gesamt / Tage. Gleiche Nacht- und Tageszahlen sind möglich.",
    "example": "Zwei Personen für 5 Tage und 4 Nächte: 4×3500 =14000 Unterkunft, 5×2×1200 =12000 Essen, 12000 Fahrt und 5000 Aktivitäten; Gesamt 43000; 21500 je Person und 8600 je Tag, in einer gewählten Geldeinheit. Ohne Hotel sind 0 Nächte möglich.",
    "faq": [
      {
        "q": "Warum werden Nächte und Tage getrennt eingetragen?",
        "a": "Unterkunft folgt tatsächlichen gebuchten Nächten, Essen den gewählten Tagen. Fünf Tage und vier Nächte sind nur ein Beispiel; Nachtfahrten oder andere Planung ändern das Verhältnis."
      },
      {
        "q": "Gilt das Essensbudget für alle zusammen?",
        "a": "Nein — trage den Betrag für einen Reisenden je Tag ein, und der Rechner multipliziert ihn sowohl mit den Tagen als auch mit der Zahl der Reisenden."
      },
      {
        "q": "Wohin gehören Flüge?",
        "a": "In die Fahrt, als Summe für die ganze Reise. Wurden die Tickets einzeln gekauft, trage ihre Gesamtsumme ein."
      },
      {
        "q": "Was zeigen die Kosten je Tag?",
        "a": "Das ganze Budget geteilt durch die Zahl der Tage, einmalige Kosten wie Tickets eingeschlossen. Es ist ein Maßstab, um Reisen verschiedener Länge zu vergleichen."
      },
      {
        "q": "Werden Wechselkurse angewendet?",
        "a": "Nein — trage jeden Betrag in einer einzigen Währung ein. Nutze vorher den Umrechner, wenn manche Kosten in einer anderen anfallen."
      }
    ],
    "disclaimer": "Kostenszenario in einer Währung, ohne Wechselkurs- oder Preisprognose. Gleiches Teilen berücksichtigt keine unterschiedlichen persönlichen Ausgaben; Nächte, Tage und Sätze wählen Sie."
  },
  "es": {
    "longDescription": "Combina gastos con bases distintas: alojamiento por noches reales, comida por días y personas, y transporte y actividades como totales del grupo. Noches y días son independientes: cinco días y cuatro noches es un ejemplo, no una relación obligatoria. El reparto por persona es igual y la media diaria incluye gastos puntuales.",
    "howToUse": [
      "Introduce noches enteras no negativas y personas enteras positivas. Los días deben ser positivos; se permite una fracción como duración elegida de comidas.",
      "La tarifa nocturna es para todo el grupo y la comida para una persona al día. Se permiten costes 0.",
      "Escribe transporte y actividades para todos; usa la suma de billetes, no el precio de uno.",
      "Otros gastos son opcionales; vacío significa 0. Introduce todos los importes en una moneda."
    ],
    "howItWorks": "Alojamiento = noches × tarifa nocturna del grupo. Comida = días × personas × tarifa diaria individual. Transporte, actividades y otros se añaden como totales grupales. Parte = total / personas; media diaria = total / días. Se permiten iguales cifras de noches y días.",
    "example": "Dos personas durante 5 días y 4 noches: 4×3500 =14000 alojamiento, 5×2×1200 =12000 comida, 12000 transporte y 5000 actividades; total 43000; 21500 por persona y 8600 al día, en una unidad monetaria elegida. Sin hotel se admiten 0 noches.",
    "faq": [
      {
        "q": "¿Por qué se introducen las noches y los días por separado?",
        "a": "El alojamiento usa noches reservadas reales y la comida los días elegidos. Cinco días y cuatro noches es solo un ejemplo; viajar de noche u organizarse de otra forma cambia la relación."
      },
      {
        "q": "¿El presupuesto de comida es para todos a la vez?",
        "a": "No: introduce el importe de un viajero al día, y la calculadora lo multiplica tanto por los días como por el número de viajeros."
      },
      {
        "q": "¿Dónde van los vuelos?",
        "a": "En transporte, como total de todo el viaje. Si los billetes se compraron por separado, introduce su coste conjunto."
      },
      {
        "q": "¿Qué indica el coste por día?",
        "a": "Todo el presupuesto dividido entre el número de días, gastos únicos como los billetes incluidos. Es una vara de medir para comparar viajes de distinta duración."
      },
      {
        "q": "¿Se aplican tipos de cambio?",
        "a": "No: introduce todos los importes en una misma moneda. Usa antes el conversor si algunos gastos están en otra."
      }
    ],
    "disclaimer": "Escenario de gastos en una moneda, sin prever cambios de divisa ni precios. El reparto igual no contempla gastos personales diferentes; noches, días y tarifas las eliges tú."
  }
};
