import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
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
  const mode = toStr(inputs.mode, 'fromNew');
  const oldSalary = toNumber(inputs.oldSalary);

  const primaryLabel = mode === 'fromPct' ? 'Новая зарплата' : 'Изменение';
  const fail = (message: string) => ({
    primary: { label: primaryLabel, value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(oldSalary > 0)) return fail('Прежняя зарплата должна быть больше нуля');

  const newSalary = mode === 'fromPct'
    ? oldSalary * (1 + toNumber(inputs.raisePct) / 100)
    : toNumber(inputs.newSalary);
  if (!(newSalary > 0)) return fail('Новая зарплата должна быть больше нуля');

  const money = (value: number) => `${fmtNumber(value, 2)} ₽`;
  const percent = (newSalary / oldSalary - 1) * 100;
  const rows = [
    { label: 'Разница', value: money(newSalary - oldSalary), accent: percent >= 0 ? 'green' as const : 'red' as const },
    { label: 'Было', value: money(oldSalary) },
    { label: 'Стало', value: money(newSalary) },
    { label: 'Множитель', value: formatStatistic(newSalary / oldSalary, fmtNumber) },
  ];

  return mode === 'fromPct'
    ? { primary: { label: 'Новая зарплата', value: money(newSalary) }, secondary: rows }
    : { primary: { label: 'Изменение', value: `${fmtNumber(percent, 2)}%` }, secondary: rows };
};
