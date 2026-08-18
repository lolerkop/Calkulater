import type { CalcFunction } from '../../lib/types';
import { fmtInt, toNumber } from '../../lib/format';

// Деление с остатком.
//
// Соглашение о знаке выбрано и зафиксировано: частное усекается к нулю, а
// остаток наследует знак делимого — так же, как оператор % в JavaScript и в
// школьной записи «−17 = 5 · (−3) + (−2)». Языки расходятся именно здесь:
// Python вернул бы остаток 3 со знаком делителя. Молчаливо взять поведение
// платформы нельзя, поэтому оно проверяется отдельными эталонными случаями
// с отрицательными числами.
export const compute: CalcFunction = (inputs) => {
  const a = toNumber(inputs.a);
  const b = toNumber(inputs.b);

  const fail = (message: string) => ({
    primary: { label: 'Остаток', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!Number.isInteger(a) || !Number.isInteger(b)) return fail('Делимое и делитель должны быть целыми');
  if (b === 0) return fail('Делитель не может быть нулём');

  const quotient = Math.trunc(a / b);
  const remainder = a - b * quotient;

  return {
    primary: { label: 'Остаток', value: fmtInt(remainder) },
    secondary: [
      { label: 'Частное', value: fmtInt(quotient) },
      { label: 'Проверка', value: `${fmtInt(a)} = ${fmtInt(b)} × ${fmtInt(quotient)} + ${fmtInt(remainder)}` },
      { label: 'Делится нацело', value: remainder === 0 ? 'Да' : 'Нет', accent: remainder === 0 ? 'green' : 'neutral' },
    ],
  };
};
