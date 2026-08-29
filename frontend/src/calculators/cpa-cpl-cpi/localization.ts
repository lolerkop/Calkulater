import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Was gezählt wird',
      'cost': 'Werbebudget, €',
      'actions': 'Erhaltene Handlungen',
    },
    options: {
      'cpa': 'beliebige Zielhandlung (CPA)',
      'cpl': 'Anfrage oder Kontakt (CPL)',
      'cpi': 'App-Installation (CPI)',
    },
    results: {
      'CPA — цена действия': 'CPA — Kosten je Handlung',
      'CPL — цена заявки': 'CPL — Kosten je Anfrage',
      'CPI — цена установки': 'CPI — Kosten je Installation',
      'Бюджет': 'Budget',
      'Действий': 'Handlungen',
      'На тысячу действий': 'Je tausend Handlungen',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Бюджет должен быть больше нуля': 'Das Budget muss größer als null sein',
      'Число действий должно быть больше нуля': 'Die Zahl der Handlungen muss größer als null sein',
    },
  },
  en: {
    fields: {
      mode: 'What is being counted',
      cost: 'Advertising budget, ₽',
      actions: 'Actions received',
    },
    options: {
      cpa: 'any target action (CPA)',
      cpl: 'lead or enquiry (CPL)',
      cpi: 'app install (CPI)',
    },
    results: {
      'CPA — цена действия': 'CPA — cost per action',
      'CPL — цена заявки': 'CPL — cost per lead',
      'CPI — цена установки': 'CPI — cost per install',
      'Бюджет': 'Budget',
      'Действий': 'Actions',
      'На тысячу действий': 'Per thousand actions',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Бюджет должен быть больше нуля': 'The budget must be greater than zero',
      'Число действий должно быть больше нуля': 'The number of actions must be greater than zero',
    },
  },
  uk: {
    fields: {
      mode: 'Що рахуємо',
      cost: 'Рекламний бюджет, ₽',
      actions: 'Отримано дій',
    },
    options: {
      cpa: 'будь-яка цільова дія (CPA)',
      cpl: 'заявка або лід (CPL)',
      cpi: 'встановлення застосунку (CPI)',
    },
    results: {
      'CPA — цена действия': 'CPA — ціна дії',
      'CPL — цена заявки': 'CPL — ціна заявки',
      'CPI — цена установки': 'CPI — ціна встановлення',
      'Бюджет': 'Бюджет',
      'Действий': 'Дій',
      'На тысячу действий': 'На тисячу дій',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Бюджет должен быть больше нуля': 'Бюджет має бути більшим за нуль',
      'Число действий должно быть больше нуля': 'Кількість дій має бути більшою за нуль',
    },
  },
};
