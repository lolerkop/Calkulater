import type { CalculatorCopy } from '../../lib/platform/types';

type ContractContent = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent = {
  "ru": {
    "longDescription": "Сколько свежей воды подготовить, зависит от фактической воды в системе, а не только от надписи на аквариуме. Грунт, декор и выбранный уровень меняют этот объём. Здесь сначала вычитается введённая доля вытеснения, затем применяется выбранный процент подмены. Это помогает сверить объём ёмкостей для подготовки воды. Частота и доля подмены зависят от обитателей и качества воды; калькулятор их не назначает. Доза кондиционера определяется инструкцией продукта и способом внесения, поэтому объём подмены нельзя автоматически считать базой любой дозировки.",
    "howToUse": [
      "Введите паспортный объём аквариума в литрах.",
      "Введите выбранный процент подмены; его пригодность формула не определяет.",
      "Оцените вытеснение и недолив по фактической воде; отдельно учитывайте воду фильтра.",
      "Подготовьте рассчитанный объём, а кондиционер дозируйте по инструкции продукта для своего способа внесения."
    ],
    "howItWorks": "При объёме V литров, вытесненной доле d% и выбранной подмене p% чистая вода N=V×(1−d/100), подмена W=N×p/100, остаток N−W. V>0, 0≤d<100, 0<p≤100. Объём фильтра и недолив включайте в свою оценку: они отдельно не вычисляются. Формула не назначает процент подмены и дозу препаратов.",
    "example": "В аквариуме на 240 л с 12 % грунта помещается 211,2 л воды, и подмена на 25 % — это 52,8 л. Без вытеснения 100 л и 100% подмена дают 100 л новой воды и остаток 0; это числовая граница, не совет полностью менять воду.",
    "faq": [
      {
        "q": "Какую долю обычно занимает грунт?",
        "a": "Измерение фактически залитой воды точнее общей процентной прикидки. Доля слоя зависит от его высоты, основания, пористости и декора; значения 5%,12% или 20% здесь могут быть только вашими допущениями, не правилом для любого аквариума."
      },
      {
        "q": "Почему нельзя дозировать кондиционер по паспорту банки?",
        "a": "Нужно следовать инструкции конкретного средства. Например, Prime различает обработку новой воды и внесение прямо в аквариум: база дозы при этих способах различается. Расчёт объёма подмены не проверяет концентрацию хлора, состав воды, средство или его дозировку."
      },
      {
        "q": "Какой процент подмены считается нормальным?",
        "a": "Универсального процента нет: важны состав обитателей, плотность заселения, фильтрация и тесты воды. Введённые 25% — пример. Этот расчёт определяет литры для уже выбранной доли; он не оценивает, безопасна ли подмена для вашей системы."
      },
      {
        "q": "Учитывается ли объём фильтра?",
        "a": "Вода во внешнем фильтре и шлангах отдельно не прибавляется. Если исходный V относится только к банке, эти литры остаются вне модели. Для обработки воды используйте требуемую инструкцией базу объёма, а не называйте пропущенный фильтр гарантированным запасом безопасности."
      }
    ]
  },
  "en": {
    "longDescription": "Preparing replacement water starts with the actual water volume, not just the tank label. Substrate, decor and the fill line change that volume. The entered displacement is subtracted first, then your selected change percentage is applied. This helps size preparation containers. The appropriate schedule and percentage depend on the inhabitants and water quality and are not prescribed here. Conditioner dosing follows the product directions and how it is added, so replacement volume is not automatically the basis for every dose.",
    "howToUse": [
      "Enter the labelled volume of the tank in litres.",
      "Enter your selected change percentage; the formula does not establish its suitability.",
      "Estimate displacement and the fill line from actual water; account separately for filter water.",
      "Prepare the calculated volume; dose conditioner according to product directions for your addition method."
    ],
    "howItWorks": "For V litres, displaced share d% and selected change p%, net water N=V×(1−d/100), replacement W=N×p/100 and remaining water N−W. V>0, 0≤d<100, 0<p≤100. Include filter volume and the fill line in your own estimate; neither is calculated separately. This volume model prescribes no change schedule or product dose.",
    "example": "A 240-litre tank with 12% taken by substrate holds 211.2 litres of water; a 25% change is 52.8 litres. With 100 L, no displacement and 100% change, replacement is 100 L and remainder 0; this boundary is arithmetic, not a full-change recommendation.",
    "faq": [
      {
        "q": "What share does substrate usually take?",
        "a": "Measuring the water actually added is more reliable than a general percentage. Displacement depends on layer height, footprint, porosity and decor;5%,12% or 20% can be scenario assumptions, not a rule for every tank."
      },
      {
        "q": "Why not dose conditioner by the tank label?",
        "a": "Follow the particular product directions. Prime, for example, distinguishes pretreating new water from adding directly to the aquarium, with different volume bases. This change-volume calculation checks neither chlorine concentration, water chemistry, product nor dosage."
      },
      {
        "q": "How large should a routine change be?",
        "a": "No percentage suits every tank: inhabitants, stocking density, filtration and water tests matter. The default 25% is an example. This calculation converts a selected share into litres without assessing whether the change is suitable for your system."
      },
      {
        "q": "Does the filter volume count?",
        "a": "External filter and hose water is not added separately. If V covers only the tank, those litres remain outside the model. For water treatment use the volume basis required by the directions; omitted filter water is not a guaranteed safety margin."
      }
    ],
    "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
  },
  "uk": {
    "longDescription": "Об’єм підготовленої свіжої води залежить від фактичної води в системі, а не лише від напису на акваріумі. Ґрунт, декор і рівень заповнення змінюють його. Спочатку віднімається введена частка витіснення, потім застосовується обраний відсоток підміни. Це допомагає перевірити місткість посуду для підготовки води. Частоту й частку визначають мешканці та якість води, а не калькулятор. Дозу кондиціонера задає інструкція продукту й спосіб внесення: об’єм підміни не є автоматично базою кожної дози.",
    "howToUse": [
      "Введіть паспортний об’єм акваріума.",
      "Введіть обраний відсоток підміни; формула не визначає його придатності.",
      "Оцініть витіснення й недолив за фактичною водою; окремо врахуйте воду фільтра.",
      "Підготуйте розрахований об’єм; кондиціонер дозуйте за інструкцією для свого способу внесення."
    ],
    "howItWorks": "За об’єму V літрів, витісненої частки d% та обраної підміни p% вода N=V×(1−d/100), підміна W=N×p/100, залишок N−W. V>0, 0≤d<100, 0<p≤100. Об’єм фільтра й недолив врахуйте у власній оцінці: окремо вони не рахуються. Формула не призначає частоту підміни чи дозу засобу.",
    "example": "В акваріумі на 240 л із 12 % ґрунту вміщується 211,2 л води, і підміна на 25 % — це 52,8 л. За 100 л без витіснення і 100% підміни нової води 100 л, залишок 0; це числова межа, не порада повної підміни.",
    "faq": [
      {
        "q": "Скільки води підмінювати?",
        "a": "Частку й графік підміни обирають за видом, щільністю заселення та виміряними параметрами води.20–30% щотижня не є універсальною нормою; введене число лише перетворюється в літри. За проблем із водою потрібна предметна порада щодо конкретної системи."
      },
      {
        "q": "Скільки витісняють ґрунт і декорації?",
        "a": "Це залежить від геометрії, шару, пористості й декору. Самі 5 см ґрунту не означають 10% для кожної висоти акваріума. Надійніше виміряти фактично залиту воду й порівняти її з обраним повним об’ємом."
      },
      {
        "q": "Чому не можна підмінити відразу багато?",
        "a": "Велика підміна не є автоматично забороненою чи безпечною: результат залежить від температури, pH, жорсткості й стану акваріума. Калькулятор цих параметрів не перевіряє. Введені 25% — приклад об’єму, не призначений режим догляду."
      },
      {
        "q": "Чи треба відстоювати воду?",
        "a": "Саме відстоювання не підтверджує придатність води: важливі фактичні дезінфектанти та параметри. Хлорамін не слід вважати видаленим після доби стояння. Підготовка й дозування мають відповідати воді, видам та інструкції засобу; калькулятор цього не визначає."
      }
    ],
    "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
  },
  "de": {
    "longDescription": "Für vorbereitetes Wechselwasser zählt das tatsächliche Wasser der Anlage, nicht nur die Beckenangabe. Bodengrund, Einrichtung und Füllhöhe ändern das Volumen. Zuerst wird die eingegebene Verdrängung abgezogen, dann dein Wechselanteil angewendet. Damit kannst du die Vorbereitungsbehälter bemessen. Intervall und Anteil hängen von Besatz und Wasserqualität ab und werden hier nicht vorgeschrieben. Die Aufbereitermenge folgt der Produktanweisung und der Zugabemethode; Wechselvolumen ist daher nicht automatisch die Basis jeder Dosis.",
    "howToUse": [
      "Trage das angegebene Volumen des Beckens in Litern ein.",
      "Trage den gewählten Wechselanteil ein; die Formel bestimmt dessen Eignung nicht.",
      "Schätze Verdrängung und Füllhöhe am tatsächlichen Wasser; Filterwasser gesondert berücksichtigen.",
      "Bereite das Volumen vor; Aufbereiter nach Produktanweisung für deine Zugabemethode dosieren."
    ],
    "howItWorks": "Bei V Litern, verdrängtem Anteil d% und gewähltem Wechsel p% gilt: Nettowasser N=V×(1−d/100), Wechsel W=N×p/100, Rest N−W. V>0, 0≤d<100, 0<p≤100. Filtervolumen und Füllhöhe musst du in deiner Schätzung berücksichtigen; sie werden nicht gesondert ermittelt. Die Volumenformel legt weder Pflegeintervall noch Produktdosis fest.",
    "example": "Ein Becken mit 240 Litern, bei dem 12 % auf den Bodengrund entfallen, hält 211,2 Liter Wasser; ein Wechsel von 25 % sind 52,8 Liter. 100 l ohne Verdrängung bei 100% Wechsel ergeben 100 l Ersatz und Rest 0; Rechengrenze, keine Empfehlung zum Komplettwechsel.",
    "faq": [
      {
        "q": "Welchen Anteil nimmt der Bodengrund gewöhnlich ein?",
        "a": "Die tatsächlich eingefüllte Wassermenge ist zuverlässiger als ein Pauschalanteil. Verdrängung hängt von Schichthöhe, Grundfläche, Porosität und Einrichtung ab;5%,12% oder 20% sind Szenarioannahmen, keine Regel für jedes Becken."
      },
      {
        "q": "Warum nicht den Aufbereiter nach der Beckenangabe dosieren?",
        "a": "Es gilt die Anweisung des jeweiligen Produkts. Prime unterscheidet etwa die Vorbehandlung neuen Wassers von direkter Zugabe ins Aquarium mit unterschiedlicher Volumenbasis. Dieser Wechselrechner prüft weder Chlorgehalt, Wasserchemie, Produkt noch Dosis."
      },
      {
        "q": "Wie groß sollte ein regelmäßiger Wechsel sein?",
        "a": "Ein Anteil passt nicht zu jedem Becken: Besatz, Dichte, Filterung und Wassertests zählen. Die voreingestellten 25% sind ein Beispiel. Der Rechner wandelt einen gewählten Anteil in Liter um, beurteilt aber nicht dessen Eignung für dein System."
      },
      {
        "q": "Zählt das Volumen des Filters mit?",
        "a": "Wasser in Außenfilter und Schläuchen wird nicht extra addiert. Bezieht sich V nur auf das Becken, fehlen diese Liter. Für Behandlung zählt die laut Produkt erforderliche Volumenbasis; ausgelassenes Filterwasser ist keine garantierte Sicherheitsreserve."
      }
    ],
    "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
  },
  "es": {
    "longDescription": "La cantidad de agua nueva depende del agua real del sistema, no solo de la etiqueta. Sustrato, decoración y nivel de llenado cambian ese volumen. Se resta primero el desplazamiento introducido y después se aplica tu porcentaje de cambio. Así puedes comprobar los recipientes de preparación. El calendario y la proporción dependen de los habitantes y de la calidad del agua; aquí no se prescriben. La dosis del acondicionador sigue las instrucciones y el modo de añadirlo: el volumen repuesto no es automáticamente la base de toda dosis.",
    "howToUse": [
      "Introduce el volumen etiquetado del acuario en litros.",
      "Introduce el porcentaje elegido; la fórmula no determina su idoneidad.",
      "Estima desplazamiento y llenado con agua real; considera aparte el agua del filtro.",
      "Prepara el volumen calculado; dosifica acondicionador según instrucciones y método de aplicación."
    ],
    "howItWorks": "Con V litros, fracción desplazada d% y cambio elegido p%, agua neta N=V×(1−d/100), reposición W=N×p/100 y resto N−W. V>0, 0≤d<100, 0<p≤100. Incluye el filtro y la altura de llenado en tu estimación: no se calculan por separado. La fórmula no prescribe calendario de cambios ni dosis de productos.",
    "example": "Un acuario de 240 litros con un 12 % ocupado por el sustrato contiene 211,2 litros de agua; un cambio del 25 % son 52,8 litros. 100 l sin desplazamiento y cambio 100% dan 100 l de reposición y resto 0; límite aritmético, no recomendación de cambio total.",
    "faq": [
      {
        "q": "¿Qué parte ocupa normalmente el sustrato?",
        "a": "Medir el agua realmente añadida es más fiable que un porcentaje general. El desplazamiento depende de altura, base, porosidad y decoración;5%,12% o 20% son supuestos del caso, no una regla para todo acuario."
      },
      {
        "q": "¿Por qué no dosificar el acondicionador según la etiqueta del acuario?",
        "a": "Sigue las instrucciones del producto concreto. Prime, por ejemplo, distingue tratar agua nueva de añadirlo directamente al acuario y cambia la base del volumen. Este cálculo no verifica cloro, química del agua, producto ni dosificación."
      },
      {
        "q": "¿De qué tamaño debe ser un cambio rutinario?",
        "a": "No hay un porcentaje para todos: importan habitantes, densidad, filtración y pruebas del agua. El 25% por defecto es un ejemplo. Se convierte la proporción elegida a litros sin valorar si el cambio es adecuado para tu sistema."
      },
      {
        "q": "¿Cuenta el volumen del filtro?",
        "a": "El agua del filtro externo y tubos no se añade aparte. Si V se refiere solo al acuario, esos litros quedan fuera. Para tratar agua usa la base exigida por las instrucciones; omitir el filtro no constituye un margen de seguridad garantizado."
      }
    ],
    "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractContent>;
