import type { CalcFunction } from '../../lib/types';
import { toNumber, toStr } from '../../lib/format';

// Перевод между Unix-временем и датой.
//
// Только UTC. Часовой пояс браузера сюда не попадает намеренно: одно и то же
// число должно давать одну и ту же дату у всех, иначе ссылкой с результатом
// нельзя было бы поделиться. Поэтому дата собирается через Date.UTC, а не
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
  `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`
  + ` ${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:${pad(date.getUTCSeconds())} UTC`;

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'toDate');

  const fail = (message: string) => ({
    primary: { label: 'Результат', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  let seconds: number;

  if (mode === 'toDate') {
    const raw = toNumber(inputs.timestamp);
    if (!Number.isInteger(raw)) return fail('Секунды задаются целым числом');
    seconds = raw;
  } else {
    const date = toStr(inputs.date, '');
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
    if (!match) return fail('Дата задаётся в формате ГГГГ-ММ-ДД');
    const hour = Math.round(toNumber(inputs.hour));
    const minute = Math.round(toNumber(inputs.minute));
    const second = Math.round(toNumber(inputs.second));
    if (hour < 0 || hour > 23) return fail('Часы задаются в диапазоне от 0 до 23');
    if (minute < 0 || minute > 59) return fail('Минуты задаются в диапазоне от 0 до 59');
    if (second < 0 || second > 59) return fail('Секунды задаются в диапазоне от 0 до 59');
    seconds = Math.round(
      Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3]), hour, minute, second) / 1000,
    );
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
