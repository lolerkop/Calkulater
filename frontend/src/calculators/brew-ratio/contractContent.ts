import type { CalculatorCopy } from '../../lib/platform/types';
type ContractContent = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent = {
  "ru": {
    "longDescription": "Решает уравнение заварки в любую сторону: массу кофе под заданный объём воды, воду под навеску или соотношение по двум известным величинам. Запись 1:16 здесь означает 1 г сухого кофе на 16 мл воды, поданной на заваривание. Это не соотношение массы готового напитка к кофе и не выход чашки после фильтра. Отличие от пересчёта рецепта по порциям сохраняется: здесь связаны две величины, а не весь список ингредиентов. Крепость и вкус зависят также от помола, времени и способа заваривания.",
    "howItWorks": "Вода, мл = кофе, г × k; кофе = вода ÷ k; k = вода ÷ кофе. Две известные величины должны быть положительными; поле искомой величины не используется как вход. k имеет смысл мл воды на грамм кофе. Миллилитры не переводятся в граммы по температуре. Дополнительная строка показывает условную ёмкость гущи по допущению 2 мл/г, не измеренную потерю или точный объём напитка.",
    "example": "500 мл входной воды при 1:16 требуют 31,25 г кофе. Обратная задача: 30 г и 480 мл дают 1:16. При 30 г и k = 1 получается 30 мл воды; условная ёмкость гущи 60 мл при этом не означает, что реально исчезнут 60 мл из 30.",
    "howToUse": [
      "Выберите искомую величину: кофе, воду или k.",
      "Введите две известные величины; поле искомой величины скрыто, ответ показан в результате.",
      "Используйте входную воду рецепта, а не готовый объём чашки.",
      "Выберите соотношение для своего рецепта и оборудования; строка ёмкости гущи не заменяет измерение выхода напитка."
    ],
    "faq": [
      {
        "q": "Какое соотношение брать?",
        "a": "Возьмите значение из своего рецепта или инструкции оборудования и сравните вкус при сопоставимых условиях. Сохранённое 1:16 — пример расчёта, а не обязательная норма для любого способа."
      },
      {
        "q": "Почему в чашке меньше, чем налито воды?",
        "a": "Вода может удерживаться в гуще и фильтре. Здесь 2 мл/г задают лишь условную ёмкость гущи, без измерения реальных потерь, испарения или выхода чашки."
      },
      {
        "q": "Чем это отличается от пересчёта рецепта по порциям?",
        "a": "Пересчёт рецепта умножает весь список ингредиентов на коэффициент порций. Здесь одно соотношение связывает навеску сухого кофе и объём входной воды, и любую величину можно найти по двум другим."
      },
      {
        "q": "Считать воду в граммах или миллилитрах?",
        "a": "Поля используют миллилитры воды и граммы кофе. Если рецепт задаёт массу воды, переведите её в объём для условий измерения либо работайте в массовых единицах вне этой страницы. Универсальная погрешность меньше 3% не гарантируется."
      }
    ],
    "disclaimer": "Модель считает входные пропорции и выбранную условную ёмкость; она не измеряет экстракцию, крепость или выход готового напитка."
  },
  "en": {
    "longDescription": "Solves the brewing equation in either direction: coffee dose for an input water volume, water for a dose, or the ratio from both known quantities. Here 1:16 means 1 g of dry coffee per 16 mL of water supplied for brewing. It is not a brewed-beverage mass ratio or the volume left in the cup after filtration. Unlike scaling a whole ingredient list by servings, this tool relates two quantities. Grind, contact time and brewing method also influence strength and taste.",
    "howItWorks": "Water mL = coffee g × k; coffee = water ÷ k; k = water ÷ coffee. Both known values must be positive; the solved field is ignored as an input. k has units of mL water per g coffee. Water volume is not converted to mass using temperature. The extra grounds row assumes a capacity of 2 mL/g, rather than measuring water loss or exact beverage yield.",
    "example": "500 mL of input water at 1:16 needs 31.25 g coffee. Conversely, 30 g with 480 mL gives 1:16. At 30 g and k = 1, water is 30 mL; the assumed grounds capacity of 60 mL does not mean that 60 mL actually disappear from those 30 mL.",
    "howToUse": [
      "Choose the unknown: coffee, water or k.",
      "Enter the two known values; the unknown input is hidden and its answer appears in the result.",
      "Use the recipe’s input water, not finished cup volume.",
      "Choose a recipe and equipment ratio; grounds capacity cannot replace a measurement of beverage yield."
    ],
    "faq": [
      {
        "q": "Which ratio should I use?",
        "a": "Use your recipe or equipment instructions and compare taste under comparable conditions. The retained 1:16 is a calculation example, not a requirement for every brewing method."
      },
      {
        "q": "Why is there less in the cup than water poured?",
        "a": "Grounds and filters can retain water. The 2 mL/g figure here is an assumed grounds capacity, without measuring actual retention, evaporation or cup yield."
      },
      {
        "q": "How is this different from scaling a recipe?",
        "a": "Recipe scaling multiplies a whole ingredient list by a serving factor. Here one relationship connects dry coffee dose and input water volume; any variable can be found from the other two."
      },
      {
        "q": "Grams or millilitres for water?",
        "a": "These fields use mL of water and g of coffee. If your recipe specifies water mass, convert it for the measurement conditions or use a mass-based calculation elsewhere. No universal error below 3% is guaranteed."
      }
    ],
    "disclaimer": "The model calculates input proportions and an assumed capacity; it does not measure extraction, beverage strength or finished yield."
  },
  "uk": {
    "longDescription": "Знаходить навіску кави, об’єм вхідної води або співвідношення за двома відомими величинами. Тут 1:16 означає 1 г сухої кави на 16 мл води, поданої для заварювання. Це не співвідношення маси готового напою й кави та не об’єм у чашці після фільтра. На відміну від масштабування всього рецепта, пов’язуються дві величини. Помел, час контакту та спосіб заварювання також впливають на міцність і смак; калькулятор не встановлює, що співвідношення важливіше за них.",
    "howItWorks": "Вода, мл = кава, г × k; кава = вода ÷ k; k = вода ÷ кава. Два відомі значення мають бути додатними; шукане поле не використовується як вхід. k має одиницю мл води на грам кави. Об’єм води не переводиться в масу за температурою. Рядок гущі задає умовну місткість 2 мл/г, а не виміряну втрату або точний вихід напою.",
    "example": "500 мл вхідної води за 1:16 потребують 31,25 г кави. Зворотно: 30 г та 480 мл дають 1:16. За 30 г і k = 1 виходить 30 мл води; умовна місткість гущі 60 мл не означає фактичну втрату 60 мл із цих 30.",
    "howToUse": [
      "Оберіть шукане: каву, воду чи k.",
      "Введіть два відомі значення; поле шуканого приховане, відповідь показано в результаті.",
      "Використовуйте вхідну воду рецепта, а не об’єм готової чашки.",
      "Співвідношення обирайте для свого рецепта та обладнання; вихід напою вимірюйте окремо."
    ],
    "faq": [
      {
        "q": "Яке співвідношення обрати?",
        "a": "Візьміть значення зі свого рецепта чи інструкції обладнання. Збережене 1:16 — приклад, а не універсальна норма. Масове еспресо-співвідношення виходу напою не слід підставляти як об’єм вхідної води."
      },
      {
        "q": "Чому мілілітри прирівнюються до грамів?",
        "a": "Тут мілілітри залишаються одиницею об’єму, а не точно прирівнюються до грамів. Для рецепта з масою води потрібне відповідне перетворення; температура може змінювати густину."
      },
      {
        "q": "Чи вбирає кава частину води?",
        "a": "Гуща й фільтр можуть утримувати воду. Рядок 2 мл/г показує лише обрану умовну місткість, не фактичну втрату, випаровування чи об’єм чашки."
      },
      {
        "q": "Що важливіше — співвідношення чи помел?",
        "a": "Обидва параметри впливають на напій разом із часом і методом. Цей калькулятор зв’язує введені кількості, але не оцінює екстракцію та не доводить універсальної переваги одного параметра."
      }
    ],
    "disclaimer": "Модель рахує вхідні пропорції та обрану умовну місткість; вона не вимірює екстракцію, міцність або вихід готового напою."
  },
  "de": {
    "longDescription": "Löst die Brühgleichung in beide Richtungen: Kaffeedosis für ein Eingangsvolumen Wasser, Wasser für eine Dosis oder das Verhältnis aus beiden bekannten Werten. Hier bedeutet 1:16 ein Gramm trockenen Kaffee je 16 ml zugeführtes Brühwasser. Gemeint sind weder das Masseverhältnis des fertigen Getränks noch die Menge nach der Filterung. Anders als beim Skalieren einer ganzen Zutatenliste werden zwei Größen verbunden. Mahlgrad, Kontaktzeit und Brühmethode beeinflussen ebenfalls Stärke und Geschmack.",
    "howItWorks": "Wasser in ml = Kaffee in g × k; Kaffee = Wasser ÷ k; k = Wasser ÷ Kaffee. Beide bekannten Werte müssen positiv sein; das berechnete Feld zählt nicht als Eingabe. k hat die Einheit ml Wasser je g Kaffee. Eine temperaturabhängige Umrechnung in Wassermasse erfolgt nicht. Die Satzzeile nimmt eine Kapazität von 2 ml/g an, ohne tatsächlichen Verlust oder Getränkeausbeute zu messen.",
    "example": "500 ml Eingangswasser bei 1:16 benötigen 31,25 g Kaffee. Umgekehrt ergeben 30 g und 480 ml das Verhältnis 1:16. Bei 30 g und k = 1 ergeben sich 30 ml Wasser; die angenommene Satzkapazität von 60 ml bedeutet keinen tatsächlichen Verlust von 60 ml aus diesen 30.",
    "howToUse": [
      "Gesuchte Größe wählen: Kaffee, Wasser oder k.",
      "Zwei bekannte Werte eingeben; das gesuchte Eingabefeld ist verborgen und die Antwort steht im Ergebnis.",
      "Zugeführtes Rezeptwasser statt fertiges Tassenvolumen verwenden.",
      "Verhältnis aus Rezept und Geräteanleitung wählen; Getränkeausbeute gesondert messen."
    ],
    "faq": [
      {
        "q": "Welches Verhältnis soll ich nehmen?",
        "a": "Ein Verhältnis aus dem eigenen Rezept oder der Geräteanleitung verwenden und unter vergleichbaren Bedingungen prüfen. Die Vorgabe 1:16 ist ein Rechenbeispiel, keine Regel für jede Methode."
      },
      {
        "q": "Warum ist in der Tasse weniger als eingegossen?",
        "a": "Satz und Filter können Wasser zurückhalten. Die 2 ml/g sind hier eine angenommene Kapazität, keine Messung von Rückhalt, Verdunstung oder Tassenmenge."
      },
      {
        "q": "Wie unterscheidet sich das vom Hochrechnen eines Rezepts?",
        "a": "Die Rezeptumrechnung multipliziert eine ganze Zutatenliste mit einem Portionsfaktor. Hier verbindet ein Verhältnis trockenen Kaffee und zugeführtes Wasservolumen; jede Größe lässt sich aus den anderen beiden bestimmen."
      },
      {
        "q": "Gramm oder Milliliter für das Wasser?",
        "a": "Die Felder verwenden ml Wasser und g Kaffee. Gibt das Rezept Wassermasse vor, diese für die Messbedingungen umrechnen oder außerhalb dieser Seite mit Massen rechnen. Ein allgemein garantierter Fehler unter 3% besteht nicht."
      }
    ],
    "disclaimer": "Das Modell berechnet Eingangsverhältnisse und eine angenommene Kapazität, keine Extraktion, Getränkestärke oder fertige Ausbeute."
  },
  "es": {
    "longDescription": "Resuelve la ecuación de preparación: dosis de café para un volumen de agua de entrada, agua para una dosis o ratio a partir de ambas cantidades. Aquí 1:16 significa 1 g de café seco por 16 ml de agua suministrada para preparar. No representa la razón de masas de la bebida terminada ni el volumen que queda tras filtrar. A diferencia de escalar una lista completa de ingredientes, se relacionan dos magnitudes. Molienda, tiempo de contacto y método también influyen en concentración y sabor.",
    "howItWorks": "Agua en ml = café en g × k; café = agua ÷ k; k = agua ÷ café. Los dos valores conocidos deben ser positivos; el campo resuelto se ignora como entrada. k tiene unidad ml de agua por g de café. No se convierte volumen de agua en masa según temperatura. La fila de posos supone una capacidad de 2 ml/g, sin medir pérdida real ni rendimiento de bebida.",
    "example": "500 ml de agua de entrada a 1:16 requieren 31,25 g de café. A la inversa, 30 g y 480 ml dan 1:16. Con 30 g y k = 1 resultan 30 ml de agua; los 60 ml de capacidad supuesta de posos no significan que desaparezcan realmente 60 ml de esos 30.",
    "howToUse": [
      "Elige la incógnita: café, agua o k.",
      "Introduce los dos valores conocidos; el campo desconocido está oculto y la respuesta aparece en el resultado.",
      "Usa el agua de entrada de la receta, no el volumen final de la taza.",
      "Elige el ratio según receta y equipo; mide aparte el rendimiento de bebida."
    ],
    "faq": [
      {
        "q": "¿Qué ratio debo usar?",
        "a": "Usa la receta o las instrucciones de tu equipo y compara en condiciones similares. El 1:16 inicial es un ejemplo de cálculo, no una exigencia para todos los métodos."
      },
      {
        "q": "¿Por qué en la taza hay menos que el agua vertida?",
        "a": "Los posos y el filtro pueden retener agua. Aquí 2 ml/g es una capacidad supuesta, sin medir retención real, evaporación ni volumen final."
      },
      {
        "q": "¿En qué se diferencia de escalar una receta?",
        "a": "Escalar una receta multiplica toda la lista por un factor de raciones. Aquí una razón une café seco y agua de entrada; cada magnitud puede hallarse a partir de las otras dos."
      },
      {
        "q": "¿Gramos o mililitros para el agua?",
        "a": "Los campos usan ml de agua y g de café. Si la receta expresa masa de agua, conviértela para las condiciones de medición o calcula por masas fuera de esta página. No se garantiza universalmente un error inferior al 3%."
      }
    ],
    "disclaimer": "El modelo calcula proporciones de entrada y una capacidad supuesta; no mide extracción, concentración ni rendimiento final de bebida."
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractContent>;
