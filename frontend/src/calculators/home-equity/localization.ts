import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'value': 'Verkehrswert der Immobilie',
      'balance': 'Restschuld der Baufinanzierung',
      'ltv': 'Zulässiger Beleihungsauslauf, %',
      'rate': 'Jahreszins, %',
      'years': 'Laufzeit, Jahre',
    },
    results: {
      'Доступная сумма': 'Verfügbarer Betrag',
      'Собственный капитал в жилье': 'Eigenkapital in der Immobilie',
      'Предел по доле залога': 'Grenze des Beleihungsauslaufs',
      'Доля собственного капитала': 'Anteil des Eigenkapitals',
      'Платёж по такому кредиту': 'Rate für dieses Darlehen',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      '%': '%',
      'Стоимость жилья должна быть больше нуля': 'Der Wert der Immobilie muss größer als null sein',
      'Остаток долга не может быть отрицательным': 'Die Restschuld kann nicht negativ sein',
      'Остаток долга не может превышать стоимость жилья': 'Die Restschuld kann den Wert der Immobilie nicht übersteigen',
      'Доля залога задаётся от 0 до 100 процентов': 'Der Beleihungsauslauf liegt zwischen 0 und 100 Prozent',
      'Ставка не может быть отрицательной': 'Der Zinssatz kann nicht negativ sein',
      'Срок должен быть больше нуля': 'Die Laufzeit muss größer als null sein',
    },
  },
  en: {
    fields: {
      value: 'Market value of the home', balance: 'Outstanding mortgage balance',
      ltv: 'Allowed loan-to-value, %', rate: 'Annual rate, %', years: 'Term, years',
    },
    options: {},
    results: {
      'Доступная сумма': 'Amount available', 'Собственный капитал в жилье': 'Equity in the home',
      'Предел по доле залога': 'Loan-to-value limit', 'Доля собственного капитала': 'Equity share',
      'Платёж по такому кредиту': 'Payment on that loan', 'Проверьте данные': 'Check the values',
    },
    values: {
      '%': '%',
      'Стоимость жилья должна быть больше нуля': 'The value of the home must be greater than zero',
      'Остаток долга не может быть отрицательным': 'The outstanding balance cannot be negative',
      'Остаток долга не может превышать стоимость жилья': 'The outstanding balance cannot exceed the value of the home',
      'Доля залога задаётся от 0 до 100 процентов': 'The loan-to-value runs from 0 to 100 per cent',
      'Ставка не может быть отрицательной': 'The rate cannot be negative',
      'Срок должен быть больше нуля': 'The term must be greater than zero',
    },
  },
  uk: {
    fields: {
      value: 'Ринкова вартість житла, ₴', balance: 'Залишок за іпотекою, ₴',
      ltv: 'Допустима частка застави, %', rate: 'Ставка, % річних', years: 'Строк, років',
    },
    options: {},
    results: {
      'Доступная сумма': 'Доступна сума', 'Собственный капитал в жилье': 'Власний капітал у житлі',
      'Предел по доле залога': 'Межа за часткою застави', 'Доля собственного капитала': 'Частка власного капіталу',
      'Платёж по такому кредиту': 'Платіж за таким кредитом', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      '₽': '₴', '%': '%',
      'Стоимость жилья должна быть больше нуля': 'Вартість житла має бути більшою за нуль',
      'Остаток долга не может быть отрицательным': 'Залишок боргу не може бути відʼємним',
      'Остаток долга не может превышать стоимость жилья': 'Залишок боргу не може перевищувати вартість житла',
      'Доля залога задаётся от 0 до 100 процентов': 'Частка застави задається від 0 до 100 відсотків',
      'Ставка не может быть отрицательной': 'Ставка не може бути відʼємною',
      'Срок должен быть больше нуля': 'Строк має бути більшим за нуль',
    },
  },
};
