import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'sent': 'Versandte E-Mails',
      'delivered': 'Zugestellt',
      'opened': 'Geöffnet',
      'clicked': 'Geklickt',
    },
    results: {
      'Доставляемость': 'Zustellrate',
      'Открываемость': 'Öffnungsrate',
      'Кликабельность': 'Klickrate',
      'Кликов на открытие': 'Klicks je Öffnung',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Число отправленных писем должно быть больше нуля': 'Die Zahl der versandten E-Mails muss größer als null sein',
      'Доставлено не может быть больше, чем отправлено': 'Zugestellt kann nicht größer als versandt sein',
      'Открыто не может быть больше, чем доставлено': 'Geöffnet kann nicht größer als zugestellt sein',
      'Кликов не может быть больше, чем открытий': 'Klicks können nicht größer als Öffnungen sein',
    },
  },
  en: {
    fields: {
      sent: 'Emails sent',
      delivered: 'Delivered',
      opened: 'Opened',
      clicked: 'Clicked',
    },
    results: {
      'Доставляемость': 'Delivery rate',
      'Открываемость': 'Open rate',
      'Кликабельность': 'Click rate',
      'Кликов на открытие': 'Click-to-open rate',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Число отправленных писем должно быть больше нуля': 'The number of emails sent must be greater than zero',
      'Доставлено не может быть больше, чем отправлено': 'Delivered cannot exceed sent',
      'Открыто не может быть больше, чем доставлено': 'Opened cannot exceed delivered',
      'Кликов не может быть больше, чем открытий': 'Clicks cannot exceed opens',
    },
  },
  uk: {
    fields: {
      sent: 'Надіслано листів',
      delivered: 'Доставлено',
      opened: 'Відкрито',
      clicked: 'Кліків',
    },
    results: {
      'Доставляемость': 'Доставлюваність',
      'Открываемость': 'Відкриваність',
      'Кликабельность': 'Клікабельність',
      'Кликов на открытие': 'Кліків на відкриття',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Число отправленных писем должно быть больше нуля': 'Кількість надісланих листів має бути більшою за нуль',
      'Доставлено не может быть больше, чем отправлено': 'Доставлено не може перевищувати надіслане',
      'Открыто не может быть больше, чем доставлено': 'Відкрито не може перевищувати доставлене',
      'Кликов не может быть больше, чем открытий': 'Кліків не може бути більше, ніж відкриттів',
    },
  },
};
