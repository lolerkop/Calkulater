// Individual subject copy; native human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Приводит цену упаковки к килограмму, литру или штуке и сравнивает две удельные цены. 150 за 0,5 кг —300 за кг, а 260 за 1 кг —260: разница 40 за кг, первая цена примерно на 15,4 % выше второй. Это сравнение цены количества, а не качества товара или общей полезности покупки.",
    "howToUse": [
      "Выберите одну единицу: кг, л или штуки. 500 г перед вводом переводятся в 0,5 кг; автоматической конвертации нет.",
      "В режиме одной упаковки введите положительную цену и количество; для двух переключите режим сравнения.",
      "Обе упаковки сравнивайте в одной выбранной единице и одной валюте, по фактической цене после скидок.",
      "Для штучного товара укажите фактическое количество; сопоставьте также качество, срок хранения и нужный вам объём."
    ],
    "howItWorks": "Удельная цена = цена / количество. При сравнении знак priceA×amountB − priceB×amountA определяет победителя без произвольного допуска «почти равно». Переплата = абсолютная разница удельных цен. Денежное округление относится к показу, поэтому близкие отображаемые цены могут выглядеть одинаково. Сравнение использует десятичные значения цен и количества до округления показа.",
    "example": "150 за 500 г: вводите 0,5 кг и получаете 300 за кг. Упаковка 260 за 1 кг дешевле на 40 за кг; при покупке 2 кг это 80 разницы.",
    "faq": [
      {
        "q": "Зачем приводить цену к единице?",
        "a": "Потому что упаковки редко бывают одинаковыми, и сравнить их «на глаз» нельзя. Приведение к килограмму или литру делает цены сопоставимыми."
      },
      {
        "q": "Что вводить в поле количества?",
        "a": "Количество в тех единицах, которые выбраны выше: для граммов переведите в килограммы, для миллилитров — в литры."
      },
      {
        "q": "Что показывает переплата?",
        "a": "На сколько дороже обходится единица товара в менее выгодной упаковке. Умножив её на нужный объём, вы увидите переплату целиком."
      },
      {
        "q": "Учитываются ли скидки и акции?",
        "a": "Нет, вводите итоговую цену, которую платите на кассе. Скидка уже должна быть в ней учтена."
      }
    ],
    "disclaimer": "Арифметика в одной валюте и одной выбранной единице; обменный курс, качество, доставка и потери продукта не включены."
  },
  "en": {
    "longDescription": "Converts a pack price to a kilogram, litre or piece and compares two unit prices. 150 for 0.5 kg is 300 per kg versus 260 for 1 kg: a 40 difference per kg, with the first about 15.4% higher. It compares price for quantity, not quality or overall purchase value.",
    "howToUse": [
      "Choose one unit: kg, litres or pieces. Convert 500 g to 0.5 kg before entry; no automatic conversion is performed.",
      "Enter a positive price and amount in single mode; switch to comparison for two packs.",
      "Use one selected unit and one currency for both packs, with the actual price after discounts.",
      "For individual items, enter their actual count; also consider quality, shelf life and the quantity you need."
    ],
    "howItWorks": "Unit price = price / amount. The sign of priceA×amountB − priceB×amountA selects the cheaper pack without an arbitrary “almost equal” tolerance. Overpayment is the absolute unit-price difference. Money rounding is for display, so close prices can look identical. Comparison uses decimal price and amount values before display rounding.",
    "example": "150 for 500 g: enter 0.5 kg to get 300 per kg. A 260 pack containing 1 kg is 40 per kg cheaper; buying 2 kg makes an 80 difference.",
    "faq": [
      {
        "q": "Why reduce prices to a unit?",
        "a": "Because packs are rarely the same size and cannot be compared at a glance. Reducing to a kilogram or a litre makes the prices comparable."
      },
      {
        "q": "What goes in the amount field?",
        "a": "The quantity in the unit selected above: convert grams to kilograms and millilitres to litres first."
      },
      {
        "q": "What does the overpayment show?",
        "a": "How much dearer one unit is in the less favourable pack. Multiply it by the quantity you need to see the full overpayment."
      },
      {
        "q": "Are discounts included?",
        "a": "No — enter the final price you pay at the till, with any discount already applied."
      }
    ],
    "disclaimer": "Arithmetic in one currency and one chosen unit. Exchange rates, quality, delivery and product waste are not included."
  },
  "uk": {
    "longDescription": "Перераховує ціну упаковки на кілограм, літр або штуку та порівнює дві питомі ціни. 150 за 0,5 кг дають 300 за кг проти 260 за 1 кг: різниця 40 за кг, перша ціна приблизно на 15,4 % вища. Це порівняння ціни кількості, а не якості чи загальної користі покупки.",
    "howToUse": [
      "Оберіть одну одиницю: кг, л або штуки. 500 г перед введенням переведіть у 0,5 кг; автоматичного перетворення немає.",
      "Для однієї упаковки введіть додатні ціну й кількість; для двох перемкніть режим порівняння.",
      "Обидві упаковки задавайте в одній одиниці й валюті за фактичною ціною після знижок.",
      "Для штучного товару задайте реальну кількість; окремо врахуйте якість, строк зберігання й потрібний обсяг."
    ],
    "howItWorks": "Питома ціна = ціна / кількість. Знак priceA×amountB − priceB×amountA визначає дешевший варіант без довільного допуску «майже однаково». Переплата — модуль різниці питомих цін. Округлення грошей діє лише на показ, тому близькі ціни можуть виглядати однаково. Порівняння використовує десяткові ціни й кількості до округлення показу.",
    "example": "150 за 500 г: введіть 0,5 кг і отримаєте 300 за кг. Упаковка 260 за 1 кг дешевша на 40 за кг; для 2 кг різниця 80.",
    "faq": [
      {
        "q": "Чи завжди велика упаковка вигідніша?",
        "a": "Ні. Порівняйте ціну за однакову кількість, а не лише загальний цінник. Розмір упаковки сам по собі не визначає питому ціну."
      },
      {
        "q": "Що робити з різними одиницями?",
        "a": "Привести до однієї: грами до кілограмів, мілілітри до літрів. Порівнювати ціну за 100 г із ціною за кілограм неможливо без переведення."
      },
      {
        "q": "Чи вказана питома ціна на ціннику?",
        "a": "Часто так, дрібним шрифтом. Але одиниці там бувають різні для схожих товарів, тому перерахунок усе одно корисний."
      },
      {
        "q": "Коли велика упаковка все ж невигідна?",
        "a": "Коли частина товару лишається невикористаною або псується, нижча питома ціна не гарантує менших фактичних витрат. Ці втрати модель не оцінює."
      }
    ],
    "disclaimer": "Арифметика в одній валюті та обраній одиниці. Курс, якість, доставка й втрати товару не включені.",
    "seoDescription": "Порівняйте дві упаковки за десятковою ціною кілограма, літра або штуки в одній валюті, без довільного допуску рівності."
  },
  "de": {
    "longDescription": "Rechnet einen Packungspreis auf Kilogramm, Liter oder Stück um und vergleicht zwei Grundpreise. 1,50 für 0,5 kg ergibt 3,00 je kg gegenüber 2,60 für 1 kg: 0,40 Unterschied je kg, der erste Preis ist rund 15,4 % höher. Verglichen wird der Mengenpreis, nicht Qualität oder gesamter Einkaufsnutzen.",
    "howToUse": [
      "Eine Einheit wählen: kg, Liter oder Stück. 500 g vor der Eingabe in 0,5 kg umrechnen; keine automatische Umrechnung.",
      "Im Einzelmodus einen positiven Preis und Inhalt eingeben; für zwei Packungen den Vergleich wählen.",
      "Beide Packungen in derselben Einheit und Währung mit dem tatsächlichen Preis nach Rabatten angeben.",
      "Für einzelne Artikel die tatsächliche Stückzahl verwenden; Qualität, Haltbarkeit und benötigte Menge separat beachten."
    ],
    "howItWorks": "Grundpreis = Preis / Inhalt. Das Vorzeichen von priceA×amountB − priceB×amountA bestimmt das günstigere Angebot ohne willkürliche „fast gleich“-Toleranz. Mehrpreis = Betrag der Grundpreisdifferenz. Geldrundung betrifft die Anzeige; nahe Preise können gleich aussehen. Verglichen werden dezimale Preise und Mengen vor der Anzeigerundung.",
    "example": "1,50 für 500 g: 0,5 kg eingeben, um 3,00 je kg zu erhalten. 2,60 für 1 kg ist 0,40 je kg günstiger; bei 2 kg beträgt die Differenz 0,80.",
    "faq": [
      {
        "q": "Warum Preise auf eine Einheit bringen?",
        "a": "Weil Packungen selten gleich groß sind und sich nicht auf einen Blick vergleichen lassen. Auf ein Kilogramm oder einen Liter gebracht werden die Preise vergleichbar."
      },
      {
        "q": "Was gehört ins Feld für den Inhalt?",
        "a": "Die Menge in der oben gewählten Einheit: rechne Gramm vorher in Kilogramm und Milliliter in Liter um."
      },
      {
        "q": "Was zeigt der Mehrpreis?",
        "a": "Um wie viel eine Einheit in der ungünstigeren Packung teurer ist. Multipliziere ihn mit der Menge, die du brauchst, um den vollen Mehrpreis zu sehen."
      },
      {
        "q": "Sind Rabatte enthalten?",
        "a": "Nein — trage den Endpreis ein, den du an der Kasse zahlst, mit bereits abgezogenem Rabatt."
      }
    ],
    "disclaimer": "Rechnung in einer Währung und gewählten Einheit. Wechselkurs, Qualität, Lieferung und Verderb sind nicht enthalten."
  },
  "es": {
    "longDescription": "Convierte el precio de un envase a kilogramo, litro o pieza y compara dos precios unitarios. 1,50 por 0,5 kg equivale a 3,00 por kg frente a 2,60 por 1 kg: 0,40 de diferencia por kg, con el primero aproximadamente un 15,4 % mayor. Compara precio por cantidad, no calidad ni utilidad global de la compra.",
    "howToUse": [
      "Elige una unidad: kg, litros o piezas. Convierte 500 g a 0,5 kg antes de introducirlos; no hay conversión automática.",
      "Introduce precio y cantidad positivos en modo individual; cambia a comparación para dos envases.",
      "Usa la misma unidad y moneda en ambos, con el precio real después de descuentos.",
      "Para artículos por pieza, introduce su cantidad real; valora aparte calidad, conservación y cantidad necesaria."
    ],
    "howItWorks": "Precio unitario = precio / cantidad. El signo de priceA×amountB − priceB×amountA determina el más barato sin una tolerancia arbitraria de «casi iguales». Sobrecoste = diferencia absoluta de precios unitarios. El redondeo monetario es de visualización; precios próximos pueden parecer iguales. La comparación usa precios y cantidades decimales antes del redondeo mostrado.",
    "example": "1,50 por 500 g: introduce 0,5 kg para obtener 3,00 por kg. 2,60 por 1 kg es 0,40 por kg más barato; en 2 kg la diferencia es 0,80.",
    "faq": [
      {
        "q": "¿Por qué reducir los precios a una unidad?",
        "a": "Porque los envases rara vez son del mismo tamaño y no pueden compararse de un vistazo. Reducirlos a un kilogramo o un litro hace los precios comparables."
      },
      {
        "q": "¿Qué va en el campo de la cantidad?",
        "a": "La cantidad en la unidad elegida arriba: convierte antes los gramos a kilogramos y los mililitros a litros."
      },
      {
        "q": "¿Qué indica el sobrecoste?",
        "a": "Cuánto más cara sale una unidad en el envase menos favorable. Multiplícalo por la cantidad que necesites para ver el sobrecoste total."
      },
      {
        "q": "¿Se incluyen los descuentos?",
        "a": "No: introduce el precio final que pagas en caja, con el descuento ya aplicado."
      }
    ],
    "disclaimer": "Aritmética en una moneda y una unidad elegida. No incluye cambio de divisa, calidad, transporte ni desperdicio."
  }
};
