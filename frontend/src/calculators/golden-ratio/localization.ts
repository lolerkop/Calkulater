import { geometryWave8ScalarValues } from '../../lib/platform/geometryWave8ScalarLocalization';
import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "mode": "Was du brauchst",
      "total": "Länge der Strecke",
      "a": "Bekannte Größe"
    },
    "options": {
      "split": "eine Strecke teilen",
      "grow": "den Partner finden"
    },
    "results": {
      "Большая часть": "Größerer Teil",
      "Меньшая часть": "Kleinerer Teil",
      "Больший отрезок": "Größere Strecke",
      "Меньший отрезок": "Kleinere Strecke",
      "φ": "φ",
      "Проверьте данные": "Prüfe die Werte"
    },
    "values": {
      ...geometryWave8ScalarValues.de,
      "Значение должно быть больше нуля": "Der Wert muss größer als null sein",
      "Длина отрезка должна быть больше нуля": "Die Länge der Strecke muss größer als null sein",
      "Длина или известный размер должны быть больше нуля": "Länge oder bekanntes Maß müssen positiv sein",
      "Выберите поддерживаемый режим расчёта": "Wähle einen unterstützten Rechenmodus"
    }
  },
  "en": {
    "fields": {
      "mode": "What you need",
      "total": "Segment length",
      "a": "Known size"
    },
    "options": {
      "split": "split a segment",
      "grow": "find the partner"
    },
    "results": {
      "Большая часть": "Larger part",
      "Меньшая часть": "Smaller part",
      "Больший отрезок": "Larger segment",
      "Меньший отрезок": "Smaller segment",
      "φ": "φ",
      "Проверьте данные": "Check the values"
    },
    "values": {
      ...geometryWave8ScalarValues.en,
      "Значение должно быть больше нуля": "The value must be greater than zero",
      "Длина отрезка должна быть больше нуля": "The segment length must be greater than zero",
      "Длина или известный размер должны быть больше нуля": "Length or known size must be positive",
      "Выберите поддерживаемый режим расчёта": "Choose a supported calculation mode"
    }
  },
  "uk": {
    "fields": {
      "mode": "Що потрібно",
      "total": "Довжина відрізка",
      "a": "Відомий розмір"
    },
    "options": {
      "split": "поділити відрізок",
      "grow": "підібрати партнера"
    },
    "results": {
      "Большая часть": "Більша частина",
      "Меньшая часть": "Менша частина",
      "Больший отрезок": "Більший відрізок",
      "Меньший отрезок": "Менший відрізок",
      "φ": "φ",
      "Проверьте данные": "Перевірте дані"
    },
    "values": {
      ...geometryWave8ScalarValues.uk,
      "Значение должно быть больше нуля": "Значення має бути більшим за нуль",
      "Длина отрезка должна быть больше нуля": "Довжина відрізка має бути більшою за нуль",
      "Длина или известный размер должны быть больше нуля": "Довжина або відомий розмір мають бути додатними",
      "Выберите поддерживаемый режим расчёта": "Оберіть підтримуваний режим розрахунку"
    }
  },
  "es": {
    "fields": {
      "mode": "Qué necesitas",
      "total": "Longitud del segmento",
      "a": "Medida conocida"
    },
    "options": {
      "split": "dividir un segmento",
      "grow": "hallar la pareja"
    },
    "results": {
      "Большая часть": "Parte mayor",
      "Меньшая часть": "Parte menor",
      "Больший отрезок": "Segmento mayor",
      "Меньший отрезок": "Segmento menor",
      "φ": "φ",
      "Проверьте данные": "Revisa los datos"
    },
    "values": {
      ...geometryWave8ScalarValues.es,
      "Значение должно быть больше нуля": "El valor debe ser mayor que cero",
      "Длина отрезка должна быть больше нуля": "La longitud del segmento debe ser mayor que cero",
      "Длина или известный размер должны быть больше нуля": "La longitud o medida conocida debe ser positiva",
      "Выберите поддерживаемый режим расчёта": "Elige un modo de cálculo admitido"
    }
  }
};
