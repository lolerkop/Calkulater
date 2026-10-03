import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Чисто резистивная модель при 20 °C и cos φ = 1.
// R = ρL/S — сопротивление ОДНОЙ жилы в один конец. Для двух проводов
// ΔU = 2IR и Pпот = 2I²R; для трёх симметричных фаз ΔU = √3IR,
// но суммарные потери тепла равны 3I²R. Множители напряжения и тепла различны.
// ρ — фиксированные приблизительные коэффициенты этой модели, а не
// нормативная таблица сопротивлений кабеля при рабочей температуре.

const RHO: Record<string, number> = { copper: 0.0175, aluminium: 0.0282 };

export const compute: CalcFunction = (inputs) => {
  const current = toNumber(inputs.current, Number.NaN);
  const length = toNumber(inputs.length, Number.NaN);
  const section = toNumber(inputs.section, Number.NaN);
  const voltage = toNumber(inputs.voltage, Number.NaN);
  const material = toStr(inputs.material, 'copper');
  const phase = toStr(inputs.phase, 'single');
  const fail = (message: string) => ({
    primary: { label: 'Падение напряжения', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  const rho = RHO[material];
  if (!Object.hasOwn(RHO, material)) return fail('Неизвестный материал проводника');
  if (phase !== 'single' && phase !== 'three') return fail('Неизвестная схема питания');
  if (['current', 'length', 'section', 'voltage'].some((key) => typeof inputs[key] === 'boolean') || ![current, length, section, voltage].every(Number.isFinite)) return fail('Введите конечные числа для выбранного режима');
  if (current < 0 || length < 0 || !(section > 0) || !(voltage > 0)) {
    return fail('Ток и длина неотрицательны; сечение и напряжение должны быть больше нуля');
  }

  const k = phase === 'single' ? 2 : Math.sqrt(3);
  const resistance = (rho * length) / section;
  const drop = k * resistance * current;
  const loss = (phase === 'single' ? 2 : 3) * resistance * current * current;
  if (![resistance, drop, loss, drop / voltage].every(Number.isFinite)) return fail('Результат выходит за числовой диапазон');
  if (drop > voltage) return fail('Падение превышает напряжение питания: проверьте ток, длину и сечение');
  const measure = (x: number) => formatMeasure(x, fmtNumber);

  return {
    primary: { label: 'Падение напряжения', value: `${measure(drop)} В` },
    secondary: [
      { label: 'Доля от номинала', value: `${fmtNumber((drop / voltage) * 100, 2)} %` },
      { label: 'Напряжение у нагрузки', value: `${measure(voltage - drop)} В` },
      { label: 'Сопротивление одной жилы', value: `${measure(resistance)} Ом` },
      { label: 'Потери мощности', value: `${measure(loss)} Вт` },
    ],
    note: 'Резистивная модель при 20 °C и cos φ = 1. Нагрев, реактивность и контакты не учтены; сопротивление указано для одной жилы в один конец.',
  };
};
