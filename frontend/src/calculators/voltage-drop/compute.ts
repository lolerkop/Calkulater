import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Падение напряжения в линии.
//
// Удельное сопротивление берётся при 20 °C: медь 0,0175 и алюминий 0,0282
// Ом·мм²/м — общепринятые расчётные величины, а не подобранные коэффициенты.
// Нагретый проводник сопротивляется сильнее, поэтому результат — оценка снизу,
// и об этом сказано в заметке, а не умолчано.
//
// Множитель схемы разный: в однофазной ток идёт туда и обратно по двум жилам,
// поэтому длина удваивается; в трёхфазной симметричной нагрузке обратного
// провода нет, и множитель равен корню из трёх. Спутать их — верный способ
// ошибиться в полтора раза.

const RHO: Record<string, number> = { copper: 0.0175, aluminium: 0.0282 };

export const compute: CalcFunction = (inputs) => {
  const current = toNumber(inputs.current);
  const length = toNumber(inputs.length);
  const section = toNumber(inputs.section);
  const voltage = toNumber(inputs.voltage);
  const material = toStr(inputs.material, 'copper');
  const phase = toStr(inputs.phase, 'single');
  const fail = (message: string) => ({
    primary: { label: 'Падение напряжения', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  const rho = RHO[material];
  if (rho === undefined) return fail('Неизвестный материал проводника');
  if (phase !== 'single' && phase !== 'three') return fail('Неизвестная схема питания');
  if (!(current > 0) || !(length > 0) || !(section > 0) || !(voltage > 0)) {
    return fail('Ток, длина, сечение и напряжение должны быть больше нуля');
  }

  const k = phase === 'single' ? 2 : Math.sqrt(3);
  const resistance = (rho * length) / section;
  const drop = k * resistance * current;
  const measure = (x: number) => formatMeasure(x, fmtNumber);

  return {
    primary: { label: 'Падение напряжения', value: `${measure(drop)} В` },
    secondary: [
      { label: 'Доля от номинала', value: `${fmtNumber((drop / voltage) * 100, 2)} %` },
      { label: 'Напряжение у нагрузки', value: `${measure(voltage - drop)} В` },
      { label: 'Сопротивление линии', value: `${measure(resistance)} Ом` },
      { label: 'Потери мощности', value: `${measure(k * resistance * current * current)} Вт` },
    ],
    note: 'Удельное сопротивление взято при 20 °C. Нагретый проводник сопротивляется сильнее, поэтому в работе падение будет чуть больше расчётного.',
  };
};
