import type { CalculatorCopy } from '../../lib/platform/types';
type ContractContent = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent = {
  "ru": {
    "longDescription": "Показывает условный «человеческий» возраст кошки или собаки по кусочной шкале вместо одного множителя семь. В выбранной шкале первый год соответствует 15, второй добавляет 9, а после двух лет прибавка равна 4 для кошки и небольшой собаки либо 7 для крупной. Эти числа сохранены как иллюстрация разных этапов шкалы, а не как измерение биологического возраста. Порода, индивидуальное здоровье и продолжительность жизни из двух полей не определяются. Для ветеринарной оценки важнее собственный возраст и жизненный этап животного.",
    "howItWorks": "Для возраста y ≤ 1: 15y; для 1 < y ≤ 2: 15 + 9(y − 1); после двух лет: 24 + k(y − 2), где k = 4 для кошки/небольшой собаки и 7 для крупной. Положительные дробные годы поддерживаются на всех участках. Значения при переходах непрерывны: 1 год даёт 15, 2 года — 24. Шкала не предсказывает срок жизни.",
    "example": "Кошка 7 лет даёт 44 по выбранной шкале: 15 + 9 + 5 × 4. Крупная собака того же возраста даёт 59. На границах: 0,5 года → 7,5; 1,5 → 19,5; кошка 2,5 года → 26.",
    "howToUse": [
      "Выберите одну из трёх представленных групп.",
      "Введите собственный возраст животного в годах; дробная часть допустима и после двух лет.",
      "Читайте результат как иллюстрацию шкалы, а не диагноз или медицинскую стадию.",
      "Сведения о породе, состоянии и уходе обсуждайте отдельно от этого пересчёта."
    ],
    "faq": [
      {
        "q": "Почему нельзя просто умножать возраст на семь?",
        "a": "Один множитель не отражает разных жизненных этапов животных. Здесь выбранная кусочная шкала меняет наклон после первого и второго года; это не доказательство точного человеческого эквивалента."
      },
      {
        "q": "Почему крупные собаки стареют быстрее?",
        "a": "Размер и порода связаны с различиями жизненных этапов, но коэффициенты 4 и 7 здесь лишь выбранные веса шкалы. Они не измеряют индивидуальную скорость старения."
      },
      {
        "q": "Куда отнести собаку среднего размера?",
        "a": "Отдельной средней группы в этом инструменте нет. Можно сравнить две собачьи шкалы, но ни одна автоматически не становится точной для конкретной породы."
      },
      {
        "q": "Насколько точен такой пересчёт?",
        "a": "Число точно следует заданной формуле, но её биологическая точность не установлена. Возраст в этой шкале нельзя использовать для назначения ухода, обследований или лечения."
      }
    ],
    "disclaimer": "Условная шкала не является ветеринарной оценкой возраста, здоровья или оставшейся продолжительности жизни."
  },
  "en": {
    "longDescription": "Shows an illustrative “human” age for a cat or dog using a piecewise scale rather than a single multiplier of seven. The selected scale assigns 15 to the first year, another 9 to the second, then 4 per year for cats and small dogs or 7 for large dogs. These retained numbers illustrate a changing scale; they do not measure biological age. Two inputs cannot establish breed effects, individual health or life expectancy. An animal’s own age and life stage are more relevant to veterinary assessment.",
    "howItWorks": "For age y ≤ 1: 15y; for 1 < y ≤ 2: 15 + 9(y − 1); after two years: 24 + k(y − 2), with k = 4 for cats/small dogs and 7 for large dogs. Positive fractional years work in every segment. Transitions are continuous: one year gives 15 and two gives 24. This scale does not predict lifespan.",
    "example": "A cat aged 7 gives 44 on the selected scale: 15 + 9 + 5 × 4. A large dog at the same age gives 59. Segment examples: 0.5 years → 7.5; 1.5 → 19.5; a cat aged 2.5 → 26.",
    "howToUse": [
      "Choose one of the three available groups.",
      "Enter the animal’s own age in years; fractions also work after age two.",
      "Read the result as a scale illustration, not a diagnosis or medical stage.",
      "Assess breed, condition and care separately from this conversion."
    ],
    "faq": [
      {
        "q": "Why is multiplying by seven wrong?",
        "a": "A single multiplier does not capture distinct animal life stages. This selected scale changes slope after years one and two, without establishing an exact human-age equivalent."
      },
      {
        "q": "Why do large dogs age faster?",
        "a": "Size and breed are associated with life-stage differences, but 4 and 7 are only the chosen scale weights here. They do not measure an individual rate of ageing."
      },
      {
        "q": "Where do medium dogs fit?",
        "a": "There is no separate medium group. You can compare the two dog scales, but neither automatically becomes accurate for a particular breed."
      },
      {
        "q": "How exact is this conversion?",
        "a": "The arithmetic follows the stated formula; its biological accuracy is not established. This number cannot determine care, examinations or treatment."
      }
    ],
    "disclaimer": "This illustrative scale is not a veterinary assessment of age, health or remaining life expectancy."
  },
  "uk": {
    "longDescription": "Показує умовний «людський» вік кота чи собаки за кусочною шкалою замість одного множника сім. Обрана шкала задає 15 за перший рік, ще 9 за другий, а після двох років додає 4 для кота й невеликого собаки або 7 для великого. Ці збережені числа ілюструють різні ділянки шкали, а не вимірюють біологічний вік. Два поля не визначають вплив породи, індивідуальне здоров’я чи тривалість життя. Для ветеринарної оцінки важливі власний вік та життєвий етап тварини.",
    "howItWorks": "Для віку y ≤ 1: 15y; для 1 < y ≤ 2: 15 + 9(y − 1); після двох років: 24 + k(y − 2), де k = 4 для котів/невеликих собак і 7 для великих. Додатні дробові роки підтримуються на всіх ділянках. Переходи неперервні: 1 рік дає 15, 2 роки — 24. Шкала не прогнозує тривалість життя.",
    "example": "Кіт 7 років дає 44 за обраною шкалою: 15 + 9 + 5 × 4. Великий собака того самого віку дає 59. На ділянках: 0,5 року → 7,5; 1,5 → 19,5; кіт 2,5 року → 26.",
    "howToUse": [
      "Оберіть одну з трьох наявних груп.",
      "Введіть власний вік тварини в роках; дроби допустимі й після двох років.",
      "Сприймайте число як ілюстрацію шкали, не діагноз чи медичну стадію.",
      "Породу, стан і догляд оцінюйте окремо від цього переведення."
    ],
    "faq": [
      {
        "q": "Чому не множити на сім?",
        "a": "Один множник не описує різних життєвих етапів тварини. Обрана шкала змінює нахил після першого й другого року, але не доводить точного людського еквівалента."
      },
      {
        "q": "Чи однаково старіють великі й малі собаки?",
        "a": "Розмір і порода пов’язані з відмінностями життєвих етапів. Коефіцієнти 4 та 7 тут є обраними вагами шкали, не вимірюванням індивідуального старіння."
      },
      {
        "q": "Коли тварину вважають літньою?",
        "a": "Життєвий етап залежить від виду, породи, розміру й стану тварини. AAHA рекомендує оцінювати ці особливості, а не призначати статус за людським еквівалентом цього калькулятора."
      },
      {
        "q": "Наскільки точне таке переведення?",
        "a": "Арифметика відповідає формулі, але її біологічну точність не встановлено. Число не визначає графік оглядів, догляд чи лікування."
      }
    ],
    "disclaimer": "Умовна шкала не є ветеринарною оцінкою віку, здоров’я або залишкової тривалості життя."
  },
  "de": {
    "longDescription": "Zeigt ein anschauliches „Menschenalter“ für Katze oder Hund anhand einer stückweisen Skala statt eines einzelnen Faktors sieben. Die gewählte Skala setzt 15 für das erste Jahr, weitere 9 für das zweite und danach 4 pro Jahr für Katzen und kleine Hunde oder 7 für große Hunde. Diese erhaltenen Zahlen illustrieren wechselnde Skalenabschnitte, messen aber kein biologisches Alter. Zwei Eingaben bestimmen weder Rasseeinflüsse noch Gesundheit oder Lebenserwartung. Für tierärztliche Beurteilung sind eigenes Alter und Lebensphase des Tieres relevanter.",
    "howItWorks": "Bei Alter y ≤ 1: 15y; bei 1 < y ≤ 2: 15 + 9(y − 1); danach: 24 + k(y − 2), mit k = 4 für Katzen/kleine Hunde und 7 für große. Positive Bruchteile eines Jahres funktionieren in jedem Abschnitt. Übergänge sind stetig: ein Jahr ergibt 15, zwei ergeben 24. Die Skala sagt keine Lebensdauer voraus.",
    "example": "Eine Katze mit 7 Jahren ergibt 44 auf der gewählten Skala: 15 + 9 + 5 × 4. Ein großer Hund mit gleichem Alter ergibt 59. Beispiele: 0,5 Jahre → 7,5; 1,5 → 19,5; Katze mit 2,5 → 26.",
    "howToUse": [
      "Eine der drei verfügbaren Gruppen wählen.",
      "Eigenes Tieralter in Jahren eingeben; Bruchteile sind auch nach zwei Jahren möglich.",
      "Ergebnis als Skalenillustration lesen, nicht als Diagnose oder medizinische Phase.",
      "Rasse, Zustand und Pflege getrennt von dieser Umrechnung beurteilen."
    ],
    "faq": [
      {
        "q": "Warum ist das Multiplizieren mit sieben falsch?",
        "a": "Ein einzelner Faktor bildet unterschiedliche tierische Lebensphasen nicht ab. Die gewählte Skala ändert nach Jahr eins und zwei ihre Steigung, ohne ein exaktes Menschenäquivalent nachzuweisen."
      },
      {
        "q": "Warum altern große Hunde schneller?",
        "a": "Größe und Rasse hängen mit Lebensphasenunterschieden zusammen. Die Werte 4 und 7 sind hier jedoch gewählte Skalenfaktoren, keine Messung individuellen Alterns."
      },
      {
        "q": "Wohin gehören mittelgroße Hunde?",
        "a": "Eine mittlere Gruppe ist nicht vorhanden. Beide Hundeskalen lassen sich vergleichen; keine wird dadurch automatisch für eine bestimmte Rasse genau."
      },
      {
        "q": "Wie genau ist diese Umrechnung?",
        "a": "Die Rechnung folgt der Formel; biologische Genauigkeit ist nicht belegt. Das Ergebnis bestimmt weder Pflege noch Untersuchungen oder Behandlung."
      }
    ],
    "disclaimer": "Diese anschauliche Skala ist keine tierärztliche Beurteilung von Alter, Gesundheit oder verbleibender Lebenserwartung."
  },
  "es": {
    "longDescription": "Muestra una edad “humana” ilustrativa de gato o perro con una escala por tramos, en lugar de multiplicar siempre por siete. La escala elegida asigna 15 al primer año, otros 9 al segundo y después 4 por año para gatos y perros pequeños o 7 para perros grandes. Son cifras conservadas para ilustrar tramos distintos, no una medición de edad biológica. Dos entradas no determinan efectos de raza, salud individual ni esperanza de vida. La edad propia y etapa vital del animal son más pertinentes para la evaluación veterinaria.",
    "howItWorks": "Para edad y ≤ 1: 15y; para 1 < y ≤ 2: 15 + 9(y − 1); después: 24 + k(y − 2), con k = 4 para gatos/perros pequeños y 7 para grandes. Admite años fraccionarios positivos en todos los tramos. Los cambios son continuos: un año da 15 y dos dan 24. La escala no predice duración de vida.",
    "example": "Un gato de 7 años da 44 en esta escala: 15 + 9 + 5 × 4. Un perro grande de la misma edad da 59. Ejemplos por tramos: 0,5 años → 7,5; 1,5 → 19,5; gato de 2,5 → 26.",
    "howToUse": [
      "Elige uno de los tres grupos disponibles.",
      "Introduce la edad propia en años; también se admiten fracciones después de los dos años.",
      "Lee el número como ilustración de una escala, no diagnóstico ni etapa médica.",
      "Evalúa raza, estado y cuidados aparte de la conversión."
    ],
    "faq": [
      {
        "q": "¿Por qué es erróneo multiplicar por siete?",
        "a": "Un único multiplicador no refleja las distintas etapas vitales. Esta escala cambia de pendiente tras el primer y segundo año, sin establecer un equivalente humano exacto."
      },
      {
        "q": "¿Por qué envejecen más deprisa los perros grandes?",
        "a": "Tamaño y raza se relacionan con diferencias vitales, pero 4 y 7 son solo los pesos elegidos de esta escala. No miden la velocidad individual de envejecimiento."
      },
      {
        "q": "¿Dónde encajan los perros medianos?",
        "a": "No hay un grupo mediano separado. Puedes comparar ambas escalas caninas, pero ninguna se vuelve automáticamente precisa para una raza concreta."
      },
      {
        "q": "¿Qué exactitud tiene esta conversión?",
        "a": "La aritmética sigue la fórmula; su exactitud biológica no está establecida. El número no determina cuidados, exploraciones ni tratamientos."
      }
    ],
    "disclaimer": "La escala ilustrativa no es una evaluación veterinaria de edad, salud o esperanza de vida restante."
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractContent>;
