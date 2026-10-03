import type { CalcFunction } from '../../lib/types';


// Перевод между Unix-временем и датой.
//
// Только UTC. Часовой пояс браузера сюда не попадает намеренно: одно и то же
// число должно давать одну и ту же дату у всех, иначе ссылкой с результатом
// нельзя было бы поделиться. Поэтому дата собирается методами setUTCFullYear/setUTCHours (без сдвига лет 1–99), а не
// через локальный конструктор, и разбирается методами getUTC*.
//
// Календарь григорианский, секунды координации не учитываются — так же, как их
// не учитывает само Unix-время. Текущее время не используется: результат
// зависит только от введённого значения.
const WEEKDAYS = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
const pad = (value: number, width = 2) => String(Math.abs(value)).padStart(width, '0');

const MIN_TS = -62135596800;
const MAX_TS = 253402300799;

const iso = (date: Date) =>
  `${pad(date.getUTCFullYear(), 4)}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`
  + ` ${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:${pad(date.getUTCSeconds())} UTC`;

import { MODE } from '../../lib/platform/measurementScalar';
import { integerInput } from '../../lib/platform/strictNumericInput';


export const compute: CalcFunction = (inputs) => {
  const mode = (typeof inputs.mode === 'string' ? inputs.mode : inputs.mode === undefined ? 'toDate' : '');

  const fail = (message: string) => ({
    primary: { label: 'Результат', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (mode !== 'toDate' && mode !== 'toTimestamp') return fail(MODE);
  let seconds: number;

  if (mode === 'toDate') {
    const raw = integerInput(inputs.timestamp) ?? NaN;
    if (!Number.isInteger(raw)) return fail('Секунды задаются целым числом');
    seconds = raw;
  } else {
    const date = typeof inputs.date === 'string' ? inputs.date.trim() : '';
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
    if (!match) return fail('Дата задаётся в формате ГГГГ-ММ-ДД');
    const hour = integerInput(inputs.hour) ?? NaN;
    const minute = integerInput(inputs.minute) ?? NaN;
    const second = integerInput(inputs.second) ?? NaN;
    if (![hour, minute, second].every(Number.isFinite)) return fail('Часы, минуты и секунды задаются целыми числами');
    if (hour < 0 || hour > 23) return fail('Часы задаются в диапазоне от 0 до 23');
    if (minute < 0 || minute > 59) return fail('Минуты задаются в диапазоне от 0 до 59');
    if (second < 0 || second > 59) return fail('Секунды задаются в диапазоне от 0 до 59');
    const year = Number(match[1]), month = Number(match[2]), day = Number(match[3]);
    if (year < 1 || year > 9999 || month < 1 || month > 12 || day < 1 || day > 31) return fail('Введите существующую дату григорианского календаря');
    const utc = new Date(0);
    utc.setUTCFullYear(year, month - 1, day);
    utc.setUTCHours(hour, minute, second, 0);
    if (utc.getUTCFullYear() !== year || utc.getUTCMonth() + 1 !== month || utc.getUTCDate() !== day) return fail('Введите существующую дату григорианского календаря');
    seconds = utc.getTime() / 1000;
  }

  if (seconds < MIN_TS || seconds > MAX_TS) return fail('Значение выходит за поддерживаемый диапазон дат');

  const date = new Date(seconds * 1000);

  return {
    primary: {
      label: mode === 'toDate' ? 'Дата и время UTC' : 'Unix-время',
      value: mode === 'toDate' ? iso(date) : String(seconds),
    },
    secondary: [
      { label: 'Unix-время, секунды', value: String(seconds) },
      { label: 'Дата и время UTC', value: iso(date) },
      { label: 'Дата в ISO 8601', value: `${iso(date).slice(0, 10)}T${iso(date).slice(11, 19)}Z` },
      { label: 'День недели', value: WEEKDAYS[date.getUTCDay()] },
    ],
  };
};
