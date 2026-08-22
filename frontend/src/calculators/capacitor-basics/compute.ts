import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Конденсатор: Q = C·U и энергия поля E = C·U²/2.
//
// Ёмкость задаётся в микрофарадах, а заряд в микрокулонах — те единицы, что
// напечатаны на корпусе и стоят в даташите. Внутри расчёта они согласованы:
// микрофарады на вольты дают микрокулоны без переводного множителя, а энергия
// требует перевода в фарады, потому что джоуль определён через них.
//
// Отличие от ёмкости аккумулятора: там ампер-часы — это запас ЗАРЯДА для
// длительной отдачи, здесь фарады — способность накопить заряд при данном
// напряжении. Величины разной природы, и путать их — обычная ошибка.
const MODE_LABEL: Record<string, string> = {
  charge: 'Заряд',
  voltage: 'Напряжение',
  capacitance: 'Ёмкость',
};
const MODE_UNIT: Record<string, string> = { charge: 'мкКл', voltage: 'В', capacitance: 'мкФ' };

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'charge');
  const c = toNumber(inputs.c);
  const v = toNumber(inputs.v);
  const q = toNumber(inputs.q);
  const label = MODE_LABEL[mode] ?? MODE_LABEL.charge;
  const fail = (message: string) => ({
    primary: { label, value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  const m = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  let value: number;
  let farads: number;
  let volts: number;
  if (mode === 'voltage') {
    if (!(c > 0)) return fail('Ёмкость должна быть больше нуля');
    value = q / c;
    farads = c;
    volts = value;
  } else if (mode === 'capacitance') {
    if (v === 0) return fail('Напряжение не может быть нулевым: делить на него нечего');
    value = q / v;
    farads = value;
    volts = v;
  } else {
    if (!(c > 0)) return fail('Ёмкость должна быть больше нуля');
    value = c * v;
    farads = c;
    volts = v;
  }
  const energy = (farads * 1e-6 * volts * volts) / 2;

  return {
    primary: { label, value: m(value, MODE_UNIT[mode] ?? 'мкКл') },
    secondary: [
      { label: 'Энергия поля', value: m(energy, 'Дж') },
      { label: 'Ёмкость', value: m(farads, 'мкФ') },
      { label: 'Напряжение', value: m(volts, 'В') },
      { label: 'Заряд', value: m(farads * volts, 'мкКл') },
    ],
  };
};
