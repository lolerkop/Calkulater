import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Время нагрева воды: Q = m·c·ΔT, затем время = Q / полезная мощность.
//
// Удельная теплоёмкость воды 4186 Дж/(кг·К) — постоянная, а КПД вынесен в поле:
// у электрического ТЭНа он около 99 %, у бойлера с теплопотерями через корпус
// ниже, у газовой колонки заметно ниже. Подставлять чужое значение нельзя.
//
// Литр воды считается килограммом: при бытовых температурах плотность
// отличается от единицы меньше чем на четыре процента, и это меньше разброса
// самого КПД.
const SPECIFIC_HEAT = 4186;
const KW = 1000;
const J_IN_KWH = 3.6e6;
const SECONDS_IN_HOUR = 3600;
const MINUTES_IN_HOUR = 60;

export const compute: CalcFunction = (inputs) => {
  const volume = toNumber(inputs.volume);
  const tFrom = toNumber(inputs.tFrom);
  const tTo = toNumber(inputs.tTo);
  const power = toNumber(inputs.power);
  const efficiency = toNumber(inputs.efficiency);
  const fail = (message: string) => ({
    primary: { label: 'Время нагрева', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(volume > 0)) return fail('Объём воды должен быть больше нуля');
  if (!(power > 0)) return fail('Мощность нагревателя должна быть больше нуля');
  if (!(efficiency > 0) || !(efficiency <= 100)) return fail('КПД задаётся от 0 до 100 процентов');
  if (!(tTo > tFrom)) return fail('Конечная температура должна быть выше начальной');

  const energy = volume * SPECIFIC_HEAT * (tTo - tFrom);
  const useful = (power * KW * efficiency) / 100;
  const seconds = energy / useful;
  const totalMinutes = Math.round(seconds / MINUTES_IN_HOUR);

  return {
    primary: { label: 'Время нагрева', value: `${formatMeasure(seconds / SECONDS_IN_HOUR, fmtNumber)} ч` },
    secondary: [
      {
        label: 'Часы и минуты',
        value: `${Math.floor(totalMinutes / MINUTES_IN_HOUR)} ч ${totalMinutes % MINUTES_IN_HOUR} мин`,
      },
      { label: 'Энергия', value: `${formatMeasure(energy / J_IN_KWH, fmtNumber)} кВт·ч` },
      { label: 'Полезная мощность', value: `${formatMeasure(useful / KW, fmtNumber)} кВт` },
      { label: 'Перепад температур', value: `${formatMeasure(tTo - tFrom, fmtNumber)} К` },
    ],
  };
};
