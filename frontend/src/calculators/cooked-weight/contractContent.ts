import type { CalculatorCopy } from '../../lib/platform/types';
type ContractContent = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent = {
  "ru": {
    "longDescription": "Переводит массу между исходным сырым или сухим продуктом и готовым по заданному коэффициенту выхода. Крупа может набрать воду, а мясо потерять массу: коэффициент не обязан быть больше единицы. Калорийность нужно брать для того же исходного состояния продукта, которое использовано в первой массе. Надпись на упаковке не всегда относится к сухому продукту. Дополнительный расчёт энергии предполагает, что вся энергия исходного продукта осталась в съеденной готовой партии; добавленное масло и удалённый жир этим допущением не описываются.",
    "howItWorks": "Коэффициент = готовая масса ÷ исходная. Готовая масса = исходная × коэффициент; исходная = готовая ÷ коэффициент. Энергия партии = исходная масса × исходные ккал/100 г ÷ 100; ккал/100 г готового = исходные ккал/100 г ÷ коэффициент. Нужны положительные масса и коэффициент; нулевая калорийность допустима. Вход второй, вычисляемой массы игнорируется.",
    "example": "При исходных 200 г риса, коэффициенте 2,5 и 350 ккал/100 г получаются 500 г готового, 700 ккал всего и 140 ккал/100 г. Для отдельного условного продукта: 130 г готового при коэффициенте 0,65 означают 200 г исходного; при исходных 120 ккал/100 г это 240 ккал и около 184,62 ккал/100 г готового.",
    "howToUse": [
      "Выберите, какая масса известна: исходная или готовая.",
      "Определите коэффициент по взвешиванию одной партии в обоих состояниях.",
      "Сверьте, к какому состоянию относятся ккал на упаковке.",
      "Если добавлялись или удалялись энергетические ингредиенты, считайте их отдельно; простой выход по массе их не учитывает."
    ],
    "faq": [
      {
        "q": "Почему калорийность готового блюда ниже, чем на упаковке?",
        "a": "Если прибавилась только вода и энергия сохранилась, она распределяется на большую массу, поэтому ккал/100 г снижаются. Это условие модели, а не правило для любого способа готовки."
      },
      {
        "q": "Какой коэффициент разварки взять?",
        "a": "Взвесьте исходную и готовую съедобную партию и разделите готовую массу на исходную. Крупа, вода и способ приготовления меняют выход; универсального коэффициента здесь нет."
      },
      {
        "q": "Подходит ли расчёт для мяса?",
        "a": "Для пересчёта массы — да, коэффициент может быть ниже 1. Энергетический пересчёт остаётся условным: при потере жира или сока энергия съеденной партии может измениться."
      },
      {
        "q": "Влияет ли масло или соус?",
        "a": "Да. Добавки и удалённые ингредиенты меняют энергию. Эта формула сохраняет энергию исходного продукта и не определяет такие изменения автоматически."
      },
      {
        "q": "Что делать, если варить дольше обычного?",
        "a": "Повторно измерьте выход партии. Время само по себе не задаёт коэффициент: вода может как впитываться, так и испаряться."
      }
    ],
    "disclaimer": "Выход массы и сохранение энергии — разные допущения. Результат не измеряет состав готового блюда и не задаёт диету."
  },
  "en": {
    "longDescription": "Converts between original raw or dry weight and cooked weight using an entered yield factor. Grains can gain water while meat can lose mass, so the factor need not exceed one. Use nutrition data for the same original state as the starting weight: package figures are not universally for dry food. The energy calculation additionally assumes that all original energy remains in the consumed cooked batch. Added oil or discarded fat are outside that assumption.",
    "howItWorks": "Factor = cooked weight ÷ original weight. Cooked = original × factor; original = cooked ÷ factor. Batch energy = original grams × original kcal/100 g ÷ 100; cooked kcal/100 g = original kcal/100 g ÷ factor. Weight and factor must be positive; zero energy density is allowed. The other, calculated weight is ignored as input.",
    "example": "Original rice 200 g, factor 2.5 and 350 kcal/100 g give 500 g cooked, 700 kcal total and 140 kcal/100 g. A separate illustrative food: 130 g cooked at factor 0.65 means 200 g original; original density 120 kcal/100 g gives 240 kcal and about 184.62 kcal/100 g cooked.",
    "howToUse": [
      "Choose whether original or cooked weight is known.",
      "Measure both states of one batch to establish its yield factor.",
      "Check which product state the nutrition figure describes.",
      "Account separately for energy added or discarded; a mass-yield factor cannot determine it."
    ],
    "faq": [
      {
        "q": "Why are cooked calories lower than the packet says?",
        "a": "If only water was added and energy was retained, the same energy occupies more mass and kcal/100 g falls. That is a model condition, not a rule for every cooking method."
      },
      {
        "q": "Which expansion factor should I use?",
        "a": "Weigh the original and cooked edible batch, then divide cooked by original weight. Grain, water and preparation affect yield; no universal factor is supplied."
      },
      {
        "q": "Does this work for meat?",
        "a": "Yes for weight conversion: a factor below one represents mass loss. The energy estimate remains conditional because discarded fat or juices can alter the energy consumed."
      },
      {
        "q": "Do oil and sauces matter?",
        "a": "Yes. Added and discarded ingredients change energy. This formula retains original energy without identifying those changes automatically."
      },
      {
        "q": "What if I cook it longer than usual?",
        "a": "Measure the batch yield again. Time alone does not determine the factor: water may be absorbed or evaporate."
      }
    ],
    "disclaimer": "Mass yield and conserved energy are separate assumptions. This result does not measure cooked composition or prescribe a diet."
  },
  "uk": {
    "longDescription": "Переводить масу між вихідним сирим або сухим продуктом та готовим за заданим коефіцієнтом виходу. Крупа може набрати воду, а м’ясо втратити масу, тому коефіцієнт не обов’язково більший за одиницю. Калорійність має відповідати тому самому вихідному стану; упаковка не завжди описує сухий продукт. Енергетичний розрахунок додатково припускає збереження всієї енергії у спожитій готовій партії. Додавання олії та видалення жиру цим припущенням не охоплені.",
    "howItWorks": "Коефіцієнт = готова маса ÷ вихідна. Готова = вихідна × коефіцієнт; вихідна = готова ÷ коефіцієнт. Енергія партії = вихідні грами × вихідні ккал/100 г ÷ 100; готові ккал/100 г = вихідні ккал/100 г ÷ коефіцієнт. Маса й коефіцієнт додатні, калорійність може бути нульовою. Друге, обчислюване поле маси ігнорується як вхід.",
    "example": "200 г вихідного рису, коефіцієнт 2,5 та 350 ккал/100 г дають 500 г готового, 700 ккал загалом і 140 ккал/100 г. Окремий умовний продукт: 130 г готового за коефіцієнта 0,65 означають 200 г вихідного; за вихідних 120 ккал/100 г це 240 ккал та близько 184,62 ккал/100 г готового.",
    "howToUse": [
      "Оберіть відому масу: вихідну або готову.",
      "Зважте одну партію до й після готування та знайдіть її коефіцієнт.",
      "Перевірте стан продукту, для якого наведено калорійність.",
      "Енергію добавок або відкинутих складників рахуйте окремо: коефіцієнт маси її не визначає."
    ],
    "faq": [
      {
        "q": "Який коефіцієнт розварювання в різних круп?",
        "a": "Знайдіть коефіцієнт як готову масу, поділену на вихідну, для власної партії. Вид крупи, вода та спосіб готування змінюють вихід; універсального табличного значення тут немає."
      },
      {
        "q": "Чому калорійність готової каші менша?",
        "a": "За додавання лише води й збереження енергії вона розподіляється на більшу масу. Це припущення моделі, а не властивість будь-якої готової страви."
      },
      {
        "q": "Що зважувати для щоденника харчування?",
        "a": "Використовуйте дані складу для того стану, в якому зважили продукт. Для переходу між станами потрібен виміряний вихід; зміни енергії через добавки або втрати враховуйте окремо."
      },
      {
        "q": "Чи стосується це м’яса?",
        "a": "Для маси — так, коефіцієнт може бути нижчим за 1. За втрати жиру чи соку калорійний перерахунок із незмінною енергією буде лише умовним."
      }
    ],
    "disclaimer": "Вихід маси та збереження енергії — різні припущення. Результат не вимірює склад готової страви й не призначає раціон."
  },
  "de": {
    "longDescription": "Rechnet zwischen ursprünglichem rohem oder trockenem Gewicht und gegartem Gewicht mit einem eingegebenen Ausbeutefaktor. Getreide kann Wasser aufnehmen, Fleisch Masse verlieren; der Faktor muss daher nicht größer als eins sein. Nährwertdaten müssen zum ursprünglichen Produktzustand passen. Packungsangaben beziehen sich nicht immer auf trockene Ware. Die Energierechnung setzt zusätzlich voraus, dass alle ursprüngliche Energie in der verzehrten gegarten Menge bleibt. Zugefügtes Öl und verworfenes Fett sind davon nicht erfasst.",
    "howItWorks": "Faktor = gegartes ÷ ursprüngliches Gewicht. Gegart = ursprünglich × Faktor; ursprünglich = gegart ÷ Faktor. Energie = ursprüngliche Gramm × ursprüngliche kcal/100 g ÷ 100; gegarte kcal/100 g = ursprüngliche kcal/100 g ÷ Faktor. Gewicht und Faktor sind positiv, null kcal sind erlaubt. Das berechnete zweite Gewicht wird als Eingabe ignoriert.",
    "example": "200 g ursprünglicher Reis, Faktor 2,5 und 350 kcal/100 g ergeben 500 g gegart, 700 kcal insgesamt und 140 kcal/100 g. Ein anderes Beispielprodukt: 130 g gegart bei Faktor 0,65 bedeuten 200 g ursprünglich; bei ursprünglichen 120 kcal/100 g sind das 240 kcal und etwa 184,62 kcal/100 g gegart.",
    "howToUse": [
      "Bekanntes ursprüngliches oder gegartes Gewicht wählen.",
      "Eine Charge in beiden Zuständen wiegen, um ihren Faktor zu bestimmen.",
      "Produktzustand der Nährwertangabe prüfen.",
      "Hinzugefügte oder verworfene Energie gesondert erfassen; Massenausbeute bestimmt sie nicht."
    ],
    "faq": [
      {
        "q": "Warum sind die Kalorien gekocht niedriger als auf der Packung?",
        "a": "Kommt nur Wasser hinzu und bleibt Energie erhalten, verteilt sie sich auf mehr Masse: kcal/100 g sinken. Das ist eine Modellannahme, keine Regel für jede Zubereitung."
      },
      {
        "q": "Welchen Quellfaktor soll ich nehmen?",
        "a": "Gegarte essbare Masse durch ursprüngliche Masse derselben Charge teilen. Getreide, Wasser und Zubereitung ändern die Ausbeute; es gibt hier keinen allgemeingültigen Faktor."
      },
      {
        "q": "Funktioniert das auch für Fleisch?",
        "a": "Für die Gewichtsumrechnung ja: ein Faktor unter eins beschreibt Massenverlust. Bei verlorenem Fett oder Saft kann sich jedoch auch die verzehrte Energie ändern."
      },
      {
        "q": "Zählen Öl und Soßen mit?",
        "a": "Ja. Zugegebene oder verworfene Zutaten verändern Energie. Die Formel erhält ursprüngliche Energie, ohne diese Änderungen automatisch zu erfassen."
      },
      {
        "q": "Was, wenn ich länger koche als gewöhnlich?",
        "a": "Die Ausbeute erneut messen. Zeit allein bestimmt den Faktor nicht: Wasser kann aufgenommen werden oder verdampfen."
      }
    ],
    "disclaimer": "Massenausbeute und Energieerhaltung sind getrennte Annahmen. Das Ergebnis misst keine gegarte Zusammensetzung und legt keine Ernährung fest."
  },
  "es": {
    "longDescription": "Convierte entre peso original crudo o seco y peso cocinado con un factor de rendimiento introducido. Los cereales pueden ganar agua y la carne perder masa; el factor no tiene que superar uno. La información energética debe corresponder al mismo estado original del alimento. El envase no describe siempre el producto seco. El cálculo energético supone además que toda la energía original permanece en la tanda consumida. Añadir aceite o desechar grasa queda fuera de esa suposición.",
    "howItWorks": "Factor = peso cocinado ÷ original. Cocinado = original × factor; original = cocinado ÷ factor. Energía = gramos originales × kcal originales/100 g ÷ 100; kcal cocinadas/100 g = kcal originales/100 g ÷ factor. Peso y factor positivos; se admite energía cero. El segundo peso calculado se ignora como entrada.",
    "example": "Arroz original 200 g, factor 2,5 y 350 kcal/100 g dan 500 g cocinados, 700 kcal totales y 140 kcal/100 g. Otro alimento ilustrativo: 130 g cocinados con factor 0,65 equivalen a 200 g originales; con 120 kcal/100 g originales dan 240 kcal y unas 184,62 kcal/100 g cocinadas.",
    "howToUse": [
      "Elige si conoces el peso original o el cocinado.",
      "Pesa una misma tanda en ambos estados para obtener su factor.",
      "Comprueba el estado al que corresponde la información nutricional.",
      "Cuenta aparte energía añadida o descartada: el rendimiento de masa no la determina."
    ],
    "faq": [
      {
        "q": "¿Por qué las calorías cocinadas son menores que las del paquete?",
        "a": "Si solo se añade agua y se conserva energía, esta se distribuye en más masa y bajan las kcal/100 g. Es una condición del modelo, no una regla para toda cocción."
      },
      {
        "q": "¿Qué factor de absorción debo usar?",
        "a": "Divide el peso cocinado comestible por el original de la misma tanda. Alimento, agua y preparación cambian el rendimiento; no se ofrece un factor universal."
      },
      {
        "q": "¿Vale para la carne?",
        "a": "Sí para convertir peso: un factor menor que uno representa pérdida de masa. Si se descartan grasa o jugos, también puede cambiar la energía consumida."
      },
      {
        "q": "¿Cuentan el aceite y las salsas?",
        "a": "Sí. Los ingredientes añadidos o descartados modifican energía. Esta fórmula conserva la original sin determinar automáticamente esos cambios."
      },
      {
        "q": "¿Y si lo cocino más tiempo de lo habitual?",
        "a": "Mide de nuevo el rendimiento. El tiempo por sí solo no fija el factor: el agua puede absorberse o evaporarse."
      }
    ],
    "disclaimer": "Rendimiento de masa y conservación de energía son suposiciones distintas. El resultado no mide la composición cocinada ni prescribe una dieta."
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractContent>;
