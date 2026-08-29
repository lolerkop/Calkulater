import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Was bekannt ist',
      'oldSalary': 'Bisheriges Gehalt, €',
      'newSalary': 'Neues Gehalt, €',
      'raisePct': 'Erhöhung, %',
    },
    options: {
      'fromNew': 'das neue Gehalt',
      'fromPct': 'der Prozentsatz der Erhöhung',
    },
    results: {
      'Изменение': 'Veränderung',
      'Новая зарплата': 'Neues Gehalt',
      'Разница': 'Unterschied',
      'Было': 'Vorher',
      'Стало': 'Nachher',
      'Множитель': 'Faktor',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Прежняя зарплата должна быть больше нуля': 'Das bisherige Gehalt muss größer als null sein',
      'Новая зарплата должна быть больше нуля': 'Das neue Gehalt muss größer als null sein',
    },
  },
  en: {
    fields: {
      mode: 'What is known',
      oldSalary: 'Previous salary, ₽',
      newSalary: 'New salary, ₽',
      raisePct: 'Raise, %',
    },
    options: { fromNew: 'the new salary', fromPct: 'the raise percentage' },
    results: {
      'Изменение': 'Change',
      'Новая зарплата': 'New salary',
      'Разница': 'Difference',
      'Было': 'Before',
      'Стало': 'After',
      'Множитель': 'Multiple',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Прежняя зарплата должна быть больше нуля': 'The previous salary must be greater than zero',
      'Новая зарплата должна быть больше нуля': 'The new salary must be greater than zero',
    },
  },
  uk: {
    fields: {
      mode: 'Що відомо',
      oldSalary: 'Попередня зарплата, ₽',
      newSalary: 'Нова зарплата, ₽',
      raisePct: 'Підвищення, %',
    },
    options: { fromNew: 'нова зарплата', fromPct: 'відсоток підвищення' },
    results: {
      'Изменение': 'Зміна',
      'Новая зарплата': 'Нова зарплата',
      'Разница': 'Різниця',
      'Было': 'Було',
      'Стало': 'Стало',
      'Множитель': 'Множник',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Прежняя зарплата должна быть больше нуля': 'Попередня зарплата має бути більшою за нуль',
      'Новая зарплата должна быть больше нуля': 'Нова зарплата має бути більшою за нуль',
    },
  },
};
