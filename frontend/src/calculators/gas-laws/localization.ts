import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Давление p₂': 'Pressure p₂', 'Объём V₂': 'Volume V₂', 'Температура T₂': 'Temperature T₂',
  'Состояние 1: p·V/T': 'State 1: p·V/T', 'Состояние 2: p·V/T': 'State 2: p·V/T',
  'Первое состояние': 'First state', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Давление p₂': 'Тиск p₂', 'Объём V₂': "Об'єм V₂", 'Температура T₂': 'Температура T₂',
  'Состояние 1: p·V/T': 'Стан 1: p·V/T', 'Состояние 2: p·V/T': 'Стан 2: p·V/T',
  'Первое состояние': 'Перший стан', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Was gesucht ist',
      'p1': 'Druck p₁',
      'v1': 'Volumen V₁',
      't1': 'Temperatur T₁',
      'p2': 'Druck p₂',
      'v2': 'Volumen V₂',
      't2': 'Temperatur T₂',
    },
    options: {
      'p2': 'Druck p₂',
      'v2': 'Volumen V₂',
      't2': 'Temperatur T₂',
    },
    results: {
      'Давление p₂': 'Druck p₂',
      'Объём V₂': 'Volumen V₂',
      'Температура T₂': 'Temperatur T₂',
      'Состояние 1: p·V/T': 'Zustand 1: p·V/T',
      'Состояние 2: p·V/T': 'Zustand 2: p·V/T',
      'Первое состояние': 'Erster Zustand',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'кПа·л/К': 'kPa·l/K',
      'кПа': 'kPa',
      'К': 'K',
      'Температура первого состояния должна быть больше нуля кельвинов': 'Die Temperatur des ersten Zustands muss über null Kelvin liegen',
      'Температура второго состояния должна быть больше нуля кельвинов': 'Die Temperatur des zweiten Zustands muss über null Kelvin liegen',
      'Давление второго состояния должно быть больше нуля': 'Der Druck des zweiten Zustands muss größer als null sein',
      'Давление и объём первого состояния должны быть больше нуля': 'Druck und Volumen des ersten Zustands müssen größer als null sein',
      'Объём второго состояния должен быть больше нуля': 'Das Volumen des zweiten Zustands muss größer als null sein',
    },
  },
  en: {
    fields: {
      mode: 'What to find', p1: 'Pressure p₁', v1: 'Volume V₁', t1: 'Temperature T₁',
      p2: 'Pressure p₂', v2: 'Volume V₂', t2: 'Temperature T₂',
    },
    options: { p2: 'pressure p₂', v2: 'volume V₂', t2: 'temperature T₂' },
    results: RESULTS_EN,
    values: {
      'кПа·л/К': 'kPa·l/K', 'кПа': 'kPa', 'К': 'K',
      'Температура первого состояния должна быть больше нуля кельвинов': 'The first-state temperature must be above zero kelvin',
      'Температура второго состояния должна быть больше нуля кельвинов': 'The second-state temperature must be above zero kelvin',
      'Давление второго состояния должно быть больше нуля': 'The second-state pressure must be greater than zero',
      'Давление и объём первого состояния должны быть больше нуля': 'The first-state pressure and volume must be greater than zero',
      'Объём второго состояния должен быть больше нуля': 'The second-state volume must be greater than zero',
    },
  },
  uk: {
    fields: {
      mode: 'Що знайти', p1: 'Тиск p₁', v1: "Об'єм V₁, л", t1: 'Температура T₁',
      p2: 'Тиск p₂', v2: "Об'єм V₂, л", t2: 'Температура T₂',
    },
    options: { p2: 'тиск p₂', v2: "об'єм V₂", t2: 'температуру T₂' },
    results: RESULTS_UK,
    values: {
      'кПа·л/К': 'кПа·л/К', 'кПа': 'кПа', 'л': 'л', 'К': 'К',
      'Температура первого состояния должна быть больше нуля кельвинов': 'Температура першого стану має бути більшою за нуль кельвінів',
      'Температура второго состояния должна быть больше нуля кельвинов': 'Температура другого стану має бути більшою за нуль кельвінів',
      'Давление второго состояния должно быть больше нуля': 'Тиск другого стану має бути більшим за нуль',
      'Давление и объём первого состояния должны быть больше нуля': "Тиск та об'єм першого стану мають бути більшими за нуль",
      'Объём второго состояния должен быть больше нуля': "Об'єм другого стану має бути більшим за нуль",
    },
  },
  es: {
    fields: {
      "mode": "Qué hallar",
      "p1": "Presión p₁",
      "v1": "Volumen V₁",
      "t1": "Temperatura T₁",
      "p2": "Presión p₂",
      "v2": "Volumen V₂",
      "t2": "Temperatura T₂",
    },
    options: {
      "p2": "presión p₂",
      "v2": "volumen V₂",
      "t2": "temperatura T₂",
    },
    results: {
      "Давление p₂": "Presión p₂",
      "Объём V₂": "Volumen V₂",
      "Температура T₂": "Temperatura T₂",
      "Состояние 1: p·V/T": "Estado 1: p·V/T",
      "Состояние 2: p·V/T": "Estado 2: p·V/T",
      "Первое состояние": "Primer estado",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "кПа·л/К": "kPa·l/K",
      "кПа": "kPa",
      "К": "K",
      "Температура первого состояния должна быть больше нуля кельвинов": "La temperatura del primer estado debe estar por encima de cero kelvin",
      "Температура второго состояния должна быть больше нуля кельвинов": "La temperatura del segundo estado debe estar por encima de cero kelvin",
      "Давление второго состояния должно быть больше нуля": "La presión del segundo estado debe ser mayor que cero",
      "Давление и объём первого состояния должны быть больше нуля": "La presión y el volumen del primer estado deben ser mayores que cero",
      "Объём второго состояния должен быть больше нуля": "El volumen del segundo estado debe ser mayor que cero",
    },
  },
};

