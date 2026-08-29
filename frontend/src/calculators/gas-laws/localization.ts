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
      'p1': 'Druck p₁, kPa',
      'v1': 'Volumen V₁, l',
      't1': 'Temperatur T₁, K',
      'p2': 'Druck p₂, kPa',
      'v2': 'Volumen V₂, l',
      't2': 'Temperatur T₂, K',
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
      mode: 'What to find', p1: 'Pressure p₁, kPa', v1: 'Volume V₁, l', t1: 'Temperature T₁, K',
      p2: 'Pressure p₂, kPa', v2: 'Volume V₂, l', t2: 'Temperature T₂, K',
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
      mode: 'Що знайти', p1: 'Тиск p₁, кПа', v1: "Об'єм V₁, л", t1: 'Температура T₁, К',
      p2: 'Тиск p₂, кПа', v2: "Об'єм V₂, л", t2: 'Температура T₂, К',
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
};
