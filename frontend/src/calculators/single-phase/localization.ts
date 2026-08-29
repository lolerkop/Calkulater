import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Was gesucht ist',
      'voltage': 'Spannung, V',
      'current': 'Strom, A',
      'power': 'Wirkleistung, W',
      'powerFactor': 'Leistungsfaktor cos φ',
    },
    options: {
      'P': 'Leistung aus dem Strom',
      'current': 'Strom aus der Leistung',
    },
    results: {
      'Активная мощность': 'Wirkleistung',
      'Полная мощность': 'Scheinleistung',
      'Реактивная мощность': 'Blindleistung',
      'Ток': 'Strom',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Вт': 'W',
      'ВА': 'VA',
      'вар': 'var',
      'А': 'A',
      'Напряжение должно быть больше нуля': 'Die Spannung muss größer als null sein',
      'Коэффициент мощности должен быть больше нуля и не больше единицы': 'Der Leistungsfaktor muss über null und höchstens eins sein',
      'Активная мощность должна быть больше нуля': 'Die Wirkleistung muss größer als null sein',
      'Ток должен быть больше нуля': 'Der Strom muss größer als null sein',
    },
  },
  en: {
    fields: {
      mode: 'What to find',
      voltage: 'Voltage, V',
      current: 'Current, A',
      power: 'Active power, W',
      powerFactor: 'Power factor cos φ',
    },
    options: {
      P: 'power from current',
      current: 'current from power',
    },
    results: {
      'Активная мощность': 'Active power',
      'Полная мощность': 'Apparent power',
      'Реактивная мощность': 'Reactive power',
      'Ток': 'Current',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Вт': 'W', 'ВА': 'VA', 'вар': 'var', 'А': 'A',
      'Напряжение должно быть больше нуля': 'The voltage must be greater than zero',
      'Коэффициент мощности должен быть больше нуля и не больше единицы': 'The power factor must be above zero and at most one',
      'Активная мощность должна быть больше нуля': 'The active power must be greater than zero',
      'Ток должен быть больше нуля': 'The current must be greater than zero',
    },
  },
  uk: {
    fields: {
      mode: 'Що знайти',
      voltage: 'Напруга, В',
      current: 'Струм, А',
      power: 'Активна потужність, Вт',
      powerFactor: 'Коефіцієнт потужності cos φ',
    },
    options: {
      P: 'потужність за струмом',
      current: 'струм за потужністю',
    },
    results: {
      'Активная мощность': 'Активна потужність',
      'Полная мощность': 'Повна потужність',
      'Реактивная мощность': 'Реактивна потужність',
      'Ток': 'Струм',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Вт': 'Вт', 'ВА': 'ВА', 'вар': 'вар', 'А': 'А',
      'Напряжение должно быть больше нуля': 'Напруга має бути більшою за нуль',
      'Коэффициент мощности должен быть больше нуля и не больше единицы': 'Коефіцієнт потужності має бути більшим за нуль і не більшим за одиницю',
      'Активная мощность должна быть больше нуля': 'Активна потужність має бути більшою за нуль',
      'Ток должен быть больше нуля': 'Струм має бути більшим за нуль',
    },
  },
};
