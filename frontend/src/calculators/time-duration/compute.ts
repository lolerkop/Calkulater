import type { CalcFunction } from '../../lib/types';
import { fmtInt, toNumber, toStr } from '../../lib/format';

// Продолжительность времени в трёх направлениях. Всё считается в минутах
// от полуночи, потому что так исчезают переносы через час и через сутки:
// остаётся один остаток по модулю 1440.
//
//   difference — от начала до конца; конец раньше начала означает переход
//                через полночь, а не ошибку;
//   add        — прибавить длительность к моменту;
//   subtract   — вычесть длительность из момента.
//
// Часы и минуты — отдельные числовые поля: нового типа поля не требуется,
// а дискретность проверяется округлением к целым.

const DAY = 1440;

const clampPart = (value: number, max: number) => {
  const whole = Math.trunc(value);
  return Number.isFinite(whole) ? Math.min(Math.max(whole, 0), max) : 0;
};

/** Приводит минуты к суточному кругу: −25 становится 1415. */
export const wrapDay = (minutes: number) => ((minutes % DAY) + DAY) % DAY;

const asClock = (minutes: number) =>
  `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'difference');
  const startMinutes = clampPart(toNumber(inputs.startHour), 23) * 60 + clampPart(toNumber(inputs.startMinute), 59);

  if (mode === 'difference') {
    const endMinutes = clampPart(toNumber(inputs.endHour), 23) * 60 + clampPart(toNumber(inputs.endMinute), 59);
    const span = wrapDay(endMinutes - startMinutes);
    return {
      primary: { label: 'Продолжительность', value: `${fmtInt(Math.floor(span / 60))} ч ${fmtInt(span % 60)} мин` },
      secondary: [
        { label: 'Всего минут', value: `${fmtInt(span)}` },
        { label: 'Начало', value: asClock(startMinutes) },
        { label: 'Окончание', value: asClock(endMinutes) },
        ...(endMinutes <= startMinutes && span > 0
          ? [{ label: 'Переход через полночь', value: 'да' }]
          : []),
      ],
    };
  }

  const shift = clampPart(toNumber(inputs.spanHour), 999) * 60 + clampPart(toNumber(inputs.spanMinute), 59);
  const result = wrapDay(mode === 'subtract' ? startMinutes - shift : startMinutes + shift);
  const crossed = mode === 'subtract' ? startMinutes - shift < 0 : startMinutes + shift >= DAY;

  return {
    primary: { label: 'Время', value: asClock(result) },
    secondary: [
      { label: 'Исходное время', value: asClock(startMinutes) },
      { label: 'Длительность', value: `${fmtInt(Math.floor(shift / 60))} ч ${fmtInt(shift % 60)} мин` },
      ...(crossed
        ? [{ label: mode === 'subtract' ? 'Предыдущие сутки' : 'Следующие сутки', value: 'да' }]
        : []),
    ],
  };
};
