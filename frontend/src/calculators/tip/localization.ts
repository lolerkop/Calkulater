import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Итого к оплате': 'Total to pay', 'Чаевые': 'Tip', 'Счёт без чаевых': 'Bill before tip',
  'С человека': 'Per person', 'Человек': 'People',
  'Сверх счёта из-за округления': 'Extra from rounding up', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Итого к оплате': 'Разом до сплати', 'Чаевые': 'Чайові', 'Счёт без чаевых': 'Рахунок без чайових',
  'С человека': 'З людини', 'Человек': 'Осіб',
  'Сверх счёта из-за округления': 'Понад рахунок через округлення', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { bill: 'Bill amount', tipPercent: 'Tip, %', people: 'People', roundPerPerson: 'Round each share up' },
    options: { no: 'No', yes: 'Yes' },
    results: RESULTS_EN,
    values: {
      '₽': '$',
      'Сумма счёта должна быть больше нуля': 'The bill must be greater than zero',
      'Процент чаевых не может быть отрицательным': 'The tip percentage cannot be negative',
      'Человек должно быть не меньше одного': 'There must be at least one person',
    },
  },
  uk: {
    fields: { bill: 'Сума рахунку', tipPercent: 'Чайові, %', people: 'Осіб', roundPerPerson: 'Округлювати частку вгору' },
    options: { no: 'Ні', yes: 'Так' },
    results: RESULTS_UK,
    values: {
      '₽': '₴',
      'Сумма счёта должна быть больше нуля': 'Сума рахунку має бути більшою за нуль',
      'Процент чаевых не может быть отрицательным': 'Відсоток чайових не може бути від’ємним',
      'Человек должно быть не меньше одного': 'Осіб має бути щонайменше одна',
    },
  },
};
