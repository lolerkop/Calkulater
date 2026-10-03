import type { CalculatorLocalization } from '../../lib/platform/types';

// Единицы принадлежат калькулятору: центральный словарь единиц трогать нельзя,
// это вернуло бы ручную регистрацию. Подстановка идёт по самому длинному ключу,
// поэтому « моль/л» выигрывает у « моль», а « г/моль» — у « г».
const RESULTS_EN = {
  'Давление': 'Pressure',
  'Объём': 'Volume',
  'Газовая постоянная': 'Gas constant',
  'Температура': 'Temperature',
  'Количество вещества': 'Amount of substance',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Давление': 'Тиск',
  'Объём': 'Об’єм',
  'Газовая постоянная': 'Газова стала',
  'Температура': 'Температура',
  'Количество вещества': 'Кількість речовини',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'solve': 'Was gesucht ist',
      'n': 'Stoffmenge',
      'tempUnit': 'Einheit der Temperatur',
      't': 'Temperatur',
      'volumeUnit': 'Einheit des Volumens',
      'v': 'Volumen',
      'pressureUnit': 'Einheit des Drucks',
      'p': 'Druck',
    },
    options: {
      'p': 'der Druck',
      'v': 'das Volumen',
      'k': 'Kelvin',
      'c': 'Grad Celsius',
      'm3': 'Kubikmeter',
      'l': 'Liter',
      'pa': 'Pascal',
      'kpa': 'Kilopascal',
      'atm': 'Atmosphären',
    },
    results: {
      'Давление': 'Druck',
      'Объём': 'Volumen',
      'Газовая постоянная': 'Gaskonstante',
      'Температура': 'Temperatur',
      'Количество вещества': 'Stoffmenge',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      ' моль/л': ' mol/l',
      ' г/моль': ' g/mol',
      ' моль': ' mol',
      ' г/л': ' g/l',
      ' г': ' g',
      ' мл': ' ml',
      ' л': ' l',
      ' кПа': ' kPa',
      ' атм': ' atm',
      ' Па': ' Pa',
      ' К': ' K',
      ' ppm': ' ppm',
      'Дж/(моль·К)': 'J/(mol·K)',
      'Температура не может быть ниже абсолютного нуля': 'Die Temperatur kann nicht unter dem absoluten Nullpunkt liegen',
      'Количество вещества должно быть больше нуля': 'Die Stoffmenge muss größer als null sein',
      'Объём должен быть больше нуля': 'Das Volumen muss größer als null sein',
      'Давление должно быть больше нуля': 'Der Druck muss größer als null sein',
      'Температура должна быть больше нуля': 'Die Temperatur muss größer als null sein',
    },
  },
  en: {
    fields: { solve: 'What to find', n: 'Amount of substance', tempUnit: 'Temperature unit', t: 'Temperature', volumeUnit: 'Volume unit', v: 'Volume', pressureUnit: 'Pressure unit', p: 'Pressure', },
    options: { p: 'the pressure', v: 'the volume', k: 'kelvin', c: 'degrees Celsius', m3: 'cubic metres', l: 'litres', pa: 'pascals', kpa: 'kilopascals', atm: 'atmospheres', },
    results: RESULTS_EN,
    values: {
      ' моль/л': ' mol/L',
      ' г/моль': ' g/mol',
      ' моль': ' mol',
      ' г/л': ' g/L',
      ' г': ' g',
      ' мл': ' mL',
      ' л': ' L',
      ' кПа': ' kPa',
      ' атм': ' atm',
      ' Па': ' Pa',
      ' К': ' K',
      ' ppm': ' ppm',
      'Дж/(моль·К)': 'J/(mol·K)',
      'Температура не может быть ниже абсолютного нуля': 'The temperature cannot be below absolute zero',
      'Количество вещества должно быть больше нуля': 'The amount of substance must be greater than zero',
      'Объём должен быть больше нуля': 'The volume must be greater than zero',
      'Давление должно быть больше нуля': 'The pressure must be greater than zero',
      'Температура должна быть больше нуля': 'The temperature must be greater than zero',
    },
  },
  uk: {
    fields: { solve: 'Що знайти', n: 'Кількість речовини', tempUnit: 'Одиниця температури', t: 'Температура', volumeUnit: 'Одиниця об’єму', v: 'Об’єм', pressureUnit: 'Одиниця тиску', p: 'Тиск', },
    options: { p: 'тиск', v: 'об’єм', k: 'кельвіни', c: 'градуси Цельсія', m3: 'кубометри', l: 'літри', pa: 'паскалі', kpa: 'кілопаскалі', atm: 'атмосфери', },
    results: RESULTS_UK,
    values: {
      ' моль/л': ' моль/л',
      ' г/моль': ' г/моль',
      ' моль': ' моль',
      ' г/л': ' г/л',
      ' мл': ' мл',
      ' кПа': ' кПа',
      ' атм': ' атм',
      ' Па': ' Па',
      ' К': ' К',
      'Дж/(моль·К)': 'Дж/(моль·К)',
      'Температура не может быть ниже абсолютного нуля': 'Температура не може бути нижчою за абсолютний нуль',
      'Количество вещества должно быть больше нуля': 'Кількість речовини має бути більшою за нуль',
      'Объём должен быть больше нуля': 'Об’єм має бути більшим за нуль',
      'Давление должно быть больше нуля': 'Тиск має бути більшим за нуль',
      'Температура должна быть больше нуля': 'Температура має бути більшою за нуль',
    },
  },
  es: {
    fields: {
      "solve": "Qué hallar",
      "n": "Cantidad de sustancia",
      "tempUnit": "Unidad de temperatura",
      "t": "Temperatura",
      "volumeUnit": "Unidad de volumen",
      "v": "Volumen",
      "pressureUnit": "Unidad de presión",
      "p": "Presión",
    },
    options: {
      "p": "la presión",
      "v": "el volumen",
      "k": "kelvin",
      "c": "grados Celsius",
      "m3": "metros cúbicos",
      "l": "litros",
      "pa": "pascales",
      "kpa": "kilopascales",
      "atm": "atmósferas",
    },
    results: {
      "Давление": "Presión",
      "Объём": "Volumen",
      "Газовая постоянная": "Constante de los gases",
      "Температура": "Temperatura",
      "Количество вещества": "Cantidad de sustancia",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      " моль/л": " mol/l",
      " г/моль": " g/mol",
      " моль": " mol",
      " г/л": " g/l",
      " г": " g",
      " мл": " ml",
      " л": " l",
      " кПа": " kPa",
      " атм": " atm",
      " Па": " Pa",
      " К": " K",
      " ppm": " ppm",
      "Дж/(моль·К)": "J/(mol·K)",
      "Температура не может быть ниже абсолютного нуля": "La temperatura no puede estar por debajo del cero absoluto",
      "Количество вещества должно быть больше нуля": "La cantidad de sustancia debe ser mayor que cero",
      "Объём должен быть больше нуля": "El volumen debe ser mayor que cero",
      "Давление должно быть больше нуля": "La presión debe ser mayor que cero",
      "Температура должна быть больше нуля": "La temperatura debe ser mayor que cero",
    },
  },
};

