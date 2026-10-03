import type { CalculatorCopy } from '../../lib/platform/types';
type ContractContent = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent = {
  "ru": {
    "longDescription": "Складывает калорийность блюда из ингредиентов и делит её на число порций. Каждая строка это название, масса в граммах и калорийность на сто граммов, причём последние два числа читаются как масса и калорийность, а всё перед ними считается названием: так разбирается «мука в/с 300 364». Строка без калорийности отклоняется, а не достраивается нулём — подставленный ноль занизил бы блюдо молча. Таблица показывает вклад каждого ингредиента. Сумма предполагает полное потребление указанных продуктов; потери жира, отброшенные жидкости и добавки после расчёта не учтены.",
    "howItWorks": "Энергия строки = граммы × ккал на 100 г ÷ 100; энергия порции = сумма ÷ число равных порционных эквивалентов, не меньше 1. Дробные эквиваленты поддерживаются. Расчёт использует неокруглённые суммы; энергия выводится в целых ккал. Масса порции — сумма введённых масс ÷ порции, не измеренный выход готовки.",
    "example": "Мука 300 г × 364 ккал/100 г, масло 100 г × 717 и сахар 150 г × 387 дают ровно 2389,5 ккал. Четыре порции: 597,375, на экране 597 ккал; общий итог округлён до 2390. Вода 100 г с 0 ккал/100 г на одну порцию даёт 0 ккал и 100 г исходной массы.",
    "howToUse": [
      "Впишите ингредиенты по одному в строке.",
      "В каждой строке последние два числа — масса в граммах и ккал на 100 г.",
      "Название может состоять из нескольких слов: «мука в/с 300 364».",
      "Укажите, на сколько порций рассчитано блюдо."
    ],
    "faq": [
      {
        "q": "Где взять калорийность на 100 г?",
        "a": "Используйте упаковку или базу состава для того же состояния продукта. Если энергия дана на порцию массой m г, переведите: ккал на порцию × 100/m. Не вся маркировка использует 100 г."
      },
      {
        "q": "Меняет ли готовка результат?",
        "a": "Одна вода не добавляет энергии, но при готовке могут добавляться масло или соус и удаляться жир или жидкость. Модель не измеряет эти изменения: учитывайте фактически съеденные ингредиенты на сопоставимой основе."
      },
      {
        "q": "Почему строка без калорийности не считается?",
        "a": "Потому что подставленный ноль занизил бы блюдо молча. Лучше остановить расчёт, чем показать правдоподобное, но неверное число."
      },
      {
        "q": "Можно смешивать граммы и миллилитры?",
        "a": "Вводите граммы. Для воды разница невелика, а для масла или мёда — существенна: взвесьте или переведите заранее."
      },
      {
        "q": "Это то же, что калькулятор БЖУ?",
        "a": "Нет. Этот складывает калории того, что действительно положено в кастрюлю. Калькулятор БЖУ делит дневную норму на белки, жиры и углеводы."
      }
    ],
    "disclaimer": "Оценка по выбранным данным состава не заменяет измерение готового блюда и не назначает размер порции или рацион."
  },
  "en": {
    "longDescription": "Adds up the calories of a dish from its ingredients and divides them by the number of servings. Each line is a name, a weight in grams and the calories per 100 grams, and the last two numbers are read as weight and calories while everything before them counts as the name — so «plain flour 300 364» parses correctly even with spaces in the name. A line without calories is rejected rather than filled with a zero: a substituted zero would understate the dish quietly. The table shows each ingredient’s contribution. The sum assumes all listed ingredients are consumed; discarded fat or liquids and later additions are excluded.",
    "howItWorks": "Row energy = grams × kcal per 100 g ÷ 100; portion energy = sum ÷ equal serving equivalents, at least 1. Fractional equivalents are supported. Unrounded sums are used, with energy displayed as whole kcal. Portion mass is entered ingredient mass ÷ servings, not measured cooked yield.",
    "example": "Flour 300 g at 364 kcal/100 g, butter 100 g at 717 and sugar 150 g at 387 give exactly 2389.5 kcal. Four servings give 597.375, displayed as 597 kcal; the total rounds to 2390. Water 100 g at 0 kcal/100 g for one serving gives 0 kcal and 100 g of original mass.",
    "howToUse": [
      "Enter ingredients one per line.",
      "On each line the last two numbers are the weight in grams and the calories per 100 g.",
      "The name may be several words: «plain flour 300 364».",
      "Enter how many servings the dish makes."
    ],
    "faq": [
      {
        "q": "Where do I find calories per 100 g?",
        "a": "Use the package or a composition database for the same product state. If energy is per serving of m grams, convert it as serving kcal × 100/m. Labels do not universally use a 100 g basis."
      },
      {
        "q": "Does cooking change the result?",
        "a": "Water alone adds no energy, but cooking may add oil or sauce and discard fat or liquid. The model measures none of these changes. Record the ingredients actually consumed on a consistent basis."
      },
      {
        "q": "Why is a line without calories rejected?",
        "a": "Because a substituted zero would understate the dish silently. Stopping is better than showing a plausible but wrong number."
      },
      {
        "q": "Can I mix grams and millilitres?",
        "a": "Enter grams. For water-like liquids millilitres and grams are close enough, but for oil or honey they are not — weigh them or convert first."
      },
      {
        "q": "Is this the same as a macros calculator?",
        "a": "No. This one sums the calories of what you actually put in the pot. A macros calculator splits a daily allowance into protein, fat and carbohydrate."
      }
    ],
    "disclaimer": "An estimate from selected composition data does not measure the cooked dish or prescribe serving size or a diet."
  },
  "uk": {
    "longDescription": "Складає калорійність страви з інгредієнтів і ділить її на кількість порцій. Кожен рядок це назва, маса в грамах і калорійність на сто грамів, причому останні два числа читаються як маса і калорійність, а все перед ними вважається назвою — тож «борошно в/ґ 300 364» розбереться навіть із пробілом у назві. Рядок без калорійності відхиляється, а не доповнюється нулем: підставлений нуль занизив би страву мовчки. Таблиця показує внесок кожного інгредієнта. Сума припускає повне споживання вказаних продуктів; відкинуті жир чи рідина та наступні добавки не враховані.",
    "howItWorks": "Енергія рядка = грами × ккал на 100 г ÷ 100; енергія порції = сума ÷ рівні порційні еквіваленти, не менше 1. Дробові еквіваленти підтримуються. Використовуються неокруглені суми, енергія виводиться цілими ккал. Маса порції — введені маси ÷ порції, не виміряний вихід готової страви.",
    "example": "Борошно 300 г за 364 ккал/100 г, масло 100 г за 717 і цукор 150 г за 387 дають точно 2389,5 ккал. Чотири порції: 597,375, на екрані 597 ккал; загальний підсумок округлено до 2390. Вода 100 г із 0 ккал/100 г на одну порцію дає 0 ккал та 100 г вихідної маси.",
    "howToUse": [
      "Введіть інгредієнти по одному в рядку.",
      "У кожному рядку останні два числа це маса в грамах і ккал на 100 г.",
      "Назва може складатися з кількох слів: «борошно в/ґ 300 364».",
      "Вкажіть, на скільки порцій розрахована страва."
    ],
    "faq": [
      {
        "q": "Де взяти калорійність на 100 г?",
        "a": "Беріть упаковку або базу складу для того самого стану продукту. Якщо енергія вказана на порцію m г, переведіть: ккал порції × 100/m. Не вся маркіровка використовує основу 100 г."
      },
      {
        "q": "Чи змінює приготування результат?",
        "a": "Вода сама не додає енергії, але під час готування можуть додаватися олія чи соус та видалятися жир або рідина. Модель не вимірює цих змін; враховуйте фактично спожиті інгредієнти на однаковій основі."
      },
      {
        "q": "Чому рядок без калорійності відхиляється?",
        "a": "Бо підставлений нуль занизив би страву мовчки. Зупинитися краще, ніж показати правдоподібне, але хибне число."
      },
      {
        "q": "Чи можна змішувати грами і мілілітри?",
        "a": "Вводьте грами. Для води різниця мала, але для олії чи меду вона суттєва — зважте або переведіть спершу."
      },
      {
        "q": "Це те саме, що калькулятор БЖУ?",
        "a": "Ні. Цей додає калорії того, що ви справді поклали в каструлю. Калькулятор БЖУ ділить денну норму на білки, жири і вуглеводи."
      }
    ],
    "disclaimer": "Оцінка за обраними даними складу не вимірює готову страву й не призначає розмір порції або раціон."
  },
  "de": {
    "longDescription": "Zählt die Kalorien eines Gerichts aus seinen Zutaten zusammen und teilt sie durch die Zahl der Portionen. Jede Zeile besteht aus einem Namen, einem Gewicht in Gramm und dem Kaloriengehalt je 100 Gramm, und die letzten beiden Zahlen werden als Gewicht und Kalorien gelesen, während alles davor als Name zählt — „Weizenmehl Type 405 300 364“ wird also auch mit Leerzeichen im Namen richtig verstanden. Eine Zeile ohne Kalorien wird abgewiesen statt mit einer Null gefüllt: eine eingesetzte Null setzte das Gericht still zu niedrig an. Die Tabelle zeigt jeden Zutatenbeitrag. Die Summe setzt vollständigen Verzehr voraus; verworfenes Fett, Flüssigkeiten und spätere Zugaben sind nicht berücksichtigt.",
    "howItWorks": "Zeilenenergie = Gramm × kcal je 100 g ÷ 100; Portionsenergie = Summe ÷ gleiche Portionsäquivalente, mindestens 1. Gebrochene Äquivalente sind erlaubt. Unrunde Summen werden gerechnet, Energie in ganzen kcal angezeigt. Portionsmasse ist Eingabemasse ÷ Portionen, keine gemessene Garmenge.",
    "example": "Mehl 300 g mit 364 kcal/100 g, Butter 100 g mit 717 und Zucker 150 g mit 387 ergeben exakt 2389,5 kcal. Vier Portionen ergeben 597,375, angezeigt als 597 kcal; der Gesamtwert rundet auf 2390. Wasser 100 g mit 0 kcal/100 g für eine Portion ergibt 0 kcal und 100 g Ausgangsmasse.",
    "howToUse": [
      "Trage die Zutaten je Zeile ein.",
      "In jeder Zeile sind die letzten beiden Zahlen das Gewicht in Gramm und die Kalorien je 100 g.",
      "Der Name darf mehrere Wörter haben: „Weizenmehl Type 405 300 364“.",
      "Trage ein, wie viele Portionen das Gericht ergibt."
    ],
    "faq": [
      {
        "q": "Wo finde ich die Kalorien je 100 g?",
        "a": "Verpackung oder Zusammensetzungsdaten für denselben Produktzustand verwenden. Bei Energie je Portion von m Gramm umrechnen: Portions-kcal × 100/m. Angaben beruhen nicht überall auf 100 g."
      },
      {
        "q": "Ändert das Kochen das Ergebnis?",
        "a": "Wasser allein fügt keine Energie hinzu. Beim Garen können jedoch Öl oder Soße hinzukommen und Fett oder Flüssigkeit verworfen werden. Das Modell misst diese Änderungen nicht; tatsächlich verzehrte Zutaten auf passender Basis erfassen."
      },
      {
        "q": "Warum wird eine Zeile ohne Kalorien abgewiesen?",
        "a": "Weil eine eingesetzte Null das Gericht still zu niedrig ansetzte. Anzuhalten ist besser, als eine plausible und falsche Zahl zu zeigen."
      },
      {
        "q": "Darf ich Gramm und Milliliter mischen?",
        "a": "Trage Gramm ein. Bei wasserähnlichen Flüssigkeiten liegen Milliliter und Gramm nah genug beieinander, bei Öl oder Honig aber nicht — wiege sie oder rechne vorher um."
      },
      {
        "q": "Ist das dasselbe wie ein Rechner für Makronährstoffe?",
        "a": "Nein. Dieser zählt die Kalorien dessen zusammen, was du tatsächlich in den Topf gegeben hast. Ein Makrorechner teilt eine Tageszufuhr in Eiweiß, Fett und Kohlenhydrate auf."
      }
    ],
    "disclaimer": "Die Schätzung aus gewählten Zusammensetzungsdaten misst kein fertiges Gericht und legt weder Portionsgröße noch Ernährung fest."
  },
  "es": {
    "longDescription": "Suma las calorías de un plato a partir de sus ingredientes y las divide entre el número de raciones. Cada línea es un nombre, un peso en gramos y las calorías por 100 gramos, y los dos últimos números se leen como peso y calorías mientras que todo lo anterior cuenta como nombre, así que «harina de trigo 300 364» se interpreta bien aunque el nombre lleve espacios. Una línea sin calorías se rechaza en vez de rellenarse con un cero: un cero sustituido subestimaría el plato en silencio. La tabla muestra cada aportación. La suma supone consumo completo de los ingredientes; excluye grasa o líquidos descartados y añadidos posteriores.",
    "howItWorks": "Energía de línea = gramos × kcal por 100 g ÷ 100; energía de ración = suma ÷ equivalentes iguales de ración, al menos 1. Admite equivalentes fraccionarios. Se calcula sin redondear las sumas y se muestra energía en kcal enteras. Masa de ración es masa introducida ÷ raciones, no rendimiento cocinado medido.",
    "example": "Harina 300 g a 364 kcal/100 g, mantequilla 100 g a 717 y azúcar 150 g a 387 suman exactamente 2389,5 kcal. Cuatro raciones dan 597,375, mostradas como 597 kcal; el total redondea a 2390. Agua 100 g a 0 kcal/100 g para una ración da 0 kcal y 100 g de masa original.",
    "howToUse": [
      "Introduce los ingredientes, uno por línea.",
      "En cada línea los dos últimos números son el peso en gramos y las calorías por 100 g.",
      "El nombre puede llevar varias palabras: «harina de trigo 300 364».",
      "Introduce cuántas raciones salen del plato."
    ],
    "faq": [
      {
        "q": "¿Dónde encuentro las calorías por 100 g?",
        "a": "Usa el envase o una base de composición para el mismo estado del producto. Si la energía es por ración de m gramos, convierte: kcal de ración × 100/m. El etiquetado no usa siempre una base de 100 g."
      },
      {
        "q": "¿La cocción cambia el resultado?",
        "a": "El agua sola no añade energía, pero al cocinar puede añadirse aceite o salsa y descartarse grasa o líquido. El modelo no mide esos cambios; registra los ingredientes realmente consumidos sobre una base coherente."
      },
      {
        "q": "¿Por qué se rechaza una línea sin calorías?",
        "a": "Porque un cero sustituido subestimaría el plato en silencio. Detenerse es mejor que mostrar una cifra verosímil y equivocada."
      },
      {
        "q": "¿Puedo mezclar gramos y mililitros?",
        "a": "Introduce gramos. En líquidos parecidos al agua los mililitros y los gramos van bastante parejos, pero en el aceite o la miel no: pésalos o conviértelos antes."
      },
      {
        "q": "¿Es lo mismo que una calculadora de macronutrientes?",
        "a": "No. Esta suma las calorías de lo que de verdad has puesto en la olla. Una calculadora de macronutrientes reparte una ración diaria entre proteínas, grasas e hidratos."
      }
    ],
    "disclaimer": "Una estimación con datos elegidos no mide el plato cocinado ni prescribe tamaño de ración o dieta."
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractContent>;
