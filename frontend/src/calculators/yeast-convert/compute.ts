import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Пересчёт трёх видов дрожжей.
//
// Набор коэффициентов принадлежит калькулятору и состоит из трёх чисел:
// прессованные приняты за единицу, сухие активные — треть от их массы,
// быстродействующие — четверть. Это устоявшаяся пекарская пропорция, а не
// норматив и не данные производителя: она следует из влажности прессованных
// дрожжей около 70 процентов.
//
// Все три строки печатаются всегда, потому что рецепты пишут в разных видах, и
// пересчитывать дважды неудобно.
const TO_FRESH: Record<string, number> = {
  fresh: 1,
  active: 1 / 3,
  instant: 1 / 4,
};

export const compute: CalcFunction = (inputs) => {
  const value = toNumber(inputs.value);
  const from = toStr(inputs.from, 'fresh');
  const to = toStr(inputs.to, 'instant');
  const fail = (message: string) => ({
    primary: { label: 'Нужно дрожжей', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  const fromFactor = TO_FRESH[from];
  const toFactor = TO_FRESH[to];
  if (fromFactor === undefined || toFactor === undefined) return fail('Выберите вид дрожжей из списка');
  if (!(value > 0)) return fail('Масса должна быть больше нуля');
  if (from === to) return fail('Выберите разные виды дрожжей');

  const fresh = value / fromFactor;
  const result = fresh * toFactor;

  return {
    primary: { label: 'Нужно дрожжей', value: `${formatMeasure(result, fmtNumber)} г` },
    secondary: [
      { label: 'В пересчёте на прессованные', value: `${formatMeasure(fresh, fmtNumber)} г` },
      { label: 'Сухие активные', value: `${formatMeasure(fresh * TO_FRESH.active, fmtNumber)} г` },
      { label: 'Быстродействующие', value: `${formatMeasure(fresh * TO_FRESH.instant, fmtNumber)} г` },
      { label: 'Соотношение', value: formatMeasure(toFactor / fromFactor, fmtNumber) },
    ],
  };
};
