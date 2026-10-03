import type{CalculatorLocalization}from '../../../../lib/platform/types';
import{withBuildingWave17Phrases}from '../../../../data/buildingWave17ResultPhrases';
const inherited:CalculatorLocalization={
  "en": {
    "results": {
      "Проверьте данные": "Check inputs",
      "В": "To",
      "Количество плиток": "Tiles needed",
      "Площадь": "Area",
      "Площадь с запасом": "Area with reserve",
      "Количество упаковок": "Packs needed",
      "Примерный расход клея": "Approximate adhesive",
      "Стоимость плитки": "Tile cost"
    },
    "values": {
      "Введите положительные размеры": "Enter positive dimensions"
    }
  },
  "uk": {
    "results": {
      "Проверьте данные": "Перевірте дані",
      "В": "У",
      "Количество плиток": "Кількість плиток",
      "Площадь": "Площа",
      "Площадь с запасом": "Площа із запасом",
      "Количество упаковок": "Кількість упаковок",
      "Примерный расход клея": "Орієнтовна витрата клею",
      "Стоимость плитки": "Вартість плитки"
    },
    "values": {
      "Введите положительные размеры": "Введіть додатні розміри"
    }
  },
  "de": {
    "results": {
      "Проверьте данные": "Prüfe die Werte",
      "В": "Nach",
      "Количество плиток": "Anzahl der Fliesen",
      "Площадь": "Fläche",
      "Площадь с запасом": "Fläche mit Reserve",
      "Количество упаковок": "Anzahl der Pakete",
      "Примерный расход клея": "Ungefährer Kleberbedarf",
      "Стоимость плитки": "Kosten der Fliesen"
    },
    "values": {
      "Введите положительные размеры": "Trage positive Maße ein"
    }
  },
  "es": {
    "results": {
      "Проверьте данные": "Revisa los datos",
      "В": "A",
      "Количество плиток": "Número de azulejos",
      "Площадь": "Área",
      "Площадь с запасом": "Área con reserva",
      "Количество упаковок": "Número de paquetes",
      "Примерный расход клея": "Consumo aproximado de adhesivo",
      "Стоимость плитки": "Coste de los azulejos"
    },
    "values": {
      "Введите положительные размеры": "Introduce dimensiones positivas"
    }
  }
};
export const localization=withBuildingWave17Phrases(inherited,'tile-calculator');
