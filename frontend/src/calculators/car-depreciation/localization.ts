import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      price: 'Purchase price, ₽',
      years: 'Years of ownership',
      ratePct: 'Annual loss after the first year, %',
      firstYearPct: 'Loss in the first year, %',
    },
    results: {
      'Стоимость через срок': 'Value after the period',
      'Потеряно в деньгах': 'Value lost',
      'Потеряно, доля': 'Share lost',
      'Цена покупки': 'Purchase price',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Цена покупки должна быть больше нуля': 'The purchase price must be greater than zero',
      'Срок владения не может быть отрицательным': 'The ownership period cannot be negative',
      'Ставка потери должна быть от нуля до ста процентов': 'The loss rate must be between zero and one hundred per cent',
      'Потеря за первый год должна быть от нуля до ста процентов': 'The first-year loss must be between zero and one hundred per cent',
    },
  },
  uk: {
    fields: {
      price: 'Ціна купівлі, ₽',
      years: 'Років володіння',
      ratePct: 'Річна втрата після першого року, %',
      firstYearPct: 'Втрата за перший рік, %',
    },
    results: {
      'Стоимость через срок': 'Вартість через строк',
      'Потеряно в деньгах': 'Втрачено у грошах',
      'Потеряно, доля': 'Втрачено, частка',
      'Цена покупки': 'Ціна купівлі',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Цена покупки должна быть больше нуля': 'Ціна купівлі має бути більшою за нуль',
      'Срок владения не может быть отрицательным': 'Строк володіння не може бути від’ємним',
      'Ставка потери должна быть от нуля до ста процентов': 'Ставка втрати має бути від нуля до ста відсотків',
      'Потеря за первый год должна быть от нуля до ста процентов': 'Втрата за перший рік має бути від нуля до ста відсотків',
    },
  },
};
