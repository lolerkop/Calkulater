import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'lines': 'Schichten: Beginn, Ende, Pause in Minuten',
      'rate': 'Stundensatz',
      'normal': 'Sollstunden für den Zeitraum',
    },
    results: {
      'Всего часов': 'Stunden insgesamt',
      'Дней в табеле': 'Tage auf dem Zettel',
      'В часах и минутах': 'In Stunden und Minuten',
      'Сверхурочных': 'Überstunden',
      'Начислено': 'Bruttolohn',
      'Проверьте данные': 'Prüfe die Werte',
      'Смены': 'Schichten',
      'Начало': 'Beginn',
      'Конец': 'Ende',
      'Перерыв, мин': 'Pause, min',
      'Часов': 'Stunden',
    },
    values: {
      'ч': 'h',
      'мин': 'min',
      'Ставка не может быть отрицательной': 'Der Stundensatz kann nicht negativ sein',
      'Норма часов не может быть отрицательной': 'Die Sollstunden können nicht negativ sein',
      'В строке нужны начало и конец через запятую': 'In der Zeile werden Beginn und Ende durch ein Komma getrennt gebraucht',
      'Введите хотя бы одну строку вида «09:00,18:00,60»': 'Trage mindestens eine Zeile der Form „09:00,18:00,60“ ein',
    },
  },
  en: {
    fields: {
      lines: 'Shifts: start, end, break in minutes',
      rate: 'Hourly rate', normal: 'Standard hours for the period',
    },
    options: {},
    results: {
      'Всего часов': 'Total hours', 'Дней в табеле': 'Days on the sheet',
      'В часах и минутах': 'In hours and minutes', 'Сверхурочных': 'Overtime',
      'Начислено': 'Gross pay', 'Проверьте данные': 'Check the values',
      'Смены': 'Shifts', 'Начало': 'Start', 'Конец': 'End',
      'Перерыв, мин': 'Break, min', 'Часов': 'Hours',
    },
    values: {
      'ч': 'h', 'мин': 'min',
      'Ставка не может быть отрицательной': 'The rate cannot be negative',
      'Норма часов не может быть отрицательной': 'The standard hours cannot be negative',
      'В строке нужны начало и конец через запятую': 'A line needs a start and an end separated by a comma',
      'Введите хотя бы одну строку вида «09:00,18:00,60»': 'Enter at least one line such as 09:00,18:00,60',
    },
  },
  uk: {
    fields: {
      lines: 'Зміни: початок, кінець, перерва у хвилинах',
      rate: 'Ставка за годину', normal: 'Норма годин за період',
    },
    options: {},
    results: {
      'Всего часов': 'Усього годин', 'Дней в табеле': 'Днів у табелі',
      'В часах и минутах': 'У годинах і хвилинах', 'Сверхурочных': 'Понаднормових',
      'Начислено': 'Нараховано', 'Проверьте данные': 'Перевірте дані',
      'Смены': 'Зміни', 'Начало': 'Початок', 'Конец': 'Кінець',
      'Перерыв, мин': 'Перерва, хв', 'Часов': 'Годин',
    },
    values: {
      'ч': 'год', 'мин': 'хв', '₽': '₴',
      'Ставка не может быть отрицательной': 'Ставка не може бути відʼємною',
      'Норма часов не может быть отрицательной': 'Норма годин не може бути відʼємною',
      'В строке нужны начало и конец через запятую': 'У рядку потрібні початок і кінець через кому',
      'Введите хотя бы одну строку вида «09:00,18:00,60»': 'Введіть хоча б один рядок на кшталт 09:00,18:00,60',
    },
  },
};
