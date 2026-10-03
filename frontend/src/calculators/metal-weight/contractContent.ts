import type { CalculatorCopy } from '../../lib/platform/types';

// Actual 145 native body individually reviewed; scoped model and input corrections. Agent review is not human approval.
export const buildingWave13ContractContent = {
  "ru": {
    "longDescription": "Рассчитывает массу сплошного круглого, квадратного или прямоугольного проката по площади сечения, длине и вручную заданной плотности. Также показывает массу метра и отношение метров к тонне. Это геометрическая оценка: марка материала, допуски размеров, покрытия и условия перевозки или подъёма не определяются.",
    "howItWorks": "S=πa²/4 для круга, S=a² для квадрата, S=a·b для полосы; S в мм². Объём=S·L/10⁶ в м³, масса=S·L·ρ/1000 в кг при L в м и ρ в г/см³. Погонная масса=S·ρ/1000, метров в тонне=1000/погонную массу. Активные размеры, длина и плотность положительны и конечны; b используется только у полосы.",
    "howToUse": [
      "Выберите круг, квадрат или полосу.",
      "Введите размеры сечения в мм и длину в м; вторая сторона нужна только полосе.",
      "Задайте плотность вручную в г/см³, а не в кг/м³."
    ],
    "example": "Стальной круг Ø20 мм длиной 6 м весит 14,797 кг — 2,466 кг на погонный метр. Принята плотность 7,85 г/см³.",
    "faq": [
      {
        "q": "Почему плотность вводится вручную?",
        "a": "Нужно значение для фактического материала и условий. Здесь нет выбора марки или автоматической таблицы плотностей."
      },
      {
        "q": "Что означает значение 7,85?",
        "a": "Это плотность примера в г/см³, эквивалентная 7850 кг/м³. Число не подтверждает плотность любой стали; замените его данными выбранного материала."
      },
      {
        "q": "Поддерживаются ли труба и уголок?",
        "a": "Нет. Поддерживаются три сплошных сечения. Уголок не обязательно полый: просто его L-образная геометрия здесь отсутствует. Для круглой трубы есть отдельный расчёт."
      },
      {
        "q": "Почему фактическая масса отличается?",
        "a": "Фактические размеры, плотность и покрытия могут отличаться от введённых. Универсальный процент расхождения и пригодность к перевозке или подъёму не устанавливаются."
      }
    ]
  },
  "en": {
    "longDescription": "Calculates mass of solid round, square or rectangular bar from section area, length and manually supplied density. It also shows mass per metre and metres per tonne. This is a geometric estimate; material grade, dimensional tolerances, coatings and transport or lifting conditions are not determined.",
    "howItWorks": "S=πa²/4 for round, S=a² for square and S=a·b for flat bar; S is in mm². Volume=S·L/10⁶ in m³; mass=S·L·ρ/1000 in kg for L in m and ρ in g/cm³. Mass per metre=S·ρ/1000; metres per tonne=1000/mass per metre. Active dimensions, length and density are positive and finite; b is used only for flat bar.",
    "howToUse": [
      "Choose round, square or flat bar.",
      "Enter section dimensions in mm and length in m; a second side is needed only for flat bar.",
      "Enter density manually in g/cm³, not kg/m³."
    ],
    "example": "A steel round bar 20 mm across and 6 m long weighs 14.797 kg — 2.466 kg per metre. Assumed density: 7.85 g/cm³.",
    "faq": [
      {
        "q": "Why is density entered manually?",
        "a": "Use a value for the actual material and conditions. There is no grade selector or automatic density table."
      },
      {
        "q": "What does 7.85 mean?",
        "a": "It is the example density in g/cm³, equivalent to 7850 kg/m³. It does not establish the density of every steel; replace it with actual material data."
      },
      {
        "q": "Does this support tube or angle?",
        "a": "No. Three solid sections are supported. An angle is not necessarily hollow; its L-shaped geometry is simply absent here. A separate calculator handles round pipe."
      },
      {
        "q": "Why may actual mass differ?",
        "a": "Actual dimensions, density and coatings may differ from inputs. No universal difference percentage or transport or lifting suitability is established."
      }
    ],
    "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
  },
  "uk": {
    "longDescription": "Рахує масу суцільного круглого, квадратного або прямокутного прокату за площею перерізу, довжиною та вручну заданою густиною. Також показує масу метра й відношення метрів до тонни. Це геометрична оцінка без визначення марки, допусків, покриттів чи умов перевезення й піднімання.",
    "howItWorks": "S=πa²/4 для кола, S=a² для квадрата, S=a·b для смуги; S у мм². Об’єм=S·L/10⁶ у м³, маса=S·L·ρ/1000 у кг за L у м і ρ у г/см³. Погонна маса=S·ρ/1000, метрів у тонні=1000/погонну масу. Активні розміри, довжина й густина додатні та скінченні; b використовується лише для смуги.",
    "howToUse": [
      "Оберіть коло, квадрат або смугу.",
      "Введіть розміри перерізу в мм і довжину в м; друга сторона потрібна лише смузі.",
      "Задайте густину вручну у г/см³, а не кг/м³."
    ],
    "example": "Сталевий круг Ø20 мм завдовжки 6 м важить 14,797 кг — 2,466 кг на погонний метр. Прийнята густина 7,85 г/см³.",
    "faq": [
      {
        "q": "Чому густина задається вручну?",
        "a": "Потрібне значення для фактичного матеріалу й умов. Вибору марки або автоматичної таблиці густин немає."
      },
      {
        "q": "Що означає 7,85?",
        "a": "Це густина прикладу у г/см³, еквівалентна 7850 кг/м³. Число не підтверджує густину будь-якої сталі; замініть його даними матеріалу."
      },
      {
        "q": "Чи підтримуються труба й кутник?",
        "a": "Ні. Підтримуються три суцільні перерізи. Кутник не обов’язково порожнистий: його L-подібної геометрії тут просто немає. Для круглої труби є окремий розрахунок."
      },
      {
        "q": "Чому фактична маса відрізняється?",
        "a": "Фактичні розміри, густина й покриття можуть відрізнятися від введених. Універсального відсотка розбіжності або придатності до перевезення й піднімання не встановлюється."
      }
    ],
    "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
  },
  "de": {
    "longDescription": "Berechnet die Masse von vollem Rund-, Vierkant- oder Flachmaterial aus Querschnittsfläche, Länge und manuell eingegebener Dichte. Zusätzlich erscheinen Masse je Meter und Meter je Tonne. Es ist eine geometrische Schätzung ohne Bestimmung von Werkstoffsorte, Maßtoleranzen, Beschichtungen oder Transport- und Hebebedingungen.",
    "howItWorks": "S=πa²/4 für Rundmaterial, S=a² für Vierkant und S=a·b für Flachmaterial; S in mm². Volumen=S·L/10⁶ in m³, Masse=S·L·ρ/1000 in kg bei L in m und ρ in g/cm³. Masse je Meter=S·ρ/1000; Meter je Tonne=1000/Masse je Meter. Aktive Maße, Länge und Dichte sind positiv und endlich; b gilt nur für Flachmaterial.",
    "howToUse": [
      "Wähle Rund-, Vierkant- oder Flachmaterial.",
      "Gib Querschnittsmaße in mm und Länge in m ein; die zweite Seite gilt nur für Flachmaterial.",
      "Trage die Dichte manuell in g/cm³ ein, nicht in kg/m³."
    ],
    "example": "Ein Rundstahl aus Stahl mit 20 mm und 6 m Länge wiegt 14,797 kg — 2,466 kg je Meter. Angenommene Dichte: 7,85 g/cm³.",
    "faq": [
      {
        "q": "Warum wird die Dichte manuell eingegeben?",
        "a": "Benötigt wird ein Wert für das tatsächliche Material und seine Bedingungen. Es gibt keine Sortenauswahl oder automatische Dichtetabelle."
      },
      {
        "q": "Was bedeutet 7,85?",
        "a": "Es ist die Beispieldichte in g/cm³, entsprechend 7850 kg/m³. Sie legt nicht die Dichte jedes Stahls fest; ersetze sie durch Werkstoffdaten."
      },
      {
        "q": "Werden Rohr und Winkel unterstützt?",
        "a": "Nein. Unterstützt werden drei volle Querschnitte. Ein Winkel ist nicht zwangsläufig hohl; seine L-Geometrie ist hier lediglich nicht vorhanden. Für Rundrohr gibt es einen eigenen Rechner."
      },
      {
        "q": "Warum kann die tatsächliche Masse abweichen?",
        "a": "Tatsächliche Maße, Dichte und Beschichtungen können von den Eingaben abweichen. Ein allgemeiner Abweichungsprozentsatz oder Transport- beziehungsweise Hebeeignung wird nicht bestimmt."
      }
    ],
    "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
  },
  "es": {
    "longDescription": "Calcula la masa de barras macizas redondas, cuadradas o rectangulares según sección, longitud y densidad introducida manualmente. Muestra también masa por metro y metros por tonelada. Es una estimación geométrica sin determinar aleación, tolerancias, recubrimientos ni condiciones de transporte o elevación.",
    "howItWorks": "S=πa²/4 para círculo, S=a² para cuadrado y S=a·b para pletina; S en mm². Volumen=S·L/10⁶ en m³; masa=S·L·ρ/1000 en kg con L en m y ρ en g/cm³. Masa por metro=S·ρ/1000; metros por tonelada=1000/masa por metro. Dimensiones activas, longitud y densidad son positivas y finitas; b solo se usa para pletina.",
    "howToUse": [
      "Elige barra redonda, cuadrada o pletina.",
      "Introduce sección en mm y longitud en m; la segunda dimensión solo se necesita para pletina.",
      "Introduce densidad manualmente en g/cm³, no en kg/m³."
    ],
    "example": "Una barra redonda de acero de 20 mm y 6 m pesa 14,797 kg: 2,466 kg por metro. Densidad supuesta: 7,85 g/cm³.",
    "faq": [
      {
        "q": "¿Por qué se introduce la densidad manualmente?",
        "a": "Usa el valor del material real y de sus condiciones. No hay selector de aleaciones ni tabla automática de densidades."
      },
      {
        "q": "¿Qué significa 7,85?",
        "a": "Es la densidad del ejemplo en g/cm³, equivalente a 7850 kg/m³. No establece la densidad de todo acero; sustitúyela por los datos del material."
      },
      {
        "q": "¿Admite tubo o angular?",
        "a": "No. Se admiten tres secciones macizas. Un angular no tiene por qué ser hueco: su geometría en L no está incluida. Hay otro cálculo para tubo circular."
      },
      {
        "q": "¿Por qué puede diferir la masa real?",
        "a": "Las medidas, densidad y recubrimientos reales pueden diferir de las entradas. No se establece un porcentaje universal de diferencia ni la idoneidad de transporte o elevación."
      }
    ],
    "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es', Partial<CalculatorCopy>>;
