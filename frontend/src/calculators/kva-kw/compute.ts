import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Полная, активная и реактивная мощность:
//
//   P = S·cosφ,  Q = √(S² − P²)
//
// Три величины, которые в быту называют одним словом «мощность», а платят и
// подбирают оборудование по разным. Генератор и ИБП маркируют в кВА — это
// ПОЛНАЯ мощность, предел по току. Нагрузка потребляет активную, в кВт, и
// именно она превращается в тепло и работу. Разница — реактивная мощность,
// которая ходит туда-обратно между сетью и нагрузкой, ничего не совершая, но
// занимая ток и сечение провода.
//
// Отсюда обычная ошибка: генератор «на 5 кВА» не выдаёт 5 кВт. При cosφ 0,8 он
// отдаёт 4 кВт, и оставшийся киловольт-ампер уходит в реактив.
//
// Коэффициент мощности строго в (0; 1]: нулевой означает нагрузку, не
// потребляющую активной мощности вовсе, и делить на него нечего; больше
// единицы он быть не может по определению.
const MODE_LABEL: Record<string, string> = {
  kva: 'Полная мощность',
  kw: 'Активная мощность',
};
const MODE_UNIT: Record<string, string> = { kva: 'кВА', kw: 'кВт' };

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'kva');
  const kw = toNumber(inputs.kw);
  const kva = toNumber(inputs.kva);
  const pf = toNumber(inputs.pf);
  const label = MODE_LABEL[mode] ?? MODE_LABEL.kva;
  const fail = (message: string) => ({
    primary: { label, value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  const m = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  if (!(pf > 0)) return fail('Коэффициент мощности должен быть больше нуля');
  if (pf > 1) return fail('Коэффициент мощности не может быть больше единицы');

  let apparent: number;
  let active: number;
  if (mode === 'kw') {
    apparent = kva;
    active = kva * pf;
  } else {
    active = kw;
    apparent = kw / pf;
  }
  const reactive = Math.sqrt(Math.max(apparent * apparent - active * active, 0));
  const value = mode === 'kw' ? active : apparent;

  return {
    primary: { label, value: m(value, MODE_UNIT[mode] ?? 'кВА') },
    secondary: [
      { label: 'Реактивная мощность', value: m(reactive, 'квар') },
      { label: 'Активная мощность', value: m(active, 'кВт') },
      { label: 'Полная мощность', value: m(apparent, 'кВА') },
      { label: 'Коэффициент мощности', value: formatMeasure(pf, fmtNumber) },
    ],
  };
};
