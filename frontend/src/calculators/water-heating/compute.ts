import { number as toNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Время нагрева воды: Q = m·c·ΔT, затем время = Q / полезная мощность.
//
// Однофазная жидкая вода в приближении обычного давления: 1л≈1кг,
// c≈4186 Дж/(кг·К), без плавления и испарения. КПД — доля мощности,
// передаваемой воде. Q — полезное тепло; расход источника отдельно Q/η.
// Теплоёмкость бака и изменение свойств с температурой не моделируются.

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

  if (volume === null || tFrom === null || tTo === null || power === null || efficiency === null) return fail('Введите корректные числовые данные');
  if (tFrom < 0 || tFrom > 100 || tTo < 0 || tTo > 100) return fail('Модель жидкой воды допускает температуры от 0 до 100 °C');

  if (!(volume > 0)) return fail('Объём воды должен быть больше нуля');
  if (!(power > 0)) return fail('Мощность нагревателя должна быть больше нуля');
  if (!(efficiency > 0) || !(efficiency <= 100)) return fail('КПД задаётся от 0 до 100 процентов');
  if (!(tTo > tFrom)) return fail('Конечная температура должна быть выше начальной');

  const energy = volume * SPECIFIC_HEAT * (tTo - tFrom);
  const useful = (power * KW * efficiency) / 100;
  const seconds = energy / useful;
  const sourceEnergy = energy / (efficiency / 100);
  const totalMinutes = Math.round(seconds / MINUTES_IN_HOUR);
  if (![energy, useful, seconds, sourceEnergy, energy / J_IN_KWH, sourceEnergy / J_IN_KWH, seconds / SECONDS_IN_HOUR, useful / KW].every(v => validOutput(v, true)) || !Number.isSafeInteger(totalMinutes)) return fail('Результат вне допустимого диапазона');

  return {
    primary: { label: 'Время нагрева', value: `${formatMeasure(seconds / SECONDS_IN_HOUR, fmtNumber)} ч` },
    secondary: [
      {
        label: 'Часы и минуты',
        value: `${Math.floor(totalMinutes / MINUTES_IN_HOUR)} ч ${totalMinutes % MINUTES_IN_HOUR} мин`,
      },
      { label: 'Энергия', value: `${formatMeasure(energy / J_IN_KWH, fmtNumber)} кВт·ч` },
      { label: 'Энергия источника', value: `${formatMeasure(sourceEnergy / J_IN_KWH, fmtNumber)} кВт·ч` },
      { label: 'Полезная мощность', value: `${formatMeasure(useful / KW, fmtNumber)} кВт` },
      { label: 'Перепад температур', value: `${formatMeasure(tTo - tFrom, fmtNumber)} К` },
    ],
  };
};
