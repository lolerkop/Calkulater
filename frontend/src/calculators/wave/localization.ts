import type { CalculatorLocalization } from '../../lib/platform/types';
import { mechanicsScalarValues } from '../../lib/platform/mechanicsScalarLocalization';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "mode": "Was gesucht ist",
      "v": "Wellengeschwindigkeit",
      "f": "Frequenz",
      "wavelength": "Wellenlänge"
    },
    "options": {
      "lambda": "die Wellenlänge",
      "f": "die Frequenz",
      "v": "die Wellengeschwindigkeit"
    },
    "results": {
      "Длина волны": "Wellenlänge",
      "Частота": "Frequenz",
      "Скорость": "Wellengeschwindigkeit",
      "Период": "Periodendauer",
      "Проверьте данные": "Prüfe die Werte"
    },
    "values": {
      ...mechanicsScalarValues.de,
      "м/с": "m/s",
      "Гц": "Hz",
      "м": "m",
      "с": "s",
      "Скорость должна быть больше нуля": "Die Wellengeschwindigkeit muss größer als null sein",
      "Частота должна быть больше нуля": "Die Frequenz muss größer als null sein",
      "Длина волны должна быть больше нуля": "Die Wellenlänge muss größer als null sein"
    }
  },
  "en": {
    "fields": {
      "mode": "What to find",
      "v": "Wave speed",
      "f": "Frequency",
      "wavelength": "Wavelength"
    },
    "options": {
      "lambda": "wavelength",
      "f": "frequency",
      "v": "wave speed"
    },
    "results": {
      "Длина волны": "Wavelength",
      "Частота": "Frequency",
      "Скорость": "Wave speed",
      "Период": "Period",
      "Проверьте данные": "Check the values"
    },
    "values": {
      ...mechanicsScalarValues.en,
      "м/с": "m/s",
      "Гц": "Hz",
      "м": "m",
      "с": "s",
      "Скорость должна быть больше нуля": "The wave speed must be greater than zero",
      "Частота должна быть больше нуля": "The frequency must be greater than zero",
      "Длина волны должна быть больше нуля": "The wavelength must be greater than zero"
    }
  },
  "uk": {
    "fields": {
      "mode": "Що знайти",
      "v": "Швидкість хвилі",
      "f": "Частота",
      "wavelength": "Довжина хвилі"
    },
    "options": {
      "lambda": "довжину хвилі",
      "f": "частоту",
      "v": "швидкість хвилі"
    },
    "results": {
      "Длина волны": "Довжина хвилі",
      "Частота": "Частота",
      "Скорость": "Швидкість",
      "Период": "Період",
      "Проверьте данные": "Перевірте дані"
    },
    "values": {
      ...mechanicsScalarValues.uk,
      "м/с": "м/с",
      "Гц": "Гц",
      "м": "м",
      "с": "с",
      "Скорость должна быть больше нуля": "Швидкість має бути більшою за нуль",
      "Частота должна быть больше нуля": "Частота має бути більшою за нуль",
      "Длина волны должна быть больше нуля": "Довжина хвилі має бути більшою за нуль"
    }
  },
  "es": {
    "fields": {
      "mode": "Qué hallar",
      "v": "Velocidad de la onda",
      "f": "Frecuencia",
      "wavelength": "Longitud de onda"
    },
    "options": {
      "lambda": "longitud de onda",
      "f": "frecuencia",
      "v": "velocidad de la onda"
    },
    "results": {
      "Длина волны": "Longitud de onda",
      "Частота": "Frecuencia",
      "Скорость": "Velocidad de la onda",
      "Период": "Periodo",
      "Проверьте данные": "Revisa los datos"
    },
    "values": {
      ...mechanicsScalarValues.es,
      "м/с": "m/s",
      "Гц": "Hz",
      "м": "m",
      "с": "s",
      "Скорость должна быть больше нуля": "La velocidad de la onda debe ser mayor que cero",
      "Частота должна быть больше нуля": "La frecuencia debe ser mayor que cero",
      "Длина волны должна быть больше нуля": "La longitud de onda debe ser mayor que cero"
    }
  }
};
