import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';

// Цена целевого действия: CPA, CPL или CPI.
//
//   цена действия = бюджет / число действий
//
// Арифметика у трёх показателей одна, различается только то, что считают
// действием: любое целевое действие (CPA), заявку или лид (CPL), установку
// приложения (CPI). Режим меняет подпись результата, а не формулу, и это
// сознательно: три отдельных калькулятора с одинаковым делением были бы
// тремя копиями одной страницы.
//
// Цена за тысячу действий стоит рядом потому, что закупка часто обсуждается
// именно в этих единицах, а переводить в уме — источник ошибок на порядок.
const MODE_LABELS: Record<string, string> = {
  cpa: 'CPA — цена действия',
  cpl: 'CPL — цена заявки',
  cpi: 'CPI — цена установки',
};

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'cpa');
  const cost = toNumber(inputs.cost);
  const actions = toNumber(inputs.actions);
  const label = MODE_LABELS[mode] ?? MODE_LABELS.cpa;

  const fail = (message: string) => ({
    primary: { label, value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(cost > 0)) return fail('Бюджет должен быть больше нуля');
  if (!(actions > 0)) return fail('Число действий должно быть больше нуля');

  const per = cost / actions;
  const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

  return {
    primary: { label, value: money(per) },
    secondary: [
      { label: 'Бюджет', value: money(cost) },
      { label: 'Действий', value: fmtNumber(actions, 0) },
      { label: 'На тысячу действий', value: money(per * 1000) },
    ],
  };
};
