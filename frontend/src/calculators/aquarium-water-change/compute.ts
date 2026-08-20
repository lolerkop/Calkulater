import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Сколько воды готовить для подмены в аквариуме.
//
//   чистый объём = объём аквариума × (1 − доля грунта и декора)
//   подмена      = чистый объём × доля подмены
//
// Поправка на грунт и декор — не мелочь: у оформленного аквариума на сто
// литров паспортного объёма приходится порядка восьмидесяти пяти литров воды,
// и подмена, посчитанная от паспорта, окажется завышенной почти на пятую часть.
// Передозировка кондиционера считается по объёму воды, а не по объёму банки.
export const compute: CalcFunction = (inputs) => {
  const volume = toNumber(inputs.volume);
  const changePct = toNumber(inputs.changePct);
  const decorPct = toNumber(inputs.decorPct);

  const fail = (message: string) => ({
    primary: { label: 'Объём подмены', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(volume > 0)) return fail('Объём аквариума должен быть больше нуля');
  if (!(changePct > 0 && changePct <= 100)) return fail('Доля подмены должна быть больше нуля и не больше ста процентов');
  if (!(decorPct >= 0 && decorPct < 100)) return fail('Доля грунта и декора должна быть от нуля до ста процентов');

  const net = volume * (1 - decorPct / 100);
  const litres = (value: number) => `${formatMeasure(value, fmtNumber)} л`;

  return {
    primary: { label: 'Объём подмены', value: litres((net * changePct) / 100) },
    secondary: [
      { label: 'Чистый объём воды', value: litres(net) },
      { label: 'Останется', value: litres(net * (1 - changePct / 100)) },
      { label: 'Объём аквариума', value: litres(volume) },
    ],
  };
};