// Reviewed errors belong to this exact gas model, in every published locale.
const reviewedGasValues = {
  "en": {
    "Введите конечные числа во все известные поля": "Enter finite numbers in every known field",
    "Выберите поддерживаемый режим расчёта": "Choose a supported calculation mode",
    "Абсолютное давление, объём и температура в кельвинах должны быть больше нуля": "Absolute pressure, volume and Kelvin temperature must be greater than zero",
    "Результат выходит за числовой диапазон; проверьте масштаб величин": "The result is outside the numeric range; check the scale of the quantities"
  },
  "uk": {
    "Введите конечные числа во все известные поля": "Введіть скінченні числа в усі відомі поля",
    "Выберите поддерживаемый режим расчёта": "Виберіть підтримуваний режим розрахунку",
    "Абсолютное давление, объём и температура в кельвинах должны быть больше нуля": "Абсолютний тиск, об’єм і температура в кельвінах мають бути більшими за нуль",
    "Результат выходит за числовой диапазон; проверьте масштаб величин": "Результат виходить за числовий діапазон; перевірте масштаб величин"
  },
  "de": {
    "Введите конечные числа во все известные поля": "Gib endliche Zahlen in alle bekannten Felder ein",
    "Выберите поддерживаемый режим расчёта": "Wähle einen unterstützten Rechenmodus",
    "Абсолютное давление, объём и температура в кельвинах должны быть больше нуля": "Absoluter Druck, Volumen und Kelvin-Temperatur müssen größer als null sein",
    "Результат выходит за числовой диапазон; проверьте масштаб величин": "Das Ergebnis liegt außerhalb des Zahlenbereichs; prüfe die Größenordnung der Werte"
  },
  "es": {
    "Введите конечные числа во все известные поля": "Introduce números finitos en todos los campos conocidos",
    "Выберите поддерживаемый режим расчёта": "Elige un modo de cálculo admitido",
    "Абсолютное давление, объём и температура в кельвинах должны быть больше нуля": "La presión absoluta, el volumen y la temperatura en kelvin deben ser mayores que cero",
    "Результат выходит за числовой диапазон; проверьте масштаб величин": "El resultado queda fuera del intervalo numérico; revisa la escala de las magnitudes"
  }
} as const;
for (const locale of ['en', 'uk', 'de', 'es'] as const) {
  Object.assign(localization[locale]!.values!, reviewedGasValues[locale]);
}
