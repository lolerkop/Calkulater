import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';

// Стоимость обмена валюты при ЗАДАННОМ курсе.
//
// Курс здесь — поле ввода, а не биржевые данные: живые котировки остаются у
// конвертера валют, а этот калькулятор отвечает на другой вопрос — во сколько
// обходится сам обмен. Поэтому обменник со «нулевой комиссией» и широким
// спредом здесь честно сравнивается с обменником, берущим процент.
//
// Спред и комиссия удерживаются на РАЗНЫХ шагах и потому не складываются:
// спред портит курс, а комиссия берётся уже от суммы по испорченному курсу.
// Сложение их в один процент завысило бы потери.
//
// Направление меняет и формулу, и смысл суммы: при продаже вводится валюта и
// умножается на курс, при покупке вводится сумма в рублях и делится на него.

const rub = (value: number) => `${fmtNumber(value, 2)} ₽`;

export const compute: CalcFunction = (inputs) => {
  const direction = toStr(inputs.direction, 'sell');
  const amount = toNumber(inputs.amount);
  const rate = toNumber(inputs.rate);
  const feePct = toNumber(inputs.feePct);
  const feeFixed = toNumber(inputs.feeFixed);
  const spreadPct = toNumber(inputs.spreadPct);

  const fail = (message: string) => ({
    primary: { label: 'К получению', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(amount > 0)) return fail('Сумма должна быть больше нуля');
  if (!(rate > 0)) return fail('Курс должен быть больше нуля');
  if (feePct < 0 || feeFixed < 0 || spreadPct < 0) return fail('Комиссия и спред не могут быть отрицательными');
  if (feePct >= 100) return fail('Комиссия должна быть меньше 100 %');
  if (spreadPct >= 100) return fail('Спред должен быть меньше 100 %');

  const selling = direction === 'sell';
  // Валюта РЕЗУЛЬТАТА зависит от направления: продавая валюту, посетитель
  // получает рубли, покупая — саму валюту. Поэтому суффикс не может быть общим,
  // а удержания приводятся к той же стороне, что и результат: иначе комиссия
  // окажется в рублях рядом с результатом в валюте, и строки станут несравнимы.
  const out = (value: number) => (selling ? rub(value) : `${fmtNumber(value, 2)} ед. валюты`);
  const effective = selling ? rate * (1 - spreadPct / 100) : rate * (1 + spreadPct / 100);
  const ideal = selling ? amount * rate : amount / rate;
  const beforeFee = selling ? amount * effective : amount / effective;

  const afterFixed = selling ? amount * effective - feeFixed : amount - feeFixed;
  const feeAmountSource = selling ? amount * effective * (feePct / 100) : (amount - feeFixed) * (feePct / 100);
  const feeAmount = selling ? feeAmountSource : feeAmountSource / effective;
  const fixedShown = selling ? feeFixed : feeFixed / effective;
  const received = selling ? afterFixed - feeAmountSource : (afterFixed * (1 - feePct / 100)) / effective;
  const cost = ideal - received;

  return {
    primary: { label: 'К получению', value: out(received) },
    secondary: [
      { label: 'Курс с учётом спреда', value: fmtNumber(effective, 4) },
      { label: 'По номинальному курсу', value: out(ideal) },
      { label: 'Комиссия', value: out(feeAmount) },
      ...(feeFixed > 0 ? [{ label: 'Фиксированный сбор', value: out(fixedShown) }] : []),
      { label: 'Потери на спреде', value: out(Math.abs(ideal - beforeFee)) },
      { label: 'Полная стоимость обмена', value: out(cost) },
      { label: 'Доля потерь', value: `${fmtNumber((cost / ideal) * 100, 2)}%` },
    ],
  };
};
