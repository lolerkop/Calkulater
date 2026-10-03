import { geometryWave8ScalarValues } from '../../lib/platform/geometryWave8ScalarLocalization';
import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "mode": "Was bekannt ist",
      "unit": "Längeneinheit",
      "r": "Radius",
      "d": "Durchmesser",
      "volume": "Volumen"
    },
    "options": {
      "mm": "Millimeter",
      "cm": "Zentimeter",
      "m": "Meter",
      "radius": "der Radius",
      "diameter": "der Durchmesser",
      "volume": "das Volumen"
    },
    "results": {
      "Объём": "Volumen",
      "Площадь поверхности": "Oberfläche",
      "Радиус": "Radius",
      "Диаметр": "Durchmesser",
      "Проверьте данные": "Prüfe die Werte"
    },
    "values": {
      ...geometryWave8ScalarValues.de,
      "Радиус должен быть больше нуля": "Der Radius muss größer als null sein",
      "Диаметр должен быть больше нуля": "Der Durchmesser muss größer als null sein",
      "Объём должен быть больше нуля": "Das Volumen muss größer als null sein",
      "Выберите миллиметры, сантиметры или метры": "Wähle Millimeter, Zentimeter oder Meter",
      "Известная величина шара должна быть больше нуля": "Die bekannte Kugelgröße muss positiv sein",
      "Выберите поддерживаемый режим расчёта": "Wähle einen unterstützten Rechenmodus"
    }
  },
  "en": {
    "fields": {
      "mode": "What is known",
      "unit": "Length unit",
      "r": "Radius",
      "d": "Diameter",
      "volume": "Volume"
    },
    "options": {
      "mm": "millimetres",
      "cm": "centimetres",
      "m": "metres",
      "radius": "the radius",
      "diameter": "the diameter",
      "volume": "the volume"
    },
    "results": {
      "Объём": "Volume",
      "Площадь поверхности": "Surface area",
      "Радиус": "Radius",
      "Диаметр": "Diameter",
      "Проверьте данные": "Check the values"
    },
    "values": {
      ...geometryWave8ScalarValues.en,
      "Радиус должен быть больше нуля": "The radius must be greater than zero",
      "Диаметр должен быть больше нуля": "The diameter must be greater than zero",
      "Объём должен быть больше нуля": "The volume must be greater than zero",
      "Выберите миллиметры, сантиметры или метры": "Choose millimetres, centimetres or metres",
      "Известная величина шара должна быть больше нуля": "The known ball quantity must be positive",
      "Выберите поддерживаемый режим расчёта": "Choose a supported calculation mode"
    }
  },
  "uk": {
    "fields": {
      "mode": "Що відомо",
      "unit": "Одиниця довжини",
      "r": "Радіус",
      "d": "Діаметр",
      "volume": "Об’єм"
    },
    "options": {
      "mm": "міліметри",
      "cm": "сантиметри",
      "m": "метри",
      "radius": "радіус",
      "diameter": "діаметр",
      "volume": "об’єм"
    },
    "results": {
      "Объём": "Об’єм",
      "Площадь поверхности": "Площа поверхні",
      "Радиус": "Радіус",
      "Диаметр": "Діаметр",
      "Проверьте данные": "Перевірте дані"
    },
    "values": {
      ...geometryWave8ScalarValues.uk,
      "Радиус должен быть больше нуля": "Радіус має бути більшим за нуль",
      "Диаметр должен быть больше нуля": "Діаметр має бути більшим за нуль",
      "Объём должен быть больше нуля": "Об’єм має бути більшим за нуль",
      "Выберите миллиметры, сантиметры или метры": "Оберіть міліметри, сантиметри або метри",
      "Известная величина шара должна быть больше нуля": "Відома величина кулі має бути додатною",
      "Выберите поддерживаемый режим расчёта": "Оберіть підтримуваний режим розрахунку"
    }
  },
  "es": {
    "fields": {
      "unit": "Unidad de longitud",
      "mode": "Dato conocido",
      "r": "Radio",
      "d": "Diámetro",
      "volume": "Volumen"
    },
    "options": {
      "mm": "milímetros",
      "cm": "centímetros",
      "m": "metros",
      "radius": "el radio",
      "diameter": "el diámetro",
      "volume": "el volumen"
    },
    "results": {
      "Объём": "Volumen",
      "Площадь поверхности": "Superficie",
      "Радиус": "Radio",
      "Диаметр": "Diámetro",
      "Проверьте данные": "Revisa los datos"
    },
    "values": {
      ...geometryWave8ScalarValues.es,
      "Радиус должен быть больше нуля": "El radio debe ser mayor que cero",
      "Диаметр должен быть больше нуля": "El diámetro debe ser mayor que cero",
      "Объём должен быть больше нуля": "El volumen debe ser mayor que cero",
      "Выберите миллиметры, сантиметры или метры": "Elige milímetros, centímetros o metros",
      "Известная величина шара должна быть больше нуля": "La magnitud conocida de la bola debe ser positiva",
      "Выберите поддерживаемый режим расчёта": "Elige un modo de cálculo admitido"
    }
  }
};
