import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { number as toNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import { choice } from '../../lib/platform/financeWave14Input';
import { formatStatistic } from '../../lib/platform/measurement';

// Повышение зарплаты в двух направлениях.
//
//   по новой сумме: процент = (стало / было − 1) × 100
//   по проценту:    стало   = было × (1 + процент / 100)
//
// Второе направление — прямое обращение первого и нужно чаще, чем кажется:
// на переговорах обсуждают процент, а решение принимают по сумме на руки,
// и перевод в уме между ними — источник разочарований.
//
// Понижение здесь законно и показывается отрицательным процентом: скрывать
// его нулём значило бы врать о том, что произошло.
export const compute: CalcFunction = (inputs) => {
  const mode = choice(inputs.mode, ['fromNew', 'fromPct'], 'fromNew');
  const oldSalary = toNumber(inputs.oldSalary);

  const primaryLabel = mode === 'fromPct' ? 'Новая зарплата' : 'Изменение';
  const fail = (message: string) => ({
    primary: { label: primaryLabel, value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (mode === null) return fail('Неизвестный режим расчёта');
  const active = toNumber(inputs[mode === 'fromPct' ? 'raisePct' : 'newSalary']);
  if (oldSalary === null || active === null) return fail('Введите корректные числовые данные');
  if (!(oldSalary > 0)) return fail('Прежняя зарплата должна быть больше нуля');

  const newSalary = mode === 'fromPct'
    ? oldSalary * (1 + active / 100)
    : active;
  if (!(newSalary > 0)) return fail('Новая зарплата должна быть больше нуля');

  const money = (value: number) => `${fmtNumber(value, 2)} ₽`;
  const ratio = newSalary / oldSalary;
  const delta = newSalary - oldSalary;
  const percent = mode === 'fromPct' ? active : delta / oldSalary * 100;
  if (![newSalary, ratio, delta, percent].every(v => validOutput(v)) || ratio <= 0 || (mode === 'fromPct' && active !== 0 && delta === 0)) return fail('Результат вне допустимого диапазона');
  const rows = [
    { label: 'Разница', value: money(delta), accent: percent >= 0 ? 'green' as const : 'red' as const },
    { label: 'Было', value: money(oldSalary) },
    { label: 'Стало', value: money(newSalary) },
    { label: 'Множитель', value: formatStatistic(ratio, fmtNumber) },
  ];

  return mode === 'fromPct'
    ? { primary: { label: 'Новая зарплата', value: money(newSalary) }, secondary: rows }
    : { primary: { label: 'Изменение', value: `${fmtNumber(percent, 2)}%` }, secondary: rows };
};
