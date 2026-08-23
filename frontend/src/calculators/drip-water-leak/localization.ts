import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { drops: 'Drips per minute', price: 'Water price per m³', dropMl: 'Drop volume, ml' },
    options: {  },
    results: { 'Утекает за сутки': 'Lost per day', 'За месяц': 'Per month', 'За год': 'Per year', 'В кубометрах за год': 'In cubic metres per year', 'Стоимость за год': 'Cost per year', 'Проверьте данные': 'Check the values' },
    values: { 'м³': 'm³', 'Число капель в минуту должно быть больше нуля': 'The drips per minute must be greater than zero', 'Объём капли должен быть больше нуля': 'The drop volume must be greater than zero', 'Цена воды не может быть отрицательной': 'The price of water cannot be negative' },
  },
  uk: {
    fields: { drops: 'Крапель за хвилину', price: 'Ціна води, ₴ за м³', dropMl: 'Обʼєм краплі, мл' },
    options: {  },
    results: { 'Утекает за сутки': 'Витікає за добу', 'За месяц': 'За місяць', 'За год': 'За рік', 'В кубометрах за год': 'У кубометрах за рік', 'Стоимость за год': 'Вартість за рік', 'Проверьте данные': 'Перевірте дані' },
    values: { 'л': 'л', 'м³': 'м³', '₽': '₴', 'Число капель в минуту должно быть больше нуля': 'Кількість крапель за хвилину має бути більшою за нуль', 'Объём капли должен быть больше нуля': 'Обʼєм краплі має бути більшим за нуль', 'Цена воды не может быть отрицательной': 'Ціна води не може бути відʼємною' },
  },
};