// Reviewed errors belong to this exact gas model, in every published locale.
const reviewedGasValues = {
  "en": {
    "Введите конечные числа во все известные поля": "Enter finite numbers in every known field",
    "Выберите поддерживаемый режим расчёта": "Choose a supported calculation mode",
    "Абсолютное давление, объём и температура в кельвинах должны быть больше нуля": "Absolute pressure, volume and Kelvin temperature must be greater than zero",
    "Результат выходит за числовой диапазон; проверьте масштаб величин": "The result is outside the numeric range; check the scale of the quantities",
    "Выберите поддерживаемые единицы": "Choose supported units",
    "0 K — формальный предел уравнения, а не физическое состояние идеального газа": "0 K is a formal limit of the equation, not a physical state of an ideal gas"
  },
  "uk": {
    "Введите конечные числа во все известные поля": "Введіть скінченні числа в усі відомі поля",
    "Выберите поддерживаемый режим расчёта": "Виберіть підтримуваний режим розрахунку",
    "Абсолютное давление, объём и температура в кельвинах должны быть больше нуля": "Абсолютний тиск, об’єм і температура в кельвінах мають бути більшими за нуль",
    "Результат выходит за числовой диапазон; проверьте масштаб величин": "Результат виходить за числовий діапазон; перевірте масштаб величин",
    "Выберите поддерживаемые единицы": "Виберіть підтримувані одиниці",
    "0 K — формальный предел уравнения, а не физическое состояние идеального газа": "0 K — формальна границя рівняння, а не фізичний стан ідеального газу"
  },
  "de": {
    "Введите конечные числа во все известные поля": "Gib endliche Zahlen in alle bekannten Felder ein",
    "Выберите поддерживаемый режим расчёта": "Wähle einen unterstützten Rechenmodus",
    "Абсолютное давление, объём и температура в кельвинах должны быть больше нуля": "Absoluter Druck, Volumen und Kelvin-Temperatur müssen größer als null sein",
    "Результат выходит за числовой диапазон; проверьте масштаб величин": "Das Ergebnis liegt außerhalb des Zahlenbereichs; prüfe die Größenordnung der Werte",
    "Выберите поддерживаемые единицы": "Wähle unterstützte Einheiten",
    "0 K — формальный предел уравнения, а не физическое состояние идеального газа": "0 K ist ein formaler Grenzfall der Gleichung und kein physikalischer Zustand eines idealen Gases"
  },
  "es": {
    "Введите конечные числа во все известные поля": "Introduce números finitos en todos los campos conocidos",
    "Выберите поддерживаемый режим расчёта": "Elige un modo de cálculo admitido",
    "Абсолютное давление, объём и температура в кельвинах должны быть больше нуля": "La presión absoluta, el volumen y la temperatura en kelvin deben ser mayores que cero",
    "Результат выходит за числовой диапазон; проверьте масштаб величин": "El resultado queda fuera del intervalo numérico; revisa la escala de las magnitudes",
    "Выберите поддерживаемые единицы": "Elige unidades admitidas",
    "0 K — формальный предел уравнения, а не физическое состояние идеального газа": "0 K es un límite formal de la ecuación, no un estado físico de un gas ideal"
  }
} as const;
for (const locale of ['en', 'uk', 'de', 'es'] as const) {
  Object.assign(localization[locale]!.values!, reviewedGasValues[locale]);
}
const limitLabels = { en: 'Model limit', uk: 'Границя моделі', de: 'Modellgrenze', es: 'Límite del modelo' };
for (const locale of ['en', 'uk', 'de', 'es'] as const) Object.assign(localization[locale]!.results!, { 'Предел модели': limitLabels[locale] });
