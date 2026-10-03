// Authored contract with individually retained effective legacy passages.
// AI review; human language and subject review remain pending.
export const contractContent = {
  "ru": {
    "shortDescription": "Перевод px, rem, em, pt и остальных единиц вёрстки.",
    "seoDescription": "Переведите px, rem, em, pt, pc, in, cm и mm по корневой базе rem и выбранной базе em. Для font-size база em — унаследованный размер.",
    "longDescription": "Сопоставляет CSS-длины через CSS-пиксель при явно заданных базах rem и em. Фиксированные соотношения: 1in=96px, 1pt=96/72px, 1pc=16px. rem использует вычисленный размер шрифта корня. Для обычных свойств em использует вычисленный шрифт самого элемента, а в свойстве font-size — унаследованный размер. Поле «База em» позволяет задать нужный контекст без предположения о вложенности.",
    "howToUse": [
      "Выберите исходную и целевую единицы и введите длину.",
      "Задайте вычисленный корневой шрифт и базу em в CSS-пикселях.",
      "Читайте целевую единицу в подписи результата; справочные строки используют те же базы."
    ],
    "howItWorks": "Для каждой единицы задаётся коэффициент f в CSS-пикселях. Итог = значение·fисх/fцел. Для rem коэффициент равен корневому размеру, для em — выбранной базе em; 1cm=96/2,54px и 1mm=96/25,4px. Обе базы должны быть положительными: они нужны также для справочных строк. Ноль и отрицательное значение длины допускаются арифметикой, но конкретное CSS-свойство может их запрещать.",
    "example": "При корневом размере 16 px значение 24 px — это 1,5 rem и 18 pt.",
    "faq": [
      {
        "q": "Чем отличаются базы rem и em?",
        "a": "rem использует вычисленный шрифт корня. Для margin или width единица em относится к шрифту самого элемента; при задании font-size — к унаследованному размеру. Введите именно ту базу, которая действует в нужном свойстве."
      },
      {
        "q": "CSS-сантиметр совпадает с физическим?",
        "a": "Соотношение cm и px фиксировано: 1cm=96/2,54px. Физический размер зависит от того, как устройство привязывает абсолютные единицы; на экране он не гарантирован линейкой."
      },
      {
        "q": "px отключает масштабирование браузера?",
        "a": "Нет. Масштабирование страницы работает и с px. rem может следовать пользовательскому корневому шрифту; доступность нужно проверять на реальном макете, а не выводить из одной единицы."
      },
      {
        "q": "Всегда ли 62,5% означает корень 10px?",
        "a": "Только если исходная величина равна 16px: 0,625·16=10. При пользовательском исходном шрифте 20px получится 12,5px. Здесь вводится фактически вычисленный размер."
      }
    ],
    "disclaimer": "Перевод CSS-длин с заданным контекстом; не измеряет физическую плотность экрана и не проверяет допустимость длины для конкретного свойства."
  },
  "en": {
    "shortDescription": "Convert px, rem, em, pt and the other CSS length units.",
    "seoDescription": "Convert px, rem, em, pt, pc, in, cm and mm using the root rem base and selected em base. For font-size, em uses the inherited size.",
    "longDescription": "Compare CSS lengths through the CSS pixel using explicit rem and em bases. Fixed ratios are 1in=96px, 1pt=96/72px and 1pc=16px. rem uses the computed root font size. For ordinary properties, em uses the element’s own computed font size; in font-size it uses the inherited size. The em-base field lets you supply the relevant context without assuming nesting.",
    "howToUse": [
      "Choose source and target units and enter the length.",
      "Enter the computed root font size and the applicable em base in CSS pixels.",
      "Read the target unit in the result label; comparison rows use the same bases."
    ],
    "howItWorks": "Each unit has a factor f in CSS pixels. Result = value·fsource/ftarget. rem uses the root size and em the supplied em base; 1cm=96/2.54px and 1mm=96/25.4px. Both bases must be positive because the comparison rows use them too. Zero and negative lengths are accepted arithmetically, although a particular CSS property may disallow them.",
    "example": "With a 16 px root, 24 px is 1.5 rem and 18 pt.",
    "faq": [
      {
        "q": "How do rem and em bases differ?",
        "a": "rem uses the computed root font size. For margin or width, em refers to the element’s own font; for font-size, it refers to the inherited size. Enter the base that applies to the property you are converting."
      },
      {
        "q": "Does a CSS centimetre match a physical one?",
        "a": "The cm-to-px ratio is fixed: 1cm=96/2.54px. Physical size depends on the device’s anchoring of absolute units; an on-screen ruler match is not guaranteed."
      },
      {
        "q": "Does px disable browser zoom?",
        "a": "No. Page zoom also works with px. rem can follow a user’s root font setting; assess accessibility on the actual layout rather than from one chosen unit."
      },
      {
        "q": "Does 62.5% always make the root 10px?",
        "a": "Only when the initial size is 16px: 0.625·16=10. A user’s initial 20px font gives 12.5px. Enter the actual computed root size here."
      }
    ],
    "disclaimer": "CSS-length conversion with the supplied context; it does not measure display density or validate a length for a particular property."
  },
  "uk": {
    "shortDescription": "Переведення px, rem, em, pt та інших одиниць верстки.",
    "seoDescription": "Перетворюйте px, rem, em, pt, pc, in, cm і mm за кореневою базою rem та вибраною базою em. Для font-size база em — успадкований розмір.",
    "longDescription": "Порівнює CSS-довжини через CSS-піксель із явно заданими базами rem та em. Сталі співвідношення: 1in=96px, 1pt=96/72px, 1pc=16px. rem використовує обчислений шрифт кореня. Для звичайних властивостей em використовує шрифт самого елемента, а у font-size — успадкований розмір. Поле «База em» задає потрібний контекст без припущення про вкладеність.",
    "howToUse": [
      "Оберіть початкову та цільову одиниці й введіть довжину.",
      "Задайте обчислений кореневий шрифт і базу em у CSS-пікселях.",
      "Цільова одиниця вказана в підписі результату; довідкові рядки використовують ті самі бази."
    ],
    "howItWorks": "Для кожної одиниці задано коефіцієнт f у CSS-пікселях. Результат = значення·fпоч/fціл. Для rem це кореневий розмір, для em — задана база em; 1cm=96/2,54px, 1mm=96/25,4px. Обидві бази мають бути додатними, бо потрібні й для довідкових рядків. Нульові та від’ємні довжини арифметично дозволені, хоча конкретна CSS-властивість може їх забороняти.",
    "example": "За кореневого розміру 16 px значення 24 px — це 1,5 rem і 18 pt.",
    "faq": [
      {
        "q": "Чим відрізняються бази rem та em?",
        "a": "rem використовує обчислений шрифт кореня. Для margin або width em стосується шрифту самого елемента, а для font-size — успадкованого розміру. Введіть базу саме потрібної властивості."
      },
      {
        "q": "CSS-сантиметр збігається з фізичним?",
        "a": "Співвідношення cm і px стале: 1cm=96/2,54px. Фізичний розмір залежить від прив’язки абсолютних одиниць на пристрої; збіг із лінійкою на екрані не гарантований."
      },
      {
        "q": "px вимикає масштабування браузера?",
        "a": "Ні. Масштабування сторінки працює і з px. rem може враховувати користувацький кореневий шрифт; доступність слід перевіряти на реальному макеті, а не за однією одиницею."
      },
      {
        "q": "Чи завжди 62,5% дає корінь 10px?",
        "a": "Лише за початкового розміру 16px: 0,625·16=10. За користувацького шрифту 20px вийде 12,5px. Тут вводиться фактично обчислений розмір."
      }
    ],
    "disclaimer": "Переведення CSS-довжин із заданим контекстом; не вимірює щільність екрана й не перевіряє допустимість довжини для конкретної властивості."
  },
  "de": {
    "shortDescription": "px, rem, em, pt und die übrigen CSS-Längeneinheiten umrechnen.",
    "seoDescription": "Rechne px, rem, em, pt, pc, in, cm und mm mit der rem-Wurzelbasis und gewählten em-Basis um. Bei font-size gilt für em die geerbte Größe.",
    "longDescription": "Vergleicht CSS-Längen über das CSS-Pixel mit ausdrücklich angegebenen rem- und em-Bezugsgrößen. Feste Verhältnisse sind 1in=96px, 1pt=96/72px und 1pc=16px. rem bezieht sich auf die berechnete Schriftgröße des Wurzelelements. em nutzt bei gewöhnlichen Eigenschaften die berechnete Schriftgröße des Elements selbst, bei font-size dagegen die geerbte Größe. Das Feld „em-Bezugsgröße“ legt diesen Kontext fest.",
    "howToUse": [
      "Wähle Quell- und Zieleinheit und gib die Länge ein.",
      "Trage die berechnete Wurzelschriftgröße und die zutreffende em-Bezugsgröße in CSS-Pixeln ein.",
      "Die Zieleinheit steht in der Ergebnisbeschriftung; Vergleichszeilen verwenden dieselben Bezugsgrößen."
    ],
    "howItWorks": "Jede Einheit erhält einen Faktor f in CSS-Pixeln. Ergebnis = Wert·fQuelle/fZiel. rem nutzt die Wurzelschriftgröße, em die angegebene Bezugsgröße; 1cm=96/2,54px und 1mm=96/25,4px. Beide Bezugsgrößen müssen positiv sein, da auch die Vergleichszeilen sie verwenden. Null und negative Längen sind rechnerisch erlaubt, können aber bei einer bestimmten CSS-Eigenschaft unzulässig sein.",
    "example": "Bei einer Wurzelgröße von 16 px sind 24 px gleich 1,5 rem und 18 pt.",
    "faq": [
      {
        "q": "Wie unterscheiden sich rem und em?",
        "a": "rem nutzt die berechnete Wurzelschriftgröße. Bei margin oder width bezieht sich em auf die eigene Schrift des Elements, bei font-size auf die geerbte Größe. Gib die für diese Eigenschaft geltende Bezugsgröße ein."
      },
      {
        "q": "Entspricht ein CSS-Zentimeter einem echten Zentimeter?",
        "a": "Das Verhältnis von cm zu px ist fest: 1cm=96/2,54px. Die physische Größe hängt von der Verankerung absoluter Einheiten am Gerät ab; auf dem Bildschirm ist kein Linealmaß garantiert."
      },
      {
        "q": "Verhindert px den Browserzoom?",
        "a": "Nein. Seitenzoom funktioniert auch mit px. rem kann einer benutzerdefinierten Wurzelschrift folgen; Barrierefreiheit muss am tatsächlichen Layout geprüft werden."
      },
      {
        "q": "Ergeben 62,5% immer eine Wurzelschrift von 10px?",
        "a": "Nur bei einer Ausgangsgröße von 16px: 0,625·16=10. Mit einer Ausgangsschrift von 20px werden es 12,5px. Hier wird die tatsächlich berechnete Größe eingegeben."
      }
    ],
    "disclaimer": "CSS-Längenumrechnung mit dem angegebenen Kontext; sie misst keine Bildschirmdichte und prüft keine Eigenschaft auf zulässige Längen."
  },
  "es": {
    "shortDescription": "Convierte px, rem, em, pt y las demás unidades de longitud de CSS.",
    "seoDescription": "Convierte px, rem, em, pt, pc, in, cm y mm con la base raíz rem y la base em elegida. Para font-size, em usa el tamaño heredado.",
    "longDescription": "Compara longitudes CSS mediante el píxel CSS con bases explícitas para rem y em. Las relaciones fijas son 1in=96px, 1pt=96/72px y 1pc=16px. rem usa el tamaño de fuente calculado de la raíz. En propiedades ordinarias, em usa la fuente calculada del propio elemento; en font-size usa el tamaño heredado. El campo «Base em» permite indicar el contexto correspondiente sin suponer anidamiento.",
    "howToUse": [
      "Selecciona las unidades de origen y destino e introduce la longitud.",
      "Indica la fuente raíz calculada y la base em correspondiente en píxeles CSS.",
      "La etiqueta del resultado indica la unidad de destino; las comparaciones usan las mismas bases."
    ],
    "howItWorks": "Cada unidad tiene un factor f en píxeles CSS. Resultado = valor·forigen/fdestino. rem usa el tamaño raíz y em la base indicada; 1cm=96/2,54px y 1mm=96/25,4px. Ambas bases deben ser positivas porque también se usan en las filas comparativas. Se admiten cero y longitudes negativas en la aritmética, aunque una propiedad CSS concreta pueda prohibirlas.",
    "example": "Con una raíz de 16 px, 24 px son 1,5 rem y 18 pt.",
    "faq": [
      {
        "q": "¿En qué se distinguen rem y em?",
        "a": "rem usa la fuente raíz calculada. En margin o width, em depende de la fuente del propio elemento; en font-size depende del tamaño heredado. Introduce la base que corresponda a esa propiedad."
      },
      {
        "q": "¿Un centímetro CSS es un centímetro físico?",
        "a": "La proporción cm/px es fija: 1cm=96/2,54px. El tamaño físico depende del anclaje de las unidades absolutas en el dispositivo; no se garantiza que coincida con una regla en pantalla."
      },
      {
        "q": "¿px desactiva el zoom del navegador?",
        "a": "No. El zoom de página funciona también con px. rem puede seguir la fuente raíz del usuario; la accesibilidad debe evaluarse en el diseño real."
      },
      {
        "q": "¿62,5% siempre produce una raíz de 10px?",
        "a": "Solo si el tamaño inicial es 16px: 0,625·16=10. Con una fuente inicial de 20px se obtienen 12,5px. Aquí se introduce el tamaño calculado real."
      }
    ],
    "disclaimer": "Conversión de longitudes CSS con el contexto indicado; no mide la densidad de pantalla ni valida la longitud para una propiedad específica."
  }
};
