import type { CalculatorLocalization } from '../../lib/platform/types';
import { mechanicsScalarValues } from '../../lib/platform/mechanicsScalarLocalization';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "mass27": "Masse des Teilchens",
      "velocityKmS": "Geschwindigkeit"
    },
    "results": {
      "Длина волны": "Wellenlänge",
      "Импульс": "Impuls",
      "В нанометрах": "In Nanometern",
      "Кинетическая энергия": "Kinetische Energie",
      "Проверьте данные": "Prüfe die Werte",
      "Доля скорости света": "Anteil der Lichtgeschwindigkeit"
    },
    "values": {
      ...mechanicsScalarValues.de,
      "м": "m",
      "нм": "nm",
      "Гц": "Hz",
      "кг·м/с": "kg·m/s",
      "Дж": "J",
      "Масса должна быть больше нуля": "Die Masse muss größer als null sein",
      "Скорость должна быть больше нуля": "Die Geschwindigkeit muss größer als null sein",
      "Скорость массивной частицы должна быть меньше скорости света": "Die Geschwindigkeit eines massiven Teilchens muss unter der Lichtgeschwindigkeit liegen",
      "Использовано нерелятивистское приближение p = mv; доля скорости света помогает оценить его применимость.": "Die nichtrelativistische Näherung p = mv wird verwendet; der Lichtgeschwindigkeitsanteil hilft, ihre Gültigkeit einzuschätzen."
    }
  },
  "en": {
    "fields": {
      "mass27": "Particle mass",
      "velocityKmS": "Speed"
    },
    "options": {},
    "results": {
      "Длина волны": "Wavelength",
      "Импульс": "Momentum",
      "В нанометрах": "In nanometres",
      "Кинетическая энергия": "Kinetic energy",
      "Проверьте данные": "Check the values",
      "Доля скорости света": "Fraction of light speed"
    },
    "values": {
      ...mechanicsScalarValues.en,
      "м": "m",
      "нм": "nm",
      "Гц": "Hz",
      "кг·м/с": "kg·m/s",
      "Дж": "J",
      "Масса должна быть больше нуля": "The mass must be greater than zero",
      "Скорость должна быть больше нуля": "The speed must be greater than zero",
      "Скорость массивной частицы должна быть меньше скорости света": "A massive particle’s speed must be below light speed",
      "Использовано нерелятивистское приближение p = mv; доля скорости света помогает оценить его применимость.": "The nonrelativistic approximation p = mv is used; the fraction of light speed helps assess its applicability."
    }
  },
  "uk": {
    "fields": {
      "mass27": "Маса частинки",
      "velocityKmS": "Швидкість"
    },
    "options": {},
    "results": {
      "Длина волны": "Довжина хвилі",
      "Импульс": "Імпульс",
      "В нанометрах": "У нанометрах",
      "Кинетическая энергия": "Кінетична енергія",
      "Проверьте данные": "Перевірте дані",
      "Доля скорости света": "Частка швидкості світла"
    },
    "values": {
      ...mechanicsScalarValues.uk,
      "м": "м",
      "нм": "нм",
      "Гц": "Гц",
      "кг·м/с": "кг·м/с",
      "Дж": "Дж",
      "Масса должна быть больше нуля": "Маса має бути більшою за нуль",
      "Скорость должна быть больше нуля": "Швидкість має бути більшою за нуль",
      "Скорость массивной частицы должна быть меньше скорости света": "Швидкість масивної частинки має бути меншою за швидкість світла",
      "Использовано нерелятивистское приближение p = mv; доля скорости света помогает оценить его применимость.": "Використано нерелятивістське наближення p = mv; частка швидкості світла допомагає оцінити його застосовність."
    }
  },
  "es": {
    "fields": {
      "mass27": "Masa de la partícula",
      "velocityKmS": "Velocidad"
    },
    "options": {},
    "results": {
      "Длина волны": "Longitud de onda",
      "Импульс": "Momento lineal",
      "В нанометрах": "En nanómetros",
      "Кинетическая энергия": "Energía cinética",
      "Проверьте данные": "Revisa los datos",
      "Доля скорости света": "Fracción de la velocidad de la luz"
    },
    "values": {
      ...mechanicsScalarValues.es,
      "м": "m",
      "нм": "nm",
      "Гц": "Hz",
      "кг·м/с": "kg·m/s",
      "Дж": "J",
      "Масса должна быть больше нуля": "La masa debe ser mayor que cero",
      "Скорость должна быть больше нуля": "La velocidad debe ser mayor que cero",
      "Скорость массивной частицы должна быть меньше скорости света": "La velocidad de una partícula con masa debe ser inferior a la de la luz",
      "Использовано нерелятивистское приближение p = mv; доля скорости света помогает оценить его применимость.": "Se utiliza la aproximación no relativista p = mv; la fracción de la velocidad de la luz ayuda a evaluar su aplicabilidad."
    }
  }
};
