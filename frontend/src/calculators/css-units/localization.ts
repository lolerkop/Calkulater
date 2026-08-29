import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'value': 'Wert',
      'fromUnit': 'Von Einheit',
      'toUnit': 'Nach Einheit',
      'rootSize': 'Wurzelschriftgröße, px',
      'parentSize': 'Schriftgröße des Elternelements, px',
    },
    options: {
      'px': 'px',
      'rem': 'rem',
      'em': 'em',
      'pt': 'pt',
      'pc': 'pc',
      'in': 'in',
      'cm': 'cm',
      'mm': 'mm',
    },
    results: {
      'Результат перевода': 'Umgerechneter Wert',
      'В пикселях': 'In Pixeln',
      'В rem': 'In rem',
      'В em': 'In em',
      'В пунктах': 'In Punkt',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Корневой размер шрифта должен быть больше нуля': 'Die Wurzelschriftgröße muss größer als null sein',
      'Размер шрифта родителя должен быть больше нуля': 'Die Schriftgröße des Elternelements muss größer als null sein',
      'Выберите единицы из списка': 'Wähle Einheiten aus der Liste',
    },
  },
  en: {
    fields: {
      value: 'Value',
      fromUnit: 'From unit',
      toUnit: 'To unit',
      rootSize: 'Root font size, px',
      parentSize: 'Parent font size, px',
    },
    options: {
      px: 'px', rem: 'rem', em: 'em', pt: 'pt', pc: 'pc', in: 'in', cm: 'cm', mm: 'mm',
    },
    results: {
      'Результат перевода': 'Converted value',
      'В пикселях': 'In pixels',
      'В rem': 'In rem',
      'В em': 'In em',
      'В пунктах': 'In points',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Корневой размер шрифта должен быть больше нуля': 'The root font size must be greater than zero',
      'Размер шрифта родителя должен быть больше нуля': 'The parent font size must be greater than zero',
      'Выберите единицы из списка': 'Choose units from the list',
    },
  },
  uk: {
    fields: {
      value: 'Значення',
      fromUnit: 'З одиниці',
      toUnit: 'В одиницю',
      rootSize: 'Кореневий розмір шрифту, px',
      parentSize: 'Розмір шрифту батька, px',
    },
    options: {
      px: 'px', rem: 'rem', em: 'em', pt: 'pt', pc: 'pc', in: 'in', cm: 'cm', mm: 'mm',
    },
    results: {
      'Результат перевода': 'Результат переведення',
      'В пикселях': 'У пікселях',
      'В rem': 'У rem',
      'В em': 'У em',
      'В пунктах': 'У пунктах',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Корневой размер шрифта должен быть больше нуля': 'Кореневий розмір шрифту має бути більшим за нуль',
      'Размер шрифта родителя должен быть больше нуля': 'Розмір шрифту батька має бути більшим за нуль',
      'Выберите единицы из списка': 'Оберіть одиниці зі списку',
    },
  },
};
