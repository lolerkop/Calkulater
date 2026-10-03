import type { CalculatorLocalization, CalculatorLocaleBundle, TranslatedLocale } from '../../lib/platform/types';
import { marketingScalarValues } from '../../lib/platform/marketingScalarLocalization';

const previousLocalization: CalculatorLocalization = {
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
  es: {
    fields: {
      "lines": "Turnos: inicio, fin y descanso en minutos",
      "rate": "Tarifa por hora",
      "normal": "Jornada estándar del periodo, horas",
    },
    options: {},
    results: {
      "Всего часов": "Horas totales",
      "Дней в табеле": "Días del parte",
      "В часах и минутах": "En horas y minutos",
      "Сверхурочных": "Horas extra",
      "Начислено": "Salario bruto",
      "Смены": "Turnos",
      "Начало": "Inicio",
      "Конец": "Fin",
      "Перерыв, мин": "Descanso, min",
      "Часов": "Horas",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "ч": "h",
      "мин": "min",
      "Ставка не может быть отрицательной": "La tarifa no puede ser negativa",
      "Норма часов не может быть отрицательной": "La jornada estándar no puede ser negativa",
      "В строке нужны начало и конец через запятую": "Cada línea necesita un inicio y un fin separados por coma",
      "Введите хотя бы одну строку вида «09:00,18:00,60»": "Introduce al menos una línea del tipo «09:00,18:00,60»",
    },
  },
};

const contractOverrides: Record<TranslatedLocale, CalculatorLocaleBundle> = {
  "en": {
    "fields": {},
    "values": {
      "Введите строки табеля текстом": "Enter the shift rows as text",
      "Время задаётся как 09:00": "Enter clock times in the form 09:00",
      "Перерыв задаётся целым числом минут": "Breaks must be whole nonnegative minutes",
      "Перерыв длиннее смены": "The break is longer than the shift"
    }
  },
  "uk": {
    "fields": {},
    "values": {
      "Введите строки табеля текстом": "Введіть рядки табеля текстом",
      "Время задаётся как 09:00": "Час задається у форматі 09:00",
      "Перерыв задаётся целым числом минут": "Перерва задається цілим невід’ємним числом хвилин",
      "Перерыв длиннее смены": "Перерва довша за зміну"
    }
  },
  "de": {
    "fields": {},
    "values": {
      "Введите строки табеля текстом": "Gib die Schichtzeilen als Text ein",
      "Время задаётся как 09:00": "Uhrzeiten werden im Format 09:00 eingegeben",
      "Перерыв задаётся целым числом минут": "Pausen müssen ganze nicht negative Minuten sein",
      "Перерыв длиннее смены": "Die Pause ist länger als die Schicht"
    }
  },
  "es": {
    "fields": {},
    "values": {
      "Введите строки табеля текстом": "Introduce las filas de turnos como texto",
      "Время задаётся как 09:00": "Introduce las horas con el formato 09:00",
      "Перерыв задаётся целым числом минут": "Los descansos deben ser minutos enteros no negativos",
      "Перерыв длиннее смены": "El descanso es más largo que el turno"
    }
  }
};

export const localization: CalculatorLocalization = Object.fromEntries(
  Object.entries(contractOverrides).map(([locale, additions]) => {
    const key = locale as keyof typeof marketingScalarValues;
    const prior = previousLocalization[key];
    const nativeFields = Object.fromEntries(Object.entries(prior?.fields ?? {}).map(([name, label]) => [name, label.replace(/, [₽$₴€%]$/, '')]));
    return [locale, { ...prior, fields: { ...nativeFields, ...additions.fields }, values: { ...prior?.values, ...marketingScalarValues[key], ...additions.values } }];
  }),
);
