import type { CalculatorCopy } from '../../lib/platform/types';

// Actual 145 native body individually reviewed; scoped model and input corrections. Agent review is not human approval.
export const buildingWave13ContractContent = {
  "ru": {
    "longDescription": "Считает массу прямой круглой трубы с постоянной стенкой, погонную массу и геометрический объём внутренней полости. Нужны наружный диаметр, стенка, длина и плотность материала. Внутренний диаметр — вычисленная геометрия, не автоматически размер DN или посадочный размер фитинга. Прочность, расход жидкости и условия перевозки не проверяются.",
    "howItWorks": "Внутренний диаметр d=D−2t. Площадь металла S=πt(D−t)/10⁶ в м² при D и t в мм; это то же кольцо π(D²−d²)/4, без вычитания близких квадратов. Масса=S·L·ρ, кг, при L в м и ρ в кг/м³. Внутренний объём=πd²L/4000, л. Все входы положительны и конечны; требуется 2t<D.",
    "howToUse": [
      "Введите наружный геометрический диаметр и стенку в мм, не номинальный DN.",
      "Укажите длину в м и плотность материала вручную в кг/м³.",
      "Проверьте условие 2t<D и учитывайте фитинги, покрытия и фактические допуски отдельно."
    ],
    "example": "Стальная труба 108×4 длиной 6 м весит 61,6 кг — около 10,3 кг на погонный метр. Принята плотность 7850 кг/м³.",
    "faq": [
      {
        "q": "Почему стенка отнимается дважды?",
        "a": "Стенка расположена с обеих сторон диаметра. Для D=108 мм и t=4 мм получаем d=100 мм. При удвоении t площадь πt(D−t) изменяется не ровно вдвое."
      },
      {
        "q": "Какую плотность вводить?",
        "a": "Данные фактического материала в кг/м³. 7850 — допущение примера, а не сертификат любой стали. Здесь нет выбора материала или универсальной таблицы."
      },
      {
        "q": "Это точная масса конкретной партии?",
        "a": "Нет. Ввод задаёт идеальную геометрию и плотность. Допуски, покрытие, швы и неоднородность могут менять массу; достаточность для перевозки или подъёма не устанавливается."
      },
      {
        "q": "Рассчитываются ли другие профили и соединения?",
        "a": "Нет. Это только круглая труба. Квадратные трубы, углы скругления, муфты, фланцы и дополнительный металл соединений считаются отдельно."
      }
    ]
  },
  "en": {
    "longDescription": "Calculates mass of a straight round pipe with constant wall thickness, mass per metre and geometric bore volume. Enter outside diameter, wall, length and material density. The calculated inside diameter is geometric, not automatically a DN designation or fitting size. Strength, fluid flow and transport conditions are not checked.",
    "howItWorks": "Inside diameter d=D−2t. Metal area S=πt(D−t)/10⁶ in m² with D and t in mm; this equals the annulus π(D²−d²)/4 without subtracting nearly equal squares. Mass=S·L·ρ in kg for L in m and ρ in kg/m³. Bore volume=πd²L/4000 in litres. All inputs are positive and finite; 2t<D is required.",
    "howToUse": [
      "Enter geometric outside diameter and wall in mm, not nominal DN.",
      "Enter length in m and material density manually in kg/m³.",
      "Check 2t<D and account for fittings, coatings and actual tolerances separately."
    ],
    "example": "A steel 108×4 pipe six metres long weighs 61.6 kg — about 10.3 kg per metre. Assumed density: 7850 kg/m³.",
    "faq": [
      {
        "q": "Why is the wall subtracted twice?",
        "a": "Wall exists on both sides of the diameter. D=108 mm and t=4 mm give d=100 mm. Doubling t does not exactly double area πt(D−t)."
      },
      {
        "q": "Which density should I enter?",
        "a": "Use actual material data in kg/m³. The 7850 value is an example assumption, not a certificate for every steel. There is no material selector or universal table."
      },
      {
        "q": "Is this the exact mass of a delivered batch?",
        "a": "No. Inputs describe ideal geometry and density. Tolerances, coatings, seams and variation can alter mass; suitability for transport or lifting is not established."
      },
      {
        "q": "Are other profiles and connections included?",
        "a": "No. Only round pipe is covered. Square tubes, corner radii, couplings, flanges and additional joint metal are separate quantities."
      }
    ],
    "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
  },
  "uk": {
    "longDescription": "Рахує масу прямої круглої труби зі сталою стінкою, погонну масу й геометричний об’єм внутрішньої порожнини. Потрібні зовнішній діаметр, стінка, довжина та густина матеріалу. Внутрішній діаметр — розрахована геометрія, а не автоматично DN чи розмір фітинга. Міцність, витрата рідини й умови перевезення не перевіряються.",
    "howItWorks": "Внутрішній діаметр d=D−2t. Площа металу S=πt(D−t)/10⁶ у м² за D і t у мм; це те саме кільце π(D²−d²)/4 без віднімання близьких квадратів. Маса=S·L·ρ у кг за L у м і ρ у кг/м³. Об’єм порожнини=πd²L/4000 у л. Усі входи додатні та скінченні; потрібно 2t<D.",
    "howToUse": [
      "Введіть зовнішній геометричний діаметр і стінку в мм, а не номінальний DN.",
      "Укажіть довжину в м і густину вручну у кг/м³.",
      "Перевірте 2t<D; фітинги, покриття й фактичні допуски враховуйте окремо."
    ],
    "example": "Сталева труба 108 × 4 завдовжки 6 м важить 61,6 кг — близько 10,3 кг на погонний метр. Прийнята густина 7850 кг/м³.",
    "faq": [
      {
        "q": "Чому стінка віднімається двічі?",
        "a": "Стінка є з обох боків діаметра. За D=108 мм і t=4 мм отримуємо d=100 мм. Подвоєння t змінює площу πt(D−t) не рівно вдвічі."
      },
      {
        "q": "Яку густину вводити?",
        "a": "Дані фактичного матеріалу у кг/м³. 7850 — припущення прикладу, а не сертифікат будь-якої сталі. Вибору матеріалу чи універсальної таблиці немає."
      },
      {
        "q": "Це точна маса конкретної партії?",
        "a": "Ні. Ввід задає ідеальну геометрію та густину. Допуски, покриття, шви й неоднорідність можуть змінити масу; придатність до перевезення чи піднімання не визначається."
      },
      {
        "q": "Чи враховано інші профілі й з’єднання?",
        "a": "Ні. Тут лише кругла труба. Квадратні труби, радіуси кутів, муфти, фланці й додатковий метал з’єднань рахуються окремо."
      }
    ],
    "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
  },
  "de": {
    "longDescription": "Berechnet die Masse eines geraden Rundrohrs mit konstanter Wanddicke, die Masse je Meter und das geometrische Innenvolumen. Benötigt werden Außendurchmesser, Wanddicke, Länge und Werkstoffdichte. Der errechnete Innendurchmesser ist ein geometrisches Maß, nicht automatisch DN oder ein Fittingmaß. Festigkeit, Durchfluss und Transportbedingungen werden nicht geprüft.",
    "howItWorks": "Innendurchmesser d=D−2t. Metallfläche S=πt(D−t)/10⁶ in m² bei D und t in mm; sie entspricht dem Ring π(D²−d²)/4 ohne Subtraktion fast gleicher Quadrate. Masse=S·L·ρ in kg bei L in m und ρ in kg/m³. Innenvolumen=πd²L/4000 in Litern. Alle Eingaben sind positiv und endlich; es muss 2t<D gelten.",
    "howToUse": [
      "Gib den geometrischen Außendurchmesser und die Wand in mm ein, nicht die Nennweite DN.",
      "Trage Länge in m und Werkstoffdichte manuell in kg/m³ ein.",
      "Prüfe 2t<D und berücksichtige Fittings, Beschichtungen und tatsächliche Toleranzen separat."
    ],
    "example": "Ein Stahlrohr 108×4 von sechs Metern wiegt 61,6 kg — rund 10,3 kg je Meter. Angenommene Dichte: 7850 kg/m³.",
    "faq": [
      {
        "q": "Warum wird die Wand zweimal abgezogen?",
        "a": "Die Wand liegt auf beiden Seiten des Durchmessers. D=108 mm und t=4 mm ergeben d=100 mm. Eine Verdopplung von t verdoppelt πt(D−t) nicht exakt."
      },
      {
        "q": "Welche Dichte soll ich verwenden?",
        "a": "Nutze tatsächliche Werkstoffdaten in kg/m³. 7850 ist eine Beispielannahme, kein Zeugnis für jeden Stahl. Es gibt keine Materialauswahl oder allgemeine Tabelle."
      },
      {
        "q": "Ist das die genaue Masse einer gelieferten Charge?",
        "a": "Nein. Die Eingaben beschreiben ideale Geometrie und Dichte. Toleranzen, Beschichtungen, Nähte und Unterschiede können die Masse ändern; Transport- oder Hebeeignung wird nicht bestätigt."
      },
      {
        "q": "Sind andere Profile und Verbindungen enthalten?",
        "a": "Nein. Erfasst wird nur Rundrohr. Vierkantrohre, Eckradien, Muffen, Flansche und zusätzliches Verbindungsmetall sind eigene Mengen."
      }
    ],
    "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
  },
  "es": {
    "longDescription": "Calcula la masa de un tubo circular recto de pared constante, la masa por metro y el volumen geométrico interior. Introduce diámetro exterior, pared, longitud y densidad del material. El diámetro interior calculado es geométrico, no automáticamente DN ni tamaño de conexión. No comprueba resistencia, caudal ni condiciones de transporte.",
    "howItWorks": "Diámetro interior d=D−2t. Área metálica S=πt(D−t)/10⁶ en m² con D y t en mm; equivale al anillo π(D²−d²)/4 sin restar cuadrados casi iguales. Masa=S·L·ρ en kg con L en m y ρ en kg/m³. Volumen interior=πd²L/4000 en litros. Todos los datos son positivos y finitos; se exige 2t<D.",
    "howToUse": [
      "Introduce el diámetro exterior geométrico y la pared en mm, no el DN nominal.",
      "Indica longitud en m y densidad manualmente en kg/m³.",
      "Comprueba 2t<D y considera aparte accesorios, recubrimientos y tolerancias reales."
    ],
    "example": "Un tubo de acero 108×4 de seis metros pesa 61,6 kg: unos 10,3 kg por metro. Densidad supuesta: 7850 kg/m³.",
    "faq": [
      {
        "q": "¿Por qué se resta dos veces la pared?",
        "a": "La pared aparece a ambos lados del diámetro. D=108 mm y t=4 mm dan d=100 mm. Duplicar t no duplica exactamente el área πt(D−t)."
      },
      {
        "q": "¿Qué densidad debo introducir?",
        "a": "Usa datos reales del material en kg/m³. El 7850 es una hipótesis del ejemplo, no un certificado de todo acero. No hay selector de materiales ni tabla universal."
      },
      {
        "q": "¿Es la masa exacta de un lote?",
        "a": "No. Las entradas describen geometría y densidad ideales. Tolerancias, recubrimientos, soldaduras y variaciones pueden cambiar la masa; no se establece idoneidad para transporte o elevación."
      },
      {
        "q": "¿Se incluyen otros perfiles y conexiones?",
        "a": "No. Solo se cubre tubo circular. Tubos cuadrados, radios de esquina, manguitos, bridas y metal adicional de conexiones se calculan aparte."
      }
    ],
    "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es', Partial<CalculatorCopy>>;
