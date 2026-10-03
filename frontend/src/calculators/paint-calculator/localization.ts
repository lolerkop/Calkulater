import type{CalculatorLocalization}from '../../lib/platform/types';
import{withBuildingWave17Phrases}from '../../data/buildingWave17ResultPhrases';
const inherited:CalculatorLocalization={
  "en": {
    "results": {
      "Проверьте данные": "Check inputs",
      "В": "To",
      "Площадь": "Area",
      "Запас": "Reserve",
      "Заданный запас": "Added reserve",
      "Остаток из-за целых банок": "Remainder from full cans",
      "Литры краски": "Paint liters",
      "Площадь окрашивания": "Paint area",
      "Слоёв": "Coats",
      "Количество банок": "Cans needed",
      "Остаток": "Balance",
      "Стоимость краски": "Paint cost"
    },
    "values": {
      "Введите положительные размеры": "Enter positive dimensions"
    }
  },
  "uk": {
    "results": {
      "Проверьте данные": "Перевірте дані",
      "В": "У",
      "Площадь": "Площа",
      "Запас": "Запас",
      "Заданный запас": "Доданий запас",
      "Остаток из-за целых банок": "Залишок через цілі банки",
      "Литры краски": "Літри фарби",
      "Площадь окрашивания": "Площа фарбування",
      "Слоёв": "Шарів",
      "Количество банок": "Кількість банок",
      "Остаток": "Залишок",
      "Стоимость краски": "Вартість фарби"
    },
    "values": {
      "Введите положительные размеры": "Введіть додатні розміри"
    }
  },
  "de": {
    "results": {
      "Проверьте данные": "Prüfe die Werte",
      "В": "Nach",
      "Площадь": "Fläche",
      "Запас": "Reserve",
      "Заданный запас": "Gewählte Reserve",
      "Остаток из-за целых банок": "Rest durch ganze Dosen",
      "Литры краски": "Farbe in Litern",
      "Площадь окрашивания": "Zu streichende Fläche",
      "Слоёв": "Anstriche",
      "Количество банок": "Anzahl der Dosen",
      "Остаток": "Restschuld",
      "Стоимость краски": "Kosten der Farbe"
    },
    "values": {
      "Введите положительные размеры": "Trage positive Maße ein"
    }
  },
  "es": {
    "results": {
      "Проверьте данные": "Revisa los datos",
      "В": "A",
      "Площадь": "Área",
      "Запас": "Reserva",
      "Заданный запас": "Margen indicado",
      "Остаток из-за целых банок": "Sobrante por los botes enteros",
      "Литры краски": "Litros de pintura",
      "Площадь окрашивания": "Superficie a pintar",
      "Слоёв": "Manos",
      "Количество банок": "Número de botes",
      "Остаток": "Pendiente",
      "Стоимость краски": "Coste de la pintura"
    },
    "values": {
      "Введите положительные размеры": "Introduce dimensiones positivas"
    }
  }
};
export const localization=withBuildingWave17Phrases(inherited,'paint-calculator');
