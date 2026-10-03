import type { CalculatorCopy } from '../../lib/platform/types';

type GasContractContent = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

// Authored against the public form contract and primary source bodies read on 2026-10-01.
// Source checking is not a claim of human review.
export const idealGasLawContractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', GasContractContent> = {
  "ru": {
    "longDescription": "Находит абсолютное давление или объём идеального газа по количеству вещества и температуре. Выбранные Па, кПа или атм и м³ или литры переводятся в согласованные единицы; °C автоматически переводятся в К. При 1 кПа·л = 1 Па·м³ = 1 Дж численное R подходит и для пары кПа–литры: ошибка возникает при смешении несовместимых единиц, а не из-за этой пары. Положительная температура описывает газовую модель; 0 К здесь допускается только как формальный алгебраический предел.",
    "howToUse": [
      "Выберите давление или объём — это два режима формы.",
      "Введите положительное количество вещества в молях и температуру; выберите К или °C.",
      "Для давления задайте положительный объём и выберите м³ или литры; для объёма задайте положительное абсолютное давление в Па, кПа или атм.",
      "Температура в °C переводится автоматически: 0 °C = 273,15 К; ниже −273,15 °C ввод отклоняется.",
      "Учитывайте шкалу давления: избыточное показание манометра сначала переведите в абсолютное через фактическое окружающее давление."
    ],
    "howItWorks": "PV = nRT: P = nRT/V или V = nRT/P. В расчёте R = 8,314462618 Дж/(моль·К) — округлённое приближение точного R = N_Ak = 8,31446261815324 Дж/(моль·К). 1 л = 0,001 м³, 1 кПа = 1000 Па, поэтому 1 кПа·л = 1 Дж и численное R совпадает в кПа·л/(моль·К). Для атм·л требуется другое численное R; форма делает перевод сама. При заданных положительных n и V формально T = 0 даёт P = 0, а при положительных n и P — V = 0; это не физические газовые состояния.",
    "example": "2 моль, 300 К и 0,05 м³ (50 л) дают P = 99 773,551416 Па → 99 773,55 Па. Для 1 моль при 273,15 К объём равен 22,414 л при 1 атм = 101,325 кПа, но 22,711 л при 100 кПа: давление условий нужно указывать явно.",
    "faq": [
      {
        "q": "Почему кПа и литры совместимы с R = 8,314462618?",
        "a": "Потому что 1000 Па × 0,001 м³ = 1 Дж. Для Па·м³ и кПа·л численное R одинаково. Сочетание Па с литрами без перевода уже отличается множителем 1000; выбранные единицы форма переводит автоматически."
      },
      {
        "q": "Нужно ли самому переводить °C в К в этой форме?",
        "a": "Нет: выберите °C и введите температуру в этой шкале. Форма прибавит 273,15. Например, 0 °C означает 273,15 К, а не нулевое давление."
      },
      {
        "q": "Что означает результат PV = nRT при 0 К?",
        "a": "Только формальный предел уравнения: при фиксированном положительном объёме P = 0, при фиксированном положительном давлении V = 0. Реальный газ обычно конденсируется раньше; результат не описывает существующий идеальный газ при абсолютном нуле."
      },
      {
        "q": "Можно ли использовать избыточное давление в PV = nRT?",
        "a": "Нужен абсолютный отсчёт. p_abs = p_gauge + p_ambient, причём окружающее давление берётся по условиям измерения. Единица атм — стандартная атмосфера, а не автоматическое измерение местного воздуха."
      },
      {
        "q": "Почему объём одного моля не всегда 22,414 л?",
        "a": "Он зависит от температуры и абсолютного давления. При 273,15 К и 101,325 кПа получается 22,414 л, а при 100 кПа — 22,711 л. Одного названия «стандартные условия» недостаточно."
      },
      {
        "q": "Одинаков ли результат идеального закона для разных газов?",
        "a": "Для одинаковых n, T и P в идеальном приближении объём одинаков. Но степень отклонения реальных газов зависит от вещества и условий; при высоком давлении или возле конденсации нужны другие данные и модель."
      },
      {
        "q": "Газовая постоянная здесь точная или округлённая?",
        "a": "Само R = N_Ak точно, потому что обе определяющие константы точные. Калькулятор использует 8,314462618, округлённую запись полного 8,31446261815324; показанные десятичные знаки результата не гарантируют такую же точность измерений."
      }
    ],
    "disclaimer": "Идеальная газовая модель, обычно лучше приближающая реальные газы при относительно низком давлении и вдали от конденсации. Вводится абсолютное давление; 0 К — только формальный алгебраический предел, не реальное газовое состояние. Свойства вещества и неидеальность не моделируются."
  },
  "en": {
    "longDescription": "Finds absolute pressure or volume of an ideal gas from amount of substance and temperature. Selected Pa, kPa or atm and m³ or litres are converted into compatible units; Celsius is converted to K automatically. Since 1 kPa·L = 1 Pa·m³ = 1 J, the same numerical R works for kPa with litres: the error comes from incompatible unit combinations, not from this pair. Positive temperature describes the gas model; 0 K is accepted only as a formal algebraic limit.",
    "howToUse": [
      "Choose pressure or volume, the two modes offered by this form.",
      "Enter a positive amount of substance in moles and a temperature; choose K or °C.",
      "For pressure, enter positive volume in m³ or litres; for volume, enter positive absolute pressure in Pa, kPa or atm.",
      "Celsius is converted automatically: 0 °C = 273.15 K; a value below −273.15 °C is rejected.",
      "Check the pressure reference: convert a gauge reading to absolute pressure using the actual ambient pressure first."
    ],
    "howItWorks": "PV = nRT, so P = nRT/V or V = nRT/P. The calculation uses R = 8.314462618 J/(mol·K), a rounded approximation of exact R = N_Ak = 8.31446261815324 J/(mol·K). 1 L = 0.001 m³ and 1 kPa = 1000 Pa, so 1 kPa·L = 1 J and the numerical R is the same in kPa·L/(mol·K). atm·L needs a different numerical R; the form performs that conversion. With positive n and V, T = 0 formally gives P = 0; with positive n and P, it gives V = 0. Neither is a physical gas state.",
    "example": "2 mol, 300 K and 0.05 m³ (50 L) give P = 99,773.551416 Pa → 99,773.55 Pa. For 1 mol at 273.15 K, volume is 22.414 L at 1 atm = 101.325 kPa, but 22.711 L at 100 kPa: state the pressure explicitly.",
    "faq": [
      {
        "q": "Why are kPa and litres compatible with R = 8.314462618?",
        "a": "1000 Pa × 0.001 m³ = 1 J, so Pa·m³ and kPa·L have the same numerical R. Pa with litres without conversion differs by a factor of 1000; the form converts the selected units automatically."
      },
      {
        "q": "Must I convert Celsius to kelvin myself in this form?",
        "a": "No. Select °C and enter that reading; the form adds 273.15. For example, 0 °C means 273.15 K, not zero pressure."
      },
      {
        "q": "What does the PV = nRT result at 0 K mean?",
        "a": "Only the formal limit of the equation: at fixed positive volume, P = 0; at fixed positive pressure, V = 0. A real gas usually condenses before this point. The result does not describe an existing ideal gas at absolute zero."
      },
      {
        "q": "Can gauge pressure be used in PV = nRT?",
        "a": "Pressure must be absolute. p_abs = p_gauge + p_ambient, using the ambient pressure for the actual measurement. The atm unit means a standard atmosphere, not a measurement of the local air."
      },
      {
        "q": "Why is one mole not always 22.414 L?",
        "a": "Volume depends on temperature and absolute pressure. At 273.15 K and 101.325 kPa it is 22.414 L; at 100 kPa it is 22.711 L. A label such as “standard conditions” is insufficient by itself."
      },
      {
        "q": "Does the ideal law give the same result for different gases?",
        "a": "For the same n, T and P, the ideal approximation gives the same volume. Real-gas deviations depend on the substance and conditions; high pressure or proximity to condensation requires other data and a different model."
      },
      {
        "q": "Is the gas constant used here exact or rounded?",
        "a": "R = N_Ak itself is exact because both defining constants are exact. The calculator uses the rounded 8.314462618 rather than the full 8.31446261815324. Displayed decimal places do not promise the same accuracy in measured inputs."
      }
    ],
    "disclaimer": "Ideal-gas model, generally a better approximation for real gases at relatively low pressure and away from condensation. Pressure is absolute. 0 K is a formal algebraic limit only, not a real gas state. Substance properties and non-ideal behaviour are not modelled."
  },
  "uk": {
    "longDescription": "Знаходить абсолютний тиск або об’єм ідеального газу за кількістю речовини й температурою. Вибрані Па, кПа чи атм та м³ чи літри переводяться в узгоджені одиниці; °C автоматично переводяться в К. Оскільки 1 кПа·л = 1 Па·м³ = 1 Дж, числове R придатне й для пари кПа–літри: помилка виникає через неузгоджені одиниці, а не через цю пару. За додатної температури застосовується газова модель; 0 К тут лише формальна алгебраїчна границя.",
    "howToUse": [
      "Виберіть тиск або об’єм — два режими цієї форми.",
      "Введіть додатну кількість речовини в молях і температуру; виберіть К чи °C.",
      "Для тиску задайте додатний об’єм у м³ чи літрах; для об’єму — додатний абсолютний тиск у Па, кПа чи атм.",
      "°C переводяться автоматично: 0 °C = 273,15 К; значення нижче −273,15 °C відхиляється.",
      "Перевірте відлік тиску: надлишковий показ манометра спочатку переведіть в абсолютний через фактичний навколишній тиск."
    ],
    "howItWorks": "PV = nRT, звідси P = nRT/V або V = nRT/P. У розрахунку R = 8,314462618 Дж/(моль·К) — округлене наближення точного R = N_Ak = 8,31446261815324 Дж/(моль·К). 1 л = 0,001 м³ і 1 кПа = 1000 Па, тому 1 кПа·л = 1 Дж, а числове R збігається в кПа·л/(моль·К). Для атм·л потрібне інше числове R; форма сама виконує перерахунок. За додатних n і V формально T = 0 дає P = 0, за додатних n і P — V = 0. Це не фізичні газові стани.",
    "example": "2 моль, 300 К та 0,05 м³ (50 л) дають P = 99 773,551416 Па → 99 773,55 Па. Для 1 моль за 273,15 К об’єм дорівнює 22,414 л за 1 атм = 101,325 кПа, але 22,711 л за 100 кПа: тиск умов потрібно зазначати явно.",
    "faq": [
      {
        "q": "Чому кПа та літри узгоджені з R = 8,314462618?",
        "a": "1000 Па × 0,001 м³ = 1 Дж, тому для Па·м³ й кПа·л числове R однакове. Па з літрами без переведення вже відрізняються множником 1000; вибрані одиниці форма переводить автоматично."
      },
      {
        "q": "Чи треба самому переводити °C у К у цій формі?",
        "a": "Ні: виберіть °C і введіть показ у цій шкалі. Форма додасть 273,15. Наприклад, 0 °C означає 273,15 К, а не нульовий тиск."
      },
      {
        "q": "Що означає результат PV = nRT за 0 К?",
        "a": "Лише формальну границю рівняння: за фіксованого додатного об’єму P = 0, за фіксованого додатного тиску V = 0. Реальний газ зазвичай конденсується раніше. Це не опис існування ідеального газу при абсолютному нулі."
      },
      {
        "q": "Чи можна в PV = nRT використати надлишковий тиск?",
        "a": "Потрібен абсолютний відлік: p_abs = p_gauge + p_ambient. Навколишній тиск беруть за умовами вимірювання. Одиниця атм — стандартна атмосфера, а не вимір місцевого повітря."
      },
      {
        "q": "Чому один моль не завжди займає 22,414 л?",
        "a": "Об’єм залежить від температури та абсолютного тиску. За 273,15 К і 101,325 кПа це 22,414 л, за 100 кПа — 22,711 л. Самої назви «стандартні умови» недостатньо."
      },
      {
        "q": "Чи однаковий результат ідеального закону для різних газів?",
        "a": "За однакових n, T і P ідеальне наближення дає однаковий об’єм. Відхилення реальних газів залежать від речовини та умов; високий тиск і близькість конденсації потребують інших даних і моделі."
      },
      {
        "q": "Газова стала тут точна чи округлена?",
        "a": "Саме R = N_Ak точне, бо обидві визначальні сталі точні. Калькулятор використовує округлене 8,314462618 замість повного 8,31446261815324. Кількість десяткових знаків не гарантує відповідної точності вимірювань."
      }
    ],
    "disclaimer": "Ідеальна газова модель, зазвичай ближча до реальних газів за відносно низького тиску й далеко від конденсації. Тиск абсолютний; 0 К — лише формальна алгебраїчна границя, а не реальний газовий стан. Властивості речовини й неідеальність не моделюються."
  },
  "de": {
    "longDescription": "Bestimmt Absolutdruck oder Volumen eines idealen Gases aus Stoffmenge und Temperatur. Gewählte Pa, kPa oder atm sowie m³ oder Liter werden in zusammenpassende Einheiten umgerechnet; Celsius wird automatisch in K umgerechnet. Weil 1 kPa·L = 1 Pa·m³ = 1 J gilt, passt derselbe Zahlenwert von R auch für kPa und Liter. Fehler entstehen durch unpassende Einheiten, nicht durch diese Kombination. Positive Temperatur beschreibt das Gasmodell; 0 K ist hier nur eine formale algebraische Grenze.",
    "howToUse": [
      "Wähle Druck oder Volumen, die zwei angebotenen Modi.",
      "Gib eine positive Stoffmenge in Mol und eine Temperatur ein; wähle K oder °C.",
      "Für Druck gib positives Volumen in m³ oder Litern ein; für Volumen positiven Absolutdruck in Pa, kPa oder atm.",
      "Celsius wird automatisch umgerechnet: 0 °C = 273,15 K; unter −273,15 °C wird die Eingabe abgewiesen.",
      "Prüfe den Druckbezug: einen Manometer-Überdruck zuerst mit dem tatsächlichen Umgebungsdruck in Absolutdruck umrechnen."
    ],
    "howItWorks": "pV = nRT, also p = nRT/V oder V = nRT/p. Verwendet wird R = 8,314462618 J/(mol·K), eine gerundete Näherung des exakten R = N_Ak = 8,31446261815324 J/(mol·K). Mit 1 L = 0,001 m³ und 1 kPa = 1000 Pa gilt 1 kPa·L = 1 J; R hat in kPa·L/(mol·K) denselben Zahlenwert. atm·L erfordert einen anderen Zahlenwert, den die Einheitenumrechnung berücksichtigt. Bei positiven n und V ergibt T = 0 formal p = 0; bei positiven n und p ergibt es V = 0. Beides sind keine physikalischen Gaszustände.",
    "example": "2 mol, 300 K und 0,05 m³ (50 L) ergeben p = 99 773,551416 Pa → 99 773,55 Pa. Für 1 mol bei 273,15 K beträgt das Volumen bei 1 atm = 101,325 kPa 22,414 L, bei 100 kPa dagegen 22,711 L: der Druck muss ausdrücklich angegeben werden.",
    "faq": [
      {
        "q": "Warum passen kPa und Liter zu R = 8,314462618?",
        "a": "1000 Pa × 0,001 m³ = 1 J. Daher haben Pa·m³ und kPa·L denselben Zahlenwert für R. Pa mit Litern ohne Umrechnung unterscheidet sich um den Faktor 1000; die gewählten Einheiten rechnet das Formular automatisch um."
      },
      {
        "q": "Muss ich Celsius in diesem Formular selbst in Kelvin umrechnen?",
        "a": "Nein. Wähle °C und gib den Celsiuswert ein; das Formular addiert 273,15. 0 °C bedeutet 273,15 K, nicht Druck null."
      },
      {
        "q": "Was bedeutet das Ergebnis von pV = nRT bei 0 K?",
        "a": "Nur die formale Grenze der Gleichung: bei festem positivem Volumen p = 0, bei festem positivem Druck V = 0. Ein reales Gas kondensiert gewöhnlich vorher. Das Ergebnis beschreibt kein bestehendes ideales Gas am absoluten Nullpunkt."
      },
      {
        "q": "Kann Überdruck in pV = nRT eingesetzt werden?",
        "a": "Benötigt wird Absolutdruck: p_abs = p_gauge + p_ambient. Der Umgebungsdruck gehört zu den tatsächlichen Messbedingungen. Die Einheit atm ist eine Normatmosphäre, kein Messwert der örtlichen Luft."
      },
      {
        "q": "Warum beträgt das Volumen eines Mols nicht immer 22,414 L?",
        "a": "Es hängt von Temperatur und Absolutdruck ab. Bei 273,15 K und 101,325 kPa sind es 22,414 L, bei 100 kPa dagegen 22,711 L. Die Bezeichnung „Standardbedingungen“ allein reicht nicht aus."
      },
      {
        "q": "Liefert das ideale Gesetz für verschiedene Gase denselben Wert?",
        "a": "Bei gleichen n, T und p ist das ideale Volumen gleich. Abweichungen realer Gase hängen aber von Stoff und Bedingungen ab; hoher Druck oder Kondensationsnähe erfordern andere Daten und ein anderes Modell."
      },
      {
        "q": "Ist die hier verwendete Gaskonstante exakt oder gerundet?",
        "a": "R = N_Ak selbst ist exakt, weil beide definierenden Konstanten exakt sind. Der Rechner nutzt das gerundete 8,314462618 statt des vollständigen 8,31446261815324. Angezeigte Nachkommastellen garantieren keine entsprechende Messgenauigkeit."
      }
    ],
    "disclaimer": "Ideales Gasmodell, gewöhnlich eine bessere Näherung bei relativ niedrigem Druck und fern der Kondensation. Druck ist absolut; 0 K ist ausschließlich eine formale algebraische Grenze, kein realer Gaszustand. Stoffeigenschaften und Nichtidealität werden nicht modelliert."
  },
  "es": {
    "longDescription": "Obtiene presión absoluta o volumen de un gas ideal a partir de cantidad de sustancia y temperatura. Las unidades elegidas Pa, kPa o atm y m³ o litros se convierten a unidades compatibles; Celsius pasa a K automáticamente. Como 1 kPa·L = 1 Pa·m³ = 1 J, el mismo valor numérico de R sirve para kPa con litros. El error procede de unidades incompatibles, no de esta pareja. La temperatura positiva describe el modelo gaseoso; 0 K se admite solo como límite algebraico formal.",
    "howToUse": [
      "Elige presión o volumen, los dos modos de la forma.",
      "Introduce una cantidad de sustancia positiva en moles y una temperatura; elige K o °C.",
      "Para presión introduce volumen positivo en m³ o litros; para volumen introduce presión absoluta positiva en Pa, kPa o atm.",
      "Celsius se convierte automáticamente: 0 °C = 273,15 K; se rechaza un valor inferior a −273,15 °C.",
      "Comprueba la referencia de presión: convierte primero la lectura manométrica a absoluta con la presión ambiental real."
    ],
    "howItWorks": "PV = nRT, así que P = nRT/V o V = nRT/P. Se usa R = 8,314462618 J/(mol·K), una aproximación redondeada del R exacto = N_Ak = 8,31446261815324 J/(mol·K). 1 L = 0,001 m³ y 1 kPa = 1000 Pa: 1 kPa·L = 1 J y R tiene el mismo valor numérico en kPa·L/(mol·K). atm·L requiere otro valor numérico, que cubre la conversión de la forma. Con n y V positivos, T = 0 da formalmente P = 0; con n y P positivos da V = 0. No son estados gaseosos físicos.",
    "example": "2 mol, 300 K y 0,05 m³ (50 L) dan P = 99 773,551416 Pa → 99 773,55 Pa. Para 1 mol a 273,15 K, el volumen es 22,414 L a 1 atm = 101,325 kPa, pero 22,711 L a 100 kPa: la presión de las condiciones debe indicarse.",
    "faq": [
      {
        "q": "¿Por qué kPa y litros son compatibles con R = 8,314462618?",
        "a": "1000 Pa × 0,001 m³ = 1 J. Por eso Pa·m³ y kPa·L tienen el mismo R numérico. Pa con litros sin convertir difiere en un factor de 1000; la forma convierte las unidades seleccionadas automáticamente."
      },
      {
        "q": "¿Tengo que convertir Celsius a kelvin por mi cuenta aquí?",
        "a": "No. Elige °C e introduce esa lectura; la forma suma 273,15. 0 °C significa 273,15 K, no presión nula."
      },
      {
        "q": "¿Qué significa el resultado de PV = nRT a 0 K?",
        "a": "Solo el límite formal de la ecuación: con volumen positivo fijo P = 0, con presión positiva fija V = 0. Un gas real suele condensarse antes. El resultado no describe un gas ideal existente en el cero absoluto."
      },
      {
        "q": "¿Se puede usar presión manométrica en PV = nRT?",
        "a": "Se necesita presión absoluta: p_abs = p_gauge + p_ambient, con la ambiental de las condiciones reales de medida. La unidad atm es una atmósfera estándar, no una lectura del aire local."
      },
      {
        "q": "¿Por qué un mol no ocupa siempre 22,414 L?",
        "a": "El volumen depende de temperatura y presión absoluta. A 273,15 K y 101,325 kPa son 22,414 L; a 100 kPa son 22,711 L. El nombre «condiciones estándar» no basta por sí solo."
      },
      {
        "q": "¿El resultado ideal es igual para distintos gases?",
        "a": "Con los mismos n, T y P el volumen ideal es el mismo. Las desviaciones reales dependen de sustancia y condiciones; alta presión o cercanía a condensación requiere otros datos y modelo."
      },
      {
        "q": "¿La constante de los gases usada aquí es exacta o redondeada?",
        "a": "R = N_Ak es exacta porque las dos constantes definitorias son exactas. La calculadora usa el 8,314462618 redondeado en lugar del 8,31446261815324 completo. Los decimales mostrados no prometen la misma exactitud en las medidas."
      }
    ],
    "disclaimer": "Modelo de gas ideal, normalmente más cercano al gas real a presión relativamente baja y lejos de la condensación. La presión es absoluta; 0 K es solo un límite algebraico formal, no un estado gaseoso real. No modela propiedades de cada sustancia ni comportamiento no ideal."
  }
};
