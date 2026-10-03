import type { CalcFunction } from '../../lib/types';
import { integer as readInteger } from '../../lib/platform/scalarInputDisplay';
import { displayNumber } from '../../lib/platform/financeDisplay';

export const compute: CalcFunction = (inputs) => {
  const sent = readInteger(inputs.sent);
  const delivered = readInteger(inputs.delivered);
  const opened = readInteger(inputs.opened);
  const clicked = readInteger(inputs.clicked);

  const fail = (message: string) => ({
    primary: { label: 'Доставляемость', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (sent === null || delivered === null || opened === null || clicked === null) return fail('Введите корректные числовые данные');

  if (!(sent > 0)) return fail('Число отправленных писем должно быть больше нуля');
  if (!(delivered >= 0 && delivered <= sent)) return fail('Доставлено не может быть больше, чем отправлено');
  if (!(opened >= 0 && opened <= delivered)) return fail('Открыто не может быть больше, чем доставлено');
  if (!(clicked >= 0 && clicked <= delivered)) return fail('Кликов не может быть больше, чем доставлено');

  const pct = (value: number) => `${displayNumber(value, 2)}%`;

  return {
    primary: { label: 'Доставляемость', value: pct((delivered / sent) * 100) },
    secondary: [
      ...(delivered > 0 ? [
        { label: 'Открываемость', value: pct((opened / delivered) * 100) },
        { label: 'Кликабельность', value: pct((clicked / delivered) * 100) },
      ] : []),
      ...(opened > 0 ? [{ label: 'Кликов на открытие', value: pct((clicked / opened) * 100) }] : []),
    ],
  };
};
