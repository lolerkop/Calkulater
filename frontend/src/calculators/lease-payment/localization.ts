import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'price': 'Preis des Leasingguts',
      'down': 'Anzahlung',
      'residualPct': 'Restwertanteil, %',
      'months': 'Laufzeit, Monate',
      'rate': 'Jährlicher Aufschlag, %',
    },
    results: {
      'Ежемесячный платёж': 'Monatliche Rate',
      'Амортизационная часть': 'Abschreibungsanteil',
      'Процентная часть': 'Zinsanteil',
      'Остаточная стоимость': 'Restwert',
      'Всего выплат с авансом': 'Insgesamt gezahlt samt Anzahlung',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Стоимость предмета лизинга должна быть больше нуля': 'Der Preis des Leasingguts muss größer als null sein',
      'Аванс не может быть отрицательным': 'Die Anzahlung kann nicht negativ sein',
      'Аванс не может быть больше стоимости или равен ей': 'Die Anzahlung kann den Preis nicht erreichen',
      'Остаточная доля задаётся от 0 до 100 процентов': 'Der Restwertanteil liegt zwischen 0 und 100 Prozent',
      'Срок — целое число месяцев, не меньше одного': 'Die Laufzeit ist eine ganze Zahl von Monaten, mindestens eins',
      'Удорожание не может быть отрицательным': 'Der Aufschlag kann nicht negativ sein',
      'Остаточная стоимость не может быть выше профинансированной суммы': 'Der Restwert kann den finanzierten Betrag nicht übersteigen',
    },
  },
  en: {
    fields: {
      price: 'Asset price', down: 'Down payment', residualPct: 'Residual share, %',
      months: 'Term, months', rate: 'Annual markup, %',
    },
    options: {},
    results: {
      'Ежемесячный платёж': 'Monthly payment', 'Амортизационная часть': 'Depreciation part',
      'Процентная часть': 'Finance part', 'Остаточная стоимость': 'Residual value',
      'Всего выплат с авансом': 'Total paid including the down payment', 'Проверьте данные': 'Check the values',
    },
    values: {
      'Стоимость предмета лизинга должна быть больше нуля': 'The asset price must be greater than zero',
      'Аванс не может быть отрицательным': 'The down payment cannot be negative',
      'Аванс не может быть больше стоимости или равен ей': 'The down payment cannot reach the asset price',
      'Остаточная доля задаётся от 0 до 100 процентов': 'The residual share runs from 0 to 100 per cent',
      'Срок — целое число месяцев, не меньше одного': 'The term must be a whole number of months, at least one',
      'Удорожание не может быть отрицательным': 'The markup cannot be negative',
      'Остаточная стоимость не может быть выше профинансированной суммы':
        'The residual value cannot exceed the financed amount',
    },
  },
  uk: {
    fields: {
      price: 'Вартість предмета лізингу, ₴', down: 'Аванс, ₴', residualPct: 'Залишкова частка, %',
      months: 'Строк, місяців', rate: 'Подорожчання на рік, %',
    },
    options: {},
    results: {
      'Ежемесячный платёж': 'Щомісячний платіж', 'Амортизационная часть': 'Амортизаційна частина',
      'Процентная часть': 'Відсоткова частина', 'Остаточная стоимость': 'Залишкова вартість',
      'Всего выплат с авансом': 'Усього виплат з авансом', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      '₽': '₴',
      'Стоимость предмета лизинга должна быть больше нуля': 'Вартість предмета лізингу має бути більшою за нуль',
      'Аванс не может быть отрицательным': 'Аванс не може бути від’ємним',
      'Аванс не может быть больше стоимости или равен ей': 'Аванс не може досягати вартості',
      'Остаточная доля задаётся от 0 до 100 процентов': 'Залишкова частка задається від 0 до 100 відсотків',
      'Срок — целое число месяцев, не меньше одного': 'Строк — ціле число місяців, не менше одного',
      'Удорожание не может быть отрицательным': 'Подорожчання не може бути від’ємним',
      'Остаточная стоимость не может быть выше профинансированной суммы':
        'Залишкова вартість не може перевищувати профінансовану суму',
    },
  },
};
