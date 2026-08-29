import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Was gesucht ist',
      'levels': 'Pegel, dB',
      'p1': 'Ausgangswert',
      'p2': 'Endwert',
      'kind': 'Art der Größe',
    },
    options: {
      'sum': 'Summe der Pegel',
      'ratio': 'Verhältnis in Dezibel',
      'power': 'Leistung',
      'amplitude': 'Amplitude',
    },
    results: {
      'Уровень': 'Pegel',
      'Источников': 'Quellen',
      'Самый громкий': 'Lauteste Quelle',
      'Прибавка к самому громкому': 'Zuwachs zur lautesten',
      'Арифметическая сумма (так НЕ считают)': 'Arithmetische Summe (so wird NICHT gerechnet)',
      'Во сколько раз по мощности': 'Verhältnis der Leistung',
      'Во сколько раз по амплитуде': 'Verhältnis der Amplitude',
      'Исходная величина': 'Ausgangswert',
      'Конечная величина': 'Endwert',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'дБ': 'dB',
      'Исходная величина должна быть больше нуля': 'Der Ausgangswert muss größer als null sein',
      'Конечная величина должна быть больше нуля': 'Der Endwert muss größer als null sein',
      'Введите хотя бы один уровень в децибелах': 'Trage mindestens einen Pegel in Dezibel ein',
    },
  },
  en: {
    fields: {
      mode: 'What to find', levels: 'Levels, dB', p1: 'Initial value', p2: 'Final value',
      kind: 'Quantity type',
    },
    options: { sum: 'sum of levels', ratio: 'ratio in decibels', power: 'power', amplitude: 'amplitude' },
    results: {
      'Уровень': 'Level', 'Источников': 'Sources', 'Самый громкий': 'Loudest source',
      'Прибавка к самому громкому': 'Added to the loudest',
      'Арифметическая сумма (так НЕ считают)': 'Arithmetic sum (NOT how it works)',
      'Во сколько раз по мощности': 'Power ratio', 'Во сколько раз по амплитуде': 'Amplitude ratio',
      'Исходная величина': 'Initial value', 'Конечная величина': 'Final value',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'дБ': 'dB',
      'Исходная величина должна быть больше нуля': 'The initial value must be greater than zero',
      'Конечная величина должна быть больше нуля': 'The final value must be greater than zero',
      'Введите хотя бы один уровень в децибелах': 'Enter at least one level in decibels',
    },
  },
  uk: {
    fields: {
      mode: 'Що знайти', levels: 'Рівні, дБ', p1: 'Початкова величина', p2: 'Кінцева величина',
      kind: 'Тип величини',
    },
    options: { sum: 'сума рівнів', ratio: 'відношення в децибелах', power: 'потужність', amplitude: 'амплітуда' },
    results: {
      'Уровень': 'Рівень', 'Источников': 'Джерел', 'Самый громкий': 'Найгучніше джерело',
      'Прибавка к самому громкому': 'Додано до найгучнішого',
      'Арифметическая сумма (так НЕ считают)': 'Арифметична сума (так НЕ рахують)',
      'Во сколько раз по мощности': 'У скільки разів за потужністю',
      'Во сколько раз по амплитуде': 'У скільки разів за амплітудою',
      'Исходная величина': 'Початкова величина', 'Конечная величина': 'Кінцева величина',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'дБ': 'дБ',
      'Исходная величина должна быть больше нуля': 'Початкова величина має бути більшою за нуль',
      'Конечная величина должна быть больше нуля': 'Кінцева величина має бути більшою за нуль',
      'Введите хотя бы один уровень в децибелах': 'Введіть щонайменше один рівень у децибелах',
    },
  },
};
