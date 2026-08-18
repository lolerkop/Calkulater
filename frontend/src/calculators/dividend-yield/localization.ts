import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { dividend: 'Annual dividend per share', price: 'Share price', shares: 'Number of shares' },
    results: { 'Дивидендная доходность': 'Dividend yield', 'Дивиденд на акцию за год': 'Annual dividend per share', 'Дивиденды на пакет': 'Dividends on the holding', 'Стоимость пакета': 'Value of the holding', 'Проверьте данные': 'Check the values' },
    values: {
      'Цена акции должна быть больше нуля': 'The share price must be greater than zero',
      'Дивиденд не может быть отрицательным': 'The dividend cannot be negative',
    },
  },
  uk: {
    fields: { dividend: 'Річний дивіденд на акцію', price: 'Ціна акції', shares: 'Кількість акцій' },
    results: { 'Дивидендная доходность': 'Дивідендна дохідність', 'Дивиденд на акцию за год': 'Річний дивіденд на акцію', 'Дивиденды на пакет': 'Дивіденди на пакет', 'Стоимость пакета': 'Вартість пакета', 'Проверьте данные': 'Перевірте дані' },
    values: {
      'Цена акции должна быть больше нуля': 'Ціна акції має бути більшою за нуль',
      'Дивиденд не может быть отрицательным': 'Дивіденд не може бути від’ємним',
    },
  },
};
