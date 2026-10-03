import type { CalculatorCopy } from '../../lib/platform/types';

// Actual 145 native body individually reviewed; scoped model and input corrections. Agent review is not human approval.
export const buildingWave13ContractContent = {
  "ru": {
    "longDescription": "Считает объём одного слоя утепления, число плит и целых упаковок по вашим размерам. Толщина относится к покупаемой плите или выбранному слою, а число плит — к одному покрытию площади. Это расчёт количества: требуемая тепловая защита, влажностный режим и устройство конструкции не определяются.",
    "howItWorks": "V = A·t/1000, t в мм. Плит = ⌈A/a⌉, упаковок = ⌈плиты/k⌉, где a — площадь одной плиты в м², k — целое положительное число плит в упаковке. A, t и a положительны и конечны. Закупка округляется вверх по десятичным значениям размеров без срезания действительного малого остатка; площадь с запасом задаётся вручную.",
    "howToUse": [
      "Введите площадь и толщину одного слоя.",
      "Укажите площадь одной покупаемой плиты в м² и целое число плит в упаковке.",
      "Для нескольких слоёв посчитайте каждый отдельно и сложите количества."
    ],
    "example": "60 м² при слое 100 мм — это 6 м³ утеплителя: 84 плиты по 0,72 м², то есть 14 упаковок по шесть штук.",
    "faq": [
      {
        "q": "Почему число плит округляется вверх?",
        "a": "Закупка в этой модели состоит из целых плит. Любой положительный остаток требует ещё одну; раскрой и повторное использование обрезков модель не планирует."
      },
      {
        "q": "Где взять площадь плиты и число в упаковке?",
        "a": "С этикетки фактически выбранного материала. 0,72 м² соответствует примеру 1200×600 мм; число в упаковке задаётся отдельно."
      },
      {
        "q": "Нужен ли запас на подрезку?",
        "a": "Увеличьте вводимую площадь на выбранный по раскладке запас. Фиксированного процента и отдельного поля запаса здесь нет."
      },
      {
        "q": "Считается ли утепление в два слоя?",
        "a": "Посчитайте каждый слой отдельно с его толщиной и форматом и сложите количества. Суммарная толщина при прежней площади даёт общий объём, но ошибочно оставляет число плит одного слоя."
      }
    ]
  },
  "en": {
    "longDescription": "Calculates volume for one insulation layer and whole slabs and packs from your dimensions. Thickness refers to the purchased slab or chosen layer; slab count covers the area once. This is a quantity calculation, not a thermal-performance, moisture or assembly design.",
    "howItWorks": "V = A·t/1000 with t in mm. Slabs = ⌈A/a⌉; packs = ⌈slabs/k⌉, where a is one slab area in m² and k is a positive integer slabs per pack. A, t and a are positive and finite. Purchase counts round upward using decimal dimension values without deleting a real small remainder; enter any area allowance yourself.",
    "howToUse": [
      "Enter area and thickness for one layer.",
      "Specify one purchased slab area in m² and whole slabs per pack.",
      "Calculate multiple layers separately and add quantities."
    ],
    "example": "60 m² at a 100 mm layer is 6 m³ of insulation: 84 slabs of 0.72 m², which is 14 packs of six.",
    "faq": [
      {
        "q": "Why does the slab count round up?",
        "a": "This model purchases whole slabs. Any positive remainder needs another slab; it does not plan cutting or reuse of offcuts."
      },
      {
        "q": "Where do slab area and pack count come from?",
        "a": "Use the actual product label. The 0.72 m² example corresponds to 1200×600 mm; pack contents are a separate input."
      },
      {
        "q": "How do I include a cutting allowance?",
        "a": "Increase the entered area by the allowance from your layout. No fixed percentage or separate allowance field is provided."
      },
      {
        "q": "Can I calculate two layers?",
        "a": "Calculate each layer with its own thickness and format, then add quantities. Combined thickness over the same area gives total volume but leaves slab count at one layer."
      }
    ],
    "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
  },
  "uk": {
    "longDescription": "Рахує об’єм одного шару утеплення, число плит і цілих упаковок за вашими розмірами. Товщина стосується купованої плити або обраного шару, а число плит — одного покриття площі. Це розрахунок кількості, а не теплового захисту, вологісного режиму чи будови конструкції.",
    "howItWorks": "V = A·t/1000, t у мм. Плит = ⌈A/a⌉, упаковок = ⌈плити/k⌉, де a — площа плити в м², k — додатне ціле число плит в упаковці. A, t і a додатні й скінченні. Закупівля округлюється вгору за десятковими розмірами без відкидання справжнього малого залишку; запас площі задається вручну.",
    "howToUse": [
      "Введіть площу й товщину одного шару.",
      "Задайте площу однієї купованої плити в м² та ціле число плит в упаковці.",
      "Кілька шарів рахуйте окремо й складайте кількості."
    ],
    "example": "60 м² за шару 100 мм — це 6 м³ утеплювача: 84 плити по 0,72 м², тобто 14 упаковок по шість штук.",
    "faq": [
      {
        "q": "Чому число плит округлюється вгору?",
        "a": "Модель закуповує цілі плити. Будь-який додатний залишок потребує ще однієї; розкрій і повторне використання обрізків не плануються."
      },
      {
        "q": "Де взяти площу плити та число в упаковці?",
        "a": "З етикетки фактично обраного матеріалу. Приклад 0,72 м² відповідає 1200×600 мм; число плит в упаковці задається окремо."
      },
      {
        "q": "Як врахувати запас на підрізання?",
        "a": "Збільште введену площу на запас, визначений розкладкою. Фіксованого відсотка й окремого поля запасу тут немає."
      },
      {
        "q": "Як порахувати два шари?",
        "a": "Порахуйте кожен шар з його товщиною та форматом і складіть кількості. Сумарна товщина за тієї самої площі дасть загальний об’єм, але залишить число плит одного шару."
      }
    ],
    "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
  },
  "de": {
    "longDescription": "Berechnet das Volumen einer Dämmlage sowie ganze Platten und Pakete anhand deiner Maße. Die Dicke gehört zur gekauften Platte oder gewählten Lage; die Plattenzahl deckt die Fläche einmal ab. Berechnet werden Mengen, nicht Wärmeschutz, Feuchteverhalten oder Bauteilaufbau.",
    "howItWorks": "V = A·t/1000 mit t in mm. Platten = ⌈A/a⌉; Pakete = ⌈Platten/k⌉, wobei a die Plattenfläche in m² und k eine positive ganze Stückzahl je Paket ist. A, t und a sind positiv und endlich. Ganze Mengen werden anhand dezimaler Maße aufgerundet, ohne einen echten kleinen Rest zu entfernen; Flächenzuschläge gibst du selbst ein.",
    "howToUse": [
      "Gib Fläche und Dicke einer Lage ein.",
      "Trage die Fläche einer gekauften Platte in m² und die ganze Stückzahl je Paket ein.",
      "Berechne mehrere Lagen separat und addiere die Mengen."
    ],
    "example": "60 m² mit einer Schicht von 100 mm sind 6 m³ Dämmstoff: 84 Platten zu 0,72 m², das sind 14 Pakete zu sechs.",
    "faq": [
      {
        "q": "Warum wird die Plattenzahl aufgerundet?",
        "a": "Das Modell kauft ganze Platten. Jeder positive Rest erfordert eine weitere; Zuschnitt und Wiederverwendung von Resten werden nicht geplant."
      },
      {
        "q": "Woher kommen Plattenfläche und Paketinhalt?",
        "a": "Verwende das Etikett des tatsächlichen Produkts. Das Beispiel 0,72 m² entspricht 1200×600 mm; der Paketinhalt ist eine eigene Eingabe."
      },
      {
        "q": "Wie berücksichtige ich Zuschnittreserven?",
        "a": "Erhöhe die eingegebene Fläche um die aus dem Verlegeplan abgeleitete Reserve. Es gibt keinen festen Prozentsatz und kein separates Zuschlagsfeld."
      },
      {
        "q": "Wie berechne ich zwei Lagen?",
        "a": "Berechne jede Lage mit ihrer Dicke und ihrem Format und addiere die Mengen. Die Gesamtdicke bei gleicher Fläche ergibt das Gesamtvolumen, lässt die Plattenzahl aber bei einer Lage."
      }
    ],
    "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
  },
  "es": {
    "longDescription": "Calcula el volumen de una capa y paneles y paquetes completos según tus medidas. El espesor corresponde al panel comprado o a la capa elegida; el número de paneles cubre la superficie una vez. Es un cálculo de cantidades, no de aislamiento térmico, humedad ni diseño constructivo.",
    "howItWorks": "V = A·t/1000 con t en mm. Paneles = ⌈A/a⌉; paquetes = ⌈paneles/k⌉, donde a es el área de un panel en m² y k un entero positivo de paneles por paquete. A, t y a son positivos y finitos. Las compras se redondean hacia arriba con las dimensiones decimales sin eliminar un resto real pequeño; el margen de superficie se introduce manualmente.",
    "howToUse": [
      "Introduce superficie y espesor de una capa.",
      "Indica el área de un panel comprado en m² y el número entero por paquete.",
      "Calcula las capas por separado y suma las cantidades."
    ],
    "example": "60 m² con una capa de 100 mm son 6 m³ de aislamiento: 84 paneles de 0,72 m², es decir, 14 paquetes de seis.",
    "faq": [
      {
        "q": "¿Por qué se redondean los paneles hacia arriba?",
        "a": "El modelo compra paneles completos. Cualquier resto positivo necesita otro panel; no planifica el corte ni la reutilización de recortes."
      },
      {
        "q": "¿De dónde salen el área del panel y las unidades por paquete?",
        "a": "Usa la etiqueta del producto elegido. El ejemplo de 0,72 m² corresponde a 1200×600 mm; el contenido del paquete se introduce aparte."
      },
      {
        "q": "¿Cómo incluyo un margen de corte?",
        "a": "Aumenta la superficie según el margen de tu despiece. No hay un porcentaje fijo ni un campo separado para el margen."
      },
      {
        "q": "¿Cómo calculo dos capas?",
        "a": "Calcula cada capa con su espesor y formato y suma las cantidades. El espesor conjunto con la misma superficie da el volumen total, pero deja el número de paneles en una sola capa."
      }
    ],
    "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es', Partial<CalculatorCopy>>;
