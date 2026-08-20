import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// Воронка email-рассылки: доставляемость, открываемость и два вида кликабельности.
//
//   доставляемость = доставлено / отправлено × 100
//   открываемость  = открыто    / ДОСТАВЛЕНО × 100
//   кликабельность = кликов     / ДОСТАВЛЕНО × 100
//   кликов на открытие = кликов / ОТКРЫТО    × 100
//
// Знаменатели различаются намеренно. Открываемость и кликабельность считаются
// от доставленных, а не от отправленных: письмо, не дошедшее до ящика, не имело
// шанса быть открытым, и включать его в знаменатель значит наказывать текст за
// работу почтового сервера. А вот отношение кликов к ОТКРЫТИЯМ отвечает на
// отдельный вопрос — насколько содержание письма убеждает того, кто его уже читает.
//
// Воронка обязана сужаться: доставленных не больше отправленных, открытых не
// больше доставленных, кликов не больше открытий. Нарушение этого порядка —
// ошибка выгрузки, а не необычная кампания.
export const compute: CalcFunction = (inputs) => {
  const sent = toNumber(inputs.sent);
  const delivered = toNumber(inputs.delivered);
  const opened = toNumber(inputs.opened);
  const clicked = toNumber(inputs.clicked);

  const fail = (message: string) => ({
    primary: { label: 'Доставляемость', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(sent > 0)) return fail('Число отправленных писем должно быть больше нуля');
  if (!(delivered >= 0 && delivered <= sent)) return fail('Доставлено не может быть больше, чем отправлено');
  if (!(opened >= 0 && opened <= delivered)) return fail('Открыто не может быть больше, чем доставлено');
  if (!(clicked >= 0 && clicked <= opened)) return fail('Кликов не может быть больше, чем открытий');

  const pct = (value: number) => `${fmtNumber(value, 2)}%`;

  return {
    primary: { label: 'Доставляемость', value: pct((delivered / sent) * 100) },
    secondary: [
      { label: 'Открываемость', value: pct(delivered ? (opened / delivered) * 100 : 0) },
      { label: 'Кликабельность', value: pct(delivered ? (clicked / delivered) * 100 : 0) },
      ...(opened > 0 ? [{ label: 'Кликов на открытие', value: pct((clicked / opened) * 100) }] : []),
    ],
  };
};
