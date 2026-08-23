import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { mode: 'What to find', n0: 'Initial amount, g', half: 'Half-life, years', t: 'Time elapsed, years', left: 'Remainder wanted, g' },
    options: { remaining: 'remaining after time', time: 'time to remainder' },
    results: { 'Остаток': 'Remaining', 'Время': 'Time', 'Распалось': 'Decayed', 'Осталось доли': 'Fraction left', 'Периодов полураспада прошло': 'Half-lives elapsed', 'Периодов полураспада': 'Half-lives', 'Среднее время жизни': 'Mean lifetime', 'Проверьте данные': 'Check the values' },
    values: { 'г': 'g', 'лет': 'years', '%': '%', 'Выберите режим расчёта из списка': 'Choose a calculation mode from the list', 'Период полураспада должен быть больше нуля': 'The half-life must be greater than zero', 'Исходное количество должно быть больше нуля': 'The initial amount must be greater than zero', 'Время не может быть отрицательным': 'The elapsed time cannot be negative', 'Остаток должен быть больше нуля': 'The remainder must be greater than zero', 'Остаток не может превышать исходное количество': 'The remainder cannot exceed the initial amount' },
  },
  uk: {
    fields: { mode: 'Що шукаємо', n0: 'Початкова кількість, г', half: 'Період напіврозпаду, років', t: 'Минуло часу, років', left: 'Потрібний залишок, г' },
    options: { remaining: 'залишок через час', time: 'час до залишку' },
    results: { 'Остаток': 'Залишок', 'Время': 'Час', 'Распалось': 'Розпалося', 'Осталось доли': 'Залишилася частка', 'Периодов полураспада прошло': 'Періодів напіврозпаду минуло', 'Периодов полураспада': 'Періодів напіврозпаду', 'Среднее время жизни': 'Середній час життя', 'Проверьте данные': 'Перевірте дані' },
    values: { 'г': 'г', 'лет': 'років', '%': '%', 'Выберите режим расчёта из списка': 'Оберіть режим розрахунку зі списку', 'Период полураспада должен быть больше нуля': 'Період напіврозпаду має бути більшим за нуль', 'Исходное количество должно быть больше нуля': 'Початкова кількість має бути більшою за нуль', 'Время не может быть отрицательным': 'Час не може бути відʼємним', 'Остаток должен быть больше нуля': 'Залишок має бути більшим за нуль', 'Остаток не может превышать исходное количество': 'Залишок не може перевищувати початкову кількість' },
  },
};
