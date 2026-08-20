import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Суточная норма воды: базовая часть от массы плюс надбавка за нагрузку.
//
//   базовая  = масса × 0,033 л            ≈ 33 мл на килограмм
//   надбавка = минуты / 30 × 0,35 л       ≈ 350 мл на каждые полчаса нагрузки
//   итого    = (базовая + надбавка) × 1,1 в жару
//
// Три числа — это принятые ориентиры, а не измерения конкретного организма:
// потребность зависит от питания, здоровья и климата сильнее, чем от массы.
// Поэтому множитель жары применяется ко ВСЕЙ сумме, а не только к надбавке:
// в жару растёт и фоновая потеря влаги, не только потовая при нагрузке.
//
// Стаканы стоят рядом потому, что литрами воду никто не пьёт, а «одиннадцать
// стаканов» — то число, которое можно удержать в голове до вечера.
export const compute: CalcFunction = (inputs) => {
  const weight = toNumber(inputs.weight);
  const activityMinutes = toNumber(inputs.activityMinutes);
  // Переключатель приходит строкой 'yes'; locked-случаи Phase 17P несут
  // настоящее булево. Принимаются обе формы: расчёт не должен зависеть от того,
  // пришло значение из формы, из адреса или из эталонного случая.
  const hotWeather = inputs.hotWeather === 'yes' || inputs.hotWeather === true;

  const fail = (message: string) => ({
    primary: { label: 'Норма воды в сутки', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(weight > 0)) return fail('Масса тела должна быть больше нуля');
  if (activityMinutes < 0) return fail('Минуты нагрузки не могут быть отрицательными');

  const base = weight * 0.033;
  const extra = (activityMinutes / 30) * 0.35;
  const total = (base + extra) * (hotWeather ? 1.1 : 1);
  const num = (value: number) => formatMeasure(value, fmtNumber);

  return {
    primary: { label: 'Норма воды в сутки', value: `${num(total)} л` },
    secondary: [
      { label: 'Базовая норма', value: `${num(base)} л` },
      { label: 'Надбавка за нагрузку', value: `${num(extra)} л` },
      { label: 'Стаканов по 250 мл', value: num(total / 0.25) },
    ],
  };
};
