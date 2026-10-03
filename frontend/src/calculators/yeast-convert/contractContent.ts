import type { CalculatorCopy } from '../../lib/platform/types';
type ContractContent = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent = {
  "ru": {
    "longDescription": "Пересчитывает массу между прессованными, сухими активными и быстродействующими дрожжами по сохранённым коэффициентам этой страницы. В выбранной модели свежая масса служит базой: активная равна её трети, быстродействующая — четверти. Все три эквивалента выводятся сразу, чтобы сравнить пакет и рецепт. Эти отношения не являются универсальным следствием влажности или гарантией одинаковой подъёмной силы. Состав и рекомендации конкретного продукта могут дать другое замещение; например, Red Star допускает для своих активных и быстродействующих дрожжей 1:1 в традиционном замесе.",
    "howItWorks": "Коэффициенты модели: свежие 1, активные 1/3, быстродействующие 1/4. Свежий эквивалент = введённая масса ÷ коэффициент исходного типа; масса нужного типа = свежий эквивалент × его коэффициент. Масса положительна, исходный и нужный типы разные. Массы сравниваются в граммах; влажность, жизнеспособность и время подъёма не вычисляются.",
    "example": "По выбранной модели 30 г прессованных дают 10 г сухих активных или 7,5 г быстродействующих. Обратно, 7,5 г быстродействующих дают 30 г свежего эквивалента и 10 г активных. Это арифметика коэффициентов, а не универсальная инструкция замены для любого производителя.",
    "howToUse": [
      "Укажите массу в граммах и фактический исходный тип.",
      "Выберите другой нужный тип.",
      "Сверьте коэффициент с инструкцией своего продукта и рецептом.",
      "Способ внесения, температуру и подъём проверяйте по инструкции, отдельно от массы."
    ],
    "faq": [
      {
        "q": "Откуда берётся соотношение один к трём?",
        "a": "Одна треть — выбранный коэффициент этой модели. Различия влажности важны, но сами по себе не доказывают точной универсальной замены 1:3; продукт и рекомендации производителя могут отличаться."
      },
      {
        "q": "Чем сухие активные отличаются от быстродействующих?",
        "a": "Это разные формы продукта. Не всегда активные обязательно разводят, а быстродействующие только смешивают с мукой: Red Star описывает оба способа для своих дрожжей. Используйте указания конкретной упаковки."
      },
      {
        "q": "Можно ли заменять дрожжи один в один по объёму?",
        "a": "Нет: объём зависит от формы и плотности продукта. Этот калькулятор пересчитывает массу, а не ложки; объёмную дозировку проверяйте по инструкции продукта."
      },
      {
        "q": "Изменится ли время подъёма теста?",
        "a": "Может измениться из-за состава теста, температуры и свойств дрожжей, но это не рассчитывается. Совпадение модельного эквивалента массы не гарантирует того же времени подъёма."
      }
    ],
    "disclaimer": "Выбранные коэффициенты не заменяют инструкцию производителя и не гарантируют одинаковой ферментации или качества выпечки."
  },
  "en": {
    "longDescription": "Converts mass between fresh compressed, active dry and instant yeast using this page’s retained coefficients. Fresh mass is the chosen basis: active dry is one third and instant one quarter. All three equivalents appear together so recipe and packet can be compared. These ratios are neither a universal consequence of moisture nor a guarantee of identical leavening power. A particular product’s composition and instructions can give another substitution; for example, Red Star permits 1:1 active/instant replacement for its products in traditional mixing.",
    "howItWorks": "Model coefficients: fresh 1, active dry 1/3, instant 1/4. Fresh equivalent = entered mass ÷ original type’s coefficient; target mass = fresh equivalent × target coefficient. Mass is positive and the two selected types must differ. Masses are grams; moisture, viability and rising time are not calculated.",
    "example": "The selected model converts 30 g fresh into 10 g active dry or 7.5 g instant. Conversely, 7.5 g instant gives 30 g fresh equivalent and 10 g active dry. These follow the coefficients, not a universal manufacturer substitution instruction.",
    "howToUse": [
      "Enter grams and the actual source type.",
      "Select a different target type.",
      "Compare coefficients with your product instructions and recipe.",
      "Check mixing method, temperature and rising separately from mass."
    ],
    "faq": [
      {
        "q": "Where does the one-to-three ratio come from?",
        "a": "One third is this model’s selected coefficient. Moisture differences matter but do not establish an exact universal 1:3 replacement; products and manufacturer guidance can differ."
      },
      {
        "q": "How does active dry differ from instant?",
        "a": "They are different product forms. Active dry does not invariably require dissolving while instant only goes into flour: Red Star describes both methods for its products. Follow the particular packet."
      },
      {
        "q": "Can I swap yeast by volume instead?",
        "a": "No. Volume depends on product form and density. This tool converts mass, not spoon measures; check volume dosing against the product instructions."
      },
      {
        "q": "Will the rising time change?",
        "a": "It can change with dough composition, temperature and yeast properties, but is not calculated. An equal modelled mass equivalent cannot guarantee the same rising time."
      }
    ],
    "disclaimer": "Selected coefficients do not replace manufacturer instructions or guarantee identical fermentation or baking results."
  },
  "uk": {
    "longDescription": "Переводить масу між пресованими, сухими активними та швидкодійними дріжджами за збереженими коефіцієнтами сторінки. В обраній моделі свіжа маса є базою: активна дорівнює третині, швидкодійна — чверті. Три еквіваленти виводяться разом для зіставлення рецепта й упаковки. Це не універсальний наслідок вологості й не гарантія однакової підйомної сили. Склад і вказівки конкретного продукту можуть задавати іншу заміну: наприклад, Red Star допускає 1:1 для своїх активних і швидкодійних дріжджів у традиційному замісі.",
    "howItWorks": "Коефіцієнти моделі: свіжі 1, активні 1/3, швидкодійні 1/4. Свіжий еквівалент = введена маса ÷ коефіцієнт вихідного типу; потрібна маса = еквівалент × коефіцієнт потрібного типу. Маса додатна, обрані типи різні. Одиниця — грами; вологість, життєздатність і час підйому не обчислюються.",
    "example": "За обраною моделлю 30 г пресованих дають 10 г сухих активних або 7,5 г швидкодійних. Зворотно, 7,5 г швидкодійних дають 30 г свіжого еквівалента та 10 г активних. Це арифметика коефіцієнтів, не універсальна інструкція виробника.",
    "howToUse": [
      "Введіть грами та фактичний вихідний тип.",
      "Оберіть інший потрібний тип.",
      "Зіставте коефіцієнти з рецептом та інструкцією конкретного продукту.",
      "Спосіб внесення, температуру й підйом перевіряйте окремо від маси."
    ],
    "faq": [
      {
        "q": "Чому сухих потрібно менше?",
        "a": "У моделі сухі мають коефіцієнти 1/3 та 1/4. Відмінності вологи не доводять універсальної точної заміни: конкретні продукти та рекомендації можуть відрізнятися."
      },
      {
        "q": "Чим сухі активні відрізняються від швидкодійних?",
        "a": "Це різні форми продукту, але не універсальне правило обов’язково розводити активні й лише всипати швидкодійні. Red Star описує обидва способи для своїх продуктів; перевіряйте упаковку."
      },
      {
        "q": "Чи можна зовсім обійтися без дріжджів?",
        "a": "Закваска чи інші способи розпушення потребують окремого рецепта й процесу. Їх не можна отримати множенням цієї дріжджової маси; калькулятор не описує таку заміну."
      },
      {
        "q": "Чи впливає термін придатності?",
        "a": "Термін і умови зберігання можуть впливати на придатність. Перевіряйте упаковку та вказаний виробником спосіб перевірки; модель не визначає життєздатності й не радить універсального збільшення дози."
      }
    ],
    "disclaimer": "Обрані коефіцієнти не замінюють інструкцію виробника й не гарантують однакового бродіння або результату випікання."
  },
  "de": {
    "longDescription": "Rechnet Masse zwischen Frischhefe, aktiver Trockenhefe und Instanthefe mit den erhaltenen Koeffizienten dieser Seite um. Frischmasse ist die gewählte Basis: aktive Trockenhefe beträgt ein Drittel, Instanthefe ein Viertel. Alle drei Äquivalente stehen zum Vergleich von Rezept und Packung zusammen. Diese Verhältnisse folgen nicht allgemeingültig aus Wassergehalt und garantieren keine gleiche Triebkraft. Zusammensetzung und Anweisungen eines Produkts können andere Ersetzungen vorsehen; Red Star erlaubt etwa 1:1 zwischen eigenen aktiven und Instantprodukten beim traditionellen Mischen.",
    "howItWorks": "Modellkoeffizienten: frisch 1, aktiv trocken 1/3, instant 1/4. Frischäquivalent = Eingabemasse ÷ Ausgangskoeffizient; Zielmasse = Äquivalent × Zielkoeffizient. Masse positiv, beide Typen verschieden. Einheit ist Gramm; Feuchte, Lebensfähigkeit und Gehzeit werden nicht berechnet.",
    "example": "Das gewählte Modell ergibt aus 30 g Frischhefe 10 g aktive Trockenhefe oder 7,5 g Instanthefe. Umgekehrt ergeben 7,5 g Instanthefe 30 g Frischäquivalent und 10 g aktive Trockenhefe. Dies ist Koeffizientenrechnung, keine allgemeine Herstelleranweisung.",
    "howToUse": [
      "Gramm und tatsächlichen Ausgangstyp eintragen.",
      "Einen anderen Zieltyp wählen.",
      "Koeffizienten mit Produktanleitung und Rezept vergleichen.",
      "Einmischen, Temperatur und Gehen getrennt von der Masse prüfen."
    ],
    "faq": [
      {
        "q": "Woher kommt das Verhältnis eins zu drei?",
        "a": "Ein Drittel ist der hier gewählte Modellkoeffizient. Feuchteunterschiede sind relevant, belegen aber keine exakte allgemeine 1:3-Ersetzung; Produkte und Herstellerhinweise können abweichen."
      },
      {
        "q": "Wie unterscheidet sich Trockenhefe von Instanthefe?",
        "a": "Es sind unterschiedliche Produktformen. Aktive Trockenhefe muss nicht immer aufgelöst und Instanthefe ausschließlich ins Mehl gegeben werden: Red Star beschreibt beide Verfahren. Die konkrete Packung beachten."
      },
      {
        "q": "Kann ich Hefe stattdessen nach Volumen tauschen?",
        "a": "Nein. Volumen hängt von Form und Dichte ab. Dieser Rechner wandelt Masse statt Löffelmaße um; Volumendosierung anhand der Produktanleitung prüfen."
      },
      {
        "q": "Ändert sich die Gehzeit?",
        "a": "Sie kann sich durch Teigzusammensetzung, Temperatur und Hefeeigenschaften ändern, wird jedoch nicht berechnet. Gleiches Modelläquivalent garantiert keine gleiche Gehzeit."
      }
    ],
    "disclaimer": "Gewählte Koeffizienten ersetzen keine Herstelleranleitung und garantieren weder gleiche Gärung noch Backergebnisse."
  },
  "es": {
    "longDescription": "Convierte masa entre levadura fresca prensada, seca activa e instantánea con los coeficientes conservados de esta página. La masa fresca es la base elegida: activa un tercio e instantánea un cuarto. Se muestran los tres equivalentes para comparar receta y envase. Las razones no son una consecuencia universal de la humedad ni garantizan igual poder fermentador. Un producto concreto puede recomendar otra sustitución; por ejemplo, Red Star admite 1:1 entre sus productos activos e instantáneos en mezclado tradicional.",
    "howItWorks": "Coeficientes del modelo: fresca 1, activa 1/3, instantánea 1/4. Equivalente fresco = masa introducida ÷ coeficiente original; masa objetivo = equivalente × coeficiente objetivo. Masa positiva y tipos distintos. Unidad gramos; no se calculan humedad, viabilidad ni tiempo de levado.",
    "example": "El modelo elegido convierte 30 g frescos en 10 g activos o 7,5 g instantáneos. A la inversa, 7,5 g instantáneos dan 30 g de equivalente fresco y 10 g activos. Es aritmética de coeficientes, no una instrucción universal del fabricante.",
    "howToUse": [
      "Introduce gramos y el tipo original real.",
      "Elige otro tipo objetivo.",
      "Contrasta coeficientes con receta e instrucciones del producto.",
      "Comprueba mezclado, temperatura y levado aparte de la masa."
    ],
    "faq": [
      {
        "q": "¿De dónde sale la proporción de uno a tres?",
        "a": "Un tercio es el coeficiente elegido de este modelo. La humedad importa, pero no establece una sustitución exacta universal 1:3; productos e indicaciones pueden diferir."
      },
      {
        "q": "¿En qué se diferencia la seca activa de la instantánea?",
        "a": "Son formas distintas. La activa no requiere siempre disolverse ni la instantánea solo añadirse a harina: Red Star describe ambos métodos para sus productos. Sigue el envase concreto."
      },
      {
        "q": "¿Puedo cambiar la levadura por volumen en vez de por peso?",
        "a": "No. El volumen depende de forma y densidad. Se convierte masa, no cucharadas; verifica dosificación volumétrica con las instrucciones."
      },
      {
        "q": "¿Cambiará el tiempo de levado?",
        "a": "Puede cambiar por composición de masa, temperatura y propiedades de levadura, pero no se calcula. Igual equivalente del modelo no garantiza el mismo levado."
      }
    ],
    "disclaimer": "Los coeficientes elegidos no sustituyen instrucciones del fabricante ni garantizan idéntica fermentación o resultado de horneado."
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractContent>;
