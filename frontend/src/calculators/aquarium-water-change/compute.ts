import { number as toNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Сколько воды готовить для подмены в аквариуме.
//
//   чистый объём = объём аквариума × (1 − доля грунта и декора)
//   подмена      = чистый объём × доля подмены
//
// Поправка на вытеснение задаётся пользователем. Результат определяет
// количество подготавливаемой воды, но не выбирает режим подмены и не
// рассчитывает дозу средства: её определяет инструкция конкретного продукта.

export const compute: CalcFunction = (inputs) => {
  const volume = toNumber(inputs.volume);
  const changePct = toNumber(inputs.changePct);
  const decorPct = toNumber(inputs.decorPct);

  const fail = (message: string) => ({
    primary: { label: 'Объём подмены', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (volume === null || changePct === null || decorPct === null) return fail('Введите корректные числовые данные');

  if (!(volume > 0)) return fail('Объём аквариума должен быть больше нуля');
  if (!(changePct > 0 && changePct <= 100)) return fail('Доля подмены должна быть больше нуля и не больше ста процентов');
  if (!(decorPct >= 0 && decorPct < 100)) return fail('Доля грунта и декора должна быть от нуля до ста процентов');

  const net = volume * (1 - decorPct / 100);
  const changed = net * (changePct / 100);
  const remain = net * (1 - changePct / 100);
  if (!validOutput(net, true) || !validOutput(changed, true) || !validOutput(remain)) return fail('Результат вне допустимого диапазона');
  const litres = (value: number) => `${formatMeasure(value, fmtNumber)} л`;

  return {
    primary: { label: 'Объём подмены', value: litres(changed) },
    secondary: [
      { label: 'Чистый объём воды', value: litres(net) },
      { label: 'Останется', value: litres(remain) },
      { label: 'Объём аквариума', value: litres(volume) },
    ],
  };
};
