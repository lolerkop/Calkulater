import type { CalculatorCopy } from '../../lib/platform/types';

// Actual 145 native body individually reviewed; scoped model and input corrections. Agent review is not human approval.
export const buildingWave13ContractContent = {
  "ru": {
    "longDescription": "Оценивает массу смешанной эпоксидной системы для прямоугольной заливки и делит её на смолу и отвердитель. Нужны плотность именно смешанной системы и соотношение компонентов по массе. Калькулятор не определяет допустимую толщину заливки, время работы, условия отверждения или состав набора — их задаёт инструкция выбранного продукта.",
    "howItWorks": "Длина L и ширина B в см, толщина t в мм: объём = L·B·t/10 в см³; масса M = L·B·t·ρ/10 000 в кг при ρ в г/см³. Для массового r:1 смола = M·r/(r+1), отвердитель = M/(r+1). Все входы положительны и конечны. Ввод 100:47 означает r = 100/47; потери отдельно не добавляются.",
    "howToUse": [
      "Введите прямоугольные размеры и толщину слоя в указанных единицах.",
      "Возьмите плотность смеси и массовую пропорцию из документации продукта.",
      "Если дана пропорция по объёму, сначала переведите её с учётом плотностей компонентов."
    ],
    "example": "Столешница 100×50 см слоем 5 мм требует 2,75 кг смеси: 1,833 кг смолы и 0,917 кг отвердителя. Плотность смеси 1,1 г/см³, массовое соотношение 2:1, без запаса.",
    "faq": [
      {
        "q": "Что будет, если ошибиться с пропорцией?",
        "a": "Свойства отверждённой системы могут не соответствовать заданным. Производитель WEST SYSTEM запрещает менять пропорцию ради ускорения отверждения; результат ошибки и способ исправления зависят от продукта и состояния заливки."
      },
      {
        "q": "Почему нельзя назначить одну толщину заливки всем смолам?",
        "a": "Тепловыделение и допустимый объём замеса зависят от системы, геометрии и условий. Ограничения конкретного производителя нельзя переносить на все смолы."
      },
      {
        "q": "Пропорция по массе или по объёму?",
        "a": "Поле r:1 всегда по массе. При объёмном rᵥ:1 массовое r = rᵥ·ρсмолы/ρотвердителя. Плотность смешанной системы для общей массы — отдельный показатель."
      },
      {
        "q": "Добавлен ли запас на потери?",
        "a": "Нет. Размеры задают геометрический объём, а потери в таре и на инструментах учитывают отдельно. Универсального процента калькулятор не назначает."
      }
    ]
  },
  "en": {
    "longDescription": "Estimates mixed epoxy mass for a rectangular pour and splits it into resin and hardener. Use the density of the mixed system and a mass-based component ratio. It does not determine allowable pour depth, working time, curing conditions or kit composition; these come from the selected product instructions.",
    "howItWorks": "Length L and width B are in cm, thickness t in mm: volume = L·B·t/10 in cm³; mass M = L·B·t·ρ/10,000 in kg for ρ in g/cm³. For mass ratio r:1, resin = M·r/(r+1) and hardener = M/(r+1). Inputs are positive and finite. A 100:47 ratio means r = 100/47; no loss allowance is added.",
    "howToUse": [
      "Enter rectangular dimensions and layer thickness in the displayed units.",
      "Take mixed density and mass ratio from the product documentation.",
      "If the stated ratio is by volume, convert it using component densities first."
    ],
    "example": "A 100×50 cm top at 5 mm needs 2.75 kg of mix: 1.833 kg resin and 0.917 kg hardener. Mixed density is 1.1 g/cm³ and mass ratio 2:1, without allowance.",
    "faq": [
      {
        "q": "What happens if the ratio is wrong?",
        "a": "The cured system may not meet its intended properties. WEST SYSTEM instructs users not to change the ratio to speed curing; the consequences and possible remedy depend on product and pour condition."
      },
      {
        "q": "Why is there no universal pour depth?",
        "a": "Heat generation and allowable batch volume depend on the system, geometry and conditions. One manufacturer’s product limits do not apply to every epoxy."
      },
      {
        "q": "Is the ratio by mass or volume?",
        "a": "The r:1 field always uses mass. A volume ratio rᵥ:1 converts to r = rᵥ·ρresin/ρhardener. Mixed-system density for total mass is a separate quantity."
      },
      {
        "q": "Is a loss allowance added?",
        "a": "No. Dimensions determine geometric volume; losses in containers and tools are accounted for separately. The calculator sets no universal percentage."
      }
    ],
    "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
  },
  "uk": {
    "longDescription": "Оцінює масу змішаної епоксидної системи для прямокутного заливання й ділить її на смолу та затверджувач. Потрібні густина саме змішаної системи та масове співвідношення компонентів. Допустиму товщину заливання, час роботи, умови тверднення й склад набору визначає інструкція обраного продукту.",
    "howItWorks": "Довжина L і ширина B у см, товщина t у мм: об’єм = L·B·t/10 у см³; маса M = L·B·t·ρ/10 000 у кг за ρ у г/см³. Для масового r:1 смола = M·r/(r+1), затверджувач = M/(r+1). Входи додатні й скінченні. Для 100:47 вводьте r = 100/47; втрати окремо не додаються.",
    "howToUse": [
      "Введіть прямокутні розміри й товщину шару в зазначених одиницях.",
      "Візьміть густину суміші й масову пропорцію з документації продукту.",
      "Об’ємну пропорцію спочатку переведіть за густинами компонентів."
    ],
    "example": "Стільниця 100 × 50 см шаром 5 мм потребує 2,75 кг суміші: 1,833 кг смоли і 0,917 кг затверджувача за пропорції 2:1. Густина суміші 1,1 г/см³, масова пропорція 2:1, без запасу.",
    "faq": [
      {
        "q": "Що буде за неправильної пропорції?",
        "a": "Властивості затверділої системи можуть не відповідати заданим. WEST SYSTEM забороняє змінювати пропорцію задля прискорення тверднення; наслідки та можливість виправлення залежать від продукту й стану заливання."
      },
      {
        "q": "Чому немає універсальної товщини заливання?",
        "a": "Тепловиділення й допустимий об’єм замісу залежать від системи, геометрії та умов. Межі продукту одного виробника не застосовні до всіх смол."
      },
      {
        "q": "Пропорція за масою чи за об’ємом?",
        "a": "Поле r:1 завжди за масою. Об’ємне rᵥ:1 переводиться як r = rᵥ·ρсмоли/ρзатверджувача. Густина змішаної системи для загальної маси — окремий показник."
      },
      {
        "q": "Чи додано запас на втрати?",
        "a": "Ні. Розміри визначають геометричний об’єм, а втрати в тарі й на інструменті враховуються окремо. Універсального відсотка калькулятор не задає."
      }
    ],
    "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані.",
    "seoDescription": "Розрахуйте масу епоксидної суміші, смоли та затверджувача за розмірами заливання, густиною й масовою пропорцією."
  },
  "de": {
    "longDescription": "Schätzt die Masse einer gemischten Epoxidharzsystem-Menge für einen rechteckigen Guss und teilt sie in Harz und Härter auf. Benötigt werden die Dichte der fertigen Mischung und ein Massenverhältnis. Zulässige Gießhöhe, Verarbeitungszeit, Aushärtungsbedingungen und Zusammensetzung bestimmt die Anleitung des gewählten Produkts.",
    "howItWorks": "Länge L und Breite B stehen in cm, Dicke t in mm: Volumen = L·B·t/10 in cm³; Masse M = L·B·t·ρ/10.000 in kg bei ρ in g/cm³. Beim Massenverhältnis r:1 gilt Harz = M·r/(r+1), Härter = M/(r+1). Eingaben sind positiv und endlich. 100:47 bedeutet r = 100/47; ein Verlustzuschlag wird nicht addiert.",
    "howToUse": [
      "Gib rechteckige Maße und Schichtdicke in den angezeigten Einheiten ein.",
      "Übernimm Mischungsdichte und Massenverhältnis aus der Produktdokumentation.",
      "Rechne ein Volumenverhältnis zuerst mit den Komponentendichten um."
    ],
    "example": "Eine Platte von 100×50 cm mit 5 mm braucht 2,75 kg Mischung: 1,833 kg Harz und 0,917 kg Härter. Mischungsdichte 1,1 g/cm³, Massenverhältnis 2:1, ohne Zuschlag.",
    "faq": [
      {
        "q": "Was passiert bei falschem Verhältnis?",
        "a": "Die ausgehärtete Mischung erreicht möglicherweise nicht die vorgesehenen Eigenschaften. WEST SYSTEM untersagt Verhältnisänderungen zur Beschleunigung; Folgen und mögliche Abhilfe hängen von Produkt und Gusszustand ab."
      },
      {
        "q": "Warum gibt es keine allgemeine Gießhöhe?",
        "a": "Wärmeentwicklung und zulässige Mischmenge hängen von System, Geometrie und Bedingungen ab. Produktgrenzen eines Herstellers gelten nicht für jedes Epoxidharz."
      },
      {
        "q": "Gilt das Verhältnis nach Masse oder Volumen?",
        "a": "Das Feld r:1 gilt immer nach Masse. Ein Volumenverhältnis rᵥ:1 ergibt r = rᵥ·ρHarz/ρHärter. Die Mischungsdichte für die Gesamtmasse ist ein anderer Wert."
      },
      {
        "q": "Wird ein Verlustzuschlag addiert?",
        "a": "Nein. Die Maße bestimmen das geometrische Volumen; Rückstände in Gefäßen und an Werkzeugen werden separat berücksichtigt. Der Rechner setzt keinen allgemeinen Prozentsatz."
      }
    ],
    "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
  },
  "es": {
    "longDescription": "Estima la masa de la mezcla epoxi para un vertido rectangular y la reparte entre resina y endurecedor. Se requieren la densidad de la mezcla y una proporción por masa. El cálculo no determina espesor admisible, tiempo de trabajo, condiciones de curado ni composición del kit; consulta las instrucciones del producto.",
    "howItWorks": "Largo L y ancho B están en cm, espesor t en mm: volumen = L·B·t/10 en cm³; masa M = L·B·t·ρ/10.000 en kg con ρ en g/cm³. Para una proporción en masa r:1, resina = M·r/(r+1) y endurecedor = M/(r+1). Los datos son positivos y finitos. 100:47 significa r = 100/47; no se añade margen por pérdidas.",
    "howToUse": [
      "Introduce las dimensiones rectangulares y el espesor en las unidades indicadas.",
      "Consulta la densidad de mezcla y la proporción en masa en la documentación.",
      "Convierte primero las proporciones en volumen usando las densidades de los componentes."
    ],
    "example": "Un tablero de 100×50 cm a 5 mm necesita 2,75 kg de mezcla: 1,833 kg de resina y 0,917 kg de endurecedor. Densidad de mezcla 1,1 g/cm³ y proporción en masa 2:1, sin margen.",
    "faq": [
      {
        "q": "¿Qué ocurre si la proporción es incorrecta?",
        "a": "La mezcla curada puede no alcanzar sus propiedades previstas. WEST SYSTEM indica que no se cambie la proporción para acelerar el curado; las consecuencias y posibles soluciones dependen del producto y del estado del vertido."
      },
      {
        "q": "¿Por qué no hay un espesor universal de vertido?",
        "a": "La generación de calor y el volumen de mezcla admisible dependen del sistema, la geometría y las condiciones. Los límites de un fabricante no son universales."
      },
      {
        "q": "¿La proporción es en masa o en volumen?",
        "a": "El campo r:1 siempre es por masa. Una proporción de volumen rᵥ:1 se convierte con r = rᵥ·ρresina/ρendurecedor. La densidad de la mezcla para la masa total es otra magnitud."
      },
      {
        "q": "¿Se añade margen por pérdidas?",
        "a": "No. Las dimensiones determinan el volumen geométrico; los restos en recipientes y herramientas se consideran aparte. El cálculo no establece un porcentaje universal."
      }
    ],
    "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es', Partial<CalculatorCopy>>;
