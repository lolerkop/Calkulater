import type { CalculatorLocalization } from '../../lib/platform/types';
import { mechanicsScalarValues } from '../../lib/platform/mechanicsScalarLocalization';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "wavelengthNm": "Wellenlänge"
    },
    "results": {
      "Энергия фотона": "Photonenenergie",
      "В электронвольтах": "In Elektronenvolt",
      "Частота": "Frequenz",
      "Волновое число": "Wellenzahl",
      "Длина волны": "Wellenlänge",
      "Проверьте данные": "Prüfe die Werte"
    },
    "values": {
      ...mechanicsScalarValues.de,
      "Дж": "J",
      "эВ": "eV",
      "Гц": "Hz",
      "1/см": "1/cm",
      "нм": "nm",
      "Длина волны должна быть больше нуля": "Die Wellenlänge muss größer als null sein"
    }
  },
  "en": {
    "fields": {
      "wavelengthNm": "Wavelength"
    },
    "options": {},
    "results": {
      "Энергия фотона": "Photon energy",
      "В электронвольтах": "In electronvolts",
      "Частота": "Frequency",
      "Волновое число": "Wavenumber",
      "Длина волны": "Wavelength",
      "Проверьте данные": "Check the values"
    },
    "values": {
      ...mechanicsScalarValues.en,
      "Дж": "J",
      "эВ": "eV",
      "Гц": "Hz",
      "1/см": "1/cm",
      "нм": "nm",
      "Длина волны должна быть больше нуля": "The wavelength must be greater than zero"
    }
  },
  "uk": {
    "fields": {
      "wavelengthNm": "Довжина хвилі"
    },
    "options": {},
    "results": {
      "Энергия фотона": "Енергія фотона",
      "В электронвольтах": "В електронвольтах",
      "Частота": "Частота",
      "Волновое число": "Хвильове число",
      "Длина волны": "Довжина хвилі",
      "Проверьте данные": "Перевірте дані"
    },
    "values": {
      ...mechanicsScalarValues.uk,
      "Дж": "Дж",
      "эВ": "еВ",
      "Гц": "Гц",
      "1/см": "1/см",
      "нм": "нм",
      "Длина волны должна быть больше нуля": "Довжина хвилі має бути більшою за нуль"
    }
  },
  "es": {
    "fields": {
      "wavelengthNm": "Longitud de onda"
    },
    "options": {},
    "results": {
      "Энергия фотона": "Energía del fotón",
      "В электронвольтах": "En electronvoltios",
      "Частота": "Frecuencia",
      "Волновое число": "Número de onda",
      "Длина волны": "Longitud de onda",
      "Проверьте данные": "Revisa los datos"
    },
    "values": {
      ...mechanicsScalarValues.es,
      "Дж": "J",
      "эВ": "eV",
      "Гц": "Hz",
      "1/см": "1/cm",
      "нм": "nm",
      "Длина волны должна быть больше нуля": "La longitud de onda debe ser mayor que cero"
    }
  }
};
