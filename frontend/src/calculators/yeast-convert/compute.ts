import { choice } from '../../lib/platform/financeWave14Input';
import { number as toNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Calculator-owned approximate mass ratios; product-specific substitutions may differ.
const TO_FRESH: Record<string, number> = {
  fresh: 1,
  active: 1 / 3,
  instant: 1 / 4,
};

export const compute: CalcFunction = (inputs) => {
  const value = toNumber(inputs.value);
  const from = choice(inputs.from, ['fresh', 'active', 'instant'] as const, 'fresh');
  const to = choice(inputs.to, ['fresh', 'active', 'instant'] as const, 'instant');
  const fail = (message: string) => ({
    primary: { label: 'Нужно дрожжей', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (from === null || to === null) return fail('Выберите вид дрожжей из списка');
  if (value === null) return fail('Введите корректные числовые данные');
  const fromFactor = TO_FRESH[from];
  const toFactor = TO_FRESH[to];
  if (fromFactor === undefined || toFactor === undefined) return fail('Выберите вид дрожжей из списка');
  if (!(value > 0)) return fail('Масса должна быть больше нуля');
  if (from === to) return fail('Выберите разные виды дрожжей');

  const fresh = value / fromFactor;
  const result = fresh * toFactor;

  if (![fresh, result, fresh * TO_FRESH.active, fresh * TO_FRESH.instant].every(v => validOutput(v, true))) return fail('Результат вне допустимого диапазона');
  return {
    note: 'Использована выбранная модель 1 : 1/3 : 1/4 по массе. Инструкция производителя может задавать другую замену; подъёмная сила и время расстойки не измеряются.',
    primary: { label: 'Нужно дрожжей', value: `${formatMeasure(result, fmtNumber)} г` },
    secondary: [
      { label: 'В пересчёте на прессованные', value: `${formatMeasure(fresh, fmtNumber)} г` },
      { label: 'Сухие активные', value: `${formatMeasure(fresh * TO_FRESH.active, fmtNumber)} г` },
      { label: 'Быстродействующие', value: `${formatMeasure(fresh * TO_FRESH.instant, fmtNumber)} г` },
      { label: 'Соотношение', value: formatMeasure(toFactor / fromFactor, fmtNumber) },
    ],
  };
};
