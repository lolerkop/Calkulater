import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { received: 'Amount received', invested: 'Amount invested', extra: 'Additional costs' },
    results: { 'ROI': 'ROI', 'Прибыль': 'Profit', 'Всего вложено': 'Total invested', 'В том числе дополнительные затраты': 'Of which additional costs', 'Получено': 'Received', 'Проверьте данные': 'Check the values' },
    values: { 'Сумма вложений должна быть больше нуля': 'The invested amount must be greater than zero' },
  },
  uk: {
    fields: { received: 'Отримана сума', invested: 'Вкладена сума', extra: 'Додаткові витрати' },
    results: { 'ROI': 'ROI', 'Прибыль': 'Прибуток', 'Всего вложено': 'Усього вкладено', 'В том числе дополнительные затраты': 'Зокрема додаткові витрати', 'Получено': 'Отримано', 'Проверьте данные': 'Перевірте дані' },
    values: { 'Сумма вложений должна быть больше нуля': 'Сума вкладень має бути більшою за нуль' },
  },
};
