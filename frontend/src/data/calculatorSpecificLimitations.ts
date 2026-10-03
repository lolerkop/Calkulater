import type { Locale } from '../lib/i18n';

// Individually reviewed excerpts from each calculator's authored native text.
// Sparse SSR-only overrides: unrelated notices and source caveats are preserved.
const limitations: Record<string, Partial<Record<Locale, string>>> = {
  "age-calculator": {
    "de": "Fehlt der ursprüngliche Tag im Jubiläumsmonat, gilt dessen letzter Tag. Das ist die Konvention dieses Modells, keine gesetzliche Geburtstagsregel.",
    "en": "If an anniversary month lacks the original day, its last day is used. This is this model’s convention, not a legal birthday rule.",
    "es": "Si el mes del aniversario no tiene el día original, se utiliza su último día. Es la convención de este modelo, no una regla legal de cumpleaños.",
    "ru": "Если в месяце годовщины нет исходного числа, берётся последний день месяца. Это правило данной модели, а не определение юридического дня рождения.",
    "uk": "Якщо потрібного числа в місяці річниці немає, береться його останній день. Це правило моделі, а не юридичне визначення дня народження."
  },
  "air-exchange": {
    "de": "Die Rate gibst du selbst vor; die Seite legt keine Anforderung für Wohnungen, Küchen oder Betriebe fest. Ein Luftwechsel entspricht einem Luftvolumen in Größe des Raumvolumens, nicht einer garantierten vollständigen Ersetzung der gesamten ursprünglichen Luft.",
    "en": "You supply the rate; the page does not prescribe a requirement for homes, kitchens or workplaces. An air change is an air volume equal to the room volume, rather than a guarantee that every part of the original air is completely replaced.",
    "es": "La tasa la introduces tú; la página no fija requisitos para viviendas, cocinas o centros de trabajo. Una renovación equivale a un volumen de aire igual al de la sala, sin garantizar la sustitución completa de cada parte del aire original.",
    "ru": "Кратность выбираете вы: страница не назначает норму для квартиры, кухни или производства. Один воздухообмен означает подачу или удаление объёма воздуха, равного объёму помещения, а не гарантированную полную замену каждой его части.",
    "uk": "Кратність задаєте ви: сторінка не призначає норму для житла, кухні або виробництва. Один повітрообмін означає об’єм повітря, рівний об’єму приміщення, а не гарантовану повну заміну кожної його частини."
  },
  "aquarium-water-change": {
    "de": "Filtervolumen und Füllhöhe musst du in deiner Schätzung berücksichtigen; sie werden nicht gesondert ermittelt. Die Volumenformel legt weder Pflegeintervall noch Produktdosis fest.",
    "en": "Include filter volume and the fill line in your own estimate; neither is calculated separately. This volume model prescribes no change schedule or product dose.",
    "es": "Incluye el filtro y la altura de llenado en tu estimación: no se calculan por separado. La fórmula no prescribe calendario de cambios ni dosis de productos.",
    "ru": "Объём фильтра и недолив включайте в свою оценку: они отдельно не вычисляются. Формула не назначает процент подмены и дозу препаратов.",
    "uk": "Об’єм фільтра й недолив врахуйте у власній оцінці: окремо вони не рахуються. Формула не призначає частоту підміни чи дозу засобу."
  },
  "baluster-spacing": {
    "de": "Den Grenzwert liefert dein Projekt; die Rechnung bestätigt keine Geländersicherheit.",
    "en": "The limit comes from your project; the calculation does not certify a guard as safe.",
    "es": "El límite procede de tu proyecto; el cálculo no certifica la seguridad de la barandilla.",
    "ru": "Сам предел задаётся по вашему проекту: расчёт не подтверждает безопасность ограждения.",
    "uk": "Межу беруть із вашого проєкту; розрахунок не підтверджує безпечність огорожі."
  },
  "binomial-probability": {
    "de": "Berechnet Wahrscheinlichkeiten für eine Reihe unabhängiger Versuche mit jedes Mal derselben Erfolgschance. Beeinflussen sich die Versuche gegenseitig, passt das Modell nicht.",
    "en": "Computes probabilities for a run of independent trials with the same chance of success each time. If trials influence each other the model does not fit.",
    "es": "Calcula probabilidades para una serie de pruebas independientes con la misma probabilidad de éxito en cada una. Si las pruebas se influyen entre sí, el modelo no encaja.",
    "ru": "Считает вероятность для серии независимых испытаний с одинаковым шансом успеха. Если испытания влияют друг на друга, схема не подходит.",
    "uk": "Калькулятор рахує ймовірність для серії незалежних випробувань з однаковим шансом успіху. Якщо випробування впливають одне на одне, схема не підходить."
  },
  "board-volume": {
    "de": "Das Volumen folgt den eingegebenen Maßen. Für tatsächliches Volumen misst du das Material, für vertragliches Nennvolumen gelten die vereinbarten Maße; eine automatische Korrektur gibt es nicht.",
    "en": "Volume follows the entered dimensions. Measure actual dimensions for actual volume or use agreed nominal dimensions for contractual volume; no automatic correction is applied.",
    "es": "El volumen sigue las medidas introducidas. Usa las medidas reales para volumen real o las nominales acordadas para volumen contractual; no hay ajuste automático.",
    "ru": "Объём следует ровно введённым размерам. Для фактического объёма измерьте материал, для номинального договорного объёма используйте договорные размеры; автоматической поправки нет.",
    "uk": "Зміна вологості може змінити розміри матеріалу, але калькулятор цього не моделює. Використовуйте виміряні розміри для потрібного стану; універсальної усушки або цінового висновку тут немає."
  },
  "brick-calculator": {
    "de": "Wanddicke, Verband, mehrere Mauerblätter, Stürze, Mörtel und Tragfähigkeit werden nicht modelliert. Das ist eine Mengenschätzung, kein Tragwerksentwurf.",
    "en": "Wall thickness, bonding, multiple leaves, lintels, mortar and strength are not modeled. This estimates element count and is not a structural design.",
    "es": "No se modelan grosor de muro, aparejo, varias hojas, dinteles, mortero ni resistencia. Es una estimación de piezas, no un proyecto estructural.",
    "uk": "Один шар: товщина стіни, перев’язка, перемички, розчин і міцність не моделюються. Це оцінка кількості, не конструктивний проєкт"
  },
  "bulk-material-volume": {
    "de": "Trage die Schüttdichte für den passenden Materialzustand und Feuchtegehalt ein. Wähle 0–50 % Zuschlag; der Rechner bestimmt keine Verdichtung.",
    "en": "Enter bulk density for the relevant material state and moisture. Choose an allowance of 0–50%; the calculator does not determine compaction.",
    "es": "Usa la densidad aparente del estado y la humedad correspondientes. Elige un margen de 0–50%; no se determina un coeficiente de compactación.",
    "ru": "Задайте насыпную плотность материала для соответствующего состояния и влажности. Укажите свой запас 0–50 %; коэффициент уплотнения здесь не определяется.",
    "uk": "Задайте насипну густину для відповідного стану й вологості матеріалу. Укажіть запас 0–50 %; коефіцієнт ущільнення тут не визначається."
  },
  "car-depreciation": {
    "de": "Unterstützt werden ganze Zeiträume von 0–30 Jahren, ein positiver Preis und Sätze ab 0 einschließlich bis unter 100 %. Bruchteile von Jahren werden abgewiesen statt gerundet.",
    "en": "The supported inputs are whole periods of 0–30 years, a positive price and rates from 0 inclusive to 100% exclusive. Fractional years are rejected, not rounded.",
    "es": "Se admiten periodos enteros de 0–30 años, un precio positivo y tasas desde 0 inclusive hasta menos del 100 %. Los años fraccionarios se rechazan en lugar de redondearse.",
    "ru": "Поддерживаются целые сроки 0–30 лет, положительная цена и ставки от 0 включительно до 100 % исключительно. Дробный срок отклоняется, а не округляется.",
    "uk": "Підтримуються цілі строки 0–30 років, додатна ціна та ставки від 0 включно до 100 % виключно. Дробний строк відхиляється, а не округлюється."
  },
  "cladding-boards": {
    "de": "Diese Flächenschätzung plant keine Reihen oder Wiederverwendung von Resten.",
    "en": "This area estimate does not lay out rows or reuse offcuts.",
    "es": "Es una estimación por superficie sin distribución de filas ni reutilización de recortes.",
    "ru": "Это оценка по площади, без раскладки рядов и повторного использования обрезков.",
    "uk": "Це оцінка за площею без розкладки рядів і повторного використання обрізків."
  },
  "combinatorics": {
    "de": "n und k sind ganze Zahlen von 0 bis 1000; ohne Wiederholung darf k nicht größer als n sein. Das Hauptergebnis ist eine exakte BigInt-Ganzzahl mit allen Ziffern; die zusätzliche wissenschaftliche Schreibweise ist nur eine kurze Näherung.",
    "en": "n and k are integers from 0 to 1000; without repetition, k cannot exceed n. The primary answer is an exact BigInt integer with every digit; the additional scientific notation is only a compact approximation.",
    "es": "n y k son enteros entre 0 y 1000; sin repetición, k no puede superar n. El resultado principal es un entero BigInt exacto con todas sus cifras; la notación científica adicional es solo una aproximación abreviada.",
    "ru": "n и k — целые от 0 до 1000; без повторений k не может превышать n. Основной ответ — точное целое BigInt со всеми цифрами; дополнительная научная форма лишь сокращённое приближение.",
    "uk": "n і k — цілі від 0 до 1000; без повторень k не може перевищувати n. Основна відповідь — точне ціле BigInt з усіма цифрами; додатковий науковий запис є лише стислим наближенням."
  },
  "compression-ratio": {
    "de": "Lies CR und Gesamtvolumen ab; CR ist kein gemessener Kompressionsdruck.",
    "en": "Read CR and total volume; do not interpret CR as a compression-tester pressure.",
    "es": "Consulta CR y volumen total; CR no es una presión de compresímetro.",
    "ru": "Прочитайте отношение CR и полный объём; не трактуйте CR как давление компрессометра.",
    "uk": "Прочитайте CR і повний об’єм; не тлумачте CR як тиск компресометра."
  },
  "concrete": {
    "de": "Mischung, Betonklasse, Bewehrung, Tragfähigkeit und Lieferung werden nicht geplant; den Zuschlag wählst du selbst.",
    "en": "The page does not design a mix, concrete grade, reinforcement, load capacity or delivery conditions; you choose the allowance.",
    "es": "No dimensiona mezcla, clase de hormigón, armaduras, capacidad ni transporte; tú eliges el margen.",
    "ru": "Страница не подбирает состав, марку бетона, армирование, несущую способность или условия доставки; процент запаса задаёте вы.",
    "uk": "Склад, марка бетону, армування, несуча здатність та умови доставки не визначаються; відсоток запасу задаєте ви."
  },
  "confidence-interval": {
    "de": "Bei unabhängigen Beobachtungen aus einer normalverteilten Population setzt die Methode die bekannte Populationsstandardabweichung σ voraus. Wird stattdessen die Stichprobenabweichung s eingesetzt, entsteht eine Normalapproximation und kein exaktes Student-t-Intervall für kleine Stichproben.",
    "en": "For independent observations from a normal population, this method assumes a known population standard deviation σ. Substituting a sample deviation s gives a normal approximation, not the exact small-sample Student t interval.",
    "es": "Para observaciones independientes de una población normal, el método supone conocida la desviación estándar poblacional σ. Sustituirla por la desviación muestral s da una aproximación normal, no el intervalo exacto de Student para una muestra pequeña.",
    "ru": "Для независимых наблюдений из нормальной совокупности этот метод предполагает известное стандартное отклонение σ. Если вместо него подставить выборочное s, получится нормальное приближение, а не точный интервал Стьюдента для малой выборки.",
    "uk": "Для незалежних спостережень із нормальної сукупності метод передбачає відоме стандартне відхилення σ. Підстановка вибіркового s дає нормальне наближення, а не точний інтервал Стьюдента для малої вибірки."
  },
  "coordinate-convert": {
    "de": "Es gibt keine Achsenauswahl: geografische Breite separat auf ±90° prüfen. Dies validiert weder ein Koordinatenpaar noch eine GPX-Datei.",
    "en": "There is no axis selector: check latitude separately against ±90°. This does not validate a coordinate pair or GPX file.",
    "es": "No hay selector de eje: comprueba la latitud por separado dentro de ±90°. No valida un par de coordenadas ni un archivo GPX.",
    "ru": "Выбор оси не предусмотрен: широту проверяйте отдельно в пределах ±90°. Это не проверка пары координат или файла GPX.",
    "uk": "Вибору осі немає: широту окремо перевіряйте в межах ±90°. Це не перевірка пари координат чи файлу GPX."
  },
  "correlation": {
    "de": "Ein Zusammenhang kann von einem dritten Faktor herrühren oder Zufall sein. Der Koeffizient misst, wie zwei Reihen zusammen laufen, und nicht, ob die eine die andere treibt.",
    "en": "A relationship may be explained by a third factor or by coincidence. The coefficient measures how two series move together, not whether one drives the other.",
    "es": "Una relación puede explicarse por un tercer factor o por casualidad. El coeficiente mide cómo se mueven juntas dos series, no si una provoca la otra.",
    "ru": "Связь может объясняться третьим фактором или совпадением. Коэффициент измеряет совместное поведение рядов, а не влияние одного на другой.",
    "uk": "Зв’язок може пояснюватися третім чинником або збігом. Коефіцієнт вимірює спільну поведінку рядів, а не вплив одного на інший."
  },
  "coulomb": {
    "de": "Implementiert sind Punktladungen im Vakuum. Ein homogenes lineares Dielektrikum erfordert εᵣ, dafür gibt es hier kein Eingabefeld.",
    "en": "The implemented model is point charges in vacuum. A homogeneous linear dielectric uses relative permittivity εᵣ, but there is no such input here.",
    "es": "El modelo implementado usa cargas puntuales en el vacío. Un dieléctrico lineal homogéneo requiere εᵣ, pero no existe ese campo.",
    "ru": "Реализована модель точечных зарядов в вакууме. Для однородного линейного диэлектрика используют εᵣ, но такого поля здесь нет.",
    "uk": "Реалізовано модель точкових зарядів у вакуумі. Для однорідного лінійного діелектрика використовують εᵣ, але такого поля тут немає."
  },
  "date-shift-calculator": {
    "es": "Un mes natural no equivale a 30 días fijos y el ajuste puede impedir invertir la operación. No se aplican automáticamente festivos, husos ni reglas legales de plazos."
  },
  "de-broglie": {
    "de": "Alle Ergebnisse gehören zur nichtrelativistischen Näherung. Die Geschwindigkeit muss positiv und kleiner als 299792,458 km/s sein; ein zulässiger Eingabewert belegt noch nicht die Genauigkeit der Näherung.",
    "en": "All results belong to the nonrelativistic approximation. Speed must be positive and below 299792.458 km/s; satisfying the field limits does not establish the accuracy of the nonrelativistic approximation.",
    "es": "Todos los resultados corresponden a la aproximación no relativista. La velocidad debe ser positiva e inferior a 299792,458 km/s; cumplir los límites de entrada no garantiza la precisión de la aproximación.",
    "ru": "Все результаты относятся к нерелятивистскому приближению. Скорость должна быть положительной и меньше 299792,458 км/с; допустимое поле ещё не означает точность нерелятивистского приближения.",
    "uk": "Усі результати належать нерелятивістському наближенню. Швидкість має бути додатною та меншою за 299792,458 км/с; допустимий ввід ще не гарантує точність нерелятивістського наближення."
  },
  "dice-probability": {
    "de": "Berechnet die Wahrscheinlichkeit genau einer gewählten Summe bei 1–10 identischen fairen Würfeln mit 2–100 Seiten, nummeriert von 1 bis zur Seitenzahl. Unabhängige Würfe machen jedes geordnete Ergebnis gleich wahrscheinlich.",
    "en": "Calculates the chance of exactly a chosen sum on 1–10 identical fair dice with 2–100 faces numbered from 1 to the number of faces. Rolls are independent, so every ordered outcome has equal probability.",
    "es": "Calcula la probabilidad de una suma exacta con 1–10 dados idénticos y equilibrados de 2–100 caras, numeradas de 1 al número de caras. Las tiradas son independientes y cada resultado ordenado es equiprobable.",
    "ru": "Считает вероятность ровно заданной суммы на 1–10 одинаковых честных кубиках с 2–100 гранями, пронумерованными от 1 до числа граней. Броски предполагаются независимыми: каждый упорядоченный набор равновероятен.",
    "uk": "Рахує ймовірність рівно заданої суми на 1–10 однакових чесних кубиках із 2–100 гранями, пронумерованими від 1 до кількості граней. Кидки вважаються незалежними, тому кожен упорядкований набір рівноймовірний."
  },
  "divisors": {
    "de": "Ermittelt die positiven Teiler einer ganzen Zahl n von 1 bis 1000000000000, ihre Anzahl, ihre Summe und die Summe ohne n selbst. Die Kennzahlen verwenden alle Teiler; das Hauptergebnis zeigt nur die ersten 40.",
    "en": "Find positive divisors of an integer n from 1 to 1000000000000, their count, their sum and the proper-divisor sum excluding n itself. Totals use the entire set; the main result previews only the first 40 divisors.",
    "es": "Encuentra los divisores positivos de un entero n entre 1 y 1000000000000, su cantidad, su suma y la suma de divisores propios, excluido n. Los totales usan el conjunto completo; el resultado principal muestra solo los primeros 40 divisores.",
    "ru": "Находит положительные делители целого n от 1 до 1000000000000, их количество, сумму и сумму собственных делителей без самого n. Полный набор используется для итогов, а в основном результате показаны только первые 40 делителей.",
    "uk": "Знаходить додатні дільники цілого n від 1 до 1000000000000, їхню кількість, суму та суму власних дільників без самого n. Підсумки використовують увесь набір, а основний результат показує лише перші 40 дільників."
  },
  "drip-water-leak": {
    "de": "Die erhaltenen 0,05 ml sind ein Beispiel. Mittleres Tropfenvolumen messen; ein allgemeiner Wert existiert nicht.",
    "en": "The retained 0.05 mL is an example. Measure your average drop volume; there is no universal value.",
    "es": "El 0,05 ml conservado es un ejemplo. Mide el volumen medio de tu gota; no hay un valor universal.",
    "ru": "Сохранённые 0,05 мл — пример. Измерьте свой средний объём капли; универсального значения нет.",
    "uk": "Збережені 0,05 мл — приклад. Виміряйте середній об’єм своєї краплі; універсального значення немає."
  },
  "drywall": {
    "de": "Profile und Befestigungen verwenden offengelegte grobe Ansätze statt eines konkreten Systemplans. Zuschnitt, Öffnungen, Fugenlängen, Brandschutz und Akustik werden nicht berechnet.",
    "en": "Profile and fasteners use explicit rough coefficients, not a specific system layout. Cutting plans, openings, joint lengths, fire performance and acoustic requirements are not calculated.",
    "es": "La perfilería y las fijaciones usan coeficientes aproximados explícitos, no el plano de un sistema concreto. No calcula despieces, huecos, juntas, resistencia al fuego ni prestaciones acústicas.",
    "ru": "Профиль и крепёж используют явно заданные грубые коэффициенты, а не схему конкретной системы. План раскроя, проёмы, длина стыков, требования огнестойкости и акустики не рассчитываются.",
    "uk": "Профіль і кріплення використовують явно задані грубі коефіцієнти, а не схему конкретної системи. Розкрій, прорізи, довжина стиків, вогнестійкість та акустика не розраховуються."
  },
  "electricity-usage": {
    "de": "Die 30-Tage-Zeile verwendet immer 30, unabhängig vom gewählten Zeitraum. Für h Stunden wird die eingegebene mittlere Leistung angenommen.",
    "en": "The 30-day row always uses 30, independently of the chosen period. The model holds the entered average power for h hours.",
    "es": "La fila de 30 días siempre usa 30, sea cual sea el periodo elegido. Se supone la potencia media introducida durante h horas.",
    "ru": "Строка за 30 дней всегда использует 30, независимо от выбранного периода. Модель предполагает указанную среднюю мощность в течение h часов.",
    "uk": "Рядок за 30 днів завжди використовує 30, незалежно від обраного періоду. Модель тримає введену середню потужність протягом h годин."
  },
  "engine-displacement": {
    "de": "D und S stehen in mm, n ist eine ganze Zahl ab 1 bis zur größten sicheren Ganzzahl. Für einen Zylinder gilt n = 1; 1000 cm³ = 1 L.",
    "en": "D and S are in mm, and n is a whole number from 1 to the largest safe integer. For one cylinder use n = 1; 1000 cm³ = 1 L.",
    "es": "D y S están en mm y n es un entero desde 1 hasta el mayor entero seguro. Para un cilindro usa n = 1; 1000 cm³ = 1 L.",
    "ru": "D и S заданы в мм, n — целое число от 1 до максимального безопасного целого. Для одного цилиндра n = 1; 1000 см³ = 1 л.",
    "uk": "D і S задані в мм, n — ціле число від 1 до найбільшого безпечного цілого. Для одного циліндра n = 1; 1000 см³ = 1 л."
  },
  "epoxy-volume": {
    "de": "Benötigt werden die Dichte der fertigen Mischung und ein Massenverhältnis. Zulässige Gießhöhe, Verarbeitungszeit, Aushärtungsbedingungen und Zusammensetzung bestimmt die Anleitung des gewählten Produkts.",
    "en": "Use the density of the mixed system and a mass-based component ratio. It does not determine allowable pour depth, working time, curing conditions or kit composition; these come from the selected product instructions.",
    "es": "Se requieren la densidad de la mezcla y una proporción por masa. El cálculo no determina espesor admisible, tiempo de trabajo, condiciones de curado ni composición del kit; consulta las instrucciones del producto.",
    "ru": "Нужны плотность именно смешанной системы и соотношение компонентов по массе. Калькулятор не определяет допустимую толщину заливки, время работы, условия отверждения или состав набора — их задаёт инструкция выбранного продукта.",
    "uk": "Потрібні густина саме змішаної системи та масове співвідношення компонентів. Допустиму товщину заливання, час роботи, умови тверднення й склад набору визначає інструкція обраного продукту."
  },
  "fence": {
    "de": "Ein zusätzlicher Pfosten je Öffnung ist eine Konvention dieser Mengenabschätzung. Torbreiten, Positionen, Ecken, Lasten und Stützenaufbau sind nicht angegeben.",
    "en": "One extra post per entered opening is a convention of this budget model. Gate widths and positions, corners, loads and support construction are not supplied.",
    "es": "Un poste extra por hueco es una convención presupuestaria del modelo. No se indican anchos ni posiciones de puertas, esquinas, cargas o construcción de apoyos.",
    "ru": "Один дополнительный столб на каждый введённый проём — условность этой сметной модели. Ширина и положение ворот, углы, нагрузки и конструкция опор не заданы.",
    "uk": "Додатковий стовп на кожен проріз — умовність цієї оцінки. Ширина й місце воріт, кути, навантаження та конструкція опор не задані."
  },
  "fibonacci": {
    "de": "Hier gilt F₁ = 0 und F₂ = 1: Index 1 bezeichnet null. Zulässig sind ganze Indizes von 1 bis 78.",
    "en": "Here F₁ = 0 and F₂ = 1, so the first index means zero. Indices are integers from 1 to 78: this retained page limit is not a limit of the recurrence or of BigInt.",
    "es": "Aquí F₁ = 0 y F₂ = 1: el primer índice corresponde a cero. Se admiten índices enteros entre 1 y 78; este límite de la página no es un límite de la recurrencia ni de BigInt.",
    "ru": "Здесь F₁ = 0 и F₂ = 1: первый номер относится к нулю. Принимаются целые номера от 1 до 78; это сохранённый предел страницы, а не предел рекуррентной формулы или BigInt.",
    "uk": "Тут F₁ = 0 і F₂ = 1: перший номер відповідає нулю. Приймаються цілі номери від 1 до 78; це збережена межа сторінки, а не рекурентної формули або BigInt."
  },
  "final-grade": {
    "de": "C und T liegen zwischen 0 und 100; 0 < w ≤ 100. Rundungsregeln einer Institution sind nicht enthalten.",
    "en": "C and T range from 0 to 100; 0 < w ≤ 100. Institutional rounding rules are not included.",
    "es": "C y T están entre 0 y 100; 0 < w ≤ 100. No se aplican reglas institucionales de redondeo.",
    "ru": "C и T находятся между 0 и 100; 0 < w ≤ 100. Правила округления учреждения не учитываются.",
    "uk": "C і T від 0 до 100; 0 < w ≤ 100. Округлення закладу не враховується."
  },
  "fuel-consumption": {
    "de": "Bedarf = Strecke·Verbrauch/100; dies ist keine Prognose einer tatsächlichen Fahrt.",
    "en": "Required fuel = distance·consumption/100; it is not a prediction of an actual journey.",
    "es": "Combustible = distancia·consumo/100; no es una predicción de un viaje real.",
    "ru": "Количество топлива = расстояние·расход/100; расчёт не является прогнозом фактической поездки.",
    "uk": "Пальне = відстань·витрата/100; це не прогноз фактичної поїздки."
  },
  "fuel-oil-mix": {
    "de": "Prüfe in der Motoranleitung das geforderte Verhältnis sowie Öl und Benzin. Die Volumenaddition ist eine Modellannahme und kein gemessenes Endvolumen.",
    "en": "Check the engine instructions for its required ratio, oil and petrol. Adding volumes is an additive-volume assumption, not a measured final mixture volume.",
    "es": "Consulta las instrucciones del motor para proporción, aceite y gasolina requeridos. Sumar volúmenes es un supuesto de aditividad, no una medida del volumen final.",
    "ru": "Проверьте требуемые двигателем отношение, масло и бензин по его инструкции. Сумма объёмов — модель аддитивности, а не измеренный конечный объём смеси.",
    "uk": "Перевірте потрібні двигуну пропорцію, мастило й бензин за його інструкцією. Додавання об’ємів є припущенням моделі, а не виміряним кінцевим об’ємом суміші."
  },
  "generator-fuel": {
    "de": "Wechselnde Lasten in Abschnitten mit passendem s rechnen; aus elektrischer Nulllast lässt diese lineare Rechnung keinen Leerlaufverbrauch ableiten.",
    "en": "Split changing loads into stages with suitable s; this linear model cannot infer idle fuel from zero electrical load.",
    "es": "Divide cargas variables en tramos con s adecuado; el modelo lineal no deduce consumo de ralentí a partir de carga eléctrica cero.",
    "ru": "Для меняющейся нагрузки считайте участки отдельно с подходящим s; нулевой электрической нагрузке эта линейная модель не назначает нулевой расход холостого хода.",
    "uk": "Змінне навантаження рахуйте ділянками з відповідним s; модель не визначає витрату холостого ходу за нульового електричного навантаження."
  },
  "gpa": {
    "de": "Alle Noten müssen dieselbe Skala verwenden. Regeln einer Hochschule zu Wiederholungen und Rundung werden nicht nachgebildet.",
    "en": "Use one grading scale throughout. Institutional rules, including retakes and rounding, are not reproduced.",
    "es": "Todas las notas deben usar una sola escala. No reproduce las normas de una institución sobre repeticiones o redondeo.",
    "ru": "Все оценки вводятся в одной шкале. Правила конкретного учебного заведения, включая пересдачи и округление, здесь не воспроизводятся.",
    "uk": "Усі оцінки вводьте в одній шкалі. Правила закладу щодо перескладань та округлення тут не відтворюються."
  },
  "half-life": {
    "de": "Die Halbwertszeit bleibt konstant, die Ausgangskomponente wird nicht aufgefüllt; Zerfallsprodukte und ihr weiterer Zerfall werden nicht berechnet.",
    "en": "The model assumes constant half-life and no replenishment; decay products and their subsequent decay are not calculated.",
    "es": "Se supone semivida constante y ausencia de aporte; no se calculan productos de desintegración ni su evolución posterior.",
    "ru": "Модель предполагает постоянный период и отсутствие пополнения исходного компонента; продукты распада и их дальнейший распад не вычисляются.",
    "uk": "Період вважається сталим, поповнення компонента відсутнє; продукти розпаду та їхній подальший розпад не обчислюються."
  },
  "heating-power": {
    "de": "Die 100 W sind eine feste Modellannahme und kein gemessener Verlust jedes Fensters. Transmission der Gebäudehülle, Außentemperatur, Luftundichtheit und Heizgerätedaten werden nicht berechnet.",
    "en": "The 100 W addition is this model’s fixed assumption, not a measured loss for every window. Envelope transmission, outdoor temperature, infiltration and heater performance are not calculated.",
    "es": "Los 100 W son un supuesto fijo del modelo, no la pérdida medida de cada ventana. No se calculan transmisión de cerramientos, temperatura exterior, infiltración ni rendimiento del equipo.",
    "ru": "Прибавка 100 Вт — фиксированное допущение этой модели, а не измеренная потеря каждого окна. Теплопередача ограждений, температура улицы, инфильтрация и характеристики отопителя не рассчитываются.",
    "uk": "Додаток 100 Вт є фіксованим припущенням моделі, а не виміряною втратою кожного вікна. Теплопередача огороджень, вулична температура, інфільтрація й характеристики нагрівача не рахуються."
  },
  "insulation": {
    "de": "Berechnet werden Mengen, nicht Wärmeschutz, Feuchteverhalten oder Bauteilaufbau.",
    "en": "This is a quantity calculation, not a thermal-performance, moisture or assembly design.",
    "es": "Es un cálculo de cantidades, no de aislamiento térmico, humedad ni diseño constructivo.",
    "ru": "Это расчёт количества: требуемая тепловая защита, влажностный режим и устройство конструкции не определяются.",
    "uk": "Це розрахунок кількості, а не теплового захисту, вологісного режиму чи будови конструкції."
  },
  "inverse-square": {
    "de": "Betrachtet wird dieselbe Richtung bei unveränderter Abstrahlung, ohne Absorption oder Reflexionen; nahe einer ausgedehnten Quelle kann das Modell ungeeignet sein. Gib keinen dB-Pegel ein: Er ist logarithmisch und darf nicht mit dem quadratischen Abstandsverhältnis multipliziert werden.",
    "en": "The model follows one direction with an unchanged radiation pattern, without absorption or reflections; it may fail close to an extended source. Do not enter a dB level: it is logarithmic and cannot be multiplied by the squared distance ratio.",
    "es": "El modelo sigue una misma dirección con patrón de emisión constante, sin absorción ni reflexiones; puede fallar cerca de una fuente extensa. No introduzcas un nivel en dB: es logarítmico y no se puede multiplicar por el cuadrado de la razón de distancias.",
    "ru": "Модель относится к одному направлению при неизменной диаграмме излучения, без поглощения и отражений; для протяжного источника вблизи она может не работать. Не вводите уровень в дБ: это логарифм, который нельзя умножать на квадрат расстояний.",
    "uk": "Модель стосується одного напрямку за незмінної діаграми випромінювання, без поглинання та відбиття; поблизу протяжного джерела вона може не працювати. Не вводьте рівень у дБ: це логарифм, який не можна множити на квадрат відношення відстаней."
  },
  "laminate-calculator": {
    "de": "Dieses rechteckige Gesamtmodell berechnet weder Zuschnitt, Länge der letzten Reihe, versetzte Stöße, Nischen noch Montagefugen. Untergrundtoleranzen und Abstände stammen aus der Anleitung des gewählten Belags, nicht aus einer allgemeinen Rechnernorm.",
    "en": "This aggregate rectangular model does not calculate plank cuts, the final row length, staggered joints, recesses or installation gaps. Subfloor tolerances and gaps come from the instructions for the selected flooring, not a universal calculator standard.",
    "es": "Este modelo rectangular agregado no calcula cortes de tablas, longitud de la última fila, juntas alternadas, nichos ni holguras de montaje. Las tolerancias de la base y las holguras proceden de las instrucciones del revestimiento elegido, no de una norma universal del calculador.",
    "ru": "Это агрегированная прямоугольная модель: раскрой досок, минимальная длина последнего ряда, смещение стыков, ниши и монтажные зазоры не рассчитываются. Допуски основания и зазоры берутся из инструкции выбранного покрытия, а не из универсальной нормы калькулятора.",
    "uk": "Ця загальна прямокутна модель не розраховує розкрій дощок, довжину останнього ряду, зміщення стиків, ніші чи монтажні зазори. Вимоги до основи та зазорів беруть з інструкції обраного покриття, а не з універсальної норми калькулятора."
  },
  "leap-year": {
    "de": "Für frühe Jahre gilt dieselbe mathematische Regel ohne Rekonstruktion eines historischen Landeskalenders. Eine Schaltsekunde betrifft die Zeitmessung und ändert die Februartage nicht.",
    "en": "Early years use the same mathematical rule without reconstructing any country’s historical calendar. A leap second belongs to timekeeping and does not change the days in February.",
    "es": "Los años antiguos usan la misma regla matemática sin reconstruir el calendario histórico de un país. Un segundo intercalar pertenece al cómputo del tiempo y no cambia los días de febrero.",
    "ru": "Для ранних лет применяется то же математическое правило, без восстановления исторического календаря конкретной страны. Високосная секунда относится к шкале времени и не меняет число дней февраля.",
    "uk": "Для ранніх років застосовується те саме математичне правило без відновлення історичного календаря країни. Високосна секунда стосується обліку часу й не змінює днів лютого."
  },
  "lighting": {
    "de": "Der Nutzungsgrad wird mit 1 angenommen: Verteilung, Reflexionen, Arbeitsebene und gemessene Lux werden nicht berechnet. N wird ganz aufgerundet, garantiert aber keine Normerfüllung.",
    "en": "Utilisation is assumed 1: beam distribution, reflections, working plane and measured lux are not calculated. N rounds up to whole lamps without guaranteeing compliance with the illuminance target.",
    "es": "Se supone utilización 1: distribución, reflexiones, plano de trabajo y lux medidos no se calculan. N se redondea a lámparas enteras sin garantizar la norma.",
    "ru": "Коэффициент использования света принят равным 1: распределение, отражения, рабочая плоскость и фактические люксы не рассчитываются. Целое N округляется вверх, но достижение нормы этим не гарантируется.",
    "uk": "Коефіцієнт використання прийнятий за 1: розподіл, відбиття, робоча площина й виміряні люкси не рахуються. N округлюється вгору без гарантії дотримання норми."
  },
  "linoleum": {
    "de": "Der Zuschlag erhöht nur die Bahnenlänge, nicht die Breite; die Richtung entlang L ist fest.",
    "en": "Allowance increases strip length only, not width; strips always run along L.",
    "es": "El margen aumenta solo el largo de las tiras, no su ancho; siempre se colocan a lo largo de L.",
    "ru": "Запас увеличивает только длину полос, не их ширину; направление вдоль L фиксировано.",
    "uk": "Запас збільшує лише довжину смуг, не ширину; напрям уздовж L фіксований."
  },
  "mass-energy": {
    "de": "Die Einheiten erläutern die Größenordnung; sie bestimmen keine aus Brennstoff gewinnbare Strommenge. Für eine Reaktion ist der Massendefekt Δm nötig, für Strom zusätzlich der Umwandlungswirkungsgrad.",
    "en": "These units explain the scale; they do not give the electricity obtainable from a fuel. A reaction requires its mass defect Δm, and electricity production also requires a conversion efficiency.",
    "es": "Las unidades explican la escala, pero no la electricidad obtenible de un combustible. Una reacción requiere su defecto de masa Δm y la producción eléctrica necesita además la eficiencia de conversión.",
    "ru": "Эти единицы объясняют масштаб; они не сообщают, сколько электричества можно получить от топлива. Для реакции нужен дефект массы Δm, а для электростанции ещё и эффективность преобразования.",
    "uk": "Одиниці пояснюють масштаб, але не кількість електрики з палива. Для реакції потрібен дефект маси Δm, а для електростанції ще й ефективність перетворення."
  },
  "metal-weight": {
    "de": "Es ist eine geometrische Schätzung ohne Bestimmung von Werkstoffsorte, Maßtoleranzen, Beschichtungen oder Transport- und Hebebedingungen.",
    "en": "This is a geometric estimate; material grade, dimensional tolerances, coatings and transport or lifting conditions are not determined.",
    "es": "Es una estimación geométrica sin determinar aleación, tolerancias, recubrimientos ni condiciones de transporte o elevación.",
    "ru": "Это геометрическая оценка: марка материала, допуски размеров, покрытия и условия перевозки или подъёма не определяются.",
    "uk": "Це геометрична оцінка без визначення марки, допусків, покриттів чи умов перевезення й піднімання."
  },
  "miter-angle": {
    "de": "Unterschiedliche Breiten, räumliche zusammengesetzte Schnitte und überstumpfe Winkel θ≥180° werden nicht berechnet. Prüfe die Skalenkonvention deiner Säge.",
    "en": "Unequal-width joints, spatial compound cuts and reflex angles θ≥180° are not calculated. Check your saw’s scale convention.",
    "es": "No se calculan uniones de anchos distintos, cortes compuestos espaciales ni ángulos reflejos θ≥180°. Comprueba la convención de tu sierra.",
    "ru": "Не рассчитываются соединения разной ширины, пространственные составные резы или рефлексные углы θ≥180°. Проверьте соглашение шкалы своей пилы.",
    "uk": "Різні ширини, просторові складені різи та рефлексні кути θ≥180° не розраховуються. Перевірте шкалу своєї пилки."
  },
  "number-scale-names": {
    "de": "Der Wert muss positiv sein; null und negative Zahlen werden abgelehnt. Milliarde und englisches billion bedeuten hier 10⁹; die lange Skala wird nicht automatisch gewählt.",
    "en": "The value must be positive; zero and negative numbers are rejected. Here billion means 10⁹, with no automatic long-scale interpretation.",
    "es": "El valor debe ser positivo; se rechazan cero y números negativos. Aquí mil millones y el inglés billion significan 10⁹, sin interpretación automática de la escala larga.",
    "ru": "Значение должно быть положительным; ноль и отрицательные числа не принимаются. Здесь миллиард и английское billion означают 10⁹, без автоматического выбора длинной шкалы.",
    "uk": "Значення має бути додатним; нуль і від’ємні числа не приймаються. Тут мільярд і англійське billion означають 10⁹, без автоматичного вибору довгої шкали."
  },
  "number-to-words": {
    "en": "Enter a whole number — written-out form does not take a fractional part. The amount line always uses the currency code RUB and 00 kopecks; check the currency and required wording before inserting it into a document.",
    "ru": "Введите целое число — дробную часть запись словами не принимает. Строка «Сумма прописью» всегда использует RUB и 00 копеек; перед вставкой в документ проверьте его валюту и требования.",
    "uk": "Грошовий рядок завжди використовує RUB і 00 копійок. Перед вставкою в документ перевірте валюту й вимоги до формулювання."
  },
  "paint-calculator": {
    "de": "Verbrauch und Anstrichzahl gelten für die konkrete Farbe und Oberfläche; ein oder zwei Anstriche sind keine allgemeine Regel. Decke, tatsächliche Öffnungsgrößen, unterschiedlicher Verbrauch je Anstrich und Grundierung werden nicht separat ergänzt.",
    "en": "Choose consumption and coat count for the actual paint and surface; neither one nor two coats is a universal rule. The ceiling, actual opening sizes, different consumption between coats and primer are not added separately.",
    "es": "Consumo y capas dependen de la pintura y la superficie; una o dos capas no son una regla universal. No se añaden techo, medidas reales de huecos, consumos diferentes entre capas ni imprimación.",
    "uk": "Витрату й кількість шарів обирають для конкретної фарби та поверхні: ані один, ані два шари не є універсальним правилом. Стеля, справжні розміри прорізів, різна витрата між шарами та ґрунтовка окремо не додаються."
  },
  "paper-quantity": {
    "de": "Die Papiermasse enthält keinen Umschlag, Karton, Klebstoff oder andere Inhalte. Das fertige Paket vor der Tarifwahl wiegen: Die nominale Schätzung garantiert keinen Gewichtsschwellenwert.",
    "en": "Paper mass excludes the envelope, box, glue and other contents. Weigh the finished parcel before selecting postage: the nominal estimate does not guarantee staying below a weight threshold.",
    "es": "La masa del papel excluye sobre, caja, pegamento y otros contenidos. Pesa el paquete terminado antes de elegir tarifa: el cálculo nominal no garantiza respetar un umbral de peso.",
    "ru": "Масса бумаги не включает конверт, коробку, клей и другие вложения. Перед выбором тарифа взвесьте готовую посылку: номинальный расчёт не гарантирует соблюдение весового порога.",
    "uk": "Маса паперу не включає конверт, коробку, клей та інші вкладення. Перед вибором тарифу зважте готову посилку: номінальний розрахунок не гарантує дотримання вагового порога."
  },
  "photon-energy": {
    "de": "Die Rechnung umfasst weder Quellenleistung noch Bestrahlungsdauer oder eine Bewertung der Wirkung auf Menschen. Gib eine positive Vakuumwellenlänge ein. Bei einer Wellenlänge innerhalb eines Materials wird zusätzlich dessen Brechungsindex benötigt.",
    "en": "The calculation concerns a single photon; it has no source power, exposure duration or assessment of effects on people. Enter a positive vacuum wavelength. A wavelength measured inside a material also requires its refractive index.",
    "es": "El cálculo no incluye potencia de la fuente, duración de la exposición ni evaluación de efectos sobre las personas. Introduce una longitud de onda positiva en el vacío. Para una longitud medida dentro de un material también hace falta su índice de refracción.",
    "ru": "Это расчёт для одного фотона, без мощности источника, времени облучения и оценки воздействия на человека. Введите положительную длину волны именно в вакууме; длина волны в среде требует знания её показателя преломления.",
    "uk": "Розрахунок стосується одного фотона; він не враховує потужність джерела, тривалість опромінення чи вплив на людину. Введіть додатну довжину хвилі саме у вакуумі. Для хвилі всередині матеріалу потрібен також його показник заломлення."
  },
  "pipe-weight": {
    "de": "Der errechnete Innendurchmesser ist ein geometrisches Maß, nicht automatisch DN oder ein Fittingmaß. Festigkeit, Durchfluss und Transportbedingungen werden nicht geprüft.",
    "en": "The calculated inside diameter is geometric, not automatically a DN designation or fitting size. Strength, fluid flow and transport conditions are not checked.",
    "es": "El diámetro interior calculado es geométrico, no automáticamente DN ni tamaño de conexión. No comprueba resistencia, caudal ni condiciones de transporte.",
    "ru": "Внутренний диаметр — вычисленная геометрия, не автоматически размер DN или посадочный размер фитинга. Прочность, расход жидкости и условия перевозки не проверяются.",
    "uk": "Внутрішній діаметр — розрахована геометрія, а не автоматично DN чи розмір фітинга. Міцність, витрата рідини й умови перевезення не перевіряються."
  },
  "plaster": {
    "de": "Der voreingestellte Wert 8,5 ist ein hypothetischer Verbrauch und kein typischer Gipsputzwert: Eine Herstellerangabe für 10 mm muss zuerst durch 10 geteilt werden.",
    "en": "The default 8.5 is a hypothetical user consumption, not a typical gypsum-plaster rate: a manufacturer value for a 10 mm layer must first be divided by 10.",
    "es": "El valor inicial 8,5 es un consumo hipotético, no una tasa típica de yeso: una cifra del fabricante para 10 mm debe dividirse primero entre 10.",
    "ru": "Значение 8,5 в поле — условный пользовательский расход, а не типичная норма гипсовой штукатурки: расход производителя на слой 10 мм нужно сначала разделить на 10.",
    "uk": "Типове поле 8,5 — умовна користувацька витрата, а не норма гіпсової штукатурки: показник виробника на 10 мм спочатку ділять на 10."
  },
  "pool-fill-time": {
    "de": "Bekanntes V wird in m³ eingegeben; rechteckig V=L×B×h, rund zylindrisch V=π×(D/2)²×h.",
    "en": "Known volume V is in m³; rectangular basin V=L×B×h and cylindrical round basin V=π×(D/2)²×h.",
    "es": "V conocido se introduce en m³; vaso rectangular V=L×B×h y circular cilíndrico V=π×(D/2)²×h.",
    "ru": "Известный объём V вводится в м³; прямоугольная чаша V=L×B×h, круглая цилиндрическая V=π×(D/2)²×h.",
    "uk": "Відомий V вводиться в м³; прямокутна чаша V=L×B×h, кругла циліндрична V=π×(D/2)²×h."
  },
  "power-to-weight": {
    "de": "Berechnete Masse = Grundmasse + Zuladung. Zähle Personen oder Kraftstoff nicht doppelt, wenn sie bereits in der Grundmasse enthalten sind.",
    "en": "Calculated mass = entered mass + payload. Do not add people or fuel twice if already included in the base mass.",
    "es": "Masa calculada = masa introducida + carga. No sumes personas o combustible dos veces si ya figuran en la masa base.",
    "ru": "Масса = введённая масса + дополнительная нагрузка. Не прибавляйте людей или топливо повторно, если они уже включены в исходную массу.",
    "uk": "Маса = введена маса + додаткове навантаження. Не додавайте людей або пальне повторно, якщо вони вже включені в базову масу."
  },
  "prime-factorization": {
    "de": "Zerlegt eine ganze Zahl von 2 bis 1000000000000 in Primfaktoren und zeigt Potenzschreibweise, Anzahl verschiedener Primfaktoren und Anzahl positiver Teiler.",
    "en": "Factor an integer from 2 to 1000000000000 into primes and read its power notation, number of distinct primes and positive-divisor count.",
    "es": "Descompone un entero entre 2 y 1000000000000 en factores primos y muestra la notación con exponentes, el número de primos distintos y la cantidad de divisores positivos.",
    "ru": "Разлагает целое число от 2 до 1000000000000 на простые множители, показывает запись со степенями, число различных простых и число положительных делителей.",
    "uk": "Розкладає ціле число від 2 до 1000000000000 на прості множники, показує запис зі степенями, кількість різних простих і кількість додатних дільників."
  },
  "probability-basic": {
    "de": "Der Anteil günstiger an allen Ergebnissen gilt nur bei gleich wahrscheinlichen Ergebnissen. Für disjunkte Ereignisse addieren sich die Wahrscheinlichkeiten tatsächlich, weil P(A∩B) = 0; das ist etwas anderes als Unabhängigkeit.",
    "en": "Favourable outcomes divided by total outcomes applies only when all outcomes are equally likely. Probabilities do add for disjoint events because P(A∩B) = 0; disjointness is different from independence.",
    "es": "El cociente entre resultados favorables y totales solo vale si todos los resultados son equiprobables. En sucesos incompatibles sí se suman las probabilidades, pues P(A∩B) = 0; incompatibilidad e independencia son condiciones distintas.",
    "ru": "Отношение благоприятных исходов к общему числу применимо, только когда все исходы равновероятны. Для непересекающихся событий вероятности действительно складываются, поскольку P(A∩B) = 0; это другое условие, чем независимость.",
    "uk": "Відношення сприятливих результатів до загальної кількості застосовне лише для рівноймовірних результатів. Для несумісних подій імовірності справді додаються, бо P(A∩B) = 0; несумісність відрізняється від незалежності."
  },
  "quarter-mile-elapsed-time": {
    "de": "Gib eine positive Leistung in mechanischen hp ein; metrische PS sind eine andere Einheit. Verwende dieselbe Leistungsdefinition beim Szenariovergleich; Zeit und Geschwindigkeit sind bedingte Schätzungen ohne Genauigkeitszusage.",
    "en": "Enter positive power in mechanical hp; metric PS is a different unit. Keep the power definition consistent between scenarios; read time and speed as conditional estimates with no claimed accuracy.",
    "es": "Introduce potencia positiva en hp mecánicos; los PS métricos son otra unidad. Mantén la misma definición de potencia al comparar; tiempo y velocidad son estimaciones condicionadas sin precisión declarada.",
    "ru": "Введите положительную мощность в механических hp; метрические PS — другая единица. Сравнивайте сценарии с одинаковым определением мощности; читайте время и скорость как условное приближение без заявленной точности.",
    "uk": "Введіть додатну потужність у механічних hp; метричні PS є іншою одиницею. Зберігайте однакове визначення потужності між сценаріями; час і швидкість є умовним наближенням без заявленої точності."
  },
  "quartile": {
    "de": "Hier wird die lineare Interpolation vom Typ 7 an der Position (n−1)·p verwendet. Werte strikt außerhalb werden zur Prüfung markiert, nicht als nachgewiesene Fehler.",
    "en": "Several definitions exist; this page uses type 7 linear interpolation at position (n−1)·p. A value strictly beyond a fence is flagged for review, not proved erroneous.",
    "es": "Aquí se usa la interpolación lineal de tipo 7 en la posición (n−1)·p. Un valor estrictamente fuera se señala para revisarlo, no como error demostrado.",
    "ru": "Определений квартилей несколько: здесь используется линейная интерполяция type 7 с позицией (n−1)·p. Значение строго за порогом помечается как выброс для проверки, а не как доказанная ошибка.",
    "uk": "Існує кілька визначень: тут застосовано лінійну інтерполяцію type 7 за позицією (n−1)·p. Значення строго за порогом позначається для перевірки, а не як доведена помилка."
  },
  "rainfall-volume": {
    "de": "Dies ist das mögliche Volumen für c; Überlauf, Speicherkapazität, gesonderter Erstabfluss und Wasserqualität werden nicht berechnet.",
    "en": "This is potential volume for selected c; overflow, storage capacity, separate first flush and water suitability are not calculated.",
    "es": "Es volumen potencial para c elegido; no calcula rebose, capacidad, primer lavado separado ni calidad del agua.",
    "ru": "Это потенциальный объём при выбранном c; перелив, ограничение ёмкости, отдельный первый смыв и пригодность воды не вычисляются.",
    "uk": "Це потенційний об’єм за обраним c; перелив, місткість, окремий перший змив і придатність води не визначаються."
  },
  "reading-speed": {
    "de": "Der Rechner legt keine Norm fest. Miss dein eigenes Tempo an passend schwierigem Material; gleiches Tempo bedeutet nicht gleiches Verständnis.",
    "en": "The calculator assigns no norm. Time yourself on material of the relevant difficulty and use your own pace; equal speed does not imply equal comprehension.",
    "es": "La calculadora no fija una norma. Mide tu ritmo con material de la dificultad adecuada; la misma velocidad no implica la misma comprensión.",
    "ru": "Калькулятор не назначает норму. Засеките время на тексте нужной сложности и используйте собственный темп; одинаковая скорость не означает одинаковое понимание.",
    "uk": "Калькулятор не встановлює норму. Виміряйте власний темп на тексті потрібної складності; однакова швидкість не означає однакового розуміння."
  },
  "relativity-dilation": {
    "de": "Für zwei Ereignisse an derselben bewegten Uhr wird deren Eigenzeitintervall τ zu t=γτ im Inertialsystem, in dem sich die Uhr mit v bewegt. Gravitation, Beschleunigung und der Ablauf einer Reise werden nicht modelliert.",
    "en": "For two events on one moving clock, its proper interval τ becomes t=γτ in the inertial frame where the clock travels at speed v. Gravity, acceleration and the itinerary of a journey are not modelled.",
    "es": "Para dos sucesos en un mismo reloj móvil, el intervalo propio τ pasa a t=γτ en el sistema inercial donde el reloj se mueve con velocidad v. No se modelan gravedad, aceleración ni el recorrido de un viaje.",
    "ru": "Для двух событий на одних движущихся часах собственный интервал τ преобразуется в t=γτ в инерциальной системе, где часы движутся со скоростью v. Гравитация, ускорение и маршрут путешествия здесь не моделируются.",
    "uk": "Для двох подій на одному рухомому годиннику власний інтервал τ перетворюється на t=γτ в інерціальній системі, де годинник рухається зі швидкістю v. Гравітація, прискорення та маршрут подорожі не моделюються."
  },
  "roman-numerals": {
    "de": "Der Bereich 1–3999 begrenzt Tausender auf drei M und nutzt die Subtraktionspaare IV, IX, XL, XC, CD und CM. Das ist die Konvention dieses Rechners, keine Grenze aller historischen Schreibweisen.",
    "en": "The supported range 1–3999 limits thousands to three Ms and uses the subtractive pairs IV, IX, XL, XC, CD and CM. This is the tool’s convention, not the limit of every historical Roman notation: additive variants, overlines and other extensions are unsupported.",
    "es": "El intervalo 1–3999 limita los millares a tres M y usa los pares sustractivos IV, IX, XL, XC, CD y CM. Es la convención de esta herramienta, no el límite de todas las notaciones históricas.",
    "ru": "Поддерживаемый диапазон 1–3999 ограничивает тысячи тремя M; используются вычитательные пары IV, IX, XL, XC, CD и CM. Это соглашение данного инструмента, а не предел всех исторических римских записей: аддитивные варианты, надстрочные черты и другие расширения не поддерживаются.",
    "uk": "Діапазон 1–3999 обмежує тисячі трьома M; використовуються віднімальні пари IV, IX, XL, XC, CD та CM. Це правило інструмента, а не межа всіх історичних римських записів: адитивні варіанти, надрядкові риски та інші розширення не підтримуються."
  },
  "room-volume": {
    "de": "Im Flächenmodus erscheinen nur V, A und H; aus der Bodenfläche allein folgen weder Umfang noch Wandfläche. Bei wechselnder Höhe benötigt V eine flächengewichtete mittlere Höhe.",
    "en": "Known-area mode returns only V, A and H: floor area alone cannot determine perimeter or walls. A variable-height space requires an area-weighted mean height for V.",
    "es": "Con área conocida solo devuelve V, A y H: el área de suelo no determina el perímetro ni las paredes. Una altura variable requiere una media ponderada por superficie.",
    "ru": "В режиме известной площади выводятся только V, A и H: периметр и стены по одной площади определить нельзя. Для переменной высоты V требует площади-взвешенной средней высоты.",
    "uk": "За відомою площею виводяться лише V, A і H: периметр та стіни з однієї площі визначити неможливо. За змінної висоти потрібна середня висота, зважена за площею."
  },
  "rounding": {
    "de": "Beim Runden zum nächsten Wert geht eine genaue Hälfte von null weg: 2,5 → 3 und −2,5 → −3. Diese Rundungsregel legt keine Vorgabe für Buchhaltungs-, Steuer- oder Bankdokumente fest; dort gilt die jeweils vorgeschriebene Methode.",
    "en": "In nearest mode, an exact half goes away from zero: 2.5 → 3 and −2.5 → −3. This rounding rule does not establish the rule for an accounting, tax or banking document; use the method specified for that document.",
    "es": "En el modo al más cercano, una mitad exacta se aleja de cero: 2,5 → 3 y −2,5 → −3. No establece el método de un documento contable, fiscal o bancario; aplica la regla especificada para ese documento.",
    "ru": "В режиме «к ближайшему» ровно половина уходит от нуля: 2,5 → 3, −2,5 → −3. Выбранное правило округления не устанавливает правила бухгалтерского, налогового или банковского документа: там нужно применять заданный для документа метод.",
    "uk": "У режимі «до найближчого» рівно половина йде від нуля: 2,5 → 3, −2,5 → −3. Це правило округлення не задає метод для бухгалтерського, податкового чи банківського документа; застосовуйте правило, установлене для відповідного документа."
  },
  "sample-size": {
    "de": "Plant die Zahl abgeschlossener Antworten zur Schätzung eines Anteils bei einfacher Zufallsstichprobe. Auswahlverzerrung, Nichtantworten und Messfehler werden damit nicht beseitigt; jede Umfrage erhält dadurch keine Qualitätsgarantie.",
    "en": "Plans the number of completed responses for estimating one proportion under simple random sampling. The calculation does not remove selection bias, nonresponse or measurement error, and is not a guarantee for every survey.",
    "es": "Planifica el número de respuestas completas para estimar una proporción mediante muestreo aleatorio simple. El cálculo no elimina sesgos de selección, falta de respuesta ni errores de medición y no garantiza la calidad de cualquier encuesta.",
    "ru": "Планирует число завершённых ответов для оценки одной доли при простом случайном отборе. Расчёт не устраняет смещение отбора, неответы или ошибки измерения и не гарантирует требуемое качество любого опроса.",
    "uk": "Планує кількість завершених відповідей для оцінки однієї частки за простого випадкового відбору. Розрахунок не усуває зміщення відбору, невідповіді чи помилки вимірювання й не гарантує потрібну якість будь-якого опитування."
  },
  "scale-model": {
    "de": "Dies ist ein linearer Maßstab; die Anzeigerundung ist keine Fertigungstoleranz.",
    "en": "This is a linear scale; displayed rounding does not set a manufacturing tolerance.",
    "es": "Es una escala lineal; el redondeo mostrado no fija una tolerancia de fabricación.",
    "ru": "Это линейный масштаб; вывод округлён и не задаёт производственный допуск.",
    "uk": "Це лінійний масштаб; округлення показу не задає виробничого допуску."
  },
  "screed-calculator": {
    "de": "Wasser, Nassmörteldichte, Bewehrung und Festigkeit werden nicht ermittelt. Trocknungszeit und zulässige Dicke hängen vom System ab und werden hier nicht bestimmt.",
    "en": "Water, wet-mix density, reinforcement and strength are not calculated. Drying time and allowed thickness depend on the system and are not determined here.",
    "es": "No se calculan agua, densidad de mortero húmedo, armado ni resistencia. Secado y espesor permitido dependen del sistema y no se determinan aquí.",
    "uk": "Вода, густина мокрого розчину, армування й міцність не визначаються. Висихання й допустима товщина залежать від системи та тут не обчислюються."
  },
  "sealant-volume": {
    "de": "Konkave Fugenform und produktspezifische Verluste werden nicht einzeln berechnet. Eigenen Zuschlag wählen; er garantiert nicht die Deckung aller Verluste.",
    "en": "Concave bead shape and product-specific losses are not computed separately. Choose your reserve; it is not a guarantee against every loss.",
    "es": "No calcula por separado la forma cóncava del cordón ni las pérdidas del producto. Elige tu margen; no garantiza cubrir todas las pérdidas.",
    "uk": "Увігнута форма шва та втрати конкретного продукту окремо не обчислюються. Задайте власний запас; він не гарантує покриття всіх втрат."
  },
  "skirting": {
    "de": "Einzelne Wandzuschnitte, Ecken und Verbinder werden nicht optimiert.",
    "en": "Individual wall cuts, corners and connectors are not optimized.",
    "es": "No optimiza los cortes de cada pared, esquinas ni conectores.",
    "uk": "Розкрій окремих стін, кути й з’єднувачі не оптимізуються."
  },
  "sleep-time": {
    "de": "„Reiner Schlaf“ bedeutet nur Blöcke ×90, keine gemessene Schlafdauer. Zahlenbeispiele prüfen die Formel, bestimmen aber keine Schlafphase und garantieren keine Erholung.",
    "en": "The “sleep only” row means blocks ×90, not measured time asleep. Numerical examples verify this formula; they neither locate a sleep stage nor guarantee feeling rested.",
    "es": "«Sueño neto» significa solo bloques ×90, no sueño medido. Los ejemplos comprueban la fórmula, sin localizar una fase de sueño ni garantizar descanso.",
    "ru": "Строка «чистый сон» показывает только блоки ×90, а не измеренную длительность сна. Числовые примеры проверяют формулу, но не определяют фазу сна и не гарантируют бодрость.",
    "uk": "«Чистий сон» означає лише блоки ×90, а не виміряний сон. Приклади перевіряють формулу, але не визначають фазу сну й не гарантують бадьорості."
  },
  "speed-distance-time": {
    "de": "Größen sind nichtnegativ; Zeit oder Geschwindigkeit im Nenner müssen positiv sein. Strecke null ergibt bei positivem Nenner Geschwindigkeit oder Zeit null; 0/0 wird nicht unterstützt.",
    "en": "Quantities are nonnegative; a time or speed used as divisor must be positive. Zero distance gives zero speed or time with a positive divisor; 0/0 is unsupported.",
    "es": "Las cantidades son no negativas; el tiempo o la velocidad usados como divisor deben ser positivos. Distancia cero da velocidad o tiempo cero con divisor positivo; no se admite 0/0.",
    "ru": "Значения неотрицательны; время в делителе и скорость в делителе должны быть положительными. Нулевой путь даёт нулевую скорость или время при положительном делителе; 0/0 не поддерживается.",
    "uk": "Величини невід’ємні; час або швидкість у знаменнику мають бути додатними. Нульовий шлях дає нульову швидкість або час за додатного знаменника; 0/0 не підтримується."
  },
  "stats-descriptive": {
    "de": "Die Varianz ist die mittlere quadratische Abweichung vom Mittelwert — geteilt durch n−1 bei einer Stichprobe und durch n bei einer Grundgesamtheit —, und die Standardabweichung ist ihre Quadratwurzel. Alle Listeneinträge müssen dieselbe Größe in einer einheitlichen Einheit beschreiben.",
    "en": "Variance is the mean squared deviation from the mean — divided by n−1 for a sample and by n for a population — and the standard deviation is its square root. List entries must describe the same quantity in a consistent unit.",
    "es": "La varianza es la desviación cuadrática media respecto a la media —dividida entre n−1 en una muestra y entre n en una población— y la desviación típica es su raíz cuadrada. La lista debe describir la misma magnitud con una unidad coherente.",
    "ru": "Дисперсия — средний квадрат отклонения от среднего: выборочная делит на n−1, генеральная на n. Все значения списка должны описывать одну величину в согласованной единице.",
    "uk": "Дисперсія — середній квадрат відхилення від середнього: вибіркова ділить на n−1, генеральна на n. Значення списку мають описувати одну величину в узгодженій одиниці."
  },
  "stopping-distance": {
    "de": "Das ist eine lineare Neigungsnäherung, kein exaktes Modell der schiefen Ebene. Wähle einen positiven μ für dein Szenario; der Rechner bestimmt ihn nicht aus dem Fahrbahntyp.",
    "en": "This is a linear grade approximation, not an exact inclined-plane model. Choose positive μ for your scenario; the tool does not determine it from a surface type.",
    "es": "Es una aproximación lineal de pendiente, no un modelo exacto de plano inclinado. Elige μ positivo para tu escenario; la herramienta no lo obtiene del tipo de superficie.",
    "ru": "Это линейное приближение уклона, не точная модель наклонной плоскости. Задайте положительный μ для своего сценария; калькулятор не определяет его по типу покрытия.",
    "uk": "Це лінійне наближення ухилу, а не точна модель похилої площини. Задайте додатний μ для свого сценарію; інструмент не визначає його за типом покриття."
  },
  "tank-volume": {
    "de": "Innenmaße in m verwenden. Kapselkapazität = πd²len/4 + πd³/6, Gesamthöhe len + d; die Füllung wird bewusst linear als Vvoll·Füllstand/(len + d) angenähert, nicht mit exakten Kugelsegmenten.",
    "en": "Use internal dimensions in m. Capsule capacity = πd²len/4 + πd³/6, total height len + d; fill is intentionally estimated linearly as Vfull·level/(len + d), not exact spherical segments.",
    "es": "Usa dimensiones interiores en m. Cápsula: capacidad πd²len/4 + πd³/6, altura total len + d; el llenado se estima deliberadamente como Vtotal·nivel/(len + d), sin segmentos esféricos exactos.",
    "uk": "Використовуйте внутрішні розміри в м. Капсула: місткість πd²len/4 + πd³/6, загальна висота len + d; налив навмисно оцінено лінійно як Vповний·рівень/(len + d), а не за точними сферичними сегментами."
  },
  "test-score-percent": {
    "de": "Alle Fragen haben dasselbe Gewicht, die Anzahlen sind ganzzahlig; Teilpunkte werden nicht unterstützt.",
    "en": "Every question has the same weight, and counts are integers; partial credit is not supported.",
    "es": "Todas las preguntas pesan lo mismo y las cantidades son enteras; no se admite crédito parcial.",
    "ru": "Все вопросы имеют одинаковый вес, ответы считаются целыми числами: частичные баллы не поддерживаются.",
    "uk": "Усі питання мають однакову вагу, кількості — цілі числа; часткові бали не підтримуються."
  },
  "text-reading-time": {
    "de": "Im Textmodus ist ein Wort eine Unicode-Buchstaben- oder Ziffernfolge mit kombinierenden Zeichen und inneren Bindestrichen oder Apostrophen. Pausen, Bilder und Formelinhalte werden nicht gesondert gemessen.",
    "en": "In text mode a word is a Unicode letter-or-digit sequence with combining marks and internal hyphens or apostrophes. Pauses, images and the content of formulas are not measured separately.",
    "es": "En modo texto, una palabra es una secuencia Unicode de letras o cifras con marcas combinantes y guiones o apóstrofos internos. No se miden por separado las pausas, imágenes ni el contenido de fórmulas.",
    "ru": "В режиме текста слово — последовательность букв или цифр Unicode с соединяющими знаками, внутренним дефисом или апострофом. Паузы, изображения и содержание формул отдельно не измеряются.",
    "uk": "У режимі тексту слово — послідовність літер або цифр Unicode зі сполучними знаками, внутрішнім дефісом чи апострофом. Паузи, зображення та зміст формул окремо не вимірюються."
  },
  "text-word-char-count": {
    "de": "Zeichen sind Codepunkte der ursprünglichen Zeichenkette ohne Normalisierung; ohne Leerraum werden alle Leerraumzeichen entfernt. Dies sind Zählregeln, keine Sprachanalyse oder Zeichenlimits externer Plattformen.",
    "en": "Characters are code points of the original string without normalization; the no-space count excludes all whitespace. These are counting conventions, not linguistic analysis or the quota rules of external platforms.",
    "es": "Los caracteres son puntos de código de la cadena original sin normalización; el recuento sin espacios excluye todo carácter de espacio en blanco. Son convenios de recuento, no análisis lingüístico ni reglas de límites de plataformas externas.",
    "ru": "Символы считаются кодовыми точками исходной строки, без нормализации; «без пробелов» исключает все пробельные знаки. Это соглашения счётчика, не лингвистический анализ и не правила лимитов внешних платформ.",
    "uk": "Символи — кодові точки початкового рядка без нормалізації; підрахунок без пробілів виключає всі пробільні знаки. Це правила лічильника, не мовний аналіз і не ліміти сторонніх платформ."
  },
  "tile-calculator": {
    "de": "Die voreingestellten 5 kg/m² sind keine allgemeine Produktnorm. Fugenbreite, Zuschnittplan und einzelne Wandöffnungen werden nicht modelliert.",
    "en": "The initial 5 kg/m² is editable and is not a universal product rate. Joint width, a cutting layout and individual wall openings are not modeled.",
    "es": "El valor inicial de 5 kg/m² es editable y no es una norma universal. No se modelan juntas, un plano de corte ni huecos individuales de pared.",
    "uk": "Початкові 5 кг/м² можна змінити; це не універсальна норма. Шви, схема розкрою та окремі стінові прорізи не моделюються."
  },
  "time-duration": {
    "de": "Ohne Daten beschreiben zwei Uhrzeiten keinen mehrtägigen Abstand. Sekunden, Zeitzonen und Sommerzeitwechsel werden nicht berücksichtigt.",
    "en": "There are no dates, so two clock times cannot identify several elapsed days. Seconds, time zones and daylight-saving changes are not included.",
    "es": "Sin fechas, dos horas no identifican varios días transcurridos. No se incluyen segundos, husos ni cambios de horario.",
    "ru": "Даты не вводятся, поэтому несколько суток по двум часам не определяются. Расчёт не учитывает секунды, часовой пояс и перевод часов.",
    "uk": "Без дат два покази годинника не визначають кілька діб. Секунди, часові пояси й переведення годинників не враховуються."
  },
  "timezone-difference": {
    "de": "Es sind feste eingegebene Abweichungen ohne Stadt, Datum, IANA-Regeln oder automatische Sommerzeitbestimmung.",
    "en": "These are two entered fixed offsets without city selection, a calendar date, IANA rules or automatic daylight-saving inference.",
    "es": "Son desfases fijos introducidos, sin ciudad, fecha, reglas IANA ni deducción automática del horario de verano.",
    "ru": "Это два фиксированных введённых смещения, без выбора города, календарной даты, IANA-правил и определения летнего времени.",
    "uk": "Це фіксовані введені зсуви без міста, дати, правил IANA й автоматичного літнього часу."
  },
  "tire-size": {
    "de": "Das ist die nominelle unbelastete Geometrie aus der Kennzeichnung. Fahrzeugfreigabe, Abstände, Tragfähigkeits- und Geschwindigkeitsindex werden nicht geprüft.",
    "en": "This is nominal unloaded geometry from the marking. The calculation does not verify vehicle approval, clearance, load index or speed rating.",
    "es": "Es la geometría nominal sin carga de la inscripción. No se comprueban homologación del vehículo, holguras, índice de carga ni velocidad.",
    "ru": "Это номинальная ненагруженная геометрия маркировки. Расчёт не проверяет допуски автомобиля, зазоры, индекс нагрузки или скорости.",
    "uk": "Це номінальна ненавантажена геометрія маркування. Розрахунок не перевіряє допуски авто, зазори, індекс навантаження чи швидкості."
  },
  "trip-cost": {
    "de": "Gib die gesamte Maut für die ganze Route ein; sie wird einmal addiert. Literpreis und Maut müssen dieselbe Währung verwenden.",
    "en": "Enter total tolls for the whole route; they are added once. Price per litre and tolls must use the same currency.",
    "es": "Introduce el total de peajes de toda la ruta: se suma una vez. Precio por litro y peajes deben usar la misma moneda.",
    "ru": "Платные дороги вводятся итогом за весь маршрут и добавляются один раз. Цена за литр и плата за дороги должны быть в одной валюте.",
    "uk": "Платні дороги вводяться сумою за весь маршрут і додаються один раз. Ціна за літр і плата за дороги мають бути в одній валюті."
  },
  "utility-total": {
    "de": "Jahr=12 gleiche Monate; Positionsanteile werden nicht ausgegeben. Einheitliche Währung und Steuerbasis verwenden.",
    "en": "Year=12 identical months; service percentages are not rendered. Use one currency and one tax basis throughout.",
    "es": "Año=12 meses iguales; no se muestran porcentajes por suministro. Usa la misma moneda y base fiscal en todo.",
    "ru": "Год=12 одинаковых месяцев; доли услуг отдельно не выводятся. Все суммы задавайте в одной валюте и на одной налоговой базе.",
    "uk": "Рік=12 однакових місяців; частки послуг не виводяться. Валюта й податкова база всюди однакові."
  },
  "wallpaper-calculator": {
    "de": "Das nutzt eine äquivalente Gesamtbreite, keinen Zuschnittplan je Wand und keine tatsächlichen Öffnungsmaße. Beschnittzugabe, versetzter Ansatz und Arbeiten oberhalb oder unterhalb von Öffnungen werden nicht gesondert berücksichtigt.",
    "en": "This uses equivalent total wall width, not a separate cutting plan or the actual dimensions of each opening. Trimming allowance, half-drop matching and separate work above or below openings are not modeled.",
    "es": "Se usa un ancho total equivalente, no un plano por pared ni las medidas reales de cada hueco. No se añaden margen de recorte, casado desplazado ni trabajo separado sobre o bajo huecos.",
    "uk": "Це еквівалентна загальна ширина стін, а не розкрій кожної стіни чи справжні розміри прорізів. Припуск на підрізання, зміщений рисунок і окрема робота над або під прорізами не враховуються."
  },
  "water-heating": {
    "de": "Bereich 0≤T_start<T_ende≤100°C bei näherungsweise Normaldruck, ohne Schmelzen, Verdampfen oder Gefäßerwärmung.",
    "en": "Domain 0≤T_start<T_end≤100°C at approximately ordinary pressure, without melting, vaporisation or vessel heating.",
    "es": "Dominio 0≤T_inicial<T_final≤100°C a presión aproximadamente ordinaria, sin fusión, vaporización ni calentamiento del recipiente.",
    "ru": "Область 0≤Tнач<Tкон≤100°C при приближении обычного давления, без плавления, испарения и нагрева бака.",
    "uk": "Область 0≤Tпоч<Tкін≤100°C за наближення звичайного тиску, без плавлення, випаровування та нагрівання бака."
  },
  "wave": {
    "de": "Es gilt die Phasengeschwindigkeit v=fλ; λ=v/f, f=v/λ und T=1/f. Die Gruppengeschwindigkeit eines Wellenpakets kann abweichen und wird hier nicht berechnet.",
    "en": "The phase-speed relation is v=fλ; λ=v/f, f=v/λ and T=1/f. A wave packet’s group speed can differ from phase speed and is not calculated here.",
    "es": "Se utiliza velocidad de fase v=fλ; λ=v/f, f=v/λ y T=1/f. La velocidad de grupo de un paquete de ondas puede diferir y no se calcula aquí.",
    "ru": "Используется фазовая скорость v=fλ; λ=v/f, f=v/λ, T=1/f. Групповая скорость пакета волн может отличаться от фазовой и здесь не вычисляется.",
    "uk": "Використовується фазова швидкість v=fλ; λ=v/f, f=v/λ, T=1/f. Групова швидкість хвильового пакета може відрізнятися від фазової та тут не обчислюється."
  },
  "weighted-mean": {
    "de": "Endliche Werte beider Vorzeichen und nichtnegative Gewichte werden unterstützt; mindestens ein Gewicht muss positiv sein. Werte benötigen eine gemeinsame Einheit, Gewichte eine einheitliche Bedeutung, etwa dieselbe Volumeneinheit oder die Zahl der Credits.",
    "en": "Finite values of either sign and nonnegative weights are supported; at least one weight must be positive. Values need one common unit, and weights one consistent meaning, such as the same volume unit or number of credits.",
    "es": "Se admiten valores finitos de cualquier signo y pesos no negativos; al menos un peso debe ser positivo. Los valores necesitan una unidad común y los pesos un significado coherente, como la misma unidad de volumen o número de créditos.",
    "ru": "Поддерживаются конечные значения любого знака и неотрицательные веса; хотя бы один вес должен быть положительным. Значения должны иметь одну единицу, а все веса — общую интерпретацию: например, одинаковые единицы объёма или число кредитов.",
    "uk": "Підтримуються скінченні значення будь-якого знака й невід’ємні ваги; хоча б одна вага має бути додатною. Значення мають одну одиницю, а всі ваги — узгоджений зміст, наприклад ту саму одиницю обсягу або кількість кредитів."
  },
  "wheel-offset": {
    "de": "Der Zusatz von 12,7 mm nimmt 0,5 Zoll je Felgenrand an und vermisst keine konkrete Felge. Der Versatzvergleich hält die Breite fest und ändert nur ET.",
    "en": "The 12.7 mm addition assumes 0.5 inch per rim edge and does not measure a particular wheel. The shift comparison holds width fixed and changes only ET.",
    "es": "Los 12,7 mm añadidos suponen 0,5 pulgadas por borde y no miden una llanta concreta. La comparación mantiene la anchura y cambia solo el ET.",
    "ru": "Добавка 12,7 мм предполагает по 0,5 дюйма на край обода и не измеряет конкретный диск. Сравнение смещения относится к одинаковой ширине: меняется только ET.",
    "uk": "Доданок 12,7 мм припускає по 0,5 дюйма на край обода й не вимірює конкретний диск. Порівняння зміщення стосується однакової ширини: змінюється тільки ET."
  },
  "work-hours": {
    "de": "Satz und Ergebnis haben dieselbe Währung ohne Umrechnung. Bezahlte Pausen, Zuschläge, Steuern, Feiertage und Sommerzeitregeln bestimmt das Modell nicht.",
    "en": "Rate and output must use the same currency, with no exchange conversion. Paid-break entitlement, overtime, tax, holidays and daylight-saving rules are not determined.",
    "es": "La tarifa y el resultado usan la misma moneda sin conversión. El modelo no determina descansos pagados, horas extra, impuestos, festivos ni horario de verano.",
    "ru": "Валюта ставки и результата должна совпадать, конвертации нет. Оплачиваемость перерыва, сверхурочные, налоги, праздник и летнее время модель не определяет.",
    "uk": "Валюта ставки й результату однакова, конвертації немає. Оплату перерви, надурочні, податки, свята й літній час модель не визначає."
  },
  "working-days-calculator": {
    "de": "Feiertage, verlegte Arbeitstage und gesetzliche Arbeitskalender werden nicht geladen.",
    "en": "Public holidays, transferred workdays and a national employment calendar are not loaded.",
    "es": "No se cargan festivos nacionales, jornadas trasladadas ni calendarios laborales legales.",
    "ru": "Государственные праздники, переносы и производственный календарь не загружаются.",
    "uk": "Державні свята, перенесення і виробничий календар не завантажуються."
  },
  "z-score": {
    "de": "Die Rechnung setzt keine Normalverteilung voraus und liefert weder p-Wert noch Randwahrscheinlichkeit. Prozentangaben einer Normalverteilung benötigen eine zusätzliche Annahme über die Daten.",
    "en": "The calculation itself does not require normality and does not produce a p-value or tail probability. Interpreting normal-distribution percentages requires a separate assumption about the data.",
    "es": "El cálculo no exige normalidad y no produce un valor p ni una probabilidad de cola. Interpretar porcentajes de la distribución normal necesita una hipótesis adicional sobre los datos.",
    "ru": "Сам расчёт не требует нормального распределения и не вычисляет p-значение или вероятность хвоста. Интерпретация через проценты нормального распределения требует отдельного предположения о данных.",
    "uk": "Сам розрахунок не потребує нормального розподілу й не рахує p-значення чи ймовірність хвоста. Тлумачення через відсотки нормального розподілу потребує окремого припущення щодо даних."
  }
};

export function getCalculatorSpecificLimitation(id: string, locale: Locale): string | undefined {
  return limitations[id]?.[locale];
}
