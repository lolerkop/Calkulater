import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';

// Штукатурка: сухая смесь по площади и толщине слоя.
//
// Расход смеси — редактируемое поле, а не зашитый факт о материале: у гипсовых,
// цементных и известковых составов он разный, и производитель пишет свой на мешке.
// Значение по умолчанию 8,5 кг/м² на миллиметр слоя — типичная гипсовая смесь,
// и оно названо допущением прямо на странице, а не спрятано в справочнике.

const kg = (value: number): string => `${fmtNumber(value, 2)} кг`;
// Мешок нельзя купить дробным, поэтому округление всегда вверх. Шум двоичной
// арифметики срезается до округления: иначе ровно укладывающаяся масса дала бы
// лишний мешок.
const bags = (mass: number, bagWeight: number): number => Math.ceil(Number((mass / bagWeight).toFixed(6)));

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'area');
  const thickness = toNumber(inputs.thickness);
  const consumption = toNumber(inputs.consumption);
  const bagWeight = toNumber(inputs.bagWeight);
  const fail = (message: string) => ({
    primary: { label: 'Масса сухой смеси', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  const area = mode === 'dimensions'
    ? toNumber(inputs.length) * toNumber(inputs.height)
    : toNumber(inputs.area);

  if (!(area > 0)) return fail('Площадь должна быть больше нуля');
  if (!(thickness > 0)) return fail('Толщина слоя должна быть больше нуля');
  if (!(consumption > 0)) return fail('Расход смеси должен быть больше нуля');
  if (!(bagWeight > 0)) return fail('Вес мешка должен быть больше нуля');

  const mass = area * thickness * consumption;
  return {
    primary: { label: 'Масса сухой смеси', value: kg(mass) },
    secondary: [
      { label: 'Мешков', value: `${fmtNumber(bags(mass, bagWeight), 0)} шт` },
      { label: 'Расход на м²', value: kg(thickness * consumption) },
      { label: 'Площадь', value: `${fmtNumber(area, 2)} м²` },
    ],
  };
};
