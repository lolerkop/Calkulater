import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';

// Перевод между западной и южноазиатской шкалами названий чисел.
//
// В индийской системе счёт идёт не тройками, а по-другому: после тысячи стоит
// лакх — сто тысяч, а после него крор — десять миллионов. Поэтому «два крора»
// это не «два миллиона», а двадцать, и запись 1,00,00,000 группируется иначе,
// чем 10,000,000.
//
// Показ через `formatQuantity`: миллиарды в единицах выходят за 10¹², а лакхи
// от единицы — ниже 10⁻⁴, и обычная запись обратила бы их в ноль.
const SCALES: Record<string, number> = {
  unit: 1,
  thousand: 1e3,
  lakh: 1e5,
  million: 1e6,
  crore: 1e7,
  billion: 1e9,
};

export const compute: CalcFunction = (inputs) => {
  const value = toNumber(inputs.value);
  const from = toStr(inputs.from, 'lakh');
  const to = toStr(inputs.to, 'million');
  const fail = (message: string) => ({
    primary: { label: 'Результат', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  const q = (v: number) => formatQuantity(v, fmtNumber);

  if (!(value > 0)) return fail('Значение должно быть больше нуля');
  const fromK = SCALES[from];
  const toK = SCALES[to];
  if (!fromK || !toK) return fail('Неизвестная шкала');

  const units = value * fromK;
  return {
    primary: { label: 'Результат', value: q(units / toK) },
    secondary: [
      { label: 'В единицах', value: q(units) },
      { label: 'В лакхах', value: q(units / SCALES.lakh) },
      { label: 'В крорах', value: q(units / SCALES.crore) },
      { label: 'Отношение шкал', value: q(fromK / toK) },
    ],
  };
};
