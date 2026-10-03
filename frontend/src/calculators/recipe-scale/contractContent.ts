import type { CalculatorCopy } from '../../lib/platform/types';
type ContractContent = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent = {
  "ru": {
    "longDescription": "Берёт коэффициент из отношения нужных порций к исходным и умножает на него каждое количество. Строка рецепта — это название и одно число в конце, поэтому «мука в/с 500» разбирается верно даже с пробелами в названии. Коэффициент помогает оценить изменение замеса, но вместимость формы нужно проверить отдельно. Пересчёт линейно меняет все введённые количества; он не моделирует вкус, брожение, геометрию формы или время выпечки.",
    "howItWorks": "Коэффициент = нужные порционные эквиваленты ÷ исходные; новое количество строки = исходное × коэффициент. Оба числа порций положительные и могут быть дробными. Последнее число строки — количество, всё перед ним — название; количества неотрицательны. Суммы строк имеют физический смысл только при одной общей единице. В смешанном списке читайте пересчёт каждой строки, не сумму как массу или объём.",
    "example": "Исходные 837 г на 4 порции при цели 6 дают коэффициент 1,5 и 1255,5 г. Цель 2,5 равных порционных эквивалента даёт коэффициент 0,625 и 523,125 г. Эти суммы относятся к списку, где все количества в граммах; ингредиент с количеством 0 остаётся 0.",
    "howToUse": [
      "В конце каждой строки укажите одно количество; единицу сохраните в названии или исходном рецепте.",
      "Введите положительные исходные и нужные порционные эквиваленты.",
      "Проверьте отдельные пересчитанные строки; суммой пользуйтесь лишь при одинаковой единице.",
      "Время приготовления, форму и технологию проверяйте отдельно от линейного пересчёта."
    ],
    "faq": [
      {
        "q": "Важно ли, в чём измерены ингредиенты?",
        "a": "Для каждой строки можно сохранить свою единицу: граммы, миллилитры или штуки. Но их арифметическая сумма не является общей массой или объёмом; она полезна только при одинаковых единицах."
      },
      {
        "q": "Можно ли уменьшить рецепт?",
        "a": "Да. Если нужных порций меньше исходных, коэффициент получится меньше единицы, и все количества уменьшатся пропорционально."
      },
      {
        "q": "Почему дрожжи и соль пересчитываются так же, как мука?",
        "a": "Формула сохраняет введённые пропорции и не выбирает индивидуальных поправок. Иные дозировки должны следовать вашему рецепту или инструкции продукта; универсального правила уменьшать соль или дрожжи здесь нет."
      },
      {
        "q": "Что делать с яйцами, если вышло 1,5 штуки?",
        "a": "Если рецепт допускает деление яйца, взвесьте перемешанное яйцо и отмерьте долю массы. Округление количества — отдельное изменение рецепта, которое модель не оценивает."
      },
      {
        "q": "Меняется ли время выпечки вместе с количеством?",
        "a": "Нет: пересчитываются количества, не теплопередача. Толщина, форма, материал, температура и состав могут менять приготовление; пропорциональное умножение времени не следует из этого коэффициента."
      }
    ],
    "disclaimer": "Линейный пересчёт сохраняет введённые пропорции, но не проверяет технологию приготовления или пригодность изменённого рецепта."
  },
  "en": {
    "longDescription": "Takes the ratio of the servings you need to the servings the recipe makes and multiplies every quantity by it. A recipe line is a name followed by a single number, so «plain white flour 500» parses correctly even with spaces in the name. The factor helps assess batch size; pan capacity still needs a separate check. Every entered quantity scales linearly, without modelling taste, fermentation, pan geometry or baking time.",
    "howItWorks": "Factor = wanted serving equivalents ÷ original equivalents; new row amount = original × factor. Both serving values are positive and may be fractional. The last number in a line is quantity; preceding text is the name. Quantities are nonnegative. Row sums have physical meaning only with a shared unit. With mixed units, use individual rows rather than treating their sum as mass or volume.",
    "example": "837 g for 4 servings scaled to 6 gives factor 1.5 and 1255.5 g. Target 2.5 equal serving equivalents gives factor 0.625 and 523.125 g. Those sums use a list entirely in grams; a zero-quantity ingredient remains zero.",
    "howToUse": [
      "End each line with one quantity and retain its unit in the name or original recipe.",
      "Enter positive original and wanted serving equivalents.",
      "Check individual rows; use the aggregate only when units agree.",
      "Check cooking time, pan and technique separately from linear scaling."
    ],
    "faq": [
      {
        "q": "Does it matter what units the ingredients are in?",
        "a": "Each row can retain its own unit, such as grams, mL or items. Their numerical sum is not total mass or volume; it is meaningful only when all units agree."
      },
      {
        "q": "Can a recipe be scaled down?",
        "a": "Yes. If you need fewer servings than the recipe makes, the factor comes out below one and every quantity shrinks proportionally."
      },
      {
        "q": "Why are yeast and salt scaled the same as flour?",
        "a": "The equation preserves entered proportions and makes no individual adjustments. Alternative dosing should come from your recipe or product instructions; it does not establish a general rule to reduce salt or yeast."
      },
      {
        "q": "What do I do if it asks for 1.5 eggs?",
        "a": "If the recipe allows dividing an egg, weigh a mixed egg and use the required mass fraction. Rounding an item count changes the recipe independently and is not assessed by this model."
      },
      {
        "q": "Does baking time scale with the quantity?",
        "a": "No. Quantities, rather than heat transfer, are scaled. Thickness, pan, material, temperature and composition can change cooking; proportional time multiplication does not follow from the factor."
      }
    ],
    "disclaimer": "Linear scaling preserves entered proportions but does not validate preparation technique or the altered recipe."
  },
  "uk": {
    "longDescription": "Масштабування рецепта множить усі кількості на співвідношення потрібних і вихідних порцій. Кожний рядок — назва й одне число в кінці; пробіли в назві допустимі. Коефіцієнт показує зміну замісу, але місткість форми треба перевірити окремо. Усі введені кількості змінюються лінійно; смак, бродіння, геометрія форми та час випікання не моделюються.",
    "howItWorks": "Коефіцієнт = потрібні порційні еквіваленти ÷ вихідні; нова кількість рядка = вихідна × коефіцієнт. Обидва числа порцій додатні й можуть бути дробовими. Останнє число рядка — кількість, попередній текст — назва; кількості невід’ємні. Сума має фізичний зміст лише за спільної одиниці. У змішаному списку використовуйте окремі рядки, не суму як масу або об’єм.",
    "example": "837 г на 4 порції за цілі 6 дають коефіцієнт 1,5 та 1255,5 г. Ціль 2,5 рівних порційних еквівалента дає 0,625 та 523,125 г. Такі суми стосуються списку повністю в грамах; нульова кількість залишається нульовою.",
    "howToUse": [
      "Завершуйте рядок одним числом кількості та зберігайте одиницю в назві чи рецепті.",
      "Введіть додатні вихідні й потрібні порційні еквіваленти.",
      "Перевірте кожен рядок; сумою користуйтеся лише за однакових одиниць.",
      "Час, форму та технологію перевіряйте окремо від лінійного масштабування."
    ],
    "faq": [
      {
        "q": "Чи все масштабується лінійно?",
        "a": "Калькулятор лінійно множить усі введені кількості. Це не модель смаку, бродіння чи теплопередачі; будь-які технологічні поправки потребують окремої перевірки рецепта."
      },
      {
        "q": "Що робити з яйцями?",
        "a": "Якщо рецепт дозволяє ділити яйце, зважте перемішане яйце й відміряйте потрібну частку. Округлення штук є окремою зміною рецепта, яку цей розрахунок не оцінює."
      },
      {
        "q": "Як масштабувати спеції?",
        "a": "Формула зберігає задані пропорції спецій. Індивідуальна зміна за смаком або технологією не визначається коефіцієнтом; універсально зменшувати їх не потрібно за самим лише розміром партії."
      },
      {
        "q": "Чи змінювати розмір форми?",
        "a": "Площа круглої форми пропорційна квадрату діаметра: подвійний діаметр дає чотири площі. Для незмінної товщини зіставляйте об’єм і форму, але не множте час випікання автоматично."
      }
    ],
    "disclaimer": "Лінійний перерахунок зберігає введені пропорції, але не перевіряє технологію або придатність зміненого рецепта."
  },
  "de": {
    "longDescription": "Nimmt das Verhältnis der benötigten Portionen zu den Portionen des Rezepts und multipliziert jede Menge damit. Eine Rezeptzeile ist ein Name gefolgt von einer einzelnen Zahl, „Weizenmehl Type 405 500“ wird also auch mit Leerzeichen im Namen richtig verstanden. Der Faktor hilft beim Einschätzen der Menge; die Formkapazität ist gesondert zu prüfen. Alle Eingabemengen ändern sich linear, ohne Geschmack, Gärung, Formgeometrie oder Backzeit zu modellieren.",
    "howItWorks": "Faktor = gewünschte ÷ ursprüngliche Portionsäquivalente; neue Zeilenmenge = ursprüngliche × Faktor. Beide Portionswerte sind positiv und dürfen Bruchteile sein. Letzte Zeilenzahl ist Menge, davor steht der Name; Mengen sind nichtnegativ. Summen haben nur mit gemeinsamer Einheit physikalischen Sinn. Bei gemischten Einheiten einzelne Zeilen nutzen, nicht die Summe als Masse oder Volumen.",
    "example": "837 g für 4 Portionen auf 6 skaliert ergeben Faktor 1,5 und 1255,5 g. Das Ziel 2,5 gleicher Portionsäquivalente ergibt 0,625 und 523,125 g. Diese Summen setzen vollständig in Gramm erfasste Mengen voraus; eine Nullmenge bleibt null.",
    "howToUse": [
      "Jede Zeile mit einer Menge beenden und ihre Einheit im Namen oder Rezept behalten.",
      "Positive ursprüngliche und gewünschte Portionsäquivalente eingeben.",
      "Einzelne Zeilen prüfen; Gesamtmenge nur bei gleichen Einheiten nutzen.",
      "Garzeit, Form und Technik getrennt von der linearen Umrechnung prüfen."
    ],
    "faq": [
      {
        "q": "Spielt es eine Rolle, in welchen Einheiten die Zutaten stehen?",
        "a": "Jede Zeile darf ihre eigene Einheit behalten, etwa Gramm, ml oder Stück. Ihre Zahlensumme ist keine Gesamtmasse oder Gesamtvolumen; sinnvoll ist sie nur bei gleicher Einheit."
      },
      {
        "q": "Lässt sich ein Rezept auch verkleinern?",
        "a": "Ja. Brauchst du weniger Portionen, als das Rezept ergibt, kommt der Faktor unter eins heraus, und jede Menge schrumpft im selben Verhältnis."
      },
      {
        "q": "Warum werden Hefe und Salz genauso mitgerechnet wie das Mehl?",
        "a": "Die Formel erhält Eingabeverhältnisse ohne individuelle Anpassung. Andere Dosierungen müssen aus Rezept oder Produktanleitung stammen; eine allgemeine Reduktionsregel für Salz oder Hefe folgt daraus nicht."
      },
      {
        "q": "Was tue ich, wenn 1,5 Eier verlangt werden?",
        "a": "Erlaubt das Rezept ein geteiltes Ei, ein vermischtes Ei wiegen und den nötigen Massenanteil verwenden. Stückzahlen zu runden verändert das Rezept gesondert; das Modell beurteilt dies nicht."
      },
      {
        "q": "Skaliert die Backzeit mit der Menge?",
        "a": "Nein. Mengen statt Wärmeübertragung werden skaliert. Dicke, Form, Material, Temperatur und Zusammensetzung können die Zubereitung ändern; Zeitmultiplikation folgt nicht aus diesem Faktor."
      }
    ],
    "disclaimer": "Die lineare Umrechnung erhält Mengenverhältnisse, prüft aber weder Zubereitungstechnik noch Eignung des geänderten Rezepts."
  },
  "es": {
    "longDescription": "Toma la razón entre las raciones que necesitas y las que da la receta y multiplica por ella todas las cantidades. Una línea de receta es un nombre seguido de un solo número, así que «harina de trigo blanca 500» se interpreta bien aunque el nombre lleve espacios. El factor ayuda a valorar la tanda; la capacidad del molde requiere comprobación aparte. Escala todas las cantidades linealmente, sin modelar sabor, fermentación, geometría del molde ni tiempo de horneado.",
    "howItWorks": "Factor = equivalentes deseados ÷ originales; nueva cantidad de línea = original × factor. Ambos números de raciones son positivos y admiten fracciones. El último número es cantidad y el texto previo es nombre; las cantidades no son negativas. La suma solo tiene sentido físico con una unidad común. Con unidades mezcladas, usa cada línea, no la suma como masa o volumen.",
    "example": "837 g para 4 raciones escalados a 6 dan factor 1,5 y 1255,5 g. El objetivo 2,5 equivalentes iguales da 0,625 y 523,125 g. Esas sumas corresponden a una lista completamente en gramos; una cantidad cero permanece cero.",
    "howToUse": [
      "Termina cada línea con una cantidad y conserva la unidad en el nombre o receta original.",
      "Introduce equivalentes originales y deseados positivos.",
      "Comprueba cada fila; usa el total solo con unidades coincidentes.",
      "Revisa tiempo, molde y técnica aparte del escalado lineal."
    ],
    "faq": [
      {
        "q": "¿Importa en qué unidades están los ingredientes?",
        "a": "Cada línea puede conservar su unidad: gramos, ml o piezas. Su suma numérica no es masa o volumen total y solo resulta significativa si las unidades coinciden."
      },
      {
        "q": "¿Se puede escalar una receta hacia abajo?",
        "a": "Sí. Si necesitas menos raciones de las que da la receta, el factor sale menor que uno y todas las cantidades menguan en proporción."
      },
      {
        "q": "¿Por qué la levadura y la sal se escalan igual que la harina?",
        "a": "La fórmula conserva proporciones sin ajustes individuales. Otras dosis deben proceder de la receta o instrucciones del producto; no establece una regla general de reducir sal o levadura."
      },
      {
        "q": "¿Qué hago si me pide 1,5 huevos?",
        "a": "Si la receta permite dividir un huevo, pesa el huevo mezclado y toma la fracción necesaria de masa. Redondear piezas es otra modificación de receta que este modelo no evalúa."
      },
      {
        "q": "¿El tiempo de horneado escala con la cantidad?",
        "a": "No. Se escalan cantidades, no transferencia de calor. Grosor, molde, material, temperatura y composición pueden cambiar la cocción; multiplicar el tiempo no se deduce del factor."
      }
    ],
    "disclaimer": "El escalado lineal conserva proporciones introducidas, pero no valida técnica de preparación ni la receta modificada."
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractContent>;
