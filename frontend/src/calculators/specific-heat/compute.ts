import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Теплота нагрева: Q = c·m·ΔT.
//
// Изменение температуры ЗНАКОВОЕ, и это не оплошность: охлаждение — такой же
// законный случай, как нагрев, и отрицательная энергия означает отданное тепло,
// а не ошибку ввода. Отвергается только нулевой перепад при поиске массы:
// делить на него нечего.
//
// Отличие от теплопередачи через слой: та страница считает ПОТОК тепла сквозь
// конструкцию в ваттах, здесь — КОЛИЧЕСТВО тепла на нагрев тела в джоулях.
// Первое зависит от теплопроводности и толщины, второе — от массы и вещества.
//
// Фазовые переходы не входят: на плавление и кипение уходит теплота, при
// которой температура не меняется вовсе, и формула её не видит.
const MODE_LABEL: Record<string, string> = {
  energy: 'Энергия',
  deltaT: 'Изменение температуры',
  mass: 'Масса',
};
const MODE_UNIT: Record<string, string> = { energy: 'Дж', deltaT: 'К', mass: 'кг' };

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'energy');
  const mass = toNumber(inputs.mass);
  const c = toNumber(inputs.c);
  const dt = toNumber(inputs.dt);
  const q = toNumber(inputs.q);
  const label = MODE_LABEL[mode] ?? MODE_LABEL.energy;
  const fail = (message: string) => ({
    primary: { label, value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  const m = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  if (!(c > 0)) return fail('Удельная теплоёмкость должна быть больше нуля');
  let value: number;
  let energy: number;
  let kilograms: number;
  let delta: number;
  if (mode === 'deltaT') {
    if (!(mass > 0)) return fail('Масса должна быть больше нуля');
    value = q / (c * mass);
    energy = q;
    kilograms = mass;
    delta = value;
  } else if (mode === 'mass') {
    if (dt === 0) return fail('Изменение температуры не может быть нулевым: делить на него нечего');
    value = q / (c * dt);
    // Знаковый перепад законен и намеренно разрешён — но лишь ВМЕСТЕ с энергией
    // того же знака: подведённое тепло греет, отведённое охлаждает. Если знаки
    // разошлись, масса выходит отрицательной, а такой массы не бывает. Режимы
    // энергии и перепада это не затрагивает: там отрицательный ответ осмыслен.
    if (!(value > 0)) return fail('Энергия и изменение температуры должны быть одного знака');
    energy = q;
    kilograms = value;
    delta = dt;
  } else {
    if (!(mass > 0)) return fail('Масса должна быть больше нуля');
    value = c * mass * dt;
    energy = value;
    kilograms = mass;
    delta = dt;
  }

  return {
    primary: { label, value: m(value, MODE_UNIT[mode] ?? 'Дж') },
    secondary: [
      { label: 'В киловатт-часах', value: m(energy / 3_600_000, 'кВт·ч') },
      { label: 'Масса', value: m(kilograms, 'кг') },
      { label: 'Изменение температуры', value: m(delta, 'К') },
      { label: 'Удельная теплоёмкость', value: m(c, 'Дж/(кг·К)') },
    ],
  };
};
