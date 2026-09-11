import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'price': 'Kaufpreis, €',
      'years': 'Jahre im Besitz',
      'ratePct': 'Jährlicher Verlust nach dem ersten Jahr, %',
      'firstYearPct': 'Verlust im ersten Jahr, %',
    },
    results: {
      'Стоимость через срок': 'Wert nach dem Zeitraum',
      'Потеряно в деньгах': 'Verlorener Wert',
      'Потеряно, доля': 'Verlorener Anteil',
      'Цена покупки': 'Kaufpreis',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Цена покупки должна быть больше нуля': 'Der Kaufpreis muss größer als null sein',
      'Срок владения не может быть отрицательным': 'Die Besitzdauer kann nicht negativ sein',
      'Ставка потери должна быть от нуля до ста процентов': 'Der Verlustsatz muss zwischen null und hundert Prozent liegen',
      'Потеря за первый год должна быть от нуля до ста процентов': 'Der Verlust im ersten Jahr muss zwischen null und hundert Prozent liegen',
    },
  },
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
  es: {
    fields: {
      "price": "Precio de compra, €",
      "years": "Años de propiedad",
      "ratePct": "Pérdida anual tras el primer año, %",
      "firstYearPct": "Pérdida del primer año, %",
    },
    options: {},
    results: {
      "Стоимость через срок": "Valor tras el periodo",
      "Потеряно в деньгах": "Valor perdido",
      "Потеряно, доля": "Proporción perdida",
      "Цена покупки": "Precio de compra",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Цена покупки должна быть больше нуля": "El precio de compra debe ser mayor que cero",
      "Срок владения не может быть отрицательным": "El periodo de propiedad no puede ser negativo",
      "Ставка потери должна быть от нуля до ста процентов": "La tasa de pérdida debe estar entre cero y cien por ciento",
      "Потеря за первый год должна быть от нуля до ста процентов": "La pérdida del primer año debe estar entre cero y cien por ciento",
    },
  },
};
