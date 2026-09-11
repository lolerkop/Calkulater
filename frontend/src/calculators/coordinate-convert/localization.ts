import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Десятичные градусы': 'Decimal degrees', 'Градусы, минуты, секунды': 'Degrees, minutes, seconds',
  'Полушарие': 'Hemisphere', 'Только градусы и минуты': 'Degrees and minutes only',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Десятичные градусы': 'Десяткові градуси', 'Градусы, минуты, секунды': 'Градуси, хвилини, секунди',
  'Полушарие': 'Півкуля', 'Только градусы и минуты': 'Лише градуси та хвилини',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Richtung',
      'deg': 'Grad',
      'minutes': 'Minuten',
      'seconds': 'Sekunden',
      'hemisphere': 'Halbkugel',
      'decimal': 'Dezimalgrad',
    },
    options: {
      'toDecimal': 'GMS → dezimal',
      'toDms': 'dezimal → GMS',
      'N': 'Nord oder Ost',
      'S': 'Süd oder West',
    },
    results: {
      'Десятичные градусы': 'Dezimalgrad',
      'Градусы, минуты, секунды': 'Grad, Minuten, Sekunden',
      'Полушарие': 'Halbkugel',
      'Только градусы и минуты': 'Nur Grad und Minuten',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'северное или восточное': 'Nord oder Ost',
      'южное или западное': 'Süd oder West',
      'Десятичные градусы должны быть от −180 до 180': 'Dezimalgrad müssen zwischen −180 und 180 liegen',
      'Градусы должны быть от 0 до 180': 'Die Grad müssen zwischen 0 und 180 liegen',
      'Минуты должны быть от 0 до 59': 'Die Minuten müssen zwischen 0 und 59 liegen',
      'Секунды должны быть от 0 до 59': 'Die Sekunden müssen zwischen 0 und 59 liegen',
      'Итог превышает 180 градусов': 'Das Ergebnis übersteigt 180 Grad',
    },
  },
  en: {
    fields: {
      mode: 'Direction', deg: 'Degrees', minutes: 'Minutes', seconds: 'Seconds',
      hemisphere: 'Hemisphere', decimal: 'Decimal degrees',
    },
    options: {
      toDecimal: 'DMS → decimal', toDms: 'decimal → DMS',
      N: 'north or east', S: 'south or west',
    },
    results: RESULTS_EN,
    values: {
      'северное или восточное': 'north or east', 'южное или западное': 'south or west',
      'Десятичные градусы должны быть от −180 до 180': 'Decimal degrees must be between −180 and 180',
      'Градусы должны быть от 0 до 180': 'Degrees must be between 0 and 180',
      'Минуты должны быть от 0 до 59': 'Minutes must be between 0 and 59',
      'Секунды должны быть от 0 до 59': 'Seconds must be between 0 and 59',
      'Итог превышает 180 градусов': 'The result exceeds 180 degrees',
    },
  },
  uk: {
    fields: {
      mode: 'Напрям переведення', deg: 'Градуси', minutes: 'Хвилини', seconds: 'Секунди',
      hemisphere: 'Півкуля', decimal: 'Десяткові градуси',
    },
    options: {
      toDecimal: 'ГХС → десяткові', toDms: 'десяткові → ГХС',
      N: 'північна або східна', S: 'південна або західна',
    },
    results: RESULTS_UK,
    values: {
      'северное или восточное': 'північна або східна', 'южное или западное': 'південна або західна',
      'Десятичные градусы должны быть от −180 до 180': 'Десяткові градуси мають бути від −180 до 180',
      'Градусы должны быть от 0 до 180': 'Градуси мають бути від 0 до 180',
      'Минуты должны быть от 0 до 59': 'Хвилини мають бути від 0 до 59',
      'Секунды должны быть от 0 до 59': 'Секунди мають бути від 0 до 59',
      'Итог превышает 180 градусов': 'Підсумок перевищує 180 градусів',
    },
  },
  es: {
    fields: {
      "mode": "Sentido",
      "deg": "Grados",
      "minutes": "Minutos",
      "seconds": "Segundos",
      "hemisphere": "Hemisferio",
      "decimal": "Grados decimales",
    },
    options: {
      "toDecimal": "GMS → decimales",
      "toDms": "decimales → GMS",
      "N": "norte o este",
      "S": "sur u oeste",
    },
    results: {
      "Десятичные градусы": "Grados decimales",
      "Градусы, минуты, секунды": "Grados, minutos y segundos",
      "Полушарие": "Hemisferio",
      "Только градусы и минуты": "Solo grados y minutos",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "северное или восточное": "norte o este",
      "южное или западное": "sur u oeste",
      "Десятичные градусы должны быть от −180 до 180": "Los grados decimales deben estar entre −180 y 180",
      "Градусы должны быть от 0 до 180": "Los grados deben estar entre 0 y 180",
      "Минуты должны быть от 0 до 59": "Los minutos deben estar entre 0 y 59",
      "Секунды должны быть от 0 до 59": "Los segundos deben estar entre 0 y 59",
      "Итог превышает 180 градусов": "El resultado supera los 180 grados",
    },
  },
};
