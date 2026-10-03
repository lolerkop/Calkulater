import type { CalculatorCopy } from '../../lib/platform/types';

// Actual 145 native body individually reviewed; scoped model and input corrections. Agent review is not human approval.
export const buildingWave13ContractContent = {
  "ru": {
    "longDescription": "Переводит заданную кратность воздухообмена в объёмный расход для помещения известной площади и высоты. Кратность выбираете вы: страница не назначает норму для квартиры, кухни или производства. Один воздухообмен означает подачу или удаление объёма воздуха, равного объёму помещения, а не гарантированную полную замену каждой его части.",
    "howItWorks": "V = A·h; Q = V·ACH. При площади в м², высоте в м и кратности в 1/ч расход получается в м³/ч. Для л/с делим Q на 3,6, для м³/мин — на 60; суточное отношение объёмов равно 24·ACH. Все три входа должны быть положительными конечными числами.",
    "howToUse": [
      "Введите площадь и высоту той зоны, которую обслуживает вентиляция.",
      "Укажите требуемую кратность из применимого проекта или задания.",
      "Сверьте рассчитанный объёмный расход с рабочей характеристикой оборудования."
    ],
    "example": "Комната 20 м² с потолком 2,7 м при кратности 3 требует 162 м³/ч.",
    "faq": [
      {
        "q": "Что означает кратность 3 в час?",
        "a": "За час проходит объём воздуха, равный трём объёмам помещения. При смешивании это не означает, что весь исходный воздух исчезнет за двадцать минут."
      },
      {
        "q": "Какую кратность выбрать?",
        "a": "Это исходное условие, которое зависит от назначения, загрязнений, людей и применимых требований. Значение 3 по умолчанию — пример, а не универсальная норма."
      },
      {
        "q": "Можно ли выбрать вентилятор только по этому результату?",
        "a": "Нет. Нужны рабочий расход при сопротивлении сети, баланс притока и вытяжки и условия помещения. Номинальный расход сам по себе этого не показывает."
      },
      {
        "q": "Учтён ли подвесной потолок?",
        "a": "Вводится фактически обслуживаемый объём. Если пространство над потолком также участвует в воздухообмене, его учитывают отдельно; калькулятор не определяет эту схему."
      }
    ]
  },
  "en": {
    "longDescription": "Converts a chosen air-change rate into volumetric airflow for a room with a known floor area and height. You supply the rate; the page does not prescribe a requirement for homes, kitchens or workplaces. An air change is an air volume equal to the room volume, rather than a guarantee that every part of the original air is completely replaced.",
    "howItWorks": "V = A·h; Q = V·ACH. With area in m², height in m and ACH in 1/h, Q is in m³/h. Divide Q by 3.6 for L/s and by 60 for m³/min; the daily volume ratio is 24·ACH. All three inputs must be positive finite numbers.",
    "howToUse": [
      "Enter the area and height of the zone served by ventilation.",
      "Use the required air-change rate from the applicable design or specification.",
      "Compare the airflow with equipment performance at its operating resistance."
    ],
    "example": "A 20 m² room with a 2.7 m ceiling at 3 air changes needs 162 m³/h.",
    "faq": [
      {
        "q": "What does 3 air changes per hour mean?",
        "a": "In one hour the delivered or removed volume equals three room volumes. With mixing, this does not mean all original air disappears after twenty minutes."
      },
      {
        "q": "Which rate should I choose?",
        "a": "It depends on use, pollutants, occupancy and applicable requirements. The default 3 is an example, not a universal standard."
      },
      {
        "q": "Can this alone size a fan?",
        "a": "No. You also need airflow at system resistance, the supply/extract balance and room conditions. A nominal airflow rating alone does not establish these."
      },
      {
        "q": "Does a suspended ceiling count?",
        "a": "Enter the volume actually served. Include the space above the ceiling separately if it participates in ventilation; this calculator does not determine that arrangement."
      }
    ],
    "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
  },
  "uk": {
    "longDescription": "Перетворює задану кратність повітрообміну на об’ємну витрату для приміщення з відомими площею та висотою. Кратність задаєте ви: сторінка не призначає норму для житла, кухні або виробництва. Один повітрообмін означає об’єм повітря, рівний об’єму приміщення, а не гарантовану повну заміну кожної його частини.",
    "howItWorks": "V = A·h; Q = V·ACH. За площі в м², висоти в м і кратності в 1/год витрата виходить у м³/год. Для л/с ділимо Q на 3,6, для м³/хв — на 60; добове відношення об’ємів дорівнює 24·ACH. Усі три входи мають бути додатними скінченними числами.",
    "howToUse": [
      "Введіть площу й висоту зони, яку обслуговує вентиляція.",
      "Задайте потрібну кратність із застосовного проєкту або завдання.",
      "Зіставте витрату з робочою характеристикою обладнання."
    ],
    "example": "Кімната 20 м² зі стелею 2,7 м за кратності 3 потребує 162 м³/год.",
    "faq": [
      {
        "q": "Що означає кратність 3 за годину?",
        "a": "За годину проходить об’єм, рівний трьом об’ємам приміщення. За змішування це не означає, що все початкове повітря зникне за двадцять хвилин."
      },
      {
        "q": "Яку кратність обрати?",
        "a": "Вона залежить від призначення, забруднень, людей і застосовних вимог. Типове поле 3 — приклад, а не універсальна норма."
      },
      {
        "q": "Чи можна лише за результатом підібрати вентилятор?",
        "a": "Ні. Потрібні робоча витрата за опору мережі, баланс припливу й витяжки та умови приміщення. Сам номінальний показник цього не визначає."
      },
      {
        "q": "Чи враховувати підвісну стелю?",
        "a": "Вводьте фактично обслуговуваний об’єм. Якщо простір над стелею також бере участь у повітрообміні, врахуйте його окремо; калькулятор не визначає цю схему."
      }
    ],
    "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
  },
  "de": {
    "longDescription": "Rechnet eine vorgegebene Luftwechselrate in den Volumenstrom für einen Raum mit bekannter Fläche und Höhe um. Die Rate gibst du selbst vor; die Seite legt keine Anforderung für Wohnungen, Küchen oder Betriebe fest. Ein Luftwechsel entspricht einem Luftvolumen in Größe des Raumvolumens, nicht einer garantierten vollständigen Ersetzung der gesamten ursprünglichen Luft.",
    "howItWorks": "V = A·h; Q = V·ACH. Mit A in m², h in m und ACH in 1/h ergibt sich Q in m³/h. Für l/s wird Q durch 3,6 geteilt, für m³/min durch 60; das tägliche Volumenverhältnis ist 24·ACH. Alle drei Eingaben müssen positive endliche Zahlen sein.",
    "howToUse": [
      "Gib Fläche und Höhe des tatsächlich belüfteten Bereichs ein.",
      "Übernimm die benötigte Luftwechselrate aus der zutreffenden Planung oder Vorgabe.",
      "Vergleiche den Volumenstrom mit der Gerätekennlinie beim Betriebswiderstand."
    ],
    "example": "Ein Raum von 20 m² mit 2,7 m Höhe braucht bei 3 Luftwechseln 162 m³/h.",
    "faq": [
      {
        "q": "Was bedeutet ein dreifacher Luftwechsel pro Stunde?",
        "a": "Das zugeführte oder abgeführte Volumen entspricht stündlich drei Raumvolumen. Bei Durchmischung ist deshalb nach zwanzig Minuten nicht die gesamte ursprüngliche Luft verschwunden."
      },
      {
        "q": "Welche Rate soll ich wählen?",
        "a": "Das hängt von Nutzung, Schadstoffen, Belegung und geltenden Anforderungen ab. Der voreingestellte Wert 3 ist ein Beispiel und keine allgemeine Norm."
      },
      {
        "q": "Reicht das Ergebnis zur Ventilatorauswahl?",
        "a": "Nein. Zusätzlich zählen der Volumenstrom bei Netzwiderstand, die Zu- und Abluftbilanz und die Raumbedingungen. Eine Nennfördermenge allein legt diese nicht fest."
      },
      {
        "q": "Zählt der Raum über einer abgehängten Decke mit?",
        "a": "Erfasse das tatsächlich belüftete Volumen. Nimmt der Hohlraum am Luftwechsel teil, berücksichtige ihn zusätzlich; der Rechner bestimmt diese Anordnung nicht."
      }
    ],
    "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
  },
  "es": {
    "longDescription": "Convierte una tasa de renovación elegida en caudal volumétrico para una sala de superficie y altura conocidas. La tasa la introduces tú; la página no fija requisitos para viviendas, cocinas o centros de trabajo. Una renovación equivale a un volumen de aire igual al de la sala, sin garantizar la sustitución completa de cada parte del aire original.",
    "howItWorks": "V = A·h; Q = V·ACH. Con A en m², h en m y ACH en 1/h, Q queda en m³/h. Para l/s se divide Q entre 3,6 y para m³/min entre 60; la relación diaria de volúmenes es 24·ACH. Los tres valores deben ser positivos y finitos.",
    "howToUse": [
      "Introduce la superficie y la altura de la zona ventilada.",
      "Usa la tasa de renovación exigida por el proyecto o la especificación aplicable.",
      "Compara el caudal con la curva del equipo a la resistencia de trabajo."
    ],
    "example": "Una sala de 20 m² con techo de 2,7 m y 3 renovaciones necesita 162 m³/h.",
    "faq": [
      {
        "q": "¿Qué significa 3 renovaciones por hora?",
        "a": "En una hora entra o sale un volumen igual a tres volúmenes de la sala. Cuando el aire se mezcla, no significa que todo el aire inicial desaparezca en veinte minutos."
      },
      {
        "q": "¿Qué tasa debo elegir?",
        "a": "Depende del uso, los contaminantes, la ocupación y los requisitos aplicables. El valor inicial 3 es un ejemplo, no una norma universal."
      },
      {
        "q": "¿Basta el resultado para elegir un ventilador?",
        "a": "No. También hacen falta el caudal a la resistencia de la instalación, el equilibrio entre impulsión y extracción y las condiciones de la sala. El caudal nominal por sí solo no determina estos datos."
      },
      {
        "q": "¿Cuenta el espacio sobre un falso techo?",
        "a": "Introduce el volumen realmente ventilado. Si el hueco superior participa en la ventilación, añádelo por separado; el cálculo no determina esa disposición."
      }
    ],
    "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es', Partial<CalculatorCopy>>;
