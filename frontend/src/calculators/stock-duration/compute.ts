import type { CalcFunction } from '../../lib/types';
import { fmtNumber, preserveNonZero, toNumber, toStr } from '../../lib/format';

// Запас продукта: на сколько дней хватит при известном суточном расходе.
//
// Речь о ТОВАРНОМ запасе — корм, крупа, топливо, расходники, — а не о ценных
// бумагах. Единицы не пересчитываются: запас и расход задаются в одних и тех же,
// и калькулятор работает с их отношением.
const days = (value: number): string => {
  const text = fmtNumber(preserveNonZero(value, 1), 1);
  return text.includes(',') ? text.replace(/0+$/, '').replace(/,$/, '') : text;
};

export const compute: CalcFunction = (inputs) => {
  const stock = toNumber(inputs.stock);
  const perDay = toNumber(inputs.perDay);
  const reserve = toNumber(inputs.reserveDays);
  const fail = (message: string) => ({
    primary: { label: 'Хватит на', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (stock < 0) return fail('Запас не может быть отрицательным');
  if (!(perDay > 0)) return fail('Расход в сутки должен быть больше нуля');

  const total = stock / perDay;
  const secondary = [{ label: 'Расход в сутки', value: days(perDay) }];
  if (reserve > 0) {
    const order = total - reserve;
    secondary.push({
      label: 'Заказать через',
      value: order >= 0 ? `${days(order)} дней` : 'Страховой запас больше срока — заказывать нужно уже сейчас',
    });
  }

  return { primary: { label: 'Хватит на', value: `${days(total)} дней` }, secondary };
};
