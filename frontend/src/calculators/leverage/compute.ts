import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { number as toNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import { formatMeasure } from '../../lib/platform/measurement';

// Учебный линейный лонг: поддерживающая сумма фиксирована от начальной
// стоимости позиции; это не формула конкретной биржи или маржинального режима.
//
//   позиция          = залог × плечо
//   единиц           = позиция / цена входа
//   цена ликвидации  = цена входа × (1 − 1/плечо + поддерживающая маржа)
//   падение до неё   = (вход − ликвидация) / вход × 100
//
// Обратная величина плеча и есть весь запас: при пятикратном плече позиция
// теряет весь залог, подешевев на двадцать процентов, при двадцатикратном —
// на пять. Поддерживающая маржа сдвигает ликвидацию ещё ближе к цене входа,
// согласно выбранному фиксированному порогу в этой модели.
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

  if (equity === null || leverage === null || entry === null || maintenancePct === null) return fail('Введите корректные числовые данные');

  if (!(equity > 0)) return fail('Залог должен быть больше нуля');
  if (!(leverage >= 1)) return fail('Плечо не может быть меньше единицы');
  if (!(entry > 0)) return fail('Цена входа должна быть больше нуля');
  if (!(maintenancePct >= 0 && maintenancePct < 100)) return fail('Поддерживающая маржа должна быть от нуля до ста процентов');
  if (maintenancePct / 100 >= 1 / leverage) return fail('Поддерживающая маржа должна быть меньше начальной доли залога');

  const position = equity * leverage;
  const liquidation = entry * (1 - 1 / leverage + maintenancePct / 100);
  const units = position / entry;
  const drop = (1 / leverage - maintenancePct / 100) * 100;
  if (![position, liquidation, units, drop].every(v => validOutput(v)) || position <= 0 || units <= 0 || (leverage > 1 && (liquidation <= 0 || liquidation >= entry))) return fail('Результат вне допустимого диапазона');
  const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

  return {
    primary: { label: 'Размер позиции', value: money(position) },
    secondary: [
      { label: 'Единиц позиции', value: formatMeasure(units, fmtNumber) },
      { label: 'Цена ликвидации', value: money(liquidation), accent: 'red' },
      { label: 'Падение до ликвидации', value: `${fmtNumber(drop, 2)}%` },
      { label: 'Залог', value: money(equity) },
    ],
  };
};
