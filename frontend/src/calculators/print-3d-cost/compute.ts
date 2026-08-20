import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// Себестоимость печати на 3D-принтере.
//
// Пластик считается не «по катушке», а долей от неё: деталь весом 85 г из
// катушки за 1800 ₽ стоит столько, сколько весит, — поэтому цена грамма выводится
// из цены и веса катушки, а не спрашивается отдельно. Электричество берётся от
// мощности принтера и времени печати; амортизация и наценка необязательны и
// появляются в результате, только если заданы.
//
// Наценка применяется к полной себестоимости — пластику, энергии и амортизации
// вместе, — а не к одному пластику: иначе она не покрывала бы время работы.

const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

export const compute: CalcFunction = (inputs) => {
  const grams = toNumber(inputs.grams);
  const spoolPrice = toNumber(inputs.spoolPrice);
  const spoolWeight = toNumber(inputs.spoolWeight);
  const hours = toNumber(inputs.hours);
  const powerW = toNumber(inputs.powerW);
  const kwhPrice = toNumber(inputs.kwhPrice);
  const wearPerHour = toNumber(inputs.wearPerHour);
  const markupPct = toNumber(inputs.markupPct);

  const fail = (message: string) => ({
    primary: { label: 'Себестоимость печати', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(grams > 0)) return fail('Вес детали должен быть больше нуля');
  if (!(spoolWeight > 0)) return fail('Вес катушки должен быть больше нуля');
  if (!(hours > 0)) return fail('Время печати должно быть больше нуля');
  if (spoolPrice < 0 || powerW < 0 || kwhPrice < 0 || wearPerHour < 0 || markupPct < 0) {
    return fail('Значение не может быть отрицательным');
  }

  const gramPrice = spoolPrice / spoolWeight;
  const material = grams * gramPrice;
  const kwh = (powerW / 1000) * hours;
  const energy = kwh * kwhPrice;
  const wear = wearPerHour * hours;
  const subtotal = material + energy + wear;
  const total = subtotal * (1 + markupPct / 100);

  return {
    primary: { label: 'Себестоимость печати', value: money(total) },
    secondary: [
      { label: 'Пластик', value: money(material) },
      { label: 'Электричество', value: money(energy) },
      ...(wear > 0 ? [{ label: 'Амортизация принтера', value: money(wear) }] : []),
      ...(markupPct > 0 ? [{ label: 'Наценка', value: money(total - subtotal) }] : []),
      { label: 'Израсходовано энергии', value: `${fmtNumber(kwh, 2)} кВт·ч` },
      { label: 'Цена грамма пластика', value: money(gramPrice) },
    ],
  };
};
