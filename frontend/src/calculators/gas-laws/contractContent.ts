import type { CalculatorCopy } from '../../lib/platform/types';

type GasContractContent = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

// Authored against the public form contract and primary source bodies read on 2026-10-01.
// Source checking is not a claim of human review.
export const gasLawsContractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', GasContractContent> = {
  "ru": {
    "longDescription": "Сравнивает два состояния одной и той же порции идеального газа и находит давление, объём или температуру второго состояния. Количество вещества должно сохраняться: утечка, подача газа и изменение газовой фазы нарушают эту предпосылку. Здесь давления абсолютные в кПа, объёмы в литрах, температуры в кельвинах. Формула описывает соотношение состояний, а не скорость нагрева или сжатия.",
    "howToUse": [
      "Выберите искомую величину второго состояния: p₂, V₂ или T₂.",
      "Введите положительные абсолютное давление p₁ в кПа, объём V₁ в литрах и температуру T₁ в К.",
      "Заполните два видимых известных параметра второго состояния; искомую величину читайте в результате.",
      "Температуру в °C предварительно переведите вручную: T = t + 273,15. Здесь поля принимают К.",
      "Если измерение дано манометром относительно окружающей среды, сначала получите абсолютное давление, добавив фактическое окружающее давление в тех же единицах."
    ],
    "howItWorks": "Для постоянного n из pV = nRT следует p₁V₁/T₁ = p₂V₂/T₂. Поэтому p₂ = p₁(V₁/V₂)(T₂/T₁), V₂ = V₁(p₁/p₂)(T₂/T₁), T₂ = T₁(p₂/p₁)(V₂/V₁). Все известные p, V и T положительные. Выводимые pV/T двух состояний должны совпадать до округления. Одна и та же единица давления и объёма используется в обоих состояниях; 1 кПа·л = 1 Дж.",
    "example": "100 кПа, 2 л и 300 К → 1 л при 300 К дают p₂ = 200 кПа; pV/T = 2/3 кПа·л/К в обоих состояниях. При постоянных 100 кПа нагрев с 300 до 600 К увеличивает объём с 2 до 4 л.",
    "faq": [
      {
        "q": "Чем объединённый газовый закон отличается от PV = nRT?",
        "a": "Он связывает два состояния с одинаковым количеством вещества, поэтому nR сокращается. Для нового количества газа или одного состояния нужен расчёт с молями."
      },
      {
        "q": "Почему в объединённом законе нельзя делить температуры в °C?",
        "a": "У отношений температур смысл имеет абсолютная шкала. Переход 10 → 20 °C означает 283,15 → 293,15 К, увеличение примерно на 3,53 %, а не вдвое."
      },
      {
        "q": "Какие частные газовые законы получаются при постоянной величине?",
        "a": "При постоянной T: pV = const (Бойль — Мариотт); при постоянном p: V/T = const (Шарль); при постоянном V: p/T = const. Во всех случаях количество газа сохраняется."
      },
      {
        "q": "Можно ли сравнить состояния после утечки газа?",
        "a": "Нет: тогда n меняется и равенство двух pV/T уже не следует из модели. Нужны количества вещества в каждом состоянии и полное уравнение."
      },
      {
        "q": "Можно ли подставить показание манометра как p₁ или p₂?",
        "a": "Только если прибор показывает абсолютное давление. Для избыточного давления p_abs = p_gauge + p_ambient; окружающее давление не обязано быть 100 кПа или одной стандартной атмосферой."
      },
      {
        "q": "Когда объединённый закон даёт лишь приближение?",
        "a": "Реальные газы лучше приближаются к идеальным при относительно низком давлении и вдали от конденсации. Универсального порога давления для всех веществ нет; фазовый переход и изменение количества газа эта форма не моделирует."
      }
    ],
    "disclaimer": "Объединённый закон для фиксированного количества идеального газа и положительных абсолютных p, V, T. Свойства конкретного вещества, фазовые переходы и поправки на неидеальность не рассчитываются; совпадение pV/T проверяет алгебру модели, а не точность описания реального газа."
  },
  "en": {
    "longDescription": "Compares two states of the same amount of ideal gas and finds the second state’s pressure, volume or temperature. The amount must remain fixed: leakage, added gas or a change in the gas phase breaks this assumption. Pressure is absolute in kPa, volume is in litres and temperature is in kelvin. The relation describes states, not the rate of heating or compression.",
    "howToUse": [
      "Choose the unknown second-state quantity: p₂, V₂ or T₂.",
      "Enter positive absolute p₁ in kPa, V₁ in litres and T₁ in K.",
      "Fill in the two visible known second-state quantities; read the unknown in the result.",
      "Convert Celsius manually before entering temperature: T = t + 273.15. These fields accept K.",
      "If a gauge reports pressure relative to the surroundings, first add the actual ambient pressure in the same unit to obtain absolute pressure."
    ],
    "howItWorks": "For fixed n, pV = nRT gives p₁V₁/T₁ = p₂V₂/T₂. Thus p₂ = p₁(V₁/V₂)(T₂/T₁), V₂ = V₁(p₁/p₂)(T₂/T₁), and T₂ = T₁(p₂/p₁)(V₂/V₁). All known p, V and T must be positive. The two displayed pV/T values agree up to rounding. Both states use the same pressure and volume units; 1 kPa·L = 1 J.",
    "example": "100 kPa, 2 L and 300 K compressed to 1 L at 300 K give p₂ = 200 kPa; pV/T is 2/3 kPa·L/K in both states. At constant 100 kPa, heating from 300 to 600 K expands 2 L to 4 L.",
    "faq": [
      {
        "q": "How does the combined gas law differ from PV = nRT?",
        "a": "It connects two states with the same amount of substance, so nR cancels. A single state or a changed amount requires the equation with moles."
      },
      {
        "q": "Why cannot the combined law use ratios of Celsius temperatures?",
        "a": "Only absolute temperature has the required ratio scale. 10 → 20 °C is 283.15 → 293.15 K, an increase of about 3.53%, not a doubling."
      },
      {
        "q": "Which individual laws follow when a quantity stays fixed?",
        "a": "At fixed T, pV is constant (Boyle); at fixed p, V/T is constant (Charles); at fixed V, p/T is constant. The amount of gas must remain fixed in every case."
      },
      {
        "q": "Can I compare states after some gas has leaked?",
        "a": "No. Then n changes and the equality of the two pV/T values no longer follows. Use the amount of substance in each state and the full equation."
      },
      {
        "q": "Can a gauge reading be entered as p₁ or p₂?",
        "a": "Only when it is an absolute-pressure reading. For gauge pressure, p_abs = p_gauge + p_ambient; ambient pressure need not be 100 kPa or one standard atmosphere."
      },
      {
        "q": "When is the combined law only an approximation?",
        "a": "Real gases tend towards ideal behaviour at relatively low pressure and away from condensation. There is no pressure threshold valid for every substance; this form does not model phase changes or changing gas amount."
      }
    ],
    "disclaimer": "Combined law for a fixed amount of ideal gas and positive absolute p, V and T. Substance-specific properties, phase changes and non-ideal corrections are not calculated. Agreement of pV/T checks the model’s algebra, not its accuracy for a real gas."
  },
  "uk": {
    "longDescription": "Порівнює два стани тієї самої порції ідеального газу та знаходить тиск, об’єм або температуру другого стану. Кількість речовини має зберігатися: витік, додавання газу чи зміна газової фази порушують цю умову. Тут тиски абсолютні в кПа, об’єми в літрах, температури в кельвінах. Закон описує співвідношення станів, а не швидкість нагрівання чи стискання.",
    "howToUse": [
      "Виберіть невідому величину другого стану: p₂, V₂ або T₂.",
      "Введіть додатні абсолютний тиск p₁ у кПа, об’єм V₁ у літрах і температуру T₁ у К.",
      "Заповніть два видимі відомі параметри другого стану; шукану величину читайте в результаті.",
      "Температуру в °C заздалегідь переведіть вручну: T = t + 273,15. Поля тут приймають К.",
      "Якщо манометр показує тиск відносно довкілля, спочатку додайте фактичний навколишній тиск у тих самих одиницях, щоб отримати абсолютний."
    ],
    "howItWorks": "За сталого n із pV = nRT випливає p₁V₁/T₁ = p₂V₂/T₂. Звідси p₂ = p₁(V₁/V₂)(T₂/T₁), V₂ = V₁(p₁/p₂)(T₂/T₁), T₂ = T₁(p₂/p₁)(V₂/V₁). Усі відомі p, V і T додатні. Два виведені значення pV/T збігаються до округлення. Одиниці тиску й об’єму однакові для обох станів; 1 кПа·л = 1 Дж.",
    "example": "100 кПа, 2 л і 300 К після стискання до 1 л за 300 К дають p₂ = 200 кПа; pV/T = 2/3 кПа·л/К в обох станах. За сталих 100 кПа нагрівання від 300 до 600 К збільшує об’єм від 2 до 4 л.",
    "faq": [
      {
        "q": "Чим об’єднаний газовий закон відрізняється від PV = nRT?",
        "a": "Він пов’язує два стани з однаковою кількістю речовини, тому nR скорочується. Для одного стану або іншої кількості газу потрібне рівняння з молями."
      },
      {
        "q": "Чому в об’єднаному законі не ділять температури в °C?",
        "a": "Відношення температур має сенс лише на абсолютній шкалі. Перехід 10 → 20 °C означає 283,15 → 293,15 К, приріст близько 3,53 %, а не подвоєння."
      },
      {
        "q": "Які окремі газові закони дає стала величина?",
        "a": "За сталої T: pV = const (Бойль — Маріотт); за сталого p: V/T = const (Шарль); за сталого V: p/T = const. В усіх випадках кількість газу незмінна."
      },
      {
        "q": "Чи можна порівняти стани після витоку газу?",
        "a": "Ні. Тоді n змінюється й рівність двох pV/T уже не випливає з моделі. Потрібні кількості речовини для кожного стану та повне рівняння."
      },
      {
        "q": "Чи можна ввести показ манометра як p₁ або p₂?",
        "a": "Лише якщо це абсолютний тиск. Для надлишкового тиску p_abs = p_gauge + p_ambient; навколишній тиск не обов’язково дорівнює 100 кПа чи одній стандартній атмосфері."
      },
      {
        "q": "Коли об’єднаний закон є лише наближенням?",
        "a": "Реальні гази краще наближаються до ідеальних за відносно низького тиску й далеко від конденсації. Єдиної межі тиску для всіх речовин немає; фазові переходи й зміну кількості газу форма не моделює."
      }
    ],
    "disclaimer": "Об’єднаний закон для незмінної кількості ідеального газу та додатних абсолютних p, V, T. Властивості конкретної речовини, фазові переходи й поправки на неідеальність не обчислюються; збіг pV/T перевіряє алгебру моделі, а не точність опису реального газу."
  },
  "de": {
    "longDescription": "Vergleicht zwei Zustände derselben Menge eines idealen Gases und bestimmt Druck, Volumen oder Temperatur im zweiten Zustand. Die Stoffmenge muss gleich bleiben: Leckage, Gaszufuhr oder eine Änderung der Gasphase verletzt diese Voraussetzung. Drücke sind Absolutdrücke in kPa, Volumina werden in Litern und Temperaturen in Kelvin eingegeben. Die Gleichung beschreibt Zustände, nicht die Geschwindigkeit der Erwärmung oder Verdichtung.",
    "howToUse": [
      "Wähle die gesuchte Größe des zweiten Zustands: p₂, V₂ oder T₂.",
      "Gib positiven Absolutdruck p₁ in kPa, Volumen V₁ in Litern und Temperatur T₁ in K ein.",
      "Fülle die zwei sichtbaren bekannten Größen des zweiten Zustands aus; die gesuchte Größe steht im Ergebnis.",
      "Rechne Celsius vor der Eingabe selbst um: T = t + 273,15. Diese Felder verwenden K.",
      "Bei einem Manometerwert relativ zur Umgebung addiere zuerst den tatsächlichen Umgebungsdruck in derselben Einheit, um Absolutdruck zu erhalten."
    ],
    "howItWorks": "Für konstantes n folgt aus pV = nRT: p₁V₁/T₁ = p₂V₂/T₂. Damit p₂ = p₁(V₁/V₂)(T₂/T₁), V₂ = V₁(p₁/p₂)(T₂/T₁) und T₂ = T₁(p₂/p₁)(V₂/V₁). Alle bekannten p, V und T müssen positiv sein. Die beiden ausgegebenen pV/T-Werte stimmen bis auf Rundung überein. Beide Zustände verwenden dieselben Druck- und Volumeneinheiten; 1 kPa·L = 1 J.",
    "example": "100 kPa, 2 L und 300 K, bei 300 K auf 1 L verdichtet, ergeben p₂ = 200 kPa; beide pV/T-Werte sind 2/3 kPa·L/K. Bei konstanten 100 kPa vergrößert Erwärmung von 300 auf 600 K das Volumen von 2 auf 4 L.",
    "faq": [
      {
        "q": "Worin unterscheiden sich die kombinierte Gasgleichung und pV = nRT?",
        "a": "Die kombinierte Gleichung verbindet zwei Zustände mit gleicher Stoffmenge, sodass nR wegfällt. Für einen einzelnen Zustand oder eine andere Gasmenge wird die Gleichung mit Mol benötigt."
      },
      {
        "q": "Warum darf man in der kombinierten Gleichung keine Celsiuswerte dividieren?",
        "a": "Temperaturverhältnisse brauchen die absolute Skala. 10 → 20 °C bedeutet 283,15 → 293,15 K, also etwa 3,53 % Zunahme statt einer Verdopplung."
      },
      {
        "q": "Welche Einzelgesetze folgen bei einer konstanten Größe?",
        "a": "Bei konstantem T bleibt pV konstant (Boyle-Mariotte), bei konstantem p bleibt V/T konstant, bei konstantem V bleibt p/T konstant. Die Stoffmenge muss in allen drei Fällen gleich bleiben; die Namenskonventionen für die letzten beiden Gesetze unterscheiden sich regional."
      },
      {
        "q": "Kann die Gleichung Zustände nach einer Gasleckage vergleichen?",
        "a": "Nein. Dann ändert sich n und gleiche pV/T-Werte folgen nicht mehr aus der Voraussetzung. Man braucht die Stoffmenge jedes Zustands und die vollständige Gleichung."
      },
      {
        "q": "Darf ein Manometerwert als p₁ oder p₂ eingesetzt werden?",
        "a": "Nur als Absolutdruck. Für Überdruck gilt p_abs = p_gauge + p_ambient; der Umgebungsdruck muss weder 100 kPa noch eine Normatmosphäre betragen."
      },
      {
        "q": "Wann ist die kombinierte Gasgleichung nur eine Näherung?",
        "a": "Reale Gase nähern sich bei relativ niedrigem Druck und fern der Kondensation dem idealen Verhalten. Es gibt keine Druckgrenze für alle Stoffe; Phasenwechsel und Änderungen der Stoffmenge werden nicht berechnet."
      }
    ],
    "disclaimer": "Kombinierte Gleichung für eine feste Stoffmenge idealen Gases mit positiven absoluten p, V und T. Stoffabhängige Eigenschaften, Phasenwechsel und Realgaskorrekturen fehlen. Gleiche pV/T-Werte prüfen die Algebra, nicht die Genauigkeit des Modells für ein reales Gas."
  },
  "es": {
    "longDescription": "Compara dos estados de la misma cantidad de gas ideal y obtiene presión, volumen o temperatura del segundo estado. La cantidad de sustancia debe conservarse: una fuga, la entrada de gas o un cambio de la fase gaseosa rompe esta condición. Las presiones son absolutas en kPa, los volúmenes se introducen en litros y las temperaturas en kelvin. La relación describe estados, no la velocidad de calentamiento o compresión.",
    "howToUse": [
      "Elige la incógnita del segundo estado: p₂, V₂ o T₂.",
      "Introduce presión absoluta p₁ en kPa, volumen V₁ en litros y temperatura T₁ en K, todos positivos.",
      "Rellena los dos parámetros conocidos visibles del segundo estado; consulta la incógnita en el resultado.",
      "Convierte Celsius manualmente antes de introducir la temperatura: T = t + 273,15. Estos campos usan K.",
      "Si un manómetro indica presión relativa al entorno, suma primero la presión ambiental real en la misma unidad para obtener la absoluta."
    ],
    "howItWorks": "Para n constante, pV = nRT implica p₁V₁/T₁ = p₂V₂/T₂. Así, p₂ = p₁(V₁/V₂)(T₂/T₁), V₂ = V₁(p₁/p₂)(T₂/T₁) y T₂ = T₁(p₂/p₁)(V₂/V₁). Todas las p, V y T conocidas deben ser positivas. Los dos valores mostrados de pV/T coinciden salvo redondeo. Ambos estados usan las mismas unidades de presión y volumen; 1 kPa·L = 1 J.",
    "example": "100 kPa, 2 L y 300 K, comprimidos a 1 L a 300 K, dan p₂ = 200 kPa; pV/T vale 2/3 kPa·L/K en ambos estados. A 100 kPa constantes, calentar de 300 a 600 K expande 2 L a 4 L.",
    "faq": [
      {
        "q": "¿Qué distingue la ley combinada de la ecuación PV = nRT?",
        "a": "Relaciona dos estados con la misma cantidad de sustancia, por lo que nR se cancela. Un solo estado o una cantidad de gas diferente requiere la ecuación con moles."
      },
      {
        "q": "¿Por qué la ley combinada no usa cocientes de grados Celsius?",
        "a": "El cociente requiere temperatura absoluta. 10 → 20 °C son 283,15 → 293,15 K: un aumento de aproximadamente 3,53 %, no el doble."
      },
      {
        "q": "¿Qué leyes particulares se obtienen al fijar una magnitud?",
        "a": "Con T constante, pV es constante (Boyle); con p constante, V/T es constante (Charles); con V constante, p/T es constante. La cantidad de gas permanece fija en todos los casos."
      },
      {
        "q": "¿Se pueden comparar estados después de una fuga de gas?",
        "a": "No: entonces cambia n y ya no se deduce la igualdad de los dos pV/T. Se necesitan las cantidades de sustancia de cada estado y la ecuación completa."
      },
      {
        "q": "¿Se puede introducir la lectura de un manómetro como p₁ o p₂?",
        "a": "Solo si muestra presión absoluta. Para presión manométrica, p_abs = p_gauge + p_ambient; la ambiental no tiene por qué ser 100 kPa ni una atmósfera estándar."
      },
      {
        "q": "¿Cuándo la ley combinada es solo aproximada?",
        "a": "Los gases reales se acercan al comportamiento ideal a presión relativamente baja y lejos de la condensación. No hay un umbral de presión válido para toda sustancia; aquí no se calculan cambios de fase ni de cantidad de gas."
      }
    ],
    "disclaimer": "Ley combinada para una cantidad fija de gas ideal y p, V, T absolutas positivas. No calcula propiedades de cada sustancia, cambios de fase ni correcciones de gas real. La coincidencia de pV/T comprueba el álgebra del modelo, no su exactitud para un gas real."
  }
};
