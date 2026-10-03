import type { CalculatorCopy } from '../../lib/platform/types';

// Existing native content individually reviewed; scoped model and input corrections.
export const automotiveWave10ContractContent = {
  "ru": {
    "longDescription": "Считает объём масла для заданного объёма бензина и отношения 1:N по объёму: одна часть масла на N частей бензина. Отдельно показаны номинальный общий объём и доля масла в смеси. Диапазон N = 20–100 — ограничение этого инструмента, а не рекомендация для всех двигателей. Выбор отношения, масла, бензина и условий хранения должен соответствовать инструкции конкретного двигателя и продуктов.",
    "howItWorks": "Масло, мл = 1000·бензин, л/N. Номинальный объём, л = бензин·(1 + 1/N); доля масла = 100/(N + 1) %. Сумма объёмов — модель аддитивности, а не измеренный конечный объём смеси. Бензин положителен, N от 20 до 100; непредставимые результаты отклоняются.",
    "howToUse": [
      "Проверьте требуемые двигателем отношение, масло и бензин по его инструкции.",
      "Введите положительный объём бензина в литрах и N для отношения 1:N, в пределах инструмента 20–100.",
      "Отмерьте показанный объём масла в мл; порядок приготовления и хранения возьмите из соответствующих инструкций."
    ],
    "example": "На 5 литров бензина при 1:50 нужно 100 мл масла; номинальная сумма объёмов — 5,1 литра.",
    "faq": [
      {
        "q": "Что будет, если налить масла больше нормы?",
        "a": "Не меняйте указанное производителем отношение в попытке «защитить» двигатель. Лишнее масло меняет состав смеси и условия работы; калькулятор только отмеряет заданную пропорцию и не оценивает совместимость или последствия."
      },
      {
        "q": "Почему доля масла не ровно 2 % при 1:50?",
        "a": "Потому что пропорция задана к бензину, а доля считается от готовой смеси. На 1000 мл бензина приходится 20 мл масла, но смеси получается 1020 мл, и 20/1020 даёт 1,96 %."
      },
      {
        "q": "Можно ли лить смесь в четырёхтактный двигатель?",
        "a": "Решает инструкция конкретного двигателя. Обычные двигатели с отдельной масляной системой и двигатели, работающие на топливной смеси, требуют разных способов смазки. Например, STIHL 4-MIX работает по четырёхтактному принципу, но использует бензино-масляную смесь; одного числа тактов недостаточно для выбора."
      },
      {
        "q": "Подходит ли бензин с этанолом?",
        "a": "Совместимость с этанолом и срок хранения определяют изготовители двигателя и топлива. Например, требования STIHL к обычному бензину и готовому MotoMix различаются. Здесь нет универсального срока в один месяц или разрешённой доли этанола для любой техники."
      }
    ]
  },
  "en": {
    "longDescription": "Calculates oil for a petrol volume and a 1:N volume ratio: one part oil to N parts petrol. It also shows nominal combined volume and the oil share of the mixture. The N = 20–100 range is a product limit, not a recommendation for every engine. Choose the ratio, oil, petrol and storage conditions from the particular engine and product instructions.",
    "howItWorks": "Oil in mL = 1000·petrol in L/N. Nominal total in L = petrol·(1 + 1/N); oil share = 100/(N + 1)%. Adding volumes is an additive-volume assumption, not a measured final mixture volume. Petrol is positive and N is from 20 to 100; unrepresentable results are rejected.",
    "howToUse": [
      "Check the engine instructions for its required ratio, oil and petrol.",
      "Enter a positive petrol volume in litres and N for 1:N, within this tool’s 20–100 range.",
      "Measure the displayed oil in mL; follow the applicable preparation and storage instructions."
    ],
    "example": "Five litres of petrol at 1:50 needs 100 mL of oil; the nominal volume sum is 5.1 litres.",
    "faq": [
      {
        "q": "What happens with too much oil?",
        "a": "Do not alter the manufacturer’s specified ratio to “protect” an engine. Extra oil changes the mixture and operating conditions; the tool only measures the chosen proportion and does not assess compatibility or consequences."
      },
      {
        "q": "Why is the oil share not exactly 2 % at 1:50?",
        "a": "Because the ratio is stated against the petrol while the share is measured against the finished mixture. 1000 ml of petrol takes 20 ml of oil, but the mixture is 1020 ml, and 20/1020 gives 1.96 %."
      },
      {
        "q": "Can the mixture go into a four-stroke engine?",
        "a": "Use the particular engine’s instructions. Engines with a separate oil system and engines lubricated by a fuel mixture require different arrangements. STIHL 4-MIX, for example, uses a four-stroke principle with a petrol-oil mixture; stroke count alone does not decide this."
      },
      {
        "q": "Is petrol with ethanol suitable?",
        "a": "The engine and fuel manufacturers specify ethanol compatibility and storage life. STIHL’s instructions for ordinary petrol and ready-mixed MotoMix, for example, differ. This tool gives no universal one-month storage limit or ethanol allowance for every machine."
      }
    ]
  },
  "uk": {
    "longDescription": "Рахує мастило для заданого об’єму бензину й об’ємного співвідношення 1:N: одна частина мастила на N частин бензину. Окремо показує номінальний сумарний об’єм і частку мастила в суміші. Межі N = 20–100 — обмеження інструмента, а не рекомендація для всіх двигунів. Пропорцію, мастило, бензин та умови зберігання обирайте за інструкціями конкретного двигуна й продуктів.",
    "howItWorks": "Мастило, мл = 1000·бензин, л/N. Номінальний об’єм, л = бензин·(1 + 1/N); частка мастила = 100/(N + 1) %. Додавання об’ємів є припущенням моделі, а не виміряним кінцевим об’ємом суміші. Бензин додатний, N від 20 до 100; непредставимі результати відхиляються.",
    "howToUse": [
      "Перевірте потрібні двигуну пропорцію, мастило й бензин за його інструкцією.",
      "Введіть додатний об’єм бензину в літрах та N для 1:N у межах інструмента 20–100.",
      "Відміряйте показане мастило в мл; порядок приготування й зберігання беріть із відповідних інструкцій."
    ],
    "example": "На 5 літрів бензину за 1:50 потрібно 100 мл мастила; номінальна сума об’ємів — 5,1 літра.",
    "faq": [
      {
        "q": "Що буде за нестачі мастила?",
        "a": "Дотримуйтеся пропорції та типу мастила з інструкції: сумісність і достатність змащування не визначаються калькулятором. Він не рекомендує довільно зменшувати мастило й не обіцяє безпечної роботи для будь-якого N у своїх межах."
      },
      {
        "q": "А за надлишку?",
        "a": "Не змінюйте вказану виробником пропорцію, намагаючись «захистити» двигун. Надлишок мастила змінює склад суміші та умови роботи; калькулятор лише відмірює задану пропорцію й не оцінює сумісність або наслідки."
      },
      {
        "q": "Яку пропорцію обрати?",
        "a": "Беріть пропорцію з інструкції конкретного двигуна й відповідне мастило. Діапазон 20–100 у калькуляторі не визначає безпечний режим. Навіть чотиритактний принцип не є достатньою ознакою: STIHL 4-MIX використовує бензино-мастильну суміш."
      },
      {
        "q": "Скільки зберігається готова суміш?",
        "a": "Строк зберігання визначають інструкції двигуна, бензину та мастила. Вимоги STIHL до звичайного бензину й готового MotoMix, наприклад, різняться. Тут немає універсального строку в один місяць; готуйте й зберігайте суміш за відповідною інструкцією."
      }
    ]
  },
  "de": {
    "longDescription": "Berechnet die Ölmenge für eine Benzinmenge und das Volumenverhältnis 1:N: ein Teil Öl auf N Teile Benzin. Zusätzlich erscheinen das nominelle Gesamtvolumen und der Ölanteil. N = 20–100 ist eine Produktgrenze, keine Empfehlung für jeden Motor. Verhältnis, Öl, Benzin und Lagerung müssen den Anleitungen des konkreten Motors und der Produkte entsprechen.",
    "howItWorks": "Öl in mL = 1000·Benzin in L/N. Nominelles Gesamtvolumen in L = Benzin·(1 + 1/N); Ölanteil = 100/(N + 1) %. Die Volumenaddition ist eine Modellannahme und kein gemessenes Endvolumen. Benzin ist positiv, N liegt zwischen 20 und 100; nicht darstellbare Ergebnisse werden abgewiesen.",
    "howToUse": [
      "Prüfe in der Motoranleitung das geforderte Verhältnis sowie Öl und Benzin.",
      "Gib eine positive Benzinmenge in Litern und N für 1:N innerhalb der Produktgrenze 20–100 ein.",
      "Miss die angezeigte Ölmenge in mL ab; befolge die jeweiligen Misch- und Lageranweisungen."
    ],
    "example": "Fünf Liter Benzin benötigen bei 1:50 100 mL Öl; die nominelle Volumensumme beträgt 5,1 Liter.",
    "faq": [
      {
        "q": "Was passiert bei zu viel Öl?",
        "a": "Ändere das vom Hersteller vorgeschriebene Verhältnis nicht zum vermeintlichen Schutz des Motors. Mehr Öl verändert das Gemisch und die Betriebsbedingungen; der Rechner misst nur das gewählte Verhältnis ab und beurteilt keine Verträglichkeit oder Folgen."
      },
      {
        "q": "Warum sind es bei 1:50 nicht genau 2 % Öl?",
        "a": "Weil das Verhältnis auf das Benzin bezogen ist, der Anteil aber am fertigen Gemisch gemessen wird. 1000 ml Benzin nehmen 20 ml Öl auf, das Gemisch sind jedoch 1020 ml, und 20/1020 ergeben 1,96 %."
      },
      {
        "q": "Darf das Gemisch in einen Viertaktmotor?",
        "a": "Maßgeblich ist die Anleitung des konkreten Motors. Motoren mit getrenntem Ölsystem und solche mit Schmierung über das Kraftstoffgemisch benötigen verschiedene Verfahren. STIHL 4-MIX arbeitet zum Beispiel nach dem Viertaktprinzip mit Benzin-Öl-Gemisch; die Taktzahl allein reicht nicht zur Entscheidung."
      },
      {
        "q": "Taugt Benzin mit Ethanol?",
        "a": "Ethanolverträglichkeit und Lagerdauer werden von Motor- und Kraftstoffherstellern festgelegt. Die STIHL-Anleitungen für gewöhnliches Benzin und fertiges MotoMix unterscheiden sich beispielsweise. Hier gilt weder eine allgemeine Monatsfrist noch eine Ethanolfreigabe für jede Maschine."
      }
    ]
  },
  "es": {
    "longDescription": "Calcula el aceite para un volumen de gasolina y una proporción volumétrica 1:N: una parte de aceite por N partes de gasolina. Muestra también el volumen combinado nominal y la fracción de aceite. N = 20–100 es un límite del producto, no una recomendación para todos los motores. Elige proporción, aceite, gasolina y almacenamiento según las instrucciones del motor y los productos concretos.",
    "howItWorks": "Aceite en mL = 1000·gasolina en L/N. Volumen nominal en L = gasolina·(1 + 1/N); fracción de aceite = 100/(N + 1) %. Sumar volúmenes es un supuesto de aditividad, no una medida del volumen final. La gasolina es positiva y N va de 20 a 100; los resultados no representables se rechazan.",
    "howToUse": [
      "Consulta las instrucciones del motor para proporción, aceite y gasolina requeridos.",
      "Introduce un volumen positivo de gasolina en litros y N para 1:N dentro del límite 20–100.",
      "Mide el aceite mostrado en mL y sigue las instrucciones correspondientes de preparación y conservación."
    ],
    "example": "Cinco litros de gasolina a 1:50 necesitan 100 mL de aceite; la suma nominal de volúmenes es 5,1 litros.",
    "faq": [
      {
        "q": "¿Qué pasa con demasiado aceite?",
        "a": "No cambies la proporción indicada por el fabricante para “proteger” el motor. El aceite extra modifica la mezcla y las condiciones de funcionamiento; la herramienta solo mide la proporción elegida y no evalúa compatibilidad ni consecuencias."
      },
      {
        "q": "¿Por qué la proporción de aceite no es exactamente el 2 % en 1:50?",
        "a": "Porque la proporción se declara respecto a la gasolina mientras que el porcentaje se mide respecto a la mezcla terminada. 1000 ml de gasolina llevan 20 ml de aceite, pero la mezcla son 1020 ml, y 20/1020 da un 1,96 %."
      },
      {
        "q": "¿Puede la mezcla ir a un motor de cuatro tiempos?",
        "a": "Sigue las instrucciones del motor concreto. Los motores con sistema de aceite separado y los lubricados mediante mezcla necesitan procedimientos distintos. Por ejemplo, STIHL 4-MIX funciona según el principio de cuatro tiempos con mezcla de gasolina y aceite; contar tiempos no basta para decidir."
      },
      {
        "q": "¿Sirve la gasolina con etanol?",
        "a": "La compatibilidad con etanol y la conservación dependen del fabricante del motor y del combustible. Las instrucciones de STIHL para gasolina corriente y MotoMix preparado, por ejemplo, difieren. La herramienta no establece un mes universal de conservación ni autoriza una proporción de etanol para cualquier máquina."
      }
    ]
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', Partial<CalculatorCopy>>;
