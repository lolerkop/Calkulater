import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'd': 'Rotordurchmesser, m',
      'v': 'Windgeschwindigkeit, m/s',
      'cp': 'Leistungsbeiwert',
      'rho': 'Luftdichte, kg/m³',
    },
    results: {
      'Снимаемая мощность': 'Entnommene Leistung',
      'Мощность потока': 'Leistung im Wind',
      'Ометаемая площадь': 'Überstrichene Fläche',
      'Предел Бетца': 'Betz-Grenze',
      'Выработка за сутки': 'Ertrag am Tag',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'кВт': 'kW',
      'м²': 'm²',
      'кВт·ч': 'kWh',
      'Диаметр должен быть больше нуля': 'Der Durchmesser muss größer als null sein',
      'Скорость ветра не может быть отрицательной': 'Die Windgeschwindigkeit kann nicht negativ sein',
      'Плотность воздуха должна быть больше нуля': 'Die Luftdichte muss größer als null sein',
      'Коэффициент использования не может превышать предел Бетца 0,593': 'Der Leistungsbeiwert kann die Betz-Grenze von 0,593 nicht übersteigen',
    },
  },
  en: {
    fields: {
      d: 'Rotor diameter, m', v: 'Wind speed, m/s',
      cp: 'Power coefficient', rho: 'Air density, kg/m³',
    },
    options: {},
    results: {
      'Снимаемая мощность': 'Power extracted', 'Мощность потока': 'Power in the wind',
      'Ометаемая площадь': 'Swept area', 'Предел Бетца': 'Betz limit',
      'Выработка за сутки': 'Output per day', 'Проверьте данные': 'Check the values',
    },
    values: {
      'кВт': 'kW', 'м²': 'm²', 'кВт·ч': 'kWh',
      'Диаметр должен быть больше нуля': 'The diameter must be greater than zero',
      'Скорость ветра не может быть отрицательной': 'The wind speed cannot be negative',
      'Плотность воздуха должна быть больше нуля': 'The air density must be greater than zero',
      'Коэффициент использования не может превышать предел Бетца 0,593': 'The power coefficient cannot exceed the Betz limit of 0.593',
    },
  },
  uk: {
    fields: {
      d: 'Діаметр вітроколеса, м', v: 'Швидкість вітру, м/с',
      cp: 'Коефіцієнт використання', rho: 'Густина повітря, кг/м³',
    },
    options: {},
    results: {
      'Снимаемая мощность': 'Знімана потужність', 'Мощность потока': 'Потужність потоку',
      'Ометаемая площадь': 'Оміта площа', 'Предел Бетца': 'Межа Бетца',
      'Выработка за сутки': 'Виробіток за добу', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'кВт': 'кВт', 'м²': 'м²', 'кВт·ч': 'кВт·год',
      'Диаметр должен быть больше нуля': 'Діаметр має бути більшим за нуль',
      'Скорость ветра не может быть отрицательной': 'Швидкість вітру не може бути відʼємною',
      'Плотность воздуха должна быть больше нуля': 'Густина повітря має бути більшою за нуль',
      'Коэффициент использования не может превышать предел Бетца 0,593': 'Коефіцієнт використання не може перевищувати межу Бетца 0,593',
    },
  },
};
