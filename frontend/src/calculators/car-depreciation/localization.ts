import { automotiveMessages } from '../engine-displacement/automotiveMessages';
import type { CalculatorLocalization } from '../../lib/platform/types';

const originalLocalization: CalculatorLocalization = {
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
      'Годовая ставка должна быть от 0 включительно до 100 % исключительно': 'Der Jahressatz muss mindestens 0 % und kleiner als 100 % sein',
      'Потеря за первый год должна быть от 0 включительно до 100 % исключительно': 'Der Verlust im ersten Jahr muss mindestens 0 % und kleiner als 100 % sein',
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
      'Годовая ставка должна быть от 0 включительно до 100 % исключительно': 'The annual rate must be at least 0% and less than 100%',
      'Потеря за первый год должна быть от 0 включительно до 100 % исключительно': 'The first-year loss must be at least 0% and less than 100%',
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
      'Годовая ставка должна быть от 0 включительно до 100 % исключительно': 'Річна ставка має бути від 0 включно до 100 % виключно',
      'Потеря за первый год должна быть от 0 включительно до 100 % исключительно': 'Втрата за перший рік має бути від 0 включно до 100 % виключно',
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
      "Годовая ставка должна быть от 0 включительно до 100 % исключительно": "La tasa anual debe ser al menos del 0 % y menor del 100 %",
      "Потеря за первый год должна быть от 0 включительно до 100 % исключительно": "La pérdida del primer año debe ser al menos del 0 % y menor del 100 %",
    },
  },
};

export const localization: CalculatorLocalization = Object.fromEntries(
  Object.entries(originalLocalization).map(([locale, bundle]) => [locale, { ...bundle, values: { ...bundle.values, ...automotiveMessages[locale as keyof typeof automotiveMessages] } }]),
);
