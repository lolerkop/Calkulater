import { geometryWave8ScalarValues } from '../../lib/platform/geometryWave8ScalarLocalization';
import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "rise": "Höhenunterschied",
      "run": "Waagerechte Strecke"
    },
    "results": {
      "Уклон": "Steigung",
      "Угол": "Winkel",
      "Отношение": "Verhältnis",
      "Длина наклона": "Länge der Neigung",
      "Проверьте данные": "Prüfe die Werte"
    },
    "values": {
      ...geometryWave8ScalarValues.de,
      "Заложение не может быть нулевым": "Die waagerechte Strecke kann nicht null sein",
      "Заложение не может быть нулевым: вертикаль не имеет конечного уклона": "Die horizontale Änderung darf nicht null sein: Eine Vertikale hat keine endliche Steigung"
    }
  },
  "en": {
    "fields": {
      "rise": "Rise",
      "run": "Run"
    },
    "results": {
      "Уклон": "Slope",
      "Угол": "Angle",
      "Отношение": "Ratio",
      "Длина наклона": "Slope length",
      "Проверьте данные": "Check the values"
    },
    "values": {
      ...geometryWave8ScalarValues.en,
      "Заложение не может быть нулевым": "The run cannot be zero",
      "Заложение не может быть нулевым: вертикаль не имеет конечного уклона": "Run cannot be zero: a vertical line has no finite gradient"
    }
  },
  "uk": {
    "fields": {
      "rise": "Підйом",
      "run": "Закладення"
    },
    "results": {
      "Уклон": "Ухил",
      "Угол": "Кут",
      "Отношение": "Співвідношення",
      "Длина наклона": "Довжина похилої",
      "Проверьте данные": "Перевірте дані"
    },
    "values": {
      ...geometryWave8ScalarValues.uk,
      "Заложение не может быть нулевым": "Закладення не може бути нульовим",
      "Заложение не может быть нулевым: вертикаль не имеет конечного уклона": "Закладення не може бути нульовим: вертикаль не має скінченного ухилу"
    }
  },
  "es": {
    "fields": {
      "rise": "Desnivel",
      "run": "Distancia horizontal"
    },
    "options": {},
    "results": {
      "Уклон": "Pendiente",
      "Угол": "Ángulo",
      "Отношение": "Relación",
      "Длина наклона": "Longitud del tramo inclinado",
      "Проверьте данные": "Revisa los datos"
    },
    "values": {
      ...geometryWave8ScalarValues.es,
      "Заложение не может быть нулевым": "La distancia horizontal no puede ser cero",
      "Заложение не может быть нулевым: вертикаль не имеет конечного уклона": "El cambio horizontal no puede ser cero: una vertical no tiene pendiente finita"
    }
  }
};
