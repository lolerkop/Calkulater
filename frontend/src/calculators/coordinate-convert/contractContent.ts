import type { CalculatorCopy } from '../../lib/platform/types';
type Body=Pick<CalculatorCopy,'longDescription'|'howToUse'|'howItWorks'|'example'|'faq'>;
export const contractContent:Record<'ru' | 'en' | 'uk' | 'de' | 'es',Body> = {
  "ru": {
    "longDescription": "Переводит географическую координату из записи «градусы, минуты, секунды» в десятичные градусы и обратно. Карты и навигаторы показывают координату по-разному: бумажные карты и авиационные данные держат минуты и секунды, а карты в браузере и файлы GPX — десятичные градусы со знаком. Знак в этой паре несёт полушарие: в этой форме компоненты ГМС вводят без минуса, а направление выбирают отдельно, поэтому направление здесь отдельное поле, а не часть числа.",
    "howToUse": [
      "Выберите направление перевода.",
      "Для перевода из ГМС введите градусы, минуты и секунды и укажите полушарие.",
      "Для обратного перевода введите десятичные градусы со знаком: минус означает юг или запад.",
      "Проверьте область: широта не превышает 90°, долгота — 180°."
    ],
    "howItWorks": "Десятичные градусы = градусы + минуты ÷ 60 + секунды ÷ 3600. Обратно: целая часть даёт градусы, дробная умножается на 60 для минут, остаток снова на 60 для секунд. Градусы и минуты — целые; 0 ≤ градусы ≤ 180, 0 ≤ минуты < 60, 0 ≤ секунды < 60. Секунды могут быть дробными. N означает плюс, S — минус. При 180° минуты и секунды должны быть нулевыми. В обратном режиме принимается один угол от −180° до 180°; секунды округляются до четырёх знаков с переносом 60 в следующую минуту. Выбор оси не предусмотрен: широту проверяйте отдельно в пределах ±90°. Это не проверка пары координат или файла GPX. Очень малые ненулевые углы показаны в научной записи с четырьмя значащими цифрами. Если округление уничтожило бы положительные секунды меньше 0,00005″, они сохраняются в научной записи. Ненулевой угол ниже числового диапазона даёт явную ошибку.",
    "example": "55° 45′30″ северной широты — это 55,7583 десятичных градуса.",
    "faq": [
      {
        "q": "Почему полушарие вынесено отдельным полем?",
        "a": "В этой форме знак задаёт отдельный переключатель: север или восток — плюс, юг или запад — минус. В полях ГМС вводите неотрицательные числа, в поле десятичных градусов — число со знаком."
      },
      {
        "q": "Сколько знаков после запятой достаточно?",
        "a": "Четыре десятичных знака — правило показа угла на этой странице. Оно не подтверждает точность исходного измерения или положения на карте. При переносе в другую систему проверьте её формат и допустимые пределы."
      },
      {
        "q": "Почему секунды показаны дробными?",
        "a": "Дробные секунды допустимы: например 59,5″, но 60″ уже требует переноса в минуту. При переводе в ГМС показ округляется до четырёх знаков; это округление записи угла, а не гарантия географической точности."
      },
      {
        "q": "Широта или долгота?",
        "a": "Формула перевода одинакова, но страница считает один угловой компонент до ±180°. Для широты самостоятельно соблюдайте ±90°. Например схема GPX 1.1 задаёт широту от −90° до 90°, а долготу от −180° включительно до 180° исключительно; допустимость экспорта здесь не проверяется."
      }
    ]
  },
  "en": {
    "longDescription": "Converts a geographic coordinate from degrees, minutes and seconds into decimal degrees and back. Maps and devices disagree on the notation: paper charts and aviation data keep minutes and seconds, while browser maps and GPX files use signed decimal degrees. In that pair the sign carries the hemisphere — this form accepts unsigned DMS components and a separate direction — so the direction lives in its own field here rather than inside the number.",
    "howToUse": [
      "Choose the direction of the conversion.",
      "From DMS, enter degrees, minutes and seconds and pick the hemisphere.",
      "The other way, enter signed decimal degrees: a minus means south or west.",
      "Mind the range: latitude stays within 90°, longitude within 180°."
    ],
    "howItWorks": "Decimal degrees = degrees + minutes ÷ 60 + seconds ÷ 3600. Back again: the integer part gives degrees, the fraction times 60 gives minutes, and the remainder times 60 gives seconds. Degrees and minutes must be whole numbers: 0 ≤ degrees ≤ 180, 0 ≤ minutes < 60 and 0 ≤ seconds < 60. Seconds may be fractional. N supplies a positive sign and S a negative sign. At 180°, minutes and seconds must be zero. The reverse mode accepts one angle from −180° to 180°; seconds round to four decimal places with 60 carried into the next minute. There is no axis selector: check latitude separately against ±90°. This does not validate a coordinate pair or GPX file. Very small nonzero angles use scientific notation with four significant digits. Positive seconds below 0.00005″ remain in scientific notation when ordinary rounding would erase them. A nonzero angle below the numerical range produces an explicit error.",
    "example": "55° 45′30″ north is 55.7583 decimal degrees.",
    "faq": [
      {
        "q": "Why is the hemisphere a separate field?",
        "a": "This form uses a separate direction control: north or east is positive, south or west negative. Enter non-negative DMS components and a signed decimal angle."
      },
      {
        "q": "How many decimals are enough?",
        "a": "Four decimal places are this page’s angular display rule. They do not certify measurement accuracy or a location on a map. Check the receiving system’s format and permitted range."
      },
      {
        "q": "Why are seconds shown with a fraction?",
        "a": "Fractional seconds are accepted, including 59.5″;60″ requires a carry into minutes. DMS output rounds to four decimal places. This rounds the angle notation and does not guarantee geographic accuracy."
      },
      {
        "q": "Latitude or longitude?",
        "a": "The conversion formula is the same, but this page handles one angular component up to ±180°. Enforce ±90° for latitude yourself. GPX 1.1 specifies latitude from −90° to 90° and longitude from −180° inclusive to 180° exclusive; this page does not check export validity."
      }
    ]
  },
  "uk": {
    "longDescription": "Географічні координати записують двома способами: десятковими градусами, які розуміють картографічні сервіси, і градусами з мінутами й секундами, які досі стоять на морських картах і в кадастрових документах. Помилка на одну кутову мінуту широти — це майже два кілометри на місцевості.",
    "howToUse": [
      "Виберіть напрямок переведення.",
      "Для градусів з мінутами введіть кожну частину окремо.",
      "Знак або літера півкулі задають північ чи південь, схід чи захід."
    ],
    "howItWorks": "Десяткові градуси рахуються як градуси + хвилини ÷ 60 + секунди ÷ 3600. У зворотному напрямку ціла частина дає градуси, дробова множиться на 60 для хвилин, залишок знову на 60 для секунд. Градуси й хвилини мають бути цілими: 0 ≤ градуси ≤ 180, 0 ≤ хвилини < 60, 0 ≤ секунди < 60. Секунди можуть бути дробовими. N означає плюс, S — мінус. При 180° хвилини й секунди мають бути нульовими. Зворотний режим приймає один кут від −180° до 180°; секунди округлюються до чотирьох знаків із перенесенням 60 у наступну хвилину. Вибору осі немає: широту окремо перевіряйте в межах ±90°. Це не перевірка пари координат чи файлу GPX. Дуже малі ненульові кути показано в науковому записі з чотирма значущими цифрами. Додатні секунди менші за 0,00005″ зберігаються в науковому записі, якщо звичайне округлення знищило б їх. Ненульовий кут нижче числового діапазону дає явну помилку.",
    "example": "55° 45′30″ північної широти — це 55,7583 десяткового градуса.",
    "faq": [
      {
        "q": "Наскільки точна одна кутова секунда?",
        "a": "Одна кутова секунда дорівнює 1/3600 градуса. Це співвідношення кутових одиниць, а не точність вимірювання чи GPS. Відстань на місцевості залежить від напрямку й широти, а сама кількість знаків не підтверджує точності початкових даних. Форма приймає дробові секунди та округлює їх показ, не підтверджуючи географічної точності."
      },
      {
        "q": "Що означає знак координати?",
        "a": "У цій формі знак задає окремий перемикач: північ або схід — плюс, південь або захід — мінус. Компоненти ГХС вводьте невід’ємними, десятковий кут — зі знаком."
      },
      {
        "q": "Чому картографічні сервіси беруть десяткові градуси?",
        "a": "Десятковий запис задає один кут одним числом зі знаком, тому його зручно передавати числовим полям картографічних сервісів. Формула не змінює розташування. Окремо перевіряйте межі: широта±90°, а GPX1.1 вимагає довготу від−180° включно до180° невключно; допустимість файлу тут не перевіряється."
      },
      {
        "q": "Скільки знаків після коми потрібно?",
        "a": "Чотири десяткові знаки — правило показу кута на цій сторінці. Воно не підтверджує точність вимірювання чи положення на карті. Перевірте формат і допустимі межі системи, куди переносите результат."
      }
    ]
  },
  "de": {
    "longDescription": "Rechnet eine geografische Koordinate aus Grad, Minuten und Sekunden in Dezimalgrad um und zurück. Karten und Geräte sind sich über die Schreibweise nicht einig: Papierkarten und Luftfahrtdaten behalten Minuten und Sekunden, während Kartendienste im Browser und GPX-Dateien vorzeichenbehaftete Dezimalgrad verwenden. In diesem Paar trägt das Vorzeichen die Himmelsrichtung — dieses Formular nimmt GMS-Komponenten ohne Minus und eine getrennte Richtung an —, deshalb steht die Richtung hier in einem eigenen Feld und nicht in der Zahl.",
    "howToUse": [
      "Wähle die Richtung der Umrechnung.",
      "Aus GMS trägst du Grad, Minuten und Sekunden ein und wählst die Halbkugel.",
      "Andersherum trägst du vorzeichenbehaftete Dezimalgrad ein: ein Minus bedeutet Süd oder West.",
      "Achte auf den Bereich: die Breite bleibt innerhalb von 90°, die Länge innerhalb von 180°."
    ],
    "howItWorks": "Dezimalgrad = Grad + Minuten ÷ 60 + Sekunden ÷ 3600. Zurück: der ganzzahlige Teil ergibt die Grad, der Bruchteil mal 60 die Minuten, und der Rest mal 60 die Sekunden. Grad und Minuten müssen ganzzahlig sein: 0 ≤ Grad ≤ 180, 0 ≤ Minuten < 60 und 0 ≤ Sekunden < 60. Sekunden dürfen Bruchteile haben. N setzt ein positives, S ein negatives Vorzeichen. Bei 180° müssen Minuten und Sekunden null sein. Rückwärts wird ein einzelner Winkel von −180° bis 180° angenommen; Sekunden werden auf vier Nachkommastellen gerundet,60 wird zur nächsten Minute übertragen. Es gibt keine Achsenauswahl: geografische Breite separat auf ±90° prüfen. Dies validiert weder ein Koordinatenpaar noch eine GPX-Datei. Sehr kleine Winkel ungleich null erscheinen wissenschaftlich mit vier signifikanten Ziffern. Positive Sekunden unter0,00005″ bleiben wissenschaftlich dargestellt, wenn normales Runden sie auslöschen würde. Ein Winkel ungleich null unterhalb des Zahlenbereichs ergibt eine ausdrückliche Fehlermeldung.",
    "example": "55° 45′30″ nördlicher Breite sind 55,7583 Dezimalgrad.",
    "faq": [
      {
        "q": "Warum ist die Halbkugel ein eigenes Feld?",
        "a": "Dieses Formular bestimmt das Vorzeichen über die Richtung: Nord oder Ost positiv, Süd oder West negativ. Die GMS-Komponenten sind nicht negativ, der Dezimalwinkel hat ein Vorzeichen."
      },
      {
        "q": "Wie viele Nachkommastellen reichen?",
        "a": "Vier Nachkommastellen sind die Anzeigeregel dieser Seite. Sie bestätigen weder die Messgenauigkeit noch eine Position auf einer Karte. Format und zulässigen Bereich des Zielsystems separat prüfen."
      },
      {
        "q": "Warum werden Sekunden mit Bruchteil angezeigt?",
        "a": "Bruchteile wie 59,5″ sind zulässig;60″ erfordert einen Übertrag in die Minuten. Die GMS-Ausgabe rundet auf vier Nachkommastellen. Das rundet die Winkelschreibweise und garantiert keine geografische Genauigkeit."
      },
      {
        "q": "Breite oder Länge?",
        "a": "Die Formel ist gleich, doch diese Seite behandelt eine einzelne Winkelkomponente bis ±180°. Für geografische Breite selbst ±90° einhalten. GPX 1.1 legt Breite von −90° bis 90° und Länge von −180° einschließlich bis 180° ausschließlich fest; die Exportgültigkeit wird hier nicht geprüft."
      }
    ]
  },
  "es": {
    "longDescription": "Convierte una coordenada geográfica de grados, minutos y segundos a grados decimales y al revés. Los mapas y los aparatos no se ponen de acuerdo en la notación: las cartas en papel y los datos de aviación mantienen minutos y segundos, mientras que los mapas del navegador y los archivos GPX usan grados decimales con signo. En esa pareja el signo lleva el hemisferio —este formulario usa componentes GMS sin signo y una dirección aparte—, así que aquí la dirección vive en su propio campo y no dentro del número.",
    "howToUse": [
      "Elige el sentido de la conversión.",
      "Desde GMS, introduce grados, minutos y segundos y elige el hemisferio.",
      "En el otro sentido, introduce grados decimales con signo: un menos significa sur u oeste.",
      "Ten en cuenta el intervalo: la latitud se queda dentro de 90° y la longitud, dentro de 180°."
    ],
    "howItWorks": "Grados decimales = grados + minutos ÷ 60 + segundos ÷ 3600. A la inversa: la parte entera da los grados, la fracción por 60 da los minutos y el resto por 60 da los segundos. Los grados y minutos deben ser enteros: 0 ≤ grados ≤ 180, 0 ≤ minutos < 60 y 0 ≤ segundos < 60. Se admiten segundos fraccionarios. N indica signo positivo y S negativo. A 180°, minutos y segundos deben ser cero. El modo inverso admite un ángulo de −180° a 180°; redondea los segundos a cuatro decimales y acarrea 60 al minuto siguiente. No hay selector de eje: comprueba la latitud por separado dentro de ±90°. No valida un par de coordenadas ni un archivo GPX. Los ángulos no nulos muy pequeños usan notación científica con cuatro cifras significativas. Los segundos positivos inferiores a0,00005″ se conservan en notación científica cuando el redondeo normal los borraría. Un ángulo no nulo inferior al rango numérico produce un error explícito.",
    "example": "55° 45′30″ norte son 55,7583 grados decimales.",
    "faq": [
      {
        "q": "¿Por qué el hemisferio es un campo aparte?",
        "a": "Este formulario fija el signo con el control de dirección: norte o este es positivo, sur u oeste negativo. Introduce componentes GMS no negativos y un ángulo decimal con signo."
      },
      {
        "q": "¿Cuántos decimales bastan?",
        "a": "Cuatro decimales son la regla de presentación del ángulo en esta página. No certifican la precisión de una medición ni de un punto del mapa. Comprueba el formato y los límites del sistema de destino."
      },
      {
        "q": "¿Por qué los segundos aparecen con decimales?",
        "a": "Se admiten segundos fraccionarios, como 59,5″;60″ requiere un acarreo a minutos. La salida GMS se redondea a cuatro decimales. Es un redondeo de la notación angular, sin garantía de precisión geográfica."
      },
      {
        "q": "¿Latitud o longitud?",
        "a": "La fórmula es la misma, pero esta página calcula un componente angular hasta ±180°. Aplica por separado ±90° a la latitud. GPX 1.1 admite latitud de −90° a 90° y longitud desde −180° inclusive hasta 180° exclusive; esta página no comprueba la validez de una exportación."
      }
    ]
  }
};
