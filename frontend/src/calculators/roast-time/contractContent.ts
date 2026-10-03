import type { CalculatorCopy } from '../../lib/platform/types';
type ContractContent = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent = {
  "ru": {
    "longDescription": "Помогает составить расписание по выбранному рецепту: время в духовке равно постоянной части плюс минуты на килограмм, затем отдельно добавляется отдых. База и удельное время вводятся пользователем, а не определяются по виду продукта, температуре или форме куска. Постоянная часть — параметр этого линейного правила, не доказанная физическая длительность прогрева. Раздельные строки сохраняют два момента: плановое извлечение и окончание выбранного отдыха. Безопасность и готовность по одной массе и времени не устанавливаются.",
    "howItWorks": "Готовка, мин = масса, кг × минуты/кг + база. Отдых = готовка × процент отдыха/100; общее время = готовка + отдых. Масса и минуты/кг положительны, база неотрицательна, отдых от 0 до 50% в этом инструменте. Для часов и минут общее число минут сначала округляется, затем делится; полученные 60 минут переходят в час. Температура продукта не вычисляется.",
    "example": "Для введённого примера 5 кг, 40 мин/кг, базы 20 мин и отдыха 20% плановая готовка равна 220 мин (3 ч 40 мин), отдых 44 мин, сумма 264 мин. Это расписание, не подтверждение готовности индейки. При 1 кг, 59,6 мин/кг, базе 0 и отдыхе 0% округлённый вывод — 1 ч 0 мин, а не 60 мин.",
    "howToUse": [
      "Берите минуты/кг и базу из выбранного рецепта с его условиями приготовления.",
      "Укажите массу того продукта, который описывает рецепт; начинка и форма могут менять условия.",
      "Задайте отдых отдельно: процент является вашей плановой величиной.",
      "Проверяйте готовность термометром по применимым указаниям для продукта; время не заменяет измерение."
    ],
    "faq": [
      {
        "q": "Зачем нужна постоянная часть?",
        "a": "Это введённый параметр линейного рецепта. Он не обязан физически совпадать с прогревом духовки или коркой; пригодность базы определяется рецептом и его условиями."
      },
      {
        "q": "Почему отдых показан отдельно?",
        "a": "Чтобы различать время в духовке и выбранный интервал до подачи. Процент здесь не является универсальной нормой и не заменяет необходимый отдых из конкретных указаний по безопасности."
      },
      {
        "q": "Заменяет ли расчёт термометр?",
        "a": "Нет. FoodSafety.gov для США определяет готовность по измеренной внутренней температуре; например, целые куски говядины — 63°C с отдыхом 3 минуты, птица — 74°C. Этот источник не подтверждает наши минуты/кг."
      },
      {
        "q": "Чем это отличается от расчёта разварки?",
        "a": "Коэффициент выхода связывает исходную и готовую массу. Здесь планируется время по отдельному линейному правилу; ни выход массы, ни температура готовности из него не выводятся."
      }
    ],
    "disclaimer": "Плановое время не подтверждает безопасную температуру. Условия рецепта и измерение продукта проверяются отдельно."
  },
  "en": {
    "longDescription": "Builds a schedule from a selected recipe: oven time is a fixed part plus minutes per kilogram, with resting added separately. You enter the base and rate; the tool does not derive them from food type, temperature or joint shape. The fixed part is a parameter of this linear rule, not a proven physical warm-up duration. Separate rows retain two moments: planned oven removal and the end of the selected rest. Weight and time alone cannot establish doneness or food safety.",
    "howItWorks": "Cooking minutes = weight kg × minutes/kg + base. Rest = cooking × rest percent/100; total = cooking + rest. Weight and rate are positive, base nonnegative and rest between 0 and 50% in this tool. For hours/minutes, minutes are rounded before division so 60 carries into an hour. Product temperature is not calculated.",
    "example": "Entered example: 5 kg, 40 min/kg, base 20 min and rest 20% give 220 min cooking (3 h 40 min), 44 min rest and 264 min total. This schedules a recipe; it does not confirm a turkey is done. At 1 kg, 59.6 min/kg, zero base and zero rest, rounded output is 1 h 0 min rather than 60 min.",
    "howToUse": [
      "Use a rate and base from a selected recipe with its preparation conditions.",
      "Enter the weight that recipe describes; stuffing and shape can change conditions.",
      "Set rest separately; its percentage is your scheduling parameter.",
      "Measure doneness with a thermometer using applicable product guidance; time cannot replace measurement."
    ],
    "faq": [
      {
        "q": "Why is there a fixed part?",
        "a": "It is an entered linear recipe parameter. It need not physically equal oven warm-up or crust formation; its suitability depends on the recipe and conditions."
      },
      {
        "q": "Why is resting shown separately?",
        "a": "It distinguishes oven time from the selected interval before serving. The percentage is not a universal rest requirement and does not replace a particular safety instruction."
      },
      {
        "q": "Does this replace a thermometer?",
        "a": "No. US FoodSafety.gov guidance uses measured internal temperature: for example, whole beef cuts 63°C with a 3-minute rest, poultry 74°C. That source does not validate this tool’s minutes/kg."
      },
      {
        "q": "How is this different from a cooking-loss calculator?",
        "a": "A yield factor relates original to cooked weight. This schedules time with a different linear rule; neither weight yield nor doneness temperature follows from it."
      }
    ],
    "disclaimer": "Planned time does not establish safe internal temperature. Check recipe conditions and measure the product separately."
  },
  "uk": {
    "longDescription": "Допомагає скласти розклад за обраним рецептом: час у духовці дорівнює постійній частині плюс хвилини на кілограм, а відпочинок додається окремо. Базу й питомий час задає користувач; вид продукту, температуру та форму шматка модель не використовує для їх визначення. База є параметром лінійного правила, не доведеним часом фізичного прогрівання. Окремі рядки зберігають планове виймання та завершення обраного відпочинку. Одна маса й час не встановлюють готовності або безпеки.",
    "howItWorks": "Готування, хв = кг × хв/кг + база. Відпочинок = готування × відсоток/100; загалом = готування + відпочинок. Маса й хв/кг додатні, база невід’ємна, відпочинок від 0 до 50% у цьому інструменті. Перед поділом на години хвилини округлюються: 60 переносяться в годину. Температура продукту не обчислюється.",
    "example": "Введений приклад: 5 кг, 40 хв/кг, база 20 хв та відпочинок 20% дають 220 хв готування (3 год 40 хв), 44 хв відпочинку й 264 хв загалом. Це розклад, не підтвердження готовності індички. За 1 кг, 59,6 хв/кг, нульової бази й відпочинку вивід округлюється до 1 год 0 хв, не 60 хв.",
    "howToUse": [
      "Використовуйте хв/кг та базу обраного рецепта з його умовами.",
      "Введіть масу, яку описує рецепт; начинка й форма можуть змінити умови.",
      "Задайте відпочинок окремо як параметр планування.",
      "Перевіряйте готовність термометром за застосовними вказівками для продукту."
    ],
    "faq": [
      {
        "q": "Навіщо м’ясу відпочивати після духовки?",
        "a": "Відпочинок може бути окремою частиною рецепта й вказівок безпеки. Введений відсоток лише планує час; він не доводить потрібну температуру й не замінює конкретного мінімального інтервалу."
      },
      {
        "q": "Чи можна орієнтуватися лише на час?",
        "a": "Ні. FoodSafety.gov для США використовує виміряну внутрішню температуру: наприклад, цілі шматки яловичини 63°C із відпочинком 3 хвилини, птиця 74°C. Джерело не підтверджує наші хв/кг."
      },
      {
        "q": "Чому маленька птиця готується непропорційно довго?",
        "a": "Відносно більша роль бази для малої маси випливає з обраної формули. Це не фізичний доказ, що будь-яка мала птиця потребує такого базового часу."
      },
      {
        "q": "Чи впливає температура духовки?",
        "a": "Температура впливає на реальне готування, але не є входом цієї моделі. Потрібні параметри рецепта для відповідних умов; універсальний перерахунок між температурами тут не заданий."
      }
    ],
    "disclaimer": "Плановий час не підтверджує безпечної внутрішньої температури. Умови рецепта й вимірювання продукту перевіряються окремо."
  },
  "de": {
    "longDescription": "Erstellt einen Zeitplan nach einem gewählten Rezept: Ofenzeit ist ein fester Anteil plus Minuten je Kilogramm, gefolgt von gesonderter Ruhezeit. Basis und Satz werden eingegeben, nicht aus Lebensmittelart, Temperatur oder Form bestimmt. Der feste Anteil ist ein Parameter der linearen Regel, keine nachgewiesene physikalische Aufheizdauer. Getrennte Zeilen zeigen geplante Entnahme und Ende der gewählten Ruhe. Gewicht und Zeit allein belegen weder Garzustand noch Lebensmittelsicherheit.",
    "howItWorks": "Garminuten = kg × Minuten/kg + Basis. Ruhe = Garzeit × Ruheprozent/100; Gesamt = Garzeit + Ruhe. Gewicht und Satz positiv, Basis nichtnegativ, Ruhe in diesem Werkzeug 0 bis 50%. Für Stunden/Minuten wird zuerst gerundet, sodass 60 Minuten in eine Stunde übergehen. Die Produkttemperatur wird nicht berechnet.",
    "example": "Beispielwerte 5 kg, 40 min/kg, Basis 20 min und Ruhe 20% ergeben 220 min Garzeit (3 h 40 min), 44 min Ruhe und 264 min insgesamt. Das plant ein Rezept, bestätigt aber keinen gegarten Truthahn. Bei 1 kg, 59,6 min/kg, Basis und Ruhe null lautet die gerundete Anzeige 1 h 0 min statt 60 min.",
    "howToUse": [
      "Satz und Basis aus einem Rezept samt Zubereitungsbedingungen übernehmen.",
      "Die dort beschriebene Masse eingeben; Füllung und Form können Bedingungen ändern.",
      "Ruhe gesondert als Planungsparameter wählen.",
      "Garzustand mit Thermometer nach anwendbaren Produkthinweisen prüfen."
    ],
    "faq": [
      {
        "q": "Wozu ein fester Anteil?",
        "a": "Ein eingegebener linearer Rezeptparameter. Er muss weder Ofenaufheizung noch Krustenbildung entsprechen; die Eignung hängt vom Rezept und seinen Bedingungen ab."
      },
      {
        "q": "Warum steht die Ruhezeit gesondert?",
        "a": "So werden Ofenzeit und gewählter Zeitraum vor dem Servieren unterschieden. Der Prozentsatz ist keine allgemeine Ruhevorschrift und ersetzt keinen konkreten Sicherheitshinweis."
      },
      {
        "q": "Ersetzt das ein Thermometer?",
        "a": "Nein. US FoodSafety.gov verwendet gemessene Innentemperatur, etwa ganze Rindfleischstücke 63°C mit 3 Minuten Ruhe, Geflügel 74°C. Die Quelle bestätigt keine Minuten/kg dieses Rechners."
      },
      {
        "q": "Wie unterscheidet sich das von einem Rechner für den Garverlust?",
        "a": "Ein Ausbeutefaktor verbindet ursprüngliches und gegartes Gewicht. Hier wird Zeit mit einer anderen linearen Regel geplant; weder Massenausbeute noch Gartemperatur folgen daraus."
      }
    ],
    "disclaimer": "Geplante Zeit belegt keine sichere Innentemperatur. Rezeptbedingungen gesondert prüfen und das Produkt messen."
  },
  "es": {
    "longDescription": "Organiza un horario según una receta elegida: tiempo de horno es una parte fija más minutos por kilogramo, con reposo separado. Introduces base y ritmo; no se determinan por tipo de alimento, temperatura ni forma de la pieza. La parte fija es un parámetro de la regla lineal, no un tiempo físico demostrado de calentamiento. Las filas separan retirada prevista y final del reposo elegido. Peso y tiempo solos no establecen cocción ni seguridad alimentaria.",
    "howItWorks": "Minutos de cocción = kg × minutos/kg + base. Reposo = cocción × porcentaje/100; total = cocción + reposo. Peso y ritmo positivos, base no negativa, reposo entre 0 y 50% en esta herramienta. Para horas/minutos se redondea primero: 60 minutos pasan a una hora. No se calcula temperatura del producto.",
    "example": "Entradas ilustrativas 5 kg, 40 min/kg, base 20 min y reposo 20% dan 220 min de cocción (3 h 40 min), 44 min de reposo y 264 min totales. Planifica una receta, no confirma un pavo cocinado. Con 1 kg, 59,6 min/kg, base y reposo cero, se muestra 1 h 0 min tras redondear, no 60 min.",
    "howToUse": [
      "Usa ritmo y base de una receta con sus condiciones de preparación.",
      "Introduce el peso descrito; relleno y forma pueden cambiar las condiciones.",
      "Elige el reposo aparte como parámetro del horario.",
      "Mide cocción con termómetro según indicaciones aplicables al producto."
    ],
    "faq": [
      {
        "q": "¿Por qué hay una parte fija?",
        "a": "Es un parámetro lineal introducido de la receta. No tiene que equivaler físicamente a calentamiento del horno o formación de costra; su validez depende de receta y condiciones."
      },
      {
        "q": "¿Por qué el reposo se muestra aparte?",
        "a": "Distingue tiempo de horno e intervalo elegido antes de servir. El porcentaje no es una exigencia universal de reposo ni sustituye instrucciones concretas de seguridad."
      },
      {
        "q": "¿Sustituye a un termómetro?",
        "a": "No. FoodSafety.gov de EE. UU. usa temperatura interna medida: por ejemplo, piezas enteras de vacuno 63°C y 3 minutos de reposo, aves 74°C. Esa fuente no valida nuestros minutos/kg."
      },
      {
        "q": "¿En qué se diferencia de una calculadora de merma en la cocción?",
        "a": "El factor de rendimiento relaciona peso original y cocinado. Aquí se programa tiempo con otra regla lineal; ni rendimiento de masa ni temperatura de cocción se deducen de ella."
      }
    ],
    "disclaimer": "El tiempo previsto no establece temperatura interna segura. Comprueba condiciones de receta y mide el producto aparte."
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractContent>;
