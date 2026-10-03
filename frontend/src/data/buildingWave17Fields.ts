import type{Field}from '../lib/types';
type Note=Omit<Partial<Field>,'max'>&{max?:number|null};
const notes:Record<string,Record<string,Record<string,Note>>>={
  "ru": {
    "tile-calculator": {
      "length": {
        "label": "Длина комнаты",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "width": {
        "label": "Ширина комнаты",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "manualArea": {
        "label": "Известная площадь",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "tileLength": {
        "label": "Длина плитки",
        "unit": "см",
        "min": 0,
        "max": null
      },
      "tileWidth": {
        "label": "Ширина плитки",
        "unit": "см",
        "min": 0,
        "max": null
      },
      "packArea": {
        "label": "Площадь упаковки",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "reserve": {
        "label": "Запас",
        "unit": "%",
        "min": 0,
        "max": null,
        "help": "Выбранный неотрицательный процент; универсальная норма не устанавливается. Пустое поле означает 0.",
        "optional": true
      },
      "glueConsumption": {
        "label": "Введённый расход клея",
        "unit": "кг/м²",
        "min": 0,
        "max": null,
        "help": "Расход конкретного клея в кг/м². Пустое поле использует 5; запас увеличивает и оценку клея.",
        "optional": true
      },
      "packPrice": {
        "label": "Цена упаковки",
        "unit": "₽",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Цена в RUB; обмена валют нет. Пустое поле или 0 скрывает стоимость."
      }
    },
    "wallpaper-calculator": {
      "length": {
        "label": "Длина комнаты",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "width": {
        "label": "Ширина комнаты",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "height": {
        "label": "Высота стен",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "rollWidth": {
        "label": "Ширина рулона",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "rollLength": {
        "label": "Длина рулона",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "windows": {
        "label": "Количество окон",
        "unit": "шт.",
        "min": 0,
        "max": 9007199254740991,
        "step": 1,
        "help": "Целое количество; модель вычитает фиксированные 1,5 м² на окно. Реальные размеры не вводятся."
      },
      "doors": {
        "label": "Количество дверей",
        "unit": "шт.",
        "min": 0,
        "max": 9007199254740991,
        "step": 1,
        "help": "Целое количество; модель вычитает фиксированные 1,8 м² на дверь. Реальные размеры не вводятся."
      },
      "pattern": {
        "label": "Вертикальный раппорт",
        "unit": "см",
        "min": 0,
        "max": null,
        "help": "Вертикальный раппорт в см; пустое поле или 0 — без рисунка. Смещённый рисунок и подрезка отдельно не учитываются.",
        "optional": true
      },
      "rollPrice": {
        "label": "Цена рулона",
        "unit": "₽",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Цена в RUB; обмена валют нет. Пустое поле или 0 скрывает стоимость."
      }
    },
    "paint-calculator": {
      "area": {
        "label": "Площадь окрашивания",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "length": {
        "label": "Длина комнаты",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "width": {
        "label": "Ширина комнаты",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "height": {
        "label": "Высота стен",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "windows": {
        "label": "Количество окон",
        "unit": "шт.",
        "min": 0,
        "max": 9007199254740991,
        "step": 1,
        "help": "Целое количество; модель вычитает фиксированные 1,5 м² на окно. Реальные размеры не вводятся."
      },
      "doors": {
        "label": "Количество дверей",
        "unit": "шт.",
        "min": 0,
        "max": 9007199254740991,
        "step": 1,
        "help": "Целое количество; модель вычитает фиксированные 1,8 м² на дверь. Реальные размеры не вводятся."
      },
      "coats": {
        "label": "Количество слоёв",
        "unit": "слоёв",
        "min": 1,
        "max": 9007199254740991,
        "step": 1,
        "help": "Положительное целое число слоёв по инструкции выбранной краски; дробь не округляется."
      },
      "consumption": {
        "label": "Расход на один слой",
        "unit": "л/м²",
        "min": 0,
        "max": null,
        "help": "Литры на м² для одного слоя. Если этикетка даёт м²/л, введите обратное значение."
      },
      "canVolume": {
        "label": "Объём банки",
        "unit": "л",
        "min": 0,
        "max": null
      },
      "reserve": {
        "label": "Запас",
        "unit": "%",
        "min": 0,
        "max": null,
        "help": "Выбранный неотрицательный процент; универсальная норма не устанавливается. Пустое поле означает 0.",
        "optional": true
      },
      "canPrice": {
        "label": "Цена банки",
        "unit": "₽",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Цена в RUB; обмена валют нет. Пустое поле или 0 скрывает стоимость."
      }
    },
    "laminate-calculator": {
      "length": {
        "label": "Длина комнаты",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "width": {
        "label": "Ширина комнаты",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "packArea": {
        "label": "Площадь упаковки",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "reserve": {
        "label": "Запас",
        "unit": "%",
        "min": 0,
        "max": null,
        "help": "Выбранный неотрицательный процент; универсальная норма не устанавливается. Пустое поле означает 0.",
        "optional": true
      },
      "packPrice": {
        "label": "Цена упаковки",
        "unit": "₽",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Цена в RUB, без обмена валют. Пустое поле или 0 задаёт нулевую стоимость этого компонента."
      },
      "underlayPrice": {
        "label": "Цена подложки на площадь",
        "unit": "₽/м²",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Цена в RUB, без обмена валют. Пустое поле или 0 задаёт нулевую стоимость этого компонента."
      }
    },
    "screed-calculator": {
      "length": {
        "label": "Длина комнаты",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "width": {
        "label": "Ширина комнаты",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "manualArea": {
        "label": "Известная площадь",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "thickness": {
        "label": "Средняя толщина слоя",
        "unit": "см",
        "min": 0,
        "max": null
      },
      "mixConsumption": {
        "label": "Расход сухой смеси на 1 см",
        "unit": "кг/(м²·см)",
        "min": 0,
        "max": null,
        "help": "Единица кг/(м²·см): норму на 1 мм умножьте на 10. Пустое поле использует 18; 0 даёт 0 смеси и мешков.",
        "optional": true
      },
      "bagWeight": {
        "label": "Масса мешка",
        "unit": "кг",
        "min": 0,
        "max": null,
        "optional": true
      },
      "reserve": {
        "label": "Запас",
        "unit": "%",
        "min": 0,
        "max": null,
        "help": "Выбранный неотрицательный процент; универсальная норма не устанавливается. Пустое поле означает 0.",
        "optional": true
      },
      "bagPrice": {
        "label": "Цена мешка",
        "unit": "₽",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Цена в RUB; обмена валют нет. Пустое поле или 0 скрывает стоимость."
      }
    },
    "brick-calculator": {
      "wallLength": {
        "label": "Длина стены",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "wallHeight": {
        "label": "Высота стены",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "manualArea": {
        "label": "Известная площадь",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "openingsArea": {
        "label": "Общая площадь проёмов",
        "unit": "m²",
        "min": 0,
        "max": null,
        "optional": true
      },
      "unitLength": {
        "label": "Длина камня",
        "unit": "мм",
        "min": 0,
        "max": null
      },
      "unitHeight": {
        "label": "Высота камня",
        "unit": "мм",
        "min": 0,
        "max": null
      },
      "joint": {
        "label": "Толщина шва",
        "unit": "мм",
        "min": 0,
        "max": null,
        "optional": true
      },
      "reserve": {
        "label": "Запас",
        "unit": "%",
        "min": 0,
        "max": null,
        "help": "Выбранный неотрицательный процент; универсальная норма не устанавливается. Пустое поле означает 0.",
        "optional": true
      },
      "unitPrice": {
        "label": "Цена камня",
        "unit": "₽",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Цена в RUB; обмена валют нет. Пустое поле или 0 скрывает стоимость."
      }
    }
  },
  "en": {
    "tile-calculator": {
      "length": {
        "label": "Room length",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "width": {
        "label": "Room width",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "manualArea": {
        "label": "Known area",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "tileLength": {
        "label": "Tile length",
        "unit": "cm",
        "min": 0,
        "max": null
      },
      "tileWidth": {
        "label": "Tile width",
        "unit": "cm",
        "min": 0,
        "max": null
      },
      "packArea": {
        "label": "Pack area",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "reserve": {
        "label": "Reserve",
        "unit": "%",
        "min": 0,
        "max": null,
        "help": "Chosen non-negative percentage; no universal rate is prescribed. Blank means 0.",
        "optional": true
      },
      "glueConsumption": {
        "label": "Entered adhesive rate",
        "unit": "kg/m²",
        "min": 0,
        "max": null,
        "help": "Product-specific kg/m² rate. Blank uses 5; reserve also increases the adhesive estimate.",
        "optional": true
      },
      "packPrice": {
        "label": "Price per pack",
        "unit": "RUB",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Price in RUB; no currency exchange. Blank or 0 hides cost."
      }
    },
    "wallpaper-calculator": {
      "length": {
        "label": "Room length",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "width": {
        "label": "Room width",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "height": {
        "label": "Wall height",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "rollWidth": {
        "label": "Roll width",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "rollLength": {
        "label": "Roll length",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "windows": {
        "label": "Window count",
        "unit": "items",
        "min": 0,
        "max": 9007199254740991,
        "step": 1,
        "help": "Whole count; the model subtracts a fixed 1.5 m² per window. Actual sizes are not entered."
      },
      "doors": {
        "label": "Door count",
        "unit": "items",
        "min": 0,
        "max": 9007199254740991,
        "step": 1,
        "help": "Whole count; the model subtracts a fixed 1.8 m² per door. Actual sizes are not entered."
      },
      "pattern": {
        "label": "Vertical repeat",
        "unit": "cm",
        "min": 0,
        "max": null,
        "help": "Vertical repeat in cm; blank or 0 means no repeat. Half-drop matching and trimming are not added.",
        "optional": true
      },
      "rollPrice": {
        "label": "Price per roll",
        "unit": "RUB",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Price in RUB; no currency exchange. Blank or 0 hides cost."
      }
    },
    "paint-calculator": {
      "area": {
        "label": "Paintable area",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "length": {
        "label": "Room length",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "width": {
        "label": "Room width",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "height": {
        "label": "Wall height",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "windows": {
        "label": "Window count",
        "unit": "items",
        "min": 0,
        "max": 9007199254740991,
        "step": 1,
        "help": "Whole count; the model subtracts a fixed 1.5 m² per window. Actual sizes are not entered."
      },
      "doors": {
        "label": "Door count",
        "unit": "items",
        "min": 0,
        "max": 9007199254740991,
        "step": 1,
        "help": "Whole count; the model subtracts a fixed 1.8 m² per door. Actual sizes are not entered."
      },
      "coats": {
        "label": "Coat count",
        "unit": "coats",
        "min": 1,
        "max": 9007199254740991,
        "step": 1,
        "help": "A positive whole number of coats from the chosen paint instructions; fractions are not rounded."
      },
      "consumption": {
        "label": "Consumption per coat",
        "unit": "L/m²",
        "min": 0,
        "max": null,
        "help": "Litres per m² for one coat. If the label states m²/L, enter its reciprocal."
      },
      "canVolume": {
        "label": "Can volume",
        "unit": "L",
        "min": 0,
        "max": null
      },
      "reserve": {
        "label": "Reserve",
        "unit": "%",
        "min": 0,
        "max": null,
        "help": "Chosen non-negative percentage; no universal rate is prescribed. Blank means 0.",
        "optional": true
      },
      "canPrice": {
        "label": "Price per can",
        "unit": "RUB",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Price in RUB; no currency exchange. Blank or 0 hides cost."
      }
    },
    "laminate-calculator": {
      "length": {
        "label": "Room length",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "width": {
        "label": "Room width",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "packArea": {
        "label": "Pack area",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "reserve": {
        "label": "Reserve",
        "unit": "%",
        "min": 0,
        "max": null,
        "help": "Chosen non-negative percentage; no universal rate is prescribed. Blank means 0.",
        "optional": true
      },
      "packPrice": {
        "label": "Price per pack",
        "unit": "RUB",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Price in RUB, with no currency exchange. Blank or 0 gives this component zero cost."
      },
      "underlayPrice": {
        "label": "Underlay price per area",
        "unit": "RUB/m²",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Price in RUB, with no currency exchange. Blank or 0 gives this component zero cost."
      }
    },
    "screed-calculator": {
      "length": {
        "label": "Room length",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "width": {
        "label": "Room width",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "manualArea": {
        "label": "Known area",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "thickness": {
        "label": "Mean layer thickness",
        "unit": "cm",
        "min": 0,
        "max": null
      },
      "mixConsumption": {
        "label": "Dry-mix rate per 1 cm",
        "unit": "kg/(m²·cm)",
        "min": 0,
        "max": null,
        "help": "Unit kg/(m²·cm): multiply a per-mm rate by 10. Blank uses 18; 0 yields 0 mix and bags.",
        "optional": true
      },
      "bagWeight": {
        "label": "Bag mass",
        "unit": "kg",
        "min": 0,
        "max": null,
        "optional": true
      },
      "reserve": {
        "label": "Reserve",
        "unit": "%",
        "min": 0,
        "max": null,
        "help": "Chosen non-negative percentage; no universal rate is prescribed. Blank means 0.",
        "optional": true
      },
      "bagPrice": {
        "label": "Price per bag",
        "unit": "RUB",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Price in RUB; no currency exchange. Blank or 0 hides cost."
      }
    },
    "brick-calculator": {
      "wallLength": {
        "label": "Wall length",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "wallHeight": {
        "label": "Wall height",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "manualArea": {
        "label": "Known area",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "openingsArea": {
        "label": "Total opening area",
        "unit": "m²",
        "min": 0,
        "max": null,
        "optional": true
      },
      "unitLength": {
        "label": "Unit length",
        "unit": "mm",
        "min": 0,
        "max": null
      },
      "unitHeight": {
        "label": "Unit height",
        "unit": "mm",
        "min": 0,
        "max": null
      },
      "joint": {
        "label": "Joint thickness",
        "unit": "mm",
        "min": 0,
        "max": null,
        "optional": true
      },
      "reserve": {
        "label": "Reserve",
        "unit": "%",
        "min": 0,
        "max": null,
        "help": "Chosen non-negative percentage; no universal rate is prescribed. Blank means 0.",
        "optional": true
      },
      "unitPrice": {
        "label": "Price per unit",
        "unit": "RUB",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Price in RUB; no currency exchange. Blank or 0 hides cost."
      }
    }
  },
  "uk": {
    "tile-calculator": {
      "length": {
        "label": "Довжина кімнати",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "width": {
        "label": "Ширина кімнати",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "manualArea": {
        "label": "Відома площа",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "tileLength": {
        "label": "Довжина плитки",
        "unit": "см",
        "min": 0,
        "max": null
      },
      "tileWidth": {
        "label": "Ширина плитки",
        "unit": "см",
        "min": 0,
        "max": null
      },
      "packArea": {
        "label": "Площа упаковки",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "reserve": {
        "label": "Запас",
        "unit": "%",
        "min": 0,
        "max": null,
        "help": "Обраний невід’ємний відсоток; універсальна норма не встановлюється. Порожнє поле означає 0.",
        "optional": true
      },
      "glueConsumption": {
        "label": "Введена витрата клею",
        "unit": "кг/м²",
        "min": 0,
        "max": null,
        "help": "Витрата конкретного клею в кг/м². Порожнє поле використовує 5; запас збільшує й оцінку клею.",
        "optional": true
      },
      "packPrice": {
        "label": "Ціна упаковки",
        "unit": "RUB",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Ціна в RUB; обміну валют немає. Порожнє поле або 0 приховує вартість."
      }
    },
    "wallpaper-calculator": {
      "length": {
        "label": "Довжина кімнати",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "width": {
        "label": "Ширина кімнати",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "height": {
        "label": "Висота стін",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "rollWidth": {
        "label": "Ширина рулону",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "rollLength": {
        "label": "Довжина рулону",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "windows": {
        "label": "Кількість вікон",
        "unit": "шт.",
        "min": 0,
        "max": 9007199254740991,
        "step": 1,
        "help": "Ціла кількість; модель віднімає фіксовані 1,5 м² на вікно. Справжні розміри не вводяться."
      },
      "doors": {
        "label": "Кількість дверей",
        "unit": "шт.",
        "min": 0,
        "max": 9007199254740991,
        "step": 1,
        "help": "Ціла кількість; модель віднімає фіксовані 1,8 м² на двері. Справжні розміри не вводяться."
      },
      "pattern": {
        "label": "Вертикальний рапорт",
        "unit": "см",
        "min": 0,
        "max": null,
        "help": "Вертикальний рапорт у см; порожнє поле або 0 — без рисунка. Зміщений рисунок і підрізання окремо не враховуються.",
        "optional": true
      },
      "rollPrice": {
        "label": "Ціна рулону",
        "unit": "RUB",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Ціна в RUB; обміну валют немає. Порожнє поле або 0 приховує вартість."
      }
    },
    "paint-calculator": {
      "area": {
        "label": "Площа фарбування",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "length": {
        "label": "Довжина кімнати",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "width": {
        "label": "Ширина кімнати",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "height": {
        "label": "Висота стін",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "windows": {
        "label": "Кількість вікон",
        "unit": "шт.",
        "min": 0,
        "max": 9007199254740991,
        "step": 1,
        "help": "Ціла кількість; модель віднімає фіксовані 1,5 м² на вікно. Справжні розміри не вводяться."
      },
      "doors": {
        "label": "Кількість дверей",
        "unit": "шт.",
        "min": 0,
        "max": 9007199254740991,
        "step": 1,
        "help": "Ціла кількість; модель віднімає фіксовані 1,8 м² на двері. Справжні розміри не вводяться."
      },
      "coats": {
        "label": "Кількість шарів",
        "unit": "шарів",
        "min": 1,
        "max": 9007199254740991,
        "step": 1,
        "help": "Додатна ціла кількість шарів за інструкцією обраної фарби; дріб не округлюється."
      },
      "consumption": {
        "label": "Витрата на один шар",
        "unit": "л/м²",
        "min": 0,
        "max": null,
        "help": "Літри на м² для одного шару. Якщо етикетка дає м²/л, введіть обернене значення."
      },
      "canVolume": {
        "label": "Об’єм банки",
        "unit": "л",
        "min": 0,
        "max": null
      },
      "reserve": {
        "label": "Запас",
        "unit": "%",
        "min": 0,
        "max": null,
        "help": "Обраний невід’ємний відсоток; універсальна норма не встановлюється. Порожнє поле означає 0.",
        "optional": true
      },
      "canPrice": {
        "label": "Ціна банки",
        "unit": "RUB",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Ціна в RUB; обміну валют немає. Порожнє поле або 0 приховує вартість."
      }
    },
    "laminate-calculator": {
      "length": {
        "label": "Довжина кімнати",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "width": {
        "label": "Ширина кімнати",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "packArea": {
        "label": "Площа упаковки",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "reserve": {
        "label": "Запас",
        "unit": "%",
        "min": 0,
        "max": null,
        "help": "Обраний невід’ємний відсоток; універсальна норма не встановлюється. Порожнє поле означає 0.",
        "optional": true
      },
      "packPrice": {
        "label": "Ціна упаковки",
        "unit": "RUB",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Ціна в RUB, без обміну валют. Порожнє поле або 0 задає нульову вартість цього компонента."
      },
      "underlayPrice": {
        "label": "Ціна підкладки за площу",
        "unit": "RUB/m²",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Ціна в RUB, без обміну валют. Порожнє поле або 0 задає нульову вартість цього компонента."
      }
    },
    "screed-calculator": {
      "length": {
        "label": "Довжина кімнати",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "width": {
        "label": "Ширина кімнати",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "manualArea": {
        "label": "Відома площа",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "thickness": {
        "label": "Середня товщина шару",
        "unit": "см",
        "min": 0,
        "max": null
      },
      "mixConsumption": {
        "label": "Витрата сухої суміші на 1 см",
        "unit": "кг/(м²·см)",
        "min": 0,
        "max": null,
        "help": "Одиниця кг/(м²·см): норму на 1 мм помножте на 10. Порожнє поле використовує 18; 0 дає 0 суміші та мішків.",
        "optional": true
      },
      "bagWeight": {
        "label": "Маса мішка",
        "unit": "кг",
        "min": 0,
        "max": null,
        "optional": true
      },
      "reserve": {
        "label": "Запас",
        "unit": "%",
        "min": 0,
        "max": null,
        "help": "Обраний невід’ємний відсоток; універсальна норма не встановлюється. Порожнє поле означає 0.",
        "optional": true
      },
      "bagPrice": {
        "label": "Ціна мішка",
        "unit": "RUB",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Ціна в RUB; обміну валют немає. Порожнє поле або 0 приховує вартість."
      }
    },
    "brick-calculator": {
      "wallLength": {
        "label": "Довжина стіни",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "wallHeight": {
        "label": "Висота стіни",
        "unit": "м",
        "min": 0,
        "max": null
      },
      "manualArea": {
        "label": "Відома площа",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "openingsArea": {
        "label": "Загальна площа прорізів",
        "unit": "m²",
        "min": 0,
        "max": null,
        "optional": true
      },
      "unitLength": {
        "label": "Довжина каменя",
        "unit": "мм",
        "min": 0,
        "max": null
      },
      "unitHeight": {
        "label": "Висота каменя",
        "unit": "мм",
        "min": 0,
        "max": null
      },
      "joint": {
        "label": "Товщина шва",
        "unit": "мм",
        "min": 0,
        "max": null,
        "optional": true
      },
      "reserve": {
        "label": "Запас",
        "unit": "%",
        "min": 0,
        "max": null,
        "help": "Обраний невід’ємний відсоток; універсальна норма не встановлюється. Порожнє поле означає 0.",
        "optional": true
      },
      "unitPrice": {
        "label": "Ціна каменя",
        "unit": "RUB",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Ціна в RUB; обміну валют немає. Порожнє поле або 0 приховує вартість."
      }
    }
  },
  "de": {
    "tile-calculator": {
      "length": {
        "label": "Raumlänge",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "width": {
        "label": "Raumbreite",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "manualArea": {
        "label": "Bekannte Fläche",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "tileLength": {
        "label": "Fliesenlänge",
        "unit": "cm",
        "min": 0,
        "max": null
      },
      "tileWidth": {
        "label": "Fliesenbreite",
        "unit": "cm",
        "min": 0,
        "max": null
      },
      "packArea": {
        "label": "Paketfläche",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "reserve": {
        "label": "Reserve",
        "unit": "%",
        "min": 0,
        "max": null,
        "help": "Gewählter nicht negativer Prozentsatz; keine allgemeine Norm. Leer bedeutet 0.",
        "optional": true
      },
      "glueConsumption": {
        "label": "Eingegebener Kleberverbrauch",
        "unit": "kg/m²",
        "min": 0,
        "max": null,
        "help": "Produktverbrauch in kg/m². Leer nutzt 5; Reserve erhöht auch den Kleberansatz.",
        "optional": true
      },
      "packPrice": {
        "label": "Preis je Paket",
        "unit": "RUB",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Preis in RUB; keine Währungsumrechnung. Leer oder 0 blendet Kosten aus."
      }
    },
    "wallpaper-calculator": {
      "length": {
        "label": "Raumlänge",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "width": {
        "label": "Raumbreite",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "height": {
        "label": "Wandhöhe",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "rollWidth": {
        "label": "Rollenbreite",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "rollLength": {
        "label": "Rollenlänge",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "windows": {
        "label": "Fensteranzahl",
        "unit": "Stück",
        "min": 0,
        "max": 9007199254740991,
        "step": 1,
        "help": "Ganze Anzahl; das Modell zieht pauschal 1,5 m² je Fenster ab. Tatsächliche Maße werden nicht eingegeben."
      },
      "doors": {
        "label": "Türanzahl",
        "unit": "Stück",
        "min": 0,
        "max": 9007199254740991,
        "step": 1,
        "help": "Ganze Anzahl; das Modell zieht pauschal 1,8 m² je Tür ab. Tatsächliche Maße werden nicht eingegeben."
      },
      "pattern": {
        "label": "Vertikaler Rapport",
        "unit": "cm",
        "min": 0,
        "max": null,
        "help": "Vertikaler Rapport in cm; leer oder 0 ohne Rapport. Versetzter Ansatz und Beschnitt werden nicht ergänzt.",
        "optional": true
      },
      "rollPrice": {
        "label": "Preis je Rolle",
        "unit": "RUB",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Preis in RUB; keine Währungsumrechnung. Leer oder 0 blendet Kosten aus."
      }
    },
    "paint-calculator": {
      "area": {
        "label": "Anstrichfläche",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "length": {
        "label": "Raumlänge",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "width": {
        "label": "Raumbreite",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "height": {
        "label": "Wandhöhe",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "windows": {
        "label": "Fensteranzahl",
        "unit": "Stück",
        "min": 0,
        "max": 9007199254740991,
        "step": 1,
        "help": "Ganze Anzahl; das Modell zieht pauschal 1,5 m² je Fenster ab. Tatsächliche Maße werden nicht eingegeben."
      },
      "doors": {
        "label": "Türanzahl",
        "unit": "Stück",
        "min": 0,
        "max": 9007199254740991,
        "step": 1,
        "help": "Ganze Anzahl; das Modell zieht pauschal 1,8 m² je Tür ab. Tatsächliche Maße werden nicht eingegeben."
      },
      "coats": {
        "label": "Anstrichzahl",
        "unit": "Anstriche",
        "min": 1,
        "max": 9007199254740991,
        "step": 1,
        "help": "Eine positive ganze Anstrichzahl nach Anleitung der gewählten Farbe; Brüche werden nicht gerundet."
      },
      "consumption": {
        "label": "Verbrauch je Anstrich",
        "unit": "L/m²",
        "min": 0,
        "max": null,
        "help": "Liter je m² für einen Anstrich. Bei einer Angabe in m²/L den Kehrwert eingeben."
      },
      "canVolume": {
        "label": "Gebindevolumen",
        "unit": "L",
        "min": 0,
        "max": null
      },
      "reserve": {
        "label": "Reserve",
        "unit": "%",
        "min": 0,
        "max": null,
        "help": "Gewählter nicht negativer Prozentsatz; keine allgemeine Norm. Leer bedeutet 0.",
        "optional": true
      },
      "canPrice": {
        "label": "Preis je Gebinde",
        "unit": "RUB",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Preis in RUB; keine Währungsumrechnung. Leer oder 0 blendet Kosten aus."
      }
    },
    "laminate-calculator": {
      "length": {
        "label": "Raumlänge",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "width": {
        "label": "Raumbreite",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "packArea": {
        "label": "Paketfläche",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "reserve": {
        "label": "Reserve",
        "unit": "%",
        "min": 0,
        "max": null,
        "help": "Gewählter nicht negativer Prozentsatz; keine allgemeine Norm. Leer bedeutet 0.",
        "optional": true
      },
      "packPrice": {
        "label": "Preis je Paket",
        "unit": "RUB",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Preis in RUB, ohne Währungsumrechnung. Leer oder 0 ergibt für diese Komponente Kosten von null."
      },
      "underlayPrice": {
        "label": "Unterlagenpreis je Fläche",
        "unit": "RUB/m²",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Preis in RUB, ohne Währungsumrechnung. Leer oder 0 ergibt für diese Komponente Kosten von null."
      }
    },
    "screed-calculator": {
      "length": {
        "label": "Raumlänge",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "width": {
        "label": "Raumbreite",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "manualArea": {
        "label": "Bekannte Fläche",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "thickness": {
        "label": "Mittlere Schichtdicke",
        "unit": "cm",
        "min": 0,
        "max": null
      },
      "mixConsumption": {
        "label": "Trockenverbrauch je 1 cm",
        "unit": "kg/(m²·cm)",
        "min": 0,
        "max": null,
        "help": "Einheit kg/(m²·cm): Verbrauch je mm mit 10 multiplizieren. Leer nutzt 18; 0 ergibt 0 Mischung und Säcke.",
        "optional": true
      },
      "bagWeight": {
        "label": "Sackmasse",
        "unit": "kg",
        "min": 0,
        "max": null,
        "optional": true
      },
      "reserve": {
        "label": "Reserve",
        "unit": "%",
        "min": 0,
        "max": null,
        "help": "Gewählter nicht negativer Prozentsatz; keine allgemeine Norm. Leer bedeutet 0.",
        "optional": true
      },
      "bagPrice": {
        "label": "Preis je Sack",
        "unit": "RUB",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Preis in RUB; keine Währungsumrechnung. Leer oder 0 blendet Kosten aus."
      }
    },
    "brick-calculator": {
      "wallLength": {
        "label": "Wandlänge",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "wallHeight": {
        "label": "Wandhöhe",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "manualArea": {
        "label": "Bekannte Fläche",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "openingsArea": {
        "label": "Gesamte Öffnungsfläche",
        "unit": "m²",
        "min": 0,
        "max": null,
        "optional": true
      },
      "unitLength": {
        "label": "Steinlänge",
        "unit": "mm",
        "min": 0,
        "max": null
      },
      "unitHeight": {
        "label": "Steinhöhe",
        "unit": "mm",
        "min": 0,
        "max": null
      },
      "joint": {
        "label": "Fugenstärke",
        "unit": "mm",
        "min": 0,
        "max": null,
        "optional": true
      },
      "reserve": {
        "label": "Reserve",
        "unit": "%",
        "min": 0,
        "max": null,
        "help": "Gewählter nicht negativer Prozentsatz; keine allgemeine Norm. Leer bedeutet 0.",
        "optional": true
      },
      "unitPrice": {
        "label": "Preis je Stein",
        "unit": "RUB",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Preis in RUB; keine Währungsumrechnung. Leer oder 0 blendet Kosten aus."
      }
    }
  },
  "es": {
    "tile-calculator": {
      "length": {
        "label": "Largo de la habitación",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "width": {
        "label": "Ancho de la habitación",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "manualArea": {
        "label": "Área conocida",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "tileLength": {
        "label": "Largo de la baldosa",
        "unit": "cm",
        "min": 0,
        "max": null
      },
      "tileWidth": {
        "label": "Ancho de la baldosa",
        "unit": "cm",
        "min": 0,
        "max": null
      },
      "packArea": {
        "label": "Área del paquete",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "reserve": {
        "label": "Reserva",
        "unit": "%",
        "min": 0,
        "max": null,
        "help": "Porcentaje elegido no negativo; no se fija una norma universal. Vacío equivale a 0.",
        "optional": true
      },
      "glueConsumption": {
        "label": "Consumo de adhesivo introducido",
        "unit": "kg/m²",
        "min": 0,
        "max": null,
        "help": "Consumo del producto en kg/m². Vacío usa 5; la reserva también aumenta el adhesivo.",
        "optional": true
      },
      "packPrice": {
        "label": "Precio por paquete",
        "unit": "RUB",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Precio en RUB; sin cambio de moneda. Vacío o 0 oculta el coste."
      }
    },
    "wallpaper-calculator": {
      "length": {
        "label": "Largo de la habitación",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "width": {
        "label": "Ancho de la habitación",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "height": {
        "label": "Altura de las paredes",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "rollWidth": {
        "label": "Ancho del rollo",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "rollLength": {
        "label": "Largo del rollo",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "windows": {
        "label": "Cantidad de ventanas",
        "unit": "unidades",
        "min": 0,
        "max": 9007199254740991,
        "step": 1,
        "help": "Cantidad entera; el modelo descuenta 1,5 m² fijos por ventana. No se introducen medidas reales."
      },
      "doors": {
        "label": "Cantidad de puertas",
        "unit": "unidades",
        "min": 0,
        "max": 9007199254740991,
        "step": 1,
        "help": "Cantidad entera; el modelo descuenta 1,8 m² fijos por puerta. No se introducen medidas reales."
      },
      "pattern": {
        "label": "Repetición vertical",
        "unit": "cm",
        "min": 0,
        "max": null,
        "help": "Repetición vertical en cm; vacío o 0 sin repetición. No se añaden casado desplazado ni recorte.",
        "optional": true
      },
      "rollPrice": {
        "label": "Precio por rollo",
        "unit": "RUB",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Precio en RUB; sin cambio de moneda. Vacío o 0 oculta el coste."
      }
    },
    "paint-calculator": {
      "area": {
        "label": "Área a pintar",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "length": {
        "label": "Largo de la habitación",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "width": {
        "label": "Ancho de la habitación",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "height": {
        "label": "Altura de las paredes",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "windows": {
        "label": "Cantidad de ventanas",
        "unit": "unidades",
        "min": 0,
        "max": 9007199254740991,
        "step": 1,
        "help": "Cantidad entera; el modelo descuenta 1,5 m² fijos por ventana. No se introducen medidas reales."
      },
      "doors": {
        "label": "Cantidad de puertas",
        "unit": "unidades",
        "min": 0,
        "max": 9007199254740991,
        "step": 1,
        "help": "Cantidad entera; el modelo descuenta 1,8 m² fijos por puerta. No se introducen medidas reales."
      },
      "coats": {
        "label": "Cantidad de capas",
        "unit": "capas",
        "min": 1,
        "max": 9007199254740991,
        "step": 1,
        "help": "Un número entero positivo de capas según las instrucciones de la pintura; las fracciones no se redondean."
      },
      "consumption": {
        "label": "Consumo por capa",
        "unit": "L/m²",
        "min": 0,
        "max": null,
        "help": "Litros por m² y capa. Si la etiqueta indica m²/L, introduce el valor inverso."
      },
      "canVolume": {
        "label": "Volumen del envase",
        "unit": "L",
        "min": 0,
        "max": null
      },
      "reserve": {
        "label": "Reserva",
        "unit": "%",
        "min": 0,
        "max": null,
        "help": "Porcentaje elegido no negativo; no se fija una norma universal. Vacío equivale a 0.",
        "optional": true
      },
      "canPrice": {
        "label": "Precio por envase",
        "unit": "RUB",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Precio en RUB; sin cambio de moneda. Vacío o 0 oculta el coste."
      }
    },
    "laminate-calculator": {
      "length": {
        "label": "Largo de la habitación",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "width": {
        "label": "Ancho de la habitación",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "packArea": {
        "label": "Área del paquete",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "reserve": {
        "label": "Reserva",
        "unit": "%",
        "min": 0,
        "max": null,
        "help": "Porcentaje elegido no negativo; no se fija una norma universal. Vacío equivale a 0.",
        "optional": true
      },
      "packPrice": {
        "label": "Precio por paquete",
        "unit": "RUB",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Precio en RUB, sin cambio de moneda. Vacío o 0 da coste cero a este componente."
      },
      "underlayPrice": {
        "label": "Precio de base por área",
        "unit": "RUB/m²",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Precio en RUB, sin cambio de moneda. Vacío o 0 da coste cero a este componente."
      }
    },
    "screed-calculator": {
      "length": {
        "label": "Largo de la habitación",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "width": {
        "label": "Ancho de la habitación",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "manualArea": {
        "label": "Área conocida",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "thickness": {
        "label": "Espesor medio de capa",
        "unit": "cm",
        "min": 0,
        "max": null
      },
      "mixConsumption": {
        "label": "Consumo seco por 1 cm",
        "unit": "kg/(m²·cm)",
        "min": 0,
        "max": null,
        "help": "Unidad kg/(m²·cm): multiplica por 10 un consumo por mm. Vacío usa 18; 0 da 0 mezcla y sacos.",
        "optional": true
      },
      "bagWeight": {
        "label": "Masa del saco",
        "unit": "kg",
        "min": 0,
        "max": null,
        "optional": true
      },
      "reserve": {
        "label": "Reserva",
        "unit": "%",
        "min": 0,
        "max": null,
        "help": "Porcentaje elegido no negativo; no se fija una norma universal. Vacío equivale a 0.",
        "optional": true
      },
      "bagPrice": {
        "label": "Precio por saco",
        "unit": "RUB",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Precio en RUB; sin cambio de moneda. Vacío o 0 oculta el coste."
      }
    },
    "brick-calculator": {
      "wallLength": {
        "label": "Largo del muro",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "wallHeight": {
        "label": "Alto del muro",
        "unit": "m",
        "min": 0,
        "max": null
      },
      "manualArea": {
        "label": "Área conocida",
        "unit": "m²",
        "min": 0,
        "max": null
      },
      "openingsArea": {
        "label": "Área total de huecos",
        "unit": "m²",
        "min": 0,
        "max": null,
        "optional": true
      },
      "unitLength": {
        "label": "Largo de la pieza",
        "unit": "mm",
        "min": 0,
        "max": null
      },
      "unitHeight": {
        "label": "Alto de la pieza",
        "unit": "mm",
        "min": 0,
        "max": null
      },
      "joint": {
        "label": "Espesor de junta",
        "unit": "mm",
        "min": 0,
        "max": null,
        "optional": true
      },
      "reserve": {
        "label": "Reserva",
        "unit": "%",
        "min": 0,
        "max": null,
        "help": "Porcentaje elegido no negativo; no se fija una norma universal. Vacío equivale a 0.",
        "optional": true
      },
      "unitPrice": {
        "label": "Precio por pieza",
        "unit": "RUB",
        "min": 0,
        "max": null,
        "optional": true,
        "help": "Precio en RUB; sin cambio de moneda. Vacío o 0 oculta el coste."
      }
    }
  }
};
export function applyBuildingWave17Fields(id:string,fields:Field[],locale:string):Field[]{return fields.map(field=>{const note=notes[locale]?.[id]?.[field.name];if(!note)return field;return{...field,...note,max:note.max===null?undefined:note.max??field.max};});}
