import type { CalculatorCopy } from '../../lib/platform/types';
type ContractContent = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent = {
  "ru": {
    "longDescription": "Переводит пекарские проценты в граммы по заданной общей массе муки. Мука служит базой 100%, поэтому 68% воды означает 68 г воды на 100 г муки, а не 68% массы теста. Эта запись сохраняет пропорции при изменении замеса и позволяет видеть состав отдельно от размера партии. Мука уже учтена в отдельном поле: её повтор в списке добавил бы массу второй раз. Гидратация на странице считает только строки, распознанные как вода; влагу молока, яиц и других продуктов она не определяет.",
    "howItWorks": "Масса строки = общая мука × процент/100; масса теста = мука + все строки. Гидратация = сумма распознанной воды ÷ мука × 100%. В названии распознаются отдельные слова вода, воды, water, Wasser или agua без учёта регистра. Проценты неотрицательны; мука положительна. Для общей гидратации закваску разделяют на её муку и воду, не добавляя их повторно.",
    "example": "500 г муки, вода 68%, соль 2% и дрожжи 1,2% дают 340 + 10 + 6 г добавок, всего 856 г и гидратацию 68%. При строках water 0 и salt 0 масса остаётся 500 г, гидратация равна 0%. Строка Wasser 68 также распознаётся как вода.",
    "howToUse": [
      "Введите общую массу всей муки, включая муку в закваске, если считаете общие проценты.",
      "В каждой строке укажите название и процент от этой массы муки; десятичная точка или запятая допустимы.",
      "Не дублируйте муку в списке добавок. Для воды используйте распознаваемое отдельное слово в названии.",
      "Числовая гидратация не определяет консистенцию: она зависит также от муки и остальных ингредиентов."
    ],
    "faq": [
      {
        "q": "Почему сумма процентов получается больше 100?",
        "a": "Все доли имеют одну базу — массу муки, а не общий вес теста. Мука уже составляет 100%, и вода с остальными добавками увеличивает сумму выше 100%."
      },
      {
        "q": "Что такое гидратация и на что она влияет?",
        "a": "Это отношение учтённой воды к общей муке. Здесь учтены только названные водные строки; вода внутри молока, яиц или масла автоматически не извлекается. Одинаковый процент не гарантирует одинаковую консистенцию."
      },
      {
        "q": "Нужно ли вписывать муку в список ингредиентов?",
        "a": "Нет. Мука внесена отдельным полем и уже включена в итог. Строка муки в списке считалась бы ещё одной добавкой и задублировала её вес."
      },
      {
        "q": "Как учесть закваску, в которой уже есть вода?",
        "a": "Для общего процента добавьте муку закваски к общей муке, а её воду — к водной строке; саму закваску повторно не добавляйте. Если ввести её целиком, гидратация может быть как завышена, так и занижена."
      },
      {
        "q": "Работает ли эта запись для сдобного теста?",
        "a": "Да, массы сахара, масла и яиц можно выразить процентами от муки. Однако водная доля этих продуктов не вычисляется, и полученная гидратация не является полным анализом влажности теста."
      }
    ],
    "disclaimer": "Проценты описывают введённые массы; они не проверяют пригодность рецепта и не предсказывают консистенцию или время брожения."
  },
  "en": {
    "longDescription": "Converts baker’s percentages into grams using the stated total flour weight. Flour is the 100% basis, so 68% water means 68 g of water per 100 g flour, not 68% of total dough mass. The notation keeps proportions while changing batch size and separates composition from quantity. Flour is already included in its own field: listing it again would count it twice. Hydration here counts only rows recognised as water, without determining moisture in milk, eggs or other ingredients.",
    "howItWorks": "Row weight = total flour × percentage/100; dough weight = flour + all rows. Hydration = recognised water ÷ flour × 100%. The standalone word water is recognised without case sensitivity; Russian, Ukrainian, German and Spanish water names are supported too. Percentages must be nonnegative and flour positive. For overall starter hydration, separate its flour and water and count each once.",
    "example": "500 g flour with water 68%, salt 2% and yeast 1.2% gives 340 + 10 + 6 g of additions, 856 g total and 68% hydration. With water 0 and salt 0, total mass stays 500 g and hydration is 0%. Wasser 68 is also recognised as water.",
    "howToUse": [
      "Enter all flour, including starter flour when calculating overall percentages.",
      "End each ingredient line with its percentage of that flour weight; either decimal point or comma is accepted.",
      "Do not list the flour again. Use a recognised standalone word for a water row.",
      "Hydration alone does not determine consistency; flour and the remaining ingredients also matter."
    ],
    "faq": [
      {
        "q": "Why do the percentages add up to more than 100?",
        "a": "Every percentage uses flour weight rather than total dough weight as its denominator. Flour already represents 100%, and water and other additions increase the percentage sum."
      },
      {
        "q": "What is hydration and what does it change?",
        "a": "It is recognised water divided by total flour. Only named water rows are counted: moisture in milk, eggs or butter is not extracted automatically. Equal hydration does not guarantee equal dough consistency."
      },
      {
        "q": "Should flour go in the ingredient list?",
        "a": "No. The separate flour field is already part of the total. Listing flour as an addition would duplicate its weight."
      },
      {
        "q": "How do I account for a starter that already contains water?",
        "a": "For overall percentages, add the starter’s flour to total flour and its water to a recognised water row; do not add the whole starter again. Counting it only as one ingredient can overstate or understate hydration."
      },
      {
        "q": "Does this notation work for enriched dough?",
        "a": "Yes: sugar, butter and eggs can all be expressed relative to flour. Their internal water content is not calculated, so the displayed hydration is not a complete moisture analysis."
      }
    ],
    "disclaimer": "Percentages describe the entered masses; they do not validate a recipe or predict consistency or fermentation time."
  },
  "uk": {
    "longDescription": "Переводить пекарські відсотки в грами за заданою загальною масою борошна. Борошно є базою 100%, тому 68% води означає 68 г на 100 г борошна, а не 68% маси тіста. Запис зберігає пропорції за зміни розміру замісу. Борошно вже враховане окремим полем: його повтор у списку подвоїв би цю масу. Гідратація тут рахує лише рядки, розпізнані як вода, без визначення вологи молока, яєць чи інших продуктів.",
    "howItWorks": "Маса рядка = загальне борошно × відсоток/100; маса тіста = борошно + всі рядки. Гідратація = розпізнана вода ÷ борошно × 100%. Окремі слова вода, water, Wasser та agua розпізнаються без урахування регістру. Відсотки невід’ємні, борошно додатне. Для загальних відсотків закваски її борошно й воду враховують окремо один раз.",
    "example": "500 г борошна, вода 68%, сіль 2% та дріжджі 1,2% дають 340 + 10 + 6 г добавок, разом 856 г і гідратацію 68%. За water 0 та salt 0 маса лишається 500 г, гідратація 0%. Рядок Wasser 68 також розпізнається як вода.",
    "howToUse": [
      "Введіть усе борошно, включно з борошном закваски для загальних відсотків.",
      "Закінчуйте кожен рядок відсотком від борошна; десяткова крапка й кома допустимі.",
      "Не дублюйте борошно в добавках. Для води використовуйте розпізнаване окреме слово.",
      "Гідратація не гарантує консистенції: значення мають і борошно, й інші складники."
    ],
    "faq": [
      {
        "q": "Чому сума відсотків більша за сто?",
        "a": "Бо база — маса борошна, а не всього тіста. Саме борошно вже становить 100%; вода й інші додатки збільшують суму понад сто."
      },
      {
        "q": "Що таке гідратація?",
        "a": "Це маса врахованої води відносно всього борошна. Тут не виділяється автоматично вода молока чи яєць. Борошно та склад тіста також впливають на його поведінку."
      },
      {
        "q": "Скільки має бути солі?",
        "a": "Внесіть відсоток зі свого рецепта, а не універсальну норму. Наприклад, задані 2% від 500 г борошна означають 10 г солі; калькулятор не призначає цей відсоток."
      },
      {
        "q": "Навіщо взагалі відсотки, якщо є грами?",
        "a": "Відсотки зберігають співвідношення за зміни замісу. Подвоєння борошна за тих самих відсотків подвоює маси всіх рядків. Для закваски спершу розділіть її борошно та воду, щоб не спотворити базу."
      }
    ],
    "disclaimer": "Відсотки описують введені маси, але не перевіряють рецепт і не прогнозують консистенцію або тривалість бродіння."
  },
  "de": {
    "longDescription": "Rechnet Bäckerprozente anhand des gesamten Mehlgewichts in Gramm um. Mehl ist die 100%-Bezugsgröße: 68% Wasser bedeutet 68 g Wasser je 100 g Mehl, nicht 68% des Teiggewichts. So bleiben die Verhältnisse beim Ändern der Teigmenge erhalten. Mehl steht bereits im eigenen Feld; ein weiterer Mehleintrag würde es doppelt zählen. Die Hydratation zählt hier nur erkannte Wasserzeilen, ohne den Wassergehalt von Milch, Eiern oder anderen Zutaten zu bestimmen.",
    "howItWorks": "Zeilengewicht = Gesamtmehl × Prozent/100; Teiggewicht = Mehl + alle Zeilen. Hydratation = erkanntes Wasser ÷ Mehl × 100%. Einzelne Wörter water oder Wasser werden unabhängig von Großschreibung erkannt; entsprechende russische, ukrainische und spanische Namen werden ebenfalls unterstützt. Prozente sind nichtnegativ, Mehl positiv. Für Gesamtprozente wird Sauerteig in Mehl und Wasser zerlegt und jeweils einmal erfasst.",
    "example": "500 g Mehl mit Wasser 68%, Salz 2% und Hefe 1,2% ergeben 340 + 10 + 6 g Zugaben, insgesamt 856 g und 68% Hydratation. Bei water 0 und salt 0 bleiben 500 g und 0% Hydratation. Auch Wasser 68 wird erkannt.",
    "howToUse": [
      "Gesamtes Mehl eintragen, bei Gesamtprozenten einschließlich Sauerteigmehl.",
      "Jede Zeile mit dem Prozentanteil am Mehl beenden; Dezimalpunkt oder Komma sind möglich.",
      "Mehl nicht nochmals als Zutat aufführen. Ein erkanntes einzelnes Wort für Wasser verwenden.",
      "Hydratation allein bestimmt keine Teigkonsistenz; Mehl und weitere Zutaten wirken ebenfalls."
    ],
    "faq": [
      {
        "q": "Warum ergeben die Prozentwerte zusammen mehr als 100?",
        "a": "Alle Anteile beziehen sich auf Mehlgewicht statt Gesamtteiggewicht. Das Mehl beträgt bereits 100%; Wasser und andere Zugaben erhöhen die Summe."
      },
      {
        "q": "Was ist die Hydratation und was ändert sie?",
        "a": "Erkannte Wassermasse geteilt durch Gesamtmehl. Wasser in Milch, Eiern oder Butter wird nicht automatisch herausgerechnet. Gleiche Hydratation garantiert keine gleiche Konsistenz."
      },
      {
        "q": "Gehört das Mehl in die Zutatenliste?",
        "a": "Nein. Das Mehlfeld ist bereits Teil der Summe. Eine weitere Mehlzeile würde als Zugabe gezählt und das Mehlgewicht doppelt erfassen."
      },
      {
        "q": "Wie berücksichtige ich einen Sauerteig, der schon Wasser enthält?",
        "a": "Für Gesamtprozente Sauerteigmehl zum Gesamtmehl und Sauerteigwasser zur Wasserzeile addieren, den ganzen Sauerteig aber nicht erneut eintragen. Ein einziger Sammelposten kann die Hydratation über- oder unterschätzen."
      },
      {
        "q": "Gilt diese Schreibweise auch für süße Teige?",
        "a": "Ja, Zucker, Butter und Eier lassen sich auf Mehl beziehen. Ihr Wasseranteil wird jedoch nicht berechnet; die Hydratation ist keine vollständige Feuchtigkeitsanalyse."
      }
    ],
    "disclaimer": "Die Prozente beschreiben Eingabemassen, bestätigen aber weder die Eignung des Rezepts noch Konsistenz oder Gärzeit."
  },
  "es": {
    "longDescription": "Convierte porcentajes de panadero en gramos según el peso total de harina indicado. La harina es la base del 100%: 68% de agua significa 68 g por 100 g de harina, no 68% del peso de la masa. La notación conserva proporciones al cambiar el tamaño de la tanda. La harina ya figura en su campo; añadirla otra vez la contaría dos veces. La hidratación solo cuenta líneas reconocidas como agua, sin determinar la humedad de leche, huevos u otros ingredientes.",
    "howItWorks": "Peso de línea = harina total × porcentaje/100; peso de masa = harina + todas las líneas. Hidratación = agua reconocida ÷ harina × 100%. Se reconocen palabras independientes water o agua sin distinguir mayúsculas; también se admiten los nombres rusos, ucranianos y alemanes correspondientes. Porcentajes no negativos y harina positiva. Para porcentajes totales de masa madre, separa su harina y agua y cuenta cada una una sola vez.",
    "example": "500 g de harina, agua 68%, sal 2% y levadura 1,2% dan 340 + 10 + 6 g añadidos, 856 g en total y 68% de hidratación. Con water 0 y salt 0 quedan 500 g y 0%. También se reconoce agua 68.",
    "howToUse": [
      "Introduce toda la harina, incluida la de la masa madre al calcular porcentajes totales.",
      "Termina cada línea con su porcentaje respecto a harina; se admite punto o coma decimal.",
      "No repitas la harina en la lista. Usa una palabra reconocida para una línea de agua.",
      "La hidratación por sí sola no determina consistencia: también influyen harina y demás ingredientes."
    ],
    "faq": [
      {
        "q": "¿Por qué los porcentajes suman más de 100?",
        "a": "Todos los porcentajes toman como denominador la harina, no la masa total. La harina ya suma 100%; el agua y las demás adiciones aumentan la suma."
      },
      {
        "q": "¿Qué es la hidratación y qué cambia?",
        "a": "Es agua reconocida dividida entre harina total. No se extrae automáticamente el agua de leche, huevos o mantequilla. Una hidratación igual no garantiza consistencia igual."
      },
      {
        "q": "¿La harina va en la lista de ingredientes?",
        "a": "No. El campo de harina ya entra en el total. Repetirla como ingrediente duplicaría su peso."
      },
      {
        "q": "¿Cómo tengo en cuenta una masa madre que ya lleva agua?",
        "a": "Para porcentajes totales añade la harina de la masa madre a harina total y su agua a una línea de agua; no vuelvas a añadir la masa madre completa. Contarla solo como una entrada puede aumentar o reducir indebidamente la hidratación."
      },
      {
        "q": "¿Esta notación vale para masas enriquecidas?",
        "a": "Sí: azúcar, mantequilla y huevos se expresan respecto a harina. No se calcula su agua interna, por lo que la hidratación no es un análisis completo de humedad."
      }
    ],
    "disclaimer": "Los porcentajes describen masas introducidas; no validan la receta ni predicen consistencia o tiempo de fermentación."
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractContent>;
