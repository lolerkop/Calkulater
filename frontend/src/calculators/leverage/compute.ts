import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Позиция с плечом: размер, цена ликвидации и запас до неё.
//
//   позиция          = залог × плечо
//   единиц           = позиция / цена входа
//   цена ликвидации  = цена входа × (1 − 1/плечо + поддерживающая маржа)
//   падение до неё   = (вход − ликвидация) / вход × 100
//
// Обратная величина плеча и есть весь запас: при пятикратном плече позиция
// теряет весь залог, подешевев на двадцать процентов, при двадцатикратном —
// на пять. Поддерживающая маржа сдвигает ликвидацию ещё ближе к цене входа,
// потому что биржа закрывает позицию не в нуль, а немного раньше.
//
// Плечо меньше единицы отклоняется: это не позиция, а частично невложенный
// залог, и формула ликвидации для него смысла не имеет.
export const compute: CalcFunction = (inputs) => {
  const equity = toNumber(inputs.equity);
  const leverage = toNumber(inputs.leverage);
  const entry = toNumber(inputs.entry);
  const maintenancePct = toNumber(inputs.maintenancePct);

  const fail = (message: string) => ({
    primary: { label: 'Размер позиции', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(equity > 0)) return fail('Залог должен быть больше нуля');
  if (!(leverage >= 1)) return fail('Плечо не может быть меньше единицы');
  if (!(entry > 0)) return fail('Цена входа должна быть больше нуля');
  if (!(maintenancePct >= 0 && maintenancePct < 100)) return fail('Поддерживающая маржа должна быть от нуля до ста процентов');

  const position = equity * leverage;
  const liquidation = entry * (1 - 1 / leverage + maintenancePct / 100);
  const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

  return {
    primary: { label: 'Размер позиции', value: money(position) },
    secondary: [
      { label: 'Единиц позиции', value: formatMeasure(position / entry, fmtNumber) },
      { label: 'Цена ликвидации', value: money(liquidation), accent: 'red' },
      { label: 'Падение до ликвидации', value: `${fmtNumber(((entry - liquidation) / entry) * 100, 2)}%` },
      { label: 'Залог', value: money(equity) },
    ],
  };
};
