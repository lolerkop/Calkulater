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
  de: {
    fields: {
      'bill': 'Rechnungsbetrag',
      'tipPercent': 'Trinkgeld, %',
      'people': 'Personen',
      'roundPerPerson': 'Jeden Anteil aufrunden',
    },
    options: {
      'no': 'Nein',
      'yes': 'Ja',
    },
    results: {
      'Итого к оплате': 'Zu zahlen insgesamt',
      'Чаевые': 'Trinkgeld',
      'Счёт без чаевых': 'Rechnung ohne Trinkgeld',
      'С человека': 'Je Person',
      'Человек': 'Personen',
      'Сверх счёта из-за округления': 'Mehr als die Rechnung durch das Aufrunden',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      '₽': '€',
      'Сумма счёта должна быть больше нуля': 'Der Rechnungsbetrag muss größer als null sein',
      'Процент чаевых не может быть отрицательным': 'Der Trinkgeldsatz kann nicht negativ sein',
      'Человек должно быть не меньше одного': 'Es muss mindestens eine Person sein',
    },
  },
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
