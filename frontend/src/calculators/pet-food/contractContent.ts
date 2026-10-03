import type { CalculatorCopy } from '../../lib/platform/types';
type ContractContent = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent = {
  "ru": {
    "longDescription": "Переводит выбранную оценку потребности в энергии в граммы корма по его калорийности. Отправная формула обмена покоя RER = 70 × масса^0,75 используется в рекомендациях AAHA для предварительных расчётов, но не измеряет расход энергии конкретного животного. Множитель вводится пользователем: здесь нет полей вида, возраста, стерилизации или состояния тела, которые автоматически выбирали бы рацион. Калорийность должна относиться к тому корму, который реально даётся. Угощения и другие источники энергии требуют отдельного учёта.",
    "howItWorks": "RER, ккал/сутки = 70 × кг^0,75. Оценочная энергия = RER × заданный множитель; корм, г/сутки = энергия ÷ ккал на 100 г × 100. Масса, множитель и калорийность должны быть положительными. Это исходная оценка для наблюдения и корректировки, а не доказанная индивидуальная норма.",
    "example": "При введённых 22 кг, множителе 1,6 и 350 ккал/100 г расчёт даёт около 325 г в сутки. Это пример выбранных входов, не назначение собаке такого веса. Удвоение введённой калорийности до 700 ккал/100 г в той же модели уменьшает граммы вдвое, оставляя оценку энергии прежней.",
    "howToUse": [
      "Сверьте массу и цель расчёта с ветеринарной оценкой состояния животного.",
      "Введите согласованный множитель; он не определяется автоматически из активности.",
      "Используйте ккал/100 г конкретного корма и учитывайте другие источники энергии.",
      "Оценивайте динамику массы и состояния тела; рассчитанные граммы могут требовать индивидуальной корректировки."
    ],
    "faq": [
      {
        "q": "Почему масса берётся в степени 0,75, а не как есть?",
        "a": "Степень 0,75 входит в приближённую формулу RER. Она не доказывает, что любые два животных получают корм строго в таком отношении: вид, жизненный этап и состояние тоже важны."
      },
      {
        "q": "Какой множитель выбрать?",
        "a": "Множитель зависит не только от активности. AAHA приводит ориентиры, например 1,2–1,4 для стерилизованных кошек и 1,4–1,6 для стерилизованных собак, с индивидуальным наблюдением и корректировкой. Они не выбираются здесь автоматически."
      },
      {
        "q": "Считать по текущей массе или по целевой?",
        "a": "Это зависит от цели. Для снижения веса AAHA рассматривает идеальную массу; выбор массы и режима должен учитывать состояние животного. Поле само не определяет целевой вес."
      },
      {
        "q": "Влияет ли влажный корм на расчёт?",
        "a": "Формула остаётся той же, но нужна калорийность конкретного влажного корма. При меньших ккал/100 г масса для той же энергии больше; универсальная плотность для влажного корма не предполагается."
      }
    ],
    "disclaimer": "Предварительная оценка не заменяет индивидуальную ветеринарную рекомендацию, особенно при росте, болезни, беременности или снижении веса."
  },
  "en": {
    "longDescription": "Converts a selected energy estimate into food grams using its energy density. The starting resting energy requirement, RER = 70 × weight^0.75, appears in AAHA guidance for initial calculations; it does not measure an individual animal’s expenditure. The multiplier is entered by the user. Species, age, neutering and body condition are not separate inputs that choose a ration automatically. Energy density must describe the food actually offered. Treats and other energy sources need separate accounting.",
    "howItWorks": "RER kcal/day = 70 × kg^0.75. Estimated energy = RER × entered multiplier; food g/day = energy ÷ kcal per 100 g × 100. Weight, multiplier and energy density must be positive. This is a starting estimate to monitor and adjust, not an established individual requirement.",
    "example": "Entered weight 22 kg, multiplier 1.6 and 350 kcal/100 g give about 325 g/day. These are illustrative inputs, not a ration prescribed for every 22 kg dog. Doubling entered density to 700 kcal/100 g halves grams in the same model while estimated energy stays unchanged.",
    "howToUse": [
      "Check weight and the calculation’s aim against an assessment of body condition.",
      "Enter an appropriate agreed multiplier; activity does not select it automatically.",
      "Use the particular food’s kcal/100 g and account for other energy sources.",
      "Monitor weight and body condition; the calculated grams may need individual adjustment."
    ],
    "faq": [
      {
        "q": "Why the power of 0.75 rather than plain weight?",
        "a": "The power 0.75 belongs to an approximate RER equation. It does not prove that any two animals need food in that exact ratio: species, life stage and condition also matter."
      },
      {
        "q": "Which multiplier should I use?",
        "a": "The factor depends on more than activity. AAHA gives starting ranges such as 1.2–1.4 for neutered cats and 1.4–1.6 for neutered dogs, with individual monitoring and adjustment. This tool does not choose them automatically."
      },
      {
        "q": "Should I feed the target weight or the current one?",
        "a": "It depends on the aim. AAHA discusses ideal weight for weight reduction; selecting weight and feeding strategy requires the animal’s condition. This field does not determine a target weight."
      },
      {
        "q": "Does wet food change the calculation?",
        "a": "The equation is unchanged, but use the particular wet food’s energy density. Lower kcal/100 g requires more mass for the same estimated energy; no universal wet-food density is assumed."
      }
    ],
    "disclaimer": "An initial estimate cannot replace individual veterinary feeding advice, especially during growth, illness, pregnancy or weight reduction."
  },
  "uk": {
    "longDescription": "Переводить обрану оцінку потреби в енергії у грами корму за його калорійністю. Початкова формула обміну спокою RER = 70 × маса^0,75 наведена в рекомендаціях AAHA для попередніх розрахунків, але не вимірює витрат конкретної тварини. Множник задає користувач: немає окремих полів виду, віку, стерилізації чи стану тіла, які автоматично обирали б раціон. Калорійність має описувати фактичний корм. Ласощі та інші джерела енергії враховуються окремо.",
    "howItWorks": "RER, ккал/добу = 70 × кг^0,75. Оціночна енергія = RER × заданий множник; корм, г/добу = енергія ÷ ккал на 100 г × 100. Маса, множник і калорійність додатні. Це початкова оцінка для спостереження й корекції, не встановлена індивідуальна норма.",
    "example": "Введені 22 кг, множник 1,6 та 350 ккал/100 г дають близько 325 г на добу. Це приклад входів, не призначення кожному собаці такої маси. Подвоєння калорійності до 700 ккал/100 г у тій самій моделі зменшує грами вдвічі за незмінної оцінки енергії.",
    "howToUse": [
      "Зіставте масу й мету розрахунку з оцінкою стану тіла.",
      "Введіть узгоджений множник: активність не визначає його автоматично.",
      "Використовуйте ккал/100 г конкретного корму та враховуйте інші джерела енергії.",
      "Спостерігайте за масою й станом тіла та індивідуально коригуйте оцінку."
    ],
    "faq": [
      {
        "q": "Чому степінь 0,75, а не одиниця?",
        "a": "Степінь 0,75 належить наближеній формулі RER. Вона не доводить, що будь-які дві тварини потребують корму саме в цьому співвідношенні: вид, життєвий етап і стан також важливі."
      },
      {
        "q": "Який множник активності обрати?",
        "a": "Множник залежить не лише від активності. AAHA наводить початкові діапазони, зокрема 1,2–1,4 для стерилізованих котів та 1,4–1,6 для стерилізованих собак, із подальшим спостереженням і корекцією. Автоматичного вибору тут немає."
      },
      {
        "q": "Від якої ваги рахувати за надмірної маси?",
        "a": "AAHA розглядає ідеальну масу для зниження ваги. Вибір маси та режиму залежить від стану тварини; це поле саме не встановлює цільову вагу."
      },
      {
        "q": "Наскільки точна ця норма?",
        "a": "Формула є початковою оцінкою. Вона не має універсальної гарантованої похибки для цієї сторінки: AAHA вимагає оцінювати зміни маси й стану та коригувати індивідуально."
      }
    ],
    "disclaimer": "Попередня оцінка не замінює індивідуальної ветеринарної рекомендації, особливо під час росту, хвороби, вагітності чи зниження ваги."
  },
  "de": {
    "longDescription": "Rechnet eine gewählte Energieschätzung über den Energiegehalt des Futters in Gramm um. Der Ausgangswert RER = 70 × Gewicht^0,75 steht in AAHA-Empfehlungen für erste Berechnungen, misst aber keinen individuellen Energieverbrauch. Den Faktor gibt der Nutzer vor. Art, Alter, Kastration und Körperzustand werden nicht als eigene Eingaben automatisch zur Rationswahl verwendet. Der Energiegehalt muss das tatsächlich angebotene Futter beschreiben. Leckerchen und andere Energiequellen sind gesondert zu berücksichtigen.",
    "howItWorks": "RER in kcal/Tag = 70 × kg^0,75. Geschätzte Energie = RER × eingegebener Faktor; Futter g/Tag = Energie ÷ kcal je 100 g × 100. Gewicht, Faktor und Energiegehalt sind positiv. Das Ergebnis ist eine Ausgangsschätzung zur Beobachtung und Anpassung, kein festgestellter individueller Bedarf.",
    "example": "22 kg, Faktor 1,6 und 350 kcal/100 g ergeben rund 325 g/Tag. Das sind Beispielwerte, keine Ration für jeden Hund mit 22 kg. Verdoppeln auf 700 kcal/100 g halbiert im selben Modell die Grammmenge bei unveränderter Energieschätzung.",
    "howToUse": [
      "Gewicht und Berechnungsziel mit einer Körperzustandsbeurteilung abgleichen.",
      "Einen passenden abgestimmten Faktor eingeben; Aktivität wählt ihn nicht automatisch.",
      "kcal/100 g des konkreten Futters verwenden und weitere Energiequellen berücksichtigen.",
      "Gewicht und Körperzustand beobachten und die Schätzung individuell anpassen."
    ],
    "faq": [
      {
        "q": "Warum hoch 0,75 und nicht schlicht das Gewicht?",
        "a": "Die Potenz 0,75 gehört zur näherungsweisen RER-Formel. Sie beweist nicht, dass zwei beliebige Tiere Futter exakt in diesem Verhältnis benötigen; Art, Lebensphase und Zustand sind ebenfalls wichtig."
      },
      {
        "q": "Welchen Faktor soll ich nehmen?",
        "a": "Der Faktor hängt nicht nur von Bewegung ab. AAHA nennt Ausgangsbereiche wie 1,2–1,4 für kastrierte Katzen und 1,4–1,6 für kastrierte Hunde, mit individueller Beobachtung und Anpassung. Hier erfolgt keine automatische Auswahl."
      },
      {
        "q": "Soll ich nach dem Zielgewicht oder dem derzeitigen füttern?",
        "a": "Das hängt vom Ziel ab. Für Gewichtsreduktion behandelt AAHA Idealgewicht; Gewichtsbasis und Fütterungsstrategie müssen den Zustand berücksichtigen. Das Feld bestimmt kein Zielgewicht."
      },
      {
        "q": "Ändert Nassfutter die Rechnung?",
        "a": "Die Formel bleibt gleich, doch der konkrete Nassfutter-Energiegehalt ist nötig. Weniger kcal/100 g ergeben mehr Masse für dieselbe Energie; ein allgemeiner Nassfutterwert wird nicht angenommen."
      }
    ],
    "disclaimer": "Eine Ausgangsschätzung ersetzt keine individuelle tierärztliche Fütterungsempfehlung, besonders bei Wachstum, Erkrankung, Trächtigkeit oder Gewichtsreduktion."
  },
  "es": {
    "longDescription": "Convierte una estimación energética elegida en gramos de alimento según su densidad energética. La fórmula inicial RER = 70 × peso^0,75 aparece en recomendaciones de AAHA para cálculos preliminares, pero no mide el gasto individual. El usuario introduce el multiplicador. Especie, edad, esterilización y condición corporal no son entradas separadas que elijan automáticamente la ración. La densidad debe corresponder al alimento ofrecido. Premios y otras fuentes de energía necesitan contabilización aparte.",
    "howItWorks": "RER kcal/día = 70 × kg^0,75. Energía estimada = RER × multiplicador; alimento g/día = energía ÷ kcal por 100 g × 100. Peso, multiplicador y densidad positivos. Es una estimación inicial para observar y ajustar, no una necesidad individual establecida.",
    "example": "22 kg, multiplicador 1,6 y 350 kcal/100 g dan unos 325 g/día. Son entradas ilustrativas, no una ración prescrita para todo perro de 22 kg. Duplicar a 700 kcal/100 g reduce a la mitad los gramos del mismo modelo, manteniendo la energía estimada.",
    "howToUse": [
      "Contrasta peso y objetivo con una evaluación de condición corporal.",
      "Introduce un multiplicador apropiado acordado; la actividad no lo selecciona automáticamente.",
      "Usa kcal/100 g del alimento concreto y cuenta otras fuentes de energía.",
      "Observa peso y condición corporal y ajusta individualmente la estimación."
    ],
    "faq": [
      {
        "q": "¿Por qué la potencia 0,75 y no el peso a secas?",
        "a": "La potencia 0,75 forma parte de una ecuación aproximada de RER. No demuestra que dos animales cualesquiera necesiten comida en esa proporción exacta: especie, etapa vital y estado también importan."
      },
      {
        "q": "¿Qué multiplicador debo usar?",
        "a": "No depende solo de actividad. AAHA da rangos iniciales como 1,2–1,4 para gatos esterilizados y 1,4–1,6 para perros esterilizados, con observación y ajuste individuales. Esta página no los elige automáticamente."
      },
      {
        "q": "¿Debo alimentar según el peso objetivo o el actual?",
        "a": "Depende del objetivo. AAHA considera peso ideal para reducir peso; la base y estrategia requieren evaluar el estado del animal. Este campo no determina un peso objetivo."
      },
      {
        "q": "¿El alimento húmedo cambia el cálculo?",
        "a": "La fórmula no cambia, pero usa la densidad del alimento húmedo concreto. Menos kcal/100 g implican mayor masa para la misma energía; no se supone una densidad húmeda universal."
      }
    ],
    "disclaimer": "La estimación inicial no sustituye una recomendación veterinaria individual, especialmente durante crecimiento, enfermedad, gestación o reducción de peso."
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractContent>;
