import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Перевод времени между двумя смещениями UTC.
//
// СОЗНАТЕЛЬНОЕ СУЖЕНИЕ, названное и в тексте страницы: здесь нет базы часовых
// поясов, нет перехода на летнее время и нет истории правил. Смещения вводятся
// числами, и калькулятор сравнивает ровно их. Загружать базу IANA ради одного
// калькулятора значило бы взять на себя её ежегодное обновление, а показывать
// устаревшее правило хуже, чем не показывать никакого.
//
// Смещение может быть дробным: UTC+5:30 в Индии и UTC+5:45 в Непале — не
// исключения, а действующие пояса, поэтому разница считается в минутах, а не
// в целых часах.
//
// Сутки переносятся явно: 22:00 плюс шесть часов дают 04:00 СЛЕДУЮЩЕГО дня, и
// сдвиг показан отдельной строкой, иначе время выглядело бы тем же самым днём.

const MINUTES_IN_DAY = 1440;
const clock = (minutes: number) =>
  `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;

export const compute: CalcFunction = (inputs) => {
  const fromOffset = toNumber(inputs.fromOffset);
  const toOffset = toNumber(inputs.toOffset);
  const hour = toNumber(inputs.hour);
  const minute = toNumber(inputs.minute);

  const fail = (message: string) => ({
    primary: { label: 'Время в точке назначения', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (fromOffset < -12 || fromOffset > 14 || toOffset < -12 || toOffset > 14) {
    return fail('Смещение UTC должно быть от −12 до +14');
  }
  if (hour < 0 || hour > 23 || minute < 0 || minute > 59) return fail('Введите время в пределах суток');
  if (!Number.isInteger(hour) || !Number.isInteger(minute)) return fail('Часы и минуты должны быть целыми');

  const difference = toOffset - fromOffset;
  const source = hour * 60 + minute;
  const total = source + Math.round(difference * 60);
  const shift = Math.floor(total / MINUTES_IN_DAY);
  const local = ((total % MINUTES_IN_DAY) + MINUTES_IN_DAY) % MINUTES_IN_DAY;

  const shiftText = shift === 0 ? 'те же сутки' : shift > 0 ? 'следующие сутки' : 'предыдущие сутки';

  return {
    primary: { label: 'Время в точке назначения', value: clock(local) },
    secondary: [
      { label: 'Разница', value: `${formatMeasure(difference, fmtNumber)} ч` },
      { label: 'Сдвиг суток', value: fmtNumber(shift, 0) },
      { label: 'Календарный день', value: shiftText },
      { label: 'Исходное время', value: clock(source) },
    ],
  };
};
