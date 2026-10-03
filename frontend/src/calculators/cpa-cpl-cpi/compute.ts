import type { CalcFunction } from '../../lib/types';
import { fmtNumber, parseLocalizedNumber } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';

const MODE_LABELS: Record<string, string> = {
  cpa: 'CPA — цена действия', cpl: 'CPL — цена заявки', cpi: 'CPI — цена установки',
};
const number = (value: unknown): number | null => typeof value === 'number' || typeof value === 'string' ? parseLocalizedNumber(value) : null;
const money = (value: number): string => `${value > 0 && (value < 1e-7 || value >= 1e21) ? formatQuantity(value, fmtNumber) : fmtNumber(value, 2)} ₽`;

export const compute: CalcFunction = (inputs) => {
  const mode = inputs.mode === undefined ? 'cpa' : inputs.mode;
  const validMode = typeof mode === 'string' && Object.hasOwn(MODE_LABELS, mode);
  const label = validMode ? MODE_LABELS[mode as string] : MODE_LABELS.cpa;
  const fail = (message: string) => ({
    primary: { label, value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (!validMode) return fail('Неизвестный вид действия');
  const cost = number(inputs.cost);
  const actions = number(inputs.actions);
  if (cost === null) return fail('Бюджет должен быть конечным числом');
  if (!(cost > 0)) return fail('Бюджет должен быть больше нуля');
  if (actions === null || !Number.isSafeInteger(actions)) return fail('Число действий должно быть целым в допустимом диапазоне');
  if (!(actions > 0)) return fail('Число действий должно быть больше нуля');
  const per = cost / actions;
  // Divide before scaling: cost * 1000 could overflow despite a finite row.
  const per1000 = per * 1000;
  if (!Number.isFinite(per) || !(per > 0) || !Number.isFinite(per1000) || !(per1000 > 0)) return fail('Результат вне допустимого диапазона');
  return {
    primary: { label, value: money(per) },
    secondary: [
      { label: 'Бюджет', value: money(cost) },
      { label: 'Действий', value: fmtNumber(actions, 0) },
      { label: 'На тысячу действий', value: money(per1000) },
    ],
  };
};
